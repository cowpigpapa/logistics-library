"""UN 번호 조회(/unnumber) 데이터 만들기.

원본: 해양수산부고시 「위험물 선박운송 기준」 [별표 1] 위험물목록 HWP(첨부파일).
  국가법령정보센터 https://www.law.go.kr/행정규칙/위험물선박운송기준 의 첨부파일
  `[별표 1] 위험물목록(제2조제1항부터 제8항까지 관련)(위험물 선박운송 기준).hwp`
  고시는 저작권법 제7조 제2호에 따라 보호받지 않으므로 재가공해서 게시할 수 있다.

교차검증(선택): BAM Dangerous Goods Dataservice IMDG 데이터(dgg-daten-imdg-un.zip 안의 IMDG25_csv.txt).
  Datenlizenz Deutschland BY 2.0. 화면에 표시하는 값은 고시 값이고,
  BAM 값은 '고시와 다른 칸' 안내에만 쓴다(출처와 변경 사실을 페이지에 적는다).

사용:
  python tools/un_data.py --hwp kr_list.hwp [--bam IMDG25_csv.txt] [--report report.md]
결과: unnumber-data.js (저장소 루트)

필요 패키지: olefile (pip install olefile)
"""
import argparse, csv, json, os, re, struct, sys, zlib
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SOURCE = {
    'notice': '해양수산부고시 제2026-67호',
    'title': '위험물 선박운송 기준 [별표 1] 위험물목록',
    'date': '2026-06-21',
    'imdg': 'IMDG Code Amdt. 42-24',
    'url': 'https://www.law.go.kr/행정규칙/위험물선박운송기준',
}

# ---------------------------------------------------------------- HWP 표 읽기
PUA_DASH = '\U000f0848'  # 한글 전용 글꼴의 줄표. 내용상 '-'(해당 없음)


def hwp_records(data):
    i = 0
    while i < len(data):
        h = struct.unpack('<I', data[i:i + 4])[0]
        i += 4
        tag, lvl, size = h & 0x3ff, (h >> 10) & 0x3ff, h >> 20
        if size == 0xfff:
            size = struct.unpack('<I', data[i:i + 4])[0]
            i += 4
        yield tag, lvl, data[i:i + size]
        i += size


def para_text(p):
    """HWPTAG_PARA_TEXT를 글자로. 제어문자 중 0·10·13·24~31은 1칸, 나머지는 8칸을 차지한다."""
    n = len(p) // 2
    w = struct.unpack('<%dH' % n, p[:n * 2])
    out, i = [], 0
    while i < n:
        c = w[i]
        if c < 32:
            if c in (0, 10, 13) or 24 <= c <= 31:
                if c == 10:
                    out.append('\n')
                elif c in (24, 31):
                    out.append(' ')
                elif c == 30:
                    out.append('-')
                i += 1
            else:
                if c == 9:
                    out.append(' ')
                i += 8
        else:
            out.append(chr(c))
            i += 1
    return ''.join(out).encode('utf-16-le', 'surrogatepass').decode('utf-16-le', 'replace')


def read_hwp_table(path):
    """본문 Section0의 19칸 표(위험물목록)를 {행: {열: [문단...]}}로 돌려준다."""
    import olefile
    ole = olefile.OleFileIO(path)
    flags = struct.unpack('<I', ole.openstream('FileHeader').read()[36:40])[0]
    raw = ole.openstream('BodyText/Section0').read()
    data = zlib.decompress(raw, -15) if flags & 1 else raw
    rows, cur, in_table = defaultdict(dict), None, False
    for tag, lvl, p in hwp_records(data):
        if tag == 77:  # HWPTAG_TABLE
            nrows, ncols = struct.unpack('<HH', p[4:8])
            in_table = ncols == 19
            cur = None
        elif tag == 72 and in_table and len(p) >= 16:  # HWPTAG_LIST_HEADER(셀)
            col, row = struct.unpack('<HH', p[8:12])
            cur = rows[row].setdefault(col, [])
        elif tag == 67 and cur is not None:  # HWPTAG_PARA_TEXT
            cur.append(para_text(p))
    return rows


