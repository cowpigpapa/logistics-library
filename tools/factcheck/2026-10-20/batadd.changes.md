# EU Battery: merge of anonymized "EU 폐배터리 운송 가이드" (2026. 9.) - changes

Edited copies are in `battery-docs/*.html` in this folder. They use LF line endings, matching the git index (the on-disk working copies of de-nl.html and w-anx3-4.html are CRLF). Tag-balance check (tagcheck.py): all 8 files OK. Added body text has no em dash. Every `data-doc` target exists. When applying, bump `DOCS_VERSION` in battery-library.js and `?v=` in battery-library.html (STYLE.md section 6).

## Summary by file / section

| File | Section | Change |
|---|---|---|
| checklist.html | 1. 예약 → new h4 "폐배터리 부킹 전: 화주와의 계약·부킹 조건" | Intro paragraph plus 6 check items: (1) the shipper is responsible for classification, procedure and notification; (2) shipper warranty that the waste information is correct; (3) indemnity; (4) take-back execution and cost sit with the shipper, with the 90/30-day periods; (5) DG classification per mode (SP 376/377, link to dg-lithium §6; air only by state approval); (6) obtain warehouse documents before booking |
| checklist.html | 4. 폐배터리: 절차 확인 | LoW item rewritten: from 2026-11-09 Li waste batteries are 16 06 07*, so PIC applies even if B1090; re-plan regular Annex VII flows. Non-OECD export item: adds the Art 39(1)(b) ban for 16 06 07* |
| checklist.html | 8. 픽업과 창고 → new h4 "보관 창고(3PL)에 요청할 서류" | 6 items: (1) permit or notification plus PGS 37-2 / BImSchG; (2) scope: new/used vs damaged/waste; (3) quantity per fire compartment vs the permit; (4) quarantine area, detection and suppression, CO detection, emergency plan; (5) insurance (VdS 3103), including the waste exclusion; (6) product certificates do not prove facility compliance |
| checklist.html | 선적 파일 표 | Contract clauses added to the PIC and Annex VII rows; new row "경유 보관이 있을 때" |
| status.html | 바젤 코드 표 B1090 row | Adds "리튬계는 2026. 11. 9.부터 유해(16 06 07*)이므로 PIC" |
| status.html | 폐배터리 bullets | 2025/934 bullet rewritten: 16 06 07*, 20 01 43*, 16 06 13*, 16 06 24*, 19 14 02*; 16 06 05 and 20 01 34 replaced. New bullet: Art 4(2)(d) PIC, Art 39(1)(b) non-OECD ban, Art 44 OECD (Korea) PIC |
| status.html | new h4 "리튬계 폐배터리 정리: 2026년 11월 9일 전후" | 5-row table: sorted lots before and after 11-09, unsorted (A1170 / 16 06 13*), damaged, black mass. Paragraph on DG packaging (SP 376/377) and the absence of a transitional rule |
| timeline.html | 2026-11-09 row | Now says Li waste batteries themselves become 16 06 07* (previously only "블랙매스 등") |
| timeline.html | new row 2027-01-01 | Delegated Regulation 2024/3230: all intra-EU WEEE becomes Y49 or A1181, so PIC; GC010/GC020 usable until 2026-12-31 |
| changes.html | new h3 "폐기물운송규정의 발효 후 개정과 관련 법령" | Table covering 2024/3230 and 2025/934 |
| de-nl.html | intro | "2026년 10월 20일 보완"; the forwarder judges from documents; link to checklist §8 |
| de-nl.html | Germany | 2 check items; h4 VdS 3103 (3-class table plus general rules; does not cover collection or recycling); h4 TRGS 510 (13.2(3), 13.1(2)); h4 BImSchG table (4. BImSchV 8.12/8.15) with a note on the hazardous thresholds from 2026-11-09 |
| de-nl.html | Netherlands | 12-hour receipt and 25,000kg-per-dock rule; h4 PGS 37-2 lower bounds (groups 1-5); PGS measures for waste and returns; h4 legal basis (Bevi expired 2024-01-01; Bal 3.2.9 covers class 9 only when aquatic-polluting; draft Bal amendment 10,000kg / 2,500m², target 2028-01-01); h4 evidence to request (permit, groups; Kiwa K21045 is a product certification); 6 new source links |
| w-anx3-4.html | summary rows, battery/WEEE table, LoW bullet, changes row, practical bullet, 2 lib-notes in the translation | Site error fixed: the explanations still presented the pre-2024/3230 rules (A1180/B1110 → GC010/GC020) as current |
| w-anx5.html | battery table (A1180→A1181, B1110→Y49, B4030 deleted), 2 bullets, checklist item, lib-note at the start of the translation | Same site error |
| w-t2-1a.html | "폐배터리(리튬 포함)는 어디에 해당하는가" | WEEE bullet corrected for 2024/3230; LoW bullet adds 16 06 07* from 2026-11-09 |

## Sources and quotes (FACTS)

1. Delegated Decision (EU) 2025/934, Annex points (3), (7), (8) and Art 2: https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng (EUR-Lex text cached on 2026-10-14; EUR-Lex blocks curl and WebFetch today)
   - "16 06 07* | waste lithium-based batteries"
   - "16 06 13* | mixed waste batteries"
   - "16 06 24* | lithium-based battery manufacturing waste containing hazardous substances (for example cathode cut-offs, cathode slurry, off specification battery cells, modules and/or packs)"
   - "19 14 02* | intermediate fraction from the thermal and/or mechanical treatment of waste lithium-based batteries ..."
   - "entries 20 01 33* and 20 01 34 are deleted"
   - "20 01 43* | waste lithium-based batteries included in 16 06 07."
   - "It shall apply from 9 November 2026."
2. Decision 2000/532/EC before the amendment (retained UK copy as at 2020-12-31): https://www.legislation.gov.uk/eudn/2000/532/annex/2020-12-31
   - "16 06 05 other batteries and accumulators" (no asterisk)
   - "20 01 34 batteries and accumulators other than those mentioned in 20 01 33"
3. Regulation (EU) 2024/1157 (EUR-Lex text cached): https://eur-lex.europa.eu/eli/reg/2024/1157/oj
   - Art 4(2)(d): PIC applies to "waste classified as hazardous in the list of waste established pursuant to Article 7 of Directive 2008/98/EC".
   - Art 39(1): "Exports from the Union of the following wastes destined for recovery in countries to which the OECD Decision does not apply shall be prohibited: (a) wastes listed as hazardous in Part 1 of Annex V ...; (b) wastes listed as hazardous in the list of waste referred to in Article 7 of Directive 2008/98/EC; (c) wastes referred to in Article 4(3) and wastes listed in Part 2 of Annex V".
   - Art 44(1), exports to OECD-Decision countries: "the provisions of Title II shall apply mutatis mutandis".
   - Art 7(1), the guarantee covers: "(a) costs of transport of waste; (b) costs of recovery or disposal, including any necessary interim operation; (c) costs of storage for 90 days."
   - Art 14(12): "the period of validity of the consent referred to in Article 9(4) shall be extended to three years". This applies only to a general notification to a pre-consented facility.
   - Art 18(5): Annex VII "no later than two working days before the shipment starts".
   - Art 20(2): kept "for at least five years from the date on which a certificate has been provided in accordance with Article 18(9)".
   - Take-back periods: Art 22(2) "within 90 days"; Art 23(1) "within 90 days"; Art 25(5) "within 30 days".
   - Art 46(5): audit "carried out no longer than two years prior to exporting waste".
   - Art 86(3)(d): "Articles 46 and 47 from 21 May 2027".
   - Art 86(2): "It shall apply from 21 May 2026."
4. Delegated Regulation (EU) 2024/3230: https://eur-lex.europa.eu/eli/reg_del/2024/3230/oj
   - Scope: amends "Annexes III, IV and V to Regulation (EU) 2024/1157".
   - Annex III Part I: "in Part I, point (e) is deleted".
   - GC010/GC020 footnote: "shall apply only for waste shipped within the Union and only until 31 December 2026".
   - Annex IV Part I (c) is replaced by: "Basel entry A2060 shall not apply and OECD entry GG040 ... shall apply instead when appropriate".
   - New Annex IV Part I (g): "For waste shipped within the Union until 31 December 2026, Basel entry Y49 shall not apply and entries GC010 and GC020 ... shall apply instead where appropriate".
   - Annex V: "entry A1180 is replaced by ... A1181"; "entry B1110 is deleted"; "entry B4030 is deleted"; "in Part 2, List A, the following entry Y49 is added".
   - Recital 4: "From 1 January 2027, all electrical and electronic waste shipped within the Union should be classified under entries Y49 or A1181 and their shipments should be subject to the procedure of prior written notification and consent."
