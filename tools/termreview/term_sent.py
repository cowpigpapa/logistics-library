"""용어 검수표: git 기록에서 실제로 고치기 전 문장과 고친 뒤 문장을 짝지어 줄마다 붙인다 → term_sent.json
기준: a26f08e(용어 작업 전) → a852f0e(Codex 2차 감사 후). 그 사이 커밋: 4eb83e5(1차 문구 통일), 43d7f5e(운영자 결정), a852f0e(2차)."""
import difflib, html, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding='utf-8')
S = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/')
BASE, AFTER = 'a26f08e', 'a852f0e'


def git(*a):
    r = subprocess.run(['git', *a], cwd=REPO, capture_output=True)
    return r.stdout.decode('utf-8', 'replace') if r.returncode == 0 else None


SENT = re.compile(r'(?<=[.!?。])\s+(?=\S)|(?<=다\.)(?=\S)')


def sentences(src, js=False):
    if js:
        src = src.replace('\\n', '\n').replace("\\'", "'").replace('\\"', '"')
    src = re.sub(r'<(script|style)\b.*?</\1>', ' ', src, flags=re.S)
    # SVG 글자는 그림 한 장을 한 줄로
    src = re.sub(r'</?(?:tspan|text)\b[^>]*>', ' ', src)
    src = re.sub(r'<(?:br|/p|/li|/h[1-6]|/td|/th|/tr|/div|/figcaption|/dt|/dd|/summary|/caption|/blockquote|/svg|/g)\b[^>]*>', '\n', src)
    src = html.unescape(re.sub(r'<[^>]+>', ' ', src))
    out = []
    for line in src.split('\n'):
        line = re.sub(r'\s+', ' ', line).strip()
        if len(line) < 2:
            continue
        for s in SENT.split(line):
            s = s.strip()
            if len(s) >= 2:
                out.append(s)
    return out


files = [f for f in git('diff', '--name-only', BASE, AFTER).split() if f.endswith(('.html', '.js'))
         and not f.startswith(('library/', 'translate/')) and 'data' not in f and f not in ('term-review.html',)]
pairs = []   # (file, before, after)
for f in files:
    old, new = git('show', f'{BASE}:{f}'), git('show', f'{AFTER}:{f}')
    if not old or not new:
        continue
    a, b = sentences(old, f.endswith('.js')), sentences(new, f.endswith('.js'))
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op != 'replace':
            continue
        olds, news = a[i1:i2], b[j1:j2]
        used = set()
        for o in olds:
            best, bj = 0, None
            for j, n in enumerate(news):
                if j in used:
                    continue
                r = difflib.SequenceMatcher(None, o, n, autojunk=False).ratio()
                if r > best:
                    best, bj = r, j
            if bj is not None and best >= 0.55:
                used.add(bj)
                pairs.append((f, o, news[bj]))
print('files', len(files), 'pairs', len(pairs))

# 문서 주소: 파일 → /library/<slug>/<id>
pages = {}
for g in json.loads(open(REPO + '/library-index-data.js', encoding='utf-8').read().split('=', 1)[1].rstrip().rstrip(';')):
    for c in g['cats']:
        for i, d in c['docs'].items():
            pages[i] = (f"/library/{c['slug']}/{i}", d['title'], c['name'])
current = {}
for root, _, fs in os.walk(REPO + '/library'):
    for fn in fs:
        if fn.endswith('.html') and os.path.basename(root) != 'library':
            current[fn[:-5]] = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', open(os.path.join(root, fn), encoding='utf-8').read())))


def where(f, after):
    if '-docs/' in f:
        i = f.rsplit('/', 1)[1][:-5]
        if i in pages:
            return pages[i]
    key = after[:30]
    for i, txt in current.items():
        if key in txt and i in pages:
            return pages[i]
    return ('', os.path.basename(f), '')


def plain(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s or ''))).strip()


rows = json.load(open(os.path.join(S, 'terms_dataset.json'), encoding='utf-8'))
out, miss = {}, []
for r in rows:
    if r['group'] == '결정 필요':
        continue
    frm, to = plain(r['from']), plain(r['to'])
    if r['id'] == 't009':
        test = lambda o, n: bool(re.search(r'\d kg\b', o)) and bool(re.search(r'\dkg\b', n))
    else:
        fa = [x.strip() for x in frm.split(' / ') if x.strip()]
        ta = [x.strip() for x in to.split(' / ') if x.strip()]
        fa = [re.sub(r'\s*\(.*?\)$', '', x) if '숫자' in x else x for x in fa]
        test = lambda o, n, fa=fa, ta=ta: any(x in o for x in fa) and any(y in n for y in ta)
    scope = set(r['files'])
    hits, seen = [], set()
    for f, o, n in pairs:
        if scope and f not in scope:
            continue
        if test(o, n) and (o, n) not in seen:
            seen.add((o, n))
            url, title, cat = where(f, n)
            hits.append({'url': url, 'title': title, 'cat': cat, 'before': o[:600], 'after': n[:600], 'file': f})
        if len(hits) >= int(os.environ.get('LIMIT', '3')):
            break
    if not hits and scope:   # 파일 목록 밖에서도 찾아본다
        for f, o, n in pairs:
            if test(o, n) and (o, n) not in seen:
                seen.add((o, n)); url, title, cat = where(f, n)
                hits.append({'url': url, 'title': title, 'cat': cat, 'before': o[:600], 'after': n[:600], 'file': f})
            if len(hits) >= int(os.environ.get('LIMIT', '3')):
                break
    out[r['id']] = hits
    if not hits:
        miss.append(r['id'])
json.dump(out, open(os.path.join(S, os.environ.get('OUT', 'term_sent.json')), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('rows', len(out), 'with sentences', len(out) - len(miss), 'miss', len(miss), miss[:40])
