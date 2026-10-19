# rk-security FACTS (2026-10-19 확인)

법령·고시 원문은 국가법령정보센터 Open API(lawService.do, 현행본)로 내려받아 대조했다(scratchpad/aeo/2100000286058.txt, law/국제항해선박_및_항만시설의_보안에_관한_법률*.xml → rksec_dl/isps_law.txt·isps_dec.txt, rkw/law/물류정책기본법.txt·개인정보_보호법.txt). CTPAT MSC PDF는 curl로 받아 pdftotext로 추출했다(rksec_dl/imp.pdf, imp.txt, raw.txt). TAPA APAC 페이지와 TAPA PSR 2018 PDF는 curl로 받았다(rkw/web/apac2026.html, rksec_dl/tp3·tp4·tp6). CTU Code IM9는 기존 다운로드본(dl5/im9.txt, MSC.1/Circ.1498)을 썼다. 브라우저 자동화는 쓰지 않았다.

출처 약칭과 URL
- AEO고시 = 수출입 안전관리 우수업체 공인 및 운영에 관한 고시(관세청고시 제2026-60호, 시행 2026. 10. 2.) 별표 1 — https://www.law.go.kr/LSW//admRulInfoP.do?admRulSeq=2100000286058
- 보안법 = 국제항해선박 및 항만시설의 보안에 관한 법률(법률 제20125호, 공포 2024. 1. 23., 시행 2024. 7. 24.) — https://www.law.go.kr/법령/국제항해선박및항만시설의보안에관한법률
- 보안령 = 같은 법 시행령(대통령령 제34988호, 2024. 11. 12.), 약칭 국제선박항만보안법 시행령(XML 법령명약칭)
- 물류법 = 물류정책기본법(법률 제21065호, 시행 2025. 10. 1.) — https://www.law.go.kr/법령/물류정책기본법
- 개인정보법 = 개인정보 보호법(법률 제21445호, 공포 2026. 3. 10., 시행 2026. 9. 11.) — https://www.law.go.kr/법령/개인정보보호법
- CBP = CTPAT 프로그램 안내(Last Modified Sep 24, 2026) — https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat
- CBP-SC = CTPAT Security Criteria 목록(Last Modified Oct 05, 2022) — https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat-customs-trade-partnership-against-terrorism/apply/security-criteria
- MSC = Minimum Security Criteria - U.S. Importers, November 2019 — https://www.cbp.gov/sites/default/files/assets/documents/2019-Dec/CTPAT%20U.S.%20Importers%20MSC%202019.pdf
- IMO = SOLAS XI-2 and the ISPS Code — https://www.imo.org/en/OurWork/Security/Pages/SOLAS-XI-2%20ISPS%20Code.aspx
- IM9 = CTU Code Informative Material 9 CTU Seals (MSC.1/Circ.1498) — https://www.imo.org/en/OurWork/Safety/Pages/CTU-Code.aspx
- PSR = TAPA Parking Security Requirements 2018 (TAPA EMEA 게시 PDF) — https://tapaemea.org/wp-content/uploads/2022/05/TAPA_PSR_2018_-_Final_September_2018.pdf
- TEMEA = TAPA EMEA Standards & Trainings — https://tapaemea.org/standards-trainings/
- TAPAC26 = TAPA APAC, "FSR & TSR Version 2026 Standards in Q3 2026"(2026. 1. 16.) — https://tapa-apac.org/fsr-tsr-version-2026-standards-in-q3-2026-what-you-need-to-know-for-audits-and-certification/
- TAPAC-SA = TAPA APAC Self-Certification Program — https://tapa-apac.org/self-certification-program/
- TAPAC-IAB = TAPA APAC Certification through Audit Bodies — https://tapa-apac.org/certification-through-audit-bodies/
- IUMI = "TAPA EMEA updates supply chain security standards"(2026. 9. 9.) — https://iumi.com/?p=20265
- STDNO = Standards Norway 목록 ISO 28000:2022 — https://online.standard.no/en/iso-28000-2022
- ISO-C = ISO Certification 페이지(직접 접속은 403, 검색 결과 요약으로 확인) — https://www.iso.org/certification.html

