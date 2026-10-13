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
          return `<li><a href="/library/${c.slug}/${id}" data-slug="${c.slug}" data-id="${id}" title="${esc(d.title)}" data-s="${esc((d.tag || '') + ' ' + (d.summary || ''))}">${esc(d.short || d.title.split(' — ')[0])}</a></li>`;
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
    if (!view.contains(a) && !tree.contains(a) && !(a.closest('.topbar') && a.getAttribute('href') === '/')) return;
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
    if (tree.contains(a)) {
      fromTree = true;
      document.body.classList.remove('li-side-open');
      $('liToggle').setAttribute('aria-expanded', 'false');
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
  $('liToggle').addEventListener('click', () => {
    const open = !document.body.classList.contains('li-side-open');
    document.body.classList.toggle('li-side-open', open);
    $('liToggle').setAttribute('aria-expanded', String(open));
  });

  // ---------------------------------------------------------------- 찾기(제목·요약·태그 + 본문)
  // 본문 글자는 두 글자 이상 처음 찾을 때 한 번만 받는다(약 0.8MB)(search-index.json, tools/prerender.py가 만든다).
  // 두 파일로 나뉘어 있다(search-index-2.json은 가장 큰 EU 배터리 번역). 먼저 온 것부터 결과에 넣는다.
  let SEARCH = null, searchLoading = null;
  function loadSearch() {
    if (searchLoading) return searchLoading;
    SEARCH = {};
    const part = url => fetch(url).then(r => r.json()).then(list => {
      list.forEach(d => { SEARCH[d.u] = d.b; });
      if ($('liFilter').value.trim().length >= 2) applyFilter();
    }).catch(() => {});
    searchLoading = Promise.all([part('/search-index.json'), part('/search-index-2.json')]);
    return searchLoading;
  }
  const norm = s => s.toLowerCase();
  function snippet(text, q) {
    const i = norm(text).indexOf(q);
    if (i < 0) return '';
    const a = Math.max(0, i - 28), b = Math.min(text.length, i + q.length + 40);
    return (a > 0 ? '…' : '') + esc(text.slice(a, i)) + '<b>' + esc(text.slice(i, i + q.length)) + '</b>' + esc(text.slice(i + q.length, b)) + (b < text.length ? '…' : '');
  }
  function countHits(text, q) { let n = 0, i = 0; const t = norm(text); while ((i = t.indexOf(q, i)) >= 0) { n++; i += q.length; } return n; }

  function applyFilter() {
    const raw = $('liFilter').value.trim(), q = norm(raw);
    tree.querySelector('.li-empty')?.remove();
    tree.querySelectorAll('.li-snip').forEach(el => el.remove());
    if (!q) { renderTree(); markActive(parse(location.pathname)); clearHighlight(); return; }
    if (q.length >= 2) loadSearch();
    let total = 0;
    tree.querySelectorAll('.li-cat').forEach(cat => {
      let hits = 0;
      cat.querySelectorAll('li').forEach(li => {
        const a = li.querySelector('a');
        const meta = (a.textContent + ' ' + a.title + ' ' + (a.dataset.s || '')).toLowerCase().includes(q);
        const body = q.length >= 2 && SEARCH && SEARCH[a.getAttribute('href')];
        const n = body ? countHits(body, q) : 0;
        const ok = meta || n > 0;
        li.hidden = !ok; if (ok) hits++;
        if (n > 0) a.insertAdjacentHTML('afterend', `<span class="li-snip"><em>본문 ${n}곳</em> ${snippet(body, q)}</span>`);
      });
      cat.querySelectorAll('.li-sec').forEach(s => { s.hidden = !s.querySelector('li:not([hidden])'); });
      const nameHit = cat.querySelector('.li-cat-name').textContent.toLowerCase().includes(q);
      cat.closest('.li-cat-wrap').hidden = !hits && !nameHit;
      cat.open = hits > 0;
      total += hits + (nameHit ? 1 : 0);
    });
    tree.querySelectorAll('.li-group').forEach(g => { g.hidden = !g.querySelector('.li-cat-wrap:not([hidden])'); });
    if (!total) tree.insertAdjacentHTML('afterbegin', `<p class="li-empty">'${esc(raw)}'와 일치하는 문서가 없습니다.</p>`);
    if (q.length >= 2 && view.querySelector('.lib-article')) highlight(raw);
  }
  let filterTimer = 0;
  $('liFilter').addEventListener('input', () => { clearTimeout(filterTimer); filterTimer = setTimeout(applyFilter, 120); });

  // 열린 문서 안에서 찾는 말 표시
  function clearHighlight() {
    view.querySelectorAll('mark.li-hit').forEach(m => m.replaceWith(document.createTextNode(m.textContent)));
    view.normalize();
  }
  function highlight(raw) {
    clearHighlight();
    const q = norm(raw);
    const walker = document.createTreeWalker(view.querySelector('.lib-article') || view, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('script, style, svg, mark') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const nodes = [];
    while (walker.nextNode()) if (norm(walker.currentNode.nodeValue).includes(q)) nodes.push(walker.currentNode);
    nodes.slice(0, 300).forEach(node => {
      const text = node.nodeValue, frag = document.createDocumentFragment();
      let i = 0, j;
      while ((j = norm(text).indexOf(q, i)) >= 0) {
        frag.append(text.slice(i, j));
        const m = document.createElement('mark'); m.className = 'li-hit'; m.textContent = text.slice(j, j + q.length); frag.append(m);
        i = j + q.length;
      }
      frag.append(text.slice(i));
      node.replaceWith(frag);
    });
  }

  $('liOpenAll').addEventListener('click', () => { allOpen = true; tree.querySelectorAll('.li-cat').forEach(d => (d.open = true)); remember(); });
  $('liCloseAll').addEventListener('click', () => { allOpen = false; tree.querySelectorAll('.li-cat').forEach(d => (d.open = false)); remember(); });

  // 색인 상자 높이를 화면에 맞춘다(색인만 따로 스크롤된다).
  function fitSide() {
    if (window.matchMedia('(max-width: 900px)').matches) { tree.style.maxHeight = ''; return; }
    const head = side.querySelector('.li-side-head').getBoundingClientRect().height;
    const foot = document.querySelector('.site-footer');
    const footH = foot ? foot.getBoundingClientRect().height : 0;
    // 색인 위 68px(머리줄+여백) + 색인 머리 + 색인 + 아래 여백 + 푸터가 화면 안에 들어가야 맨 아래까지 내려도 색인이 밀려 올라가지 않는다.
    tree.style.maxHeight = Math.max(240, window.innerHeight - 68 - head - 2 - 16 - footH) + 'px';
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

  renderTree();
  allOpen = tree.querySelectorAll('.li-cat[open]').length > 1;
  fitSide();
  const start = parse(location.pathname);
  try { history.replaceState({ scroll: window.scrollY }, ''); } catch (_) {}
  if (start && start.path !== (view.dataset.route || '/')) show(start);   // 예전 주소
  else markActive(start);
})();
