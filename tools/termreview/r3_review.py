"""3차 검수(새 문서 용어): 문서의 실제 문장을 Codex와 Antigravity(agy)에게 따로 보여 주고 표기 판정을 받는다.
r3_build.py의 TERMS와 문서 문장을 쓴다. 결과: data/review/r3/codex.json, agy.json (Claude 판정은 claude.json)"""
import concurrent.futures as cf, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import r3_build as B  # TERMS, SENTS, DOCS
OUT = os.path.join(B.D, 'r3')
CODEX = os.path.expanduser('~/.vscode/extensions/openai.chatgpt-26.1007.21434-win32-x64/bin/windows-x86_64/codex.exe')
AGY = os.path.expandvars(r'%LOCALAPPDATA%\agy\bin\agy.exe')

items = {}
for n, (frm, words, note) in enumerate(B.TERMS, 1):
    sents = []
    for d, (slug, title) in B.DOCS.items():
        sents += [f'[{title}] {s[:300]}' for s in B.SENTS[d] if any(w in s for w in words)][:3]
    items[f'r3-{n:03d}'] = {'options': frm, 'note': note, 'sentences': sents[:6]}

PROMPT = """당신은 한국 포워딩(국제물류)·관세 실무와 법령(관세법, FTA 특례법, 관세청 고시, IATA 규정, 해운법)을 잘 아는 한국어 감수자입니다.
아래 JSON은 한국 포워더용 물류 자료 사이트에 새로 쓴 문서 6편(수출입 통관과 HS 코드, FTA 원산지, 보세구역과 보세운송, 해상 할증료, 항공 운임 중량 계산, LCL·운임톤 계산)에서 쓴 용어입니다.
각 항목의 options는 "지금 쓴 표기 / 다른 후보"이고, sentences는 문서에 실제로 들어간 문장입니다(지금 표기 그대로). 단어만 보지 말고 반드시 문장의 문맥(법령 설명인지, 실무 설명인지, 누가 읽는지)을 보고 판단하세요.
사이트 원칙: 한국어가 주된 말이면 한국어(영문 약어), 영어가 주된 말이면 영어 그대로. 법령·고시를 설명할 때는 정식 용어. 한국 포워더가 현장에서 실제로 쓰는 말을 우선.

판정:
- keep: 문장 속 지금 표기가 그 문맥에서 맞다.
- other: 다른 표기가 낫다. better에 그 문맥에서 쓸 표기를 적는다(예: "원산지증명서(C/O)").
reason은 한국어 한두 문장으로, 포워더가 바로 이해하게.
출력: 다른 말 없이 JSON 객체 하나만. 키는 항목 id, 값은 {"verdict": "keep|other", "better": "", "reason": ""}. 모든 id를 빠짐없이.

JSON:
"""


def parse(text):
    m = re.search(r'\{.*\}', text, re.S)
    return json.loads(m.group(0)) if m else None


def run(tool):
    out = os.path.join(OUT, f'{tool}.json')
    if os.path.exists(out):
        return tool, 'cached'
    prompt = PROMPT + json.dumps(items, ensure_ascii=False, indent=1)
    text = ''
    for _ in range(2):
        try:
            if tool == 'codex':
                last = os.path.join(OUT, '.codex_last.txt')
                subprocess.run([CODEX, 'exec', '--sandbox', 'read-only', '--skip-git-repo-check', '-o', last, prompt], cwd=OUT, capture_output=True, timeout=1500)
                text = open(last, encoding='utf-8').read()
            else:
                r = subprocess.run([AGY, '-p', prompt], cwd=OUT, capture_output=True, timeout=1500)
                text = r.stdout.decode('utf-8', 'replace')
            data = parse(text)
            if data:
                json.dump(data, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
                return tool, len(data)
        except Exception as e:
            text = str(e)
    open(os.path.join(OUT, f'{tool}.err.txt'), 'w', encoding='utf-8').write(text[-4000:])
    return tool, 'fail'


if __name__ == '__main__':
    json.dump(items, open(os.path.join(OUT, 'input.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    with cf.ThreadPoolExecutor(2) as ex:
        for res in ex.map(run, ['codex', 'agy']):
            print(*res, flush=True)
