// 부대비용·보관료 메뉴(/library/charges): 해상 부대비용, DEM·DET, 부산 터미널 보관료, 인천공항 보관료, 분쟁 사례.
// 본문은 /ch-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/charges/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/charges';
  const DOCS_VERSION = '20261028-12';
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
  // 공식 자료(배포처 링크만).
  const OFFICIAL = [
    { title: "해운법 제28조·제31조", org: "법제처 국가법령정보센터", kind: "법령", note: "외항 정기화물운송사업자의 운임·요금 공표 의무입니다.", url: "https://www.law.go.kr/법령/해운법" },
    { title: "외항운송사업자 운임 및 요금의 공표등에 관한 규정", org: "해양수산부", kind: "고시", note: "공표할 요금 항목과 공표 방법을 정합니다.", url: "https://www.law.go.kr/LSW/admRulInfoP.do?admRulSeq=2100000225094" },
    { title: "FIATA D&D Best Practice Guide(2018)", org: "FIATA", kind: "업계 지침", note: "Demurrage·Detention·통합 요금의 정의를 정리한 발표 자료입니다.", url: "https://fiata.cdn.prismic.io/fiata/a48563de-3aaf-455b-ac6d-e87635ef7a6c_FIATA_World_Congress_2018_-_Presentation_New_Working_Group_Sea_-Best_Practice_Guide_on_demurrage_and_detention-.pdf" },
    { title: "46 CFR Part 541", org: "U.S. FMC · eCFR", kind: "미국 규정", note: "미국 Demurrage·Detention 청구서 요건입니다.", url: "https://www.ecfr.gov/current/title-46/chapter-IV/subchapter-B/part-541" },
    { title: "PNC 2026 Standard Tariff", org: "부산신항만(PNC)", kind: "터미널 요율표", note: "수입 보관료 구간 요율이 실려 있습니다.", url: "https://www.pncport.com/resources/homepage/kor/data/2026_PNC_Standard_Tariff.pdf" },
    { title: "관세법 제172조", org: "법제처 국가법령정보센터", kind: "법령", note: "지정장치장 보관료의 근거 조문입니다.", url: "https://www.law.go.kr/법령/관세법/제172조" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'ch-quote', checked: '2026-10-18', tag: "견적", level: 3, title: "견적서 읽는 법 — 해상 FCL·LCL·항공 견적의 다섯 덩어리, 단위·환율·조건, 인보이스 대조", short: "견적서 읽는 법", summary: "해상 FCL·LCL과 항공 견적서를 출발지 비용·주운임·할증료·도착지 비용·통관·내륙의 다섯 덩어리로 나누고, 단위·통화·환율·지급 조건·유효기간과 Incoterms 2020 조건별 견적 범위를 정리합니다. 빠뜨리기 쉬운 항목 목록, 예시 금액으로 만든 견적 예시와 인보이스 대조 순서를 붙였습니다." },
    { id: 'ch-surcharges', checked: '2026-10-18', tag: "할증료", level: 3, title: "해상 할증료 — 종류, 생긴 이유, 계산 원리", short: "해상 할증료 종류와 BAF", summary: "BAF·LSS·EBS·EU ETS·CAF·PSS 등 해상운임에 붙는 할증료가 왜 생겼고, 1970년대 운임동맹 시절의 BAF·CAF 두 가지에서 왜 이렇게 늘어났는지, 원리상 어떻게 계산되고 어느 날짜 기준으로 붙는지를 금액 없이 정리하고 인보이스의 할증료 줄을 대조하는 순서를 보여 줍니다." },
    { id: 'ch-air-weight', checked: '2026-10-18', tag: "운임중량", level: 3, title: "항공 운임 중량 계산 — 실중량·부피 중량, 반올림, 중량 구간과 House·Master", short: "항공 운임 중량 계산", summary: "항공 운임 중량은 실중량과 부피 중량(cm³ ÷ 6,000) 중 큰 값입니다. 치수와 중량의 반올림, 여러 개 화물 합산, 최소 운임·중량 구간과 분기점, AWB 운임 칸, House와 Master 운임 중량이 다른 이유를 실제 숫자로 풉니다." },
    { id: 'ch-lcl', checked: '2026-10-18', tag: "LCL", level: 3, title: "LCL·CFS와 운임톤 계산 — 소량 해상화물이 모이고 나뉘는 길과 R/T 청구", short: "LCL·운임톤 계산", summary: "LCL 화물이 수출·수입 CFS에서 어떻게 모이고 나뉘는지 관세청 고시 기준으로 정리하고, 1CBM과 1,000kg 중 큰 쪽으로 세는 운임톤(R/T), 최소 1 R/T, CFS 실측 차이를 공개 요율로 계산해 보입니다." },
    { id: 'ch-carbon', checked: '2026-10-27', tag: "탄소배출", level: 3, title: "물류 탄소 배출량 계산과 탄소 규제 — ISO 14083·GLEC 계산법, EU ETS·FuelEU·IMO·CBAM", short: "물류 탄소 배출량 계산", summary: "화주가 묻는 운송 탄소 배출량을 ISO 14083:2023과 GLEC Framework 방식(WTW·TTW, 운송 체인 요소, 허브, 배출 원단위, 1차 데이터와 기본값)으로 계산하는 법을 GLEC 공개 기본값으로 만든 해상 FCL·LCL·항공·트럭 예시로 보이고, 포워더가 모을 자료와 계산서에 적을 것, Scope 3 카테고리 4·9 구분, EU ETS 해운·FuelEU Maritime의 확정 내용과 할증료로 넘어오는 구조, 2026년 10월 현재 채택 전인 IMO Net-Zero Framework, 2026년 확정 기간에 들어간 EU CBAM(연 50t 면제, 2027년 9월 30일 신고)에서 생산자와 포워더의 자료 구분, 한국 탄소중립기본법·물류정책기본법 관련 조항을 금액 없이 정리합니다." },
    { id: 'ch-sea-charges', tag: "해상부대비용", level: 3, title: "해상 부대비용 지도 — 누가 받는 돈인가, 선사·나라마다 다른 이름, 해운법 공표 제도", short: "해상 부대비용 항목과 받는 곳", summary: "THC·서류비·D/O 비용·씰비·부두사용료(화물입출항료)·항만시설보안료·CFS 작업료·청소·수리비가 선사·항만공사·터미널·포워더 가운데 누가 받는 돈인지 정리하고, Maersk·ONE·Hapag-Lloyd·장금상선의 2026년 한국 요율표로 부두사용료가 THC에 포함되거나 따로 붙는 차이(부산 4,429원/TEU), 2026년 7월 보안료 상한 145원/TEU, 공정위 의결의 THC 정의와 항만운송사업법상 하역료 구분, 미국·중국·일본·싱가포르의 다른 이름과 범위, 해운법 제28조·제29조의2·제31조와 해양수산부 운임공표 고시(요금 항목, 공표일자·적용일자, ±10% 범위, PORT-MIS 공표, 장기운송계약, 제재)를 다룹니다." },
    { id: 'ch-dnd', checked: '2026-10-19', tag: "DEM·DET", level: 3, title: "DEM·DET 제대로 읽기 — 같은 이름, 다른 시계와 계산법, LFD 확인과 손실 예방", short: "Demurrage·Detention과 무료 기간", summary: "Demurrage·Detention·통합 D&D·터미널 보관료를 구분하고 선사·나라별 요율표의 시계와 계산법 차이를 비교한 뒤, 컨테이너마다 Last Free Day(LFD)를 날짜로 세는 법과 계산 예시, free time 협의·연장 구매 시점, 지연 때 서면 요청, 수출 공컨테이너 반출일, 비용 협의 등 손실 예방 실무와 FMC 규정, 역할별 점검표를 정리합니다." },
    { id: 'ch-korea-storage', tag: "한국보관료", level: 3, title: "부산 터미널 보관료와 선사 D&D — 따로 쌓이는 두 시계, 부산 신항 요율과 PNC 2026 계산 예시", short: "부산 터미널 보관료와 선사 D&D", summary: "2023년부터 PNC·HJIT·GWCT·BNCT의 수입 보관료를 터미널이 수입자에게 직접 청구한다는 선사 공지와 그 결과 따로 도는 두 시계(양하일~반출일 보관료, 양하일~빈 컨테이너 반납일 선사 통합 D&D), PNC 2026 요율표의 '최고 구간 요율을 전 기간에' 규칙과 15일 = 500,500원·14일 = 318,500원 계산, 오전 8시 양하 기준, BNCT 일괄 적용 공지와 HJNC 2026 요율 비교, 두 시계를 합친 계산 예시, D/O 조건과 반출·반납 일정 관리, 화주 안내 문구, 포워더 체크리스트." },
    { id: 'ch-air-storage', tag: "항공보관료", level: 3, title: "인천공항 보관료: 종가료·종량료 — 두 요금을 더하는 구조, 무료 시간과 자정 규칙, 고가 특수화물 계산", short: "인천공항 화물 보관료 계산", summary: "인천공항 수입화물 보관료(창고료)가 종가액(과세가격 + 관세 기준)과 종량액(중량 기준)을 합산하는 구조와 '기본요율 + 할증요율 × 보관일수' 계산법, 대한항공 화물터미널·아시아나에어포트(AAP) C터미널·스위스포트코리아의 공개 요율과 최저 금액, 특수·귀중화물 50% 할증과 터미널별로 다른 무료 시간(12시간·24시간·없음), 공개 계산기로 확인한 보관일수 계산(무료 시간 미만 기준, 날짜 차이 최소 1일, 10일 계단), 10억 원·500kg 특수화물을 13시간에 출고한 사례(보관료 2,406,750원 중 약 98%가 종가, THC 81,555원 별도), 같은 청구서의 THC·특송 심야 할증·보류화물 기준, 보세창고 고시 제16조와 관세법 제172조, 하루 치를 피하는 포워더 체크리스트를 2026년 10월 11일 확인 기준으로 정리합니다." },
    { id: 'ch-netting', checked: '2026-10-23', tag: "외환정산", level: 3, title: "해외 파트너와 운임 정산 — SOA 상계·제3자 지급과 외국환거래법 신고", short: "해외 파트너 정산과 외환 신고", summary: "해외 파트너와 SOA로 차액만 정산하는 상계, 다른 회사 계좌로 보내는 제3자 지급의 외국환거래규정상 신고 기준(미화 5천불, 외국환은행·한국은행 구분, 1개월 사후 보고)과 상호계산, 과태료·형벌, 관세청 검사 범위, SOA를 신고 요건에 맞추는 순서를 정리합니다." },
    { id: 'ch-cass', checked: '2026-10-28', tag: "항공정산", level: 3, title: "항공 운임 정산(CASS)과 항공사 크레딧 — 정산 구조, IATA 대리점 인가·보증, 한국 송금일, 선불·착불, 청구 이의와 불이행", short: "항공 운임 정산(CASS)", summary: "포워더가 AWB를 실행해 항공사에 화물을 넘기는 순간 생기는 항공사 운임 채무가 IATA CASS로 정산되는 구조를 공정거래위원회 의결서, 인도·EU 경쟁당국 결정, 미국 판결, 업계 언론·협회 자료로 정리합니다. 정산 은행이 포워더별 청구서를 만들고 항공사별로 나눠 입금하는 방식, IATA 화물대리점 인가 절차와 2022년 재무 보증 강화 논란, 2010년 공정위 의결서가 적은 한국 송금일(1일~15일분은 다음 달 15일, 16일~말일분은 다음 달 말일), 선불·착불과 포워더끼리의 착불 거래, CASSLink 이의와 상업적 분쟁 때 불이행 선언의 보류·철회, 이상 통지와 불이행(default)의 결과, 착불 운임과 몬트리올 협약·상법, CASS 밖 항공사·항공운송총대리점(GSA)과의 정산, 2026년 7월 Direct AWB 개정, AWB 단위 내부 대사를 금액 없이 다룹니다." }
  ];
  const byId = id => DOCS.find(d => d.id === id);
  const LEVEL_LABELS = { 3: '★★★ 꼭 알아야 함', 2: '★★ 알아두면 좋음' };
  const levelBadge = d =>
    LEVEL_LABELS[d.level] ? `<span class="lib-level" data-level="${d.level}">${LEVEL_LABELS[d.level]}</span>` : '';
  const docCard = d =>
    `<a class="lib-doc" href="${link(d.id)}"><span class="lib-doc-head"><span class="lib-tag">${esc(d.tag)}</span>${levelBadge(d)}</span><b>${esc(d.title)}</b><span>${esc(d.summary)}</span></a>`;
  const lines = text => text.replace(/\.\s+/g, '.<br>');
  const officialRow = o =>
    `<tr><td><b>${esc(o.title)}</b></td><td class="lib-publisher"><b>${esc(o.org)}</b><small>(${esc(o.kind)})</small></td><td class="lib-official-note">${lines(esc(o.note))}</td><td><a href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">열기 ↗</a></td></tr>`;
  const SECTIONS = [
    { title: "운임 계산과 견적", sub: "견적서 읽기 · 해상 할증료 · 항공 운임 중량 · LCL 운임톤 · 물류 탄소 배출량 계산", docs: ["ch-quote", "ch-surcharges", "ch-air-weight", "ch-lcl", "ch-carbon"] },
    { title: "부대비용·D&D·보관료", sub: "해상 부대비용 지도 · DEM·DET · 부산 터미널 보관료 · 인천공항 보관료", docs: ["ch-sea-charges", "ch-dnd", "ch-korea-storage", "ch-air-storage"] },
    { title: "해외 정산과 외환", sub: "SOA 상계 · 제3자 지급 · 외국환거래법 신고 · 항공 운임 정산(CASS)", docs: ["ch-netting", "ch-cass"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "화주가 운송 탄소 배출량을 달라고 해요", ids: ["ch-carbon"] },
    { name: "견적서와 인보이스가 왜 다르죠", ids: ["ch-quote"] },
    { name: "할증료는 왜 이렇게 많아졌나요", ids: ["ch-surcharges"] },
    { name: "항공 운임 중량은 어떻게 계산하나요", ids: ["ch-air-weight"] },
    { name: "LCL 운임톤(R/T)은 어떻게 세나요", ids: ["ch-lcl"] },
    { name: "THC와 부두사용료는 누가 받는 돈인가요", ids: ["ch-sea-charges"] },
    { name: "DEM과 DET는 어떻게 다른가요", ids: ["ch-dnd"] },
    { name: "부산에서 보관료와 Demurrage가 따로 나왔어요", ids: ["ch-korea-storage", "ch-dnd"] },
    { name: "공항에서 몇 시간 늦었는데 보관료가 크게 나왔어요", ids: ["ch-air-storage"] },
    { name: "Detention·보관료는 누가 내야 하나요", ids: ["ch-dnd"] }
  ];
  const stagePath = () =>
    `<section class="lib-section lib-path"><h3>질문으로 찾기</h3><div class="lib-stages">${STAGES.map(
      ({ name, ids }) =>
        `<div class="lib-stage"><b>${esc(name)}</b><ul>${ids
          .map(byId)
          .filter(Boolean)
          .map(d => `<li><a href="${link(d.id)}">${esc(d.short || d.title.split(' — ')[0])}</a></li>`)
          .join('')}</ul></div>`
    ).join('')}</div></section>`;
  function renderList(view) {
    const official = `<section class="lib-section lib-official"><h3>공식 자료</h3><div class="lib-table-wrap"><table class="lib-table lib-official-table"><thead><tr><th>자료</th><th>발행 기관</th><th>내용</th><th></th></tr></thead><tbody>${OFFICIAL.map(officialRow).join('')}</tbody></table></div></section>`;
    const sections = SECTIONS.map(
      g =>
        `<section class="lib-section"><h3>${esc(g.title)} <small>${esc(g.sub)}</small></h3><div class="lib-docs">${g.docs
          .map(byId)
          .filter(Boolean)
          .map(docCard)
          .join('')}</div></section>`
    ).join('');
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>같은 이름의 비용, 선사·터미널·나라마다 계산이 다르다</h2><p>THC, 부두사용료, Demurrage·Detention, 터미널·공항 보관료는 이름이 같아도 누가 받는지, 언제부터 세는지, 어떤 요율을 곱하는지가 회사와 나라마다 다릅니다. 1장은 견적서를 읽고 해상 할증료·항공 운임 중량·LCL 운임톤을 계산하는 법, 2장은 부대비용 지도와 Demurrage·Detention, 부산·인천공항 보관료, 3장은 해외 파트너와의 운임 상계·제3자 지급과 외국환거래법 신고를 다룹니다. 한국 판결과 미국 FMC·영국 사례 12건은 사고 사례 모음에 따로 모았습니다.</p><a class="lib-summary-button" href="${link('ch-quote')}">견적서 읽는 법부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('해운법과 해양수산부 고시, 미국 FMC 규정, 선사·터미널·공항 화물터미널의 공개 요율표, 법원 판결과 FMC 결정문을 바탕으로 정리했습니다. 요율은 확인한 날짜를 함께 적었고 자주 바뀝니다. 요율표 전체는 옮기지 않고 계산에 필요한 값만 인용했습니다. 회사 이름은 비교를 위한 예시입니다. 해설은 AI가 작성했으며 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.charges.open';
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
  // 자료를 확인한 날짜.
  const CHECKED = '2026-10-14';
  const pager = doc => {
    const i = DOCS.indexOf(doc),
      prev = DOCS[i - 1],
      next = DOCS[i + 1];
    const cell = (d, label) =>
      d ? `<a href="${link(d.id)}"><small>${label}</small><b>${esc(d.short || d.title)}</b></a>` : '<span></span>';
    return `<nav class="bat-pager" aria-label="이전·다음 문서">${cell(prev, '← 이전')}${cell(next, '다음 →')}</nav>`;
  };
  // 문서 머리의 소제목 바로가기: 본문의 h3에서 만든다.
  const sectionToc = root => {
    const items = [...root.querySelectorAll(':scope > h3')];
    if (items.length < 4) return '';
    items.forEach((h, i) => (h.id = h.id || `s${i + 1}`));
    return `<nav class="law-toc" aria-label="이 문서의 차례">${items.map(h => `<a href="#${h.id}">${esc(h.textContent.trim())}</a>`).join('')}</nav>`;
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Charges · 부대비용</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 요율과 규정은 자주 바뀌니 실제 업무는 최신 요율표와 선사·터미널 안내를 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/ch-docs/${doc.id}.html?v=${DOCS_VERSION}`);
      if (!response.ok) throw new Error(response.status);
      html = await response.text();
    } catch (_) {
      view.querySelector('.lib-loading').textContent = '문서를 불러오지 못했습니다. 잠시 뒤 다시 열어 주세요.';
      return;
    }
    const template = document.createElement('template');
    template.innerHTML = `<div class="bat-commentary">${html}</div>`;
    const body = template.content.firstElementChild;
    const toc = sectionToc(body);
    // 조각 안의 문서 링크(data-doc)를 현재 주소 방식에 맞춘다.
    body.querySelectorAll('a[data-doc]').forEach(a => {
      const [id, hash] = a.dataset.doc.split('#');
      if (byId(id)) a.href = link(id) + (hash ? `#${hash}` : '');
    });
    view.innerHTML = `${head}<article class="lib-article">${title}${toc}</article>`;
    const article = view.querySelector('.lib-article');
    article.append(body);
    article.insertAdjacentHTML(
      'beforeend',
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 전문가가 검토한 것이 아닙니다. 실제 청구 금액은 운송계약과 선사·터미널·창고의 최신 요율표를 따르며, 중요한 결정은 해당 회사와 확인하세요.</p>${pager(doc)}`
    );
    fitTableColumns(view);
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const raw = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    const id = raw;
    const doc = byId(id);
    if (doc) {
      // tools/prerender.py가 미리 채운 같은 문서·같은 버전이면 다시 불러오지 않는다(깜박임 방지). 조각을 고쳐 DOCS_VERSION이 바뀌면 새로 불러온다.
      if (view.dataset.prerendered !== `${doc.id}@${DOCS_VERSION}`) renderDoc(view, doc);
      document.title = `${doc.title} · Charges · 부대비용 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '부대비용·DEM/DET·보관료 해상과 항공 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
