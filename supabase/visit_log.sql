-- Logistics Library 방문 기록 (Supabase 프로젝트 wejegdshcpqqqhhjbtox)
-- 목적: 외부 방문 통계. 보관 30일, 지난 기록은 기록 함수가 호출될 때마다 지운다.
-- 실행: npx -y supabase@latest db query --project-ref wejegdshcpqqqhhjbtox --linked -f visit_log.sql

create table if not exists public.visit_log (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  site text not null,
  path text,
  referrer text,
  ip inet,
  user_agent text
);

create index if not exists visit_log_created_at_idx on public.visit_log (created_at);
create index if not exists visit_log_ip_created_idx on public.visit_log (ip, created_at);

-- 공개 키(anon)로는 읽기·쓰기 모두 못 하게: RLS를 켜고 정책을 두지 않는다.
alter table public.visit_log enable row level security;
revoke all on table public.visit_log from anon, authenticated;

create or replace function public.log_visit(p_site text, p_path text, p_referrer text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  headers json := coalesce(nullif(current_setting('request.headers', true), ''), '{}')::json;
  raw_ip text;
  client_ip inet;
  ua text := left(headers ->> 'user-agent', 300);
begin
  if p_site is null or p_site !~ '^[a-z0-9-]{1,30}$' then
    return;
  end if;

  -- 검색엔진 크롤러와 자동화 브라우저는 기록하지 않는다
  if ua is null or ua ~* '(bot|crawl|spider|slurp|google(other|-inspectiontool)|headless|lighthouse|preview|facebookexternalhit|python|curl|wget)' then
    return;
  end if;

  raw_ip := coalesce(headers ->> 'cf-connecting-ip',
                     split_part(headers ->> 'x-forwarded-for', ',', 1),
                     headers ->> 'x-real-ip');
  begin
    client_ip := nullif(trim(raw_ip), '')::inet;
  exception when others then
    client_ip := null;
  end;

  -- 30일 지난 기록 삭제
  delete from public.visit_log where created_at < now() - interval '30 days';

  -- 같은 IP가 같은 페이지를 10분 안에 다시 열면 한 번으로 본다
  if client_ip is not null and exists (
    select 1 from public.visit_log
    where ip = client_ip and site = p_site and path is not distinct from left(p_path, 200)
      and created_at > now() - interval '10 minutes'
  ) then
    return;
  end if;

  insert into public.visit_log (site, path, referrer, ip, user_agent)
  values (p_site, left(p_path, 200), left(p_referrer, 300), client_ip, ua);
end;
$$;

revoke all on function public.log_visit(text, text, text) from public;
grant execute on function public.log_visit(text, text, text) to anon, authenticated;

-- 통계 보기(대시보드 SQL 편집기용). 공개 키로는 못 읽는다.
create or replace view public.visit_daily with (security_invoker = true) as
select (created_at at time zone 'Asia/Seoul')::date as day,
       site,
       count(distinct ip) as visitors,
       count(*) as page_views
from public.visit_log
group by 1, 2
order by 1 desc, 2;

create or replace view public.visit_pages with (security_invoker = true) as
select site, path, count(distinct ip) as visitors, count(*) as page_views
from public.visit_log
group by 1, 2
order by visitors desc;

create or replace view public.visit_referrers with (security_invoker = true) as
select site, coalesce(substring(referrer from '^https?://([^/]+)'), '(직접 방문)') as source,
       count(distinct ip) as visitors
from public.visit_log
group by 1, 2
order by visitors desc;

revoke all on public.visit_daily, public.visit_pages, public.visit_referrers from anon, authenticated;
