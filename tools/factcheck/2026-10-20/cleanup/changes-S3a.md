# Stage 3a: merge and remove thin or overlapping docs (2026-10-20)

All edits are copies under clean3/ at their repo paths. No repo file was changed or deleted.
Deleted ids are listed in clean3/deleted.txt. Proposed vercel.json `redirects` entries are in clean3/vercel-redirects-S3a.json.
Each category JS also has a client-side `MOVED` map in show(), following uld-library.js.
DOCS_VERSION is now '20261020-10' in incoterms, container, bl, uld, tc, charges, insurance and risk. Each matching *-library.html has script ?v=20261020-10.

## 1. Incoterms: 7 docs to 4
Survivors: inco-what, inco-rules, inco-gray, inco-choose.

### a. inco-history merged into inco-what
New title: "인코텀스란과 2020 개정 — 정의와 법적 성격, 2010에서 2020으로 바뀐 것".

Kept:
- definition, the 11 names, legal nature (UNCITRAL, 민법 제105조, CISG, 수출신고 결제금액 FOB 환산)
- 다루는 것/다루지 않는 것, and the relation to carriage, insurance and L/C

Moved in from inco-history:
- §6: the 2000/2010/2020 name mapping and the 1990/2000/2010 change list
- §7: the 2010→2020 ①–⑨ table
- §8: what did not change
- §9: the sourced "다음 개정" note (ICC 2026 workplan)
- The old-edition note went into §3. The history is now one sentence (nine editions, "1974(자료에 따라 1976)").

Dropped:
- the 1923–1980 timeline
- the misconception table (its one unique row moved into the definition table)
- the contract checklist
- the 계약서 표기 sub-section (it duplicated inco-choose §3; now a link)

### b. inco-chart merged into inco-rules
New title: "조건별 해설과 한 장 정리표".
- The chart is the head figure: inco-rules §1–§4 are the chart's four sections, so old inco-chart#s1–s4 map to inco-rules#s1–s4.
- Removed the 11 per-condition cost bullet lists that restated the chart.
- Removed the C vs D section (it duplicated risk-cost §2). Its unique content moved to inco-gray §2: the arrival-delay row, "use D terms for an arrival deadline", and "the named place is the delivery place".
- Footnotes fixed:
  - CIP 8–10 now read "CPT와 같음(4/5/6번)" plus what is specific to CIP: A5 cover runs to the named destination, the only extra duty is insurance, and an inland destination extends the insurance leg.
  - CIF 19–20 now read "CFR과 같음(16/17번)" plus: cover is required only to the destination port, and THC splits as under CFR.
  - DDP 14 now reads "DAP와 같음(11번)" plus the note on duties.
- Moved in from risk-cost's insurance table:
  - CIP: the A5 proviso, "추가 담보는 구할 수 있는 범위에서", and the duty to provide insurance information.
  - CIF: "매수인이 스스로 추가 보험".

### c. inco-risk-cost merged into inco-gray
New title: "위험·비용의 분기와 애매한 구간 — 비용 항목별 부담표와 계약 문구 예시", 17 sections. inco-gray survives because of its contract-clause content.

Kept whole:
- §2 C-condition split
- §3 B3 table, claims and insurable interest
- §4 A9/B9 bundles
- §5 the full 가/나/다 cost table with the ①②③ legend
- every contract-clause and dispute section, now §6–§15

Changes:
- St. Paul and BP Oil appear once, in the §16 cases table; §3 and §11 refer to them in one sentence each. §17 is the only summary.
- Dropped as duplicates:
  - risk-cost's per-condition risk/cost table (covered by rules §3)
  - its inspection table (the one unique point moved to the gray §11 row)
  - gray's second THC table (same as the cost-table rows)
  - risk-cost's A2/A3 order paragraphs (covered by what and rules §5)
- §13 gained the CFR/CIF multi-carrier rule and the truck/feeder/mother-vessel example.
- Gray's air FOB text moved to inco-choose.

### d. inco-choose
- Links updated, lib-summary added, h3s numbered 1–5. Anchors are unchanged.

### Repeated lines
- "컨테이너는 FOB 대신 FCA" now appears only in inco-choose §1. That section absorbed gray's terminal-gap and insurance-gap text, the "FOB 부산"/"FOB 인천공항" practice paragraphs and the ICC Academy source. Other docs link to it.
- "C조건 = 선적지 위험" now appears only in inco-gray §2. Other docs link to it.

