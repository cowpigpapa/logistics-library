# rk-warehouse FACTS (2026-10-19 확인)

법령·고시 원문은 국가법령정보센터 Open API(lawService.do, 현행본)로 내려받아 대조했다(scratchpad/rkw/law/*.txt, *.xml). TAPA FSR 2020은 tapaemea.org 공개 PDF를 받아 pdftotext로 읽었다(scratchpad/rkw/web/fsr2020.pdf, rkw/fsr2020.txt). TAPA APAC·WCO·기상청·공정위 페이지는 curl로 받아 본문을 확인했다(rkw/web/). DQS 안내는 WebFetch로 확인했다.

출처 약칭과 URL
- 상법 = 상법(법률 제21044호, 시행 2026. 9. 10.) — https://www.law.go.kr/법령/상법
- 물류시설법 = 물류시설의 개발 및 운영에 관한 법률(법률 제21065호, 공포 2025. 10. 1., 시행 2026. 1. 2.) — https://www.law.go.kr/법령/물류시설의개발및운영에관한법률
- 등록규칙 = 물류창고업 등록에 관한 규칙(국토교통부령 제1310호, 시행 2024. 2. 17.) — https://www.law.go.kr/법령/물류창고업등록에관한규칙
- 화재지침 = 물류창고업 화재안전 관리계획서 작성 지침(국토교통부고시 제2024-99호, 시행 2024. 2. 17.) — https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000236548
- 화재령 = 화재의 예방 및 안전관리에 관한 법률 시행령(대통령령 제36432호, 시행 2026. 7. 1.) — https://www.law.go.kr/법령/화재의예방및안전관리에관한법률시행령
- 위험물법 = 위험물안전관리법(법률 제20231호, 시행 2025. 8. 7.) — https://www.law.go.kr/법령/위험물안전관리법
- 산안기준 = 산업안전보건기준에 관한 규칙(고용노동부령 제450호, 2025. 9. 1. 공포본) — https://www.law.go.kr/법령/산업안전보건기준에관한규칙
- 개보법 = 개인정보 보호법(법률 제21445호, 시행 2026. 9. 11.) — https://www.law.go.kr/법령/개인정보보호법
- 표준지침 = 표준 개인정보 보호지침(개인정보보호위원회고시 제2025-4호, 2025. 4. 11.) — https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000257592
- 근참법 = 근로자참여 및 협력증진에 관한 법률(법률 제18927호, 시행 2022. 12. 11.) — https://www.law.go.kr/법령/근로자참여및협력증진에관한법률
- 약관법 = 약관의 규제에 관한 법률(법률 제20239호, 시행 2024. 8. 7.) — https://www.law.go.kr/법령/약관의규제에관한법률
- 관세법 = 관세법 제19조 — https://www.law.go.kr/법령/관세법/제19조 (cu-bonded 7절이 이미 인용한 조문. 이번에 재확인하지 않고 cu-bonded의 문장을 따름)
- FSR2020 = TAPA Facility Security Requirements FSR 2020 — https://tapaemea.org/wp-content/uploads/2022/05/FSR-2020-Standard.pdf
- TAPA-APAC = "FSR & TSR Version 2026 Standards in Q3 2026"(2026. 1. 16.) — https://tapa-apac.org/fsr-tsr-version-2026-standards-in-q3-2026-what-you-need-to-know-for-audits-and-certification/
- DQS = TAPA FSR 2026 Guide(DQS, 인증 기관) — https://www.dqsglobal.com/en/explore/blog/tapa-fsr-2026-guide
- WCO = SAFE Package — https://www.wcoomd.org/en/topics/facilitation/instrument-and-tools/frameworks-of-standards/safe_package.aspx
- KMA = 기상청 기상특보 발표기준 — https://www.weather.go.kr/kma/biz/forecast03.jsp
- FTC = 공정거래위원회 표준약관 게시판 — https://www.ftc.go.kr/www/selectBbsNttList.do?key=202&bordCd=201

## 1. 상법 창고업
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 창고업자 정의 | 상법 제155조 | "타인을 위하여 창고에 물건을 보관함을 영업으로 하는 자를 창고업자라 한다." |
| 무상 임치도 선관주의 | 상법 제62조 | "상인이 그 영업범위내에서 물건의 임치를 받은 경우에는 보수를 받지 아니하는 때에도 선량한 관리자의 주의를 하여야 한다." |
| 과실 추정 책임 | 상법 제160조 | "창고업자는 자기 또는 사용인이 임치물의 보관에 관하여 주의를 해태하지 아니하였음을 증명하지 아니하면 임치물의 멸실 또는 훼손에 대하여 손해를 배상할 책임을 면하지 못한다." |
| 검사·견품·보존처분 요구 | 상법 제161조 | "임치인 또는 창고증권소지인은 영업시간 내에 언제든지 창고업자에 대하여 임치물의 검사 또는 견품의 적취를 요구하거나 그 보존에 필요한 처분을 할 수 있다." |
| 6개월·2주 예고 | 상법 제163조 | "①당사자가 임치기간을 정하지 아니한 때에는 창고업자는 임치물을 받은 날로부터 6월을 경과한 후에는 언제든지 이를 반환할 수 있다. ②전항의 경우에 임치물을 반환함에는 2주간전에 예고하여야 한다." |
| 1년 시효, 전부멸실 기산, 악의 제외 | 상법 제166조 | "①임치물의 멸실 또는 훼손으로 인하여 생긴 창고업자의 책임은 그 물건을 출고한 날로부터 1년이 경과하면 소멸시효가 완성한다. ②전항의 기간은 임치물이 전부 멸실한 경우에는 임치인과 알고 있는 창고증권소지인에게 그 멸실의 통지를 발송한 날로부터 기산한다. ③전2항의 규정은 창고업자 또는 그 사용인이 악의인 경우에는 적용하지 아니한다." |
| 창고업자 채권 1년 | 상법 제167조 | "창고업자의 임치인 또는 창고증권소지인에 대한 채권은 그 물건을 출고한 날로부터 1년간 행사하지 아니하면 소멸시효가 완성한다." |
| 준용: 제108조·제146조만 | 상법 제168조 | "제108조와 제146조의 규정은 창고업자에 준용한다." |
| 제108조 내용 | 상법 제108조 | "①위탁매매인이 위탁매매의 목적물을 인도받은 후에 그 물건의 훼손 또는 하자를 발견하거나 그 물건이 부패할 염려가 있는 때 또는 가격저락의 상황을 안 때에는 지체없이 위탁자에게 그 통지를 발송하여야 한다. ②... 위탁자의 지시를 받을 수 없거나 그 지시가 지연되는 때에는 ... 적당한 처분을 할 수 있다." |
| 제146조 내용(2주) | 상법 제146조 | "①운송인의 책임은 수하인 또는 화물상환증소지인이 유보없이 운송물을 수령하고 운임 기타의 비용을 지급한 때에는 소멸한다. 그러나 운송물에 즉시 발견할 수 없는 훼손 또는 일부 멸실이 있는 경우에 운송물을 수령한 날로부터 2주간내에 운송인에게 그 통지를 발송한 때에는 그러하지 아니하다. ②... 악의인 경우에는 적용하지 아니한다." (창고업자에 대한 적용은 제168조 준용에 따른 해석) |
| 운송인 고가물 조항 | 상법 제136조 | "화폐, 유가증권 기타의 고가물에 대하여는 송하인이 운송을 위탁할 때에 그 종류와 가액을 명시한 경우에 한하여 운송인이 손해를 배상할 책임이 있다." |
| 공중접객업자 고가물 조항 | 상법 제153조 | "화폐, 유가증권, 그 밖의 고가물(高價物)에 대하여는 고객이 그 종류와 가액(價額)을 명시하여 임치하지 아니하면 공중접객업자는 ... 손해를 배상할 책임이 없다." |
| 창고업 장에 고가물 조항 없음 | 상법 제155조~제168조 전문 확인 | 제155조~제168조 조문 제목: 의의, 창고증권의 발행, 준용규정, 분할부분…, 입질과 일부출고, 손해배상책임, 검사·견품적취·보존처분권, 보관료청구권, 임치기간, 동전, 준용규정(제67조), 책임의 시효, 채권의 시효, 준용규정(제108조·제146조). 고가물 조항 없음 |
| 운송주선인 보관 주의 | 상법 제115조 | "운송주선인은 자기나 그 사용인이 운송물의 수령, 인도, 보관, 운송인이나 다른 운송주선인의 선택 기타 운송에 관하여 주의를 해태하지 아니하였음을 증명하지 아니하면 ... 배상할 책임을 면하지 못한다." |

## 2. 약관법
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 면책조항 무효 | 약관법 제7조 | "1. 사업자, 이행 보조자 또는 피고용자의 고의 또는 중대한 과실로 인한 법률상의 책임을 배제하는 조항 2. 상당한 이유 없이 사업자의 손해배상 범위를 제한하거나 사업자가 부담하여야 할 위험을 고객에게 떠넘기는 조항" |
| 창고 표준약관 찾지 못함 | FTC | 공정위 표준약관 게시판(key=202, 1~10쪽, 98건) 제목에서 "창고"·"보관" 표준약관 없음. 물류 관련은 택배(제10026호), 이사화물(제10035호), 국제이사화물(제10080호)뿐. 웹 검색으로도 창고업 표준약관·국토부 물류창고 표준계약서를 찾지 못함 |

## 3. 물류시설법·등록규칙·화재지침
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 물류창고업 정의 | 물류시설법 제2조 제5호의3 | "'물류창고업'이란 화주(貨主)의 수요에 따라 유상으로 물류창고에 화물을 보관하거나 이와 관련된 하역ㆍ분류ㆍ포장ㆍ상표부착 등을 하는 사업을 말한다." |
| 1천㎡·4천500㎡ 등록 | 물류시설법 제21조의2 제1항 | "1. 전체 바닥면적의 합계가 1천제곱미터 이상인 보관시설 ... 2. 전체면적의 합계가 4천500제곱미터 이상인 보관장소" |
| 보세창고 등 등록 의제 | 같은 조 제4항 | "그 전부를 다음 각 호의 어느 하나의 용도로만 사용하며 ... 허가ㆍ변경허가를 받거나 등록 ... 한 때에는 ... 물류창고업의 등록 ... 을 한 것으로 본다. 1. 「관세법」에 따른 보세창고의 설치ㆍ운영 2. 「화학물질관리법」에 따른 유해화학물질 보관ㆍ저장업 3. 「식품위생법」에 따른 식품보존업 중 식품냉동ㆍ냉장업 ..." |
| 제외 대상(위험물저장소 등) | 등록규칙 제2조 | "1. 「위험물안전관리법」 제2조제4호에 따른 저장소 2. 「고압가스 안전관리법」 제3조제1호에 따른 저장소 ... 6. 「총포ㆍ도검ㆍ화약류 등의 안전관리에 관한 법률」 제25조에 따른 화약류저장소" |
| 화재안전 관리계획서 첨부 | 등록규칙 제3조 제1항 제2호 | "2. 물류창고업의 사업운영계획에 관한 서류(화재안전 관리계획서를 포함한다)" |
| 매년 12월 31일 검토 | 화재지침 제3조 제1항 | "물류창고업 등록 후 매년 12월 31일까지 화재안전 관리계획서의 유효성 및 타당성을 검토하여 작성, 보관하여야 하며, 화재안전 관리계획서에 작성한 사항을 충실히 이행하여야 한다" |
| 보험 의무 조항 없음 | 물류시설법 전문 검색 | 법률 본문에서 "보험"은 물류단지 지원시설 목록("금융ㆍ보험ㆍ의료…")에만 나옴. 물류창고업자의 보험 가입 의무 조항 없음 |

## 4. 화재예방법 시행령(특수가연물)
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 특수가연물 정의 위임 | 화재령 제19조 | "①... 별표 2에서 정하는 품명별 수량 이상의 가연물을 말한다. ② ... 저장 및 취급 기준은 별표 3과 같다." |
| 수량 기준 | 화재령 별표 2 | "면화류 200킬로그램 이상 / 나무껍질 및 대팻밥 400킬로그램 이상 / 넝마 및 종이부스러기 1,000킬로그램 이상 / 사류(絲類) 1,000킬로그램 이상 / 볏짚류 1,000킬로그램 이상 / 가연성 고체류 3,000킬로그램 이상 / 석탄ㆍ목탄류 10,000킬로그램 이상 / 가연성 액체류 2세제곱미터 이상 / 목재가공품 및 나무부스러기 10세제곱미터 이상 / 고무류ㆍ플라스틱류 발포시킨 것 20세제곱미터 이상, 그 밖의 것 3,000킬로그램 이상" |
| 높이·면적 | 화재령 별표 3 제1호 나목 | "높이: 15미터 이하(살수설비를 설치하거나 방사능력 범위에 해당 특수가연물이 포함되도록 대형수동식소화기를 설치하는 경우) / 10미터 이하(그 밖의 경우). 쌓는 부분의 바닥면적: 200제곱미터(석탄ㆍ목탄류의 경우에는 300제곱미터) 이하 / 50제곱미터(석탄ㆍ목탄류의 경우에는 200제곱미터) 이하" |
| 실외 6m | 같은 표 다목 | "실외에 쌓아 저장하는 경우 쌓는 부분이 대지경계선, 도로 및 인접 건축물과 최소 6미터 이상 간격을 둘 것. 다만, 쌓는 높이보다 0.9미터 이상 높은 ... 내화구조 ... 벽체를 설치한 경우는 그렇지 않다." |
| 간격 1.2m/3m | 같은 표 마목 | "쌓는 부분 바닥면적의 사이는 실내의 경우 1.2미터 또는 쌓는 높이의 1/2 중 큰 값 이상으로 간격을 두어야 하며, 실외의 경우 3미터 또는 쌓는 높이 중 큰 값 이상으로 간격을 둘 것" |
| 품명별 구분 | 같은 표 가목 | "품명별로 구분하여 쌓을 것" |
| 표지 | 같은 표 제2호 가목 | "품명, 최대저장수량, 단위부피당 질량 또는 단위체적당 질량, 관리책임자 성명ㆍ직책, 연락처 및 화기취급의 금지표시가 포함된 특수가연물 표지를 설치해야 한다." |

## 5. 위험물안전관리법
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 저장소 외 저장 금지 | 위험물법 제5조 제1항 | "지정수량 이상의 위험물을 저장소가 아닌 장소에서 저장하거나 제조소등이 아닌 장소에서 취급하여서는 아니된다." |
| 90일 임시 | 같은 조 제2항 제1호 | "시ㆍ도의 조례가 정하는 바에 따라 관할소방서장의 승인을 받아 지정수량 이상의 위험물을 90일 이내의 기간동안 임시로 저장 또는 취급하는 경우" |
| 합산 1 이상 | 같은 조 제5항 | "... 각 위험물의 수량을 그 위험물의 지정수량으로 각각 나누어 얻은 수의 합계가 1 이상인 경우 당해 위험물은 지정수량 이상의 위험물로 본다." |

## 6. 산업안전보건기준(적재)
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 2m·10cm | 산안기준 제391조 | "바닥으로부터의 높이가 2미터 이상 되는 하적단(포대ㆍ가마니 등으로 포장된 화물이 쌓여 있는 것만 해당한다)과 인접 하적단 사이의 간격을 하적단의 밑부분을 기준하여 10센티미터 이상으로 하여야 한다." |
| 붕괴 방지·헐기 | 산안기준 제392조 | "①... 하적단을 로프로 묶거나 망을 치는 등 ... ③ 하적단을 헐어내는 경우에는 위에서부터 순차적으로 층계를 만들면서 헐어내어야 하며, 중간에서 헐어내어서는 아니 된다." |
| 적재 4원칙 | 산안기준 제393조 | "1. 침하 우려가 없는 튼튼한 기반 위에 적재할 것 2. ... 칸막이나 벽에 기대어 적재하지 않도록 할 것 3. 불안정할 정도로 높이 쌓아 올리지 말 것 4. 하중이 한쪽으로 치우치지 않도록 쌓을 것" |

## 7. 기상청 특보 기준
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 강풍주의보 14/20 | KMA | "강풍 [주의보] 육상에서 풍속 50.4km/h(14m/s) 이상 또는 순간풍속 72.0km/h(20m/s) 이상 예상될 때" |
| 강풍경보 21/26 | KMA | "[경보] 육상에서 풍속 75.6km/h(21m/s) 이상 또는 순간풍속 93.6km/h(26m/s) 이상 예상될 때" |
| 호우주의보 60/110 | KMA | "호우 [주의보] 3시간 누적강우량이 60mm 이상 예상되거나 12시간 누적강우량이 110mm 이상 예상될 때" |

## 8. CCTV·개인정보·노사협의
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 공개된 장소 설치 허용 사유 | 개보법 제25조 제1항 | "2. 범죄의 예방 및 수사를 위하여 필요한 경우 3. 시설의 안전 및 관리, 화재 예방을 위하여 정당한 권한을 가진 자가 설치ㆍ운영하는 경우" |
| 안내판 | 같은 조 제4항 | "정보주체가 쉽게 인식할 수 있도록 다음 각 호의 사항이 포함된 안내판을 설치하는 등 필요한 조치를 하여야 한다. 1. 설치 목적 및 장소 2. 촬영 범위 및 시간 3. 관리책임자의 연락처" |
| 다른 곳 비추기·녹음 금지 | 같은 조 제5항 | "설치 목적과 다른 목적으로 ... 임의로 조작하거나 다른 곳을 비춰서는 아니 되며, 녹음기능은 사용할 수 없다." |
| 보관기간 경과 시 파기 | 표준지침 제41조 제1항 | "운영ㆍ관리 방침에 명시한 보관 기간이 경과하거나 ... 불필요하게 되었을 때에는 지체 없이 그 개인영상정보를 파기하여야 한다." |
| 30일 이내 | 표준지침 제41조 제2항 | "고정형영상정보처리기기운영자가 그 사정에 따라 보유 목적의 달성을 위한 최소한의 기간을 산정하기 곤란한 때에는 보관 기간을 개인영상정보 수집 후 30일 이내로 한다." |
| 목적 외 이용·제공 제한 | 표준지침 제40조 | "다음 각 호의 경우를 제외하고는 개인영상정보를 수집 목적 이외로 이용하거나 제3자에게 제공하여서는 아니 된다. 다만 제5호부터 제9호까지의 경우는 공공기관의 경우로 한정한다. 1. 정보주체에게 동의를 얻은 경우 2. 다른 법률에 특별한 규정이 있는 경우 3. 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우 ..." (범죄수사 제7호는 공공기관 한정) |
| 30명 이상 노사협의회 | 근참법 제4조 제1항 | "... 상시(常時) 30명 미만의 근로자를 사용하는 사업이나 사업장은 그러하지 아니하다." |
| 감시 설비 협의 사항 | 근참법 제20조 제1항 제14호 | "14. 사업장 내 근로자 감시 설비의 설치" |

## 9. 보험(상법)
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 사고 통지 | 상법 제657조 | "①... 보험사고의 발생을 안 때에는 지체없이 보험자에게 그 통지를 발송하여야 한다. ②... 통지의무를 해태함으로 인하여 손해가 증가된 때에는 보험자는 그 증가된 손해를 보상할 책임이 없다." |
| 일부보험 비례 | 상법 제674조 | "보험가액의 일부를 보험에 붙인 경우에는 보험자는 보험금액의 보험가액에 대한 비율에 따라 보상할 책임을 진다. 그러나 당사자간에 다른 약정이 있는 때에는 보험자는 보험금액의 한도내에서 그 손해를 보상할 책임을 진다." |
| 손해방지 | 상법 제680조 | "보험계약자와 피보험자는 손해의 방지와 경감을 위하여 노력하여야 한다. 그러나 이를 위하여 필요 또는 유익하였던 비용과 보상액이 보험금액을 초과한 경우라도 보험자가 이를 부담한다." |
| 보험자대위 | 상법 제682조 제1항 | "손해가 제3자의 행위로 인하여 발생한 경우에 보험금을 지급한 보험자는 그 지급한 금액의 한도에서 그 제3자에 대한 보험계약자 또는 피보험자의 권리를 취득한다." |
| 집합보험 교체 | 상법 제687조 | "집합된 물건을 일괄하여 보험의 목적으로 한 때에는 그 목적에 속한 물건이 보험기간중에 수시로 교체된 경우에도 보험사고의 발생 시에 현존한 물건은 보험의 목적에 포함된 것으로 한다." |
| 적하보험 종료·60일, 도난은 (A) | 사이트 기존 문서 | ins-basics(ICC 제8조 종료 사유, 양륙 후 60일), ins-icc("빗물로 인한 젖음, 취급 파손, 도난은 (A)에만 들어갑니다")를 따름 |
| 계산 예시 | 문서 안 예시 | 2억원·3팔레트·6,000만원·보험금액 1억 5,000만원·공제 500만원·창고 한도 3,000만원은 모두 만든 예시 금액(문서에 "예시 금액" 표시). 6,000 × 15,000/20,000 = 4,500; 4,500 − 500 = 4,000; 6,000 − 4,000 = 2,000 |

## 10. TAPA FSR
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| FSR 목적 | TAPA-APAC | "Facility Security Requirements (FSR) Specify the minimum industry requirements for secure warehousing or in-transit storage within a supply chain." / FSR2020 3.1 "represents minimum standards specifically for secure warehousing, or in-transit storage, within a supply chain." |
| TAPA 구성 | FSR2020 2.1 | "TAPA is a unique forum that unites global manufacturers, logistics providers, freight carriers, law enforcement agencies, and other stakeholders" |
| A·B·C 등급 | FSR2020 7장 표 | 각 요구 항목 옆에 "A B C" 열과 적용 표시. A 열 표시가 가장 많음(문서는 "A 등급에 가장 많은 항목이 적용"으로 씀) |
| HVC 6㎥, 사방·천장 | FSR2020 7.4.12~7.4.13 | "If an agreement is not present, then the HVC must be able to store a minimum of 6 cubic meters of product." / "HVC/Area perimeter caged or hard walled on all sides, including top/roof." |
| 10명 기준·열쇠 | FSR2020 7.4.17 부근 | "If access to the HVC is needed by more than 10 persons, then access is to be controlled electronically by card/fob. If access is required by 10 or less persons, heavy-duty lock or padlock system supported by a controlled key issuing system. Keys can be signed out to individuals to cover a shift but must not be transferred without approval and recorded in the key log." |
| 출입 명단 매월 | FSR2020 HVC 항목 | "Approved access list to HVC reviewed monthly and updated in real time when employee leaves employment or no longer requires access." |
| CCTV 8fps·매일 점검 | FSR2020 7.5.19~7.5.20 | "Recording speed for CCTV is set as a minimum for 8 frames per second (fps) per camera." / "Digital recording functionality checked daily on operational days via procedure." |
| CCTV 30일 | FSR2020 7.5.21 | "CCTV recordings stored for a minimum of 30 days where allowed by local law. LSP/Applicant must provide evidence of any local laws that prohibit the use of CCTV and/or limit the video data storage to less than 30 days." |
| 출입 기록 90일 | FSR2020 7.5.17 | "90 days of AACS transaction records available. Records securely stored; backed up." |
| 침입 경보 기록 60일 | FSR2020 7.5.7 | "60 days of IDS alarm records maintained." |
| 방문자 30일 | FSR2020 7.3.5~7.3.6 | "All visitors to the office area registered and log maintained for minimum of 30 days." |
| 기사 신분·차량 | FSR2020 7.3.15~7.3.17 | "All drivers identified using government-issued photo-ID ... and a driver log maintained." / "Vehicle identifiers are logged ... Include at a minimum license plate and vehicle type." |
| 쓰레기·개인 가방 | FSR2020 7.4.21~7.4.24 | "main trash collecting bins/ compacting areas are monitored by CCTV." / "trash bags used inside the warehouse are transparent." / "Written security procedures define how 'personal containers' are controlled inside the warehouse." |
| 지게차 | FSR2020 7.4.26 | "Procedure requiring all forklift and other powered cargo-handling equipment being disabled during non-operational hours." |
| 씰 ISO 17712, 직원만 | FSR2020 7.4.28~7.4.31 | "tamper evident security seals ... certified to ISO 17712 (I, S or H classification)." / "Security seals are only affixed or removed by authorized personnel, i.e. warehouse staff ... Seals must never be affixed or removed by the driver unless on Buyer exemption." |
| 인계 수량 확인 | FSR2020 7.4.32 | "all Buyer assets shipped and received are validated at point of handover by conducting a manual and/or electronic piece count ... If drivers are not present ... alternative count verification such as scans and/or CCTV images" |
| 가짜 픽업 대조 | FSR2020 7.4.33 | "Fraudulent Pick-Ups: Truck driver ID, cargo pickup documentation, and applicable Buyer-specified pre-alert details are validated prior to loading. Procedure must be in place." |
| 24시간 보고·6개월 연락망 | FSR2020 7.6.1~7.6.2 | "Incidents to be reported by the LSP/Applicant to the Buyer within 24 hours. Obvious thefts reported immediately." / "Listing updated every 6 months and includes law enforcement emergency contacts" |
| 위험평가에 가짜 픽업 | FSR2020 7.6.5 | "theft of cargo or information, unauthorized access to facilities or cargo, tampering with/destruction of security systems, fictitious pickups of cargo ..." |
| 3년 유효·연장 없음 | DQS | "The TAPA FSR certificate is valid for three (3) years with no extension permitted"; "a re-certification audit must be performed before the expiration date" |
| 2026판 일정 | DQS | "1 Oct 2026: Start day for FSR/TSR 2026 audit tracking code application"; "The issued FSR/TSR 2023 certificates will remain valid for 3 years" |

## 11. WCO
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 내부자 위협 | WCO | "Addressing insider threats and internal conspirators is a growing concern. The SAFE FoS 2025 expands upon the joint role that Customs and AEOs play in raising awareness and proactively implementing measures to combat this issue" |

## 12. 기존 문서에서 가져와 링크로 보낸 내용(재확인하지 않음)
- 보세구역 장치 중 도난·분실 시 운영인·화물관리인 납세의무(관세법 제19조 제1항 제10호 가목): cu-bonded 7절 문장.
- 적하보험 보험기간(ICC 제8조, 양륙 후 60일): ins-basics. 도난 담보는 (A): ins-icc.
