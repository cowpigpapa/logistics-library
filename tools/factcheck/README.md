# 사실관계 점검 기록

에이전트가 문서의 수치·조문·판례·요율·계산을 출처(링크된 원문, law.go.kr, 선사·터미널 요율표, ICC·IMO·IATA 자료)와 대조한 결과입니다. 파일마다 틀림(wrong)·지난 정보(outdated)·확인 불가(unverifiable) 항목과 요약(_summary)이 있습니다.

- 2026-10-14: 핵심 문서 10편(ch-dnd, ch-korea-storage, ch-air-storage, bl-basics, awb-basics, dg-forwarder, ins-claims, uld-code, inco-gray, tc-reefer-practice), 약 860개 항목. 틀린 10곳은 모두 고쳤고, 확인 불가는 문장에 기준 시점을 적거나 그대로 둠(대한항공 계산기 결과, ULD CARE 게시 연도).
- 2026-10-14(2~5차, 폴더 2026-10-14b·c): 나머지 해설 문서 75편(Charges·B/L·보험·위험물·콜드체인·ULD·Incoterms·컨테이너·EU 배터리 해설·CTU Code 해설). 1~5차 합계 85편, 약 6,500개 항목. 틀림 100·지난 정보 14·문서 안 불일치 7곳은 확인 뒤 고쳤고(Cubestow 앱 동작 설명 1건은 운영자 확인용으로 남김), 확인 불가 49곳은 기준 시점·출처를 문장에 밝히거나 그대로 둠. 번역문(EU 배터리 규정 번역 42편)과 Cubestow 소개 문서는 점검하지 않음.
- 반영: `python tools/factcheck/apply.py <보고서 폴더> --list` 로 보고 확인한 항목만 `--apply` (CTU 해설은 ctu-library.js에서 찾음).
- 2026-10-14(6차, 폴더 2026-10-14d): EU 배터리 규정·폐기물운송규정 번역 40편을 EU 관보 영문과 대조(숫자·날짜·조항·누락·의무 강도·정의된 용어). 번역 본문 오류 5곳(부속서 V의 should, 폐기물운송규정 'routing' 4곳 → 출입 지점, 부속서 II 허가 증빙 '또는')과 해설·비교표 오류 13곳을 고침. 전문(recitals) 3편은 점검하지 않음.
