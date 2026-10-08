-- AWB 추적 페이지 링크 점검 결과(방문자 DB onharu-analytics). 쓰기는 비밀 키를 아는 점검 서버(/api/check-links)만.
create table if not exists public.link_status (
  url text primary key,
  state text not null,            -- ok | blocked | error | timeout
  code integer,
  detail text,
  fail_streak integer not null default 0,
  checked_at timestamptz not null default now(),
  last_ok_at timestamptz
);
create table if not exists public.link_check_runs (
  id bigint generated always as identity primary key,
  ran_at timestamptz not null default now(),
  trigger text,
  total integer, ok integer, blocked integer, failed integer
);
create table if not exists public.link_check_secret (
  id integer primary key default 1 check (id = 1),
  secret_sha256 text not null
);
alter table public.link_status enable row level security;
alter table public.link_check_runs enable row level security;
alter table public.link_check_secret enable row level security;
revoke all on public.link_status, public.link_check_runs, public.link_check_secret from anon, authenticated;

insert into public.link_check_secret (id, secret_sha256) values (1, '__HASH__')
on conflict (id) do update set secret_sha256 = excluded.secret_sha256;

create or replace function public.record_link_checks(p_secret text, p_trigger text, p_results jsonb)
returns void language plpgsql security definer set search_path = public, extensions, pg_temp
as $$
declare r jsonb; failed boolean;
begin
  if p_secret is null or encode(extensions.digest(p_secret, 'sha256'), 'hex')
     <> (select secret_sha256 from public.link_check_secret where id = 1) then
    raise exception 'not allowed';
  end if;
  for r in select * from jsonb_array_elements(p_results) loop
    failed := (r->>'state') in ('error', 'timeout');
    insert into public.link_status as s (url, state, code, detail, fail_streak, checked_at, last_ok_at)
    values (r->>'url', r->>'state', nullif(r->>'code', '')::integer, left(r->>'detail', 200),
            case when failed then 1 else 0 end, now(), case when (r->>'state') = 'ok' then now() end)
    on conflict (url) do update set
      state = excluded.state, code = excluded.code, detail = excluded.detail, checked_at = now(),
      fail_streak = case when failed then s.fail_streak + 1 else 0 end,
      last_ok_at = coalesce(excluded.last_ok_at, s.last_ok_at);
  end loop;
  insert into public.link_check_runs (trigger, total, ok, blocked, failed)
  select left(p_trigger, 20), count(*),
         count(*) filter (where e->>'state' = 'ok'),
         count(*) filter (where e->>'state' = 'blocked'),
         count(*) filter (where e->>'state' in ('error', 'timeout'))
  from jsonb_array_elements(p_results) e;
end;
$$;
revoke all on function public.record_link_checks(text, text, jsonb) from public;
grant execute on function public.record_link_checks(text, text, jsonb) to anon, authenticated;

-- 공개 조회: 링크별 상태와 마지막 점검 시각(개인정보 없음)
create or replace function public.get_link_status()
returns table (url text, state text, code integer, detail text, fail_streak integer, checked_at timestamptz, last_run timestamptz)
language sql security definer set search_path = public, pg_temp
as $$
  select s.url, s.state, s.code, s.detail, s.fail_streak, s.checked_at,
         (select max(ran_at) from public.link_check_runs)
  from public.link_status s;
$$;
revoke all on function public.get_link_status() from public;
grant execute on function public.get_link_status() to anon, authenticated;
