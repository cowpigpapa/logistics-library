// 자료실 문서(출처·공식 자료)의 바깥 링크 점검. Vercel Cron(매일 03:30 KST)과 관리자 화면(/linkcheck)의 수동 실행이 부른다.
// 링크 목록은 doc-links.json(tools/doc_links.py가 만든다). 한 번에 다 못 돌면 오래 점검한 것부터 이어서 돈다.
// 결과는 방문자 DB의 doc_link_status에 쌓는다(추적 페이지용 link_status와 별개). 공개 화면에는 나오지 않는다.
const SITE = 'https://logistics.onharu.app';
const DB = 'https://yihsukyedtlsdbexthlu.supabase.co/rest/v1/rpc/';
const PUBLIC_KEY = 'sb_publishable_vgcDAWoOJRD8Xvp2p4Ew9A_exTmzuXM';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0 Safari/537.36';
// 자동 접속을 막는 응답. 사람이 브라우저로 열면 열리므로 깨짐으로 보지 않는다.
const BLOCKED = new Set([401, 403, 405, 406, 412, 429, 503]);
// 서버 인증서 체인이 덜 갖춰진 경우. 브라우저는 스스로 채워 열기 때문에 깨짐으로 보지 않는다.
const CERT_CHAIN = /UNABLE_TO_VERIFY_LEAF_SIGNATURE|UNABLE_TO_GET_ISSUER_CERT/;
// Node만 거절하고 브라우저는 여는 경우: 응답 헤더가 너무 큼(maersk.com 등), 옛 TLS 재협상 방식(ktnet.com 등).
const NODE_ONLY = /UND_ERR_HEADERS_OVERFLOW|UNSAFE_LEGACY_RENEGOTIATION/;
const TIMEOUT_MS = 12000;
const CONCURRENCY = 16;
const PER_HOST = 2; // 같은 사이트에는 동시에 2개까지만
// 새 점검을 시작하는 시간 한도. HEAD·GET 두 번(최대 24초)과 저장 시간을 남기고 maxDuration(120초) 안에 끝낸다.
const START_BUDGET_MS = 80000;
// 이 시간 안에 이미 본 링크는 건너뛴다. 수동 실행을 연달아 눌러 연속 실패 횟수가 몇 분 만에 쌓이지 않게 한다.
const RECENT_MS = 3 * 3600 * 1000;

