"""자료실 화면을 정적 HTML로 미리 만들어 검색엔진이 본문을 읽을 수 있게 한다(SEO 프리렌더).

언제 다시 실행하나
    문서 조각(*-docs/*.html), *-library.js의 DOCS·SECTIONS·STAGES·OFFICIAL, 카테고리 HTML(*-library.html,
    library.html), 상단 메뉴(tools/menu.py 실행 뒤), vercel.json의 /library 경로를 바꾼 뒤에는 반드시 다시 실행한다.
    실행하지 않으면 방문자는 예전 본문을 본다(미리 만든 문서 화면에서는 JS가 조각을 다시 불러오지 않는다).

    python tools/prerender.py            # library/ 와 sitemap.xml 을 다시 만든다
    python tools/prerender.py --check    # 다시 만들 것이 있으면 목록을 보여 주고 1로 끝난다(배포 전 확인용)

무엇을 만드나
    library/<slug>.html        카테고리 첫 화면(/library/<slug>)
    library/<slug>/<id>.html   문서 하나(/library/<slug>/<id>)
    sitemap.xml                홈·도구·개인정보처리방침 항목은 그대로 두고 자료실 주소를 모두 <lastmod>와 함께 다시 쓴다.
    Vercel은 rewrites보다 정적 파일을 먼저 내보내고 cleanUrls가 /library/charges/ch-dnd를 library/charges/ch-dnd.html로
    잇는다. 합쳐진 옛 문서 주소나 없는 주소는 정적 파일이 없으니 지금처럼 vercel.json rewrites로 카테고리 페이지에 간다.

어떻게 만드나
    1. vercel.json의 rewrites에서 /library/<slug> → 카테고리 HTML을, 그 HTML의 *-library.js에서 BASE·DOCS를 읽는다
       (Node로 JS를 실행해 DOCS 배열만 꺼낸다).
    2. 작은 로컬 서버(Vercel의 cleanUrls·rewrites 흉내, library/ 폴더는 무시)를 띄우고 headless Chrome 하나를
       DevTools 프로토콜(Node 내장 WebSocket)로 움직여 각 주소를 연다(탭 8개 동시, 이미지 끔, 약 30초). 페이지 JS가 실제로 그린 #libraryView를 그대로 가져오므로 JS 화면과 마크업이 같다.
    3. 원본 카테고리 HTML(head·메뉴·푸터·스크립트 그대로)에 제목·설명·canonical·OG·JSON-LD를 바꿔 넣고
       #libraryView 안에 그 마크업을 채운다. 문서 화면에는 data-prerendered="<id>@<DOCS_VERSION>"을 붙여, 페이지 JS가 같은 문서면
       조각을 다시 불러오지 않게 한다(깜박임 없음). 첫 화면은 JS가 같은 마크업을 동기적으로 다시 그린다.
    dateModified·lastmod: 문서 조각(CTU는 ctu-library.js)의 마지막 커밋 날짜, 커밋 안 된 변경이 있으면 파일 수정 시각.
    tools/prerender-dates.json에 주소별 내용 해시와 날짜를 적어 두고, 내용이 그대로면 그 날짜를 계속 쓴다(커밋 뒤 날짜만
    바뀌는 일 없음). 이 파일도 library/와 함께 커밋한다. tools/는 .vercelignore로 배포에서 빠진다.

배포 전 순서: (tools/menu.py 실행 →) python tools/prerender.py → python tools/prerender.py --check 가 0으로 끝나는지 확인
    → library/ · sitemap.xml · tools/prerender-dates.json 을 함께 커밋.

필요한 것: Python 3.10+, Node, Chrome 계열 브라우저(Playwright의 chrome-headless-shell이 가장 빠르다; 환경변수 CHROME으로 지정 가능).
문서 조각은 읽기만 한다.
"""
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import threading
import urllib.parse
from datetime import datetime, timezone, timedelta
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
import build_home as frame  # 화면 틀(메인과 같은 왼쪽 색인 + 오른쪽 화면)
OUT = ROOT / 'library'
DATES = ROOT / 'tools' / 'prerender-dates.json'
ORIGIN = 'https://logistics.onharu.app'
SITE_NAME = 'Logistics Library'
KST = timezone(timedelta(hours=9))
ORG = {'@type': 'Organization', 'name': 'ONHARU', 'url': 'https://onharu.app/'}


# ---------- 카테고리와 문서 목록 ----------

def read(path):
    return Path(path).read_text(encoding='utf-8')


