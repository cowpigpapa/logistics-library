"""용어 검수표 각 줄에 실제 문서 문장(앞뒤 한 문장씩)을 붙인다 → term_ctx.json"""
import glob, html, json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
S = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))).replace(os.sep, '/') + '/'

def text_of(fragment):
    fragment = re.sub(r'<(svg|script|style|figure)\b.*?</\1>', ' ', fragment, flags=re.S)
    blocks = re.findall(r'<(p|li|td|th|h[1-6]|dd|dt|figcaption|blockquote)\b[^>]*>(.*?)</\1>', fragment, flags=re.S)
    out = []
    for _, b in blocks:
        t = html.unescape(re.sub(r'<[^>]+>', '', b))
        t = re.sub(r'\s+', ' ', t).strip()
        if t:
            out.append(t)
    return out

pages = []
for f in sorted(glob.glob(ROOT + 'library/*/*.html')):
    src = open(f, encoding='utf-8').read()
    m = re.search(r'<article class="lib-article">(.*?)</article>', src, re.S)
    if not m:
        continue
    title = html.unescape(re.search(r'<h1 class="lib-doc-title">(.*?)</h1>', src, re.S).group(1))
    title = re.sub(r'<[^>]+>', '', title)
    rel = f.replace('\\', '/').split('/library/')[1][:-5]
    pages.append({'url': '/library/' + rel, 'title': title, 'blocks': text_of(m.group(1))})
print('pages', len(pages))

def plain(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s or ''))).strip()

SENT = re.compile(r'(?<=[.!?])\s+(?=\S)')

def snippet(block, start, end):
    """block 안에서 [start,end)를 포함한 문장과 앞뒤 한 문장."""
    spans, pos = [], 0
    for part in SENT.split(block):
        i = block.index(part, pos); spans.append((i, i + len(part))); pos = i + len(part)
    k = next(i for i, (a, b) in enumerate(spans) if a <= start < b or (start >= a and i == len(spans) - 1))
    a = spans[max(0, k - 1)][0]; b = spans[min(len(spans) - 1, k + 1)][1]
    s = block[a:b]
    if len(s) > 320:   # 너무 길면 해당 문장만, 그래도 길면 앞뒤를 자른다
        a, b = spans[k]; s = block[a:b]
        if len(s) > 320:
            lo = max(a, start - 140); hi = min(b, end + 140)
            s = ('…' if lo > a else '') + block[lo:hi] + ('…' if hi < b else '')
            a = lo - (1 if lo > a else 0)
    return s, start - block.index(s.lstrip('…')) if s.lstrip('…') in block else None

def pages_for(files):
    if not files:
        return pages
    urls = set()
    for f in files:
        f = f.replace(chr(92), '/')
        if f.startswith('ctu-library'):
            urls |= {p['url'] for p in pages if p['url'].startswith('/library/ctu-code/')}
        elif '-docs/' in f:
            i = f.rsplit('/', 1)[1][:-5]
            urls |= {p['url'] for p in pages if p['url'].endswith('/' + i)}
    sel = [p for p in pages if p['url'] in urls]
    return sel or pages

def find(needles, scope, limit=2):
    hits = []
    for pg in scope:
        for b in pg['blocks']:
            for nd in needles:
                m = nd.search(b) if hasattr(nd, 'search') else None
                if not m:
                    continue
                s, _ = snippet(b, m.start(), m.end())
                hits.append({'url': pg['url'], 'title': pg['title'], 'text': s, 'hit': m.group(0)})
                break
            if hits and hits[-1]['url'] == pg['url']:
                break   # 한 문서에서 한 문장만
        if len(hits) >= limit:
            break
    return hits

rows = json.load(open(os.path.join(S, 'terms_dataset.json'), encoding='utf-8'))
out, miss = {}, []
for r in rows:
    frm, to = plain(r['from']), plain(r['to'])
    pend = r['group'] == '결정 필요'
    if r['id'] == 't009':
        needles = [re.compile(r'\d[\d,.]*kg\b')]
    elif pend:
        parts = [p.strip() for p in re.split(r'\s*(?:/|→|\(|\))\s*', frm) if len(p.strip()) >= 2]
        needles = [re.compile(re.escape(p)) for p in parts]
    else:
        alts = [p.strip() for p in to.split(' / ')] if ' / ' in to else [to]
        needles = [re.compile(re.escape(p)) for p in alts if len(p) >= 2]
    scope = pages_for(r['files'])
    hits = []
    ex = plain(r['ex_to'])
    if ex and len(ex) >= 4 and not pend:
        # 바꾼 자리의 짧은 문맥으로 먼저 찾고, 그 안의 바뀐 말을 표시한다
        exm = [h for h in find([re.compile(re.escape(ex))], scope) if to in h['text']]
        for h in exm:
            h['hit'] = to
        hits = exm
    if not hits and needles:
        hits = find(needles, scope)
    for h in hits:
        if not pend and r['id'] != 't009':
            src_from = frm.split(' / ')[0]
            h['before'] = h['text'].replace(h['hit'], src_from, 1) if h['hit'] in h['text'] else ''
        elif r['id'] == 't009':
            h['before'] = h['text'].replace(h['hit'], h['hit'][:-2] + ' kg', 1)
    if not hits:
        miss.append(r['id'])
    out[r['id']] = hits
json.dump(out, open(os.path.join(S, 'term_ctx.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('with ctx', sum(1 for v in out.values() if v), 'miss', len(miss))
print(miss)
