# rk-security v2 FACTS (새로 넣거나 바꾼 내용, 2026-10-19 확인)

그대로 둔 AEO·CTPAT·ISPS·물류정책기본법·개인정보법·IM9 사실은 drafts/rk-security.facts.md를 따른다. 다만 CTPAT MSC는 2021년 10월판 PDF를 curl로 받아(scratchpad/rksec2/msc2021.pdf, raw.txt) 문서에 쓴 Must/Should를 다시 대조했다(2.3, 3.1, 3.4, 3.5, 4.1~4.9 Must, 4.12 Should, 5.3·5.4 Must, 5.5·5.6·5.8·5.14 Should, 5.29 Must, 6.1·6.2·6.5·6.6·6.7 Must, 7.1·7.6·7.8·7.23·7.24·7.27 Must, 7.5·7.7·7.25·7.29 Should, 9.1·9.4·9.6·9.8·9.13·9.15 Must, 9.2·9.5·9.7·9.14 Should, 10.1·10.2·10.3·10.4 Must, 10.7·10.8 Should, 11.1·11.5 Must, 11.2 Should, 12.1·12.2·12.10 Must). 브라우저 자동화는 쓰지 않았다(WebFetch/WebSearch/curl).

## 1절 통계
| 사실 | 출처 | 근거 |
|---|---|---|
| TIS 157,421건, 129개국, 2022~2024, 손실액 보고 6% 미만, 27억 유로 | IUMI 2025-03 기고(TAPA EMEA CEO Thorsten Neumann) https://iumi.com/?p=16716 | "the TAPA EMEA Intelligence System (TIS) has recorded 157,421 cargo crimes in 129 countries"; "Less than 6% of these reports told us their loss value"; "these crimes alone produced a total loss of €2.7 billion." |
| EMEA 회원 약 1,000곳 | 같은 기고 | "TAPA EMEA now represents a network of some 1,000 member companies." |
| 덜 보고됨 | 같은 기고 및 업계 보도 | TAPA CEO: cargo crime in EMEA "significantly under-reported"(검색 요약). 문서에는 "크게 덜 보고된다고 봅니다"로만 씀 |
| 95% 넘게 트럭 공격, 그 절반이 보안 없는 주차 장소 | TAPA EMEA PSR Flyer 2025(Control Union 게시본) https://www.controlunion.com/wp-content/uploads/2024/09/TAPA-EMEA-PSR-Flyer-2025.pdf (pdftotext) | "Over 95% of all recorded cargo thefts involve attacks on trucks and 50% of these crimes occur when trucks stop in unsecured parking places." |
| CargoNet 2025 | Verisk 보도자료 2026-01-22 https://www.verisk.com/company/newsroom/cargo-theft-losses-surge-to-estimated-$725-million-in-2025-verisk-cargonet-analysis-reveals/ (curl) | "estimated losses surged to nearly $725 million, a 60 percent increase from 2024"; "the average value per theft rose to $273,990, up 36 percent from $202,364"; "CargoNet recorded 3,594 supply chain crime events across the United States and Canada in 2025, essentially unchanged from the 3,607 events reported in 2024"; "increasing 18 percent year-over-year from 2,243 to 2,646"; "Theft by deception groups are anticipated to increase their focus on misdirecting shipments tendered to legitimate carriers" |
| 한국 무역사기 1,591건, 9,584만 달러(약 1,330억원), 이메일 해킹 1,518건(95.4%), 연도별 건수 | 헤럴드경제 2025-09-28(금융감독원 집계 인용) https://www.heraldk.com/article/2025092814225421028 | "2021년부터 2025년 상반기까지 은행 송금 과정에서 발생한 무역사기 피해는 총 1591건, 9584만달러(약 1330억원)"; "이메일 해킹을 통한 허위 계좌 송금 유도가 1518건(95.4%)"; "2021년 438건에서 2022년 334건, 2023년 314건"; "2024년(329건)"; 2025년 상반기 176건. 금감원 원문 보도자료는 fss.or.kr에서 찾지 못함(2차 출처로 표시) |
| 한국 화물 도난 공식 통계 없음 | (확인 못함) | 문서에 "확인하지 못했습니다"로 씀 |