### Old → new anchors
- inco-history: s1–s2 → what#s6, s3 → what#s7, s4 → what#s8, s5 → what#s3, s6 → what#s9
- inco-risk-cost: s1–s2 → gray#s2, s3 → gray#s3, s4 → gray#s4, s5 → gray#s5, s6 → gray#s11, s7 → rules#s6/#s7
- inco-gray: old s2–s12 → s6–s16, old s13 → s17
- inco-rules: old s1–s3 → s5–s7

### incoterms-library.js
- DOCS, SECTIONS (기본: what, rules / 실무 가이드: gray, choose) and STAGES updated.
- The summary button goes to inco-rules: "한 장 정리표와 조건별 해설 →".
- MOVED map: inco-history → inco-what, inco-chart → inco-rules, inco-risk-cost → inco-gray.

## 2. Container: cn-number merged into cn-codes
New title: "컨테이너 번호와 크기·형식 코드(ISO 6346) — 소유자 코드, 체크 디지트, 길이·높이·형식 그룹, 자주 보는 코드".
- Intro, 핵심 3줄 and disclaimer were combined (no facts dropped).
- New sections:
  - §1 11자리의 구조
  - §2 체크 디지트 계산과 예시 (the method, the KQXU worked table, the ISO advice to avoid remainder 10, the Container Tracking link, the note that KQX is a fictional code)
  - §3–§5 the old cn-codes §1–§3
- The two sources lines are kept.
- container-library.js: one card, STAGES repointed, summary button "컨테이너 번호와 코드부터 →", MOVED map cn-number → cn-codes.
- containertracking.js/html do not link cn-number, so nothing changed there.

## 3. B/L: bl-vs-awb deleted, redirects to bl-basics#s9
Why delete rather than keep a compact doc: after the SWB, L/C and scattered facts moved out, only a side-by-side table and a flow diagram were left. A one-table doc next to bl-basics and awb-basics would be a thin third "basics" doc. The table now sits where readers look for the B/L vs AWB difference.

- **bl-vs-awb §4 (SWB vs AWB, CMI Uniform Rules) → bl-release §5**, merged into the existing text and retitled "Sea Waybill: AWB를 닮은 해상 서류와 그 인도". It adds:
  - 상법 제861·863·864조 (861 does not cover SWB, so the 제129조 surrender-of-original rule does not apply)
  - CMI rule 5 on evidence, and that the CMI rules apply only if adopted
  - COGSA 1971 s.1(6)(b)
  - transfer of the right of control to the consignee in SWB but not in AWB (Montreal 제12조)
  - the NO DISP caveat and UCP 600 제21조
- **bl-vs-awb §6 (UCP 600 제20조 vs 제23조) → new awb-basics §8**, "신용장 거래: 수하인을 은행으로 적는 이유와 UCP 600 제23조". It holds:
  - 제19–24조 classification, 제14조 l항
  - the examination table, with 20(a)(iv) and 23(a)(v) added
  - common rules: 제27조, 제14조 c항 21 days, 제26조, ISBP 821
  - bl-vs-awb §5 (why the issuing bank is the AWB consignee)
- The rest of bl-vs-awb:
  - The 14-row comparison table, the SVG flow (marker ids renamed blcmp-*) and the short-sea surrender paragraph → new bl-basics §9 "B/L과 AWB 비교: 권리증권과 증거 서류". The table carries all liability and time-bar figures, including Montreal 26 SDR.
  - Two L/C items → bl-basics §10 checklist.
  - "Not Negotiable", SLI, the pink original and the bank's original → awb-basics §1–§3 and the §9 checklist.
- Dropped as duplicates:
  - intro and summary, and bl-hero.webp (still used on the home cards)
  - the "누가 받나", "원본 분실" and "운송 중 변경" rows (in bl-release §1/§8 and awb-basics §4)
  - repeated checklist items (in bl-basics §10, bl-release §4/§10/§11)
  - the "설명할 때" items (in bl-release §8/§10)
- Anchor shifts: the bl-basics checklist moves s9 → s10; the awb-basics checklist moves s8 → s9. No inbound #sN links existed.
- Same-category links repointed in awb-basics, bl-basics, bl-release and bl-special.
- bl-library.js:
  - SECTIONS and STAGES updated, plus a new question "신용장 거래인데 AWB 수하인은 누구로?".
  - The button "B/L과 AWB 비교표부터 →" goes to bl-basics#s9.
  - The MOVED map and MOVED_HASH redirect to bl-basics#s9.
- tools/STYLE.md §4: the Montreal doc list now says bl-basics(9절 비교표) in place of bl-vs-awb.

