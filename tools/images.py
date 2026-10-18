"""큰 그림의 작은 판(WebP)을 만들고, 페이지 마크업의 <img>에 srcset·sizes·width·height·지연 로딩을 붙인다.

    python tools/images.py      # images/ 아래 폭 1000px 넘는 그림마다 <이름>-w480·w640·w960.webp를 만든다(이미 있으면 건너뜀)

마크업 변환(responsive)은 tools/build_home.py(첫 화면 카드)와 tools/prerender.py(문서·개요)가 부른다.
그림을 새로 넣거나 바꾸면 이 스크립트를 먼저 실행한 뒤 build_home.py·prerender.py를 실행한다."""
import re, sys
from pathlib import Path
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'images'
WIDTHS = (480, 640, 960)   # 640: 휴대폰(폭 약 340px × 화면 배율 1.75~2) 카드·본문 그림
VARIANT = re.compile(r'-w\d+$')
_dims = {}


def variants():
    made = 0
    for p in sorted(IMAGES.rglob('*')):
        if p.suffix.lower() not in ('.webp', '.png', '.jpg', '.jpeg') or VARIANT.search(p.stem):
            continue
        with Image.open(p) as im:
            w, h = im.size
            if w <= 1000:
                continue
            for tw in WIDTHS:
                out = p.with_name(f'{p.stem}-w{tw}.webp')
                if out.exists() and out.stat().st_mtime >= p.stat().st_mtime:
                    continue
                th = round(h * tw / w)
                im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB').resize((tw, th), Image.LANCZOS).save(out, 'WEBP', quality=80, method=6)
                made += 1
                print(out.relative_to(ROOT).as_posix(), f'{out.stat().st_size // 1024}KB')
    print('새로 만든 작은 판:', made)


def dims(path):
    if path not in _dims:
        if path.suffix == '.svg':
            # SVG는 width·height 속성이나 viewBox에서 크기를 읽는다.
            try:
                head = path.read_text(encoding='utf-8')[:2000]
                w, h = re.search(r'<svg\b[^>]*?\swidth="([\d.]+)', head), re.search(r'<svg\b[^>]*?\sheight="([\d.]+)', head)
                vb = re.search(r'viewBox="[\d.\s-]*?([\d.]+)[\s,]+([\d.]+)"', head)
                _dims[path] = (round(float(w.group(1))), round(float(h.group(1)))) if w and h else                     (round(float(vb.group(1))), round(float(vb.group(2)))) if vb else None
            except OSError:
                _dims[path] = None
            return _dims[path]
        try:
            with Image.open(path) as im:
                _dims[path] = im.size
        except OSError:
            _dims[path] = None
    return _dims[path]


IMG = re.compile(r'<img\b[^>]*>')


def responsive(markup, sizes, eager=0):
    """<img src="/images/...">에 작은 판이 있으면 srcset·sizes를, 크기를 모르면 width·height를, 앞의 eager장 뒤로는 loading="lazy"를 붙인다."""
    count = 0

    def fix(m):
        nonlocal count
        tag = m.group(0)
        src = re.search(r'\ssrc="(/images/[^"?]+)(\?[^"]*)?"', tag)
        if not src:
            return tag
        count += 1
        path = ROOT / src.group(1).lstrip('/')
        size = dims(path)
        add = []
        if size and ' width=' not in tag:
            add.append(f'width="{size[0]}" height="{size[1]}"')
        if size and size[0] > 1000 and 'srcset=' not in tag:
            base = src.group(1).rsplit('.', 1)[0]
            parts = [f'{base}-w{w}.webp {w}w' for w in WIDTHS if (ROOT / f'{base.lstrip("/")}-w{w}.webp').is_file()]
            if parts:
                add.append(f'srcset="{", ".join(parts)}, {src.group(1)}{src.group(2) or ""} {size[0]}w" sizes="{sizes}"')
        if count > eager and 'loading=' not in tag:
            add.append('loading="lazy"')
        if 'decoding=' not in tag:
            add.append('decoding="async"')
        return tag[:-1].rstrip('/').rstrip() + (' ' + ' '.join(add) if add else '') + '>'

    return IMG.sub(fix, markup)


if __name__ == '__main__':
    variants()
