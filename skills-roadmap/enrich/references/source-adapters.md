# Source Adapters — `hope-enrich`

> **ROADMAP — not loaded in v0.x.** This file travels inside the `enrich/` skill folder: at activation, `git mv skills-roadmap/enrich skills/enrich` (ACTIVATION.md step A1) makes its runtime path `$PLUGIN_ROOT/skills/enrich/references/source-adapters.md` valid the moment the skill ships. Built from `skills-roadmap/custom-apps/SPEC-enrichment.md` §3/§4/§8. Until activation, nothing here changes runtime behavior.

This table is the law for every fetch the enrich skill makes. **Tier is keyed off this table's robots/ToS posture — never off live HTTP status.** Scholar returns a 200 and is robots-forbidden; Kaggle returns a 200 that is a CAPTCHA page. The wire lies; the table doesn't.

Confidence per graph `source` value follows the base-confidence table in `references/career-graph-schema.md` — not restated per row.

## DO-NOT-FETCH constants (hard lines — no HTTP request, ever, even when one would return a 200)

- **`scholar.google.com`** — robots forbids `/citations?` for all agents. Route to OpenAlex / Semantic Scholar / ORCID (rows below).
- **Raw `linkedin.com`** — ToS forbids it; never curl, even on a 200. Browser-or-PDF only (the onboarding step 2.4 pattern).
- **Raw `kaggle.com` HTTP** — a CAPTCHA wall wearing a 200. Official CLI/token API only, or paste-your-highlights; never bypass.

## The adapter table (14 rows, empirically verified 2026-06-10)

One row per source. Columns: **source · detection (URL/handle pattern) · tier · primary interface · fallback chain · downloadables · graph `source` value · notes**.

| Source | Detection | Tier | Primary interface | Fallback chain | Downloadables | Graph `source` | Notes |
|---|---|---|---|---|---|---|---|
| GitHub | `github.com/{user}` / bare handle named as "my GitHub" | PUBLIC-DIRECT | REST API + raw READMEs + opengraph repo cards | authed `gh` if present → trim scope and say so | opengraph cards, avatar | `github` | 60 req/hr unauth suffices at this volume; `gh` if authed |
| GitLab | `gitlab.com/{user}` | PUBLIC-DIRECT | `/api/v4` | server-rendered HTML → manual | avatars, project images | `web_enrichment` | |
| Behance | `behance.net/{user}` | PUBLIC-DIRECT | profile HTML → `<script id="beconfig-store_state">` JSON | browser ask → manual (save page / screenshots) | cover images from `mir-s3-cdn-cf.behance.net` | `web_enrichment` | ToS asterisk: profiles allowed under `User-agent: *`, named AI crawlers blocked — prefer curl over WebFetch; announce |
| Dribbble | `dribbble.com/{user}` | PUBLIC-DIRECT | profile HTML | browser ask → manual | shot images via `cdn.dribbble.com/...?resize=WxH` | `web_enrichment` | |
| Scholar → OpenAlex / Semantic Scholar / ORCID | `scholar.google.com/citations?…` or "my publications" | DO-NOT-FETCH Scholar itself; route | OpenAlex / Semantic Scholar / ORCID APIs | owner BibTeX/CSV export (manual) | none — metadata only | `web_enrichment` (manual export → `document`) | Scholar robots-forbids `/citations?` for all agents even though it returns 200 |
| Medium | `medium.com/@{user}` | PUBLIC-DIRECT | RSS only | account export (manual) | none — link items | `web_enrichment` | profile HTML 403s; member posts are link-only, never reproduced |
| Substack | `{name}.substack.com` | PUBLIC-DIRECT | `/api/v1/archive`, `/api/v1/posts/{slug}` | archive HTML → manual | post cover images | `web_enrichment` | filter `audience == "everyone"`; paid posts link-only |
| Kaggle | `kaggle.com/{user}` | AUTH/BOT-WALLED | official CLI / token API (user-supplied credential) | paste highlights (manual) | none | `web_enrichment` (manual → `document`) | raw HTTP is a CAPTCHA page — never fetch, never bypass |
| YouTube | `youtube.com/@{channel}`, watch URLs | PUBLIC-DIRECT | oEmbed + channel RSS | manual | thumbnails from `i.ytimg.com` — `maxresdefault.jpg` → `hqdefault.jpg` fallback | `web_enrichment` | videos never downloaded — baked thumbnail + link only |
| Vimeo | `vimeo.com/{video-id}` per-video URLs | PUBLIC-DIRECT (videos); profiles are JS shells | oEmbed per video | browser ask for profile pages → manual | thumbnails | `web_enrichment` | collect per-video URLs from the user; profile pages render empty without JS |
| LinkedIn | `linkedin.com/in/{user}` | AUTH/BOT-WALLED | the browser ask — onboarding step 2.4 pattern, verbatim | Save-to-PDF export (manual) | none | `web_enrichment` (PDF export → `document`) | never curl raw `linkedin.com` — ToS, even on a 200 |
| Personal site | any user-named domain | PUBLIC-DIRECT | GET + sitemap/RSS | JS-shell heuristic → browser ask → manual | images the user names | `web_enrichment` | JS-shell heuristic: generic `<title>`, near-empty root div |
| Notion (public) | `notion.site` / public `notion.so` URLs | JS-RENDERED | manual Export Markdown & CSV is the **cheapest first offer** | browser ask second | exported assets | `document` (export) / `web_enrichment` (browser) | manual-first here is the kind path, not a consolation |
| Figma community | `figma.com/@{user}` / community URLs | PUBLIC-DIRECT | `og:` meta | `INITIAL_OPTIONS` blob wrapped in try/fail-soft → browser → manual | og images | `web_enrichment` | user's own PAT via official API for their own files |

## Tooling note (carried from the research)

Behance's robots blocks named AI crawlers while allowing `*` on profiles — Claude's WebFetch may self-block where a plain HTTP client is permitted. If WebFetch refuses, say so honestly and use curl (allowed under `User-agent: *`) or offer the browser path. Never dress a tool limitation up as a site restriction, and never route around an actual restriction. **Low volume always: one profile + a handful of sub-pages.**

## Failure modes (every fail-soft documented — nothing on this table is silent)

| Failure | Behavior |
|---|---|
| Vimeo/YouTube oEmbed 404 (dead video) | Skip item; tell the user in one line |
| Behance/Dribbble/Figma markup drift | Fail-soft to browser ask → manual export |
| WebFetch self-blocks on robots | Say so honestly; curl only where `User-agent: *` permits; else browser |
| `maxresdefault.jpg` 404 | Fall back to `hqdefault.jpg` |
| Medium RSS truncated (member post) | Link-only item; never circumvent |
| GitHub unauth rate-limit | Use authed `gh` if present; else trim scope and say so |
| Image budget exceeded (R16) | Curate harder with the user; never silently degrade quality below the floor |
| Notion/SPA shell with no browser tool | Manual export path, offered kindly |

## Appendix — empirical source list (TO-FILL — content dependency)

<!-- TO-FILL: empirical-source-list -->
**This placeholder is an activation gate (ACTIVATION.md §0).** The full empirical source list from the 2026-06-10 research cycle — the per-source verification evidence (robots.txt postures, endpoint probes, ToS clauses) behind the table's "empirically verified" claim — exists only in that design cycle's session notes, which are gitignored workspace material. Whoever holds those notes appends the list here verbatim, then deletes this marker block. The activation runbook must not run while this marker is present.
<!-- /TO-FILL -->
