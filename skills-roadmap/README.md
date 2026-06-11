# skills-roadmap

Nothing in this folder is loaded by the shipped plugin — only `skills/` ships as skills. Two kinds of content live here.

## Skills built for later releases

These skills are built but not in the v0.1 ship (portfolio + publish). They return in a later release: `application/`, `cover-letter/`, `dashboard/`, `decision/`, `discovery/`, `hope/`, `interview/`, `negotiation/`, `resume-tailor/`.

## Custom apps · role packs · enrichment · realtime adaptation (designed 2026-06-10)

Feature specs for a future release — custom portfolio sections as first-class "apps" in the section grid, per-field presets, web-source enrichment, and in-session adaptation for fields without a preset. Activation is a planned operation, not a rediscovery: the runbook is [`custom-apps/ACTIVATION.md`](custom-apps/ACTIVATION.md).

| Doc | What it holds |
|---|---|
| [`custom-apps/SPEC-custom-apps.md`](custom-apps/SPEC-custom-apps.md) | The custom-apps contract registry (R1–R18 — the ONE home of every cross-file id/token), the six pane layouts, the CustomSection schema extension, print/published-mode posture |
| [`custom-apps/SPEC-role-packs.md`](custom-apps/SPEC-role-packs.md) | Twelve role packs (emphasis order, apps, sources, tone, gates) + the pack-offer MCQ |
| [`custom-apps/SPEC-enrichment.md`](custom-apps/SPEC-enrichment.md) | The `hope-enrich` protocol — privacy posture, fetch-decision tree, fourteen source adapters, consent grammar, failure modes |
| [`custom-apps/SPEC-realtime-adaptation.md`](custom-apps/SPEC-realtime-adaptation.md) | The in-session research protocol for no-pack roles, with hard guardrails |
| [`custom-apps/ACTIVATION.md`](custom-apps/ACTIVATION.md) | The activation runbook — moves, the exact edits to currently-frozen files, produce-and-inspect verification, release/sync steps |

The specs defer to the live canon (`references/design-tokens.md`, `skills/portfolio/SKILL.md`, `references/career-graph-schema.md`, the voice/user-story/computer-use guides) and reference contract values by registry entry number — values are written once, in the registry.
