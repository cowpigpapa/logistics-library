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
