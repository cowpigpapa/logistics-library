# bl-multimodal FACTS (2026-10-18 확인)

법령·판례는 law.go.kr DRF API로 2026-10-18 받은 현행본(scratchpad/bm/law, bm/dl/p*.xml). 협약·약관 원문은 scratchpad/bm/dl에 받은 PDF를 pdftotext로 읽음. 브라우저 자동화 사용 안 함(curl, WebFetch, WebSearch만).

## 한국 법령

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 1 | 상법 현행: 법률 제21044호, 시행 2026. 9. 10. | law.go.kr DRF lawSearch(상법, MST 273629) | 공포번호 21044, 시행일자 20260910, 현행 |
| 2 | 제816조 제1항: 해상 외 구간 포함 시 손해 구간의 법 | 상법 제816조 https://www.law.go.kr/법령/상법/제816조 | "①운송인이 인수한 운송에 해상 외의 운송구간이 포함된 경우 운송인은 손해가 발생한 운송구간에 적용될 법에 따라 책임을 진다." |
| 3 | 제816조 제2항: 불분명·성질상 비한정 → 최장 거리 구간 법, 같거나 정할 수 없으면 최고 운임 구간 법 | 같은 조 | "②어느 운송구간에서 손해가 발생하였는지 불분명한 경우 또는 손해의 발생이 성질상 특정한 지역으로 한정되지 아니하는 경우에는 운송인은 운송거리가 가장 긴 구간에 적용되는 법에 따라 책임을 진다. 다만, 운송거리가 같거나 가장 긴 구간을 정할 수 없는 경우에는 운임이 가장 비싼 구간에 적용되는 법에 따라 책임을 진다." |
| 4 | 제816조는 해상편 개품운송 절에 있음 | 상법 XML 편장 구조(제5편 해상 제2장 운송과 용선 제1절 개품운송, 제791조~) | 제815조(준용규정) 바로 뒤, 제817조(해상여객운송계약) 앞 |
| 5 | 제913조 제2항·제3항: 공항 밖 운송 추정, 동의 없는 대체 운송은 항공운송 | 상법 제913조 | "② … 항공운송 중에는 공항 외부에서 한 육상, 해상 운송 또는 내륙 수로운송은 포함되지 아니한다. 다만, 그러한 운송이 운송계약을 이행하면서 운송물의 적재(積載), 인도 또는 환적(換積)할 목적으로 이루어졌을 경우에는 항공운송 중인 것으로 추정한다. ③ 운송인이 송하인과의 합의에 따라 항공운송하기로 예정된 운송의 전부 또는 일부를 송하인의 동의 없이 다른 운송수단에 의한 운송으로 대체하였을 경우에는 그 다른 운송수단에 의한 운송은 항공운송으로 본다." |
| 6 | 제115조 과실 추정, 제121조 1년 소멸시효 | 상법 제115조·제121조 | "운송주선인은 자기나 그 사용인이 … 주의를 해태하지 아니하였음을 증명하지 아니하면 … 손해를 배상할 책임을 면하지 못한다." / "①운송주선인의 책임은 수하인이 운송물을 수령한 날로부터 1년을 경과하면 소멸시효가 완성한다." |
| 7 | 육상운송: 제137조 도착지 가격, kg당 한도 없음 | 상법 제137조 | "① 운송물이 전부멸실 또는 연착된 경우의 손해배상액은 인도할 날의 도착지의 가격에 따른다." (kg당 한도 조문 없음) |
| 8 | 제146조: 유보 없는 수령+운임 지급 시 책임 소멸, 즉시 발견할 수 없으면 2주 내 통지 | 상법 제146조 | "①운송인의 책임은 … 유보없이 운송물을 수령하고 운임 기타의 비용을 지급한 때에는 소멸한다. 그러나 … 즉시 발견할 수 없는 훼손 또는 일부 멸실이 있는 경우에 운송물을 수령한 날로부터 2주간내에 운송인에게 그 통지를 발송한 때에는 그러하지 아니하다." |
| 9 | 제147조가 제121조 준용(육상운송인 1년) | 상법 제147조 | "제117조, 제120조 내지 제122조의 규정은 운송인에 준용한다." |
| 10 | 제795조 제1항 해상 과실 추정 | 상법 제795조 | "①운송인은 … 주의를 해태하지 아니하였음을 증명하지 아니하면 운송물의 멸실ㆍ훼손 또는 연착으로 인한 손해를 배상할 책임이 있다." |
| 11 | 제797조 666.67/2 계산단위 | 상법 제797조 제1항 | "매 포장당 또는 선적단위당 666과 100분의 67 계산단위의 금액과 중량 1킬로그램당 2 계산단위의 금액 중 큰 금액을 한도로" |
| 12 | 제804조 서면 통지, 3일 | 상법 제804조 제1항 | "수령 후 지체 없이 … 서면에 의한 통지를 발송하여야 한다. 다만, … 즉시 발견할 수 없는 것인 때에는 수령한 날부터 3일 이내에" |
| 13 | 제814조 제1항 1년 재판상 청구, 합의로 연장 | 상법 제814조 제1항 | "… 인도한 날 또는 인도할 날부터 1년 이내에 재판상 청구가 없으면 소멸한다. 다만, 이 기간은 당사자의 합의에 의하여 연장할 수 있다." |
| 14 | 제814조 제2항·제3항 3개월, 소송고지 | 상법 제814조 제2항·제3항 | "… 그 합의 또는 청구가 있은 날부터 3개월이 경과하기 이전에는 그 제3자에 대한 운송인의 채권ㆍ채무는 제1항에도 불구하고 소멸하지 아니한다." / "③ … 3개월 이내에 그 제3자에 대하여 소송고지를 하면 3개월의 기간은 그 재판이 확정되거나 그 밖에 종료된 때부터 기산한다." |
| 15 | 물류정책기본법 제2조 제1항 제11호 국제물류주선업 정의 (시행 2025. 10. 1., 법률 제21065호) | law.go.kr DRF 물류정책기본법 | "11. "국제물류주선업"이란 타인의 수요에 따라 자기의 명의와 계산으로 타인의 물류시설ㆍ장비 등을 이용하여 수출입화물의 물류를 주선하는 사업을 말한다." |
| 16 | 시행규칙 제5조 제2항 제2호 자기 명의 B/L·AWB 양식·약관 (시행 2026. 4. 2.) | law.go.kr DRF 물류정책기본법 시행규칙 https://www.law.go.kr/법령/물류정책기본법시행규칙/제5조 | "2. 자기 명의로 발행할 한글 또는 영문으로 작성된 선하증권 및 항공화물운송장의 양식ㆍ약관에 관한 서류" |

