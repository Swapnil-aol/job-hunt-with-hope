# Hope Enrichment Protocol (`hope-enrich`) — Spec · v0.1

> **ROADMAP — not loaded by the shipped plugin. Activation = [`ACTIVATION.md`](ACTIVATION.md).**
> Designed 2026-06-10 for a future release. The shipped v0.6.2 surface is frozen; this spec changes none of it.

**Canon this spec defers to (never restates):**

- `references/computer-use-guardrails.md` — the five hard rules; inherited **verbatim** by this skill.
- `skills/onboarding/SKILL.md` Step 2 — the public-fetch announcement (step 2.3) and the auth-walled browser ask (step 2.4); the patterns below generalize them, exactly.
- `references/career-graph-schema.md` — deterministic IDs, `source`/`confidence` attribution (the base-confidence table), never-downgrade.
- `references/voice-guide.md` rule #6 — every consent ask below is choices + one "(recommended)" + free text.
- `references/user-story-guide.md` — journey lines, the untrusted-content firewall.
- [`SPEC-custom-apps.md`](SPEC-custom-apps.md) §2 — registry entries R16 (asset paths), R17 (graph IDs); values live there only.

---

## 1. Skill identity & runtime reads

A new skill, built at `skills-roadmap/enrich/SKILL.md` and moved to `skills/enrich/SKILL.md` at activation:

- **Frontmatter:** `name: hope-enrich`, `user-invocable: true`.
- **Version marker:** `<!-- hope-skill-version: 0.1.0 -->` — new skills carry the marker convention from birth.
- **Trigger phrases:** "pull my Behance", "add my GitHub projects", "import my Dribbble", "enrich from my website", "bring in my publications".

The skill **opens with the PLUGIN_ROOT resolution block, copied verbatim from `skills/portfolio/SKILL.md`** (copy, don't retype — no skill may reference a file that won't exist at runtime, and all bundled reads go through this pattern):

```bash
# Resolve the Hope plugin root (references/, assets/, scripts/ live there).
# $CLAUDE_PLUGIN_ROOT is NOT expanded in this Markdown — resolve in Bash. Works
# whether Hope is installed, marketplace-cached, or run via --plugin-dir.
PLUGIN_ROOT=""
for c in "$CLAUDE_PLUGIN_ROOT" "$HOME"/.claude/plugins/cache/hope/hope/*/ "$HOME/.claude/plugins/marketplaces/hope"; do
  [ -n "$c" ] && [ -f "${c%/}/plugin.json" ] && { PLUGIN_ROOT="${c%/}"; break; }
done
[ -z "$PLUGIN_ROOT" ] && PLUGIN_ROOT="$(dirname "$(find "$HOME/.claude/plugins" -path '*hope*/plugin.json' -print -quit 2>/dev/null)")"
echo "PLUGIN_ROOT=$PLUGIN_ROOT"   # sanity-check before reading bundled files
```

(Including the shipped fallback line: if `PLUGIN_ROOT` comes back empty, ask the user where the Hope plugin is checked out rather than guessing relative paths.)

Then it reads: `$PLUGIN_ROOT/references/career-graph-schema.md`, `$PLUGIN_ROOT/references/voice-guide.md`, the project's `user-story.md` (when it exists), and **its own adapter table at `$PLUGIN_ROOT/skills/enrich/references/source-adapters.md`** — a path that exists at runtime because the whole `enrich/` folder moves into `skills/` at activation (ACTIVATION.md step A1).

## 2. Privacy posture (the skill's opening constraints — hard lines)

