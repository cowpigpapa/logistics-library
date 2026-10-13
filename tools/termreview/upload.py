"""문장 짝(term_sent.json)과 Codex·Antigravity 의견(codex_XX.json, agy_XX.json)을 term_review 표에 넣는 SQL을 만든다 → upload.sql"""
import glob, json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
S = os.path.dirname(D)
sent = json.load(open(os.path.join(S, 'term_sent.json'), encoding='utf-8'))
rev = {'codex': {}, 'agy': {}}
for tool in rev:
    for f in glob.glob(os.path.join(D, f'{tool}_*.json')):
        if f.endswith('.err.txt'):
            continue
        for k, v in json.load(open(f, encoding='utf-8')).items():
            if isinstance(v, dict) and v.get('verdict') in ('keep', 'revert', 'other'):
                rev[tool][k] = {'verdict': v['verdict'], 'better': str(v.get('better') or '')[:300], 'reason': str(v.get('reason') or '')[:600]}
ids = [r['id'] for r in json.load(open(os.path.join(S, 'terms_dataset.json'), encoding='utf-8'))]
q = lambda s: "'" + s.replace("'", "''") + "'"
lines = []
for i in ids:
    r = {t: rev[t][i] for t in rev if i in rev[t]}
    lines.append(f"update public.term_review set sents={q(json.dumps(sent.get(i, []), ensure_ascii=False))}::jsonb, "
                 f"rev={q(json.dumps(r, ensure_ascii=False))}::jsonb where id={q(i)};")
open(os.path.join(D, 'upload.sql'), 'w', encoding='utf-8').write('\n'.join(lines))
both = [i for i in ids if i in rev['codex'] and i in rev['agy']]
split = [i for i in both if rev['codex'][i]['verdict'] != rev['agy'][i]['verdict']]
print('codex', len(rev['codex']), 'agy', len(rev['agy']), 'both', len(both), 'split', len(split))
for t in rev:
    c = {}
    for v in rev[t].values():
        c[v['verdict']] = c.get(v['verdict'], 0) + 1
    print(t, c)
