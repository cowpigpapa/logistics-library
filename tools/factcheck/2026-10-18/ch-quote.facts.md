# ch-quote FACTS (2026-10-18 확인)

법령·고시 원문은 law.go.kr DRF API(lawService.do)로 2026-10-18에 받은 현행본에서 확인함(scratchpad/qlaw). ICC 규칙은 ICC Digital Library 공개본을 WebFetch로, Maersk 용어집은 curl로 받은 HTML(scratchpad/qdl/maersk_gloss.txt), IATA 코드 목록은 GitHub 원본 TTL(scratchpad/qdl/cl.ttl)에서 확인함.

본문의 모든 금액·환율·요율(USD 1,000/40ft, THC 200,000원, 부두사용료 9,000원, 1 USD = 1,400원/1,420원, CFS 10,000원/R/T, 항공 150원/kg 등)은 **만든 예시 금액**이며 사실 주장이 아님. 항공 예시의 운임 중량 300.0kg·3,300원/kg·990,000원은 ch-air-weight 7절 예시 3의 예시 요율을 그대로 가져온 것. 할증료는 금액 없이 기호(S, s, f)로만 표시.

## 해운법·운임공표 고시

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 1 | 공표 화폐는 미국 달러, 기항지 화폐로 정하는 요금은 그 화폐로 공표 가능 | 외항운송사업자 운임 및 요금의 공표등에 관한 규정 제4조제2항(해양수산부고시 제2023-96호, 발령 2023. 6. 20., 시행 2023. 7. 1.) https://www.law.go.kr/LSW/admRulInfoP.do?admRulSeq=2100000225094 | "② 화폐의 단위는 미국 달러(US$)로 한다. 다만, 기항지(寄港地)의 화폐단위로 결정되는 요금은 기항지의 화폐단위로 공표할 수 있다." |
| 2 | 공표할 요금 항목(BAF·LSS·EBS, THC, CAF, 서류발급비·D/O 요금, 부두사용료, 봉인료, 그 밖의 요금) | 같은 고시 제4조제1항제3호 | "가. 유류할증료(BAF), 저유황할증료(LSS) 또는 긴급유류할증료(EBS) 나. 터미널 컨테이너 조작수수료(THC) 다. 통화할증료(CAF) 라. 서류발급비(Documentation Fee) 및 화물인도지시서 요금(D/O Fee) 마. 부두사용료(wharfage) 바. 컨테이너 봉인료(Seal Charge) 사. 그 밖에 …" |
| 3 | 공표일자와 적용일자를 공표 | 같은 고시 제4조제1항제1호자목 | "자. 공표일자 및 적용일자" |
| 4 | 공표의무자는 선사들(외항정기화물운송사업자, 외국인 사업자, 겸용 여객선 사업자) | 같은 고시 제3조 | "1. 법 제24조제2항에 따라 외항 정기 화물운송사업을 등록한 외항정기화물운송사업자 2. 국내항과 외국항 사이에서 외항 정기 화물운송사업을 경영하는 외국인 외항정기화물운송사업자 3. …" |
| 5 | 해운법 제28조제1항: 운임·요금 공표 의무 | 해운법 제28조(법률 제21825호, 시행 2026. 6. 16.) https://www.law.go.kr/법령/해운법 | "다음 각 호의 어느 하나에 해당하는 자는 … 운임 및 요금을 정하여 화주 등 이해관계인이 알 수 있도록 각각 공표하여야 한다. 공표한 운임 및 요금을 변경하려는 때에도 또한 같다." 1호 외항정기화물운송사업자, 2호 국내항과 외국항 사이에서 외항 정기 화물운송사업을 경영하는 외국인 |
| 6 | 적용일 15일 전까지 공표 | 해운법 시행규칙 제20조제1항(시행 2026. 7. 13.) https://www.law.go.kr/법령/해운법시행규칙 | "운임 및 요금의 공표는 운임 및 요금의 적용일 15일 전까지 화주 등 이해관계인이 잘 볼 수 있는 곳과 인터넷 홈페이지에 게시하는 방법 등…" |
| 7 | 제31조제1항: 공표·신고 운임·요금보다 더 받거나 덜 받는 행위 금지 / 제2항: 화주도 비싸거나 싸게 운송하게 하는 행위 금지 | 해운법 제31조 | "1. 제28조에 따라 공표하거나 신고한 운임 및 요금보다 더 많이 받거나 덜 받는 행위" / "② … 화주는 … 1. 제28조에 따라 공표되거나 신고된 운임 및 요금보다 비싸거나 싸게 화물을 운송하게 하는 행위" |

