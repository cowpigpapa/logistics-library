// Incoterms 2020 메뉴(/library/incoterms-2020): 정의·변천, 한 장 정리표, 조건별 해설, 위험·비용 분기, 애매한 구간.
// Incoterms® 2020 규칙 본문은 ICC의 저작물이라 싣지 않는다. 해설은 AI가 공개 자료를 읽고 자기 말로 썼고
// 조항은 번호로만 가리킨다. 본문은 /incoterms-docs/<id>.html 조각을 문서를 열 때 불러온다.
// 주소 /library/incoterms-2020/<id>로 문서 하나를 연다(정적 서버 미리보기에서는 ?doc=<id>).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/incoterms-2020';
  const DOCS_VERSION = '20261005-01';
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
    { title: "Incoterms® 2020 (ICC 간행물 723)", org: "ICC 국제상업회의소", kind: "규칙 원문 · 유료", note: "11개 조건의 규칙 본문과 설명문. 저작권은 ICC에 있어 본문은 싣지 않습니다.", url: "https://2go.iccwbo.org/incoterms-2020-eng-config+book_version-Book/" },
    { title: "Incoterms® rules 소개", org: "ICC", kind: "공식 안내", note: "ICC가 설명하는 인코텀스의 목적과 2020판 안내입니다.", url: "https://iccwbo.org/business-solutions/incoterms-rules/" },
    { title: "Incoterms® rules history", org: "ICC", kind: "공식 연혁", note: "1936년부터의 개정 연혁입니다.", url: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-rules-history/" },
    { title: "UNCITRAL의 Incoterms 2020 승인", org: "UNCITRAL", kind: "유엔 문서", note: "유엔 국제상거래법위원회가 2020판 사용을 권고한 문서입니다.", url: "https://uncitral.un.org/en/texts/endorsed" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'inco-chart', tag: "한 장 정리", level: 3, title: "한 장으로 보는 Incoterms 2020 — 11개 조건의 구간별 비용과 위험", short: "한 장으로 보는 Incoterms 2020", summary: "11개 조건을 13개 구간으로 나눠 비용 부담과 위험 이전 지점을 한 표에 놓았습니다." },
    { id: 'inco-what', tag: "정의", level: 3, title: "인코텀스란 — 정의와 법적 성격, 다루는 것과 다루지 않는 것", short: "인코텀스란", summary: "정의와 법적 성격, 규칙이 다루는 것과 다루지 않는 것, 운송·보험·신용장과의 관계, 흔한 오해." },
    { id: 'inco-history', tag: "변천", level: 2, title: "변천 과정 — 1936년부터 2020년까지, 2010에서 2020으로 바뀐 것", short: "변천 과정", summary: "1936년 첫 제정부터 2020년까지 판별 변화와 조건 비교표, 2010에서 2020으로 바뀐 9가지." },
    { id: 'inco-rules', tag: "조건별", level: 3, title: "조건별 해설 — 11개 조건의 인도·위험·비용·통관·보험", short: "조건별 해설", summary: "11개 조건을 같은 틀로: 인도 지점, 위험 이전, 비용 분기, 통관·보험·상하차와 자주 틀리는 지점." },
    { id: 'inco-risk-cost', tag: "위험·비용", level: 3, title: "위험의 분기와 비용의 분기 — 포함되는 비용과 포함되지 않는 비용", short: "위험의 분기와 비용의 분기", summary: "조건별 위험·비용 분기점과, 비용 항목 30여 개의 부담 주체를 근거 구분과 함께 정리한 표." },
    { id: 'inco-gray', tag: "애매한 구간", level: 3, title: "인코텀스만으로는 애매한 구간 — 상차·하차, 터미널 비용, 컨테이너 화물", short: "애매한 구간", summary: "상차·하차, 터미널 비용, 통관, 지연 비용 등 규칙이 말하지 않는 구간과 계약 문구 예시." },
    { id: 'inco-choose', tag: "선택·표기", level: 2, title: "조건 고르기와 계약서에 쓰는 법 — 운송 형태별 선택과 체크리스트", short: "조건 고르기와 표기", summary: "운송 형태별 조건 선택, 표기법의 좋은 예와 나쁜 예, 신용장 정합, 포워더 업무 분담." }
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
    { title: "기본", sub: "한 장 정리 · 정의 · 변천 과정", docs: ["inco-chart", "inco-what", "inco-history"] },
    { title: "조건과 분기", sub: "조건별 해설 · 위험과 비용", docs: ["inco-rules", "inco-risk-cost"] },
    { title: "실무", sub: "애매한 구간 · 조건 선택과 표기", docs: ["inco-gray", "inco-choose"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "한눈에 비교하고 싶어요", ids: ["inco-chart", "inco-rules"] },
    { name: "인코텀스가 정확히 뭔가요", ids: ["inco-what", "inco-history"] },
    { name: "위험과 비용은 어디서 갈리나요", ids: ["inco-risk-cost", "inco-chart"] },
    { name: "상차·하차, 터미널 비용은 누가 내나요", ids: ["inco-gray", "inco-risk-cost"] },
    { name: "어떤 조건을 골라야 하나요", ids: ["inco-choose", "inco-rules"] },
    { name: "2010과 뭐가 달라졌나요", ids: ["inco-history"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>Incoterms 2020, 어디서 갈리나</h2><p>인코텀스는 물품 매매계약에서 매도인과 매수인이 <b>비용과 위험을 어디서 나누는지</b>를 세 글자로 약속하는 ICC의 규칙입니다. 11개 조건을 구간별로 한 장에 놓고, 위험과 비용의 분기점, 비용에 포함되는 것과 포함되지 않는 것, 그리고 규칙만으로는 정해지지 않는 상차·하차·터미널 비용 같은 구간을 정리했습니다.</p><a class="lib-summary-button" href="${link('inco-chart')}">한 장으로 보는 Incoterms 2020 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('Incoterms® 2020 규칙 본문은 ICC의 저작물이어서 싣지 않았습니다. 규칙이 정한 내용을 자기 말로 설명하고 조항은 번호로만 가리킵니다. 해설은 AI가 ICC 공개 자료와 UNCITRAL 문서, 공신력 있는 해설을 읽고 작성했으며 ICC가 만들거나 검토한 것이 아닙니다. 규칙이 정한 것과 실무 관행, 계약으로 정해야 하는 것을 구분해 적었습니다. 실제 계약은 ICC 원문과 계약서 문언을 기준으로 하세요.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.incoterms.open';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Incoterms 2020</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h2>${esc(doc.title)}</h2><p class="lib-checked">자료 확인 ${CHECKED} · 기준: Incoterms® 2020 (ICC 간행물 723)</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/incoterms-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 ICC가 만들거나 검토한 것이 아닙니다. Incoterms® 2020 규칙 본문은 싣지 않았으며, 실제 계약은 ICC 원문과 계약서 문언을 기준으로 하세요. "Incoterms"는 ICC의 등록상표입니다.</p>${pager(doc)}`
    );
    fitTableColumns(view);
    // 비용 상세표: 부담 주체가 한눈에 보이게 칸에 옅은 색을 입힌다(매도인 파랑, 매수인 주황, 조건부 빗금).
    const TINT = { 매도인: 'inco-ts', 매수인: 'inco-tb', 조건부: 'inco-tc' };
    view.querySelectorAll('.lib-article table.lib-table td').forEach(td => {
      const m = td.textContent.trim().match(/^(매도인|매수인|조건부)[①②③]?$/);
      if (m) td.classList.add(TINT[m[1]]);
    });
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const id = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    const doc = byId(id);
    if (doc) {
      renderDoc(view, doc);
      document.title = `${doc.title} · Incoterms 2020 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'Incoterms 2020 한 장 정리와 해설 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
