insert into public.term_review (id, grp, frm, dst, count, cats, note, sents, ctx, round) values (
 'r2-060', '확인 필요', '카테고리 이름 통일 (색인·첫 화면 이름 / 문서 제목 끝 이름)', '', 0, '',
 '왼쪽 색인과 첫 화면은 영어 이름, 문서 제목(브라우저 탭·검색 결과에 보이는 이름) 끝은 한국어 이름으로 서로 다릅니다. 하나로 정하거나 "Cold Chain · 온도유지 화물"처럼 둘을 함께 쓸지 정해 주세요. "지금대로"면 그대로 두고, "이걸로 통일"이면 칸에 원하는 방식을 적어 주세요(예: 영어로 통일 / 한국어로 통일 / 함께 표기).',
 '[]'::jsonb,
 '[{"url":"/library/temperature-cargo","title":"Cold Chain","text":"색인·첫 화면: Cold Chain / 문서 제목 끝: … · 온도유지 화물 · Logistics Library"},
   {"url":"/library/cargo-insurance","title":"Cargo Insurance","text":"색인·첫 화면: Cargo Insurance / 문서 제목 끝: … · 화물보험 · Logistics Library"},
   {"url":"/library/charges","title":"Charges","text":"색인·첫 화면: Charges / 문서 제목 끝: … · 부대비용·보관료 · Logistics Library"},
   {"url":"/library/bl-awb","title":"B/L · AWB","text":"색인·첫 화면: B/L · AWB(가운데점 앞뒤 띄움) / 문서 제목 끝: … · B/L·AWB · Logistics Library"}]'::jsonb, 2)
on conflict (id) do update set note = excluded.note, ctx = excluded.ctx, frm = excluded.frm;
