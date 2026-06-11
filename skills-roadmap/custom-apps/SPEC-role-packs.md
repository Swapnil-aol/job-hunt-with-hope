# Hope Role Packs — Spec · v0.1

> **ROADMAP — not loaded by the shipped plugin. Activation = [`ACTIVATION.md`](ACTIVATION.md).**
> Designed 2026-06-10 for a future release. The shipped v0.6.2 surface is frozen; this spec changes none of it.

**Canon this spec defers to (never restates):**

- [`SPEC-custom-apps.md`](SPEC-custom-apps.md) §2 — the contract registry. Every R-number below (R9, R14, R15, …) resolves there; values are never restated here.
- `references/voice-guide.md` rule #6 — the offer below is choices + one "(recommended)" + free-text escape, 💬 included (it's weighty).
- `references/design-tokens.md` — register/tone notes below never override visuals; all visuals are token-driven.
- [`SPEC-enrichment.md`](SPEC-enrichment.md) — every "sources" column entry is harvested through that protocol, never ad hoc.
- [`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md) — what happens when no pack matches.

---

## 1. What a pack is

A named preset = `{apps to enable, layout biases, emphasis order, sources to harvest, copy-tone notes, curation caps, sensitivity gates}`. **Packs propose, the user disposes** — a pack never silently enables anything; every app it suggests passes the MCQ below, the existence test (R15), and the dosage cap (R14). Emphasis order = pane order + the default-open pane (R9).

## The both-ends rule

Every pack reconciles two truths about the same page: **supply** — what candidates like to show (breadth, process tours, passion work, craft detail) — and **demand** — what the hiring side actually screens for (identity legibility in seconds, problem / role / outcome, metrics, spec-relevance, verifiability). **When the two conflict, demand wins the above-the-fold real estate and supply wins the depth sections.** The beloved process narrative lives inside the expanded case card; the outcome number it produced lives in the card headline and the hero stats. The twelve harvested projects stay in the graph; the three that match the target reviewer become the visible grid. Nothing supply-side is deleted — it is placed where the hiring-manager deep read finds it after the skim has been won. Per-pack demand evidence: the demand-side table in §3; full detail and sources in Appendix A ("Demand side").

## The pipeline lens

The same single page is read by three different readers before an interview — packs serve all three, in order:

| Layer | Reader | Time on page | What they need from it |
|---|---|---|---|
| **Sourcer** | outbound scout, public profiles | one screen | **Instant identity legibility** — who you are, what you do, at what level, for whom — readable from the hero without a click |
| **Recruiter** | screen, often a non-specialist | ~7–11s F-pattern skim | Spec-matching **keywords, titles, brands, level** where the F-pattern lands; clean layout — they checklist-match, they cannot evaluate craft |
| **Hiring manager** | the only judgment reader, still time-poor | 2–3 min scan; deep read only if earned | **Problem framing, your specific role, constraints, trade-offs, measured outcome** — found inside the expandable depth sections |

One page, three read modes: a seconds-long skim above the fold, a minutes-long scan of card headlines carrying outcomes, and a deep-read path behind progressive disclosure. (Before any human: an ATS keyword layer — the résumé's job, not the portfolio's; the portfolio link only matters once the document survives it.) Evidence and sources: Appendix A ("Demand side").

## 2. The offer (rule #6 — weighty, 💬 included)

**Match the role to a pack first.** Parse the user's stated role and match by synonym / closest pack — teacher → educator, professor → academic, copywriter → writer, SRE or platform engineer → engineer, growth marketer → marketer, videographer → creative-media — with a one-line confirm ("Copywriter — that's the writer pack's territory. Sound right?"). Only when no pack is plausibly close does the realtime-adaptation protocol trigger ([`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md)).

> You're a {role} — I have a preset for how {field} portfolios usually win. Want me to set it up?
> 1. **Use the {pack} pack** (recommended — {one-clause why, e.g. "engineers get judged on shipped proof, and this leads with it"}): {apps in plain words, e.g. "projects up front, a side-quests tab, your GitHub pulled in"} — built around what reviewers in your field look at first (above-the-fold order follows the demand-side scan behavior)
> 2. **À la carte** — I'll list what's in the pack and you pick
> 3. **Skip the preset** — build straight from your graph
> 4. 💬 **Chat about this first** — what should a recruiter in {field} see in the first ten seconds?
>
> Or tell me in your own words.

