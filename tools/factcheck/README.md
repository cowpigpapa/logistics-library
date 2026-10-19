# 사실관계 점검 기록

에이전트가 문서의 수치·조문·판례·요율·계산을 출처(링크된 원문, law.go.kr, 선사·터미널 요율표, ICC·IMO·IATA 자료)와 대조한 결과입니다. 파일마다 틀림(wrong)·지난 정보(outdated)·확인 불가(unverifiable) 항목과 요약(_summary)이 있습니다.

- 2026-10-14: 핵심 문서 10편(ch-dnd, ch-korea-storage, ch-air-storage, bl-basics, awb-basics, dg-forwarder, ins-claims, uld-code, inco-gray, tc-reefer-practice), 약 860개 항목. 틀린 10곳은 모두 고쳤고, 확인 불가는 문장에 기준 시점을 적거나 그대로 둠(대한항공 계산기 결과, ULD CARE 게시 연도).
- 2026-10-14(2~5차, 폴더 2026-10-14b·c): 나머지 해설 문서 75편(Charges·B/L·보험·위험물·콜드체인·ULD·Incoterms·컨테이너·EU 배터리 해설·CTU Code 해설). 1~5차 합계 85편, 약 6,500개 항목. 틀림 100·지난 정보 14·문서 안 불일치 7곳은 확인 뒤 고쳤고(Cubestow 앱 동작 설명 1건은 운영자 확인용으로 남김), 확인 불가 49곳은 기준 시점·출처를 문장에 밝히거나 그대로 둠. 번역문(EU 배터리 규정 번역 42편)과 Cubestow 소개 문서는 점검하지 않음.
- 반영: `python tools/factcheck/apply.py <보고서 폴더> --list` 로 보고 확인한 항목만 `--apply` (CTU 해설은 ctu-library.js에서 찾음).
- 2026-10-14(6차, 폴더 2026-10-14d): EU 배터리 규정·폐기물운송규정 번역 40편을 EU 관보 영문과 대조(숫자·날짜·조항·누락·의무 강도·정의된 용어). 번역 본문 오류 5곳(부속서 V의 should, 폐기물운송규정 'routing' 4곳 → 출입 지점, 부속서 II 허가 증빙 '또는')과 해설·비교표 오류 13곳을 고침. 전문(recitals) 3편도 뒤이어 대조해 요약표·물류 메모 2곳과 OLAF 명칭(유럽부정방지청)을 고침.
- 2026-10-18(새 문서 6편, 폴더 2026-10-18): Customs · 통관(cu-clearance, cu-fta, cu-bonded)과 Charges 운임 계산(ch-surcharges, ch-air-weight, ch-lcl). 작성 에이전트가 쓴 근거 목록(<id>.facts.md)을 다른 에이전트가 1차 출처(law.go.kr 원문·API, 선사 공지)와 다시 대조해 568개 주장 중 65곳을 고친 뒤 게시. 확인하지 못한 HMM GRI·EFL 금액은 뺐고, HMM BUC·ECC는 함께 붙지 않는 대안이라 계산 예시에서 ECC를 뺐다.
- 2026-10-18(새 문서 4편, 같은 폴더): cu-documents, cu-import-timeline, ch-quote, bl-multimodal(+ins-carrier-liability 5절 교체). 대조 결과 39곳 수정 뒤 게시. 이 과정에서 보세화물관리 고시 별표 1에 부산 신항 터미널·인천공항 항공사 화물터미널이 없다는 점을 확인해 cu-bonded·ch-lcl의 신고지연 가산세 문장을 "별표 1에 이름이 오른 곳"으로 맞췄다.
- 2026-10-19(새 문서 11편, 폴더 2026-10-19): Customs(cu-hs-practice, cu-aeo, cu-penalty, cu-us-filing), DG(dg-lithium), 새 분야 Cargo Risk(rk-truck, rk-warehouse, rk-damage, rk-cross, rk-security, rk-typhoon). 각 문서를 다른 에이전트가 1차 출처와 대조해 모두 합쳐 114곳을 고친 뒤 게시. 대조 중 kr-mismatch의 전기자전거 분류(UN 3556/3557)를 바로잡았다. 같은 날 운영자 판단으로 rk-typhoon은 내용이 얕아 사이트에서 내렸고, rk-damage는 외포장 부분을 빼고 젖음 손상 문서로 줄였다(기록 파일은 남겨 둠).
