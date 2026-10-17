"""2026-10-17 사장님 2차 검수표 판정 반영. 결과: data/review/apply_r2_owner_log.txt"""
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/') + '/'
LOG, cache = [], {}


def src(f):
    if f not in cache:
        cache[f] = open(REPO + f, encoding='utf-8').read()
    return cache[f]


def rep(f, old, new, count=1, tag=''):
    s = src(f)
    n = s.count(old)
    if not n:
        LOG.append(f'[없음] {tag} {f} {old[:60]}')
        return
    cache[f] = s.replace(old, new) if count == 0 else s.replace(old, new, count)
    LOG.append(f'[{n if count == 0 else min(n, count)}] {tag} {f} {old[:50]} → {new[:50]}')


FILES = [f'{d}/{x}' for d in sorted(os.listdir(REPO)) if d.endswith('-docs') and os.path.isdir(REPO + d)
         for x in sorted(os.listdir(REPO + d)) if x.endswith('.html')] + [x for x in sorted(os.listdir(REPO)) if x.endswith('-library.js')]


def first_text_pos(s, word, start=0):
    """태그 속성·SVG 밖에서 word가 처음 나오는 위치."""
    svg = [(m.start(), m.end()) for m in re.finditer(r'<svg\b.*?</svg>', s, re.S)]
    for m in re.finditer(re.escape(word), s[start:]):
        a = m.start() + start
        if any(x <= a < y for x, y in svg):
            continue
        if s.rfind('<', 0, a) > s.rfind('>', 0, a):
            continue
        return a
    return -1


# r2-007: 습식 얼음 → 아이스팩 (백신 사례 두 문장)
rep('tc-docs/tc-cases.html', '상자는 습식 얼음(wet ice)으로 포장됐고', '상자는 아이스팩을 넣어 포장됐고', 1, 'r2-007')
rep('tc-docs/tc-cases.html', '습식 얼음이나 젤팩의', '아이스팩이나 젤팩의', 1, 'r2-007')

# r2-008: FAA 문장의 운항자 → 항공사
rep('uld-docs/uld-code.html', 'FAA가 운항자에게', 'FAA가 항공사에게', 1, 'r2-008')
rep('uld-docs/uld-overview.html', 'FAA AC 120-85B는 운항자가', 'FAA AC 120-85B는 항공사가', 1, 'r2-008')
rep('uld-docs/uld-overview.html', '않도록 하라고 운항자에게', '않도록 하라고 항공사에게', 1, 'r2-008')

# r2-013·014(+입국): EU 폐기물운송규정 세관 이름 → 수출지·출국지·입국지 세관, 문서 첫 등장에 영어 병기
#   '출국·입국 세관'처럼 묶인 말은 '출국지·입국지 세관'. 이미 영어(customs office of …)가 붙은 종류는 다시 달지 않는다.
EN = {'수출': 'export', '출국': 'exit', '입국': 'entry'}
KIND = r'(?:수출|출국|입국)'
for f in [x for x in FILES if x.startswith('battery-docs/')]:
    s = src(f)
    orig = s
    s = re.sub(rf'({KIND}(?:·{KIND})*) ?세관', lambda m: '·'.join(k + '지' for k in m.group(1).split('·')) + ' 세관', s)
    done = {k for k, e in EN.items() if re.search(rf'customs offices? of [a-z ]*\b{e}\b', s, re.I)}
    svg = [(m.start(), m.end()) for m in re.finditer(r'<svg\b.*?</svg>', s, re.S)]
    out, last = [], 0
    for m in re.finditer(rf'((?:{KIND}지)(?:·{KIND}지)*) 세관(?![(가-힣])', s):
        a = m.start()
        if any(x <= a < y for x, y in svg) or s.rfind('<', 0, a) > s.rfind('>', 0, a):
            continue
        kinds = [k[:-1] for k in m.group(1).split('·')]
        if all(k in done for k in kinds):
            continue
        done.update(kinds)
        gl = f'(Customs office{"s" if len(kinds) > 1 else ""} of {", ".join(EN[k] for k in kinds[:-1]) + " and " + EN[kinds[-1]] if len(kinds) > 1 else EN[kinds[0]]})'
        out.append(s[last:m.end()] + gl)
        last = m.end()
    s = ''.join(out) + s[last:]
    if s != orig:
        cache[f] = s
        LOG.append(f'[세관] {f}')

# r2-015: USDA 프로브 → USDA Probe
rep('tc-docs/tc-reefer.html', 'USDA 프로브', 'USDA Probe', 0, 'r2-015')

# r2-017: P&I 클럽 문장 되돌리기(10/13 이전 문장으로)
rep('insurance-docs/ins-cases.html', '판례, 상호보험조합(P&amp;I 클럽 등)이 공개한', '판례, P&amp;I 클럽 등이 공개한', 1, 'r2-017')
rep('insurance-docs/ins-cases.html', '운송 관련 상호보험조합과 보험사(P&amp;I 클럽, 대리점 배상책임보험)가', '운송 관련 상호보험(P&amp;I 클럽, 대리점 배상책임보험)이', 1, 'r2-017')
rep('insurance-docs/ins-cases.html', '판결이 아닌 상호보험조합의 사고 사례', '판결이 아닌 P&amp;I 클럽의 사고 사례', 1, 'r2-017')

