-- 사고 비용 정산 시나리오(/lab/claim-scenarios): 운영자가 실제 처리 사례를 적어 두면 Claude가 읽어 입력 화면 시안의 예시로 옮긴다.
-- 관리자 키(link_check_secret)로만 읽고 쓴다. 내용은 이 표에만 두고 저장소·공개 페이지에는 익명화한 예시만 넣는다.
create table if not exists public.claim_scenario (
  id text primary key,                 -- u1 … u5
  ord integer not null default 0,
  title text not null default '',      -- 한 줄 제목
  situation text not null default '',  -- 사고 경위
  claim text not null default '',      -- 총 클레임 금액, 청구인, 청구 유형
  pay text not null default '',        -- 당사 지불: 금액·방법·사유
  recover text not null default '',    -- 당사 회수: 회수처·금액·방법
  memo text not null default '',
  updated_at timestamptz
);
alter table public.claim_scenario enable row level security;
revoke all on public.claim_scenario from anon, authenticated;

insert into public.claim_scenario (id, ord) values ('u1', 1), ('u2', 2), ('u3', 3), ('u4', 4), ('u5', 5)
on conflict (id) do nothing;

create or replace function public.get_claim_scenario(p_secret text)
returns setof public.claim_scenario language plpgsql stable security definer set search_path = public, extensions, pg_temp
as $$
begin
  if not public.link_check_secret_ok(p_secret) then raise exception 'not allowed'; end if;
  return query select * from public.claim_scenario order by ord, id;
end;
$$;

create or replace function public.save_claim_scenario(p_secret text, p_id text, p_title text, p_situation text, p_claim text, p_pay text, p_recover text, p_memo text)
returns timestamptz language plpgsql security definer set search_path = public, extensions, pg_temp
as $$
declare t timestamptz := now();
begin
  if not public.link_check_secret_ok(p_secret) then raise exception 'not allowed'; end if;
  update public.claim_scenario set title = left(coalesce(p_title, ''), 200), situation = left(coalesce(p_situation, ''), 4000),
         claim = left(coalesce(p_claim, ''), 2000), pay = left(coalesce(p_pay, ''), 2000), recover = left(coalesce(p_recover, ''), 2000),
         memo = left(coalesce(p_memo, ''), 4000), updated_at = t where id = p_id;
  if not found then raise exception 'unknown id'; end if;
  return t;
end;
$$;
revoke all on function public.get_claim_scenario(text) from public;
revoke all on function public.save_claim_scenario(text, text, text, text, text, text, text, text) from public;
grant execute on function public.get_claim_scenario(text) to anon;
grant execute on function public.save_claim_scenario(text, text, text, text, text, text, text, text) to anon;
