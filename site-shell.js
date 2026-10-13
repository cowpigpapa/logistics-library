(() => {
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  if (!document.querySelector('script[src="/_vercel/insights/script.js"]')) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    document.head.appendChild(script);
  }
})();

(function () {
  // 색인 페이지 안에 끼워 열린 도구(?embed=1)는 머리줄·푸터 없이 보여 준다.
  try { if (new URLSearchParams(location.search).get('embed') === '1') document.documentElement.classList.add('is-embed'); } catch (_) {}
  // 옛 카테고리 화면(#libraryView)은 합쳐진 문서·없는 문서 주소로만 열린다. 새 화면으로 넘긴다:
  // 문서가 그려졌으면(합쳐진 문서의 새 주소) 그 주소로, 아니면 카테고리 개요로. 정적 페이지 생성(?capture=1)은 그대로 둔다.
  (() => {
    const v = document.getElementById('libraryView');
    if (!v || /[?&]capture=1/.test(location.search)) return;
    const m = location.pathname.match(/^\/library\/([a-z0-9-]+)(\/[a-z0-9-]+)?/);
    if (!m) return;
    const go = () => {
      const doc = m[2] && v.querySelector('.lib-article');
      const target = doc ? location.pathname : '/library/' + m[1];
      try { if (sessionStorage.getItem('ll-forward') === target) return; sessionStorage.setItem('ll-forward', target); } catch (_) {}
      location.replace(target);
    };
    // 옛 화면 스크립트가 합쳐진 문서 주소를 바꾼 뒤에 판단한다.
    if (document.readyState === 'complete') setTimeout(go, 0); else window.addEventListener('load', () => setTimeout(go, 0));
  })();
  // 끼워 열린 도구는 내용 높이를 바깥 화면에 알린다(좁은 화면에서 바깥이 틀 높이를 내용에 맞춘다).
  if (document.documentElement.classList.contains('is-embed') && window.parent !== window && window.ResizeObserver) {
    let last = 0;
    new ResizeObserver(() => {
      const h = document.documentElement.scrollHeight;
      if (Math.abs(h - last) > 2) { last = h; window.parent.postMessage({ llEmbedHeight: h }, location.origin); }
    }).observe(document.body);
  }
  // 좁은 화면에서는 짧은 검색 안내 문구(data-short-placeholder)를 쓴다.
  if (window.matchMedia('(max-width: 480px)').matches) {
    document.querySelectorAll('input[data-short-placeholder]').forEach(i => { i.placeholder = i.dataset.shortPlaceholder; });
  }
  // 열린 드롭다운(상단 메뉴·패밀리 사이트)은 바깥을 누르면 닫는다.
  document.addEventListener('click', event => {
    document.querySelectorAll('.footer-family[open], .nav-group[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
  // 상단 메뉴는 한 번에 하나만 연다.
  document.querySelectorAll('.nav-group').forEach(group => {
    group.addEventListener('toggle', () => {
      if (!group.open) return;
      document.querySelectorAll('.nav-group[open]').forEach(other => {
        if (other !== group) other.open = false;
      });
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') document.querySelectorAll('.nav-group[open]').forEach(menu => (menu.open = false));
  });
  // 마우스가 있는 화면에서는 올리면 열고 벗어나면 닫는다(터치 화면은 지금처럼 눌러서 연다).
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.nav-group').forEach(group => {
      let timer = null;
      group.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        group.open = true;
      });
      // 제목에서 목록으로 내려가는 사이에 닫히지 않게 잠깐 기다린다.
      group.addEventListener('mouseleave', () => {
        timer = setTimeout(() => (group.open = false), 180);
      });
      // 호버로 이미 열린 상태에서 제목을 눌러도 닫히지 않게 한다.
      group.querySelector('summary').addEventListener('click', event => {
        if (group.open) event.preventDefault();
      });
    });
  }

  // 자료 본문의 큰 소제목 "1. 제목"의 번호를 배지로 바꾼다(문서는 나중에 불러오므로 화면 변화를 지켜본다).
  (() => {
    const RE = /^(\s*)(\d{1,2})[.)]\s+/;
    const decorate = () => {
      document.querySelectorAll('.lib-article h3:not([data-num])').forEach(h => {
        h.dataset.num = '';
        const first = h.firstChild;
        if (!first || first.nodeType !== 3) return;
        const m = first.textContent.match(RE);
        if (!m) return;
        h.dataset.num = m[2];
        first.textContent = first.textContent.slice(m[0].length);
        const badge = document.createElement('span');
        badge.className = 'lib-num';
        badge.textContent = m[2];
        h.insertBefore(badge, first);
      });
    };
    let queued = false;
    new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; decorate(); });
    }).observe(document.body, { childList: true, subtree: true });
    decorate();
  })();

  // ONHARU 방문 기록(방문자 DB). ?owner=1로 한 번 들른 브라우저는 빠지고(?owner=0으로 해제),
  // IP는 서버에서 읽어 30일 뒤 지운다. 화면에 방문자 수는 표시하지 않는다.
  (() => {
    if (location.hostname !== 'logistics.onharu.app') return;
    try {
      const flag = new URLSearchParams(location.search).get('owner');
      if (flag === '1') localStorage.setItem('onharu-owner', '1');
      if (flag === '0') localStorage.removeItem('onharu-owner');
      if (localStorage.getItem('onharu-owner') === '1') return;
    } catch (_) {}
    let referrer = null;
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.host !== location.host) referrer = ref.origin + ref.pathname;
      }
    } catch (_) {}
    fetch('https://yihsukyedtlsdbexthlu.supabase.co/rest/v1/rpc/log_visit', {
      method: 'POST',
      headers: { apikey: 'sb_publishable_vgcDAWoOJRD8Xvp2p4Ew9A_exTmzuXM', 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_site: 'library', p_path: location.pathname, p_referrer: referrer }),
      keepalive: true
    }).catch(() => {});
  })();
})();
