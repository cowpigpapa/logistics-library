"""사실관계 점검 보고서(JSON)의 고칠 문구를 문서에 넣는다.

    python tools/factcheck/apply.py <보고서 폴더> --list            # 틀림·지난 정보 항목과 고칠 문구를 보여 준다
    python tools/factcheck/apply.py <보고서 폴더> --apply id,id ...  # 확인한 항목만 넣는다(id = 문서이름#번호)

보고서 파일 이름은 <문서 id>.json(예: ch-dnd.json)이고, 문서는 *-docs/<문서 id>.html 에서 찾는다.
claim(원문 조각)이 문서에 정확히 한 번 있어야 넣는다."""
import glob, json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def doc_path(doc_id):
    hits = glob.glob(os.path.join(ROOT, '*-docs', doc_id + '.html'))
    # CTU Code 해설은 조각 파일이 없고 본문이 ctu-library.js 안에 있다.
    return hits[0] if hits else os.path.join(ROOT, 'ctu-library.js')


def items(folder):
    for f in sorted(glob.glob(os.path.join(folder, '*.json'))):
        doc_id = os.path.basename(f)[:-5]
        for n, it in enumerate(json.load(open(f, encoding='utf-8'))):
            if it.get('claim') == '_summary':
                continue
            yield f'{doc_id}#{n}', doc_id, it


folder = sys.argv[1]
if '--list' in sys.argv:
    for key, doc_id, it in items(folder):
        p = doc_path(doc_id)
        n = open(p, encoding='utf-8').read().count(it['claim']) if p else -1
        print(f"[{key}] {it['verdict']} (문서에 {n}번)\n  원문: {it['claim'][:220]}\n  고침: {it.get('fix', '')[:260]}\n  근거: {it.get('evidence', '')[:200]}")
elif '--apply' in sys.argv:
    want = set(sys.argv[sys.argv.index('--apply') + 1].split(','))
    for key, doc_id, it in items(folder):
        if key not in want:
            continue
        p = doc_path(doc_id)
        s = open(p, encoding='utf-8').read()
        if s.count(it['claim']) != 1 or not it.get('fix'):
            print('건너뜀', key, s.count(it['claim']))
            continue
        open(p, 'w', encoding='utf-8', newline='').write(s.replace(it['claim'], it['fix'], 1))
        print('넣음', key)