# ---------------------------------------------------------------- 칸 정리
HANGUL = re.compile(r'[가-힣]')
CLASS_RE = re.compile(r'^(?:1\.[1-6][A-NS]|1|2\.[123]|2|3|4\.[123]|5\.[12]|6\.[12]|7|8|9)$')


def cell(paras):
    return [x.replace(PUA_DASH, '-').replace('　', ' ').strip() for x in paras if x.replace(PUA_DASH, '-').strip()]


def flat(paras, sep=' '):
    s = sep.join(cell(paras))
    return re.sub(r'\s+', ' ', s).strip()


def dash(s):
    return '' if s in ('', '-', '- -') else s


def ref_note(s):
    """'특별 / 요건 / 277 / 참조' 같은 쪼개진 참조 문구를 한 줄로."""
    s = re.sub(r'\s+', ' ', s.replace('/', ' ')).strip()
    s = re.sub(r'특별 ?요건 ?', '특별요건 ', s)
    s = re.sub(r'특별 ?규정 ?', '특별규정 ', s)
    s = re.sub(r'(\d+) ?(참조|참고)', r'\1 \2', s)
    s = re.sub(r'^- ', '', s)
    return s.strip()


def split_name(paras):
    p = cell(paras)
    idx = next((i for i, x in enumerate(p) if not HANGUL.search(x) and len(re.findall('[A-Za-z]', x)) >= 3), len(p))
    ko = re.sub(r'\s+', ' ', ' '.join(p[:idx])).strip()
    ko = re.sub(r'\s+\)', ')', re.sub(r'\(\s+', '(', ko))
    en = re.sub(r'\s+', ' ', ' '.join(p[idx:])).strip()
    en = re.sub(r'\s+,', ',', en)
    return ko, en


def norm_class(s, fixes, un):
    s = s.replace(' ', '')
    if s == '1,3C':  # 고시 원문 오타(쉼표). 1.3C
        fixes.append(f'UN{un} 급 "1,3C" → "1.3C" (쉼표 오타)')
        s = '1.3C'
    return s


def norm_sub(paras):
    """부표찰 칸: 부위험성 목록, 해양오염물질(P) 여부, 참조 문구."""
    text = flat(paras, ' / ')
    mp = bool(re.search(r'(^|[\s/])P($|[\s/])', text))
    if re.search(r'특별|규칙', text):
        return [], mp, ref_note(re.sub(r'(^|[\s/])P($|[\s/])', ' ', text))
    subs = [t for t in re.split(r'[\s/,]+', text) if CLASS_RE.match(t)]
    return subs, mp, ''


def norm_pg(s):
    s = s.strip()
    return {'1': 'I', '2': 'II', '3': 'III', 'I': 'I', 'II': 'II', 'III': 'III'}.get(s, '' if s in ('', '-') else s)


def norm_qty(s):
    """소량(LQ) 표기를 통일: ℓ→L, ㎏·Kg→kg, ㎖→ml, 전각 g→g."""
    s = s.replace('ℓ', ' L').replace('㎏', ' kg').replace('㎖', ' ml').replace('ｇ', 'g')
    s = re.sub(r'(?i)(\d)\s*kg', r'\1 kg', s)
    s = re.sub(r'(\d)\s*ml', r'\1 ml', s)
    s = re.sub(r'(\d)\s*g\b', r'\1 g', s)
    s = re.sub(r'(\d)\s*L\b', r'\1 L', s)
    return re.sub(r'\s+', ' ', s).strip()


def norm_ems(s):
    s = re.sub(r'\s*/\s*', ', ', s)
    s = re.sub(r',\s*,', ',', s)
    s = re.sub(r'\s*,\s*', ', ', s).strip(' ,')
    s = re.sub(r'(F-[A-J])\s+(S-[A-Z])', r'\1, \2', s)  # 쉼표가 빠진 표기
    return dash(s)


