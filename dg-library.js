// Dangerous Goods 메뉴(/library/dangerous-goods): 국제운송 위험물 교육, 국내법상 위험물, 단속·사고·소송 사례.
// 위험물의 분류·포장·표시 방법 자체는 다루지 않는다(교육·법체계·사례만). 해설은 AI가 법령과 공개 자료를 읽고
// 작성했으며 문단·사례마다 바로 아래 출처를 둔다. 본문은 /dg-docs/<id>.html 조각을 문서를 열 때 불러온다.
// 주소 /library/dangerous-goods/<id>로 문서 하나를 연다(정적 서버 미리보기에서는 ?doc=<id>).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/dangerous-goods';
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
    { title: "항공안전법 · 항공위험물운송기술기준", org: "국토교통부", kind: "법률 · 고시", note: "항공 위험물 운송과 교육의 국내 근거. ICAO 기술지침을 국내에 옮긴 고시입니다.", url: "https://www.law.go.kr/법령/항공안전법" },
    { title: "선박안전법 · 위험물 선박운송 및 저장규칙", org: "해양수산부", kind: "법률 · 부령", note: "해상 위험물 운송과 교육의 국내 근거. IMDG Code를 받아들입니다.", url: "https://www.law.go.kr/법령/선박안전법" },
    { title: "위험물안전관리법", org: "소방청", kind: "법률", note: "국내 저장·취급·운반의 기준. 제1류~제6류와 지정수량을 정합니다.", url: "https://www.law.go.kr/법령/위험물안전관리법" },
    { title: "화학물질관리법", org: "기후에너지환경부", kind: "법률", note: "유해화학물질의 영업허가·신고와 취급 기준, 안전교육을 정합니다.", url: "https://www.law.go.kr/법령/화학물질관리법" },
    { title: "ICAO 위험물 안전운송 기술지침(Doc 9284)", org: "ICAO", kind: "국제 기술규칙", note: "시카고협약 부속서 18에 따른 항공 위험물 규칙. IATA DGR의 바탕입니다.", url: "https://www.icao.int/Dangerous-Goods/Technical-Instructions" },
    { title: "IMDG Code", org: "IMO", kind: "국제 기술규칙", note: "SOLAS 제VII장에 따라 의무인 해상 위험물 규칙입니다.", url: "https://www.imo.org/en/OurWork/Safety/Pages/DangerousGoods-default.aspx" },
    { title: "ADR", org: "UNECE", kind: "국제 협정", note: "유럽 중심의 도로 위험물 운송 협정. 한국은 당사국이 아닙니다.", url: "https://unece.org/transport/dangerous-goods/adr-2025-files" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'dg-rules', tag: "국제 규칙", level: 3, title: "국제 위험물 운송 규칙 한눈에 — UN 권고에서 IATA·IMDG·ADR까지", short: "국제 위험물 운송 규칙", summary: "UN 권고에서 IATA·IMDG·ADR·49 CFR까지, 규칙별 성격·현행판과 교육 요건 비교." },
    { id: 'dg-treaties', tag: "조약·입법", level: 2, title: "조약과 국내 입법 — 어떤 조약에 따라 무슨 법이 만들어졌나", short: "조약과 국내 입법", summary: "시카고협약·SOLAS가 항공안전법·선박안전법으로 이어지는 경로. 도로·철도는 국내법." },
    { id: 'dg-kr-duty', tag: "교육 의무", level: 3, title: "대한민국의 위험물 교육 의무 — 항공·해상·육상 법령별 정리", short: "대한민국의 교육 의무", summary: "항공·해상·도로·철도·화관법·고압가스·산안법의 교육 의무를 대상·주기·시간·과태료로 비교." },
    { id: 'dg-forwarder', tag: "포워더", level: 3, title: "포워더의 교육 대상 — 누가 어떤 교육을 받아야 하나", short: "포워더의 교육 대상", summary: "포워더 직원을 직무별로 나눠 항공·해상·도로 위험물 교육 대상과 시간을 근거 조문과 함께 정리." },
    { id: 'dg-penalty', tag: "제재", level: 3, title: "교육을 받지 않으면 — 벌칙·과태료와 실무상 불이익", short: "교육을 받지 않으면", summary: "교육 미이수·미신고 운송의 과태료·벌칙 조문과 금액, 선사 벌과금과 민사 책임." },
    { id: 'kr-system', tag: "법체계", level: 3, title: "국내 위험물 법체계 — 위험물안전관리법·화학물질관리법과 UN 분류의 관계", short: "국내 위험물 법체계", summary: "UN은 9개 등급 하나, 국내는 위험 종류와 부처별로 나뉜 법. 법령별 대상·행위와 UN 등급 대응표." },
    { id: 'kr-mismatch', tag: "불일치 사례", level: 3, title: "국제 규칙과 국내법이 어긋나는 사례 — 윤활유·리튬배터리 등", short: "국제·국내 불일치 사례", summary: "윤활유는 국내만, 리튬배터리는 국제만 위험물. 15개 사례와 요약표, SDS 14·15항 확인 순서." },
    { id: 'kr-small', tag: "소량 기준", level: 3, title: "소량 기준 — 지정수량 미만과 시·도 조례, 화관법의 규정수량", short: "소량 기준", summary: "지정수량 미만은 시·도 조례 적용. 배수 합산, 조례 4곳 비교, 화관법 규정수량 3단계." },
    { id: 'dg-msds', tag: "MSDS", level: 3, title: "MSDS(SDS) 읽는 법 — 포워더가 확인하는 항목과 운송 분류와의 관계", short: "MSDS(SDS) 읽는 법", summary: "14항을 1·3·9항과 대조하는 법, GHS 분류와 운송 분류의 차이, 오래된 SDS·Non-DG 확인서 등 위험 신호와 접수 체크리스트." },
    { id: 'dg-lithium', checked: '2026-10-19', tag: "리튬배터리", level: 3, title: "리튬배터리 운송 — 해상·항공·철도에서 UN 번호, 포장, 표시, 서류가 어떻게 다른가", short: "리튬배터리 운송", summary: "리튬배터리의 UN 번호를 화학·형태·Wh로 고르는 법과 같은 배터리가 해상·철도(IMDG 42-24, RID 2025)와 항공(PI 965~970, 2026년 SoC 30% 확대)에서 포장·표시·서류가 어떻게 달라지는지, 손상·폐배터리와 역할별 점검까지 다룹니다." },
    { id: 'dg-marks', checked: '2026-10-19', tag: "표시", level: 3, title: "위험물 표시와 표찰 — 국제 운송 라벨·마크·플래카드와 국내 경고 표시의 차이", short: "위험물 표시·표찰", summary: "포장물의 UN 번호·라벨·취급 마크, 컨테이너 표찰과 UN 번호 패널, 위험물안전관리법·화학물질관리법·산업안전보건법이 요구하는 국내 표시를 원문으로 비교하고, 어느 표시가 다른 표시를 대신할 수 있는지와 자주 하는 실수를 정리합니다." },
    { id: 'dg-hidden', checked: '2026-10-19', tag: "숨은 위험물", level: 3, title: "숨은 위험물(Hidden DG) — 일반 화물 속 위험물을 서류와 반입 단계에서 걸러내기", short: "숨은 위험물 확인", summary: "자동차 부품·전자제품·이삿짐처럼 일반 품명 아래 숨은 배터리·가스·인화성 액체를 포워더는 품명·HS 코드·SDS·확인서로, 창고·CFS 작업자는 라벨·냄새·누액 같은 외관 신호로 걸러내는 절차와 발견 뒤 보고·역할 분담을 정리합니다." },
    { id: 'case-inspection', tag: "단속 사례", level: 2, title: "점검·단속 적발 사례 — 소방·특사경·국토교통부", short: "점검·단속 적발 사례", summary: "소방·특사경·국토교통부 등이 실제 적발한 18건을 유형별로 정리하고 자가 점검표를 붙였습니다." },
    { id: 'case-accident', tag: "사고 사례", level: 2, title: "위험물 사고 사례 — 신고·분류·교육의 실패", short: "위험물 사고 사례", summary: "국내외 위험물 사고 19건을 조사보고서와 보도로 확인해 신고·분류·교육 실패 관점에서 정리." },
    { id: 'case-litigation', tag: "판결 사례", level: 2, title: "위험물 소송·판결 사례 — 화주·포워더·운송인 중 누가 책임졌나", short: "소송·판결 사례", summary: "국내외 위험물 판결 사례 17항목의 쟁점과 결론. 포워더가 송하인으로 책임지는 구조." }
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
    { title: "위험물 교육", sub: "국제운송 · 규칙과 조약, 한국의 교육 의무", docs: ["dg-rules", "dg-treaties", "dg-kr-duty", "dg-forwarder", "dg-penalty"] },
    { title: "국내법상 위험물", sub: "법체계 · 국제 규칙과의 차이 · 소량 기준 · MSDS", docs: ["kr-system", "kr-mismatch", "kr-small", "dg-msds"] },
    { title: "운송 실무", sub: "리튬배터리 운송 · 표시와 표찰 · 숨은 위험물", docs: ["dg-lithium", "dg-marks", "dg-hidden"] },
    { title: "사례", sub: "단속 · 사고 · 판결, 사례마다 출처", docs: ["case-inspection", "case-accident", "case-litigation"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "IATA·IMDG·ADR이 뭔가요", ids: ["dg-rules", "dg-treaties"] },
    { name: "우리 직원은 무슨 교육을 받아야 하나요", ids: ["dg-forwarder", "dg-kr-duty"] },
    { name: "교육을 안 받으면 어떻게 되나요", ids: ["dg-penalty", "case-litigation"] },
    { name: "수출 서류로는 위험물이 아닌데 창고에서는요", ids: ["kr-mismatch", "kr-system"] },
    { name: "소량이면 괜찮은가요", ids: ["kr-small", "case-inspection"] },
    { name: "화주가 준 MSDS, 어디를 봐야 하나요", ids: ["dg-msds", "kr-mismatch"] },
    { name: "실제로 어떤 일이 있었나요", ids: ["case-accident", "case-inspection", "case-litigation"] }
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
  // 관련 영상(뉴스·공식 채널). 새 영상은 이 목록에 한 줄 더한다.
  const VIDEOS = [
    { id: 'f_5x5x3ztBk', title: "스프레이통 가득 싣고 가다 '쾅'…운전자 2명 사망", source: 'SBS 8뉴스', date: '2025. 9. 11.', note: '평택제천고속도로 추돌 사고. 가연성 스프레이(에어로졸) 수천 개를 실은 1톤 화물차가 폭발로 이어진 사례로, 소량 위험물도 운송 중 사고가 나면 피해가 커진다는 것을 보여 줍니다.' }
  ];
  // 관련 영상: 썸네일 카드로 보여 주고 누르면 YouTube에서 연다(페이지에 플레이어를 넣지 않아 가볍다).
  const videoSection = () =>
    VIDEOS.length
      ? `<section class="lib-section lib-videos"><h3>관련 영상</h3><div class="lib-video-list">${VIDEOS.map(
          v =>
            `<a class="lib-video" href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg" alt="" width="320" height="180" loading="lazy" decoding="async"><span class="lib-video-text"><b>${esc(v.title)}</b><small>${esc(v.source)} · ${esc(v.date)} · YouTube ↗</small><span>${esc(v.note)}</span></span></a>`
        ).join('')}</div></section>`
      : '';
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>위험물, 무엇을 배워야 하나</h2><p>국제운송의 위험물 규칙은 UN 권고를 뿌리로 항공(ICAO·IATA), 해상(IMDG), 도로(ADR)가 같은 분류를 씁니다. 반면 한국 국내법은 위험물안전관리법, 화학물질관리법, 고압가스 안전관리법 등으로 나뉘어 있어 같은 화물이 창고와 수출 서류에서 서로 다르게 취급됩니다. 이 자료는 위험물 자체가 아니라 <b>교육 의무와 법체계, 그리고 사례</b>를 정리합니다.</p><a class="lib-summary-button" href="${link('dg-rules')}">국제 위험물 운송 규칙 한눈에 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('위험물의 분류·포장·표시·서류 작성 방법은 다루지 않습니다. 그 내용은 각 규칙의 최신판과 지정 교육기관의 교육에서 확인하세요. 해설은 AI가 법령과 공개 자료를 읽고 작성했으며 법률 자문이 아닙니다. 조문과 사례에는 바로 아래에 출처를 달았습니다. 법령은 개정될 수 있으니 실제 판단은 국가법령정보센터의 현행 조문과 관할 기관의 안내를 기준으로 하세요.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}
      ${videoSection()}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.dg.open';
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
  // 법령·자료를 확인한 날짜. 법령이 개정되면 문서를 고치고 이 날짜를 바꾼다.
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Dangerous Goods</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">법령·자료 확인 ${doc.checked || CHECKED} · 법령은 개정될 수 있으니 국가법령정보센터에서 현행 조문을 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/dg-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 법령과 공개 자료를 읽고 작성한 참고 자료이며 법률 자문이 아닙니다. 개별 화물과 사업장의 판단은 현행 법령과 관할 기관의 안내를 기준으로 하세요.</p>${pager(doc)}`
    );
    fitTableColumns(view);
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }
  function show() {
    const view = document.getElementById('libraryView');
    if (!view) return;
    const id = routed ? location.pathname.split('/')[3] : new URLSearchParams(location.search).get('doc');
    const doc = byId(id);
    if (doc) {
      // tools/prerender.py가 미리 채운 같은 문서·같은 버전이면 다시 불러오지 않는다(깜박임 방지). 조각을 고쳐 DOCS_VERSION이 바뀌면 새로 불러온다.
      if (view.dataset.prerendered !== `${doc.id}@${DOCS_VERSION}`) renderDoc(view, doc);
      document.title = `${doc.title} · Dangerous Goods · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'Dangerous Goods 위험물 교육·국내 위험물 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
