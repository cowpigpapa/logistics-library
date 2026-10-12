// UN 번호 조회: 해양수산부 고시 「위험물 선박운송 기준」 [별표 1] 위험물목록 검색.
// 데이터는 unnumber-data.js(tools/un_data.py가 만든다), 특성란은 행을 처음 펼칠 때 unnumber-props.js를 불러온다.
(function () {
  const META = window.UN_META || {};
  const RAW = window.UN_ROWS || [];
  const F = META.fields || [];
  const PAGE = 100;
  const PROPS_SRC = '/unnumber-props.js?v=20261011-01';
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const squash = s => String(s || '').toLowerCase().replace(/[\s·・,.\-()]/g, '');

  // 압축 배열 → 객체. 검색용 문자열을 미리 만들어 둔다.
  const ROWS = RAW.map((a, i) => {
    const r = { i };
    F.forEach((f, k) => (r[f] = a[k] === undefined ? '' : a[k]));
    r.koQ = squash(r.ko);
    r.enL = String(r.en).toLowerCase();
    r.enQ = squash(r.en);
    return r;
  });
  const COUNT = {};
  ROWS.forEach(r => (COUNT[r.un] = (COUNT[r.un] || 0) + 1));
  const ABSENT = new Set(META.absent || []);

  // ---------------------------------------------------------------- 표시 도우미
  const badge = (cls, small) => {
    const m = String(cls).match(/^(\d)(?:\.(\d))?/);
    if (!m) return esc(cls);
    const key = m[1] === '1' ? '1' : m[2] ? `${m[1]}-${m[2]}` : m[1];
    return `<span class="un-badge c${key}${small ? ' is-sub' : ''}" title="${esc(m[1])}급">${esc(cls)}</span>`;
  };
  const subHtml = sub => {
    if (!sub) return '<span class="un-none">-</span>';
    const note = sub.match(/\(([^)]*)\)$/);
    const codes = sub.replace(/\s*\([^)]*\)$/, '').split(' ').filter(Boolean);
    return codes.map(c => badge(c, true)).join('') + (note ? `<span class="un-subnote">${esc(note[1])}</span>` : '');
  };
  const dash = v => (v ? esc(v) : '<span class="un-none">-</span>');
  const pair = v => {
    if (!v) return '';
    const [codes, extra] = String(v).split('|');
    return esc(codes.split(' ').join(', ')) + (extra ? ` <span class="un-extra">특별사항 ${esc(extra.split(' ').join(', '))}</span>` : '');
  };
  function mark(text, q) {
    const t = String(text);
    if (!q || q.length < 2) return esc(t);
    const at = t.toLowerCase().indexOf(q);
    if (at < 0) return esc(t);
    return esc(t.slice(0, at)) + '<mark>' + esc(t.slice(at, at + q.length)) + '</mark>' + esc(t.slice(at + q.length));
  }

  function rowHtml(r, q) {
    const same = COUNT[r.un] > 1 ? `<span class="un-same">같은 번호 ${COUNT[r.un]}행</span>` : '';
    const mp = r.mp ? '<span class="un-mp" title="해양오염물질">P</span>' : '';
    const warn = r.x ? '<span class="un-warn" title="BAM 데이터와 다른 값이 있음">!</span>' : '';
    return `<div class="un-item" role="listitem" data-i="${r.i}">` +
      `<button type="button" class="un-row" aria-expanded="false" aria-controls="un-d${r.i}">` +
      `<span class="un-no">UN${esc(r.un)}${warn}</span>` +
      `<span class="un-name"><span class="un-ko">${mark(r.ko, q)}</span><span class="un-en">${mark(r.en, q)}</span>${same}</span>` +
      `<span class="un-cls"><i>급</i>${badge(r.cls)}${mp}</span>` +
      `<span class="un-sub"><i>부위험성</i>${subHtml(r.sub)}</span>` +
      `<span class="un-pg"><i>용기등급</i>${r.pg ? esc(r.pg) : '<span class="un-none">-</span>'}</span>` +
      `<span class="un-ems"><i>EmS</i>${dash(r.ems)}</span>` +
      `<span class="un-chev" aria-hidden="true"></span>` +
      `</button><div class="un-detail" id="un-d${r.i}" hidden></div></div>`;
  }

  // 펼친 칸: 값 + 화주 서류와 대조할 때 보는 점
  function field(label, value, hint) {
    return `<div class="un-f"><dt>${label}</dt><dd><span class="un-v">${value}</span>${hint ? `<small>${hint}</small>` : ''}</dd></div>`;
  }
  function detailHtml(r) {
    const lq = r.lq === '0' ? '0 <span class="un-extra">소량 위험물 규정 적용 불가</span>' : dash(r.lq);
    const eq = r.eq === 'E0' ? 'E0 <span class="un-extra">극소량 위험물 규정 적용 불가</span>' : dash(r.eq);
    const stow = [r.stowcat ? `적재방법 ${esc(r.stowcat)}` : '', r.stow ? esc(r.stow.split(' ').join(', ')) : ''].filter(Boolean).join(' · ');
    const props = window.UN_PROPS ? (window.UN_PROPS[r.i] || '') : null;
    let html = '<dl class="un-fields">' +
      field('정식운송품명', `${esc(r.en)}<br><span class="un-extra">${esc(r.ko)}</span>`, 'MSDS 14.2와 신고서의 품명이 이 표기와 같은지. N.O.S. 항목은 기술명(성분명) 병기가 필요한지 특별요건을 확인합니다.') +
      field('급 · 부위험성', `${badge(r.cls)} ${r.sub ? subHtml(r.sub) : '<span class="un-extra">부위험성 없음</span>'}`, 'MSDS 14.3에 주 위험성과 부위험성이 모두 적혀 있는지.') +
      field('용기등급', r.pg ? esc(r.pg) : '<span class="un-extra">해당 없음</span>', 'MSDS 14.4. 같은 번호에 여러 등급이 있으면 화주가 판정한 등급의 행을 봅니다.') +
      field('해양오염물질', r.mp ? '<b>P</b> <span class="un-extra">목록에 해양오염물질 표시</span>' : '<span class="un-extra">목록 표시 없음</span>', 'MSDS 14.5. 표시가 없어도 혼합물은 화주의 판정에 따라 해양오염물질일 수 있습니다.') +
      field('특별요건', dash(r.sp ? r.sp.split(' ').join(', ') : ''), '적용 제외, 추가 표기 같은 특별 규정 번호. 화주가 예외를 주장하면 근거가 되는 번호를 확인합니다.') +
      field('소량(LQ)', lq, '내장용기 1개당 한도. 화주가 소량 위험물로 운송한다면 이 한도 안인지.') +
      field('극소량(EQ)', eq, 'E 코드별로 내장·외장용기 한도가 정해져 있습니다.') +
      field('용기 및 포장', pair(r.pack) || dash(''), '포장지침(P·LP)과 특별사항(PP·L). 화주의 포장 사양이 허용되는지.') +
      field('중형산적용기(IBC)', pair(r.ibc) || dash(''), 'IBC 지침과 특별사항(B). 비어 있으면 IBC 사용 불가.') +
      field('포터블탱크', pair(r.tank) || dash(''), 'T 코드와 탱크 특별사항(TP).') +
      field('EmS', dash(r.ems), '화재(F-)·누출(S-) 비상조치표 번호. 신고서에 적습니다.') +
      field('적재', stow || dash(''), '적재방법(A~E, 화약류 01~05)과 SW·H 코드. 실제 적재 위치는 선사가 정합니다.') +
      field('격리', dash(r.seg ? r.seg.split(' ').join(', ') : ''), '격리군(SGG)과 격리 코드(SG). 혼적 가능 여부는 선사가 판단합니다.') +
      `<div class="un-f un-props"><dt>특성</dt><dd>${props === null ? '<span class="un-extra un-loading">불러오는 중…</span>' : (props ? esc(props) : '<span class="un-none">-</span>')}</dd></div>` +
      '</dl>';
    if (r.x) {
      html += `<p class="un-x"><b>BAM 데이터와 다름</b> ${esc(r.x)}<br>위 값은 고시 원문 그대로이고, BAM(IMDG Amdt. 42-24) 표기를 참고로 덧붙였습니다. 서류에 적을 때는 IMDG Code 원문을 확인하세요.</p>`;
    }
    return html;
  }

  // 특성란은 처음 펼칠 때 한 번만 불러온다(약 60KB, gzip).
  let propsState = 'idle';
  function ensureProps() {
    if (window.UN_PROPS || propsState !== 'idle') return;
    propsState = 'loading';
    const s = document.createElement('script');
    s.src = PROPS_SRC;
    s.onload = () => {
      propsState = 'done';
      document.querySelectorAll('.un-item.is-open').forEach(item => {
        const dd = item.querySelector('.un-props dd');
        const v = window.UN_PROPS ? window.UN_PROPS[+item.dataset.i] : '';
        if (dd) dd.innerHTML = v ? esc(v) : '<span class="un-none">-</span>';
      });
    };
    s.onerror = () => {
      propsState = 'idle';
      document.querySelectorAll('.un-loading').forEach(el => (el.textContent = '특성란을 불러오지 못했습니다.'));
    };
    document.head.appendChild(s);
  }

  // ---------------------------------------------------------------- 검색
  function search(raw) {
    const q = String(raw || '').trim();
    if (!q) return { rows: ROWS, q: '', kind: 'all' };
    const num = q.replace(/\s+/g, '').match(/^(?:un)?(\d{1,4})$/i);
    if (num) {
      const d = num[1];
      if (d.length === 4) return { rows: ROWS.filter(r => r.un === d), q: '', kind: 'un', un: d };
      return { rows: ROWS.filter(r => r.un.startsWith(d)), q: '', kind: 'prefix' };
    }
    const lower = q.toLowerCase();
    const sq = squash(q);
    if (!sq) return { rows: [], q: lower, kind: 'text' };
    // 영문 단수형으로 찾아도 복수형 품명이 걸리게 한다(battery → batteries).
    const alt = /[a-z]y$/.test(sq) ? sq.slice(0, -1) + 'ie' : null;
    const hits = [];
    for (const r of ROWS) {
      const inKo = r.koQ.indexOf(sq);
      const inEn = r.enL.indexOf(lower);
      const inEnQ = inEn >= 0 ? inEn : Math.max(r.enQ.indexOf(sq), alt ? r.enQ.indexOf(alt) : -1);
      if (inKo < 0 && inEnQ < 0) continue;
      // 이름이 검색어로 시작하면 앞으로
      const score = inKo === 0 || inEn === 0 ? 0 : 1;
      hits.push([score, r]);
    }
    hits.sort((a, b) => a[0] - b[0] || a[1].i - b[1].i);
    return { rows: hits.map(h => h[1]), q: lower, kind: 'text' };
  }

  let result = { rows: [], q: '' };
  let page = 1;
  const body = $('unBody');
  const pager = $('unPager');

  // 100행씩 페이지로 나눠 보여 준다.
  function pageCount() { return Math.max(1, Math.ceil(result.rows.length / PAGE)); }
  function pagerHtml() {
    const total = pageCount();
    if (total <= 1) return '';
    const nums = new Set([1, total, page - 2, page - 1, page, page + 1, page + 2].filter(n => n >= 1 && n <= total));
    const list = [...nums].sort((a, b) => a - b);
    let out = `<button type="button" data-page="${page - 1}" ${page === 1 ? 'disabled' : ''} aria-label="이전 페이지">‹ 이전</button>`;
    list.forEach((n, i) => {
      if (i && n - list[i - 1] > 1) out += '<span class="un-gap" aria-hidden="true">…</span>';
      out += `<button type="button" data-page="${n}" ${n === page ? 'aria-current="page"' : ''}>${n}</button>`;
    });
    out += `<button type="button" data-page="${page + 1}" ${page === total ? 'disabled' : ''} aria-label="다음 페이지">다음 ›</button>`;
    out += `<span class="un-pos">${page} / ${total} 페이지</span>`;
    return out;
  }
  function showPage(n, scroll) {
    page = Math.min(Math.max(1, n), pageCount());
    const start = (page - 1) * PAGE;
    body.innerHTML = result.rows.slice(start, start + PAGE).map(r => rowHtml(r, result.q)).join('');
    pager.innerHTML = pagerHtml();
    pager.hidden = pageCount() <= 1;
    if (scroll) $('unList').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  pager.addEventListener('click', event => {
    const b = event.target.closest('button[data-page]');
    if (b && !b.disabled) showPage(+b.dataset.page, true);
  });

  function render() {
    const value = $('unSearch').value;
    result = search(value);
    showPage(1, false);
    const n = result.rows.length;
    const uns = new Set(result.rows.map(r => r.un)).size;
    const empty = $('unEmpty');
    empty.hidden = n > 0;
    if (!n) {
      if (result.un && ABSENT.has(result.un)) {
        empty.innerHTML = `<b>UN${esc(result.un)}</b>: 제7급(방사성물질) 항목으로, 고시 [별표 1] 위험물목록에 실려 있지 않습니다. IMDG Code 원문과 방사성물질 운반에 관한 국내 규정을 확인하세요.`;
      } else if (result.un) {
        empty.innerHTML = `<b>UN${esc(result.un)}</b>: 위험물목록에 없는 번호입니다. 번호를 다시 확인하고, 화주 서류의 번호가 맞는지 화주에게 확인하세요.`;
      } else {
        empty.innerHTML = '찾는 품명이 없습니다. 영문 정식운송품명의 일부(예: lithium, paint)나 UN 번호로 찾아 보세요.';
      }
    }
    $('unCount').textContent = value.trim() ? `${n.toLocaleString('ko-KR')}행 찾음 · UN 번호 ${uns.toLocaleString('ko-KR')}개` : '';
    // 한 행만 찾았으면 바로 펼친다.
    if (n === 1) toggle(body.querySelector('.un-item'), true);
    // 검색어를 주소에 남겨 공유할 수 있게 한다.
    try {
      const url = new URL(location.href);
      if (value.trim()) url.searchParams.set('q', value.trim()); else url.searchParams.delete('q');
      history.replaceState(null, '', url);
    } catch (_) {}
  }

  function toggle(item, open) {
    if (!item) return;
    const btn = item.querySelector('.un-row');
    const panel = item.querySelector('.un-detail');
    const willOpen = open === undefined ? btn.getAttribute('aria-expanded') !== 'true' : open;
    btn.setAttribute('aria-expanded', String(willOpen));
    item.classList.toggle('is-open', willOpen);
    if (willOpen) {
      if (!panel.innerHTML) panel.innerHTML = detailHtml(ROWS[+item.dataset.i]);
      panel.hidden = false;
      ensureProps();
    } else {
      panel.hidden = true;
    }
  }

  body.addEventListener('click', event => {
    const btn = event.target.closest('.un-row');
    if (btn) toggle(btn.parentElement);
  });
  let timer = null;
  const search_ = $('unSearch');
  search_.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(render, 140);
  });
  search_.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      clearTimeout(timer);
      render();
    }
  });
  // Ctrl+F(맥은 Cmd+F)는 브라우저 찾기 대신 검색칸으로 보낸다.
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      search_.focus();
      search_.select();
      search_.scrollIntoView({ block: 'center', behavior: 'smooth' });
      const box = search_.parentElement;
      box.classList.remove('at-search-hit');
      void box.offsetWidth;
      box.classList.add('at-search-hit');
    }
  });


  search_.value = new URLSearchParams(location.search).get('q') || '';
  render();
})();