# r2-018: 드라이아이스 문장 되돌리기
rep('dg-docs/kr-mismatch.html', '배터리·자석 같은 물품(article)이나 드라이아이스는', '배터리·자석·드라이아이스 같은 물품(article) 형태의 위험물은', 1, 'r2-018')

# r2-032: 중량·평형 → Weight &amp; Balance (받침 있는 말 → 받침 없는 말 조사)
P = {'을': '를', '이': '가', '은': '는', '과': '와', '으로': '로', '': ''}
for f in FILES:
    s = src(f)
    if '중량·평형' in s:
        s2 = re.sub(r'중량·평형(으로|을|이|은|과)?(?![가-힣])', lambda m: 'Weight &amp; Balance' + P[m.group(1) or ''], s)
        s2 = s2.replace('중량·평형', 'Weight &amp; Balance')
        cache[f] = s2
        LOG.append(f'[r2-032] {f} 중량·평형 → Weight & Balance')

# r2-053~056: VGM은 '컨테이너 총중량 검증(VGM)'
for f in FILES:
    if '컨테이너 총중량 검증제도(VGM)' in src(f):
        rep(f, '컨테이너 총중량 검증제도(VGM)', '컨테이너 총중량 검증(VGM)', 0, 'r2-054')
rep('incoterms-docs/inco-choose.html', '검증된 총중량(VGM) 계측과 통지를', '컨테이너 총중량 검증(VGM) 계측과 통지를', 1, 'r2-055')
rep('incoterms-docs/inco-risk-cost.html', '검증된 총중량(VGM) 계측비', '컨테이너 총중량 검증(VGM) 계측비', 1, 'r2-056')

# r2-058: 피트 → ft (사이트 전체). 같은 Charges 예시 문장은 '40ft 컨테이너'
rep('ch-docs/ch-korea-storage.html', '40피트는 2TEU로 두 배', '40ft 컨테이너는 2TEU로 두 배', 0, 'r2-058')
rep('ch-docs/ch-sea-charges.html', '40피트는 2TEU로 두 배', '40ft 컨테이너는 2TEU로 두 배', 0, 'r2-058')
FT = re.compile(r'(\d)\s?피트')
for f in FILES:
    s = src(f)
    n = len(FT.findall(s))
    if n:
        cache[f] = FT.sub(r'\1ft', s)
        LOG.append(f'[r2-058] {f} N피트 → Nft ×{n}')

# r2-059: 경과보관료 → 보관료(이름 목록·인용·출처 제목은 원문 그대로), 보관료(Storage)·Storage → 보관료
KEEP = ['경과보관료, 장치료, Storage', '"경과보관료(Storage)"', '경과보관료 안내', '경과보관료 산정 방식']
for f in FILES:
    s = src(f)
    if '경과보관료' not in s:
        continue
    marks = {}
    for i, k in enumerate(KEEP):
        tok = f'\x00K{i}\x00'
        marks[tok] = k
        s = s.replace(k, tok)
    s = s.replace('경과보관료(Storage)', '보관료').replace('경과보관료', '보관료')
    for tok, k in marks.items():
        s = s.replace(tok, k)
    cache[f] = s
    LOG.append(f'[r2-059] {f} 경과보관료 → 보관료')
rep('incoterms-docs/inco-choose.html', 'Demurrage·Detention·Storage의', 'Demurrage·Detention·보관료의', 1, 'r2-059')
for f in FILES:
    if '보관료(Storage)' in src(f):
        rep(f, '보관료(Storage)', '보관료', 0, 'r2-059')

# r2-059: D&D는 문서마다 처음 한 번 'D&D(Demurrage & Detention)'
for f in FILES:
    if not f.endswith('.html'):
        continue
    s = src(f)
    # ch-dnd는 첫 표가 D&D를 풀어 설명하고, 'Demurrage·Detention(D&D)'처럼 이미 풀어 쓴 곳은 건드리지 않는다.
    if 'D&amp;D(Demurrage' in s or f == 'ch-docs/ch-dnd.html':
        continue
    p = first_text_pos(s, 'D&amp;D')
    if p >= 0 and s[p + 7:p + 8] != '(' and s[p - 1:p] != '(':
        cache[f] = s[:p + 7] + '(Demurrage &amp; Detention)' + s[p + 7:]
        LOG.append(f'[D&D] {f}')

changed = []
for f, t in cache.items():
    if t != open(REPO + f, encoding='utf-8').read():
        open(REPO + f, 'w', encoding='utf-8', newline='').write(t)
        changed.append(f)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review', 'apply_r2_owner_log.txt'), 'w', encoding='utf-8').write('\n'.join(LOG))
print('changed', len(changed))
print('\n'.join(LOG))