def load_vercel():
    return json.loads(read(ROOT / 'vercel.json'))


def categories(vercel):
    """vercel.json의 /library/<slug> → /<page> rewrites에서 카테고리를 찾는다."""
    cats = []
    for r in vercel.get('rewrites', []):
        m = re.fullmatch(r'/library/([a-z0-9-]+)', r['source'])
        if not m:
            continue
        page = ROOT / (r['destination'].lstrip('/') + '.html')
        src = read(page)
        js = re.search(r'<script src="/([a-z-]+-library\.js)\?v=[^"]*"></script>', src).group(1)
        js_src = read(ROOT / js)
        docs_dir = re.search(r'fetch\(`/([a-z-]+-docs)/\$\{doc\.id\}\.html', js_src)
        crumb = re.search(r'lib-crumb"><a href="[^"]*">← ([^<]+)</a>', js_src)
        cats.append({
            'slug': m.group(1),
            'base': '/library/' + m.group(1),
            'page': page,
            'js': ROOT / js,
            'docs_dir': ROOT / docs_dir.group(1) if docs_dir else None,
            'name': html.unescape(crumb.group(1)).strip() if crumb else m.group(1),
        })
    return cats


NODE_DOCS = r"""
const fs = require('fs'), vm = require('vm');
const [file, base] = process.argv.slice(1);
const src = fs.readFileSync(file, 'utf8');
const end = src.lastIndexOf('})();');
const code = src.slice(0, end) +
  ';globalThis.__DOCS = DOCS.map(d => ({id: d.id, title: d.title, short: d.short || "", summary: d.summary || ""}));' +
  src.slice(end);
const noop = () => {};
const ctx = {
  location: { pathname: base + '/__none__', search: '', hash: '' },
  document: { createElement: () => ({ content: { querySelectorAll: () => [] }, innerHTML: '' }), getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener: noop, head: { append: noop } },
  history: { replaceState: noop }, sessionStorage: { getItem: () => null, setItem: noop },
  URLSearchParams, console,
};
ctx.window = ctx;
vm.runInNewContext(code, ctx);
process.stdout.write(JSON.stringify(ctx.__DOCS));
"""


def docs_version(cat):
    """문서 조각을 고치면 DOCS_VERSION을 올리므로, 버전이 다르면 페이지 JS가 조각을 새로 불러온다."""
    m = re.search(r"const DOCS_VERSION = '([^']+)'", read(cat['js']))
    return m.group(1) if m else ''


def load_docs(cat):
    out = subprocess.run(['node', '-e', NODE_DOCS, str(cat['js']), cat['base']],
                         capture_output=True, check=True, encoding='utf-8')
    return json.loads(out.stdout)


def hero_images():
    """홈 화면 카드 그림을 카테고리 대표 그림(og:image)으로 쓴다."""
    src = read(ROOT / 'index.html')
    images = {}
    for m in re.finditer(r'<a class="entry-image[^"]*" href="([^"]+)"[^>]*>\s*<img src="([^"]+)"', src):
        img = m.group(2).split('?')[0]
        # SNS 미리보기는 SVG를 받지 않으므로 같은 이름의 PNG가 있으면 그것을 쓴다.
        if img.endswith('.svg') and (ROOT / img.lstrip('/')).with_suffix('.png').exists():
            img = img[:-4] + '.png'
        images.setdefault(m.group(1), ORIGIN + img)
    return images


# ---------- 날짜 ----------

def git(*args):
    return subprocess.run(['git', *args], cwd=ROOT, capture_output=True, encoding='utf-8').stdout.strip()


_HISTORY = None


def history():
    """파일별 (마지막 커밋 날짜, 처음 커밋 날짜)와 커밋 안 된 파일 목록을 git 두 번으로 읽는다."""
    global _HISTORY
    if _HISTORY is None:
        last, first = {}, {}
        date = None
        for line in git('log', '--format=@@%cI', '--name-only', '--no-renames').splitlines():
            if line.startswith('@@'):
                date = line[2:]
            elif line:
                last.setdefault(line, date)
                first[line] = date
        dirty = set()
        for entry in git('status', '--porcelain', '-z', '--untracked-files=all').split('\0'):
            if len(entry) > 3:
                dirty.add(entry[3:])
        _HISTORY = last, first, dirty
    return _HISTORY


def modified(path):
    """마지막 커밋 날짜. 커밋 안 된 변경이 있거나 커밋이 없으면 파일 수정 시각."""
    rel = Path(path).relative_to(ROOT).as_posix()
    last, _, dirty = history()
    if rel in dirty or rel not in last:
        return datetime.fromtimestamp(Path(path).stat().st_mtime, KST).replace(microsecond=0).isoformat()
    return last[rel]


