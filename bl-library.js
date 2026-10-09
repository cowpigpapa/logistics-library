// B/L·AWB 메뉴(/library/bl-awb): B/L과 AWB의 기초, 둘의 비교, 화물 인도 실무, 특수 B/L과 전자화, 판례.
// 본문은 /bl-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/bl-awb/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/bl-awb';
  const DOCS_VERSION = '20261010-01';
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
    { title: "상법 제5편 해상(선하증권)·제6편 항공운송", org: "법제처 국가법령정보센터", kind: "법령", note: "선하증권·항공화물운송장의 기재사항과 효력, 전자선하증권 규정입니다.", url: "https://www.law.go.kr/법령/상법" },
    { title: "몬트리올 협약(1999)", org: "ICAO", kind: "국제협약", note: "항공화물운송장의 성격, 송하인의 처분권, 화물 인도를 정한 협약입니다.", url: "https://www.icao.int/secretariat/legal/List%20of%20Parties/Mtl99_EN.pdf" },
    { title: "UCP 600", org: "ICC", kind: "국제규칙 · 유료", note: "신용장 거래에서 B/L(제20조)·해상화물운송장(제21조)·항공운송서류(제23조) 요건을 정합니다. 본문은 싣지 않습니다.", url: "https://iccwbo.org/business-solutions/trade-finance/" },
    { title: "e-AWB · ONE Record", org: "IATA", kind: "공식 안내", note: "전자 항공화물운송장과 항공화물 데이터 표준 안내입니다.", url: "https://www.iata.org/en/programs/cargo/e/eawb/" },
    { title: "MLETR", org: "UNCITRAL", kind: "모델법", note: "전자 양도가능 기록(전자 B/L 등)에 관한 모델법입니다.", url: "https://uncitral.un.org/en/texts/ecommerce/modellaw/electronic_transferable_records" },
    { title: "DCSA eBL", org: "DCSA", kind: "업계 표준", note: "컨테이너 선사들의 전자 B/L 데이터 표준입니다.", url: "https://dcsa.org/standards/bill-of-lading" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'bl-basics', tag: "B/L", level: 3, title: "B/L 기초 — 세 기능, 종류, 기재사항과 House B/L", short: "B/L 기초", summary: "선하증권의 세 기능(운송계약 증거·화물 수령증·권리증권), 기명식·지시식·소지인식과 배서, 선적·수취, Clean·Foul, 통 B/L·복합운송 B/L, 상법 제853조 기재사항, 원본 3통의 의미(제857조), Master·House B/L 구조, 운임 표시와 부지 약관을 포워더 입장에서 정리합니다." },
    { id: 'awb-basics', tag: "AWB", level: 3, title: "AWB 기초 — 비유통 운송장, 원본 3부, 번호 체계와 e-AWB", short: "AWB 기초", summary: "항공화물운송장이 권리증권이 아닌 이유(몬트리올 협약 제4조~제16조, 상법 제923조~제929조), 원본 3부의 용도, 송하인 처분권과 수하인 권리, IATA 표준 양식과 Prefix·일련번호·체크 디지트, Master·House AWB와 혼재, 전자 메시지, e-AWB와 IATA 결의 672를 정리합니다." },
    { id: 'bl-vs-awb', tag: "비교", level: 3, title: "B/L과 AWB 비교 — 권리증권과 증거 서류, 누가 화물을 받는가", short: "B/L과 AWB 비교", summary: "선하증권과 항공화물운송장을 법적 성격, 유통성, 원본 수, 인도 조건, 처분권, 원본 분실, 신용장 UCP 600 제20조·제23조, 은행 담보 기능, 책임 한도, 전자화까지 한 표로 비교하고, Sea Waybill이 AWB와 닮은 점, 신용장에서 항공화물 수하인을 은행으로 적는 이유, 포워더 체크리스트를 정리합니다." },
    { id: 'bl-release', tag: "인도", level: 3, title: "화물 인도 실무 — 원본 B/L, 서렌더, Sea Waybill, 보증도", short: "화물 인도 실무", summary: "원본 B/L 회수 인도와 상법 제857조~제861조, 서렌더(Telex Release)의 실무와 주의점, Sea Waybill 인도, 수입화물선취보증서(L/G)·LOI 보증도의 위험, 기명식 B/L, 원본 분실 시 공시최고, D/O와 반출, 항공화물 도착 통지와 은행 수하인 화물 인도를 정리합니다." },
    { id: 'bl-special', tag: "특수", level: 3, title: "특수 B/L과 전자화 — Switch·분할 B/L, 선적일 소급, 전자선하증권과 e-AWB", short: "특수 B/L과 전자화", summary: "Switch B/L과 분할·통합 B/L의 정상 절차와 P&I 보험조합 권고, 선적일 소급·LOI를 받은 무사고 B/L의 법적 결과와 담보 상실, 상법 제862조와 전자선하증권 시행규정(등록기관 KTNET), UNCITRAL MLETR, 영국 Electronic Trade Documents Act 2023, DCSA 2030년 100% eBL 약속, IG 승인 eBL 시스템, e-AWB와 IATA ONE Record 현황." },
    { id: 'bl-cases', tag: "판례", level: 3, title: "판례·분쟁 사례 — 원본 없는 인도, 서렌더, 기명식 B/L, House B/L과 AWB 분쟁", short: "판례·분쟁 사례", summary: "보증도와 위조 L/G, 면책각서 인도, 서렌더 B/L의 법적 성질, 배서금지 기명식 B/L, Master D/O 사본을 넘긴 도착지 포워더(2024다270860), 통지처 인도와 AWB 원본 불일치 등 한국 대법원 판례와 The Rafaela S, Carewins, Sze Hai Tong Bank, Glencore v MSC 등 해외 판례 12건을 사실관계·쟁점·결론·실무 교훈으로 정리." }
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
    { title: "기본과 비교", sub: "B/L 기초 · AWB 기초 · B/L과 AWB 비교", docs: ["bl-basics", "awb-basics", "bl-vs-awb"] },
    { title: "실무", sub: "화물 인도 · 특수 B/L과 전자화", docs: ["bl-release", "bl-special"] },
    { title: "사례", sub: "판례·분쟁 사례", docs: ["bl-cases"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "B/L과 AWB는 뭐가 다른가요", ids: ["bl-vs-awb", "awb-basics"] },
    { name: "서렌더 해 달라는데 뭘 하면 되나요", ids: ["bl-release", "bl-cases"] },
    { name: "원본 B/L 없이 화물을 내줘도 되나요", ids: ["bl-release", "bl-cases"] },
    { name: "House B/L을 발행하면 책임은?", ids: ["bl-basics", "bl-cases"] },
    { name: "Switch B/L 요청을 받았어요", ids: ["bl-special", "bl-cases"] },
    { name: "전자 B/L은 어디까지 왔나요", ids: ["bl-special", "awb-basics"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>B/L과 AWB, 같은 운송서류인데 왜 다르게 움직이나</h2><p>해상의 선하증권(B/L)은 화물을 대신하는 권리증권이라 원본이 있어야 화물을 받지만, 항공화물운송장(AWB)은 화물과 함께 움직이는 비유통 서류라 수하인이 바로 받습니다. 두 서류의 기초와 차이, 서렌더·보증도 같은 화물 인도 실무, Switch B/L과 전자 B/L, 실제 판례를 포워더 실무 관점에서 정리했습니다.</p><a class="lib-summary-button" href="${link('bl-vs-awb')}">B/L과 AWB 비교부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('상법·몬트리올 협약·헤이그-비스비 규칙 등 법령과 협약, 판례, IATA·DCSA·은행의 공개 자료를 바탕으로 정리했습니다. UCP 600 본문은 싣지 않고 요약했습니다. 법률 자문이 아니며, 실제 분쟁은 계약 조건과 법원의 판단에 따릅니다. 해설은 AI가 작성했으며 법률 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.blawb.open';
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
  const CHECKED = '2026-10-10';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← B/L · AWB</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h2>${esc(doc.title)}</h2><p class="lib-checked">자료 확인 ${CHECKED} · 법령과 업계 표준은 바뀔 수 있으니 실제 업무는 최신 운송약관과 법령을 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/bl-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 법률 전문가가 검토한 것이 아닙니다. 실제 분쟁은 운송계약 조건과 법원의 판단에 따르며, 중요한 결정은 전문가와 확인하세요.</p>${pager(doc)}`
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
      renderDoc(view, doc);
      document.title = `${doc.title} · B/L·AWB · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'B/L·AWB 선하증권과 항공화물운송장 비교 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
