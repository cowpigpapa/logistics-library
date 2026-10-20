# Stage 3b: Dangerous Goods merges (2026-10-20)

Edited copies are under `clean3/` at their repo paths. Nothing in the repo was changed or deleted.

## Deleted ids and redirect targets (`deleted-dg.txt`)
- dangerous-goods/dg-treaties -> dangerous-goods/dg-rules
- dangerous-goods/dg-kr-duty -> dangerous-goods/dg-forwarder
- dangerous-goods/dg-penalty -> dangerous-goods/dg-forwarder

Old fragments to remove when applying: `dg-docs/dg-treaties.html`, `dg-docs/dg-kr-duty.html`, `dg-docs/dg-penalty.html`.

DG doc count goes from 18 to 15.

## 1. dg-treaties merged into dg-rules (27.3KB to 42.6KB)
- New §3 "조약에서 국내법으로: 한국은 어떤 법으로 받아들였나". Old §3 (교육) is now §4 and old §4 (한국 포워더…) is now §5. h3s are numbered 1 to 5.
  - Treaty-to-law table, with the "한국의 가입" column cut down to the year in the treaty cell: 1952 가입, SOLAS 1981 발효, MARPOL III 1996 발효, ADR and RID not a party.
  - 헌법 제6조제1항.
  - h4 항공: Annex 18 adoption, entry into force and applicability (1981/1983/1984) and its UN/IAEA basis; 항공안전법 제1조 and 제70·71·72조 (incl. the IATA-recognised training exception); 고시 제1조; 시행규칙 제209~212조.
  - h4 해상: SOLAS VII and MARPOL III; 선박안전법 제41조 and 제41조의2 (2010-04-15); 규칙 제3조, 제26조 and 제5장 제239조 (2010-08-06); 고시 제11조, 제27조 and 별표 28·29 (2010-11-12); the 2010 coincidence with IMDG 34-08; 선박안전법 제5조 (international convention prevails); 해양환경관리법 제2조·제4조·제29조.
  - h4 도로·철도: ADR (55 parties) and RID (45 parties, 2024-07-01) party lists; the corrected OSJD/SMGS wording, kept as is (2018 OSJD full member; 2019 support for a separate SMGS/SMPS accession; SMGS does not apply to Korean domestic rail); 위험물안전관리법 제3조 split of modes and 제20·21·28조; 제1~6류; Basel and 폐기물국가간이동법 제1조.
  - All dg-treaties sources were kept (ICAO ×2, IMO status, UN Treaty, OTIF, 이투데이 ×2, OSJD, MarineLink, law.go.kr).
- Dropped as trivia, as instructed: exact instrument-deposit and entry-into-force dates (1952-11-11/12-11, 1980-12-31/1981-03-31, 1984-07-23/10-23, 1996-02-28/05-28). The years stay in the table.
- Dropped as duplicates already in dg-rules: IMDG mandatory from 2004; the "Korean forwarder meets ADR in party territory" line (already in the §5 table).
- Intro and disclaimer now mention the treaty path and 국가법령정보센터. Internal links now point to "3절" instead of dg-treaties. Links to dg-kr-duty now point to dg-forwarder.

## 2. dg-kr-duty and dg-penalty merged into dg-forwarder (36.8 + 35.9 + 29.7 = 102KB to 76.8KB)
New title: "포워더의 위험물 교육 의무와 제재 — 누가 어떤 교육을 받고, 안 받으면 어떻게 되나" (short: 포워더의 교육 의무와 제재; tag 교육·제재).

Sections:
1. 직무별 교육 대상
   - The forwarder §1 principle. Its mode table was folded into one paragraph: international clauses, domestic bases, where forwarders are named.
   - Job × training matrix (forwarder §6). A note on MSDS education was added to the 창고 row.
   - h4 "위험물을 안 받는 포워더도" (forwarder §5, trimmed).
2. 법령별 교육
   - The kr-duty law-by-law table, cut to 법령 / 대상 / 주기·시간. The 근거 조문 and 교육기관 columns duplicated the per-law h4s.
   - h4 항공: kr-duty law, 고시 bullets and 212조 수료 기준, plus forwarder 표 1-1/1-2, the CBTA function table and the guidance. The third column of the function table, which repeated the matrix, was dropped.
   - Also in h4 항공: 한국 고시 vs CBTA, Korean Air D.G Diploma, KE/OZ course length (5일/3일, from forwarder §7), and 보안검색 being separate.
   - h4 해상: IMDG 1.3, 법 제41조의2 (2010-04-15), 규칙 239조, 별표 28 list, hours/cycle table, 수료 90%/80점, 3년 기록, 집합·온라인, KOMDI (2010-12-09 지정, 3일/1일), the CFS ambiguity, and the 선박입출항법 제32조 notification duty.
   - h4 도로: 위험물안전관리법 targets (2020-06-09), 화물자동차 운수사업법 and ADR.
   - h4 철도.
   - h4 화관법, with the 8-row table and edunics.
   - h4 고압가스.
   - h4 산안법 MSDS, with the training-provider detail recovered from the dropped table column.