def published(path, fallback):
    return history()[1].get(Path(path).relative_to(ROOT).as_posix(), fallback)


class Ledger:
    """주소별 날짜 장부(tools/prerender-dates.json). 내용(날짜 제외)이 그대로면 기록한 날짜를 다시 쓰므로
    커밋 뒤 다시 실행해도 날짜만 바뀌는 일이 없다. 내용이 바뀌면 그때의 커밋 날짜·수정 시각을 새로 적는다."""

    def __init__(self):
        try:
            self.old = json.loads(read(DATES))
        except (OSError, ValueError):
            self.old = {}
        self.new = {}

    def stamp(self, key, content, modified_fallback, published_fallback=None):
        digest = hashlib.sha256(content.encode('utf-8')).hexdigest()[:16]
        rec = self.old.get(key) or {}
        date = rec['modified'] if rec.get('hash') == digest else modified_fallback
        pub = rec.get('published') or published_fallback or date
        self.new[key] = {'hash': digest, 'modified': date, 'published': pub}
        return date, pub

    def text(self):
        return json.dumps(self.new, ensure_ascii=False, indent=1, sort_keys=True) + '\n'


# ---------- 로컬 서버(Vercel 흉내) ----------

def make_handler(rewrites):
    class Handler(SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

        def translate_path(self, path):
            path = urllib.parse.unquote(urllib.parse.urlsplit(path).path)
            # 미리 만든 library/ 결과는 쓰지 않는다(늘 원본 페이지와 원본 조각으로 다시 그린다).
            if path != '/library' and not path.startswith('/library/'):
                for candidate in (path, path + '.html'):
                    local = ROOT / candidate.lstrip('/')
                    if candidate != '/' and local.is_file():
                        return str(local)
            for source, dest in rewrites:
                if source.fullmatch(path):
                    path = dest
                    break
            local = ROOT / (path.lstrip('/') or 'index.html')
            return str(local if local.is_file() else local.with_suffix('.html'))

    return Handler


def start_server(vercel):
    rewrites = [(re.compile(re.sub(r':[a-z]+', '[^/]+', r['source'])), r['destination'])
                for r in vercel.get('rewrites', [])]
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(make_handler(rewrites), directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


# ---------- headless Chrome ----------

def find_chrome():
    if os.environ.get('CHROME'):
        return os.environ['CHROME']
    pw = Path(os.environ.get('LOCALAPPDATA', Path.home() / '.cache')) / 'ms-playwright'
    shells = sorted(pw.glob('chromium_headless_shell-*/*/chrome-headless-shell*'), reverse=True)
    shells += sorted((Path.home() / '.cache' / 'ms-playwright').glob('chromium_headless_shell-*/*/chrome-headless-shell'),
                     reverse=True)
    for s in shells:
        if s.suffix in ('', '.exe') and s.is_file():
            return str(s)
    for c in (r'C:\Program Files\Google\Chrome\Application\chrome.exe',
              r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
              '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
              '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'):
        if Path(c).is_file():
            return c
    sys.exit('Chrome을 찾지 못했습니다. 환경변수 CHROME에 chrome-headless-shell 또는 chrome 경로를 넣으세요.')


NODE_CAPTURE = r"""
// headless Chrome 하나를 DevTools 프로토콜로 움직여 여러 주소의 #libraryView를 가져온다.
const { spawn } = require('child_process'), fs = require('fs'), os = require('os'), path = require('path');
const chrome = process.argv[1];
const urls = JSON.parse(fs.readFileSync(0, 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const READY = `(() => {
  const v = document.getElementById('libraryView');
  if (document.readyState !== 'complete' || !v || !v.firstElementChild || v.querySelector('.lib-loading')) return null;
  if (v.querySelector('.lib-article h3:not([data-num])')) return null;  // site-shell.js가 소제목 번호 배지를 단 뒤에
  return JSON.stringify({ title: document.title, html: v.innerHTML });
})()`;
(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'll-prerender-'));
  const args = ['--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--disable-gpu',
    '--blink-settings=imagesEnabled=false', 'about:blank'];
  if (!/headless-shell/i.test(path.basename(chrome))) args.unshift('--headless=new');
  const proc = spawn(chrome, args, { stdio: 'ignore' });
  let endpoint;
  for (let i = 0; i < 300 && !endpoint; i++) {
    try {
      const [port, p] = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n');
      if (p) endpoint = `ws://127.0.0.1:${port.trim()}${p.trim()}`;
    } catch {}
    if (!endpoint) await sleep(100);
  }
  if (!endpoint) throw new Error('Chrome did not start');
  const ws = new WebSocket(endpoint);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let seq = 0;
  const pending = new Map();
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (!m.id || !pending.has(m.id)) return;
    const { res, rej } = pending.get(m.id);
    pending.delete(m.id);
    m.error ? rej(new Error(m.error.message)) : res(m.result);
  };
  const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
    const id = ++seq;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  async function capture(url) {
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    await send('Page.navigate', { url }, sessionId);
    let out = null;
    for (let i = 0; i < 300 && !out; i++) {
      await sleep(100);
      try { out = (await send('Runtime.evaluate', { expression: READY, returnByValue: true }, sessionId)).result.value; } catch {}
    }
    await send('Target.closeTarget', { targetId });
    return out ? { url, ...JSON.parse(out) } : { url, title: null, html: null };
  }
  const results = new Array(urls.length);
  let next = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (next < urls.length) {
      const i = next++;
      results[i] = await capture(urls[i]);
    }
  }));
  process.stdout.write(JSON.stringify(results));
  ws.close();
  proc.kill();
  await sleep(300);
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
"""


def capture(chrome, urls):
    """주소마다 페이지 JS가 그린 #libraryView 마크업과 document.title을 돌려준다."""
    out = subprocess.run(['node', '-e', NODE_CAPTURE, chrome], input=json.dumps(urls), capture_output=True,
                         encoding='utf-8', timeout=1800)
    if out.returncode:
        sys.exit('Chrome으로 페이지를 그리지 못했습니다:\n' + out.stderr)
    return {r['url']: (r['html'], r['title']) for r in json.loads(out.stdout)}


VIEW_OPEN = re.compile(r'<section\b[^>]*\bid="libraryView"[^>]*>')


# ---------- 페이지 조립 ----------

def describe(text, limit=155):
    text = re.sub(r'\s+', ' ', text or '').strip()
    # CTU 요약은 CubeStow와 같이 쓰므로 "Cubestow가 …" 구절이 있다. 이 사이트 설명에서는 그 구절을 뺀다.
    text = re.sub(r',\s*Cubestow[^,.]*', '', text)
    text = re.sub(r'\s*(?:과|와)\s*Cubestow(?:의)?\s*[^,.]*?(?=을 정리합니다|$)', '', text)
    text = re.sub(r'\s*(?:과|와)\s*Cubestow\s*\S+$', '', text).strip()
    if len(text) <= limit:
        return text
    cut = text[:limit]
    space = max(cut.rfind(' '), cut.rfind(','), cut.rfind('·'))
    return (cut[:space] if space > limit * 0.6 else cut).rstrip(' ,·(') + '…'


def attr(v):
    return html.escape(v, quote=True)


def json_ld(data):
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False).replace('</', '<\\/') + '</script>'


def build_page(template, *, title, description, url, image, og_type, ld, inner, marker):
    page = template
    page = re.sub(r'<title>.*?</title>', lambda _: f'<title>{html.escape(title, quote=False)}</title>', page, count=1, flags=re.S)
    page = re.sub(r'<meta name="description" content="[^"]*">',
                  lambda _: f'<meta name="description" content="{attr(description)}">', page, count=1)
    meta = [
        f'<link rel="canonical" href="{attr(url)}">',
        f'<meta property="og:type" content="{og_type}">',
        f'<meta property="og:site_name" content="{SITE_NAME}">',
        '<meta property="og:locale" content="ko_KR">',
        f'<meta property="og:title" content="{attr(title)}">',
        f'<meta property="og:description" content="{attr(description)}">',
        f'<meta property="og:url" content="{attr(url)}">',
    ]
    if image:
        meta += [f'<meta property="og:image" content="{attr(image)}">',
                 '<meta name="twitter:card" content="summary_large_image">']
    else:
        meta.append('<meta name="twitter:card" content="summary">')
    meta.append(json_ld(ld))
    page = re.sub(r'<link rel="canonical" href="[^"]*">', lambda _: '\n  '.join(meta), page, count=1)
    open_tag = VIEW_OPEN.search(page)
    tag = open_tag.group(0)
    if marker:
        tag = tag[:-1] + f' data-prerendered="{attr(marker)}">'
    close = page.index('</section>', open_tag.end())
    page = page[:open_tag.start()] + tag + inner + page[close:]
    return page


def breadcrumb(items):
    return {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'name': name, 'item': url} for i, (name, url) in enumerate(items)]}


