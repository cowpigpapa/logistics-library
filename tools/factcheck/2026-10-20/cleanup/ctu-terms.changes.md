# CTU Code commentary: shipper/consignor terminology change

Working copy: ctu-library.js (this folder). Repo file is untouched. `node --check` passes.
Mapping applied (tools/STYLE.md, 2026-10-20 bullet): shipper → 송하인, consignor → 출하자, packer → 적입자.
Every role assignment was checked against the official text (MSC.1/Circ.1497 and 1498, fetched to src/), e.g. §11.1.2 / IM9 §1.1 sealing = shipper, §12.1.8 and Annex 5 §4.1.3 SDS = consignor (or shipper), §13.1.2 "consignors, forwarders", IM7 §6.1.1 "Consignors should label a load", §6.2 CTU selection = shipper, §7.3.4.1 ro-ro = shipper, §4.2.10 "Shippers of empty CTUs", glossary "Overpack: used by a single shipper", Annex 1 §7–§8.

Counts over all 105 occurrences (화주 70, 송하인 35) in ctu-library.js:
- (a) CTU shipper → 송하인: 58 (57 화주, plus the "송하인" in the old ch1-2-terms note, which already meant B/L shipper and was rewritten)
- (b) CTU consignor → 출하자: 20
- (c) legal/case/CMR/CIM 송하인, kept: 13
- (d) commercial-owner 화주, kept: 10
- (e) inside "Cubestow에서는 / Cubestow 적용" sections, NOT edited per instruction: 4
After: 화주 13, 송하인 70, 출하자 20.

## 1. Changed sentences (before → after), by doc id

Legend: (a) CTU shipper 화주→송하인, (b) CTU consignor 송하인→출하자. 51 edits, 78 term occurrences: (a) 58, (b) 20.

### ch11-after
- before: 요구되는 경우 화주는 국제 운송 CTU를 적입 완료 즉시 고유 식별번호가 있는 봉인으로 봉인해야 합니다.
  after:  요구되는 경우 송하인은 국제 운송 CTU를 적입 완료 즉시 고유 식별번호가 있는 봉인으로 봉인해야 합니다.
- before: 화주 | 송하인·적입자에게서 필요한 서류를 받아 정확한지 확인하고, 운송인이 요구하는 시점까지 전달
  after:  송하인 | 출하자·적입자에게서 필요한 서류를 받아 정확한지 확인하고, 운송인이 요구하는 시점까지 전달
- before: 적입자 → 화주 | CTU 번호(컨테이너 번호나 차량 번호)
  after:  적입자 → 송하인 | CTU 번호(컨테이너 번호나 차량 번호)
- before: 적입자 → 화주 | 화물이 CTU 밖으로 돌출하면
  after:  적입자 → 송하인 | 화물이 CTU 밖으로 돌출하면

### a5-receiving
- before: 다르면 화주의 해명을 받을 때까지 인수하지 않습니다.
  after:  다르면 송하인의 해명을 받을 때까지 인수하지 않습니다.
- before: 운송인과 화주, CTU 운영자에게 알리고 서류에 적으며,
  after:  운송인과 송하인, CTU 운영자에게 알리고 서류에 적으며,
- before: 송하인이나 화주에게 물질안전보건자료(SDS)를 요청해 조치와 보호구를 정합니다.
  after:  출하자나 송하인에게 물질안전보건자료(SDS)를 요청해 조치와 보호구를 정합니다.
- before: 상황에 따라 운송인, CTU 운영자, 화주에게 알립니다.
  after:  상황에 따라 운송인, CTU 운영자, 송하인에게 알립니다.
- before: 다음 송하인·적입자·화주에게 바로 보냅니다.
  after:  다음 출하자·적입자·송하인에게 바로 보냅니다.

### ch1-2-terms
- before: 화주 | shipper | 선하증권·운송장에 화주로 적힌 당사자, 또는 운송인과 운송계약을 맺는(맺게 하는) 당사자
  after:  송하인 | shipper | 선하증권·운송장에 송하인으로 적힌 당사자, 또는 운송인과 운송계약을 맺는(맺게 하는) 당사자