## 판례 (law.go.kr DRF target=prec)

| # | 문서에 쓴 내용 | 출처 | 근거 문장 |
|---|---|---|---|
| 17 | 복합운송계약 정의, 국제물류주선업자 자기 명의 계약 → 복합운송인, 종합물류 계약 핵심은 복합운송 | 대법원 2019. 7. 10. 선고 2019다213009 판결 요지 [1] https://www.law.go.kr/LSW/precInfoP.do?precSeq=208733 | "복합운송계약이란 운송물을 육상운송, 해상운송, 항공운송 중 적어도 두 가지 이상의 서로 다른 운송수단을 결합하여 운송을 수행하는 것을 말한다. … 국제물류주선업자가 자기 명의로 운송계약을 체결하고 운송을 인수하는 경우에는 복합운송인의 지위를 취득하여 해당 운송계약에 따른 권리·의무의 주체가 된다. … 가장 핵심이 되는 요소는 복합운송으로 보아야 한다." |
| 18 | 구간 불명 + 해상 최장 → 해상 규정 | 같은 판결 요지 [2] | "손해가 발생한 운송구간이 불분명하거나 그 성질상 특정한 지역으로 한정할 수 없는 경우, 해상운송 구간이 가장 길다면 해상운송에 관한 규정을 적용하여야 한다." |
| 19 | 대체 운송 추가 비용이 구간 불특정 손해로 다뤄짐; 814 "인도할 날" | 같은 판결 이유·요지 [3] | "원고가 주장하는 손해는 … 주식회사 한진에 대체운송을 의뢰하여 발생한 추가비용으로서 '손해가 발생한 운송구간이 불분명하거나 성질상 특정한 지역으로 한정되지 아니하는 경우'에 해당한다." / "운송인이 운송물의 인도를 거절하거나 운송인의 사정으로 운송이 중단되는 등의 사유로 운송물이 인도되지 않은 경우에도 '운송물을 인도할 날'을 기준으로 하여 제소기간이 도과하였는지를 판단하여야 한다." |
| 20 | 인천~부산 육상 + 해상, 영상 18도 요청, 영하 18도 설정, 797은 해상 도중 또는 사실상 일부에만 적용 | 대법원 2025. 11. 13. 선고 2025다211111 판결 https://www.law.go.kr/LSW/precInfoP.do?precSeq=613051 | "상법 제797조의 책임제한 규정은 '해상운송 도중 또는 해상운송과 밀접 불가분하여 사실상 해상운송의 일부로 평가되는 부분'에서 운송물의 멸실ㆍ훼손 또는 연착이 발생한 경우에 한하여 적용된다고 봄이 타당하다." / 사안: "인천항에서 부산항까지의 육상운송 … 영상 18도로 … 영하 18도로 설정 … 원심판단에 법리오해의 잘못이 있다" |
| 21 | 육상 구간 명백 → 복합운송증권 9개월 제소기간 유효; 해상은 연장 가능·단축 불가, 육상은 연장·단축 가능 | 대법원 2009. 8. 20. 선고 2008다58978 판결 https://www.law.go.kr/LSW/precInfoP.do?precSeq=140171 | "해상운송의 경우에는 … 1년 내에 재판상 청구가 없으면 소멸하도록 하고 이를 당사자의 합의에 의하여 연장할 수 있으나 단축할 수는 없도록 규정하고 있는 반면에, 육상운송의 경우에는 상법 제147조, 제121조에 따라 … 1년을 경과하면 소멸시효가 완성하고 이는 당사자의 합의에 의하여 연장하거나 단축할 수 있다고 볼 것인 점 … 복합운송에서 손해발생구간이 육상운송구간임이 명백한 경우에는 복합운송증권에서 정하고 있는 9개월의 제소기간은 강행법규에 저촉되지 아니하는 것으로서 유효하다." |
| 22 | 구간 불명 → 상법 제146조 제1항 적용 안 됨 | 대법원 2009. 8. 20. 선고 2007다87016 판결 https://www.law.go.kr/LSW/precInfoP.do?precSeq=140203 | "손해발생구간이 불분명한 경우에는 상법 제146조 제1항은 적용이 되지 않는 것으로 해석하여야 한다." |
| 23 | 814조 제2항 "제1항의 기간"에 합의 연장 기간 포함 | 대법원 2018. 12. 13. 선고 2018다244761 판결 https://www.law.go.kr/LSW/precInfoP.do?precSeq=204250 | "상법 제814조 제2항 전단에서 규정한 '제1항의 기간'이란 … 1년의 기간은 물론, 상법 제814조 제1항 단서에 따라 당사자의 합의에 의하여 연장된 기간을 포함한다고 보아야 한다." |