def short_title(doc):
    return doc['short'] or doc['title'].split(' — ')[0]


# ---------- 색인 화면 틀(메인과 같은 화면)로 옮기기 ----------
# 카테고리 페이지 JS가 그린 #libraryView를 받아, 메인(index.html)과 같은 틀(왼쪽 색인 + 오른쪽 화면)에 넣는다.
# 오른쪽 화면 내용은 library-index.js가 화면을 옮길 때 그대로 가져다 쓴다(이 페이지의 #liView).

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
TAG = re.compile(r'<(/?)([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*?(/?)>')


def element_end(src, start):
    """src[start]에서 시작하는 요소가 끝나는 위치(닫는 태그 뒤)."""
    depth = 0
    for m in TAG.finditer(src, start):
        name = m.group(2).lower()
        if name in VOID or m.group(3):
            if depth == 0:
                return m.end()
            continue
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.end()
    return len(src)


def find_element(src, pattern):
    """여는 태그가 pattern(정규식)에 맞는 첫 요소의 (시작, 끝). 없으면 None."""
    m = re.search(pattern, src)
    return (m.start(), element_end(src, m.start())) if m else None


def drop_elements(src, pattern):
    while (span := find_element(src, pattern)):
        src = src[:span[0]] + src[span[1]:]
    return src


