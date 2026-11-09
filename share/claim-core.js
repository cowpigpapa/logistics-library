// 사고 비용 정산 데이터 모델 (설계안). 클레임(청구)과 정산 내역(돈의 이동)을 나눠 담고, 통계는 정산 내역을 더해서만 낸다.
// /lab·/share 의 설계 페이지와 입력 화면 시안이 같이 쓴다. 금액·이름은 모두 예시.
window.ClaimCore = (() => {
  const CODES = {
    type: [
      ['CV-D', '화물가액보상 (직접보상)', '고객(화주·수하인)이 당사에 화물 손해를 직접 청구'],
      ['CV-S', '화물가액보상 (보험사 구상)', '고객이 적하보험으로 먼저 보상받고, 보험사가 대위해 당사에 구상'],
      ['DM', '체화료 (운영손실)', '체화료·보관료·D&D 등 운영 중 생긴 비용 손실'],
      ['FN', '과태료', '세관·관청이 부과한 과태료. 부과 대상과 실제 납부 주체를 따로 기록'],
      ['ETC', '기타', '위에 들지 않는 비용']],
    claimant: ['고객 (화주·수하인)', '고객사 보험사', '관세청·세관', '기타 관청', '선사·항공사', '터미널·창고', '협력사', '기타'],
    issuedTo: ['당사', '고객', '협력사', '기타'],
    liability: ['전액 인정', '일부 인정', '책임제한 적용', '면책·지급 거절', '고객 귀책', '협력사 귀책', '협의 중'],
    status: ['접수', '검토 중', '합의', '지불 완료', '회수 진행', '종결'],
    payer: ['당사', '당사 보험사', '고객', '협력사'],
    payMethod: [['P1', '손해배상금 (송금·납부)'], ['P2', '인보이스 차감 (매출 차감)'], ['P3', '운영원가 처리 (Selling·Buying)']],
    recFrom: ['협력사', '선사·항공사', '운송사·창고', '당사 보험사', '고객', '기타'],
    recMethod: [['R1', '손해배상금 환입'], ['R2', '매입 할인 (Buying)'], ['R3', '보험금 수령']]
  };
  const label = (list, code) => (list.find(x => x[0] === code) || [code, code])[1];

  // 예시 클레임 7건 (원화)
  const SAMPLES = [
    { id: 'CL-0412-1', irr: 'IRR-2026-0412', title: '인천→프랑크푸르트 항공 화물 분실', type: 'CV-S', claimant: '고객사 보험사', claimantName: '고객사 적하보험사', orig: '고객 (화주·수하인)', origAmt: 30000000,
      issuedTo: '', liability: '책임제한 적용', status: '종결', cur: 'KRW', total: 30000000, date: '2026-03-12', closed: '2026-04-20',
      story: '고객이 3,000만원을 청구했고, 적하보험에서 3,000만원을 받은 뒤 보험사가 당사에 구상했다. 당사는 책임제한을 주장해 손해배상금 500만원을 지급하고 종결했다.',
      pays: [{ payer: '당사', method: 'P1', amount: 5000000, date: '2026-04-20', ref: '합의서·송금 2026-0420' }], recs: [] },
    { id: 'CL-0518-1', irr: 'IRR-2026-0518', title: '해상 수입 적하목록 정정 지연', type: 'FN', claimant: '관세청·세관', claimantName: '세관', orig: '', origAmt: 0,
      issuedTo: '당사', liability: '협력사 귀책', status: '종결', cur: 'KRW', total: 2000000, date: '2026-05-08', closed: '2026-06-10',
      story: '당사에 부과된 과태료 200만원을 당사가 납부했다. 지연 원인이 해외 협력사에 있어 협력사 인보이스에서 100만원을 할인받았다.',
      pays: [{ payer: '당사', method: 'P1', amount: 2000000, date: '2026-05-20', ref: '과태료 고지서' }], recs: [{ from: '협력사', method: 'R2', amount: 1000000, date: '2026-06-10', ref: '협력사 6월 인보이스' }] },
    { id: 'CL-0533-1', irr: 'IRR-2026-0533', title: '수입 신고 정보 오류 (고객 제공 정보)', type: 'FN', claimant: '관세청·세관', claimantName: '세관', orig: '', origAmt: 0,
      issuedTo: '당사', liability: '고객 귀책', status: '종결', cur: 'KRW', total: 1500000, date: '2026-05-21', closed: '2026-06-05',
      story: '당사 앞으로 과태료 150만원이 나왔지만 고객이 준 정보가 틀린 것이 원인이어서 고객이 직접 납부했다. 당사 손실은 없다.',
      pays: [{ payer: '고객', method: 'P1', amount: 1500000, date: '2026-06-05', ref: '고객 납부 확인' }], recs: [] },
    { id: 'CL-0541-1', irr: 'IRR-2026-0541', title: '고객 앞 과태료, 당사 신고 누락', type: 'FN', claimant: '고객 (화주·수하인)', claimantName: '고객사', orig: '', origAmt: 0,
      issuedTo: '고객', liability: '전액 인정', status: '종결', cur: 'KRW', total: 1000000, date: '2026-06-02', closed: '2026-06-30',
      story: '과태료는 고객 앞으로 나왔지만 당사 신고 누락이 원인이어서 당사가 부담했다. 고객의 다음 운임 인보이스에서 100만원을 차감했다.',
      pays: [{ payer: '당사', method: 'P2', amount: 1000000, date: '2026-06-30', ref: '크레딧 노트 CN-0630' }], recs: [] },
    { id: 'CL-0602-1', irr: 'IRR-2026-0602', title: '해상 수출 화물 침수', type: 'CV-D', claimant: '고객 (화주·수하인)', claimantName: '고객사', orig: '', origAmt: 0,
      issuedTo: '', liability: '전액 인정', status: '종결', cur: 'KRW', total: 12000000, date: '2026-06-03', closed: '2026-07-15',
      story: '고객이 1,200만원을 직접 청구했다. 당사 보험사가 1,000만원을 고객에게 직접 보상해 그 부분의 당사 지불은 0원이고, 보험 자기부담금 200만원만 고객 인보이스에서 차감했다. 당사 최종 부담은 자기부담금 200만원이다.',
      pays: [{ payer: '당사 보험사', method: 'P1', amount: 10000000, date: '2026-07-10', ref: '보험사 지급 통지' }, { payer: '당사', method: 'P2', amount: 2000000, date: '2026-07-15', ref: '크레딧 노트 CN-0715' }], recs: [] },
    { id: 'CL-0617-1', irr: 'IRR-2026-0617', title: '수입 컨테이너 반출 지연 체화료', type: 'DM', claimant: '선사·항공사', claimantName: '선사', orig: '', origAmt: 0,
      issuedTo: '', liability: '협력사 귀책', status: '종결', cur: 'KRW', total: 3500000, date: '2026-06-17', closed: '2026-07-31',
      story: '선사 체화료 350만원을 운영원가로 처리했다. 내륙 운송 협력사의 배차 지연이 원인이어서 협력사 인보이스에서 150만원을 할인받았다.',
      pays: [{ payer: '당사', method: 'P3', amount: 3500000, date: '2026-07-05', ref: '선사 인보이스 (Buying)' }], recs: [{ from: '협력사', method: 'R2', amount: 1500000, date: '2026-07-31', ref: '운송사 7월 인보이스' }] },
    { id: 'CL-0703-1', irr: 'IRR-2026-0703', title: '창고 하역 중 화물 파손', type: 'CV-D', claimant: '고객 (화주·수하인)', claimantName: '고객사', orig: '', origAmt: 0,
      issuedTo: '', liability: '전액 인정', status: '종결', cur: 'KRW', total: 8000000, date: '2026-07-03', closed: '2026-08-20',
      story: '당사가 고객에게 손해배상금 800만원을 먼저 지급했고, 이후 당사 보험사에 청구해 보험금 800만원을 전액 받았다. 당사 최종 부담은 0원이다.',
      pays: [{ payer: '당사', method: 'P1', amount: 8000000, date: '2026-07-20', ref: '합의서·송금' }], recs: [{ from: '당사 보험사', method: 'R3', amount: 8000000, date: '2026-08-20', ref: '보험금 지급 통지' }] }
  ];

  const sum = (a, f) => a.reduce((s, x) => s + (f(x) ? x.amount : 0), 0);
  function calc(c) {
    const p = c.pays || [], r = c.recs || [];
    const o = {
      payP1: sum(p, x => x.payer === '당사' && x.method === 'P1'), payP2: sum(p, x => x.payer === '당사' && x.method === 'P2'), payP3: sum(p, x => x.payer === '당사' && x.method === 'P3'),
      ins: sum(p, x => x.payer === '당사 보험사'), cust: sum(p, x => x.payer === '고객'), partner: sum(p, x => x.payer === '협력사'),
      recR1: sum(r, x => x.method === 'R1'), recR2: sum(r, x => x.method === 'R2'), recR3: sum(r, x => x.method === 'R3')
    };
    o.pay = o.payP1 + o.payP2 + o.payP3; o.rec = o.recR1 + o.recR2 + o.recR3;
    o.net = o.pay - o.rec;
    o.insAll = o.ins + o.recR3;  // 보험 처리 계: 보험사가 직접 보낸 돈 + 당사가 내고 보험금으로 받은 돈 (경로와 무관하게 같은 숫자)
    o.cut = c.total - (o.pay + o.ins + o.cust + o.partner);
    return o;
  }
  // 엑셀 시트 행
  const CLAIM_COLS = ['IRR No.', '클레임 ID', '클레임 유형', '청구인 구분', '청구인', '원청구인', '원청구 금액', '과태료 부과 대상', '책임 판단', '상태', '접수일', '종결일', '통화', '총 클레임 금액',
    '당사 지불_손해배상금', '당사 지불_인보이스 차감', '당사 지불_운영원가', '당사 지불 계', '당사 보험사 보상', '고객 직접 부담', '협력사 직접 부담',
    '당사 회수_손해배상금 환입', '당사 회수_매입 할인', '당사 회수_보험금', '당사 회수 계', '보험 처리 계', '당사 순손실', '감액·미지급'];
  function claimRow(c) {
    const k = calc(c);
    return [c.irr, c.id, label(CODES.type, c.type), c.claimant, c.claimantName || '', c.orig || '', c.origAmt || 0, c.type === 'FN' ? c.issuedTo : '', c.liability, c.status, c.date, c.closed || '', c.cur, c.total,
      k.payP1, k.payP2, k.payP3, k.pay, k.ins, k.cust, k.partner, k.recR1, k.recR2, k.recR3, k.rec, k.insAll, k.net, k.cut];
  }
  const LINE_COLS = ['클레임 ID', 'IRR No.', '클레임 유형', '구분', '일자', '지불 주체 / 회수처', '지급처 / 수령처', '수단 코드', '수단', '금액', '통화', '증빙', '당사 손익 반영'];
  function lineRows(c) {
    const t = label(CODES.type, c.type), out = [];
    (c.pays || []).forEach(x => out.push([c.id, c.irr, t, '지불', x.date, x.payer, c.claimant, x.method, label(CODES.payMethod, x.method), x.amount, c.cur, x.ref || '', x.payer === '당사' ? -x.amount : 0]));
    (c.recs || []).forEach(x => out.push([c.id, c.irr, t, '회수', x.date, x.from, '당사', x.method, label(CODES.recMethod, x.method), x.amount, c.cur, x.ref || '', x.amount]));
    return out;
  }
  function codeRows() {
    const r = [['코드 구분', '코드', '이름', '설명']];
    CODES.type.forEach(x => r.push(['클레임 유형', ...x]));
    CODES.payMethod.forEach(x => r.push(['지불 수단', x[0], x[1], '']));
    CODES.recMethod.forEach(x => r.push(['회수 수단', x[0], x[1], '']));
    CODES.payer.forEach(x => r.push(['지불 주체', '', x, x === '당사' ? '당사 손익에 반영' : '당사 손익에 반영하지 않음 (참고 집계)']));
    CODES.issuedTo.forEach(x => r.push(['과태료 부과 대상', '', x, '']));
    CODES.liability.forEach(x => r.push(['책임 판단', '', x, '']));
    CODES.status.forEach(x => r.push(['상태', '', x, '']));
    return r;
  }
  function exportXlsx(claims, file) {
    if (!window.XLSX) { alert('엑셀 모듈을 불러오지 못했습니다.'); return; }
    const wb = XLSX.utils.book_new();
    const s1 = XLSX.utils.aoa_to_sheet([CLAIM_COLS, ...claims.map(claimRow)]);
    const s2 = XLSX.utils.aoa_to_sheet([LINE_COLS, ...claims.flatMap(lineRows)]);
    s1['!cols'] = CLAIM_COLS.map(h => ({ wch: Math.max(10, h.length * 1.6) }));
    s2['!cols'] = LINE_COLS.map(h => ({ wch: Math.max(10, h.length * 1.8) }));
    XLSX.utils.book_append_sheet(wb, s1, '클레임');
    XLSX.utils.book_append_sheet(wb, s2, '정산 내역');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(codeRows()), '코드표');
    XLSX.writeFile(wb, file || '사고비용정산_예시.xlsx');
  }
  return { CODES, SAMPLES, label, calc, claimRow, lineRows, CLAIM_COLS, LINE_COLS, exportXlsx };
})();
