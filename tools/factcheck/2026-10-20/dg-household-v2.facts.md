# dg-household v2 — 새로 넣은 사실과 출처 (2026-10-20 확인)

원문 파일
- IMDG = IMDG Code 42-24 전문, IMO 결의서 MSC.556(108) https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.556(108).pdf (사본 `vdgh_dl/imdg.pdf`, 텍스트 `vdgh_dl/imdg.txt`, 색인은 `dgh2/dl/imdg_raw.txt`)
- UNDATA = 사이트 `unnumber-data.js` (해양수산부고시 제2026-67호 위험물 선박운송 기준 별표 1, IMDG 42-24, 2835행). 조회 스크립트 `dgh2/scripts/un.py`
- 모든 UN 번호·급·PG·LQ·EQ는 UNDATA와 IMDG 위험물목록 행(아래 "IMDG 행")을 둘 다 대조했다. 두 자료가 다른 값은 없었다.

## 1. UN 번호·급·LQ (UNDATA = IMDG 행 일치)
| UN | 내용(문서에 쓴 값) | IMDG 위험물목록 행(imdg.txt) |
|---|---|---|
| 1219 | 이소프로판올 3, PG Ⅱ, LQ 1L, E2 | 44081 / 색인 "ISOPROPYL ALCOHOL - 3 1219" |
| 1170 | 에탄올 3, PG Ⅱ(LQ 1L)·Ⅲ(5L), SP 144 | 43846, 43857 |
| 1987 | 알코올류 N.O.S. 3, Ⅱ·Ⅲ (SP 144 없음) | UNDATA sp "274" / "223 274" |
| 3065 | 알코올 음료: >70% PG Ⅱ LQ 5L E2 / >24%~≤70% PG Ⅲ LQ 5L E1, SP 144·145·247 | 53492, 53496; UNDATA "144 145 247" |
| 3144 | 니코틴 조제물 액체 6.1, PG Ⅰ LQ 0 / Ⅱ 100mL / Ⅲ 5L(SP 223) | 54255, 54261, 54267 |
| 1654 | 니코틴 6.1 PG Ⅱ LQ 100mL | 46489 |
| 3175 | 인화성 액체 함유 고체 4.1 PG Ⅱ LQ 1kg E2, SP 216 | UNDATA |
| 3378 | 탄산나트륨 과산화수화물 5.1, Ⅱ LQ 1kg / Ⅲ 5kg | UNDATA; 색인 78563 |
| 1789 | 염산 8, Ⅱ·Ⅲ | UNDATA |
| 1830 / 2796 | 황산 51% 초과 / 51% 이하(배터리액) 8 PG Ⅱ | UNDATA |
| 2031 | 질산 8, 65% 이상은 부위험성 5.1 | UNDATA(65% 미만 sub 없음, 65~70%·70% 초과 sub 5.1) |
| 1823/1824/1813/1814 | 수산화나트륨·수산화칼륨 고체·용액 8 | UNDATA |
| 2672 | 암모니아 수용액 10% 초과 35% 이하, 8 PG Ⅲ, 해양오염물질 | IMDG 54089-54092 "with more than 10% but not more than 35%"; UNDATA mp=1 |
| 1903 | 살균제(액체, 부식성) 8, Ⅰ LQ 0 / Ⅱ 1L / Ⅲ 5L | UNDATA |
| 3142 | 소독제(액체, 독성) 6.1, Ⅰ 0 / Ⅱ 100mL / Ⅲ 5L | UNDATA |
| 2984 / 2014 | 과산화수소 8~20% 5.1 / 20~60% 5.1+8 | 52836 / 48374 |
| 1263 | 도료 3, Ⅰ 500mL / Ⅱ 5L E2 / Ⅲ 5L E1 | UNDATA |
| 1993 | 인화성 액체 N.O.S. Ⅰ LQ 0 / Ⅱ 1L / Ⅲ 5L | 48282, 48286 |
| 1593 | 디클로로메탄 6.1 PG Ⅲ LQ 5L | UNDATA; 색인 75119 |
| 2052 | 디펜텐 3 PG Ⅲ LQ 5L, 해양오염물질; 색인 "Limonene, see P 3 2052" | UNDATA mp=1; 색인 76706 |
| 2037 / 1950 | LQ "특별규정 277 참조"(1,000mL) | UNDATA |
| 3150 / 1057 | LQ 0 | UNDATA |
| 3077 / 3082 | 9 PG Ⅲ, SP 274·335·375(·966·967·969) | 53586; UNDATA |
| 3506 | 제품 속 수은 8(6.1), SP 366 | 57569 |
| 2807 | 자성물질 9, SP 960 | 52060 "Not subject to the provisions of this Code" |
| 1361 | 동식물성 탄소 4.2, Ⅱ·Ⅲ, LQ 0, SP 978(223 없음) | 44884, 44890 |
| 1362 | 활성탄 4.2 Ⅲ, SP 979 | UNDATA |
| 2881 | 금속 촉매(건조) 4.2 Ⅰ~Ⅲ LQ 0 | 52428-52434 |
| 1378 | 금속 촉매(젖은 것, 액체가 보이게 남음) 4.2 Ⅱ LQ 0 | 44984 |
| 2067 / 2071 | 질산암모늄계 비료 5.1 (SP 306·307) / 9 (SP 193) | 48728 / 48737 |
| 1454 | 질산칼슘 5.1 Ⅲ, SP 208 | 색인; 41711 |
| 1267/1203/1202/1223 | 원유·휘발유·경유·등유 3 | UNDATA; 44000, 43996 |
| 1268 | 석유증류물 N.O.S. 3 Ⅰ~Ⅲ | 44347 |
| 1035/1961/1971/1972/1075 | 에탄·냉동액화 에탄·압축 천연가스·LNG·LPG 2.1 LQ 0 | 48112, 48147, 48153; 색인 75636-7, 77278, 77280 |
| 1415 | 리튬 4.3 PG Ⅰ LQ 0 | 45218 |
| 2680 / 2679 | 수산화리튬 / 용액 8 | 51176 / 51169 |
| 3480/3481/3090/3091 | 리튬배터리 9 LQ 0 | UNDATA |