def children(src):
    """맨 위 요소들을 (태그 이름, 마크업)으로."""
    out, pos = [], 0
    while (m := TAG.search(src, pos)):
        if m.group(1):
            pos = m.end()
            continue
        end = element_end(src, m.start())
        out.append((m.group(2).lower(), src[m.start():end]))
        pos = end
    return out


def inner_of(markup):
    return markup[markup.index('>') + 1:markup.rindex('</')]


def doc_inner(inner):
    """문서 화면: 카테고리 페이지의 빵부스러기와 이전·다음 줄은 뺀다(색인이 대신한다)."""
    inner = drop_elements(inner, r'<nav class="lib-crumb"')
    inner = drop_elements(inner, r'<nav class="bat-pager"')
    # 문서 제목(h1) 바로 아래 소제목이 h3이라 제목 단계가 건너뛴다. 모양(CSS)은 그대로 두고 화면 낭독기용 단계만 맞춘다.
    if '<h2' not in inner:
        inner = re.sub(r'<h3(?![^>]*aria-level)', '<h3 aria-level="2"', inner)
        inner = re.sub(r'<h4(?![^>]*aria-level)', '<h4 aria-level="3"', inner)
    return frame.images.responsive(unique_svg_ids(inner), frame.DOC_SIZES)


def unique_svg_ids(markup):
    """한 문서에 같은 도해 생성기로 만든 SVG가 여럿이면 화살표 marker 등의 id가 겹친다. SVG마다 id 뒤에 번호를 붙인다."""
    seen, out, pos, k = set(), [], 0, 0
    for m in re.finditer(r'<svg\b', markup):
        if m.start() < pos:
            continue
        end = element_end(markup, m.start())
        svg = markup[m.start():end]
        ids = re.findall(r'\sid="([^"]+)"', svg)
        if any(i in seen for i in ids):
            k += 1
            for i in ids:
                svg = re.sub(r'(\sid="|url\(#|href="#)' + re.escape(i) + r'(["\)])', lambda x: f'{x.group(1)}{i}-{k}{x.group(2)}', svg)
        seen.update(re.findall(r'\sid="([^"]+)"', svg))
        out.append(markup[pos:m.start()]); out.append(svg)
        pos = end
    out.append(markup[pos:])
    return ''.join(out)