5. VdS 3103 : 2019-06 (03): https://shop.vds.de/download/vds-3103
   - "Die Publikation gilt nicht für das Sammeln gebrauchter Batterien oder das Recycling."
   - "Die vorliegende Publikation ist unverbindlich."
   - Categories: Li-ion 100 Wh / 12 kg brutto; Li metal 2 g.
   - Low: "Volumina über 7m³ oder mehr als sechs Euro-Paletten" → medium rules apply.
   - Medium: "räumlich (mindestens 5m) oder baulich feuerbeständig abzutrennen"; "Brandmeldeanlage mit Aufschaltung auf eine ständig besetzte Stelle"; "belegte Fläche >60m² und/oder Lagerhöhen >3m" → high rules apply.
   - High: "in Absprache mit dem Sachversicherer für den Einzelfall".
   - General: "mind. 2,5 m zu anderen brennbaren Materialien"; "Beschädigte oder defekte Lithium-Batterien sind ... umgehend zu entfernen und bis zur Entsorgung in sicherem Abstand oder in einem brandschutztechnisch abgetrennten Bereich zwischenzulagern"; "Nachweis der Prüfung nach UN38.3".
6. TRGS 510 (Ausgabe Dezember 2020, GMBl 2021 S. 178), BGN copy: https://vorschriften.bgn-branchenwissen.de/daten/tr/trgs510/13.htm
   - 13.2(3): "... produktspezifischen Gefährdungen, wie z. B. Gefährdung durch Zündquellen aufgrund eines Kurzschlusses in Zusammenhang mit Lithiumbatterien."
   - 13.1(2): "bei einer Gesamtmenge aller Gefahrstoffe von bis zu 200 kg nicht ergriffen zu werden".
   - Sections 1-13 were searched; lithium appears only at 13.2(3). The annexes could not be downloaded.
7. 4. BImSchV Anhang 1: https://www.gesetze-im-internet.de/bimschv_4_2013/anhang_1.html
   - "8.12 Anlagen zur zeitweiligen Lagerung von Abfällen ... ausgenommen die zeitweilige Lagerung bis zum Einsammeln auf dem Gelände der Entstehung ... 8.12.1 gefährlichen Abfällen mit einer Gesamtlagerkapazität von 8.12.1.1 50 Tonnen oder mehr, G E 8.12.1.2 30 Tonnen bis weniger als 50 Tonnen, V 8.12.2 nicht gefährlichen Abfällen mit einer Gesamtlagerkapazität von 100 Tonnen oder mehr, V"
   - "8.15.1 10 Tonnen oder mehr gefährlichen Abfällen je Tag, G 8.15.2 1 Tonne bis weniger als 10 Tonnen gefährlichen Abfällen je Tag, V".
8. PGS 37-2 (2023, versie 1.1 april 2026): https://publicatiereeksgevaarlijkestoffen.nl/publicaties/online/pgs-37-2/2023/1-1-april-2026
   - Tabel 2: "1 Energiedragers conform de bijzondere bepaling 188 van het ADR ... 1 000 kg energiedragers per brandcompartiment; 2 ... 333 kg; 3 ... 333 kg ... en opslag > 2 500 m2; 4 Beschadigde of defecte energiedragers 30 kg; 5 Energiedragers ten behoeve van product- of materiaalhergebruik (inclusief diepontladen energiedragers) 333 kg"
   - Footnote a: "a Grens vanaf wanneer deze richtlijn van toepassing is. Let wel, dit zijn geen bovengrenzen"
   - Mixed types: "U = (q1 / Q1) + (q2 / Q2) ..."
   - Cross-dock and receipt: "maximale verblijfstijd van 48 h ... uiterlijk binnen 12 h ... maximumgewicht per laad-/losplek (dockingstation) 25000 kg is, met een maximum van vier laad-/losplekken, waarbij er tussen de laad-/losplekken met lithiumhoudende energiedragers zich een laad-/losplek zonder lithiumhoudende energiedragers bevindt"
   - M17 Ingangscontrole.
   - Quarantine: "Gebruikte en/of beschadigde/defecte energiedragers die aan het einde van de werkdag nog niet beoordeeld zijn, worden als instabiel behandeld en ... in quarantaine geplaatst"; "apart opgeslagen worden in een aparte opslagvoorziening (quarantaineopslag)".
   - CO gas detection: "NEN-EN-IEC 62990-1".
   - 7.5.4 "Noodplan, incidenten en calamiteiten".
9. Bevi: https://wetten.overheid.nl/BWBR0016767/
   - "Deze regeling is ingetrokken."
   - "[Regeling vervallen per 01-01-2024.]"
10. IPLO, opslaan gevaarlijke stoffen in verpakking (Bal §3.2.9): https://iplo.nl/regelgeving/regels-voor-activiteiten/milieubelastende-activiteiten-hoofdstuk-3-bal/activiteiten-die-bedrijfstakken-overstijgen/opslaan-gevaarlijke/
    - Covers "ADR-klasse 2, 3, 4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2 of 8", and class 9 only "die het aquatisch milieu verontreinigen".
    - Permit at "10.000 kg of meer"; "De vergunningplicht geldt per opslagplaats".
11. IPLO, PGS 37-1 en 37-2: https://iplo.nl/thema/externe-veiligheid/pgs-37-1-37-2/
    - "Het exploiteren van een EOS (PGS 37-1) of opslag van batterijen is (nog) niet aangewezen als milieubelastende activiteit in het Bal."
    - "Naar verwachting zal deze wijziging van het Bal in de loop van 2028 in werking treden."
12. Internetconsultatie, Wijzigingsbesluit energieopslagsystemen ... (IenW, 27-03-2026 to 28-04-2026): https://internetconsultatie.nl/opslag_elektrische_energie
    - Draft art. 3.35e(1), permit required: "a. in een opslagplaats of een opstelplaats groter dan 2.500 m2; b. in een opslagplaats of een opstelplaats voor meer dan 10.000 kg aan lithiumhoudende energiedragers".
    - Draft art. 4.1052o: "voldoet ... aan PGS 37-2".
    - Explanatory note: weights "exclusief die van de goedgekeurde verpakking".
    - Consultation report: "De beoogde inwerkingtreding van het besluit en de bijbehorende regeling is 1 januari 2028".
13. Kiwa K21045 SCP05/02 (6 Nov 2025): https://production.episerver.kiwa.com/globalassets/netherlands/kiwa-ncp/pdf/k21045-scp05-02-lithium-ion-batteries-storage.pdf
    - "Specific Certification Program Fire Protection Systems for Products / Fire Protection of Lithium-ion batteries storage ... developed in context of: PGS37-1 ... PGS37-2"
    - "Kiwa has drafted this initial type testing protocol to prove the effectives of fire protection systems".
14. DG packaging (SP 376/377, P908/P909/LP904/P911, A154/A183): not re-verified here. The text links to the site's fact-checked dg-lithium doc (IMO MSC.556(108), RID 2025, IATA LBGD 2026; checked 2026-10-19).

## Corrections to the guide

- **"Li-ion waste batteries are amber / Annex IVA"**
  - Regulation 2024/1157 has no Annex IVA; it was removed (see the changes table in w-t2-1a).
  - Lithium is not named in Annexes III, IV or V.
  - Sorted Li-ion waste batteries can be B1090 (green). Unsorted mixtures are A1170 (amber).
  - From 2026-11-09 the EU LoW makes all waste lithium-based batteries hazardous (16 06 07*). Under Art 4(2)(d) they then need PIC like amber waste, and export to non-OECD countries is banned (Art 39(1)(b)).
  - Before that date, a sorted, uncontaminated lot that met B1090 (coded 16 06 05, non-hazardous) went under Annex VII.
- **Damaged or defective batteries:** there is no separate waste code. Damage changes the DG packaging (SP 376, P908/LP904, P911/LP906), not the waste code. In practice the green-list conditions are hard to demonstrate for damaged lots.
- **"Annex VII info 2 days before":** the rule is 2 working days. Actual quantity, carrier and container number may be entered up to departure (Art 18(5)).
- **"Consent 1 year (3 years for pre-consented)":** the 3-year validity applies only to a general notification (Art 13) to a pre-consented facility (Art 14(12)). Authorities may set a shorter period.
- **Bevi ">10,000kg per fire compartment" and an external safety report (EVR):**
  - Bevi expired on 2024-01-01.
  - Li battery storage is currently not a Bal activity. Bal 3.2.9 covers class 9 only when it is aquatic-polluting.
  - The 10,000kg figure reappears only in a draft Bal amendment. There it is a permit trigger per storage place, excluding packaging weight, with a target date of 2028-01-01.
  - The site does not present the threshold as something to plan around.
