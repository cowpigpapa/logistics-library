"""2차 검수표: 2026-10-13 검수표 반영 커밋(d36b94c)에서 바뀐 문장을 '바뀐 말'별로 묶는다 → r2_items.json, r2.sql"""
import difflib, html, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/')
A, B = 'd36b94c^', 'd36b94c'


def git(*a):
    r = subprocess.run(['git', *a], cwd=REPO, capture_output=True)
    return r.stdout.decode('utf-8', 'replace') if r.returncode == 0 else None


SENT = re.compile(r'(?<=[.!?])\s+(?=\S)')


def sentences(src, js=False):
    if js:
        src = src.replace('\\n', '\n').replace("\\'", "'").replace('\\"', '"')
    src = re.sub(r'<(script|style)\b.*?</\1>', ' ', src, flags=re.S)
    src = re.sub(r'</?(?:tspan|text)\b[^>]*>', ' ', src)
    src = re.sub(r'<(?:br|/p|/li|/h[1-6]|/td|/th|/tr|/div|/figcaption|/dt|/dd|/summary|/caption|/blockquote|/svg|/g)\b[^>]*>', '\n', src)
    src = html.unescape(re.sub(r'<[^>]+>', ' ', src))
    out = []
    for line in src.split('\n'):
        line = re.sub(r'\s+', ' ', line).strip()
        for s in SENT.split(line):
            if len(s.strip()) >= 2:
                out.append(s.strip())
    return out


files = [f for f in git('diff', '--name-only', A, B).split()
         if (f.endswith('.html') and '-docs/' in f) or f.endswith('-library.js')]
pairs = []
for f in files:
    a, b = sentences(git('show', f'{A}:{f}'), f.endswith('.js')), sentences(git('show', f'{B}:{f}'), f.endswith('.js'))
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op != 'replace':
            continue
        used = set()
        for o in a[i1:i2]:
            best, bj = 0, None
            for j, n in enumerate(b[j1:j2]):
                if j in used:
                    continue
                r = difflib.SequenceMatcher(None, o, n, autojunk=False).ratio()
                if r > best:
                    best, bj = r, j
            if bj is not None and best >= 0.5:
                used.add(bj)
                pairs.append((f, o, b[j1 + bj]))
print('files', len(files), 'pairs', len(pairs))

# 문서 주소
idx = json.loads(open(REPO + '/library-index-data.js', encoding='utf-8').read().split('=', 1)[1].rstrip().rstrip(';'))
docs = {i: (f"/library/{c['slug']}/{i}", d['title'], c['name']) for g in idx for c in g['cats'] for i, d in c['docs'].items()}
cur = {}
for root, _, fs in os.walk(REPO + '/library'):
    for fn in fs:
        if fn.endswith('.html') and os.path.basename(root) != 'library':
            cur[fn[:-5]] = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', open(os.path.join(root, fn), encoding='utf-8').read())))


def where(f, after):
    if '-docs/' in f:
        i = f.rsplit('/', 1)[1][:-5]
        if i in docs:
            return docs[i]
    for i, t in cur.items():
        if after[:30] in t and i in docs:
            return docs[i]
    return ('', os.path.basename(f), '')


