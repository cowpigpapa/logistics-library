"""검수표 반영(2026-10-13): 사장님 판정(옛 검수 페이지 73건) + Codex·Antigravity 의견을 문장 단위로 판단한 결과 + 병기 원칙.
문장 단위: 줄마다 git 기록의 '바꾼 뒤 문장'을 찾아 그 문장 안에서만 고친다(사이트 전체 일괄 치환 아님).
사이트 전체 규칙(G…)은 해당 말이 쓰인 곳을 모두 확인한 뒤 넣었다. 결과 로그: apply_log.txt"""
import json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
if '--again' not in sys.argv:
    sys.exit('2026-10-13에 이미 반영한 기록용 스크립트입니다. 새 반영은 이 파일을 본떠 새 스크립트를 만드세요(다시 돌리려면 --again).')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
S = os.path.dirname(D)
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/') + '/'
pairs = json.load(open(os.path.join(S, 'term_sent_all.json'), encoding='utf-8'))
rows = {r['id']: r for r in json.load(open(os.path.join(D, 'owner_rows.json'), encoding='utf-8'))}
plain = lambda s: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s or '')).replace('&amp;', '&').strip()
log = []
cache = {}


def src(f):
    if f not in cache:
        cache[f] = open(REPO + f, encoding='utf-8').read()
    return cache[f]


def put(f, text):
    cache[f] = text


# ---------------------------------------------------------------- 1. 줄 단위(문장 안에서만)
REVERT = ['t085', 't092', 't093', 't117', 't118', 't147', 't187', 't188', 't189', 't190', 't211', 't261', 't285', 't286']
OTHER = {   # id: [(바꾼 뒤 문장 속 말, 새 말)]
    't013': [('정식운송품명', '정식운송품명(PSN)')],
    't049': [('무료 기간(free time)', '무료 장치 기간(free time)')],
    't089': [('USDA 프로브(USDA probe)', 'USDA 프로브')],
    't120': [('액티브(active) 로', '액티브(active)로')],
    't146': [('함께 실을 수 없는 화물은', '혼적할 수 없는 화물은')],
    't149': [('함께 실을 수 없는 화물 격리·화물 간 적합성', '혼적할 수 없는 화물의 격리·화물 간 적합성')],
    't150': [('함께 실을 수 없는 화물 격리', '혼적할 수 없는 화물 격리')],
    't152': [('격리 대상 위험물 함께 적입 금지', '격리 대상 위험물 혼적 금지')],
    't169': [('선사에 컨테이너를 요청할', '컨테이너를 요청할')],
    't203': [('P&I 클럽 등이 공개한', '상호보험조합(P&I 클럽 등)이 공개한')],
    't205': [('P&I 클럽 등이 공개한', '상호보험조합(P&I 클럽 등)이 공개한')],
    't204': [('운송 관련 상호보험(P&I 클럽, 대리점 배상책임보험)이', '운송 관련 상호보험조합과 보험사(P&I 클럽, 대리점 배상책임보험)가')],
    't206': [('P&I 클럽의 사고 사례', '상호보험조합의 사고 사례')],
    't215': [('배터리·자석·드라이아이스 같은 물품(article) 형태의 위험물은', '배터리·자석 같은 물품(article)이나 드라이아이스는')],
    't223': [('포워더 명의 부킹의 책임', '포워더 명의 부킹에 따른 책임')],
    't231': [('적입된 컨테이너의 검증된 총중량', '화물이 적재된 컨테이너의 검증된 총중량')],
    't246': [('장거리 주 방향 TEU당', '헤드홀 TEU당')],
    't251': [('이 칸의 위험은 통관을 수행할 책임', '이 칸은 통관을 수행할 책임')],
    't263': [('항공 포워더(운송취급인)', '항공 포워더')],
    't279': [('포워더로 관여한다면', '포워더가 관여한다면')],
    't284': [('억류 기간을', '통관 보류 기간을')],
    't299': [('받아 확인하고 남겼다', '받아 확인하고 기록해 두었다')],
}


def anchor_replace(f, sentence, old, new):
    """문장 속 old를 원본 파일에서 찾는다: old 앞뒤 글자를 붙인 조각이 원본에 그대로 있으면 그 조각 안에서 바꾼다."""
    text = src(f)
    i = sentence.find(old)
    if i < 0:
        return 'not-in-sentence'
    for L in (24, 16, 10, 6, 3, 0):
        for R in (16, 10, 6, 3, 0):
            win = sentence[max(0, i - L):i + len(old) + R]
            n = text.count(win)
            if n >= 1 and (n == 1 or L + R == 0):
                if L + R == 0 and n > 1:
                    return f'ambiguous({n})'
                put(f, text.replace(win, win.replace(old, new, 1), 1))
                return 'ok'
    return 'not-found'