## 3절 TAPA 단체·표준
| 사실 | 출처 | 근거 |
|---|---|---|
| 1997년 설립, Americas·EMEA·APAC 지역 조직 | DQS TAPA Explained https://www.dqsglobal.com/en/explore/dqs-knowledge-center/tapa-explained | "operating through its regional associations (Americas, EMEA, and APAC)"; "the Association was formed in 1997" |
| 구성원·조직범죄 위협 | TAPA FSR 2020 2.1 https://tapaemea.org/wp-content/uploads/2022/05/FSR-2020-Standard.pdf | "TAPA is a unique forum that unites global manufacturers, logistics providers, freight carriers, law enforcement agencies, and other stakeholders"; "organized crime rings are operating globally and using increasingly sophisticated attacks on vehicles, premises, and personnel" |
| TIS(APAC도 운영) | TAPA APAC 홈페이지 https://tapa-apac.org/ | "TIS" 메뉴, 푸터 "TAPA APAC Intelligent System"(WebFetch 요약) |
| FSR 등급 이름, 멀티사이트 | TAPA APAC FSR https://tapa-apac.org/standards/facility-security-requirements/ | "FSR Level A: Elevated Level"; "FSR Level B: Moderate Level"; "FSR Level C: Standard Level (IAB certification or TAPA APAC certification…)"; "To support companies seeking to certify three or more facilities at the same time"; 멀티사이트는 IAB 심사만(요약) |
| TSR 등급 이름, 차량 유형 4가지, 2023판 | TAPA APAC TSR https://tapa-apac.org/standards/trucking-security-requirements/ | "TSR Level 1: Elevated Security Protection (IAB certification)"; "TSR Level 2: Moderate…"; "TSR Level 3: Basic Security Protection (IAB certification or TAPA APAC certification)"; "Hard-sided Trucks and Trailers", "Soft-sided Trucks and Trailers", "Rigid Vans or Fixed-body Truck", "Sea Container Road Transporters"; 홈페이지 "TAPA Trucking Security Requirements (TSR) 2023" |
| TSR 2026 차량 유형 통합, 인증 체계 문서 분리, 전환판 | IUMI 2026-09-09 https://iumi.com/?p=20265 | "Security requirements for different vehicle types have been consolidated into a single TSR Standard"; "a separate Certification Framework Document describes the certification process"; "Changes from the 2023 standards are highlighted, with previous and new requirements shown side by side." |
| PSR 1·2·3, 파트너 선언 매년, 자체 인증 Level 3·3년·표본 심사, 16개국 | PSR Flyer 2025 | "PSR Level 1 = highest security protection…"; "Sign a declaration to become a TAPA PSR Partner… renewed annually"; "A self-certification audit to meet the requirements of PSR Level 3 and the issuing of TAPA certification valid for 3 years. TAPA EMEA conducts sample audits of self-certified sites."; "currently covering sites in 16 countries" |
| PSR 2023 개정 | TAPA EMEA PSR 페이지 https://tapaemea.org/standards-trainings/parking-facility-security-requirements/ | "TAPA EMEA revised the PSR Standard in 2023." |
| EMEA 4개 표준(CSS 포함), 3년 개정 | TAPA EMEA https://tapaemea.org/standards-trainings/ | "TAPA EMEA offers 4 Supply Chain Security Standards"; "Our Standards are reviewed and revised every 3 years." |
| APAC 기타 표준 GSR·RAS·CSS 2025·PFSR·ACSS·BCM | TAPA APAC 홈페이지 | "The TAPA Cyber Security Standard (CSS) 2025 is the latest version"; 표준 링크 목록 |

