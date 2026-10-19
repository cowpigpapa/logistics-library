"""사이트 화면 틀(왼쪽 색인 + 오른쪽 화면)을 만든다. 메인(index.html)도, 자료실 문서·개요 정적 페이지(tools/prerender.py)도 이 틀을 쓴다.
- 머리줄·푸터: library.html에서 가져온다(머리줄 메뉴 Library·Tracking·UN No.는 tools/menu.py가 넣는다).
- 메인 검색 설정(제목·설명·canonical·인증 태그·OG): tools/home-head.html
- 카테고리 카드 원본: tools/home-cards.html (순서는 tools/menu.py의 NAV를 따른다)
- 색인 데이터: tools/library_index.py가 만드는 library-index-data.js
카드나 메뉴를 바꾼 뒤 `python tools/library_index.py && python tools/build_home.py && python tools/prerender.py`를 실행한다."""
import html as _html
import json, re, sys
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
import images  # 그림 작은 판(srcset)·지연 로딩
CARD_SIZES = '(max-width: 900px) calc(100vw - 72px), 400px'   # 카드 그림 칸 폭
DOC_SIZES = '(max-width: 900px) calc(100vw - 40px), 920px'    # 문서 본문 폭
V = '20261019-05'   # library-index.css/js, library-index-data.js 캐시 버전

read = lambda p: (ROOT / p).read_text(encoding='utf-8')
lib = read('library.html')
HEADER = lib[lib.index('<header class="topbar">'):lib.index('</header>') + len('</header>')]
FOOTER = lib[lib.index('<footer class="site-footer">'):lib.index('</footer>') + len('</footer>')]
CSS = ''.join(f'  <link rel="stylesheet" href="{h}">\n' for h in re.findall(r'href="(/(?:styles|ctu-library)\.css\?v=[0-9-]+)"', lib))
SHELL_JS = re.search(r'/site-shell\.js\?v=[0-9-]+', lib).group(0)
HOME_SEO = re.sub(r'<!--.*?-->\s*', '', read('tools/home-head.html'), flags=re.S).strip()

cards = re.sub(r'<!--.*?-->\s*', '', read('tools/home-cards.html'), flags=re.S)
# 카드 머리를 개요·문서 화면과 같은 한 줄로: 이름 옆에 분류 줄(예: CTU Code  IMO · ILO · UNECE)
cards = re.sub(r'<p class="entry-type">(.*?)</p>\s*<h2 id="([^"]+)">(.*?)</h2>',
               r'<h2 id="\2" class="li-entry-h">\3<span class="li-kicker-sub">\1</span></h2>', cards)


def link_title(m):
    """'자료 보기 →' 링크를 없애고 그 주소를 제목에 단다."""
    sec = m.group(0)
    link = re.search(r'<a class="entry-link" href="([^"]+)">.*?</a>', sec, re.S)
    if not link:
        return sec
    sec = sec.replace(link.group(0), '')
    return re.sub(r'(<h2 id="[^"]+" class="li-entry-h">)(.*?)(<span class="li-kicker-sub">)',
                  lambda h: f'{h.group(1)}<a href="{link.group(1)}">{h.group(2)}</a>{h.group(3)}', sec, count=1)


cards = re.sub(r'<section class="library-entry".*?</section>', link_title, cards, flags=re.S)
by_href = {re.search(r'<a href="([^"]+)">', sec).group(1): sec
           for sec in re.findall(r'<section class="library-entry".*?</section>', cards, flags=re.S)}

