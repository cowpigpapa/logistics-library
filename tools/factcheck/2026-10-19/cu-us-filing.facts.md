# cu-us-filing FACTS (2026-10-19 확인)

Sources fetched 2026-10-19 with curl/WebFetch (no browser). Local copies: scratchpad/usf/ (CFR text from eCFR versioner API, date=2026-10-15; FR text; CBSA pages as text), scratchpad/usf_dl/ (PDFs, raw HTML).

Versions:
- eCFR Title 19: "up_to_date_as_of 2026-10-15", latest amended 2026-08-26 (eCFR titles API). Sections pulled at 2026-10-15 point-in-time.
- 19 CFR 122.48b last amended by CBP Dec. 25-08, 90 FR 52843 (regulatory text page), rule starts 90 FR 52796, effective 2025-11-21.
- Canada Reporting of Imported Goods Regulations SOR/86-873: "Regulations are current to 2026-09-30 and last amended on 2026-06-22."
- CBSA D3-5-1: Ottawa, January 20, 2023. D3-3-1: Ottawa, December 14, 2021 ("October 21, 2024: Page content under review" banner for CARM).
- CBSA AMPS pages: C378 date modified 2025-09-22; C379/C381/C382 date modified 2024-11-11.
- CBP ISF FAQ: "Last Updated: July 9, 2010"; states responses are "for informational purposes only and are non-binding".

## 1. Overview / legal bases

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 해상 적하목록은 적재항 적재 24시간 전, AMS로 | 19 CFR 4.7(b)(2) https://www.ecfr.gov/current/title-19/section-4.7 | "CBP must receive from the incoming carrier ... the CBP-approved electronic equivalent of the vessel's Cargo Declaration (CBP Form 1302), 24 hours before the cargo is laden aboard the vessel at the foreign port ... transmitted through the CBP Automated Manifest System (AMS)" |
| NVOCC 직접 전송 조건(FMC 면허·등록 + 113.64 bond), 아니면 선사에 모두 제공 | 4.7(b)(3)(i) | "the NVOCC, if licensed by or registered with the Federal Maritime Commission and in possession of an International Carrier Bond containing the provisions of § 113.64 ... may electronically transmit ... In the alternative, the NVOCC must fully disclose and present the required cargo declaration information for the related cargo to the vessel carrier" |
| NVOCC 정의 | 4.7(b)(3)(ii) | "a common carrier that does not operate the vessels by which the ocean transportation is provided, and is a shipper in its relationship with an ocean common carrier" |
| 다른 당사자에게서 받은 정보: 합리적으로 믿은 내용으로 전송 허용 | 4.7(b)(3)(iii); 149.2(c); 122.48a(c)(5) | "Where the presenting party is not reasonably able to verify such information, CBP will permit the party to electronically present the information on the basis of what the party reasonably believes to be true." |
| 벌크·면제 브레이크벌크는 도착 24시간 전 | 4.7(b)(4) | "CBP must receive the electronic cargo declaration covering the bulk or break bulk cargo they are transporting 24 hours prior to the vessel's arrival in the United States" |
| 적하목록에 모든 외국 화물, FROB 별도 | 4.7a(c)(1) | "must list all the inward foreign cargo on board the vessel regardless of the U.S. port of discharge, and must separately list any other foreign cargo remaining on board (“FROB”)" |
| B/L 번호: 최대 16자, SCAC 4자 + 최대 12자, 3년 재사용 금지 | 4.7a(c)(2)(iii) | "unique identifier consisting of up to 16 characters ... first four characters consisting of the carrier or issuer's four digit Standard Carrier Alpha Code (SCAC) ... second element may be up to 12 characters ... shall not be used ... for another bill of lading for a period of 3 years after issuance" |
| 수량은 가장 작은 외포장 단위(200 cartons 예) | 4.7a(c)(4)(v) | "containers and pallets are not acceptable manifested quantities; for example, a container containing 10 pallets with 200 cartons should be manifested as 200 cartons" |
| 품명/HS 6단위, FAK·general cargo·STC 불가 | 4.7a(c)(4)(vii) | "A precise description (or the Harmonized Tariff Schedule (HTS) numbers to the 6-digit level ... if that information is received from the shipper) ... Generic descriptions, specifically those such as “FAK” ..., “general cargo”, and “STC” ... are not acceptable" |
| 송하인 규칙(House 단계는 외국 판매자 등, 포워더·NVOCC 불가) | 4.7a(c)(4)(viii) | "for each house bill in a consolidated shipment, the identity of the foreign vendor, supplier, manufacturer, or other similar party is acceptable (and the address ... must be a foreign address); by contrast, the identity of the carrier, NVOCC, freight forwarder or consolidator is not acceptable" |
| 수하인 규칙, to order → named party + Notify | 4.7a(c)(4)(ix) | "the consignee is the party to whom the cargo will be delivered in the United States ... in the case of cargo shipped “to order of [a named party],” the carrier must report this named “to order” party as the consignee ... “Notify Party” field" |
| 기타 항목(마지막 외국항, 첫 인수 외국항, 선명·IMO, 컨테이너·씰, 위험물 코드, 출항일시) | 4.7a(c)(4)(i)–(xvi) | list in section |
| Stow plan: 마지막 외국항 출항 후 48시간 | 4.7c(a) | "CBP must receive the stow plan no later than 48 hours after the vessel departs from the last foreign port." |
| CSM: 입력 후 24시간 | 4.7d(c) | "the carrier must transmit the CSM to CBP no later than 24 hours after the CSM is entered into the equipment tracking system." |
| 적하목록 미수신 시 양하 허가 지연 | 4.30(n) | "CBP may delay issuance of the permit to unlade the entire vessel until all required information is received. CBP may also decline to issue a permit to unlade the specific cargo..." |

