# Logistics Library 검토·수정 인계서

작성일: 2026-10-10  
대상 저장소: `D:\Desktop\AI Project\LogisticsLibrary`

## 1. 이번 검토의 결론

현재 LL은 단순 규정 소개를 넘어, 원문 근거·한국어 설명·변경점·포워더 실무를 연결한 자료실로 상당히 잘 구성되어 있다. 특히 CTU Code의 장별 구조, EU 배터리 규정의 원문/번역 분리, 위험물 자료의 범위 한정, B/L·AWB와 적하보험의 클레임 흐름은 유지할 가치가 높다.

전체 문서 ID와 실제 파일은 일치했고, 검사한 정적 내부 링크에서 깨진 후보는 없었다. 치명적인 오류는 확인되지 않았다. 이번 수정은 명백한 날짜 오류 1건과, 법적 성격을 오해할 수 있는 표현들을 중심으로 최소 범위에서 진행했다.

상세 평가는 `research/legal-logistics-library-content-audit-2026-10-10.md`를 참고한다.

## 2. 이번에 반영한 수정

### A. 법령 전환일 정정

- 파일: `battery-docs/overview.html`
- 종전: 규정 (EC) No 1013/2006이 2026-05-21 폐지된다고 표시
- 수정: 2024-05-20 폐지되었고, 경과조치로 대부분의 조항이 2026-05-21까지 계속 적용된다고 구분
- 근거: Regulation (EU) 2024/1157, Articles 85–86

### B. DIWASS 명칭의 법적 성격 명확화

- 파일: `battery-docs/changes.html`
- 수정: EU 규정 본문은 집행위원회의 중앙시스템과 상호운용 가능한 시스템을 규정하고, DIWASS는 독일 정부 등 일부 기관이 사용하는 명칭이지 EU 규정상 보편적인 공식 명칭은 아니라고 명시

### C. 네덜란드 PGS 37-2의 적용 방식 명확화

- 파일: `battery-docs/de-nl.html`
- 수정: 48시간 크로스독 체크리스트 바로 앞에, PGS 37-2 자체가 전국에 일률적으로 직접 적용되는 법령은 아니며 환경허가·맞춤형 규정·시설 허가 조건에 반영되었는지 먼저 확인해야 한다는 주의문 추가

### D. 포워더의 운송인 지위 표현 보완

- 파일: `insurance-docs/ins-carrier-liability.html`, `insurance-docs/ins-forwarder.html`
- 수정: 확정운임이나 House B/L 한 요소만으로 언제나 운송인이 된다고 읽히지 않게 수정
- 판단 요소: 계약 전체 취지, House B/L·AWB 발행 명의, 운임 지급 방식, 실제 수행 업무 등을 종합
- 근거: 대법원 2007. 4. 27. 선고 2007다4943 판결

### E. IATA DGR의 성격 명확화

- 파일: `dg-docs/dg-rules.html`
- 수정: IATA DGR은 화주·포워더에게 법률상 직접 적용되는 법령이 아니라, 회원 항공사의 운송조건과 접수기준을 통해 사실상 요구되는 민간 실무표준이라고 표시

### F. 배터리 체크리스트를 기록 가능한 형식으로 보완

- 파일: `battery-docs/checklist.html`
- 추가 항목: 선적·예약 번호, 화물 지위, 담당자/확인일, 확인 상태, 증빙 위치, 예외·미비점과 조치
- 추가 연결: 위험물 자료의 리튬배터리 운송 및 CTU Code 제7장으로 이어지는 교차 링크

## 3. 클로드가 다음 작업에서 지켜야 할 기준

1. 기존 자료를 전면 재작성하지 말고, 현재의 원문/번역/요약/실무 구조를 유지한다.
2. 법령, 행정지침, 산업표준, 보험사 권고를 같은 법적 효력으로 표현하지 않는다.
3. 날짜는 `공포·발효`, `폐지`, `적용 시작`, `경과조치 종료`를 구분한다.
4. 법률 판단은 단일 요소로 단정하지 않고, 판례가 제시한 종합 판단 구조를 보존한다.
5. 체크리스트에는 가능하면 `담당자`, `상태`, `증빙`, `확인일`, `예외·조치` 필드를 둔다.
6. 위험물 운송과 폐기물 이동 규정은 별개의 축이라는 현재의 범위 구분을 유지한다.
7. 새로운 사실을 추가할 때는 공식 원문 또는 관할기관 자료를 우선하고, 확인일을 표시한다.