- **User data never leaves the machine. Enrichment is inbound only.**
- **Downloads land in the project folder** per R16. Nothing is fetched that the user didn't explicitly name, without a consent ask first. **Announce every fetch.**
- **Browser integration is read-only, only on user-given URLs, only when a source is auth-walled.** Public sources are fetched directly (matches `skills/onboarding/SKILL.md` step 2.3 exactly).
- **Guardrails inherited verbatim from `references/computer-use-guardrails.md`:** never bypass CAPTCHAs (Kaggle), never handle passwords, respect robots/ToS even when raw fetch "works".
- **New rule: paywalled/member-only content (Medium member posts, Substack `audience: only_paid`) is never reproduced into a portfolio even though the user authored it — link instead.**

## 3. The fetch-decision tree (the skill's control flow)

Tier is keyed off the **adapter table's robots/ToS posture, never off live HTTP status** — Scholar returns 200 but is robots-forbidden; Kaggle returns 200 but it's a CAPTCHA page.

```
For each source the user names:
1. PUBLIC-DIRECT → official machine interface first, then server-rendered HTML:
   GitHub/GitLab APIs · Substack archive JSON · Medium RSS · YouTube oEmbed+RSS ·
   Vimeo oEmbed · Behance HTML (beconfig JSON) · Dribbble HTML · Figma community
   og: meta · personal sites (+ sitemap/RSS) · scholarly data via OpenAlex /
   Semantic Scholar / ORCID. Announce, fetch, attribute (§6).
2. JS-RENDERED shell (generic <title>, near-empty root div — Notion public, Vimeo
   profiles, SPA sites) → if a browser tool exists, ask permission to render the
   PUBLIC page (no login); else step 4.
3. AUTH/BOT-WALLED (LinkedIn, Kaggle profile, private Figma/Notion) →
   a. official user-credential API if one exists (kaggle token, Figma PAT, Vimeo
      OAuth, authed gh) — the user supplies their own credential, the agent uses
      only the official API;
   b. else the browser ask, generalized verbatim from onboarding step 2.4:
      "{Source} needs your logged-in browser. Want me to read your page through
       the browser? I'll only read the page you give me — nothing else, no clicks."
4. MANUAL-EXPORT fallback, offered kindly, never as failure:
   LinkedIn → Save to PDF · Notion → Export Markdown & CSV · Medium → account
   export · Scholar → owner BibTeX/CSV export · Kaggle → paste highlights ·
   anything → "drop the file here".
```

### DO-NOT-FETCH constants (written into the skill as hard lines)

- **`scholar.google.com`** — robots forbids `/citations?` for all agents; route to OpenAlex.
- **Raw `linkedin.com`** — ToS; never curl even when a 200 comes back.
- **Raw `kaggle.com` HTTP** — CAPTCHA wall; official API only.

One tooling note carried from research: Behance's robots blocks named AI crawlers while allowing `*` on profiles — Claude's WebFetch may self-block where a plain HTTP client is permitted; if WebFetch refuses, say so honestly and use curl (allowed under `User-agent: *`) or offer the browser path. **Low volume always: one profile + a handful of sub-pages.**

## 4. The adapter table (ships as `skills/enrich/references/source-adapters.md`)

One row per source. Columns: **source · detection (URL/handle pattern) · tier · primary interface · fallback chain · downloadables · graph `source` value · notes**. Fourteen seed rows, all empirically verified 2026-06-10. Confidence per `source` value follows the schema's base-confidence table in `references/career-graph-schema.md` — not restated per row.

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

The shipped `source-adapters.md` also carries: the DO-NOT-FETCH constants (§3), the failure-modes table (§8), and **the full empirical source list from the 2026-06-10 research cycle**, appended (content dependency — carried from the design-cycle research notes, not reproduced in this spec).

## 5. Consent grammar (verbatim lines)

