(function () {
  const SUPABASE_URL = 'https://wejegdshcpqqqhhjbtox.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_nUwCSEDHdD5sgQAooaJwew_g8hL0r0C';

  document.addEventListener('click', event => {
    document.querySelectorAll('.footer-family[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });

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
    const shouldIncrement = !localStorage.getItem(localKey);
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

  trackVisitors();
})();
