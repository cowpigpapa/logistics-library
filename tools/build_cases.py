"""사고 사례 모음(/library/accident-cases)을 만든다: 카테고리마다 마지막 장 '사고 사례' 문서의 사례를 한 표로 모은다.
- 사례는 각 사례 문서의 '<h4>번호. 이름 — 요지 (연도, 장소)</h4>'와 바로 아래 '<li><b>구분</b>: 국내 · 해상 · 판결 · …</li>'에서 읽는다.
- 사례 제목에 id="c<번호>"가 없으면 붙인다(모음 표에서 그 사례로 바로 가는 주소).
- ac-docs/ac-all.html(표)과 accident-cases-library.js의 문서 제목·요약(건수)·DOCS_VERSION, 홈 카드의 건수를 고친다.
사례 문서를 고친 뒤 library_index.py가 이 스크립트를 먼저 부른다(따로 `python tools/build_cases.py`로 돌려도 된다)."""
import hashlib, html, json, re, sys
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))

HUB_SLUG = 'accident-cases'
HUB_JS = ROOT / 'accident-cases-library.js'
HUB_HTML = ROOT / 'accident-cases-library.html'
HUB_DOC = ROOT / 'ac-docs' / 'ac-all.html'
CARDS = ROOT / 'tools' / 'home-cards.html'
INDEX = ROOT / 'tools' / 'cases-index.json'   # prerender.py가 읽는다: 분야별 건수·사례 문서(문서마다 '사고 사례 보기' 링크)
HUB_URL = '/library/' + HUB_SLUG + '/ac-all'

H4 = re.compile(r'<h4((?:\s[^>]*)?)>(\d{1,3})\.\s(.*?)</h4>', re.S)
GUBUN = re.compile(r'<li><b>구분</b>:\s*(.*?)</li>', re.S)
E = html.escape


