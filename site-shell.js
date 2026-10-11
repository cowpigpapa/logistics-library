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