def codes(paras):
    """용기·IBC·탱크 칸의 코드 목록. 'P112 (a) 또는 (b)'는 'P112(a) P112(b)'로 풀어 쓴다."""
    s = flat(paras, ' ')
    if '요건' in s:
        return ref_note(s)
    s = s.replace('또 는', '또는')
    s = re.sub(r'\bp(\d)', r'P\1', s)            # 소문자 p131
    s = re.sub(r'\bIBCO(\d)', r'IBC0\1', s)       # 영문 O로 적힌 IBCO2
    s = re.sub(r'(TP\d+)(?=TP)', r'\1 ', s)        # 붙어 쓴 TP10TP13
    s = re.sub(r'([A-Z]+\d+)\s*((?:\([a-z]\)\s*,?\s*(?:또는)?\s*)+)',
               lambda m: ' '.join(m.group(1) + f'({x})' for x in re.findall(r'\(([a-z])\)', m.group(2))), s)
    return ' '.join(t for t in re.split(r'[\s/,]+', s) if t and t not in ('-', '또는'))


def parse(rows):
    out, fixes = [], []
    last_props = ''
    for r in sorted(rows):
        row = rows[r]
        if r < 3 or 0 not in row:
            continue
        un = flat(row[0])
        if not re.fullmatch(r'\d{4}', un):
            continue
        ko, en = split_name(row.get(1, []))
        cls = norm_class(flat(row.get(2, [])), fixes, un)
        subs, mp, subnote = norm_sub(row.get(3, []))
        pg = norm_pg(flat(row.get(4, [])))
        sp = ' '.join(t for t in re.split(r'[\s/,]+', flat(row.get(5, []))) if t and t != '-')
        lq_raw = flat(row.get(6, []))
        lq = ref_note(lq_raw) if '요건' in lq_raw else dash(norm_qty(lq_raw))
        eq_raw = flat(row.get(7, []))
        eq = ref_note(eq_raw) if ('요건' in eq_raw or '규정' in eq_raw) else dash(eq_raw)
        pack = (codes(row.get(8, [])), codes(row.get(9, [])))
        ibc = (codes(row.get(10, [])), codes(row.get(11, [])))
        tank = (codes(row.get(12, [])), codes(row.get(13, [])))
        ems = norm_ems(flat(row.get(14, [])))
        stow_t = flat(row.get(15, []))
        m = re.search(r'적재(?:방법|구분)\s*([0-9]{2}|[A-E])', stow_t)
        stowcat = m.group(1) if m else ''
        stow = ' '.join(t for t in re.split(r'[\s/,]+', re.sub(r'적재(?:방법|구분)\s*([0-9]{2}|[A-E])', ' ', stow_t)) if re.match(r'^(SW|H)\d+$', t))
        seg = ' '.join(t for t in re.split(r'[\s/,]+', flat(row.get(16, []))) if re.match(r'^SGG?\d+[a-z]?$', t))
        props = flat(row.get(17, []))
        if re.fullmatch(r'상동\.?', props):
            props = last_props
        elif props:
            last_props = props
        out.append({
            'un': un, 'ko': ko, 'en': en, 'cls': cls, 'sub': subs, 'subnote': subnote, 'mp': mp, 'pg': pg,
            'sp': sp, 'lq': lq, 'eq': eq, 'pack': pack, 'ibc': ibc, 'tank': tank, 'ems': ems,
            'stowcat': stowcat, 'stow': stow, 'seg': seg, 'props': props,
            '_raw': {k: flat(v, ' / ') for k, v in row.items()},
        })
    return out, fixes


