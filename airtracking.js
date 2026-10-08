// 항공화물 AWB 추적 바로가기: 항공사별 Prefix와 공식 화물 추적 페이지 목록.
// 각 항공사 사이트로 연결만 하고, 추적 정보는 가져오지 않는다.
// 링크 점검 결과(매일 자동 + 관리자 수동)는 방문자 DB에서 읽는다.
(function () {
  const AIRLINES = window.AWB_AIRLINES || [];
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
  const owner = store.get('onharu-owner') === '1';
  let status = {};
  let lastRun = null;
  let problemsOnly = false;

  // 공개 "링크 깨짐"은 확실한 경우만: 페이지 없음(404·410)이나 도메인 없음이 이틀 연속.
  // 접속 거부·응답 지연은 접속하는 나라에 따라 달라서 관리자 화면에만 "실패"로 보인다.
  const isBroken = a => {
    const s = status[a.url];
    if (!s || s.state !== 'error' || s.fail_streak < BROKEN_STREAK) return false;
    return s.code === 404 || s.code === 410 || /ENOTFOUND/.test(s.detail || '');
  };
  const day = iso => new Date(iso).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  function adminChip(a) {
    const s = status[a.url];
    if (!s) return '<span class="at-chip">점검 전</span>';
    if (s.state === 'ok') return '';
    if (s.state === 'blocked') return `<span class="at-chip">자동 확인 불가${s.code ? ` ${s.code}` : ''}</span>`;
    return `<span class="at-chip at-chip-bad">실패 ${s.fail_streak}회 · ${esc(s.detail || s.code || s.state)}</span>`;
  }

  function remark(a) {
    const flags = [];
    if (isBroken(a)) flags.push(`<b class="at-flag at-flag-bad">링크 깨짐</b>`);
    if (a.tracking === false) flags.push('<b class="at-flag">AWB tracking 없음</b>');
    if (a.tracking === null) flags.push('<b class="at-flag">AWB tracking 확인 못함</b>');
    const note = esc(a.note_ko || '');
    return flags.join(' ') + (note ? `${flags.length ? ' ' : ''}${note}` : '') + (owner ? ` ${adminChip(a)}` : '');
  }

  function row(a) {
    const name = a.name_ko ? `${esc(a.name_ko)} <small>${esc(a.name)}</small>` : esc(a.name);
    const cls = [a.tracking === true ? '' : 'at-none', isBroken(a) ? 'at-broken' : ''].filter(Boolean).join(' ');
    return `<tr${cls ? ` class="${cls}"` : ''}><td>${name}</td><td>${esc(a.iata)}</td>` +
      `<td><a class="at-prefix" href="${esc(a.url)}" ${ext} aria-label="${esc(a.name)} 추적 페이지 열기">${esc(a.prefix)}</a></td>` +
      `<td class="at-url"><a href="${esc(a.url)}" ${ext}>${esc(a.url)}</a></td><td class="at-remark">${remark(a)}</td></tr>`;
  }

  function render() {
    const q = String($('dirSearch').value || '').trim().toLowerCase();
    const digits = q.replace(/\D/g, '');
    const rows = AIRLINES.filter(a => {
      if (problemsOnly) {
        const s = status[a.url];
        if (!s || s.state === 'ok') return false;
      }
      if (!q) return true;
      if (digits.length >= 3 && /^[\d\s-]+$/.test(q)) return a.prefix === digits.slice(0, 3);
      return [a.name, a.name_ko, a.iata, a.prefix].some(v => String(v || '').toLowerCase().includes(q));
    });
    $('dirBody').innerHTML = rows.map(row).join('');
    $('dirEmpty').hidden = rows.length > 0;
    const broken = AIRLINES.filter(isBroken).length;
    $('dirCount').textContent = q
      ? `${rows.length}곳 찾음`
      : `항공사 ${AIRLINES.length}곳` + (lastRun ? ` · 마지막 링크 점검 ${day(lastRun)}` : '') + (broken ? ` · 깨진 링크 ${broken}곳` : '');
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

  // 관리자(?owner=1로 표시한 브라우저)에게만 보이는 점검 막대
  function renderAdmin(message) {
    const bar = $('adminBar');
    const all = Object.values(status);
    const count = fn => all.filter(fn).length;
    bar.hidden = false;
    bar.innerHTML =
      `<b>관리자 · 링크 점검</b>` +
      `<span>정상 ${count(s => s.state === 'ok')} · 자동 확인 불가 ${count(s => s.state === 'blocked')} · 실패 ${count(s => s.state === 'error' || s.state === 'timeout')} · 깨짐 표시 ${AIRLINES.filter(isBroken).length}</span>` +
      `<label><input type="checkbox" id="problemsOnly"${problemsOnly ? ' checked' : ''}> 문제 있는 링크만</label>` +
      `<button type="button" id="runCheck">지금 점검</button>` +
      (message ? `<span class="at-admin-msg">${esc(message)}</span>` : '');
    $('problemsOnly').onchange = event => {
      problemsOnly = event.target.checked;
      render();
    };
    $('runCheck').onclick = runCheck;
  }

  async function runCheck() {
    let key = store.get('ll-admin-key');
    if (!key) {
      key = window.prompt('관리자 키를 입력하세요');
      if (!key) return;
    }
    renderAdmin('점검 중… 1분 정도 걸립니다');
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
    }
  });

  search.value = new URLSearchParams(location.search).get('q') || '';
  render();
  if (owner) renderAdmin();
  loadStatus();
})();
