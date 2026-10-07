-- 원본: ONHARU 방문자 DB(onharu-analytics). 5개 사이트 공용. 사이트 쪽 호출은 site-shell.js.
-- 방문자 DB(onharu-analytics, ref yihsukyedtlsdbexthlu): 5개 사이트 공용 방문 기록과 카운터.
-- visit_log: IP 포함 원본, 30일 보관. site_daily: 사이트·날짜별 합계(개인정보 없음), 계속 보관.

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
create index if not exists visit_log_site_ip_idx on public.visit_log (site, ip, created_at);

create table if not exists public.site_daily (
  site text not null,
  day date not null,
  visitors integer not null default 0,
  page_views integer not null default 0,
  primary key (site, day)
);

alter table public.visit_log enable row level security;
alter table public.site_daily enable row level security;
revoke all on public.visit_log, public.site_daily from anon, authenticated;

create or replace function public.log_visit(p_site text, p_path text, p_referrer text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  headers json := coalesce(nullif(current_setting('request.headers', true), ''), '{}')::json;
  ua text := left(headers ->> 'user-agent', 300);
  raw_ip text;
  client_ip inet;
  today date := (now() at time zone 'Asia/Seoul')::date;
  new_visitor boolean;
begin
  if p_site is null or p_site not in ('library', 'cubestow', 'lottolab', 'diary', 'portfolio') then
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
  if client_ip is null then
    return;
  end if;

  delete from public.visit_log where created_at < now() - interval '30 days';

  -- 같은 IP가 같은 페이지를 10분 안에 다시 열면 한 번으로 본다
  if exists (
    select 1 from public.visit_log
    where site = p_site and ip = client_ip and path is not distinct from left(p_path, 200)
      and created_at > now() - interval '10 minutes'
  ) then
    return;
  end if;

  -- 오늘(서울 기준) 이 사이트에 처음 온 IP면 방문자 1명
  new_visitor := not exists (
    select 1 from public.visit_log
    where site = p_site and ip = client_ip
      and created_at >= (today::timestamp at time zone 'Asia/Seoul')
  );

  insert into public.visit_log (site, path, referrer, ip, user_agent)
  values (p_site, left(p_path, 200), left(p_referrer, 300), client_ip, ua);

  insert into public.site_daily (site, day, visitors, page_views)
  values (p_site, today, case when new_visitor then 1 else 0 end, 1)
  on conflict (site, day) do update
    set visitors = site_daily.visitors + excluded.visitors,
        page_views = site_daily.page_views + 1;
end;
$$;
revoke all on function public.log_visit(text, text, text) from public;
grant execute on function public.log_visit(text, text, text) to anon, authenticated;

-- 포트폴리오 공개 통계: 사이트별 오늘·누적 방문자(숫자만)
create or replace function public.get_site_stats()
returns table (site text, today integer, total bigint)
language sql
security definer
set search_path = public, pg_temp
as $$
  select s.site,
         coalesce(max(d.visitors) filter (where d.day = (now() at time zone 'Asia/Seoul')::date), 0)::integer,
         coalesce(sum(d.visitors), 0)
  from (values ('library'), ('cubestow'), ('lottolab'), ('diary'), ('portfolio')) as s(site)
  left join public.site_daily d on d.site = s.site
  group by s.site;
$$;
revoke all on function public.get_site_stats() from public;
grant execute on function public.get_site_stats() to anon, authenticated;