## 1. 정의와 영역
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 물류보안 정의 | 물류법 제2조①13 | "\"물류보안\"이란 공항ㆍ항만과 물류시설에 폭발물, 무기류 등 위해물품을 은닉ㆍ반입하는 행위와 물류에 필요한 시설ㆍ장비ㆍ인력ㆍ조직ㆍ정보망 및 화물 등에 위해를 가할 목적으로 행하여지는 불법행위를 사전에 방지하기 위한 조치를 말한다." |
| AEO 안전관리 8개 영역 이름 | AEO고시 별표 1 화물운송주선업자 4. 안전관리 | "(1) 거래업체 관리 (2) 운송수단 등 관리 (3) 출입통제 관리 (4) 인사관리 (5) 취급절차 관리 (6) 시설과 장비 관리 (7) 정보기술 관리 (8) 교육과 훈련" |
| 제4조① 안전관리 내용 | AEO고시 제4조①(cu-aeo FACTS와 같음) | 안전관리: "거래업체, 운송수단, 출입통제, 인사, 취급절차, 시설과 장비, 정보 및 교육ㆍ훈련체계" |
| CTPAT 12개 범주 이름 | MSC | "1. Security Vision & Responsibility", "2. Risk Assessment", "3. Business Partners", "4. Cybersecurity", "5. Conveyance and Instruments of International Traffic Security", "6. Seal Security", "7. Procedural Security", "8. Agricultural Security", "9. Physical Security", "10. Physical Access Controls", "11. Personnel Security", "12. Education, Training and Awareness" |
| 세 영역(focus area) | MSC | "First Focus Area: Corporate Security", "Second Focus Area: Transportation Security", "Third Focus Area: People and Physical Security" |
| Must/Should 구분 | MSC 표 머리 | 열 이름 "Must / Should" |

