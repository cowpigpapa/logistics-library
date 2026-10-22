// 온도유지 화물 메뉴(/library/temperature-cargo): 기초와 규정, 항공 패시브·액티브, 해상 리퍼, 사고 사례.
// 본문은 /tc-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/temperature-cargo/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/temperature-cargo';
  const DOCS_VERSION = '20261022-02';
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
    { title: "EU GDP 가이드라인(2013/C 343/01)", org: "European Commission", kind: "공식 지침", note: "의약품 유통관리기준. 9장이 운송입니다.", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52013XC1123(01)" },
    { title: "WHO TRS 961 Annex 9", org: "WHO", kind: "공식 지침", note: "온도·시간 민감 의약품의 보관·운송 모델 지침과 기술 보충서입니다.", url: "https://www.who.int/publications/m/item/trs961-annex9-modelguidanceforstoragetransport" },
    { title: "의약품 등의 안전에 관한 규칙(KGSP 별표 6)", org: "법제처 국가법령정보센터", kind: "법령", note: "한국 의약품 유통품질관리기준입니다.", url: "https://www.law.go.kr/법령/의약품등의안전에관한규칙" },
    { title: "IATA 온도관리규정(TCR)", org: "IATA", kind: "업계 규정 · 유료", note: "항공 온도유지 화물 취급 규정과 TTS 라벨 안내입니다.", url: "https://www.iata.org/en/publications/store/temperature-control-regulations/" },
    { title: "CEIV Pharma", org: "IATA", kind: "인증", note: "의약품 항공운송 품질 인증 제도입니다.", url: "https://www.iata.org/en/programs/cargo/pharma/ceiv-pharma/" },
    { title: "CTU Code", org: "IMO·ILO·UNECE", kind: "국제 규범", note: "컨테이너 적입 규범. 리퍼 화물 적입도 다룹니다.", url: "https://logistics.onharu.app/library/ctu-code" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'tc-basics', tag: "기초", level: 3, title: "온도유지 화물 기초와 규정 — 온도대, 일탈, GDP·KGSP, IATA TCR과 CEIV", short: "온도대 표기와 의약품 유통 기준", summary: "온도대 표기(+2~+8℃, +15~+25℃ 등)와 항공 코드 PIL·COL·CRT·ERT·FRO, 온도 일탈의 뜻과 판단 주체, EU GDP 제9장·제7장, WHO TRS 961 부속서 9, 한국 의약품 유통품질 관리기준(별표 6)의 운송·기록 조항, IATA TCR과 Time and Temperature Sensitive 라벨 규칙, 수락 체크리스트, CEIV Pharma 인증의 의미, 데이터로거와 기록 보관, 화주·포워더·운송인 역할을 정리합니다." },
    { id: 'tc-air-passive', tag: "패시브", level: 3, title: "항공 패시브 포장 — 단열재·냉매, 드라이아이스 위험물, 검증 시간과 팔레트 쉬퍼", short: "항공 패시브 포장", summary: "단열 박스 구조와 젤팩·PCM·드라이아이스 냉매의 차이, UN1845 드라이아이스의 포장지침 954·포장당 200kg·운송장 기재와 항공사 한도, WHO 적격성 평가(DQ·OQ·PQ)와 계절용·사계절용 포장, ISTA 7D·7E, 팔레트형 패시브 제품의 공개 사양과 운임 중량, 선택 기준, 출고부터 인도까지 한 포워더의 운영 절차(재보충·냉장 탑차·도착지 창고 확인)와 포워더 체크리스트를 다룹니다." },
    { id: 'tc-air-active', tag: "액티브", level: 3, title: "항공 액티브 컨테이너 — 사양 비교, 항공사 승인, 리스·예약, 배터리와 충전", short: "항공 액티브 컨테이너", summary: "압축기 냉각·전기 히터·배터리로 온도를 유지하는 RKN·RLP·RAP 액티브 ULD의 구조, Envirotainer·CSafe·DoKaSch·HB TempCon 공개 사양(온도 범위, 배터리 지속·충전 시간, 외형·내부 치수, 자중·최대 총중량), 대한항공·Emirates 등 항공사 수용 모델과 탑재 기종, 리스 계약과 예약·반납 절차, NiMH 배터리·데이터로거의 위험물 취급, 사전 조절 규칙, 패시브와 비교표, 반출·적입·인계·개봉·일탈 때 남길 기록을 담은 포워더 체크리스트." },
    { id: 'tc-reefer', tag: "리퍼", level: 3, title: "해상 리퍼 컨테이너 — 구조·공기 흐름, 종류, 서플라이·리턴 에어 제어, 환기·전원·온도 기록", short: "리퍼 컨테이너 구조와 설정", summary: "하부 송풍과 T자형 바닥, 빨간 선, 서플라이·리턴 에어 센서의 구조와 '유지하는 장비'라는 원리, 일반·CA·MA·초저온·저온처리·NOR 장비의 공개 사양, -10℃를 경계로 한 냉장(서플라이 에어)·냉동(리턴 에어) 제어, 환기 ㎥/h 범위와 냉동 화물 환기 닫힘, 제습·제상, 리퍼 전원과 클립온·언더슬렁 젠셋, 컨트롤러 온도 기록과 선사 원격 모니터링(Captain Peter, Hapag-Lloyd LIVE, ONE CONTAINER+, MSC iReefer)을 선사·제조사 자료와 CTU Code IM8로 정리." },
    { id: 'tc-reefer-practice', tag: "리퍼실무", level: 3, title: "리퍼 실무 — 예약부터 인도까지, 화주 서류·설정 실수·전원 공백·사고 대응", short: "리퍼 선적 실무(예약~인도)", summary: "화주가 정하는 운송 지시와 포워더의 서류 대조, 화주에게 받을 서류와 예약 확인 항목(ONE·Hapag-Lloyd 점검표), PTI, ℃/℉·+/- 부호·환기 열림 같은 설정 실수 표, 화물 예냉과 컨테이너 예냉을 하지 않는 이유(의약품 사전 조절 예외), 적입 원칙, 전원 공백 구간과 젠셋 요금 확인, 선상 모니터링, 컨트롤러 다운로드와 상법 제804조 통지 등 사고 대응, 기사 지시·CY 전원 확인을 넣은 단계별 체크리스트." },
    { id: 'tc-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "온도 사고 사례 — 항공 램프·경유지와 리퍼 지시·전원 공백에서 난 온도 일탈 16건", short: "온도 사고 사례", summary: "뮌헨 램프의 인슐린, 경유지 냉방 정지, 도착지 비냉장 창고, 백신 과냉각, 모호한 온도 지시와 부킹 확인서 오류, 터미널 전원 공백, 환기 설정 실수 같은 판례·사고와 한 포워더의 익명 사고 4건, 국내 독감 백신 상온 노출까지 16건을 같은 형식으로 정리했습니다." }
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
    { title: "온도 기준과 항공 운송", sub: "온도대 표기·의약품 유통 기준 · 항공 패시브 포장 · 항공 액티브 컨테이너", docs: ["tc-basics", "tc-air-passive", "tc-air-active"] },
    { title: "해상 리퍼 운송", sub: "리퍼 컨테이너 구조와 설정 · 리퍼 선적 실무", docs: ["tc-reefer", "tc-reefer-practice"] },
    { title: "사례", sub: "판례·사고와 익명 사고 기록 16건", docs: ["tc-cases"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "+2~+8℃ 화물, 항공으로 어떻게 보내나요", ids: ["tc-basics", "tc-air-passive"] },
    { name: "패시브와 액티브, 뭘 골라야 하나요", ids: ["tc-air-active", "tc-air-passive"] },
    { name: "드라이아이스는 위험물인가요", ids: ["tc-air-passive", "tc-reefer-practice"] },
    { name: "액티브 컨테이너 배터리·데이터로거는 위험물인가요", ids: ["tc-air-active"] },
    { name: "리퍼 예약할 때 뭘 확인하나요", ids: ["tc-reefer-practice", "tc-reefer"] },
    { name: "리퍼는 화물을 식혀 주나요", ids: ["tc-reefer", "tc-reefer-practice"] },
    { name: "온도 사고는 어디서 나나요", ids: ["tc-cases", "tc-reefer-practice"] }
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
    { id: 'xrKASMYmBgA', title: '기름 값 아끼려고…냉동·냉장 식품 운반차 온도계 조작 적발', source: 'MBN 굿모닝 MBN', date: '2024. 11. 1.', note: '연료비를 아끼려고 냉동차 온도계를 조작한 일당 검거 보도. 온도 기록만 믿지 말고 기록 장치의 신뢰성도 확인해야 하는 이유입니다.' },
    { id: 'g4_4k9Z663o', title: '상하면 어쩌나...배송차 온도 조작장치 수천 개 유통', source: 'YTN 사이언스', date: '2024. 11. 1.', note: '냉장·냉동차 온도 조작 장치를 만들어 판 업체와 이를 쓴 기사들이 입건된 사건. 장치가 5천 개 가까이 유통된 것으로 보도됐습니다.' }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>온도유지 화물, 항공과 해상은 온도를 지키는 방식이 다르다</h2><p>의약품·신선식품처럼 정해진 온도를 지켜야 하는 화물은 항공에서는 단열 포장(패시브)이나 전원으로 온도를 유지하는 컨테이너(액티브)로, 해상에서는 리퍼 컨테이너로 운송합니다. 1장은 온도대 표기와 의약품 유통 기준, 항공 패시브·액티브 방식, 2장은 리퍼 컨테이너의 구조와 예약부터 인도까지의 실무를 다루고, 3장에 실제 온도 사고 16건을 모았습니다.</p><a class="lib-summary-button" href="${link('tc-basics')}">기초와 규정부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('EU GDP, WHO, 한국 KGSP 등 공식 기준과 IATA 공개 자료, 장비 제조사 사양서, 선사 리퍼 가이드, P&I 보고서, 판례를 바탕으로 정리했습니다. IATA TCR·DGR 본문은 싣지 않고 공개 자료 범위에서 요약했습니다. 제품명은 비교를 위한 예시입니다. 해설은 AI가 작성했으며 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}
      ${videoSection()}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.tc.open';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Cold Chain · 온도유지 화물</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${CHECKED} · 규정과 장비 사양은 바뀔 수 있으니 실제 업무는 최신 규정과 항공사·선사 안내를 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/tc-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 전문가가 검토한 것이 아닙니다. 실제 운송 조건은 화주의 운송 지시, 항공사·선사 규정과 장비 사양을 따르며, 중요한 결정은 해당 회사와 확인하세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Cold Chain · 온도유지 화물 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '온도유지 화물 항공 패시브·액티브와 해상 리퍼 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