## 관세법

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 8 | 과세환율: 관세청장이 수입신고일(제17조의 날)이 속하는 주의 전주 기준환율·재정환율 평균으로 정함 | 관세법 제18조(법률 제21490호, 시행 2026. 10. 2.) https://www.law.go.kr/법령/관세법 | "제17조에 따른 날(…)이 속하는 주의 전주(前週)의 기준환율 또는 재정환율을 평균하여 관세청장이 그 율을 정한다." |
| 9 | 전주 월요일~금요일, 외국환중개회사 최초 고시 | 관세법 시행규칙 제1조의2제1항(시행 2026. 7. 31.) https://www.law.go.kr/법령/관세법시행규칙 | "외국환중개회사가 … 법 제17조에 따른 날 … 이 속하는 주의 전주(前週) 월요일부터 금요일까지 매일 최초 고시하는 기준환율 또는 재정환율을 평균하여 법 제18조에 따른 과세환율을 결정한다." |
| 10 | 관세는 수입신고 당시 법령 적용(제17조의 날 = 수입신고일 원칙) | 관세법 제17조 | "관세는 수입신고 당시의 법령에 따라 부과한다." |
| 11 | 과세가격에 수입항까지의 운임·보험료·운송 관련 비용 가산 | 관세법 제30조제1항제6호 | "6. 수입항(輸入港)까지의 운임ㆍ보험료와 그 밖에 운송과 관련되는 비용으로서 대통령령으로 정하는 바에 따라 결정된 금액." |
| 12 | 수입항 도착 뒤 운송비는 명백히 구분되면 공제 | 관세법 제30조제2항제2호 | "다음 각 호의 어느 하나에 해당하는 금액을 명백히 구분할 수 있을 때에는 그 금액을 뺀 금액 … 2. 수입항에 도착한 후 해당 수입물품을 운송하는 데에 필요한 운임ㆍ보험료와 그 밖에 운송과 관련되는 비용" |
| 13 | 운임·보험료는 운임명세서·보험료명세서 등으로 산출 | 관세법 시행령 제20조제1항(대통령령 제36140호, 시행 2026. 2. 27.) https://www.law.go.kr/법령/관세법시행령 | "법 제30조제1항제6호의 규정에 의한 운임 및 보험료는 당해 사업자가 발급한 운임명세서ㆍ보험료명세서 또는 이에 갈음할 수 있는 서류에 의하여 산출한다." |

## 부가가치세법

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 14 | 외국항행용역 영세율, 국내↔국외 화물 수송 | 부가가치세법 제23조제1항·제2항(법률 제21065호, 시행 2026. 1. 2.) https://www.law.go.kr/법령/부가가치세법 | "① 선박 또는 항공기에 의한 외국항행용역의 공급에 대하여는 제30조에도 불구하고 영세율을 적용한다. ② … 선박 또는 항공기에 의하여 여객이나 화물을 국내에서 국외로, 국외에서 국내로 또는 국외에서 국외로 수송하는 것을 말하며…" |
| 15 | 운송주선업자의 국제복합운송용역도 외국항행용역 범위 | 부가가치세법 시행령 제32조제2항제1호(대통령령 제36133호, 시행 2026. 4. 1.) https://www.law.go.kr/법령/부가가치세법시행령 | "1. 운송주선업자가 국제복합운송계약에 따라 화주(貨主) 또는 다른 운송주선업자로부터 화물을 인수하고 자기 책임과 계산으로 타인의 선박 또는 항공기 등의 운송수단을 이용하여 화물을 운송하고 화주 또는 다른 운송주선업자로부터 운임을 받는 국제운송용역" |
| 16 | 세율 10% | 부가가치세법 제30조 | "부가가치세의 세율은 10퍼센트로 한다." |
| 17 | 수입 부가세 과세표준 = 관세 과세가격 + 관세 등 | 부가가치세법 제29조제2항 | "재화의 수입에 대한 부가가치세의 과세표준은 그 재화에 대한 관세의 과세가격과 관세, 개별소비세, 주세, 교육세, 농어촌특별세 및 교통ㆍ에너지ㆍ환경세를 합한 금액으로 한다." |