- before: 송하인 | consignor | 운송할 화물을 준비하는 당사자. 운송인과 직접 계약하면 화주 역할도 맡습니다
  after:  출하자 | consignor | 운송할 화물을 준비하는 당사자. 운송인과 직접 계약하면 송하인 역할도 맡습니다
- before: 화주·송하인이 자기 사업장에서 직접 실으면 그들이 곧 적입자입니다
  after:  송하인·출하자가 자기 사업장에서 직접 실으면 그들이 곧 적입자입니다
- before: 한 화주가 여러 포장화물을 팔레트 위에 묶거나 상자에 넣어 한 단위로 만든 외장
  after:  한 송하인이 여러 포장화물을 팔레트 위에 묶거나 상자에 넣어 한 단위로 만든 외장
- before: 국내 실무에서는 선하증권의 shipper를 "송하인"이라고도 부르지만, CTU Code에서 화주(shipper)와 송하인(consignor)은 다른 기능입니다. 이 해설은 용어집에 따라 shipper를 화주로 씁니다.
  after:  이 해설은 상법과 이 사이트 용어집에 따라 CTU Code의 shipper를 송하인으로, consignor를 출하자로 옮깁니다. 둘은 다른 기능이며, 한 회사가 여러 기능을 겸할 수 있습니다(§4.1.6).
- before: 우리 회사가 화주·송하인·적입자 가운데 어느 기능을 맡는지 계약과 작업 지시로 먼저 정리합니다. 한 회사가 여러 기능을 겸할 수 있습니다(§4.1.6).
  after:  우리 회사가 송하인·출하자·적입자 가운데 어느 기능을 맡는지 계약과 작업 지시로 먼저 정리합니다.

### ch4-chain
- before: 'CTU 운영자·송하인·적입자·화주·운송인·수하인의 기능별 책임과,
  after:  'CTU 운영자·출하자·적입자·송하인·운송인·수하인의 기능별 책임과,
- before: alt="화주·적입자·운송인·수하인으로 이어지는 운송 사슬과 그 위로 함께 흐르는 정보"
  after:  alt="송하인·적입자·운송인·수하인으로 이어지는 운송 사슬과 그 위로 함께 흐르는 정보"
- before: 화물이 화주에서 수하인까지 가는 동안 당사자마다 맡은 책임이 있고,
  after:  화물이 송하인에서 수하인까지 가는 동안 당사자마다 맡은 책임이 있고,
- before: 그러나 운송에 안전하고 알맞은 화물을 내놓는 것은 화주의 몫입니다. 그래서 부실한 적입·고정으로 생긴 CTU의 결함은 화주 책임으로 남습니다(§4.1.2).
  after:  그러나 운송에 안전하고 알맞은 화물을 내놓는 것은 송하인의 몫입니다. 그래서 부실한 적입·고정으로 생긴 CTU의 결함은 송하인 책임으로 남습니다(§4.1.2).
- before: 화주가 직접 적입하거나 화물을 준비하지 않았다면, 적입자와 송하인이 화주에 대한 의무를 다해 CTU를 운송에 안전하게 만들어야 합니다. 그러지 못하면 화주는 적입·고정·취급·보고 잘못에 대해 그들에게 책임을 물을 수 있습니다.
  after:  송하인이 직접 적입하거나 화물을 준비하지 않았다면, 적입자와 출하자가 송하인에 대한 의무를 다해 CTU를 운송에 안전하게 만들어야 합니다. 그러지 못하면 송하인은 적입·고정·취급·보고 잘못에 대해 그들에게 책임을 물을 수 있습니다.
- before: 송하인 | 화물 총중량을 포함한 정확한 화물 명세. 무게중심 편심이나 넘지 말아야 할 온도 같은 특이 조건을 적입자·화주에게 알림.
  after:  출하자 | 화물 총중량을 포함한 정확한 화물 명세. 무게중심 편심이나 넘지 말아야 할 온도 같은 특이 조건을 적입자·송하인에게 알림.