# 순서는 왼쪽 색인(tools/menu.py NAV)과 같게, 묶음 이름(규정·실무·도구)을 단다.
menu = read('tools/menu.py')
nav_src = menu[menu.index('NAV = ['):menu.index('\n]\n', menu.index('NAV = [')) + 2]
ns = {}
exec(nav_src, ns)
NAV = ns['NAV']
CARDS = {}        # 카테고리 slug -> 카드 마크업(분류색 적용)
META = {}         # slug 또는 'tool:<이름>' -> (이름, 분류 줄, 묶음 번호)
TOOL_TYPES = {}   # 도구 이름 -> 분류 줄(도구 화면 머리용)
blocks = []
for gi, (group, items) in enumerate(NAV):
    secs = [(href, by_href.pop(href)) for href, _, _ in items if href in by_href]
    secs = [(h, s.replace('<span class="li-kicker-sub">', f'<span class="li-kicker-sub g{gi + 1}">')) for h, s in secs]
    for href, name, sub in items:
        key = href.split('/')[2] if href.startswith('/library/') else 'tool:' + href.lstrip('/')
        sec = dict(secs).get(href)
        kind = re.search(r'<span class="li-kicker-sub[^"]*">(.*?)</span>', sec).group(1) if sec else ''
        META[key] = (name, kind, gi + 1)
    if not secs:
        continue
    if all(not h.startswith('/library/') for h, _, _ in items):
        # 도구는 첫 화면에 카드로 두지 않는다(왼쪽 색인에 있다). 도구 화면 머리의 분류 줄만 넘겨 둔다.
        for href, s in secs:
            TOOL_TYPES[href.lstrip('/')] = META['tool:' + href.lstrip('/')][1]
        continue
    blocks.append(f'<h2 class="li-home-group g{gi + 1}">{group}</h2>')
    for href, s in secs:
        s = images.responsive(s, CARD_SIZES, eager=1 if not CARDS else 0)   # 맨 위 카드 그림만 바로 받는다
        CARDS[href.split('/')[2]] = s
        blocks.append(s)
blocks += list(by_href.values())
HOME_INNER = ('    <div class="li-home">\n'
              '      <header class="li-intro"><h1>Logistics Library</h1><p>물류 규정·운송 실무 자료를 주제별로 정리했습니다. '
              '왼쪽 색인에서 고르면 이 자리에서 바로 읽을 수 있습니다.</p></header>\n'
              + '\n'.join(blocks) + '\n    </div>')


def kicker(slug):
    """문서 화면 맨 위 카테고리 머리(첫 화면 카드 제목과 같은 li-entry-h). library-index.js의 kicker()와 같은 마크업."""
    name, kind, g = META[slug]
    sub = f'<span class="li-kicker-sub g{g}">{kind}</span>' if kind else ''   # kind는 카드에서 가져온 마크업(이미 이스케이프됨)
    return f'<p class="li-entry-h li-doc-head"><a href="/library/{slug}">{_html.escape(name, quote=False)}</a>{sub}</p>'


def index_data():
    src = read('library-index-data.js')
    return json.loads(src[src.index('=') + 1:src.rindex(';')])


ACTIVE = ' class="is-active"'


def tree_html(data, slug=None, doc_id=None, tool=None):
    """왼쪽 색인 마크업(검색엔진·JS 없는 방문자용). library-index.js의 renderTree()와 같은 마크업이며, JS가 다시 그린다."""
    e = lambda s: _html.escape(s or '', quote=True)
    out = []
    for g in data:
        cats = []
        for c in g['cats']:
            n = sum(len(s['docs']) for s in c['sections'])
            secs = ''.join(
                f'<div class="li-sec"><p class="li-sec-name">{e(s["title"])}</p><ul>' + ''.join(
                    f'<li><a href="/library/{c["slug"]}/{i}" data-slug="{c["slug"]}" data-id="{i}" title="{e(c["docs"][i]["title"])}"'
                    f'{ACTIVE if c["slug"] == slug and i == doc_id else ""}>'
                    f'{e(c["docs"][i]["short"] or c["docs"][i]["title"].split(" — ")[0])}</a></li>' for i in s['docs'])
                + '</ul></div>' for s in c['sections'])
            ov_active = ' is-active' if c['slug'] == slug and not doc_id else ''
            cats.append(f'<div class="li-cat-wrap"><a class="li-ov{ov_active}" href="/library/{c["slug"]}" data-slug="{c["slug"]}" '
                        f'title="{e(c["name"])} 개요 및 원문">개요</a><details class="li-cat" data-slug="{c["slug"]}"'
                        f'{" open" if c["slug"] == slug else ""}><summary><span class="li-cat-name">{e(c["name"])}</span>'
                        f'<span class="li-count">{n}</span></summary>{secs}</details></div>')
        tools = ''.join(f'<a class="li-tool{" is-active" if l["href"][1:] == tool else ""}" href="/tool{l["href"]}" data-tool="{l["href"][1:]}"><span class="li-cat-name">{e(l["name"])}</span>'
                        f'<small>{e(l["sub"])}</small></a>' for l in g.get('links', []))
        out.append(f'<div class="li-group"><p class="li-group-name">{e(g["group"])}</p>{"".join(cats)}{tools}</div>')
    return ''.join(out)