## 2. 특별규정·조문 원문 (IMDG)
- 1.1.1.9 램프(imdg.txt 900-925): "The following lamps are not subject to this Code provided that they do not contain radioactive material and do not contain mercury in quantities above those specified in special provision 366 … .1 lamps that are collected directly from individuals and households … .2 lamps each containing not more than 1 g of dangerous goods and packaged so that there is not more than 30 g of dangerous goods per package, provided that: (i) … certified quality management system … (ii) … capable of passing a 1.2 m drop test. .3 used, damaged or defective lamps each containing not more than 1 g … not more than 30 g … from a collection or recycling facility … .4 lamps containing only gases of class 2.2 … packaged so that the projectile effects of any rupture of the bulb will be contained within the package."
- SP 366(59509): "Manufactured instruments and articles containing not more than 1 kg of mercury or gallium are not subject to the provisions of this Code."
- SP 144(58186): "An aqueous solution containing not more than 24% alcohol by volume is not subject to the provisions of this Code."
- SP 145(58188): "Alcoholic beverages of packing group III, when transported in receptacles of 250 L or less, are not subject to the provisions of this Code."
- SP 216: "… Sealed packets and articles containing less than 10 mL of a packing group II or III flammable liquid absorbed into a solid material are not subject to the provisions of this Code provided there is no free liquid in the packet or article."
- SP 223: "… when tested, it does not meet the established defining criteria … it is not subject to the provisions of this Code except in the case of a marine pollutant where 2.10.3 applies."
- SP 375(59680): "… net quantity per single or inner packaging of 5 L or less for liquids or … 5 kg or less for solids, are not subject to any other provisions of the present Code, provided the packagings meet the general provisions of 4.1.1.1, 4.1.1.2 and 4.1.1.4 to 4.1.1.8."
- SP 960(60426): "Not subject to the provisions of this Code but may be subject to provisions governing the transport of dangerous goods by other modes."
- SP 978(60576-): ".1 … carbon of animal or vegetable origin means carbon, generated in a production or manufacturing process, not formed in a geological process and not obtained from mining … .2 The UN N.4 test … shall not be used to exempt carbon of animal or vegetable origin (UN 1361) … .3 Without testing, the material shall be assigned to at least packing group III. .4 … weathering … for a minimum period of 14 days before being packaged …"
- SP 979: "With the exception of the documentation requirements in 5.4.4.2, the provisions of this Code do not apply to this substance when: .1 it is accompanied by a certificate from the shipper stating that the substance is steam activated carbon; or .2 it is chemically activated carbon … laboratory … negative test result for self-heating …"
- SP 193: "This entry may only be used for ammonium nitrate based compound fertilizers. They shall be classified in accordance with the procedure as set out in the Manual of Tests and Criteria, part III, section 39." / SP 307 같은 취지(UN 2067). 2.5.2 주 2(imdg_raw 4537): "solid ammonium nitrate based fertilizers shall be classified in accordance with the procedure as set out in the Manual of Tests and Criteria, part III, section 39."
- SP 208(imdg_raw 69535): "The commercial grade of calcium nitrate fertilizer, when consisting mainly of a double salt (calcium nitrate and ammonium nitrate) containing not more than 10% ammonium nitrate and at least 12% water of crystallization, is not subject to the provisions of this Code."
- SP 290은 방사성 물질 규정(램프와 무관). 브리프의 "SP 290?" 추정은 틀림 → 램프는 1.1.1.9.

