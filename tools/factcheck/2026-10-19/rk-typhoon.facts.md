# rk-typhoon FACTS (2026-10-19 확인)

법령·고시·판례 원문은 국가법령정보센터 Open API(lawService.do, OC=test)로 내려받아 대조했다(scratchpad/rk/*.txt, rk/law/상법.txt, rkty/prec_*.xml). PDF는 curl로 받아 pdftotext로 본문을 확인했다(scratchpad/rk/*.pdf). 브라우저 자동화는 쓰지 않았다(curl, WebFetch, WebSearch만).

## 출처 약칭과 URL
- 기상법 = 기상법(법률 제21463호, 공포 2026. 3. 17., 시행 2026. 9. 18.) — https://www.law.go.kr/법령/기상법
- 기상령 = 기상법 시행령(대통령령 제36679호, 공포 2026. 9. 15., 시행 2026. 9. 18.) — https://www.law.go.kr/법령/기상법시행령
- KMA-통보문 = 날씨누리 도움말 통보문(태풍) — https://www.weather.go.kr/wnuri_help/html/typhoon/report.jsp?menu=1
- KMA-상세 = 날씨누리 도움말 태풍 상세정보 — https://www.weather.go.kr/wnuri_help/html/typhoon/detail.jsp
- 입출항법 = 선박의 입항 및 출항 등에 관한 법률(API가 준 판: 법률 제21638호, 공포 2026. 5. 12., 시행 2026. 11. 13. 예정. 제8조의2는 "[본조신설 2022.10.18]"이고 개정 표시가 없어 현재 시행본과 같은 문언으로 판단) — https://www.law.go.kr/법령/선박의입항및출항등에관한법률
- 입출항령 = 같은 법 시행령(대통령령 제33913호, 시행 2023. 12. 12.) — https://www.law.go.kr/법령/선박의입항및출항등에관한법률시행령
- 부산항법 = 부산항 항법 등에 관한 규칙(부산지방해양수산청고시 제2026-124호, 발령·시행 2026. 7. 1.) — https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000281634
- 해교법 = 해상교통안전법(API 판: 법률 제19573호, 시행 2024. 1. 26.) — https://www.law.go.kr/법령/해상교통안전법
- 해교규칙 = 해상교통안전법 시행규칙(해양수산부령 제734호, 시행 2025. 5. 26.), 별표 10 <개정 2025. 1. 3.> — https://www.law.go.kr/법령/해상교통안전법시행규칙
- 해교령 = 해상교통안전법 시행령(대통령령 제35531호, 시행 2025. 5. 20.)
- 재난법 = 재난 및 안전관리 기본법(법률 제21313호, 시행 2026. 7. 22.) — https://www.law.go.kr/법령/재난및안전관리기본법
- 산안규칙 = 산업안전보건기준에 관한 규칙(API 판: 고용노동부령 제450호, 시행 2025. 9. 1.; 검색 목록에는 시행 2026. 3. 2.로 표시되어 판 번호는 문서에 쓰지 않음) — https://www.law.go.kr/법령/산업안전보건기준에관한규칙
- 상법 = 상법(시행 2026. 9. 10.) — https://www.law.go.kr/법령/상법
- 판례A = 대법원 2005. 2. 18. 선고 2002다2256 판결 — https://www.law.go.kr/LSW/precInfoP.do?precSeq=83701
- 판례B = 대법원 1983. 3. 22. 선고 82다카1533 판결 — https://www.law.go.kr/LSW/precInfoP.do?precSeq=97424
- 판례C = 대법원 2016. 6. 23. 선고 2015다5194 판결(기존 ins-icc 문서 인용 그대로) — https://www.law.go.kr/LSW/precInfoP.do?precSeq=182981
- ICC-A/B/C = Institute Cargo Clauses (A)(B)(C) 1/1/09(LMA/IUA), EFU 공개본 — https://efuinsurance.com/resource/clauses/marine/1.pdf, /2.pdf, /3.pdf
- PNC = 2026 PNC Standard Tariff(시행 2026. 1. 1.) — https://www.pncport.com/resources/homepage/kor/data/2026_PNC_Standard_Tariff.pdf
- HJNC = HJNC Standard Rate(Effective April 1st 2026) — https://www.hjnc.co.kr/upload/main/HJNC%ED%91%9C%EC%A4%80%EC%9A%94%EC%9C%A8.pdf
- BNCT-202 = BNCT 공지 "수출 화물(Early Gate-In Service) 선반입 관련 변경사항 안내"(2024. 4. 5.) — https://www.bnctkorea.com/board/notice/detail?no=202
- BNCT-228 = BNCT 공지 "수출화물 선반입서비스(Early Gate-In Service) 요율 조정 안내"(2026. 3. 9.) — https://www.bnctkorea.com/board/notice/detail?no=228
- HL-KR = Hapag-Lloyd Korea Import D&D(Effective 1st January 2025; 파일명 Aug2025) — https://www.hapag-lloyd.com/content/dam/website/downloads/detention_demurrage/South_Korea_demurrage_detention_import_Aug2025.pdf
- ONE = ONE "Notice of Demurrage and Detention Tariff Update"(2026. 3. 2., 시행 2026. 4. 1./FMC·캐나다 5. 1.) — https://kr.one-line.com/sites/southkorea/files/2026-03/D%26D%20Customer%20Advisory_KR_FY2026_1.pdf
- HL-US = Hapag-Lloyd "Detention and Demurrage Tariff Guide for the United States"(Publish date: May, 2026) — https://www.hapag-lloyd.com/content/dam/website/downloads/detention_demurrage/Detention_and_Demurrage_Guide_USA_May_2026.pdf
- HL-STI = Hapag-Lloyd "Storage at Transit Port (STI) Charges for Emergency Contingency Routings" — https://www.hapag-lloyd.com/content/dam/website/downloads/pdf/STORAGE_AT_TRANSIT_PORT_CHARGES_FOR_EMERGENCY_CONTINGENC_ROUTINGS.pdf
- MSK-T = Maersk Terms for Carriage(2026. 10. 19. 열람, 버전 표기 없음. curl은 두 번째 요청부터 Akamai 차단, WebFetch로 조문 확인) — https://terms.maersk.com/carriage
- MSK-0904 = Maersk "East Asia typhoon season impacting logistics"(2026. 9. 4.) — https://www.maersk.com/news/articles/2026/09/04/east-asia-typhoon-season-impacting-logistics
- MSK-0918 = Maersk "East Asia typhoon season: Update 2"(2026. 9. 18.) — https://www.maersk.com/news/articles/2026/09/18/east-asia-typhoon-season-update-2
- CFR = 46 CFR 545.5(eCFR API, 2026-10-01 기준) — https://www.ecfr.gov/current/title-46/chapter-IV/subchapter-B/part-545/section-545.5
- HI = 현대해상 e-Cargo 부가 위험 안내(기존 ins-icc 문서 인용) — https://www.hi.co.kr/cargo/serviceAction.do

## 1. 태풍정보와 특보 기준
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 태풍정보는 현재 분석 시각과 향후 최대 5일간 예상 시각 | KMA-통보문 | "일시는 현재 분석한 시각(8일 09시)과 향후 최대 5일간(...)의 예상 시각을 나타낸다." |
| 70% 확률반경 = 최근 3년 예보오차 70% 값 | KMA-통보문, KMA-상세 | "70% 확률 반경은 최근 3년 태풍 예보오차 확률분포의 70% 값을 km 단위로 사용한다." |
| 강풍반경 15m/s, 폭풍반경 25m/s | KMA-통보문 | "강풍반경은 태풍 중심으로부터 초속 15 m 이상의 바람이 부는 반경"; "폭풍반경은 태풍 중심으로부터 초속 25m 이상의 바람이 부는 반경" |
| 예측경로 점선은 이동선이 아님 | KMA-통보문 | "이 점선은 확률반경(km)의 중심을 연결한 것으로, 태풍이 이 선을 따라 이동한다는 의미는 아니다." |
| 최근접예상은 비공식 참고정보 | KMA-상세 | "최근접예상은 참고정보(비공식)인 곡선진로를 기반으로 계산된 값이며, 예보시간마다 변동 가능성이 있음" |
| 강도 구분 TD 17 미만, 강도1 17~25, 강도2(중) 25~33, 강도3(강) 33~44, 강도4(매우강) 44~54, 강도5(초강력) 54 이상 | KMA-통보문 | 표: "열대저압부 - TD 17 m/s(61 km/h) 미만 / 태풍 - 강도 1 17 m/s ~ 25 m/s 미만 / 중 강도 2 25 ~ 33 미만 / 강 강도 3 33 ~ 44 미만 / 매우강 강도 4 44 ~ 54 미만 / 초강력 강도 5 54 m/s 이상" (표 열 구성이 텍스트로만 보여 "강도 1"과 기존 명칭의 대응은 표 배열로 판단) |
| 특보 의무, 예비특보 | 기상법 제13조의2 ①② | "기상청장은 ... 대통령령으로 정하는 기준에 도달하여 재해가 발생할 우려가 있다고 판단하는 경우 특보를 하여야 한다." "특보가 예상되고 미리 대비할 필요성이 있는 경우에는 ... 예비특보 ...를 할 수 있다." |
| 특보 종류(태풍·강풍·풍랑·호우·폭풍해일 등), 기준은 별표 1 | 기상령 제8조의2 ①② | "1. 호우 ... 3. 태풍 4. 강풍 ... 9. 풍랑 10. 폭풍해일"; "별표 1에 따른 특보의 기준" |
| 해양기상특보(태풍·풍랑·폭풍해일), 별표 2 | 기상령 제9조 ④⑤ | "해양기상특보는 다음 각 호 ... 1. 태풍 2. 풍랑 3. 폭풍해일 ... 주의보와 경보로 구분" |
| 태풍주의보·경보 기준 | 기상령 별표 1 다목, 별표 2 | 주의보 "태풍으로 인하여 강풍, 풍랑, 호우 또는 폭풍해일 현상이 주의보 기준에 도달할 것으로 예상될 때"; 경보 "1) 강풍, 풍랑 또는 폭풍해일 현상이 경보 기준에 도달할 것으로 예상될 때 2) 총 강우량이 200mm 이상 예상될 때" |
| 강풍 기준 | 기상령 별표 1 라목 | 주의보 "육상에서 풍속 50.4km/h(14m/s) 이상 또는 순간풍속 72.0km/h(20m/s) 이상 ... 산지에서는 풍속 61.2km/h(17m/s) 이상 또는 순간풍속 90.0km/h(25m/s)"; 경보 "75.6km/h(21m/s) 이상 또는 순간풍속 93.6km/h(26m/s) ... 산지 86.4km/h(24m/s) ... 108.0km/h(30m/s)" |
| 풍랑 기준 | 기상령 별표 1 아목, 별표 2 | 주의보 "해상에서 풍속 50.4km/h(14m/s) 이상이 3시간 이상 지속되거나 유의파고가 3m 이상이 예상될 때"; 경보 "75.6km/h(21m/s) ... 유의파고가 5m 이상" |
| 호우 기준 | 기상령 별표 1 가목(<개정 2026. 6. 23.>) | 주의보 "3시간 누적강우량이 60mm 이상 예상되거나 12시간 누적강우량이 110mm 이상"; 경보 "3시간 누적강우량이 90mm 이상 ... 12시간 누적강우량이 180mm 이상" |
| 폭풍해일 기준 | 기상령 별표 1 자목 | "천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 기상청장이 정하는 지역별 발효기준 값 이상이 예상될 때" |

## 2. 항만 통제 근거
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 피항명령 | 입출항법 제8조의2 ① | "관리청은 「재난 및 안전관리 기본법」 제3조제1호가목에 따른 자연재난이 발생하거나 발생할 우려가 있는 경우 무역항의 수상구역등에 있는 선박에 대하여 다른 구역으로 피항할 것을 선박소유자 또는 선장에게 명할 수 있다." [본조신설 2022.10.18] |
| 관리청 정의 | 입출항법 제2조 제2호의2 | "가. ... 국가관리무역항: 해양수산부장관 나. ... 지방관리무역항: ... 시ㆍ도지사" |
| 지방해양수산청장 위임 | 입출항령 제22조 ① 제5호의2 | "해양수산부장관은 ... 국가관리무역항에 대한 다음 각 호의 권한을 지방해양수산청장에게 위임한다. ... 5의2. 법 제8조의2에 따른 피항명령, 선박대피협의체의 구성 및 운영" |
| 선박대피협의체 구성·협의 사항 | 입출항령 제6조의2 ①② | 구성 "1. 해운업자 2. ... 지방해양경찰청 소속 공무원 ... 3. ... 항만공사의 임직원 4. 그 밖에 ..."; 협의 "1. 접안 또는 정박 금지구역의 설정 2. 선박 대피의 개시 및 완료 시점 3. 항만 운영의 중단 및 재개 시점 4. 그 밖에 선박 대피에 필요한 사항" |
| 부산항 선박대피협의회 피항 명령 | 부산항법 제7조 제3호 | "태풍 또는 기상특보(강풍, 풍랑) 발효에 대응하여 부산항 선박대피협의회(비대면 회의 포함)의 피항 명령이 있으면 해당 선박은 안전한 수역으로 대피해야 한다." |
| 출항통제 | 해교법 제36조 ① | "해양수산부장관은 해상에 대하여 기상특보가 발표되거나 제한된 시계 등으로 ... 선박소유자나 선장에게 선박의 출항통제를 명할 수 있다." |
| 출항통제 기준 별표 10 | 해교규칙 제33조, 별표 10 제2호 | 출항통제권자 "지방해양수산청장"; "태풍주의보 및 경보 │1) 총톤수 7,000톤 미만의 국제항해에 종사하지 않는 선박 2) 국제항해에 종사하는 예부선 결합선박"; 비고 1 "출항통제권자는 ... 필요하다고 인정하는 경우에는 출항통제를 완화하거나 적용하지 않을 수 있다." 내항여객선은 제1호에서 해양경찰서장 |
| 여객선·어선 권한은 해양경찰서장 | 해교령 | "법 제36조에 따른 여객선과 어선에 대한 출항통제 권한을 해양경찰서장에게 위임한다." |
| 태풍 피항 수역 지정 | 해교법 제30조 ② | "해양수산부장관은 태풍 등 악천후를 피하려는 선박이나 ... 선박을 위한 수역 등을 지정ㆍ운영할 수 있다." |
| 자연재난에 태풍 포함 | 재난법 제3조 제1호 가목 | "자연재난: 태풍, 홍수, 호우(豪雨), 강풍, 풍랑, 해일(海溢), ... 지진, ... 화산활동 ..." |
| 대피명령 | 재난법 제40조 ① | "시장ㆍ군수ㆍ구청장과 지역통제단장 ...은 ... 해당 지역 주민이나 그 지역 안에 있는 사람에게 대피하도록 명하거나 선박ㆍ자동차 등을 그 소유자ㆍ관리자 또는 점유자에게 대피시킬 것을 명할 수 있다." |
| 위험구역 | 재난법 제41조 ① | "위험구역을 설정하고 ... 1. 위험구역에 출입하는 행위나 그 밖의 행위의 금지 또는 제한 2. 위험구역에서의 퇴거 또는 대피" |
| 작업 중지 | 산안규칙 제37조 ① | "사업주는 비ㆍ눈ㆍ바람 또는 그 밖의 기상상태의 불안정으로 인하여 근로자가 위험해질 우려가 있는 경우 작업을 중지하여야 한다." |
| 크레인 이탈 방지 | 산안규칙 제140조 | "순간풍속이 초당 30미터를 초과하는 바람이 불어올 우려가 있는 경우 옥외에 설치되어 있는 주행 크레인에 대하여 이탈방지장치를 작동시키는 등 ..." |
| 강풍 뒤 양중기 점검 | 산안규칙 제143조 | "순간풍속이 초당 30미터를 초과하는 바람이 불거나 중진(中震) 이상 진도의 지진이 있은 후에 옥외에 설치되어 있는 양중기를 사용하여 작업을 하는 경우에는 미리 기계 각 부위에 이상이 있는지를 점검하여야 한다." |

## 3. 일정표 관련
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| PNC 수출·환적 반입 가능 기간 4일, 야드 상황에 따라 변경 | PNC p.3 | "* Receival period at gate for export/transhipment: 4 days subject to change depending on the terminal yard situation." |
| BNCT 선반입 서비스, 일일 판매 수량은 야드 상황에 따라 변동 | BNCT-202 | "일일 선반입권 판매 수량: 기존 100 TEU → 150 TEU 단, 야드 상황에 따라 일일 판매 수량 변동 가능" |
| BNCT 선반입은 유료(요율 조정) | BNCT-228 | "2026년 4월 1일 부 표준요율 인상에 따라 수출화물 선반입 서비스(Early Gate-In Service) 요율이 아래와 같이 변경" (금액은 문서에 쓰지 않음) |

## 4. 야드·창고
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 창고업자 책임 | 상법 제160조 | "창고업자는 자기 또는 사용인이 임치물의 보관에 관하여 주의를 해태하지 아니하였음을 증명하지 아니하면 임치물의 멸실 또는 훼손에 대하여 손해를 배상할 책임을 면하지 못한다." |
| 판례A 사실관계 | 판례A | "1999. 9. 24. 오전에 타치노우라 컨테이너 적하장에 태풍 18호의 영향으로 인한 강한 비바람과 높은 파도가 밀어닥쳐서 보관중이던 위 컨테이너 ... 하단 부분이 해수에 침수되는 바람에 컨테이너 바닥 부분에 적입된 104상자의 화물이 손상"; "1999. 9. 22. 보세장치장 설영자에게 이 사건 화물 전체에 대한 화물인도지시서를 제시하고 이 사건 화물 중 컨테이너 1대를 출고하고 나머지 1대는 자신의 사정으로 후에 출고할 의사로 그대로 둔" |
| 판례A 판단 | 판례A | "그 시점에서 피고는 이 사건 화물 전체의 인도의무를 다하였다고 볼 수 있어, 결국 이 사건 침수사고는 피고가 이 사건 화물의 인도를 완료한 이후에 발생한 것이므로 피고는 이로 인한 손해배상책임을 부담하지 않는다" (원심 판단을 대법원이 "정당하다고 수긍") ; 원고는 해상적하보험자로서 보험금 지급 후 구상 |

## 5. 항만 폐쇄 영향
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| Maersk 19.1(d)(e), 19.2 | MSK-T | (d) "sail without pilots, proceed via any route, (whether or not the nearest or most direct ..." (e) "load and unload the Goods at any place or port ..."; 19.2 anything done under 19.1 "shall not be a deviation" (WebFetch 인용, 125자 제한으로 일부만) |
| Maersk 20 | MSK-T | "If at any time Carriage is or is likely to be affected by any hindrance, risk, danger, delay, difficulty or disadvantage ..." → (a) reroute, (b) suspend Carriage and store, (c) abandon Carriage and make the Goods available; (a)(b) additional Freight 청구 가능(WebFetch 요약) |
| Maersk 22.2 | MSK-T | "The Merchant shall take delivery of the Goods within the time provided for in the Carrier's applicable Tariff."; "the costs of such storage shall forthwith upon demand be paid by the Merchant to the Carrier." |
| Hapag-Lloyd 16·17조와 경유항 보관료 | HL-STI | "In accordance with Clause 16 (Methods and Routes of Carriage) and Clause 17 (Matters Affecting Performance) of Hapag-Lloyd's Bill of Lading Terms and Conditions, the Carrier may discharge, store, handle, or transport cargo via alternative ports or routes where circumstances beyond the Carrier's control affect the planned carriage. Below storage charges may apply ..." (중동 사례, 금액 미기재) |
| Maersk 9. 4. 공지 | MSK-0904 | "several severe typhoons ... making landfall in a two-week period, resulting in severe flooding, congestion and delays in vessel operations"; "reviewing priority shipments, allowing additional buffer time, checking documentation readiness, and discussing alternative routings" |
| Maersk 9. 18. 공지 | MSK-0918 | "we are seeing gradual improvements in port performance and vessel flows"; "a typhoon may develop during week 39 (21–27 September)". 두 공지 모두 free time·D&D 언급 없음(본문 전체 확인) |
| 상법 796 | 상법 제796조 | "1. 해상이나 그 밖에 항행할 수 있는 수면에서의 위험 또는 사고 2. 불가항력 ..."; 단서 "제794조 및 제795조제1항에 따른 주의를 다하였더라면 그 손해를 피할 수 있었음에도 불구하고 그 주의를 다하지 아니하였음을 증명한 때에는 그러하지 아니하다." |
| 판례B | 판례B 판결요지 라 | "운송물의 선박적부시에 고박. 고정장치를 시행하였으나 이를 튼튼히 하지 아니하였기 때문에 항해중 그 고박. 고정장치가 풀어져서 운송물이 동요되어 파손되었다면 특단의 사정이 없는 한 불법행위의 책임조건인 선박사용인의 과실을 인정할수 있고 ... 운송인이 불가항력에 의한 사고라는 이유로 그 불법행위 책임을 면하려면 그 풍랑이 선적 당시 예견 불가능한 정도의 천재지변에 속하고 사전에 이로 인한 손해발생의 예방조치가 불가능하였음이 인정되어야 한다." (사실관계: 1979. 7. 31. 인도양 통과 중 태풍으로 고박이 풀림) |
| ICC 8.3 | ICC-A | "This insurance shall remain in force ... during delay beyond the control of the Assured, any deviation, forced discharge, reshipment or transhipment and during any variation of the adventure arising from the exercise of a liberty granted to carriers under the contract of carriage." |
| ICC 9 | ICC-A | "... then this insurance shall also terminate unless prompt notice is given to the Insurers and continuation of cover is requested when this insurance shall remain in force, subject to an additional premium if required ... 9.1 until ... sold and delivered at such port or place, or, unless otherwise specially agreed, until the expiry of 60 days after arrival ..." |
| ICC 12 | ICC-A | "Where, as a result of the operation of a risk covered by this insurance, the insured transit is terminated at a port or place other than that to which the subject-matter insured is covered ..., the Insurers will reimburse the Assured for any extra charges properly and reasonably incurred in unloading storing and forwarding ..." |

## 6. 비용 부담
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| HL 한국 수입: 2025. 1. 1. 시행, 달력일, 터미널 보관료 직접 청구, 폐쇄 면제 문구 없음 | HL-KR | "Effective Date : 1st January 2025"; "Calendar Days"; "Storage charged by terminal operator directly". 본문 전체에서 weather/typhoon/closure/force 검색 결과 없음 |
| ONE 부산: 시행 2026. 4. 1., 폐쇄 면제 문구 없음 | ONE | "effective from April 1st & May 1st 2026"; "Non-FMC regulated trades : April 1st, 2026". weather/typhoon/closure 검색 결과 없음 |
| HL 미국: shutout day 정의와 처리 | HL-US G) | "Shutout Days are unplanned or short-notice closures ... These may include events such as strikes, severe weather, or operational disruptions."; "Both bank holidays and shutout days are excluded from free time calculations. If a bank holiday or shutout day occurs during the free time period, freedays will be extended by the corresponding number of days."; "Once free time expires o Detention and demurrage charges will not apply on shutout days. o Charges will apply on bank holidays" |
| HL 미국 F) | HL-US | "Any unscheduled closures of relevant terminals and depots will be treated as unforeseen shutout days and will be excluded from Detention and Demurrage charge assessments." |
| PNC 보관 일수 규칙 | PNC p.3 | "(a) Based on calendar day. (b) Import: From the discharge day to the gate-out day if the container is discharged before 0800 hours, otherwise from the following day ... (c) Export: From the container receipt day to the berthing date of the vessel in which the container is loaded." "(f) The rate in the highest storage bracket the container storage days fall into is applicable to entire storage period. Ex) Import Full 20ft container standing at 15days: 11 days (over storage days) x Krw 45,500 ... = Krw 500,500" |
| PNC 수입 드라이 요율 | PNC p.3 표 | 1-4 days Free, 5-7 days 9,100, 8-9 days 18,200, 10-14 days 31,850, 15 days and above 45,500 (Rate/TEU). 기존 ch-korea-storage 문서 값과 같음 |
| PNC·HJNC 폐쇄 면제 문구 없음 | PNC, HJNC | pdftotext 본문에서 weather/typhoon/태풍/force majeure/불가항력/closure/closed/기상/exempt/면제 검색 결과 없음 |
| HJNC 시행일 | HJNC | "Effective : April 1st 2026 ... VAT excluded" |
| FMC 545.5(c)(2) | CFR | "(i) Cargo availability. The Commission may consider in the reasonableness analysis the extent to which demurrage practices and regulations relate demurrage or free time to cargo availability for retrieval. (ii) Empty container return. Absent extenuating circumstances, practices and regulations that provide for imposition of detention when it does not serve its incentivizing purposes, such as when empty containers cannot be returned, are likely to be found unreasonable." |
| Incoterms는 불가항력·지연 결과를 다루지 않음 | 기존 inco-choose 문서 | "소유권 이전, 계약 위반의 구제, 지연의 결과, 불가항력, 준거법과 분쟁 해결 방법도 다루지 않습니다." |

### 계산 예시 검산(PNC 2026, 20ft 수입 드라이, 10월 1일 06시 양하 → 양하일 포함)
- 10월 7일 반출: 장치 7일, 초과 3일, 최고 구간 5~7일 9,100원 → 3 × 9,100 = 27,300원
- 10월 9일 반출: 장치 9일, 초과 5일, 최고 구간 8~9일 18,200원 → 5 × 18,200 = 91,000원(계획 대비 +63,700원)
- 10월 10일 반출: 장치 10일, 초과 6일, 최고 구간 10~14일 31,850원 → 6 × 31,850 = 191,100원(계획 대비 +163,800원)
- 40ft = 2TEU(요율 단위 Rate/TEU)

## 7. 적하보험
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| (B) 1.1.6 지진·화산·낙뢰 | ICC-B | "1.1.6 earthquake volcanic eruption or lightning" ((C)에는 1.1.5까지만) |
| (B) 1.2.2, 1.2.3 | ICC-B | "1.2.2 jettison or washing overboard 1.2.3 entry of sea lake or river water into vessel craft hold conveyance container or place of storage" |
| (C) 1.2 | ICC-C | "1.2.1 general average sacrifice 1.2.2 jettison." |
| (B)(C) 1.1.2, 1.1.5 | ICC-B/C | "1.1.2 vessel or craft being stranded grounded sunk or capsized"; "1.1.5 discharge of cargo at a port of distress" |
| (A) all risks | ICC-A | "This insurance covers all risks of loss of or damage to the subject-matter insured except as excluded by the provisions of Clauses 4, 5, 6 and 7 below." |
| 제2조 공동해손 | ICC-A/B/C | "This insurance covers general average and salvage charges ... except those excluded in Clauses 4, 5, 6 and 7" |
| 4.3 포장(컨테이너 적입 포함) | ICC-B | "... where such packing or preparation is carried out by the Assured or their employees or prior to the attachment of this insurance (for the purpose of these Clauses "packing" shall be deemed to include stowage in a container ...)" |
| 4.4, 4.5 | ICC-B | "4.4 ... inherent vice or nature"; "4.5 loss damage or expense caused by delay, even though the delay be caused by a risk insured against (except expenses payable under Clause 2 above)" |
| 8.1.1, 8.1.3, 8.1.4 | ICC-A | "8.1.1 on completion of unloading ... in or at the final warehouse"; "8.1.3 when the Assured or their employees elect to use any carrying vehicle or other conveyance or any container for storage other than in the ordinary course of transit"; "8.1.4 on the expiry of 60 days after completion of discharge overside ... at the final port of discharge" |
| 16, 18 | ICC-A | "16.1 to take such measures as may be reasonable for the purpose of averting or minimising such loss ... 16.2 to ensure that all rights against carriers, bailees or other third parties are properly preserved and exercised ... Insurers will ... reimburse"; "18. It is a condition of this insurance that the Assured shall act with reasonable despatch in all circumstances within their control." |
| washing overboard 의미 | 판례C(ins-icc 문서 인용) | "ICC의 "Washing Overboard"는 해수의 직접 작용으로 휩쓸려 나간 경우만 뜻함" |
| RFWD 부가 위험 | HI(ins-icc 문서 인용) | "대표적인 부가 위험으로 빗물·담수손(RFWD) ..." |
| "강풍으로 야드 컨테이너 낙하 파손" (B)(C) 비해당 판단 | ICC-B/C 제1조 문언 대조 | 열거 위험에 해당 항목 없음(1.1.4는 "vessel craft or conveyance"의 충돌·접촉, 1.3은 본선 선적·하역 중 낙하 전손). 문서에서는 "X로 보일 수 있음, 판단은 보험사"로 표기 |

## 확인하지 못해 뺀 것
- 해양수산부·항만공사의 태풍 시 컨테이너 적재 단수 제한(예: 몇 단 이하), 크레인 고박 기준, 게이트 마감 시점 기준: 공개 원문(보도자료·고시)을 찾지 못함. 언론 기사(파이낸셜뉴스 2024. 6. 12. 해수부 태풍 대비 재난대응 계획 보도)만 있어 쓰지 않음.
- 국민재난안전포털(국민안전24) 태풍 국민행동요령 원문: 페이지가 동적으로 불러와져 curl로 본문을 받지 못함. 창고 대비 항목은 법령 인용 없이 실무 조치로만 씀.
- Maersk·HMM 등 한국발 B/L 약관 전체 원문(Maersk는 curl 차단, WebFetch 요약으로만 확인). Hapag-Lloyd 제16·17조 원문은 직접 보지 못하고 HL-STI 공지의 인용으로만 씀.
- 한국 선사·터미널이 태풍 폐쇄 때 free time을 연장한 공개 공지: 찾지 못함.
- BNCT 선반입 FAQ PDF: 글꼴 문제로 텍스트 추출 불가. 정상 반입 기간 숫자는 쓰지 않음.
- PNC 요율표의 수출 드라이 보관료 구간: pdftotext 배열이 겹쳐 수출과 환적 블록을 확실히 구분하지 못해 수출 계산 예시는 넣지 않음(반입일~접안일 규칙만 씀).
- 해상교통안전법 별표 10의 시정 "11킬로미터" 행은 OCR 오류로 보여 쓰지 않음.
