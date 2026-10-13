"""사이트 안 링크 점검: 생성된 페이지(index.html, 404.html, library/, tool/)의 내부 링크가 실제 주소와 문서 안 앵커(#…)로 가는지 본다.

    python tools/check_links.py     # 깨진 링크가 있으면 목록을 보여 주고 1로 끝난다(배포 전 확인용)"""
import collections, glob, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
norm = lambda p: '/' + p[:-5].replace(os.sep, '/')
pages = ['index.html', '404.html'] + glob.glob('library/*.html') + glob.glob('library/*/*.html') + glob.glob('tool/*.html')
exists = {'/'} | {norm(p) for p in pages if p.startswith(('library', 'tool'))}
static = {norm(f) for f in glob.glob('*.html')}
redirects = {'/airtracking', '/containertracking', '/unnumber', '/library-index'}
ASSET = re.compile(r'\.(css|js|json|pdf|svg|webp|png|jpe?g|txt|xml|ico)$')
ids = {}
bad, where = collections.Counter(), {}
for p in pages:
    s = open(p, encoding='utf-8').read()
    for path, frag in re.findall(r'href="(/[^"#?]*)(?:\?[^"#]*)?(#[^"]*)?"', s):
        if path.startswith(('/images/', '/_vercel')) or ASSET.search(path):
            continue
        path = path.rstrip('/') or '/'
        ok = path in exists or path in static or path in redirects
        if ok and frag and path.startswith('/library/') and path in exists:
            f = path.lstrip('/') + '.html'
            if f not in ids:
                ids[f] = set(re.findall(r'\sid="([^"]+)"', open(f, encoding='utf-8').read()))
            ok = frag[1:] in ids[f]
            path += frag
        if not ok:
            bad[path] += 1
            where.setdefault(path, p.replace(os.sep, '/'))
print(f'{len(pages)}개 페이지, 깨진 대상 {len(bad)}개')
for k, v in bad.most_common():
    print(f'  {v}× {k}  ← {where[k]}')
sys.exit(1 if bad else 0)