## UNCTAD/ICC 규칙(1992) — 스페인어판 대학 공개 사본 https://ocw.uca.es/mod/resource/view.php?id=4924 (실제 파일: ocw.uca.es/pluginfile.php/7480/mod_resource/content/1/Reglas_UNCTAD CCI.pdf)

| # | 내용 | 조 | 원문(스페인어) |
|---|---|---|---|
| 24 | 계약 편입 시 적용 | 1.1 | "Las presentes Reglas se aplicarán en virtud de su incorporación al contrato de transporte…" |
| 25 | 복합운송계약 정의 | 2.1 | "un contrato único para el transporte de mercancías por dos modos de transporte por lo menos." |
| 26 | MTO 정의 | 2.2 | "la persona que celebra un contrato de transporte multimodal y asume la responsabilidad de su cumplimiento en calidad de porteador." |
| 27 | 사용인·하청 행위 책임 | 4.2 | "El OTM será responsable de las acciones y omisiones … de cualquier otra persona a cuyos servicios recurra…" |
| 28 | 바다·내수로 항해 과실·화재 면책 | 5.4 | "actos, negligencia o falta del capitán … en la navegación o el manejo del buque; incendio…" |
| 29 | 666.67 / 2 SDR | 6.1 | "666,67 DEG por bulto o unidad o a 2 DEG por kilogramo de peso bruto …, si esta cantidad es mayor." |
| 30 | 해상·내수로 없으면 8.33 | 6.3 | "si el transporte multimodal no incluye … el porte de mercancías por mar o por vías de navegación interior, … 8,33 DEG por kilogramo" |
| 31 | 특정 구간 강행 한도 | 6.4 | "…una convenio internacional aplicable o una ley nacional imperativa hubiera establecido otro límite … se determinará a tenor de lo dispuesto en ese convenio o en esa ley nacional imperativa." |
| 32 | 연착 한도 운임 상당액 | 6.5 | "…limitada a una suma que no exceda del equivalente al flete…" |
| 33 | 통지: 인도 때, 보이지 않으면 연속 6일 | 9.1·9.2 | "…dentro de los seis días consecutivos siguientes…" |
| 34 | 제소 9개월 | 10 | "…si no se entabla una demanda dentro de un plazo de nueve meses…" |
| 35 | 강행 법규 우선 | 13 | "…sólo surtirán efecto si no son contrarias a las disposiciones imperativas…" |
| 36 | ICC Publication 481 | UC Berkeley 서지 https://lawcat.berkeley.edu/record/541607 | WebSearch 결과 요약 "Publication (International Chamber of Commerce) ; no 481" (페이지 직접 열람은 안 함) |