async function attempt(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,*/*;q=0.8', 'accept-language': 'ko-KR,ko;q=0.9,en;q=0.8' }
    });
    try {
      await res.body?.cancel();
    } catch (_) {}
    const code = res.status;
    if (code < 400) return { url, method, state: 'ok', code };
    if (BLOCKED.has(code)) return { url, method, state: 'blocked', code, detail: res.headers.get('server') || '' };
    return { url, method, state: 'error', code, detail: `HTTP ${code}` };
  } catch (error) {
    if (error.name === 'AbortError') return { url, method, state: 'timeout', detail: `${TIMEOUT_MS / 1000}초 안에 응답 없음` };
    const detail = String(error.cause?.code || error.cause?.message || error.message).slice(0, 120);
    if (CERT_CHAIN.test(detail)) return { url, method, state: 'blocked', detail: `인증서 체인 문제(${detail})` };
    if (NODE_ONLY.test(detail)) return { url, method, state: 'blocked', detail: `점검 서버만 못 여는 응답(${detail})` };
    return { url, method, state: 'error', detail };
  } finally {
    clearTimeout(timer);
  }
}

// HEAD로 먼저 보고, 정상이 아니면 GET으로 다시 본다(HEAD를 거절·오답하는 서버가 많다).
// 도메인 없음·접속 불가·인증서 문제처럼 요청 방식과 무관한 실패는 다시 보지 않는다.
const SAME_FOR_GET = /ENOTFOUND|EAI_AGAIN|CONNECT_TIMEOUT|ECONNREFUSED|CERT|SSL|HEADERS_OVERFLOW|인증서/;
async function checkOne(url) {
  const head = await attempt(url, 'HEAD');
  if (head.state === 'ok' || (!head.code && SAME_FOR_GET.test(head.detail || ''))) return head;
  return attempt(url, 'GET');
}

const hostOf = url => {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch (_) {
    return url;
  }
};

// 앞에서부터(우선순위 순) 점검한다. 같은 호스트는 PER_HOST개까지만 동시에. deadline이 지나면 새로 시작하지 않는다.
async function checkUrls(urls, { deadline = Infinity, concurrency = CONCURRENCY, onResult } = {}) {
  const queue = [...urls];
  const active = new Map();
  const results = [];
  const takeNext = () => {
    const i = queue.findIndex(u => (active.get(hostOf(u)) || 0) < PER_HOST);
    return i < 0 ? null : queue.splice(i, 1)[0];
  };
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (queue.length && Date.now() < deadline) {
        const url = takeNext();
        if (!url) {
          // 남은 링크가 모두 붐비는 호스트: 잠깐 쉬었다 다시 본다.
          await new Promise(resolve => setTimeout(resolve, 200));
          continue;
        }
        const host = hostOf(url);
        active.set(host, (active.get(host) || 0) + 1);
        const result = await checkOne(url);
        active.set(host, active.get(host) - 1);
        results.push(result);
        if (onResult) onResult(result, results.length);
      }
    })
  );
  return { results, remaining: queue };
}

async function loadLinks() {
  try {
    return require('../doc-links.json');
  } catch (_) {
    const res = await fetch(`${SITE}/doc-links.json?check=${Date.now()}`);
    if (!res.ok) throw new Error(`doc-links.json HTTP ${res.status}`);
    return res.json();
  }
}

const rpc = (name, body) =>
  fetch(DB + name, { method: 'POST', headers: { apikey: PUBLIC_KEY, 'content-type': 'application/json' }, body: JSON.stringify(body) });

// 점검 순서: 아직 안 본 링크 → 실패한 링크(깨짐 확정·해제) → 오래전에 본 링크. 3시간 안에 본 링크는 뺀다.
function order(urls, statusRows, now = Date.now()) {
  const status = new Map(statusRows.map(s => [s.url, s]));
  const due = [];
  urls.forEach(url => {
    const s = status.get(url);
    if (!s) return due.push({ url, group: 0, age: Infinity });
    const age = now - new Date(s.checked_at).getTime();
    if (age < RECENT_MS) return;
    due.push({ url, group: s.state === 'error' || s.state === 'timeout' ? 1 : 2, age });
  });
  return due.sort((a, b) => a.group - b.group || b.age - a.age).map(x => x.url);
}

async function handler(req, res) {
  const started = Date.now();
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'not allowed' });
  }
  const trigger = /vercel-cron/i.test(req.headers['user-agent'] || '') ? 'cron' : 'manual';
  const links = await loadLinks();
  const urls = [...new Set(links.map(l => l.url))];
  const statusRes = await rpc('get_doc_link_status', { p_secret: secret });
  if (!statusRes.ok) return res.status(502).json({ error: 'status read failed', detail: (await statusRes.text()).slice(0, 200) });
  const queue = order(urls, await statusRes.json(), started);
  const max = Number.parseInt(new URL(req.url, SITE).searchParams.get('max') || '', 10);
  const { results, remaining } = await checkUrls(max > 0 ? queue.slice(0, max) : queue, { deadline: started + START_BUDGET_MS });
  const left = remaining.length + (max > 0 ? Math.max(queue.length - max, 0) : 0);
  if (results.length) {
    const saved = await rpc('record_doc_link_checks', { p_secret: secret, p_trigger: trigger, p_results: results, p_remaining: left });
    if (!saved.ok) return res.status(502).json({ error: 'save failed', detail: (await saved.text()).slice(0, 200) });
  }
  const count = state => results.filter(r => r.state === state).length;
  res.setHeader('cache-control', 'no-store');
  return res.status(200).json({
    trigger,
    links: urls.length,
    checked: results.length,
    remaining: left,
    recent: urls.length - queue.length,
    seconds: Math.round((Date.now() - started) / 1000),
    ok: count('ok'),
    blocked: count('blocked'),
    failed: count('error') + count('timeout'),
    notFound: results.filter(r => r.code === 404 || r.code === 410 || /ENOTFOUND/.test(r.detail || ''))
  });
}

module.exports = handler;
module.exports.checkUrls = checkUrls;
module.exports.order = order;