## 2. ISF (19 CFR Part 149) https://www.ecfr.gov/current/title-19/part-149

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| ISF 수입자 정의(소유자·구매자·수하인·대리인; FROB은 운송인/NVOCC; IE·T&E는 보세 서류 제출자) | 149.1(a) | "For shipments other than foreign cargo remaining on board (FROB), the ISF Importer will be the goods' owner, purchaser, consignee, or agent such as a licensed customs broker. For immediate exportation (IE) and transportation and exportation (T&E) in-bond shipments ... may also be the party filing the IE, T&E, or FTZ documentation. For FROB cargo, the ISF Importer will be the carrier or the non-vessel operating common carrier." (Note: CBP FAQ says only vessel operator responsible for ISF-5 FROB at the time; doc says "FROB은 운송인") |
| 영어로, CBP 승인 전자 체계 | 149.2(a) | "must submit in English the Importer Security Filing elements ... via a CBP-approved electronic interchange system" |
| 요소 1~4, 5~8: 적재 24시간 전 | 149.2(b)(1)(2) | "no later than 24 hours before the cargo is laden aboard the vessel at the foreign port" |
| 요소 9·10: 되도록 빨리, 늦어도 도착 24시간 전 | 149.2(b)(3) | "as early as possible, in no event later than 24 hours prior to arrival in a United States port (or upon lading at a foreign port that is less than a 24 hour voyage...)" |
| ISF-5 FROB: 적재 전; IE·T&E: 적재 24시간 전 | 149.2(b)(4)(5) | "(4) ... for FROB, prior to lading ... (5) ... IE or T&E, no later than 24 hours before cargo is laden" |
| 수정 의무(미국 항구 경계 진입 전까지) | 149.2(d) | "must update the filing if, after the filing is submitted and before the goods enter the limits of a port in the United States, any of the information submitted changes or more accurate information becomes available." |
| 취소 의무 | 149.2(e) | "must withdraw the Importer Security Filing and transmit to CBP the reason for such withdrawal." |
| 범위 신고 4요소, 도착 24시간 전까지 갱신 | 149.2(f) | "For each of the four data elements required under paragraph (b)(2) ... initial response or responses based on the best available data ... update ... in no event less than 24 hours prior to arrival" |
| 준수일 2010. 1. 26. | 149.2(g)(1) | "ISF Importers must comply with the requirements of this section on and after January 26, 2010." |
| 규칙 발효 2009. 1. 26. | CBP ISF page https://www.cbp.gov/border-security/ports-entry/cargo-security/importer-security-filing-102 (Last Modified Jul 28, 2023) | page states the rule took effect January 26, 2009 (WebFetch summary) |
| HS 6단위, 가장 낮은 B/L 단계, 제조자·원산지·HS 줄 단위 연결 | 149.3(a) | "for each good listed at the six-digit HTSUS number at the lowest bill of lading level (i.e., at the house bill of lading level, if applicable). The manufacturer (or supplier), country of origin, and commodity HTSUS number must be linked to one another at the line item level." |
| 요소 1~10 정의 | 149.3(a)(1)–(10) | Seller "last known entity by whom the goods are sold"; Manufacturer "entity that last manufactures, assembles, produces, or grows ... or ... party supplying the finished goods ... In the alternative ... (MID)"; Ship to "first deliver-to party scheduled to physically receive the goods after ... released from customs custody"; HTSUS "must be provided to the six-digit level ... may be provided up to the 10-digit level"; Stuffing location "physical location(s) where the goods were stuffed"; Consolidator "party who stuffed the container or arranged for the stuffing" |
| 상업 식별번호로 대체 가능 | 149.3(a) 각 요소 | "A widely recognized commercially accepted identification number for this party may be provided in lieu of the name and address." |
| ISF-5 요소 5개 | 149.3(b) | Booking party; Foreign port of unlading; Place of delivery; Ship to party; Commodity HTSUS number |
| 벌크 면제, 브레이크벌크 시간 면제 | 149.4 | see text |
| 통합 전송은 수입자 본인 또는 면허 관세사 | 149.5(a) | "the party making the transmission must be an importer acting on its own behalf or a licensed customs broker." |
| 보증, 대리인 보증 가능 | 149.5(b) | "... or an importer security filing bond as provided in Appendix D to part 113 ... If an ISF Importer does not have a required bond, the agent ... may post the agent's bond." |
| 영문 위임장, 철회 후 5년 보관 | 149.5(c) | "Authorized agents must retain powers of attorney in English until revoked. Revoked powers of attorney and letters of revocation must be retained for five years after the date of revocation." |

