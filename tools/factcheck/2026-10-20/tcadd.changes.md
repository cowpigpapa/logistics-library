# Cold Chain: merged content from the anonymized internal guide ("[해상/항공] 온도유지화물 운송", 2024. 12.), parts 1 and 2

Edited copies are in this folder (same paths as the repo). The repo itself has not been changed.
Checked on 2026-10-20. No browser was used: only WebSearch, WebFetch, curl, the law.go.kr DRF API and pdftotext.

## Files

| File | Size before → after (bytes) | Change |
|---|---|---|
| tc-docs/tc-air-passive.html | 59,289 → 63,251 | Section 4 gains one sentence on dry ice used as a coolant for DG. New section 8 "출고부터 인도까지: 한 포워더의 운영 절차" (a table of the guide's SOP). The checklist becomes section 9 |
| tc-docs/tc-air-active.html | 67,897 → 72,728 | Section 6: when the battery runs flat, the unit stops. Section 8 checklist gains items for planning, transshipment, security screening and destination, plus a new h4 "인계 지점마다 남길 기록" (the guide's sample checklist) and a link to case A. A source line is added |
| tc-docs/tc-reefer-practice.html | 75,600 → 76,977 | Section 10 checklist gains seven items: shipper data, plug capacity, PTI lead time, driver instructions and photos, CY plug check, worn plugs, free time. Items taken from the guide are marked "운영 예" |
| tc-docs/tc-basics.html | 60,963 → 61,641 | Section 8 "예약 전에 화주에게 받을 것" gains active-unit tracking and quote scope, plus a link paragraph |
| tc-docs/tc-cases.html | 61,080 → 70,425 | Intro and disclaimer updated. New section 4 "한 포워더의 사고 기록(익명)" with cases A–D and a source line. The old 4 and 5 become 5 and 6, and the checklist gains four items |
| tc-library.js | DOCS_VERSION 20261019-01 → 20261020-01 | Summaries updated for tc-air-passive, tc-air-active, tc-reefer-practice and tc-cases. `node --check` passes |
| tc-library.html | `tc-library.js?v=20261012-50` → `?v=20261020-01` | Script version bump (STYLE §6) |
| tc-docs/tc-reefer.html | not changed | Ship, genset, clip-on and CY plug power is already in section 6. The file is already 89KB |

Checks: the tag-balance script found 0 errors and 0 unclosed tags in all five edited fragments. The originals are also 0/0. No em dash appears in new body text; the only ones are in source lines. No company, team, shipper, brand or airline names appear in the anonymized material.

Size note: tc-air-active (72.7KB) and tc-cases (70.4KB) end up just over the ~70KB target. tc-reefer-practice was already 75.6KB before the change, so only checklist lines (about 1.4KB) went in there.

## Placement decision for the incident cases

The cases went into **tc-cases** (온도 사고 사례), not tc-reefer-practice, tc-air-active or tc-basics. tc-cases is the category's dedicated cases doc, so putting them anywhere else would create an overlapping "cases" section (see the doc-structure rule: no overlapping docs in a category). tc-air-passive §8, tc-air-active §8 and tc-basics §8 link to it.

## Sources and evidence per change

| Where | New content | Basis |
|---|---|---|
| passive §4 | The IATA dry-ice acceptance checklist covers only the case where no DGD is needed. Dry ice cooling DG that needs a DGD goes through that DG's declaration, and the airline confirms how to enter the dry ice | IATA 2027 Acceptance Checklist for Dry Ice, Ed. 68: title "(For use when a Shipper's Declaration for Dangerous Goods is not required)" and "acceptance of dry ice when packaged on its own or with non-dangerous goods" (downloaded and read via pdftotext). How to enter dry ice on a DGD is deliberately not stated, because the DGR text was not verifiable |
| passive §8 table | All rows | Guide practice (가이드 실무). Framed as "한 국내 포워더의 운영 절차(익명)", not law. Physical checks belong to drivers, warehouses and handlers; the forwarder requests and keeps the evidence |
| passive §8 link | ch-air-storage for free time and storage charges | Existing site doc |
| active §6 | A flat battery stops both cooling and heating, so monitor and charge during terminal storage | Guide background (A). Consistent with the manual statements already in the doc: battery-only in flight, 20% alarm |
| active §8, first list | Charging at origin and destination; dry-ice and battery replacement criteria; transshipment only within run time or with guaranteed charging or re-icing | Guide practice |
| active §8 security | Arrange screening with the airline in advance. Cargo screened by a 상용화주 is not re-screened by the airline, with exceptions | Guide practice plus **항공보안법 제17조의4 제3항** (법률 제21414호, 시행 2026. 2. 27.), read from the law.go.kr DRF XML: "항공운송사업자는 제15조제2항에도 불구하고 제1항에 따라 상용화주가 보안검색을 한 항공화물 및 우편물에 대하여는 보안검색을 하지 아니한다. 다만, 다음 각 호…" (exceptions 1–8: 훼손 흔적, 통제 이탈, 화물기→여객기, 무작위 표본검색 등). The guide's "X-ray exemption program" wording was not used as such |
| active §8 destination | Check local terminal rules on accepting RKN/RAP; if needed, get the consignee's consent to open the unit | Guide. No public source was found, so it is phrased as "현지 터미널 규정 확인" as instructed |
| active §8 logger, records, POD | Logger retrieval and download; carrier sends temperature records; POD for empty-unit return and station hours | Guide practice |
| active §8 "인계 지점마다 남길 기록" | Container prep (battery 90% or shipper instruction, set point e.g. 5℃ for 2~8℃, transport mode and HAWB entry "if the unit has the function"), pickup, loading (logger, invoice/PL/MSDS, high-security seal photo), road, terminal, destination, photo evidence, forced opening, excursion | Guide sample checklist. The 5℃-for-2~8℃ example matches the TT Club example already cited in tc-reefer-practice |
| active §8 case paragraph | Arriving unit switched off; separate zones and alerts | Guide case 1, linked to tc-cases A |
| reefer-practice §10 | Shipper data (tolerance, logger, MSDS, size); shortest-lead-time carrier and CY plug capacity; booking 2 days ahead for PTI; reefer-capable truck or genset, driver must not unplug or change settings; inside/outside photos and display photo at pickup; CY slot and plug check; set-point check and plug-in on arrival, no worn plugs; free time and charges | Guide practice, marked "운영 예" |
| basics §8 | Active model, set point and tracking; quote scope (schedule, import clearance, local rules, packaging return) | Guide healthcare checklist |
| cases §4 A–D | All case facts | **The anonymized guide (cases 1–4). These cannot be verified independently.** No names, dates or invoice values are given. Case D keeps "약 10톤" and "수천만 원 단위" as orders of magnitude only |
| cases §4 C, tampering | On 2024-10-31 the MFDS and police arrested 56 makers and installers and 3 drivers over temperature-recorder tampering, under the Food Sanitation Act, to save fuel and cooling costs | Newsis, 2024-11-01, https://www.newsis.com/view/NISX20241101_0002942827: "온도 기록계에 조작 기능을 설치해 판매, 유통한 제조업체 대표 및 설치업자, 프로그래머 등 56명과 이를 사용한 기사 3명 등 총 59명을"; "유류비 및 냉각기 유지·보수 비용을 줄이고자". The site's tc-library.js VIDEOS already lists the MBN and YTN reports of this case. The text says explicitly that the case-C truck is not linked to this case |
| cases §4 C, insurance | The guide's statement that insurers often decline passive temperature cargo under special clauses | Framed as the guide's statement. Links to ins-uninsurable (its section 2 covers temperature cargo) and ins-forwarder (liability insurance) |
| cases §4 D | Special cargo may have a short or no free time plus a surcharge; once free time ends, days are counted by date changes | The site's ch-air-storage (verified tariffs). That doc reports special-cargo free time of 12h, 24h or none depending on the terminal, and a 50% (×1.5) surcharge |

## Skipped: already covered, or unverifiable or wrong

**Already covered, so not duplicated:**
- EPS, PUR and VIP insulation (passive §2)
- PCM (passive §3, with va-Q-tec's -67~+37℃)
- CO2 asphyxiation (passive §4, FAA SAFO)
- Keeping coolant out of contact with the product (passive §3, EU GDP 9.4)
- Venting the package and never sealing it (passive §4)
- UN1845 AWB entries, no DGD for non-DG, Class 9 label, net weight per package (passive §4 table)
- The 200kg per-package limit with airlines differing (passive §4)
- Eutectic vs compressor active units (active §1: T-Tech dry ice with a battery fan, and compressor units)
- Active vs passive pros and cons (active §7)
- Pre-conditioning and confirming the inside temperature before loading (active §6)
- Remote and IoT monitoring (active §5 RelEye; reefer §8)
- Air reefer ULD types RKN/RAP/RLP and leasing (active §1 and §4)
- Sea reefer power from ship, genset, clip-on and CY plugs (reefer §6)
- Temperature bands (basics §1 already uses WHO TRS 1025 bands; no conflicting band definitions added)
- The IATA TTS label (basics §4, referenced in case B)

**Unverifiable, wrong, or conflicting with sourced content:**
- **"Ask for pre-cooling to start 48 hours before pickup" (sea).** This conflicts with IM8 §17.2.1/17.2.2 and ONE/Hapag-Lloyd guidance already cited in reefer-practice §5 (do not pre-cool an empty reefer unless it is sealed to a cold store or cold tunnel; pharma pre-conditioning is the exception). It was not added as a general rule. Only the 2-day PTI booking lead time went in, with "의약품이면 사전 조절 포함".
- **"Never use steel drums or jerricans" for dry ice.** No public IATA or airline text was found saying this. The verifiable rule (packaging must vent, PI 954) is already in the doc. Dropped.
- **"SP A151" as the source of the 200kg limit.** This is wrong. The 200kg per-package limit comes from the ICAO TI/DGR quantity column with PI 954. A151 is the provision that lifts the per-package limit for dry ice in a ULD cooling non-DG (BAM ICAO TI entry, already correctly stated in passive §4). No change needed.
- **Sublimation at -78.5℃.** The doc already says "대기압에서 -78℃보다 높으면 승화" (FAA source). Left as is.
- **"VIP removes ~95% of air" and "PCM -68~+65℃".** Not verified on a primary or manufacturer page. Omitted (the doc keeps the va-Q-tec range).
- **XPS.** No sourced thermal-conductivity or cold-chain usage figure was at hand. Omitted.
- **"Typical control range -25~+25℃" for air active units.** Not supported. Public sheets show 0/+2/+3/+4~+25/+30℃ for compressor units and -20~+20℃ for dry-ice units (already in active §2). Omitted.
- **"Lower set points drain the battery faster."** Not added as a general statement. The doc already shows DoKaSch's condition-dependent run times.
- **Vendor specifics such as "1.5V × 16".** The doc already states "D형 알칼라인 건전지 16개" from the Envirotainer T-Tech manual. No vendor spec tables were added.
- **Special-cargo free time "12h at Korean carriers vs 24h general/foreign" and "storage ×2".** These conflict with the site's verified ch-air-storage (12h/24h/none by terminal; 50% surcharge). Not stated. Case D says only that special cargo may have short free time and a surcharge, and links ch-air-storage.
- **"Arrange X-ray screening exemption (shipper's obligation)".** No exemption program by that name was found. Stated instead as "arrange the screening method with the airline in advance" plus the verified 상용화주 rule (항공보안법 제17조의4 제3항).
- **"Some countries' terminals do not accept RKN/RAP".** No public source was found. Phrased as "현지 터미널 규정 확인".

## Exact new text (diff of the edited copies vs the repo; "+" added, "-" replaced)

```
### tc-basics.html
-  <li>포장 방식(패시브 박스, 패시브 팔레트, 액티브 컨테이너)과 포장의 검증된 유지 시간</li>
+  <li>포장 방식(패시브 박스, 패시브 팔레트, 액티브 컨테이너)과 포장의 검증된 유지 시간. 액티브면 장비 모델과 설정 온도, 위치·온도를 실시간으로 볼 추적 방법</li>
+  <li>견적에 넣을 범위: 일정, 도착지 수입 통관, 도착국 현지 규정, 재사용 용기·포장재를 돌려보내는지와 그 비용</li>
+  
+  <p>출고부터 인도까지 단계별로 무엇을 요청하고 남기는지는 한 포워더의 운영 절차(익명)를 옮긴 <a data-doc="tc-air-passive">항공 패시브 포장</a> 8장과 <a data-doc="tc-air-active">항공 액티브 컨테이너</a> 8장의 인계 기록 점검표를, 그 절차가 생긴 배경이 된 사고는 <a data-doc="tc-cases">온도 사고 사례</a>의 익명 사례를 보십시오.</p>
+  

### tc-air-passive.html
-  <p>드라이아이스만 있거나 일반 화물과 함께 있는 화물은 위험물 신고서(Shipper's Declaration) 없이 접수하며, IATA는 이 경우용 수락 체크리스트를 따로 공개합니다. 2027년판 체크리스트가 확인하는 항목은 다음과 같습니다.</p>
+  <p>드라이아이스만 있거나 일반 화물과 함께 있는 화물은 위험물 신고서(Shipper's Declaration) 없이 접수하며, IATA는 이 경우용 수락 체크리스트를 따로 공개합니다. 이 양식은 제목부터 "위험물 신고서가 필요 없는 경우"로 범위를 정해 두었으므로, 신고서가 필요한 다른 위험물을 드라이아이스로 식히는 화물은 이 양식이 아니라 그 위험물의 신고서 절차로 접수합니다. 그런 화물이면 화주에게 신고서를 받고 드라이아이스 기재 방법은 항공사에 확인합니다. 2027년판 체크리스트가 확인하는 항목은 다음과 같습니다.</p>
-  <h3>8. 포워더 체크리스트</h3>
+  <h3>8. 출고부터 인도까지: 한 포워더의 운영 절차</h3>
+  <p>아래 표는 한 국내 포워더가 내부 가이드로 쓰는 항공 패시브 화물 운영 절차(익명)를 단계별로 옮긴 것입니다. 법령이나 IATA 규정이 아니라 실무 예시이고, 항공사·화주 절차가 있으면 그쪽이 우선합니다. 포장 상태 확인, 차량 온도 측정, 드라이아이스 보충처럼 화물을 직접 다루는 일은 운전기사·창고·지상조업사가 하고, 포워더는 그 작업을 요청하고 결과(사진, 기록, 확인 메일)를 받아 보관합니다.</p>
+  
+  <table class="lib-table">
+  <thead><tr><th>단계</th><th>확인하고 정할 것</th><th>누가 하고 무엇을 남기나</th></tr>
+  </thead>
+  <tbody>
+  <tr><td>출고 전 계획</td><td>요구 보관 온도와 허용 일탈(범위와 허용 시간), 데이터로거 사용 권장. 출발지·환적지·도착지에서 냉장 보관이 필요한지와 그곳 창고의 설정 온도. 드라이아이스면 재보충(re-icing) 기준과 출발지·환적지·도착지에서 보충이 가능한지. 예상 리드타임이 포장의 검증 시간을 넘으면 일탈 위험을 화주에게 알림</td><td>화주가 기준을 정하고 포워더는 서면으로 받음. 재보충 가능 여부는 항공사·조업사에 확인하고 회신을 보관</td></tr>
+  
+  <tr><td>부킹</td><td>항공사의 콜드체인 상품 코드로 부킹하고 전화로 한 번 더 확인. 직항 우선. 환적은 그곳에서 재보충이나 냉장 보관이 보장될 때만. 일정과 화물 정보를 도착지에 미리 보냄. House AWB에 온도대, 품목, 취급 주의 문구를 분명히 적음</td><td>포워더. 부킹 확인서와 항공사 회신, 도착지 사전 통보 메일 보관</td></tr>
+  
+  <tr><td>트럭 운송</td><td>항공편에 맞춰 배차. 상차 전 포장 손상과 온도 라벨 확인. 냉장 탑차는 예냉을 요청하고, 적외선 온도계로 잰 적재함 온도를 사진으로 받음. 설정 온도에 못 미치면 상차를 거부. 운송 뒤 차량 온도 기록을 회수하고, 차량 기록과 따로 데이터로거를 넣도록 화주에게 권함</td><td>운전기사·창고가 확인하고 사진을 보냄. 포워더는 사진과 차량 온도 기록을 보관</td></tr>
+  
+  <tr><td>출발 터미널</td><td>하차 뒤 포장 상태 확인, 냉장 보관 구역 우선 배정, 항공편 일정에 맞춘 드라이아이스 보충</td><td>지상조업사·항공사. 포워더는 보관 구역과 보충 여부를 확인받음</td></tr>
+  
+  <tr><td>도착지</td><td>도착 전 냉장 창고 배정과 그 설정 온도 확인. 항공사 냉장 창고 온도가 요구 조건에 못 미치면 다른 시설을 수배. 재보충이 필요한지 화주와 결정. 인도 예정일을 무료 시간과 비교해 넘길 것 같으면 보관료를 화주에게 미리 안내. 배송 트럭은 출발지와 같은 기준으로 확인</td><td>도착지 대리점·조업사. 포워더는 창고 설정 온도 회신과 화주 합의 내용을 보관</td></tr>
+  
+  </tbody></table>
+  <p>이 절차가 막으려는 사고는 경유지·도착지 창고의 상온 보관, 재보충 누락, 차량 온도 기록과 화물 로거의 불일치입니다. 실제로 그렇게 난 사고는 <a data-doc="tc-cases">온도 사고 사례</a>의 익명 사례에서, 인천공항 수입화물의 무료 시간과 특수화물 보관료는 <a href="/library/charges/ch-air-storage">인천공항 보관료: 종가료·종량료</a>에서 볼 수 있습니다.</p>
+  
+  
+  <h3>9. 포워더 체크리스트</h3>

### tc-air-active.html
-  <li>배터리 잔량을 20% 이상으로 유지한다. RelEye는 20% 아래에서 경보를 띄운다.</li>
+  <li>배터리 잔량을 20% 이상으로 유지한다. RelEye는 20% 아래에서 경보를 띄운다. 배터리가 바닥나면 냉각과 가열이 모두 멈추므로 터미널 보관 중에도 잔량을 감시하고 충전한다.</li>
-  <p>포워더는 컨테이너 안의 화물을 직접 점검하지 않습니다. 화주에게 받을 서류와 지시, 예약 때 항공사·제조사에 확인할 항목으로 정리했습니다.</p>
+  <p>포워더는 컨테이너 안의 화물을 직접 점검하지 않습니다. 화주에게 받을 서류와 지시, 예약 때 항공사·제조사에 확인할 항목으로 정리했습니다. 뒤의 인계 기록 점검표는 한 국내 포워더가 내부 가이드로 쓰는 표본 점검표(익명)를 옮긴 실무 예시이고, 화주 SOP나 장비 매뉴얼이 있으면 그쪽이 우선합니다.</p>
+  <h4>예약 전</h4>
-  <li>설정 온도의 배터리 지속 시간을 실제 경로의 외기 조건으로 제조사에 확인했고, 환적·대기 공항에서 충전이 가능한가</li>
+  <li>설정 온도의 배터리 지속 시간을 실제 경로의 외기 조건으로 제조사에 확인했는가. 출발지·도착지에서 충전할 수 있는지, 드라이아이스·배터리 교체 기준과 교체 가능한 곳을 확인했는가</li>
+  
+  <li>환적은 전체 리드타임이 지속 시간 안에 들거나 환적지에서 충전·드라이아이스 보충이 보장될 때만 넣었는가</li>
+  
+  <li>출발 공항에서 컨테이너를 통째로 엑스선 검색하기 어려울 수 있으므로, 보안검색 방법을 화주 쪽에서 항공사와 미리 협의했는가. 국내에서는 국토교통부가 지정한 상용화주가 보안검색을 한 항공화물은 항공운송사업자가 다시 보안검색을 하지 않는 것이 원칙이다(항공보안법 제17조의4 제3항. 훼손 흔적, 통제 이탈, 무작위 표본검색 등 예외 있음)</li>
+  <li>도착 공항 터미널이 액티브 컨테이너(RKN·RAP 등)를 그대로 받는지 현지 터미널 규정을 확인했는가. 받지 않는 곳이면 수하인이 현지에서 컨테이너를 여는 데 동의하는지도 미리 받아 둔다</li>
+  
+  <li>도착지에서 로거를 누가 회수해 데이터를 내려받아 공유할지(운송사가 로거를 화주에게 돌려보내는지 포함), 화물 준비가 끝나면 운송인이 온도 기록을 포워더·화주에게 보내는지 합의했는가</li>
+  
+  <li>빈 컨테이너 반납 때 인수증(POD)을 받고, 반납 스테이션의 운영 시간을 확인했는가</li>
+  
+  </ul>
+  <h4>인계 지점마다 남길 기록</h4>
+  <p>아래 기록은 화주의 적입 작업자, 운송사 기사, 지상조업사가 만들고, 포워더는 요청해서 받아 보관합니다. 반출, 적입, 항공사 인계 전, 도착지 ULD 해체 뒤처럼 손이 바뀌는 곳마다 같은 항목을 남기면 사고 때 어느 구간에서 문제가 생겼는지 가릴 수 있습니다.</p>
+  
+  <ul class="lib-check">
+  <li>컨테이너 준비: 내부가 깨끗하고 손상이 없으며 문이 제대로 작동한다. 배터리는 90% 이상(아니면 화주 지시를 따른다). 설정 온도가 지시대로다(예: +2~+8℃ 화물에 5℃). 장비에 운송 모드나 House AWB 번호 입력 기능이 있으면 매뉴얼대로 설정한다. 내부 온도가 범위 안에서 안정될 때까지 기다린다</li>
+  
+  <li>반출: 반출 시각, 기사 이름, 차량 번호, 컨테이너별 온도와 배터리 잔량을 적는다. 설정 온도에 이르지 않은 컨테이너는 상차하지 않는다</li>
+  
+  <li>적입: 데이터로거를 화주 지시대로 설정해 붙인다(사전 조절 시간, 기록 간격 등). 서류(인보이스, 패킹리스트, MSDS)를 갖춘다. 고보안 씰을 채우고 씰과 번호를 사진으로 남긴다</li>
+  
+  <li>공항까지: 차량 번호, 온도가 범위 안인지, 외관 손상 여부, 도착 시각을 적고 터미널 반입 시각을 남긴다. 항공사에 넘기기 전 임시 보관하는 동안에는 배터리를 충전한다</li>
+  
+  <li>도착지: 온도가 범위 안인지, 손상이 없는지 보고, 인계 때 씰 번호를 서류와 대조한다. 가능하면 충전 상태와 보관 장소 사진을 받는다</li>
+  
+  <li>사진 증빙: 표시창의 설정 온도와 현재 온도, 배터리 잔량, 전원 케이블과 플러그 상태(낡은 케이블)를 찍는다</li>
+  
+  <li>부득이하게 열어야 할 때: 누가 요청했는지 적고 화주에게 바로 알린다. 화물 온도대에 맞는 냉장실로 옮긴 뒤 열고, 장소를 기록한다. 열기 전 사진, 연 시각, 다시 봉한 뒤 사진, 봉한 시각과 새 씰 번호, 충전 중인 모습과 제어 패널 사진을 남긴다</li>
+  
+  <li>온도 일탈이 나면: 즉시 화주에게 연락해 지시를 따른다. 일탈 시작·종료 시각, 원인, 최고·최저 온도를 기록한다</li>
+  
+  <p>도착 공항에서 조업사가 도착한 액티브 컨테이너를 반납용 빈 컨테이너로 알고 전원을 꺼 버린 사고가 있었습니다. 도착 컨테이너와 반납 컨테이너를 나눠 둘 구역을 조업사에 요청하고, 운송 알림을 담당자가 받게 해 두면 막을 수 있습니다. 경위는 <a data-doc="tc-cases">온도 사고 사례</a>의 익명 사례 A를 보십시오.</p>
+  
+  <p class="lib-source">출처: 항공보안법 제17조의4(법률 제21414호, 시행 2026. 2. 27.) — <a href="https://www.law.go.kr/법령/항공보안법" target="_blank" rel="noopener noreferrer">law.go.kr 항공보안법</a>; 인계 기록 점검표는 한 국내 포워더의 내부 가이드(익명, 2024. 12.) (2026년 10월 20일 확인)</p>
+  

### tc-reefer-practice.html
+  <p>"운영 예"로 표시한 항목은 한 국내 포워더의 리퍼 운영 절차(익명)에서 가져온 실무 기준입니다. 기사·터미널이 현장에서 확인하고, 포워더는 요청한 사진과 회신을 보관합니다.</p>
+  
+  <li>화주에게 허용 온도 범위, 데이터로거 사용 여부, MSDS 제공 여부, 컨테이너 크기를 받았다.</li>
+  
+  <li>운영 예: 리드타임이 짧은 선사를 우선하고, 환적항과 도착지 CY의 리퍼 전원(플러그) 여유를 선사에 확인했다.</li>
+  
-  <li>PTI가 끝난 장비인지 확인했고 기기인수도증을 보관했다.</li>
+  <li>PTI가 끝난 장비인지 확인했고 기기인수도증을 보관했다. 운영 예: PTI(의약품이면 사전 조절 포함) 시간을 두려고 반출 2일 전까지 부킹한다.</li>
-  <h4>적입 후·운송 중</h4>
+  <h4>반출·적입·운송 중</h4>
+  <li>리퍼 전원을 공급할 수 있는 차량이나 젠셋을 배차하고, 기사가 전원을 끊거나 설정을 바꾸지 않도록 지시했다.</li>
+  
+  <li>운영 예: 반출 전 컨테이너 안팎 사진, 반출 때 표시창의 설정 온도와 현재 온도 사진, 전원 연결 확인을 기사에게 받았다.</li>
+  
+  <li>운영 예: CY 반입 뒤 선사에서 장치 위치를 받아 전원 연결 상태를 확인했다.</li>
+  
+  
+  <li>운영 예: 도착 때 설정 온도 확인과 CY 전원 연결을 요청했고, 플러그와 케이블이 낡지 않은 차량을 배차했다.</li>
+  
+  <li>무료 장치 기간(free time)을 확인해 넘길 것 같으면 Demurrage·Detention 등 비용을 화주에게 미리 알렸다.</li>

### tc-cases.html
-  <p>온도유지 화물 사고는 대부분 장비가 갑자기 망가져서가 아니라 사람과 서류 사이에서 생깁니다. 겨울 공항 램프에 놓인 인슐린, 경유지에서 냉방을 끈 화물칸, "-18℃ 이상 +18℃ 이하"라고 적힌 운송 지시, 전원 없는 야적장에 3주 동안 놓인 냉동 컨테이너가 그렇습니다. 이 문서는 항공 4건, 초저온 백신 배송 1건, 해상 5건의 온도 일탈(excursion) 사고를 판결문, P&amp;I·보험조합 공개 사례, 공식 발표로 확인해 사실관계, 원인, 결과, 실무 교훈 순서로 정리합니다. 마지막에는 국내 독감 백신 상온 노출 사건을 참고 사례로 붙였습니다.</p>
+  <p>온도유지 화물 사고는 대부분 장비가 갑자기 망가져서가 아니라 사람과 서류 사이에서 생깁니다. 겨울 공항 램프에 놓인 인슐린, 경유지에서 냉방을 끈 화물칸, "-18℃ 이상 +18℃ 이하"라고 적힌 운송 지시, 전원 없는 야적장에 3주 동안 놓인 냉동 컨테이너가 그렇습니다. 이 문서는 항공 4건, 초저온 백신 배송 1건, 해상 5건의 온도 일탈(excursion) 사고를 판결문, P&amp;I·보험조합 공개 사례, 공식 발표로 확인해 사실관계, 원인, 결과, 실무 교훈 순서로 정리합니다. 이어서 한 국내 포워더의 내부 가이드에 실린 사고 4건을 익명으로 줄여 싣고, 마지막에는 국내 독감 백신 상온 노출 사건을 참고 사례로 붙였습니다.</p>
-  <p class="lib-disclaimer">사례 요약은 판결문, 판례 데이터베이스 요약, 공개 사례집과 언론에 실린 공식 발언을 바탕으로 했지만 모든 사정을 담지는 못합니다. 결론은 그 사건의 사실관계, 계약 조건, 준거법에 따른 것이라 비슷해 보이는 다른 사건에 그대로 적용되지 않습니다. 프랑스·영국 일부 판결은 국제해사위원회(CMI) 판례 데이터베이스의 영문 요약으로 확인했고, 출처 줄에 그렇게 적었습니다. 모든 링크는 2026년 10월에 확인했습니다. 몬트리올 협약의 화물 책임 한도는 사고 당시 기준(2004년 17 SDR)과 현재 기준(2024. 12. 28.부터 kg당 26 SDR)이 다르므로 한도 계산은 <a href="/library/cargo-insurance/ins-carrier-liability">운송인 책임과 한도</a>를 보십시오. 냉동기 온도 오설정에 관한 대법원 2025다211111 판결, 칠레산 포도 리퍼 사건(Exportadora Valle de Colina v A.P. Moller-Maersk), ITIC의 설정 온도 입력 실수 사례, Swedish Club의 냉장 소고기 사례, 원두 결로 사건(Volcafe v CSAV)은 <a href="/library/cargo-insurance/ins-cases">소송·보험금 분쟁 사례</a>에서 다루므로 여기서는 반복하지 않습니다.</p>
+  <p class="lib-disclaimer">사례 요약은 판결문, 판례 데이터베이스 요약, 공개 사례집과 언론에 실린 공식 발언을 바탕으로 했지만 모든 사정을 담지는 못합니다. 결론은 그 사건의 사실관계, 계약 조건, 준거법에 따른 것이라 비슷해 보이는 다른 사건에 그대로 적용되지 않습니다. 프랑스·영국 일부 판결은 국제해사위원회(CMI) 판례 데이터베이스의 영문 요약으로 확인했고, 출처 줄에 그렇게 적었습니다. 모든 링크는 2026년 10월에 확인했습니다. 4장의 익명 사례 A~D는 한 포워더의 내부 가이드(2024년 12월)에 적힌 내용을 회사·화주·제품·항공사·공항이 드러나지 않게 줄인 것이라 공개 자료로 따로 확인할 수 없고, 날짜와 금액은 뺐습니다. 몬트리올 협약의 화물 책임 한도는 사고 당시 기준(2004년 17 SDR)과 현재 기준(2024. 12. 28.부터 kg당 26 SDR)이 다르므로 한도 계산은 <a href="/library/cargo-insurance/ins-carrier-liability">운송인 책임과 한도</a>를 보십시오. 냉동기 온도 오설정에 관한 대법원 2025다211111 판결, 칠레산 포도 리퍼 사건(Exportadora Valle de Colina v A.P. Moller-Maersk), ITIC의 설정 온도 입력 실수 사례, Swedish Club의 냉장 소고기 사례, 원두 결로 사건(Volcafe v CSAV)은 <a href="/library/cargo-insurance/ins-cases">소송·보험금 분쟁 사례</a>에서 다루므로 여기서는 반복하지 않습니다.</p>
-  <h3>4. 국내 참고 사례: 2020년 독감 백신 상온 노출</h3>
+  <h3>4. 한 포워더의 사고 기록(익명)</h3>
+  <p>아래 네 건은 한 국내 포워더가 온도유지 화물 운영 가이드에 교육용으로 실은 실제 사고입니다. 판결이나 공개 사례가 아니어서 사실관계는 가이드에 적힌 대로 옮겼고, 누가 책임을 졌는지보다 어디서 무엇이 빠졌는지에 초점을 맞췄습니다. 이 사고들에서 나온 단계별 절차는 <a data-doc="tc-air-passive">항공 패시브 포장</a> 8장과 <a data-doc="tc-air-active">항공 액티브 컨테이너</a> 8장에 정리했습니다.</p>
+  
+  <table class="lib-table">
+  <thead><tr><th>사례</th><th>화물·운송</th><th>일탈이 생긴 곳</th><th>빠진 것</th></tr>
+  </thead>
+  <tbody>
+  <tr><td>A</td><td>바이오 의약품, 항공 액티브 컨테이너</td><td>유럽의 한 도착 공항</td><td>도착 컨테이너와 반납 컨테이너의 구분, 현지 조업 인력 교육</td></tr>
+  
+  <tr><td>B</td><td>냉장 백신, 항공 패시브 팔레트</td><td>미주 경유 공항과 남미 도착 공항의 항공사 창고</td><td>냉장 창고 공간 확인, 보관 온도 전달</td></tr>
+  
+  <tr><td>C</td><td>냉동 화물, 드라이아이스 패시브(미국발 한국행)</td><td>출발 전 대기, 도착지 냉동 창고, 냉장 탑차</td><td>드라이아이스 재보충, 창고 설정 온도 확인, 차량 기록 검증</td></tr>
+  
+  <tr><td>D</td><td>고가 온도유지 화물, 항공 수입</td><td>(온도 사고 아님) 인천공항 수입 터미널</td><td>화물 성격별 House AWB 분리, 무료 시간 관리</td></tr>
+  
+  </tbody></table>
+  
+  <h4>사례 A. 도착 공항에서 꺼진 액티브 컨테이너</h4>
+  <p><strong>경위.</strong> 바이오 의약품을 배터리와 전원으로 온도를 유지하는 액티브 컨테이너에 실어 유럽의 한 공항으로 보냈습니다. 도착한 뒤 지상조업사 작업자가 컨테이너 두 대를 반납할 빈 컨테이너로 착각해 전원을 껐고, 내부 온도가 허용 범위 위로 올라갔습니다.</p>
+  
+  <p><strong>실무 교훈.</strong> 액티브 컨테이너는 전원이 계속 들어가야 온도를 지킵니다. 비행이 끝났다고 운송이 끝난 것이 아니고, 도착 뒤 수하인이 인수할 때까지가 모두 위험 구간입니다. 가이드가 꼽은 예방책은 공항에서 도착 컨테이너와 반납 컨테이너를 표시된 별도 구역에 두도록 조업사에 요청하는 것, 현지 조업 인력 교육, 인수·인도 때 현장 확인, 담당자에게 자동으로 가는 운송 알림입니다. 포워더는 도착지 대리점을 통해 구역 분리와 알림 수신자를 미리 정해 둘 수 있습니다.</p>
+  
+  
+  <h4>사례 B. 경유지와 도착지에서 상온에 놓인 패시브 팔레트</h4>
+  <p><strong>경위.</strong> 냉장 백신을 패시브 용기 팔레트 여러 개에 실어 미주 공항을 거쳐 남미로 보냈습니다. 냉장 창고 공간이 모자랐고 보관 온도를 잘못 읽은 탓에, 항공사 창고는 경유 공항과 도착 공항 두 곳 모두에서 화물을 상온 구역에 두었고 온도 일탈이 났습니다.</p>
+  
+  <p><strong>실무 교훈.</strong> 패시브 포장은 검증된 유지 시간이 정해져 있어 빨리 옮기는 것이 원칙이고, 멈춰야 한다면 제품 온도대에 맞는 곳에 두어야 합니다. 가이드는 시간·온도 라벨을 추가로 붙이고, 현장 확인과 알림을 함께 쓰라고 적었습니다. IATA Time and Temperature Sensitive 라벨은 모든 외장에 보이게 붙이고 예약·운송장과 같은 섭씨 범위를 적어야 하므로(<a data-doc="tc-basics">온도유지 화물 기초와 규정</a> 4장), 팔레트를 묶거나 나눌 때 라벨이 가려지지 않았는지 화주와 조업사에 확인합니다. 예약 때는 경유지와 도착지 창고의 냉장 공간과 설정 온도를 확인해 둡니다(사례 2, 4와 같은 구간입니다).</p>
+  
+  
+  <h4>사례 C. 재보충 없이 허용 시간을 넘긴 냉동 화물</h4>
+  <p><strong>화물.</strong> 미국발 한국행 냉동 화물을 드라이아이스 패시브 포장으로 보냈습니다. 화주의 운송 요청서에는 48시간마다 드라이아이스를 다시 채우라고 적혀 있었고, 패킹리스트의 권장 보관 온도는 약 -12℃, 허용 일탈 시간은 72시간이었습니다.</p>
+  
+  <p><strong>경위.</strong> 픽업부터 출발까지 48시간이 넘게 걸렸는데 재보충을 하지 않았고, 픽업 뒤 약 53시간째, 비행기가 뜨기도 전에 일탈이 시작됐습니다. 한국에 도착해서도 재보충 없이 항공사 냉동 창고에 들어갔는데, 그 창고는 약 -7~-12℃로 운영되어 요구 온도에 못 미쳤습니다. 배송한 냉장 탑차의 온도 기록은 -20℃였지만 제품 옆 데이터로거는 약 -3℃를 기록해, 차량 기록이 조작됐다는 의심이 나왔습니다.</p>
+  
+  <p><strong>결과.</strong> 허용 시간 72시간을 넘겨 화물 전량을 폐기했습니다. 화물 가액과 운임을 합친 청구는 포워더의 배상책임보험으로 처리됐습니다. 가이드는 보험사가 특약으로 패시브 온도유지 화물의 보상을 거절하는 경우가 많다고 적고 있습니다. 적하보험의 온도 손해 조건은 <a href="/library/cargo-insurance/ins-uninsurable">보험 가입이 어렵거나 안 되는 화물</a>, 포워더 배상책임보험은 <a href="/library/cargo-insurance/ins-forwarder">포워더와 보험</a>을 보십시오.</p>
+  
+  <p><strong>실무 교훈.</strong> 화주가 재보충을 지시하면 언제, 어디서, 누가 채우는지를 정한 재보충 절차를 부킹 전에 만들어야 합니다. 경유지·도착지 창고는 이름이 "냉동 창고"라도 실제 설정 온도를 확인하고, 모자라면 맞는 시설을 따로 수배합니다. 냉장 탑차는 적재함을 적외선 온도계로 잰 사진을 받고, 차량 온도 기록을 화물 속 독립 로거와 대조합니다. 차량 기록만 믿으면 안 되는 이유는 국내에서도 확인됩니다. 2024년 10월 31일 식품의약품안전처와 경찰은 냉장·냉동 식품 운반 차량의 온도기록계에 조작 기능을 넣어 판매·유통한 제조업체 대표·설치업자 등 56명과 이를 쓴 기사 3명을 식품위생법 위반으로 검거했다고 밝혔고, 범행 이유는 연료비와 냉각기 유지·보수 비용을 줄이려는 것으로 알려졌습니다. 이 사례의 차량이 그 사건과 관련이 있다는 뜻은 아닙니다.</p>
+  
+  <p class="lib-source">출처: "냉동차량 온도기록계 조작"…경찰과 공조로 '일망타진'(뉴시스, 2024. 11. 1.) — <a href="https://www.newsis.com/view/NISX20241101_0002942827" target="_blank" rel="noopener noreferrer">뉴시스</a>; 사례 A~D는 한 국내 포워더의 내부 가이드(익명, 2024. 12.) (2026년 10월 20일 확인)</p>
+  
+  
+  <h4>사례 D. 품목을 나누지 않은 House AWB와 무료 시간</h4>
+  <p><strong>경위.</strong> 고가 온도유지 화물 약 10톤이 House AWB 한 건으로 인천공항에 도착했습니다. 온도 조건이 다른 화물과 일반 화물이 섞여 있었지만 화주가 인보이스 분리를 거부해 한 건으로 묶였습니다. 전량이 특수화물로 분류되어 무료 시간이 짧았고, 무료 시간이 끝나고 두어 시간 뒤 반출되면서 종가료와 종량료를 합친 보관료가 수천만 원 단위로 나왔습니다.</p>
+  
+  <p><strong>실무 교훈.</strong> 인천공항 수입 터미널은 특수화물로 분류되면 무료 시간이 짧거나 없고 할증이 붙는 곳이 있으며, 무료 시간을 넘기면 날짜가 바뀐 횟수로 보관일수를 셉니다. 고가 화물은 종가료가 커서 몇 시간 차이가 큰 금액이 됩니다. 터미널별 무료 시간과 계산은 <a href="/library/charges/ch-air-storage">인천공항 보관료: 종가료·종량료</a>에서 다룹니다. 가능하면 화물 성격(냉장, 상온, 위험물, 일반)별로 House AWB와 인보이스를 나누고, 반입 터미널의 무료 시간을 시간 단위로 확인해 그 안에 반출을 준비합니다. 넘길 것 같으면 예상 보관료와 부담 주체를 화주와 미리 합의합니다.</p>
+  
+  
+  <h3>5. 국내 참고 사례: 2020년 독감 백신 상온 노출</h3>
-  <h3>5. 사례에서 뽑은 포워더 체크리스트</h3>
-  <p>포워더는 화물을 직접 검사하지 않습니다. 대신 화주에게 무엇을 받고, 예약 때 무엇을 확인하고, 사고 뒤 무엇을 요청할지는 포워더가 정할 수 있습니다. 위 열 건에서 반복된 항목을 정리했습니다.</p>
+  <h3>6. 사례에서 뽑은 포워더 체크리스트</h3>
+  <p>포워더는 화물을 직접 검사하지 않습니다. 대신 화주에게 무엇을 받고, 예약 때 무엇을 확인하고, 사고 뒤 무엇을 요청할지는 포워더가 정할 수 있습니다. 위 사례에서 반복된 항목을 정리했습니다.</p>
+  
+  <li>도착지 조업사에 도착 액티브 컨테이너와 반납 컨테이너를 나눠 둘 구역을 요청하고, 운송 알림을 받을 담당자를 정했는가(사례 A)</li>
+  
+  <li>경유지·도착지 창고의 냉장 공간과 실제 설정 온도를 확인했고, 화주의 드라이아이스 재보충 지시를 실행할 시점·장소·작업자를 정했는가(사례 B, C)</li>
+  
+  <li>냉장 탑차의 적외선 온도계 측정 사진을 받고 차량 온도 기록을 화물 속 독립 로거와 대조하는가(사례 C)</li>
+  
+  <li>성격이 다른 화물을 House AWB 한 건으로 묶지 않도록 화주와 협의했고, 반입 터미널의 무료 시간을 시간 단위로 알고 있는가(사례 D)</li>

```