## 2. 기준 비교
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| AEO 9개 공인부문 | AEO고시 제3조①(cu-aeo FACTS) | 수출자, 수입자, 관세사, 화물운송주선업자, 보세운송업자, 보세구역운영인, 선박회사, 항공사, 하역업자 |
| 비AEO 거래업체에 기준 충족 표시 요구 | AEO고시 별표 1 4.1.3 | "수출입 안전관리 우수업체 공인이 없는 거래업체에 안전관리기준을 충족하였는지 여부를 문서나 전자적인 방법으로 표시하도록 요구하여야 하며, 위험평가 절차에 따라 거래업체의 안전관리기준 충족 여부를 주기적으로 검증하여야 한다." |
| CTPAT 2001년 11월 시작 | CBP | "From its inception in November 2001, CTPAT continued to grow" |
| 자발적·무료 | CBP | "Participation in CTPAT is voluntary and there are no costs associated with joining the program." |
| 90일 인증, 1년 내 검증 | CBP | "The CTPAT program will then have up to 90 days to certify the company into the program or to reject the application." / "If certified, the company will be validated within a year of certification." |
| 검사 감소 혜택 | CBP | "Reduced number of CBP examinations" |
| 회원 유형 | CBP(WebFetch 요약) | U.S. importers/exporters, U.S./Canada and U.S./Mexico highway carriers, rail and sea carriers, licensed U.S. Customs brokers, marine port authorities and terminal operators, freight consolidators, ocean transportation intermediaries and NVOCCs, Mexican and Canadian manufacturers, Mexican long-haul carriers |
| 유형별 MSC | CBP-SC | Air Carriers; Consolidators (Air Freight Consolidators, Ocean Transport Intermediaries, and NVOCC); Customs Brokers; Exporters; Foreign Manufacturers; Highway Carriers; Importers; Long Haul Highway Carriers in Mexico; Marine Port Authority and Terminal Operators; Rail Carriers; Sea Carriers; Third Party Logistics Providers (3PL) |
| 거래처 심사 절차 | MSC 3.1 | "CTPAT Members must have a written, risk based process for screening new business partners and for monitoring current partners. A factor that Members should include in this process is checks on activity related to money laundering and terrorist funding." 이행 지침 예: "Verifying the company's business address and how long they have been at that address; Conducting research on the internet on both the company and its principals; Checking business references; and Requesting a credit report." 대상 예: "manufacturers, product suppliers, pertinent vendors/service providers, and transportation/logistics providers ... brokers or contracted IT providers" |
| AEO MRA 인정·한국 포함 | MSC 3.4 | "Certification in either CTPAT or an approved AEO is acceptable proof for meeting program requirements for business partners, and Members must obtain evidence of the certification and continue to monitor these business partners" / "Current United States MRAs include: New Zealand, Canada, Jordan, Japan, South Korea, ..." |
| 외주 시 실사 | MSC 3.5 | "When a CTPAT Member outsources or contracts elements of its supply chain, the Member must exercise due diligence (via visits, ..." |
| 재하청은 복잡성 추가 | MSC 3장 머리말 | "When business partners subcontract certain functions, an additional layer of complexity is added to the equation" |
| FSR·TSR 정의 | TAPAC26 | FSR: "Specify the minimum industry requirements for secure warehousing or in-transit storage within a supply chain." TSR: "Focuses exclusively on cargo transport by truck and represents the minimum requirements specifically for transporting products via road within a supply chain." |
| PSR, EMEA 지역 | PSR 2018 | "EMEA: The Parking Security Requirements (PSR) represents minimum standards specifically for secure parking places" |
| CSS 포함 4개 표준 | TEMEA | "TAPA EMEA offers 4 Supply Chain Security Standards:" FSR, TSR, PSR, CSS(Cyber Security Standard) |
| 등급 A·B·C / 1·2·3, 자체 인증은 최저 등급만 | PSR 2018 부록 C 용어집 | "authorized to conduct audits and issue certifications with TAPA Standards at all levels (FSR A, B, C; TSR 1, 2, 3 and PSR 1, 2, 3) OR An Auditor working for a LSP/Applicant, PPO or Buyer who has passed TAPA-administered training and is authorized to issue Self-Certifications for FSR Level C, TSR Level 3 and/ or PSR Level 3 only." |
| 자체 심사는 최저 등급, 자사 AA 필요 | TAPAC-SA | "Seeking certification for the minimum level of TAPA Standards"; "required to have a TAPA trained in-house Authorized Auditor (AA) who have completed the training and passed the examination" |
| IAB는 모든 등급 | TAPAC-IAB | "IAB certification is the recommended option for audit assessment for companies seeking all levels of TAPA certification." |
| 3년마다 개정 | TEMEA | "Our Standards are reviewed and revised every 3 years to ensure they remain fit-for-purpose." |
| FSR·TSR 2026 EMEA 시행 2026. 9. 15. | IUMI | "TAPA EMEA has published the revised Facility Security Requirements (FSR) 2026 and Trucking Security Requirements (TSR) 2026 ... which will come into force on 15 September 2026." |
| APAC 2026년판 심사 신청 2026. 10. 1.부터, 2027. 1.부터 FSR 2023 인증서 미발급 | TAPAC26 | "start date for Version 2026 audit applications is 1 October 2026"; "January 2027 onwards – No FSR 2023 certificates will be issued." (공지는 "The dates are subjected to changes without prior notice.") |
| TAPA 문서 저작권 | PSR 2018 | "PSR 2018 © All Rights Reserved" |
| ISO 28000:2022 판·발행일·대체 | STDNO | "Edition: 2", "Published: 15 March 2022", "Revises: ISO 28000:2007" |
| ISO 28000 초록 | STDNO | "This document specifies requirements for a security management system, including aspects relevant to the supply chain." "applicable to all types and sizes of organizations" "It provides a holistic and common approach and is not industry or sector specific." |
| ISO는 인증하지 않음 | ISO-C(검색 요약) | ISO does not perform certification or issue certificates; certification is performed by external certification bodies |
| ISPS 2004. 7. 1. 발효, Part A·B, PFSO·SSO·CSO | IMO | "Having entered into force under SOLAS chapter XI-2, on 1 July 2004"; "Mandatory Part A outlines detailed maritime and port security-related requirements"; Part B "a series of recommendatory guidelines"; "Port Facility Security Officers (PFSOs), Ship Security Officers (SSOs) and Company Security Officers (CSOs)" |
| 한국 적용범위 | 보안법 제3조① | "가. 모든 여객선 나. 총톤수 500톤 이상의 화물선 다. 이동식 해상구조물 ..." "2. ... 국제항해선박과 선박항만연계활동이 가능한 항만시설" |
| 보안등급 3단계 | 보안령 제4조② | "1. 보안 1등급 : ... 평상수준 2. 보안 2등급 : ... 경계수준 3. 보안 3등급 : ... 비상수준" |
| 항만시설 이용자 금지행위 | 보안법 제33조① | "1. ... 위해물품을 반입ㆍ은닉하는 행위 2. 보안사건의 발생을 예방하기 위한 검문검색 및 지시 등에 정당한 사유 없이 불응하는 행위 3. 항만시설 내 해양수산부령으로 정하는 지역을 정당한 출입절차 없이 무단으로 출입하는 행위 4. 항만시설 내 해양수산부령으로 정하는 구역에서 항만시설보안책임자의 허가 없이 촬영을 하는 행위" |

