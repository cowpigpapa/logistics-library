(function () {
  const SUPABASE_URL = 'https://wejegdshcpqqqhhjbtox.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_nUwCSEDHdD5sgQAooaJwew_g8hL0r0C';

  document.addEventListener('click', event => {
    document.querySelectorAll('.footer-family[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });

  // 운영자 브라우저는 ?owner=1로 한 번 들르면 방문 기록·카운터에서 빠진다(?owner=0으로 해제).
  const OWNER_KEY = 'onharu-owner';
  function isOwner() {
    try {
      const flag = new URLSearchParams(location.search).get('owner');
      if (flag === '1') localStorage.setItem(OWNER_KEY, '1');
      if (flag === '0') localStorage.removeItem(OWNER_KEY);
      return localStorage.getItem(OWNER_KEY) === '1';
    } catch (_) {
      return false;
    }
  }
  const owner = isOwner();

  // 방문 기록: 경로와 외부 유입 주소(쿼리 제외)만 보낸다. IP는 서버에서 읽고 30일 뒤 지운다.
  function logVisit() {
    if (owner) return;
    let referrer = null;
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.host !== location.host) referrer = ref.origin + ref.pathname;
      }
    } catch (_) {}
    fetch(`${SUPABASE_URL}/rest/v1/rpc/log_visit`, {
      method: 'POST',
      headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_site: 'logistics', p_path: location.pathname, p_referrer: referrer }),
      keepalive: true
    }).catch(() => {});
  }

  async function trackVisitors() {
    const today = document.getElementById('todayVisitors');
    const total = document.getElementById('totalVisitors');
    if (!today || !total) return;
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat('en', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' })
        .formatToParts(new Date())
        .map(part => [part.type, part.value])
    );
    const date = `${parts.year}-${parts.month}-${parts.day}`;
    const localKey = `loadwise-v3-daily-${date}`;
    const shouldIncrement = !owner && !localStorage.getItem(localKey);
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_visit_counts`, {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ p_daily_key: `visitors-${date}`, should_increment: shouldIncrement })
      });
      if (!response.ok) throw new Error('visitor counter unavailable');
      const data = await response.json();
      if (shouldIncrement) localStorage.setItem(localKey, '1');
      today.textContent = Number(data.today).toLocaleString();
      total.textContent = Number(data.total).toLocaleString();
    } catch (_) {
      today.textContent = '—';
      total.textContent = '—';
    }
  }

  logVisit();
  trackVisitors();
})();
