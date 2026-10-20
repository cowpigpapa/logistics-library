# Cargo Risk (rk-docs) changes

All six rk docs keep the repo's CRLF line endings. Tag balance checked, h3 numbering sequential, no "확인하지 못했습니다"-only sentences left.

## rk-docs/rk-truck.html: 44,158 → 30,872 bytes
- Intro: dropped the table-of-contents sentences; one sentence on what the doc covers.
- Disclaimer: about 1,000 chars → 2 sentences (check date 2026-10-19, fines may change, forwarder judges from invoice/packing list/photos and carrier/terminal records). Same-category link list dropped.
- 핵심 3줄 ③: "경로·일정 정보 관리" removed (that content is gone); now "밤샘주차는 법정 장소에서만, 인계 때 씰 번호 대조".
- Removed old §1 stage table (restated the TOC).
- Removed old §3 accident table and the driver paragraph (일상점검표, 2시간 연속 운전 뒤 15분 휴게, 운행기록장치, belt re-check habit). The highway breakdown paragraph (도로교통법 제66조·시행규칙 제40조 안전삼각대, 500m 신호, 도로공사 콜센터 1588-2504) was kept and moved under the accident section (now §4), after the table.
- Removed old §4 "대기·주차 중 도난이 생기는 상황" entirely (this also removes the TAPA "90% 이상" figure; see rk-security).
- Old §5 reduced to the overnight-parking legal paragraph (시행규칙 제21조 제3호·제4호), retitled "도난 대비: 밤샘주차 장소". Removed: 배차 메시지/단체 대화방 bullets, 기사 교체 bullet, seal/ISO 17712 bullet, "시동을 끄고 키를 가지고 가며", GPS/2인 운행 bullets.
- TAPA TSR paragraph replaced by one link line to rk-security 3~6절.
- IM9 link added to the handover section (it was only in the removed seal bullet).
- Role table (now §6): removed "2인 운행", "배차 정보는 필요한 사람에게만", "일상점검, 휴게 준수", "시동 끄고 키 소지, 관제", "랩핑·밴딩", "상차 대기 차량 구내 보관"; added the law refs for door closing (제12조 제1항 제6호) and overnight parking.
- Removed the 안전운임 paragraph at the end of old §9.
- Checklists (now §7): removed the 단체 대화방 item, 일상점검표 item, "첫 휴게와 급제동 뒤" item, 2시간/15분 rest, 시동·키 item, 랩핑·밴딩 item, 구내 대기 item. Kept door-closing (law) and overnight-parking (law) items.
- 설명할 때: 6 sentences → 3.
- Renumbered: 2→1, 5→2, 6→3, 7→4, 8→5, 9→6, 10→7.
- lib-source: dropped 화물자동차 운수사업법 제2조·제5조의11·제5조의12 (안전운임 only), 시행규칙 제22조 (일상점검·휴게 only), TAPA EMEA standards page, IUMI 2026, DNV TSR.

## rk-docs/rk-warehouse.html: 61,779 → 45,597 bytes
- Intro: TOC sentences shortened.
- Disclaimer: about 1,400 chars → 2 sentences. The FTC "창고 보관용 표준약관을 찾지 못했다" sentence and same-category links dropped (the point "liability limits come from each warehouse's contract" stays in §2 and the new disclaimer).
- 핵심 3줄 ②: rewritten because the cage/CCTV/열쇠/2인 list and weather items are gone; now "고가품 사전 신고 + 잠금 구역, 재고 보험은 실제 가액, 야적 품목 선별, 특수가연물·위험물 법정 기준".
- §3: removed the first list (잠금 구역, 출입 권한, 열쇠, CCTV 운영일 확인, 2인 확인). Removed the TAPA FSR h4, table and paragraph; replaced with one sentence linking rk-security 4~6절. The FSR 2020 table (HVC 6㎥, CCTV 30일·8fps, 출입 기록 90일, 경보 60일, 방문자 30일, 가짜 픽업 7.4.33, 24시간 보고) was MOVED into rk-security §5, not deleted. §3 retitled "고가화물 보관: 고가품 신고, CCTV 보존, 보험 가액".
- Removed the 노사협의회 sentences (근로자참여법 제4조·제20조). Kept 표준지침 제40조 and the "copy 대신 보존 요청" rule.
- §4: removed "야적에서 생기는 손해" table and the 기상청 강풍·호우 특보 threshold paragraph. Kept the 야적 품목 table, 산업안전보건기준 제391조~제393조, 특수가연물 (화재예방법 시행령 별표 2·3) and 위험물 (위험물안전관리법 제5조) rules. h4 renamed "쌓는 방법".
- Removed §5 "도난과 강탈" entirely (내부자 표, FSR 7.4.21~7.4.32 씰 단락, "저항하지 말고 112", WCO SAFE).
- Role table: warehouse cell trimmed to 잠금 구역·재고 실사·지체 없는 통지.
- Checklists: removed CCTV 운영일 확인, 2인 확인, 교대 인수인계, 휴무 시간 도크·지게차, 야적 특보 점검, 잠금 구역/열쇠 대장 (warehouse); 신분증 지참, 강탈 시 112 (carrier). Forwarder TAPA item now points to rk-security 6절.
- 설명할 때: about 10 sentences → 3.
- Renumbered: 6→5, 7→6, 8→7, 9→8, 10→9.
- lib-source: dropped 근로자참여법, 기상청 특보 기준, WCO SAFE, TAPA APAC 2026 notice, DQS, FTC 표준약관 목록. FSR 2020 kept (§5·§6 still cite it).