## 3. The twelve packs

Each row: **emphasis order** (first item = default-open) · **custom apps** (layout, class) · **sources to harvest** (via the Enrich skill — [`SPEC-enrichment.md`](SPEC-enrichment.md)) · **tone** (voice-guide register notes) · **caps/gates**.

| Pack | Emphasis order | Custom apps | Sources | Tone & gates |
|---|---|---|---|---|
| **designer** | Projects (case-study cards: problem → process → outcome, "My role:" line mandatory) → Experience → Skills → Education | `gallery-grid` "Selected visuals" (professional; only with genuinely strong assets) · `list` "How I work" principles (senior only, each with one concrete example) | Behance, Dribbble, Figma community, personal site | Editorial, image-led. 3–5 case studies max. NDA gate: anonymize clients, process + impact over artifacts. |
| **engineer** | Projects (cards, demo + repo links as worded anchors) → Experience → Skills → Education | `cards` "Side quests" (informal; status badges honest) · `list` "/uses" (informal; `last_updated` mandatory, R15) | GitHub, GitLab, personal site | Dense and direct; terse cards; no quote-wall (reads oddly). 3–5 projects. Employer-IP gate: side projects + OSS carry the load. |
| **data** | Projects (cards led by the question answered + the metric moved; one chart image per card) → Skills → Experience | optional `list` "Talks & notebooks" | GitHub, Kaggle (official token API only), blog RSS | Outcomes-first analytical narrative. Proprietary-data gate: public-data rebuilds of the technique. |
| **pm** | Experience (cards with metric-delta headlines, decision story in the body) → Projects → Skills | optional `stat-row` "By the numbers" | Personal site / Notion export, Medium RSS, Substack | Decision rationale is the assessed skill; explicit role honesty. Confidential metrics → relative deltas ("+34%"), never absolutes. |
| **writer** (journalist/editorial) | `list` "Selected clips" (professional, **lead app**: headline + outlet + lede excerpt, date-sorted, outlet named in `item_meta`) → Experience → Education | `timeline` "Recent bylines" optional | Muck Rack profile URL (personal-site tier), Medium RSS, Substack archive, personal site | Recency is the signal — date everything. 3–8 clips. Paywalled clips: link, never reproduce. |
| **academic** | `list` "Selected publications" (professional, lead: venue + year + citation count in mono) → Education → Experience → Skills | none informal by default | OpenAlex / Semantic Scholar / ORCID — **never Google Scholar** (see SPEC-enrichment.md DO-NOT-FETCH) | Text-dense acceptable; conservative register; completeness over curation here only; CV download link prominent. |
| **devrel** | `list` "Talks & podcasts" (professional, lead: 1–3 signature items first, each title + event + year + worded video link) → Projects → Experience | `timeline` "Recent posts" (professional) · `list` "/uses" (informal) | YouTube oEmbed + channel RSS, GitHub, blog RSS, Substack | Public footprint over résumé; specialization beats breadth. Videos are **baked thumbnail + link**, never downloaded; iframe embed only as progressive enhancement (self-contained rule holds). |
| **marketer** | Experience (campaign cards: Challenge → Strategy → Execution → Results) → `stat-row` "Results" → Skills | `quote-wall` "What clients say" (professional) · `gallery-grid` campaign creative (optional) | Personal site, user-provided campaign images | Metric headlines, creative as support. 6–12 campaigns. Client-data gate: percentage deltas. |
| **sales** | `stat-row` "The numbers" (**lead**: quota %, rank, club years) → Experience → `quote-wall` "Manager & client quotes" | none informal | Conversation + user documents (no canonical platform) | Numbers-first, minimal prose; documentary proof framing. Customer names/deal sizes confidential; earnings evidence is in-room material, never published. |
| **educator** | Education/Certifications → Experience → `cards` "Lesson artifacts" (anonymized) | `quote-wall` "From students & parents" (professional) · `gallery-grid` classroom (only with consented photos) | Conversation + user documents | Warm register. **FERPA hard gate: anonymize all student work; no identifiable student photos without consent — block, don't ask twice.** |
| **consultant** | Experience (anonymized engagement cards: industry descriptor + problem + approach + impact; a visible "client names withheld" note) → Skills → `stat-row` relative deltas | `list` "How I work" principles (senior) | Personal site, conversation | Prose-led, frameworks over screenshots. Highest NDA density: assume anything non-public is confidential; offer "fuller detail on request" rather than baking it in. |
| **creative-media** (video/film/motion) | `gallery-grid` "Reel & selected work" (**lead**: reel as baked Vimeo/YouTube thumbnail linking out; per-clip **contribution labels mandatory** in captions) → `cards` credits → Experience | none informal by default | Vimeo oEmbed (per-video URLs from the user), YouTube oEmbed/RSS | Minimal copy; the work talks. Rights gate: client footage permissions, no unlicensed music claims, embargoed work stays out. |

