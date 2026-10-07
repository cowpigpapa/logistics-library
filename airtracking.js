// 항공화물 AWB 추적 바로가기. 번호 확인과 공식 추적 페이지 연결만 하고, 추적 정보는 가져오지 않는다.
(function () {
  const AIRLINES = window.AWB_AIRLINES || [];
  const byPrefix = {};
  AIRLINES.forEach(a => (byPrefix[a.prefix] = byPrefix[a.prefix] || []).push(a));

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const label = a => (a.name_ko ? `${a.name_ko} <small>${esc(a.name)}</small>` : esc(a.name));

  // 일련번호 앞 7자리를 7로 나눈 나머지가 마지막 자리와 같아야 한다.
  const checkDigit = serial => Number(serial.slice(0, 7)) % 7;

  function trackHref(a, prefix, serial) {
    if (a.deeplink && serial) {
      return a.deeplink
        .replace(/\{prefix\}/g, prefix)
        .replace(/\{serial\}/g, serial)
        .replace(/\{awbdash\}/g, `${prefix}-${serial}`)
        .replace(/\{awb\}/g, prefix + serial);
    }
    return a.tracking_url;
  }

  function copy(text) {
    try {
      navigator.clipboard?.writeText(text).catch(() => {});
    } catch (_) {}
  }

  function airlineCard(a, prefix, serial) {
    const auto = Boolean(a.deeplink && serial);
    const awb = serial ? `${prefix}-${serial}` : '';
    const action = !a.tracking_url
      ? `<p class="at-warn">${esc(a.note_ko || '이 항공사는 공개 화물 추적 페이지를 확인하지 못했습니다.')}</p>`
      : `<a class="at-go" href="${esc(trackHref(a, prefix, serial))}" target="_blank" rel="noopener noreferrer" data-copy="${esc(auto ? '' : awb)}">${auto ? '번호 넣어 추적 페이지 열기' : '추적 페이지 열기'} ↗</a>` +
        (serial && !auto ? '<p class="at-small">이 항공사는 번호를 주소로 받지 않습니다. 버튼을 누르면 번호가 복사되니 추적 페이지에 붙여 넣으세요.</p>' : '');
    return `<div class="at-airline"><div><p class="at-airline-name">${label(a)}</p><p class="at-airline-meta">IATA ${esc(a.iata)} · 접두번호 ${esc(a.prefix)}${a.note_ko ? ` · ${esc(a.note_ko)}` : ''}</p></div>${action}</div>`;
  }

  function show(raw) {
    const box = $('awbResult');
    const digits = String(raw || '').replace(/\D/g, '');
    box.hidden = false;
    if (!digits) {
      box.hidden = true;
      return;
    }
    if (digits.length < 3) {
      box.innerHTML = '<p class="at-warn">앞 세 자리(항공사 접두번호)부터 넣어 주세요.</p>';
      return;
    }
    const prefix = digits.slice(0, 3);
    const serial = digits.length === 11 ? digits.slice(3) : '';
    const list = byPrefix[prefix] || [];
    let html = '';
    if (digits.length === 11) {
      const expect = checkDigit(serial);
      const ok = expect === Number(serial[7]);
      html += ok
        ? `<p class="at-ok"><b>${prefix}-${serial}</b> 체크 디지트가 맞습니다.</p>`
        : `<p class="at-bad"><b>${prefix}-${serial}</b> 체크 디지트가 맞지 않습니다. 앞 일곱 자리로 계산하면 마지막 자리는 <b>${expect}</b>여야 합니다. 번호를 다시 확인하세요.</p>`;
    } else if (digits.length !== 3) {
      html += `<p class="at-warn">AWB 번호는 11자리입니다(지금 ${digits.length}자리). 항공사만 먼저 찾아 보여 드립니다.</p>`;
    }
    if (!list.length) {
      html += `<p class="at-warn">접두번호 <b>${prefix}</b>인 항공사가 목록에 없습니다. 항공사 이름으로 아래 목록을 검색하거나, 발행 항공사에 문의하세요.</p>`;
    } else {
      html += list.map(a => airlineCard(a, prefix, serial)).join('');
    }
    box.innerHTML = html;
  }

  function renderDir(query) {
    const q = String(query || '').trim().toLowerCase();
    const rows = AIRLINES.filter(a => !q || [a.name, a.name_ko, a.iata, a.prefix].some(v => String(v || '').toLowerCase().includes(q)));
    $('dirBody').innerHTML = rows
      .map(a => {
        const link = a.tracking_url
          ? `<a href="${esc(a.tracking_url)}" target="_blank" rel="noopener noreferrer">추적 페이지 ↗</a>${a.deeplink ? ' <b class="at-badge">번호 자동 입력</b>' : ''}`
          : `<span class="at-muted">${esc(a.note_ko || '공개 추적 없음')}</span>`;
        return `<tr><td>${label(a)}</td><td>${esc(a.iata)}</td><td><button type="button" class="at-prefix" data-prefix="${esc(a.prefix)}">${esc(a.prefix)}</button></td><td>${link}</td></tr>`;
      })
      .join('');
    $('dirEmpty').hidden = rows.length > 0;
  }

  $('awbForm').addEventListener('submit', event => {
    event.preventDefault();
    const value = $('awbInput').value;
    show(value);
    const digits = value.replace(/\D/g, '');
    try {
      history.replaceState(null, '', digits ? `?awb=${digits}` : location.pathname);
    } catch (_) {}
  });
  $('awbResult').addEventListener('click', event => {
    const go = event.target.closest('.at-go');
    if (go && go.dataset.copy) copy(go.dataset.copy);
  });
  $('dirSearch').addEventListener('input', event => renderDir(event.target.value));
  $('dirBody').addEventListener('click', event => {
    const btn = event.target.closest('.at-prefix');
    if (!btn) return;
    $('awbInput').value = btn.dataset.prefix + '-';
    $('awbInput').focus();
    show(btn.dataset.prefix);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  renderDir('');
  if (window.AWB_CHECKED) $('dirChecked').textContent = `항공사 ${AIRLINES.length}곳 · 링크 확인 ${window.AWB_CHECKED}`;
  const initial = new URLSearchParams(location.search).get('awb');
  if (initial) {
    $('awbInput').value = initial;
    show(initial);
  }
})();