- **Named public source — announce, no extra ask:** "Pulling your Behance — it's public, I'm just reading. I'll show you what I found before anything goes in your file."
- **Sub-resources beyond the named page — ask once per batch** (rule #6):

> Your Behance lists 12 projects. How many come in?
> 1. **Top picks by appreciations** (recommended — count per the designer pack's curation cap in `SPEC-role-packs.md`; never improvised)
> 2. **All 12** — we'll curate at portfolio time
> 3. **You pick** — I'll list them
>
> Or tell me in your own words.

- **Auth-walled** — the generalized browser ask in §3 (step 3b). Manual fallback always phrased as a fine path, not a consolation.

## 6. Downloads → graph → portfolio

1. **Assets** per R16; images resized with the same `sips`/PIL pattern as the shipped headshot bake (see `skills/portfolio/SKILL.md`).
2. **Graph writes:** one Project node per imported work item, id per R17 (e.g. `proj:jane-doe-3a8f:behance:198347163`), with `description`, `contributions` where derivable, an `assets` list of R16-relative paths, `source: "web_enrichment"` confidence 0.90 (GitHub-derived stays `"github"`/0.95; manual exports parse as `"document"`/0.85 — matching the schema's base-confidence table). `HAS_PROJECT` edges; skills only via the existing contribution-driven rule — no orphan skills. **Confidence and level never downgrade.**
3. **CustomSection proposal:** the skill drafts (never silently creates) an app from the harvest — e.g. `csec:jane-doe-3a8f:visual-work`, layout `gallery-grid`, `app_class:"professional"`, items referencing the Project nodes (`item_ref`) and asset paths — and offers it via a rule-#6 MCQ. On accept, the node + `HAS_CUSTOM_SECTION` edge are written and the portfolio skill renders it per the custom-apps contract.
4. **Show before write:** found items are listed to the user before graph commit (met-not-processed register: "Here's what I'm seeing on your Behance — twelve projects; these six have real traction").
5. **user-story.md:** one dated journey line ("2026-06-10: Pulled 6 Behance projects into the graph — covers saved locally."), groomed per the guide; notify in one line.

## 7. Worked example — Behance, end to end

1. User: "add my Behance — behance.net/janedoe". Adapter row: tier PUBLIC-DIRECT (ToS asterisk: profiles allowed under `User-agent: *`; named AI crawlers blocked → prefer curl over WebFetch; announce).
2. Announce + fetch profile HTML; parse `<script id="beconfig-store_state">` JSON → project list (titles, URLs, appreciations, cover-image CDN URLs). Markup drifted / blob missing → fail-soft to the browser ask, then manual ("save the page / screenshots and drop them here").
3. Batch-consent MCQ (§5) → say top 6.
4. Download 6 covers → `career-graph/assets/enrichment/behance/198347163-design-system-rebrand.jpg` …, resize per R16.
5. Write 6 Project nodes (R17 ids), edges, attribution per §6; show the list first.
6. Propose the app: "Want these as a 'Selected visuals' tab — a six-image grid with one-line captions — on your next portfolio? 1. Yes, all six (recommended …) 2. Pick which … 3. Keep them in the graph only … or tell me in your own words."
7. At portfolio generation, the gallery-grid pane is composed per the custom-apps contract (§3/§4 of [`SPEC-custom-apps.md`](SPEC-custom-apps.md)), images baked as data URLs, captions carry project title + "My role:" where collaborative (designer-pack rule). Prints as a static captioned grid; absent from every résumé mode; nothing owner-only to gate.
8. **Re-run a month later:** same handle → same R17 ids → MERGE. Existing assets (keyed by native id in the filename) are not re-downloaded unless the user asks to refresh; appreciation counts and descriptions update; confidence never downgrades; CuratedPortfolio curation untouched; one journey line appended.

## 8. Failure-modes table (every fail-soft documented; ships in the SKILL)

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

## 9. Verification — scenario-walks (prose is the artifact)

Written into the PR description at build time, and **re-run against the shipped SKILL text at activation** (ACTIVATION.md step C5):

1. **Behance walk** — §7 end to end, including the re-run-MERGE month-later step.
2. **Kaggle-wall walk** — must end at the official-API/manual path, never the CAPTCHA.
3. **Scholar walk** — must route to OpenAlex without touching `scholar.google.com`.