## 4절 인증·전환
| 사실 | 출처 | 근거 |
|---|---|---|
| IAB 모든 등급, 자체 인증 최저 등급·AA | TAPA APAC FSR·TSR 페이지; 기존 FACTS(PSR 2018 용어집, APAC 자체 인증) | "an external audit by TAPA-Approved Independent Audit Bodies (IABs) for all levels"; "Self-Audit option by TAPA Authorized Auditors (AA) for the minimum level" |
| APAC shadow audit | TAPA APAC FSR·TSR 페이지 | "Shadow Audits may be conducted by TAPA APAC at the association's discretion." |
| FSR 3년, 연장 없음, 만료 전 재인증 | DQS FSR 2026 Guide https://www.dqsglobal.com/en/explore/blog/tapa-fsr-2026-guide | "The TAPA FSR certificate is valid for three (3) years with no extension permitted"; "a re-certification audit must be performed before the expiration date." |
| 2023 인증서는 유효기간까지 유효 | DQS FSR 2026 Guide / 전환 블로그 | "The issued FSR/TSR 2023 certificates will remain valid for 3 years" |
| Waiver 정의·절차·유효 | FSR 2020 6.1 | "A waiver is a written approval granted to either exempt a facility from a specific TAPA requirement or to accept an alternative compliance solution"; "Waivers are valid for the period of the certification"; "submitted through the IAB/AA to the TAPA Regional Waiver Committee for approval" |
| TSR 화주 대신 면제 요청 | TAPA APAC TSR | "LSP/Applicant may request for Waivers on specific security requirement(s) in part or whole on behalf of the Buyer." |
| EMEA 2026. 9. 15. 시행 | IUMI 2026 | "which will come into force on 15 September 2026" |
| APAC 일정 | TAPA APAC 공지 2026-01-16 | "registration… via the LMS will open on 21 September 2026"; "The start date for Version 2026 audit applications is 1 October 2026"; "30 September 2026 – Final date to request an FSR 2023 tracking audit number"; "30 November 2026 – Final date to submit all audit documentation"; "31 December 2026 – All Audits Certifications processing for Version 2023 must be completed and finalised"; "January 2027 onwards – No FSR 2023 certificates will be issued."; "The dates are subjected to changes without prior notice." |
| FSR 2026 변경 해설 | DQS FSR 2026 Guide(2026-06-23) | "FSR 2026 removes ambiguous wording"; "requiring priority coverage of loading, storage and transfer zones"; "building walls, loading docks, rooftop access points"; "In compliant jurisdictions, enterprises may use electronic ID cards, electronic driver's licenses" |
| 등급 구조 변경 미확인 | DQS FAQ | "Will my Level A/B/C change under FSR 2026?" → 공지가 확인하지 않음 |

## 5·6절 요구사항 구조·계약
| 사실 | 출처 | 근거 |
|---|---|---|
| FSR 2020 장 구성 | FSR 2020 목차 | 7.1 Perimeter, 7.2 Outside Walls, Roof, and Doors, 7.3 Office and Warehouse Entry and Exit Points, 7.4 Inside Warehouse and Office, 7.5 Security Systems; Design, Monitoring and Responses, 7.6 Training and Procedures, 7.7 Workforce Integrity, 8 Central function (Multi-site), IT and Cyber Security Threat- Enhanced Option |
| 등급별 적용 표시 | FSR 2020 표 머리 "A B C" 열 | 각 요구사항 줄에 A·B·C 적용 표시 |
| 모든 장 의무(면제 제외) | FSR 2020 4.1 | "all sections of the Standard are mandatory unless an exception is granted through the official waiver process" |
| 도난 방지 보증 없음, 책임은 계약·법 | FSR 2020 4.4 | "TAPA provides no guarantee or assurance that all cargo theft events will be prevented… Any liability… will be for the account of the LSP/Applicant and/or the Buyer in accordance with the terms and conditions in their contract" |
| 화주에게 인증 증거 제공 | FSR 2020 5.1 | "LSP shall provide Buyer with evidence of FSR Certification" |
| 재하청 보관업체도 FSR | FSR 2020 5.2 | "Subcontractors of storage includes a contractual requirement that the subcontracting LSP/Applicant meets all noted FSR Standards." |
| 하청 관리가 가장 흔한 지적 | DQS FSR 2026 Guide | "Subcontractor management is historically the most common finding in FSR audits." |
| 퇴직자 자산·데이터 접근 회수(FSR 인력 신뢰성) | FSR 2020 7.7.5·7.7.6 | "Recover physical assets from terminated workforce to include company IDs, access badges, keys…"; "Terminate access for terminated workforce" |
| FSR 2020 수치(30일, 90일, 24시간) | FSR 2020 7.3/7.5/7.6 | "CCTV recordings stored for a minimum of 30 days where allowed by local law"; "90 days of AACS transaction records available"; "…to the Buyer within 24 hours. Obvious thefts reported immediately." (rk-warehouse와 같음) |
| TSR 영역 | Control Union TSR brochure (pdftotext) https://www.controlunion.com/wp-content/uploads/2024/09/Control-Union-TAPA-full-brochure-TSR.pdf; DNV https://www.dnv.com/services/tapa-tsr-trucking-security-requirements/ | "Security governance and management responsibilities"; "Risk assessments and route planning procedures"; "Driver vetting and background screening"; "Security awareness and driver training programmes"; "Real-time GPS tracking and tracing systems"; "Monitoring procedures and alarm response"; "Secure loading and unloading processes"; "Incident management and emergency protocols"; "Secure locking systems and trailer protection"; "Controls for hard-sided and soft-sided vehicles"; "optional enhanced controls, such as advanced monitoring, escort procedures, and additional IT and cybersecurity protections for high-risk shipments"; DNV: "route risk assessment", "incident response" |
| PSR 영역 | PSR Flyer 2025 | "Perimeter, Entry/Exit Points & Internal Parking Areas - Physical Security - CCTV - Lighting - Documented Procedures"; "Management Commitment", "Onsite Security Staffing", "Training", "Security Practice", "Workforce Integrity", "Driver Comfort Services & Facilities" |
| 고가 화주가 계약 조건으로 요구, 보험사도 동인 | DQS TAPA Explained | "large shippers and customers frequently make a defined TAPA level a contractual condition"; "Customers and cargo insurers are central drivers of TAPA adoption." |
| "인증서 다섯 가지 확인", "TAPA 준수라고 쓰지 않는다", 대안 합의 | (작성자 실무 권고) | FSR이 시설 단위(single site/multisite) 인증이라는 점과 FSR 5.1·5.2에서 끌어낸 권고 |

