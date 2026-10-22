// Dangerous Goods 메뉴(/library/dangerous-goods): 4장 — 국제·국내 규칙, 화물 확인과 표시, 교육과 제재, 사례(국내·해외 사고·판결·단속).
// 분류 판정·포장 방법·신고서 작성 자체는 다루지 않는다. 해설은 AI가 법령과 공개 자료를 읽고
// 작성했으며 문단·사례마다 바로 아래 출처를 둔다. 본문은 /dg-docs/<id>.html 조각을 문서를 열 때 불러온다.
// 주소 /library/dangerous-goods/<id>로 문서 하나를 연다(정적 서버 미리보기에서는 ?doc=<id>).
(function () {
  const LIBRARY_ORIGIN = 'https://logistics.onharu.app';
  const BASE = '/library/dangerous-goods';
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
    { title: "항공안전법 · 항공위험물운송기술기준", org: "국토교통부", kind: "법률 · 고시", note: "항공 위험물 운송과 교육의 국내 근거. ICAO 기술지침을 국내에 옮긴 고시입니다.", url: "https://www.law.go.kr/법령/항공안전법" },
    { title: "선박안전법 · 위험물 선박운송 및 저장규칙", org: "해양수산부", kind: "법률 · 부령", note: "해상 위험물 운송과 교육의 국내 근거. IMDG Code를 받아들입니다.", url: "https://www.law.go.kr/법령/선박안전법" },
    { title: "위험물안전관리법", org: "소방청", kind: "법률", note: "국내 저장·취급·운반의 기준. 제1류~제6류와 지정수량을 정합니다.", url: "https://www.law.go.kr/법령/위험물안전관리법" },
    { title: "화학물질관리법", org: "기후에너지환경부", kind: "법률", note: "유해화학물질의 영업허가·신고와 취급 기준, 안전교육을 정합니다.", url: "https://www.law.go.kr/법령/화학물질관리법" },
    { title: "UN 위험물 운송 권고(모델 규정) Rev.24", org: "UNECE", kind: "국제 권고", note: "항공·해상·도로·철도 위험물 규칙의 바탕이 되는 UN 권고입니다. 2025년에 나온 제24개정판이며 전자판을 무료로 열람할 수 있습니다.", url: "https://unece.org/transport/dangerous-goods/un-model-regulations-rev-24" },
    { title: "ICAO 위험물 안전운송 기술지침(Doc 9284)", org: "ICAO", kind: "국제 기술규칙", note: "시카고협약 부속서 18에 따른 항공 위험물 규칙. IATA DGR의 바탕입니다.", url: "https://www.icao.int/Dangerous-Goods/Technical-Instructions" },
    { title: "IMDG Code", org: "IMO", kind: "국제 기술규칙", note: "SOLAS 제VII장에 따라 의무인 해상 위험물 규칙입니다.", url: "https://www.imo.org/en/OurWork/Safety/Pages/DangerousGoods-default.aspx" },
    { title: "ADR", org: "UNECE", kind: "국제 협정", note: "유럽 중심의 도로 위험물 운송 협정. 한국은 당사국이 아닙니다.", url: "https://unece.org/adr-2025-files" },
    { title: "국가위험물통합정보시스템", org: "소방청", kind: "조회 도구", note: "물질명·CAS 번호·UN 번호로 위험물안전관리법상 위험물 정보를 찾습니다. 유별 품명과 지정수량표, 위험물 실무해설서도 볼 수 있습니다.", url: "https://hazmat.nfa.go.kr/" },
    { title: "화학물질 분류정보(화학물질종합정보시스템)", org: "화학물질안전원", kind: "조회 도구", note: "물질명·CAS 번호·UN 번호로 인체등유해성물질·사고대비물질·제한·금지·허가물질 지정 여부를 확인합니다. 결과는 참고용입니다.", url: "https://icis.mcee.go.kr/chmClsCl/chmClsClList.do" },
    { title: "MSDS 검색", org: "안전보건공단", kind: "조회 도구", note: "공단이 화학물질별로 작성한 MSDS입니다. 공단은 작성·검토 때 참고용이라고 밝히며, 화주가 내는 제품 MSDS를 대신하지 않습니다.", url: "https://msds.kosha.or.kr/MSDSInfo/kcic/msdssearchMsds.do" },
    { title: "초록누리", org: "기후에너지환경부", kind: "조회 도구", note: "안전확인대상생활화학제품 신고·승인, 살생물제품 승인, 위반제품을 제품명이나 신고번호로 조회합니다.", url: "https://ecolife.mcee.go.kr/ecolife/main" },
    { title: "화학물질정보처리시스템(K-REACH) 화학물질 통합검색", org: "기후에너지환경부", kind: "조회 도구", note: "화평법 등록·신고 시스템의 공개 검색입니다. 로그인 없이 CAS 번호나 물질명으로 인체등유해성물질·제한·금지물질 등을 찾습니다.", url: "https://kreach.mcee.go.kr/repwrt/mttr/kr/mttrList.do" },
    { title: "PubChem", org: "미국 국립보건원(NIH) 국립의학도서관", kind: "조회 도구", note: "물질명·CAS 번호로 동의어와 안전·독성 정보를 영문으로 찾는 무료 화학물질 데이터베이스입니다.", url: "https://pubchem.ncbi.nlm.nih.gov/" },
    { title: "ECHA CHEM", org: "유럽화학물질청(ECHA)", kind: "조회 도구", note: "ECHA의 공개 화학물질 데이터베이스입니다. EU REACH 등록 정보, 분류·표시(C&L) 목록, 규제 목록을 영문으로 봅니다.", url: "https://chem.echa.europa.eu/" }
  ];
  // 문서 목록. level: 3 포워더 필수, 2 담당자 확인, 없으면 참고.
  const DOCS = [
    { id: 'dg-rules', tag: "국제 규칙", level: 3, title: "국제 위험물 운송 규칙 한눈에 — UN 권고에서 IATA·IMDG·ADR까지, 한국 법령과의 연결", short: "국제 위험물 운송 규칙", summary: "UN 권고에서 ICAO·IATA·IMDG·ADR·RID·49 CFR까지 누가 만든 어떤 성격의 규칙인지와 현행판, 시카고협약·SOLAS·MARPOL이 항공안전법·선박안전법으로 이어지는 경로, 조약 없이 국내법이 맡는 도로·철도를 정리했습니다." },
    { id: 'kr-system', tag: "법체계", level: 3, title: "국내 위험물 법체계 — 위험물안전관리법·화학물질관리법과 UN 분류의 관계", short: "국내 위험물 법체계", summary: "위험물안전관리법·화관법·고압가스법 등 부처별로 나뉜 국내법의 규제 대상과 행위, UN 9개 등급·제1~6류·인화점 기준 대응표, 같은 화물이 구간마다 다른 기준을 만나는 구조." },
    { id: 'kr-small', tag: "소량 기준", level: 3, title: "소량 기준 — 지정수량 미만과 시·도 조례, 화관법의 규정수량", short: "국내 소량 기준(지정수량 미만)", summary: "지정수량과 배수 합산, 지정수량 미만에 적용되는 시·도 조례 4곳 비교, 화관법 규정수량 3단계, 국제 한정수량과 다른 점과 창고 점검표." },
    { id: 'kr-mismatch', tag: "기준 비교", level: 3, title: "국제 규칙과 국내법에서 다르게 취급되는 품목 — 윤활유·리튬배터리 등", short: "국제·국내 기준이 다른 품목", summary: "윤활유는 국내만, 리튬배터리는 국제만 위험물인 이유와 대표 15개 품목, 산·알칼리·비료·촉매·석유류 같은 원료·산업용 화학제품의 의심 품목표와 요약표." },
    { id: 'dg-msds', tag: "MSDS", level: 3, title: "MSDS(SDS) 읽는 법 — 포워더가 확인하는 항목과 운송 분류와의 관계", short: "MSDS(SDS) 읽는 법", summary: "14항을 1·3·9항과 대조하는 법, 9·14·15항으로 국제·국내 판단을 따로 읽는 순서, GHS 분류와 운송 분류의 차이, 위험 신호와 부킹 접수 점검표." },
    { id: 'dg-household', checked: '2026-10-20', tag: "생활용품", level: 3, title: "생활용품 속 위험물 — 국제 운송에서는 위험물인데 국내에서는 생활용품인 제품 목록", short: "생활용품 속 위험물", summary: "향수·스프레이·락스·라이터·부탄가스·보조배터리·드라이아이스·주류 등을 품명별로 '대개 위험물/조성에 따라/운송수단에 따라/대개 비위험물'로 나누고 UN 번호·LQ·특별규정, 국내 관리 제도, 받을 서류를 정리했습니다." },
    { id: 'dg-hidden', checked: '2026-10-19', tag: "숨은 위험물", level: 3, title: "숨은 위험물(Hidden DG) — 일반 화물 속 위험물을 서류와 반입 단계에서 걸러내기", short: "숨은 위험물 확인", summary: "'자동차 부품'·'전자제품'·'이삿짐' 같은 일반 품명 속 배터리·가스·인화성 액체를 포워더는 품명·HS 코드·SDS·확인서로, 창고·CFS 작업자는 외관 신호로 걸러내는 절차와 발견 뒤 보고·역할별 점검표." },
    { id: 'dg-lithium', checked: '2026-10-20', tag: "리튬배터리", level: 3, title: "리튬배터리 운송 — 해상·항공·철도에서 UN 번호, 포장, 표시, 서류가 어떻게 다른가", short: "리튬배터리 운송", summary: "UN 번호를 화학·형태·Wh로 고르는 법, 항공 PI 965~970과 2026년 SoC 30%, 해상·철도 SP 188과 P903, 손상·폐배터리, 국내 해상·항공 수출 절차, 보관·고온 관리와 역할별 점검표." },
    { id: 'dg-marks', checked: '2026-10-19', tag: "표시", level: 3, title: "위험물 표시와 표찰 — 국제 운송 라벨·마크·플래카드와 국내 경고 표시의 차이", short: "위험물 표시·표찰", summary: "포장물의 UN 번호·라벨·취급 마크, 컨테이너 표찰과 UN 번호 패널, 위험물안전관리법·화학물질관리법·산업안전보건법이 요구하는 국내 표시를 원문으로 비교하고, 어느 표시가 다른 표시를 대신할 수 있는지와 자주 하는 실수를 정리합니다." },
    { id: 'dg-forwarder', tag: "교육·제재", level: 3, title: "포워더의 위험물 교육 의무와 제재 — 누가 어떤 교육을 받고, 안 받으면 어떻게 되나", short: "포워더의 교육 의무와 제재", summary: "직무별 교육 대상, IATA·IMDG·ADR·49 CFR과 국내 각 법의 교육 대상·시간·주기, 상호 인정, 법령별 과태료·벌칙, 선사 벌과금·민사 책임과 점검표." },
    { id: 'case-kr-accident', tag: "국내 사고", level: 2, title: "국내 위험물 사고 사례 — 공장·창고·터널·항만·항공기에서 난 사고", short: "국내 위험물 사고 사례", summary: "아시아나 991편, 인천신항 컨테이너 폭발, 안성 물류창고, 화성 전지공장 등 국내 사고 9건을 조사보고서·보도로 확인해 원인과 교훈을 같은 형식으로 정리했습니다." },
    { id: 'case-accident', tag: "해외 사고", level: 2, title: "해외 위험물 사고 사례 — 항공기·컨테이너선·항만에서 난 사고", short: "해외 위험물 사고 사례", summary: "ValuJet 592편, UPS 6편, MSC Flaminia, 베이루트항, 몬트리올항 리튬배터리 화재 등 해외 사고 12건과 미신고·오신고 통계를 신고·분류·적입 실패 관점에서 정리했습니다." },
    { id: 'case-kr-litigation', tag: "국내 판결", level: 2, title: "국내 위험물 판결 사례 — 한국 법원은 누구에게 책임을 물었나", short: "국내 위험물 판결 사례", summary: "대법원·하급심 판결 9건을 상법·불법행위·형사책임 관점에서 정리하고 바탕 조문을 함께 모았습니다." },
    { id: 'case-litigation', tag: "해외 판결", level: 2, title: "해외 위험물 판결·처분 사례 — 화주·포워더·운송인 중 누가 책임졌나", short: "해외 위험물 판결·처분 사례", summary: "영국·미국·중국·스리랑카 판결 10건과 미국 FAA 처분 제안 1건으로 본 송하인 무과실 책임, NVOCC가 송하인으로 책임지는 구조, 교육 미실시 제재." },
    { id: 'case-inspection', tag: "국내 단속", level: 2, title: "국내 위험물 단속 사례 — 소방·특사경·환경청·국토교통부의 점검과 적발", short: "국내 위험물 단속 사례", summary: "소방·특사경·환경청·국토교통부·해양수산부의 적발과 항공사 접수 점검 적발 11건을 무허가 저장·조례·운반·유해화학물질·미신고·리튬 보관 유형별로 정리했습니다." }
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
    { title: "국제·국내 규칙", sub: "UN 권고·IATA·IMDG·ADR · 국내 법체계 · 소량 기준 · 국제와 국내가 다른 품목", docs: ["dg-rules", "kr-system", "kr-small", "kr-mismatch"] },
    { title: "화물 확인과 표시", sub: "MSDS 읽기 · 생활용품 · 숨은 위험물 · 리튬배터리 · 라벨과 표찰", docs: ["dg-msds", "dg-household", "dg-hidden", "dg-lithium", "dg-marks"] },
    { title: "교육과 제재", sub: "직무별 교육 대상 · 국제·국내 교육 요건 · 미이수·미신고 제재", docs: ["dg-forwarder"] },
    { title: "사례", sub: "국내·해외의 사고, 판결·처분, 단속", docs: ["case-kr-accident", "case-accident", "case-kr-litigation", "case-litigation", "case-inspection"] }
  ];
  // 질문으로 찾기: 법령 이름을 몰라도 궁금한 것에서 문서를 찾아가게 한다.
  const STAGES = [
    { name: "IATA·IMDG·ADR이 뭔가요", ids: ["dg-rules"] },
    { name: "국내법상 위험물은 어떻게 정하나요", ids: ["kr-system", "kr-small"] },
    { name: "수출 서류로는 위험물이 아닌데 창고에서는요", ids: ["kr-mismatch", "kr-small"] },
    { name: "향수·스프레이·보조배터리도 위험물인가요", ids: ["dg-household", "dg-lithium"] },
    { name: "가성소다·비료·촉매 같은 원료는요", ids: ["kr-mismatch", "dg-msds"] },
    { name: "화주가 준 MSDS, 어디를 봐야 하나요", ids: ["dg-msds"] },
    { name: "품명이 '부품'·'샘플'뿐이면 어떻게 걸러내나요", ids: ["dg-hidden"] },
    { name: "라벨·표찰은 무엇을 붙이나요", ids: ["dg-marks", "dg-lithium"] },
    { name: "우리 직원은 무슨 교육을 받아야 하나요", ids: ["dg-forwarder"] },
    { name: "교육·신고를 안 하면 어떻게 되나요", ids: ["dg-forwarder", "case-inspection"] },
    { name: "실제로 어떤 사고가 있었나요", ids: ["case-kr-accident", "case-accident"] },
    { name: "누가 책임졌나요(판결·처분)", ids: ["case-kr-litigation", "case-litigation", "case-inspection"] }
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
    view.innerHTML = `<div class="lib-head"><div class="lib-head-row"><div class="lib-intro-copy"><h2>위험물, 국제 규칙과 국내법을 나눠 본다</h2><p>같은 화물이 수출 서류에서는 위험물이 아닌데 국내 창고에서는 위험물일 수 있습니다. <b>국제 위험물</b>은 UN 권고를 뿌리로 항공(ICAO·IATA)·해상(IMDG)·도로(ADR)가 같은 9개 등급으로 정하고, <b>국내 위험물</b>은 위험물안전관리법·화학물질관리법·고압가스 안전관리법 등 부처별 법이 따로 정합니다. 이 자료는 먼저 국제 규칙과 국내법을 나눠 설명하고, 이어 MSDS·생활용품·숨은 위험물·리튬배터리·표시처럼 화물을 확인하는 법, 직원 교육과 제재를 다룬 뒤, 마지막 장에 국내·해외의 사고·판결·단속 사례를 모았습니다. 궁금한 것부터 찾으려면 아래 "질문으로 찾기"를 보십시오.</p><a class="lib-summary-button" href="${link('dg-rules')}">국제 위험물 운송 규칙 한눈에 →</a></div><div class="lib-notice"><b>이 자료의 범위와 출처</b><p>${lines('위험물 분류 판정, 포장 방법, 신고서 작성은 각 규칙의 최신판과 지정 교육기관의 교육에서 확인하세요. 리튬배터리·표시·숨은 위험물 문서는 실무에서 확인할 점을 요약한 것입니다. 해설은 AI가 법령과 공개 자료를 읽고 작성했으며 법률 자문이 아닙니다. 조문과 사례에는 바로 아래에 출처를 달았습니다. 법령은 개정될 수 있으니 실제 판단은 국가법령정보센터의 현행 조문과 관할 기관의 안내를 기준으로 하세요.')}</p></div></div></div>
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
      document.title = 'Dangerous Goods 국제·국내 위험물 · Logistics Library';
      setCanonical(BASE);
    }
  }
  show();
})();
