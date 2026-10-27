// B/L·AWB 메뉴(/library/bl-awb): B/L과 AWB의 기초와 비교, 화물 인도 실무, 특수 B/L과 전자화, 복합운송, 판례.
// 본문은 /bl-docs/<id>.html 조각을 문서를 열 때 불러온다. 주소 /library/bl-awb/<id>로 문서 하나를 연다.
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/bl-awb';
  const DOCS_VERSION = '20261027-10';
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
    { title: "몬트리올 협약(1999)", org: "ICAO", kind: "국제협약", note: "항공화물운송장의 성격, 송하인의 처분권, 화물 인도를 정한 협약입니다.", url: "https://www.icao.int/sites/default/files/secretariat/legal/List%20of%20Parties/Mtl99_EN.pdf" },
    { title: "UCP 600", org: "ICC", kind: "국제규칙 · 유료", note: "신용장 거래에서 B/L(제20조)·해상화물운송장(제21조)·항공운송서류(제23조) 요건을 정합니다. 본문은 싣지 않습니다.", url: "https://iccwbo.org/business-solutions/trade-finance/" },
    { title: "e-AWB · ONE Record", org: "IATA", kind: "공식 안내", note: "전자 항공화물운송장과 항공화물 데이터 표준 안내입니다.", url: "https://www.iata.org/en/programs/cargo/e/eawb/" },
    { title: "MLETR", org: "UNCITRAL", kind: "모델법", note: "전자 양도가능 기록(전자 B/L 등)에 관한 모델법입니다.", url: "https://uncitral.un.org/en/texts/ecommerce/modellaw/electronic_transferable_records" },
    { title: "DCSA eBL", org: "DCSA", kind: "업계 표준", note: "컨테이너 선사들의 전자 B/L 데이터 표준입니다.", url: "https://dcsa.org/standards/bill-of-lading" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'bl-basics', tag: "B/L", level: 3, title: "B/L 기초 — 세 기능, 종류, 기재사항, House B/L과 AWB 비교", short: "B/L 기초", summary: "선하증권의 세 기능(운송계약 증거·화물 수령증·권리증권), 기명식·지시식·소지인식과 배서, 선적·수취, Clean·Foul, 통 B/L·복합운송 B/L, 상법 제853조 기재사항, 원본 3통의 의미(제857조), Master·House B/L 구조, 운임 표시와 부지 약관을 포워더 입장에서 정리하고, 인도 조건·처분권·신용장·책임 한도까지 B/L과 AWB를 한 표로 비교합니다." },
    { id: 'awb-basics', tag: "AWB", level: 3, title: "AWB 기초 — 비유통 운송장, 원본 3부, 처분권, 번호 체계, e-AWB와 ONE Record", short: "AWB 기초", summary: "AWB가 권리증권이 아닌 이유, 원본 3부와 송하인 처분권, IATA 양식과 11자리 번호, Master·House AWB, e-AWB와 ONE Record, 신용장 거래의 은행 수하인과 UCP 600 제23조를 정리합니다." },
    { id: 'bl-release', tag: "인도", level: 3, title: "화물 인도 실무 — 원본 B/L, 서렌더, Sea Waybill, 보증도", short: "화물 인도 실무", summary: "원본 B/L 회수 인도와 상법 제857조~제861조, 서렌더(Telex Release)의 실무와 주의점, Sea Waybill의 성격(상법 제863조·제864조, CMI 규칙)과 인도, 수입화물선취보증서(L/G)·LOI 보증도의 위험, 기명식 B/L, 원본 분실 시 공시최고, D/O와 반출, 항공화물 도착 통지와 은행 수하인 화물 인도를 정리합니다." },
    { id: 'bl-lien', checked: '2026-10-27', tag: "유치권", level: 3, title: "운임을 못 받았을 때 화물을 잡을 수 있나 — 포워더·운송인의 유치권, 상사유치권, 보세화물 점유, 체화 공매", short: "운임 미수와 유치권", summary: "상법 제120조·제807조의 운송주선인·운송인 유치권과 민법·상사유치권의 차이, 다른 건 미수로 잡을 수 있는 조건, 보세창고 화물의 점유와 D/O, 해외 파트너 미수금, 체화 공매에서 유치권자의 권리와 폐기 비용, FBL·선사·BIFA 약관의 lien 조항, 미국·영국의 lien, 잘못 잡았을 때의 책임과 실무 절차를 판례와 함께 정리합니다." },
    { id: 'bl-special', tag: "특수", level: 3, title: "특수 B/L과 전자화 — Switch·분할 B/L, 선적일 소급, 전자선하증권(eBL)", short: "특수 B/L과 전자화", summary: "Switch·분할·통합 B/L의 정상 절차와 P&I 권고, 선적일 소급과 LOI를 받은 무사고 B/L의 결과, 상법 제862조와 KTNET 등록, MLETR·영국 ETDA 2023, DCSA 2030 약속, IG 승인 eBL을 정리합니다." },
    { id: 'bl-multimodal', checked: '2026-10-18', tag: "복합운송", level: 3, title: "복합운송과 책임 구간 — 손해 구간을 알 때와 모를 때", short: "복합운송과 책임 구간", summary: "문 앞까지 맡은 포워더가 복합운송인이 되는 경우, 네트워크·단일 책임제, 손해 구간을 알 때와 모를 때 상법 제816조와 FBL 약관의 답, 구간에 따라 바뀌는 기한, 경로별 가상 예시를 정리합니다." },
    { id: 'bl-cmr', checked: '2026-10-26', tag: "CMR", level: 3, title: "CMR 운송장과 유럽 트럭 운송 — 적용 범위, 운송장과 처분권, kg당 8.33 SDR, 기한, 포워더의 지위", short: "CMR과 유럽 트럭 운송", summary: "국경을 넘는 유럽 트럭 운송에 강행 적용되는 CMR의 적용 범위와 당사국, 운송장 3통·유보·처분권, e-CMR, 운송인 면책과 kg당 8.33 SDR 한도 계산, 고의의 기준, 7일·21일·1년 기한과 관할, 연속 운송인, 포워더가 운송인이 되는 경우를 정리합니다." },
    { id: 'bl-rail', checked: '2026-10-27', tag: "철도", level: 3, title: "중국–유럽 철도와 국제 철도 운송장 — 통로와 궤간 환적, CIM·SMGS, 공통 운송장, kg당 17 SDR, 기한, 제재와 보험", short: "중국–유럽 철도와 철도 운송장", summary: "러시아 경유 북부 통로·몽골 경유·중부회랑과 1,435mm·1,520mm 궤간 환적 지점, OTIF의 CIM과 OSJD의 SMGS가 적용되는 범위, CIM/SMGS 공통 운송장과 재발송 지점에서 계약이 바뀌는 구조, 운송장 기재 책임과 운임 5배 위약금, 처분권, CIM kg당 17 SDR과 SMGS 가액 배상, 사고 기록서와 7일·3일·9개월·1년 기한, RID와 SMGS 부속서 2, ICS2 철도 ENS와 통과운송, 2022년 이후 EU 제재와 보험 조항, 한국 포워더가 철도를 쓰는 방식과 해상·철도·항공 비교를 정리합니다." }
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
    { title: "B/L·AWB 기초", sub: "B/L 기초(AWB 비교표 포함) · AWB 기초", docs: ["bl-basics", "awb-basics"] },
    { title: "화물 인도와 특수 서류", sub: "화물 인도 실무 · 특수 B/L과 전자화 · 복합운송과 책임 구간 · 유럽 트럭 운송(CMR) · 운임 미수와 유치권 · 중국–유럽 철도(CIM·SMGS)", docs: ["bl-release", "bl-lien", "bl-special", "bl-multimodal", "bl-cmr", "bl-rail"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "중국–유럽 철도로 보내면 책임과 서류는요", ids: ["bl-rail"] },
    { name: "운임을 못 받았는데 화물을 잡아도 되나요", ids: ["bl-lien"] },
    { name: "B/L과 AWB는 뭐가 다른가요", ids: ["bl-basics", "awb-basics"] },
    { name: "신용장 거래인데 AWB 수하인은 누구로?", ids: ["awb-basics", "bl-release"] },
    { name: "서렌더 해 달라는데 뭘 하면 되나요", ids: ["bl-release"] },
    { name: "원본 B/L 없이 화물을 내줘도 되나요", ids: ["bl-release"] },
    { name: "House B/L을 발행하면 책임은?", ids: ["bl-basics", "bl-multimodal"] },
    { name: "Switch B/L·선적일 변경 요청을 받았어요", ids: ["bl-special"] },
    { name: "전자 B/L과 e-AWB는 어디까지 왔나요", ids: ["bl-special", "awb-basics"] },
    { name: "문 앞까지 맡았는데 사고가 났어요", ids: ["bl-multimodal"] },
    { name: "유럽에서 트럭으로 국경을 넘는데 책임은?", ids: ["bl-cmr"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>B/L과 AWB, 같은 운송서류인데 왜 다르게 움직이나</h2><p>해상의 선하증권(B/L)은 화물을 대신하는 권리증권이라 원본이 있어야 화물을 받지만, 항공화물운송장(AWB)은 화물과 함께 움직이는 비유통 서류라 수하인이 바로 받습니다. 1장은 두 서류의 기초와 비교표, 2장은 서렌더·보증도 같은 화물 인도와 Switch B/L·전자 B/L, 복합운송의 책임 구간, 유럽 트럭 운송의 CMR 운송장을 다룹니다. 한국·해외 판례 22건은 사고 사례 모음에 따로 모았습니다.</p><a class="lib-summary-button" href="${link('bl-basics')}#s9">B/L과 AWB 비교표부터 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('상법·몬트리올 협약·헤이그-비스비 규칙 등 법령과 협약, 판례, IATA·DCSA·은행의 공개 자료를 바탕으로 정리했습니다. UCP 600 본문은 싣지 않고 요약했습니다. 법률 자문이 아니며, 실제 분쟁은 계약 조건과 법원의 판단에 따릅니다. 해설은 AI가 작성했으며 법률 전문가가 검토한 것이 아닙니다.')}</p></div></div></div>
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
    const head = `<nav class="lib-crumb"><a href="${home}">← B/L · AWB</a></nav>`;
    const title = `<span class="lib-doc-head"><span class="lib-tag">${esc(doc.tag)}</span>${levelBadge(doc)}</span><h1 class="lib-doc-title">${esc(doc.title)}</h1><p class="lib-checked">자료 확인 ${doc.checked || CHECKED} · 법령과 업계 표준은 바뀔 수 있으니 실제 업무는 최신 운송약관과 법령을 확인하세요.</p>`;
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
    // 합친 문서의 예전 주소(비교표는 B/L 기초 9절로 옮김)
    const MOVED = { 'bl-vs-awb': 'bl-basics' };
    const MOVED_HASH = { 'bl-vs-awb': '#s9' };
    const id = MOVED[raw] || raw;
    if (MOVED[raw]) history.replaceState(null, '', link(id) + (location.hash || MOVED_HASH[raw] || ''));
    const doc = byId(id);
    if (doc) {
      // tools/prerender.py가 미리 채운 같은 문서·같은 버전이면 다시 불러오지 않는다(깜박임 방지). 조각을 고쳐 DOCS_VERSION이 바뀌면 새로 불러온다.
      if (view.dataset.prerendered !== `${doc.id}@${DOCS_VERSION}`) renderDoc(view, doc);
      document.title = `${doc.title} · B/L · AWB · Logistics Library`;
      setCanonical(`${BASE}/${doc.id}`);
    } else {
      renderList(view);
      document.title = 'B/L·AWB 선하증권과 항공화물운송장 비교 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