## FIATA FBL Standard Conditions (1992) — 영문 공개 사본 https://ocw.uca.es/mod/resource/view.php?id=4925

| # | 내용 | 조 | 원문 |
|---|---|---|---|
| 37 | Freight Forwarder = FBL 발행 MTO, 운송인으로 책임 | Definitions | ""Freight Forwarder" means the Multimodal Transport Operator who issues this FBL and is named on the face of it and assumes liability for the performance of the multimodal transport contract as a carrier." |
| 38 | 단일 수단에도 적용 | 1 | "these conditions shall also apply if only one mode of transport is used." |
| 39 | 전 구간 이행·주선, 책임 인수 | 2.1 | "undertakes to perform and/or in his own name to procure the performance of the entire transport, from the place at which the goods are taken in charge … to the place of delivery…" |
| 40 | 사용인·하청 행위 = 자기 행위 | 2.2 | "…any other person of whose services he makes use for the performance of the contract … as if such acts and omissions were his own." |
| 41 | 유통성, 권리증권 | 3.1 | "This FBL is issued in a negotiable form unless it is marked "non negotiable". It shall constitute title to the goods…" |
| 42 | 송하인 담보, 적입 불량 면책 | 5.1·5.2 | "…shall not be liable for any loss, damage or expense caused by defective or insufficient packing … or by inadequate loading or packing within containers … performed by the Merchant…" |
| 43 | 과실 추정 책임, 연착은 이익 신고 시 | 6.2 | "…unless the Freight Forwarder proves that no fault or neglect of his own, his servants or agents … has caused or contributed … only be liable for loss following from delay in delivery if the Consignor has made a declaration of interest in timely delivery which has been accepted…" |
| 44 | 6.5 추정 사유(적입·포장 등) | 6.5 | "6.5.2. insufficiency or defective condition of the packaging…; 6.5.3. handling, loading, stowage or unloading of the goods by the Merchant…" |
| 45 | 바다·내수로 항해 과실·화재 면책 | 6.7 | "act, neglect, or default of the master … in the navigation or in the management of the ship; fire, unless caused by the actual fault or privity of the carrier" |
| 46 | 강행 규정 우선, 바다 구간 헤이그/헤이그-비스비(선적국 시행) | 7.1·7.2 | "These conditions shall only take effect to the extent that they are not contrary to the mandatory provisions…" / "The Hague Rules … or in those countries where they are already in force the Hague-Visby Rules … as enacted in the Country of Shipment, shall apply to all carriage of goods by sea…" |
| 47 | 666.67/2 SDR, 가액 신고·종가 운임 | 8.3 | "…666.67 SDR per package or unit or 2 SDR per kilogramme of gross weight …, whichever is the higher, unless the nature and value of the goods shall have been declared … or the ad valorem freight rate paid, and such value is stated in the FBL…" |
| 48 | 컨테이너 포장 수 | 8.4 | "…the packages or other shipping units enumerated in the FBL as packed in such article of transport are deemed packages… Except as aforesaid, such article of transport shall be considered the package or unit." |
| 49 | 해상·내수로 없으면 8.33 | 8.5 | "…does not … include carriage of goods by sea or by inland waterways, … 8.33 SDR per kilogramme…" |
| 50 | 특정 단계 강행 한도("another limit") | 8.6.1 | "…an applicable international convention or mandatory national law would have provided another limit of liability if a separate contract of carriage had been made for that particular stage…" |
| 51 | 연착·간접손해 한도 운임 2배 | 8.7 | "…limited to an amount not exceeding the equivalent of twice the freight…" |
| 52 | 통지 6일 | 16.2 | "…if notice in writing is not given within 6 consecutive days after the day when the goods were delivered…" |
| 53 | 제소 9개월 | 17 | "…unless suit is brought within 9 months after the delivery of the goods, or the date when the goods should have been delivered…" |
| 54 | 관할·준거법: FF 영업소, 그 나라 법 | 19 | "Actions against the Freight Forwarder may be instituted only in the place where the Freight Forwarder has his place of business as stated on the reverse of this FBL and shall be decided according to the law of the country in which that place of business is situated." |
| 55 | ICC 로고 문구 | 서식 하단 | "The ICC logo denotes that this document has been deemed by the ICC to be in conformity with the UNCTAD/ICC Rules … does not imply ICC endorsement of the document nor does it in any way make the ICC party to any possible legal action…" |
| 56 | eFBL 발행자 요건: FIATA·국가 협회 회원 + 배상책임보험 | FIATA eFBL FAQ https://www.efbl.fiata.org/faq | "a valid FIATA/National Association member and to have a valid liability insurance" (WebFetch 요약 인용). FAQ는 약관 연도를 적지 않음 |
| 57 | 1992년 이후 개정 FBL 약관 못 찾음 | WebSearch(2026-10-18) | 2024·2025 개정 발표 검색 결과 없음 → 문서에 "찾지 못함"으로 표기 |