## 3. CBP ISF FAQ (2010-07-09, non-binding) https://www.cbp.gov/sites/default/files/documents/10_2faq_0.pdf

| 사실 | 근거 문장 |
|---|---|
| 대리인 미국 소재 불필요 | Agents Q4: "Does the ISF Filer need to be located in the U.S.? No." |
| 관세사 아니어도, 외국 포워더 가능(통합 전송 제외) | Agents Q5: "A filing agent does not have to be a customs broker except for the case of a “unified filing.” A foreign freight forwarder can also be a filing agent." |
| B/L 번호 필수, AMS 가장 낮은 단계 | Bills of Lading Q1: "The ISF needs to be submitted at the lowest bill of lading level (i.e., house bill or regular bill) that is transmitted into the Automated Manifest System (AMS). The bill of lading number is the only common “link”..." |
| 비자동 NVOCC면 선사가 보낸 regular bill 번호 | BOL Q3: "If the carrier creates and transmits a regular bill of lading number on behalf of a non-automated NVOCC or freight forwarder, the ISF filer must submit the regular bill of lading number that was transmitted into AMS" |
| Master B/L 번호는 요구하지 않음 | "CBP is requiring only the number for the bill of lading at the lowest level ... and not the master bill of lading number" |
| "Accepted, no Bill on File", 수정 전송 반복 금지 | BOL Q5: "Please do not send in a replace (amended) ISF to in order to try and force a match message as these types of actions could potentially impact your compliance profile." |
| FR/FT/FX/CT 코드 | Amendments C Q2: "CT = Compliant Transaction ... FR = Flexible Range ... FT = Flexible Timing ... FX = Flexible Range and Flexible Timing" |
| 운송 중 매각 시 갱신 | Amendments A Q5: "The ISF will need to be updated if the shipment is sold in transit. At a minimum, the ISF Importer must notify CBP that the goods have been sold, and the party must update the Buyer (Owner) field" |
| ISF-5 → ISF-10 변경 | Amendments D Q1: "a new ISF-10 must be created and ISF Submission Type “3” must be selected" |
| 제조자: 실제 제조자 선호 | Data Elements D Q2: "CBP would prefer that the identity of the actual manufacturer be provided where that entity is known." |
| 옷걸이 HS 별도 | F Q4: "The ISF needs to include the 6-digit HTS number for the hangers if the ISF importer is aware of the existence of the hangers." |
| 여러 적입 장소 모두 | G Q2: "all of the stuffing locations for the goods listed on the bill of lading must be provided." |
| 적입 장소 = 시설 운영자 이름 + 주소 | G Q5: "Provide the name of the operator of the facility and the address of the facility where the goods were stuffed" |
| 셀러 적입 FCL의 적입자 | H Q3: "If the manufacturer is the party that stuffed the container or arranged for the container to be stuffed, then the manufacturer is the consolidator (stuffer)." |
| 여러 콘솔사 모두 | H Q4: "if multiple “Consolidators” are involved (e.g., some co-load situations), multiple “Consolidators” need to be provided" |
| 컨테이너에 넣은 벌크는 벌크 아님 | Exemptions B Q2: "Once cargo is placed in a container it can no longer be considered bulk cargo." |
| 집행: 경고·반출지연·NII·보류·LD·DNL | Enforcement Measures: "non-compliant ISF Importers should expect to receive a warning and/or will experience delays in the release of their cargo ... non intrusive inspection (NII) exam ... increases in the amount of manifest holds and examinations ... liquidated damages and do not load (DNL) holds" |
| ISF DNL은 AMS로 선사에 통지 | Enforcement A Q1: "CBP will provide a message to the carrier via vessel AMS that the DNL was specifically due to the ISF." |
| LD: 늦은 ISF당·부정확 ISF당·첫 부정확 수정당 $5,000 | Enforcement B Q1: "$5,000 per late ISF, $5,000 per inaccurate ISF, and $5,000 for the first inaccurate ISF update." |