## Incoterms® 2020 (ICC Digital Library 공개본)

| # | 문서에 쓴 내용 | 출처 | 근거(원문, WebFetch 요약 인용) |
|---|---|---|---|
| 18 | 비용 분담은 A9·B9, 인도 전 매도인·인도 후 매수인 | https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_05_RulesSea.htm | FOB/CFR A9 "all costs relating to the goods until they have been delivered in accordance with A2"; FOB B9 "all costs relating to the goods from the time they have been delivered under A2" |
| 19 | CFR B9(c): 매수인이 부선료·부두사용료 포함 양하 비용 부담, 운송계약에서 매도인 부담이면 예외 | 같은 페이지 CFR B9 | "unloading costs including lighterage and wharfage charges, unless such costs and charges were for the seller's account under the contract of carriage" |
| 20 | CFR A9(c): 매도인 운송계약상 매도인 부담인 양하 비용은 매도인 | 같은 페이지 CFR A9 | "any charges for unloading at the agreed port of discharge that were for the seller's account" |
| 21 | CFR 해설 8 / CIF 해설 9: 매도인이 운송계약으로 낸 목적지 양하 비용은 따로 합의 없으면 매수인에게서 회수 불가 | 같은 페이지 Explanatory notes | "the seller is not entitled to recover such costs separately from the buyer unless otherwise agreed between the parties" |
| 22 | CIF A5: ICC (C), 최소 110% | 같은 페이지 CIF A5 | "cargo insurance complying with the cover provided by Clauses (C) of the Institute Cargo Clauses (LMA/IUA)" / "the price provided in the contract plus 10% (i.e. 110%)" |
| 23 | CIP A5: ICC (A), 최소 110% | https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_04_RulesAny.htm | "Clauses (A) of the Institute Cargo Clauses (LMA/IUA)" / "the price provided in the contract plus 10% (i.e. 110%)" |
| 24 | DAP: 목적지 하차비는 운송계약상 매도인 부담일 때만 매도인, 수입 관세·세금은 매수인(B9) | 같은 페이지 DAP A9(2), B9(2)(4) | A9: "if those charges were for the seller's account under the contract of carriage"; B9(4): "where applicable, duties, taxes and any other costs related to import clearance under B7(b)" |
| 25 | DDP: 매도인이 수입 통관 관세·세금 부담 | 같은 페이지 DDP A9(4) | "where applicable, duties, taxes and any other costs related to export, transit and import clearance under A7" |
| 26 | 조건별 표의 세부(EXW 수출통관 매수인, FCA 터미널 인도 시 THC 다툼, FOB 운송서류 발급비 매수인·한국 관행, CIF 외 보험 의무 없음, DDP 부가세 회수 문제) | 사이트 기존 문서 /library/incoterms-2020/inco-risk-cost 상세표(ICC 자료로 이미 검증된 내용)를 요약 | 해당 문서 "비용 항목별 포함·불포함 상세표"와 표 아래 설명 |

