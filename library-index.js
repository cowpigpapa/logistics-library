// 자료 색인(/library-index): 왼쪽 트리에서 고른 문서를 오른쪽에 보여 준다.
// 본문은 tools/prerender.py가 만든 정적 페이지(/library/<slug>/<id>)에서 #libraryView만 가져온다.
// 주소는 /library-index#<slug>/<id> 형태로 남겨 새로고침·공유해도 같은 문서가 열린다.
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

  // 트리 순서대로 모든 문서를 한 줄로 펼친 목록(이전·다음 문서용)
  let fromTree = false;   // 색인 안에서 누른 이동인지
  const flat = [];
  const cats = {};
  DATA.forEach(g => g.cats.forEach(c => {
    cats[c.slug] = c;
    c.sections.forEach(s => s.docs.forEach(id => flat.push({ slug: c.slug, id })));
  }));

  function renderTree() {
    const open = new Set(store.get());
    tree.innerHTML = DATA.map(g => `<div class="li-group"><p class="li-group-name">${esc(g.group)}</p>${g.cats.map(c => {
      const n = Object.keys(c.docs).length;
      return `<details class="li-cat" data-slug="${c.slug}" ${open.has(c.slug) ? 'open' : ''}>
        <summary><span class="li-cat-name">${esc(c.name)}</span><span class="li-count">${n}</span><a class="li-cat-home" href="#${c.slug}" data-slug="${c.slug}" title="${esc(c.sub)} · 문서 전체 목록">목록</a></summary>
        ${c.sections.map(s => `<div class="li-sec"><p class="li-sec-name">${esc(s.title)}</p><ul>${s.docs.map(id => {
          const d = c.docs[id];
          return `<li><a href="#${c.slug}/${id}" data-slug="${c.slug}" data-id="${id}" title="${esc(d.title)}">${esc(d.short || d.title)}</a></li>`;
        }).join('')}</ul></div>`).join('')}
      </details>`;
    }).join('')}${(g.links || []).map(l => `<a class="li-tool" href="${l.href}"><span class="li-cat-name">${esc(l.name)}</span><small>${esc(l.sub)}</small></a>`).join('')}</div>`).join('');
  }

  function remember() {
    store.set([...tree.querySelectorAll('.li-cat[open]')].map(d => d.dataset.slug));
  }
  tree.addEventListener('toggle', remember, true);
  // 카테고리 줄의 '목록' 버튼: 줄을 접거나 펴지 않고 전체 목록만 연다.
  tree.addEventListener('click', e => {
    const a = e.target.closest('.li-cat-home');
    if (!a) return;
    e.preventDefault();
    const cat = a.closest('.li-cat');
    // 이미 이 카테고리 목록을 보고 있고 펼쳐져 있으면 한 번 더 눌렀을 때 접는다.
    if (cat && cat.open && decodeURIComponent(location.hash.slice(1)) === a.dataset.slug) { cat.open = false; remember(); return; }
    if (cat && !cat.open) { cat.open = true; remember(); }
    location.hash = a.dataset.slug;
  });

  function markActive(slug, id) {
    tree.querySelectorAll('a.is-active').forEach(a => a.classList.remove('is-active'));
    const sel = id ? `a[data-slug="${slug}"][data-id="${id}"]` : `a.li-cat-home[data-slug="${slug}"]`;
    const a = tree.querySelector(sel);
    if (!a) return;
    a.classList.add('is-active');
    const cat = a.closest('.li-cat');
    if (cat && !cat.open) { cat.open = true; remember(); }
    // 색인에서 직접 누른 것이면 색인을 움직이지 않는다. 주소로 바로 들어왔거나 본문 링크로 옮겨 갔을 때만
    // 고른 줄이 보이게 색인 상자 안에서 굴린다.
    if (fromTree) { fromTree = false; return; }
    const box = tree.getBoundingClientRect(), r = a.getBoundingClientRect();
    if (r.top < box.top || r.bottom > box.bottom) tree.scrollTop += r.top - box.top - box.height / 3;
  }

  function pagerHtml(slug, id) {
    const i = flat.findIndex(x => x.slug === slug && x.id === id);
    const cell = (x, label) => {
      if (!x) return '<span></span>';
      const d = cats[x.slug].docs[x.id];
      const other = x.slug !== slug ? ` <small>${esc(cats[x.slug].name)}</small>` : '';
      return `<a href="#${x.slug}/${x.id}"><span>${label}</span>${esc(d.short || d.title)}${other}</a>`;
    };
    return `<nav class="li-pager" aria-label="이전·다음 문서">${cell(flat[i - 1], '← 이전')}${cell(flat[i + 1], '다음 →')}</nav>`;
  }

  function showCategory(slug) {
    const c = cats[slug];
    if (!c) return showWelcome();
    view.innerHTML = `<div class="li-cat-page"><p class="li-kicker">${esc(c.name)}</p><h2>${esc(c.sub)}</h2>
      ${c.sections.map(s => `<section><h3>${esc(s.title)}</h3><ul class="li-doc-list">${s.docs.map(id => {
        const d = c.docs[id];
        return `<li><a href="#${slug}/${id}"><b>${esc(d.title)}</b><span>${esc(d.summary)}</span></a></li>`;
      }).join('')}</ul></section>`).join('')}</div>`;
    document.title = `${c.name} · 자료 색인 · Logistics Library`;
    markActive(slug, null);
    scrollTopView();
  }

  function showWelcome() {
    document.title = '자료 색인 · Logistics Library';
  }

  let seq = 0;
  async function showDoc(slug, id) {
    const c = cats[slug], d = c && c.docs[id];
    if (!d) return showCategory(slug);
    const my = ++seq;
    markActive(slug, id);
    view.classList.add('is-loading');
    try {
      const res = await fetch(`/library/${slug}/${id}`);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
      const body = doc.getElementById('libraryView');
      if (!body) throw new Error('본문 없음');
      body.querySelectorAll('.lib-crumb, .bat-pager').forEach(el => el.remove());
      if (my !== seq) return;
      view.innerHTML = `<p class="li-kicker"><a href="#${slug}">${esc(c.name)}</a></p>${body.innerHTML}${pagerHtml(slug, id)}`;
      document.title = `${d.title} · ${c.name} · Logistics Library`;
      scrollTopView();
    } catch (e) {
      if (my !== seq) return;
      view.innerHTML = `<div class="li-error"><p>문서를 불러오지 못했습니다(${esc(e.message)}).</p><p><a href="/library/${slug}/${id}">원래 페이지에서 열기 ↗</a></p></div>`;
    } finally {
      if (my === seq) view.classList.remove('is-loading');
    }
  }

  function scrollTopView() {
    const top = view.getBoundingClientRect().top + window.scrollY - 60;
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'auto' });
  }

  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const [slug, id] = h.split('/');
    if (slug && cats[slug]) return id ? showDoc(slug, id) : showCategory(slug);
    showWelcome();
  }

  // 본문 안의 링크: 같은 자료실 문서는 이 화면에서 열고, 목차(#s1 등)는 본문 안에서 굴린다.
  view.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey || a.target === '_blank') return;
    const href = a.getAttribute('href');
    const m = href.match(/^\/library\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?\/?(#.*)?$/i);
    if (m && cats[m[1]] && (!m[2] || cats[m[1]].docs[m[2]])) {
      e.preventDefault();
      location.hash = m[2] ? `${m[1]}/${m[2]}` : m[1];
      return;
    }
    if (href.startsWith('#') && !href.slice(1).includes('/') && !cats[href.slice(1)]) {
      const target = view.querySelector(href.replace(/([^\w#-])/g, '\\$1'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });

  // 좁은 화면: 목차 버튼으로 색인을 열고 닫는다. 문서를 고르면 닫는다.
  $('liToggle').addEventListener('click', () => {
    const open = !document.body.classList.contains('li-side-open');
    document.body.classList.toggle('li-side-open', open);
    $('liToggle').setAttribute('aria-expanded', String(open));
  });
  tree.addEventListener('click', e => {
    if (e.target.closest('a[href^="#"]')) {
      fromTree = true;
      document.body.classList.remove('li-side-open');
      $('liToggle').setAttribute('aria-expanded', 'false');
    }
  });

  // 제목으로 거르기: 맞는 문서만 남기고 해당 카테고리를 편다.
  $('liFilter').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    tree.querySelectorAll('.li-cat').forEach(cat => {
      let hits = 0;
      cat.querySelectorAll('li').forEach(li => {
        const a = li.querySelector('a');
        const ok = !q || (a.textContent + ' ' + a.title).toLowerCase().includes(q);
        li.hidden = !ok; if (ok) hits++;
      });
      cat.querySelectorAll('.li-sec').forEach(s => { s.hidden = !!q && !s.querySelector('li:not([hidden])'); });
      cat.hidden = !!q && !hits && !cat.querySelector('.li-cat-name').textContent.toLowerCase().includes(q);
      if (q) cat.open = hits > 0;
    });
    if (!q) renderTree(), markFromHash();
  });
  function markFromHash() {
    const [slug, id] = decodeURIComponent(location.hash.slice(1)).split('/');
    if (slug && cats[slug]) markActive(slug, id || null);
  }
  $('liOpenAll').addEventListener('click', () => { tree.querySelectorAll('.li-cat').forEach(d => (d.open = true)); remember(); });
  $('liCloseAll').addEventListener('click', () => { tree.querySelectorAll('.li-cat').forEach(d => (d.open = false)); remember(); });

  // 색인 상자 높이를 화면에 맞춘다(색인만 따로 스크롤된다).
  function fitSide() {
    if (window.matchMedia('(max-width: 900px)').matches) { tree.style.maxHeight = ''; return; }
    const head = side.querySelector('.li-side-head').getBoundingClientRect().height;
    tree.style.maxHeight = Math.max(240, window.innerHeight - 44 - 24 - head - 16) + 'px';
  }
  window.addEventListener('resize', fitSide);

  renderTree();
  fitSide();
  window.addEventListener('hashchange', route);
  route();
})();
