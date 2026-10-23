// Container 메뉴(/library/container): 컨테이너 번호·체크 디지트와 ISO 6346 크기·형식 코드(한 문서), 형식별 치수, 대형·중량 화물(OOG).
// 본문은 /cn-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/container/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/container';
  const DOCS_VERSION = '20261023-05';
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
    { title: "Identification number (BIC)", org: "국제컨테이너사무국(BIC)", kind: "공식 안내", note: "컨테이너 번호 구조와 소유자 코드 등록 안내입니다.", url: "https://www.bic-code.org/identification-number/" },
    { title: "Size and type codes (BIC)", org: "국제컨테이너사무국(BIC)", kind: "공식 안내", note: "ISO 6346 크기·형식 코드표입니다.", url: "https://www.bic-code.org/size-type-code/" },
    { title: "ISO 6346", org: "ISO", kind: "국제 표준 · 유료", note: "화물 컨테이너의 부호, 식별, 표시 표준입니다.", url: "https://www.iso.org/standard/83558.html" },
    { title: "Container Handbook", org: "독일보험협회(GDV)", kind: "업계 자료", note: "컨테이너 종류와 체크 디지트 계산 설명이 있습니다.", url: "https://www.containerhandbuch.de/" },
    { title: "Container information (ONE)", org: "ONE", kind: "선사 사양", note: "형식별 내부 치수와 적재 중량입니다.", url: "https://www.one-line.com/en/container-information" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'cn-codes', tag: "번호·코드", level: 3, title: "컨테이너 번호와 크기·형식 코드(ISO 6346) — 소유자 코드, 체크 디지트, 길이·높이·형식 그룹, 자주 보는 코드", short: "컨테이너 번호와 크기·형식 코드", summary: "컨테이너 번호 11자리(소유자 코드 3자리, 장비 구분 U·J·Z, 일련번호 6자리, 체크 디지트)의 뜻과 리스 컨테이너 조회, 체크 디지트 계산 예시, 번호 아래 네 자리 크기·형식 코드(예: 45G1)의 길이·높이·형식 그룹(G·V·R·H·U·P·T·K·N·B·S)과 45ft의 L/5 표기 차이, 자주 보는 코드 20여 개." },
    { id: 'cn-oog', checked: '2026-10-19', tag: "OOG", level: 2, title: "대형·중량 화물(OOG) 운송 — 플랫랙·오픈탑·브레이크벌크 선택, 도로 운행허가, 고박 계획서와 검정", short: "대형·중량 화물(OOG)", summary: "OOG·오버하이트/와이드/랭스 정의와 선사별 기준 차이, 오픈탑·플랫랙·플랫폼·브레이크벌크·RoRo 선택 기준, 화주에게 받을 정보와 선사 승인, 제한차량 운행허가 절차, 고박 계획서와 고박 검정을 계산 예시와 역할별 점검표로 정리합니다." },
    { id: 'cn-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "컨테이너 사고 사례 — 중량 오신고와 VGM 입력 오류, 스택 붕괴, 플랫랙 끝벽 사고, 적출 사고 판결·처분", short: "컨테이너 사고 사례", summary: "MSC Napoli·Deneb의 중량 오신고, President Eisenhower의 VGM 입력 오류, VGM과 신고 중량 차이를 다룬 영국 판결, Annabella 스택 붕괴, 평택항 플랫랙 끝벽 사망 사고, 호주 적출 사망 처분을 출처와 포워더 교훈으로 정리합니다." }
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
    { title: "번호·코드·치수", sub: "컨테이너 번호 · 체크 디지트 · ISO 6346 크기·형식 코드 · 형식별 내부 치수와 문 크기", docs: ["cn-codes"] },
    { title: "대형·중량 화물(OOG)", sub: "장비 선택 · 선사 승인 · 제한차량 운행허가 · 고박 계획서와 검정", docs: ["cn-oog"] },
    { title: "사고 사례", sub: "중량 오신고와 VGM 입력 오류 · 스택 붕괴 · 플랫랙 끝벽 사고 · 적출 사고 판결·처분", docs: ["cn-cases"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "컨테이너 번호 앞 네 글자는 뭔가요", ids: ["cn-codes"] },
    { name: "번호를 잘못 적었는지 어떻게 아나요", ids: ["cn-codes"] },
    { name: "45G1, 22R1 같은 코드는 무슨 뜻인가요", ids: ["cn-codes"] },
    { name: "40HC 안에 화물이 들어갈까요", ids: ["cn-codes"] },
    { name: "OOG 화물은 부킹 전에 무엇을 받아야 하나요", ids: ["cn-oog"] },
    { name: "공장에서 부두까지 트레일러 허가는 누가 받나요", ids: ["cn-oog"] },
    { name: "VGM을 틀리게 내면 어떤 일이 생기나요", ids: ["cn-cases"] },
    { name: "플랫랙 끝벽 작업은 왜 위험한가요", ids: ["cn-cases", "cn-oog"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>컨테이너 번호와 코드, 읽을 줄 알면 장비 확인이 빨라진다</h2><p>컨테이너 문에 붙은 번호 11자리와 크기·형식 코드 4자리는 ISO 6346이 정한 표시입니다. 번호 구조와 체크 디지트, 크기·형식 코드와 형식별 치수, 대형·중량 화물(OOG)의 장비 선택과 운행허가를 차례로 정리하고, 마지막 장에 중량 오신고·장비 사고 사례를 모았습니다.</p><a class="lib-summary-button" href="${link('cn-codes')}">컨테이너 번호와 코드부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('국제컨테이너사무국(BIC) 공개 자료, ICHCA BP25, GDV Container Handbook, ONE·Maersk 공개 사양을 바탕으로 정리했습니다. ISO 6346 본문은 유료 표준이라 싣지 않았습니다. 선사 이름은 비교를 위한 예시입니다. 해설은 AI가 작성했으며 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.container.open';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Container</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 장비 사양은 선사와 제작 시기마다 다르니 배정된 컨테이너의 명판과 선사 안내를 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/cn-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 전문가가 검토한 것이 아닙니다. 실제 장비 사양은 배정된 컨테이너의 명판(CSC 판)과 선사 안내를 따릅니다.</p>${pager(doc)}`
    );
    fitTableColumns(view);
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const raw = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    // 합친 문서의 예전 주소
    const MOVED = { 'cn-number': 'cn-codes', 'cn-dimensions': 'cn-codes' };
    const id = MOVED[raw] || raw;
    if (MOVED[raw]) history.replaceState(null, '', link(id) + location.hash);
    const doc = byId(id);
    if (doc) {
      // tools/prerender.py가 미리 채운 같은 문서·같은 버전이면 다시 불러오지 않는다(깜박임 방지). 조각을 고쳐 DOCS_VERSION이 바뀌면 새로 불러온다.
      if (view.dataset.prerendered !== `${doc.id}@${DOCS_VERSION}`) renderDoc(view, doc);
      document.title = `${doc.title} · Container · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '컨테이너 번호·크기형식 코드·치수 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
