# changes-C: Dangerous Goods, EU Battery commentary, CTU commentary (stage 1, 2026-10-20)

Edited copies are under SP/clean1/ (dg-docs/*.html, battery-docs/*.html, ctu-library.js, dg-library.js). Only changed files are kept. Sizes are UTF-8 bytes on disk. Original line endings are preserved: LF, or CRLF where the original used it. `node --check` passes on ctu-library.js and dg-library.js, and tag balance was checked on every edited HTML file.

### dg-library.js  (26,029 → 26,029 bytes)
- case-inspection summary "18건" → "12건", to follow the case-inspection renumbering. Nothing else changed.

## Dangerous Goods

### dg-docs/dg-penalty.html  (30,415 → 27,737 bytes)
- §2 항공안전법: dropped the trailing "유권해석·처분 사례는 확인하지 못했습니다"; kept the decision rule (who counts as "위험물취급을 한 자").
- §4: dropped the unverified "CAA 소송비용 60,000파운드" hearsay sentence and the "EU 사례는 찾지 못해 싣지 않았습니다" paragraph. US 49 CFR figures, FAA TiendaMIA and Amazon UK cases kept.
- §5 선사 벌과금: removed the Maersk $5,000/B/L, China $15,000/container and Hapag-Lloyd $15,000 table, the Splash247 and Hapag-Lloyd sources, and "다른 선사 금액은 확인하지 못해". Replaced with: carriers charge misdeclaration fees under their own tariffs/notices, amount and unit vary; Maersk 2025-10-24 advisory kept only for its definition of misdeclaration and the "all costs on shipper/consignee" clause (source line kept). House B/L recourse paragraph kept.
- §5 항공사: dropped "개별 항공사 위약금은 확인한 것이 없습니다".
- §5 보험: kept 상법 제659조제1항 and the one-sentence rule (depends on policy exclusions/disclosure clauses); dropped the generic "약관을 미리 확인해 두어야" advice and "면책 사례는 확인하지 않았습니다".
- §5 인가·등록: dropped the "AEO·상용화주·등록 영향 조문은 확인하지 못했습니다" sentence; renamed the h4 "항공사가 포워더의 교육 이수를 요구하는 이유" and kept 항공안전법 제91조제1항제29호·제30호 and 항공위험물운송기술기준 제206조제1항.
- §6 정리: dropped the 유해화학물질 운전자 item (restates §1/§2); reworded the carrier item to "운임표의 오신고 벌과금 조항".
- Regulatory figures (Korean 과태료/벌금 tables, US 49 CFR) unchanged.
### dg-docs/dg-kr-duty.html  (43,575 → 41,516 bytes)
- Removed the general 산업안전보건법 worker training content (정기교육 매반기 6/12시간, 채용 시 8시간, 특별교육 16시간, their 과태료 1명당 10/20/50만원 and 50/100/150만원). Section renamed "창고 작업자: 산업안전보건법의 MSDS 교육" and kept only the MSDS education duty (법 제114조제3항, 시행규칙 제169조) and its 과태료 (50/100/300만원, 시행령 별표 35).
- Comparison table and the 개인/사업주 table: the 산업안전보건법 rows now cover MSDS education only (제175조제6항제10호, 300만원 이하). Source line trimmed to 제114조·제175조.
- The 화관법 16시간 특별교육 → 8시간 면제 rule stays in "교육 사이의 상호 인정" (it was duplicated in the removed section).
- Disclaimer: dropped "항공·철도 교육기관 명단, 고압가스 과정별 시간은 확인하지 못해 적지 않았습니다".
- Intro sentence adjusted.
### dg-docs/case-inspection.html  (43,380 → 33,520 bytes)
- Removed 6 cases unrelated to logistics or DG transport: old 3 (화성 화재 현장, site type unknown), 5 (도료 제조업체 공장), 6 (화장품 제조공장), 7 (신축 공사장 시너·경유), 8 (철물·건재 판매소 고체연료), 18 (물류창고 소방시설 단속, not DG). Their overview-table rows were removed too.
- Kept 3 of the audit's 9: old 2 (안성 물류창고, DG storage in a logistics warehouse), old 12 (유해화학물질 운반 차량 roadside check, DG road transport), old 16 (인천신항 undeclared LPG in an export container).
- Renumbered 18 → 12 (old 4→3, 9→4, 10→5, 11→6, 12→7, 13→8, 14→9, 15→10, 16→11, 17→12). Updated the overview table, intro ("18건" → "12건") and every "사례 N" in "반복되는 적발 유형" (and dropped 화장품 원료 from the hidden-DG example list).
- Case 2 (안성): added the outcome. On 2019-08-06 an explosion and fire killed 1 firefighter and injured 10 (1 firefighter and 9 factory staff). Source: YTN 2019-08-07, cross-checked with 매일신문 2019-08-06 ("소방관 1명 사망·10명 부상"). Dropped "이후 처분 결과는 확인하지 못했습니다".
- Dropped empty lines: case 7 "적발 수치: 출처에 없어", case 8 "소송 결과는 확인하지 못했습니다", case 10 "점검 결과는 확인하지 못했습니다", case 11 "처분: 출처에 없습니다". The table cell for case 7 now describes what was checked.
- 자가 점검 체크리스트: removed "운반 용기, 적재 방법, 차량 표지가 운반 기준에 맞는지 상차 시 확인하는가" (physical loading check) and the 소방시설 item that belonged to the removed case 18. Rewrote the 혼적 화물 item as a document request (적입 목록·사진 and a no-DG declaration from the shipper).
- Cross-references: dg-docs/case-accident.html "사례 15" → "사례 10"; dg-library.js summary "18건" → "12건" (copy written to SP/clean1/dg-library.js, only that string changed). No other repo references use case-inspection case numbers.
### dg-docs/case-kr-accident.html  (22,855 → 23,044 bytes)
- Case 7 (안성 2019): added the missing outcome. On 2019-08-06 an explosion and fire killed 1 firefighter (who went in to check for trapped people) and injured 10 (1 firefighter and 9 factory staff). Added it to the "구분" line, the 일시·장소 line and the overview table. Sources added: YTN 2019-08-07 and 매일신문 2019-08-06 (headline "소방관 1명 사망·10명 부상"). Dropped "최종 결과는 확인하지 못했습니다".
- Dropped "couldn't confirm" fragments: case 4 (운반 기준 위반 여부, twice), case 5 (최종 수사 결과), case 8 (형사재판 결과), case 9 (원인 bullet, 실제 보관량). Table cell for 평택 is now "원인은 보도되지 않음".
### dg-docs/dg-treaties.html  (19,786 → 20,133 bytes)
- Fact fix: the wording "2018년 OSJD 가입에 따른 SMGS" implied that joining OSJD brought Korea into SMGS. It did not. Added an SMGS bullet to §5: OSJD membership and SMGS accession are separate. Korea became a full OSJD member in June 2018 (이투데이 2018-06-07, MOLIT announcement). Accession to SMGS/SMPS was a separate procedure, for which Korea won member-state support at the June 2019 OSJD ministerial meeting (이투데이 2019-06-07). No public source found that accession has been completed. Either way, SMGS covers international rail carriage only, not Korean domestic rail. Sources cited.
- Removed §7 "정리". It restated §3–§5, and its second bullet held the wrong OSJD/SMGS wording. §1–§6 numbering is unchanged.
### dg-docs/dg-hidden.html  (59,066 → 56,804 bytes)
- §7 penalty table (항공 과태료, 해상 통지 의무, 선적 거부·양륙, 선사 벌과금·민사 책임, 보세구역 반출명령) replaced with one paragraph and a link to dg-penalty. These duplicated dg-penalty and §5. Kept the one item not in dg-penalty: 위험물 선박운송 및 저장규칙 제16조제5항 (the master may refuse loading without a DG declaration).
- §3: dropped "현행 제67판의 목록은 직접 확인하지 못했습니다" (already stated in the header disclaimer).
- §9 역할별 점검표: 화주, dropped 2 items that restate §8 and §4④ (확인서 내용, 신고서 서명). 포워더 견적·부킹 전, merged 2 items (3절 목록 + 키워드) into one. 창고·CFS, merged 3 items that restate the §5 table into one ("5절 표의 외관 신호를 확인하고 냄새에 의존하지 않는다").
- §10 설명할 때: cut from 6 sentences to 3.
### dg-docs/case-accident.html  (28,568 → 28,460 bytes)
- Case-number link: "점검·단속 적발 사례 사례 15" → "사례 10", following the case-inspection renumbering.
- Dropped "공식 조사보고서 원문은 확인하지 못함" (태국 항만) and "공식 조사 결과는 확인하지 못했습니다" (Beirut).

### dg-docs/case-kr-litigation.html  (36,513 → 34,962 bytes)
- Removed the "찾지 못한 것" h4 block (a list of judgments that were searched for and not found).
- Removed the §1 paragraph "몬트리올 협약 원문을 확인하지 못해 조문 번호를 적지 않았습니다 … 운송약관도 확인하지 못했습니다". The 상법 제926조·제928조 table above it stays.
- Cases 2 and 3: "(항소됨. 항소심 결과는 확인하지 못했습니다)" → "(항소됨)". Case 7: dropped "탱크로리 형사 판결문은 확인하지 못했습니다". Case 8: shortened the provenance caveat but kept it (law-firm write-up, no case number).
- §4 실무 확인 사항: dropped the generic "교육 이수 기록과 사내 절차서를 보관한다" item.

### dg-docs/case-litigation.html  (33,355 → 32,784 bytes)
- Dropped "사건번호는 확인하지 못했습니다" (Tianjin, X-Press Pearl), "화주·포워더 책임 판단은 확인한 자료에 없었습니다", and the paragraph "Hanjin Pennsylvania·Hyundai Fortune·Maersk Honam은 판결을 확인하지 못해 싣지 않았습니다".
- §4: dropped the same generic education-record item.

### dg-docs/dg-forwarder.html  (35,696 → 35,438 bytes)
- Dropped three "couldn't confirm" fragments: ADR 원문 미확인, 직무구분 4 과태료 유권해석 미확인, 항공 지정 교육기관 목록 미확인. The decision rules next to them stay.
### dg-docs/dg-household.html  (73,344 → 73,041 bytes)
- §9 화주에게 설명할 때: cut from 5 sentences to 3.
- §8 창고·운송 작업자: dropped the generic "누액·냄새를 보면 멈추고 보고한다" item.

### dg-docs/dg-lithium.html  (83,229 → 82,811 bytes)
- §11 화주에게 설명할 때: cut from 6 sentences to 3 (sea vs air, documents needed, recalls and returns).
- §10 포워더 서류 받은 뒤: dropped the generic "건별로 보관한다" item.

### dg-docs/dg-marks.html  (56,403 → 55,709 bytes)
- §10 설명할 때: cut from 7 sentences plus a line for workers to 3.
- §9 포워더: dropped "표시가 틀리면 직접 고치지 않고 정정 요청", which restates the §9 intro.

### dg-docs/kr-small.html  (40,715 → 40,797 bytes)
- §8 checklist: the item "차량 운반 시 운반용기·적재방법 기준을 지키고…" read as a loading check for the warehouse or forwarder. Rewrote it as a pre-dispatch confirmation that the trucking company meets the carriage rules, which are its job.

## EU Battery

### battery-docs/changes.html  (14,809 → 13,396 bytes)
- Removed three manufacturer/producer-only rows from the 2006/66 → 2023/1542 table: "배터리 여권·공급망 실사·탄소발자국·재활용 원료 함량", "수거 목표" and "재활용 목표".
- Removed the "배터리 규정의 발효 후 개정" table: 2024/1781 passport registry (the page itself said "물류에 직접 영향 없음"), the 2025/1561 due-diligence delay, and 2026/1738 Annex I. Replaced it with one sentence saying these are manufacturer/producer/recycler duties, with a pointer to 적용 일정 and the chapter docs.
- Kept the rows that bear on logistics: legal form, categories, economic operators/fulfilment, CE (customs and market surveillance), labels, EPR hand-over, landfill ban, Art. 72 export evidence, Annex XIV, Art. 73, lithium waste battery storage, and the whole waste-shipment table.

### battery-docs/timeline.html  (6,134 → 5,659 bytes)
- Removed manufacturer/producer-only dates: 2027-08-18 supply-chain due diligence, 2027-12-31 and 2030-12-31 collection and recycling targets, 2028-12-31 LMT collection target, and 2031-08-18 recycled content. The intro sentence now points to b-ch12-14 (due-diligence date), b-ch8a (collection targets) and b-anx11-12 (recycling efficiency).

### Not cut in Battery
- The per-chapter "체크리스트" blocks in the 43 translation docs (b-*, w-*) mostly restate the "물류·운송에서 주의할 점" bullets just above them, almost one to one (b-ch1, for example, has 8 bullets and 9 checklist items). I left them in place. Removing them is a category-wide structural change, and overview.html's "각 문서의 구성" describes them, so this needs an owner decision.
- A grep of all battery commentary found no "couldn't confirm" sections. overview, status, checklist and de-nl are substantive and were left as they are.

## CTU (inline in ctu-library.js: 330,013 → 260,292 bytes; per-doc source-span sizes below)

### ctu-overview  (58,871 → 486 bytes)
- Confirmed dead code. Right after the DOCS array, `const overview = DOCS.find(d => d.id === 'ctu-overview'); if (overview) { overview.body = ... }` replaces the body unconditionally, before anything reads it. stripProductNotes, the renderers and the prerender NODE_DOCS (which takes only id/title/short/summary, after the IIFE has run) all see the replacement.
- The original body is now `''` with a one-line comment. id, title, tag, summary and the runtime overview page are unchanged.
- Side effect: tools/doc_links.py reads source text, so it will stop listing URLs that appeared only in the dead body. That is correct, because those URLs were never shown.

### a2-handling  (8,644 → 5,013 bytes)
- Removed:
  - §1 기본 원칙 (e.g. "크레인, 지게차, 터미널 이동 장비는 상태가 좋고 용도에 맞아야 합니다")
  - §2 굴려서 옮기기
  - §5 쌓기와 바람
  - §6 운송 수단에 CTU 고정
  - the "실무 요점" tail, which restated §3/§4
  - the §4 line "전자 서류 시스템을 쓴다고 해서 서류 확인을 덜 해서는 안 됩니다"
- Kept the §3 lifting-method table and the §4 terminal gate checks (60% rule included). Added one intro sentence: §2, §5 and §6 are terminal and carrier work standards, so readers should see Annex 2 for them.
- Title changed to "부속서 2 CTU의 안전한 취급 — 들기와 터미널 반입 점검" and the summary trimmed to match. The build outputs (library-index-data.js, index.html, search json) regenerate it. The Cubestow block was not touched.

### ch8-arrival  (16,015 → 12,588 bytes)
- Replaced the 10-row physical inspection table and the paragraph after it. Both were written as instructions to the reader (e.g. "장갑 낀 손으로 문질러 묻어나면…"). The replacement is a short list framed as the packer's (적입자) checks: outside, inside, and special CTU types. Added a sentence that shippers and forwarders do not inspect; they keep the packer's inspection record and photos.
- §8.3 적입 위치에 놓기: condensed four bullets of operator instructions into one paragraph, framed as the site operator's standard.
- Removed the "현장 체크포인트" tail, which restated the body. Its one point not stated elsewhere (road limits may bind before the CSC plate) moved into the body, with the pointer to kr-road. The Cubestow block was not touched.

### a5-receiving  (14,648 → 13,700 bytes)
- Turned the 6-step door-opening list into one paragraph. The list was mostly body motions: grip at shoulder height, pull back with the whole body, which way to step away.
- The paragraph keeps the rules: the knock test, a safety chain limiting the opening to 150mm, opening to 270° only when nothing will fall, no entry before ventilation, and curtain-siders.
- Reworded the matching checkpoint item.

### ch4-chain  (14,496 → 13,320 bytes)
- Removed the whole "현장 체크포인트" block. Every item restated §4.2, §4.2.12 or Annex 1, and one was the filler line "'서류가 전자화되었다'는 이유로 확인을 생략하지 않습니다". Shipper/consignor terminology was not touched.

### ch7-suitability  (9,096 → 6,774 bytes)
- Replaced the 10-row generic §7.2 table with four bullets that keep the concrete rules:
  - oversize cargo → flat rack or open top
  - floor rated 0.5kN/cm² → forklift-loaded packages limited to about 3~3.5t
  - dry-container lashing points are weak for heavy blocks
  - flexitank/liner cargo needs a bulkhead and has weight limits
- Removed the "실무 요점" tail. It restated §7.1–§7.3 and asked the reader to inspect containers.

### a7-load-distribution  (9,308 → 8,993 bytes)
- Fact fix. The figure (center-of-gravity.svg) and the text describe two different 18.5t examples. I recomputed both:
  - Figure, "고르게" layout: blocks of 4/4.5/4/6t, lengths 1.2/1.4/1.4/1.9m, 5.90m inside length → Σ = 53.85 t·m, d = 2.911m, (2.911−2.95)/5.9 = −0.66%, which rounds to −0.7%. The caption is correct.
  - CTU Code example (부록 4 §3): Σ = 52.78 t·m, d = 52.78/18.5 = 2.853m, 0.097m forward of centre = 1.64%.
- The text's "약 1.7%" is now "약 1.6%" with the working shown. Added a sentence identifying the figure as a different, hypothetical layout (−0.7%), and the caption now says the same. The SVG was not changed.
- Removed the "현장 체크포인트" tail, which restated §3.1.

### kr-road  (6,175 → 6,658 bytes)
- Fact fix: removed "20ft 실무 21톤 미만". It had no basis; its source was a blog. The calculation gives 40 − (9 + 3.8 + 2.3) = 24.9 ≈ 25t.
- Also removed "실무에서는 40ft 25톤 이하·24톤 이내 권장". That advice relied on the 44t enforcement tolerance and exceeds the 40t legal gross weight. Added that 44t is an enforcement margin, not an allowance.
- Added a sourced carrier example instead: Maersk Korea export page, "도로 규제" section (checked 2026-10-20). Cargo weight limits: 20' Dry 18.0t, 40' Dry 23.0t, 45' Dry 22.0t, 20' RF 17.5t, 40' RF 22.0t. Added advice to confirm the limit with the carrier and trucker before booking. The "참고한 자료" line now cites Maersk instead of "물류 실무 블로그".
- Not touched, because they are Cubestow content:
  - the "Cubestow 설정" bullet "한국 도로 한도 20ft 21t"
  - ch8's Cubestow bullet (20ft 21,000kg)
  - the cubestow-application summary ("20ft 21t·40ft 25t 한도")
- The runtime strips these from regular docs, but cubestow-application still shows the figure, and Cubestow's 21t preset lacks a basis for the same reason. This belongs in Loading Simulator/OPEN-ISSUES.md.

## Not cut, with reasons
- kr-mismatch: the table cells and two bullets that say "확인하지 못함" sit inside a decision table. Each marks an open legal question next to the rule "ask the 관할 소방서 or check the test result". Blanking them would imply "not applicable", so I left them. kr-* docs are being consolidated in stage 2 anyway.
- dg-rules: the lib-disclaimer saying the ADR text was checked through RID 2025 and that IMDG 1.3 wording was not compared against the original. This is a provenance note on what was verified, not an empty section.
- case-kr-litigation case (6), 공터 차량 무허가 위험물 취급: not logistics, but it was not on the list and it carries a concrete 형사 rule about repeated unlicensed handling.
- case-inspection old cases 2, 12 and 16: the audit listed them, but they are logistics or DG transport (warehouse DG storage, roadside hazardous-chemical transport check, undeclared LPG in an export container). Kept and renumbered.
- dg-lithium, dg-household and dg-marks 역할별 점검표: most items carry concrete numbers or article references (Wh, SoC, 250mm placards, 13kg gas). I removed only the generic items.
- a7-load-distribution §3.3 화물 취급 (PPE, forklift mast, two people on the roof): worker instructions, but they carry the CTU Code's concrete design figure (600×300mm/300kg) and were not on the list.
- a5-receiving 봉인 자르기 heights (1.09–1.24m, no ladders): ergonomic, but outside the requested door-opening scope.
