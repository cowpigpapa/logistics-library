# cu-aeo v2 FACTS: new claims only (checked 2026-10-19)

Claims already in v1 are listed in cu-aeo.facts.md. Law and notice texts come from the law.go.kr Open API (lawService.do, current versions), saved in scratchpad/pen_dl, cu_law, aeo, aeo2. 관세청 pages and PDFs were fetched with curl (scratchpad/aeo2/web, aeo2/pdf).

## Sources
- AEO고시 = 수출입 안전관리 우수업체 공인 및 운영에 관한 고시 (제2026-60호): https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000286058
- AEO훈령 = 수출입 안전관리 우수업체 공인 및 갱신심사 운영에 관한 훈령 (시행 2026. 4. 13.): https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000277336
- 수출고시 = 수출 및 반송통관에 관한 고시 (제2025-73호, 발령 2025. 12. 24., 시행 2026. 6. 26.): https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000270440. Note: the brief calls it "수출통관 사무처리에 관한 고시". That is the old name, still cited in 입출항 고시 제43조.
- 입출항고시 = 보세화물 입출항 하선 하기 및 적재에 관한 고시 (제2026-53호, 시행 2026. 8. 28.): admRulSeq=2100000284290
- 보세화물고시 = 보세화물관리에 관한 고시 (제2026-12호, 시행 2026. 2. 24.): admRulSeq=2100000275032
- 특허고시 = 보세창고 특허 및 운영에 관한 고시 (제2026-57호, 시행 2026. 9. 30.): admRulSeq=2100000285590
- 체화고시 = 보세화물장치기간 및 체화관리에 관한 고시 (제2025-47호, 2025. 9. 10.): admRulSeq=2100000263872
- 통고고시 = 관세범의 고발 및 통고처분에 관한 고시 (제2025-1호): admRulSeq=2100000252358
- 전략고시 = 전략물자 등 수출통관에 관한 고시 (제2025-60호, 시행 2025. 11. 24.): admRulSeq=2100000268604
- 오류고시 = 수출입신고 오류방지에 관한 고시 (제2026-49호): admRulSeq=2100000283458
- 법/영 = 관세법 (시행 2026. 10. 2.) and 시행령: https://www.law.go.kr/법령/관세법
- 질서법 = 질서위반행위규제법: https://www.law.go.kr/법령/질서위반행위규제법
- 대외무역법: https://www.law.go.kr/법령/대외무역법/제19조의2
- KCS-GUIDE = 관세청 「AEO MRA 활용가이드」 (행정정보자료실 > AEO MRA 활용방법, 게시 2018. 10. 08.): https://www.customs.go.kr/kcs/na/ntt/selectNttInfo.do?mi=10260&bbsId=1877&nttSn=43297&nttSnUrl=287f74ab44c73dd953a20c317937bb30 (attached PDF "AEO MRA 활용가이드_최종.pdf", p.10-11)
- KCS-VN = 관세청 보도자료 2024. 12. 26. 한-베트남 AEO MRA 체결: https://www.customs.go.kr/kcs/na/ntt/selectNttInfo.do?mi=2891&bbsId=1362&nttSn=10127895&nttSnUrl=fac456e5207abda6f6a93ee68e3f5dc3
- KCS-MRA26 = AEO MRA 체결 현황('26.3월) (행정정보자료실 copy, 2026. 7. 23.): nttSn=10170928. The '25.6월, '25.4월 and '24.12월 versions were also checked. None of them includes a per-country benefit table or an attachment.

## Section 6: MRA benefits by country
| Claim | Source | Quote |
|---|---|---|
| The five benefits and what each means | KCS-GUIDE p.9 | "수입검사율 축소 AEO 화물에 대해 상대국 세관의 수입검사 감축 / 우선통관 및 검사 상대국 세관에서 실제 검사시 일반화물 보다 우선검사(심사) 조치 / 서류심사 간소화 상대국 수입신고시 제출서류 생략 또는 서류심사비율 감소 / 비상시 우선조치 천재지변, 국경폐쇄 등 비상시 AEO화물 우선조치·통관 / 세관연락관 상설 체결국內 세관연락관 상설·활용으로 통관애로 등해소" |
| How to claim each benefit | KCS-GUIDE p.10 | "(검사율 축소) 국가별 화물인식방법에 따라 수입신고서 작성 / (우선 통관·서류 간소화·비상시 우선조치) 실제 검사 또는 서류제출 요구시 외국세관 담당자에게 AEO 화물임을 통지 / (세관연락관 활용) 대한민국 관세청 세관연락관 ... 에 유선 또는 이메일 연락" |
| The 19-country ○ table | KCS-GUIDE p.10 "MRA 혜택(총괄)" | Column x-positions in the PDF text layer: 검사율 259.7, 우선통관 305.1, 서류간소화 350.4, 연락관 395.8, 비상시 441.1. Each ○ was mapped to its column by x-position (pypdf visitor). The table matches the PDF exactly. |
| Data date (end of 2017) and countries not yet in effect | KCS-GUIDE p.9 | "체결현황 ('17년 12월말 현재)" ... "※ 터키, 태국, 호주, UAE, 말레이시아, 페루, 우루과이는 未발효" |
| Recent 관세청 status posts give no benefit scope | KCS-MRA26 and the '25.6월, '25.4월, '24.12월 posts | Each body lists only the 전면이행 and 준비 countries. The attachment list is empty. |
| Uruguay still in preparation; Indonesia, UK and Saudi Arabia now in effect | KCS-MRA26 | "전면이행(발효) - 21개국 ... 영국, 사우디아라비아 / 전면이행(발효) 준비 - 4개국 ☞ 베트남, 몽골, 카자흐스탄, 우루과이" |
| Expected benefits under the Vietnam MRA | KCS-VN | "통관 혜택* ... * 수입검사율 축소, 수입서류심사 간소화 및 수입화물 우선검사 등" |

Note: the guide's own table (2025. 4.) differs from 관세청's 2018 table for two countries. For Singapore the guide omits 비상시, but 관세청 marks it. For Uruguay the guide omits 연락관, but 관세청 marks it. The guide's rows for Indonesia, UK, Saudi Arabia, Vietnam, Mongolia and Kazakhstan could not be confirmed from 관세청 material, so they are not published.

## Section 9: checklist
| Claim | Source | Quote |
|---|---|---|
| Prosecution, referral or 통고처분 is a suspension ground. Five suspensions are a cancellation ground | AEO고시 제25조1호, 제25조의2①4 | "...위반하여 공소청에 고발 또는 송치되거나 통고처분을 받은 경우"; "유효기간 내에 제25조에 따른 혜택 적용의 정지 처분을 5회 이상 받은 경우" |
| Forwarder 4.5.3, 2.3.2, 2.3.3, 2.3.1, 2.3.4, 4.5.5 | AEO고시 별표 1 라. 화물운송주선업자 | "4.5.3 ... 물품의 통관에 사용되는 정보 및 문서를 정확하게 하고..."; "2.3.2 ... 관련 법령에 따라 자료를 보관하여야 한다"; "2.3.3 ... 세관장으로부터 요청받을 경우 접근을 허용하여야 한다" |
| Obvious description errors draw the manifest-mismatch fine | cu-penalty (verified), 법 제277조⑦1 | (cu-penalty facts) |
| Export licence duty for strategic goods | 대외무역법 제19조의2 | "전략물자를 수출 ... 하려는 자 또는 수출신고 ... 하려는 자는 ... 허가(이하 "수출허가")를 받아야 한다" |
| Licence first, then export declaration. Customs may ask for the classification ruling | 전략고시 제3조①, 제4조① | "수출허가 ... 를 받은 후 세관장에게 수출신고를 하여야 한다"; "수출신고인에게 ... 전문판정서 또는 자가판정서를 요청할 수 있다" |
| Manifest records kept for 2 years | 영 제3조①3 (v1 facts) | — |
| Manifest submitter checks whether goods are selected for inspection | 수출고시 제20조 | "적재화물목록 제출자는 ... 검사대상으로 선별되었는지 여부를 확인하여야 한다" |
| If the loading place changes, correct the declaration before inspection | 수출고시 제18조④ | "적재지가 변경되는 경우에는 물품검사 이전에 수출신고를 정정하여야 한다" |
| Goods under loading-place inspection are loaded only after inspection | 수출고시 제65조⑥ | "적재지검사 대상물품의 경우에는 ... 물품검사가 완료된 후 운송수단에 적재하여야 한다" |
| Operating carrier checks selection and loads only after inspection | 입출항고시 제43조⑧ | "적재화물목록 제출의무자는 ... 수출검사대상으로 선별된 물품이 있는 경우 세관공무원의 검사를 받은 후 적재해야 한다" |
| Bonded transport without a declaration: fine. Late transport or late arrival report: 과태료 | 법 제213조②, 제276조④3, 제215조, 제216조 | 제276조④: "1천만원 이하의 벌금 ... 과실로 ... 200만원 이하" (3호 lists 제213조제2항); 과태료 side in cu-penalty |
| Export manifest correction within 90 days by sea and 60 days by air from departure | 입출항고시 제44조② | "1. 해상화물: 90일 2. 항공화물: 60일" |
| Shared bonded warehouses separate cargo with partitions | 특허고시 제17조⑨ | "공동보세창고 운영인은 창고 안에 장치한 화물이 섞이지 않도록 칸막이 등을 설치하여 구분하여 장치하여야 한다" |
| Store containers selected for inspection safely (warehouse operator 4.5.5) | 별표 1 바. 4.5.5 | "검사를 위하여 선별된 컨테이너를 안전하게 보관하고..." |
| Domestic goods in a bonded warehouse need an in/out declaration | 보세화물고시 제12조② | "보세창고에 내국물품을 반출입하려는 자는 반출입 전에 ... 내국물품반출입신고서를 ... 제출" |
| Inbound checks (vehicle, container and seal numbers). Hold the cargo and report any mismatch | 보세화물고시 제9조③④, 제5조② | "운송차량번호, 컨테이너번호, 컨테이너봉인번호가 ... 일치하는지"; "물품의 인수를 보류하고 즉시 ... 반입물품 이상 보고서를 ... 제출" |
| Declare arrival immediately, by House B/L; correction needs approval; real-time transmission can replace it; keep documents 2 years | 보세화물고시 제9조①⑤⑥⑨, 제33조 | "반입 즉시"; "반입신고는 HOUSE B/L단위로"; "실시간 반출입정보를 자동으로 ... 전송하는 경우 ... 갈음"; "물품반출입일부터 2년간 보관" |
| Release only after checking release approval data; hold and report if anything is wrong | 보세화물고시 제10조①~④ | "반출승인정보를 확인한 후 이상이 없는 경우 반출 전에 ... 반출신고서를 ... 제출"; "출고를 보류하고 세관장에게 그 사실을 보고" |
| Warehouse checks that loading-place inspection is complete before release | 수출고시 제21조③ | "적재지검사 대상물품을 반출하기 전에 적재지검사가 완료되었는지 확인하여야 한다" |
| Release notice 30 days before the storage period ends. In commercial bonded warehouses the operator sends it by registered mail | 체화고시 제6조②, 제7조①④ | "영업용보세창고에 반입한 물품의 반출통고는 보세구역운영인이 화주등에게"; "장치기간 만료 30일 전까지"; "등기우편으로 송부" |
| Quarterly inventory check and report | 보세화물고시 제16조① | "매 분기별 자체 전산시스템의 재고자료를 출력하여 실제재고와 ... 확인 ... 세관장에게 보고" |
| Report theft, fire, flood and cargo mismatch without delay | 특허고시 제17조②2·3 | "도난, 화재, 침수, 그 밖의 사고가 발생한 때"; "선적서류 ... 에 표기된 물품과 상이한 사실을 발견한 때" |
| Loss report; duty collected from the operator | 보세화물고시 제27조①, 법 제160조② | "멸실된 때에는 운영인등 ... 은 ... 신고서를 세관장에게 제출"; "그 운영인이나 보관인으로부터 즉시 그 관세를 징수한다. 다만, 재해나 그 밖의 부득이한 사유로 멸실된 때 ... 예외" |
| CCTV that records continuously is a licence requirement | 특허고시 제10조①7 | "상시 녹화 및 기록보관이 가능한 감시 장비를 갖추어야 한다" |

## Section 10: response to a violation
| Claim | Source | Quote |
|---|---|---|
| Criminal violations are reported without delay | AEO고시 제17조① 단서 | "변동사항이 범칙행위, 부도 등 공인유지에 중대한 영향을 미치는 경우 지체없이 보고하여야 한다" |
| Reductions: 자수 -50%, cooperation -15%, voluntary tax payment -50%, AEO A/AA/AAA -15/-30/-50 (grade on the date of the violation) | 통고고시 별표 2 | "세관의 조사개시 전에 자수한 자 -50%"; "...조사에 적극 협조한 자 -15%"; "부족세액(가산세를 포함한다)을 자진 납부한 자 -50%"; "AAA등급업체 -50% / AA -30% / A -15%"; note 2) "위반 행위일의 등급" |
| Combined reduction capped at 50% | 영 제270조의2④ | "합산한 비율이 100분의 50을 초과하는 경우에는 100분의 50으로 한다" |
| 자수 or AEO status can mean 통고처분 instead of referral, with prior approval | 통고고시 제2조③ | "관세청장의 사전승인을 받아 통고처분 할 수 있다 ... 2. 법 제255조의2에 따른 수출입 안전관리 우수업체 3. 세관의 출석 요구 전에 자수하거나..." |
| 별표 5 has no reduction for self-reporting; its grounds are listed | 영 별표 5 제1호라목·마목 | 라목 2) 중소기업 20%, 3) 질서법 제10조② etc. 50%, 4) 반복 위반 75%; 마목: 75% cap, plus 20% for paying on time. The word 자진신고 does not appear. 훈령 has only 자진납부 (제9조). |
| Post-violation conduct is considered | 질서법 제14조 | "2. 질서위반행위 이후의 당사자의 태도와 정황" |
| No error points for correction before acceptance or within 7 days after export acceptance (excluding weekends and holidays). AM corrections also exempt | 오류고시 제8조의2①, 별표 4 no.36 | "1. 신고서가 수리되기 전에 신청 정정 또는 취하 시: 오류점수 면제 2. 수출(반송)신고서가 수리된 날로부터 7일 이내 ... 면제"; "36 AM활동에 의한 정정 오류점수 면제" |
| Employee not removed from the job is a suspension ground | AEO고시 제25조5호나목 | "...해당 임직원을 상당한 기간 내에 수출입 관련 직무에서 배제하지 않은 사실이 확인된 경우" |
| Suspension of up to 6 months, all or part | 법 제255조의3③, AEO고시 제25조 | "6개월의 범위에서 ... 혜택의 전부 또는 일부를 정지할 수 있다" |
| No published criteria for the length of a suspension | AEO고시 (full text) and AEO훈령 (full text) | Neither text has a schedule of suspension periods. 훈령 제44조 covers monitoring only. |
| Hearings apply only to cancellation | AEO고시 제26조① | "제25조의2에 따라 ... 공인을 취소하려는 경우 사전에 ... 청문" |
| A 제276조 fine is a cancellation ground; for smuggling and similar offences, paying the 통고처분 is too; punishment under the dual-liability clause is excluded | AEO고시 제25조의2①6 가·나, 영 제259조의5③ | "가. 법 제268조의2, 제269조, 제270조 ... 벌금형 이상의 형을 선고받거나 통고처분을 이행한 경우 나. 법 제276조에 따라 벌금형의 선고를 받은 경우 ... 다만, 각 법령의 양벌규정에 따라 처벌된 개인 또는 법인은 제외" |
| 1.1.2: two years after a 제276조 fine | 별표 1 1.1.2 | "법 제276조에 따라 벌금형 선고를 받은 사실이 있는 경우에는 벌금형을 선고받거나 통고처분을 이행한 후 2년이 경과하여야 한다" |
| Not paying the 통고처분 within 15 days leads to referral | 법 제316조 (cu-penalty facts) | — |
| 과태료 falls on the company | 질서법 제11조① | "종업원이 업무에 관하여 법인 ... 에게 부과된 법률상의 의무를 위반한 때에는 법인 ... 에게 과태료를 부과한다" |
| A separate 통고서 for the offender and for the company | 영 제270조의2⑤ | "그 범칙행위자 및 법 제279조의 양벌 규정이 적용되는 법인 또는 개인별로 통고서를 작성하여 통고해야 한다" |
| 2.1.4 ethics and anti-fraud; 2.2.1 risk; 2.5.1 internal control; 4.8.2 training | 별표 1 라. | "2.1.4 ... 윤리경영방침을 마련하여야 하고, 내부고발제도 등 부정방지 프로그램을 활성화"; "2.5.1 ... 내부통제활동에 대하여 주기적으로 평가하고 개선하는 절차" |