### The demand-side screen, per pack

What the hiring side does with the page — the both-ends rule's demand half, and what each pack's emphasis order is built to survive. Each row: the first-30-seconds scan, what shortlists, what bins, and how seniority and industry modulate the read. Kept tight by design; the full evidence with sources is Appendix A ("Demand side").

| Pack | First-30-seconds scan | Shortlist signals | Bin signals / red flags | Seniority & industry modulation |
|---|---|---|---|---|
| **designer** | ~6–8s on the hero (name, designer type, level); first case title + first visual judged in 0–3s for business impact; recruiters keyword-match the hero against the req | 3–5 scannable case studies with the messy process; ≥1 shipped project; impact metrics; explicit role/timeline | Final mockups with no "why" (the #1 red flag); bare Behance/Dribbble link (often unclicked); generic "passionate about design" hero; unsolicited redesigns; capstones passed as client work | Junior: process over polish, 2–4 projects. Senior: trade-offs + craft detail, impact deltas mandatory. Agency: range, 8–12 stellar pieces — the weakest piece sets the floor. In-house: sustained brand/system ownership. Startup: shipped + scrappy. Enterprise: adoption metrics + constraint navigation |
| **engineer** | ~90s max on GitHub, and only if linked: profile README → pinned repos → one repo README | 2–4 pinned repos telling a story; READMEs with problem/approach/results; tests + CI; commit history showing collaboration and sustained return-visits; OSS PRs to known projects | Green-square streaks as the pitch; walls of unexplained forks/tutorial clones; repo-count padding | Junior: documentation quality is the separator. Senior: scope + system narratives over artifact count. Big tech: portfolio is a tie-breaker only. Gov/defense: clearance up front, abstracted scope, empty GitHub unpenalized. Healthcare/finance: redaction quality IS the competence demo |
| **data** | Project titles checked for real-world vs toy problems, then ONE README opened; no README = no further look | READMEs answering what problem / what data / why this approach / results + limitations; end-to-end incl. dirty data wrangling; "what didn't work" reads senior; code behind every claim | Kaggle-only portfolios; Titanic/MNIST/iris; every project starting at modeling; one-hammer technique; case studies without code | Junior: fundamentals end-to-end on one real problem. Senior: limitations + stakeholder communication. Employer data never shown — public/synthetic datasets only |
| **pm** | The first case study's header block is skimmed, rarely more than 3–4 case studies read, never to the bottom | 3–4 case studies front-loading Problem / My Role / Key Outcomes; embedded real artifacts (redacted PRDs, boards, clips); named trade-offs; specific metrics | "Improved engagement" vagueness; feature lists with no business outcome; process description without artifacts | Junior: ambiguity navigation on small scope. Senior: org-level metrics. Exec: leadership narrative — project artifacts dilute. Redacted-with-permission artifacts are the accepted norm |
| **writer** | The pitch is read first, clips second; 1–2 links clicked max; fit judged in the first paragraph | 2–3 clips matched to the exact beat/genre; error-free prose with voice; relevance beats prestige | Clip dumps; off-beat samples; making the editor hunt; any errors | Senior: beat depth + sourcing record. Content-marketing variant: add business outcomes (traffic, conversion). UX-writing variant: before/after + rationale mandatory — bare clips insufficient |
| **academic** | ~1 min per file against hundreds: cover-letter tailoring check → CV (publications, pipeline, teaching) → only the requested materials | Tailored letter naming the department's needs; active pipeline momentum; teaching evidence with evaluations; a complete file, exactly what was requested | Generic cover letters (binned first); incomplete files; unrequested attachments (skipped entirely) | Early-career: pipeline trajectory. Senior: established record + service/leadership |
| **devrel** | No dedicated demand-side study — inherits the engineer scan (GitHub, ~90s) and the writer recency norms | Public footprint with dated, recent output; the canonical-platform link present | Stale "Recent posts"; breadth with no specialization | The cross-pack recency rule applies hardest here |
| **marketer** | Numbers and brand names scanned first; problem–solution–results structure decides whether anything else gets read | 3–6 case studies as problem → strategy → measured change; analytics screenshots; client/manager quotes as social proof | Deliverable galleries with zero numbers; mock work passed off as client work; ten weak samples instead of three strong | Junior: channel execution proof. Senior: strategy + budget scale. Freelance cut: niche + named testimonials + explicit services |
| **sales** | Pre-screen is résumé-only (titles, quota %, progression); the brag book is deployed live in-interview at the moment performance is questioned | Verifiable numbers: stack rankings, quota-attainment records, awards, performance reviews — tabbed, retrievable in seconds | Unverifiable quota claims; superlatives with nothing behind them; disorganized evidence that can't be produced on demand | Senior: multi-year attainment + team/territory scale. Comp evidence stays in-room material (pack rule above) |
| **educator** | The principal flips to student-impact evidence + classroom artifacts; the demo lesson is the real screen | Student achievement/growth data; self-created materials; evidence of students learning, not teacher credentials | Certificate-and-stock-template portfolios with no student outcomes | Junior: student-teaching evidence + reflection quality. Veteran: longitudinal growth data. The FERPA hard gate above stands |
| **consultant** | 7–11s résumé pass: visual structure → prestige markers → the first bullet of the most recent role — weak first bullet and the screener stops | Dense quantified bullets; credible anonymized specificity ("F500 healthcare, −22% operational cost") + frameworks + role | Paragraph bullets; "responsible for…" language; NDA-breaking material (trust-killer); bare "can't share, NDA" placeholder pages | Senior: engagement scope + client-relationship ownership. Disciplined anonymization shortlists; over-sharing disqualifies |
| **creative-media** | Decision in the first 10 seconds of the reel, frequently watched on mute; an uncurated book loses the reviewer immediately | Best 10 seconds FIRST; 60–90s total; mute-proof; 8–12 stellar projects; client-approved work (proves revision-cycle survival); range | Long reels burying the best shot; choice-paralysis books; all-spec work; one-style lock (reads "hard to direct") | Junior: craft moments. Senior: client work + range = directability. The rights gate above stands |

## 4. Cross-pack rules

- **Quote-walls only for trust-economy roles** (marketer, sales, educator, consultant — plus realtime-adapted real-estate/trades).
- **Per-item role attribution mandatory** wherever work is collaborative (designer, pm, creative-media, marketer).
- **The field's canonical platform link renders prominently in the contact line** (GitHub for engineer, ORCID for academic, …) — its absence is a negative signal.
- **Recency date-stamps** for writer/devrel.

## 5. Roles with no pack

Fields not covered by a pack (healthcare, legal, real estate, trades, architecture, finance) are handled by the realtime-adaptation protocol — [`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md).

**Appendix A requirement (content dependency, not reproduced here):** the activated `references/role-packs.md` ships **the full 17-family research synthesis** — the role-taxonomy table from the 2026-06-10 design cycle, with its source list — as Appendix A, so most "no-pack" roles resolve offline before any web research. The synthesis's committed home is [`appendix-a-role-research.md`](appendix-a-role-research.md) in this folder (tracked in the repo, so a fresh clone can activate — gitignored workspace notes are not a carriable source); implementers carry that file into the shipped file verbatim at activation (ACTIVATION.md step A2), gated on its `TO-FILL` marker being gone (ACTIVATION.md §0). This spec indexes the requirement; it does not restate the research.

## 6. Verification — scenario-walks (prose is the artifact)

Written into the PR description, per the workspace's produce-and-inspect-or-walk posture:

1. **Engineer walk** — pack offer → à la carte pick → R14/R15 gates applied → "/uses" omitted for a stale `last_updated` (R15), with the refresh offer.
2. **Educator walk** — must hit the FERPA hard gate (block, don't ask twice) before any classroom `gallery-grid` is proposed.
3. **No-pack walk** — a role outside the twelve resolves through Appendix A or the realtime-adaptation protocol, never through silent improvisation.