- **KIWA:** Kiwa certifies fire-protection systems and products for Li-ion storage (K21045 SCP05). This is not a certificate that a warehouse complies with PGS 37-2. The evidence for facility compliance is the permit or notification conditions.
- **TRGS 510 "F90 walls and a 200kg threshold for large lithium storage":** not supported, so dropped. TRGS 510 mentions lithium batteries only as an example of an ignition source in mixed storage (13.2(3)). The 200kg figure is the general exemption from the Section 13 mixed-storage rules.
- **VdS 3103 "damaged batteries moved to special containers outside":** VdS says damaged or defective batteries must be removed immediately and kept at a safe distance or in a fire-separated area until disposal. VdS 3103 also does not apply to the collection or recycling of used batteries, which is the guide's whole subject. Waste battery storage therefore needs a separate agreement with the insurer.
- **BImSchG:** the relevant entries are 4. BImSchV 8.12 and 8.15.
  - 8.12, temporary storage: hazardous waste ≥30 t (V) or ≥50 t (G); non-hazardous ≥100 t (V).
  - 8.15, transshipment: hazardous waste ≥1 t/day (V) or ≥10 t/day (G).
  - Distance and fire-brigade requirements are specific to each permit, so they are not stated as general rules.
- **Dropped as unverified or not relevant:** AwSV applicability to batteries (the AwSV text has no battery provision), NEN 6064, NEN 3140, Arbo RI&E, GefStoffV Betriebsanweisung (de-nl already cites ArbSchG §5).
- **Verified correct:**
  - 30-day decision period, counted from the notice that the notification is properly completed (Art 9(1)).
  - The guarantee covers transport, treatment and 90 days' storage (Art 7(1)).
  - Take-back within 90 days, or 30 days for illegal shipments (Art 22(2), 23(1), 25(5)).
  - Records kept 5 years from the certificate (Art 20).
  - Art 46 audits apply to all exports from the Union, including to OECD countries, from 2027-05-21.
  - General application from 2026-05-21.

## Site errors found

1. **WEEE codes presented as current law in w-anx3-4, w-anx5 and w-t2-1a.**
   - The explanations treated the original-OJ rules (A1180/B1110 → GC010/GC020) as current.
   - Delegated Regulation (EU) 2024/3230 amended Annexes III, IV and V of 2024/1157: A1181 and Y49 were added; A1180, B1110 and B4030 were deleted; GC010/GC020 now apply only intra-EU until 2026-12-31.
   - Fixed in the explanations, with lib-notes added to the translations. The translated article text itself is unchanged.
   - overview.html already discloses that the translation does not include this amendment, so it was left as is.
2. **2025/934 understated in status.html and timeline.html.** Both described the decision only as adding a black-mass code. They missed that waste lithium-based batteries themselves become hazardous (16 06 07*) on 2026-11-09, which moves every Li waste battery shipment to PIC. Fixed.
3. **timeline.html dates checked; no error.** Due diligence 2027-08-18, passport and QR 2027-02-18, and labels "2026-08-18 or 18 months after the implementing act" all match the official dates.