3. 강습교육·실무교육과 상호 인정
   - The 위험물안전관리법 강습/실무 table (안전원/기술원, 사이버교육, 수료증, 제28조제2항, 소방청 누리집).
   - The mutual-recognition list. The rail 제27조제3항 and 화물차 제53조제3항 exemptions now live only here.
4. 교육을 받지 않으면
   - The penalty table (dg-penalty §1).
   - h4 개인이 받나, 회사가 받나. The kr-duty table is kept, with penalty restatements removed because they are in the table above. The extra facts from dg-penalty §2 are folded in: the "위험물취급을 한 자" ambiguity, the 직무구분 4 ambiguity, 별표 5 aggravation/½ adjustment/6개월/상한, 선박 1-year lookback, 위안법 제39조 having no fine for 제28조, and 양벌 with the 상당한 주의 defence.
   - h4 미신고·오신고 제재 (dg-penalty §3 table).
   - h4 해외의 제재: 49 CFR 107.329 amounts, FAA TiendaMIA, Amazon UK.
5. 운송인과 민사상 결과
   - Maersk misdeclaration-fee definition with no amounts, and House B/L exposure.
   - 항공사 제174조/제202조/제3조제3항, plus the 운항증명 사유 (제91조제1항제29·30호) and 제206조제1항 as the reason airlines demand training.
   - 민사 책임과 보험: see the note below.
6. 점검표. The three checklists were merged (16 items; duplicates combined).

Duplicates removed:
- The kr-duty "개인과 사업주" table vs dg-penalty §2: kept as one table, with the penalty-specific extras added as two paragraphs.
- The kr-duty 고시 bullets vs the forwarder 2절 cycle text, and the 별표 28 cycle text vs the forwarder 3절 table.
- The forwarder §7 교육기관 table. Its facts were spread into the per-law h4s.
- The forwarder §1 mode table.
- The CBTA history, which is already in dg-rules §4.
- The repeated 제174조/제202조 text, KE/OZ source repeats, and three separate disclaimers (now one).

Case-doc check (dg-penalty misdeclaration and civil bits):
- The 상법 table (제127·928·801·116조) duplicated case-kr-litigation §1, which also has 제853·795·796·926·115·160조. It was replaced by a compact paragraph that links there.
- Kept in dg-forwarder because case docs do not have them: 상법 제800조 (위법선적물 처분), the "포워더에게 의미" readings, and 제659조 insurance.
- TiendaMIA, Amazon UK, Maersk and the 49 CFR amounts are not in any case doc, so they were kept in dg-forwarder.

## 3. dg-library.js and dg-library.html
- DOCS: removed dg-treaties, dg-kr-duty and dg-penalty. The dg-rules title gets the subtitle "…까지, 한국 법령과의 연결" and a new summary. dg-forwarder gets a new title, short title, tag and summary.
- SECTIONS:
  - 국제 위험물: ["dg-rules"], sub "UN 권고 · IATA·IMDG·ADR · 조약과 국내 입법".
  - 위험물 교육: ["dg-forwarder"], sub "직무별 교육 대상 · 법령별 교육 · 미이수 제재".
- STAGES:
  - "IATA·IMDG·ADR이 뭔가요": ["dg-rules"].
  - "우리 직원은 무슨 교육을 받아야 하나요": ["dg-forwarder"].
  - "교육을 안 받으면 어떻게 되나요": ["dg-forwarder", "case-inspection"].
- DOCS_VERSION 20261020-06 → 20261020-07; dg-library.html `dg-library.js?v=20261020-07`.

## 4. Referring fragments repointed
All link text is now "포워더의 위험물 교육 의무와 제재", with a section number where useful.
- case-accident.html, case-kr-accident.html: the two links (dg-kr-duty and dg-forwarder) are now one dg-forwarder link.
- case-kr-litigation.html: dg-penalty → dg-forwarder 4절.
- case-inspection.html: dg-kr-duty → dg-forwarder; dg-penalty → dg-forwarder 4절; dg-forwarder link text.
- dg-hidden.html:
  - Intro: dg-forwarder + dg-penalty → one link.
  - §1 link text.
  - "민사 책임 표" → case-kr-litigation 상법 조문 표 + dg-forwarder 5절.
  - FAA case → dg-forwarder 4절.
  - Sanctions → dg-forwarder 4절.
- dg-lithium.html: two dg-penalty links → dg-forwarder; dg-forwarder link text.
- dg-msds.html: dg-kr-duty → dg-forwarder; dg-forwarder link text.
- kr-small.html: dg-treaties → dg-rules 3절.
- dg-rules.html: dg-treaties → "3절"; dg-kr-duty → dg-forwarder.
- tools/home-cards.html: no references.

## Not edited (generated or out of scope; refresh with the build)
- library-index-data.js, index.html and 404.html (home cards/menu): `tools/library_index.py` → `build_home.py`.
- sitemap.xml, search/*.json, freshness.json, doc-links.json, tools/prerender-dates.json, and prerendered `library/dangerous-goods/{dg-treaties,dg-kr-duty,dg-penalty}.html`. Remove those three prerendered pages and regenerate.
- vercel.json: add 301s from deleted-dg.txt.
- tools/termreview data and tools/factcheck JSON still name the old files (historical).