## 3. 시설
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 식별 표식 발급·회수, 접근통제구역 | AEO 4.3.1·4.3.2(화물운송주선업자) | "직원식별시스템을 마련하고, 회사 관리자를 지정하여 직원, 방문자, 납품업자를 식별하는 표식의 발급과 회수를 관리"; "접근통제구역을 설정하고, 직원별로 직무수행 범위에 따라 접근가능 구역과 권한을 구분" |
| 방문자 사진 신분증 | AEO 4.3.3 | "방문자 도착 시 사진이 부착된 신분증을 확인하고, 방문자 안내와 출입증을 패용하도록" |
| 소포·우편물 검사 / 검문 | AEO 4.3.4·4.3.5 | "도착한 소포와 우편물을 배포하기 전에 검사"; "권한이 없거나 신원이 확인되지 않은 사람에 대하여 검문과 대응하는 절차" |
| 울타리·출입구·주차·건물·잠금·조명·경보·카메라 | AEO 4.6.1~4.6.7 | 4.6.1 울타리, 4.6.2 "출입구에 인력을 배치하거나 감시카메라 설치 등을 통해 감시하고 ... 출입구를 최소한으로", 4.6.3 개인차량 주차 금지, 4.6.5 "잠금장치를 설치 ... 근무시간 이후에는 사무실 접근을 통제", 4.6.6 조명, 4.6.7 "경보장치와 감시카메라를 설치" |
| 보세구역운영인 순찰·방문자 구역 통제 | AEO 보세구역운영인 4.3.4·4.3.6 | "방문자가 방문목적에 따라 접근가능 구역에만 출입하도록 통제하는 절차"; "물품 취급 및 보관지역을 감시하기 위하여 순찰" |
| 출입증 절차 | MSC 10.1(Must) | "written procedures governing how identification badges and access devices are granted, changed, and removed." |
| 방문자 | MSC 10.2 | "must present photo identification upon arrival, and a log must be maintained ... All visitors should be escorted." |
| 기사 신원 | MSC 10.3 | "Drivers delivering or receiving cargo must be positively identified before cargo is received or released. Drivers must present government-issued photo identification" |
| 화물 인수 대장 | MSC 10.4 | "A cargo pickup log must be kept to register drivers and record the details of their conveyances when picking up cargo." |
| 사전 통보·예약 | MSC 10.7(Should) | "the carrier should notify the facility of the estimated time of arrival ... the name of the driver, and truck number ... allow deliveries and pickups by appointment only." |
| 우편물 | MSC 10.8(Should) | "Arriving packages and mail should be periodically screened" |
| 무단 인원 대응 | MSC 7.24(Must) | "Procedures must be in place to identify, challenge, and address unauthorized/unidentified persons." |
| 물리 장벽 / 울타리 / 출입문 / 주차 / 조명 | MSC 9.1(Must), 9.2(Should), 9.4, 9.5(Should), 9.6(Must) | 9.1 "must have physical barriers and/or deterrents"; 9.4 "Gates where vehicles and/or personnel enter or exit ... must be manned or monitored."; 9.5 "Private passenger vehicles should be prohibited from parking in or adjacent to cargo handling and storage areas"; 9.6 "Adequate lighting must be provided" |
| 보안 기술 | MSC 9.7(Should), 9.8(Must) | "Security technology should be used to monitor premises"; "must have written policies and procedures governing the use, maintenance, and protection of this technology." |
| 카메라 위치·알림·영상 검토 | MSC 9.13(Must), 9.14(Should), 9.15(Must) | 9.13 "cameras must be positioned to cover key areas of facilities that pertain to the import/export process."; 9.14 "alarm/notification feature, which would signal a 'failure to operate/record' condition"; 9.15 "periodic, random reviews of the camera footage must be conducted ... Results of the reviews must be summarized in writing to include any corrective actions taken. The results must be maintained for a sufficient time for audit purposes." |
| 수입자용 MSC에 잠금·열쇠 관리 별도 항목 없음 | MSC 9장 | 9.1~9.16 목록에 잠금장치 전용 항목 없음(9.3 번호 없음, "Criteria ID numbers may not be sequential") |
| CCTV 공개된 장소 제한·안내판 | 개인정보법 제25조①·④ | "누구든지 다음 각 호의 경우를 제외하고는 공개된 장소에 고정형 영상정보처리기기를 설치ㆍ운영하여서는 아니 된다 ... 2. 범죄의 예방 및 수사를 위하여 필요한 경우 3. 시설의 안전 및 관리, 화재 예방을 위하여 정당한 권한을 가진 자가 설치ㆍ운영하는 경우"; ④ "정보주체가 쉽게 인식할 수 있도록 다음 각 호의 사항이 포함된 안내판을 설치하는 등 필요한 조치를 하여야 한다." |

