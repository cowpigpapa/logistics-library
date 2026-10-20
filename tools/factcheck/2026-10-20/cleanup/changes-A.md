# Cleanup batch A: Cargo Risk, Insurance, Cold Chain, ULD (2026-10-20)

Edited copies are under clean1/<repo path>. Repo not edited. All copies pass a tag-balance check, h3 numbering is sequential, and no "확인하지 못했습니다"-only sentence is left (remaining 찾지 못 hits are instructions such as "DGR 책자에서 한도를 찾지 못할 수 있으니 항공사에 확인").

## Size summary (bytes)

| File | Before | After |
|---|---:|---:|
| rk-docs/rk-cross.html | 76276 | 72678 |
| rk-docs/rk-damage.html | 63142 | 52987 |
| rk-docs/rk-security.html | 60155 | 46807 |
| rk-docs/rk-special.html | 72517 | 70118 |
| rk-docs/rk-truck.html | 44158 | 30872 |
| rk-docs/rk-warehouse.html | 61779 | 45597 |
| insurance-docs/ins-basics.html | 46985 | 46895 |
| insurance-docs/ins-carrier-liability.html | 43561 | 43367 |
| insurance-docs/ins-cases.html | 58593 | 58533 |
| insurance-docs/ins-container-loss.html | 52381 | 41182 |
| insurance-docs/ins-forwarder.html | 33652 | 31684 |
| insurance-docs/ins-general-average.html | 71613 | 69094 |
| insurance-docs/ins-icc.html | 54152 | 54018 |
| insurance-docs/ins-uninsurable.html | 57506 | 53535 |
| tc-docs/tc-air-active.html | 72753 | 71847 |
| tc-docs/tc-air-passive.html | 63251 | 60925 |
| tc-docs/tc-basics.html | 61641 | 59371 |
| tc-docs/tc-cases.html | 70552 | 70787 |
| tc-docs/tc-reefer-practice.html | 77002 | 76927 |
| tc-docs/tc-reefer.html | 89779 | 88714 |
| uld-docs/uld-buildup.html | 63548 | 61517 |
| uld-docs/uld-code.html | 56125 | 55312 |
| uld-docs/uld-holds.html | 51464 | 49034 |
| uld-docs/uld-overview.html | 26509 | 26369 |
| uld-docs/uld-pallets.html | 34984 | 34505 |
| uld-docs/uld-safety.html | 45801 | 44890 |

## To do when applying
- Bump DOCS_VERSION and ?v= for risk-library.js, insurance-library.js, tc-library.js, uld-library.js.
- risk-library.js summaries that now overstate content: rk-truck ("정차·밤샘주차 중 도난을 줄이는 방법" → "밤샘주차 법정 장소"), rk-warehouse ("고가화물 잠금 구역·CCTV·재고 관리" → "고가품 신고·CCTV 보존·보험 가액"; title "도난 예방"), rk-damage ("악천후 침수" still fine, role-by-weather wording ok), rk-security ("인원" in the checklist list → remove; "역할별" still fine).
- tc-library.js summaries: tc-basics still mentions "CEIV Pharma와 인천공항 커뮤니티 인증" (suggest "CEIV Pharma 인증의 의미"); tc-air-passive starts with "EPS·PUR·VIP 단열재와…" (suggest "단열 박스 구조와…").
- uld-holds §8 was removed (audit stage-1 item, not in the brief); /images/uld/loading.webp is now unused there.
- translate/ copies of edited docs were not touched.

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

# Cleanup changes: insurance group (A)

Copies in SP/clean1/insurance-docs/. ins-claims.html was not changed, so it has no copy.
No section was renumbered except ins-forwarder (§7 → §6). No web fact-checks were needed: no facts were added, only removed or condensed. One claim was neutralized (FBL, see ins-carrier-liability).