def core(a, b):
    i = 0
    while i < min(len(a), len(b)) and a[i] == b[i]:
        i += 1
    j = 0
    while j < min(len(a), len(b)) - i and a[-1 - j] == b[-1 - j]:
        j += 1
    return a[i:len(a) - j], b[i:len(b) - j]


for rid in REVERT + list(OTHER):
    r = rows[rid]
    frm, to = plain(r['frm']), plain(r['dst'])
    for p in pairs.get(rid, []):
        f = p['file']
        if rid in OTHER:
            ops = OTHER[rid]
        else:
            ops = [(to, frm)]   # 이 줄이 바꾼 말만 그 문장 안에서 되돌린다(같은 문장의 다른 변경은 건드리지 않음)
        for old, new in ops:
            res = anchor_replace(f, p['after'], old, new)
            if res == 'not-in-sentence' and rid in OTHER:
                continue
            log.append(f'{rid} {f} [{res}] {old} → {new}')


# ---------------------------------------------------------------- 2. 사이트 전체 규칙(쓰인 곳을 모두 확인함)
def docs_files():
    out = []
    for d in os.listdir(REPO):
        if d.endswith('-docs') and os.path.isdir(REPO + d):
            out += [f'{d}/{x}' for x in sorted(os.listdir(REPO + d)) if x.endswith('.html')]
    return out + [x for x in sorted(os.listdir(REPO)) if x.endswith('-library.js')]


FILES = docs_files()


def glob_replace(old, new, files=None, tag=''):
    n = 0
    for f in files or FILES:
        t = src(f)
        k = t.count(old)
        if k:
            put(f, t.replace(old, new)); n += k
            log.append(f'{tag} {f} ×{k} {old} → {new}')
    return n


# 받침 여부에 맞춰 조사 고치기(괄호 앞 낱말이 바뀐 경우)
def has_batchim(ch):
    return '가' <= ch <= '힣' and (ord(ch) - 0xAC00) % 28 != 0


PARTICLES = [('으로', '로'), ('을', '를'), ('이', '가'), ('은', '는'), ('과', '와')]


def swap_abbr(abbr, ko):
    """ABBR(한국어) → 한국어(ABBR), 뒤 조사는 한국어 낱말 끝 받침에 맞춘다."""
    pat = re.compile(re.escape(f'{abbr}({ko})') + r'(으로|로|을|를|이|가|은|는|과|와)?')
    total = 0
    for f in FILES:
        t = src(f)

        def fix(m):
            part = m.group(1) or ''
            if part:
                for a, b in PARTICLES:
                    if part in (a, b):
                        part = a if has_batchim(ko[-1]) else b
                        if part == '으로' and ko[-1] in 'ㄹ' :
                            part = '로'
                        # ㄹ 받침 + 으로 → 로
                        if a == '으로' and has_batchim(ko[-1]) and (ord(ko[-1]) - 0xAC00) % 28 == 8:
                            part = '로'
                        break
            return f'{ko}({abbr}){part}'
        t2, k = pat.subn(fix, t)
        if k:
            put(f, t2); total += k
            log.append(f'G-abbr {f} ×{k} {abbr}({ko}) → {ko}({abbr})')
    return total


G = [
    ('터미널 화물처리비', '터미널 화물 처리비'),     # 사장님 판정 t022·t046·t047
    ('고정점', '고박점'),                           # p02: 82+5곳 모두 lashing/securing point 뜻임을 확인
    ('온도 이탈', '온도 일탈'),                     # p05
    ('수송·적재·하역', '운송·적재·하역'),           # p08
    ('영국 귀족원', '영국 상원'),                   # p14·t261
    ('귀족원', '상원'),
    ('애매한 온도 지시', '모호한 온도 지시'),       # t095·t096
    ('중량·균형', '중량·평형'),                     # t116 (weight and balance)
    ('적컨테이너·빈 컨테이너', '적컨테이너·공컨테이너'),   # t229
    ('그 화물은 불법 운송으로 추정 됩니다', '그 운송은 불법 운송으로 추정됩니다'),   # t272
    ('그 적재물은 불법 운송으로 추정 됩니다', '그 운송은 불법 운송으로 추정됩니다'),
    ('20피트 드라이 컨테이너', '20ft 컨테이너'),    # 사장님 판정 t004
    ('20피트 드라이', '20ft 컨테이너'),
    # 사장님 판정 t048·t050·t051·t054 + 병기 원칙(영어 낱말(한국어))
    ('Demurrage·Detention·보관료의 원인별 부담과 무료 기간(free time)', 'Demurrage(체화료)·Detention(지체료)·보관료(Storage)의 원인별 부담과 무료 장치 기간(free time)'),
    ('7. 지연 비용: Demurrage, Detention, 보관료', '7. 지연 비용: Demurrage(체화료), Detention(지체료), 보관료(Storage)'),
    # VGM: 제도는 '컨테이너 총중량 검증제도(VGM)', 값은 '검증된 총중량(VGM)' (사장님 정의 2026-10-13)
    ('컨테이너 총중량 검증(VGM)없음', '컨테이너 총중량 검증제도(VGM)없음'),
    ('컨테이너 총중량 검증(VGM) 계측비', '검증된 총중량(VGM) 계측비'),
    ('VGM(컨테이너 총중량 검증)', '컨테이너 총중량 검증제도(VGM)'),
    ('VGM(검증된 총중량)', '검증된 총중량(VGM)'),
]
for old, new in G:
    glob_replace(old, new, tag='G')