## 4. 다음 우선순위

### 우선순위 1 — 통합 검색과 시나리오 진입

- 전체 자료를 제목·본문·태그로 찾는 통합 검색
- 실무자가 상황으로 진입할 수 있는 경로 추가
  - 중고 리튬배터리 EU 반출
  - 폐배터리 EU 역내 이동
  - 미신고 위험물 발견
  - House B/L 화물 사고
  - 공동해손 통지 수령

### 우선순위 2 — 체크리스트의 실행성 통일

- 각 자료의 중요한 체크리스트에 담당자/상태/증빙/확인일/예외조치 필드를 공통 적용
- 인쇄 또는 PDF 저장 시 한 장의 선적 기록표로 쓸 수 있게 검토

### 우선순위 3 — 자료 간 교차 연결

- 배터리 ↔ 위험물 ↔ CTU 적입
- B/L·AWB ↔ 적하보험 ↔ 클레임
- Incoterms ↔ 보험 부보 주체 ↔ 운송서류
- 연결은 사용자의 다음 행동이 분명한 곳에만 추가하고, 링크를 과도하게 늘리지 않는다.

### 우선순위 4 — 편집 규칙 통일

- 모든 자료에 기준일/확인일 표기 규칙 통일
- 출처를 `공식 법령`, `관할기관`, `공식 해설`, `산업 가이드`처럼 구분
- CTU 문서의 목차 및 이전/다음 이동 방식 통일
- 추적 도구 결과에 조회시각·출처·원문 응답 상태가 남는 기록 카드 검토

## 5. 클로드에게 바로 전달할 요청문

> Logistics Library의 후속 보완 작업을 진행해 주세요. 먼저 `CLAUDE_HANDOFF_LL_2026-10-10.md`와 `research/legal-logistics-library-content-audit-2026-10-10.md`를 읽고, 이미 반영된 수정은 되돌리거나 중복 작업하지 마세요. 기존 사이트의 차분한 디자인, 본문 폭, 헤더·푸터 규격과 원문/번역/요약/실무 구조를 유지하세요. 다음 순서는 ① 전체 자료 통합 검색, ② 선적 시나리오별 진입 페이지, ③ 담당자·상태·증빙·확인일·예외조치가 있는 실행형 체크리스트, ④ 배터리-위험물-CTU 및 B/L-보험-클레임 간 교차 링크, ⑤ 기준일과 출처 등급 표준화입니다. 법령·행정지침·민간표준의 효력을 구분하고, 날짜는 발효·폐지·적용·경과조치 종료를 구분하세요. 수정 전후 파일 목록과 근거, 테스트 결과를 별도 변경 기록으로 남기세요.

## 6. 주요 공식 근거

- EU Battery Regulation 2023/1542: https://eur-lex.europa.eu/eli/reg/2023/1542/oj
- EU Waste Shipments Regulation 2024/1157: https://eur-lex.europa.eu/eli/reg/2024/1157/oj
- IMO CTU Code: https://www.imo.org/en/ourwork/safety/pages/ctu-code.aspx
- ICAO Dangerous Goods Technical Instructions: https://www.icao.int/safety/DangerousGoods/Pages/technical-instructions.aspx
- 대법원 2007다4943: https://www.law.go.kr/LSW/precInfoP.do?evtNo=2007%EB%8B%A44943
- PGS 37-2: https://publicatiereeksgevaarlijkestoffen.nl/publicaties/online/pgs-37-2/2023/1-1-april-2026
- 네덜란드 정부 PGS 안내: https://iplo.nl/thema/externe-veiligheid/publicatiereeks-gevaarlijke-stoffen-pgs/pgs-37-1-37-2/

## 7. 검증 명령

```powershell
node --test
git diff --check
```

추가로 로컬 서버에서 다음 문서를 직접 열어 표와 링크의 표시를 확인한다.

- `/library/eu-lithium-battery/overview`
- `/library/eu-lithium-battery/checklist`
- `/library/eu-lithium-battery/de-nl`
- `/library/dangerous-goods/dg-rules`
- `/library/cargo-insurance/ins-forwarder`
- `/library/cargo-insurance/ins-carrier-liability`