## 4. 인원
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 채용·재직·퇴직 | AEO 4.4.1~4.4.3 | "채용이 확정된 자의 입사지원 정보에 대한 진위여부를 확인"; "관련 법령이 허용하는 범위 내에서 ... 이력을 점검 ... 채용 후에는 직무 수행의 중요성에 기초하여 직원을 주기적으로 점검"; "퇴직직원의 사원증ㆍ출입증과 시설ㆍ시스템 접근권한 등을 회수하는 절차" |
| 교육 | AEO 4.8.1~4.8.3 | 4.8.1 위험 인식 프로그램과 보고방법 숙지, 4.8.2 수출입물류업무 교육, 4.8.3 "안전관리 유지, 내부공모 파악ㆍ부정방지 프로그램의 준수, 소포ㆍ우편물 관리, 물품취급 장소ㆍ시설 등에 대한 접근통제 및 정보기술 보호ㆍ관리 등에 대해 직원에게 교육" |
| 교육 미실시 혜택 정지 | AEO고시 제25조 | "공인 유효기간 중 소속 임직원에게 안전관리 세부기준 4.8.1부터 4.8.4까지에 따른 교육을 정당한 사유 없이 상당한 기간 실시하지 않았음이 확인된 경우" |
| 채용 전 확인 | MSC 11.1 | "Written processes must be in place to screen prospective employees and to periodically check current employees. Application information, such as employment history and references, must be verified prior to employment, to the extent possible and allowed under the law." |
| 신원 조회 확대 | MSC 11.2(Should) | "Based on the sensitivity of the position, employee vetting requirements should extend to temporary workforce and contractors." |
| 행동강령 | MSC 11.5 | "CTPAT Members must have an Employee Code of Conduct" |
| 퇴직 시 접근 삭제 | MSC 4.7(Must) | "Computer and network access must be removed upon employee separation." |
| 교육 프로그램·기록·민감 직무 | MSC 12.1(Must) | "newly hired employees must receive this training as part of their orientation"; "Members must retain evidence of training such as training logs, sign in sheets (roster), or electronic training records. Training records should include the date of the training, names of attendees, and the topics of the training."; 민감 직무 "shipping, receiving, mailroom personnel, drivers, dispatch, security guards, any individuals involved in load assignments, tracking of conveyances, and/or seal controls." |
| 점검자 교육 | MSC 12.2(Must) | "Drivers and other personnel that conduct security and agricultural inspections of empty conveyances and Instruments of International Traffic (IIT) must be trained" |
| 매년 특별 교육 | MSC 12.6(Should) | "Specialized training should be provided annually to personnel who may be able to identify the CTPAT Warning Indicators of Trade-Based Money Laundering and Terrorism Financing." |
| 보고 교육 | MSC 12.10 | "Personnel must be trained on how to report security incidents and suspicious activities." |

