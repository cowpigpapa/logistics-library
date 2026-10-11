"""자료실 문서의 바깥 링크 목록(doc-links.json)을 만든다.

문서를 고친 뒤 다시 돌리면 된다:  python tools/doc_links.py
- *-docs/*.html 조각의 <a href="http..."> 전부
- 각 *-library.js의 OFFICIAL 배열(공식 자료 표)과 페이지 자체에 박힌 바깥 링크
- CTU는 문서 본문이 ctu-library.js 안에 있으므로 DOCS 항목별로 나눠 읽는다
문서 폴더와 주소(/library/<slug>/<id>)·제목은 *-library.js의 BASE·DOCS에서 읽는다.
결과는 /api/check-doc-links(링크 점검)와 /linkcheck(관리자 화면)가 읽는다. 비밀 정보는 없다.
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'doc-links.json'
SITE_HOSTS = ('logistics.onharu.app',)

HREF = re.compile(r'''href\s*=\s*(?:"([^"]*)"|'([^']*)')''', re.I)
STR = r"""'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`([^`]*)`"""


def js_string(m):
    raw = next(g for g in m.groups() if g is not None)
    return re.sub(r'\\(.)', r'\1', raw)


def constants(js):
    """const NAME = 'https://...'; 형태의 문자열 상수."""
    out = {}
    for m in re.finditer(r"const\s+([A-Z_][A-Z0-9_]*)\s*=\s*(?:" + STR + r")\s*;", js):
        out[m.group(1)] = next(g for g in m.groups()[1:] if g is not None)
    return out


def resolve(js, consts):
    """NAME + '...' 와 ${NAME} 를 실제 문자열로 바꾼 사본."""
    for name, value in consts.items():
        js = re.sub(r'\b' + name + r"\s*\+\s*'", "'" + value.replace('\\', '\\\\'), js)
        js = re.sub(r'\b' + name + r'\s*\+\s*"', '"' + value.replace('\\', '\\\\'), js)
        js = js.replace('${' + name + '}', value)
    return js


def clean(url):
    url = html.unescape(url).strip()
    if not re.match(r'https?://', url, re.I):
        return None
    host = re.sub(r'^https?://([^/?#:]+).*$', r'\1', url, flags=re.I).lower()
    if not host or host in SITE_HOSTS or '${' in url:
        return None
    return url


def urls_in(text):
    """href 값과, 따옴표로 싼 문자열 안의 맨 주소(OFFICIAL의 url: '...')."""
    found = [a or b for a, b in HREF.findall(text)]
    found += re.findall(r'''url:\s*['"`]([^'"`]+)['"`]''', text)
    return [u for u in (clean(x) for x in found) if u]


def block(js, name):
    """const NAME = [ ... ]; 의 대괄호 안쪽(문자열 안의 괄호는 건너뛴다)."""
    m = re.search(r'const\s+' + name + r'\s*=\s*\[', js)
    if not m:
        return '', -1, -1
    i, depth, quote = m.end(), 1, None
    while i < len(js) and depth:
        c = js[i]
        if quote:
            if c == '\\':
                i += 1
            elif c == quote:
                quote = None
        elif c in '\'"`':
            quote = c
        elif c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
        i += 1
    return js[m.end():i - 1], m.end(), i - 1


def doc_entries(docs_src):
    """DOCS 배열에서 (id, title, 시작 위치) 목록. 최상위 객체의 id만 센다."""
    out = []
    for m in re.finditer(r"\bid:\s*(?:" + STR + r")", docs_src):
        rest = docs_src[m.end():m.end() + 4000]
        t = re.search(r"\btitle:\s*(?:" + STR + r")", rest)
        out.append((js_string(m), js_string(t) if t else '', m.start()))
    return out