## 국제 협약

| # | 내용 | 출처 | 원문 |
|---|---|---|---|
| 58 | 1980 협약 미발효, 30개국 요건, 당사국 11, 서명국 6, 한국 없음 | UNTC XI-E-1 https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XI-E-1&chapter=11&clang=_en | "Not yet in force … 12 months after the Governments of 30 States have either signed it not subject to ratification…"; Signatories: 6, Parties: 11 (WebFetch) |
| 59 | 1980 협약 제1조 제1·2항, 제16조 제1항, 제18조(920/2.75, 8.33), 제19조(높은 한도) | 오슬로대 조약 자료실 https://jus.uio.no/english/services/library/treaties/07/7-05/multimodal-transport-goods.html | "the carriage of goods by at least two different modes of transport on the basis of a multimodal transport contract"; "who assumes responsibility for the performance of the contract"; "an amount not exceeding 920 units of account per package or other shipping unit or 2.75 units of account per kilogram"; "shall be limited to an amount not exceeding 8.33 units of account per kilogram"; 제19조: 구간 협약·강행법이 "higher limit"이면 그 한도 (WebFetch 발췌) |
| 60 | 로테르담 제1조 제1항(해상 포함+다른 수단) | UNCITRAL 원문 PDF | ""Contract of carriage" means … The contract shall provide for carriage by sea and may provide for carriage by other modes of transport in addition to the sea carriage." |
| 61 | 로테르담 제26조(해상 전후 구간만, 다른 국제 협약 우선 조건 a~c) | 같은 PDF | "…solely before their loading onto the ship or solely after their discharge from the ship, the provisions of this Convention do not prevail over those provisions of another international instrument that … (b) Specifically provide for the carrier's liability, limitation of liability, or time for suit; and (c) Cannot be departed from by contract…" |
| 62 | 로테르담 제94조 20번째 비준, 당사국 5(스페인, 토고, 콩고, 카메룬, 베냉) | 원문 제94조 / UNCITRAL status https://uncitral.un.org/en/texts/transportgoods/conventions/rotterdam_rules/status | "…after the date of deposit of the twentieth instrument…"; 상태 페이지 "Parties: 5" |
| 63 | MC99 제18조 제4항(공항 밖 운송 추정, 대체 운송) | IATA 게시 원문 https://www.iata.org/contentassets/fb1137ff561a4819a2d38f3db7308758/mc99-full-text.pdf | "If, however, such carriage takes place in the performance of a contract for carriage by air, for the purpose of loading, delivery or transshipment, any damage is presumed, subject to proof to the contrary, to have been the result of an event which took place during the carriage by air. If a carrier, without the consent of the consignor, substitutes carriage by another mode…, such carriage … is deemed to be within the period of carriage by air." |
| 64 | MC99 제38조 제1·2항 | 같은 PDF | "…the provisions of this Convention shall, subject to paragraph 4 of Article 18, apply only to the carriage by air…" / "Nothing in this Convention shall prevent the parties in the case of combined carriage from inserting in the document of air carriage conditions relating to other modes of carriage…" |
| 65 | MC99 제31조 14일, 사기 외 소송 불가; 제35조 2년 | 같은 PDF | "…fourteen days from the date of receipt in the case of cargo…"; "If no complaint is made within the times aforesaid, no action shall lie against the carrier, save in the case of fraud…"; "…within a period of two years, reckoned from the date of arrival…" |
| 66 | MC99 26 SDR(2024. 12. 28.), 한국 발효 2007. 12. 29. | 사이트 STYLE.md 4절 공통 값, ins-carrier-liability(ICAO 2024 개정, Mtl99 당사국 목록) | 이 문서에서 새로 확인하지 않고 기존 검증값 사용 |
| 67 | CMR 제1조 제1항(두 나라, 하나 이상 당사국) | UNTS vol. 399 https://treaties.un.org/doc/Publication/UNTS/Volume%20399/volume-399-I-5742-English.pdf | "…when the place of taking over of the goods and the place designated for delivery … are situated in two different countries, of which at least one is a contracting country…" |
| 68 | CMR 제2조 제1항(차량째 다른 수단, 그 수단 고유 사건 증명 시 그 수단 규칙) | 같은 PDF | "Where the vehicle containing the goods is carried over part of the journey by sea, rail, inland waterways or air, and … the goods are not unloaded from the vehicle, this Convention shall nevertheless apply to the whole of the carriage. Provided that to the extent that it is proved that any loss … was not caused by an act or omission of the carrier by road, but by some event which could only have occurred in the course of and by reason of the carriage by that other means of transport, the liability of the carrier by road shall be determined … in the manner in which the liability of the carrier by the other means of transport would have been determined…" |
| 69 | CMR 제30조 7일(일·공휴일 제외), 제32조 1년/3년 | 같은 PDF | "…within seven days of delivery, Sundays and public holidays excepted…"; "The period of limitation … shall be one year. Nevertheless, in the case of wilful misconduct … three years." |
| 70 | CMR kg당 8.33 SDR, 한국 비당사국 | ins-carrier-liability 검증값(1978 의정서 UNTS vol. 1208, UNTC XI-B-11) | 이 문서에서 새로 열람하지 않음 |
| 71 | CIM 제1조 §1 회원국 간 국제 철도 | COTIF 1999 비공식 통합본(OTIF, version of 01.11.2023), digitalizetrade.org 게시 사본 https://www.digitalizetrade.org/files/legal/documents/COTIF_1999_01_11_2023_en.pdf | "§ 1 These Uniform Rules shall apply to every contract of carriage of goods by rail for reward when the place of taking over of the goods and the place designated for delivery are situated in two different Member States…" |
| 72 | CIM 제30조 §2 kg당 17 계산단위 | 같은 파일 | "§ 2 Compensation shall not exceed 17 units of account per kilogramme of gross mass short." |
| 73 | CIM 제47조 §2(b) 7일 확인 요청+운송 중 손해 증명, 제48조 1년(고의 등 2년) | 같은 파일 | "…asks for ascertainment … immediately after discovery of the loss or damage and not later than seven days after the acceptance of the goods, and 2. in addition, proves that the loss or damage occurred between the time of taking over and the time of delivery"; "The period of limitation … shall be one year. Nevertheless, … two years in the case of an action … c) for loss or damage resulting from an act or omission done with intent…" |