# 바뀐 말 목록: (묶음, 전, 후, 근거)
O, C, R, Q = '사장님 판정 반영', 'Claude 판단', '병기 원칙', '확인 필요'
EDITS = [
    (O, '저온장해', '냉해', '사장님 판정 t085(되돌리기)'),
    (O, '20피트 드라이', '20ft 컨테이너', '사장님 판정 t004. 같은 문장의 40피트는 그대로 → 확인 필요 줄 참고'),
    (O, '터미널 화물처리비', '터미널 화물 처리비', '사장님 판정 t022·t046·t047(터미널 화물 처리비(THC))'),
    (O, '정식운송품명', '정식운송품명(PSN)', '사장님 판정 t013'),
    (O, '무료 기간(free time)', '무료 장치 기간(free time)', '사장님 판정 t049·t054'),
    (O, 'Demurrage·Detention·보관료의', 'Demurrage(체화료)·Detention(지체료)·보관료(Storage)의', '사장님 판정 t054 + 병기 원칙(영어(한국어))'),
    (O, 'Demurrage, Detention, 보관료', 'Demurrage(체화료), Detention(지체료), 보관료(Storage)', '사장님 판정 t048 + 병기 원칙'),
    (C, '웻 아이스', '습식 얼음', 'Codex 되돌리기 / Antigravity 좋음 → 한국어 설명어(영어) 원칙으로 습식 얼음(wet ice)'),
    (C, '운항사', '운항자', '두 AI 모두 되돌리기: FAA 규정의 operator는 운항자'),
    (C, '함께 적입', '혼적', '격리 대상끼리 함께 싣는 것은 혼적(Antigravity 되돌리기)'),
    (C, '함께 실을 수 없는', '혼적할 수 없는', 'CTU incompatible goods: 혼적으로 통일'),
    (C, '여러 품목을 함께 적입한', '혼적', '중고차·잡화 혼적(Antigravity 되돌리기)'),
    (C, '잡화를 함께 적입한', '잡화 혼적', '중고차·잡화 혼적'),
    (C, '창고간', '창고 간', 'Codex 되돌리기: 의존 명사 간은 띄어 씀'),
    (C, '귀족원', '상원', '판례 인용 관행: 영국 상원'),
    (C, '수출 세관', '수출세관', 'Codex: EU 폐기물 규정의 관서명(customs office of export)'),
    (C, '출국 세관', '출국세관', 'Codex: 관서명(customs office of exit)'),
    (C, 'USDA 프로브(USDA probe)', 'USDA 프로브', 'Antigravity: 같은 말 중복'),
    (C, '선사에 컨테이너를', '컨테이너를', 'Codex: CTU Code는 해상만 다루지 않음'),
    (C, 'P&I 클럽', '상호보험조합', 'Codex: 출처가 P&I 클럽만은 아님(TT Club 등)'),
    (C, '드라이아이스 같은 물품(article) 형태의 위험물은', '물품(article)이나 드라이아이스는', 'Codex: 드라이아이스는 물품이 아니라 물질'),
    (C, '부킹의 책임', '부킹에 따른 책임', 'Codex: 조사 연결'),
    (C, '적입된 컨테이너', '화물이 적재된 컨테이너', 'SOLAS packed container'),
    (C, '장거리 주 방향', '헤드홀', 'Codex: 같은 문장 앞쪽과 통일'),
    (C, '이 칸의 위험은', '이 칸은', 'Codex: 통관 책임 칸은 물품 위험이 아님'),
    (C, '포워더(운송취급인)', '포워더', 'Antigravity: 괄호 불필요'),
    (C, '포워더로 관여', '포워더가 관여', 'Antigravity: 조사'),
    (C, '억류 기간', '통관 보류 기간', 'Codex: 서류 불일치로 세관에서 풀리지 않는 상황'),
    (C, '확인하고 남겼다', '확인하고 기록해 두었다', 'Antigravity: 목적어 빠진 비문'),
    (C, '고정점', '고박점', '결정 필요 p02: 두 AI 모두 고박점(87곳 모두 lashing·securing point)'),
    (C, '온도 이탈', '온도 일탈', '결정 필요 p05: 두 AI 모두 온도 일탈'),
    (C, '수송·적재·하역', '운송·적재·하역', '결정 필요 p08: EU 규정 transport, loading and unloading'),
    (C, '면책각서', '보상장', '결정 필요 p06: LOI는 책임을 면해 주지 않음(문서 본문 설명과 맞춤)'),
    (C, '애매한 온도 지시', '모호한 온도 지시', '두 AI 모두 모호한(ambiguous)'),
    (C, '중량·균형', '중량·평형', '두 AI 모두 weight and balance = 중량·평형'),
    (C, '적컨테이너·빈 컨테이너', '적컨테이너·공컨테이너', 'Antigravity: 짝 맞춤'),
    (C, '불법 운송으로 추정 됩니다', '불법 운송으로 추정됩니다', 'Codex: 불법인 것은 화물이 아니라 운송'),
    (R, 'Demurrage', 'Demurrage(체화료)', '병기 원칙: 문서마다 처음 한 번 영어(한국어)'),
    (R, 'Detention', 'Detention(지체료)', '병기 원칙: 문서마다 처음 한 번'),
    (R, '젠셋', '젠셋(발전기)', '사장님 판정 t078: 문서마다 처음 한 번'),
    (R, '서플라이 에어', '서플라이 에어(급기)', '사장님 판정 t076 조정: 첫 등장 병기'),
    (R, '리턴 에어', '리턴 에어(환기, 還氣)', '사장님 판정 t075 조정: 외기 환기(換氣)와 구분 → 확인 필요 줄 참고'),
    (R, 'SDR(특별인출권)', '특별인출권(SDR)', '한국어(약어), 조사는 한국어 말에 맞춤'),
    (R, 'BIC(국제컨테이너사무국)', '국제컨테이너사무국(BIC)', '한국어(약어)'),
    (R, 'SDS(물질안전보건자료)', '물질안전보건자료(SDS)', '한국어(약어)'),
    (R, 'PCM(상변화물질)', '상변화물질(PCM)', '한국어(약어)'),
    (R, 'VIP(진공 단열 패널)', '진공 단열 패널(VIP)', '한국어(약어)'),
    (R, 'PUR(경질 폴리우레탄 폼)', '경질 폴리우레탄 폼(PUR)', '한국어(약어)'),
    (R, 'EPS(발포 폴리스티렌)', '발포 폴리스티렌(EPS)', '한국어(약어)'),
    (R, 'PIP(패시브 단열 포장)', '패시브 단열 포장(PIP)', '한국어(약어)'),
    (R, 'NVOCC(무선박운송인)', '무선박운송인(NVOCC)', '한국어(약어)'),
    (R, 'LOI(보상장)', '보상장(LOI)', '한국어(약어)'),
    (R, 'WA(분손 담보)', '분손 담보(WA)', '한국어(약어)'),
    (R, 'FPA(단독해손 부담보)', '단독해손 부담보(FPA)', '한국어(약어)'),
    (R, 'EFTA(유럽자유무역연합)', '유럽자유무역연합(EFTA)', '한국어(약어)'),
    (R, 'GDV(독일보험협회)', '독일보험협회(GDV)', '한국어(약어)'),
    (R, 'VGM(컨테이너 총중량 검증)', '컨테이너 총중량 검증제도(VGM)', '사장님 정의: 제도는 컨테이너 총중량 검증제도(VGM)'),
    (R, '컨테이너 총중량 검증(VGM)', '컨테이너 총중량 검증제도(VGM)', '사장님 정의'),
    (R, 'VGM(검증된 총중량)', '검증된 총중량(VGM)', '신고하는 값은 검증된 총중량(VGM)'),
    (R, '검증(VGM) 계측비', '검증된 총중량(VGM) 계측비', '값(계측 대상)이므로 검증된 총중량'),
]
groups = {i: [] for i in range(len(EDITS))}
unmatched = []
for f, o, n in pairs:
    hit = False
    for i, (g, old, new, why) in enumerate(EDITS):
        if old in o and new in n and (o.count(new) < n.count(new) or o.count(old) > n.count(old)):
            groups[i].append((f, o, n)); hit = True
            break
    if not hit:
        unmatched.append((f, o, n))
