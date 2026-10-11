-- 자료실 문서의 출처 링크 점검 결과(방문자 DB onharu-analytics). 추적 페이지용 link_status와 따로 둔다.
-- 쓰기와 읽기 모두 점검 비밀 키(link_check_secret, = Vercel CRON_SECRET = 관리자 키)를 알아야 한다. 공개 화면에는 쓰지 않는다.
create table if not exists public.doc_link_status (
  url text primary key,
  state text not null,            -- ok | blocked | error | timeout
  code integer,
  detail text,
  method text,                    -- HEAD | GET (마지막으로 결과를 준 요청)
  fail_streak integer not null default 0,
  first_checked_at timestamptz not null default now(),
  checked_at timestamptz not null default now(),
  last_ok_at timestamptz
);
create index if not exists doc_link_status_checked_at on public.doc_link_status (checked_at);
create table if not exists public.doc_link_check_runs (
  id bigint generated always as identity primary key,
  ran_at timestamptz not null default now(),
  trigger text,
  total integer, ok integer, blocked integer, failed integer,
  remaining integer               -- 이번 회차에 시간이 모자라 다음으로 넘긴 링크 수
);
alter table public.doc_link_status enable row level security;
alter table public.doc_link_check_runs enable row level security;
revoke all on public.doc_link_status, public.doc_link_check_runs from anon, authenticated;

create or replace function public.link_check_secret_ok(p_secret text)
returns boolean language sql stable security definer set search_path = public, extensions, pg_temp
as $$
  select p_secret is not null and encode(extensions.digest(p_secret, 'sha256'), 'hex')
         = (select secret_sha256 from public.link_check_secret where id = 1);
$$;
revoke all on function public.link_check_secret_ok(text) from public, anon, authenticated;

create or replace function public.record_doc_link_checks(p_secret text, p_trigger text, p_results jsonb, p_remaining integer default 0)
returns void language plpgsql security definer set search_path = public, extensions, pg_temp
as $$
declare r jsonb; failed boolean;
begin
  if not public.link_check_secret_ok(p_secret) then
    raise exception 'not allowed';
  end if;
  for r in select * from jsonb_array_elements(p_results) loop
    failed := (r->>'state') in ('error', 'timeout');
    insert into public.doc_link_status as s (url, state, code, detail, method, fail_streak, checked_at, last_ok_at)
    values (r->>'url', r->>'state', nullif(r->>'code', '')::integer, left(r->>'detail', 200), left(r->>'method', 8),
            case when failed then 1 else 0 end, now(), case when (r->>'state') = 'ok' then now() end)
    on conflict (url) do update set
      state = excluded.state, code = excluded.code, detail = excluded.detail, method = excluded.method, checked_at = now(),
      fail_streak = case when failed then s.fail_streak + 1 else 0 end,
      last_ok_at = coalesce(excluded.last_ok_at, s.last_ok_at);
  end loop;
  insert into public.doc_link_check_runs (trigger, total, ok, blocked, failed, remaining)
  select left(p_trigger, 20), count(*),
         count(*) filter (where e->>'state' = 'ok'),
         count(*) filter (where e->>'state' = 'blocked'),
         count(*) filter (where e->>'state' in ('error', 'timeout')),
         coalesce(p_remaining, 0)
  from jsonb_array_elements(p_results) e;
end;
$$;
revoke all on function public.record_doc_link_checks(text, text, jsonb, integer) from public;
grant execute on function public.record_doc_link_checks(text, text, jsonb, integer) to anon, authenticated;

-- 관리자 화면과 점검 서버의 순서 정하기용. 비밀 키가 맞을 때만 돌려준다.
create or replace function public.get_doc_link_status(p_secret text)
returns table (url text, state text, code integer, detail text, method text, fail_streak integer,
               checked_at timestamptz, last_ok_at timestamptz, last_run timestamptz)
language plpgsql stable security definer set search_path = public, extensions, pg_temp
as $$
begin
  if not public.link_check_secret_ok(p_secret) then
    raise exception 'not allowed';
  end if;
  return query
    select s.url, s.state, s.code, s.detail, s.method, s.fail_streak, s.checked_at, s.last_ok_at,
           (select max(ran_at) from public.doc_link_check_runs)
    from public.doc_link_status s;
end;
$$;
revoke all on function public.get_doc_link_status(text) from public;
grant execute on function public.get_doc_link_status(text) to anon, authenticated;

create or replace function public.get_doc_link_runs(p_secret text, p_limit integer default 10)
returns setof public.doc_link_check_runs
language plpgsql stable security definer set search_path = public, extensions, pg_temp
as $$
begin
  if not public.link_check_secret_ok(p_secret) then
    raise exception 'not allowed';
  end if;
  return query select * from public.doc_link_check_runs order by ran_at desc limit least(greatest(p_limit, 1), 50);
end;
$$;
revoke all on function public.get_doc_link_runs(text, integer) from public;
grant execute on function public.get_doc_link_runs(text, integer) to anon, authenticated;
