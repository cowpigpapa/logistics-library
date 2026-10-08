// AWB 추적 페이지의 항공사 링크 점검. Vercel Cron(매일 03:00 KST)과 관리자 수동 실행이 부른다.
// 결과는 방문자 DB(onharu-analytics)의 link_status에 쌓는다. 페이지는 404·410·도메인 없음이 이틀 연속일 때만 "링크 깨짐"으로 보인다.
const SITE = 'https://logistics.onharu.app';
const RPC = 'https://yihsukyedtlsdbexthlu.supabase.co/rest/v1/rpc/record_link_checks';
const PUBLIC_KEY = 'sb_publishable_vgcDAWoOJRD8Xvp2p4Ew9A_exTmzuXM';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0 Safari/537.36';
// 자동 접속을 막는 응답. 사람이 브라우저로 열면 열리므로 깨짐으로 보지 않는다.
const BLOCKED = new Set([401, 403, 405, 406, 412, 429, 503]);
// 서버 인증서 체인이 덜 갖춰진 경우. 브라우저는 스스로 채워 열기 때문에 깨짐으로 보지 않는다.
const CERT_CHAIN = /UNABLE_TO_VERIFY_LEAF_SIGNATURE|UNABLE_TO_GET_ISSUER_CERT/;
const TIMEOUT_MS = 12000;
const CONCURRENCY = 24;

async function checkOne(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,*/*;q=0.8', 'accept-language': 'ko-KR,ko;q=0.9,en;q=0.8' }
    });
    try {
      await res.body?.cancel();
    } catch (_) {}
    const code = res.status;
    if (code < 400) return { url, state: 'ok', code };
    if (BLOCKED.has(code)) return { url, state: 'blocked', code, detail: res.headers.get('server') || '' };
    return { url, state: 'error', code, detail: `HTTP ${code}` };
  } catch (error) {
    if (error.name === 'AbortError') return { url, state: 'timeout', detail: `${TIMEOUT_MS / 1000}초 안에 응답 없음` };
    const detail = String(error.cause?.code || error.cause?.message || error.message).slice(0, 120);
    if (CERT_CHAIN.test(detail)) return { url, state: 'blocked', detail: `인증서 체인 문제(${detail})` };
    return { url, state: 'error', detail };
  } finally {
    clearTimeout(timer);
  }
}

async function loadUrls() {
  const res = await fetch(`${SITE}/airtracking-data.js?check=${Date.now()}`);
  const text = await res.text();
  const rows = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1));
  return [...new Set(rows.map(row => row.url).filter(Boolean))];
}

module.exports = async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'not allowed' });
  }
  const trigger = /vercel-cron/i.test(req.headers['user-agent'] || '') ? 'cron' : 'manual';
  const urls = await loadUrls();
  const results = [];
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < urls.length) {
        const url = urls[next++];
        results.push(await checkOne(url));
      }
    })
  );
  const saved = await fetch(RPC, {
    method: 'POST',
    headers: { apikey: PUBLIC_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({ p_secret: secret, p_trigger: trigger, p_results: results })
  });
  if (!saved.ok) return res.status(502).json({ error: 'save failed', detail: (await saved.text()).slice(0, 200) });
  const count = state => results.filter(r => r.state === state).length;
  res.setHeader('cache-control', 'no-store');
  return res.status(200).json({
    trigger,
    total: results.length,
    ok: count('ok'),
    blocked: count('blocked'),
    failed: count('error') + count('timeout'),
    problems: results.filter(r => r.state !== 'ok')
  });
};

