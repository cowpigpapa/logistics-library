"""상단 메뉴를 한 곳에서 정의하고 모든 페이지의 <nav aria-label="주 메뉴">를 바꾼다.
새 카테고리나 도구를 추가할 때는 NAV에 한 줄 넣고 `python tools/menu.py`를 실행한다.
메뉴는 HTML에 그대로 남겨 검색엔진이 링크를 읽을 수 있게 하고, 드롭다운은 <details>로 자바스크립트 없이 열린다."""
import html, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV = [
    ('길잡이', [
        ('/library/guide', 'Guide · 길잡이', '업무 흐름으로 찾기 · 용어집 · 새로 바뀐 것'),
    ]),
    ('계약·서류·통관', [
        ('/library/incoterms-2020', 'Incoterms 2020 · 인코텀스', '무역조건별 위험·비용 분기'),
        ('/library/charges', 'Charges · 부대비용', '운임 계산·부대비용·D&D·보관료'),
        ('/library/bl-awb', 'B/L · AWB', '선하증권과 항공화물운송장'),
        ('/library/customs', 'Customs · 통관', '수출입 통관·HS 코드·FTA·보세운송'),
    ]),
    ('운송 장비·적재', [
        ('/library/container', 'Container · 컨테이너', '컨테이너 번호·코드·치수·OOG'),
        ('/library/air-uld', 'Air ULD · 항공 ULD', '항공 ULD·컨투어·빌드업'),
        ('/library/ctu-code', 'CTU Code · 적입·고박', '컨테이너 적입·고박 국제 규범'),
    ]),
    ('특수·규제 화물', [
        ('/library/dangerous-goods', 'Dangerous Goods · 위험물', '국제·국내 위험물 규칙·화물 확인·교육'),
        ('/library/eu-lithium-battery', 'EU Battery · EU 배터리', 'EU 배터리·폐배터리 운송 규정'),
        ('/library/temperature-cargo', 'Cold Chain · 온도유지 화물', '온도유지 화물 항공·해상'),
        ('/library/export-control', 'Export Control · 수출통제', '전략물자·방산물자 허가와 제재 확인'),
        ('/library/regulated-goods', 'Regulated Goods · 반출입 규제 물품', '폐기물·목재 포장재·CITES·문화유산·LMO'),
    ]),
    ('화물 사고·보험', [
        ('/library/cargo-risk', 'Cargo Risk · 화물 사고 예방', '운송·창고·젖음·뒤바뀜·보안'),
        ('/library/cargo-insurance', 'Cargo Insurance · 화물보험', '적하보험·책임 한도·클레임'),
    ]),
    ('사고 사례', [
        ('/library/accident-cases', 'Accident Cases · 사고 사례 모음', '분야별 사고·판결·처분을 한 표로'),
    ]),
    ('도구', [
        ('/airtracking', 'AWB Tracking', '항공사별 화물 추적 바로가기'),
        ('/containertracking', 'Container Tracking', '선사별 컨테이너 추적 바로가기'),
        ('/unnumber', 'UN Number', 'UN 번호로 위험물 조회'),
    ]),
]

# 묶음 색(library-index.css의 --g1~--g7). 묶음을 더하거나 순서를 바꿔도 색이 밀리지 않게 위치가 아니라 이름으로 정한다.
GROUP_COLOR = {'계약·서류·통관': 1, '운송 장비·적재': 2, '특수·규제 화물': 3, '화물 사고·보험': 4, '도구': 5, '길잡이': 6, '사고 사례': 7}


# 페이지 파일 → 지금 보고 있는 메뉴 주소
PAGES = {
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
    'customs-library.html': '/library/customs',
    'risk-library.html': '/library/cargo-risk',
    'guide-library.html': '/library/guide',
    'accident-cases-library.html': '/library/accident-cases',
    'regulated-goods-library.html': '/library/regulated-goods',
    'export-control-library.html': '/library/export-control',
    'container-library.html': '/library/container',
    'airtracking.html': '/airtracking',
    'containertracking.html': '/containertracking',
    'unnumber.html': '/unnumber',
}

E = html.escape


# 머리줄 메뉴(2026-10-13~): 자료실(왼쪽 색인 화면) · 추적 도구 · UN 번호. 자료 카테고리는 왼쪽 색인에만 둔다.
TOP = [
    ('/', 'Library', None),
    ('Tracking', None, [('/tool/airtracking', 'AWB Tracking', '항공사별 화물 추적 바로가기'),
                        ('/tool/containertracking', 'Container Tracking', '선사별 컨테이너 추적 바로가기')]),
    ('/tool/unnumber', 'UN No.', None),
]


def render(current):
    """current: 이 페이지의 메뉴 주소('/library/...'는 Library, '/airtracking' 등은 그 도구)."""
    if current and current.startswith('/library'):
        current = '/'
    elif current and not current.startswith('/tool/'):
        current = '/tool' + current
    out = ['<nav class="main-nav" aria-label="주 메뉴">']
    for first, name, items in TOP:
        if items:
            here = any(href == current for href, _, _ in items)
            out.append(f'    <details class="nav-group{" is-current" if here else ""}"><summary>{E(first)}</summary><div class="menu-list">')
            for href, iname, sub in items:
                cur = ' aria-current="page"' if href == current else ''
                out.append(f'      <a href="{href}"{cur}>{E(iname)}<small>{E(sub)}</small></a>')
            out.append('    </div></details>')
        else:
            cur = ' aria-current="page"' if first == current else ''
            out.append(f'    <a class="nav-link" href="{first}"{cur}>{E(name)}</a>')
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
