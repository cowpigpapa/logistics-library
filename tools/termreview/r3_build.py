"""3차 검수표: 2026-10-18 새 문서 6편(통관·운임 계산)에서 처음 정한 용어. 문서의 실제 문장을 붙여 r3.sql을 만든다."""
import html, json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DOCS = {
    'cu-clearance': ('customs', '통관 절차와 HS 코드'), 'cu-fta': ('customs', 'FTA 원산지와 직접운송'), 'cu-bonded': ('customs', '보세구역과 보세운송'),
    'ch-surcharges': ('charges', '해상 할증료'), 'ch-air-weight': ('charges', '항공 운임 중량 계산'), 'ch-lcl': ('charges', 'LCL·운임톤 계산'),
}
# (고를 표기 "A / B", 찾을 말들, 설명)
TERMS = [
    ('적재화물목록 / 적하목록', ['적재화물목록', '적하목록'], '관세법·고시의 정식 이름은 적재화물목록입니다. 실무에서는 적하목록(매니페스트)이 더 흔합니다. 기존 B/L·AWB 문서는 적하목록을 썼습니다. 어느 쪽으로 통일할까요?'),
    ('화물운송주선업자 / 포워더', ['화물운송주선업자'], '관세법은 포워더를 화물운송주선업자라 부릅니다. 새 통관 문서는 법 조문을 설명할 때만 이 이름을 쓰고, 나머지는 포워더라고 썼습니다.'),
    ('관세사등', ['관세사등'], '관세사·관세법인·통관취급법인을 함께 부르는 법령 용어입니다. 처음 나올 때 풀어 썼습니다.'),
    ('실중량 / 총중량', ['실중량'], '항공 운임 문서에서 Gross Weight를 실중량이라 썼습니다. 사이트의 다른 문서는 총중량을 씁니다(VGM, CTU). 항공 운임 맥락에서는 실중량이 실무에 가깝다고 보았습니다.'),
    ('부피 중량 / 부피중량 / 용적중량', ['부피 중량'], 'Volume Weight. 사이트의 기존 표기(띄어 씀)를 따랐습니다.'),
    ('운임 중량(Chargeable Weight)', ['운임 중량'], '기존 기준(과금 중량 ×)을 따랐습니다. C/W라고도 씁니다.'),
    ('운임톤(R/T) / 레비뉴톤 / 프레이트톤', ['운임톤'], 'Revenue Ton. 1CBM과 1,000kg 중 큰 쪽(W/M). 실무에서 "R/T"만 쓰는 경우가 많습니다.'),
    ('콘솔사 / 혼재업체 / 콘솔리데이터', ['콘솔사'], 'LCL 화물을 모아 컨테이너를 채우는 업체(consolidator).'),
    ('코로더(co-loader)', ['코로더'], '자기 컨테이너 없이 다른 콘솔사 컨테이너에 화물을 싣는 포워더.'),
    ('적출(devanning) / 디배닝', ['적출'], '수입 CFS에서 컨테이너에서 화물을 꺼내는 작업.'),
    ('통과선하증권(through B/L) / 통선하증권', ['통과선하증권'], 'FTA 직접운송 증빙 서류. 고시는 "통과선하증권"이라 씁니다.'),
    ('비가공증명서', ['비가공증명서'], '경유국에서 가공하지 않았음을 보여 주는 서류(non-manipulation certificate).'),
    ('제3국 송장 / 3국 송장', ['제3국 송장', '3국 송장'], '제3국 업체가 발행한 인보이스(third-country invoicing).'),
    ('연결원산지증명서(back-to-back)', ['연결원산지증명서'], 'RCEP·한-아세안에서 중간 경유국이 발급하는 원산지증명서.'),
    ('원산지증명서 / 원산지증명서(C/O)', ['원산지증명서'], '새 문서는 약어 없이 원산지증명서라고만 썼습니다. 검색은 C/O로도 찾아집니다. 첫 등장에 (C/O)를 붙일까요?'),
    ('협정관세 / FTA 관세', ['협정관세'], 'FTA 특례법의 정식 이름은 협정관세입니다.'),
    ('보세운송업자', ['보세운송업자'], '관세법 제222조에 따라 등록한 업자. 포워더 지위만으로는 보세운송 신고인이 될 수 없다고 썼습니다.'),
    ('화물관리번호', ['화물관리번호'], 'MRN·MSN·HSN을 합친 보세화물 관리번호.'),
    ('할증료 약어 영문 그대로(BAF·LSS·CAF…)', ['BAF', 'CAF'], '할증료 이름은 유류할증료(BAF)처럼 첫 등장에 한국어를 붙이고 그 뒤는 약어만 썼습니다.'),
]


def sentences(src):
    src = re.sub(r'<(?:br|/p|/li|/h[1-6]|/td|/th|/tr|/div)\b[^>]*>', '\n', src)
    src = html.unescape(re.sub(r'<[^>]+>', ' ', src))
    out = []
    for line in src.split('\n'):
        line = re.sub(r'\s+', ' ', line).strip()
        out += [s.strip() for s in re.split(r'(?<=[.!?])\s+', line) if len(s.strip()) > 12]
    return out


SENTS = {}
for d, (slug, title) in DOCS.items():
    folder = 'cu-docs' if d.startswith('cu-') else 'ch-docs'
    SENTS[d] = sentences(open(os.path.join(REPO, folder, d + '.html'), encoding='utf-8').read())

q = lambda s: "'" + s.replace("'", "''") + "'"
rows, sql = [], []
for n, (frm, words, note) in enumerate(TERMS, 1):
    ctx, count, cats = [], 0, set()
    for d, (slug, title) in DOCS.items():
        hits = [s for s in SENTS[d] if any(w in s for w in words)]
        count += len(hits)
        if hits:
            cats.add('Customs' if slug == 'customs' else 'Charges')
        for s in hits[:2]:
            if len(ctx) < 3:
                ctx.append({'url': f'/library/{slug}/{d}', 'title': title, 'text': s[:400]})
    rid = f'r3-{n:03d}'
    rows.append({'id': rid, 'frm': frm, 'count': count, 'ctx': ctx})
    sql.append(f"insert into public.term_review (id, grp, frm, dst, count, cats, note, sents, ctx, round) values ({q(rid)}, '확인 필요', {q(frm)}, '', {count}, {q(' · '.join(sorted(cats)))}, {q(note)}, '[]'::jsonb, {q(json.dumps(ctx, ensure_ascii=False))}::jsonb, 3) "
               f"on conflict (id) do update set frm = excluded.frm, note = excluded.note, ctx = excluded.ctx, count = excluded.count, cats = excluded.cats;")
open(os.path.join(D, 'r3.sql'), 'w', encoding='utf-8').write('\n'.join(sql))
for r in rows:
    print(r['id'], r['count'], r['frm'], '|', len(r['ctx']))
