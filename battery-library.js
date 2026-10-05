// EU Battery 메뉴(/library/eu-lithium-battery): EU 배터리 규정 2023/1542와 폐기물운송규정 2024/1157의
// 공식 원문 링크, 전체 한국어 번역, 장별 해설(요약·달라진 점·물류 주의점·체크리스트), 실무 가이드.
// EU 법령은 출처를 밝히면 재사용할 수 있다(집행위원회 결정 2011/833/EU). 번역·해설은 AI가 작성한 비공식 자료이며
// 법적 효력이 있는 것은 EU 관보(OJ)에 실린 본문뿐이다. 본문은 /battery-docs/<id>.html 조각을 문서를 열 때 불러온다.
// 주소 /library/eu-lithium-battery/<id>로 문서 하나를 연다(정적 서버 미리보기에서는 ?doc=<id>).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/eu-lithium-battery';
  const DOCS_VERSION = '20261005-03';
  const routed = location.pathname.startsWith(BASE);
  const link = id => (routed ? `${BASE}/${id}` : `${location.pathname}?doc=${id}`);
  const home = routed ? BASE : location.pathname;
  const setCanonical = pathname => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = LIBRARY_ORIGIN + pathname;
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const EURLEX = 'https://eur-lex.europa.eu/';
  // 공식 원문(EUR-Lex 링크만). group: 목록에서 어느 구간에 둘지.
  const OFFICIAL = [
    {
      group: 'battery',
      title: '배터리 규정 Regulation (EU) 2023/1542 — 연결본',
      org: '유럽의회 · 이사회',
      date: '2026-08-13 연결본',
      lang: '96개 조 · 부속서 15개',
      url: EURLEX + 'eli/reg/2023/1542/2026-08-13/eng',
      note: '배터리와 폐배터리의 전 생애주기를 다룹니다. 2024/1781·2025/1561·2026/1738 개정을 반영한 연결본이며, 이 자료의 번역 기준입니다.'
    },
    {
      group: 'battery',
      title: '배터리 규정 2023/1542 — 관보본',
      org: '유럽의회 · 이사회',
      date: '2023-07-28 관보',
      lang: 'OJ L 191',
      url: EURLEX + 'eli/reg/2023/1542/oj/eng',
      note: '전문(recitals)을 포함한 최초 공포본. 법적 효력은 관보본과 이후 개정 관보에 있습니다.'
    },
    {
      group: 'wsr',
      title: '폐기물운송규정 Regulation (EU) 2024/1157 — 관보본',
      org: '유럽의회 · 이사회',
      date: '2024-04-30 관보',
      lang: '86개 조 · 부속서 17개',
      url: EURLEX + 'eli/reg/2024/1157/oj/eng',
      note: '폐기물의 EU 역내 이동·수출·수입·통과를 통제합니다. 대부분의 조항이 2026년 5월 21일부터 적용됩니다. 이 자료의 번역 기준입니다.'
    },
    {
      group: 'old',
      title: '구 배터리 지침 Directive 2006/66/EC',
      org: '유럽의회 · 이사회',
      date: '2006-09-26 관보',
      lang: '2025-08-18 폐지',
      url: EURLEX + 'eli/dir/2006/66/oj/eng',
      note: '배터리 규정이 대체한 구법. 일부 조항은 경과규정에 따라 더 오래 적용됩니다.'
    },
    {
      group: 'old',
      title: '구 폐기물운송규정 Regulation (EC) No 1013/2006',
      org: '유럽의회 · 이사회',
      date: '2006-07-12 관보',
      lang: '2026-05-21 폐지',
      url: EURLEX + 'eli/reg/2006/1013/oj/eng',
      note: '신 폐기물운송규정이 대체한 구법. 그 전에 통지된 운송에는 경과규정이 있습니다.'
    }
  ];
  // 문서 목록. law: b=배터리 규정, w=폐기물운송규정, g=실무 가이드. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'overview', law: 'g', tag: "설명·요약", level: 3, title: "두 규정 설명 및 요약 — 무엇이 들어 있고 어디부터 읽나", short: "두 규정 설명 및 요약", summary: "배터리 규정과 폐기물운송규정의 관계, 장·편·부속서 지도와 중요도, 읽는 순서." },
    { id: 'status', law: 'g', tag: "판정", level: 3, title: "제품·중고·폐기물 판정 — 리튬이 아니라 상태와 목적이 먼저", short: "제품·중고·폐기물 판정", summary: "중고 배터리가 제품으로 인정받는 증빙, 폐배터리의 절차와 코드, 접수를 멈춰야 하는 신호." },
    { id: 'changes', law: 'g', tag: "달라진 점", level: 3, title: "이전 법령에서 달라진 점 — 2006/66/EC와 1013/2006에서 무엇이 바뀌었나", short: "이전 법령에서 달라진 점", summary: "구 배터리 지침과 구 폐기물운송규정에서 바뀐 것 가운데 물류에 영향이 큰 변화와 경과규정." },
    { id: 'timeline', law: 'g', tag: "일정", level: 2, title: "적용 일정 — 2023년부터 2031년까지", short: "적용 일정", summary: "이미 적용 중인 조항과 앞으로 적용될 조항을 날짜순으로 정리." },
    { id: 'checklist', law: 'g', tag: "체크리스트", level: 3, title: "포워더 종합 체크리스트 — 예약부터 완료 증명까지", short: "포워더 종합 체크리스트", summary: "예약·신품·중고·폐기물·수출입·창고·검사·완료 단계별 확인 항목과 근거 조문." },
    { id: 'de-nl', law: 'g', tag: "참고 자료", level: 2, title: "독일·네덜란드 창고 — EU 규정 위에 얹히는 국내 요건", short: "독일·네덜란드 창고", summary: "독일의 허가 묶음과 네덜란드 PGS 37-2, 48시간 크로스독 예외." },
    { id: 'b-recitals-a', law: 'b', tag: "전문", title: "전문 (1)~(72) — 범위·분류·제품 요건의 입법 이유", short: "전문 (1)~(72)", summary: "적용 범위, 배터리 분류, 중고품 수입, 수입자 책임을 왜 그렇게 정했는지 설명하는 전문 앞부분." },
    { id: 'b-recitals-b', law: 'b', tag: "전문", title: "전문 (73)~(143) — 유통·실사·폐배터리·여권의 입법 이유", short: "전문 (73)~(143)", summary: "유통자 책임, 공급망 실사, 폐배터리 수거와 역외 운송, 배터리 여권의 취지를 설명하는 전문 뒷부분." },
    { id: 'b-ch1', law: 'b', tag: "제1장", level: 3, title: "제1장 일반규정 — 적용 범위와 정의 (제1~5조)", short: "제1장 범위·정의", summary: "적용 대상 배터리와 5개 범주, 수입자·생산자·풀필먼트 서비스 제공자 등 핵심 용어." },
    { id: 'b-ch2', law: 'b', tag: "제2장", level: 2, title: "제2장 지속가능성 및 안전 요건 (제6~12조)", short: "제2장 지속가능성·안전", summary: "물질 제한, 탄소발자국, 재활용 원료, 성능, 분리·교체 등 제품 요건과 배터리에 동봉할 문서." },
    { id: 'b-ch3', law: 'b', tag: "제3장", level: 3, title: "제3장 라벨, 표시 및 정보 요건 (제13~14조)", short: "제3장 라벨·표시", summary: "라벨, 분리수거 기호, QR 코드와 건전상태 데이터 접근." },
    { id: 'b-ch4', law: 'b', tag: "제4장", level: 2, title: "제4장 배터리의 적합성 (제15~20조)", short: "제4장 적합성·CE 표시", summary: "적합성 평가 모듈, EU 적합성 선언, CE 표시 부착 규칙." },
    { id: 'b-ch5', law: 'b', tag: "제5장", title: "제5장 적합성평가기관의 통보 (제21~37조)", short: "제5장 통보기관", summary: "적합성 평가를 맡는 통보기관의 지정·요건·감독 절차." },
    { id: 'b-ch6', law: 'b', tag: "제6장", level: 3, title: "제6장 경제운영자의 의무 — 제조자·수입자·유통자·풀필먼트 (제38~46조)", short: "제6장 경제운영자의 의무", summary: "제조자·수입자·유통자·풀필먼트 서비스 제공자별 의무와 3PL·수입 명의 포워더의 책임 경계." },
    { id: 'b-ch7', law: 'b', tag: "제7장", title: "제7장 배터리 실사 정책 (제47~53조)", short: "제7장 공급망 실사", summary: "코발트·리튬 등 원자재 공급망 실사 의무. 2027년 8월 18일부터 적용." },
    { id: 'b-ch8a', law: 'b', tag: "제8장 ①", level: 2, title: "제8장 폐배터리의 관리 ① 등록·확대생산자책임·수거 (제54~64조)", short: "제8장 ① 등록·EPR·수거", summary: "생산자 등록, 확대생산자책임, 수거 목표와 유통자의 인수 의무." },
    { id: 'b-ch8b', law: 'b', tag: "제8장 ②", level: 3, title: "제8장 폐배터리의 관리 ② 처리·재활용·운송 (제65~76조)", short: "제8장 ② 처리·운송", summary: "폐배터리 처리와 역외 운송 조건(제72조), 재사용 배터리가 폐기물이 아님을 보이는 증빙(제73조)." },
    { id: 'b-ch9', law: 'b', tag: "제9장", level: 2, title: "제9장 디지털 배터리 여권 (제77~78조)", short: "제9장 배터리 여권", summary: "2027년 2월 18일부터 전기차·LMT·2 kWh 초과 산업용 배터리에 QR 코드로 여는 배터리 여권." },
    { id: 'b-ch10', law: 'b', tag: "제10장", level: 2, title: "제10장 연합 시장감시 및 세이프가드 절차 (제79~84조)", short: "제10장 시장감시", summary: "부적합·위험 배터리의 시정 요구, 판매 금지, 철수·리콜 절차." },
    { id: 'b-ch11', law: 'b', tag: "제11장", title: "제11장 녹색 공공조달 및 물질 제한의 개정 절차 (제85~88조)", short: "제11장 공공조달·물질 제한 절차", summary: "공공기관의 배터리 조달 기준과 물질 제한을 고치는 절차." },
    { id: 'b-ch12-14', law: 'b', tag: "제12~14장", level: 2, title: "제12~14장 위임권한·개정·최종규정 (제89~96조)", short: "제12~14장 최종규정·적용일", summary: "조항별 적용일(제96조), 구 지침 폐지와 경과규정(제95조), 벌칙." },
    { id: 'b-anx1-5', law: 'b', tag: "부속서 I~V", level: 2, title: "부속서 I~V 물질 제한·탄소발자국·성능·안전 파라미터", short: "부속서 I~V", summary: "수은·카드뮴·납 한도, 탄소발자국 산정, 성능·내구성 항목, 에너지저장장치 안전 시험." },
    { id: 'b-anx6-7', law: 'b', tag: "부속서 VI~VII", level: 2, title: "부속서 VI~VII 라벨·표시와 건전상태 파라미터", short: "부속서 VI~VII", summary: "라벨 10개 항목, 분리수거 기호 도안, QR 코드 조건, 건전상태 파라미터." },
    { id: 'b-anx8', law: 'b', tag: "부속서 VIII", title: "부속서 VIII 적합성 평가 절차", short: "부속서 VIII", summary: "CE 표시 전 적합성 평가 모듈 A·D1·G와 기술문서 보관." },
    { id: 'b-anx9-10', law: 'b', tag: "부속서 IX~X", title: "부속서 IX~X EU 적합성 선언과 실사 대상 원자재", short: "부속서 IX~X", summary: "EU 적합성 선언 서식과 실사 대상 원자재·위험 범주 목록." },
    { id: 'b-anx11-12', law: 'b', tag: "부속서 XI~XII", level: 2, title: "부속서 XI~XII 수거율 산정과 보관·처리 요건", short: "부속서 XI~XII", summary: "수거율 산식, 리튬계 폐배터리 보관 요건, 재활용 효율과 물질 회수 목표." },
    { id: 'b-anx13', law: 'b', tag: "부속서 XIII", level: 2, title: "부속서 XIII 배터리 여권에 포함할 정보", short: "부속서 XIII", summary: "배터리 여권의 공개 정보와 접근이 제한되는 정보." },
    { id: 'b-anx14', law: 'b', tag: "부속서 XIV", level: 3, title: "부속서 XIV 중고 배터리 운송의 최소 요건", short: "부속서 XIV 중고 배터리 운송", summary: "중고 배터리를 제품으로 운송할 때 갖출 서류·시험 기록·포장. 미비하면 폐기물 간주와 불법 운송 추정." },
    { id: 'b-anx15', law: 'b', tag: "부속서 XV", title: "부속서 XV 대조표 — 지침 2006/66/EC와 이 규정", short: "부속서 XV 대조표", summary: "구 지침의 조문이 현행 규정 어디로 갔는지 찾는 표." },
    { id: 'w-recitals', law: 'w', tag: "전문", title: "전문 (1)~(73) — 구 규정을 왜 바꿨나", short: "전문 (1)~(73)", summary: "수출 제한, 전자화, 집행 강화의 취지를 설명하는 전문." },
    { id: 'w-t1', law: 'w', tag: "제1편", level: 2, title: "제1편 일반규정 — 범위와 정의 (제1~3조)", short: "제1편 범위·정의", summary: "적용되는 폐기물 이동의 범위와 통지자·운송·불법 운송 등 핵심 용어." },
    { id: 'w-t2-1a', law: 'w', tag: "제2편 제4~9조", level: 3, title: "제2편 절차 구분과 통지·동의 ① (제4~9조)", short: "제4조 절차 구분, 통지·동의 ①", summary: "PIC 대상인지 부속서 VII 대상인지 가르는 기준과 통지·계약·재정보증·동의 절차." },
    { id: 'w-t2-1b', law: 'w', tag: "제2편 제10~17조", level: 2, title: "제2편 통지·동의 ② 동의 조건과 동의 후 요건 (제10~17조)", short: "통지·동의 ② 동의 후 요건", summary: "동의 조건과 이의 사유, 동의 후 이동서류·수령 확인, 변경 시 운송 정지." },
    { id: 'w-t2-2', law: 'w', tag: "제2편 제18~21조", level: 3, title: "제2편 일반정보 요건과 부속서 VII 서류 (제18~21조)", short: "제18조 일반정보 요건", summary: "녹색목록 폐기물 운송의 서류: 출발 2근무일 전 작성, 수령 확인, 완료 증명, 5년 보관." },
    { id: 'w-t2-4', law: 'w', tag: "제2편 제22~26조", level: 3, title: "제2편 반송 절차와 비용 (제22~26조)", short: "반송 절차와 비용", summary: "운송이 막히거나 불법일 때 누가 90일·30일 안에 반송하고 비용을 내는지." },
    { id: 'w-t2-5', law: 'w', tag: "제2편 제27~35조", level: 3, title: "제2편 전자 제출·분류 문제·제3국 경유 (제27~35조)", short: "전자 제출·중고품 구분", summary: "서류 전자 제출 의무, 중고품과 폐기물의 구분 기준, 제3국 경유 운송." },
    { id: 'w-t3', law: 'w', tag: "제3편", title: "제3편 회원국 내에서만 이루어지는 폐기물 수송 (제36조)", short: "제3편 회원국 내 수송", summary: "한 회원국 안에서만 움직이는 폐기물은 그 회원국의 제도를 따릅니다." },
    { id: 'w-t4', law: 'w', tag: "제4편", level: 3, title: "제4편 연합에서 제3국으로의 수출 (제37~49조)", short: "제4편 수출", summary: "비OECD국은 금지 중심, 한국 등 OECD국은 통지·동의와 시설 감사." },
    { id: 'w-t5', law: 'w', tag: "제5편", level: 2, title: "제5편 제3국에서 연합으로의 수입 (제50~56조)", short: "제5편 수입", summary: "허용되는 발송국과 통지·동의·세관 절차." },
    { id: 'w-t6', law: 'w', tag: "제6편", level: 2, title: "제6편 연합을 통과하는 운송 (제57~58조)", short: "제6편 통과", summary: "EU를 거쳐 가는 제3국 간 폐기물의 경유 동의와 세관 통보." },
    { id: 'w-t7', law: 'w', tag: "제7편", level: 3, title: "제7편 환경적으로 건전한 관리와 집행 — 검사와 입증 책임 (제59~71조)", short: "제7편 검사와 집행", summary: "검사에서 폐기물이 아님을 입증하지 못하면 불법 운송. 운송인도 서류 제출 대상." },
    { id: 'w-t8', law: 'w', tag: "제8편", level: 2, title: "제8편 최종규정 — 경과규정과 적용일 (제72~86조)", short: "제8편 경과규정·적용일", summary: "구 규정 폐지와 경과규정, 조항별 적용일." },
    { id: 'w-anx1', law: 'w', tag: "부속서 IA~IC", level: 2, title: "부속서 IA~IC 통지서·이동서류 양식과 작성 지침", short: "부속서 IA~IC 통지서·이동서류", summary: "PIC 절차의 통지서와 이동서류 양식, 코드표." },
    { id: 'w-anx2', law: 'w', tag: "부속서 II", level: 2, title: "부속서 II 통지 관련 정보와 문서", short: "부속서 II 통지 정보", summary: "통지할 때 내는 정보 목록. 운송인 등록 증빙·경로·컨테이너 번호 포함." },
    { id: 'w-anx3-4', law: 'w', tag: "부속서 III~IV", level: 3, title: "부속서 III~IV 녹색목록과 황색목록", short: "부속서 III~IV 녹색·황색 목록", summary: "녹색목록은 부속서 VII 서류, 황색목록은 사전 통지·동의. 폐배터리 절차를 가르는 목록." },
    { id: 'w-anx5', law: 'w', tag: "부속서 V", level: 3, title: "부속서 V 수출 금지 판단용 폐기물 목록", short: "부속서 V 수출 금지 목록", summary: "비OECD국 수출 금지 판단용 목록. 폐배터리 코드 A1160·A1170·B1090의 원문." },
    { id: 'w-anx6-8', law: 'w', tag: "부속서 VI~VIII", level: 3, title: "부속서 VI~VIII 사전동의 시설·부속서 VII 서류·등재 요청 양식", short: "부속서 VII 서류 양식", summary: "녹색목록 폐기물 운송 서류(부속서 VII) 양식과 칸별 작성 주체·기한." },
    { id: 'w-anx9-10', law: 'w', tag: "부속서 IX~X", level: 2, title: "부속서 IX~X 평가 참조 기준과 시설 감사 기준", short: "부속서 IX~X 시설 감사", summary: "EU 밖 폐기물 처리시설의 감사인 자격과 시설 기준." },
    { id: 'w-anx11-13', law: 'w', tag: "부속서 XI~XIII", level: 2, title: "부속서 XI~XIII 보고 설문·공개 정보·대조표", short: "부속서 XIII 대조표", summary: "회원국 보고 설문, 공개 정보 항목, 구 규정 1013/2006과의 조문 대조표." }
  ];
  const LAW_NAMES = { b: '배터리 규정 2023/1542', w: '폐기물운송규정 2024/1157', g: '실무 가이드' };
  const byId = id => DOCS.find(d => d.id === id);
  const LEVEL_LABELS = { 3: '★★★ 꼭 알아야 함', 2: '★★ 알아두면 좋음' };
  const levelBadge = d =>
    LEVEL_LABELS[d.level] ? `<span class="lib-level" data-level="${d.level}">${LEVEL_LABELS[d.level]}</span>` : '';
  const docCard = d =>
    `<a class="lib-doc" href="${link(d.id)}"><span class="lib-doc-head"><span class="lib-tag">${esc(d.tag)}</span>${levelBadge(d)}</span><b>${esc(d.title)}</b><span>${esc(d.summary)}</span></a>`;
  const lines = text => text.replace(/\.\s+/g, '.<br>');
  const officialRow = o =>
    `<tr><td><b>${esc(o.title)}</b></td><td class="lib-publisher"><b>${esc(o.org)}</b><small>(${[o.date, o.lang].filter(Boolean).map(esc).join(' · ')})</small></td><td class="lib-official-note">${lines(esc(o.note))}</td><td><a href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">원문 열기 ↗</a></td></tr>`;
  // 목록 구간: 법령별로 장(편) 문서와 부속서 문서를 나눈다.
  const SECTIONS = [
    { title: "실무 가이드", sub: "AI 작성 · 두 규정을 가로질러 정리", docs: ["overview", "status", "changes", "timeline", "checklist", "de-nl"] },
    { title: "배터리 규정 2023/1542", sub: "장별 해설과 전체 번역", docs: ["b-recitals-a", "b-recitals-b", "b-ch1", "b-ch2", "b-ch3", "b-ch4", "b-ch5", "b-ch6", "b-ch7", "b-ch8a", "b-ch8b", "b-ch9", "b-ch10", "b-ch11", "b-ch12-14"] },
    { title: "배터리 규정 부속서", sub: "부속서 I~XV 해설과 전체 번역", docs: ["b-anx1-5", "b-anx6-7", "b-anx8", "b-anx9-10", "b-anx11-12", "b-anx13", "b-anx14", "b-anx15"] },
    { title: "폐기물운송규정 2024/1157", sub: "편별 해설과 전체 번역", docs: ["w-recitals", "w-t1", "w-t2-1a", "w-t2-1b", "w-t2-2", "w-t2-4", "w-t2-5", "w-t3", "w-t4", "w-t5", "w-t6", "w-t7", "w-t8"] },
    { title: "폐기물운송규정 부속서", sub: "부속서 IA~XIII 해설과 전체 번역", docs: ["w-anx1", "w-anx2", "w-anx3-4", "w-anx5", "w-anx6-8", "w-anx9-10", "w-anx11-13"] }
  ];
  // 작업 순서로 보기: 조 번호를 몰라도 지금 하는 일에서 문서를 찾아가게 한다.
  const STAGES = [
    { group: "먼저 알아둘 것", name: "전체 그림", ids: ["overview", "changes", "timeline"] },
    { group: "먼저 알아둘 것", name: "화물의 지위", ids: ["status", "b-ch1", "w-t1"] },
    { group: "먼저 알아둘 것", name: "우리 회사의 역할", ids: ["b-ch6", "b-ch8a", "w-t2-4"] },
    { group: "현장 순서", name: "1 예약", ids: ["checklist", "b-anx14", "w-t2-1a", "w-anx3-4", "w-anx5"] },
    { group: "현장 순서", name: "2 서류", ids: ["w-t2-2", "w-anx6-8", "w-t2-1b", "w-anx1", "w-t2-5"] },
    { group: "현장 순서", name: "3 픽업·창고", ids: ["b-ch3", "b-anx6-7", "b-anx11-12", "de-nl"] },
    { group: "현장 순서", name: "4 국경 통과", ids: ["w-t4", "w-t5", "w-t6", "b-ch8b"] },
    { group: "현장 순서", name: "5 검사 대응", ids: ["w-t7", "b-ch10"] },
    { group: "현장 순서", name: "6 도착·완료", ids: ["w-t8", "b-ch9"] }
  ];
  const stagePath = () => {
    const groups = [...new Set(STAGES.map(g => g.group))];
    return `<section class="lib-section lib-path"><h3>작업 순서로 보기</h3>${groups
      .map(
        group =>
          `<div class="lib-stage-group"><h4>${esc(group)}</h4><div class="lib-stages">${STAGES.filter(
            g => g.group === group
          )
            .map(
              ({ name, ids }) =>
                `<div class="lib-stage"><b>${esc(name)}</b><ul>${ids
                  .map(byId)
                  .filter(Boolean)
                  .map(d => `<li><a href="${link(d.id)}">${esc(d.short || d.title.split(' — ')[0])}</a></li>`)
                  .join('')}</ul></div>`
            )
            .join('')}</div></div>`
      )
      .join('')}</section>`;
  };
  function renderList(view) {
    const official = `<section class="lib-section lib-official"><h3>공식 원문 <a class="lib-intro" href="${EURLEX}" target="_blank" rel="noopener noreferrer">EUR-Lex ↗</a></h3><div class="lib-table-wrap"><table class="lib-table lib-official-table"><thead><tr><th>문서</th><th>발행 정보</th><th>내용</th><th></th></tr></thead><tbody>${OFFICIAL.map(officialRow).join('')}</tbody></table></div></section>`;
    const sections = SECTIONS.map(
      g =>
        `<section class="lib-section"><h3>${esc(g.title)} <small>${esc(g.sub)}</small></h3><div class="lib-docs">${g.docs
          .map(byId)
          .filter(Boolean)
          .map(docCard)
          .join('')}</div></section>`
    ).join('');
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>EU 리튬배터리 규정이란?</h2><p>EU에서 배터리를 다루는 법은 두 갈래입니다. <b>배터리 규정 2023/1542</b>는 배터리의 제조·표시·시장 출시부터 폐배터리의 수거·재활용까지를, <b>폐기물운송규정 2024/1157</b>은 폐기물이 국경을 넘을 때의 통지·동의·서류를 정합니다. 화물이 제품인지 중고품인지 폐기물인지에 따라 어느 법의 어느 조문을 따라야 하는지가 갈립니다.</p><a class="lib-summary-button" href="${link('overview')}">두 규정 설명 및 요약 →</a></div><div class="lib-notice"><b>번역과 해설</b><p>${lines('두 규정의 전문·조문·부속서 전체를 한국어로 옮기고, 장마다 내용 요약, 이전 법령에서 달라진 점, 물류·운송에서 주의할 점, 체크리스트를 붙였습니다. 번역과 해설은 AI가 EUR-Lex의 영문본을 읽고 작성한 비공식 자료이며 EU 기관이 만들거나 검토한 것이 아닙니다. 법적 효력은 EU 관보에 실린 본문에만 있으므로 실제 화물의 판단은 공식 원문과 관할당국의 안내를 기준으로 하세요. 원문 출처: EUR-Lex, © European Union.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기: 처음에는 공식 원문·작업 순서·실무 가이드만 펼친다. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.battery.open';
  const readOpen = () => {
    try {
      const v = JSON.parse(sessionStorage.getItem(FOLD_KEY) || 'null');
      return Array.isArray(v) ? v : null;
    } catch {
      return null;
    }
  };
  const saveOpen = list => {
    try {
      sessionStorage.setItem(FOLD_KEY, JSON.stringify(list));
    } catch {}
  };
  function makeFoldable(view) {
    const saved = readOpen();
    const sections = [...view.querySelectorAll('section.lib-section')].map((section, i) => {
      const details = document.createElement('details'),
        summary = document.createElement('summary'),
        h3 = section.querySelector(':scope > h3');
      details.className = section.className;
      summary.append(h3);
      details.append(summary, ...section.childNodes);
      details.open = saved ? saved.includes(i) : true;
      section.replaceWith(details);
      return details;
    });
    const sync = () => {
      saveOpen(sections.map((d, i) => (d.open ? i : -1)).filter(i => i >= 0));
    };
    sections.forEach(d => d.addEventListener('toggle', sync));
    sync();
  }
  // 문서를 작성·갱신한 날짜와 번역 기준본. 전 문서를 조문 단위로 대조 검수한 날짜가 아니므로 '대조 확인'이라고 쓰지 않는다.
  const UPDATED = '2026-10-05';
  const BASIS = {
    b: '번역 기준 2026-08-13 연결본(전문은 2023년 관보본)',
    w: '번역 기준 2024-04-30 관보본',
    g: '두 규정의 원문 기준'
  };
  const SOURCE_URL = {
    b: EURLEX + 'eli/reg/2023/1542/2026-08-13/eng',
    w: EURLEX + 'eli/reg/2024/1157/oj/eng'
  };
  const disclaimer = doc =>
    `<p class="lib-disclaimer">이 번역과 해설은 AI가 EUR-Lex 영문본을 바탕으로 작성한 비공식 자료입니다. 법적 효력은 EU 관보에 실린 본문에만 있으며, 개별 화물의 폐기물 여부·분류·절차는 관할당국 판단에 따릅니다.${SOURCE_URL[doc.law] ? ` <a href="${SOURCE_URL[doc.law]}" target="_blank" rel="noopener noreferrer">공식 원문 ↗</a>` : ''} 원문 출처: EUR-Lex, © European Union.</p>`;
  const pager = doc => {
    const i = DOCS.indexOf(doc),
      prev = DOCS[i - 1],
      next = DOCS[i + 1];
    const cell = (d, label) =>
      d ? `<a href="${link(d.id)}"><small>${label}</small><b>${esc(d.short || d.title)}</b></a>` : '<span></span>';
    return `<nav class="bat-pager" aria-label="이전·다음 문서">${cell(prev, '← 이전')}${cell(next, '다음 →')}</nav>`;
  };
  // 번역 구간 머리의 조문 바로가기: 조(h4.law-article)와 부속서(h3.law-division[id])에서 만든다.
  const lawToc = root => {
    const items = [...root.querySelectorAll('h4.law-article[id], h3.law-division[id]')];
    if (items.length < 3) return '';
    return `<nav class="law-toc" aria-label="조문 바로가기">${items
      .map(h => {
        const text = h.textContent.trim(),
          m = text.match(/^(제\d+조|부속서 [IVX]+[A-C]?)\s*(.*)$/);
        return `<a href="#${h.id}">${m ? `<b>${esc(m[1])}</b> ${esc(m[2])}` : esc(text)}</a>`;
      })
      .join('')}</nav>`;
  };
  const SHORT_CELL = 14;
  function fitTableColumns(root) {
    root.querySelectorAll('.lib-article table').forEach(table => {
      const columns = [];
      [...table.rows].forEach(row => {
        if ([...row.cells].some(c => c.colSpan > 1 || c.rowSpan > 1)) return;
        [...row.cells].forEach((cell, i) => (columns[i] = columns[i] || []).push(cell));
      });
      columns.forEach(cells => {
        const body = cells.filter(c => c.tagName === 'TD');
        const fits = c => c.textContent.trim().length <= SHORT_CELL;
        if (body.length && body.every(fits)) cells.forEach(c => c.classList.add('lib-nowrap'));
      });
    });
  }
  async function renderDoc(view, doc) {
    const head = `<nav class="lib-crumb"><a href="${home}">← EU Battery</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h2>${esc(doc.title)}</h2><p class="lib-checked">${esc(LAW_NAMES[doc.law])} · ${esc(BASIS[doc.law])} · 작성·갱신 ${UPDATED}</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/battery-docs/${doc.id}.html?v=${DOCS_VERSION}`);
      if (!response.ok) throw new Error(response.status);
      html = await response.text();
    } catch (_) {
      view.querySelector('.lib-loading').textContent = '문서를 불러오지 못했습니다. 잠시 뒤 다시 열어 주세요.';
      return;
    }
    const [commentary, translation] = html.split('<!--translation-->');
    const template = document.createElement('template');
    template.innerHTML = translation || '';
    const jump = translation
      ? `<nav class="bat-jump" aria-label="문서 안 이동"><a href="#commentary">해설</a><a href="#translation">전체 번역</a></nav>`
      : '';
    view.innerHTML = `${head}<article class="lib-article">${title}${jump}<div class="bat-commentary" id="commentary">${commentary}</div>${
      translation
        ? `<section class="bat-translation" id="translation"><h3 class="bat-part-title">전체 번역</h3>${disclaimer(doc)}${lawToc(template.content)}${translation}</section>`
        : disclaimer(doc)
    }${pager(doc)}</article>`;
    // 조각 안의 문서 링크(data-doc)를 현재 주소 방식에 맞춘다.
    view.querySelectorAll('a[data-doc]').forEach(a => {
      const [id, hash] = a.dataset.doc.split('#');
      if (byId(id)) a.href = link(id) + (hash ? `#${hash}` : '');
    });
    fitTableColumns(view);
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const id = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    const doc = byId(id);
    if (doc) {
      renderDoc(view, doc);
      document.title = `${doc.title} · EU Battery · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'EU Lithium Battery Regulation · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
