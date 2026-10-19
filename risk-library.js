// Cargo Risk · 화물 사고 예방 메뉴(/library/cargo-risk): 운송·창고·보안·젖음·뒤바뀜 사고 예방.
// 본문은 /rk-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/cargo-risk/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/cargo-risk';
  const DOCS_VERSION = '20261019-02';
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
    { title: "CTU Code(화물운송단위 적입 규범)", org: "IMO · ILO · UNECE", kind: "국제 규범", note: "적입·고박·젖음 방지의 기본 기준입니다.", url: "https://www.imo.org/en/ourwork/safety/pages/ctu-code.aspx" },
    { title: "화물자동차 운수사업법", org: "법제처 국가법령정보센터", kind: "법령", note: "화물 운송사업자의 의무와 적재 기준의 근거 법률입니다.", url: "https://www.law.go.kr/법령/화물자동차운수사업법" },
    { title: "도로교통법", org: "법제처 국가법령정보센터", kind: "법령", note: "적재 화물의 고정·덮개 의무와 적재 제한의 근거입니다.", url: "https://www.law.go.kr/법령/도로교통법" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'rk-truck', tag: "운송", level: 3, title: "트럭 운송 사고와 주차 중 도난 — 적재·고정 의무, 정차·주차 도난 예방, 사고 뒤 대응", short: "트럭 운송 사고·도난", summary: "도로교통법·화물자동차 운수사업법이 운전자·운송사·포워더에게 지우는 적재 고정 의무와 컨테이너 잠금 기준, 정차·밤샘주차 중 도난을 줄이는 방법과 씰 대조, 사고 직후 할 일과 적재물배상책임보험·적하보험의 차이를 역할별로 정리합니다." },
    { id: 'rk-warehouse', tag: "창고", level: 3, title: "창고 보관 리스크 — 고가화물·야적·도난 예방과 사고 뒤 대응", short: "창고 보관 리스크", summary: "창고업자 책임(상법)과 계약서 한도, 고가화물 잠금 구역·CCTV·재고 관리, 야적 품목과 특수가연물 기준, 가짜 픽업을 막는 출고 확인, 사고 당일 대응을 화주·포워더·창고·운송사 역할별로 정리합니다." },
    { id: 'rk-damage', tag: "손상", level: 3, title: "젖음과 외포장 손상 예방 — 원인별로 막는 법, 손상이 났을 때 기록과 책임", short: "젖음·외포장 손상", summary: "컨테이너 누수, 비 오는 날 작업, 젖은 팔레트·더니지, 상자 강도·쌓기·팔레트 고정에서 생기는 손상을 원인별로 막는 법과 손상 발견 시 사진·인수 서류 이의 기재·통지 기한, ICC와 상법상 책임을 역할별로 정리합니다." },
    { id: 'rk-cross', tag: "뒤바뀜", level: 3, title: "화물 뒤바뀜(크로스) 방지 — 섞이고 잘못 실리고 잘못 나가는 사고는 어디서 나고 어떻게 막나", short: "화물 뒤바뀜(크로스) 방지", summary: "CFS 적입·적출, 창고 피킹, 출고·상차에서 다른 B/L 화물이 섞이는 크로스가 왜 생기는지, 화인·검수·컨테이너 번호와 씰 대조·출고 확인으로 어떻게 막는지, 사고가 났을 때의 이상보고와 정정 기한, 책임을 정리합니다." },
    { id: 'rk-security', tag: "보안", level: 2, title: "물류 보안 점검 — AEO·CTPAT·TAPA 기준으로 보는 시설·인원·화물·정보·거래처", short: "물류 보안 점검", summary: "관세청 AEO 안전관리 기준, 미국 CTPAT, TAPA, ISO 28000, ISPS Code를 비교하고 출입 통제·CCTV·직원 신원·씰과 빈 컨테이너 7개 지점 점검·정보 보안·거래처 심사·사고 보고를 조항별로 정리합니다." }
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
    { title: "운송과 창고", sub: "트럭 사고·도난 · 창고 보관", docs: ["rk-truck", "rk-warehouse"] },
    { title: "화물 손상과 오배송", sub: "젖음 손상 · 뒤바뀜", docs: ["rk-damage", "rk-cross"] },
    { title: "보안", sub: "물류 보안 점검", docs: ["rk-security"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "트럭 주차 중 화물이 없어졌어요", ids: ["rk-truck"] },
    { name: "고가 화물을 창고에 둘 때 무엇을 확인하나요", ids: ["rk-warehouse"] },
    { name: "컨테이너를 열었더니 화물이 젖어 있어요", ids: ["rk-damage"] },
    { name: "다른 화주의 화물이 섞여 갔어요", ids: ["rk-cross"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>사고는 운송보다 대기와 보관에서 더 자주 난다</h2><p>도로 위 사고만이 아니라 주차 중 도난, 창고의 젖음과 파손, 다른 화주 화물과의 뒤바뀜까지 화물 사고는 여러 곳에서 납니다. 화주·포워더·창고·운송사가 각자 무엇을 확인하면 사고를 줄이고, 났을 때 무엇을 남겨야 하는지 정리했습니다.</p><a class="lib-summary-button" href="${link('rk-truck')}">트럭 운송 사고부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('법령, CTU Code, 보험·운송 업계 공개 자료를 바탕으로 정리했습니다. 회사마다 내부 절차와 계약 조건이 다르므로 자기 회사 규정과 보험 조건을 함께 보십시오. 해설은 AI가 작성했으며 보험사나 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.risk.open';
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
  const CHECKED = '2026-10-19';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Cargo Risk · 화물 사고 예방</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${CHECKED} · 회사·보험·계약 조건에 따라 대응이 달라질 수 있으니 실제 사고는 계약서와 보험사·운송사 안내를 함께 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/rk-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 보험사나 전문가가 검토한 것이 아닙니다. 실제 사고 대응은 계약서와 보험 조건, 관계 기관 안내를 따르세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Cargo Risk · 화물 사고 예방 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '화물 사고 예방 — 운송·창고·보안·젖음·뒤바뀜 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
