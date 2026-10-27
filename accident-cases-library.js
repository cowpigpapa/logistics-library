// Accident Cases · 사고 사례 모음(/library/accident-cases): 각 카테고리 "사고 사례" 장의 사례를 한 표로 모은다.
// 본문 ac-docs/ac-all.html은 tools/build_cases.py가 사례 문서에서 만든다(손으로 고치지 않는다).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/accident-cases';
  const DOCS_VERSION = 'ha4349b6b';
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

  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'ac-all', checked: '2026-10-27', tag: "사례", level: 3, title: "전체 사고 사례 찾기 — 14개 분야 266건을 분야·국내외·운송·유형으로", short: "전체 사고 사례 찾기", summary: "포워더·화주가 겪는 사고와 판결·처분 266건을 분야(Incoterms부터 화물보험까지 14개), 국내·해외, 해상·항공·도로·창고, 판결·처분·사고 유형으로 거르고 이름·화물·쟁점으로 찾아 각 사례로 바로 갑니다." },
    { id: 'inco-cases', checked: '2026-10-22', tag: "사례", level: 3, title: "인코텀스 사고 사례 — 위험 이전·품질 기준 시점·인도 장소를 다툰 판결 10건", short: "인코텀스 사고 사례", summary: "CIF·CFR·FOB에서 위험이 언제 넘어갔는지, 물품 적합성을 언제 기준으로 보는지, 인도 장소와 운송계약 당사자를 한국·미국·영국·중국 법원이 판단한 판결 10건과 포워더가 챙길 서류." },
    { id: 'ch-cases', checked: '2026-10-23', tag: "사례", level: 3, title: "부대비용·보관료 사고 사례 — 누가, 언제까지, 얼마나 내는가", short: "부대비용·보관료 사고 사례", summary: "포워더 명의 부킹과 컨테이너 요금, 수령하지 않은 수하인의 Demurrage, 대납 비용과 1년 제척기간, 회생과 유치권, 외환 상계 판결까지 한국 판결 8건, 미국 FMC 3건, 영국 Cottonex를 한눈에 보기 표와 함께 정리합니다." },
    { id: 'bl-cases', checked: '2026-10-26', tag: "사례", level: 3, title: "B/L·AWB 사고 사례 — 원본 없는 인도, 서렌더, 기명식 B/L, AWB, 복합운송 책임 구간, 유럽 트럭(CMR) 판례", short: "B/L·AWB 사고 사례", summary: "보증도와 위조 L/G, 서렌더·기명식 B/L, Master D/O를 넘긴 도착지 포워더, 통지처에 건넨 AWB, 복합운송 구간과 제척기간, 유럽 트럭 운송의 도난·한도·포워더 지위·관할 등 한국 판례 11건과 영국·홍콩·독일·네덜란드 판례 11건을 한눈에 보기 표와 함께 정리합니다." },
    { id: 'cu-cases', checked: '2026-10-23', tag: "사례", level: 2, title: "통관 사고 사례 — 원산지·품목분류·운임·보세·지재권·해외 신고 판결과 처분 20건", short: "통관 사고 사례", summary: "통과선하증권 없는 FTA 경유 화물, 공장 설비·웨어러블 품목분류, 운임 누락·과다 신고, 보세화물 도난, 적재지검사 위반, 지재권 통관보류와 병행수입 판결, 캐나다 AMPS·미국 수출통제까지 판결·결정·처분 20건을 원문으로 정리합니다." },
    { id: 'cn-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "컨테이너 사고 사례 — 중량 오신고와 VGM 입력 오류, 스택 붕괴, 플랫랙 끝벽 사고, 적출 사고 판결·처분", short: "컨테이너 사고 사례", summary: "MSC Napoli·Deneb의 중량 오신고, President Eisenhower의 VGM 입력 오류, VGM과 신고 중량 차이를 다룬 영국 판결, Annabella 스택 붕괴, 평택항 플랫랙 끝벽 사망 사고, 호주 적출 사망 처분을 출처와 포워더 교훈으로 정리합니다." },
    { id: 'uld-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "ULD·탑재 사고 사례 — 화물 고정·잠금장치와 중량·적재 위치 오류로 난 항공 사고·준사고", short: "ULD·탑재 사고 사례", summary: "차량 고정 실패로 추락한 National Airlines 102편, 겹친 빈 팔레트가 밀린 Aloha 601편, 잠금장치를 올리지 않은 에어뉴질랜드·G-CLNK·G-JMCZ, 팔레트·받침목 중량이 빠진 Fine Air 101편·MK 1602편 등 9건을 조사보고서로 정리했습니다." },
    { id: 'cargo-cases', checked: '2026-10-22', tag: "사례", level: 3, title: "적입·고박 사고 사례 — 보험금 거절과 운송인 면책 판결, 부실 적입이 부르는 결과", short: "적입·고박 사고 사례", summary: "적입·고박·포장이 부족해 보험금을 받지 못하거나 운송인 상대 소송에서 진 국내외 판결 5건과 기록으로 보험 거절을 되돌린 사례, 부실 적입이 부르는 다섯 가지 결과(IM1). 사례마다 바로 아래 출처." },
    { id: 'dg-cases', checked: '2026-10-27', tag: "사례", level: 3, title: "위험물 사고 사례 — 항공기·선박·항만·창고에서 난 사고와 누가 책임졌나(사고·판결·처분·단속 55건)", short: "위험물 사고 사례", summary: "아시아나 991편, ValuJet 592편, MSC Flaminia, 베이루트항, 화성 전지공장 등 국내·해외 사고 21건과 미신고·오신고 통계, 한국 판결 10건, 해외 판결·처분 13건, 국내 단속 11건을 같은 형식으로 묶고, 사례에서 반복되는 실패와 판단 기준, 실무 확인 사항을 정리합니다." },
    { id: 'battery-cases', law: 'g', tag: "사례", level: 3, title: "EU 배터리·폐기물 운송 사례 — 판결·단속·운송 중 화재", short: "배터리·폐기물 운송 사고 사례", summary: "반품·재고·규격 미달 화물이 언제 폐기물인지 다툰 CJEU 판결(Shell, Omni Metal Service, Tronex, Interseroh), 로테르담항 폐 납축전지 운송 중지, 영국 녹색목록 허위 기재 유죄, 미국 폐리튬배터리 컨테이너 화재 7건을 쟁점·결과·포워더 교훈으로 정리." },
    { id: 'tc-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "온도 사고 사례 — 항공 램프·경유지와 리퍼 지시·전원 공백에서 난 온도 일탈 16건", short: "온도 사고 사례", summary: "뮌헨 램프의 인슐린, 경유지 냉방 정지, 도착지 비냉장 창고, 백신 과냉각, 모호한 온도 지시와 부킹 확인서 오류, 터미널 전원 공백, 환기 설정 실수 같은 판례·사고와 한 포워더의 익명 사고 4건, 국내 독감 백신 상온 노출까지 16건을 같은 형식으로 정리했습니다." },
    { id: 'ec-cases', checked: '2026-10-23', tag: "사례", level: 2, title: "수출통제 사고 사례 — 방산·전략물자 무허가 수출과 제재 위반, 해외 포워더 처분 17건", short: "수출통제 사고 사례", summary: "미얀마 전략물자 대법원 판결, 총기 부품·공작기계·이차전지 설비 무허가 수출과 러시아 우회, 북한산 석탄 위장 반입, 제재 선박, DHL·Toll·Fracht 등 해외 포워더·운송인 처분까지 국내 9건과 해외 8건을 원문으로 정리합니다." },
    { id: 'rg-cases', checked: '2026-10-23', tag: "사례", level: 2, title: "반출입 규제 물품 사고 사례 — 폐기물·목재 포장재·LMO·CITES·문화유산 단속과 판결 34건", short: "반출입 규제 물품 사고 사례", summary: "재활용 원료로 신고한 폐기물의 반송, 위조 소독마크와 해충 팔레트로 인한 재수출, 미승인 LMO 종자·곡물 폐기, 냉동 화물·목재로 위장한 멸종위기종, 서적·가구로 위장한 문화유산 반출까지 국내외 단속·처분·판결 34건을 품목별로 정리했습니다." },
    { id: 'rk-cases', checked: '2026-10-23', tag: "사례", level: 2, title: "화물 사고 사례 — 육교 충돌·적재물 낙하, 창고 화재 판결, 젖음·크로스, 가짜 운송사", short: "화물 사고 사례", summary: "대형 화물의 육교·지하차도 충돌과 적재물 낙하, 창고 화재 판결, 컨테이너 젖음과 크로스, 가짜 운송사·하청 사기, 무허가 주선·자가용 유상운송 판결까지 화물 사고·판결 28건을 다섯 묶음으로 정리합니다." },
    { id: 'ins-cases', checked: '2026-10-22', tag: "사례", level: 2, title: "화물보험 사고 사례 — 보험금 분쟁, 운송인·포워더 책임, 공동해손·컨테이너 유실, 온도유지 화물", short: "화물보험 사고 사례", summary: "영국법 준거약관·고유 하자·포장·제재 면책 같은 보험금 분쟁, 포장당 한도와 House B/L 포워더 책임, Yantian Express·CMA CGM LIBRA 등 공동해손과 컨테이너 유실, 리퍼 온도 오설정까지 24개 판례·사고를 같은 형식으로 정리합니다." }
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
    { title: "전체 사례 찾기", sub: "분야·국내외·운송·유형으로 거르는 한 표", docs: ["ac-all"] },
    { title: "계약·서류·통관", sub: "Incoterms · 부대비용 · B/L·AWB · 통관", docs: ["inco-cases", "ch-cases", "bl-cases", "cu-cases"] },
    { title: "운송 장비·적재", sub: "컨테이너 · 항공 ULD · 적입·고박", docs: ["cn-cases", "uld-cases", "cargo-cases"] },
    { title: "특수·규제 화물", sub: "위험물 · EU 배터리 · 온도유지 · 수출통제 · 반출입 규제", docs: ["dg-cases", "battery-cases", "tc-cases", "ec-cases", "rg-cases"] },
    { title: "화물 사고·보험", sub: "운송·창고 사고 · 화물보험·운송인 책임", docs: ["rk-cases", "ins-cases"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "분야와 상관없이 사례를 찾고 싶어요", ids: ["ac-all"] },
    { name: "원본 없이 화물을 내준 사고는요", ids: ["bl-cases"] },
    { name: "보험금을 못 받거나 운송인이 면책된 사례는요", ids: ["ins-cases", "cargo-cases"] },
    { name: "위험물 사고와 판결·단속은요", ids: ["dg-cases"] },
    { name: "통관·관세 판결은요", ids: ["cu-cases"] },
    { name: "무허가 수출·제재 위반은요", ids: ["ec-cases"] },
    { name: "운송·창고에서 난 사고는요", ids: ["rk-cases", "cn-cases", "uld-cases"] }
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
    const official = OFFICIAL.length ? `<section class="lib-section lib-official"><h3>공식 자료</h3><div class="lib-table-wrap"><table class="lib-table lib-official-table"><thead><tr><th>자료</th><th>발행 기관</th><th>내용</th><th></th></tr></thead><tbody>${OFFICIAL.map(officialRow).join('')}</tbody></table></div></section>` : '';
    const sections = SECTIONS.map(
      g =>
        `<section class="lib-section"><h3>${esc(g.title)} <small>${esc(g.sub)}</small></h3><div class="lib-docs">${g.docs
          .map(byId)
          .filter(Boolean)
          .map(docCard)
          .join('')}</div></section>`
    ).join('');
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>사고·판례·보험 사례를 한 곳에</h2><p>14개 분야의 사례 266건을 이 카테고리에 모았습니다. 분야별 사례 문서는 해설과 같은 묶음 순서로 놓았고, 첫 문서의 표에서 분야·국내외·운송·유형으로 거르거나 검색어로 찾아 각 사례로 바로 갈 수 있습니다.</p><a class="lib-summary-button" href="${link('ac-all')}">전체 사례 찾기 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('각 분야의 사고 사례 문서에서 모은 목록입니다. 사례의 경위, 판단, 교훈과 출처는 각 사례 문서에 있습니다. 판례와 처분의 결론은 그 사건의 사실관계와 당시 법에 따른 것입니다. 해설은 AI가 작성했으며 법률 자문이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.accident-cases.open';
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
  const CHECKED = '2026-10-26';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Accident Cases · 사고 사례 모음</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 판례와 처분의 결론은 그 사건의 사실관계와 당시 법에 따른 것입니다.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/ac-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 사례 문서는 판결문·보고서·보도 등 공개 자료를 AI가 요약한 참고 자료이며 법률 자문이 아닙니다. 실제 분쟁은 원문을 확인하고 전문가와 상의하세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · Accident Cases · 사고 사례 모음 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '사고 사례 모음 — 분야별 사고·판결·처분을 한 표로 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