def overview_inner(slug, landing, overview_doc):
    """개요 화면: 메인 카드(설명·그림) + 알림 + '설명 및 요약' 문서 + 원문과 공식 자료. library-index.js의 옛 개요 화면과 같은 구성."""
    card = frame.CARDS.get(slug, '').replace(' loading="lazy"', '')   # 개요 맨 위 그림은 바로 받는다
    # 이 페이지의 제목은 카드 이름이다(h1).
    card = re.sub(r'<h2 (id="[^"]+" class="li-entry-h">.*?)</h2>', r'<h1 \1</h1>', card, count=1, flags=re.S)
    out = f'<div class="li-home">{card}</div>'
    span = find_element(landing, r'<div class="lib-notice"')
    if span:
        out += f'<div class="li-notice">{inner_of(landing[span[0]:span[1]])}</div>'
    if overview_doc:
        doc = doc_inner(overview_doc).replace('<h1 class="lib-doc-title">', '<h2 class="lib-doc-title">', 1)
        doc = re.sub(r'(<h2 class="lib-doc-title">.*?)</h1>', r'\1</h2>', doc, count=1, flags=re.S)
        out += f'<div class="li-ov-doc">{doc}</div>'
    span = find_element(landing, r'<details class="[^"]*\blib-official\b')
    if span:
        kids = children(inner_of(landing[span[0]:span[1]]))
        table = next((m for t, m in kids if 'class="lib-table-wrap' in m[:60]), '')
        notes = ''.join(m for t, m in kids if t != 'summary' and 'class="lib-table-wrap' not in m[:60])
        out += f'<section class="li-src"><h2>원문과 공식 자료</h2>{table}{notes}</section>'
    # 관련 영상(카테고리 JS의 VIDEOS): 썸네일 카드 목록만 옮긴다.
    span = find_element(landing, r'<details class="[^"]*\blib-videos\b')
    if span:
        kids = children(inner_of(landing[span[0]:span[1]]))
        videos = next((m for t, m in kids if 'class="lib-video-list' in m[:60]), '')
        if videos:
            out += f'<section class="li-videos"><h2>관련 영상</h2>{videos}</section>'
    return out


def seo_head(*, title, description, url, image, og_type, ld):
    meta = [
        f'<title>{html.escape(title, quote=False)}</title>',
        f'<meta name="description" content="{attr(description)}">',
        f'<link rel="canonical" href="{attr(url)}">',
        f'<meta property="og:type" content="{og_type}">',
        f'<meta property="og:site_name" content="{SITE_NAME}">',
        '<meta property="og:locale" content="ko_KR">',
        f'<meta property="og:title" content="{attr(title)}">',
        f'<meta property="og:description" content="{attr(description)}">',
        f'<meta property="og:url" content="{attr(url)}">',
    ]
    if image:
        meta += [f'<meta property="og:image" content="{attr(image)}">', '<meta name="twitter:card" content="summary_large_image">']
    else:
        meta.append('<meta name="twitter:card" content="summary">')
    meta.append(json_ld(ld))
    return '\n  '.join(meta)


def shell_page(seo, inner, route, tree):
    page = frame.page(seo, inner, route)
    return page.replace('<nav class="li-tree" id="liTree"></nav>', f'<nav class="li-tree" id="liTree">{tree}</nav>', 1)


def plain_text(markup):
    markup = re.sub(r'<(svg|script|style)\b.*?</\1>', ' ', markup, flags=re.S)
    markup = re.sub(r'<(?:br|/p|/li|/h[1-6]|/td|/th|/tr|/div|/figcaption)\b[^>]*>', ' ', markup)
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', markup))).strip()


# ---------- 사이트맵 ----------

def sitemap(library_entries, ledger):
    old = read(ROOT / 'sitemap.xml')
    lines = []
    for m in re.finditer(r'<url>(.*?)</url>', old, re.S):
        body = m.group(1)
        loc = re.search(r'<loc>(.*?)</loc>', body).group(1)
        path = loc[len(ORIGIN):] or '/'
        if path == '/library' or path.startswith('/library/'):
            continue
        source = ROOT / ('index.html' if path == '/' else path.lstrip('/') + '.html')
        extra = ''.join(re.findall(r'<(?:changefreq|priority)>[^<]*</(?:changefreq|priority)>', body))
        lastmod = (f'<lastmod>{ledger.stamp(loc, read(source), modified(source))[0]}</lastmod>'
                   if source.is_file() else '')
        lines.append(f'  <url><loc>{loc}</loc>{lastmod}{extra}</url>')
    for loc, lastmod, extra in library_entries:
        lines.append(f'  <url><loc>{loc}</loc><lastmod>{lastmod}</lastmod>{extra}</url>')
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + '\n'.join(lines) + '\n</urlset>\n')


# ---------- 실행 ----------

