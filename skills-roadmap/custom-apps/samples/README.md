# Role-pack persona samples — index

> **ROADMAP — not loaded by the shipped plugin.** One worked example per pack in [`SPEC-role-packs.md`](../SPEC-role-packs.md), authored against the demand-side screen there. All personas are **fictional** (`-fictional` suffixed handles, per the Jane Doe convention). Lean by design — these seed pack work, they don't exhaust it.

## The twelve packs

| Pack | Persona | One line |
|---|---|---|
| **designer** | → **the shipped Jane Doe fixture** (`assets/fixtures/persona-jane-doe/`) — no folder here | The default persona *is* the designer-pack sample; a duplicate would drift from the shipped canon |
| [**engineer**](engineer/) | Marcus Webb | Staff platform engineer whose employer IP is private, so pinned OSS (pgqueue, Prometheus PRs) carries the proof for the ~90-second GitHub scan |
| [**pm**](pm/) | Priya Nair | Support-queue-to-Group-PM arc told in relative metric deltas, named trade-offs, redacted-with-permission artifacts |
| [**data**](data/) | Diego Fuentes | Healthcare/retail DS whose visible work is public-data rebuilds of private techniques, limitations-forward, zero toy datasets |
| [**writer**](writer/) | Nadia Okafor | Freelance climate journalist; beat-matched, date-sorted clips lead, paywalls linked never reproduced |
| [**academic**](academic/) | Meera Raghavan | Computational linguist on the tenure-track market; publications list leads with the under-review pipeline named, ORCID-harvested (never Google Scholar) |
| [**marketer**](marketer/) | Tomás Rivera | Growth marketer whose campaign cards run Challenge→Strategy→Execution→Results in relative deltas — absolutes stay client-confidential |
| [**sales**](sales/) | Dana Whitfield | Strategic AE leading with a quota/rank/Club stat-row; brag book as documentary proof, deal sizes and earnings stay in-room |
| [**educator**](educator/) | Marisol Vega | NBCT science teacher whose page leads with aggregate student-growth data; the FERPA gate blocks the un-consented photo gallery outright |
| [**consultant**](consultant/) | Yusuf Adeyemi | Independent ops strategist; anonymized engagement cards ("F500 healthcare distributor, −22% fulfillment cost") with a visible client-names-withheld note |
| [**devrel**](devrel/) | Kenji Sato | Engineer-turned-advocate; signature talk pinned, everything date-stamped — the staleness rule (R15) applies hardest here |
| [**creative-media**](creative-media/) | Lena Castillo | Editor + motion designer; 75-second mute-proof reel leads, every clip contribution-labeled, embargoed work absent per the rights gate |

## Format — three files per pack folder

The contracts live elsewhere; the samples conform, they don't redefine:

- `persona.md` — the fictional person: who they are, their arc, why this pack fits. One page.
- `data.js` — matches the shape of the shipped modular sample, [`assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js`](../../../assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js), **exactly** — that file is the authoring contract, including the timeline array and traveler choice per the Throughline contract (`references/design-tokens.md` §11). `node --check` clean.
- `composition.md` — which apps the pack enables for this persona, above-the-fold order per the pack's demand-side scan (`SPEC-role-packs.md` §3), and 3–5 extrapolation notes: what generalizes vs what is persona-specific.

Voice throughout follows `references/voice-guide.md` (metric-led, specific, honest). Each sample visibly honors its pack's shortlist signals and avoids its bin signals — the demand-side table in `SPEC-role-packs.md` §3 is the test.

## How Hope extrapolates from a sample

At activation these ride along with the rest of this folder (see [`ACTIVATION.md`](../ACTIVATION.md) §0). When a user matches a pack, `hope-enrich` and `hope-portfolio` read that pack's sample as the **worked example**, then generalize to the user's real graph:

- **Composition** — which apps the pack enabled for the persona, their above-the-fold order, and *why* (the composition.md rationale) transfer as a starting layout, re-derived against the user's actual evidence.
- **Tone** — the register of the persona's copy (metric-led headlines, honest-status framing, confidentiality notes) calibrates how the user's material is written, not what it says.
- **Density** — how much each pane carries (3 case studies not 10; 6 clips not 30; one stat-row not a wall) calibrates dosage for the user's page.

**Never copied: persona facts.** Names, employers, numbers, projects, quotes in a sample are fiction and must not leak into any user's portfolio — the sample teaches shape, the user's career graph supplies every fact. A user portfolio containing a string traceable to a sample persona is a bug.

## Status

All eleven folders authored. The designer pack intentionally has none — Jane Doe is the sample.