def strip(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip()


def menu_order():
    src = (ROOT / 'tools' / 'menu.py').read_text(encoding='utf-8')
    nav = src[src.index('NAV = ['):src.index('\n]\n', src.index('NAV = [')) + 2]
    ns = {}
    exec(nav, ns)
    return [(g, href, name) for g, items in ns['NAV'] for href, name, _ in items if href.startswith('/library/')]


def js_string(src, start, key):
    """src[start:]에서 처음 나오는 key: '...' 또는 "..." 값."""
    m = re.compile(key + r":\s*(['\"])((?:\\.|(?!\1).)*)\1", re.S).search(src, start)
    return m.group(2).replace('\\"', '"').replace("\\'", "'") if m else ''


def case_docs(js_src):
    m = re.search(r"title:\s*['\"]사고 사례['\"][^}]*?docs:\s*\[([^\]]*)\]", js_src)
    return re.findall(r"['\"]([^'\"]+)['\"]", m.group(1)) if m else []


def add_ids(markup):
    """번호 붙은 h4에 id="c<번호>"를 붙인다(이미 id가 있으면 그대로)."""
    def fix(m):
        attrs, num = m.group(1), m.group(2)
        if 'id=' in attrs:
            return m.group(0)
        return f'<h4 id="c{num}"{attrs}>{num}. {m.group(3)}</h4>'
    return H4.sub(fix, markup)


def parse_cases(markup):
    out = []
    heads = list(H4.finditer(markup))
    for i, m in enumerate(heads):
        end = heads[i + 1].start() if i + 1 < len(heads) else len(markup)
        g = GUBUN.search(markup, m.end(), end)
        if not g:
            continue
        text = strip(m.group(3))
        tail = re.search(r'\(([^()]*(?:\([^()]*\)[^()]*)*)\)\s*$', text)
        when = tail.group(1) if tail else ''
        core = text[:tail.start()].strip() if tail else text
        name, _, sub = core.partition(' — ')
        years = re.findall(r'(?<!\d)(1[89]\d\d|20\d\d)(?!\d)', when) or re.findall(r'(?<!\d)(1[89]\d\d|20\d\d)(?!\d)', text)
        id_m = re.search(r'id="([^"]+)"', m.group(1))
        out.append({'num': int(m.group(2)), 'anchor': id_m.group(1) if id_m else f'c{m.group(2)}', 'name': name.strip(), 'sub': sub.strip(),
                    'when': when, 'year': years[0] if years else '', 'gubun': strip(g.group(1))})
    return out


MODES = [('해상', ('해상', '선박', '컨테이너', '유조선', '벌크', '환적')), ('항공', ('항공', '특송', '화물기')),
         ('도로·철도', ('도로', '트럭', '화물차', '육상', '철도', '차량')),
         ('창고·항만·사업장', ('창고', '항만', '보관', '야적', '터미널', 'CFS', '공장', '사업장', '보세', '집하'))]
KINDS = [('판결·결정', ('판결', '결정', '법령해석', '평결')), ('처분·단속', ('처분', '단속', '고발', '억류', '수거', '수입 중단', '공식 발표', '과징금', '벌금')),
         ('사고', ('사고', '준사고', '공개 사례', 'P&I'))]


def classify(gubun):
    parts = [p.strip() for p in gubun.split(' · ')]
    first = parts[0] if parts else ''
    if first.startswith('국내·해외'):
        scope = ['국내', '해외']
    elif first.startswith('국내'):
        scope = ['국내']
    elif first.startswith('해외'):
        scope = ['해외']
    else:
        scope = []
    mode_txt = parts[1] if len(parts) > 1 else ''
    modes = [k for k, words in MODES if any(w in mode_txt for w in words)] or ['기타']
    kind_txt = parts[2] if len(parts) > 2 else ''
    kinds = [k for k, words in KINDS if any(w in kind_txt for w in words)] or ['기타']
    issue = next((p.split(':', 1)[1].strip() for p in parts if p.startswith('쟁점')), '')
    result = next((p.split(':', 1)[1].strip() for p in parts if p.startswith('결과')), '')
    cargo = parts[3] if len(parts) > 3 and not parts[3].startswith(('쟁점', '결과')) else ''
    return {'scope': scope, 'modes': modes, 'kinds': kinds, 'mode_txt': mode_txt, 'kind_txt': kind_txt,
            'issue': issue, 'result': result, 'cargo': cargo}


def collect():
    import prerender
    vercel = json.loads((ROOT / 'vercel.json').read_text(encoding='utf-8'))
    cats = {c['base']: c for c in prerender.categories(vercel)}
    groups, changed = [], []
    for g, href, name in menu_order():
        if href == '/library/' + HUB_SLUG or href not in cats:
            continue
        c = cats[href]
        js_path = Path(c['js'])
        js_src = js_path.read_text(encoding='utf-8')
        slug = href.split('/')[2]
        docs = []
        for doc_id in case_docs(js_src):
            pos = js_src.find(f"id: '{doc_id}'")
            short = js_string(js_src, pos, 'short') or js_string(js_src, pos, 'title').split(' — ')[0]
            if c['docs_dir']:
                path = Path(c['docs_dir']) / f'{doc_id}.html'
                markup = path.read_text(encoding='utf-8')
                fixed = add_ids(markup)
                if fixed != markup:
                    path.write_text(fixed, encoding='utf-8', newline='')
                    changed.append((js_path, path))
                cases = parse_cases(fixed)
            else:
                # CTU처럼 본문이 JS 안에 있는 문서: 그 문서의 body 템플릿 문자열만 고친다.
                b0 = js_src.index('body: `', pos) + len('body: `')
                b1 = js_src.index('`', b0)
                body = js_src[b0:b1]
                fixed = add_ids(body)
                if fixed != body:
                    js_src = js_src[:b0] + fixed + js_src[b1:]
                    js_path.write_text(js_src, encoding='utf-8', newline='')
                    changed.append((js_path, None))
                cases = parse_cases(fixed)
            for k in cases:
                k.update(classify(k['gubun']))
            docs.append({'id': doc_id, 'short': short, 'url': f'{href}/{doc_id}', 'cases': cases})
        if docs:
            groups.append({'group': g, 'slug': slug, 'name': name, 'href': href, 'docs': docs})
    return groups, changed


# 표의 분야 칸에 쓰는 짧은 이름(없으면 메뉴 이름의 한국어 부분)
LABELS = {'incoterms-2020': 'Incoterms', 'charges': '부대비용', 'bl-awb': 'B/L·AWB', 'customs': '통관', 'container': '컨테이너',
          'air-uld': '항공 ULD', 'ctu-code': '적입·고박(CTU)', 'dangerous-goods': '위험물', 'eu-lithium-battery': 'EU 배터리',
          'temperature-cargo': '온도유지 화물', 'export-control': '수출통제', 'regulated-goods': '반출입 규제 물품',
          'cargo-risk': '화물 사고 예방', 'cargo-insurance': '화물보험'}


def cat_label(name, slug=''):
    """'Cargo Risk · 화물 사고 예방' → '화물 사고 예방', 'B/L · AWB' → 'B/L · AWB'."""
    if slug in LABELS:
        return LABELS[slug]
    parts = name.split(' · ')
    return parts[-1] if len(parts) > 1 and re.search('[가-힣]', parts[-1]) else name


def options(values):
    return ''.join(f'<option value="{E(v)}">{E(v)}</option>' for v in values)


def render(groups):
    total = sum(len(d['cases']) for g in groups for d in g['docs'])
    rows, summary = [], []
    for g in groups:
        label = cat_label(g['name'], g['slug'])
        n = sum(len(d['cases']) for d in g['docs'])
        links = ' · '.join(f'<a href="{d["url"]}">{E(d["short"])}</a> {len(d["cases"])}건' if len(g['docs']) > 1 else f'<a href="{d["url"]}">{E(d["short"])}</a>' for d in g['docs'])
        summary.append(f'<tr><td>{E(g["group"])}</td><td>{E(label)}</td><td>{links}</td><td>{n}건</td></tr>')
        for d in g['docs']:
            for k in d['cases']:
                q = ' '.join([k['name'], k['sub'], k['when'], k['gubun'], label, d['short']])
                sub = f'<br><small>{E(k["sub"])}</small>' if k['sub'] else ''
                meta = ' · '.join(x for x in (label, k['year'], k['gubun'].split(' · ')[0], k['mode_txt'], k['kind_txt']) if x)
                sub += f'<small class="case-meta">{E(meta)}</small>'
                gub = ' · '.join(x for x in ([k['gubun'].split(' · ')[0]] + [k['mode_txt'], k['kind_txt']]) if x)
                rows.append(
                    f'<tr data-cat="{g["slug"]}" data-scope="{" ".join(k["scope"])}" data-mode="{" ".join(m.replace("·", "") for m in k["modes"])}" '
                    f'data-kind="{" ".join(x.replace("·", "") for x in k["kinds"])}" data-q="{E(q.lower())}">'
                    f'<td><a href="{d["url"]}#{k["anchor"]}">{E(k["name"])}</a>{sub}</td><td>{E(label)}</td><td>{E(k["year"] or "—")}</td><td>{E(gub)}</td></tr>')
    cats = ''.join(f'<option value="{g["slug"]}">{E(cat_label(g["name"], g["slug"]))}</option>' for g in groups)
    finder = (
        '<div class="case-finder" id="caseFinder" hidden>'
        '<input type="search" data-f="q" placeholder="사례 이름·화물·쟁점으로 찾기" aria-label="사례 이름·화물·쟁점으로 찾기" autocomplete="off">'
        f'<select data-f="cat" aria-label="분야"><option value="">모든 분야</option>{cats}</select>'
        '<select data-f="scope" aria-label="국내·해외"><option value="">국내·해외</option><option value="국내">국내</option><option value="해외">해외</option></select>'
        '<select data-f="mode" aria-label="운송·장소"><option value="">모든 운송·장소</option>'
        + ''.join(f'<option value="{m.replace("·", "")}">{m}</option>' for m, _ in MODES) + '<option value="기타">기타·미공개</option></select>'
        '<select data-f="kind" aria-label="유형"><option value="">모든 유형</option>'
        + ''.join(f'<option value="{k.replace("·", "")}">{k}</option>' for k, _ in KINDS) + '</select>'
        f'<button type="button" data-f="reset">처음으로</button><output class="case-count" aria-live="polite">{total}건</output>'
        '</div>')
    doc = (
        f'<p>이 사이트의 사고 사례는 분야마다 마지막 장 "사고 사례"에 있습니다. 이 페이지는 {len(groups)}개 분야의 사례 {total}건을 한 표로 모았습니다. '
        '분야, 국내·해외, 운송·장소, 유형으로 거르거나 사례 이름·화물·쟁점으로 찾을 수 있고, 사례 이름을 누르면 그 분야 사례 문서의 해당 사례로 바로 갑니다. '
        '경위·쟁점·판단·교훈과 출처는 각 사례 문서에 있습니다.</p>\n\n'
        '<h3>1. 전체 사례 찾기</h3>\n'
        '<p>"구분"은 각 사례 첫 줄의 국내·해외, 운송 수단이나 장소, 판결·처분·사고 같은 유형을 줄인 것입니다. 연도는 사고나 판결이 있었던 해이며, 여러 해에 걸친 사례는 첫해를 적었습니다.</p>\n'
        f'{finder}\n'
        '<table class="lib-table case-table"><thead><tr><th>사례</th><th>분야</th><th>연도</th><th>구분</th></tr></thead><tbody>\n'
        + '\n'.join(rows) + '\n</tbody></table>\n'
        '<p class="case-empty" hidden>조건에 맞는 사례가 없습니다. 조건을 줄이거나 "처음으로"를 누르세요.</p>\n\n'
        '<h3>2. 분야별 사례 문서</h3>\n'
        '<p>사례 문서는 분야의 해설과 같은 순서로 사례를 묶고, 한눈에 보기 표와 사례에서 뽑은 체크리스트를 함께 둡니다.</p>\n'
        '<table class="lib-table"><thead><tr><th>묶음</th><th>분야</th><th>사례 문서</th><th>건수</th></tr></thead><tbody>\n'
        + '\n'.join(summary) + f'\n<tr><td></td><td><b>합계</b></td><td>{len(groups)}개 분야</td><td><b>{total}건</b></td></tr>\n</tbody></table>\n')
    return doc, total


def q(s):
    return json.dumps(s, ensure_ascii=False)


def main():
    if not HUB_JS.is_file():
        print('사고 사례 모음 카테고리 없음, 건너뜀')
        return
    groups, changed = collect()
    doc, total = render(groups)
    n_cats = len(groups)
    old = HUB_DOC.read_text(encoding='utf-8') if HUB_DOC.is_file() else ''
    if doc != old:
        HUB_DOC.parent.mkdir(exist_ok=True)
        HUB_DOC.write_text(doc, encoding='utf-8', newline='')
    js = HUB_JS.read_text(encoding='utf-8')
    title = f'전체 사고 사례 찾기 — {n_cats}개 분야 {total}건을 분야·국내외·운송·유형으로'
    summary = (f'포워더·화주가 겪는 사고와 판결·처분 {total}건을 분야(Incoterms부터 화물보험까지 {n_cats}개), 국내·해외, '
               '해상·항공·도로·창고, 판결·처분·사고 유형으로 거르고 이름·화물·쟁점으로 찾아 각 사례로 바로 갑니다.')
    js = re.sub(r"(id: 'ac-all',[^\n]*?title: )\"(?:[^\"\\]|\\.)*\"", lambda m: m.group(1) + q(title), js, count=1)
    js = re.sub(r"(id: 'ac-all',[^\n]*?summary: )\"(?:[^\"\\]|\\.)*\"", lambda m: m.group(1) + q(summary), js, count=1)
    ver = 'h' + hashlib.sha1((doc + title + summary).encode('utf-8')).hexdigest()[:8]
    js = re.sub(r"const DOCS_VERSION = '[^']*'", f"const DOCS_VERSION = '{ver}'", js, count=1)
    js = re.sub(r'(<h2>[^<]*</h2><p>)[^<]*?(\d+)개 분야의 사례 (\d+)건', lambda m: m.group(0).replace(f'{m.group(2)}개 분야의 사례 {m.group(3)}건', f'{n_cats}개 분야의 사례 {total}건'), js, count=1)
    if js != HUB_JS.read_text(encoding='utf-8'):
        HUB_JS.write_text(js, encoding='utf-8', newline='')
        h = HUB_HTML.read_text(encoding='utf-8')
        HUB_HTML.write_text(re.sub(r'(/accident-cases-library\.js\?v=)[^"]*', lambda m: m.group(1) + ver, h), encoding='utf-8', newline='')
    cards = CARDS.read_text(encoding='utf-8')
    cards2 = re.sub(r'(<dt>사례</dt><dd data-cases-total>)[^<]*', lambda m: m.group(1) + f'{n_cats}개 분야 {total}건', cards)
    if cards2 != cards:
        CARDS.write_text(cards2, encoding='utf-8', newline='')
    for js_path, path in changed:
        print('사례 주소(id) 붙임:', (path or js_path).relative_to(ROOT).as_posix())
    index = {'hub': HUB_URL, 'total': total, 'cats': {g['slug']: {
        'label': cat_label(g['name'], g['slug']), 'count': sum(len(d['cases']) for d in g['docs']),
        'case_docs': [d['id'] for d in g['docs']]} for g in groups}}
    text = json.dumps(index, ensure_ascii=False, indent=1) + chr(10)
    if not INDEX.is_file() or INDEX.read_text(encoding='utf-8') != text:
        INDEX.write_text(text, encoding='utf-8', newline='')
    print(f'사고 사례 모음: {n_cats}개 분야, {total}건')
    return changed


if __name__ == '__main__':
    main()