## Exact new text (diffs against repo)
### checklist.html
```diff
@@ -23,0 +24,10 @@
+<h4>폐배터리 부킹 전: 화주와의 계약·부킹 조건</h4>
+<p>폐기물운송규정은 분류·통지·서류 작성 의무를 통지자와 운송을 주선하는 자에게 지우고, 운송만 맡은 포워더는 통지자 유형에 들어 있지 않습니다(<a data-doc="w-t1">제3조(6)</a>, <a data-doc="w-t2-1a">제5조</a>, <a data-doc="w-t2-2">제18조(4)·(5)</a>). 다만 반송·보관 비용은 통지자로 간주되는 자와 "그 밖의 자연인·법인"에게까지 청구될 수 있으므로(<a data-doc="w-t2-4">제24조, 제26조</a>), 아래 조항은 운송 계약이나 부킹 조건에 서면으로 넣어 둡니다. 계약 조항은 당사자 사이의 비용 정산 근거일 뿐 당국에 대한 책임을 없애지는 못합니다.</p>
+<ul class="lib-check">
+<li>폐기물 분류(EU 폐기물 목록 코드, 바젤·OECD 코드), 절차 선택(PIC 또는 부속서 VII), 통지·이동서류·부속서 VII 입력과 관할당국 대응은 화주(통지자 또는 운송을 주선하는 자)가 맡는다고 적는다.</li>
+<li>화주가 준 폐기물 정보(코드, 성분, 수량, 손상·결함 여부, 목적지 시설과 회수 작업)가 정확하고 적법하다는 진술·보증을 받는다.</li>
+<li>정보가 틀리거나 절차가 빠져 생긴 억류·검사·보관·반송·벌금 비용을 화주가 부담하고 포워더를 면책한다는 조항(indemnity)을 둔다.</li>
+<li>목적지 시설이 수령을 거부하거나 운송을 완료할 수 없을 때 반송 또는 대체 처리의 실행과 비용은 화주 몫이라고 적고, 기한(완료할 수 없으면 90일, 불법 운송이면 30일)을 함께 적는다(제22조(2), 제23조(1), 제25조(5)).</li>
+<li>위험물 분류(UN 번호, 손상·결함이면 특별규정 376, 폐기·재활용이면 특별규정 377)를 운송수단별로 서면으로 받는다. 포장·표시 요건은 <a href="/library/dangerous-goods/dg-lithium">리튬배터리 위험물 문서</a> 6절을 보십시오. 항공은 폐배터리를 당국 승인으로만 받으므로 해상·육상으로 계획한다.</li>
+<li>경유 창고에 보관한다면 그 창고의 허가·보관 한도·보험 조건 서류를 부킹 전에 받는다(아래 8절, <a data-doc="de-nl">독일·네덜란드 창고</a>).</li>
+</ul>
@@ -52,2 +62,2 @@
-<li>코드가 녹색목록(B1090 등)이어도 EU 폐기물 목록상 유해이면 PIC라는 점을 확인했다(제4조(2)(d)). 2026년 11월 9일부터 적용되는 개정 폐기물 목록 기준인지 확인한다.</li>
-<li>목적지가 EU 밖이면 OECD 결정 적용국인지 확인한다. 비적용국으로는 A1160·A1170 등 유해 폐배터리를 수출할 수 없다(제39조).</li>
+<li>코드가 녹색목록(B1090 등)이어도 EU 폐기물 목록상 유해이면 PIC라는 점을 확인했다(제4조(2)(d)). 2026년 11월 9일부터는 개정 폐기물 목록에서 리튬계 폐배터리가 유해 코드 16 06 07*이므로, 그날 이후 출발하는 리튬계 폐배터리는 B1090이어도 PIC로 계획한다. 부속서 VII로 보내던 정기 물량은 통지·동의·재정보증 준비 기간을 감안해 미리 화주와 일정을 다시 잡는다(<a data-doc="status">제품·중고·폐기물 판정</a>).</li>
+<li>목적지가 EU 밖이면 OECD 결정 적용국인지 확인한다. 비적용국으로는 A1160·A1170 등 유해 폐배터리를 수출할 수 없다(제39조). 2026년 11월 9일부터는 EU 폐기물 목록상 유해가 되는 리튬계 폐배터리(16 06 07*)도 비적용국 수출 금지 대상이다(<a data-doc="w-t4">제39조(1)(b)</a>).</li>
@@ -94,0 +105,10 @@
+<h4>보관 창고(3PL)에 요청할 서류</h4>
+<p>포워더는 창고를 직접 점검하지 않고, 창고 운영자에게 받은 서류로 판단합니다. 리튬배터리를 경유 보관하거나 크로스도킹할 때 아래 서류를 받아 선적 파일에 묶습니다.</p>
+<ul class="lib-check">
+<li>환경허가 또는 신고와 그 조건 사본을 받는다. 네덜란드는 허가 조건이나 지방자치단체 규정에 PGS 37-2가 반영됐는지, 독일은 폐배터리 보관·환적이 연방임미시온방지법(BImSchG) 허가 대상인지와 그 허가 사본을 확인한다.</li>
+<li>보관 대상 범위를 확인한다. 신품·중고품만 받는지, 손상·결함 배터리나 폐배터리도 받는지가 허가와 보험에 적혀 있어야 한다.</li>
+<li>방화구획별 리튬배터리 보관량이 허가 한도 안인지, 이번 화물을 더해도 넘지 않는지 창고의 확인을 서면으로 받는다.</li>
+<li>손상·결함·상태 미확인 배터리를 따로 두는 격리 구역(quarantine), 자동 화재감지·소화설비, 가스(일산화탄소) 감지, 비상대응계획이 있는지 창고의 설명 자료로 확인한다.</li>
+<li>화재보험 조건(독일은 보험계약에 편입된 VdS 3103 조건 등)과 폐배터리 보관이 보험 대상에서 빠져 있지 않은지 확인한다.</li>
+<li>소화설비·보관 캐비닛 등의 제품 인증서는 그 설비가 시험을 통과했다는 뜻이고, 창고 전체가 PGS 37-2나 허가 조건을 지킨다는 증명은 아니다. 창고 전체의 적합성은 허가 조건과 관할당국 점검 기록으로 확인한다.</li>
+</ul>
@@ -119,2 +139,3 @@
-<tr><td>폐기물(PIC)</td><td>통지서와 동의, 이동서류, 계약, 재정보증, 시설 허가, 수령 확인과 완료 증명</td></tr>
-<tr><td>폐기물(부속서 VII)</td><td>부속서 VII 정보, 회수 계약, 시설 허가·등록 증빙, 수령 확인과 완료 증명</td></tr>
+<tr><td>폐기물(PIC)</td><td>통지서와 동의, 이동서류, 계약, 재정보증, 시설 허가, 수령 확인과 완료 증명, 화주와의 계약(진술·보증, 면책, 반송 비용 조항)</td></tr>
+<tr><td>폐기물(부속서 VII)</td><td>부속서 VII 정보, 회수 계약, 시설 허가·등록 증빙, 수령 확인과 완료 증명, 화주와의 계약(진술·보증, 면책, 반송 비용 조항)</td></tr>
+<tr><td>경유 보관이 있을 때</td><td>창고의 환경허가·신고 조건, 보관 대상 범위, 방화구획별 보관량 확인, 격리 구역·감지·소화설비와 비상대응계획 설명 자료, 보험 조건</td></tr>
```
### status.html
```diff
@@ -56 +56 @@
-<tr><td>B1090</td><td>규격에 부합하는 폐배터리(납·카드뮴·수은으로 만든 것 제외)</td><td>녹색</td><td>부속서 VII. 다만 EU 폐기물 목록상 유해이면 PIC</td></tr>
+<tr><td>B1090</td><td>규격에 부합하는 폐배터리(납·카드뮴·수은으로 만든 것 제외)</td><td>녹색</td><td>부속서 VII. 다만 EU 폐기물 목록상 유해이면 PIC. 리튬계는 2026. 11. 9.부터 유해(16 06 07*)이므로 PIC</td></tr>
@@ -60 +60,2 @@
-<li>EU 폐기물 목록은 집행위원회 위임결정 (EU) 2025/934로 개정되어, 리튬계 폐배터리의 처리에서 나오는 블랙매스에 유해 코드(19 14 02*)가 신설되는 등 배터리 관련 코드가 바뀌었고 2026년 11월 9일부터 의무 적용됩니다. 이 개정은 두 규정 밖의 법령이며 이 자료의 번역 범위에 들어 있지 않으므로, 실제 코드는 <a href="https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng" target="_blank" rel="noopener noreferrer">위임결정 원문</a>과 관할당국 안내로 확인하세요.</li>
+<li>EU 폐기물 목록은 집행위원회 위임결정 (EU) 2025/934로 개정되어 2026년 11월 9일부터 적용됩니다. 이 개정으로 <b>리튬계 폐배터리 자체가 유해 코드 16 06 07*</b>(waste lithium-based batteries)가 되고, 생활계에서 분리수거한 리튬계 폐배터리는 20 01 43*, 종류가 섞인 폐배터리는 16 06 13*, 리튬계 배터리 제조 폐기물 가운데 유해물질을 함유한 것(불량 셀·모듈·팩 등)은 16 06 24*, 처리에서 나오는 블랙매스 같은 중간 분획은 19 14 02*가 됩니다. 지금까지 리튬이온 폐배터리에 쓰던 비유해 코드 16 06 05(그 밖의 배터리와 축전지)와 20 01 34는 이 날 새 코드 체계로 대체되어 더 쓰지 않습니다. 이 개정은 두 규정 밖의 법령이므로 실제 코드는 <a href="https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng" target="_blank" rel="noopener noreferrer">위임결정 원문</a>과 관할당국 안내로 확인하세요.</li>
+<li>폐기물운송규정은 EU 폐기물 목록을 직접 참조하므로, 2026년 11월 9일부터 리튬계 폐배터리는 B1090 요건을 갖춰도 PIC 대상이고(제4조(2)(d)), OECD 결정 비적용국으로의 회수 목적 수출도 금지됩니다(<a data-doc="w-t4">제39조(1)(b)</a>). 한국 같은 OECD 회원국으로의 수출도 제44조에 따라 제2편 절차가 준용되므로 PIC입니다.</li>
@@ -62,0 +64,9 @@
+<h4>리튬계 폐배터리 정리: 2026년 11월 9일 전후</h4>
+<table class="lib-table"><thead><tr><th>화물</th><th>EU 폐기물 목록</th><th>바젤·OECD 코드</th><th>EU 안 운송·OECD국 수출</th><th>비OECD국 수출</th></tr></thead><tbody>
+<tr><td>종류별로 분류된 리튬계 폐배터리, 2026. 11. 8.까지 출발</td><td>16 06 05(비유해) 또는 20 01 34</td><td>규격에 부합하면 B1090</td><td>부속서 VII(20kg 초과). 규격 부합을 입증하지 못하거나 오염되면 PIC(제4조(2)(b)·(e))</td><td>2027. 5. 21. 전까지는 구 규정 제37조와 규정 1418/2007의 국가별 회신에 따름(제85조(2)(b), (4))</td></tr>
+<tr><td>리튬계 폐배터리, 2026. 11. 9.부터</td><td>16 06 07*(유해), 생활계 분리수거분 20 01 43*</td><td>B1090에 해당해도</td><td>PIC(제4조(2)(d))</td><td>금지(제39조(1)(b))</td></tr>
+<tr><td>종류가 섞인 미분류 폐배터리</td><td>2026. 11. 9.부터 16 06 13*(혼합 폐배터리)</td><td>A1170(목록 B 배터리만의 혼합물 제외)</td><td>PIC(제4조(2)(a))</td><td>금지(제39조(1)(a))</td></tr>
+<tr><td>손상·결함 리튬계 배터리</td><td>손상만을 이유로 한 별도 코드는 없음. 화학에 따른 코드(2026. 11. 9.부터 16 06 07*)</td><td>규격 부합·비오염을 입증하기 어려움</td><td>2026. 11. 9. 전에도 PIC가 될 가능성이 큼, 그 뒤에는 PIC</td><td>위와 같음</td></tr>
+<tr><td>블랙매스 등 처리 중간 분획</td><td>2026. 11. 9.부터 19 14 02*</td><td>해당 항목 없음</td><td>PIC</td><td>금지</td></tr>
+</tbody></table>
+<p>손상·결함 여부는 폐기물 절차보다 위험물 포장(특별규정 376, 포장지침 P908·LP904, 열적으로 불안정하면 P911·LP906)을 바꿉니다. 폐기·재활용 목적이면 특별규정 377과 P909입니다. 자세한 내용은 <a href="/library/dangerous-goods/dg-lithium">리튬배터리 위험물 문서</a> 6절을 보십시오. 2026년 11월 9일 전에 부속서 VII로 출발해 그 뒤에 도착하는 화물을 어떻게 다루는지는 두 법령에 경과 규정이 없으므로 발송·목적지 관할당국에 미리 확인하는 것이 안전합니다.</p>
```
### timeline.html
```diff
@@ -16 +16 @@
-<tr><td>2026-11-09</td><td>EU 폐기물 목록</td><td>위임결정 (EU) 2025/934에 따른 개정 폐기물 목록 의무 적용. 리튬계 배터리 처리에서 나오는 블랙매스 등에 유해 코드. 두 규정 밖의 법령이지만 폐배터리가 PIC 대상인지를 좌우합니다.</td><td><a href="https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng" target="_blank" rel="noopener noreferrer">위임결정 2025/934</a>, 폐기물운송규정 제4조(2)(d)</td></tr>
+<tr><td>2026-11-09</td><td>EU 폐기물 목록</td><td>위임결정 (EU) 2025/934에 따른 개정 폐기물 목록 의무 적용. 리튬계 폐배터리 자체가 유해 코드 16 06 07*가 되고, 블랙매스 등 처리 중간 분획(19 14 02*)과 혼합 폐배터리(16 06 13*)에도 유해 코드. 두 규정 밖의 법령이지만 이 날부터 리튬계 폐배터리는 B1090이어도 PIC 대상이고 비OECD국 수출이 금지됩니다(<a data-doc="status">판정 문서</a>).</td><td><a href="https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng" target="_blank" rel="noopener noreferrer">위임결정 2025/934</a>, 폐기물운송규정 제4조(2)(d)</td></tr>
@@ -17,0 +18 @@
+<tr><td>2027-01-01</td><td>폐기물운송</td><td>EU 안에서 운송하는 폐전기·전자제품(배터리 내장 제품 포함)은 모두 Y49 또는 A1181로 분류되어 PIC 대상. 2026년 12월 31일까지는 적절한 경우 녹색목록 GC010·GC020을 쓸 수 있습니다. EU 밖 수출입에는 위임규정 발효 때부터 GC010·GC020을 쓰지 않습니다.</td><td>위임규정 (EU) 2024/3230(부속서 III·IV·V 개정)</td></tr>
```
### changes.html
```diff
@@ -51,0 +52,6 @@
+<h3>폐기물운송규정의 발효 후 개정과 관련 법령</h3>
+<table class="lib-table"><thead><tr><th>법령</th><th>내용</th><th>실무 영향</th></tr></thead><tbody>
+<tr><td>위임규정 (EU) 2024/3230</td><td>바젤협약 전기·전자 폐기물 개정(결정 BC-15/18)을 반영해 부속서 III·IV·V를 개정. A1180을 A1181로 바꾸고 Y49를 신설했으며 B1110·B4030을 삭제. EU 안 운송에서 GC010·GC020은 2026년 12월 31일까지만 적용</td><td>폐배터리 자체의 코드(A1160·A1170·B1090)는 그대로. 배터리 내장 폐전기·전자제품은 EU 밖 수출입에서 PIC, 2027년 1월 1일부터는 EU 안 운송도 PIC. 이 사이트의 부속서 번역은 개정 전 관보본이므로 <a data-doc="w-anx3-4">부속서 III~IV 문서</a>의 해설을 함께 보십시오</td></tr>
+<tr><td>위임결정 (EU) 2025/934(EU 폐기물 목록 개정)</td><td>폐기물운송규정 밖의 법령. 2026년 11월 9일부터 리튬계 폐배터리 16 06 07*, 혼합 폐배터리 16 06 13*, 블랙매스 등 19 14 02* 등 유해 코드 적용</td><td>폐기물운송규정 제4조(2)(d)와 제39조(1)(b)가 EU 폐기물 목록을 직접 참조하므로 리튬계 폐배터리는 그날부터 PIC 대상이고 비OECD국 수출 금지(<a data-doc="status">판정 문서</a>)</td></tr>
+</tbody></table>
+
```
### de-nl.html
```diff
@@ -1 +1 @@
-<p>두 EU 규정은 창고의 허가·소방·보관 한도를 직접 정하지 않습니다. 그 부분은 회원국 법령과 허가 조건, 보험 조건이 채웁니다. 이 문서는 한국 포워더가 자주 쓰는 독일과 네덜란드의 창고 요건을 정리한 참고 자료이며, 두 규정의 번역이 아니라 각국 당국과 기관의 공개 자료(2026년 10월 4일 열람)를 바탕으로 합니다.</p>
+<p>두 EU 규정은 창고의 허가·소방·보관 한도를 직접 정하지 않습니다. 그 부분은 회원국 법령과 허가 조건, 보험 조건이 채웁니다. 이 문서는 한국 포워더가 자주 쓰는 독일과 네덜란드의 창고 요건을 정리한 참고 자료이며, 두 규정의 번역이 아니라 각국 당국과 기관의 공개 자료(2026년 10월 4일 열람, 2026년 10월 20일 보완)를 바탕으로 합니다. 포워더는 창고를 직접 점검하지 않고 창고 운영자에게 받은 허가·보험·설명 서류로 판단합니다. 창고에 요청할 서류 목록은 <a data-doc="checklist">포워더 종합 체크리스트</a> 8절에 있습니다.</p>
@@ -21,0 +22,2 @@
+<li>폐배터리를 보관하거나 환적한다면 연방임미시온방지법(BImSchG) 허가 대상인지와 허가 용량을 확인했다(아래 표).</li>
+<li>VdS 3103 구분에 맞는 이격·감지 조치가 있거나, 수거·폐배터리처럼 VdS 3103 범위 밖이면 보험사와 협의한 조건이 있다.</li>
@@ -23,0 +26,23 @@
+<h4>VdS 3103: 보험업계의 배터리 구분과 권고</h4>
+<p>VdS 3103(2019년 6월판)은 독일 손해보험협회(GDV)가 낸 손해예방 권고입니다. 스스로 법적 의무가 아니라고 밝히며, 보험사는 사안에 따라 다른 조치를 받아들일 수 있습니다. 신품과 중고 배터리의 보관에 적용되고, <b>사용한 배터리의 수거와 재활용에는 적용되지 않으므로</b> 폐배터리 보관은 화재보험사와 따로 조건을 정해야 합니다.</p>
+<table class="lib-table"><thead><tr><th>구분</th><th>리튬이온 배터리</th><th>리튬금속 배터리</th><th>권고 조치</th></tr></thead><tbody>
+<tr><td>낮은 출력</td><td>배터리당 100Wh 이하</td><td>배터리당 리튬 2g 이하</td><td>일반 수칙만 적용. 다만 한곳에 7m³ 넘게 또는 유로 팔레트 6개 넘게 모아 두면 중간 출력 기준을 적용</td></tr>
+<tr><td>중간 출력</td><td>100Wh 초과, 배터리당 총중량 12kg 이하</td><td>리튬 2g 초과, 총중량 12kg 이하</td><td>다른 구역과 5m 이상 떼거나 내화 구조로 분리. 상시 근무 장소로 연결된 화재감지설비. 화재를 키울 수 있는 다른 물품과 함께 두지 않음. 점유 면적 60m² 초과 또는 적재 높이 3m 초과면 높은 출력 기준을 적용</td></tr>
+<tr><td>높은 출력</td><td>100Wh 초과 그리고(또는) 총중량 12kg 초과</td><td>리튬 2g 초과 그리고 총중량 12kg 초과</td><td>확립된 기준이 없어 보험사와 개별 협의. 예시는 분리와 수량 제한, 내화 구획 보관 또는 5m 이격, 자동소화설비</td></tr>
+</tbody></table>
+<p>모든 구분에 공통인 일반 수칙은 외부·내부 단락 방지, 고온과 직사광선 회피, 자동소화설비가 없는 구역에서 다른 가연물과 2.5m 이상 떼거나 구조적으로 분리하기, 손상·결함 배터리는 보관·생산 구역에서 바로 빼내 처분할 때까지 안전한 거리나 방화 구획에 임시 보관하기, UN 38.3 시험 증빙이 있는 셀·배터리만 보관하기입니다.</p>
+
+<h4>TRGS 510과 위험성평가</h4>
+<p>위험물질 기술규칙 TRGS 510(이동식 용기에 든 위험물질의 보관, 2020년 12월판)의 본문에서 리튬배터리는 다른 위험물질과 함께 보관할 때 고려할 위험, 곧 단락으로 생기는 점화원의 예로 나옵니다(13.2(3)). 함께 보관에 관한 13절은 위험물질 총량이 200kg 이하이면 적용하지 않아도 됩니다(13.1(2)). 리튬배터리만을 대상으로 한 방화벽 등급이나 보관량 기준은 TRGS 510 본문에 없으므로, 창고가 "TRGS 510 적합"이라고 하면 어떤 조항을 근거로 하는지 위험성평가 문서로 확인합니다.</p>
+
+<h4>폐배터리 보관·환적: BImSchG 허가 기준</h4>
+<p>폐기물을 임시 보관하거나 환적하는 시설은 일정 규모부터 연방임미시온방지법 시행령 제4호(4. BImSchV) 부속서 1에 따라 허가를 받아야 합니다. 발생한 장소에서 수거 전까지 잠시 두는 경우는 임시 보관 항목에서 제외됩니다.</p>
+<table class="lib-table"><thead><tr><th>항목</th><th>대상</th><th>규모</th><th>허가 절차</th></tr></thead><tbody>
+<tr><td>8.12.1.1</td><td>유해 폐기물 임시 보관</td><td>총 보관용량 50t 이상</td><td>정식 절차(G), 산업배출지침 시설(E)</td></tr>
+<tr><td>8.12.1.2</td><td>유해 폐기물 임시 보관</td><td>30t 이상 50t 미만</td><td>간이 절차(V)</td></tr>
+<tr><td>8.12.2</td><td>비유해 폐기물 임시 보관</td><td>총 보관용량 100t 이상</td><td>간이 절차(V)</td></tr>
+<tr><td>8.15.1</td><td>유해 폐기물 환적</td><td>하루 10t 이상</td><td>정식 절차(G)</td></tr>
+<tr><td>8.15.2</td><td>유해 폐기물 환적</td><td>하루 1t 이상 10t 미만</td><td>간이 절차(V)</td></tr>
+</tbody></table>
+<p>EU 폐기물 목록 개정(위임결정 (EU) 2025/934)으로 2026년 11월 9일부터 리튬계 폐배터리는 유해 코드 16 06 07*입니다. 그러면 비유해 기준(100t)이 아니라 유해 기준(보관 30t, 환적 하루 1t)이 적용될 수 있으므로, 기존 허가의 용량과 대상 폐기물 코드가 바뀐 목록에 맞는지 창고에 확인합니다. 독일 국내 폐기물 목록 규정(AVV)이 이 개정을 반영하는 시점은 관할당국에 확인하십시오. 허가 조건에 들어가는 이격 거리나 소방 계획은 시설마다 다르므로 허가서 사본으로 확인합니다.</p>
+
@@ -35,0 +61,24 @@
+<li>창고가 자기 보관용으로 받는 배터리(제3자 앞 크로스도킹이 아닌 것)는 늦어도 12시간 안에 PGS 적합 보관 구역으로 옮기는지 확인한다. PGS 37-2는 이때 하역장 한 곳당 25,000kg, 하역장 네 곳까지로 하고 리튬배터리를 둔 하역장 사이에 빈 하역장을 하나씩 두게 한다.</li>
+</ul>
+<h4>PGS 37-2가 적용되기 시작하는 양</h4>
+<p>PGS 37-2는 방화구획마다 아래 양부터 적용됩니다. 이 값은 적용이 시작되는 하한이며 방화구획에 둘 수 있는 최대량이 아닙니다. 종류가 섞여 있으면 종류별 보관량을 각 하한으로 나눈 값의 합이 1 이상일 때 하한을 넘은 것으로 봅니다.</p>
+<table class="lib-table"><thead><tr><th>그룹</th><th>배터리</th><th>적용 하한(방화구획당)</th></tr></thead><tbody>
+<tr><td>1</td><td>ADR 특별규정 188을 충족하는 소형(리튬이온 배터리 100Wh·셀 20Wh 이하, 리튬금속 배터리 2g·셀 1g 이하 등)</td><td>1,000kg</td></tr>
+<tr><td>2</td><td>그룹 1이 아닌 배터리</td><td>333kg</td></tr>
+<tr><td>3</td><td>그룹 1이 아닌 배터리가 든 차량·기계를 옥외에 보관</td><td>333kg, 보관 면적 2,500m² 초과</td></tr>
+<tr><td>4</td><td>손상·결함 배터리</td><td>30kg</td></tr>
+<tr><td>5</td><td>제품 재사용이나 물질 재활용 목적의 배터리(완전 방전 배터리 포함)</td><td>333kg</td></tr>
+</tbody></table>
+<p>폐배터리나 반품 배터리를 받는 창고라면 PGS 37-2의 다음 조치를 갖췄는지 창고 설명 자료로 확인합니다: 모든 입고품의 입고 검사(포장 손상, 침수 여부, 재정비 여부 등), 그날 안에 판정하지 못한 중고·손상 배터리를 불안정한 것으로 보고 격리 보관(quarantine)하기, 열폭주 위험이 큰 배터리의 별도 격리 보관, 일산화탄소 가스 감지, 사고·불안정 배터리 대응을 적은 비상계획.</p>
+
+<h4>법적 근거: Bevi가 아니라 Bal·Bkl</h4>
+<ul>
+<li>사업장의 외부 안전을 정하던 Bevi(Besluit externe veiligheid inrichtingen)는 환경계획법(Omgevingswet)이 시행된 2024년 1월 1일 효력을 잃었습니다. 지금 활동별 규칙은 Bal(Besluit activiteiten leefomgeving)에, 외부 안전 거리와 주의 구역(aandachtsgebied) 같은 기준은 Bkl(Besluit kwaliteit leefomgeving)에 있습니다. Bevi를 근거로 리튬배터리 보관에 "10,000kg 초과" 기준과 외부 안전 보고서를 요구하는 자료는 2024년 이전 법령을 인용한 것입니다.</li>
+<li>Bal의 포장 위험물질 보관(3.2.9절)은 ADR 9급 가운데 수생 환경을 오염시키는 물질만 포함하므로, 리튬배터리 보관은 원칙적으로 여기에 들지 않습니다. 정부 안내(IPLO)도 배터리 보관이 아직 Bal의 환경 영향 활동으로 지정되지 않았다고 설명합니다.</li>
+<li>정부는 배터리 보관을 Bal 활동으로 지정하는 개정안을 2026년 3월 27일부터 4월 28일까지 의견 수렴했습니다. 초안은 보관장 면적 2,500m² 초과 또는 리튬배터리 10,000kg 초과(포장 무게 제외)면 허가, 그 아래는 신고와 일반 규칙(PGS 37-2 준수, 고정 안전거리)을 두었습니다. 의견 수렴 보고서는 시행 목표를 2028년 1월 1일로 적었습니다. 초안이라 바뀔 수 있으므로 시행 전까지는 지금처럼 허가 조건과 지방자치단체 규정으로 확인합니다.</li>
+</ul>
+<h4>창고에 받을 증빙</h4>
+<ul class="lib-check">
+<li>환경허가 또는 신고 사본과, 그 조건이나 지방자치단체 규정에 PGS 37-2가 반영됐는지를 보여 주는 문서를 받는다. 허가 실무는 지역 환경청(Omgevingsdienst)이 맡는 경우가 많으므로 발급 기관명과 허가 번호를 함께 받는다.</li>
+<li>방화구획별 보관량과 그룹(특히 그룹 4 손상·결함, 그룹 5 재활용 목적)을 창고가 어떻게 관리하는지 서면으로 받는다.</li>
+<li>소화설비·보관 캐비닛의 인증서(예: Kiwa의 리튬이온 배터리 보관 화재방호 제품 인증 K21045)는 그 설비에 대한 인증이다. 창고 전체가 PGS 37-2를 지킨다는 증명으로 받지 않는다.</li>
@@ -44,0 +94,6 @@
+<li><a href="https://shop.vds.de/download/vds-3103" target="_blank" rel="noopener noreferrer">VdS 3103 Lithium-Batterien(2019-06) ↗</a></li>
+<li><a href="https://www.gesetze-im-internet.de/bimschv_4_2013/anhang_1.html" target="_blank" rel="noopener noreferrer">독일 4. BImSchV 부속서 1 ↗</a></li>
+<li><a href="https://vorschriften.bgn-branchenwissen.de/daten/tr/trgs510/titel.htm" target="_blank" rel="noopener noreferrer">TRGS 510 본문(BGN 게재본) ↗</a></li>
+<li><a href="https://iplo.nl/regelgeving/regels-voor-activiteiten/milieubelastende-activiteiten-hoofdstuk-3-bal/activiteiten-die-bedrijfstakken-overstijgen/opslaan-gevaarlijke/" target="_blank" rel="noopener noreferrer">네덜란드 IPLO의 Bal 포장 위험물질 보관 안내 ↗</a></li>
+<li><a href="https://internetconsultatie.nl/opslag_elektrische_energie" target="_blank" rel="noopener noreferrer">네덜란드 배터리 보관 Bal 개정안 의견 수렴 ↗</a></li>
+<li><a href="https://wetten.overheid.nl/BWBR0016767/" target="_blank" rel="noopener noreferrer">Bevi(2024. 1. 1. 효력 상실) ↗</a></li>
```
### w-anx3-4.html
```diff
@@ -6 +6 @@
-<tr><td>부속서 III (녹색목록)</td><td>제I부: 바젤협약 부속서 IX(B 코드) 폐기물. 본문에 목록을 다시 싣지 않고 부속서 V 1부 목록 B를 가리킵니다(각주 1). 다만 B1020·B1030은 읽는 방법을 정하고, B1100 일부·B1110·B2050은 적용하지 않고 OECD 항목 GB040·GC010·GC020·GG040으로 대체하며, 연합 역내 운송에서는 B3011 대신 EU3011을 씁니다(제I부 (a)~(g)).<br>제II부: OECD 항목 GB040, GC010, GC020, GC030, GC050, GE020, GF010, GG030, GG040, GN010~GN030.</td><td>회수 목적, 20kg 초과 시 일반정보 요건(제4조(4)(a), 제18조)</td></tr>
+<tr><td>부속서 III (녹색목록)</td><td>제I부: 바젤협약 부속서 IX(B 코드) 폐기물. 본문에 목록을 다시 싣지 않고 부속서 V 1부 목록 B를 가리킵니다(각주 1). 다만 B1020·B1030은 읽는 방법을 정하고, B1100 일부·B2050은 적용하지 않고 OECD 항목 GB040·GG040으로 대체하며(B1110 대신 GC010·GC020을 쓰게 한 (e)는 위임규정 (EU) 2024/3230으로 삭제), 연합 역내 운송에서는 B3011 대신 EU3011을 씁니다(제I부 (a)~(g)).<br>제II부: OECD 항목 GB040, GC010, GC020(두 항목은 2024/3230 개정으로 EU 안 운송에만, 2026년 12월 31일까지 적용), GC030, GC050, GE020, GF010, GG030, GG040, GN010~GN030.</td><td>회수 목적, 20kg 초과 시 일반정보 요건(제4조(4)(a), 제18조)</td></tr>
@@ -9 +9 @@
-<tr><td>부속서 IV (황색목록)</td><td>제I부: 바젤협약 부속서 II(Y46~Y48)와 부속서 VIII(A 코드) 폐기물. 목록 자체는 부속서 V 1부 목록 A와 2부 목록 A에 있습니다(각주 2). A1180·A2060은 적용하지 않고 "적절한 경우" GC010·GC020·GG040을 적용하며, A3210은 AC300으로, 역내 운송의 Y48은 EU48로 대체합니다.<br>제II부: OECD 항목 AA010~AD150, RB020.</td><td>PIC 절차(제4조(2)(a))</td></tr>
+<tr><td>부속서 IV (황색목록)</td><td>제I부: 바젤협약 부속서 II(Y46~Y48)와 부속서 VIII(A 코드) 폐기물. 목록 자체는 부속서 V 1부 목록 A와 2부 목록 A에 있습니다(각주 2). A2060은 적용하지 않고 "적절한 경우" GG040을 적용하며(2024/3230 개정 전에는 A1180도 GC010·GC020으로 대체), EU 안 운송에서는 2026년 12월 31일까지 Y49 대신 적절한 경우 GC010·GC020을 적용하고((g), 2024/3230 신설), A3210은 AC300으로, 역내 운송의 Y48은 EU48로 대체합니다.<br>제II부: OECD 항목 AA010~AD150, RB020.</td><td>PIC 절차(제4조(2)(a))</td></tr>
@@ -25,4 +25,4 @@
-<tr><td>A1180</td><td>Waste electrical and electronic assemblies or scrap containing components such as accumulators and other batteries included on list A …</td><td>부속서 V 1부 목록 A</td><td>부속서 IV 제I부 (c): 적용하지 않고, 적절한 경우 GC010·GC020 적용</td><td>GC010·GC020에 해당하면 일반정보 요건, 유해이거나 단일 항목으로 분류되지 않으면 PIC(제4조(2)(b), (d))</td></tr>
-<tr><td>B1110</td><td>Electrical and electronic assemblies … not containing components such as accumulators and other batteries included on list A …</td><td>부속서 V 1부 목록 B</td><td>부속서 III 제I부 (e): 적용하지 않고 GC010·GC020 적용</td><td>위와 같음</td></tr>
-<tr><td>GC010</td><td>Electrical assemblies consisting only of metals or alloys</td><td>부속서 III 제II부</td><td>녹색</td><td>일반정보 요건</td></tr>
-<tr><td>GC020</td><td>Electronic scrap (e.g. printed circuit boards, electronic components, wire, etc.) and reclaimed electronic components suitable for base and precious metal recovery</td><td>부속서 III 제II부</td><td>녹색</td><td>일반정보 요건</td></tr>
+<tr><td>A1181<br>(옛 A1180)</td><td>Electrical and electronic waste … with a component containing or contaminated with Annex I constituents to an extent that the component exhibits an Annex III characteristic, including … a battery included on list A …</td><td>부속서 V 1부 목록 A(2024/3230으로 A1180을 대체)</td><td>부속서 IV 제I부에 포함 → 황색</td><td>PIC(제4조(2)(a)). 비OECD국 수출 금지</td></tr>
+<tr><td>Y49<br>(B1110 삭제)</td><td>Electrical and electronic waste … not containing and not contaminated with Annex I constituents to an extent that the waste exhibits an Annex III characteristic …</td><td>부속서 V 2부 목록 A(2024/3230 신설)</td><td>부속서 IV 제I부. 다만 EU 안 운송은 2026. 12. 31.까지 적절한 경우 GC010·GC020 적용(제I부 (g))</td><td>PIC. EU 안 운송은 2026. 12. 31.까지 GC010·GC020에 해당하면 일반정보 요건</td></tr>
+<tr><td>GC010</td><td>Electrical assemblies consisting only of metals or alloys</td><td>부속서 III 제II부</td><td>녹색. EU 안 운송에만, 2026. 12. 31.까지(2024/3230 각주)</td><td>일반정보 요건</td></tr>
+<tr><td>GC020</td><td>Electronic scrap (e.g. printed circuit boards, electronic components, wire, etc.) and reclaimed electronic components suitable for base and precious metal recovery</td><td>부속서 III 제II부</td><td>녹색. EU 안 운송에만, 2026. 12. 31.까지(2024/3230 각주)</td><td>일반정보 요건</td></tr>
@@ -30 +30 @@
-<tr><td>B4030</td><td>Used single-use cameras, with batteries not included on list A</td><td>부속서 V 1부 목록 B</td><td>부속서 III 제I부에 포함 → 녹색</td><td>일반정보 요건</td></tr>
+<tr><td>B4030</td><td>Used single-use cameras, with batteries not included on list A</td><td>부속서 V 1부 목록 B</td><td>2024/3230으로 삭제</td><td>전기·전자 폐기물 항목(Y49·A1181)으로 판단</td></tr>
@@ -35 +35 @@
-<li>따라서 리튬 폐배터리·블랙매스가 EU 폐기물 목록(지침 2008/98/EC 제7조)에서 유해 코드에 해당하는지는 그 목록에서 별도로 확인해야 하며, 유해로 분류되면 B1090 해당 여부와 관계없이 PIC 대상입니다(제4조(2)(d)). 부속서 III·IV에도, 부속서 V에도 EU 폐기물 목록의 16 06 계열 코드는 실려 있지 않습니다.</li>
+<li>따라서 리튬 폐배터리·블랙매스가 EU 폐기물 목록(지침 2008/98/EC 제7조)에서 유해 코드에 해당하는지는 그 목록에서 별도로 확인해야 하며, 유해로 분류되면 B1090 해당 여부와 관계없이 PIC 대상입니다(제4조(2)(d)). 부속서 III·IV에도, 부속서 V에도 EU 폐기물 목록의 16 06 계열 코드는 실려 있지 않습니다. 개정 EU 폐기물 목록(위임결정 (EU) 2025/934)은 2026년 11월 9일부터 리튬계 폐배터리를 유해 코드 16 06 07*로, 블랙매스 등 처리 중간 분획을 19 14 02*로 정하므로, 그날부터 리튬계 폐배터리는 B1090이어도 PIC 대상입니다(<a data-doc="status">판정 문서</a>).</li>
@@ -46 +46 @@
-<tr><td>전자 스크랩 항목</td><td>B1110 대신 GC010·GC020 적용, A1180 대신 "적절한 경우" GC010·GC020 적용</td><td>같음(부속서 III 제I부 (e), 부속서 IV 제I부 (c))</td><td>변경 없음.</td></tr>
+<tr><td>전자 스크랩 항목</td><td>B1110 대신 GC010·GC020 적용, A1180 대신 "적절한 경우" GC010·GC020 적용</td><td>관보본은 같았으나 위임규정 (EU) 2024/3230으로 개정: A1181·Y49 신설, A1180·B1110·B4030 삭제, GC010·GC020은 EU 안 운송에만 2026년 12월 31일까지</td><td>배터리 내장 폐전기·전자제품은 EU 밖 수출입에서 PIC, 2027년 1월 1일부터 EU 안 운송도 PIC.</td></tr>
@@ -53 +53 @@
-<li>배터리가 들어 있는 전자제품 스크랩은 GC020으로 단정하면 안 됩니다. 부속서 IV 제I부 (c)는 "적절한 경우"에만 GC010·GC020을 적용하게 하며, 유해 부품이 든 화물은 EU 폐기물 목록상 유해 여부에 따라 PIC 대상이 됩니다(제4조(2)(d)).</li>
+<li>배터리가 들어 있는 전자제품 스크랩은 GC020으로 단정하면 안 됩니다. 위임규정 (EU) 2024/3230 이후 목록 A 배터리가 든 폐전기·전자제품은 A1181, 유해 부품이 없는 것은 Y49이며 둘 다 PIC입니다. EU 밖으로 수출하거나 EU로 수입할 때는 GC010·GC020을 쓸 수 없고, EU 안 운송에서만 2026년 12월 31일까지 적절한 경우 GC010·GC020(일반정보 요건)을 쓸 수 있습니다. 비OECD국으로의 A1181·Y49 수출은 금지됩니다(제39조(1)(a)·(c)).</li>
@@ -80,0 +81 @@
+<p class="lib-note"><strong>개정 주의:</strong> 아래 번역은 2024년 4월 30일 관보본입니다. 위임규정 (EU) 2024/3230으로 부속서 III 제I부 (e)는 삭제되었고, 제II부 GC010·GC020에는 "연합 안에서 운송되는 폐기물에만, 2026년 12월 31일까지 적용한다"는 각주가 붙었습니다.</p>
@@ -182,0 +184 @@
+<p class="lib-note"><strong>개정 주의:</strong> 위임규정 (EU) 2024/3230으로 (c)는 "바젤 항목 A2060은 적용하지 아니하고, 그 대신 적절한 경우 부속서 III 제II부의 OECD 항목 GG040을 적용한다"로 바뀌었고, "(g) 2026년 12월 31일까지 연합 안에서 운송되는 폐기물에 대해서는 바젤 항목 Y49를 적용하지 아니하고, 그 대신 적절한 경우 부속서 III 제II부의 항목 GC010 및 GC020을 적용한다"가 추가되었습니다.</p>
```
### w-anx5.html
```diff
@@ -25 +25 @@
-<tr><td>A1180</td><td>Waste electrical and electronic assemblies or scrap containing components such as accumulators and other batteries included on list A, mercury-switches, glass from cathode-ray tubes … (note the related entry on list B, B1110)</td><td>1부 목록 A(유해)</td><td>절차 분류에서는 A1180을 쓰지 않고 적절한 경우 GC010·GC020 적용(부속서 IV 제I부 (c)). 유해이면 PIC(제4조(2)(d))</td><td>금지(제39조(1)(a))</td></tr>
+<tr><td>A1181<br>(옛 A1180)</td><td>Electrical and electronic waste … with a component containing or contaminated with Annex I constituents … including … a battery included on list A … (note the related entry Y49 in List A of Part 2)</td><td>1부 목록 A(유해). 위임규정 (EU) 2024/3230으로 A1180을 대체</td><td>황색, PIC. EU 밖 수출입에는 GC010·GC020을 쓰지 않음</td><td>금지(제39조(1)(a))</td></tr>
@@ -27 +27 @@
-<tr><td>B1110</td><td>Electrical and electronic assemblies: … not containing components such as accumulators and other batteries included on list A … / destined for direct re-use and not for recycling or final disposal</td><td>1부 목록 B</td><td>절차 분류에서는 B1110을 쓰지 않고 GC010·GC020 적용(부속서 III 제I부 (e))</td><td>위 B1090과 같은 구조</td></tr>
+<tr><td>Y49<br>(B1110 삭제)</td><td>Electrical and electronic waste … not containing and not contaminated with Annex I constituents to an extent that the waste exhibits an Annex III characteristic …</td><td>2부 목록 A. 2024/3230으로 신설, B1110은 삭제</td><td>PIC. EU 안 운송만 2026. 12. 31.까지 적절한 경우 GC010·GC020(부속서 IV 제I부 (g))</td><td>금지(제39조(1)(c))</td></tr>
@@ -29 +29 @@
-<tr><td>B4030</td><td>Used single-use cameras, with batteries not included on list A</td><td>1부 목록 B</td><td>녹색, 일반정보 요건</td><td>B1090과 같은 구조</td></tr>
+<tr><td>B4030</td><td>Used single-use cameras, with batteries not included on list A</td><td>1부 목록 B였으나 2024/3230으로 삭제</td><td>전기·전자 폐기물 항목(Y49·A1181)으로 판단</td><td>Y49·A1181이면 금지</td></tr>
@@ -62 +62 @@
-<li>"B1090이므로 녹색"이라는 화주 설명만으로는 부족합니다. EU 폐기물 목록의 유해 분류가 목록 B보다 먼저 적용되고(도입 주석 제2항), 오염된 화물은 목록 B여도 금지 대상입니다(도입 주석 제3항, 제39조(1)(e)).</li>
+<li>"B1090이므로 녹색"이라는 화주 설명만으로는 부족합니다. EU 폐기물 목록의 유해 분류가 목록 B보다 먼저 적용되고(도입 주석 제2항), 오염된 화물은 목록 B여도 금지 대상입니다(도입 주석 제3항, 제39조(1)(e)). 2026년 11월 9일부터는 개정 EU 폐기물 목록에서 리튬계 폐배터리가 유해 코드 16 06 07*이므로 비OECD국 수출이 금지됩니다(제39조(1)(b), <a data-doc="status">판정 문서</a>).</li>
@@ -66 +66 @@
-<li>B1110의 "직접 재사용 목적" 전기·전자 조립품은 수리·재정비·업그레이드를 포함하되 대규모 재조립은 포함하지 않습니다(각주 12). 중고품으로 신고된 화물이 실제로는 폐기물로 판단될 수 있으므로 재사용 근거 자료를 받아 둡니다.</li>
+<li>관보본의 B1110(직접 재사용 목적 전기·전자 조립품 포함)은 위임규정 (EU) 2024/3230으로 삭제되었고, 유해 부품이 없는 폐전기·전자제품은 Y49, 목록 A 배터리 등 유해 부품이 든 것은 A1181이 되었습니다. 둘 다 비OECD국 수출 금지 대상입니다(제39조(1)(a), (c)). 중고품으로 신고된 화물이 실제로는 폐기물로 판단될 수 있으므로 재사용 근거 자료를 받아 둡니다.</li>
@@ -73 +73 @@
-<li>화물이 1부 목록 A(A1160, A1170, A1180 등)에 해당하는지 확인한다(도입 주석 제2항).</li>
+<li>화물이 1부 목록 A(A1160, A1170, A1181 등)에 해당하는지 확인한다(도입 주석 제2항).</li>
@@ -81,0 +82 @@
+<p class="lib-note"><strong>개정 주의:</strong> 아래 번역은 2024년 4월 30일 관보본입니다. 위임규정 (EU) 2024/3230으로 1부 목록 A의 A1180은 A1181(전기·전자 폐기물)로 바뀌었고, 목록 B의 B1110과 B4030은 삭제되었으며, 2부 목록 A에 Y49(유해 성분이 없는 전기·전자 폐기물)가 추가되었습니다. 배터리 항목 A1160·A1170·B1090은 바뀌지 않았습니다.</p>
```
### w-t2-1a.html
```diff
@@ -34 +34 @@
-<li><b>EU 폐기물목록에서 유해 폐기물로 분류되면 PIC입니다(제4조(2)(d)).</b> 이 기준은 부속서 III 등재 여부와 별개로 적용됩니다. EU 폐기물목록에서 리튬 폐배터리에 어떤 코드가 붙고 그 코드가 유해(별표 *)인지는 이 규정 원문에 실려 있지 않으므로, 지침 2008/98/EC 제7조에 따른 폐기물 목록의 현행본에서 별도로 확인해야 합니다.</li>
+<li><b>EU 폐기물목록에서 유해 폐기물로 분류되면 PIC입니다(제4조(2)(d)).</b> 이 기준은 부속서 III 등재 여부와 별개로 적용됩니다. EU 폐기물목록에서 리튬 폐배터리에 어떤 코드가 붙고 그 코드가 유해(별표 *)인지는 이 규정 원문에 실려 있지 않으므로, 지침 2008/98/EC 제7조에 따른 폐기물 목록의 현행본에서 별도로 확인해야 합니다. 그 목록을 개정한 위임결정 (EU) 2025/934는 2026년 11월 9일부터 리튬계 폐배터리를 유해 코드 16 06 07*로 정하므로, 그날부터 리튬계 폐배터리는 이 기준에 따라 PIC입니다(<a data-doc="status">판정 문서</a>).</li>
@@ -37 +37 @@
-<li><b>배터리가 들어 있는 폐전기·전자제품</b>은 배터리 자체와 다른 문제입니다. 부속서 IV 제I부 (c)는 바젤 항목 A1180을 적용하지 않고 적절한 경우 OECD 항목 GC010, GC020, GG040을 적용한다고 하고, 부속서 III 제I부 (e)는 바젤 항목 B1110 대신 GC010, GC020을 적용한다고 정합니다. 배터리 내장 기기 스크랩의 분류는 사안별로 관할당국에 확인이 필요합니다.</li>
+<li><b>배터리가 들어 있는 폐전기·전자제품</b>은 배터리 자체와 다른 문제입니다. 관보본의 부속서 IV 제I부 (c)와 부속서 III 제I부 (e)는 A1180·B1110 대신 GC010·GC020을 쓰게 했지만, 위임규정 (EU) 2024/3230이 이를 바꿨습니다. 지금은 목록 A 배터리 등 유해 부품이 든 것은 A1181, 그렇지 않은 것은 Y49이고 둘 다 PIC입니다. 연합 안 운송에서만 2026년 12월 31일까지 적절한 경우 GC010·GC020(녹색)을 쓸 수 있습니다(부속서 IV 제I부 (g)). 배터리 내장 기기 스크랩의 분류는 사안별로 관할당국에 확인이 필요합니다(<a data-doc="w-anx3-4">부속서 III~IV 문서</a>).</li>
```
