-- 방문이 어디서 왔는지 (2026-10-17). Supabase 대시보드 > SQL Editor 에 붙여 넣어 돌린다.
-- visit_log 는 RLS 로 밖에서 못 읽으므로 대시보드(소유자)에서만 된다. 30일치만 남아 있다.
--
-- 갈래:
--   검색      referrer 가 구글·네이버·빙·다음·덕덕고
--   AI        referrer 가 chatgpt·perplexity·claude·gemini·copilot 이거나 UA 가 AI 쪽 가져오기(ChatGPT-User·OAI-SearchBot·PerplexityBot 등)
--   크롤러    UA 에 bot·crawl·spider 가 든 것은 log_visit 가 애초에 안 적는다 — 그래서 여기 0 이어야 정상
--   링크      다른 사이트에서 온 것 (onharu.app 식구 사이의 이동 포함)
--   직접      referrer 없음 (주소 입력·즐겨찾기·앱 안 링크·메신저)
--   나        ?owner=1 을 쓴 브라우저는 애초에 안 적힌다. 안 썼으면 아래 둘째 쿼리로 IP 별로 보고 내 IP 를 골라낸다.

with v as (
  select site, created_at at time zone 'Asia/Seoul' as at, path, referrer, user_agent, ip,
    case
      when user_agent ~* '(chatgpt|oai-searchbot|gptbot|perplexity|claudebot|claude-user|anthropic|gemini|google-extended|copilot|bytespider|ccbot)' then 'AI'
      when referrer ~* '(chatgpt|openai|perplexity|claude\.ai|gemini\.google|copilot\.microsoft|you\.com)' then 'AI'
      when referrer ~* '(google\.|naver\.|bing\.|daum\.|duckduckgo|yahoo\.|search\.)' then '검색'
      when user_agent ~* '(bot|crawl|spider)' then '크롤러'
      when referrer is null or referrer = '' then '직접'
      else '링크'
    end as source
  from public.visit_log
)
select site, source, count(*) as page_views, count(distinct ip) as ips,
       min(at)::date as first_day, max(at)::date as last_day
from v
group by site, source
order by site, page_views desc;

-- IP 별 (내 IP 를 골라내기 위해). 내 IP 는 https://ifconfig.me 같은 곳에서 본다.
-- select ip, site, count(*) as page_views, min(created_at) as first, max(created_at) as last,
--        max(user_agent) as ua
-- from public.visit_log group by ip, site order by page_views desc limit 50;

-- 어디서 왔는지 referrer 그대로
-- select site, referrer, count(*) from public.visit_log where referrer is not null
-- group by site, referrer order by 3 desc limit 50;
