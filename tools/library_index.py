"""색인 트리 페이지(/library-index)용 목록을 만든다: 메뉴 순서대로 카테고리 → 묶음(SECTIONS) → 문서.
각 카테고리의 *-library.js를 Node vm으로 읽어 DOCS·SECTIONS를 꺼내고 library-index-data.js에 쓴다.
문서를 더하거나 고친 뒤 `python tools/library_index.py`를 다시 실행한다(prerender.py와 함께)."""
import json, re, subprocess, sys
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
import prerender  # categories(): /library/<slug> 라우팅에서 카테고리와 스크립트를 찾는다

NODE = r"""
const fs = require('fs'), vm = require('vm');
const [file, base] = process.argv.slice(1);
const src = fs.readFileSync(file, 'utf8');
const end = src.lastIndexOf('})();');
const code = src.slice(0, end) +
  ';globalThis.__OUT = {docs: DOCS.map(d => ({id: d.id, title: d.title, short: d.short || "", tag: d.tag || "", summary: d.summary || ""})),' +
  ' sections: (typeof SECTIONS !== "undefined" ? SECTIONS : []).map(s => ({title: s.title, docs: s.docs || []})),' +
  ' extra: (typeof REFERENCE_DOCS !== "undefined" ? REFERENCE_DOCS : [])};' + src.slice(end);
const noop = () => {};
const ctx = {
  location: { pathname: base + '/__none__', search: '', hash: '' },
  document: { createElement: () => ({ content: { querySelectorAll: () => [] }, innerHTML: '' }), getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener: noop, head: { append: noop } },
  history: { replaceState: noop }, sessionStorage: { getItem: () => null, setItem: noop }, URLSearchParams, console,
};
ctx.window = ctx;
vm.runInNewContext(code, ctx);
process.stdout.write(JSON.stringify(ctx.__OUT));
"""


def menu_order():
    """tools/menu.py의 NAV에서 (그룹, 주소, 이름, 설명) 순서를 읽는다."""
    src = (ROOT / 'tools' / 'menu.py').read_text(encoding='utf-8')
    nav = src[src.index('NAV = ['):src.index('\n]\n', src.index('NAV = [')) + 2]
    ns = {}
    exec(nav, ns)
    return [(g, href, name, sub) for g, items in ns['NAV'] for href, name, sub in items]


def main():
    vercel = json.loads((ROOT / 'vercel.json').read_text(encoding='utf-8'))
    cats = {c['base']: c for c in prerender.categories(vercel)}
    groups = []
    for g, href, name, sub in menu_order():
        if not href.startswith('/library/'):
            # 도구(AWB·Container Tracking, UN Number)는 색인에 두지 않는다(머리줄 메뉴 Tracking·UN No.).
            continue
        c = cats.get(href)
        if not c:
            print('skip (no category):', href)
            continue
        out = json.loads(subprocess.run(['node', '-e', NODE, str(c['js']), c['base']], capture_output=True, check=True, encoding='utf-8').stdout)
        by_id = {d['id']: d for d in out['docs']}
        # '설명 및 요약' 문서는 색인에 따로 두지 않고 '개요 및 원문' 화면에 넣는다(이름이 겹치는 항목을 없앤다).
        overview_doc = next((d['id'] for d in out['docs'] if '설명 및 요약' in d['title']), None)
        if overview_doc:
            out['sections'] = [{'title': s['title'], 'docs': [i for i in s['docs'] if i != overview_doc]} for s in out['sections']]
            out['extra'] = [i for i in out['extra'] if i != overview_doc]
        sections, used = [], set()
        for s in out['sections']:
            ids = [i for i in s['docs'] if i in by_id]
            if ids:
                sections.append({'title': s['title'], 'docs': ids}); used.update(ids)
        extra = [i for i in out['extra'] if i in by_id and i not in used]
        if extra:
            sections.append({'title': '참고 자료', 'docs': extra}); used.update(extra)
        # 어느 묶음에도 없는 문서(예: CTU 설명 및 요약)는 첫 묶음 맨 앞에 넣는다('개요 및 원문'과 이름이 겹치지 않게).
        rest = [d['id'] for d in out['docs'] if d['id'] not in used and d['id'] != overview_doc]
        if rest:
            if sections:
                sections[0]['docs'] = rest + sections[0]['docs']
            else:
                sections.append({'title': '문서', 'docs': rest})
        if not groups or groups[-1]['group'] != g:
            groups.append({'group': g, 'cats': []})
        groups[-1]['cats'].append({'slug': href.rsplit('/', 1)[1], 'name': name, 'sub': sub, 'sections': sections, 'overview': overview_doc,
                                   'docs': {i: {k: by_id[i][k] for k in ('title', 'short', 'tag', 'summary')} for i in by_id}})
    total = sum(len(c['docs']) for g in groups for c in g['cats'])
    js = '// tools/library_index.py가 만든 색인 트리 데이터. 직접 고치지 말고 스크립트를 다시 실행한다.\nwindow.LIB_INDEX = ' + json.dumps(groups, ensure_ascii=False, separators=(',', ':')) + ';\n'
    (ROOT / 'library-index-data.js').write_text(js, encoding='utf-8', newline='\n')
    print(f'library-index-data.js: 카테고리 {sum(len(g["cats"]) for g in groups)}개, 문서 {total}개')


if __name__ == '__main__':
    main()