- before: 봉인 정보를 화주에게 보고. 위험물 표시·표찰, 훈증 표시. 총중량을 정확히 확정해 화주에게 전달.
  after:  봉인 정보를 송하인에게 보고. 위험물 표시·표찰, 훈증 표시. 총중량을 정확히 확정해 송하인에게 전달.
- before: 화주 | 적입·고정 업무 분담을 분명히 합의해 송하인과 운송인에게 알림.
  after:  송하인 | 적입·고정 업무 분담을 분명히 합의해 출하자와 운송인에게 알림.
- before: 빈 CTU를 보내는 화주와 운영자는 정말 비어 있는지 확인하는 체계를 갖추고(§4.2.10),
  after:  빈 CTU를 보내는 송하인과 운영자는 정말 비어 있는지 확인하는 체계를 갖추고(§4.2.10),
- before: alt="화주에서 운송인과 항만으로 넘어가는 검증된 총중량(VGM), 봉인 번호, 화물 정보, 위험물 서류"
  after:  alt="송하인에서 운송인과 항만으로 넘어가는 검증된 총중량(VGM), 봉인 번호, 화물 정보, 위험물 서류"
- before: 송하인 → 적입자·화주
  after:  출하자 → 적입자·송하인
- before: 송하인 → 적입자·포워더·화주·운송인
  after:  출하자 → 적입자·포워더·송하인·운송인
- before: 적입자 → 화주 | 봉인 정보, 정확히 정한 CTU 총중량,
  after:  적입자 → 송하인 | 봉인 정보, 정확히 정한 CTU 총중량,
- before: 화주 → 송하인·운송인
  after:  송하인 → 출하자·운송인
- before: 화주 → 운송인
  after:  송하인 → 운송인
- before: 화주 → 수하인
  after:  송하인 → 수하인
- before: 계약의 중심은 화주와 운송인 (부속서 1 §6~§7)
  after:  계약의 중심은 송하인과 운송인 (부속서 1 §6~§7)
- before: CTU Code에서 주된 계약은 화주와 운송인 사이에 있습니다.
  after:  CTU Code에서 주된 계약은 송하인과 운송인 사이에 있습니다.
- before: 화주는 송하인에게서 화물 정보를, 적입자·혼재업자에게서 적입 정보를 받아 운송인에게 넘기는 정보 처리자 역할을 할 수 있습니다(§7).
  after:  송하인은 출하자에게서 화물 정보를, 적입자·혼재업자에게서 적입 정보를 받아 운송인에게 넘기는 정보 처리자 역할을 할 수 있습니다(§7).
- before: 화주가 적입자·혼재업자를 겸함: 송하인에게서 물품을 받아 CTU에 싣고 운송인에게 보냅니다(§7.1).
  after:  송하인이 적입자·혼재업자를 겸함: 출하자에게서 물품을 받아 CTU에 싣고 운송인에게 보냅니다(§7.1).
- before: 화주가 송하인을 겸함: 물품을 만들고 직접 적입한 뒤 운송인과 계약합니다(§7.2).
  after:  송하인이 출하자를 겸함: 물품을 만들고 직접 적입한 뒤 운송인과 계약합니다(§7.2).
- before: 화주가 송하인·적입자·운송인을 모두 겸함(§7.3).
  after:  송하인이 출하자·적입자·운송인을 모두 겸함(§7.3).
- before: 화주는 운송을 준비하고 화물 보험을 들 수 있습니다. 계약에 따라 화주의 책임이 끝나는 장소나 터미널이 정해져 있고, 그 뒤로는 수하인이나 그 대리인이 화주 역할을 넘겨받아 후속 운송을 준비하고 정보 사슬을 이어 갑니다(§8, §8.2).
  after:  송하인은 운송을 준비하고 화물 보험을 들 수 있습니다. 계약에 따라 송하인의 책임이 끝나는 장소나 터미널이 정해져 있고, 그 뒤로는 수하인이나 그 대리인이 송하인 역할을 넘겨받아 후속 운송을 준비하고 정보 사슬을 이어 갑니다(§8, §8.2).
