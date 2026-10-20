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
