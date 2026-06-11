# Custom Apps · Role Packs · Enrichment · Realtime Adaptation — Activation Runbook

> **ROADMAP — nothing in this folder is loaded by the shipped plugin.** This file is the planned activation operation for a future release: run it top to bottom when that release is cut. Until then the shipped surface — `skills/`, `assets/templates/`, `assets/fixtures/`, `plugin.json`, `.claude-plugin/marketplace.json`, `README.md`, the existing `references/` files — stays **frozen**.
>
> Dropping these roadmap files into the repo does **not** alter runtime behavior, so the workspace plugin-sync protocol (CLAUDE.md §14) isn't triggered by the roadmap drop itself — the maintainer may still patch-bump at merge; their call — note it in the PR.

**Specs this runbook activates:** [`SPEC-custom-apps.md`](SPEC-custom-apps.md) · [`SPEC-role-packs.md`](SPEC-role-packs.md) · [`SPEC-enrichment.md`](SPEC-enrichment.md) · [`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md). All cross-file ids/tokens live **only** in the contract registry (SPEC-custom-apps.md §2, entries R1–R18); this runbook references them by number.

## What activation un-gates (the summary)

| Surface | Before (shipped today) | After activation |
|---|---|---|
| `hope-enrich` | Doesn't exist as a loadable skill | `skills/enrich/` ships; trigger phrases live |
| Portfolio template | No custom-app slots | R4 slot pairs + six `capp-` CSS blocks + print/published rules + R9 init-JS read |
| `hope-portfolio` | Built-in sections + Overview app only | Pack offer, custom-app composition (R14/R15, one-home rule), R18 greps |
| `hope-onboarding` | Public profiles handled inline in Step 2 | Extra profiles beyond the basics route to `hope-enrich` |
| Graph schema | v1.0, 15 node types / 29 edges | v1.1 — + `CustomSection`, + 2 edges (additive, no migration) |
| Fixtures | No custom-section / enrichment paths exercised | Jane Doe carries an interests CustomSection + one enriched Project |

---

## 0. Preconditions — what must exist before this runbook runs

Built from the sibling specs, all inside `skills-roadmap/` (new folders allowed; nothing outside it):

```
skills-roadmap/
├── enrich/
│   ├── SKILL.md                          # built from SPEC-enrichment.md — hope-enrich;
│   │                                     #   <!-- hope-skill-version: 0.1.0 --> from birth;
│   │                                     #   PLUGIN_ROOT block copied verbatim from skills/portfolio/SKILL.md
│   └── references/
│       └── source-adapters.md            # already written — SPEC-enrichment.md §4 table + DO-NOT-FETCH
│                                         #   constants + §8 failure modes + the empirical source list
│                                         #   (the empirical list is a TO-FILL placeholder; gate below)
└── custom-apps/
    ├── SPEC-custom-apps.md               # already written — incl. the Contract Registry (§2, the ONE
    │                                     #   home of every id/token); defers to references/design-tokens.md
    ├── SPEC-role-packs.md                # already written — 12 packs + offer MCQ
    ├── SPEC-realtime-adaptation.md       # already written — no-pack protocol + guardrails
    ├── SPEC-enrichment.md                # already written — protocol, tree, adapters
    ├── appendix-a-role-research.md       # committed home of Appendix A — the 17-family research
    │                                     #   synthesis (2026-06-10 design cycle) + its source list;
    │                                     #   carried verbatim into references/role-packs.md in step A2
    │                                     #   (the synthesis body is a TO-FILL placeholder; gate below)
    ├── template-extension.md             # already written from SPEC-custom-apps.md — prototype markup
    │                                     #   + CSS contract: the R4 slot pairs, canonical tile/pane blocks
    │                                     #   per layout (R2/R3 + the §4 item shapes), the six `capp-` CSS
    │                                     #   blocks (var(--token) only), per-layout print rules, R10
    │                                     #   published gates, R9 init-JS note. Explicit banner: NOT
    │                                     #   applied to the shipped template.
    └── ACTIVATION.md                     # this file
```

**Content-dependency gate (hard precondition):** two files above carry explicit `TO-FILL` placeholder blocks for material that lives only in the 2026-06-10 design-cycle session notes (gitignored workspace material — invisible to a fresh clone): the **empirical source list** in `enrich/references/source-adapters.md`, and the **17-family research synthesis (Appendix A)** in [`appendix-a-role-research.md`](appendix-a-role-research.md). **This runbook must not run while either marker is present** — fill both from the session that holds the notes first. Appendix A is load-bearing for the realtime-adaptation protocol's offline-first step (including the HIPAA / legal / clearance hard gates); step A2 carries it into the merged `references/role-packs.md`.

**Pre-activation verification (already owed at build time, mistake-#7 posture):** `template-extension.md`'s prototype blocks validated by rendering a throwaway HTML copy locally (both themes, print preview) — produced and inspected, never merged into `assets/templates/`. The enrich SKILL and adaptation protocol carry their scenario-walks in the build PR description (Behance / Kaggle / Scholar — SPEC-enrichment.md §9; marine-archaeology / HIPAA / thin-results — SPEC-realtime-adaptation.md §3).

## A. Moves (so runtime paths exist — no skill may reference a file that won't exist at runtime)

1. `git mv skills-roadmap/enrich skills/enrich` — the adapter table travels inside the skill folder, so its runtime path `$PLUGIN_ROOT/skills/enrich/references/source-adapters.md` is valid the moment it ships.
2. `git mv skills-roadmap/custom-apps/SPEC-custom-apps.md references/custom-apps.md` and `git mv skills-roadmap/custom-apps/SPEC-enrichment.md references/enrichment.md` (same pattern — `enrichment.md` becomes the protocol's maintainer-facing contract home; the skill's own runtime reads travel inside `skills/enrich/`, moved in A1), and merge `SPEC-role-packs.md` + `SPEC-realtime-adaptation.md` into a single `references/role-packs.md` (packs §1–§4 plus the both-ends rule, the pipeline lens, and the demand-side table, then the adaptation protocol, then **Appendix A** carried verbatim from `appendix-a-role-research.md` — including its "Demand side" section) — so skills can `cat "$PLUGIN_ROOT/references/…"` them. Strip the roadmap banners and rewrite the cross-links to the new `references/` paths in the same commit.
3. `template-extension.md` is consumed by step B1 and then **deleted** — once applied, the live template + `references/design-tokens.md` are the only canon (no doc may outlive the artifact it mandates). `appendix-a-role-research.md` is deleted the same way once step A2 has carried it into `references/role-packs.md` — the shipped file becomes Appendix A's only home. This file (`ACTIVATION.md`) is deleted in the same commit once C passes — a completed runbook outliving its release is the same drift hazard.

## B. Edits to existing (currently frozen) files — each named, nothing else changes

1. `assets/templates/portfolio.html` — insert the R4 slot pairs at their R4-defined anchors (the `template-extension.md` §7 seam map orients); append the six `capp-` CSS blocks + per-layout print rules + R10 published gates from `template-extension.md`; add the R9 `data-hope-default` read to the init JS; confirm the section-grid JS is attribute-generic over `.section-btn[data-section]`/`.section-pane[data-pane]` (it is for Overview; verify, don't assume); confirm print-TOC counters pick up custom tiles (R12).
2. `skills/portfolio/SKILL.md` — add `references/custom-apps.md` + `references/role-packs.md` to the load-bearing reads; add the pack-offer MCQ (SPEC-role-packs.md §2) to "What to ask the user"; add the custom-apps composition step (compose per registry, R14 dosage, R15 gates, one-home rule); extend the zero-token verification grep with R18; bump the skill's version marker.
3. `skills/onboarding/SKILL.md` — one line in Step 2: extra public profiles beyond the basics route to `hope-enrich`.
4. `references/career-graph-schema.md` — add CustomSection + the two edges (SPEC-custom-apps.md §6); bump `hope_schema_version` 1.0 → 1.1 with the additive-migration note.
5. `scripts/graph_query.py` + `scripts/markdown_graph_convert.py` — CustomSection support, lossless round-trip.
6. `assets/fixtures/persona-jane-doe/` — add the interests CustomSection (SPEC-custom-apps.md §5) + one enriched Project with a local asset, so fixture gates exercise the new paths.
7. `README.md` — the "The steps, in v0.1" skill table (lines 39–43) gains the enrich row (Step "Enrich" · "Pulls your public work into your career file" · skill `enrich`), and the "v0.1 ships one flow" framing line above it is updated in the same edit so the table and its intro agree.
8. `plugin.json` + `.claude-plugin/marketplace.json` — version bump together; run the full CLAUDE.md §14 sync protocol (step D below).

Any scripted substitution in these edits follows **R13**: sed captures close on `"`, never on `">`.

## C. Verification at activation (all produce-and-inspect)

1. Generate Jane Doe's portfolio with the interests app on → grep zero `{{` / `<!-- HOPE:` including R18 tokens; both themes; toggle persists.
2. Generate with zero custom apps → all slot pairs per R4 stripped, zero residue, grid identical to pre-activation.
3. `python3 scripts/verify_portfolio_pdf.py <file> --modes resume-classic` → PASS, and confirm no custom-app content in the résumé output (R11); eyeball portfolio print in both themes (per-layout rules in SPEC-custom-apps.md §3).
4. Set `data-hope-mode="published"` on a copy → stale badges and all owner diagnostics gone (R10).
5. Enrichment scenario-walks re-run against the shipped SKILL text (Behance / Kaggle / Scholar).
6. Converter round-trip on the updated fixture, byte-stable.

## D. Release — the plugin-sync steps (CLAUDE.md §14 is canonical; summarized here because this doc is tracked and CLAUDE.md is local-only)

1. **Bump the version** in `plugin.json` **and** `.claude-plugin/marketplace.json` `plugins[0].version` together; keep them identical. This release adds a skill and bumps the schema — a **minor** bump, not a patch. An unbumped version makes `/plugin update` silently no-op.
2. **Commit atomically** on the working branch (Conventional Commits), **push**, open the PR with the standard template; verification gates from step C go in "How to test".
3. **Sync `main`** (the install source) after merge, via the API fast-forward (the branch-protection hook blocks direct pushes).
4. **Refresh the local marketplace cache** so a reinstall pulls the new code.
5. **Report unprompted:** new version + short SHA, that `main` + cache are synced, and the reinstall line — `/plugin uninstall hope@hope && /plugin install hope@hope`.

## Contract hygiene (standing, before and after activation)

- The new skill carries the `hope-skill-version` marker from birth (`0.1.0`); every activation edit to an existing skill bumps that skill's marker (B2).
- All cross-file ids/tokens live **only** in the contract registry — today SPEC-custom-apps.md §2, after step A2 `references/custom-apps.md` §2. `template-extension.md`, `role-packs.md`, and the portfolio-SKILL edits reference registry entries **by number**; restating a value anywhere else is drift.
- Specs defer to live canon (`references/design-tokens.md`, the live template) and never restate its values — at activation the applied template becomes canon and the prototype doc is deleted (A3).