def page_title(html_file):
    try:
        t = re.search(r'<title>([^<]*)</title>', html_file.read_text(encoding='utf-8'))
        return html.unescape(t.group(1)).split(' · ')[0].strip() if t else ''
    except OSError:
        return ''


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    links = {}  # url -> {path: title}
    warnings = []

    def add(url, path, title):
        links.setdefault(url, {}).setdefault(path, title)

    for lib in sorted(ROOT.glob('*-library.js')):
        js = lib.read_text(encoding='utf-8')
        consts = constants(js)
        base = consts.get('BASE')
        page = ROOT / lib.name.replace('.js', '.html')
        if lib.name == 'ctu-library.js':
            base, page = '/library/ctu-code', ROOT / 'library.html'
        if not base:
            warnings.append(f'{lib.name}: BASE 없음, 건너뜀')
            continue
        cat_title = page_title(page) or base
        resolved = resolve(js, consts)
        docs_src, d0, d1 = block(resolved, 'DOCS')
        entries = doc_entries(docs_src)
        titles = {i: t for i, t, _ in entries}

        # 문서 조각 폴더: fetch(`/xx-docs/${doc.id}.html...`)
        folder = re.search(r"fetch\(`/([a-z0-9-]+-docs)/\$\{doc\.id\}\.html", js)
        if folder:
            for f in sorted((ROOT / folder.group(1)).glob('*.html')):
                doc_id = f.stem
                if doc_id not in titles:
                    warnings.append(f'{folder.group(1)}/{f.name}: DOCS에 없는 문서(제목 없이 넣음)')
                path = f'{base}/{doc_id}'
                for url in urls_in(f.read_text(encoding='utf-8')):
                    add(url, path, titles.get(doc_id) or doc_id)

        # 본문이 JS 안에 있는 문서(CTU 등): DOCS 항목 구간별로 나눈다.
        inline = set()
        if not folder and entries:
            for n, (doc_id, title, start) in enumerate(entries):
                end = entries[n + 1][2] if n + 1 < len(entries) else len(docs_src)
                for url in urls_in(docs_src[start:end]):
                    add(url, f'{base}/{doc_id}', title or doc_id)
                    inline.add(url)
            # DOCS.push({...})로 뒤에 붙는 문서
            for m in re.finditer(r'DOCS\.push\(\{', resolved):
                seg = resolved[m.end():m.end() + 20000]
                end = seg.find('\n  });')
                seg = seg[:end if end > 0 else len(seg)]
                idm = re.search(r"\bid:\s*(?:" + STR + r")", seg)
                tm = re.search(r"\btitle:\s*(?:" + STR + r")", seg)
                if idm:
                    for url in urls_in(seg):
                        add(url, f'{base}/{js_string(idm)}', js_string(tm) if tm else js_string(idm))
                        inline.add(url)

        # 공식 자료 표와 페이지 머리의 링크(DOCS 본문 밖) → 분류 첫 화면
        outside = resolved[:d0] + resolved[d1:] if d0 >= 0 else resolved
        for url in urls_in(outside):
            if url not in inline:
                add(url, base, f'{cat_title} — 첫 화면(공식 자료)')

    rows = [
        {'url': url, 'docs': [{'path': p, 'title': t} for p, t in sorted(docs.items())]}
        for url, docs in sorted(links.items())
    ]
    # 한 줄에 링크 하나: 다시 만들 때 git diff로 무엇이 늘고 줄었는지 바로 보인다.
    body = ',\n'.join(json.dumps(r, ensure_ascii=False) for r in rows)
    OUT.write_text('[\n' + body + '\n]\n', encoding='utf-8', newline='\n')
    hosts = {re.sub(r'^https?://([^/?#:]+).*$', r'\1', r['url']).lower() for r in rows}
    print(f'doc-links.json: 링크 {len(rows)}개, 호스트 {len(hosts)}곳, 문서 {len({d["path"] for r in rows for d in r["docs"]})}개')
    for w in warnings:
        print('  주의:', w)
    return 0


if __name__ == '__main__':
    sys.exit(main())
