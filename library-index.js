// 자료 색인(/library-index): 왼쪽 색인에서 고른 것을 오른쪽에 보여 준다.
// 화면은 세 가지뿐이다.
//   첫 화면        #            카테고리 소개(홈 화면과 같은 내용, 페이지에 미리 들어 있음)
//   개요 및 원문   #<slug>      그 카테고리의 설명·그림 + 범위와 출처 + 원문(공식 자료) 링크
//   문서           #<slug>/<id> 정적 페이지(/library/<slug>/<id>)의 본문
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
  const HOME = view.innerHTML;       // 첫 화면(카테고리 소개)
  const HOME_TITLE = document.title;
  let fromTree = false;              // 색인 안에서 누른 이동이면 색인을 굴리지 않는다
  let allOpen = false;               // '모두 펼치기' 뒤에는 여러 카테고리를 함께 펼쳐 둔다
  let seq = 0;                       // 늦게 도착한 응답이 화면을 덮지 않게
  // 카테고리 이름 옆에 붙일 분류 줄(홈 카드의 'IMO · ILO · UNECE' 등)
  const TYPE = {};
  (() => {
    const box = document.createElement('div');
    box.innerHTML = HOME;
    box.querySelectorAll('.library-entry').forEach(sec => {
      const link = sec.querySelector('.li-entry-h a[href^="/library/"]');
      const t = sec.querySelector('.li-entry-h .li-kicker-sub, .entry-type');
      if (link && t) TYPE[link.getAttribute('href').split('/')[2]] = t.textContent.trim();
    });
  })();
  // 카테고리 머리(문서 화면 맨 위): 첫 화면 카드 제목과 같은 클래스(li-entry-h)를 쓴다.
  const kicker = (slug, name) => `<p class="li-entry-h li-doc-head"><a href="#${slug}">${esc(name)}</a>${TYPE[slug] ? `<span class="li-kicker-sub">${esc(TYPE[slug])}</span>` : ''}</p>`;

  // 트리 순서대로 모든 문서(이전·다음 문서용)
  const flat = [], cats = {};
  DATA.forEach(g => g.cats.forEach(c => {
    cats[c.slug] = c;
    c.sections.forEach(s => s.docs.forEach(id => flat.push({ slug: c.slug, id })));
  }));

  // ---------------------------------------------------------------- 색인
  function renderTree() {
    const open = new Set(store.get());
    tree.innerHTML = DATA.map(g => `<div class="li-group"><p class="li-group-name">${esc(g.group)}</p>${g.cats.map(c => `
      <details class="li-cat" data-slug="${c.slug}" ${open.has(c.slug) ? 'open' : ''}>
        <summary><span class="li-cat-name">${esc(c.name)}</span><span class="li-count">${c.sections.reduce((n, s) => n + s.docs.length, 0)}</span><a class="li-ov" href="#${c.slug}" data-slug="${c.slug}" title="${esc(c.name)} 개요 및 원문">개요 및 원문</a></summary>
        ${c.sections.map(s => `<div class="li-sec"><p class="li-sec-name">${esc(s.title)}</p><ul>${s.docs.map(id => {
          const d = c.docs[id];
          return `<li><a href="#${c.slug}/${id}" data-slug="${c.slug}" data-id="${id}" title="${esc(d.title)}">${esc(d.short || d.title)}</a></li>`;
        }).join('')}</ul></div>`).join('')}
      </details>`).join('')}${(g.links || []).map(l => `<a class="li-tool" href="${l.href}"><span class="li-cat-name">${esc(l.name)}</span><small>${esc(l.sub)}</small></a>`).join('')}</div>`).join('');
  }
  function remember() { store.set([...tree.querySelectorAll('.li-cat[open]')].map(d => d.dataset.slug)); }
  function closeOthers(keep) {
    if (allOpen) return;
    tree.querySelectorAll('.li-cat[open]').forEach(d => { if (d !== keep) d.open = false; });
  }
  tree.addEventListener('toggle', e => {
    const d = e.target;
    if (d.classList && d.classList.contains('li-cat') && d.open) closeOthers(d);
    remember();
  }, true);

  function markActive(slug, id) {
    tree.querySelectorAll('a.is-active').forEach(a => a.classList.remove('is-active'));
    if (!slug) return;
    const a = tree.querySelector(id ? `a[data-slug="${slug}"][data-id="${id}"]` : `a.li-ov[data-slug="${slug}"]`);
    if (!a) return;
    a.classList.add('is-active');
    const cat = a.closest('.li-cat');
    if (cat && !cat.open) { cat.open = true; closeOthers(cat); remember(); }
    if (fromTree) { fromTree = false; return; }
    // 주소로 바로 들어왔거나 본문 링크로 옮겨 갔을 때만 고른 줄이 보이게 색인 상자 안에서 굴린다.
    const box = tree.getBoundingClientRect(), r = a.getBoundingClientRect();
    if (r.top < box.top || r.bottom > box.bottom) tree.scrollTop += r.top - box.top - box.height / 3;
  }

  // ---------------------------------------------------------------- 오른쪽 화면
  async function page(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const body = new DOMParser().parseFromString(await res.text(), 'text/html').getElementById('libraryView');
    if (!body) throw new Error('본문 없음');
    return body;
  }
  async function load(slug, id, build) {
    const my = ++seq;
    markActive(slug, id);
    view.classList.add('is-loading');
    try {
      const html = await build();
      if (my !== seq) return;
      view.innerHTML = html;
      window.scrollTo({ top: 0 });
    } catch (e) {
      if (my !== seq) return;
      const path = `/library/${slug}${id ? '/' + id : ''}`;
      view.innerHTML = `<div class="li-error"><p>불러오지 못했습니다(${esc(e.message)}).</p><p><a href="${path}">원래 페이지에서 열기 ↗</a></p></div>`;
    } finally {
      if (my === seq) view.classList.remove('is-loading');
    }
  }

  function showHome() {
    seq++;
    if (view.innerHTML !== HOME) view.innerHTML = HOME;
    markActive(null);
    document.title = HOME_TITLE;
  }

  // 개요 및 원문: 홈의 카테고리 소개(설명·그림) + 카테고리 첫 화면의 '범위와 출처'와 공식 자료 표
  function showOverview(slug) {
    const c = cats[slug];
    return load(slug, null, async () => {
      const box = document.createElement('div');
      box.innerHTML = HOME;
      const link = box.querySelector(`.library-entry .li-entry-h a[href="/library/${slug}"]`);
      const entry = link ? link.closest('.library-entry') : null;
      const body = await page(`/library/${slug}`);
      // '설명 및 요약' 문서가 있으면 그 본문을 개요 안에 넣는다.
      let summary = '';
      if (c.overview) {
        try {
          const doc = await page(`/library/${slug}/${c.overview}`);
          doc.querySelectorAll('.lib-crumb, .bat-pager').forEach(el => el.remove());
          summary = `<div class="li-ov-doc">${doc.innerHTML}</div>`;
        } catch (_) {}
      }
      const notice = body.querySelector('.lib-notice');
      const official = body.querySelector('details.lib-official');
      let src = '';
      if (official) {
        const table = official.querySelector('.lib-table-wrap');
        const notes = [...official.children].filter(el => !el.matches('summary, .lib-table-wrap')).map(el => el.outerHTML).join('');
        src = `<section class="li-src"><h3>원문과 공식 자료</h3>${table ? table.outerHTML : ''}${notes}</section>`;
      }
      document.title = `${c.name} 개요 및 원문 · Logistics Library`;
      // 첫 화면 카드와 똑같은 마크업·스타일을 쓴다(그래서 두 화면이 항상 같다).
      return `<div class="li-home">${entry ? entry.outerHTML : `<section class="library-entry"><div class="entry-copy">${kicker(slug, c.name)}<p>${esc(c.sub)}</p></div></section>`}</div>
        ${notice ? `<div class="li-notice">${notice.innerHTML}</div>` : ''}${summary}${src}`;
    });
  }


  function showDoc(slug, id) {
    const c = cats[slug], d = c.docs[id];
    return load(slug, id, async () => {
      const body = await page(`/library/${slug}/${id}`);
      body.querySelectorAll('.lib-crumb, .bat-pager').forEach(el => el.remove());
      document.title = `${d.title} · ${c.name} · Logistics Library`;
      return `${kicker(slug, c.name)}${body.innerHTML}`;
    });
  }

  function route() {
    const [slug, id] = decodeURIComponent(location.hash.slice(1)).split('/');
    if (!slug || !cats[slug]) return showHome();
    if (id && id !== 'overview' && cats[slug].docs[id]) return showDoc(slug, id);
    return showOverview(slug);
  }

  // ---------------------------------------------------------------- 링크 처리
  // 본문 안의 자료실 링크는 이 화면에서 연다(/library/<slug> → 개요 및 원문). 목차(#s1 등)는 본문 안에서 굴린다.
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
  // 카테고리 줄의 '개요 및 원문' 버튼: 줄을 접거나 펴지 않고 개요를 연다. 이미 보고 있으면 한 번 더 눌러 접는다.
  tree.addEventListener('click', e => {
    const a = e.target.closest('.li-ov');
    if (!a) return;
    e.preventDefault();
    const cat = a.closest('.li-cat');
    if (cat.open && decodeURIComponent(location.hash.slice(1)) === a.dataset.slug) { cat.open = false; remember(); return; }
    if (!cat.open) { cat.open = true; closeOthers(cat); remember(); }
    fromTree = true;
    location.hash = a.dataset.slug;
  });
  tree.addEventListener('click', e => {
    if (!e.target.closest('a[href^="#"]')) return;
    fromTree = true;
    document.body.classList.remove('li-side-open');
    $('liToggle').setAttribute('aria-expanded', 'false');
  });

  // 좁은 화면: 목차 버튼으로 색인을 열고 닫는다.
  $('liToggle').addEventListener('click', () => {
    const open = !document.body.classList.contains('li-side-open');
    document.body.classList.toggle('li-side-open', open);
    $('liToggle').setAttribute('aria-expanded', String(open));
  });

  // 제목으로 거르기
  $('liFilter').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderTree(); markFromHash(); return; }
    tree.querySelectorAll('.li-cat').forEach(cat => {
      let hits = 0;
      cat.querySelectorAll('li').forEach(li => {
        const a = li.querySelector('a');
        const ok = (a.textContent + ' ' + a.title).toLowerCase().includes(q);
        li.hidden = !ok; if (ok) hits++;
      });
      cat.querySelectorAll('.li-sec').forEach(s => { s.hidden = !s.querySelector('li:not([hidden])'); });
      cat.hidden = !hits && !cat.querySelector('.li-cat-name').textContent.toLowerCase().includes(q);
      cat.open = hits > 0;
    });
  });
  function markFromHash() {
    fromTree = false;
    const [slug, id] = decodeURIComponent(location.hash.slice(1)).split('/');
    if (slug && cats[slug]) markActive(slug, id && id !== 'overview' ? id : null);
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

  renderTree();
  allOpen = tree.querySelectorAll('.li-cat[open]').length > 1;
  fitSide();
  window.addEventListener('hashchange', route);
  route();
})();
