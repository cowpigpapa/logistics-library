"""2026-10-15 사장님 1차 검수표 재검토 반영(25줄). 문장 단위 또는 확인한 사이트 전체 규칙만 고친다. 결과: data/review/apply_r1_owner_log.txt"""
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/') + '/'
LOG = []
cache = {}


def src(f):
    if f not in cache:
        cache[f] = open(REPO + f, encoding='utf-8').read()
    return cache[f]


def rep(f, old, new, count=1, tag=''):
    s = src(f)
    n = s.count(old)
    if not n:
        LOG.append(f'[없음] {tag} {f} {old[:50]}')
        return
    cache[f] = s.replace(old, new) if count == 0 else s.replace(old, new, count)
    LOG.append(f'[{n if count == 0 else min(n, count)}] {tag} {f} {old[:50]} → {new[:50]}')


FILES = [f'{d}/{x}' for d in sorted(os.listdir(REPO)) if d.endswith('-docs') and os.path.isdir(REPO + d)
         for x in sorted(os.listdir(REPO + d)) if x.endswith('.html')] + [x for x in sorted(os.listdir(REPO)) if x.endswith('-library.js')]

# t000·t001: Demurrage·Detention은 영어만. 첫 등장 병기 (체화료)·(지체료)를 뺀다.
for f in FILES:
    for a, b in (('Demurrage(체화료)', 'Demurrage'), ('Detention(지체료)', 'Detention')):
        if a in src(f):
            rep(f, a, b, 0, 't000/t001')

# t002: ULD 문서의 ULD 반납 지연료는 '지체료(ULD demurrage)'(문서 첫 등장), 그 뒤는 '지체료'
ULD = {
    'uld-docs/uld-buildup.html': [('사용료·Demurrage, 접수 마감 시각을', '사용료·지체료, 접수 마감 시각을'),
                                  ('사용료·Demurrage, 접수 마감 시각', '사용료·지체료(ULD demurrage), 접수 마감 시각')],
    'uld-docs/uld-overview.html': [('(무료 사용 기간, Demurrage, 배상액 등)', '(무료 사용 기간, 지체료(ULD demurrage), 배상액 등)'),
                                   ('반납 기한, Demurrage, 분실 판정 기간', '반납 기한, 지체료, 분실 판정 기간'),
                                   ('<td>Demurrage</td>', '<td>지체료</td>')],
    'uld-docs/uld-safety.html': [('반납 기한과 Demurrage는', '반납 기한과 지체료(ULD demurrage)는'),
                                 ('(무료 기간, Demurrage, 손상·분실 책임)', '(무료 기간, 지체료, 손상·분실 책임)')],
}
for f, pairs in ULD.items():
    for a, b in pairs:
        rep(f, a, b, 1, 't002')

# t007: 건화물 요율 → 일반 컨테이너 요율
rep('ch-docs/ch-cases.html', '청구서의 요율이 드라이 요율인지', '청구서의 요율이 일반 컨테이너 요율인지', 1, 't007')
rep('ch-docs/ch-dnd.html', '40피트 드라이 요율', '40피트 일반 컨테이너 요율', 1, 't007')

# t023: 해상화물운송장(SWB) → SWB(Sea Waybill) (이 문장)
rep('ch-docs/ch-sea-charges.html', '원본 B/L·해상화물운송장(SWB) 60,000원', '원본 B/L·SWB(Sea Waybill) 60,000원', 1, 't023')

# t029: 사장님 문장
rep('battery-docs/b-anx14.html', '포장이 충분한지, 손상·누액·변형된 배터리가 섞여 있지 않은지 화주의 확인서와 사진으로 받아 둔다',
    '포장이 충분한지, 손상·누액·변형된 배터리가 섞여 있지 않은지 확인하고 사진 등 증빙으로 남긴다', 1, 't029')