## rk-docs/rk-security.html: 60,155 → 46,807 bytes
- Intro: TOC sentence shortened (it named the removed §9·§10).
- Disclaimer: about 1,400 chars → 2 sentences (check date, TAPA text summarized not copied, forwarder judges from documents).
- §1: removed "한국 경찰청이나 손해보험협회가 공개한 화물 도난 통계는 이 문서에서 확인하지 못했습니다."
- §2: removed the ISO 28000:2022 and ISPS Code rows from the comparison table and the "ISO 28000:2022와 ISPS Code" h4 with both paragraphs. The concrete 국제항해선박 및 항만시설의 보안에 관한 법률 제33조 prohibitions were moved into the §7.E driver item.
- §3 CSS row: "공개 자료로 확인하지 못함" → "—".
- §4: "2026년판 등급 구조가 바뀌었는지 확인하지 못했다" → instruction to confirm with TAPA and the audit body before certification or contract.
- §5: the reference "구체 수치는 rk-warehouse 3절" replaced by the FSR 2020 table moved from rk-warehouse, with a note that the current edition governs.
- §7.C 인원·교육 removed; later h4 letters relettered D→C, E→D, F→E, G→F, H→G.
- §7.F (old G): removed the IT items (개인 계정·비밀번호·MFA·VPN, 악성코드·방화벽·백업, 접근 권한·메일 수신자 목록, generic AEO 4.5.3/CTPAT 7.6 item, 배차 메시지·종이 서식 item). Kept the e-mail change call-back check, the domain/approver split, the forwarder D/O instruction item, and the report-to-bank-and-police item; the 금융감독원 statistic in §1 and the intro of F are unchanged.
- CTPAT 6.2: "오른쪽 문 가장 가운데 잠금봉 아래쪽" → "오른쪽 문의 가장 안쪽 잠금봉(두 문이 맞닿는 쪽) 아래쪽", and the IM9 link added there. Source check: the cited MSC PDF (U.S. Importers, October 2021) reads "placed at the bottom of the center most vertical bar of the right container door" (alternative: "center most left-hand locking handle on the right container door"). "Center most" = the bar nearest the door seam, so "가장 안쪽" with the parenthesis matches the source; "가장 가운데" was ambiguous on a door with two bars.
- TAPA statistic: checked the source rk-security cites (TAPA EMEA PSR Flyer 2025, Control Union PDF): "Over 95% of all recorded cargo thefts involve attacks on trucks and 50% of these crimes occur when trucks stop in unsecured parking places." rk-security's "95% 넘게" kept. rk-truck's "90% 이상" was in its removed §4, so the conflict is gone.
- Cross-refs updated: rk-truck 5절 → 2절 (overnight parking), rk-warehouse 6절 → 5절 (가짜 픽업), rk-warehouse 3절 (FSR numbers / 잠금 구역) → "5절 표" in this doc. "rk-warehouse 3절의 계산 예시" kept (still §3).
- Removed §9 "회사 점검표를 만들고 고쳐 나가는 법" (with the fictional corrective-action example) and §10 role-evidence checklists.
- 설명할 때: 5 sentences → 3.
- lib-source: AEO 고시 제18조·제25조 dropped (only cited in removed §9 / §7.C); 국제선박항만보안법 제3조 and 시행령 제4조 dropped (제33조 kept); IMO ISPS Code page, ISO 28000 (Standard Norge) and ISO Certification dropped.