## insurance-docs/ins-container-loss.html: 52,381 → 41,182 bytes
- §1: kept the WSC intro and the full yearly loss table. Replaced the TopTier five-factor list, the 44-accident analysis, the stack-test figures, the 1,500-person survey, and the separate "파라메트릭 롤링이란" h4 (240m ship model test) with one paragraph: WSC 2025 causes, the TopTier conclusion (parametric rolling plus wrong weights, wrong positions and lashing condition), a one-sentence definition of parametric rolling, and the existing pointer to §3. Source line unchanged, since every source is still cited.
- §2: removed the ONE APUS / MAERSK ESSEN comparison table (times, routes, roll angles, ports of refuge). Kept one paragraph with the loss and damage counts and the two practical points: (1) first loss counts change (215 → 732 → 689), which §5 still refers to; (2) DMAIB found the trigger was within normal operating conditions, which §6 still refers to. Source line unchanged.
- §4: replaced the reporting table, the MARPOL/MEPC/CCC circular paragraph, the UK MCA re-regulation note and the "WSC will keep publishing" sentence with two sentences. They keep: the 2026-01-01 entry into force (MSC.550(108)); who reports what to whom (master → nearby ships, nearest coastal state, flag state; position, number lost, DG with UN number; flag state → IMO); and why the shipper's DG documents matter. Dropped "CCC 12/12/1 29~31항" from the §4 source line, because it was cited only for the WSC continuation sentence. Kept HK MSIN, MIN 728 and LR.
- §6 운임 bullet: removed "이 문서에서는 두 규정이 부딪칠 때의 판단을 확인하지 못했습니다."
- §8: retitled "공동해손, 그리고 매매계약상 위험". The GA, salvage and recovery content became one paragraph: single average vs GA, ICC clause 2 covers GA and salvage, and a link to `<a data-doc="ins-general-average">공동해손과 구조</a> 3절`. Removed the WK Webster ONE APUS/ESSEN note, the security and LCL details, Maersk 24.1 YAR 1994, and the "회수" h4 (128 recovered is still in the §1 table; 상법 681 is still in §7; 893 salvage lien is covered by ins-general-average §6). Kept the 매매계약상 위험 h4 (Incoterms risk transfer, CIF needs (C) at minimum and CIP needs (A)), condensed, because it is concrete and §5's table points to "8절". Source line reduced to 상법 865 and ICC clause 2.
- §9: removed the role summary table, which repeated the checklists. Removed these items: 화주 "적입 작업자에게 지시" (generic); 포워더 "직접 판정·약속하지 않는다" (generic); 보험 담당 "110% 확인" (generic, covered in ins-basics); 창고 "무거운 화물 바닥·중앙" and "더니지·에어백" (other people's stowage rules, covered by the linked CTU docs). Merged the two VGM items into one.
- §10: cut the script to 3 sentences (first list not final plus notify today; carrier defences and limits so cargo insurance is the main recovery; (A)/(B)/(C) difference). Source line reduced to 상법, ICC (B) and 2015다5194, since the WSC and VGM notice are no longer used by the script.
- Not cut: §3 VGM notice table and Australian VGM survey figures (concrete numbers, the shipper's preventive role); §5 first-days table; §6 limit calculation; §7 ICC table and 2015다5194.

## insurance-docs/ins-uninsurable.html: 57,506 → 53,535 bytes
- §5 생동물: removed the New Zealand Vero Marine livestock policy bullet list (a single foreign insurer's domestic policy) and the AXA XL US$1m product sheet. Kept one paragraph: mortality is mostly inherent, so special enumerated-peril terms or refusal; mortality insurance market; 상법 제799조 제2항 (live animals are outside the 제1항 ban on liability-reducing clauses); IATA LAR. Removed the Vero and AXA XL sources.
- §6 귀중품: removed the 3-row table, including the generic "고가 전자제품·명품" row and Arch's target-market statement (a single foreign insurer's marketing document). Kept specie / 고급재화보험 and fine-art insurance, the Chubb Korea definition, the advice not to promise general cargo cover, and the declared-value point. Removed the Arch source.
- §7 위험물: condensed three bullets plus the forwarder paragraph into one paragraph that keeps ICC (A) 4.3 (packing includes container stowage), 상법 제801조 (master may land, destroy or render harmless, with no carrier liability except GA contribution), and the point that third-party liability falls outside cargo insurance. Dropped the generic forwarder sentence; the SDS-vs-booking check is still in the §12 checklist.
- "확인하지 못했습니다" sentences: §2 removed "이 해석을 직접 다룬 영국 판결은 확인하지 못했습니다" (the diagram caption already says "해설서의 일반적 해석"). §2 의약품: "이 문서에서 확인한 범위에서는 … 찾지 못했고" folded into "협회 표준 약관이 없고, 보험사나 중개사가 만든 전용 문구로 담보합니다". §4: the on-deck container wording sentence was rephrased as "…갑판 적재 조항 문구로 정해지므로 보험사에 확인하십시오". §9: removed the JWC-list-linkage sentence (the next paragraph already says to confirm war cover and premium with the insurer).
- §1 table: no rows removed, because every subsection still exists in shortened form.
- §12: merged the two temperature items (reefer clause plus written set-point instructions) into one. The other items are concrete and were kept.
- Not cut: §2 temperature-controlled cargo (clause numbers, CL422/423/430, 24h breakdown, 5-day period, NH농협 translation mismatch, P&I statistics); §3, §4 and §8–§11 (concrete clauses and cases).

## insurance-docs/ins-forwarder.html: 33,652 → 31,684 bytes
- Removed §6 "화주에게 말할 때: 쓸 표현과 피할 표현" entirely. §7 "포워더가 점검할 것" renumbered to §6. Nothing referenced §6 or §7 from other docs.
- The ins-claims and ins-uninsurable link sentence was moved into the lib-disclaimer's related-docs sentence, where the other related docs are already listed.
- Disclaimer: "금융위원회·금융감독원의 공식 해석을 찾지 못했습니다" plus the following advice sentence were merged into one instruction: to confirm through a 금융위원회 법령해석 query or expert advice whether the open-cover structure counts as 모집 under 보험업법. This unknown matters to a decision, so it was rephrased rather than dropped.
- §5 table cell "<b>공식 해석을 찾지 못함.</b>" became "<b>모집 해당 여부는 금융위원회 법령해석으로 확인해야 함.</b>".
- §6 checklist: unchanged. All items are concrete (등록 요건 1억 원, E&O, 보험대리점 등록, 3년 신고).

## insurance-docs/ins-general-average.html: 71,613 → 69,094 bytes
- Disclaimer: removed 'and unconfirmed items are marked "확인하지 못함"'.
- §3: removed the ONE APUS "이 문서 작성 시점에 … 찾지 못했습니다" sentence. Rephrased the MAERSK ESSEN tail as "두 사고 모두 이후 선언 보도가 없었으므로, 피난항에 들어갔다고 해서 늘 선언되는 것은 아닙니다". This keeps the decision-relevant point that lib-summary ① relies on.
- §7 table: removed the 7 rows whose rate column was only "확인하지 못함" (Ever Given, X-Press Pearl, ZIM KINGSTON, Ever Forward, Maersk Frankfurt, YM Mobility, ONE Henry Hudson) and the "비교: ONE APUS…" row ("선언 보도를 찾지 못함"). Their concrete facts became one paragraph under the table: each casualty with date, place and what happened, that GA was declared, the adjusters (ZIM KINGSTON: Albatross Adjusters; the other five: Richards Hogg Lindley), "담보 비율은 정산인 안내문으로 확인하십시오", and the warning about secondary sources copying the Maersk Honam ratio to Ever Given. Dali row: removed "이후 비율은 신뢰할 만한 출처로 확인하지 못함". All sources are still cited.
- 사례 4 tail: removed the Red Sea / Houthi "확인한 사례는 찾지 못했습니다" sentence. Kept "희망봉 우회 할증·지연은 공동해손과 다른 문제".
- §8: removed these items: 화주 "모든 연락에 선박명…" (generic); 포워더 "적하보험 가입 여부를 묻고" (restates), "직접 판정·약속하지 않는다" (generic), "보험을 직접 판매·모집하지 않는다" (restates ins-forwarder). Kept every item with a document, form, deadline or rule (Average Bond, ISU1, LCL breakdown, COD, YAR version, 제23조 time bar).
- §9: cut the script to 3 sentences (why security is needed even with no damage; insured vs uninsured with the 54% and 60.5% examples; LCL breakdown). The source line was left as is.
- Not cut: 사례 1–4 (calculations, adjuster instructions, UKSC judgment); the §3 GA/not-GA table.

## insurance-docs/ins-basics.html: 46,985 → 46,895 bytes
- §3: removed "보험사별 보험금액 인수 상한은 공개 자료로 확인하지 못했습니다."
- §9 checklist kept as is. Every item carries a concrete rule (Incoterms, 110%, UCP 600 dates, 60/30 days, 보험업법 제83조).

## insurance-docs/ins-carrier-liability.html: 43,561 → 43,367 bytes
- §4: removed "2024년 개정 이후 판이 있는지는 이 문서에서 확인하지 못했습니다." The next sentence already tells the reader to check the booking's conditions version.
- §5 FBL: "1992년 판 이후 개정된 FBL 약관은 찾지 못했으므로…" became "FBL 약관은 판에 따라 내용이 다를 수 있으므로 실제 서류 뒷면의 약관 판을 확인하십시오." This also avoids asserting that no newer FBL exists.
- §5 국내 육상: "그 내용은 이 문서에서 다루지 않았습니다" became "운송사와의 계약서를 확인하십시오."
- §9: removed the item "운송인 배상만으로는 … 알렸는지(포워더가 보험을 직접 모집하지 않음)", which restated the body. The other five items are concrete (포장 수, 26 SDR, 종가 운임, 기한 link).
- No renumbering, so the 6절 and 8절 references from bl-multimodal, rk-damage and ins-claims stay valid.

## insurance-docs/ins-cases.html: 58,593 → 58,533 bytes
- 참고 사례 (Swedish Club): "…이므로, 책임 배분과 배상액은 공개되지 않았습니다" became "이 자료는 판결이 아닌 P&I 클럽의 사고 사례입니다."
- §6 checklist kept. Every item is tied to a numbered case.

## insurance-docs/ins-icc.html: 54,152 → 54,018 bytes
- §10: removed "한국 법원이 2015년 보험법을 적용한 사례는 이 문서에서 확인하지 못했습니다."
- §11: removed the last item (the forwarder only supplies documents; generic, restates ins-forwarder). The other items are concrete clause checks.

## insurance-docs/ins-claims.html: unchanged (no copy)
- No "확인하지 못했습니다" sentences and no "설명할 때" section. The §8 checklist items are all concrete (통지 기한, EIR, 공동검정, 1년/2년/9개월, 하청 통지). Its §3 and §5, which other docs reference, are untouched.

## Cross-doc references to fix
- None required. The only renumbering is ins-forwarder §7 → §6, and no file outside library/ and translate/ references ins-forwarder 6절 or 7절. External references still valid: bl-multimodal → ins-forwarder 2절, ins-claims 3절, ins-carrier-liability 6절; rk-damage → ins-carrier-liability 8절; rk-truck → ins-claims 5절; ins-claims → ins-carrier-liability 8절; ins-container-loss → ins-general-average 3절.
- Caller to-dos outside this group: bump DOCS_VERSION in insurance-library.js and the ?v= in the HTML (STYLE §6). Check translate/ copies of these 8 docs if translations are kept in sync.
- Not done here (audit 2단계, other groups' scope): consolidating the "포워더가 운송인이 되는 경우" passages (ins-carrier-liability §8, ins-forwarder §2 and others) into ins-forwarder §2.

# Changes A: coldchain (tc-docs, 6 docs)

Copies in SP/clean1/tc-docs/. All six files changed. Line endings kept LF like the repo originals. HTML tag balance checked with a parser (0 errors in all six). No "설명할 때" section exists in any tc doc. New sentences use "~합니다" and contain no em dash (the only new "—" are in lib-source lines, following the existing source style).

## tc-docs/tc-air-active.html — 72,753 → 71,847 bytes

- "확인하지 못함" table cells (6): §2 RKN table AirTainer 작동 외기 → "-", AirTainer/Opticooler/HB TempCon RKN 배터리 → "미공개"; §2 RAP table HB TempCon 팔레트 → "-"; §3 table Lufthansa 지상 점검·운영 → "-". The rows themselves have real data, so they stay.
- §3: dropped "Envirotainer와 CSafe가 공식적으로 밝힌 승인 항공사 수는 확인하지 못했습니다." "내로바디 기종은 확인한 제조사 목록에 없었습니다" is now an instruction: no narrowbody types in the manufacturer lists, so ask the airline before booking a narrowbody flight.
- §4: "예약 마감·리드타임·충전 요금은 공개 페이지에 나와 있지 않았습니다" is now a plain instruction: ask the airline about cut-off and terminal charging fees, ask the manufacturer about order lead time.
- §5 (kept because it bears on a DG decision): "E-Tech·AirTainer·Opticooler·HB TempCon 배터리 종류는 확인하지 못했습니다" is now an instruction to get the battery type from the manufacturer before signing the lease if a DG judgement is needed. "본체 배터리 DG 신고 여부에 관한 공개 문서는 찾지 못했습니다" is now an instruction to confirm with the manufacturer and airline at booking. In the A199 sentence, "IATA 공개 자료에 나와 있지 않습니다" now says IATA has not set this out separately (the follow-on instruction to use manufacturer and airline wording is unchanged).
- §7: the passive link sentence now reads "냉매와 검증 유지 시간" (단열재 removed, because the insulation section is gone from tc-air-passive).
- §8 포워더 체크리스트 (예약 전): removed 4 items that only restated the body: written temperature, pallet and time instructions (§4 step 1), shipper pre-conditioning and battery record (§4 step 5 and §6), airline model and aircraft check (§3 and summary ③), freight weight and lease cost in the quote (§4 step 2). Also removed the generic "도착 공항 수령·반출 일정을 미리 잡아 오래 대기하지 않게" item.
- Not cut: the RAP 4,625/6,033kg item (concrete number), the aviation security law item (항공보안법 제17조의4 제3항), the 환적/충전, terminal acceptance, logger retrieval, POD and waybill-wording items, and the whole "인계 지점마다 남길 기록" list (the owner's anonymized guide, written as records made by the packer, driver or handler that the forwarder receives).

## tc-docs/tc-air-passive.html — 63,251 → 60,925 bytes

- Removed §2 "단열재: EPS, PUR, VIP" (thermal-conductivity table and the VIP paragraph). Replaced it with one sentence at the end of §1: EPS < PUR < VIP in insulation at equal thickness; VIP loses performance if punctured; pass any damage receipt record for a reusable VIP container to the shipper and the container provider. This keeps the one forwarder action the section had.
- lib-source: the BASF Neopor and ACERMI PUR sources are dropped (only the removed table used them). The va-Q-tec VIP source moved to the §1 source line because the new sentence relies on it. The va-Q-vip datasheet link is dropped.
- Renumbered §3–§9 to §2–§8 (no in-doc number references existed).
- §5 (old §6) Pegasus ULD row: three "확인하지 못함" cells → "복합소재 외피" / "-" / "-" (the row keeps its AKP, FAA·EASA and telemetry data).
- §8 checklist: "24시간 비상 연락처 기재" appeared twice (shipper list and waybill list). Merged into the shipper item as "(운송장에도 기재)".
- Not cut: the "DGR 책자에서 한도를 찾지 못할 수 있으니 예약 때 항공사에 직접 확인" sentence (already a decision-relevant instruction). Every other checklist item was kept because it names a concrete document, code (PIL/PIP, KE-01, KE-09) or AWB field.

## tc-docs/tc-basics.html — 61,641 → 59,371 bytes

- Removed §5 "CEIV Pharma와 인천공항": IATA certification procedure details, the 562-company count, and the Incheon airport community certification, re-certification and pharma tonnage promotion. Added one sentence at the end of §4: CEIV Pharma is an IATA certification of an organisation's management system, not a guarantee for a shipment; check it in IATA One Source and confirm shipment conditions at booking. The CEIV Pharma (IATA) source was added to the §4 source line. The IATA press release, IATA Airlines magazine and airport.kr sources were dropped (only §5 used them).
- Renumbered §6–§8 to §5–§7.
- §1: "SHC 온도 범위는 IATA 공개 자료에서 확인하지 못해 항공사 공지로 적었습니다" now says the ranges can differ by airline, are shown as airline examples, and the booking airline's notice governs. Table cell "전용 코드 확인하지 못함. 숫자 범위로 예약" → "숫자 범위로 예약(전용 코드는 항공사에 확인)".
- Final paragraph: "항공 패시브 포장 8장" → "7장" (tc-air-active 8장 is unchanged).
- Not cut: §7 (old §8) "예약 전에 화주에게 받을 것". Every item is a concrete document or number (temperature range, dry-ice net weight, quality agreement, customs documents, and so on).

## tc-docs/tc-cases.html — 70,552 → 70,787 bytes

- Fact fix, 사례 4 Bayer v British Airways. Old text: "kg당 20달러 한도가 적용돼 배상액은 6,110달러였고, 통관업자는 따로 1,000달러로 합의". Checked against the 4th Circuit's own published opinion (No. 99-1408, decided 2000-04-17, https://www.ca4.uscourts.gov/Opinions/Published/991408.P.pdf; FindLaw is behind a Cloudflare challenge). The opinion says the district court "granted Bayer a recovery of only $6,110 -- $20 per kilogram minus the $1,000 Airschott had already paid Bayer". So 6,110 is the correct award, and the missing step is the deduction: 355.5kg × USD 20 = USD 7,110, minus the USD 1,000 settlement from the customs broker (Airschott) = USD 6,110. The new text says exactly that. The 4th Circuit PDF link was added to the case's lib-source line next to FindLaw. (The opinion does not state the 355.5kg weight itself, but 7,110 ÷ 20 = 355.5 matches the doc. The opinion says "packed in wet ice"; the doc's "아이스팩" follows the owner's 2026-10-17 STYLE decision, so it was left as is.)
- §4 intro: "항공 패시브 포장 8장" → "7장".
- Checked: "tc-basics 4장" (사례 B, TTS label rules) still points to §4 IATA TCR과 Time and Temperature Sensitive 라벨, which was not renumbered.
- Not cut: §6 사례에서 뽑은 포워더 체크리스트. Every item is tied to a case number and a concrete document action, as instructed.

## tc-docs/tc-reefer.html — 89,779 → 88,714 bytes

- §6 current carrier fees removed: "Maersk 2026년 5월 24일 이후 미국 수출 CY 리퍼 출발지 젠셋 사용료 USD 50", "덴마크 젠셋 서비스 요금 DKK 1,295". Kept the mechanism. The carrier charges separately. Maersk publishes a per-container origin genset usage fee for US-export CY reefers and a separate genset service fee in Denmark. Amounts and effective dates are set by country or lane and change, so check the booking carrier's current notice when quoting. Both Maersk notice sources stay, since they support the mechanism.
- §6: "연료 한 번으로 몇 시간을 가는지는 … 확인하지 못했습니다" → "연료 한 번으로 가는 시간은 냉동기 부하와 외기 온도에 따라 달라집니다."
- §2 table: ONE "공개 사양에 없음" ×2 → "-". §8 table: CMA CGM "공개 페이지에서 갱신 주기는 확인하지 못함" → "-".
- §8: dropped the HMM sentence ("공개 페이지가 열리지 않아 서비스 내용은 확인하지 못했습니다") and the HMM e-service item on the §8 source line. The same HMM URL is still cited in §3 for Ultra Freezer.
- §9 "포워더가 이 구조에서 가져갈 것": removed 4 of 6 items that restated the body (set point as one number with sign and unit, from §4; -10℃ mode check, from §4; special equipment range, from §3; controller download request, from §8). Kept: the ventilation in ㎥/h or CLOSED item with the "냉동 화물에 환기 숫자·제습이면 되묻기" check, and the genset payer item. Section numbering unchanged, so "tc-reefer 8장" in tc-reefer-practice §8 still points to 선사의 원격 모니터링.

## tc-docs/tc-reefer-practice.html — 77,002 → 76,927 bytes

- Checked for current carrier fee figures: none (the disclaimer only says 전원·젠셋 요금 differ by carrier, which is mechanism only).
- §10 단계별 포워더 체크리스트: removed one generic item, "반출 일정을 미리 잡아 터미널 대기를 줄였다" (restates §7). Rewrote "운영 예: CY 반입 뒤 선사에서 장치 위치를 받아 전원 연결 상태를 확인했다" as "…장치 위치와 전원 연결 상태를 회신받았다", so the forwarder receives the carrier or terminal record instead of checking on site.
- Not cut: every other §10 item (concrete documents, deadlines, 상법 제804조, PTI 2 days before pickup, and so on), as instructed.

## Cross-doc references to fix

Inside my group (already fixed in my copies):
- tc-docs/tc-basics.html final paragraph: `<a data-doc="tc-air-passive">항공 패시브 포장</a> 8장` → 7장
- tc-docs/tc-cases.html §4 intro: `<a data-doc="tc-air-passive">항공 패시브 포장</a> 8장` → 7장
- tc-docs/tc-cases.html 사례 B: `tc-basics … 4장`, checked, unchanged and still correct
- tc-docs/tc-reefer-practice.html §8: `tc-reefer … 8장`, unchanged (tc-reefer not renumbered)

Other categories: a repo-wide grep (excluding library/ and translate/) for any tc-* doc link followed by a 장/절 number found no references outside tc-docs.

Not section references, but stale metadata for the caller (outside my file list, not edited; bump DOCS_VERSION and ?v= per STYLE §6 when editing):
- tc-library.js tc-basics summary still says "CEIV Pharma와 인천공항 커뮤니티 인증". Suggest "CEIV Pharma 인증의 의미". The title "… IATA TCR과 CEIV" is still accurate (one line remains).
- tc-library.js tc-air-passive summary starts "EPS·PUR·VIP 단열재와 젤팩·PCM·드라이아이스 냉매의 차이". Suggest "단열 박스 구조와 젤팩·PCM·드라이아이스 냉매의 차이". The title "단열재·냉매" can stay or become "단열 박스·냉매".
- library-index-data.js, search/*.json, index.html and 404.html carry the same titles and summaries; they are build outputs regenerated by the build.

# Changes A: uld (Air ULD, 6 docs)

Copies in SP/clean1/uld-docs/. All 6 pass an HTML tag-balance check (no unclosed or stray tags). No "확인하지 못/찾지 못" left in any ULD doc. None of the ULD docs has a "설명할 때" section. Not done here: `uld-library.js` DOCS_VERSION bump and the `?v=` bump (STYLE.md 6), because the repo is not edited in this pass.

## uld-docs/uld-buildup.html: 63,548 → 61,517 bytes
- Removed §9 "인천공항에서는" in full: the terminal list, the "국적 항공사 BUP 조건 공개 자료를 확인하지 못했습니다" paragraph, and its lib-source line (인천국제공항공사, Swissport; nothing else cited them). The paragraph's one usable action (ask the airline or GSA and the terminal about ULD pickup and return, fees, 지체료, cutoff, documents) went into the 부킹 단계 checklist item. That item now carries the doc's first "지체료(ULD demurrage)" (STYLE.md 2026-10-15).
- Renumbered h3 §10–§14 → §9–§13 (빌드업 원칙 9, 무게와 균형 10, ULD 태그·라벨·BUP 서류 11, 항공사별 BUP 기준 비교 12, 포워더 체크리스트 13).
- In-doc refs: §6 "빌드업 방법은 10절에서" → "9절에서". "3~6절" and "8절 표" did not change.
- Removed "unconfirmed" clauses:
  - §3: "777·787·A330·A350 로어덱 팔레트 컨투어의 세부 치수는 이 문서에서 확인하지 못했으므로 …" → "… 로어덱 팔레트는 운항 항공사의 지정 컨투어를 확인하십시오."
  - §4: "깎인 부분의 치수는 이 문서에 나오지 않습니다." deleted.
  - §4: the Emirates Q7 "차이가 나는 이유는 확인하지 못했습니다" → "앞의 두 항공사 값과 다릅니다."
  - §5: "Q 표기 자체가 IATA 표준인지는 1차 자료로 확인하지 못했습니다" deleted.
  - §10 (old §11): the weight-tolerance sentence → "허용 차이는 항공사마다 다르므로 해당 항공사에 확인하십시오." (kept because it matters to a decision).
  - §11 (old §12): "IATA 표준 양식의 원문은 확인하지 못했습니다" deleted.
- §13 checklist:
  - ULD 수령과 점검: 6 items → 4. Pallet base and rail items merged into one; net TSO and net damage items merged into one. No check was dropped.
  - 빌드업 중: dropped the generic "무게중심이 한쪽으로 쏠리지 않았다" (the concrete CG table stays in §9).
  - The 견적, 부킹 and 인도 전후 items are all concrete and stay.
- Not cut: the §12 Cargolux "400kg/m²" cell. It matches the source (fact check below).

## uld-docs/uld-pallets.html: 34,984 → 34,505 bytes
- MGW table footnote: dropped "별표의 뜻은 이 문서에서 확인하지 못했습니다" and the guess "BUP용 한도로 보입니다". New text: "* AirBridgeCargo의 BUP(포워더 빌드업) 지침 표에 적힌 메인덱 값으로, 다른 항공사의 메인덱 값보다 낮습니다. BUP를 맡길 때는 해당 항공사에 메인덱 한도를 확인하십시오." The source PDF has "Main deck*" in Table 5.1A with no footnote that explains the asterisk; the only other asterisk in 4.1 belongs to the 5,000 kg-per-piece rule.
- "왜 두 가지가 함께 쓰이나": dropped the "역사적 경위는 … 확인하지 못했습니다" sentence. The lead-in is now "두 폭이 함께 쓰이는 이유는 기종별 탑재 자료에서 드러납니다."
- 바닥 하중: dropped "PAG·PMC 바닥판의 공통 한계값은 이 문서에서 확인하지 못했습니다".
- Final checklist "팔레트를 고를 때 확인할 것": dropped the net TSO/유효기간 item and the 레일 50 mm item. Both are build-up steps, not pallet selection, and both are repeated word for word in the uld-buildup checklist, which the closing line links to.
- Fact check: no change. Cargolux 400kg/m² (≈82 lb/ft²) and AirBridgeCargo 1,952kg/m² (≈400 lb/ft²) both match their sources. The comparison sentence ("Cargolux의 400kg/m²는 항공기 바닥 한계가 아니라 포워더 빌드업을 받는 조건이고, AirBridgeCargo의 1,952kg/m²는 … B747F 기준") is therefore correct and stays.

### Fact check: Cargolux floor-load figure
- Source downloaded to its own folder SP/dl-cargolux-uld and extracted with pdftotext:
  - https://www.cargolux.com/media/mcsboozs/shipper-built-units-guidelines.pdf ("Shipper-Built Units Guidelines", Ground Standards & Procedures V 2.0, 25 OCT 2025)
  - the older https://www.cargolux.com/media/ki4fc0al/shipper-built-units-guidelines.pdf
- Quote (identical in both versions), section "Heavy cargo": "1. Unless otherwise agreed with the local Cargolux Office, Cargolux will not accept Heavy Cargo in BUP/SMU if the weight per available footprint exceeds 400kg/m2 (Main Deck and Lower Deck ULDs). 2. During unitization, the minimum requirements as shown in ULDR Section 6, OS6/01, paragraph 6 "Shoring" must be followed."
- Result: the source itself prints kg/m², so this is not a misreading of lb/ft². uld-pallets' conversion (400kg/m² ≈ 82 lb/ft²) is arithmetically right (400 × 2.20462 / 10.7639 = 81.9).
- Cross-check, AirBridgeCargo "Operational Guidelines for BUP and SMU Shipments" (06.02.2020), 4.1 footnote, downloaded to SP/dl-abc-uld: "Maximum Linear load (weight divided by length) cannot be more than 1519 kg/m. Maximum area load (weight divided by square meter) cannot be more than 1952 kg/m2. Each piece more than 500 kg must be checked according to above limits." The two airlines' figures really do differ by unit basis and purpose. Neither doc needed a change.

## uld-docs/uld-safety.html: 45,801 → 44,890 bytes
- §3 "특수화물과 ULD": removed only the h4 "고가화물·외교행낭". Its content was a VAL/DIP code mention plus "업계 공통 기준을 확인하지 못했습니다", and its own lib-source line (SAS Cargo) went with it; SAS Cargo is still cited in the 무거운 화물 h4.
  - Kept the rest of §3. It holds concrete rules: FAA AC 120-85B special-cargo definitions, the TRC 98 in definition, shoring weight in gross weight, the vehicle/engine data to give the airline, the live-animal stall rule, active ULD, and 항공보안법 제15조·제17조의4.
  - No h3 removed, so no renumbering.
- §2 intro: "ULD 손상 자체가 원인으로 결론 난 사고는 이 문서에서 찾지 못했고, …" → "실린 사례는 ULD 손상 자체가 아니라 고정 방법, 적재 위치, 신고·기록된 중량의 오류에 관한 것입니다." This keeps the scope note.
- §3 항공 보안: "고시가 정한 구체적인 봉인·보호 방법은 확인하지 못했습니다" → "구체적인 봉인·보호 방법은 항공화물보안기준과 항공사 절차를 확인하십시오." Kept because it matters to the decision.
- §5 checklist: 12 items → 10.
  - Merged "바닥 하중·쇼어링 확인" into the heavy/long cargo pre-consultation item.
  - Dropped the generic "협의 내용(메일 등)을 선적 서류와 함께 보관한다".
  - Added the article (항공보안법 제17조의4제3항) to the security-control item.
  - Kept "빈 팔레트도 화물이다" because it is based on the Aloha 601 case.
  - Kept the VAL/DIP mention inside the item on confirming with the airline, because it is an instruction to confirm, not an unknown.

## uld-docs/uld-code.html: 56,125 → 55,312 bytes
Nine unknown-only clauses were removed or rephrased:
1. 첫째 글자: "17개라고 적었는데 … 나머지 범주는 확인하지 못했습니다" → "위 표는 VRR 공개 목록이며, ULD CARE(2014)는 IATA 표준의 범주를 모두 17개로 적습니다." The ULD CARE fact stays.
2. 둘째 글자: "15개라고 적어, 나머지 4개는 확인하지 못했습니다" → "ULD CARE(2014)는 표준 바닥 크기 글자를 15개로 적습니다."
3. W contour row: "IATA ULDR 2026년판에 신설(AMW)" stays; "치수는 이 문서에서 확인하지 못했습니다" dropped.
4. Contour notes: the A·B·J·V sentence now ends "외형이 서로 다릅니다". The "세부 형상은 확인하지 못했습니다" clause is gone.
5. 읽기 연습 note: dropped "AMJ·DPE는 외형 치수를 … 확인하지 못해 그리지 않았습니다". The "—" in the shape cell speaks for itself.
6. Pallet third letter: "공개 자료로 확인하지 못했습니다 …" → "팔레트 셋째 글자(G·J·C·A 등)별로 받는 기종·위치는 항공사가 정해 두므로, 예약할 때 항공사에 확인하십시오." (matters to a decision)
7. 일련번호: "정확한 개정 연도는 확인하지 못했습니다" dropped.
8. 소유자 코드: "특정 회사가 어떤 코드를 쓰는지는 확인하지 못했습니다" dropped. The sentence now ends "… 항공사 코드가 아닌 코드가 붙을 수 있습니다."
9. PAJ row: "PAG와의 구조 차이는 확인하지 못함" → "실을 기종에서 받는지 항공사에 확인".

Also:
- 최대 총중량 section: "… 정한 값으로 보이며, 각 값의 근거는 공개 자료에 나와 있지 않습니다" → "운항 기종과 자사 기준에 따라 항공사가 정하는 값입니다."
- Final checklist: the last item was only a navigation link. It moved to a plain paragraph after the list, because it is the doc's only link to uld-holds.

## uld-docs/uld-holds.html: 51,464 → 49,034 bytes
- 화물 문 표: three "확인하지 못했습니다" cells → "항공사 확인": the B747-8F 벌크 문, the A330-200F 메인덱 문, and the B737-800BCF row's "벌크 화물칸(문 치수는 항공사 확인)". The table is still valid; colspan is unchanged.
- §6: "업계 공통 표준으로는 확인하지 못했습니다" dropped. It now reads "… 항공사 배치도마다 다를 수 있습니다(대한항공 B777F 예는 아래)."
- §7: "기종 공통의 공개 수치로는 확인하지 못했습니다" dropped. The advice became an instruction: "단위 무게가 큰 화물은 예약 단계에서 항공사에 위치별 최대 중량, 바닥 하중, 받침 요건을 확인하십시오."
- Removed §8 "탑재 작업: 누가 무엇을 하나" per the audit (1단계 "uld-holds §8"). It described ground-handler loader and roller work, which is other people's operation. Its forwarder-role paragraph repeated uld-buildup §8 and uld-holds §7.
  - Its lib-source line (Boeing 747-8 2.3.1 주석) went too; nothing else cited it.
  - **The AI image /images/uld/loading.webp is now unused** (it was only referenced here). Restore the figure if the owner wants to keep it.
  - Renumbered §9 포워더 확인 사항 → §8. Nothing inside or outside the doc referred to uld-holds section numbers.
- Checklist: dropped the "단위 무게가 큰 화물 … 확인했다" item, which repeated the §7 instruction word for word. The 5 remaining items are concrete.

## uld-docs/uld-overview.html: 26,509 → 26,369 bytes
- 인증·비인증: dropped "'비인증 ULD는 로어덱 어느 위치에나 쓸 수 있다'는 식의 일반 규칙은 확인하지 못했습니다". The sentence before it already gives the rule (WBM and airline decide).
- Final checklist: the navigation item became a plain paragraph after the lib-source line. The three concrete items stay: ODLN record at pickup, PAG/PAJ type check, and the matching certified net (AC 120-85B 2.4.5.8).

## Chose not to cut
- uld-buildup §12 and uld-pallets Cargolux 400kg/m²: verified against the source, so it stays.
- uld-buildup §8 role table and the ULD 수령·빌드업 checklists: these describe the forwarder's own BUP build-up work, which STYLE.md exempts.
- uld-safety §2 accident cases, the ATSB statistics, and the §4 regulation table (AC 120-85B, TSO-C172, ULDR, AHM 420, ICAO Annex 6 Ch.15, Doc 10102): concrete, and the rules say keep.
- uld-safety §3 other than VAL/DIP: concrete FAA rules and 항공보안법 articles.
- The disclaimers (lib-disclaimer) in each doc are kept.

## Cross-doc references to fix (caller)
- rk-docs/rk-cross.html line 108: `<a href="/library/air-uld/uld-buildup">컨투어와 빌드업</a> 8절·12절` → **8절·11절**. §8 (반입에서 탑재까지) is unchanged; ULD 태그·라벨 moved from 12 to 11.
- rk-docs/rk-damage.html line 138: `<a href="/library/air-uld/uld-buildup">컨투어와 빌드업</a> 10절·12절` → **9절·11절**. 빌드업 원칙 moved 10 → 9; ULD 태그·라벨 moved 12 → 11.
- No numbered references to uld-holds, uld-safety, uld-code, uld-overview or uld-pallets were found anywhere in the repo (library/ and translate/ excluded).