## 회사 약관 예

| # | 내용 | 출처 | 원문(WebFetch 발췌) |
|---|---|---|---|
| 74 | Maersk House B/L: 수취지·인도지 칸 채우면 Multimodal Transport | https://terms.maersk.com/HBL cl. 1.1 | "Multimodal Transport arises if the Place of Receipt or the Place of Delivery (or both) are filled in on the reverse hereof." |
| 75 | 단계 불명: 미국 관련 USD 500/포장, 그 밖 2 SDR/kg | cl. 7.1(c) | "USD 500 per package" / "2 SDRs per kilo of the gross weight of the Goods lost or damaged" |
| 76 | 준거법 영국법 | cl. 28 | "governed by and construed in accordance with English law" |

## 문서 안의 계산 (사례 1, 직접 계산)

- 바다: 10 × 666.67 = 6,666.7 SDR; 5,000 × 2 = 10,000 SDR → 10,000 SDR
- CIM: 5,000 × 17 = 85,000 SDR (85,000 / 10,000 = 8.5배)
- CMR: 5,000 × 8.33 = 41,650 SDR

## 해석·판단(원문에 직접 없는 부분, 문서에 그렇게 표시함)

- 제816조 제1항이 한도뿐 아니라 책임 규정 전체를 가리킨다: 문언과 2008다58978(육상 기간 규정 적용) 2025다211111(육상 구간에 해상 한도 미적용)에서 "자연스럽다"로 표현.
- 해상 구간 손해에서 FBL 9개월이 1년을 줄이지 못한다: 2008다58978의 대비 설명에 기댄 것으로 "보기 어려움"으로 표현.
- 제814조 제2항이 CMR·CIM 기간을 늘리지 않는다: 문언("제1항에도 불구하고") 해석, "읽기는 어렵습니다"로 표현.
- 한국 국내 트럭 구간에서 FBL 제8.3조 한도의 효력: 단정하지 않음.
- 구간 증명 책임 일반론: "구조상"으로 표현. 조문 근거는 CMR 제2조 제1항 단서, MC99 제18조 제4항만.