## 5. 씰과 7개 지점 점검
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| ISO 17712 I·S·H 표시 | IM9 3.1.2.2 | "Seals meeting the relevant criteria should be marked or stamped in a readily legible way to identify their classification as indicative (\"I\"), security (\"S\"), or high-security (\"H\") seals." |
| 국제 운송은 고보안 씰 | IM9 2.2.2 | "Where required for international transport, the seal should be compliant with the definition of high-security mechanical seals in the standard ISO 17712." |
| 등급 증명 요구 | IM9 3.1.1.1 | "The seal purchaser should require from the seal vendor a certification of the seal's classification in accordance with the standard ISO 17712." |
| 씰 절차서 | MSC 6.1(Must) | "detailed, written high-security seal procedures that describe how seals are issued and controlled at the facility and during transit. Procedures must provide the steps to take if a seal is altered, tampered with, or has the incorrect seal number, including documentation of the event, communication protocols to partners, and investigation of the incident. The findings from the investigation must be documented, and any corrective actions must be implemented as quickly as possible." |
| 적입 직후 H 씰 | MSC 6.2(Must) | "must be secured immediately after loading/stuffing/packing by the responsible party (i.e. the shipper or packer acting on the shipper's behalf) with a high-security seal that meets or exceeds the most current ... ISO 17712 standard for high-security seals. Qualifying cable and bolt seals are both acceptable." |
| 부착 위치 | MSC 6.2 이행 지침 | "The high-security seal used must be placed on the secure cam position, if available, instead of the right door handle. The seal must be placed at the bottom of the center most vertical bar of the right container door. Alternatively, the seal could be placed on the center most left-hand locking handle on the right container door if the secure cam position is not available. If a bolt seal is being used, it is recommended that the bolt seal be placed with the barrel portion or insert facing upward with the barrel portion above the hasp." |
| 시험성적서 | MSC 6.5(Must) | "must be able to document that the high-security seals they use meet or exceed the most current ISO 17712 standard." 증거: "a copy of a laboratory testing certificate" |
| 씰 감사 | MSC 6.6(Must) | "seal audit that includes periodic inventory of stored seals and reconciliation against seal inventory logs and shipping documents. All audits must be documented." |
| VVTT | MSC 6.7(Must) | "V - View seal and container locking mechanisms; ensure they are OK; V - Verify seal number against shipment documents for accuracy; T - Tug on seal to make sure it is affixed properly; T - Twist and turn the bolt seal ..." |
| 적입 사진 | MSC 7.5(Should) | "digital photographs should be taken at the point of stuffing ... forwarded to the destination"; 예: "cargo markings, the loading process, the location where the seal was placed, and properly installed seal." |
| 운송 중 씰 교체 통보 | MSC 6.1 이행 지침 | "The driver must immediately notify dispatch when a seal is broken, indicate who broke the seal, and provide the new seal number." "The carrier must immediately notify the shipper, broker, and importer" "The shipper must note the replacement seal number in the seal log." "Retain altered or tampered seals to aid in investigations." |
| B/L 정확성 | MSC 7.8(Must) | "The shipper or its agent must ensure that bill of ladings (BOLs) and/or manifests accurately reflect the information provided to the carrier" |
| 씰 번호 사전 전송 | MSC 7.29(Should) | "Seal numbers assigned to specific shipments should be transmitted to the consignee prior to departure." |
| AEO 봉인 관리·보고 | AEO 4.2.2 | "봉인을 관리하고, 손상된 봉인을 식별하여 세관장 및 관련 외국 관세당국에 보고하여야 하며, 공급망 협력업체와 공유하는 절차" |
| 보세운송 봉인통제·강화 자물쇠 | AEO 보세운송업자 4.2.2·4.2.7 | "운전사에게 운송 중 봉인통제 절차를 이행하도록"; "여러 수출입업체의 물품을 적재하는 경우에는 안전이 강화된 자물쇠를 사용" |
| 재봉인 | AEO 보세구역운영인 4.5.6 | "세관직원 등이 검사를 위하여 컨테이너를 개장한 경우에는 검사 종료 즉시 재봉인" |
| 씰 점검 방법·불일치 조치 | IM9 2.1.3·2.1.4·2.1.4.1·2.1.4.3 | "seals should be inspected by the receiving party at each change of custody"; "visual check for signs of tampering, comparison of the seal's identification number with the cargo documentation, and noting the inspection"; "The consignee should bring the discrepancy to the attention of the carrier and the shipper ... notify Customs or law enforcement agencies, in accordance with national legislation."; "install a replacement that is of the same or higher seal classification ... and note ... the new seal number, on the cargo documentation." |
| 적입 전 점검, 7개·8개 지점 | MSC 5.3(Must) | "Prior to stuffing/packing, all empty Instruments of International Traffic (IIT) must be inspected"; "A seven-point inspection must be conducted on all empty containers and unit load devices (ULDs); and an eight-point inspection must be conducted on all empty refrigerated containers and ULDs: 1. Front wall; 2. Left side; 3. Right side; 4. Floor; 5. Ceiling/Roof; 6. Inside/outside doors, including the reliability of the locking mechanisms of the doors; 7. Outside/Undercarriage; and 8. Fan housing on refrigerated containers." 해외: "Expectations for overseas supply chains are to inspect all instruments of IIT at the point of stuffing/packing." |
| 17개 지점(육로) | MSC 5.3 | "Additional inspection requirements for land border crossings via highway carriers ... These systematic inspections must include 17-point inspections: Tractors: 1.~7. ... Trailers: 1.~10." |
| 점검 교육 자료 | MSC 5.3 이행 지침 | "The Public Library Section of the CTPAT Portal contains training material on security and agricultural conveyance/Instruments of International Traffic inspections." |
| 잠금장치 점검 | MSC 5.4(Must) | "The door, handles, rods, hasps, rivets, brackets, and all other parts of a container's locking mechanism must be fully inspected to detect tampering and any hardware inconsistencies prior to the attachment of any sealing device." |
| 점검표 기재 | MSC 5.5(Should) | "Container/Trailer/Instruments of International Traffic number; Date of inspection; Time of inspection; Name of employee conducting the inspection; and Specific areas ... If the inspections are supervised, the supervisor should also sign the checklist." |
| 통제 구역 | MSC 5.6(Should) | "performed in an area of controlled access and, if available, monitored via a CCTV system." |
| 관리자 무작위 재점검 | MSC 5.8(Should) | "Based on risk, management personnel should conduct random searches of conveyances after the transportation staff have ..."; "Supervisory searches of conveyances are conducted to counter internal conspiracies." |
| 대기 화물 / 차이 조사 | MSC 7.1(Must), 7.27(Must) | "When cargo is staged overnight, or for an extended period of time, measures must be taken to secure the cargo from unauthorized access."; "All shortages, overages, and other significant discrepancies or anomalies must be investigated and resolved, as appropriate." |
| 반입 대조·인계 검수 | AEO 보세구역운영인 4.5.3·4.5.4 | "반입물품의 중량ㆍ라벨ㆍ표식ㆍ수량 등을 반입예정정보와 대조 확인"; "물품을 수하인 등에게 인계할 때 검수하여야 하며, 물품의 불일치 또는 부적절한 인계 등이 발생하였을 때에는 즉시 세관장에게 보고" |
| 7개 지점 표의 "보는 것" 칸 | (작성자 예시) | CTPAT 원문 문구 아님. 문서에 예시라고 표시함 |