## 3. IMDG 색인(imdg_raw.txt)
- 75084/75087: "1,4-Dichlorobenzene, see P 9 3082", "para-Dichlorobenzene, see P 9 3082" → 해양오염물질(P), Class 9 환경유해물질 항목 안내. 문서에는 "해양오염물질로 표시된 물질 → 고체 블록은 UN 3077에 해당할 수 있음"으로 씀(색인은 3082로 안내하나 고체이므로 3077/3082는 물리 상태에 따름 — 단정 피함).
- 77265/77266/77769/74666: Naphtha, petroleum / Naphtha, solvent / Petroleum naphtha / Crude naphtha → 3 1268.
- 74281/74282: Charcoal, activated → 4.2 1362; non-activated → 4.2 1361. 석탄(COAL) 품명 없음(COAL GAS·COAL TAR만).
- 탄산나트륨·탄산수소나트륨·요소·염화칼륨·탄산리튬: 색인·위험물목록에 품명 없음(grep 결과 없음; 있는 것은 SODIUM CARBONATE PEROXYHYDRATE 3378, Caustic soda 1823/1824, SODA LIME 1907).
- UN 2553·UN 1256: IMDG 42-24 목록과 UNDATA에 없음.

## 4. IMSBC Code
- IMO 결의서 MSC.268(85) https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.268(85).pdf (`dgh2/dl/msc268.txt` 5602-5615): 개별 명세 "COAL … Coal (bituminous and anthracite) is a natural, solid, combustible material … CLASS MHB GROUP B (and A) … may heat spontaneously". 이후 개정판이 있으므로 문서에는 "COAL 명세(MHB)"까지만 씀.