## 4. Liquidated damages and guidelines

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| ISF 위반 $5,000(수입 보증) | 19 CFR 113.62(j) https://www.ecfr.gov/current/title-19/section-113.62 | "the principal and surety (jointly and severally) agree to pay liquidated damages of $5,000 for each violation." |
| ACAS(수입 보증 신고인) $5,000 | 113.62(l) | "agree to pay liquidated damages of $5,000 for each violation." |
| 운송인 사전정보 $5,000, 입항당 최대 $100,000 | 113.64(d) https://www.ecfr.gov/current/title-19/section-113.64 | "liquidated damages of $5,000 for each violation, to a maximum of $100,000 per conveyance arrival." |
| NVOCC $5,000, 최대 $100,000 | 113.64(e) | same wording |
| Stow plan $50,000/입항 | 113.64(g) | "liquidated damages of $50,000 for each vessel arrival." |
| CSM $5,000, 최대 $100,000 | 113.64(h) | "liquidated damages of $5,000 for each violation, to a maximum of $100,000 per vessel arrival." |
| ACAS(국제운송인 보증) $5,000, 최대 $100,000 | 113.64(i) | "liquidated damages of $5,000 for each violation, to a maximum of $100,000 per conveyance arrival." |
| 선장 민사 벌금 19 U.S.C. 1436 | 4.7(e) | "may be liable for civil penalties as provided under 19 U.S.C. 1436, in addition to damages under the international carrier bond of $5,000 for each violation discovered." |
| 위반 유형(미제출·지연·부정확, 부정확 수정, 취소 누락) | CBP Dec. 09-26 F항 https://www.cbp.gov/sites/default/files/documents/CBPDec09-26.pdf | "It is a violation to fail to submit an ISF when one is required, to submit a late ISF, or to submit an inaccurate ISF. ... to submit an inaccurate update ... or to fail to withdraw an ISF" |
| 보증 없으면 미제출 LD 불가 | G항 | "Liquidated damages cannot be assessed for the failure to file an ISF if no bond is in place." |
| 부정확 판단 기준 전송 | G항 | "CBP will consider the transmission closest in time to, but prior to, 24 hours prior to lading, prior to lading, or 24 hours prior to arrival, whichever is applicable." |
| 취소 감경: 첫 위반 $1,000~2,000, 이후 $2,500 이상, 집행 목적 훼손 시 불가 | I항 | "may be cancelled upon payment of an amount between $1,000 and $2,000 ... if CBP determines that law enforcement goals were not compromised"; "not less than $2,500"; "No relief will be granted if CBP determines that law enforcement goals were compromised" |
| 감경·가중 사유 | J항 | "Small number of violations compared to the number of shipments"; "Demonstrated remedial action"; "vessel diversion due to factors outside of the ISF Importer's control (e.g., due to weather)"; "the presenting party acquired the information from another party ... extraordinary mitigating factor that may warrant cancellation of a claim without payment"; aggravating "Lack of cooperation", "Evidence of smuggling", "Multiple errors on the ISF", "rising error rate" |
| 미제출 화물 반출 보류, 양하 허가 제한, 무단 양하 압수 | K항 | "CBP shall withhold the release or transfer of the cargo until CBP receives the required ISF information ... CBP also reserves the right to limit the permit to unlade ... if such cargo is unladen without permission, it may be subject to seizure." |
| 2013. 7. 9. 전면 LD 집행 개시(배경, 본문에 날짜 미기재) | CSMS# 13-000298 https://content.govdelivery.com/accounts/USDHSCBP/bulletins/7e5be4 | "On July 9, 2013 CBP will begin full enforcement of ISF" |
| 행정명령 14411(2026. 6. 3.): 감경 기준 개정, LD 최저 하한, 상습 위반자 감경 폐지 | https://www.whitehouse.gov/presidential-actions/2026/06/strengthening-customs-enforcement/ (WebFetch) Sec. 4(c) | "establishing a minimum liquidated damages floor"; "eliminating mitigation for repeat offenders" (also "minimum penalty floor of not less than 50 percent of the assessed penalty") |
| 개정 감경 지침 공표 여부 미확인 | WebSearch 2026-10-19; Federal Register API search | No CBP/FR document found implementing new ISF mitigation guidelines |

