"""메인 화면(index.html)을 만든다: 왼쪽 색인 + 오른쪽 화면(첫 화면은 카테고리 카드).
- 머리줄·푸터: library.html에서 가져온다(머리줄의 규정·실무·도구 메뉴는 빼고, 패밀리 사이트는 푸터에 둔다).
- 검색 설정(제목·설명·canonical·인증 태그·OG): tools/home-head.html
- 카테고리 카드 원본: tools/home-cards.html (순서는 tools/menu.py의 NAV를 따른다)
- 색인 데이터: tools/library_index.py가 만드는 library-index-data.js
카드나 메뉴를 바꾼 뒤 `python tools/library_index.py && python tools/build_home.py`를 실행한다."""
import re, sys
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
V = '20261012-42'   # library-index.css/js, library-index-data.js 캐시 버전

read = lambda p: (ROOT / p).read_text(encoding='utf-8')
lib = read('library.html')
header = lib[lib.index('<header class="topbar">'):lib.index('</header>') + len('</header>')]
header = re.sub(r'\s*<nav class="main-nav"[^>]*>.*?</nav>', '', header, count=1, flags=re.S)
footer = lib[lib.index('<footer class="site-footer">'):lib.index('</footer>') + len('</footer>')]
css = ''.join(f'  <link rel="stylesheet" href="{h}">\n' for h in re.findall(r'href="(/(?:styles|ctu-library)\.css\?v=[0-9-]+)"', lib))
shell = re.search(r'/site-shell\.js\?v=[0-9-]+', lib).group(0)
seo = re.sub(r'<!--.*?-->\s*', '', read('tools/home-head.html'), flags=re.S).strip()

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


def tool_card(sec):
    """도구는 그림 없는 작은 실행형 카드로."""
    href = re.search(r'<a href="([^"]+)">', sec).group(1)
    name = re.search(r'class="li-entry-h"><a href="[^"]+">(.*?)</a>', sec).group(1)
    sub = re.search(r'<span class="li-kicker-sub[^"]*">(.*?)</span>', sec).group(1)
    desc = re.search(r'</h2>\s*<p>(.*?)</p>', sec, re.S).group(1)
    return (f'<a class="li-tool-card" href="{href}"><span class="li-entry-h"><b>{name}</b>'
            f'<span class="li-kicker-sub g3">{sub}</span></span><span class="li-tool-desc">{desc}</span></a>')


# 순서는 왼쪽 색인(tools/menu.py NAV)과 같게, 묶음 이름(규정·실무·도구)을 단다.
menu = read('tools/menu.py')
nav_src = menu[menu.index('NAV = ['):menu.index('\n]\n', menu.index('NAV = [')) + 2]
ns = {}
exec(nav_src, ns)
blocks = []
for gi, (group, items) in enumerate(ns['NAV']):
    secs = [by_href.pop(href) for href, _, _ in items if href in by_href]
    if not secs:
        continue
    blocks.append(f'<h2 class="li-home-group g{gi + 1}">{group}</h2>')
    # 카드의 기관명(분류 줄)은 그 묶음의 분류색으로
    secs = [s.replace('<span class="li-kicker-sub">', f'<span class="li-kicker-sub g{gi + 1}">') for s in secs]
    if all(not h.startswith('/library/') for h, _, _ in items):
        blocks.append('<div class="li-tool-grid">' + ''.join(tool_card(s) for s in secs) + '</div>')
    else:
        blocks += secs
blocks += list(by_href.values())
home = '\n'.join(blocks)

html = f'''<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {seo}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20261004-01">
{css}  <link rel="stylesheet" href="/battery-library.css?v=20261012-01">
  <link rel="stylesheet" href="/uld-library.css?v=20261006-01">
  <link rel="stylesheet" href="/incoterms-library.css?v=20261005-03">
  <link rel="stylesheet" href="/library-index.css?v={V}">
</head>
<body class="li-body">
<a class="li-skip" href="#liView">본문으로 건너뛰기</a>
{header}
<main class="li-main">
  <button type="button" class="li-toggle" id="liToggle" aria-controls="liSide" aria-expanded="false">목차</button>
  <aside class="li-side" id="liSide" aria-label="자료 색인">
    <div class="li-side-head">
      <input type="search" id="liFilter" placeholder="제목·주제 검색…" aria-label="제목·요약·태그로 자료 찾기" autocomplete="off">
      <div class="li-side-tools"><button type="button" id="liOpenAll">모두 펼치기</button><button type="button" id="liCloseAll">모두 접기</button></div>
    </div>
    <nav class="li-tree" id="liTree"></nav>
  </aside>
  <article class="li-view library-view" id="liView" tabindex="-1" aria-live="polite">
    <div class="li-home">
      <header class="li-intro"><h1>Logistics Library</h1><p>물류 규정·운송 실무 자료를 주제별로 정리했습니다. 왼쪽 색인에서 고르면 이 자리에서 바로 읽을 수 있습니다.</p></header>
{home}
    </div>
  </article>
</main>
{footer}
<script src="/library-index-data.js?v={V}"></script>
<script src="/library-index.js?v={V}"></script>
<script src="{shell}"></script>
</body>
</html>
'''
(ROOT / 'index.html').write_text(html, encoding='utf-8', newline='\n')
print('index.html 생성: 카드', len(re.findall(r'class="library-entry"', home)), '도구', home.count('li-tool-card'))