## 6. 정보
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 정보·문서 보호 | AEO 화물운송주선업자 4.5.3·4.5.4 | "물품의 통관에 사용되는 정보 및 문서를 정확하게 하고, 교환이나 손실, 오류정보의 개입으로부터 보호되는 절차"; "거래업체로부터 정확하고 시기적절하게 정보를 통보받는 절차" (수출자는 4.5.2·4.5.3) |
| 정보기술 정책·오남용 | AEO 4.7.1·4.7.2 | "정보기술 관리정책, 절차 및 표준을 마련하고, 주기적으로 또는 위험요소ㆍ상황 발생 시 이를 현행화"; "정보기술의 오ㆍ남용을 확인할 수 있는 시스템을 마련 ... 정기적으로 ... 안전점검 ... 위반자에 대하여 합당한 징계처분" |
| 통관 정보 정확성 | MSC 7.6(Must) | "all information used in the clearing of merchandise/cargo is legible; complete; accurate; protected against the exchange, loss, or introduction of erroneous information; and reported on time." |
| 사이버 정책 | MSC 4.1(Must) | "comprehensive written cybersecurity policies and/or procedures" |
| 악성코드·사회공학·복구 | MSC 4.2(Must) | "protection from malware ... and internal/external intrusion (firewalls) ... Members must have policies and procedures to prevent attacks via social engineering. ... procedures must include the recovery (or replacement) of IT systems and/or data." |
| 보안 시험 | MSC 4.3(Must) | "must regularly test the security of their IT infrastructure." |
| 무단 접근 탐지 | MSC 4.5(Must) | "A system must be in place to identify unauthorized access of IT systems/data ... All violators must be subject to appropriate disciplinary actions." |
| 매년 검토 | MSC 4.6(Must) | "Cybersecurity policies and procedures must be reviewed annually, or more frequently, as risk or circumstances dictate." |
| 권한 제한·검토 | MSC 4.7(Must) | "User access must be restricted based on job description or assigned duties. Authorized access must be reviewed on a regular basis" |
| 개인 계정·인증 | MSC 4.8(Must) | "Individuals with access to Information Technology (IT) systems must use individually assigned accounts. ... strong passwords, passphrases, or other forms of authentication" |
| VPN | MSC 4.9(Must) | "must employ secure technologies, such as virtual private networks (VPNs)" |
| 백업 | MSC 4.12(Should) | "Data should be backed up once a week or as appropriate." |
| 종이 서식 | MSC 7.7(Should) | "forms and other import/export related documentation should be secured to prevent unauthorized use." |
| 식별부호 도용 | MSC 7.23 이행 지침 | "Unauthorized use of a business entity identifier (i.e., Importer of Record (IOR) number, Standard Carrier Alpha (SCAC) code, etc.)." |
| 전자문서 위작 금지 등 | 물류법 제33조①② | "누구든지 단위물류정보망 또는 제32조제1항의 전자문서를 위작(僞作) 또는 변작(變作)하거나 위작 또는 변작된 전자문서를 행사하여서는 아니 된다."; "누구든지 국가물류통합정보센터 또는 단위물류정보망에서 처리ㆍ보관 또는 전송되는 물류정보를 훼손하거나 그 비밀을 침해ㆍ도용(盜用) 또는 누설하여서는 아니 된다." |
| 실무 수칙(전화 재확인, 수신자 목록 정리) | (작성자 실무 권고) | 특정 출처 수치 없음. MSC 4.2의 사회공학 예방 요구를 실무로 푼 것 |

## 7. 거래처
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 거래업체 관리 | AEO 4.1.1~4.1.4(화물운송주선업자) | "거래업체를 선정하기 위한 절차"; "국내ㆍ외 수출입 안전관리 우수업체 공인을 받았는지 여부를 확인"; 4.1.3(위 2절); "거래업체가 ... 안전관리절차를 운영하고, 위험평가를 기초로 절차와 시설에 대하여 주기적으로 점검ㆍ개선하도록 요구" |
| 수출자 운송인 확인 | AEO 수출자 4.1.5 | "수출물품의 운송을 수출입 안전관리 우수업체 공인을 받은 운송인이 담당하는지 또는 ... 안전관리기준을 충족한 업체가 담당하는지 여부를 확인 ... 컨테이너와 트레일러의 적재지점에서 안전관리절차가 보장되도록 운송인과 협력" |
| 다른 운송업체 차량 | AEO 보세운송업자 4.1.4 | "타 운송업체의 차량을 이용하는 경우 그 업체가 수출입 안전관리 우수업체 공인을 받았는지 또는 ... 안전관리기준을 충족하였는지 확인" |
| 운송 추적 계약 조건 | MSC 5.14(Should) | "CTPAT Members should work with their transportation providers to track conveyances from origin to final destination point. Specific requirements for tracking, reporting, and sharing of data should be incorporated within terms of service agreements with service providers." |
| 보세운송 추적·운행일지·경로 | AEO 보세운송업자 4.2.5·4.2.6 | "운송수단이 이동하는 동안에는 추적 및 감시 ... 운행일지가 기록ㆍ유지"; "비정상적인 운행경로를 확인 ... 운송이 지연되는 경우 운전사가 운송의뢰인에게 그 사실을 통보" |

