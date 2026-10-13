# 용어 검수 도구 (logistics.onharu.app/term-review)

사장님 원칙: 용어는 **문장 단위**로 판단하고 보여 준다(단어 짝만으로 정하지 않는다). 표기 기준은 `tools/STYLE.md`.

## 데이터
- Supabase 분석 DB(`yihsukyedtlsdbexthlu`)의 `public.term_review` 표. `round` 1 = 10/11~12 변경분(처리 완료), 2 = 10/13 반영분.
- 읽기·쓰기 RPC: `get_term_review(p_secret)`, `save_term_review(...)`(관리자 키 = 링크 점검 키). 표 정의는 `supabase/term_review.sql`.
- SQL 실행: `npx -y supabase@latest db query --project-ref yihsukyedtlsdbexthlu --linked -f <파일>` (Loading Simulator 폴더에서, 로그인된 CLI).
- `data/`: 1차 목록(terms_dataset.json), 실제 전후 문장(term_sent*.json), 지금 문장(term_ctx.json), Codex·Antigravity 의견(review/codex_XX.json, agy_XX.json), 사장님 판정 사본(review/owner_art, owner_rows.json), 2차 목록(review/r2_items.json), 10/13 반영 기록(review/apply_log.txt).

## 스크립트(순서)
1. `term_sent.py` — git 두 커밋 사이(BASE→AFTER)에서 바뀐 문장 짝을 뽑아 줄마다 붙인다. `LIMIT=999 OUT=term_sent_all.json`이면 전부.
2. `term_ctx.py` — 지금 사이트 문장(앞뒤 한 문장)을 붙인다(전후를 못 찾은 줄용).
3. `run_review.py` — 문장 묶음(review/inXX.json)을 Codex(`codex exec --sandbox read-only`)와 Antigravity(`agy -p`, 권한 건너뛰기 옵션 없이 문장을 질문에 넣음)에게 따로 보여 주고 판정 JSON을 받는다. `WORKERS=1`이면 하나씩.
4. `upload.py` — 문장 짝과 두 의견을 `sents`·`rev` 칸에 넣는 SQL(review/upload.sql).
5. `apply_terms.py` — 10/13 반영 기록(다시 돌리지 않는다). 새 반영은 이걸 본떠: 줄마다 '바꾼 뒤 문장' 안에서만 고치고, 사이트 전체 규칙은 쓰인 곳을 모두 확인한 뒤 넣는다.
6. `record.py` — 판정·반영 메모를 표에 기록하는 SQL(review/record.sql).
7. `r2_build.py` — 반영 커밋의 전후 문장을 '바뀐 말'별로 묶어 다음 차수 검수표를 만든다(review/r2.sql, round=2). 커밋 해시(A, B)와 EDITS 목록을 바꿔 다음 차수에 쓴다.

반영 뒤: `python tools/library_index.py && python tools/build_home.py && python tools/prerender.py` → `--check` 0 → 커밋 → 깨끗한 폴더 배포 → IndexNow.
