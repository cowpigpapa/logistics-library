// Regulated Goods · 반출입 규제 물품 메뉴(/library/regulated-goods): 폐기물, 목재 포장재, LMO, CITES, 문화유산, 사고 사례.
// 본문은 /rg-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/regulated-goods/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/regulated-goods';
  const DOCS_VERSION = '20261027-05';
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
    { title: "폐기물의 국가 간 이동 및 그 처리에 관한 법률", org: "기후에너지환경부", kind: "법률", note: "바젤협약 이행법. 수출입규제폐기물 허가와 수출입관리폐기물 신고의 근거입니다.", url: "https://www.law.go.kr/법령/폐기물의국가간이동및그처리에관한법률" },
    { title: "식물방역법 · 목재포장재 검역 고시", org: "농림축산식품부 · 농림축산검역본부", kind: "법률 · 고시", note: "수입 목재 포장재의 소독 표시 확인과 폐기·반송, 수출용 소독 표시 등록업체의 근거입니다.", url: "https://www.law.go.kr/법령/식물방역법" },
    { title: "야생생물 보호 및 관리에 관한 법률", org: "기후에너지환경부", kind: "법률", note: "국제적 멸종위기종(CITES) 수출입 허가의 근거입니다.", url: "https://www.law.go.kr/법령/야생생물보호및관리에관한법률" },
    { title: "문화유산의 보존 및 활용에 관한 법률", org: "국가유산청", kind: "법률", note: "일반동산문화유산의 국외 반출 금지·허가와 비문화유산 확인의 근거입니다.", url: "https://www.law.go.kr/법령/문화유산의보존및활용에관한법률" },
    { title: "유전자변형생물체의 국가간 이동 등에 관한 법률", org: "산업통상부 등", kind: "법률", note: "카르타헤나의정서 이행법. LMO 수입승인·경유 신고와 국경검사의 근거입니다.", url: "https://www.law.go.kr/법령/유전자변형생물체의국가간이동등에관한법률" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'rg-waste', checked: '2026-10-23', tag: "폐기물", level: 3, title: "중고품·재활용 원료와 폐기물의 경계 — 바젤협약, 폐기물 수출입 허가·신고, 반송명령과 처벌", short: "폐기물 수출입(바젤협약)", summary: "중고 기계·고철·폐전선·전자 스크랩·폐플라스틱·폐배터리도 상태에 따라 수출입 허가나 신고 대상입니다. 바젤 목록과 품목고시, 이동서류, 세관장확인, 2021·2025 개정과 2026년 전자 스크랩(PCB) 신고 전환, used goods 위험 신호, 받을 서류를 정리했습니다." },
    { id: 'rg-ispm15', checked: '2026-10-23', tag: "ISPM 15", level: 2, title: "목재 포장재 검역(ISPM 15) — 팔레트 마크 하나로 화물 전체가 돌아오는 이유", short: "목재 포장재 검역(ISPM 15)", summary: "팔레트·목상자·더니지의 ISPM 15 대상과 예외, HT·DH·MB·SF 처리와 마크 읽는 법, 한국 수입 시 폐기·반송과 과태료, 미국 즉시 재수출·벌금, 호주 BMSB 시즌, 포워더가 화주에게 받을 서류를 정리합니다." },
    { id: 'rg-lmo', checked: '2026-10-23', tag: "LMO", level: 3, title: "유전자변형생물체(LMO) 수입·수출 — 용도별 승인, 국경검사, 미승인 LMO 폐기·반송, GMO 표시와의 차이", short: "LMO 수입·수출", summary: "종자·원형 곡물·사료·연구용 미생물이 LMO이면 용도별 수입승인·신고와 검역본부 국경검사를 거칩니다. 비의도적 혼입 3%·0.5%, 30일 폐기·반송, 경유 신고, GMO 식품표시와의 차이, 받을 서류를 정리했습니다." },
    { id: 'rg-cites', checked: '2026-10-23', tag: "CITES", level: 2, title: "일반 화물 속 CITES(멸종위기종) — 가죽 가방, 자단 가구, 한약재가 허가 대상이 되는 이유", short: "일반 화물 속 CITES", summary: "야생생물법의 국제적 멸종위기종 수출입 허가, 부속서 I·II·III, 악어 가죽·산호·캐비아·사향·침향·자단 같은 의외의 대상, 2019년 자단 악기 면제 범위, 견본·이삿짐·환적 면제 여부, 몰수·처벌, 포워더가 받을 서류를 정리합니다." },
    { id: 'rg-heritage', checked: '2026-10-23', tag: "문화유산", level: 3, title: "고미술품·고서·표본의 국외 반출 — 일반동산문화유산, 비문화유산 확인, 허가와 처벌", short: "문화유산 국외 반출", summary: "지정되지 않은 고미술품·고서·민속품·자연사 표본도 1945년 이전 제작 등 기준을 갖추면 반출이 금지됩니다. 비문화유산 확인, 전시 목적 허가, 천연기념물, 세관 확인과 처벌, 포워더가 받을 서류를 정리했습니다." },
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
    { title: "폐기물", sub: "중고품·재활용 원료와 폐기물의 경계 · 바젤 목록 · 허가·신고와 반송명령", docs: ["rg-waste"] },
    { title: "검역", sub: "목재 포장재(ISPM 15) · 유전자변형생물체(LMO)", docs: ["rg-ispm15", "rg-lmo"] },
    { title: "보호 대상 물품", sub: "멸종위기종(CITES) · 문화유산 국외 반출", docs: ["rg-cites", "rg-heritage"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "중고 기계·고철을 수출하는데 폐기물인가요", ids: ["rg-waste"] },
    { name: "폐전선·전자 스크랩·폐플라스틱은요", ids: ["rg-waste"] },
    { name: "팔레트에 찍힌 마크는 무엇인가요", ids: ["rg-ispm15"] },
    { name: "미국·호주에서 목재 포장재 때문에 반송됐어요", ids: ["rg-ispm15"] },
    { name: "콩·옥수수·종자를 들여오는데 승인이 필요한가요", ids: ["rg-lmo"] },
    { name: "가죽 가방·자단 가구·한약재도 허가가 필요한가요", ids: ["rg-cites"] },
    { name: "이삿짐에 오래된 도자기·고서가 있어요", ids: ["rg-heritage"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>화물이 아니라 그 성격이 허가를 부른다</h2><p>중고품이라고 신고한 기계가 폐기물이 되고, 팔레트 마크 하나 때문에 컨테이너가 반송되고, 가죽 가방·자단 가구·오래된 도자기가 허가 없이는 나갈 수 없는 경우가 있습니다. 폐기물, 검역(목재 포장재·LMO), 보호 대상 물품(멸종위기종·문화유산)을 차례로 다룹니다. 국내외 단속·판결 사례는 사고 사례 모음에 따로 모았습니다.</p><a class="lib-summary-button" href="${link('rg-waste')}">폐기물 수출입부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('각 법령 원문과 기후에너지환경부·농림축산검역본부·국가유산청·관세청 발표, 국제 기준(바젤협약·ISPM 15·CITES) 등 공개 자료를 바탕으로 정리했습니다. 해당 여부는 허가·검역 기관의 판단으로 정해지며 이 자료는 그 판단을 대신하지 않습니다. 해설은 AI가 작성했으며 법률 자문이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.regulated-goods.open';
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
  const CHECKED = '2026-10-23';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Regulated Goods · 반출입 규제 물품</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 법령·고시는 자주 개정되니 실제 판단은 국가법령정보센터 현행 조문과 허가·검역 기관 안내를 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/rg-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 법령과 공개 자료를 읽고 작성한 참고 자료이며 법률 자문이 아닙니다. 허가·검역 대상 여부는 담당 기관의 안내를 따르세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Regulated Goods · 반출입 규제 물품 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '반출입 규제 물품 — 폐기물·목재 포장재·CITES·문화유산·LMO · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