def main():
    check = '--check' in sys.argv
    vercel = load_vercel()
    cats = categories(vercel)
    images = hero_images()
    chrome = find_chrome()
    server = start_server(vercel)
    local = f'http://127.0.0.1:{server.server_address[1]}'
    print(f'Chrome: {chrome}')

    jobs = []  # (카테고리, 문서 또는 None=첫 화면)
    warnings = []
    for cat in cats:
        cat['docs'] = load_docs(cat)
        jobs.append((cat, None))
        for doc in cat['docs']:
            if cat['docs_dir'] and not (cat['docs_dir'] / f"{doc['id']}.html").is_file():
                warnings.append(f"조각 없음, 건너뜀: {cat['docs_dir'].name}/{doc['id']}.html")
                continue
            jobs.append((cat, doc))

    def url(job):
        cat, doc = job
        # ?capture=1: 옛 카테고리 화면이 새 화면으로 넘기지 않게(site-shell.js)
        return local + cat['base'] + (f"/{doc['id']}" if doc else '') + '?capture=1'

    rendered = capture(chrome, [url(j) for j in jobs])
    results = [(j, rendered[url(j)]) for j in jobs]
    server.shutdown()

    files = {}
    entries = []
    ledger = Ledger()
    data = frame.index_data()
    overview_id = {c['slug']: c.get('overview') for g in data for c in g['cats']}
    search = []   # 본문 검색용(색인 검색칸): 문서마다 제목과 본문 글자
    fresh = []    # 문서마다 자료 확인일
    for (cat, doc), (inner, title) in results:
        template = read(cat['page'])
        landing = ORIGIN + cat['base']
        image = images.get(cat['base'])
        home = (SITE_NAME, ORIGIN + '/')
        if not inner:
            warnings.append(f"그리지 못함, 건너뜀: {cat['base']}/{doc['id'] if doc else ''}")
            continue
        if doc:
            source = cat['docs_dir'] / f"{doc['id']}.html" if cat['docs_dir'] else cat['js']
            url = f"{landing}/{doc['id']}"
            description = describe(doc['summary'] or doc['title'])
            body = doc_inner(inner)
            date, pub = ledger.stamp(url, 'shell1' + title + description + (image or '') + body, modified(source),
                                     published(source, modified(source)))
            ld = {'@context': 'https://schema.org', '@graph': [
                {'@type': 'TechArticle', '@id': url + '#article', 'headline': doc['title'], 'name': title,
                 'description': description, 'url': url, 'mainEntityOfPage': url, 'inLanguage': 'ko',
                 **({'image': [image]} if image else {}),
                 'datePublished': pub, 'dateModified': date,
                 'author': ORG, 'publisher': ORG,
                 'isPartOf': {'@type': 'CollectionPage', '@id': landing, 'name': cat['name'], 'url': landing}},
                breadcrumb([home, (cat['name'], landing), (short_title(doc), url)])]}
            seo = seo_head(title=title, description=description, url=url, image=image, og_type='article', ld=ld)
            route = f"{cat['base']}/{doc['id']}"
            page = shell_page(seo, frame.kicker(cat['slug']) + body, route, frame.tree_html(data, cat['slug'], doc['id']))
            files[OUT / cat['slug'] / f"{doc['id']}.html"] = page
            # 검색용 본문: 문서 머리(분류·중요도·제목·확인 날짜)와 소제목 바로가기는 뺀다(미리보기에 같은 말이 먼저 걸리지 않게).
            text = body
            for pat in (r'<span class="lib-doc-head"', r'<h1 class="lib-doc-title"', r'<p class="lib-checked"', r'<[a-z]+ class="[^"]*\btoc\b|<[a-z]+ class="[a-z-]*-toc\b'):
                text = drop_elements(text, pat)
            search.append({'u': route, 't': doc['title'], 'b': plain_text(text)})
            # 자료 확인일(문서 머리의 '자료 확인 YYYY-MM-DD' 등에서 마지막 날짜) → /linkcheck의 '자료 확인일' 표
            chk = re.search(r'<p class="lib-checked">(.*?)</p>', body, re.S)
            chk_text = plain_text(chk.group(1)) if chk else ''
            days = re.findall(r'20\d\d-\d\d-\d\d', chk_text)
            fresh.append({'u': route, 't': short_title(doc), 'c': cat['name'], 'd': days[-1] if days else '', 'k': chk_text[:120]})
            entries.append((cat['base'], url, date, ''))
        else:
            dates = [modified(cat['js']), modified(cat['page'])]
            if cat['docs_dir']:
                dates += [modified(p) for p in cat['docs_dir'].glob('*.html')
                          if p.stem in {d['id'] for d in cat['docs']}]
            description = re.search(r'<meta name="description" content="([^"]*)">', template)
            description = html.unescape(description.group(1)) if description else cat['name']
            ov = overview_id.get(cat['slug'])
            ov_html = rendered.get(f"{local}{cat['base']}/{ov}?capture=1", (None,))[0] if ov else None
            body = overview_inner(cat['slug'], inner, ov_html)
            date, _ = ledger.stamp(landing, 'shell1' + title + description + (image or '') + body,
                                   max(dates, key=lambda d: datetime.fromisoformat(d)))
            listed = [d for d in cat['docs'] if f"{cat['base']}/{d['id']}\"" in inner]
            ld = {'@context': 'https://schema.org', '@graph': [
                {'@type': 'CollectionPage', '@id': landing, 'name': title, 'description': description, 'url': landing,
                 'inLanguage': 'ko', **({'image': [image]} if image else {}), 'dateModified': date,
                 'publisher': ORG,
                 'isPartOf': {'@type': 'WebSite', 'name': SITE_NAME, 'url': ORIGIN + '/'},
                 'mainEntity': {'@type': 'ItemList', 'itemListElement': [
                     {'@type': 'ListItem', 'position': i + 1, 'url': f"{landing}/{d['id']}", 'name': d['title']}
                     for i, d in enumerate(listed)]}},
                breadcrumb([home, (cat['name'], landing)])]}
            seo = seo_head(title=title, description=description, url=landing, image=image, og_type='website', ld=ld)
            page = shell_page(seo, body, cat['base'], frame.tree_html(data, cat['slug']))
            files[OUT / f"{cat['slug']}.html"] = page
            entries.append((cat['base'], landing, date, '<changefreq>weekly</changefreq><priority>0.9</priority>'))

    # 사이트맵은 카테고리 순서(첫 화면 → 문서는 DOCS 순서)로 쓴다.
    order = {c['base']: i for i, c in enumerate(cats)}
    pos = {e[1]: i for i, e in enumerate(entries)}
    entries.sort(key=lambda e: (order[e[0]], e[3] == '', pos[e[1]]))
    files[ROOT / 'sitemap.xml'] = sitemap([(loc, date, extra) for _, loc, date, extra in entries], ledger)
    files[DATES] = ledger.text()
    # 본문 검색 데이터: 카테고리마다 한 파일(search/<slug>.<내용 해시>.json)로 나눠 동시에 받고, 받는 대로 결과에 더한다.
    # 파일 이름에 해시가 있어 오래 캐시하고(vercel.json /search/), 목록 search-manifest.json만 매번 확인한다.
    chunks = {}
    for d in search:
        chunks.setdefault(d['u'].split('/')[2], []).append(d)
    manifest = []
    for slug, docs in chunks.items():
        text = json.dumps(docs, ensure_ascii=False, separators=(',', ':')) + chr(10)
        name = f"search/{slug}.{hashlib.sha1(text.encode('utf-8')).hexdigest()[:10]}.json"
        files[ROOT / name] = text
        manifest.append('/' + name)
    files[ROOT / 'search-manifest.json'] = json.dumps(manifest, separators=(',', ':')) + chr(10)
    files[ROOT / 'freshness.json'] = json.dumps(sorted(fresh, key=lambda x: (x['d'], x['u'])), ensure_ascii=False, separators=(',', ':')) + chr(10)

    stale = [p for p in OUT.rglob('*.html') if p not in files] if OUT.exists() else []
    stale += [p for p in (ROOT / 'search').glob('*.json') if p not in files]
    stale += [p for p in (ROOT / 'search-index.json', ROOT / 'search-index-2.json') if p.is_file()]
    changed = [p for p, text in files.items() if not p.is_file() or p.read_bytes() != text.encode('utf-8')]

    for w in warnings:
        print('경고:', w)
    if check:
        for p in changed:
            print('다시 만들어야 함:', p.relative_to(ROOT).as_posix())
        for p in stale:
            print('지워야 함:', p.relative_to(ROOT).as_posix())
        sys.exit(1 if changed or stale else 0)

    for p in stale:
        p.unlink()
    for d in sorted((d for d in OUT.rglob('*') if d.is_dir()), reverse=True) if OUT.exists() else []:
        if not any(d.iterdir()):
            d.rmdir()
    for p, text in files.items():
        p.parent.mkdir(parents=True, exist_ok=True)
        if p in changed:
            p.write_bytes(text.encode('utf-8'))
    pages = sum(1 for p in files if p.parent == OUT or p.parent.parent == OUT)
    print(f'완료: 페이지 {pages}개(바뀜 {len([p for p in changed if p.suffix == ".html"])}개, 지움 {len(stale)}개), '
          f'sitemap.xml 주소 {len(entries)}개 + 기본 페이지')


if __name__ == '__main__':
    main()