def page(seo, inner, route='/', tree=''):
    """화면 틀 한 장. seo: <head>에 넣을 제목·설명·canonical 등, inner: 오른쪽 화면(#liView) 내용, route: 이 페이지 주소."""
    return f'''<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {seo}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20261004-01">
{CSS}  <link rel="stylesheet" href="/battery-library.css?v=20261013-01">
  <link rel="stylesheet" href="/uld-library.css?v=20261006-01">
  <link rel="stylesheet" href="/incoterms-library.css?v=20261005-03">
  <link rel="stylesheet" href="/library-index.css?v={V}">
</head>
<body class="li-body">
<a class="li-skip" href="#liView">본문으로 건너뛰기</a>
{HEADER}
<main class="li-main">
  <button type="button" class="li-toggle" id="liToggle" aria-controls="liSide" aria-expanded="false">목차</button>
  <aside class="li-side" id="liSide" aria-label="자료 색인">
    <div class="li-side-head">
      <input type="search" id="liFilter" placeholder="제목·본문 검색" aria-label="제목·본문으로 자료 찾기" autocomplete="off">
      <div class="li-side-tools"><button type="button" id="liOpenAll">모두 펼치기</button><button type="button" id="liCloseAll">모두 접기</button></div>
    </div>
    <nav class="li-tree" id="liTree">{tree}</nav>
  </aside>
  <article class="li-view library-view" id="liView" tabindex="-1" data-route="{route}">
{inner}
  </article>
</main>
{FOOTER}
<script defer src="/library-index-data.js?v={V}"></script>
<script defer src="/library-index.js?v={V}"></script>
<script defer src="{SHELL_JS}"></script>
</body>
</html>
'''


def main():
    data = index_data()
    (ROOT / 'index.html').write_text(page(HOME_SEO, HOME_INNER, '/', tree_html(data)), encoding='utf-8', newline='\n')
    # 도구 화면 /tool/<name>: 왼쪽 색인 없이 도구 페이지 그대로(머리줄 메뉴 Tracking·UN No.에서 연다).
    # 원본은 <name>.html이고, 옛 주소 /<name>은 vercel.json redirects로 이 주소로 넘어온다.
    (ROOT / 'tool').mkdir(exist_ok=True)
    # 푸터는 자료실 화면(library-index.css의 .li-body .site-footer)과 같게: 한 줄로 낮추고 PC에서는 화면 아래에 고정한다.
    foot = ('<style id="li-footer-sync">.site-footer{min-height:0;padding-block:10px}'
            '.site-footer .footer-copy{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px}'
            '.site-footer .footer-brand{height:auto}.site-footer .footer-brand strong{font-size:14px}'
            '@media (min-width:901px){.site-footer{position:fixed;left:0;right:0;bottom:0;z-index:25}body{padding-bottom:64px}}</style>\n')
    for name in TOOL_TYPES:
        (ROOT / 'tool' / f'{name}.html').write_text(read(f'{name}.html').replace('</head>', foot + '</head>', 1), encoding='utf-8', newline='\n')
    # 없는 주소(404): 같은 화면 틀에 안내와 색인. 검색엔진에는 올리지 않는다.
    seo404 = '<title>페이지를 찾을 수 없습니다 · Logistics Library</title>\n  <meta name="robots" content="noindex">'
    inner404 = ('    <div class="li-home"><header class="li-intro"><h1>페이지를 찾을 수 없습니다</h1>'
                '<p>주소가 바뀌었거나 없는 문서입니다. 왼쪽 색인에서 고르거나 검색칸에 찾는 말을 넣어 보세요. '
                '<a href="/">첫 화면으로 가기</a></p></header></div>')
    (ROOT / '404.html').write_text(page(seo404, inner404, '/404', tree_html(data)), encoding='utf-8', newline='\n')
    print('index.html 생성: 카드', len(CARDS), '/ 도구 화면', len(TOOL_TYPES), '/ 404.html')


if __name__ == '__main__':
    main()