# ---------------------------------------------------------------- BAM 교차검증
def read_bam(path):
    rows = list(csv.DictReader(open(path, encoding='latin-1'), delimiter='\t'))
    out = []
    for x in rows:
        raw = [s for s in (x['S_ZUGEFAHR1'].strip(), x['S_ZUGEFAHR2'].strip()) if s]
        # BAM은 특별규정에 따라 붙는 부위험성을 '(6.1)'처럼 괄호로 적는다. 고시는 이 칸에 '특별요건 ○○ 참조'라고 쓴다.
        subs = [s for s in raw if not s.startswith('(') and not s.startswith('See')]
        see = [s for s in raw if s.startswith('See')]
        cond = [s.strip('()') for s in raw if s.startswith('(')]
        # BAM의 '!'는 EmS 특별사례(원문 밑줄) 표시. 비교할 때는 뺀다.
        ems = ', '.join(e.replace('!', '') for e in (x['S_EMS1'].strip(), x['S_EMS2'].strip()) if e)
        out.append({'un': x['S_UNNR'].strip(), 'cls': x['S_KLASSE'].strip(), 'sub': subs, 'cond': cond, 'see': see,
                    'pg': x['S_VP_GRUPPE'].strip(), 'ems': ems, 'mp': x['S_MARPOL'].strip() == 'P',
                    'name': x['S_NAME_E'].strip(),
                    'en': ' '.join(t for t in (x['S_NAME_E'].strip(), x['S_SPEZIFIKATION_E'].strip()) if t)})
    return out


def alnum(s):
    return re.sub(r'[^A-Z0-9]', '', s.upper())


def key(r):
    return (r['cls'], tuple(sorted(r['sub'])), r['pg'])


def cross_check(kr, bam):
    by_un = defaultdict(list)
    for b in bam:
        by_un[b['un']].append(b)
    kr_un = defaultdict(list)
    for r in kr:
        kr_un[r['un']].append(r)
    stats = defaultdict(int)
    issues, notes = [], []
    for r in kr:
        stats['rows'] += 1
        cands = by_un.get(r['un'])
        r['x'] = []
        if not cands:
            stats['un_not_in_bam'] += 1
            issues.append(('UN 번호가 BAM에 없음', r, None))
            continue
        same = [b for b in cands if key(b) == key(r)]
        if not same and r['subnote']:
            # 고시는 부위험성 칸에 '특별요건 ○○ 참조'·'국제해상위험물규칙 참조'라고 쓰고,
            # BAM은 같은 내용을 'See SP○○'·'See 2.0.6.6'·괄호 부위험성·SP181의 '1'로 적는다. 급·PG가 같으면 표기 차이로 본다.
            same = [b for b in cands if b['cls'] == r['cls'] and b['pg'] == r['pg']]
            if same:
                stats['notation_only'] += 1
                notes.append((r, same))
        if not same:
            # 어느 칸이 다른지: 급·부위험성·PG 중 일치하는 후보가 있는지로 판단
            diffs = []
            if not any(b['cls'] == r['cls'] for b in cands):
                diffs.append('급')
            if not any(tuple(sorted(b['sub'])) == tuple(sorted(r['sub'])) for b in cands):
                diffs.append('부위험성')
            if not any(b['pg'] == r['pg'] for b in cands):
                diffs.append('용기등급')
            if not diffs:
                diffs = ['급·부위험성·용기등급 조합']
            stats['key_mismatch'] += 1
            issues.append(('/'.join(diffs) + ' 불일치', r, cands))
            r['x'].append({'f': '/'.join(diffs), 'bam': '; '.join(sorted({fmt_key(b) for b in cands}))})
            same = cands
        else:
            stats['key_match'] += 1
        if r['ems'].replace(' ', '') not in {b['ems'].replace(' ', '') for b in same}:
            stats['ems_mismatch'] += 1
            issues.append(('EmS 불일치', r, same))
            r['x'].append({'f': 'EmS', 'bam': '; '.join(sorted({b['ems'] for b in same}))})
        else:
            stats['ems_match'] += 1
        if r['mp'] != any(b['mp'] for b in same):
            stats['mp_mismatch'] += 1
            issues.append(('해양오염물질(P) 표시 불일치', r, same))
        # 영문 정식운송품명: BAM의 품명(S_NAME_E)이 고시 영문명 안에 글자 그대로(기호·공백 무시) 들어 있는지.
        # 고시 영문명에는 ACETON(ACETONE) 같은 오기가 있어서, 다르면 화면에 BAM 표기를 함께 보여 준다.
        mine = alnum(r['en'])
        lost = sorted({b['name'] for b in same if alnum(b['name']) and alnum(b['name']) not in mine})
        if lost:
            stats['psn_mismatch'] += 1
            issues.append(('영문 품명 표기 다름', r, same))
            r['x'].append({'f': '영문 품명', 'bam': ' / '.join(lost[:4]) + (' 외' if len(lost) > 4 else '')})
        else:
            stats['psn_match'] += 1
    # BAM에만 있는 조합(고시에서 빠졌을 수 있는 행)
    missing = []
    for un, cands in sorted(by_un.items()):
        keys = {key(r) for r in kr_un.get(un, [])}
        loose = {(r['cls'], r['pg']) for r in kr_un.get(un, []) if r['subnote']}
        for k in sorted({key(b) for b in cands}):
            if k not in keys and (k[0], k[2]) not in loose:
                missing.append((un, k, [b for b in cands if key(b) == k]))
    cross_check.notes = notes
    return stats, issues, missing