print('unmatched', len(unmatched))
for f, o, n in unmatched[:15]:
    print(' ~', f, '|', o[:90], '→', n[:90])

items = []
for i, (g, old, new, why) in enumerate(EDITS):
    ps = groups[i]
    if not ps:
        continue
    sents, cats = [], []
    for f, o, n in ps:
        url, title, cat = where(f, n)
        sents.append({'url': url, 'title': title, 'before': o[:700], 'after': n[:700]})
        if cat and cat not in cats:
            cats.append(cat)
    items.append({'id': f'r2-{len(items) + 1:03d}', 'grp': g, 'frm': old, 'dst': new, 'count': len(ps),
                  'cats': ' · '.join(cats), 'note': why, 'sents': sents})

# 확인 필요(사장님 결정이 필요한 것) — 지금 문장 예시를 붙인다
def examples(word, n=3, exclude=None):
    out = []
    for i, t in cur.items():
        if i not in docs:
            continue
        for m in re.finditer(re.escape(word), t):
            s = t[max(0, m.start() - 40):m.end() + 110]
            if exclude and exclude in s:
                continue
            out.append({'url': docs[i][0], 'title': docs[i][1], 'text': '…' + s.strip() + '…'})
            break
        if len(out) >= n:
            break
    return out

QUESTIONS = [
    ('리턴 에어 → 환기 / 서플라이 에어 → 급기 (본문 전체)',
     '지금은 문서 첫 등장에만 서플라이 에어(급기)·리턴 에어(환기, 還氣)로 병기했습니다. 리퍼 문서에는 환기(換氣, 외기 환기 ㎥/h 설정)가 수십 곳 있어 본문 전체를 급기·환기로 바꾸면 두 뜻이 섞입니다. 전체를 바꾸려면 외기 환기를 다른 말(예: 외기 유입)로 바꿔야 합니다. 지금대로면 "지금대로", 전체 변경이면 "이걸로 통일"에 원하는 말을 적어 주세요.', '리턴 에어(환기, 還氣) 제어, 환기'),
    ('20ft 컨테이너 / 40피트 (피트 표기 통일)',
     '판정대로 Charges 요율 예시의 20피트 드라이를 20ft 컨테이너로 바꿨는데, 같은 문장과 사이트 전체에는 20피트·40피트 표기가 남아 있습니다. 사이트 전체를 20ft·40ft로 통일할지 정해 주세요.', '40피트는 2TEU로 두 배. 20ft'),
    ('보관료(Storage)', 'Demurrage(체화료)·Detention(지체료)과 함께 적어 주신 보관료(Storage)는 한국어가 주된 말이라 한국어(영어) 순서로 두었습니다. Storage(보관료)로 바꿀지 확인해 주세요.', '보관료(Storage)'),
]
for title, note, word in QUESTIONS:
    items.append({'id': f'r2-{len(items) + 1:03d}', 'grp': Q, 'frm': title, 'dst': '', 'count': 0, 'cats': '', 'note': note,
                  'sents': [], 'ctx': examples(word)})
json.dump(items, open(os.path.join(D, 'r2_items.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
q = lambda s: "'" + str(s).replace("'", "''") + "'"
lines = ["alter table public.term_review add column if not exists round integer not null default 1;",
         "delete from public.term_review where round = 2;"]
for it in items:
    lines.append("insert into public.term_review (id, grp, frm, dst, count, cats, note, sents, ctx, round) values ("
                 f"{q(it['id'])}, {q(it['grp'])}, {q(it['frm'])}, {q(it['dst'])}, {it['count']}, {q(it['cats'])}, {q(it['note'])}, "
                 f"{q(json.dumps(it['sents'], ensure_ascii=False))}::jsonb, {q(json.dumps(it.get('ctx', []), ensure_ascii=False))}::jsonb, 2);")
open(os.path.join(D, 'r2.sql'), 'w', encoding='utf-8').write('\n'.join(lines))
from collections import Counter
print('items', len(items), Counter(it['grp'] for it in items), 'sentences', sum(it['count'] for it in items))
