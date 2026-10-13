"""검수표(term_review)에 판정·반영 내역을 기록하는 SQL → record.sql"""
import glob, json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
rows = {r['id']: r for r in json.load(open(os.path.join(D, 'owner_rows.json'), encoding='utf-8'))}
owner = {}
for f in glob.glob(os.path.join(D, 'owner_art', 'terms', '*.json')):
    d = json.load(open(f, encoding='utf-8'))
    d = d.get('data', d)
    owner[os.path.basename(f)[:-5]] = d
NOTE = {   # 사장님 판정을 반영하며 조정한 것
    't048': '반영: 병기 원칙(영어 낱말(한국어))에 맞춰 Demurrage(체화료)·Detention(지체료)·보관료(Storage)로',
    't050': '반영: Demurrage(체화료)·Detention(지체료)·보관료(Storage) 병기 원칙으로',
    't051': '반영: 문서 첫 등장 Demurrage(체화료)·Detention(지체료)',
    't054': '반영: Demurrage(체화료)·Detention(지체료)·보관료(Storage), 무료 장치 기간(free time)',
    't074': '조정: 리퍼 문서는 환기(換氣, 외기 환기)를 따로 써서 단독 "환기"는 헷갈림 → 문서 첫 등장에 서플라이 에어(급기)·리턴 에어(환기, 還氣)로 병기. 단독 표기로 바꿀지 확인 필요',
    't075': '조정: 첫 등장 리턴 에어(환기, 還氣) 병기(t074 메모 참고)',
    't076': '조정: 첫 등장 서플라이 에어(급기) 병기',
    't078': '반영: 문서마다 첫 등장에 젠셋(발전기)',
    't004': '반영: Charges 요율 예시의 20피트 드라이 → 20ft 컨테이너(15곳). 같은 문장의 40피트 표기는 그대로라 통일 여부 확인 필요',
    't022': '반영: 터미널 화물 처리비(THC)로 사이트 전체 통일',
    't046': '반영: 터미널 화물 처리비(THC)', 't047': '반영: 터미널 화물 처리비(THC)',
    't036': '반영: 특별인출권(SDR)으로 사이트 전체(조사 맞춤)', 't061': '반영: 특별인출권(SDR)으로',
    't013': '반영: 정식운송품명(PSN)', 't049': '반영: 무료 장치 기간(free time)', 't052': '반영: 단위탑재용기(ULD)',
    't085': '반영: 냉해로 되돌림', 't000': '반영: 문서 첫 등장에 Demurrage(체화료)', 't001': '반영: 문서 첫 등장에 Detention(지체료)',
}
MINE = {   # id: (verdict, alt, 근거)
    'p00': ('keep', '', '상법 조문·판례 문장은 양륙항, 실무 설명은 양하항 그대로'),
    'p01': ('keep', '', '자중(tare) 유지'), 'p02': ('other', '고박점', '두 AI 모두 고박점. 고정점 87곳 모두 lashing·securing point 뜻이라 고박점으로 통일'),
    'p03': ('keep', '', '한정수량(LQ)은 IMDG·IATA, 소량위험물은 국내 조례로 따로 씀'),
    'p04': ('keep', '', '상법 lien은 유치권, ICC detainment는 억류'), 'p05': ('other', '온도 일탈', '두 AI 모두 온도 일탈(GDP excursion)'),
    'p06': ('other', '보상장(LOI)', 'LOI는 책임을 면해 주지 않으므로 면책각서보다 보상장. 문서 본문 설명과 맞춤'),
    'p07': ('keep', '', '봉인(규정·판례 인용)과 씰(장치·번호) 문맥별 유지'), 'p08': ('other', '운송·적재·하역', 'EU 규정 transport, loading and unloading'),
    'p09': ('keep', '', 'WSR 번역 61곳이라 일괄 변경 보류(Codex만 의견)'), 'p10': ('keep', '', '처브 한국 안내문의 서류명 그대로 인용'),
    'p11': ('keep', '', '보험인수증(cover note) 유지'), 'p12': ('keep', '', 'FCL 마감일(cut-off) 유지'), 'p13': ('keep', '', '영업일 유지'),
    'p14': ('other', '영국 상원', '판례 인용 관행은 영국 상원'),
    't006': ('keep', '', 'NOR 설명의 일반 화물용 유지'), 't080': ('keep', '', '리퍼 소켓'), 't089': ('other', 'USDA 프로브', 'USDA 프로브(USDA probe) 중복 정리'),
    't092': ('revert', '', '습식 얼음(wet ice): 한국어 설명어(영어) 원칙'), 't093': ('revert', '', '습식 얼음'),
    't095': ('other', '모호한 온도 지시', '두 AI 모두 모호한(ambiguous)'), 't096': ('other', '모호한', '두 AI 모두 모호한'),
    't101': ('keep', '', '운임 중량(chargeable weight)'), 't102': ('keep', '', '최소 운임 중량'), 't107': ('keep', '', ''),
    't116': ('other', '중량·평형', '두 AI 모두 weight and balance = 중량·평형'), 't117': ('revert', '', '두 AI 모두: FAA operator는 운항자'),
    't118': ('revert', '', '두 AI 모두 운항자'), 't120': ('keep', '', '이미 액티브(active)로'), 't129': ('keep', '', ''), 't132': ('keep', '', 'Airline Prefix'),
    't133': ('keep', '', ''), 't143': ('keep', '', ''), 't146': ('other', '혼적할 수 없는 화물', '혼적으로 통일(혼재는 consolidation)'),
    't147': ('revert', '', '혼적'), 't149': ('other', '혼적할 수 없는 화물의 격리·화물 간 적합성', ''), 't150': ('other', '혼적할 수 없는 화물 격리', ''),
    't152': ('other', '격리 대상 위험물 혼적 금지', '두 AI 모두 혼적 금지'), 't153': ('keep', '', ''), 't154': ('keep', '', ''), 't155': ('keep', '', ''), 't156': ('keep', '', ''),
    't158': ('keep', '', '사장님이 t014에서 총중량 유지'), 't159': ('keep', '', ''), 't169': ('other', '컨테이너를 요청할', 'CTU Code는 해상만이 아니므로 선사 빼기'),
    't171': ('keep', '', ''), 't173': ('keep', '', ''), 't184': ('keep', '', ''), 't185': ('keep', '', '적하보험 TPND는 도난·발하·불착'),
    't187': ('revert', '', '혼적 화물'), 't188': ('revert', '', '중고차·잡화 혼적'), 't189': ('revert', '', '혼적 컨테이너'), 't190': ('revert', '', '혼적 화물'),
    't196': ('keep', '', ''), 't202': ('keep', '', 'House B/L(사장님 t021·t026과 같게)'),
    't203': ('other', '상호보험조합(P&I 클럽 등)', '출처가 P&I 클럽만은 아님'), 't204': ('other', '상호보험조합과 보험사(P&I 클럽, 대리점 배상책임보험)', ''),
    't205': ('other', '상호보험조합(P&I 클럽 등)', ''), 't206': ('other', '상호보험조합의 사고 사례', ''),
    't209': ('keep', '', ''), 't210': ('keep', '', 'JC2010/014(LMA3100) 정식 명칭은 Sanction 단수'), 't211': ('revert', '', '창고 간(띄어 씀)'),
    't215': ('other', '배터리·자석 같은 물품(article)이나 드라이아이스는', '드라이아이스는 물품(article)이 아니라 물질'),
    't216': ('keep', '', '사장님 t004에 따라 20ft 컨테이너로'), 't218': ('keep', '', '항만시설사용료인 체화료'),
    't219': ('other', '보상장(LOI)', 'p06과 같게'), 't220': ('other', '보상장(LOI)', 'p06과 같게'),
    't223': ('other', '포워더 명의 부킹에 따른 책임', ''), 't225': ('keep', '', ''), 't229': ('other', '적컨테이너·공컨테이너', '짝 맞춤'),
    't231': ('other', '화물이 적재된 컨테이너', 'SOLAS packed container'), 't234': ('keep', '', ''), 't244': ('keep', '', ''),
    't246': ('other', '헤드홀', '같은 문장 뒤쪽도 헤드홀로'), 't251': ('other', '이 칸은 통관을 수행할 책임', '통관 책임 칸은 물품 위험이 아님'),
    't255': ('keep', '', ''), 't258': ('keep', '', 'AWB는 3부(상법 제923조)'), 't259': ('keep', '', ''), 't260': ('keep', '', ''),
    't261': ('revert', '', '영국 상원'), 't263': ('other', '항공 포워더', ''), 't266': ('keep', '', ''),
    't267': ('keep', '', ''), 't268': ('keep', '', ''), 't269': ('keep', '', ''), 't270': ('keep', '', ''), 't271': ('keep', '', ''),
    't272': ('other', '그 운송은 불법 운송으로 추정됩니다', '불법인 것은 화물이 아니라 운송'), 't273': ('keep', '', ''), 't275': ('keep', '', ''),
    't278': ('keep', '', ''), 't279': ('other', '포워더가 관여한다면', ''), 't280': ('keep', '', ''), 't284': ('other', '통관 보류 기간', ''),
    't285': ('revert', '', 'EU 규정 관서명 수출세관'), 't286': ('revert', '', '출국세관'), 't291': ('keep', '', ''), 't292': ('keep', '', ''), 't293': ('keep', '', ''),
    't295': ('keep', '', ''), 't297': ('keep', '', '포워더는 화주 서류로 확인(운영 원칙)'), 't298': ('keep', '', '포워더는 화주 서류로 확인'),
    't299': ('other', '화주에게 적입 전 사진을 받아 확인하고 기록해 두었다', '문장 끝 비문 정리'), 't310': ('keep', '', ''),
}
q = lambda s: "'" + str(s).replace("'", "''") + "'"
lines, stat = [], {'owner': 0, 'mine': 0, 'both': 0, 'none': 0}
for rid, r in rows.items():
    if rid in owner:
        o = owner[rid]
        v, alt, memo = o.get('verdict', ''), o.get('alt', ''), '[사장님 판정] ' + (NOTE.get(rid) or '반영함') + (f" / 메모: {o['memo']}" if o.get('memo') else '')
        stat['owner'] += 1
    elif rid in MINE:
        v, alt, why = MINE[rid]
        memo = '[Claude 판단, 반영함] ' + (why or 'Codex·Antigravity 의견과 문장을 보고 판단'); stat['mine'] += 1
    else:
        rv = r['rev'] or {}
        if (rv.get('codex') or {}).get('verdict') == 'keep' and (rv.get('agy') or {}).get('verdict') == 'keep':
            v, alt, memo = 'keep', '', '[두 AI 모두 좋음] 그대로 둠'; stat['both'] += 1
        else:
            stat['none'] += 1; continue
    lines.append(f"update public.term_review set verdict={q(v)}, alt={q(alt)}, memo={q(memo)}, updated_at=now() where id={q(rid)};")
open(os.path.join(D, 'record.sql'), 'w', encoding='utf-8').write('\n'.join(lines))
print(stat, len(lines))