## Section 11: cases
| Claim | Source | Quote |
|---|---|---|
| Inspection at the loading place is the default | 수출고시 제18조② | "수출물품의 검사는 적재지검사를 원칙으로 한다" |
| Who is told about inspection | 수출고시 제19조 | "신고인, 적재화물목록 제출자 및 보세구역 운영인 등에게 검사대상임을 통보할 수 있다" |
| Acceptance can be conditional on inspection before loading | 수출고시 제26조3호 | "적재지검사대상은 수출물품을 적재하기 전에 검사를 받는 조건으로 신고를 수리할 수 있다" |
| Loading without inspection triggers an investigation, then 통고처분 or 과태료 | 수출고시 제74조①6, ② | "적재지검사를 받지 않고 적재한 때"; "통고처분 또는 과태료부과 등 필요한 처분" |
| Title of 제276조 | 법 제276조 | "제276조(허위신고죄 등)" |
| No 내국물품 on an international trading vessel | 법 제140조⑥ | "국제무역선이나 국제무역기에는 내국물품을 적재할 수 없으며 ... 다만, 세관장의 허가를 받았을 때에는 그러하지 아니하다" |
| Goods without an accepted export declaration are 내국물품 | 법 제2조4호나·5호가 | "외국물품 ... 나. ... 수출신고가 수리된 물품"; "내국물품 ... 가. 우리나라에 있는 물품으로서 외국물품이 아닌 것" |
| Penalty for breaching 제140조 | 법 제276조④3 | "제140조제1항ㆍ제4항ㆍ제6항 ... 을 위반한 자" → "1천만원 이하의 벌금 ... 과실로 ... 200만원 이하의 벌금" |
| No loading before the loading declaration is accepted | 입출항고시 제42조① | "출항하려는 물품은 적재신고가 수리되기 전에 선박 또는 항공기에 적재할 수 없다" |
| The carrier compiles and submits the House manifest | 입출항고시 제43조⑤ | "선사 또는 항공사는 화물운송주선업자가 작성하여 제공한 하우스적재화물목록을 최종적으로 취합하여 세관장에게 제출" |
| Correction requests | 입출항고시 제44조① | "적재화물목록 작성책임자가 ... 정정하려는 때에는 ... 정정신청서를 ... 제출하여 승인을 받아야 한다" |
| Case facts, the company's penalties and its prevention steps | The internal guide (anonymized, not public) | Published only as "그 회사가 받은 처분" |
