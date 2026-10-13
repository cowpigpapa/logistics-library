// 사이트 화면(메인과 자료실 페이지 공통): 왼쪽 색인에서 고른 것을 오른쪽에 보여 준다.
// 주소마다 정적 페이지가 있고(tools/build_home.py, tools/prerender.py), 그 페이지의 #liView가 오른쪽 화면 내용이다.
//   /                       첫 화면(카테고리 소개)
//   /library/<slug>         개요 및 원문(카드 설명·그림 + 설명 및 요약 + 원문과 공식 자료)
//   /library/<slug>/<id>    문서
// 도구(/tool/<name>)는 왼쪽 색인 없는 따로 된 페이지다(머리줄 메뉴 Tracking·UN No.).
// 화면을 옮길 때는 페이지를 새로 열지 않고 그 주소의 정적 페이지를 받아 #liView만 바꾼다(history API).
(function () {
  const DATA = window.LIB_INDEX || [];
  const $ = id => document.getElementById(id);
  const tree = $('liTree'), view = $('liView'), side = $('liSide');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const OPEN_KEY = 'logisticsLibrary.index.open';
  const store = {
    get() { try { return JSON.parse(sessionStorage.getItem(OPEN_KEY) || '[]'); } catch (_) { return []; } },
    set(v) { try { sessionStorage.setItem(OPEN_KEY, JSON.stringify(v)); } catch (_) {} }
  };
  let fromTree = false;              // 색인 안에서 누른 이동이면 색인을 굴리지 않는다
  let allOpen = false;               // '모두 펼치기' 뒤에는 여러 카테고리를 함께 펼쳐 둔다
  let seq = 0;                       // 늦게 도착한 응답이 화면을 덮지 않게
  const cache = new Map();           // 주소 -> {html, title} (한 번 받은 화면은 다시 받지 않는다)
  cache.set(view.dataset.route || location.pathname, { html: view.innerHTML, title: document.title });

  // 분류 번호(1 규정, 2 실무, 3 도구)와 분류 줄(카테고리 이름 옆 'IMO · ILO · UNECE' 등)
  const cats = {};
  DATA.forEach(g => g.cats.forEach(c => { cats[c.slug] = c; }));

  // 주소 → 화면 종류
  function parse(path) {
    const p = path.replace(/\/+$/, '') || '/';
    const m = p.match(/^\/library\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/);
    if (m && cats[m[1]] && (!m[2] || cats[m[1]].docs[m[2]])) return { kind: m[2] ? 'doc' : 'overview', slug: m[1], id: m[2] || null, path: p };
    if (p === '/' || p === '/index.html') return { kind: 'home', path: '/' };
    return null;
  }

  // ---------------------------------------------------------------- 색인
  function renderTree() {
    // 지금 보는 카테고리만 펼친다('모두 펼치기' 뒤에는 펼쳐 둔 것을 그대로).
    const saved = store.get(), cur = parse(location.pathname);
    const open = new Set(cur && cur.slug && saved.length <= 1 ? [cur.slug] : saved);
    if (cur && cur.slug) open.add(cur.slug);
    tree.innerHTML = DATA.map(g => `<div class="li-group"><p class="li-group-name">${esc(g.group)}</p>${g.cats.map(c => `
      <div class="li-cat-wrap">
      <a class="li-ov" href="/library/${c.slug}" data-slug="${c.slug}" title="${esc(c.name)} 개요 및 원문">개요</a>
      <details class="li-cat" data-slug="${c.slug}" ${open.has(c.slug) ? 'open' : ''}>
        <summary><span class="li-cat-name">${esc(c.name)}</span><span class="li-count">${c.sections.reduce((n, s) => n + s.docs.length, 0)}</span></summary>
        ${c.sections.map(s => `<div class="li-sec"><p class="li-sec-name">${esc(s.title)}</p><ul>${s.docs.map(id => {
          const d = c.docs[id];
          return `<li><a href="/library/${c.slug}/${id}" data-slug="${c.slug}" data-id="${id}" title="${esc(d.title)}">${esc(d.short || d.title.split(' — ')[0])}</a></li>`;
        }).join('')}</ul></div>`).join('')}
      </details>
      </div>`).join('')}</div>`).join('');
  }
  function remember() { store.set([...tree.querySelectorAll('.li-cat[open]')].map(d => d.dataset.slug)); }
  function closeOthers(keep) {
    if (allOpen) return;
    tree.querySelectorAll('.li-cat[open]').forEach(d => { if (d !== keep) d.open = false; });
  }
  tree.addEventListener('toggle', e => {
    const d = e.target;
    // 검색으로 여러 카테고리를 펼친 동안에는 다른 카테고리를 접지 않는다.
    if (d.classList && d.classList.contains('li-cat') && d.open && !$('liFilter').value.trim()) closeOthers(d);
    remember();
  }, true);

  function markActive(r) {
    tree.querySelectorAll('a.is-active').forEach(a => a.classList.remove('is-active'));
    if (!r || r.kind === 'home') return;
    const a = tree.querySelector(r.id ? `a[data-slug="${r.slug}"][data-id="${r.id}"]` : `a.li-ov[data-slug="${r.slug}"]`);
    if (!a) return;
    a.classList.add('is-active');
    const wrap = a.closest('.li-cat-wrap');
    const cat = a.closest('.li-cat') || (wrap && wrap.querySelector('.li-cat'));
    if (cat && !cat.open) { cat.open = true; closeOthers(cat); remember(); }
    if (fromTree) { fromTree = false; return; }
    // 주소로 바로 들어왔거나 본문 링크로 옮겨 갔을 때만 고른 줄이 보이게 색인 상자 안에서 굴린다.
    const box = tree.getBoundingClientRect(), rr = a.getBoundingClientRect();
    if (rr.top < box.top || rr.bottom > box.bottom) tree.scrollTop += rr.top - box.top - box.height / 3;
  }

  // ---------------------------------------------------------------- 오른쪽 화면
  async function fetchView(path) {
    if (cache.has(path)) return cache.get(path);
    const res = await fetch(path === '/' ? '/' : path);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    const v = doc.getElementById('liView');
    if (!v) throw new Error('본문 없음');
    const out = { html: v.innerHTML, title: doc.title };
    cache.set(path, out);
    return out;
  }

  async function show(r, opts = {}) {
    const my = ++seq;
    markActive(r);
    view.classList.add('is-loading');
    try {
      const out = await fetchView(r.path);
      if (my !== seq) return;
      view.innerHTML = out.html;
      view.dataset.route = r.path;
      document.title = out.title;
      afterRender(opts);
      // 화면 낭독기·키보드 사용자를 새 화면의 제목으로 옮긴다(화면은 굴리지 않음).
      const h = view.querySelector('h1');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    } catch (e) {
      if (my !== seq) return;
      location.href = r.path;   // 받지 못하면 그 페이지를 그냥 연다
    } finally {
      if (my === seq) view.classList.remove('is-loading');
    }
  }

  // 화면을 바꾼 뒤: 검색어 표시, 굴림 위치
  function afterRender(opts) {
    const q = $('liFilter').value.trim();
    if (q.length >= 2 && view.querySelector('.lib-article')) highlight(q);
    if (opts.scroll != null) window.scrollTo({ top: opts.scroll });
    else if (location.hash) { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView(); else window.scrollTo({ top: 0 }); }
    else {
      const first = q.length >= 2 && view.querySelector('mark.li-hit');
      if (first) first.scrollIntoView({ block: 'center' }); else window.scrollTo({ top: 0 });
    }
  }


  // 주소 옮기기
  function go(path, hash) {
    const r = parse(path);
    if (!r) { location.href = path + (hash || ''); return; }
    try { history.replaceState({ ...(history.state || {}), scroll: window.scrollY }, ''); } catch (_) {}
    // 받는 중에 같은 링크를 또 눌러도 방문 기록은 한 번만 쌓는다.
    if (r.path !== location.pathname || hash) history.pushState({ scroll: 0 }, '', r.path + (hash || ''));
    show(r);
  }
  window.addEventListener('popstate', e => {
    const r = parse(location.pathname);
    if (!r) { location.reload(); return; }
    if (r.path === view.dataset.route) return;   // 같은 화면 안의 목차(#) 이동
    show(r, { scroll: (e.state && e.state.scroll) || 0 });
  });

  // ---------------------------------------------------------------- 링크 처리
  // 사이트 안 링크(색인·본문·카드)는 페이지를 새로 열지 않고 이 화면에서 연다. 목차(#s1 등)는 본문 안에서 굴린다.
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
    const inSide = tree.contains(a) || (typeof results !== 'undefined' && results.contains(a));
    if (!view.contains(a) && !inSide && !(a.closest('.topbar') && a.getAttribute('href') === '/')) return;
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      if (!view.contains(a)) return;
      const target = href.length > 1 && document.getElementById(decodeURIComponent(href.slice(1)));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      return;
    }
    let url;
    try { url = new URL(href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin) return;
    const path = url.pathname;
    if (!parse(path)) return;
    e.preventDefault();
    if (inSide) {
      fromTree = tree.contains(a);
      setSide(false);
    }
    if (parse(path).path === view.dataset.route && !url.hash) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    go(path, url.hash);
  });
  // 카테고리 줄의 '개요' 버튼
  tree.addEventListener('click', e => {
    const a = e.target.closest('.li-ov');
    if (!a) return;
    const cat = a.closest('.li-cat-wrap').querySelector('.li-cat');
    // 이미 그 개요를 보고 있으면 아무것도 바꾸지 않고 맨 위로만 간다(색인을 접으면 잘못 누른 것처럼 보인다).
    if (view.dataset.route === '/library/' + a.dataset.slug) { e.preventDefault(); e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (!cat.open) { cat.open = true; closeOthers(cat); remember(); }
  }, true);

  // 좁은 화면: 화면 폭에 맞춰 줄인 도해(SVG)를 누르면 원래 크기로 크게 본다(옆으로 밀어 보기).
  view.addEventListener('click', e => {
    const wrap = e.target.closest('.uld-diagram .uld-svg-wrap');
    if (!wrap || !window.matchMedia('(max-width: 640px)').matches || e.target.closest('a')) return;
    const svg = wrap.querySelector('svg');
    if (!svg) return;
    const cap = wrap.closest('.uld-diagram').querySelector('figcaption');
    const box = document.createElement('div');
    box.className = 'li-zoom';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = `<div class="li-zoom-bar"><span>옆으로 밀어 보세요</span><button type="button">닫기</button></div><div class="li-zoom-body"></div>`;
    box.querySelector('.li-zoom-body').append(svg.cloneNode(true));
    if (cap) { const p = document.createElement('p'); p.style.cssText = 'color:#dfe7ef;font-size:12.5px;line-height:1.6;margin:10px 2px 0;max-width:760px'; p.textContent = cap.textContent; box.querySelector('.li-zoom-body').append(p); }
    const close = () => { box.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = ev => { if (ev.key === 'Escape') close(); };
    box.querySelector('button').addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    document.body.append(box);
    box.querySelector('button').focus();
  });

  // 좁은 화면: 목차 버튼으로 색인을 열고 닫는다.
  const setSide = open => {
    document.body.classList.toggle('li-side-open', open);
    $('liToggle').setAttribute('aria-expanded', String(open));
    $('liToggle').textContent = open ? '닫기' : '목차';
  };
  $('liToggle').addEventListener('click', () => setSide(!document.body.classList.contains('li-side-open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('li-side-open')) setSide(false); });

  // ---------------------------------------------------------------- 찾기(제목·요약·태그 + 본문, 비슷한 말, 관련도 순)
  // 검색어가 있으면 색인 자리에 관련도 순 결과 목록을 보여 주고, 지우면 색인으로 돌아간다.
  // 본문 글자는 두 글자 이상 처음 찾을 때 한 번만 받는다(search-index.json + search-index-2.json(EU 배터리 번역), tools/prerender.py가 만든다).
  let SEARCH = null, searchLoading = null;
  function loadSearch() {
    if (searchLoading) return searchLoading;
    SEARCH = {};
    const part = url => fetch(url).then(r => r.json()).then(list => {
      list.forEach(d => { SEARCH[d.u] = d.b; });
      if ($('liFilter').value.trim()) applyFilter();
    }).catch(() => {});
    searchLoading = Promise.all([part('/search-index.json'), part('/search-index-2.json')]);
    return searchLoading;
  }

  // 비슷한 말: 한 묶음 안의 말은 서로 함께 찾는다(띄어쓰기·대소문자는 무시). 용어 기준은 tools/STYLE.md.
  const SYNONYMS = [
    ['고박', '고정', 'lashing', '래싱', 'securing'], ['고박점', '고정점', 'lashing point', 'securing point'],
    ['Demurrage', 'DEM', '디머리지', '체화료'], ['Detention', 'DET', '디텐션', '지체료'], ['D&D', 'DEM/DET', 'DND'],
    ['free time', '프리 타임', '무료 장치 기간', '무료 기간'], ['보상장', 'LOI', 'Letter of Indemnity', '면책각서'], ['L/G', '수입화물선취보증서', 'Letter of Guarantee'],
    ['화물인도지시서', 'D/O', 'delivery order'], ['해상화물운송장', 'SWB', 'sea waybill'], ['서렌더', 'surrender'], ['기기인수도증', 'EIR'],
    ['CFS', '컨테이너 화물조작장'], ['규격 초과', 'OOG', 'out of gauge'], ['화물고박지침서', 'CSM', 'cargo securing manual'], ['정식운송품명', 'PSN', 'proper shipping name'],
    ['특별인출권', 'SDR'], ['무선박운송인', 'NVOCC'], ['습식 얼음', 'wet ice', '웻 아이스'], ['드라이아이스', 'dry ice'], ['컨투어', 'contour'],
    ['도난·발하·불착', 'TPND'], ['협회적하약관', 'ICC(A)', 'Institute Cargo Clauses'], ['상변화물질', 'PCM'], ['냉해', '저온장해', 'chilling injury'],
    ['중량·평형', 'weight and balance', '무게중심'], ['운항자', '운항사', 'operator'], ['혼적', '혼재', 'consolidation'], ['온도 일탈', '온도 이탈', 'temperature excursion'],
    ['드라이 컨테이너', 'dry container', '건화물'], ['냉동 컨테이너', '리퍼', 'reefer', '냉장 컨테이너'], ['샤시', '섀시', 'chassis'],
    ['위험물', 'DG', 'dangerous goods', 'hazmat'], ['UN 번호', 'UN number', 'UN No'], ['MSDS', 'SDS', '물질안전보건자료'],
    ['LQ', '한정수량', 'limited quantity'], ['IMDG', 'IMDG Code', '국제해상위험물규칙'], ['DGR', 'IATA DGR', '항공위험물규정'], ['EmS', '비상조치표'],
    ['선하증권', 'B/L', 'bill of lading'], ['항공화물운송장', 'AWB', 'air waybill'], ['House B/L', '하우스 B/L', 'HBL'], ['Master B/L', '마스터 B/L', 'MBL'],
    ['ULD', '단위탑재용기', 'unit load device'], ['적하보험', 'cargo insurance', '화물보험'], ['공동해손', 'general average'],
    ['인코텀스', 'Incoterms', '인코텀즈'], ['FOB', '본선인도'], ['CIF', '운임보험료포함인도'], ['EXW', '공장인도'], ['DDP', '관세지급인도'],
    ['CTU', '화물운송단위', 'cargo transport unit'], ['컨테이너 번호', 'container number'], ['체크 디지트', 'check digit'],
    ['THC', '터미널 화물 처리비', 'terminal handling charge'], ['보관료', 'storage'], ['종가료', 'ad valorem'],
    ['리튬 배터리', 'lithium battery', '리튬이온 배터리'], ['온도유지', '콜드체인', 'cold chain', '온도관리'],
    ['VGM', '검증된 총중량', '컨테이너 총중량 검증제도', 'verified gross mass'], ['CSC', 'CSC 명판', 'CSC plate'], ['결로', 'condensation', '컨테이너 비'],
    ['무게중심', 'center of gravity', 'COG'], ['포워더', '운송주선인', 'freight forwarder'], ['송하인', 'shipper'], ['수하인', 'consignee'],
    ['PTI', 'pre-trip inspection', '사전 점검'], ['젠셋', 'genset'], ['씰', 'seal', '봉인'], ['책임 한도', 'liability limit', '책임제한'],
  ];
  const squash = s => s.toLowerCase().replace(/\s+/g, '');
  const SYN = new Map();
  SYNONYMS.forEach(g => g.forEach(w => { const k = squash(w); SYN.set(k, [...new Set([...(SYN.get(k) || []), ...g.filter(x => squash(x) !== k)])]); }));
  // 띄어쓰기를 무시하는 정규식(냉동컨테이너 = 냉동 컨테이너)
  const pattern = w => new RegExp([...w.replace(/\s+/g, '')].map(c => c.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&')).join('\\s*'), 'gi');
  // 끝에 붙은 조사는 떼고도 찾는다(고박점을 → 고박점).
  const PARTICLE = /(으로|에서|에게|까지|부터|이나|이란|란|을|를|이|가|은|는|의|에|로|와|과|도|만)$/;
  function terms(raw) {
    const out = [{ word: raw, re: pattern(raw), weight: 1 }];
    const stem = raw.length >= 3 && /[가-힣]$/.test(raw) ? raw.replace(PARTICLE, '') : raw;
    if (stem !== raw && stem.length >= 2) out.push({ word: stem, re: pattern(stem), weight: 0.95 });
    const syn = new Set([...(SYN.get(squash(raw)) || []), ...(SYN.get(squash(stem)) || [])]);
    syn.forEach(w => out.push({ word: w, re: pattern(w), weight: 0.7 }));
    return out;
  }
  const count = (text, re) => { re.lastIndex = 0; const m = text.match(re); return m ? m.length : 0; };
  const has = (text, re) => { re.lastIndex = 0; return re.test(text); };
  function snippet(text, re) {
    re.lastIndex = 0;
    const m = re.exec(text);
    if (!m) return '';
    const i = m.index, j = i + m[0].length, a = Math.max(0, i - 30), b = Math.min(text.length, j + 44);
    return (a > 0 ? '…' : '') + esc(text.slice(a, i)) + '<b>' + esc(m[0]) + '</b>' + esc(text.slice(j, b)) + (b < text.length ? '…' : '');
  }

  // 문서마다 점수: 제목 30 · 짧은 제목 10 · 태그 8 · 요약 6 · 본문 횟수(로그) 최대 20. 비슷한 말은 0.7배.
  function rank(raw) {
    const ts = terms(raw), out = [];
    let order = 0;
    DATA.forEach(g => g.cats.forEach(c => {
      c.sections.forEach(s => s.docs.forEach(id => {
        const d = c.docs[id], url = `/library/${c.slug}/${id}`, body = SEARCH && SEARCH[url];
        let score = 0, n = 0, snip = '';
        ts.forEach(t => {
          let sc = 0;
          if (has(d.title, t.re)) sc += 30;
          if (d.short && has(d.short, t.re)) sc += 10;
          if (d.tag && has(d.tag, t.re)) sc += 8;
          if (d.summary && has(d.summary, t.re)) sc += 6;
          const k = body ? count(body, t.re) : 0;
          if (k) { sc += Math.min(20, 4 * Math.log2(1 + k)); n += k; if (!snip) snip = snippet(body, t.re); }
          score += sc * t.weight;
        });
        if (score > 0) out.push({ c, id, d, url, score, n, snip: snip || (d.summary ? snippet(d.summary, ts[0].re) || esc(d.summary.slice(0, 80)) + '…' : ''), order: order++ });
        else order++;
      }));
    }));
    out.sort((x, y) => y.score - x.score || x.order - y.order);
    const catsHit = [];
    DATA.forEach(g => g.cats.forEach(c => { if (ts.some(t => has(c.name, t.re) || has(c.sub || '', t.re))) catsHit.push(c); }));
    return { list: out, cats: catsHit, words: ts.filter(t => t.weight < 0.9).map(t => t.word) };
  }

  const results = document.createElement('div');
  results.className = 'li-results';
  results.id = 'liResults';
  results.hidden = true;
  results.setAttribute('aria-live', 'polite');
  tree.before(results);
  const LIMIT = 40;
  function applyFilter() {
    const raw = $('liFilter').value.trim();
    if (!raw) { results.hidden = true; tree.hidden = false; results.innerHTML = ''; clearHighlight(); fitSide(); return; }
    if (raw.length >= 2) loadSearch();
    const r = rank(raw);
    const loading = raw.length >= 2 && !(SEARCH && Object.keys(SEARCH).length > 60);
    results.innerHTML = `<p class="li-res-head"><b>${r.list.length}</b>건${loading ? ' · 본문 자료를 받는 중…' : ''}${r.words.length ? `<span>함께 찾은 말: ${r.words.map(esc).join(', ')}</span>` : ''}</p>`
      + r.cats.map(c => `<a class="li-res li-res-cat" href="/library/${c.slug}"><b>${esc(c.name)}</b><small>개요 및 원문 · ${esc(c.sub || '')}</small></a>`).join('')
      + r.list.slice(0, LIMIT).map(x => `<a class="li-res" href="${x.url}"${x.url === view.dataset.route ? ' aria-current="page"' : ''}><b>${esc(x.d.short || x.d.title.split(' — ')[0])}</b><small>${esc(x.c.name)}${x.n ? ` · 본문 ${x.n}곳` : ''}</small>${x.snip ? `<span class="li-snip">${x.snip}</span>` : ''}</a>`).join('')
      + (r.list.length > LIMIT ? `<p class="li-res-more">관련도가 높은 ${LIMIT}건만 보여 줍니다. 검색어를 더 구체적으로 넣어 보세요.</p>` : '')
      + (!r.list.length && !r.cats.length && !loading ? `<p class="li-empty">'${esc(raw)}'와 일치하는 문서가 없습니다.</p>` : '');
    results.hidden = false;
    tree.hidden = true;
    fitSide();
    if (raw.length >= 2 && view.querySelector('.lib-article')) highlight(raw);
  }
  let filterTimer = 0;
  $('liFilter').addEventListener('input', () => { clearTimeout(filterTimer); filterTimer = setTimeout(applyFilter, 180); });
  $('liFilter').addEventListener('keydown', e => { if (e.key === 'Escape') { e.target.value = ''; applyFilter(); } });

  // 열린 문서 안에서 찾는 말(비슷한 말 포함) 표시
  function clearHighlight() {
    const marks = view.querySelectorAll('mark.li-hit');
    if (!marks.length) return;
    marks.forEach(m => m.replaceWith(document.createTextNode(m.textContent)));
    view.normalize();
  }
  function highlight(raw) {
    clearHighlight();
    const re = new RegExp(terms(raw).map(t => t.re.source).join('|'), 'gi');
    const walker = document.createTreeWalker(view.querySelector('.lib-article') || view, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('script, style, svg, mark') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const nodes = [];
    while (walker.nextNode()) if (has(walker.currentNode.nodeValue, re)) nodes.push(walker.currentNode);
    nodes.slice(0, 300).forEach(node => {
      const text = node.nodeValue, frag = document.createDocumentFragment();
      let i = 0, m;
      re.lastIndex = 0;
      while ((m = re.exec(text))) {
        if (!m[0]) { re.lastIndex++; continue; }
        frag.append(text.slice(i, m.index));
        const mk = document.createElement('mark'); mk.className = 'li-hit'; mk.textContent = m[0]; frag.append(mk);
        i = m.index + m[0].length;
      }
      frag.append(text.slice(i));
      node.replaceWith(frag);
    });
  }

  $('liOpenAll').addEventListener('click', () => { allOpen = true; tree.querySelectorAll('.li-cat').forEach(d => (d.open = true)); remember(); });
  $('liCloseAll').addEventListener('click', () => { allOpen = false; tree.querySelectorAll('.li-cat').forEach(d => (d.open = false)); remember(); });

  // 색인 상자 높이를 화면에 맞춘다(색인만 따로 스크롤된다).
  function fitSide() {
    if (window.matchMedia('(max-width: 900px)').matches) { tree.style.maxHeight = ''; if (typeof results !== 'undefined') results.style.maxHeight = ''; return; }
    const head = side.querySelector('.li-side-head').getBoundingClientRect().height;
    const foot = document.querySelector('.site-footer');
    const footH = foot ? foot.getBoundingClientRect().height : 0;
    // 색인 위 68px(머리줄+여백) + 색인 머리 + 색인 + 아래 여백 + 푸터가 화면 안에 들어가야 맨 아래까지 내려도 색인이 밀려 올라가지 않는다.
    tree.style.maxHeight = Math.max(240, window.innerHeight - 68 - head - 2 - 16 - footH) + 'px';
    if (typeof results !== 'undefined') results.style.maxHeight = tree.style.maxHeight;
  }
  window.addEventListener('resize', fitSide);

  // ---------------------------------------------------------------- 시작
  // 예전 주소(#ctu-code, #ctu-code/a2-handling, #tool/airtracking, /library/ctu-code#a2-handling)는 새 주소로 바꾼다.
  (function legacy() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (!h) return;
    const here = parse(location.pathname);
    let target = null;
    if (here && here.kind === 'home') {
      const [a, b] = h.split('/');
      if (a === 'tool' && b) { location.replace('/tool/' + b); return; }
      if (cats[a]) target = b && b !== 'overview' && cats[a].docs[b] ? `/library/${a}/${b}` : `/library/${a}`;
    } else if (here && here.kind === 'overview' && cats[here.slug].docs[h]) target = `/library/${here.slug}/${h}`;
    if (target) { history.replaceState(null, '', target); }
  })();

  if (!tree.querySelector('.li-cat')) renderTree();   // 정적 페이지에 미리 그려 둔 색인이 있으면 그대로 쓴다
  allOpen = tree.querySelectorAll('.li-cat[open]').length > 1;
  fitSide();
  const start = parse(location.pathname);
  try { history.replaceState({ scroll: window.scrollY }, ''); } catch (_) {}
  if (start && start.path !== (view.dataset.route || '/')) show(start);   // 예전 주소
  else markActive(start);
})();
