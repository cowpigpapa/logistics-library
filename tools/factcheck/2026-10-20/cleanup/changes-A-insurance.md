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
