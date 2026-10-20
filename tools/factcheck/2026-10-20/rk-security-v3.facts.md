# rk-security v3: FACTS for the new section 7 (checked 2026-10-20)

Scope: only facts that are new in v3 (section 7, the summary ② addition, the disclaimer sentence, the 6절/8절 G/설명할 때 cross-references). Everything else is unchanged from the live doc and its earlier facts files (rk-security.facts.md, rk-security-v2.facts.md).

TAPA documents are copyrighted ("All rights reserved"). The page paraphrases them; direct quotes are under 25 words (three in total: "Everything can be subcontracted, except liability!", "pause, escalate, and verify rather than proceed and assume", "Always insist on clear, precise POD signatures"). Local text copies used for checking: scratchpad tapa/txt/c_*.txt (from translate/TAPA/originals/).

## A. Anonymized incident (owner's internal memo)
- Source: owner's anonymized memo (relayed by the caller). No company, customer, platform, country office or dates on the page. The page says "한국 포워더의 유럽 현지 조직", "유럽 내륙 도로 운송", "화물 중개 플랫폼". The Spanish tools appear only as "나라별 도구는 스페인을 예로 들었습니다" (see changes.md, owner decision 1).
- Facts used: platform booking; carrier used an inadequately verified sub-carrier; false "delivered" report; consignee notified non-delivery 5 days later; corrective actions (stronger carrier selection checks; give carriers TAPA's sub-carrier guide as a checklist for every new sub-carrier; photo POD with unloading place and background; GPS position at arrival compared with the consignee location).

## B. TAPA EMEA TSR Subcontracting Guidance (SCG) V1.0, 2026-04-01
URL: https://tapaemea.org/wp-content/uploads/2026/04/TAPA-EMEA-TSR-Subcontracting-Guidance_V1.pdf (HTTP 200, application/pdf, 2026-10-20)

| Page claim | Section | Supporting text (short quote or paraphrase) |
|---|---|---|
| Liability/TSR compliance stays with the certified carrier | 2 (principles 2, 5), 3.3 | "Always, the liability and responsibility for the transport remains with the certified LSP"; "Subcontractors' TSR compliance confirmation cannot be assigned to subcontractors." |
| Quote "Everything can be subcontracted, except liability!" | 8.5.3 | verbatim (6 words) |
| Only vehicles in the vehicle register and drivers on the trained-driver list, audited before subcontracting | 2 (principle 3), 3.1, 3.2 | "Both these requirements need to have been audited by the certified LSP's Authorized Auditor(s) before subcontracting." |
| One level only; no further subcontracting clause | 2 (principle 1), 8.3.5 | "Only one level of subcontracting is strongly recommended."; "No further subcontracting is allowed." |
| Non-certified: on-site audit before assignment | 4.1 | "Non-certified potential subcontractors should always be audited onsite before any subcontracted assignment." |
| Non-certified: customer's formal approval | 8.2 | "...TransSecure needs to agree with its customer and get a formal approval for this." |
| Route risk assessment/planning/secure parking prepared by certified carrier, or reviewed/approved if done by sub | 4.6, 8.5.5 | "Prepare for the subcontractor the route security risk assessment, the route planning, and the evaluation/selection of secure parking locations"; 8.5.5 answer D: subcontractor may do them, certified carrier "needs to review and approve them". |
| Immediate notification; detailed report within 24h | 5.1.1.1–5.1.1.2 | "Immediate notification of theft, loss, or security breach"; "Detailed incident reports within 24 hours" |
| Platforms not recommended; checks if used (certificate, email/phone, incident history, web page creation date) | 4.2 | "Using subcontracting platforms is not recommended, as several security incidents have been noticed, where fake carriers were listed as legitimate ones" |
| TIS check of TSR status | 4.1 | "verification of the current TAPA TSR certification status ... through the TAPA Intelligence System (TIS)" |
| Driver background check; training refreshed every 2 years | 3.1.1, 3.1.2 | "Training must be documented, tested, and refreshed every two years" |
| Insurance red flag: coverage below cargo value | 8.3.1 | "Reluctance to provide insurance certificates or coverage limits below cargo value" |
| Appendix I = topics in 9 areas (used only as the basis of the hand-out checklist, not copied) | 7 | Topic headings 1–9 (selection & vetting ... incident management) |

## C. TAPA EMEA TSR Fake Carriers Avoidance Guidance V1.0, 2026-09
URL: https://tapaemea.org/wp-content/uploads/2026/09/TAPA-EMEA-TSR-Fake-Carriers-Avoidance-Guidance-Document-V1.pdf (HTTP 200, application/pdf, 2026-10-20)

| Page claim | Section | Supporting text |
|---|---|---|
| Five schemes: double brokering, identity cloning, fictitious carriers, account takeover, business buyout | 2.1, 6 | Summary: "spanning double brokering, fictitious carriers, identity cloning, account takeover, and business buyout" |
| Identity cloning: copy name/address/VAT/licence, change only contacts and bank | 2.1 | "altering only the contact details -- email address, telephone number, and bank account information" |
| Re-verify at each booking and on a cycle | 2.1, 6 | "treat that verification as continuous -- repeated at each new booking and on a defined cycle" |
| Verify via authoritative registries, not carrier-supplied details | 3.1, 6 | "verify carrier identity against authoritative national and European registries rather than the contact details, websites, or documents supplied by the carrier" |
| Lookalike domains (rn/m, hyphens, ccTLD switch), free email | 3.1, examples 1–3 | "A generic mailbox does not prove that the sender represents the claimed company." |
| Bank account in different name/country | 3.1 | "Bank account details in a different country or name." |
| Low rates only significant with other signs; urgency; last-minute changes; informal channels; refusal of real-time tracking; booking spike | 3.2 | "Competitive pricing alone is not evidence of fraud, but it becomes significant when combined with other warning signs." |
| Collection signs: mismatched driver/vehicle, no CMR/licence/booking confirmation | 3.3 | "Any mismatch in driver identity, vehicle registration, or trailer type should prevent cargo release pending verification." |
| Plate check against past incidents (row "지침서 3.4") | 3.4 | "cross-checking tractor and trailer registration plates against internal and/or external incident records" |
| "pause, escalate, and verify" | 3 | "the default procedure should always be to pause, escalate, and verify rather than proceed and assume" (quoted, 9 words) |
| Platform value threshold | 2.2, 6 | "put a threshold on cargo value, over which use of platforms is not allowed" |
| Risk rises when tracking/POD not enforced (used in the case lesson; final text dropped the explicit cite to save space) | 2.3 | "Real-time tracking and proof-of-delivery requirements are not enforced." |
| Contract clauses incl. named carrier must physically perform | 5.1 | "mandate that the carrier named in the contract is the entity physically performing the transport" |
| Confirm insurance directly with insurer; limits, excluded commodities, lanes/modes; continuous | 5.2 | "verify coverage directly with the insurer or through an approved third-party monitoring service" |
| No second-tier subcontracting without manufacturer approval = most important safeguard | Annex A 1 | "This is the single most important safeguard against double brokering." |
| Minimum relationship 3 months (6 for high value) | Annex A 4 | "at least 3 months, extended to 6 months for high value goods" |
| Subcontractor list kept current, provided on request | Annex A 3 | paraphrase |

## D. TAPA TSR Telematics Systems Guidance (TSG) V2.0, 2024-03-01 (TSR 2023 basis)
URL: https://tapaemea.org/wp-content/uploads/2024/04/TAPA-TSR-Telematics-Systems-Guidance-V2-2024.pdf (HTTP 200)
- Levels are "TSR 2023 level 3/2/1" (section 5). TSR 3: "not less than one report every sixty (60) minutes"; TSR 2: "not less than one report every thirty minutes"; TSR 1: "the standard minimum reporting interval is one report every five minutes."
- Geofence may include delivery points (section 8 FAQ): "Geofenced areas may also include the delivery/collection point/parking locations".
- Page flags these as TSR 2023 figures that may differ in TSR 2026.

## E. TAPA EMEA Driver Security Guide V1.0, 2024-06-12
URL: https://tapaemea.org/wp-content/uploads/2024/06/TAPA-EMEA-Driver-Security-Guide-English.pdf (HTTP 200)
- "Drivers' Valuable Rules" no. 8: "Always insist on clear, precise POD signatures. Driver to check the ID of the person accepting the goods" (quoted part is 6 words).

## F. Spain: transport operator registry (REAT)
URL (owner's, verified, unchanged): https://apps.fomento.gob.es/crgt/servlet/ServletController?accion=inicio&modulo=datosconsulta (HTTP 200, 2026-10-20)
- Page title: "Consulta al Registro de Empresas y Actividades de Transporte", Ministerio de Transportes y Movilidad Sostenible.
- Provides: "información de los títulos habilitantes en vigor (autorizaciones para el ejercicio de la actividad, licencias comunitarias, competencia profesional, consejeros de seguridad y cualificación del conductor), así como de los vehículos inscritos".
- Search keys: "por nombre o NIF de empresa; nombre o NIF de gestor, consejero de seguridad o conductor profesional; o por matrícula de vehículo".
- So a plate can be checked against the carrier's registered vehicles (Spanish-registered only). A carrier licensed in another member state is not in REAT (implied by scope: Spanish registry under Ley 16/1987).

## G. Spain: commercial registry
- Owner's URL https://www.registradores.org works (HTTP 200) but it is the Colegio de Registradores' general portal. Company data is obtained through its electronic office.
- Corrected/specific URL used on the page: https://sede.registradores.org/ (redirects to /sede/sede-corpme-web/home/, HTTP 200). Menu "Mercantil" lists "Nota informativa mercantil", "Depósito de cuentas", "Certificaciones".
- registradores.org/el-colegio/registro-mercantil: "Cualquier persona puede acceder a la información mercantil interactiva en tiempo real que el Colegio de Registradores proporciona a través de su página web".
- Price not verified; the page does not state free or paid.

## H. ICANN Lookup
URL (owner's, verified): https://lookup.icann.org/en (HTTP 200; JavaScript app).
- ICANN blog (2019, 2021): the tool uses RDAP and can show the date a domain was registered. https://www.icann.org/en/blogs/details/domain-registration-data-advanced-lookup-functionality-now-available-2-8-2021-en
- Limitation added on the page: IANA RDAP bootstrap file (https://data.iana.org/rdap/dns.json, fetched 2026-10-20) has no entry for .es or .eu (it has .com, .pl, .fr, .nl, .kr). So .es/.eu lookups may return nothing; use that registry's WHOIS (.es: Red.es dominios.es offers port-43 WHOIS; .eu: EURid). Test: RDAP for google.com returned registration 1997-09-15 (shows creation date works for gTLDs).

## I. VIES
URL: https://ec.europa.eu/taxation_customs/vies/ (HTTP 200)
- Test queries 2026-10-20 via the VIES REST API (rest-api/ms/ES/vat/A28015865 and check-vat-number): ES number returned "isValid": true, "name": "---", "address": "---". With traderName "TELEFONICA SA" → "traderNameMatch": "VALID"; with an unrelated name → "INVALID". DE also returns "---"; PL returns name and address.
- Page wording: "VIES는 스페인 번호의 회사명을 보여 주지 않지만 회사명을 넣으면 일치 여부를 알려 줍니다(2026. 10. 20. 시험 조회)".

## J. EU national registers and ERRU
- Regulation (EC) No 1071/2009 Art. 16(2), last subparagraph (consolidated, German text read at https://gesetze.legal/eu/vo_eg_2009_1071/16): data in points (a)–(d) "öffentlich zugänglich" subject to data-protection rules. (a)–(d) = name and legal form; address; transport manager(s); type of authorisation, number of vehicles, Community licence serial number. Page cites EUR-Lex ELI https://eur-lex.europa.eu/eli/reg/2009/1071/oj (EUR-Lex returns HTTP 202 bot challenge to curl; ELI is the canonical address).
- ERRU = interconnection of national registers for competent authorities: Commission Implementing Regulation (EU) 2016/480 recital/summary: "the information contained in each national electronic register is made available to the competent national authorities of all Member States" (https://www.legislation.gov.uk/eur/2016/480/contents). Page: "ERRU는 감독기관 전용이라 민간은 면허를 준 나라의 등록부를 봅니다".

## K. Verification of Payee (EU)
- ECB, Instant Payments Regulation page (https://www.ecb.europa.eu/paym/integration/retail/instant_payments/html/instant_payments_regulation.en.html): VoP deadline euro area 9 October 2025 (non-euro 9 July 2027); "this applies to both standard and instant credit transfers"; "This service shall be offered free of charge to the payer." Legal basis Regulation (EU) 2024/886 (Art. 5c per PwC Legal, DZ Bank summaries).
- Page: "유로존 은행은 2025. 10. 9.부터 유로 이체 전 수취인 이름·계좌 일치 확인(Verification of Payee)을 무료 제공".

## L. Korea
- 국세청 사업자등록정보 진위확인 및 상태조회 서비스, 공공데이터포털 https://www.data.go.kr/data/15081808/openapi.do (provider 국세청; free): "(진위확인) 사업자등록번호, 개업일자, 대표자명 등의 정보를 입력하여 국세청의 사업자정보와 일치하는지 진위여부 확인 (상태조회) 사업자등록번호만으로 해당 번호의 사업자 운영상태(휴업, 폐업), 과세유형(일반, 과세, 면세), 폐업일자 정보 조회".
- 홈택스 사업자상태 조회: https://www.hometax.go.kr responds (HTTP 200); menu "사업자상태조회(사업자등록번호)" confirmed only by secondary guides (taxguide.im, tosspayments). Page names 홈택스 together with the data.go.kr API.
- 화물자동차 운송사업 허가 / 화물운송 종사자격: no nationwide public lookup found (searches 2026-10-20 found only regional permit lists on data.go.kr and no driver-qualification lookup). Page says this was not confirmed and tells readers to take copies of the permit/qualification and confirm 적재물배상책임보험 with the insurer.

## M. Items not used / dropped
- BORME (boe.es) for company acts: works, but left out to keep the doc size.
- Price of Nota informativa mercantil: not verified, not stated.
- A geofence radius figure: TAPA gives none; page says the radius is set from site size and position error.
- Trans.eu / TAPA freight exchange (site-notes 7-7): not used.