## 4. ULD: uld-overview deleted, redirects to uld-code
- The uld-code intro now opens the category: the definition sentence 단위탑재용기(ULD, Unit Load Device), the uld-family.webp image and a merged disclaimer (it adds that the WBM decides what can be loaded).
- New uld-code sections:
  - §1 정의 table (IATA, Knowledge Hub, ICAO Annex 18, FAA AC 120-85B)
  - §2 ULD를 쓰는 이유 (747 in 1970, A320/AKH in 1988)
  - §3 형태 구분
  - §4 인증 ULD와 비인증 ULD: all the WBM rules, ISO 4118 / AS1677, the Lufthansa DPE/DQF example and the AC 120-85B exception
  - §5 인증 기준과 시험 표준 (TSO-C90e, ETSO-C90e, NAS 3610, SAE AS36100/36102, ISO 8097/21100, TSO plate)
  - §6 IATA ULDR (14th/15th editions) and ULD CARE
  - §14 항공사가 ULD를 갖추는 방식 (ownership table, Unilode, Jettainer)
- uld-code h3s are now numbered 1–22; they had no numbers before.
- uld-safety §1 gains three h4 blocks:
  - borrowed BUP ULDs (TACT BUP definition, Air France KLM statement, merged with the existing custody paragraph)
  - the pre-build-up serviceability checks (Air France KLM example)
  - the return and damage table (Cargolux example)
- Dropped as duplicates:
  - forwarder ULD tags (in uld-code §16 and uld-buildup §8)
  - the Unserviceable tag (in uld-safety §1)
  - receiving-checklist items (in uld-safety §1/§5, uld-code §10/§11 and uld-pallets)
  - the long FAA "only restraint device" text (in uld-pallets; now one line plus a link)
- Links to uld-overview in uld-safety now go to uld-code#s4 and #s6. The summary button already linked uld-code; it now reads "ULD란과 코드 읽는 법 →".
- uld-library.js:
  - uld-code is retitled "ULD란과 코드 읽는 법 — 정의, 인증·비인증, 코드와 대표 ULD".
  - Two new question cards.
  - MOVED map gains uld-overview → uld-code.

## 5. Cold chain: tc-reefer and tc-reefer-practice deduped, not merged
Each overlapping item now lives in one doc; the other doc has one sentence and a #sN link.
- In tc-reefer-practice:
  - the loading rules (practice §6, with a Hapag-Lloyd source added)
  - range instruction → setpoint (§2/§4)
  - the 0℃/0℉ confusion (§4; merged in UK P&I's warning and the chilled/frozen consequence)
  - ventilation units (§3/§4)
  - genset fees and the Maersk sources (§7, moved from tc-reefer)
  - the forwarder checklist (§10; one item added on frozen cargo with vent or dehumidification settings)
- In tc-reefer:
  - closing vents and dehumidification for frozen cargo (§5)
  - what a controller download contains, retention, GMT/UTC (§7)
  - defrost spikes (§5/§7)
  - remote-data limits (§8)
  - "reefers maintain temperature, they don't cool cargo" (§1)
  - its §9 is retitled "이어서 볼 문서".
- No sections were removed, so no anchors moved.
- First mentions now read 서플라이 에어(급기)·리턴 에어(환기, 還氣); "USDA Probe" is unified.
- Sizes: tc-reefer 88.7KB → 87.0KB; practice 76.9KB → 78.4KB (it gained the genset text).
- tc-library.js: the practice summary is updated.

## Cross-category links repointed
- ch-docs/ch-quote.html (body and lib-source line): inco-risk-cost → inco-gray#s5
- ch-docs/ch-surcharges.html: inco-risk-cost → inco-gray#s5
- insurance-docs/ins-container-loss.html:
  - line 123: inco-risk-cost → inco-gray#s2
  - line 59: cn-number → cn-codes
- rk-docs/rk-special.html: inco-gray → inco-gray#s6 (link text updated)
- rk-docs/rk-cross.html: cn-number → cn-codes#s2

All link texts are now "위험·비용의 분기와 애매한 구간" or "컨테이너 번호와 크기·형식 코드", with particles fixed.
tools/home-cards.html: 해설 counts updated (Incoterms 7→4, Air ULD 6→5, B/L·AWB 7→6, Container 4→3).

## Still to do at deploy
- Delete the 6 fragments in deleted.txt.
- Delete their prerendered pages, or Vercel will serve the stale static file before the rewrite:
  - library/incoterms-2020/inco-history.html, inco-chart.html, inco-risk-cost.html
  - library/container/cn-number.html
  - library/bl-awb/bl-vs-awb.html
  - library/air-uld/uld-overview.html
- Add the redirects from vercel-redirects-S3a.json.
- Rebuild generated files (library_index, build_home, prerender, search, doc-links, freshness, sitemap, tools/prerender-dates.json).
- incoterms-library.css: the header comment still mentions inco-chart. This is cosmetic; the table class is still used.