def fmt_key(r):
    sub = ('/' + '/'.join(r['sub'])) if r['sub'] else ''
    sub += ''.join(f'/({c})' for c in r.get('cond', []))
    sub += ''.join(f'/{c}' for c in r.get('see', []))
    if r.get('subnote'):
        sub += f" [{r['subnote']}]"
    return f"{r['cls']}{sub} PG {r['pg'] or '-'}"


def write_report(path, kr, bam, stats, issues, missing, fixes):
    L = ['# UN 번호 조회 데이터 교차검증 보고서', '',
         f"- 고시 행 수: {len(kr)} (고유 UN 번호 {len({r['un'] for r in kr})})",
         f"- BAM IMDG 42-24 행 수: {len(bam)} (고유 UN 번호 {len({b['un'] for b in bam})})", '']
    L.append('## 통계')
    for k, v in sorted(stats.items()):
        L.append(f'- {k}: {v}')
    L += ['', '## 파서에서 고친 원문 표기', ''] + [f'- {f}' for f in fixes] + ['']
    L += ['## 행 단위 불일치 (고시 행 기준)', '', '| 종류 | UN | 고시 값 | BAM 값 | 고시 영문명 |', '|---|---|---|---|---|']
    for kind, r, cands in issues:
        bamv = '; '.join(sorted({(fmt_key(b) + ' EmS ' + b['ems']) for b in cands})) if cands else '-'
        L.append(f"| {kind} | {r['un']} | {fmt_key(r)} EmS {r['ems']} | {bamv} | {r['en'][:70]} |")
    L += ['', '## 표기 차이만 있는 행 (급·PG 같음, 부위험성 칸 표기 방식만 다름)', '', '| UN | 고시 | BAM |', '|---|---|---|']
    for r, same in cross_check.notes:
        L.append(f"| {r['un']} | {fmt_key(r)} | {'; '.join(sorted({fmt_key(b) for b in same}))} |")
    L += ['', '## BAM에만 있는 급·부위험성·PG 조합', '', '| UN | BAM 조합 | BAM 영문명 | 고시에 있는 조합 |', '|---|---|---|---|']
    kr_un = defaultdict(list)
    for r in kr:
        kr_un[r['un']].append(r)
    for un, k, bs in missing:
        L.append(f"| {un} | {fmt_key(bs[0])} | {bs[0]['en'][:60]} | {'; '.join(sorted({fmt_key(r) for r in kr_un.get(un, [])})) or '(UN 번호 없음)'} |")
    open(path, 'w', encoding='utf-8').write('\n'.join(L) + '\n')