## rk-docs/rk-damage.html: 63,142 → 52,987 bytes
- Intro: last sentences (source list, "평상시와 악천후 때 역할별") shortened.
- Disclaimer: about 1,500 chars → 2 sentences, keeping the caveat that the "한 포워더의 기준(예)" numbers are an internal guide, not law. Same-category and related links in it dropped (a3-condensation, ch8-arrival, ins-claims, uld-buildup all still linked in the body).
- §5: the 8-row 평상시/악천후 role table, the "위 단" paragraph and the air bullets replaced by: one paragraph of concrete responsibility rules (CTU Code §4.2.1, §4.2.2~§4.2.4, §4.2.5; 상법 제795조 제1항, 제794조 제3호; who inspects vs. forwarder receives records), one paragraph on asking CY/warehouse to stack high-value cargo on the upper tier (kept as a non-generic rule), and the air BUP sheet rule (bottom 1 sheet, top 2, airline rules on transparent/flame-retardant sheet, don't cover ULD number, no wrapping of ventilated perishables). Dropped: canopy, weather-sharing, truck bed check and electronics-wrapping bullets (electronics wrapping stays in the shipper checklist). Retitled "5. 책임 분담과 항공 빌드업 비닐 보강".
- uld-buildup reference "10절·12절" → "9절·11절" (uld-buildup §9 removed by the ULD cleanup).
- Checklists: removed the 악천후 items (forwarder origin and destination, carrier/terminal, consignee), "빈 컨테이너 픽업 때 운송사 점검 결과", "CY 픽업 기사 외관 확인", "침수 우려 없는 곳에 둔다", two "충격 손상 기록" items, consignee "결과를 포워더에 보낸다".
- 설명할 때: 9 sentences → 3.

## rk-docs/rk-cross.html: 76,276 → 72,678 bytes
- Intro: last TOC sentence shortened.
- Disclaimer: about 2,300 chars → 2 sentences (check date, notices change so confirm with customs/관세사, 9절 cases and 5절 procedure are anonymized examples, forwarder judges from documents). Related-link list dropped; cu-documents, ch-lcl, bl-release, cu-bonded, uld-buildup remain linked in the body. cu-clearance was linked only in the disclaimer and is now unlinked from this doc.
- uld-buildup reference "8절·12절" → "8절·11절" (ULD 태그·라벨 moved to §11 after uld-buildup §9 was removed).
- Checklists: removed "분기별 재고조사" (CFS) and "인수증에 실제 개수와 이상" (carrier, restated).
- 설명할 때: two scripts (화주 7 sentences, 창고·운송사 4) → one 3-sentence shipper script; the warehouse script was dropped because its four-point release check is already in the CFS checklist.

## rk-docs/rk-special.html: 72,517 → 70,118 bytes
- Intro: TOC sentence shortened.
- Disclaimer: about 1,700 chars → 2 sentences (keeps the caveat that contract types, checks and survey format come from an anonymized forwarder guide and the §3 transformer case is reconstructed). "국내 상부 구조물 충돌 전국 공식 통계는 찾지 못했다" dropped. kr-road link moved into §2's first paragraph (it was only in the disclaimer).
- §8: "유도차량·경찰 호송 기준을 숫자로 정한 국내 공개 기준은 찾지 못했으므로" → "유도차량과 경찰 호송이 필요한지는 허가서의 조건과 관할 경찰서 협의 결과를 운송사에게 받아 확인합니다."
- Checklists: removed "운행 중 휴대전화" clause and the "정해진 속도 기준" item (driver).
- 설명할 때: 8 sentences → 3.

## Not cut (rk)
- rk-truck §1 (적재·고정) in full, including "누가 실었나" practice paragraph: decision-relevant.
- rk-warehouse §1 accident-type table: not in the approved list, and it supports the 2015다246186 paragraph after it. The audit item "2015다246186 원문 확인" was not part of this batch and was not checked.
- rk-warehouse 산업안전보건기준 제391조~제393조 paragraph: concrete law with numbers.
- rk-security §7.A/B/D (warehouse checklist items): each carries an AEO/CTPAT criterion number, and the doc's purpose is a cross-standard checklist. §2 mapping table row "인원" kept as a mapping of the standards' structure.
- rk-security §8 incident-reporting table and its 4 checklist items: concrete reporting duties.
- rk-cross and rk-special role checklists: almost every item is a concrete number/document/law; only the generic ones above were removed.

## Cross-doc references
- Fixed inside rk copies: rk-security → rk-truck (5→2절), rk-warehouse (6→5절, 3절 FSR refs → own 5절 표); rk-damage → uld-buildup (10·12 → 9·11절); rk-cross → uld-buildup (8·12 → 8·11절).
- Outside my files, still valid: dg-lithium → rk-damage 3절 (rk-damage not renumbered). 
- Still to do when applying: bump DOCS_VERSION in risk-library.js and the ?v= in risk-library.html. If risk-library.js has per-doc summaries mentioning TAPA in rk-truck/rk-warehouse, 도난·강탈, or 악천후 역할, update them.
