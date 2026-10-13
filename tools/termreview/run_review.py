"""용어 검수: 실제 전후 문장을 Codex와 Antigravity(agy)에게 따로 보여 주고 판정을 받는다.
두 도구 모두 파일을 건드리지 않는다(문장을 질문에 넣고 답만 받는다). 결과: codex_XX.json, agy_XX.json"""
import concurrent.futures as cf, glob, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'review')
CODEX = os.path.expanduser('~/.vscode/extensions/openai.chatgpt-26.1007.21434-win32-x64/bin/windows-x86_64/codex.exe')
AGY = os.path.expandvars(r'%LOCALAPPDATA%\agy\bin\agy.exe')

PROMPT = """당신은 한국 포워딩(국제물류) 실무와 규정(IMO CTU Code, IMDG, IATA DGR·ULD, 상법, Incoterms 2020, 적하보험 ICC, 미국 FMC 규정 등)을 잘 아는 한국어 감수자입니다.
아래 JSON은 한국어 물류 자료 사이트에서 용어를 바꾼 기록입니다. 이전 검토는 단어만 보고 바꿔서 문맥에 안 맞는 말이 많았습니다. 이번에는 반드시 문장 전체를 읽고 판단하세요.

각 항목:
- pairs: 실제로 바꾸기 전 문장(before)과 바꾼 뒤 문장(after). 문장 안에서 바뀐 부분을 찾아 그 문맥에서 맞는지 봅니다.
- current_sentences: 전후 문장을 찾지 못한 항목은 지금 문장만 있습니다(from → to 변경이 이미 들어간 상태).
- group "결정 필요": from에 경쟁하는 표기들이 있고 to는 비어 있습니다. 문장을 보고 어느 표기로 통일할지 정합니다.
- 운영자가 이미 정한 원칙: Demurrage·Detention은 영어 그대로, 건화물 대신 드라이 컨테이너, 섀시 대신 샤시, 숫자와 kg는 붙여 씀(5kg). 이 원칙 자체는 뒤집지 말고, 문장 안에서 맞게 적용됐는지만 봅니다(예: 항만시설사용료 뜻의 '체화료'를 Demurrage로 바꾼 것은 잘못).

판정 기준:
- keep: 바꾼 뒤 문장이 그 문맥에서 맞고 자연스럽다.
- revert: 바꾸기 전 문장이 더 맞다(뜻이 틀어졌거나, 법령·판결 인용문을 바꿨거나, 업계에서 안 쓰는 말).
- other: 둘 다 아쉽다. better에 그 문장에서 쓸 말(또는 고친 문장 일부)을 적는다.
판단 근거(reason)는 한국어 한두 문장으로, 포워더가 읽고 바로 이해하게 씁니다. 원문 영어 용어가 있으면 함께 적습니다.

출력: 다른 말 없이 JSON 객체 하나만. 키는 항목 id, 값은 {"verdict": "keep|revert|other", "better": "", "reason": ""}. 모든 id를 빠짐없이.

JSON:
"""


def parse(text):
    m = re.search(r'\{.*\}', text, re.S)
    return json.loads(m.group(0)) if m else None


def run(tool, path):
    tag = os.path.basename(path)[2:4]
    out = os.path.join(D, f'{tool}_{tag}.json')
    if os.path.exists(out):
        return tool, tag, 'cached'
    prompt = PROMPT + open(path, encoding='utf-8').read()
    for attempt in range(2):
        try:
            if tool == 'codex':
                last = os.path.join(D, f'.codex_last_{tag}.txt')
                subprocess.run([CODEX, 'exec', '--sandbox', 'read-only', '--skip-git-repo-check', '-o', last, prompt],
                               cwd=D, capture_output=True, timeout=1500)
                text = open(last, encoding='utf-8').read()
            else:
                r = subprocess.run([AGY, '-p', prompt], cwd=D, capture_output=True, timeout=1500)
                text = r.stdout.decode('utf-8', 'replace')
            data = parse(text)
            if data:
                json.dump(data, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
                return tool, tag, len(data)
        except Exception as e:  # 한 번 더 시도
            text = str(e)
    open(os.path.join(D, f'{tool}_{tag}.err.txt'), 'w', encoding='utf-8').write(text[-4000:])
    return tool, tag, 'fail'


jobs = [(t, p) for p in sorted(glob.glob(os.path.join(D, 'in*.json'))) for t in ('codex', 'agy')]
with cf.ThreadPoolExecutor(max_workers=int(os.environ.get("WORKERS", "6"))) as ex:
    for res in ex.map(lambda j: run(*j), jobs):
        print(*res, flush=True)
