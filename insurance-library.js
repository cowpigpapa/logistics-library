// 화물보험 메뉴(/library/cargo-insurance): 적하보험 기초, ICC 약관, 가입이 어려운 화물, 운송인 책임 한도, 공동해손,
// 클레임 절차, 소송·분쟁 사례, 포워더와 보험. ICC·Incoterms 본문은 싣지 않고 자기 말로 요약했다.
// 본문은 /insurance-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/cargo-insurance/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/cargo-insurance';
  const DOCS_VERSION = '20261009-01';
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
    { title: "Institute Cargo Clauses 2009", org: "Lloyd's Market Association", kind: "보험 약관", note: "ICC (A)(B)(C)와 전쟁·파업 약관 등 런던 시장 표준 약관을 만드는 협회입니다. 약관 공개본은 보험사 사이트에서도 볼 수 있습니다.", url: "https://www.lmalloyds.com/" },
    { title: "Incoterms® 2020", org: "ICC", kind: "국제규칙 · 유료", note: "CIF·CIP 조건의 보험 의무(A5)가 담긴 규칙입니다. 본문은 싣지 않습니다.", url: "https://iccwbo.org/business-solutions/incoterms-rules/" },
    { title: "York-Antwerp Rules 2016", org: "CMI", kind: "국제규칙", note: "공동해손 정산의 국제 표준 규칙입니다.", url: "https://comitemaritime.org/work/york-antwerp-rules/" },
    { title: "몬트리올 협약 책임한도", org: "ICAO", kind: "국제협약", note: "2024년 12월 28일부터 적용되는 몬트리올 협약 책임한도(화물 kg당 26 SDR) 공지입니다.", url: "https://www.icao.int/sites/default/files/secretariat/legal/LEB%20Treaty%20Collection%20Documents/2024_Revised_Limits_of_Liability_Under_the_Montreal_Convention_of_1999_en.pdf" },
    { title: "상법 제4편 보험·제5편 해상", org: "법제처 국가법령정보센터", kind: "법령", note: "보험계약·해상보험·운송인 책임제한·공동해손에 관한 한국 법 규정입니다.", url: "https://www.law.go.kr/법령/상법" },
    { title: "보험업법", org: "법제처 국가법령정보센터", kind: "법령", note: "보험 모집과 보험대리점·중개사 등록에 관한 규정입니다.", url: "https://www.law.go.kr/법령/보험업법" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'ins-basics', tag: "기초", level: 3, title: "적하보험 기초 — 누가 들고, 얼마를, 언제부터 언제까지", short: "적하보험 기초", summary: "운송인 배상과 적하보험의 차이, Incoterms 2020 조건별 보험 주체(CIF는 ICC (C), CIP는 ICC (A) 이상), CIF+10% 보험금액과 피보험이익, 예정보험과 보험증권·증명서, UCP 600 제28조 보험서류 요건, ICC 제8조 창고간 보험기간을 정리합니다." },
    { id: 'ins-icc', tag: "약관", level: 3, title: "ICC (A)(B)(C)와 면책 — 어떤 사고가 보상되고 어떤 손해가 빠지는가", short: "ICC (A)(B)(C)와 면책", summary: "2009년 협회적하약관 (A)(B)(C)의 담보 위험을 표로 비교하고, 제4조 일반 면책·제5조 불감항·제6조 전쟁·제7조 파업 면책과 협회전쟁·파업약관, 1963·1982년판과의 대응, 영국법 준거 조항이 한국 실무에서 갖는 의미를 정리합니다." },
    { id: 'ins-uninsurable', tag: "가입제한", level: 3, title: "보험 가입이 어렵거나 안 되는 화물 — 냉동·냉장 화물부터 제재·전쟁 위험까지", short: "가입 어려운 화물", summary: "냉동·냉장 식품과 의약품 콜드체인에 붙는 협회 냉동·냉장식품 약관(24시간 고장 조건)과 증빙, 중고품·갑판 적재·생동물·귀중품·위험물의 조건, 제재·전쟁 위험 지역·사고 후 가입처럼 보험료로 해결되지 않는 경우를 정리합니다." },
    { id: 'ins-carrier-liability', tag: "책임", level: 3, title: "운송인 책임과 한도 — 해상·항공·도로 한도 비교와 화물값과의 차이", short: "운송인 책임과 한도", summary: "헤이그-비스비 규칙과 상법 제797조, 몬트리올 협약 26 SDR와 상법 제915조 19 SDR, CMR 8.33 SDR, 복합운송의 한도를 비교하고, 원화 계산 예시로 운송인 배상이 화물값의 몇 %인지와 가액 신고, 포워더가 운송인이 되는 경우를 정리." },
    { id: 'ins-general-average', tag: "공동해손", level: 3, title: "공동해손과 구조 — 요크-앤트워프 규칙 2016, GA 선언 시 화주가 낼 담보, 실제 사고", short: "공동해손과 구조", summary: "화물이 멀쩡해도 돈을 내야 하는 공동해손의 개념과 YAR 2016·상법 규정, GA 선언 시 맹약서·보증장·현금 공탁과 구조 담보, 보험 유무의 차이, Maersk Honam·Yantian Express 등 공개된 담보 비율." },
    { id: 'ins-claims', tag: "클레임", level: 3, title: "사고와 클레임 절차 — 발견부터 보험금·구상까지 순서, 기한, 서류", short: "사고와 클레임 절차", summary: "사고 발견 시 인수증 기재·사진·운송인 통지·보험사 연락·검정 순서, 해상·항공·도로의 통지·제소 기한 비교표, 운송 형태별 클레임 서류, 대위와 구상, 포워더가 할 수 있는 일과 하지 않는 일." },
    { id: 'ins-cases', tag: "판례", level: 2, title: "소송·보험금 분쟁 사례 — 한국 대법원과 해외 판례, 온도유지 화물 분쟁", short: "소송·보험금 분쟁 사례", summary: "영국법 준거약관, 보험기간 종료, 포장당 책임제한, 포워더의 운송인 지위, 고유 하자·포장 불충분·제재 면책, 냉동 컨테이너 온도 오설정까지 14개 사례의 사실관계·결론·실무 교훈." },
    { id: 'ins-forwarder', tag: "포워더", level: 3, title: "포워더와 보험 — 배상책임보험, House B/L 책임, 보험업법", short: "포워더와 보험", summary: "포워더가 운송주선인이 아니라 운송인으로 책임지는 경우, 포워더 배상책임보험과 적하보험의 차이, 국제물류주선업 등록의 보증보험·화물배상책임보험 요건, 화주 보험을 들어 주는 행위와 보험업법상 모집 규제를 다룹니다." }
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
    { title: "기본", sub: "적하보험 기초 · ICC 약관 · 가입이 어려운 화물", docs: ["ins-basics", "ins-icc", "ins-uninsurable"] },
    { title: "책임과 사고", sub: "운송인 책임 한도 · 공동해손 · 클레임 절차", docs: ["ins-carrier-liability", "ins-general-average", "ins-claims"] },
    { title: "사례와 실무", sub: "소송·분쟁 사례 · 포워더와 보험", docs: ["ins-cases", "ins-forwarder"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "보험은 누가 들어야 하나요", ids: ["ins-basics", "ins-forwarder"] },
    { name: "파손됐는데 누가 물어주나요", ids: ["ins-carrier-liability", "ins-claims"] },
    { name: "ICC (A)와 (C)는 뭐가 다른가요", ids: ["ins-icc", "ins-basics"] },
    { name: "냉동·냉장 화물도 보험이 되나요", ids: ["ins-uninsurable", "ins-cases"] },
    { name: "공동해손 선언이 나왔어요", ids: ["ins-general-average", "ins-claims"] },
    { name: "포워더가 보험을 들어 줘도 되나요", ids: ["ins-forwarder", "ins-cases"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>화물보험, 사고가 나면 돈은 어디서 나오나</h2><p>화물이 파손되거나 없어지면 보상은 운송인의 책임, 적하보험, 공동해손 정산이 얽혀 결정됩니다. 누가 보험을 드는지, ICC (A)(B)(C)가 무엇을 담보하는지, 가입이 어렵거나 안 되는 화물, 운송인 책임 한도, 공동해손, 사고 후 클레임 절차, 실제 소송과 보험금 분쟁 사례, 그리고 포워더가 할 수 있는 일과 없는 일을 정리했습니다.</p><a class="lib-summary-button" href="${link('ins-basics')}">적하보험 기초부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('약관·협약·법령·판례와 보험사·협회의 공개 자료를 바탕으로 정리했습니다. ICC 약관과 Incoterms 본문은 싣지 않고 요약했습니다. 법률·보험 자문이 아니며, 실제 보상 여부는 보험증권의 약관과 보험사·법원의 판단에 따릅니다. 해설은 AI가 작성했으며 보험사나 법률 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
      ${official}
      ${stagePath()}
      ${sections}`;
    makeFoldable(view);
  }
  // 첫 화면 구간 접기. 펼친 상태는 같은 탭 안에서만 기억한다.
  const FOLD_KEY = 'logisticsLibrary.insurance.open';
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
    const head = `<nav class="lib-crumb"><a href="${home}">← Cargo Insurance</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h2>${esc(doc.title)}</h2><p class="lib-checked">자료 확인 ${CHECKED} · 보험 약관과 법령은 개정될 수 있으니 실제 계약은 최신 증권과 법령을 확인하세요.</p>`;
    view.innerHTML = `${head}<article class="lib-article">${title}<p class="lib-loading">불러오는 중…</p></article>`;
    let html;
    try {
      const response = await fetch(`/insurance-docs/${doc.id}.html?v=${DOCS_VERSION}`);
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
      `<p class="lib-disclaimer">이 문서는 AI가 공개 자료를 읽고 작성한 참고 자료이며 보험사나 법률 전문가가 검토한 것이 아닙니다. 실제 보상 여부는 보험증권의 약관과 보험사·법원의 판단에 따르며, 중요한 결정은 보험사나 전문가와 확인하세요.</p>${pager(doc)}`
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
      document.title = `${doc.title} · 화물보험 · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = '화물보험 적하보험·운송인 책임·공동해손·클레임 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
