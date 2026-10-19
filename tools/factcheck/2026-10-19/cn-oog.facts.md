# cn-oog FACTS (2026-10-19 확인)

법령 원문은 law.go.kr DRF API(lawService.do, OC=test)로 2026-10-19에 받은 현행본에서 확인함(scratchpad/cnoog/law/*.xml, *.txt).
받은 판: 도로법 MST 284465(법률 제21480호, 시행 2026. 9. 18.), 도로법 시행령 MST 288871(시행 2026. 9. 18.), 도로법 시행규칙 MST 289835(시행 2026. 9. 18.), 도로교통법 MST 291133(시행 2026. 10. 13.), 도로교통법 시행령 MST 290387(시행 2026. 10. 2.), 도로교통법 시행규칙 MST 289009(시행 2026. 8. 24.), 산업안전보건기준에 관한 규칙 MST 273603, 항만운송사업법(법률 제21641호, 시행 2026. 8. 13.), 항만운송사업법 시행령(시행 2026. 9. 29.), 차량의 운행제한 규정(국토교통부훈령 제1924호, 2026. 1. 30. 일부개정, 행정규칙 ID 2100000273590), 외항운송사업자 운임 및 요금의 공표등에 관한 규정(해양수산부고시 제2023-96호, 2023. 7. 1. 시행).
웹 자료는 curl/WebFetch로 받아 scratchpad/cnoog/web/에 저장함.

## 도로법·시행령·시행규칙

| # | 문서에 쓴 내용 | 출처 | 근거 문장(원문) |
|---|---|---|---|
| 1 | 운행 제한, 허가 차량은 예외 | 도로법 제77조 제1항 https://www.law.go.kr/법령/도로법 | "도로관리청은 … 필요하면 대통령령으로 정하는 바에 따라 도로에서의 차량 운행을 제한할 수 있다. 다만, 차량의 구조나 적재화물의 특수성으로 인하여 도로관리청의 허가를 받아 운행하는 차량의 경우에는 그러하지 아니하다." |
| 2 | 화주·운송주선업자의 위반 지시·중량 허위 고지 금지 | 같은 법 제77조 제3항 | "화주(貨主), 화물자동차 운송사업자, 화물자동차 운송주선업자 등 … 차량의 운전자에게 제1항에 따른 차량의 운행 제한을 위반하여 차량을 운행하도록 지시ㆍ요구하거나 적재된 화물의 중량을 사실과 다르게 고지하여서는 아니 된다." |
| 3 | 경찰서장 협의, 허가 조건, 도로교통법 허가 의제 | 같은 법 제77조 제5항 | "미리 출발지를 관할하는 경찰서장과 협의한 후 … 운행허가를 할 때에는 운행노선, 운행시간, 운행방법 및 도로 구조물의 보수ㆍ보강에 필요한 비용부담 등에 관한 조건을 붙일 수 있다. 이 경우 운행허가를 받은 자는 「도로교통법」 제14조제3항의 단서 또는 제39조제1항의 단서에 따른 허가를 받은 것으로 본다." |
| 4 | 차량운행허가시스템 | 같은 법 제77조 제6항 | "국토교통부장관은 … 차량운행허가시스템을 구축ㆍ운영할 수 있다." |
| 5 | 회차·분리운송·운행중지 명령 불응 2년 이하 징역 또는 2천만원 이하 벌금 | 같은 법 제114조 제8호 | "다음 각 호의 어느 하나에 해당하는 자는 2년 이하의 징역이나 2천만원 이하의 벌금에 처한다. … 8. 제80조에 따른 도로관리청의 회차, 분리 운송, 운행중지의 명령에 따르지 아니한 자" |
| 6 | 축하중 10톤·총중량 40톤, 폭 2.5m·높이 4.0m(4.2m)·길이 16.7m | 도로법 시행령 제79조 제2항 https://www.law.go.kr/법령/도로법시행령 | "1. 축하중(軸荷重)이 10톤을 초과하거나 총중량이 40톤을 초과하는 차량 2. 차량의 폭이 2.5미터, 높이가 4.0미터(… 고시한 도로의 경우에는 4.2미터), 길이가 16.7미터를 초과하는 차량" |
| 7 | 신청서 기재 사항, 구조물 통과 하중 계산서, 경미하면 생략 | 같은 영 제79조 제4항 | "국토교통부령으로 정하는 제한차량 운행허가 신청서에 다음 각 호의 사항을 적고, 구조물 통과 하중 계산서를 첨부하여 도로관리청에 제출하여야 한다. 다만, … 초과하는 정도가 경미하거나 구조물의 보강이 필요하지 아니하다고 도로관리청이 인정하는 경우에는 … 생략할 수 있다. 1. 운행하려는 도로의 종류 및 노선명 2. 운행구간 및 그 총 연장 3. 차량의 제원 4. 운행기간 5. 운행목적 6. 운행방법" |
| 8 | 별지 제37호서식, 첨부서류 3종 | 도로법 시행규칙 제40조 제1항·제2항 https://www.law.go.kr/법령/도로법시행규칙 | "별지 제37호서식의 제한차량 운행허가 신청서를 도로관리청에 제출하여야 한다." / "1. 차량검사증 또는 차량등록증 2. 차량 중량표 3. 구조물 통과 하중 계산서(구조물 보강공사가 필요한 경우 구조물 보강공사 설계도면을 함께 첨부하여야 한다)" (행정정보 공동이용 동의 시 1호 확인) |
| 9 | 계산서 생략: 폭·높이·길이 제한 초과 차량, 기준 이내 차량, 구조물 없는 경로 | 같은 규칙 제40조 제3항 | "1. … 영 제79조제2항제2호에 따른 제한 중 어느 하나를 초과하여 운행허가를 받으려는 차량 2. … 축하중과 총중량이 운송차량 축의 수 및 축간 거리에 따라 도로관리청이 정하는 기준 이내인 차량 3. 운행경로가 교량 등 구조물을 통과하지 아니하는 경우로서 …" |
| 10 | 신청서 기재 항목(차량 등록번호, 차고지, 축수, 가장 먼 축간거리, 제원, 허가신청 제원, 화물 종류·제원, 운행목적·기간·방법, 경로), 처리기간 10일 | 같은 규칙 별지 제37호서식 | 서식 칸: "처리기간 10일", "신청인", "차량 형식 … (차량)등록번호", "차고지", "차량 제원 축수 가장 먼 축간거리 …", "허가신청 제원 … ※ 화물차량은 화물을 적재한 상태에서의 차량 제원을 적습니다.", "화물 종류 제원/중량", "차량운행 운행목적 운행기간 운행방법", "운행경로(구간)" |

## 차량의 운행제한 규정(국토교통부훈령 제1924호)

| # | 문서에 쓴 내용 | 근거 | 원문 |
|---|---|---|---|
| 11 | 허가 대상: 분리운송 불가·곤란 화물·기계류 차량 | 제8조 제1항 https://www.law.go.kr/행정규칙/차량의운행제한규정 | "1. 분리운송이 불가능한 규격화된 화물(생산공장에서만 분리ㆍ조립이 가능하여 완성된 상태로 운반하여야 하는 화물)을 운반하는 차량 2. 분리운송이 어렵거나 불가능한 규격화된 기계ㆍ기구류를 운반하는 차량 …" |
| 12 | 반복운행: 방산물자·초대형 디스플레이, 만료 후 30일 이내 | 제8조 제3항 | "수출용 방산물자 및 초대형 디스플레이 등 대형장비와 같은 동일 규격의 화물을 동일 노선으로 반복하여 운송하는 차량에 한하여 운행허가가 만료된 날부터 30일 이내에 종전과 동일한 조건으로 허가신청을 하는 경우 … 반복운행을 허가할 수 있다." |
| 13 | 차량 중량표 생략·작성 방법, 추가 서류, 실측 입고 | 제9조 제1항~제3항 | "(… 축하중, 총중량을 초과하지 아니한 경우에는 해당 서류의 제출을 생략하도록 한다)" / "1. [별첨] 참고자료의 차량 형태별 축하중 계산방법에 따라 계산한 값 2. 차량 및 도로 분야의 구조 전문가가 계산한 값 3. 계량증명소 등에서 실제 계측한 값" / "화물의 사진, 운행하고자 하는 차량의 사진, … 화물위탁증(또는 화물운송계약서, 운송장, 운송내역서, 운송확인서 등) 등을 제출하도록 요구할 수 있으며, … 지정하는 장소로 직접 차량의 입고를 요구할 수 있다." |
| 14 | 경로상 모든 도로관리청과 협의, 출발지 경찰서장 협의 | 제10조 제1항 제2호·제3호 | "2개 이상의 도로관리청을 경유하는 경우에는 경로 상의 모든 도로관리청과 협의할 것 3. … 「도로교통법」 제14조제3항에서 정한 차로의 너비 또는 같은 법 제39조제1항에서 정한 안전기준을 초과하는 경우에는 출발지를 관할하는 경찰서장과 협의할 것" |
| 15 | 높이: 실제 높이 −0.2m, 속도 제한 시 −0.1m | 제10조 제2항 제4호 | "높이 제한을 초과하는 차량은 횡단구조물의 실제 건축높이에서 0.2미터를 뺀 높이까지만 허가할 것. 다만, 차량의 속도를 제한하는 등의 필요한 조치를 한 경우에 한하여 실제 건축높이에서 0.1미터를 뺀 높이까지 허가할 수 있다." |
| 16 | 허가기간: 필요 일수, 각 목 해당 시 최장 1년(차로 너비, 차높이 표지값, 단일 19m·연결 25m) | 제10조 제2항 제5호 | "허가기간은 다음 각 목에 해당하는 경우에는 최장 1년 이내로 하고, 그 외의 경우에는 필요 일수로 할 것 가. … 구조물 통과 하중 계산서의 제출을 생략할 수 있는 경우 나. 차량의 폭이 실제 차로의 너비 이내인 경우 다. 차량의 높이가 … 차높이 제한 표지의 표시값 … 이내인 경우 라. 차량의 길이가 단일차량의 경우 19미터, 연결차량의 경우 25미터 이내인 경우" |
| 17 | 허가 조건(노선·시간·방법·비용), 운행시간은 원칙적으로 지정 안 함 | 제10조 제2항 제6호 | "… 필요한 허가조건을 부여할 것. 다만, 운행시간은 화물차 도심통행제한이나 특별한 사유가 있는 경우를 제외하고는 별도로 지정하지 아니한다." (본문에는 운행시간 지정 예외 문구를 쓰지 않았고 "운행시간이 정해질 수 있다"로만 씀) |
| 18 | 유도차량, 통행시간, 주행속도, 별표 3 표지, 경광등·반사체 | 제10조 제2항 제8호 | "가. 차량의 앞뒤에 유도차량을 배치하고 운행할 것 나. 도로관리청이 정한 통행시간에 운행할 것 다. … 정한 주행속도 이내로 운행할 것 라. 차량의 전면과 후면에 별표 3의 표지를 달고 운행할 것 마. 차량 및 적재화물의 끝과 가장자리에 경광등, 반사체 등을 달고 운행할 것" |
| 19 | 반복운행 축하중 12톤·총중량 72톤 이하, 180일 이내, 최대 1년 | 제10조 제2항 제9호 | "가. 반복운행 허가신청 대상차량은 축하중 12톤 이하, 총중량 72톤 이하인 경우로 할 것 … 라. 반복운행 허가기간은 180일 이내로 하고, 1차 반복운행 허가일로부터 최종 반복운행 허가기간 종료일까지의 기간은 최대 1년을 초과할 수 없음" |
| 20 | 피해 책임 귀속, 허가 위반 = 운행제한 위반 간주, 회차 등 명령·허가 취소 | 제10조 제3항 제1호·제3호·제4호 | "모든 피해에 대한 책임은 차량의 운행허가를 받은 자, 허가차량을 실제로 운행한 자 또는 허가차량의 운행을 사실상 관리한 자 … 에게 귀속됨" / "허가제원 또는 허가조건 중 어느 하나라도 위반한 경우에는 운행제한을 위반한 차량으로 간주함" / "법 제80조에 따라 회차, 적재물의 분리 운송, 차량의 운행중지 등을 명령할 수 있으며, 법 제96조에 따라 운행허가를 취소할 수 있음" |
| 21 | 처리 기한 5일·10일·25일, 보완 기간 불산입, 5일 전 통보 | 제29조 제1항·제2항 | "보완요구에 소요되는 기간은 제2항의 기간에 산입하지 아니한다." / "1. 별표 2에서 정한 축하중 및 총중량 허가 기준을 초과하지 아니하는 화물적재 차량의 운행허가 신청경로가 타 기관과의 협의가 불필요한 경우에는 5일 이내 2. … 협의가 필요한 경우에는 10일 이내 3. 별표 2에서 정한 일상적인 허가 기준을 초과하여 … 구조물 통과 하중 계산서를 제출한 경우와 … 반복운행 허가를 신청한 경우는 25일 이내(… 25일이 초과할 것으로 판단되는 경우는 처리 기한 5일 전에 신청자에게 사전 통보한다.)" |
| 22 | 별표 2: 5축 13.0~14.0m 45,200kg, 6축 이상 13.0~14.0m 48,000kg(계산 예시) | 별표 2 | "13.0m 이상 14.0m 미만 │45,200kg까지│48,000kg까지" (5축 │ 6축 이상), "12.0m 이상 13.0m 미만 │44,000kg까지│46,900kg까지" |
| 23 | 운행허가 표지 500mm 이상 | 별표 3 | "1. 표지판의 크기는 가로, 세로 모두 500mm 이상으로 할 것" |

## 도로교통법·시행령·시행규칙

| # | 문서에 쓴 내용 | 출처 | 근거 문장 |
|---|---|---|---|
| 24 | 안전기준 초과 금지, 출발지 경찰서장 허가 | 도로교통법 제39조 제1항 https://www.law.go.kr/법령/도로교통법 | "… 운행상의 안전기준을 넘어서 승차시키거나 적재한 상태로 운전하여서는 아니 된다. 다만, 출발지를 관할하는 경찰서장의 허가를 받은 경우에는 그러하지 아니하다." |
| 25 | 도로법 허가 대상이면 제14조 제4항 준용 | 같은 법 제39조 제2항 | "제1항 단서에 따른 허가를 받으려는 차가 「도로법」 제77조제1항 단서에 따른 운행허가를 받아야 하는 차에 해당하는 경우에는 제14조제4항을 준용한다." |
| 26 | 차로 너비보다 넓은 차, 경찰서장 허가 | 같은 법 제14조 제3항 | "차의 너비가 행정안전부령으로 정하는 차로의 너비보다 넓어 … 그 차의 운전자는 도로를 통행하여서는 아니 된다. 다만, … 출발지를 관할하는 경찰서장의 허가를 받은 경우에는 그러하지 아니하다." |
| 27 | 협의 거친 경찰서장 허가 = 도로법 운행허가 의제 | 같은 법 제14조 제4항 | "… 그 차가 통행하려는 도로의 관리청과 미리 협의하여야 하며, 이러한 협의를 거쳐 경찰서장의 허가를 받은 차는 「도로법」 제77조제1항 단서에 따른 운행허가를 받은 것으로 본다." |
| 28 | 적재중량 110%, 길이 +1/10, 높이 4m(4.2m) | 도로교통법 시행령 제22조 제3호·제4호 | "3. 화물자동차의 적재중량은 구조 및 성능에 따르는 적재중량의 110퍼센트 이내일 것" / "가. 길이: 자동차 길이에 그 길이의 10분의 1을 더한 길이" / "다. 높이: 화물자동차는 지상으로부터 4미터(… 4미터 20센티미터)" |
| 29 | 분할할 수 없는 화물 허가, 조건 부가 | 같은 영 제23조 | "2. 분할할 수 없어 제22조제3호 또는 제4호에 따른 기준을 적용할 수 없는 화물을 수송하는 경우" / "② 경찰서장은 … 허가를 할 때에는 안전운행상 필요한 조건을 붙일 수 있다." |
| 30 | 차로 너비 3m 이상, 부득이하면 275cm | 도로교통법 시행규칙 제15조 제2항 | "설치되는 차로의 너비는 3미터 이상으로 하여야 한다. 다만, 좌회전전용차로의 설치 등 부득이하다고 인정되는 때에는 275센티미터 이상으로 할 수 있다." (본문 계산 예시 메모에는 쓰지 않음, FACTS 참고용) |
| 31 | 빨간 헝겊 표지 30cm × 50cm, 밤에는 반사체 | 같은 규칙 제26조 제3항 | "안전기준을 넘는 화물의 적재허가를 받은 사람은 그 길이 또는 폭의 양끝에 너비 30센티미터, 길이 50센티미터 이상의 빨간 헝겊으로 된 표지를 달아야 한다. 다만, 밤에 운행하는 경우에는 반사체로 된 표지를 달아야 한다." |

## 국토교통부 운행허가 시스템, 서울시 안내

| # | 내용 | 출처 | 근거 |
|---|---|---|---|
| 32 | 인터넷 운행허가 시스템이 도로·횡단구조물 DB로 통과 가능 여부를 검색, 통과 불가 구조물과 우회 경로 안내 | https://www.ospermit.go.kr/Introduction/Info/Info_01.jsp | "인터넷 운행허가 서비스는 신청시 도로(고속도로,일반국도,지방도 등)및 횡단구조물 정보 DB를 토대로 운행가능 여부를 자동 검색해주고, 만약 신청한 경로상에 통과가 불가능한 횡단구조물이 있을 경우에는 해당 구조물의 명칭,위치,제원 및 사진등을 표출해주며, 아울러 우회가능한 대안 경로를 안내해 주는 서비스 입니다." |
| 33 | 서울시 별도 시스템 | https://news.seoul.go.kr/safe/archives/296 | "서울시 인터넷 제한차량 운행허가시스템 https://seouloperas.eseoul.go.kr", "분리가 가능한 화물 적재는 허가대상에서 제외합니다." |

## 해운법 관련 고시

| # | 내용 | 출처 | 근거 |
|---|---|---|---|
| 34 | 오픈탑·플랫랙 특수컨테이너는 운임 공표 유예 | 외항운송사업자 운임 및 요금의 공표등에 관한 규정 제9조 제1항 제1호(해양수산부고시 제2023-96호) https://www.law.go.kr/행정규칙/외항운송사업자운임및요금의공표등에관한규정 | "법 제28조제2항에 따라 다음 각 호의 어느 하나에 해당하는 사항은 운임등의 공표를 유예한다. 1. 수출 및 수입 컨테이너 중 특수컨테이너(Open Top, Flat Rack)" |

## 산업안전보건기준에 관한 규칙

| # | 내용 | 근거 | 원문 |
|---|---|---|---|
| 35 | 중량물 취급작업 사전조사·작업계획서 | 제38조 제1항 제11호 https://www.law.go.kr/법령/산업안전보건기준에관한규칙 | "사업주는 다음 각 호의 작업을 하는 경우 … 사전조사를 하고 그 결과를 기록ㆍ보존해야 하며, … 작업계획서를 작성하고 그 계획에 따라 작업을 하도록 해야 한다. … 11. 중량물의 취급작업" |
| 36 | 작업계획서 내용: 추락·낙하·전도·협착·붕괴 위험 예방대책 | 별표 4 제11호 | "11. 중량물의 취급 작업 … 가. 추락위험을 예방할 수 있는 안전대책 나. 낙하위험을 … 다. 전도위험을 … 라. 협착위험을 … 마. 붕괴위험을 예방할 수 있는 안전대책" |
| 37 | 작업지휘자 지정 | 제39조 제1항 | "사업주는 제38조제1항제2호ㆍ제6호ㆍ제8호ㆍ제10호 및 제11호의 작업계획서를 작성한 경우 작업지휘자를 지정하여 작업계획서에 따라 작업을 지휘하도록 해야 한다." |
| 38 | 달기구 안전계수: 화물 직접 지지 와이어로프·체인 5 이상, 훅·샤클·클램프·리프팅 빔 3 이상, 최대허용하중 표식 | 제163조 | "2. 화물의 하중을 직접 지지하는 달기와이어로프 또는 달기체인의 경우: 5 이상 3. 훅, 샤클, 클램프, 리프팅 빔의 경우: 3 이상" / "② 사업주는 달기구의 경우 최대허용하중 등의 표식이 견고하게 붙어 있는 것을 사용하여야 한다." |

## 항만운송사업법·시행령

| # | 내용 | 근거 | 원문 |
|---|---|---|---|
| 39 | 감정·검량 정의 | 항만운송사업법 제2조 제1항 제15호·제16호 https://www.law.go.kr/법령/항만운송사업법 | "15. 선적화물(船積貨物) 및 선박(부선을 포함한다)에 관련된 증명ㆍ조사ㆍ감정을 하는 일[이하 "감정(鑑定)"이라 한다] 16. 선적화물을 싣거나 내릴 때 그 화물의 용적 또는 중량을 계산하거나 증명하는 일[이하 "검량(檢量)"이라 한다]" |
| 40 | 화물 고정은 항만용역업 | 같은 법 시행령 제2조 제1호 다목 | "다. 선박의 청소[유창(油艙) 청소는 제외한다], 오물 제거, 소독, 폐기물의 수집ㆍ운반, 화물 고정, 칠 등을 하는 행위" |

## 국제 규범

| # | 내용 | 출처 | 근거 |
|---|---|---|---|
| 41 | 송하인의 화물 정보 제공(사전, 서면), 일반 화물은 설명·총중량·특수 성질, CSS Code 1.9 | SOLAS 제VI장 제2규칙 제1항·제2항 https://www.ttclub.com/fileadmin/uploads/tt-club/Documents/VGM/SOLAS_CHAPTER_VI_CARRIAGE_OF_CARGOES_AND_OIL_FUELS__as_amended_.pdf | "The shipper shall provide the master or his representative with appropriate information on the cargo sufficiently in advance of loading … Such information shall be confirmed in writing and by appropriate shipping documents prior to loading" / ".1 in the case of general cargo, and of cargo carried in cargo units, a general description of the cargo, the gross mass of the cargo or of the cargo units, and any relevant special properties of the cargo." |
| 42 | 송하인: 무게중심 편심 등 통보 | CTU Code §4.2.2 https://wwwcdn.imo.org/localresources/en/OurWork/Safety/Documents/1497.pdf | "Notifying the packer/shipper of any unusual transport parameters of individual packages, for example, the offset of the centre of gravity …" |
| 43 | 화주: OOG 등 특이 성질을 운송인에게 통보 | CTU Code §4.2.4 | "Any extraordinary properties such as reduced stacking capacity or out of gauge are communicated to the carrier;" |
| 44 | 플랫폼·플랫랙 구조, 래싱 브래킷 MSL 30kN 이상·대개 50kN, 끝벽 10kN 이상 | CTU Code §6.2.10·§6.2.11 | "no side superstructure except either fixed or collapsible end walls (flatracks) or are designed without any superstructure (platforms)" / "strong lashing brackets are welded to the outer sides of the longitudinal bottom girders with a MSL of at least 30 kN according to the standard. In many cases the lashing points have a MSL of 50 kN. … These end walls may be additionally equipped with lashing points of at least 10 kN MSL." |
| 45 | 크고 무거운 화물은 플랫폼·플랫랙 | CTU Code §7.2.5 | "As the lashing capacity of the securing points in general purpose freight containers is limited, such standard containers might not be appropriate for certain large and heavy cargo items. Instead, platforms or flatracks could be used." |
| 46 | 치수 초과는 플랫폼·플랫랙, 높이만 넘으면 오픈탑 | CTU Code §7.2.6 | "Such cargo may be accommodated on a platform or on a flatrack. When the cargo is only "over-height" but not "over-width" an open top CTU may also be suitable." |
| 47 | 무거운 화물은 위·옆에서 싣는 CTU | CTU Code §7.2.7 | "For heavy cargo, open top, open side or platform CTUs should be used so that the cargo can be loaded from the top or from the side without a need to drive into the CTU with the forklift truck." |
| 48 | 정확한 최대 over-height·over-width·over-length 기재 | CTU Code §11.3.4 | "Whenever the cargo projects beyond the overall dimensions of the CTU the information described in paragraph 11.3.3 should state the exact maximum over-height, over-width or over-length, as appropriate." |
| 49 | 오버하이트는 슬링·체인을 스프레더에 연결 | CTU Code 부속서 2 §3.3.1 | "When the spreader cannot be attached directly to the corner fittings, e.g. in case of over-height cargo, slings or chains can be used and connected to the spreader so that the lifting force remains vertical." |
| 50 | 터미널: 개방형 CTU 고박 점검, OOG 치수 확인·부킹 갱신, 부적절 고박 통보 | CTU Code 부속서 2 §4.2 | "Check the lashing of non-enclosed CTUs; Confirm the dimensions of out of gauge cargo and update booking data accordingly; Notify the CTU operator if out of gauge cargo is found to be improperly or inadequately secured to the CTU;" |
| 51 | 무게중심 외부 표시·지시 전달 | CTU Code 부속서 7 §1.11 | "If these conditions cannot be met, suitable measures should be taken … e.g. by external marking of the centre of gravity and/or by instructing forwarders/carriers." |
| 52 | 개방형 CTU 외곽 초과 시 운송인·포워더와 협의 | 부속서 7 §1.12 | "If the planned cargo of an open-topped or open-sided CTU will project beyond the overall dimensions of the unit, suitable arrangements should be made with the carriers or forwarders for accommodating compliance with road or rail traffic regulations or advising on special stowage locations on a ship." |
| 53 | 하중 분산, 빔은 CTU 운영자와 협의, 플랫랙 집중하중 | 부속서 7 §3.1.1~§3.1.3 | "It may be necessary to transfer the weight to the corner posts by supporting the cargo on strong timber or steel beams" / "should be designed in consultation with the CTU operator." / "Concentrated loads on platforms or flatracks should be similarly expanded by bedding on longitudinal beams or the load should be reduced against the maximum payload." |
| 54 | 편심 5%(60%/50%), 특별 10% | 부속서 7 §3.1.4 | "The eccentricity of the centre of gravity of the cargo should not exceed 5% in general. As a rule of thumb this can be taken as 60% of the cargo's total mass in 50% of the freight container's length. Under particular circumstances an eccentricity of up to 10% could be accepted" |
| 55 | 롤 트레일러는 대개 들어 올리지 않음 | 부속서 7 §3.1.5 | "Roll trailers have structural properties similar to platforms … As they are generally handled without lifting" |
| 56 | 무게중심 표시 6면(최소 4면), SLING HERE 마주 보는 두 면 | 부속서 7 부록 1 제7호·제16호 | "Where possible, "Centre of gravity" should be placed on all six sides but at least on the four …" / "Should be placed on at least two opposite faces of the package" |
| 57 | 플랫랙(경계 없음) 균형식, 최소 고박 | 부속서 7 §4.2.8(사이트 a7-securing 해설) | 사이트 문서 a7-securing: "없음(플랫랙·플랫폼) cx,y · m · g ≤ μ · cz · m · g + Fsec §4.2.8" / "경계가 없는 CTU는 마찰이 가속도보다 커도 진동으로 조금씩 밀리는 것을 막기 위해 최소한의 톱오버 래싱이 필요합니다(§4.2.8)" |
| 58 | 해상 C 횡방향 높이/폭 1.25 이상이면 전도 방지 | 사이트 a7-securing 표(§4.3.1) | "해상 C 횡방향 0.8 1.0 1.25 이상" |
| 59 | CSS Code 부속서 13 적용 범위(비표준·준표준, 매우 무겁거나 큰 화물) | MSC.1/Circ.1623 부속서 13 §1.1·§1.3 https://www.liscr.com/sites/default/files/MSC.1-Circ.1623.pdf | "The methods described in this annex should be applied to semi-standardized and non-standardized cargo including very heavy and/or very large cargo items." / "Very heavy and/or very large cargo items as addressed in chapter 1.8 of this Code may require provisions and considerations beyond the general scope of this annex." |
| 60 | MSL 표: 체인·웨빙 50%, 재사용 와이어 30%, 직렬이면 최소 MSL | 같은 §4.2(Table 1)·§4.4 | "Web lashing 50% of breaking strength … Wire rope (re-useable) 30% … Chains 50%" / "When the components of a lashing device are connected in series … the minimum MSL in the series should apply to that device." 각주 "1 kN ≈ 100 kg" |
| 61 | top-over 고박은 평가에 넣지 않음 | 같은 §4.7 | "Lashings going over the top of the cargo item, whose only function is to increase friction by their pre-tension, cannot be credited in the evaluation of securing arrangements under this annex." |
| 62 | 어림 규칙: 한쪽 MSL 합 = 중량, 1g 가정, 각도·불균등·마찰 미반영, 60° 이하 | 같은 §5.1~§5.3 | "The total of the MSL values of the securing devices on each side of a cargo item (port as well as starboard) should equal the weight of the item." / "This method, which implies a transverse acceleration of 1g … takes into account neither the adverse effects of lashing angles and non-homogeneous distribution of forces among the securing devices nor the favourable effect of friction." / "Transverse lashing angles to the deck should not be greater than 60° … Additional lashings at angles of greater than 60° may be desirable to prevent tipping but are not to be counted" |
| 63 | 중량물의 점·띠 하중, 빔으로 분산, 유한요소해석 | 같은 부속서 13 부록(Structural strength assessment) §5.2·§5.3 | "Heavy cargo items tend to produce concentrated strip or point loads rather than homogeneous loads. … Suitable steel or timber beams or equivalent panel structures should be used to transfer the strip or point load to the primary members" / "utilization of finite element analysis should be considered." |

## 선사·터미널 공개 자료

| # | 내용 | 출처 | 근거 |
|---|---|---|---|
| 64 | In Gauge/OOG/Break Bulk 정의 | Maersk Special Cargo https://www.maersk.com/solutions/special-cargo | "In Gauge cargo The dimensions of the cargo are smaller than or equal to those of the flat rack or open top container (i.e. it requires special equipment but does not displace additional slots on the vessel)." / "Out of Gauge cargo The dimensions of the cargo exceed the flat rack or open top container by length, width or height, but can still be unitised in containers." / "Break Bulk cargo Vastly exceeds the size and/or weight of a standard container and is therefore handled as non-unitised cargo and normally placed on a bed of flat racks with a large number of lashing points." |
| 65 | in-gauge 치수(20OT 549×222×234, 40OT 1,181×219×234, 40OT HC 1,181×219×265, 40FR 1,163×244×194, 40FR HC 1,163×244×226), 40FR 폭 220cm 이하면 길이 1,190cm까지 in-gauge, 개구부 기준 주석, 최대 적재 47,000kg* | 같은 페이지 | 표 값 그대로. "Note 1: Top opening dimensions for over-height cargo", "*Subject to terminal acceptance", "For 40'FR containers, if cargo width is <=220 cm and cargo length is upto 1190 cm ( i/o 1163cm), we consider this as in-gauge." "Kindly note dimensions vary with container series" |
| 66 | OOG 페이지의 40FR 최대 적재 34,500kg, 오신고 사유(끝벽 위치, 중량, 고박재 돌출, 쏠림, 추가 자재), 부킹 취소·추가 청구·MID, 터미널 거부, 칸 재배정·shut-out, 몇 cm도 갱신 | Maersk Out of Gauge cargo https://www.maersk.com/industry-sectors/special-cargo/out-of-gauge-cargo | "40'FR … Maximum payload (KG) 34,500" / "2. End wall position deviation … 3. Weight deviation … 4. Lashing equipment protrusions … 5. Cargo shifting … 6. Extra materials" / "If cargo tendered at the terminal does not match the quoted description\dimension, the carrier reserves the right to cancel the booking. If the carrier nevertheless accepts the cargo, they reserves the right to charge additional freight, handling charges and Misdeclaration Fee (MID)" (금액은 본문에 쓰지 않음) / "All terminals can refuse to load cargo as a safety precaution if the cargo dimensions do not match the declaration." / "Even a few centimetres can make a world of a difference." |
| 67 | 고박 가이드: OOG 정의, 플랫랙 폭 244cm 초과 OOG, 한쪽 over-width, 창내 적재 시 앞끝 30cm, 헤더 기댄 화물 갑판만, 무게중심 표시, 하중 분산 도표(2.0m 32.5t, 4.0m 37.6t, 6.0m 44.0t, 9.0m 47.2t), 바닥 레일 강도, 받침이 주 거더까지, 미끄럼 방지재·금속끼리 접촉 금지, 용접·천공 금지, 래싱 아이 5,000kg, 섞어 쓰기 금지, 매듭 50% 감소, 젖은 웨빙, 증명서 본선 전달, 20ft 플랫랙 미보유 | Maersk Line Lashing Guide https://www.maersk.com/~/media_sc9/maersk/solutions/transportation-services/ocean-transport/special-cargo/out-of-gauge-cargo/files/maersk-lashing-guide.pdf | "Out of gauge cargo are shipments which exceed the dimensions of standard containers by being over height, over length, and/or over width." / "Cargo more than 244cm wide on a flatrack is considered out of gauge." / "over-width cargo and respective blocking and bracing materials should not be stowed within 30cm (12") of the front end of a flatrack, as this prevents loading under deck. This type of cargo would need to be loaded on deck" / "Cargo stuffed against the headers of flatracks are only suitable for deck loading." / "the main strength of our basic flatrack is in the two outer-bottom rails" / 도표 "2.0m = 32.5 Tonnes 4.0m = 37.6 Tonnes 6.0m = 44.0 Tonnes 9.0m = 47.2 Tonnes" / "The bedding needs to be laid out across the flat, and it needs to reach the main girders." / "Wood dunnage or similar anti-slip materials (rubber) must be placed between cargo composed of metal, and the flatrack bottom rails." / "We do not allow any kind of welding, drilling holes, or modification of our flatrack's structure." / "The lashing eyes of the flatracks (in general) have a capacity of 5.000kgs and are consequently the weakest link" / "We do not recommend the mixing of different lashing materials like wires and web lashing" / "knotting in web lashing should be avoided as breaking strength is reduced by at least 50%" / "Wet webbing slings or ratchets can lead to a large loss of SWL." / "All lashings should be certified and these certificates must be passed to the ship for stowage in the cargo securing manual" / "we do not have 20ft flats in our fleet" |
| 68 | 필리핀: 부킹 확정 전 도착지 터미널 승인, 직반출입(마닐라 북항), 요구 서류(사진·도면, 중량·치수, 장비, 끝벽 위치, 고박 지침·증명서(있는 경우), 적입 사진, 들어 올리는 위치 사진) | Maersk, Out of Gauge and Break Bulk Cargos Acceptance(2020. 6. 2.) https://www.maersk.com/news/articles/2020/06/02/out-of-gauge-and-break-bulk-cargos-acceptance | "OOG and BBK shipments are subject for terminal's approval at the Destination prior to releasing of booking confirmation at Origin." / "OOG and BBK shipments to and from Manila North Port (PHMNLTM) must undergo direct-to-truck upon arrival (for import) or direct-to-vessel upon loading (for export)" / "Actual Pictures and Diagrams of the Cargo; Cargo and Container Weight and Dimensions; Container Type; End Wall Position (for flat rack); Lashing Instruction and Certificate (if available); Actual Pictures of the Cargo stowed …; Actual Pictures of the Cargo with indicated lifting points (if available)" |
| 69 | Swire: 무게중심 가운데, 상부 코너 피팅 가리지 않음, 마모 방지재, 어림 규칙 2.5배, in-gauge 폭 2,438mm·길이 5,618/11,652mm·높이 끝기둥, 끝벽 내림 OOG, 고박 증명서 선적 전, 고박 부족 거부, in-gauge는 끝벽 세움 | Swire Shipping, Customer Advisory – Flat Rack Container Acceptance(2023. 9. 30.) https://swireshipping.com/information/?p=22284 | "As a rule of thumb, the total of the Maximum Securing Load (MSL) values of the securing devices on each side of the unit of cargo (port and starboard) should be equal to 2.5 times the unit's weight." / "If the overall width, inclusive of packing, securing and lashing materials, does not exceed 2,438mm, the cargo will be treated as 'in-gauge' in width." / "does not exceed 5,618 for 20′ FR and 11,652 mm for 40'FR" / "does not exceed the height of the end posts when upright" / "Ends down flat rack will be treated as OOG." / "For all flat rack shipments, Swire Shipping will require a lashing certificate issued by a competent cargo surveyor." / "lashing certificates must be submitted prior to cargo loading" / "OOG flatracks found insufficiently lashed shall be rejected prior to loading." / "Cargo packed on the Flat rack must not obscure the top corner castings." / "All in-gauge cargo must be stowed on flatracks with ends up." / "Suitable "chafing gear" and "softeners" must be fitted on the lashings …" |
| 70 | 롤 트레일러: 넓은 화물 받침, 미끄럼·전도 고정 | Wallenius Wilhelmsen Cargo Handling Instructions, Roll trailers https://cargohandlinginstruction.walleniuswilhelmsen.com/cargo-operations/cargo-securing-instructions/securing-of-bolsters-and-roll-trailers/roll-trailers-2 | "Cargo wider than a roll trailer should be supported by a vertical timber placed between the lift's support timber and the vessel's deck to prevent tipping." / "Always ensure that trailers and cargo are secured against tipping and sliding." (출처 줄에는 같은 지침의 rule-of-thumb 페이지 URL을 실음: "The total MSL values of the securing devices on each side … should be equal or exceed the weight of the unit") |
| 71 | 터미널 요율표 항목(금액 미기재) | HJNC Standard Rate, Effective April 1st 2026 https://www.hjnc.co.kr/upload/main/HJNC%ED%91%9C%EC%A4%80%EC%9A%94%EC%9C%A8.pdf | "5. Surcharge on special, DG container … OOG … Special Continer Over-high spreader … Wire / Direct Delivery" |

## 사이트 내부 값(계산 예시에 사용)

| # | 값 | 출처 |
|---|---|---|
| 72 | 트랙터 약 9톤, 40ft 샤시 약 5톤(대표값) | ctu-library.js kr-road "트랙터(헤드) 약 9톤", "샤시 20ft 약 3.8톤, 40ft 약 5톤" |
| 73 | Maersk 40FR 자중 5,200kg | cn-docs/cn-dimensions.html "40FR Maersk 11,652 × 2,374 × 2,260 … 47,300 5,200" |
| 74 | 8ft 6in = 2,591mm(플랫랙 외부 높이로 사용) | cn-docs/cn-codes.html "2 8ft 6in (2591mm) - 표준" |

## 계산 예시 검산
- 오버와이드: 3,000 − 2,440 = 560, ÷2 = 280mm.
- 높이: 2,800 + 100 = 2,900; 2,900 − 1,940 = 960; 2,900 − 2,260 = 640; 2,591 − 1,940 = 651; 651 + 2,900 = 3,551; 4,000 − 3,551 = 449mm.
- 총중량: 9 + 5 + 5.2 + 28 = 47.2t. 별표 2 6축 13~14m 48,000kg ≥ 47,200kg, 5축 45,200kg < 47,200kg.
- 고박: 160 × 0.5 = 80kN; min(80, 50) = 50kN ≈ 5t; 28 ÷ 5 = 5.6 → 6, ×2 = 12; 28 ÷ 3 = 9.33 → 10, ×2 = 20; 28 × 2.5 = 70, ÷ 5 = 14.
- 40ft 길이 12,192mm × 5% = 609.6mm ≈ 0.6m.
- 예시 화물 치수·중량, 체인 파단강도 160kN, 플랫랙 브래킷 50kN, 받침목 100mm는 만든 예시값(본문에 예시·가정으로 표시).
