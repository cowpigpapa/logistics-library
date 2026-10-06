// Air ULD 메뉴(/library/air-uld): 항공 ULD의 정의·코드·종류, 88·96인치 팔레트, 화물칸과 컨투어, 빌드업, 안전.
// 컨투어 단면도·팔레트 크기 비교·코드 해부도는 공개된 치수로 새로 그린 SVG이고(항공사·제조사 그림은 쓰지 않음),
// 나머지 그림은 AI 생성 도해다. 본문은 /uld-docs/<id>.html 조각을 문서를 열 때 불러온다.
// 주소 /library/air-uld/<id>로 문서 하나를 연다(정적 서버 미리보기에서는 ?doc=<id>).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/air-uld';
  const DOCS_VERSION = '20261006-03';
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
    { title: "IATA ULD Regulations (ULDR)", org: "IATA", kind: "규정 간행물 · 유료", note: "ULD의 규격·코드·취급 기준을 담은 IATA 간행물입니다. 본문은 싣지 않습니다.", url: "https://www.iata.org/en/publications/store/uld-regulations/" },
    { title: "IATA ULD", org: "IATA", kind: "공식 안내", note: "IATA의 ULD 안전·취급 관련 안내입니다.", url: "https://www.iata.org/en/programs/cargo/unit-load-devices/" },
    { title: "FAA TSO-C90", org: "FAA", kind: "기술표준", note: "인증 ULD(화물 팔레트·네트·컨테이너)의 미국 기술표준입니다.", url: "https://drs.faa.gov/browse/TSO/doctypeDetails" },
    { title: "Boeing Airport Compatibility", org: "Boeing", kind: "제조사 공개 문서", note: "기종별 화물칸·문 치수가 실린 공항 계획용 문서입니다.", url: "https://www.boeing.com/commercial/airports/plan-manuals" },
    { title: "Airbus Aircraft Characteristics", org: "Airbus", kind: "제조사 공개 문서", note: "기종별 화물칸·문 치수가 실린 공항·정비 계획용 문서입니다.", url: "https://aircraft.airbus.com/en/customer-care/fleet-wide-care/airport-operations-and-aircraft-characteristics/aircraft-characteristics" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'uld-overview', tag: "기본", level: 3, title: "ULD란 — 정의, 인증 ULD와 비인증 ULD, 규정과 표준", short: "ULD란", summary: "ULD의 정의와 인증·비인증 차이, TSO-C90e와 IATA ULDR, 포워더가 빌린 ULD의 반납·손상 책임." },
    { id: 'uld-code', tag: "코드", level: 3, title: "ULD 코드와 대표 ULD — 형식 코드 읽는 법, 주요 ULD의 치수와 최대 중량", short: "ULD 코드와 대표 ULD", summary: "AKE 12345 KE를 글자별로 읽는 법과 ULD 태그와의 차이, LD3·PMC·20피트 팔레트 등 주요 ULD의 치수·최대 중량·자중과 출처마다 값이 다른 이유." },
    { id: 'uld-pallets', tag: "팔레트", level: 3, title: "88인치와 96인치 팔레트 — PAG·PMC·20피트 팔레트, 네트와 스트랩", short: "88·96인치 팔레트", summary: "PAG와 PMC의 치수·위치별 최대 중량, 같은 화물을 짤 때의 차이, 네트·오버행·바닥 하중." },
    { id: 'uld-holds', tag: "화물칸", level: 3, title: "항공기 화물칸과 탑재 배치 — 메인덱, 로어덱 FWD·AFT 홀드, 벌크, 탑재 위치와 문", short: "화물칸과 탑재 배치", summary: "메인덱·로어덱 FWD/AFT·벌크 구성과 기종별 ULD 탑재 수·화물 문 크기, 위치 이름 읽는 법과 위치별 하중 제한." },
    { id: 'uld-buildup', tag: "빌드업", level: 3, title: "컨투어와 빌드업 — 외형 한계와 높이, 포워더 BUP, 적재 원칙, 무게와 균형", short: "컨투어와 빌드업", summary: "로어덱 64 in, 메인덱 96·118 in와 위치별 컨투어 차이, 반입부터 탑재까지 포워더가 하는 일과 하지 않는 일, BUP 원칙, 무게와 균형, 태그·서류 체크리스트." },
    { id: 'uld-safety', tag: "안전", level: 2, title: "안전과 사고 사례 — ULD 손상 기준, 화물 이동·중량 오류 사고, 특수화물", short: "안전과 사고 사례", summary: "ULD 손상 점검 기준, 화물 고정·적재 위치·중량 오류 사고·준사고 7건, 특수화물 취급과 관련 규정." }
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
    { title: "기본", sub: "ULD란 · 코드와 대표 ULD", docs: ["uld-overview", "uld-code"] },
    { title: "장비와 항공기", sub: "88·96인치 팔레트 · 화물칸과 탑재 배치", docs: ["uld-pallets", "uld-holds"] },
    { title: "작업과 안전", sub: "컨투어와 빌드업 · 안전과 사고 사례", docs: ["uld-buildup", "uld-safety"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "AKE 12345 KE는 무슨 뜻인가요", ids: ["uld-code"] },
    { name: "88과 96 팔레트는 뭐가 다른가요", ids: ["uld-pallets", "uld-code"] },
    { name: "메인덱·로어덱·벌크가 뭔가요", ids: ["uld-holds"] },
    { name: "화물 높이는 어디까지 되나요", ids: ["uld-buildup", "uld-holds"] },
    { name: "BUP는 어떻게 짜나요", ids: ["uld-buildup", "uld-pallets"] },
    { name: "잘못 실으면 어떻게 되나요", ids: ["uld-safety", "uld-buildup"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>항공 ULD, 무엇을 알아야 하나</h2><p>항공화물은 낱개가 아니라 <b>ULD(Unit Load Device)</b> — 항공기에 맞춰 만든 팔레트와 컨테이너 — 에 실려 비행기에 들어갑니다. ULD 코드를 읽는 법, 88인치와 96인치 팔레트의 차이, 메인덱·로어덱·벌크 같은 화물칸 구조, 화물을 쌓을 수 있는 외형 한계인 컨투어, 그리고 빌드업과 안전을 정리했습니다.</p><a class="lib-summary-button" href="${link('uld-code')}">ULD 코드 읽는 법 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('ULD의 치수·중량·코드는 IATA·FAA·EASA와 항공사·제조사가 공개한 자료를 바탕으로 정리했으며, 유료 간행물인 IATA ULD Regulations 본문은 옮기지 않았습니다. 같은 ULD라도 항공사와 제조사마다 표기가 조금씩 다를 수 있습니다. 컨투어 단면도와 크기 비교 도면은 항공사 그림을 옮기지 않고 공개된 치수로 새로 그렸으며 개략도입니다. 해설은 AI가 작성했으며 IATA·항공사가 검토한 것이 아닙니다. 실제 탑재는 해당 항공사의 최신 기준을 따르세요.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.uld.open';
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
  const CHECKED = '2026-10-05';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Air ULD</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h2>${esc(doc.title)}</h2><p class="lib-checked">자료 확인 ${CHECKED} · 치수와 중량은 항공사·제조사마다 다를 수 있으니 실제 탑재는 해당 항공사 기준으로 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/uld-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 IATA·항공사·제조사가 만들거나 검토한 것이 아닙니다. 실제 탑재 가능 여부, 컨투어, 중량 한도는 해당 항공사의 최신 기준으로 확인하세요.</p>${pager(doc)}`
    );
    fitTableColumns(view);
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const raw = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    // 합친 문서의 예전 주소
    const MOVED = { 'uld-types': 'uld-code', 'uld-contour': 'uld-buildup' };
    const id = MOVED[raw] || raw;
    if (MOVED[raw]) history.replaceState(null, '', link(id) + location.hash);
    const doc = byId(id);
    if (doc) {
      renderDoc(view, doc);
      document.title = `${doc.title} · Air ULD · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'Air ULD 항공 ULD·컨투어·빌드업 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