- before: 수입항에서 양하될 때까지 화주가 운송 전반을 책임지는 경우를 보여 줍니다(§8.1).
  after:  수입항에서 양하될 때까지 송하인이 운송 전반을 책임지는 경우를 보여 줍니다(§8.1).

### ch6-ctu
- before: 화물과 경로에 가장 맞는 CTU를 고르는 일은 화주의 몫이며, 확신이 없으면 CTU 운영자에게 묻습니다(§6.1.1).
  after:  화물과 경로에 가장 맞는 CTU를 고르는 일은 송하인의 몫이며, 확신이 없으면 CTU 운영자에게 묻습니다(§6.1.1).

### ch7-suitability
- before: 로로선으로 보낼 때는 화주가 CTU 운영자나 로로선 운영자에게 요건을 확인합니다.
  after:  로로선으로 보낼 때는 송하인이 CTU 운영자나 로로선 운영자에게 요건을 확인합니다.

### ch13-training
- before: 송하인, 포워더, 작업자와 말이 통하도록 업계에서 쓰는 용어도 알아야 합니다.
  after:  출하자, 포워더, 작업자와 말이 통하도록 업계에서 쓰는 용어도 알아야 합니다.
- before: 4장의 당사자(화주, 적입자 등)가 지정한 사내 인원이 할 수 있고,
  after:  4장의 당사자(송하인, 적입자 등)가 지정한 사내 인원이 할 수 있고,

### a2-handling
- before: 봉인이 깨졌거나 없으면 화주와 당국에 알리고 새 봉인을 단 뒤 번호를 기록합니다.
  after:  봉인이 깨졌거나 없으면 송하인과 당국에 알리고 새 봉인을 단 뒤 번호를 기록합니다.

### im2-documents
- before: 적입자는 CTU 번호, 검증된 총중량(VGM), 봉인 번호를 화주에게 알려 선하증권·운송장·적하목록 같은 모든 운송서류에 들어가게 해야 합니다(1497 §11.3.3).
  after:  적입자는 CTU 번호, 검증된 총중량(VGM), 봉인 번호를 송하인에게 알려 선하증권·운송장·적하목록 같은 모든 운송서류에 들어가게 해야 합니다(1497 §11.3.3).
- before: 봉인 번호와 CTU 번호는 부착·확인 직후 적어 화주에게 넘기고, 선하증권 초안이 오면 같은 번호인지 대조합니다.
  after:  봉인 번호와 CTU 번호는 부착·확인 직후 적어 송하인에게 넘기고, 선하증권 초안이 오면 같은 번호인지 대조합니다.
- before: 화주 직원이 아닐 수 있습니다.
  after:  송하인 직원이 아닐 수 있습니다.

### im7-manual
- before: 송하인은 다칠 위험이 있으면 포장화물에 무게와,
  after:  출하자는 다칠 위험이 있으면 포장화물에 무게와,

### im9-seals
- before: 국제 운송 CTU는 화주가 적입을 마치는 즉시 봉인해야 하고,
  after:  국제 운송 CTU는 송하인이 적입을 마치는 즉시 봉인해야 하고,
- before: 수하인은 운송인과 화주에게 알리고 서류에 적으며,
  after:  수하인은 운송인과 송하인에게 알리고 서류에 적으며,

### ctu-overview
- before: 적입자뿐 아니라 화주, CTU 운영자, 도로·철도 운송업자, 터미널, 운송인과 수하인까지 각자의 책임과 정보 전달을 설명합니다.
  after:  적입자뿐 아니라 송하인, CTU 운영자, 도로·철도 운송업자, 터미널, 운송인과 수하인까지 각자의 책임과 정보 전달을 설명합니다.

## 2. Deliberately kept