# p06·t219·t220: 면책각서 → 보상장(LOI는 책임을 면해 주지 않는다는 문서 본문의 설명과 맞춘다). 받침이 생기므로 조사도 고친다.
PMAP = {'를': '을', '가': '이', '는': '은', '와': '과', '로': '으로', '': ''}
for f in FILES:
    t = src(f)
    t2, k = re.subn(r'면책각서(\([^)]*\))?(를|가|는|와|로)?(?![가-힣])', lambda m: '보상장' + (m.group(1) or '') + PMAP[m.group(2) or ''], t)
    t2, k2 = re.subn(r'면책각서', '보상장', t2)
    if k or k2:
        put(f, t2); log.append(f'G-LOI {f} ×{k + k2} 면책각서 → 보상장(조사 맞춤)')
log.append(f"G-check 컨테이너 총중량 검증(VGM) 남은 곳: {sum(src(f).count('컨테이너 총중량 검증(VGM)') for f in FILES)}")

for abbr, ko in [('BIC', '국제컨테이너사무국'), ('SDR', '특별인출권'), ('SDS', '물질안전보건자료'), ('PCM', '상변화물질'),
                 ('VIP', '진공 단열 패널'), ('PUR', '경질 폴리우레탄 폼'), ('EPS', '발포 폴리스티렌'), ('PIP', '패시브 단열 포장'),
                 ('NVOCC', '무선박운송인'), ('LOI', '보상장'), ('WA', '분손 담보'), ('FPA', '단독해손 부담보'),
                 ('EFTA', '유럽자유무역연합'), ('GDV', '독일보험협회')]:
    swap_abbr(abbr, ko)


# ---------------------------------------------------------------- 3. 첫 등장 병기(문서마다 한 번): 영어 낱말(한국어)
def first_gloss(word, gloss, files):
    """문서(조각 파일)마다 본문에서 처음 나오는 word 뒤에 (gloss)를 붙인다. 태그 안·SVG 안·영어 문구 속·이미 괄호가 붙은 곳은 건너뛴다."""
    for f in files:
        t = src(f)
        if f'{word}({gloss})' in t:
            continue
        svg = [(m.start(), m.end()) for m in re.finditer(r'<svg\b.*?</svg>', t, re.S)]
        for m in re.finditer(re.escape(word), t):
            a, b = m.start(), m.end()
            if any(x <= a < y for x, y in svg):
                continue
            lt, gt = t.rfind('<', 0, a), t.rfind('>', 0, a)
            if lt > gt:          # 태그 속성 안
                continue
            nxt, prv = t[b:b + 12], t[max(0, a - 1):a]
            if nxt.startswith('(') or re.match(r'[A-Za-z]', prv or ' ') or re.match(r'\s*(?:and|&amp;|&|[A-Za-z]{2,})', nxt):
                continue
            put(f, t[:b] + f'({gloss})' + t[b:])
            log.append(f'first {f} {word} → {word}({gloss})')
            break


doc_frag = [f for f in FILES if f.endswith('.html')]
first_gloss('Demurrage', '체화료', doc_frag)
first_gloss('Detention', '지체료', doc_frag)
first_gloss('젠셋', '발전기', doc_frag)
first_gloss('서플라이 에어', '급기', doc_frag)
first_gloss('리턴 에어', '환기', doc_frag)

# ---------------------------------------------------------------- 쓰기
changed = []
for f, t in cache.items():
    if t != open(REPO + f, encoding='utf-8').read():
        open(REPO + f, 'w', encoding='utf-8', newline='').write(t)
        changed.append(f)
open(os.path.join(D, 'apply_log.txt'), 'w', encoding='utf-8').write('\n'.join(log))
bad = [l for l in log if '[not-found]' in l or 'ambiguous' in l]
print('changed files', len(changed), 'log lines', len(log), 'problems', len(bad))
print('\n'.join(bad[:40]))