# ---------------------------------------------------------------- 출력
# 특성(props)은 용량이 커서 unnumber-props.js로 따로 내보내고, 화면에서 행을 처음 펼칠 때 불러온다.
FIELDS = ['un', 'ko', 'en', 'cls', 'sub', 'pg', 'mp', 'sp', 'lq', 'eq', 'pack', 'ibc', 'tank', 'ems',
          'stowcat', 'stow', 'seg', 'x']


def compact(r):
    def pair(p):
        return p[0] + (('|' + p[1]) if p[1] else '')
    sub = ' '.join(r['sub']) + ((' ' if r['sub'] else '') + '(' + r['subnote'] + ')' if r['subnote'] else '')
    x = ' · '.join(f"{d['f']}: {d['bam']}" for d in r.get('x', []))
    row = [r['un'], r['ko'], r['en'], r['cls'], sub, r['pg'], 1 if r['mp'] else 0, r['sp'], r['lq'], r['eq'],
           pair(r['pack']), pair(r['ibc']), pair(r['tank']), r['ems'], r['stowcat'], r['stow'], r['seg'], x]
    while row and row[-1] in ('', 0):  # 뒤쪽 빈 칸은 생략
        row.pop()
    return row


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--hwp', required=True)
    ap.add_argument('--bam')
    ap.add_argument('--report')
    ap.add_argument('--dump', help='검수용 JSON(원문 셀 포함) 저장 경로')
    ap.add_argument('--out', default=os.path.join(ROOT, 'unnumber-data.js'))
    ap.add_argument('--props-out', default=os.path.join(ROOT, 'unnumber-props.js'))
    a = ap.parse_args()
    kr, fixes = parse(read_hwp_table(a.hwp))
    meta = dict(SOURCE, rows=len(kr), uns=len({r['un'] for r in kr}), fields=FIELDS)
    if a.bam:
        bam = read_bam(a.bam)
        stats, issues, missing = cross_check(kr, bam)
        meta['check'] = {'bam': 'BAM Datenbank GEFAHRGUT, IMDG Amdt. 42-24 (IMDG25)', 'rows': stats['rows'],
                         'match': stats['key_match'], 'notation': stats['notation_only'], 'ems': stats['ems_match'],
                         'diff': len([r for r in kr if r.get('x')])}
        # 고시 [별표 1]에 없고 BAM IMDG에만 있는 UN 번호(제7급 방사성물질). 검색했을 때 안내에 쓴다.
        kr_uns = {r['un'] for r in kr}
        meta['absent'] = sorted({b['un'] for b in bam if b['un'] not in kr_uns})
        meta['check']['psn'] = stats['psn_mismatch']
        print(dict(stats), 'BAM-only combos:', len(missing), 'absent UNs:', len(meta['absent']))
        if a.report:
            write_report(a.report, kr, bam, stats, issues, missing, fixes)
    if a.dump:
        json.dump(kr, open(a.dump, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    head = ('// UN 번호 조회 데이터. tools/un_data.py가 만든다. 직접 고치지 말 것.\n'
            '// 출처: 해양수산부고시 「위험물 선박운송 기준」 [별표 1] 위험물목록(저작권법 제7조 비보호 저작물)을 검색용으로 재가공.\n')
    body = ',\n'.join(json.dumps(compact(r), ensure_ascii=False, separators=(',', ':')) for r in kr)
    js = (head + f'window.UN_META={json.dumps(meta, ensure_ascii=False, separators=(",", ":"))};\n'
          f'window.UN_ROWS=[\n{body}\n];\n')
    open(a.out, 'w', encoding='utf-8', newline='\n').write(js)
    props = json.dumps([r['props'] for r in kr], ensure_ascii=False, separators=(',', ':'))
    pjs = head + '// 특성란. UN_ROWS와 같은 순서.\n' + f'window.UN_PROPS={props};\n'
    open(a.props_out, 'w', encoding='utf-8', newline='\n').write(pjs)
    print('rows', len(kr), 'uns', meta['uns'], 'bytes', len(js.encode('utf-8')), 'props bytes', len(pjs.encode('utf-8')))
    for f in fixes:
        print('fix:', f)


if __name__ == '__main__':
    main()