### (c) Legal/case 송하인 — 13, kept
- im2-documents: CMR 운송장 row "송하인·운송인 사이 운송 계약" (CMR sender); CIM 운송장 row "송하인이 기재 내용의 정확성을 책임지고" and "송하인·수하인 이름과 주소" (CIM consignor = legal sender); 현장 요점 "CIM 운송장처럼 송하인이 정확성을 책임지는 서류". 4 occurrences.
- cargo-cases: "상법 제796조와 헤이그-비스비 규칙 제4조 제2항은 … 송하인의 행위"; 서울고법 2021 flat-rack case: "송하인이 화물을 방수포로 싸고…", "송하인의 위험으로 갑판 적재", "송하인의 동의 아래 이뤄진 갑판 운송", "송하인이 환적항 재포장 비용을 직접 낸 점", "송하인 적입·적부·수량 확인" (quoted waybill clause), "송하인이 고박한 포장"; ICC (A) 4.3 case: "송하인이 고용한 외부 업체가 송하인 창고에서". 9 occurrences.

### (d) Commercial-owner 화주 — 10, kept
- kr-road: "화주, 화물자동차 운송사업자·운송주선사업자처럼 운행을 지시하는 사람이 … 과적 운행을 지시·요구하거나…" — paraphrase of 도로법; 화주 is the Korean statute's own word, not a CTU Code role.
- ch8-arrival: "화주와 포워더는 이 점검을 직접 하지 않고, 적입 현장의 점검 기록과 사진을 받아 둡니다." — site practice note, commercial pair (the decision's own example).
- a3-condensation: "열대 항로나 기후대를 넘는 장거리 운송이면 화주와 상의해 포장 방습과 적출 시점까지 계획합니다." — site practice advice to the packer/forwarder; the party consulted is the cargo owner, not a CTU Code duty. Judgment call (could be 송하인 if you prefer a CTU reading).
- cargo-cases (7): summary "화주 쪽 적입·고박·포장이 부족해 보험금을 받지 못하거나…"; intro "화주는 두 번 막힐 수 있습니다"; "화주가 직접 적입·고박한 컨테이너(Shipper's Load, Stow and Count)는 이 주장이 받아들여지기 쉽습니다"; lesson "화주가 직접 포장·고박했다면 손상은 대부분 화주 몫이 됩니다" (2); Gencon case "적재 책임이 화주 쪽(용선자)에 있었으므로"; checklist "화주가 적입·고박한 화물은 운송인도 면책되기 쉽습니다". All commercial cargo-interest / insurance-claim sense.

### (e) Cubestow sections — 4, not edited
These sit under h3 "Cubestow에서는" / "Cubestow 적용" and are removed at runtime by stripProductNotes(), so they never render on the site. Left as is per the "don't touch Cubestow text" instruction. If you want the source consistent anyway:
- ch1-2-terms: "화주·운송인 사이의 서류, 총중량 확정과 신고는 다루지 않습니다." → "송하인·운송인 사이의 서류, …" (a)
- ch4-chain: "송하인이 넘겨야 할 정보 가운데 치수, 개당 중량, …" → "출하자가 넘겨야 할 정보 가운데 …" (b; under the new mapping the old wording now reads as the wrong party)
- ch4-chain: "…현장 작업 기록란에 손으로 적어 화주에게 넘길 수 있습니다." → "송하인에게" (a)
- im9-seals: "…화주에게 넘길 때 서류와 대조하는 용도로 쓸 수 있습니다." → "송하인에게" (a)

## 3. Judgment calls
- ch1-2-terms note: the old two-sentence note was replaced by "이 해설은 상법과 이 사이트 용어집에 따라 CTU Code의 shipper를 송하인으로, consignor를 출하자로 옮깁니다. 둘은 다른 기능이며, 한 회사가 여러 기능을 겸할 수 있습니다(§4.1.6)." The §4.1.6 sentence was moved here from the next bullet to avoid saying it twice; that bullet now ends after "…먼저 정리합니다."
- ch1-2-terms table row order kept (송하인/shipper first, then 출하자/consignor, 적입자/packer). Definitions otherwise unchanged except the role names inside them.
- im2-documents "적입 증명서 칸은 실제로 적입을 책임진 사람이 씁니다. 화주 직원이 아닐 수 있습니다." → 송하인 직원: read as the party submitting the documents to the carrier (CTU shipper function). Revert to 화주 if you read it as plain "the cargo owner's staff".
- a5-receiving SDS sentence follows Annex 5 §4.1.3 order "consignor or shipper" → "출하자나 송하인에게".
- ch4-chain figure alt texts and caption ("송하인·적입자·운송인·수하인으로 이어지는 운송 사슬", "화물이 송하인에서 수하인까지") changed. Checked visually: supply-chain-parties.webp labels are English (SHIPPER → PACKER → CARRIER → CONSIGNEE), information-flow-v2.webp has no party labels, so no image change is needed.
- Minimal-edit approach: role words and particles only; the advisors' reference rewrites (#1–#5) are matched in substance (#3, #4, #5 verbatim in the role parts; #1 and #2 keep the existing table/two-bullet wording with the new terms).

## 4. Other categories (not edited) — proposed fixes
Old CTU mapping still present:
1. cn-docs/cn-oog.html (p. after SOLAS sentence): "CTU Code도 송하인이 무게중심 편심 같은 개별 포장의 특이 사항을 알리고(§4.2.2), 화주가 OOG 같은 특이 성질을 운송인에게 알리도록 합니다(§4.2.4)."
   → "CTU Code도 출하자가 무게중심 편심 같은 개별 포장의 특이 사항을 알리고(§4.2.2), 송하인이 OOG 같은 특이 성질을 운송인에게 알리도록 합니다(§4.2.4)." (The preceding SOLAS VI/2 "송하인" is correct — keep.)
2. cn-docs/cn-oog.html responsibility table: "<td>화주(송하인)</td>" with basis "CTU Code §4.2.2·§4.2.4" — §4.2.2 is the consignor, §4.2.4 the shipper. → "화주(송하인·출하자)".
3. rk-docs/rk-cross.html: "CTU Code는 적입이 끝나면 적입자가 컨테이너 번호, 검증된 총중량(VGM), 씰 번호를 화주에게 알려 …(11.3.3)" → "송하인에게 알려". (Same paragraph already uses 송하인 for Annex 5 — this makes it consistent.)
4. tc-docs/tc-reefer-practice.html: "CTU Code도 온도유지 화물이면 올바른 설정 온도를 … 넣는 것을 화주 쪽 의무로 두고(§4.2.4)" → "송하인 쪽 의무로 두고(§4.2.4)". The rest of that doc uses 화주 in the commercial sense (UK P&I, 화주 지시서) and can stay.
5. dg-docs/dg-hidden.html: "CTU Code 부속서 5는 … 위험한 공기가 의심되면 송하인에게 SDS를 요청하고 …" — Annex 5 §4.1.3 says "consignor or shipper". Not wrong under the new mapping, but for precision → "출하자나 송하인에게 SDS를 요청하고".
6. tools/STYLE.md line 172 (VGM bullet) uses the example "검증된 총중량(VGM)·봉인 번호를 화주에게" — that is the CTU §11.3.3 shipper; suggest "…송하인에게" so the style guide doesn't contradict the new bullet.

Already consistent with the new mapping (no change): rk-docs/rk-damage.html (송하인 for §4.1.2, §4.2.4, Annex 5), rk-docs/rk-security.html (IM9 2.1.4 "운송인과 송하인"), rk-docs/rk-cross.html Annex 5 sentences.
Not CTU, keep: dg-docs/dg-hidden.html "IMDG Code 5.4.1.1.1 … 송하인(consignor)" and dg-docs/dg-msds.html "UN 모델 규정 … 송하인(consignor)" — IMDG/UN Model Regulations usage, where Korean regulations render consignor as 송하인; treat as legal/regulatory term (category c). rk-damage.html "화주·적입자(방습 조치)" and tc-reefer-practice.html "화주·적입자" are commercial-sense role pairs outside CTU, fine.
Stale data only: tools/termreview/data (term_sent*.json, review/in07.json, owner_rows.json) still contain pre-change CTU sentences ("…적입자·화주에게 알리며", "화주·송하인·적입자·운송인·수하인·CTU 운영자처럼…", "주된 계약은 화주와 운송인 사이이고 송하인·적입자·혼재업자 기능을…"). These are review snapshots, not site text; regenerate if the term-review page should reflect the new mapping. Generated files (library/ctu-code/*.html, search/ctu-code.*.json) will refresh on the normal build (library_index → prerender).