## 7절 새 점검 항목
| 사실 | 출처 | 근거 |
|---|---|---|
| MFA 선호, 침해 의심 시 비밀번호 즉시 변경 | CTPAT MSC 2021 4.8과 이행 지침 | "Passwords and/or passphrases must be changed as soon as possible if there is evidence of compromise or reasonable suspicion of a compromise exists."; "Processes that use more than one measure are preferred… two-factor authentication (2FA) or multi-factor authentication (MFA)" |
| 사회공학 예방 | CTPAT 4.2 | "Members must have policies and procedures to prevent attacks via social engineering." |
| 7.28 반입·반출 대조 | CTPAT 7.28 (Should) | "Arriving cargo should be reconciled against information on the cargo manifest." (문서에서는 AEO 4.5.3만 인용) |
| 도메인 확인, 확인자·승인자 분리, 송금 사기 시 은행·경찰 즉시 | (작성자 실무 권고) | 금감원 과거 안내(결제 정보 전화·팩스 확인, 지급정지 요청: 아이뉴스24 2013-12-04 보도)와 같은 취지. 신고 전화번호는 오래된 자료라 쓰지 않음 |

## 확인하지 못해 쓰지 않은 것
- 브리프의 "IIS(Incident Information Service)": 현재 TAPA 자료는 TIS(TAPA Intelligence System)라 부름. IIS는 확인하지 못해 쓰지 않음.
- tapa-global.org: DNS 조회 실패(ENOTFOUND).
- TAPA Americas 홈페이지 내용(빈 응답), Americas 판·통계.
- FSR·TSR 2026의 등급 구조 변경 여부, TSR 인증서 유효기간, TSR 차량 규모(대·중·소) 구분(DQS 다른 언어판 언급만 있어 뺌), TSR의 2인 운행·위치 보고 간격 같은 구체 요건(1차·공개 출처 없음).
- TAPA APAC 회원 수(홈페이지에 700곳과 1,000곳이 함께 나와 뺌), 한국에 TAPA 인증 시설·운송사가 몇 곳인지.
- TAPA EMEA 2025년 연간 합계(월별 보도만 있음).
- FBI IC3 2025 BEC 손실(약 30억 달러, 검색 요약)은 미국 전체 사이버 범죄 통계라 물류 문서와 거리가 멀어 넣지 않음.
- 금감원 원문 보도자료 URL(fss.or.kr에서 못 찾음).
