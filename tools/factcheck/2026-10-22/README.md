# 2026-10-22 책 구조 재구성 확인 기록

- 재구성: 카테고리마다 3~4장 + 마지막 장 "사례", 상위 색인 5묶음(계약·서류·통관 / 운송 장비·적재 / 특수 화물 / 화물 사고·보험 / 도구). 카테고리별 에이전트 10개가 중복 정리·사례 이동·새 사례 문서 초안을 쓰고 본 세션이 반영.
- 새 사례 문서: cn-cases, cu-cases, inco-cases, rk-cases, uld-cases, battery cases. 별도 에이전트가 원문으로 사실 확인(*.json: claim/verdict/evidence/fix/old). 결과: 틀림 3(rk 터널 이름, cu 사례 1 원심 결과, cn 절 번호), 부분 수정 33, battery·bl 새 사례 문제 없음. 모두 반영.
- 그림 점검: img-audit-1.md(CTU·ULD·컨테이너·온도·리스크), img-audit-2.md(DG·B/L·부대비용·통관·인코텀스·보험·배터리). 크게 틀린 그림 5개와 중간 수준 9개를 Codex로 다시 그리고 검수해 교체(uld-inspection은 두 번째 시도에서 통과), 도해 SVG 1개 직접 수정, 대체 텍스트 수정.
- 색인 평가: codex-index-eval.txt, antigravity-index-eval.txt(둘 다 7.5/10). 지적에 따라 짧은 이름 21개 변경, CTU 3장+사례+부록, Cold Chain 장 재구성, EU 배터리 조문 목록 색인 접기.
- 재검토(regress-1~3.json): 재구성으로 생긴 문제 34건(옛 이름 링크, 작업 메모 문장, 잘린 인용, 사라진 사실 2, 없는 표 참조, CTU 개요의 장 수) 모두 반영.
