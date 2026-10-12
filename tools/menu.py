"""상단 메뉴를 한 곳에서 정의하고 모든 페이지의 <nav aria-label="주 메뉴">를 바꾼다.
새 카테고리나 도구를 추가할 때는 NAV에 한 줄 넣고 `python tools/menu.py`를 실행한다.
메뉴는 HTML에 그대로 남겨 검색엔진이 링크를 읽을 수 있게 하고, 드롭다운은 <details>로 자바스크립트 없이 열린다."""
import html, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV = [
    ('규정', [
        ('/library/ctu-code', 'CTU Code', '컨테이너 적재·고박 국제 규범'),
        ('/library/incoterms-2020', 'Incoterms 2020', '무역조건별 위험·비용 분기'),
        ('/library/dangerous-goods', 'Dangerous Goods', '위험물 운송 규정과 교육'),
        ('/library/eu-lithium-battery', 'EU Battery', 'EU 배터리 규정 번역·해설'),
    ]),
    ('실무', [
        ('/library/bl-awb', 'B/L · AWB', '선하증권과 항공화물운송장'),
        ('/library/air-uld', 'Air ULD', '항공 ULD·컨투어·빌드업'),
        ('/library/temperature-cargo', 'Cold Chain', '온도유지 화물 항공·해상'),
        ('/library/cargo-insurance', 'Cargo Insurance', '적하보험·책임 한도·클레임'),
        ('/library/charges', 'Charges', '부대비용·DEM/DET·보관료'),
        ('/library/container', 'Container', '컨테이너 번호·코드·치수'),
    ]),
    ('도구', [
        ('/airtracking', 'AWB Tracking', '항공사별 화물 추적 바로가기'),
        ('/containertracking', 'Container Tracking', '선사별 컨테이너 추적 바로가기'),
        ('/unnumber', 'UN Number', 'UN 번호로 위험물 조회'),
    ]),
]

# 페이지 파일 → 지금 보고 있는 메뉴 주소
PAGES = {
    'index.html': None,
    'privacy.html': None,
    'library.html': '/library/ctu-code',
    'incoterms-library.html': '/library/incoterms-2020',
    'dg-library.html': '/library/dangerous-goods',
    'battery-library.html': '/library/eu-lithium-battery',
    'bl-library.html': '/library/bl-awb',
    'uld-library.html': '/library/air-uld',
    'tc-library.html': '/library/temperature-cargo',
    'insurance-library.html': '/library/cargo-insurance',
    'charges-library.html': '/library/charges',
    'container-library.html': '/library/container',
    'airtracking.html': '/airtracking',
    'containertracking.html': '/containertracking',
    'unnumber.html': '/unnumber',
}

E = html.escape


def render(current):
    out = ['<nav class="main-nav" aria-label="주 메뉴">']
    for group, items in NAV:
        here = any(href == current for href, _, _ in items)
        out.append(f'    <details class="nav-group{" is-current" if here else ""}"><summary>{E(group)}</summary><div class="menu-list">')
        for href, name, sub in items:
            cur = ' aria-current="page"' if href == current else ''
            out.append(f'      <a href="{href}"{cur}>{E(name)}<small>{E(sub)}</small></a>')
        out.append('    </div></details>')
    out.append('  </nav>')
    return '\n'.join(out)


changed = []
for page, current in PAGES.items():
    path = os.path.join(ROOT, page)
    if not os.path.exists(path):
        print('missing', page)
        continue
    s = open(path, encoding='utf-8').read()
    new, n = re.subn(r'<nav(?: class="main-nav")? aria-label="주 메뉴">.*?</nav>', lambda m: render(current), s, count=1, flags=re.S)
    if n != 1:
        print('NO NAV in', page)
        continue
    if new != s:
        open(path, 'w', encoding='utf-8', newline='').write(new)
        changed.append(page)
print('updated:', ', '.join(changed) or 'none')