# t030: 프리 타임 → free time (Charges 두 문서)
for f in ('ch-docs/ch-dnd.html', 'ch-docs/ch-korea-storage.html'):
    rep(f, '프리 타임', 'free time', 0, 't030')

# t031·t032: 선하증권(B/L) → B/L (이 문장들)
rep('ch-docs/ch-dnd.html', '선하증권(B/L) 번호, 컨테이너 번호', 'B/L 번호, 컨테이너 번호', 1, 't031')
rep('tc-docs/tc-basics.html', '설정값이 선하증권(B/L)·부킹 확인서에', '설정값이 B/L·부킹 확인서에', 1, 't031')
rep('ch-docs/ch-korea-storage.html', '선사가 선하증권(B/L)상 수하인', '선사가 B/L상 수하인', 1, 't032')

# t043·t062·t064: 단위탑재용기(ULD) → ULD (이 문장들)
rep('tc-docs/tc-basics.html', '단위탑재용기(ULD) 태그에', 'ULD 태그에', 1, 't043')
rep('tc-docs/tc-air-passive.html', '드라이아이스를 단위탑재용기(ULD)에 넣는', '드라이아이스를 ULD에 넣는', 1, 't062')
rep('uld-docs/uld-buildup.html', '그 한계 안에서 단위탑재용기(ULD)에 짜 올리는', '그 한계 안에서 ULD에 짜 올리는', 1, 't062')
rep('uld-docs/uld-code.html', '단위탑재용기(ULD)에는 "AKE 12345 KE"', 'ULD에는 "AKE 12345 KE"', 1, 't064')

# t048·t050·t051·t054: 인코텀스 문서. 영어만(병기 없음), t054는 사장님 문장
rep('incoterms-docs/inco-gray.html', '7. 지연 비용: Demurrage, Detention, 보관료(Storage)', '7. 지연 비용: Demurrage, Detention, 보관료', 1, 't048')
rep('incoterms-docs/inco-choose.html', 'Demurrage·Detention·보관료(Storage)의 원인별 부담과 무료 장치 기간(free time)을',
    'Demurrage·Detention·Storage의 원인별 부담과 무료 장치 기간(free time)을', 1, 't054')

# t067: 사장님 문장
rep('battery-docs/b-ch3.html', 'EU행 배터리 화물을 다루는 포워더는 화주에게 표시 사항을 서류와 사진으로 확인받을 때 이 장을 기준으로 봅니다.',
    'EU행 배터리 화물을 다루는 포워더와 창고는 입고·선적 전에 표시 사항을 화주 서류·사진 또는 화물 외관으로 확인할 때 이 장을 기준으로 삼을 수 있습니다.', 1, 't067')

# p06: 보상장 → LOI(Letter of Indemnity), 그 뒤는 LOI. 조사는 LOI(엘오아이, 받침 없음)에 맞춘다.
P = {'을': '를', '이': '가', '은': '는', '과': '와', '으로': '로', '': ''}
for f in FILES:
    s = src(f)
    if '보상장' not in s:
        continue
    s = re.sub(r'보상장\(LOI(?:, Letter of Indemnity)?\)(으로|을|이|은|과)?', lambda m: 'LOI(Letter of Indemnity)' + P[m.group(1) or ''], s)
    s = re.sub(r'보상장(으로|을|이|은|과)?(?![가-힣])', lambda m: 'LOI' + P[m.group(1) or ''], s)
    s = s.replace('보상장', 'LOI')
    cache[f] = s
    LOG.append(f'[p06] {f} 보상장 → LOI(Letter of Indemnity)/LOI')

changed = []
for f, t in cache.items():
    if t != open(REPO + f, encoding='utf-8').read():
        open(REPO + f, 'w', encoding='utf-8', newline='').write(t)
        changed.append(f)
os.makedirs(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review'), exist_ok=True)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review', 'apply_r1_owner_log.txt'), 'w', encoding='utf-8').write('\n'.join(LOG))
print('changed', len(changed))
print('\n'.join(LOG))
