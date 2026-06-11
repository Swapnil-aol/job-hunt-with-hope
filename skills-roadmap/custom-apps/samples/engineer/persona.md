# Marcus Webb — engineer pack sample persona

> **Fictional.** All handles carry the `-fictional` suffix (`github.com/marcuswebb-fictional`, `linkedin.com/in/marcuswebb-fictional`), per the Jane Doe convention.

## Who he is

Staff platform engineer, 8 years in. Backend at Plaid, ingest infrastructure at Datadog, now deploy tooling at Fly.io. Lives in Pittsburgh. Talks in p99s.

## The arc

Georgia Tech CS, a Twilio internship, then three roles that each made the previous one's bottleneck his job: auth-flow latency at Plaid (p99 down 68%), ingest cost at Datadog (down 31%), deploy pipelines at Fly.io (37 minutes to 6). The thread is the same — find the slowest, most expensive path in the system and own it.

The catch: almost none of that code is public. Plaid and Datadog work is employer IP — the spec's employer-IP gate applies in full. So the visible proof lives in what he built on his own time: **pgqueue**, a Postgres-backed job queue he authored and still maintains (2.1k stars, real users filing real issues), 11 merged PRs to Prometheus, and **loadcheck**, a load-testing CLI (800+ stars). Three repos, each with a README that states the problem, the approach, and the numbers — because that's what a hiring engineer actually reads in their ~90 seconds on his GitHub.

## Why the engineer pack fits

- **Projects lead, with worded demo + repo anchors** — his employers' work can't be shown, so the OSS carries the load, exactly the gate the pack is built around.
- **Shortlist signals he holds:** 2–4 pinned repos telling one story (queueing, observability, load), READMEs with problem/approach/results, CI badges that are real, multi-year commit history on pgqueue showing sustained return-visits, merged PRs to a known project.
- **Bin signals he avoids:** no green-square streak talk, no forks padding the profile, no quote-wall (the pack bans it — it reads oddly on an engineer page).
- **"/uses" and "Side quests"** suit him: he keeps a current tools list (the R15 `last_updated` gate is satisfied — he updated it last month) and two honest-status side projects (one "active", one "parked").

## What he wants next

Staff-level platform work somewhere the infrastructure *is* the product. He'd rather show a recruiter one repo that survived production than ten that didn't.
