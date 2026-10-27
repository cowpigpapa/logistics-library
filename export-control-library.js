// Export Control · 수출통제 메뉴(/library/export-control): 전략물자·방산물자 수출허가, 포워더 점검, 제재·우회 수출, 사고 사례.
// 본문은 /ec-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/export-control/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/export-control';
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
    { title: "대외무역법 · 전략물자 수출입고시", org: "산업통상부", kind: "법률 · 고시", note: "전략물자(이중용도·군용물자)와 상황허가, 경유·환적·중개허가의 근거입니다.", url: "https://www.law.go.kr/법령/대외무역법" },
    { title: "방위사업법", org: "방위사업청", kind: "법률", note: "방산물자·국방과학기술 수출허가와 벌칙의 근거입니다.", url: "https://www.law.go.kr/법령/방위사업법" },
    { title: "Yestrade(전략물자관리시스템)", org: "무역안보관리원", kind: "조회·신청", note: "전략물자 해당 여부 판정과 수출허가를 신청하는 시스템입니다.", url: "https://www.yestrade.go.kr/" },
    { title: "Consolidated Screening List", org: "미국 상무부 국제무역청", kind: "조회 도구", note: "OFAC SDN, BIS Entity List 등 미국 정부 제재·통제 목록을 한 번에 조회합니다.", url: "https://www.trade.gov/consolidated-screening-list" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'ec-basics', checked: '2026-10-23', tag: "수출통제", level: 3, title: "전략물자·방산물자 수출통제 — 무엇이 통제되고, 어떤 허가가 있고, 위반하면 어떻게 되나", short: "수출통제 기초", summary: "대외무역법 전략물자(이중용도·군용물자)와 상황허가, 방위사업법 방산물자, 원자력·화학무기 품목의 통제 범위, 수출·상황·경유환적·중개허가와 판정, 세관 확인, 벌칙, 미국 EAR·ITAR 재수출 범위를 현행 원문으로 정리합니다." },
    { id: 'ec-forwarder', checked: '2026-10-23', tag: "수출통제", level: 3, title: "무허가 수출에 엮이는 경로 — 포워더가 서류로 거르는 법과 처벌 기준", short: "포워더의 수출통제 점검", summary: "품명 위장·제3국 우회·운송 중 수하인 변경 같은 국내 단속 수법, 대외무역법 12가지 의심 징후와 미국 BIS 위험 신호, 판정서·허가서·최종사용자 확인 순서, 한국 경유 환적 허가, 포워더의 공범·양벌 책임을 정리합니다." },
    { id: 'ec-sanctions', checked: '2026-10-23', tag: "제재", level: 3, title: "제재 대상자·선박·항공기와 우회 수출 — 품목 판정 밖에서 포워더가 확인할 것", short: "제재·우회 수출 스크리닝", summary: "화물이 합법이어도 거래처·실소유자, 선박·항공기, 경로·결제가 제재에 걸리면 거래가 막힙니다. 한국 외국환거래법·테러자금금지법·대외무역법 특별조치, UN·OFAC·BIS·EU·영국 목록, IMO 번호 조회와 우회 신호, 받을 서류를 정리했습니다." },
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
    { title: "전략물자·방산물자 수출허가", sub: "통제 대상과 허가 종류 · 판정과 세관 확인 · 포워더가 서류로 거르는 법", docs: ["ec-basics", "ec-forwarder"] },
    { title: "제재와 우회 수출", sub: "제재 대상자·실소유자 · 선박·항공기 확인 · 우회 경로 신호", docs: ["ec-sanctions"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "방산물자와 전략물자는 뭐가 다른가요", ids: ["ec-basics"] },
    { name: "일반 기계 부품도 허가가 필요할 수 있나요", ids: ["ec-basics", "ec-forwarder"] },
    { name: "화주가 판정서가 없다고 해요", ids: ["ec-forwarder"] },
    { name: "한국을 거쳐 가는 환적 화물도 허가가 필요한가요", ids: ["ec-forwarder", "ec-basics"] },
    { name: "포워더도 처벌받나요", ids: ["ec-forwarder"] },
    { name: "수하인이 제재 대상인지 어떻게 확인하나요", ids: ["ec-sanctions"] },
    { name: "선박이 제재 대상이면요", ids: ["ec-sanctions"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>통관이 끝났다고 수출이 허가된 것은 아니다</h2><p>군용·이중용도 물품은 품명이 "부품"이어도 대외무역법·방위사업법의 수출허가 대상일 수 있고, 수출신고가 수리된 뒤에 무허가 수출로 적발되면 운송을 주선한 포워더도 수사 대상이 됩니다. 1장은 통제 대상과 허가 종류, 포워더가 서류로 거르는 법, 2장은 제재 대상자·선박과 우회 수출을 다룹니다. 국내외 단속·처분 사례는 사고 사례 모음에 따로 모았습니다.</p><a class="lib-summary-button" href="${link('ec-basics')}">수출통제 기초부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('대외무역법·방위사업법·관세법 원문과 산업통상부·관세청·무역안보관리원, 미국 BIS·OFAC 등 공개 자료를 바탕으로 정리했습니다. 품목의 전략물자 해당 여부는 무역안보관리원 판정이나 허가 기관의 확인으로 정해지며, 이 자료는 그 판단을 대신하지 않습니다. 해설은 AI가 작성했으며 법률 자문이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.export-control.open';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Export Control · 수출통제</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 법령·고시는 자주 개정되니 실제 판단은 국가법령정보센터 현행 조문과 무역안보관리원·허가 기관 안내를 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/ec-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 법령과 공개 자료를 읽고 작성한 참고 자료이며 법률 자문이 아닙니다. 전략물자 해당 여부와 허가 필요 여부는 무역안보관리원 판정과 허가 기관 안내를 따르세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Export Control · 수출통제 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '수출통제 — 전략물자·방산물자 허가와 제재 확인 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