## 운송인·IATA 공개 정의

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 27 | Freight Collection 비용 CLO(출발지)·CLD(도착지): 현지 수납·현지 통화 수납 시, 현지 당국이 정해 정액 또는 운임 비율 | Maersk Surcharge Definition Glossary https://www.maersk.com/solutions/shipping/glossaries/surcharge-definition (2026-10-18 curl) | "The fee applied when the carrier- collects freight charges locally- collects freight charges in a local currency … Since this fee is mandated by local authorities, the charge may take the form of a fixed fee or a percentage of the total freight." |
| 28 | Heavy Load Surcharge(HWS) 정의 | 같은 용어집 | "This charge covers the additional operational expenses incurred for handling heavy cargo that weighs more than the standard limit for a shipment" |
| 29 | (참고, 본문 7절 출처) DHC·OHC, DDF 정의 | 같은 용어집 | DHC "This service covers the cost of the handling of a container at the destination port or terminal." / DDF "This service covers the creation and processing of all standard transport documents (Delivery Order)." |
| 30 | AWB 요금 구분 코드 WT·VC·TX·OA·OC, 귀속 A·C, 지급 P·C | IATA ONE Record 2026-07 standard, IATA-1R-CL-Ontology.ttl https://raw.githubusercontent.com/IATA-Cargo/ONE-Record/master/2026-07-standard/Data-Model/IATA-1R-CL-Ontology.ttl | ChargeIdentifier: "Total Weight Charge"(WT), "Valuation Charge"(VC), "Taxes"(TX), "Total Other Charges Due Agent"(OA), "Total Other Charges Due Carrier"(OC); EntitlementCode: "Other Charges due Agent"(A), "Other Charges due Carrier"(C); PrepaidCollectIndicator: "Prepaid Indicator"(P), "Collect Indicator"(C) |
| 31 | Other charge 코드 AW, MY, SC, RA, IN, CH, CD, FC | 같은 TTL, OtherChargeCode | AW "Air Waybill Fee"; MY "Fuel Surcharge — Due Issuing Carrier"; SC "Security Charge"; RA "Dangerous Goods Fee"; IN "Insurance Premium"; CH "Clearance and Handling — Origin"; CD "Clearance and Handling — Destination"; FC "Charges Collect Fee" |

## 사이트 기존 문서에서 요약만 한 내용(새 수치 없음)

- 한국 선사 공개 요율표에 수입 THC·D/O 비용이 수입 항목으로 나옴, 부두사용료의 THC 포함·별도 차이, 청소비와 보장 상품: ch-sea-charges 1~4·7절.
- 할증료 적용일 기준(부킹일·PCD·반입일·출항 예정일·실제 출항일), 인보이스 할증료 대조 순서: ch-surcharges 6·8절.
- R/T(W/M), 최소 1 R/T, CFS 실측 기준, R/T당·B/L당 구분: ch-lcl 4·6·8절.
- 운임 중량, 분기점, 할증료 기준 중량 확인, 재계량·CCA: ch-air-weight 1~5·7·9절.
- 한국 수입 FCL 터미널 보관료가 선사 D&D와 별도로 터미널이 수입자에게 직접 청구: ch-korea-storage, ch-dnd.

## 확인하지 못해 쓰지 않은 것
- 선사·항공사가 외화 운임을 원화로 받을 때 쓰는 환율 기준의 구체 사례(회사별 공지 미확인). 본문은 "그 회사가 정한다"는 일반 문장과 견적서 문구 예만 둠.
- 한국 출발 항공 터미널 조업료(인천공항 수출)의 공개 요율과 기준 중량(실중량·운임 중량). 예시 금액과 "조업사 요율표 확인"으로만 씀.
- 항공 운임 착불을 받지 않는 나라 목록(IATA TACT Rules, 유료). 착불 수수료 코드(FC) 존재만 쓰고 "항공사 조건 확인"으로 둠.
- 견적서 줄별 부가세 영세율·과세 구분의 구체 판단(국세청 예규 미확인). 법조문만 인용하고 판단은 세무 확인으로 넘김.
- 부산항 부두사용료 실제 고시 요율은 이번에 고시 XML 별표를 파싱하지 못해 재확인하지 않음. 예시에는 만든 금액 9,000원을 쓰고 실제 요율은 ch-sea-charges 4절로 링크.