## 8. 사고 보고
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 이상·혐의 즉시 보고 | AEO 화물운송주선업자 4.5.2, 수출자 4.5.5, 보세운송업자 4.5.2 | "이상 상황을 해결하고 조사하여야 하며, 불법사항이나 혐의사항을 식별하였을 때에는 즉시 세관장에게 보고" |
| 손상 컨테이너·무단침입 보고 | AEO 4.2.3·4.2.4(화물운송주선업자) | "손상된 컨테이너와 트레일러 등을 식별하여 세관장 및 관련 외국 관세당국에 보고하는 절차"; "무단침입이 확인된 경우 세관장에게 보고하는 절차" |
| 변동사항 30일 | AEO고시 제17조① | "그 사실이 발생한 날로부터 30일 이내에 ... 보고 ... 범칙행위, 부도 등 공인유지에 중대한 영향을 미치는 경우 지체없이 보고"; 5호 "화재, 침수, 도난, 불법 유출 등 수출입화물 안전관리와 관련한 특이사항" |
| 정기 자율 평가 매년 | AEO고시 제18조① | "매년 공인일자가 속하는 달에 ... 자율적으로 점검하고 다음 달 15일까지 관세청장에게 그 결과를 제출" |
| CTPAT 사고 보고 | MSC 7.23(Must) | "written procedures for reporting an incident, which includes a description of the facility's internal escalation process."; "report any global incidents to its Supply Chain Security Specialist, the closest port of entry, any pertinent law enforcement agencies, and business partners"; 예 "Discovery of tampering with a container/IIT or high-security seal; Discovery of a hidden compartment ...; Smuggling of contraband, including people; stowaways; ... Extortion, payments for protection, threats, and/or intimidation"; "Notification procedures must include the accurate contact information ... Procedures must be periodically reviewed to ensure contact information is accurate." |
| 익명 신고 | MSC 7.25(Should) | "should set up a mechanism to report security related issues anonymously." |
| 위협 통보 | MSC 5.29(Must) | "If a credible (or detected) threat to the security of a shipment or conveyance is discovered, the Member must alert (as soon as feasibly possible) any business partners ... and any law enforcement agencies" |

## 9. 점검표 운영
| 사실 | 출처 | 근거 문장 |
|---|---|---|
| 위험평가 매년 검토, 수시 사유 | MSC 2.3(Must) | "Risk assessments must be reviewed annually, or more frequently as risk factors dictate." 이행 지침: "increased threat level from a specific country, periods of heightened alert, following a security breach or incident, changes in business partners, and/or changes in corporate structure/ownership such as mergers and acquisitions" |
| 위기관리 절차 | MSC 2.4(Should) | crisis management, business continuity, security recovery plans |
| "정기"의 월·분기 주기 | (작성자 예시) | 기준이 정하지 않음. 문서에 예시라고 표시함 |
| 시정조치 기록 예시 | (작성자 예시) | 날짜·사례 모두 만든 값. 문서에 표시함 |

## 확인하지 못해 쓰지 않거나 약하게 쓴 것
- ISO 17712 현행판 연도: iso.org가 Cloudflare 403으로 막혀 직접 확인 못 함. 검색 요약에는 2013년판(2023년 재확인)으로 나오나 문서에는 연도를 쓰지 않음.
- ISO 28000:2022 Amd 1:2024(기후 변화 관련 개정): 목록에만 보여 문서에서 뺌.
- TAPA 2026년판의 등급 구조(A·B·C, 1·2·3 유지 여부), FSR 인증서 유효기간(DQS 블로그는 3년이라 함, PSR 2018은 3년): 문서에는 유효기간을 쓰지 않고, 등급 구조 변동은 확인 못 했다고 씀.
- TAPA FSR 본문 요구사항: 저작권 문서(Do Not Copy 표시)라 사용하지 않음.
- ISPS Code 채택일(2002년 12월)과 SSP·PFSP·ISSC: IMO 페이지에서 확인되지 않아 쓰지 않음.
- 한국 화물 도난 통계: 확인하지 못해 쓰지 않음.
