-- 사례 선별표(/case-review): 운영자가 포워더 점검 사례를 넣기·보류·빼기로 고르고 메모를 남기면 Claude가 읽어 문서에 반영한다.
-- 관리자 키(link_check_secret)로만 읽고 쓴다. 사례 내용(익명화 전 요약 포함)은 이 표에만 두고 저장소·페이지에는 넣지 않는다.
create table if not exists public.case_review (
  id text primary key,                 -- fw-<문서>-<번호> 또는 c-<원문 행>, 전체 의견은 _general
  ord integer not null default 0,
  cat text not null default '',        -- 추천 분류(fw-docs … x-reg)
  cur text not null default '',        -- 지금 들어 있는 문서(없으면 후보)
  n integer not null default 0,        -- 지금 문서의 사례 번호
  src_rows integer[] not null default '{}',
  title text not null default '',
  problem text not null default '',
  cause text not null default '',
  risk text not null default '',
  weak boolean not null default false,
  s text not null default '' check (s in ('', 'keep', 'hold', 'drop')),
  doc text not null default '',        -- 운영자가 고른 문서(비면 추천 분류)
  note text not null default '',
  updated_at timestamptz
);
alter table public.case_review enable row level security;
revoke all on public.case_review from anon, authenticated;

create or replace function public.get_case_review(p_secret text)
returns setof public.case_review language plpgsql stable security definer set search_path = public, extensions, pg_temp
as $$
begin
  if not public.link_check_secret_ok(p_secret) then raise exception 'not allowed'; end if;
  return query select * from public.case_review order by ord, id;
end;
$$;

create or replace function public.save_case_review(p_secret text, p_id text, p_s text, p_doc text, p_note text)
returns timestamptz language plpgsql security definer set search_path = public, extensions, pg_temp
as $$
declare t timestamptz := now();
begin
  if not public.link_check_secret_ok(p_secret) then raise exception 'not allowed'; end if;
  update public.case_review set s = coalesce(p_s, ''), doc = left(coalesce(p_doc, ''), 40),
         note = left(coalesce(p_note, ''), 4000), updated_at = t where id = p_id;
  if not found then raise exception 'unknown id'; end if;
  return t;
end;
$$;
revoke all on function public.get_case_review(text) from public;
revoke all on function public.save_case_review(text, text, text, text, text) from public;
grant execute on function public.get_case_review(text) to anon;
grant execute on function public.save_case_review(text, text, text, text, text) to anon;