## 5. 항공
- 「항공위험물운송기술기준」(국토교통부고시 제2023-52호) 제26조제4호라목(law.go.kr): 2.2군 가스 중 "파열이 되어도 외부에 영향을 미치지 않도록 안전하게 생산지 포장이 완료된 백열등"은 이 기술기준을 적용하지 아니함. 같은 호 가목: 탄산음료를 포함하는 식료품.
- IATA 특별규정 A9(업계 해설, DGR 원문 미확인): "A9 Alcoholic beverages containing 70% or less alcohol by volume, when packed in receptacles of 5 L or less, are not subject to these Regulations when carried as cargo." — https://www.dgm-us.com/iata-dgr-special-provision-a9-explained/ . 미국 PHMSA 해석서 10-0014도 ICAO TI Part 3 Ch 3 SP A9를 같은 내용으로 인용한다고 검색 결과에 나오나 PDF는 403으로 직접 못 봄. 문서에 "DGR 원문 미확인" 표시.
- IATA 램프 예외: 검색 결과(업계 블로그·ICAO 작업문서)상 DGR 1.2.x에 램프 예외가 있다고 나오나 원문 미확인 → 문서에는 "항공에도 램프 예외가 있으나 원문을 보지 못했으므로 항공사 확인"으로만 씀.

## 6. 국내 (law.go.kr 원문, `hh/law/`)
- 위험물안전관리법 시행령 별표 1(시행 2026. 7. 1. 판, 파일 기준 2026-06-23 공포): 제3류 6. "알칼리금속(칼륨 및 나트륨을 제외한다) 및 알칼리토금속" 50킬로그램 → 금속 리튬. 제1류 6. 질산염류 300킬로그램. 제4류 알코올류 400리터. 비고 제11호 "인화성액체라 함은 액체(제3석유류, 제4석유류 및 동식물유류의 경우 1기압과 섭씨 20도에서 액체인 것만 해당한다)". 비고 제14호 알코올류 정의와 60중량퍼센트 미만 수용액 제외.
- 안전확인대상생활화학제품 지정 및 안전·표시기준(기후에너지환경부고시 제2026-215호): 별표 1 — 제1부 세정제·제거제, 제2부 세탁세제·표백제·섬유유연제, 제3부 광택코팅제 등, 제5부 방향제·탈취제, 제6부 물체 염색제·도색제, 제7부 자동차용 워셔액·부동액·세정제·제거제·광택코팅제·특수목적코팅제, 제12부 7. 승인유예대상 살균제. 별표 2 세정제 용도표 "카페트용, 세탁조용, 배수관용 … │특정목적용", "욕실용 … │일반용". 별표 2 세정제 함량제한 "염산 또는 황산 … 비분사형 일반용 HCl로써 10%(w/w) 미만", "수산화나트륨 또는 수산화칼륨 … NaOH로써 5%(w/w) 미만". 제거제 용도 "… 접착제제거용 …". 제형 목록에 "티슈형, 캡슐형" 포함.

## 7. 캡슐세제 SDS 예시
- 세탁 캡슐세제 SDS(Revision date 17-Dec-2024, Rev 1.02) https://images.thdstatic.com/catalog/pdfImages/62/6215f3b8-4d91-43d5-8f10-e347ac806bd9.pdf 14항: "DOT Not regulated / IMDG Not regulated / IATA Not regulated". 문서에는 제품·회사 이름 없이 "확인한 세탁 캡슐세제 SDS 예시"로만 씀.

## 확인하지 못해 쓰지 않은 것
- IATA DGR의 자성물질 자기장 수치(0.418 A/m 등)와 램프 예외 조문 번호, 특별규정 A197(환경유해물질 5L/5kg) — 원문 미확인이라 수치를 넣지 않음(자석은 kr-mismatch의 국내 기술기준 설명으로 대신).
- 질산암모늄계 비료가 39절 시험에서 "비해당"이 되는 조건 — UN 시험기준 원문을 못 봐 "시험 절차로 분류"까지만 씀.
- 전자담배 니코틴 농도별 PG 경계 — 제품별 LD50 계산이 필요해 수치 없이 "독성 기준에 따라"로 씀.
- 소변기 탈취제·유막 제거제가 고시 별표 1의 어느 품목인지 — 원문에 품목명이 없어 "용도별로 확인"으로 씀.
