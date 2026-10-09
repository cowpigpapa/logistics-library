// 컨테이너 추적 바로가기: 선사별 Prefix(ISO 6346 소유자 코드)와 공식 추적 페이지 목록.
// 각 선사 사이트로 연결만 하고, 추적 정보는 가져오지 않는다. 컨테이너 번호를 넣으면 체크 디지트로 오타를 확인한다.
// 링크 점검 결과(매일 자동 + 관리자 수동)는 방문자 DB에서 읽는다.
(function () {
  const CARRIERS = window.CTR_CARRIERS || [];
  const STATUS_RPC = 'https://yihsukyedtlsdbexthlu.supabase.co/rest/v1/rpc/get_link_status';
  const PUBLIC_KEY = 'sb_publishable_vgcDAWoOJRD8Xvp2p4Ew9A_exTmzuXM';
  const BROKEN_STREAK = 2;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const ext = 'target="_blank" rel="noopener noreferrer"';
  const store = {
    get: key => { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set: (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} },
    del: key => { try { localStorage.removeItem(key); } catch (_) {} }
  };
  const ownerFlag = new URLSearchParams(location.search).get('owner');
  if (ownerFlag === '1') store.set('onharu-owner', '1');
  if (ownerFlag === '0') store.del('onharu-owner');
  const owner = store.get('onharu-owner') === '1';
  let status = {};
  let lastRun = null;

  // ISO 6346 체크 디지트: 글자는 A=10부터 11의 배수를 건너뛰며 값을 매기고, 자리마다 2의 거듭제곱을 곱해 더한 뒤 11로 나눈 나머지(10이면 0).
  const LETTER = {};
  (() => {
    let v = 10;
    for (const ch of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
      if (v % 11 === 0) v++;
      LETTER[ch] = v++;
    }
  })();
  function checkDigit(ten) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      const ch = ten[i];
      const value = /\d/.test(ch) ? Number(ch) : LETTER[ch];
      sum += value * 2 ** i;
    }
    return (sum % 11) % 10;
  }
  const containerNo = q => {
    const s = q.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return /^[A-Z]{3}[UJZ]\d{6,7}$/.test(s) ? s : null;
  };

  const isBroken = a => {
    const s = status[a.url];
    if (!s || s.state !== 'error' || s.fail_streak < BROKEN_STREAK) return false;
    return s.code === 404 || s.code === 410 || /ENOTFOUND/.test(s.detail || '');
  };
  const day = iso => new Date(iso).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  const PROBLEMS = [['broken', '링크 깨짐'], ['failed', '실패'], ['blocked', '자동 확인 불가'], ['unchecked', '점검 전']];
  const filters = new Set();
  const problemOf = a => {
    const s = status[a.url];
    if (!s) return 'unchecked';
    if (isBroken(a)) return 'broken';
    if (s.state === 'error' || s.state === 'timeout') return 'failed';
    if (s.state === 'blocked') return 'blocked';
    return null;
  };

  function adminChip(a) {
    const s = status[a.url];
    if (!s) return '<span class="at-chip">점검 전</span>';
    if (s.state === 'ok') return '';
    if (s.state === 'blocked') return `<span class="at-chip">자동 확인 불가${s.code ? ` ${s.code}` : ''}</span>`;
    return `<span class="at-chip at-chip-bad">실패 ${s.fail_streak}회 · ${esc(s.detail || s.code || s.state)}</span>`;
  }

  function remark(a) {
    const flags = [];
    if (isBroken(a)) flags.push('<b class="at-flag at-flag-bad">링크 깨짐</b>');
    if (a.kind === 'lessor') flags.push('<b class="at-flag at-flag-lessor">리스 회사</b>');
    else if (a.tracking === false) flags.push('<b class="at-flag">공개 추적 없음</b>');
    else if (a.tracking === null) flags.push('<b class="at-flag">추적 확인 못함</b>');
    const note = esc(a.note_ko || '');
    return flags.join(' ') + (note ? `${flags.length ? ' ' : ''}${note}` : '') + (owner ? ` ${adminChip(a)}` : '');
  }

  function row(a, hit) {
    const name = a.name_ko ? `${esc(a.name_ko)} <small>${esc(a.name)}</small>` : esc(a.name);
    const cls = [a.kind === 'lessor' || a.tracking !== true ? 'at-none' : '', isBroken(a) ? 'at-broken' : ''].filter(Boolean).join(' ');
    const prefixes = a.prefixes
      .map(p => `<a class="at-prefix${hit === p ? ' ct-hit' : ''}" href="${esc(a.url)}" ${ext} aria-label="${esc(a.name)} ${esc(p)} 추적 페이지 열기">${esc(p)}</a>`)
      .join(' ') || '<span class="at-muted">—</span>';
    return `<tr${cls ? ` class="${cls}"` : ''}><td>${name}</td><td>${esc(a.scac || '')}</td><td class="ct-prefixes">${prefixes}</td>` +
      `<td class="at-url"><a href="${esc(a.url)}" ${ext}>${esc(a.url)}</a></td><td class="at-remark">${remark(a)}</td></tr>`;
  }

  function showCheck(no) {
    const box = $('ctCheck');
    if (!no) {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    if (no.length === 10) {
      box.className = 'ct-check ct-warn';
      box.innerHTML = `<b>${esc(no)}</b> 마지막 체크 디지트가 빠졌습니다. 계산하면 <b>${checkDigit(no)}</b>입니다(${esc(no)}${checkDigit(no)}).`;
      return;
    }
    const expect = checkDigit(no.slice(0, 10));
    const ok = expect === Number(no[10]);
    box.className = `ct-check ${ok ? 'ct-ok' : 'ct-bad'}`;
    box.innerHTML = ok
      ? `<b>${esc(no.slice(0, 4))} ${esc(no.slice(4, 10))} ${esc(no[10])}</b> 체크 디지트가 맞습니다.`
      : `<b>${esc(no.slice(0, 4))} ${esc(no.slice(4, 10))} ${esc(no[10])}</b> 체크 디지트가 맞지 않습니다. 앞 10자리로 계산하면 마지막 자리는 <b>${expect}</b>입니다. 번호를 다시 확인하세요.`;
  }

  function render() {
    const raw = String($('dirSearch').value || '').trim();
    const q = raw.toLowerCase();
    const no = containerNo(raw);
    showCheck(no);
    const ownerCode = no ? no.slice(0, 4) : /^[a-z]{3}[ujz]$/i.test(raw) ? raw.toUpperCase() : null;
    const rows = CARRIERS.filter(a => {
      if (filters.size && !filters.has(problemOf(a))) return false;
      if (!q) return true;
      if (ownerCode) return a.prefixes.includes(ownerCode);
      return [a.name, a.name_ko, a.scac, ...a.prefixes].some(v => String(v || '').toLowerCase().includes(q));
    });
    $('dirBody').innerHTML = rows.map(a => row(a, ownerCode)).join('');
    $('dirEmpty').hidden = rows.length > 0;
    if (ownerCode && !rows.length) {
      $('dirEmpty').innerHTML = `Prefix <b>${esc(ownerCode)}</b>는 목록에 없습니다. 리스 회사나 작은 선사의 코드일 수 있으니 B/L을 발행한 선사의 사이트에서 B/L 번호나 컨테이너 번호로 조회하세요. 목록에 넣을 선사는 <a href="mailto:support@onharu.app">support@onharu.app</a>으로 알려 주세요.`;
    } else {
      $('dirEmpty').innerHTML = '찾는 선사가 없습니다. 목록에 없는 선사는 <a href="mailto:support@onharu.app">support@onharu.app</a>으로 알려 주세요.';
    }
    const broken = CARRIERS.filter(isBroken).length;
    const carriers = CARRIERS.filter(a => a.kind !== 'lessor').length;
    $('dirCount').textContent = q
      ? `${rows.length}곳 찾음`
      : `선사 ${carriers}곳 · 리스 회사 ${CARRIERS.length - carriers}곳` + (lastRun ? ` · 마지막 링크 점검 ${day(lastRun)}` : '') + (broken ? ` · 깨진 링크 ${broken}곳` : '');
  }

  async function loadStatus() {
    try {
      const res = await fetch(STATUS_RPC, { method: 'POST', headers: { apikey: PUBLIC_KEY, 'Content-Type': 'application/json' }, body: '{}' });
      if (!res.ok) return;
      const list = await res.json();
      status = {};
      list.forEach(s => (status[s.url] = s));
      lastRun = list[0]?.last_run || null;
      render();
      if (owner) renderAdmin();
    } catch (_) {}
  }

  function renderAdmin(message) {
    const bar = $('adminBar');
    const count = key => CARRIERS.filter(a => problemOf(a) === key).length;
    const counts = Object.fromEntries(PROBLEMS.map(([key]) => [key, count(key)]));
    const shown = PROBLEMS.filter(([key]) => counts[key] > 0 || filters.has(key));
    const allOn = shown.length > 0 && shown.every(([key]) => filters.has(key));
    const okCount = CARRIERS.filter(a => status[a.url] && problemOf(a) === null).length;
    bar.hidden = false;
    bar.innerHTML =
      `<b>관리자 · 링크 점검</b><span>정상 ${okCount}</span>` +
      `<label class="at-filter-all"><input type="checkbox" data-filter="all"${allOn ? ' checked' : ''}> 문제 있는 링크 전체 (${shown.reduce((n, [key]) => n + counts[key], 0)})</label>` +
      shown.map(([key, label]) => `<label><input type="checkbox" data-filter="${key}"${filters.has(key) ? ' checked' : ''}> ${label} (${counts[key]})</label>`).join('') +
      '<button type="button" id="runCheck">지금 점검</button>' +
      (message ? `<span class="at-admin-msg">${esc(message)}</span>` : '');
    bar.querySelectorAll('[data-filter]').forEach(box => {
      box.onchange = () => {
        const key = box.dataset.filter;
        if (key === 'all') shown.forEach(([k]) => (box.checked ? filters.add(k) : filters.delete(k)));
        else if (box.checked) filters.add(key);
        else filters.delete(key);
        render();
        renderAdmin();
      };
    });
    $('runCheck').onclick = runCheck;
  }

  async function runCheck() {
    let key = store.get('ll-admin-key');
    if (!key) {
      key = window.prompt('관리자 키를 입력하세요');
      if (!key) return;
    }
    renderAdmin('점검 중… 1~2분 걸립니다');
    $('runCheck').disabled = true;
    try {
      const res = await fetch('/api/check-links', { headers: { Authorization: `Bearer ${key.trim()}` }, cache: 'no-store' });
      if (res.status === 401) {
        store.del('ll-admin-key');
        renderAdmin('관리자 키가 맞지 않습니다');
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const out = await res.json();
      store.set('ll-admin-key', key.trim());
      await loadStatus();
      renderAdmin(`점검 완료: ${out.total}개 중 정상 ${out.ok}, 자동 확인 불가 ${out.blocked}, 실패 ${out.failed}`);
    } catch (error) {
      renderAdmin(`점검하지 못했습니다 (${error.message})`);
    }
  }

  const search = $('dirSearch');
  search.addEventListener('input', render);
  // Ctrl+F(맥은 Cmd+F)는 브라우저 찾기 대신 검색칸으로 보낸다.
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      search.focus();
      search.select();
      search.scrollIntoView({ block: 'center', behavior: 'smooth' });
      const box = search.parentElement;
      box.classList.remove('at-search-hit');
      void box.offsetWidth;
      box.classList.add('at-search-hit');
    }
  });

  search.value = new URLSearchParams(location.search).get('q') || '';
  render();
  if (owner) renderAdmin();
  loadStatus();
})();
