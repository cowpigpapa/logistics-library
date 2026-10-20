# Stage 2 duplication cleanup: B2 (Charges, Customs, B/L·AWB)

Edited copies are in `clean2/<repo path>`. The repo itself is untouched. Tag balance was checked with html.parser, and the h3 numbers run in order in every edited file.
Edit scripts: `scratchpad/b2_ch.py`, `b2_cu.py`, `b2_bl.py`, `b2_js.py` (helper `b2_lib.py`, which keeps each file's line endings).

## Homes chosen
| # | Topic | Home | Others now hold |
|---|---|---|---|
| 1 | Korean freight/charge publication regime under the 해운법 | ch-sea-charges §8 | ch-surcharges: a 2-sentence pointer at the end of §6 (§7 deleted). ch-quote §4: 2 sentences (the quote-writing point is kept) |
| 2 | "Easily missed items" list | ch-quote §7 (table) | ch-sea-charges §9 deleted; one-line pointer in its disclaimer |
| 3 | All-in/subject-to reading, invoice check order | ch-quote §6 and §9 | ch-surcharges §1 table replaced by a sentence plus link. ch-surcharges §8 → §7 now covers only the surcharge lines (5 checks) |
| 4 | LCL and air worked calculations | ch-lcl, ch-air-weight | ch-quote examples 2·3 cut to summary results plus links. The quote-comparison points are kept |
| 5 | Terminal storage, the PNC highest-tier method, the two-clocks figure, Maersk direct-billing notices | ch-korea-storage | ch-dnd §3④ and ⑤ trimmed to pointers; the hypothetical PNC figure was removed. Going the other way, D&D lookup, free-time purchase and start rules point to ch-dnd |
| 6 | 30-day late-filing surcharge, 별표 1, 15-day removal | cu-import-timeline §1 (new h4) | cu-clearance §4, cu-bonded §2 and ch-lcl §3: 1–2 sentences plus link |
| 7 | HS structure and 통칙 | cu-hs-practice §1 | cu-clearance §7: a short paragraph plus link |
| 8 | 통고처분 reduction table | cu-penalty §6 | cu-aeo §10: AEO-grade reduction plus prior-approval note in one paragraph |
| 9a | Court holdings | bl-cases | bl-release §4, §6, §7 and §10: one-line references (사례 1, 4·5, 6·10, 8) |
| 9b | 상법 제857~860 table | bl-release §1 (delivery) | bl-basics §5: 1 sentence (제857) plus link |
| 9c | e-AWB | awb-basics §7 | bl-special §5: 1 paragraph plus link; the ONE Record paragraph stays |
| 10 | Manifest deadlines | cu-clearance §3 (export) and §9 (import) | bl-basics §6, awb-basics §6 and ch-lcl §2: deadlines replaced by links |

## Per file (bytes before → after)

### ch-docs/ch-surcharges.html: 40,027 → 35,603
- §1 "견적 형태" table removed. All-in "금액이 어느 날짜에 고정되는지" and the subject-to checks (할증료 목록·적용일·공지 경로) moved to ch-quote §6. The 장기 계약 point stays here as a sentence (제29조의2제2항제3호).
- §6 now ends with a 2-sentence pointer to the 해운법 regime (15일 공표; BAF·LSS·EBS·CAF named, others "그 밖의 요금") → ch-sea-charges §8.
- §7 (공표 table) deleted. Unique rows moved to ch-sea-charges §8: 고시 제4조①1자목, 제5조, 제7조②, 제29조의2, 제57조의2/제59조, the subject-to-regulatory-approvals reading, the 15-day check, and "할증료 빼 달라" under 제31조②.
- Old §8 is now §7 "인보이스의 할증료 줄 대조": surcharge-specific checks only. 견적 형태, 지급지 and 환율 went to ch-quote §9 steps 4·5. Old §9 is now §8; checklist "8절" → "7절".
- Sources unchanged (all still cited).

### ch-docs/ch-sea-charges.html: 49,000 → 47,596
- §8 expanded with the items above and an extra practical paragraph. Source line now cites 해운법 제29조의2·제57조의2·제59조, 시행규칙 제20조제1항 and 고시 제2조·제4조~제9조.
- §9 deleted; its items were merged into ch-quote §7. The MID source moved to ch-quote. The "관련 문서" links (Incoterms, Container Tracking) were dropped, since they are not fact sources. Disclaimer now points to ch-quote §7.

### ch-docs/ch-quote.html: 50,577 → 49,262
- §4 "해운법 공표 제도와 견적" cut to 2 sentences plus a link to ch-sea-charges §8; the line about writing 선사 공표 요율 (실비) apart from the forwarder fee is kept.
- §6 table: All-in and subject-to cells absorb the ch-surcharges points.
- §7 is now the single list. New rows: 보안료; 단기 공지·항로 한정 할증 (EBS·EFS, LSS, EIS·CIC, feeder); 위험물 오신고 비용 (Maersk MID USD 15,000 from 2025-01-10); 증빙 형태 (Maersk 입금표). Existing rows got 리퍼 반납 검사비 and 보장 상품, the THC/부두사용료 note on switching carriers, 셔틀비, the CFS unit, 서렌더·원격 출력, and SI-based 서류비. Sources added: Maersk MID notice and the Maersk import local-cost FAQ.
- §8: examples 2 (LCL) and 3 (air, the same 12 boxes as ch-air-weight) are now prose summaries with the totals kept (432,560원; 1,195,000원). Kept: CFR/CPT exclusions, R/T-vs-B/L sensitivity (+6,390원 / +USD 9.00), AWB due-agent/due-carrier attribution, and the paragraph on the surcharge base weight. Links go to ch-lcl §4–9 and ch-air-weight §5 and §7.
- §9: step 4 is now 환율·통화와 지급지; step 5 adds the all-in check and links to ch-surcharges §7. The intro pointer to "해상 할증료 8절" was removed.

### ch-docs/ch-lcl.html: 45,759 → 45,435
- §3: the late-filing rate tiers are replaced by a link to cu-import-timeline §1. The unused 시행령 제247조 source was removed.
- §2 step 6: manifest deadlines replaced by a link to cu-clearance §3 (the "장치된 뒤 제출" rule is kept).

### ch-docs/ch-dnd.html: 75,981 → 59,246
- §3④: the Maersk PNC/BNCT direct-billing details and the Hapag quote are replaced by one sentence plus a link to ch-korea-storage §1. Germany/Netherlands/China content kept.
- §3⑤: the PNC 400,000원 hypothetical and its SVG figure (~16KB) are removed, replaced by a pointer to ch-korea-storage §3. The D&D 300,000원 calculation is kept.
- Unused source removed: the Maersk Busan notice of 2022-10-03.

### ch-docs/ch-korea-storage.html: 60,692 → 60,565
- §2: the paragraph on carrier start rules is cut to 2 sentences plus a link to ch-dnd §3.
- §6: the D&D lookup detail (Maersk, 15 days before arrival) and the purchase terms (no refund) now link to ch-dnd §4 and §5. The terminal-specific points are kept.

### cu-docs/cu-import-timeline.html: 51,519 → 54,305
- New h4 "신고지연 가산세와 수리 후 15일 반출" in §1. It holds the rate table with a 1억 example and a 3억 cap example, 보세운송 후 기준 (시행령 제247조③), 별표 1 합산 (제34조④), exemptions (제34조②), 15일 반출 with 과태료 100만원 이하 (제157조의2·제277조⑦·고시 제19조), 벌크 연장, and the notice and 관세사 advice. Sources add 관세법 제277조 and 시행령 제247조·제248조. Disclaimer wording updated.

### cu-docs/cu-clearance.html: 55,196 → 49,109
- §4 h4 "반입일부터 30일": rate table and 별표 detail replaced by one paragraph plus a link. The source now cites 시행령 제249조 (the one still cited) instead of 제247~249조.
- §7: HS/HSK/통칙 table and its source line replaced by a short paragraph plus a link to cu-hs-practice. The heading drops "해석 통칙". No renumbering.

### cu-docs/cu-hs-practice.html: 55,791 → 57,692
- §1 gains a paragraph from cu-clearance: HS 협약, 류·호·소호, HS 2022 (7th) / HS 2028 (8th), 관세법 별표, HSK (시행령 제98조), 통칙 제7호. Sources added: 시행령 제98조, 재정경제부고시 제2026-42호, WCO HS 2022/2028. Disclaimer now points only to cu-clearance §8.

### cu-docs/cu-bonded.html: 56,884 → 53,761
- §2: "두 개의 시계" is cut to one paragraph plus a link, and the example table (8,000만원) is removed. The 장치기간 content is kept. Removed from sources: 시행령 제247조·제248조 and 관세법 제277조.

### cu-docs/cu-penalty.html: 60,714 → 60,928
- §6 now carries the AEO "위반 행위일 등급 기준" and the rule that 자수 or AEO cases can get 관세청장 사전승인 for 통고처분 instead of 고발 (고시 제2조제3항). Disclaimer and §3 point to cu-import-timeline for the late-filing surcharge.

### cu-docs/cu-aeo.html: 82,152 → 81,255
- §10: the 감경 table is replaced by one paragraph covering the AEO-grade reduction, prior approval, "no self-report reduction for 과태료" and the 오류점수 exemption, with a link to cu-penalty §3–6. Sources trimmed: 별표 5 and 질서위반행위규제법 제7·14·18조.

### cu-docs/cu-documents.html: 60,500 → 60,561
- The reference "통관 절차와 HS 코드 7·8절" is now "HS 품목분류 실무 사례" plus "통관 절차와 HS 코드 8절".

### bl-docs/bl-cases.html: 51,849 → 53,810
- 사례 1 함께 볼 판례: adds 87다카1791 and 90다카8098, which were only in bl-release, with sources.
- 사례 8 함께 볼 판례: adds 94다46404 and 96가합7724, which were only in bl-release, with sources.

### bl-docs/bl-release.html: 46,959 → 44,632
- §4, §6, §7 and §10: holdings are now one-line references to bl-cases 사례 4·5, 1, 6·10 and 8. The §6 judgment source line is removed; the two §10 judgment sources moved to bl-cases. 91다4249 (§9) stays because it is not in bl-cases. The §1 상법 table stays here as the home.

### bl-docs/bl-basics.html: 44,912 → 42,738
- §5: the 857~860 table is removed. One sentence (제857조) plus a link to bl-release §1 remains.
- §6: the manifest deadline is replaced by a link to cu-clearance §9.

### bl-docs/awb-basics.html: 39,909 → 39,525
- §6: air manifest deadlines replaced by a link to cu-clearance §3·§9. 고시 제43조 dropped from the source.
- §7: absorbs bl-special's MeA term, "종이 AWB 선택 사항(비표준)이지만 금지 아님", and "가능 구간 약 70%". Source added: IATA e-AWB default FAQ.

### bl-docs/bl-special.html: 53,917 → 52,833
- §5: the two e-AWB paragraphs are now one paragraph plus a link to awb-basics §7. The ONE Record paragraph stays. The e-AWB and FAQ sources were removed (now in awb-basics).

### JS and HTML (summaries and versions)
- charges-library.js (20,054 → 20,096): summaries for ch-sea-charges, ch-quote and ch-surcharges updated. DOCS_VERSION is now 20261020-03.
- customs-library.js: the cu-clearance summary says "HS 코드 구조와 품목분류 사전심사" instead of "통칙과". DOCS_VERSION is now 20261020-03.
- bl-library.js: DOCS_VERSION is now 20261020-03.
- charges-, customs- and bl-library.html: `?v=` bumped to 20261020-03.
- If another stage also bumps these versions, keep the higher number.

## Not changed / notes
- cu-penalty §3 still keeps one sentence that the late-filing period is not reset by 보세운송, because it is part of the dispute advice.
- cu-import-timeline §2–4 and cu-us-filing still state import manifest deadlines in their own timelines; they were left alone as customs docs.
- `library/` prerendered pages need rebuilding after the merge.
