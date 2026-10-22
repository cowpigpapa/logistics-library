// Customs · 통관 메뉴(/library/customs): 수출입 통관과 HS 코드, FTA 원산지, 보세구역과 보세운송.
// 본문은 /cu-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/customs/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/customs';
  const DOCS_VERSION = '20261022-01';
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
    { title: "관세법", org: "법제처 국가법령정보센터", kind: "법령", note: "수출입신고, 보세구역, 보세운송, 가산세의 근거 법률입니다.", url: "https://www.law.go.kr/법령/관세법" },
    { title: "자유무역협정의 이행을 위한 관세법의 특례에 관한 법률", org: "법제처 국가법령정보센터", kind: "법령", note: "협정관세 적용신청, 원산지증명, 원산지 검증의 근거 법률입니다.", url: "https://www.law.go.kr/법령/자유무역협정의이행을위한관세법의특례에관한법률" },
    { title: "관세법령정보포털(CLIP)", org: "관세청", kind: "공식 안내", note: "관세율표, 품목분류 사례, 고시·훈령을 찾을 수 있습니다.", url: "https://unipass.customs.go.kr/clip/index.do" },
    { title: "전자통관시스템(UNI-PASS)", org: "관세청", kind: "공식 시스템", note: "수출입신고와 화물 진행정보 조회 시스템입니다.", url: "https://unipass.customs.go.kr/" },
    { title: "FTA 포털", org: "관세청", kind: "공식 안내", note: "협정별 원산지 결정기준과 증명 방식 안내입니다.", url: "https://www.customs.go.kr/ftaportalkor/main.do" },
    { title: "HS Nomenclature", org: "세계관세기구(WCO)", kind: "국제 기준", note: "HS 품목분류 체계와 개정 일정입니다.", url: "https://www.wcoomd.org/en/topics/nomenclature/overview.aspx" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'cu-documents', checked: '2026-10-18', tag: "서류", level: 3, title: "수출입 기본 서류 — 상업송장(인보이스)과 포장명세서(패킹리스트)", short: "인보이스·패킹리스트", summary: "관세청 송품장 기재요령과 신고서 작성요령으로 본 인보이스·패킹리스트의 필수 항목, 같은 숫자가 B/L·적하목록·신고서·원산지증명서·위험물 서류·보험증권과 맞아야 하는 이유, 저가·분할 송장의 법적 결과를 정리하고 서로 맞는 서류 예시와 흔한 불일치 8가지를 보여 줍니다." },
    { id: 'cu-clearance', tag: "통관", level: 3, title: "수출입 통관 절차 — 신고 시기·기한, 세금 계산, 적재화물목록", short: "통관 절차와 세금", summary: "수출신고수리 후 30일 적재, 수입신고 네 가지 시기와 30일 신고기한·가산세, CIF 과세가격과 부가가치세 계산, HS 코드 구조와 품목분류 사전심사, 적재화물목록 정정을 관세법·고시 원문 기준으로 정리하고 포워더와 관세사의 역할을 나눕니다." },
    { id: 'cu-import-timeline', checked: '2026-10-18', tag: "수입일정", level: 3, title: "수입 화물 일정표 — 도착부터 반출까지 누가 무엇을 하고 어느 시계가 언제 도는가", short: "수입 도착·반출 일정표", summary: "해상 FCL·LCL과 항공 수입에서 적재화물목록 제출부터 반출·빈 컨테이너 반납까지 날짜별로 누가 무엇을 하는지, 터미널 보관료·선사 D&D·30일 신고기한·장치기간·15일 반출이 언제 시작하고 멈추는지를 한 표로 정리하고 반출을 막는 서류와 사전 통지 항목을 보여 줍니다." },
    { id: 'cu-bonded', tag: "보세운송", level: 3, title: "보세구역과 보세운송 — 수입화물이 통관 전에 머무는 곳과 옮기는 방법", short: "보세구역과 보세운송", summary: "보세구역 종류와 장치기간, 반입·반출신고와 화물관리번호, 보세운송의 신고·승인 구분과 신고인, 운송기간·담보·도착보고, 운송 중 사고의 관세 책임, 부산항·인천공항에서 내륙 보세창고로 옮기는 흐름을 정리합니다." },
    { id: 'cu-hs-practice', checked: '2026-10-19', tag: "품목분류", level: 2, title: "HS 코드는 어떻게 정해지나 — 통칙 순서, 사전심사, 잘못 분류했을 때", short: "HS 품목분류 실무", summary: "헷갈리는 물품이 통칙 1~6호와 주로 하나의 코드가 되는 과정, 잘못 분류했을 때의 보정·가산세, 사전심사와 분류 변경, 역할별 점검표." },
    { id: 'cu-fta', tag: "FTA", level: 3, title: "FTA 원산지 — 협정관세 요건, 원산지증명, 직접운송과 B/L", short: "FTA 원산지와 직접운송", summary: "협정관세를 받는 요건과 원산지 결정기준, 협정별 증명 방식과 유효기간, 수입 쪽 적용신청·사후적용·검증, 직접운송 원칙과 제3국 경유 때 필요한 서류, B/L 문구를 정리합니다." },
    { id: 'cu-aeo', checked: '2026-10-19', tag: "AEO", level: 2, title: "수출입 안전관리 우수업체(AEO) — 공인 기준·등급·혜택과 공인 뒤 관리", short: "AEO 공인과 사후관리", summary: "관세법·AEO 고시 기준으로 공인기준과 A·AA·AAA 등급, 신청부터 갱신까지의 기간, 업종별 혜택과 MRA, 공인 뒤 의무와 혜택 정지·취소 사유, 법규준수도 감점, 위반을 막는 사전 점검표와 위반이 생겼을 때의 대응, 실제 사례 2건을 정리합니다." },
    { id: 'cu-penalty', checked: '2026-10-19', tag: "제재", level: 3, title: "세관 과태료·가산세·벌금 — 무엇이 다르고, 통지를 받으면 어떻게 대응하나", short: "과태료·가산세·벌금", summary: "관세법상 가산세(세금)·과태료(행정질서벌)·벌금과 통고처분(형벌)을 물류 위반 사례로 구분하고, 과태료 사전통지 뒤 의견제출·자진납부 감경·이의제기 절차와 역할별 책임, 기록 관리, 기한 달력을 정리합니다." },
    { id: 'cu-us-filing', checked: '2026-10-20', tag: "사전신고", level: 3, title: "미국·캐나다 사전신고 — AMS·ISF·ACAS·ACI와 미국 수출 AES, 기한과 벌금 피하는 법", short: "미국·캐나다 사전신고", summary: "미국행 해상 AMS와 ISF(10+2), 항공 사전정보·ACAS, 캐나다 ACI(eManifest), 미국발 수출 AES(EEI)를 누가 무엇을 언제까지 보내는지 미국·캐나다 규정 원문으로 정리하고, 부산 선적 일정으로 기한을 계산하며 벌금과 자주 하는 실수, 일정 변경 때 수정 신고를 보여 줍니다." },
    { id: 'cu-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "통관 사례 — 원산지·품목분류·운임·보세·해외 신고 판결과 처분 12건", short: "통관 사례", summary: "통과선하증권 없는 FTA 경유 화물, 공장 설비와 웨어러블의 품목분류, 운임을 빠뜨리거나 부풀린 신고, 보세화물 도난의 관세 책임, 적재지검사·컨테이너 번호 위반, 캐나다 AMPS와 미국 수출통제까지 판결·결정·처분 12건을 원문으로 정리합니다." }
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
    { title: "통관 절차와 서류", sub: "인보이스·패킹리스트 · 수출입신고와 세금 · 수입 도착·반출 일정 · 보세구역과 보세운송", docs: ["cu-documents", "cu-clearance", "cu-import-timeline", "cu-bonded"] },
    { title: "품목분류와 원산지", sub: "HS 코드 정하는 법 · 사전심사 · FTA 협정관세와 직접운송", docs: ["cu-hs-practice", "cu-fta"] },
    { title: "AEO·제재·해외 신고", sub: "AEO · 과태료·가산세·벌금 · 미국·캐나다 사전신고", docs: ["cu-aeo", "cu-penalty", "cu-us-filing"] },
    { title: "사례", sub: "직접운송·품목분류·운임 판결 · 보세화물 도난 · 수출 적재 위반 · 해외 처분", docs: ["cu-cases"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "인보이스와 패킹리스트에 무엇을 적어야 하나요", ids: ["cu-documents"] },
    { name: "수입신고는 언제 할 수 있나요", ids: ["cu-clearance", "cu-import-timeline"] },
    { name: "화물이 도착하면 반출까지 며칠 걸리나요", ids: ["cu-import-timeline"] },
    { name: "HS 코드는 누가 정하나요", ids: ["cu-clearance", "cu-hs-practice"] },
    { name: "지우개 달린 연필은 어느 코드로 신고하나요", ids: ["cu-hs-practice"] },
    { name: "세관에서 과태료 통지를 받았어요", ids: ["cu-penalty"] },
    { name: "미국행 화물 ISF는 언제까지 보내나요", ids: ["cu-us-filing"] },
    { name: "FTA 관세를 받으려면 무엇이 필요한가요", ids: ["cu-fta"] },
    { name: "제3국을 거쳐도 FTA가 되나요", ids: ["cu-fta"] },
    { name: "부산에 온 화물을 내륙 창고로 옮겨 통관할 수 있나요", ids: ["cu-bonded"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>통관은 관세사가 하지만, 일정과 비용은 포워더 서류에서 갈린다</h2><p>수출입신고 시기, HS 코드, FTA 원산지 요건, 보세운송은 모두 화주와 관세사의 일이지만, B/L·AWB에 적힌 품명·중량·경유지와 화물이 머무는 보세구역이 결과를 바꿉니다. 포워더가 알아야 할 통관의 흐름과 근거 법령을 정리했습니다. 통관 절차와 서류, 품목분류와 원산지, AEO·제재·해외 신고 순으로 읽고, 실제 판결과 처분은 마지막 장 사례에 모았습니다.</p><a class="lib-summary-button" href="${link('cu-clearance')}">수출입 통관부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('관세법, 자유무역협정의 이행을 위한 관세법의 특례에 관한 법률과 관세청 고시·안내를 바탕으로 정리했습니다. 실제 신고와 품목분류, 협정관세 적용 판단은 관세사와 세관의 몫입니다. 해설은 AI가 작성했으며 관세청이나 관세사가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.customs.open';
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
  const CHECKED = '2026-10-18';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Customs · 통관</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 법령·고시와 협정은 개정될 수 있으니 실제 신고는 국가법령정보센터·관세청 안내와 관세사를 통해 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/cu-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 관세청이나 관세사가 검토한 것이 아닙니다. 신고와 품목분류, 협정관세 적용은 관세사·세관과 확인하세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Customs · 통관 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '수출입 통관·HS 코드·FTA 원산지·보세운송 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
