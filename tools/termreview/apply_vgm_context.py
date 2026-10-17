"""2026-10-17 사장님: VGM은 문맥에 따라. 제도·절차는 컨테이너 총중량 검증(VGM), 계측·제출하는 값은 검증된 총중량(VGM)."""
import sys
sys.stdout.reconfigure(encoding='utf-8')
E = [  # (파일, 지금, 고침, 문맥)
    ('incoterms-docs/inco-choose.html', '컨테이너 총중량 검증(VGM) 계측과 통지를 누가', '검증된 총중량(VGM) 계측과 통지를 누가', '값을 계측해 통지'),
    ('incoterms-docs/inco-risk-cost.html', '컨테이너 총중량 검증(VGM) 계측비', '검증된 총중량(VGM) 계측비', '값을 재는 비용(r2-056 판정 되돌림과 같음)'),
    ('ctu-library.js', '총중량(VGM)·CTU 번호·봉인 번호 전달', '검증된 총중량(VGM)·CTU 번호·봉인 번호 전달', '전달하는 값'),
    ('ctu-library.js', 'alt="화주에서 운송인과 항만으로 넘어가는 총중량(VGM),', 'alt="화주에서 운송인과 항만으로 넘어가는 검증된 총중량(VGM),', '넘기는 값'),
    ('ctu-library.js', 'AI 생성 도해</span> 총중량(VGM), 봉인 번호', 'AI 생성 도해</span> 검증된 총중량(VGM), 봉인 번호', '넘기는 값'),
    ('ctu-library.js', '<li>총중량 확정(VGM), 봉인,', '<li>총중량 검증(VGM), 봉인,', '절차'),
]
for f, a, b, why in E:
    s = open(f, encoding='utf-8').read()
    n = s.count(a)
    print(n, f, why)
    if n == 1:
        open(f, 'w', encoding='utf-8', newline='').write(s.replace(a, b))