## 5. Manifest data quality (CBP)

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 2025. 9. 27. 자동 반려, 오류 코드 548·549·550, 6H Do Not Load 코드 | Trade User Information Notice CBP-190 (Last updated 2025-09-10) https://www.cbp.gov/sites/default/files/2025-09/trade_information_notice_cbp-190_508c.pdf | "Beginning September 27, 2025, when ACE Manifest filings are submitted with insufficient cargo descriptions, consignee information, or shipper information, ACE will automatically reject ... 548 Invalid cargo description 549 Invalid shipper data 550 Invalid consignee data"; "6H Do Not Load - Invalid cargo description, shipper, or consignee hold placed" |
| NVOCC 직접 전송도 같은 기준 | CBP Cargo Vessel Manifest flyer (Pub #3712-0524) https://www.cbp.gov/sites/default/files/2024-07/cargo-vessel-flyer-508c-05.16_0.pdf | "Non-Vessel Operating Common Carriers (NVOCCs) who self-file House Bills are held to the same standard as Major Vessel Operating (MVO) carriers and are expected to screen data for compliance." |
| equipment, parts도 일반 표현 / various·unknown 불가 / 관계마다 별도 B/L / 3PL 불가 | same flyer | "generic terms such as "FAK", "general cargo", "STC", "equipment", and "parts""; "identifies the shipper as "various", or the consignee as "unknown""; "Carriers must issue a separate bill of lading for each shipper-consignee relationship."; "3rd Party Logistics providers (3PLs) are not acceptable." |
| 위반 결과(LD, DNL 보류, 검사, 압수) | same flyer | "Manifest violations ... may result in enforcement action, including penalties and liquidated damages, Do Not Load Holds, holds for examination, or seizure." |

## 6. Air (122.48a, 122.48b)

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 근거리(북미·중미·적도 이북 남미·카리브·버뮤다) 이륙 때까지 | 122.48a(b)(1) https://www.ecfr.gov/current/title-19/section-122.48a | "no later than the time of the departure of the aircraft for the United States (the trigger time is no later than the time that wheels are up...)" |
| 그 밖은 도착 4시간 전 | 122.48a(b)(2) | "no later than 4 hours prior to the arrival of the aircraft in the United States." |
| House 자료 선택 전송자(ABI, CFS, 특송시설, 주선 항공사) | 122.48a(c)(1) | list (i)–(iv) |
| 미참여 시 화물을 넘기는 자가 항공사에 전부 제공 | 122.48a(c)(3) | "the party that arranges for and/or delivers the cargo shipment to the incoming carrier must fully disclose and present to the carrier the cargo information" |
| 한 Master 아래 House는 같은 자가 | 122.48a(d)(2) | "Information for all house air waybills under a single master air waybill consolidation must be presented electronically to CBP by the same party." |
| 수량 예(팔레트 2개×50 = 100), House 송하인 포워더 불가 | 122.48a(d)(2)(iv),(vi) | "2 pallets containing 50 pieces each would be considered as 100, not 2"; "the identity of a carrier, freight forwarder or consolidator is not acceptable" |
| ACAS 기한: 되도록 빨리, 늦어도 탑재 전 | 122.48b(b)(1) https://www.ecfr.gov/current/title-19/section-122.48b | "The ACAS data must be submitted as early as practicable, but no later than prior to loading of the cargo onto the aircraft." |
| FIAC 자발적 ACAS 신고인 | 122.48b(c)(2)(ii) | "A FIAC may volunteer to be an ACAS filer and accept responsibility for the submission of accurate and timely ACAS filings..." |
| 신고인 요건(보증, 송신 코드, 24/7 연락처) | 122.48b(c)(3) | "(ii) Possess the appropriate bond ... (iii) Report all of the originator codes ... (iv) Provide 24 hours/7 days a week contact information" |
| 필수 항목 10개 | 122.48b(d)(1) | (i)–(x) incl. consignee email, phone, shipment packing location and/or scheduled pickup location, ship to party |
| 2025 IFR로 추가된 필수 항목 | 90 FR 52796, at 52806 https://www.govinfo.gov/content/pkg/FR-2025-11-21/html/2025-20606.htm | "The additions to the list of mandatory ACAS data elements include consignee email address, consignee phone number, shipment packing location and/or scheduled shipment pickup location, and ship to party." |
| IFR 시행일 2025. 11. 21. | FR API / DATES | "Effective Date: This interim final rule is effective as of November 21, 2025." |
| 12개월 단계적 집행, 고의·악질 위반은 항상 집행 | 90 FR 52796, Sec. IV.I | "CBP will show restraint in enforcing the data transmission requirements introduced by this IFR for 12 months after the effective date ... willful and egregious violators will be subject to enforcement actions at all times." |
| 단계적 집행 2027. 5. 1.까지 연장 | CSMS #69486540 (08/10/2026) https://content.govdelivery.com/accounts/USDHSCBP/bulletins/42447cc | "Effective immediately, the Enhanced ACAS IFR's phased enforcement period is extended from November 21, 2026 to May 1, 2027." |
| Referral 미해결 시 탑재 금지 | 122.48b(e)(3) | "The inbound air carrier may not transport cargo on an aircraft destined to the United States until any and all referrals ... have been resolved." |
| DNL 조건과 탑재 금지 | 122.48b(f)(1),(3) | "A Do-Not-Load (DNL) instruction will be issued if it is determined that the cargo may contain a potential bomb, improvised explosive device, or other material that may pose an immediate, lethal threat"; "The inbound air carrier may not transport cargo with a Do-Not-Load (DNL) instruction." |

## 7. Canada

| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 포워더 정의 | Reporting of Imported Goods Regulations s. 2 https://laws-lois.justice.gc.ca/eng/regulations/SOR-86-873/FullText.html | "freight forwarder means a person who, on behalf of one or more owners, importers, shippers or consignees of goods, causes specified goods to be transported by one or more carriers" |
| 포워더 책임 화물 = 포워더 발행 B/L 화물 | s. 2.1(b) | "a shipment for which a freight forwarder is responsible consists of a specified good or collection of specified goods that is listed in a single bill of lading, waybill or similar document that is issued by the freight forwarder" |
| 운송인 선박 자료 96시간(컨테이너)/24시간 | s. 14(1) | "(a) at least 96 hours before the vessel is scheduled to arrive ... if there is a cargo container on board the vessel; and (b) at least 24 hours before ... in any other case." |
| 운송인 화물 자료: 컨테이너 적재 24시간 전, 벌크·브레이크벌크 도착 24시간 전 | s. 15(1) | "(a) at least 24 hours before the shipment is loaded onto the vessel if all or part of the shipment is in a cargo container ...; (b) at least 24 hours before the vessel is scheduled to arrive ... if the shipment consists of either bulk goods or break-bulk goods" |
| 미국·푸에르토리코 적재: 도착 24시간 전(빈 컨테이너 4시간) | s. 15(2) | "(a) at least four hours before ... if the shipment consists of an empty cargo container that is not for sale; and (b) at least 24 hours before ... in any other case." |
| 포워더 해상: 컨테이너 적재 24시간 전, 그 외 도착 24시간 전, 미국 적재 도착 24시간 전 | s. 15.3 | "(1)(a) at least 24 hours before the shipment is loaded onto the vessel if all or part of the shipment is in a cargo container; and (b) at least 24 hours before the vessel is scheduled to arrive at its port of arrival in any other case. (2) ... United States or Puerto Rico ... at least 24 hours before the vessel is scheduled to arrive" |
| 항공 운송인·포워더 도착 4시간 전/4시간 미만 비행은 이륙 때 | s. 17, 17.2 | "no later than four hours before the aircraft is scheduled to arrive at its airport of arrival or, if the duration of the flight to Canada is less than four hours, no later than the aircraft’s time of departure." |
| 도로 1시간, 철도 2시간 | s. 19, 19.2, 21, 21.2 | "at least one hour before the highway conveyance arrives in Canada"; "at least two hours before the rail conveyance arrives in Canada" |
| 도착 뒤 전송 불인정 | s. 28 | "nothing in any of sections 13 to 27 permits a person to give information to the Agency ... on or after the arrival of the conveyance in Canada." |
| 정정 지체 없이 | s. 30 | "shall, if they become aware that the information is inaccurate or incomplete, notify the Agency without delay by electronic means of a change to that information." |
| 포워더 House 자료 항목(적입한 자, Customs Tariff 품목번호, UN 번호 등) | Schedule 2 Part 4 | "8 If a cargo container contains all or part of the shipment ... (c) the seal numbers for it, if any, and (d) the name and address of the person who placed the shipment in it"; "11 The Customs Tariff item number that applies to each good"; "12 Each UN number ..." |
| 포워더 책임(House bill, close message, 보충 자료; 정확성·기한) | CBSA D3-3-1 paras 5, 8, 9 https://www.cbsa-asfc.gc.ca/publications/dm-md/d3/d3-3-1-eng.html | "A freight forwarder ... is the entity who is liable for the transmission of house bill, house bill close or supplementary cargo data."; "liable for ensuring that all data is true, accurate, and complete"; "liable for ensuring that all data is received within the timeframes" |
| back-to-back도 혼재 | D3-3-1 Definitions (Consolidation) | "A single shipment with the involvement of a freight forwarder AKA a " back to back " is considered a consolidation." |
| House bill close message 정의 | D3-3-1 Definitions | "Is provided by the freight forwarder to identify all house bills related to a consolidated primary cargo document or a consolidated house bill document for closure purposes." |
| 서비스 제공자 위탁, carrier code는 실제 포워더 것 | D3-3-1 para 12 | "Freight forwarders may authorize a service provider or agent to transmit ... if the service provider is registered as a service provider with the Technical Commercial Client Unit (TCCU). The carrier code on the electronic transmission must be that of the actual freight forwarder, not the agent or service provider." |
| House 자료 전송 포워더도 carrier code 필요 | CBSA D3-5-1 para 10 https://www.cbsa-asfc.gc.ca/publications/dm-md/d3/d3-5-1-eng.html | "Marine carriers performing the duties of a freight forwarder ... and transmitting pre-arrival supplementary or house bill data must also have a CBSA assigned carrier code." Also para 20: "carriers/freight forwarders must have a valid CBSA assigned carrier code" |
| CBSA Do not load/Hold/Do not unload, 수정 후 취소 통지 받고 적재 | D3-5-1 paras 70, 89 | "The CBSA systems will send “Do not load”, “Hold”, “Do not unload” and/or “Cancellation” coded messages"; "If a change/amendment is submitted in response to a “Do not load” notice, loading can proceed once a cancellation notice is received." |
| AMPS C378 CAD 2,000/4,000/8,000, 5건 이상 상한 12,000/24,000/48,000, 포워더 House bill 미전송 예 | https://www.cbsa-asfc.gc.ca/trade-commerce/amps/contraventions-infractions/c378-eng.html (modified 2025-09-22) | "1st $2,000 2nd $4,000 3rd and subsequent $8,000"; "the maximum penalty amount will not exceed $12,000 for a first level infraction, $24,000 for a second level infraction, and $48,000"; "A freight forwarder failed to transmit an electronic pre-arrival house bill and/or house bill close message" |
| C379 CAD 250/375/750, 시간·방식 각각 | c379-eng.html | "1st $250 2nd $375 3rd and subsequent $750"; "In instances of non-compliance with timeliness and manner requirements two separate C379 penalties may be applied." |
| C381 CAD 500/750/1,500 | c381-eng.html | "Person failed to notify the Agency within prescribed timeframes and without delay of any correction"; "1st $500 2nd $750 3rd and subsequent $1,500"; "Per submission" |
| C382 CAD 500/750/1,500 | c382-eng.html | "Person submitted information ... that was not true, accurate and complete."; "1st $500 2nd $750 3rd and subsequent $1,500" |
| 30일 단계 상승 지연, 12개월 보관 | c379/c381/c382 pages | "A 30-day delay in the escalation of penalty levels from the first to the second will apply"; "Retention period 12 months" |

## 8. Worked example arithmetic (author-made dates)

- Weekdays verified with Python: 2026-11-02 Mon, 11-05 Thu, 11-06 Fri, 11-09 Mon, 11-10 Tue, 11-11 Wed, 11-12 Thu, 11-14 Sat, 11-23 Mon, 11-24 Tue; 2026-11-01 Sun (US DST ends first Sunday of November → PST = UTC−8 from 11-01; KST = UTC+9; difference 17 h).
- 11-12 08:00 KST − 24 h = 11-11 08:00 KST = 11-10 23:00 UTC = 11-10 15:00 PST.
- Arrival 11-24 06:00 PST − 24 h = 11-23 06:00 PST = 11-23 14:00 UTC = 11-23 23:00 KST.
- Stow plan: departure 11-12 20:00 KST + 48 h = 11-14 20:00 KST.
- Air: ICN dep 11-12 21:00 KST (= 12:00 UTC) + 11 h (example) = 23:00 UTC = 15:00 PST 11-12; minus 4 h = 11:00 PST = 19:00 UTC = 11-13 04:00 KST.
- US West broker hours 09:00–18:00 PST = 02:00–11:00 KST next day (example hours).

## Not used / unverified
- Mexico advance manifest rules: not researched to primary source; omitted.
- Current revised ISF mitigation guidelines under EO 14411: not found as of 2026-10-19.
- Carrier-specific AMS cut-off times and AMS/ACI/ISF filing fees: company-specific; no figures used.
- ANPRM "Heightened Import Disclosures for Supply Chain Visibility" (91 FR, 2026-09-02, comments to 2026-12-01): no ISF/manifest changes stated; not mentioned in doc.
- Canada Customs Tariff number digit requirement in ACI (ECCRD): not verified; doc does not state digits.
