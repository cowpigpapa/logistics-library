// 항공화물 AWB 추적 바로가기: 항공사별 Prefix와 공식 화물 추적 페이지 목록.
// 각 항공사 사이트로 연결만 하고, 추적 정보는 가져오지 않는다.
(function () {
  const AIRLINES = window.AWB_AIRLINES || [];
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const ext = 'target="_blank" rel="noopener noreferrer"';

  function remark(a) {
    const head = a.tracking === false ? 'AWB tracking 없음' : a.tracking === null ? 'AWB tracking 확인 못함' : '';
    const note = esc(a.note_ko || '');
    if (!head) return note;
    return `<b class="at-flag">${head}</b>${note ? ` ${note}` : ''}`;
  }

  function row(a) {
    const name = a.name_ko ? `${esc(a.name_ko)} <small>${esc(a.name)}</small>` : esc(a.name);
    return `<tr${a.tracking === true ? '' : ' class="at-none"'}><td>${name}</td><td>${esc(a.iata)}</td>` +
      `<td><a class="at-prefix" href="${esc(a.url)}" ${ext} aria-label="${esc(a.name)} 추적 페이지 열기">${esc(a.prefix)}</a></td>` +
      `<td class="at-url"><a href="${esc(a.url)}" ${ext}>${esc(a.url)}</a></td><td class="at-remark">${remark(a)}</td></tr>`;
  }

  function render(query) {
    const q = String(query || '').trim().toLowerCase();
    const digits = q.replace(/\D/g, '');
    const rows = AIRLINES.filter(a => {
      if (!q) return true;
      if (digits.length >= 3 && /^[\d\s-]+$/.test(q)) return a.prefix === digits.slice(0, 3);
      return [a.name, a.name_ko, a.iata, a.prefix].some(v => String(v || '').toLowerCase().includes(q));
    });
    $('dirBody').innerHTML = rows.map(row).join('');
    $('dirEmpty').hidden = rows.length > 0;
    $('dirCount').textContent = q ? `${rows.length}곳 찾음` : `항공사 ${AIRLINES.length}곳 · 링크 확인 ${window.AWB_CHECKED || ''}`;
  }

  const search = $('dirSearch');
  search.addEventListener('input', () => render(search.value));
  // Ctrl+F(맥은 Cmd+F)는 브라우저 찾기 대신 검색칸으로 보낸다.
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      search.focus();
      search.select();
      search.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });

  const initial = new URLSearchParams(location.search).get('q') || '';
  search.value = initial;
  render(initial);
})();
