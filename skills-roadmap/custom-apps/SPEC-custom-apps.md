# Hope Custom Apps — Contract Spec · v0.1

> **ROADMAP — not loaded by the shipped plugin. Activation = [`ACTIVATION.md`](ACTIVATION.md).**
> Designed 2026-06-10 for a future release. The shipped v0.6.2 surface — `skills/`, `assets/templates/`, `assets/fixtures/`, `plugin.json`, `.claude-plugin/marketplace.json`, `README.md`, the existing `references/` files — is **frozen**; this spec changes none of it. Activation is a planned operation, not a rediscovery.

**Canon this spec defers to (never restates):**

- `references/design-tokens.md` — all colors, type, radii, textures, theme mechanism. Every CSS rule in this design uses `var(--token)` only; if this spec and that file ever disagree, that file wins.
- `skills/portfolio/SKILL.md` — the Overview-app contract (tile + pane + `{{#show_summary}}` conditional + zero-residue strip) and the projects-loop contract (expandable `.item-card`). Custom apps are a generalization of exactly that grammar.
- `references/career-graph-schema.md` — node/edge conventions, deterministic IDs, confidence/source attribution.
- `references/voice-guide.md` rule #6 — every question below is choices + one "(recommended)" + free-text escape, with 💬 chat-first on weighty ones; checklist exceptions named in place.
- `references/user-story-guide.md` — where decisions and milestones get recorded.

**Sibling specs:** [`SPEC-role-packs.md`](SPEC-role-packs.md) (presets that propose custom apps) · [`SPEC-enrichment.md`](SPEC-enrichment.md) (how web sources feed them) · [`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md) (roles with no preset). All four reference the registry below **by entry number** — the values live only here.

---

## 1. The idea

The shipped template's section grid is already an app platform: a **tile** (`.section-btn[data-section]`) plus a **pane** (`.section-pane[data-pane]`), filtered by attribute-driven JS, with the Overview app as the first opt-in instance. A **custom app** is the generic form: one tile + one pane, instantiated by the generator from one of **six typed layouts** (§3), fed by a **CustomSection** graph node (§6). The template never pre-ships per-app markup — it ships the insertion **slots** (R4) and six layout **CSS blocks**; the generator composes the HTML per app from the canonical blocks in this contract.

## 2. Contract registry — THE single source

Every other section, sibling spec, and future file references these by entry number (R1–R18); **never restate values elsewhere.** A doc that needs one of these values cites the entry number — restating is drift.

| # | Contract | Value |
|---|---|---|
| **R1** | `app_id` grammar | `[a-z][a-z0-9-]{1,24}`, unique per graph. Reserved (built-ins, never reusable): `overview`, `experience`, `projects`, `skills`, `education`, `certifications`, `contact`. |
| **R2** | Tile | `<button class="section-btn" data-section="c-{app_id}">` — inner anatomy (icon container, label, meta-count, integrity bar) is **copied from the shipped Overview tile in the live template at activation time**, changing only icon name, label, and meta-count. This spec deliberately does not restate that anatomy (live template is canon). |
| **R3** | Pane | `<div class="section-pane" data-pane="c-{app_id}" id="pane-c-{app_id}" data-capp-layout="{layout}" data-capp-class="{informal\|professional}" data-capp-title="{app_title}">` — pane inner panel mirrors the shipped Overview pane (incl. the 32×32 grid texture), copied from the live template at activation. `data-capp-title` carries the human title because the print section label renders `content: attr(data-capp-title)` — without it the label would print the internal `c-{app_id}` (internal terminology in user-facing output; CSS cannot read anything the markup doesn't carry). |
| **R4** | Template slots | Three paired markers shipped in the future template, consumed (replaced or stripped — zero residue) on every generation: `<!-- HOPE:custom_tiles_slot --> <!-- /HOPE:custom_tiles_slot -->` inside the section grid after the last built-in tile; `<!-- HOPE:custom_panes_slot --> <!-- /HOPE:custom_panes_slot -->` after the last built-in pane; and `<!-- HOPE:custom_toc_slot --> <!-- /HOPE:custom_toc_slot -->` inside `.print-toc-links` after the last built-in anchor (R12's TOC chips live in a third DOM location the first two slots can't reach; same semantics as the other two pairs). |
| **R5** | Item loop | `<!-- HOPE:capp_items --> … <!-- /HOPE:capp_items -->` inside each composed pane (the newer paired-comment form, matching `summary_stats_loop`, not the older `_start/_end` form). App-level presence is **compose-or-omit** — absent apps are simply never emitted, so zero residue holds by construction; item-level optionals use the shipped conditional style, e.g. `{{#item_href}}…{{/item_href}}`. |
| **R6** | App tokens | `{{app_title}}`, `{{app_icon}}` (Material Symbols name), `{{app_count}}`, `{{app_noun}}` (tile meta-count line `{{app_count}} {{app_noun}}`), `{{app_last_updated}}` (human-readable, e.g. `June 2026` — renders §3's timeline freshness line and the staleness badge); plus one app-level conditional `{{#capp_stale}}…{{/capp_stale}}` (the owner-only staleness badge, gated per R10; rendered only in the R15 warning window). Grep safety by naming: `{{app_last_updated}}` is caught by R18's `{{app_` pattern; the conditional is deliberately named `capp_stale` (not `app_stale`) so R18's `{{#capp_` pattern catches it. |
| **R7** | Item tokens | Layout-specific, defined once in §4's table. All prefixed `item_`. |
| **R8** | CSS namespace | All custom-app styles use the `capp-` class prefix; colors/type/radii via `var(--token)` only per `references/design-tokens.md`. The closed class inventory (one list, so "is this class ours?" has one answer): `.capp`, `.capp-list`, `.capp-row`, `.capp-row-icon`, `.capp-row-main`, `.capp-row-primary`, `.capp-row-meta`, `.capp-row-note`, `.capp-gallery`, `.capp-cell`, `.capp-img`, `.capp-cap`, `.capp-cap-link`, `.capp-tl`, `.capp-tl-updated`, `.capp-tl-entry`, `.capp-tl-date`, `.capp-tl-main`, `.capp-tl-title`, `.capp-tl-body`, `.capp-quote-wall`, `.capp-quote`, `.capp-quote-text`, `.capp-quote-attr`, `.capp-quote-name`, `.capp-quote-context`, `.capp-quote-source`, `.capp-status`, `.capp-stale`. (`cards` and `stat-row` add almost nothing here — they reuse shipped grammars verbatim, R5 / §3.) |
| **R9** | Default-open | Priority: Overview pane when present → the pane named by an optional `data-hope-default="c-{app_id}"` attribute on the section-grid container → Experience. One init-JS extension at activation (ACTIVATION.md step B1). |
| **R10** | Published / diagnostics gate | Owner-only affordances introduced by custom apps — the freshness badge `.capp-stale`, dosage hints, integrity meta — are hidden under `html[data-hope-mode="published"]` and in **all** print modes. Same posture as the shipped integrity bars. |
| **R11** | Résumé print | Every résumé print mode (`body.print-doc-resume` family) hides all custom tiles and panes, exactly as it hides the Overview app. Custom-app content never enters `#resume-view`. |
| **R12** | Print TOC | Each custom app contributes one TOC chip alongside its tile; numbering is the shipped CSS-counter mechanism, so it self-adjusts — no static numbers anywhere. |
| **R13** | sed safety | Any scripted edit targeting these attributes ends its capture at the closing quote — `s/data-pane="c-old"/data-pane="c-new"/` — pattern closes on `"`, **never** on `">` (self-closing-tag-safe). |
| **R14** | Dosage & placement | Max **4** custom apps per portfolio, of which max **2** with `app_class:"informal"`. Pane/tile order: built-ins → professional customs → informal customs (informal always last). Informal apps never the default-open pane. |
| **R15** | Existence & freshness gates | An app renders only when its CustomSection has ≥1 real item (never scaffold placeholders). Apps whose semantics are time-bound (`timeline` "/now"-style, `list` "/uses"-style — any section with `last_updated` semantics) are **omitted** when `last_updated` > 180 days; the generator offers to refresh instead of rendering stale. **Staleness warning window:** `last_updated` 90–180 days old renders the `{{#capp_stale}}` badge (R6, owner-only per R10); over 180 days the omission gate above applies — the badge never renders on an omitted app. |
| **R16** | Asset paths | Enrichment downloads land at `career-graph/assets/enrichment/{source}/{source-native-id}-{slug}.{ext}` inside the user's project folder. Baked into HTML as `data:` URLs at generation (same mechanism as the shipped headshot bake), resized ≤800px long edge, JPEG q≈80; total baked-image budget per portfolio ≈2.5 MB — over budget means curate harder, not degrade. |
| **R17** | Graph IDs | `{person-slug}` = the slug portion of the existing `Person.user_id` after the `person:` prefix, **hash suffix included** (e.g. `person:jane-doe-3a8f` → `jane-doe-3a8f`) — taken verbatim from the Person node already in the graph, never re-derived from the name. `csec:{person-slug}:{app_id}` for CustomSection; `proj:{person-slug}:{source}:{native-id-or-slug}` for enriched Projects. Deterministic → re-runs MERGE, never duplicate. |
| **R18** | Verification greps | The portfolio skill's zero-token check extends to: `{{item_`, `{{app_`, `{{#capp_`, `HOPE:capp_items`, `HOPE:custom_tiles_slot`, `HOPE:custom_panes_slot`, `HOPE:custom_toc_slot`. |

## 3. The six layouts

| Layout | For | Anatomy (composed by generator; classes per R8) | Print (portfolio modes) |
|---|---|---|---|
| `list` | Annotated rows — interests, /uses, clips, publications, talks | `.capp-row`: optional icon/logo → `.capp-row-primary` (sans 600) + `.capp-row-meta` (mono, muted) → optional `.capp-row-note` (1 line) → optional worded link | Prints as-is; `break-inside: avoid` per row |
| `cards` | Expandable evidence — side quests, engagements, campaigns, lesson artifacts | **Reuses the shipped `.item-card[data-expand]` grammar verbatim** (the projects-loop contract) — head with title/tagline/optional dates + chevron; body with description, impact, skill chips; optional status pill (`shipped / tinkering / retired`) | Prints expanded, identical to shipped project cards |
| `gallery-grid` | Image-led proof — Behance/Dribbble covers, photography, before/after pairs | `.capp-gallery`: standard grid (native ratios in fixed cells), 2–3 cols, 4–8px gutters; caption (`.capp-cap`, mono) **below** each cell — no hover-only metadata, no lightbox (self-contained, no JS dependence beyond what ships); each image is a baked `data:` URL (R16) with mandatory `alt` | 3-col static grid, captions visible, `break-inside: avoid` per cell |
| `timeline` | Dated entries — /now snapshot, recent posts, bylines | `.capp-tl`: vertical rail, mono date left, `.capp-tl-title` + optional 1–2 sentence body; **`last_updated` rendered prominently at top** (the freshness contract) | Rail prints; degrade to plain dated list if rail breaks pagination |
| `quote-wall` | Testimonials — educators, marketers, consultants, sales | `.capp-quote`: quote text (sans, 500), attribution (mono) + role/context line; max 4 quotes | Prints; `break-inside: avoid` per quote |
| `stat-row` | Numeric banners — quota attainment, engagement deltas | **Reuses the shipped Overview `.summary-stats` / `.summary-stat` / `.stat-value` / `.stat-label` grammar verbatim** — hex badges, max 4 stats, human-curated, never auto-summed | Identical to Overview stats printing |

All six: résumé modes hide everything (R11); published-mode diagnostics per R10.

## 4. Item-shape table (R7 — the once-written token contract)

| Layout | Item fields → tokens |
|---|---|
| `list` | `{{item_icon}}`? · `{{item_primary}}` · `{{item_meta}}` · `{{#item_note}}{{item_note}}{{/item_note}}` · `{{#item_href}}<a …>{{item_link_label}}</a>{{/item_href}}` |
| `cards` | `{{item_name}}` · `{{item_tagline}}` · `{{#item_dates}}…{{/item_dates}}` (omit the whole span when absent — same rule as projects) · `{{item_description}}` · `{{#item_impact}}…{{/item_impact}}` · `{{#item_status}}…{{/item_status}}` · skills chips via the shipped `project_skills_loop` pattern · `{{#item_href}}…{{/item_href}}` · optional `item_ref` (a graph node id, e.g. `proj:…` — lets a card mirror an enriched Project without duplicating data) |
| `gallery-grid` | `{{item_src}}` (data URL at generation; asset path in graph) · `{{item_alt}}` (mandatory) · `{{#item_caption}}{{item_caption}}{{/item_caption}}` · `{{#item_href}}…{{/item_href}}` |
| `timeline` | `{{item_date}}` (YYYY-MM) · `{{item_title}}` · `{{#item_body}}…{{/item_body}}` · `{{#item_href}}…{{/item_href}}` |
| `quote-wall` | `{{item_quote}}` · `{{item_attribution}}` · `{{#item_context}}{{item_context}}{{/item_context}}` · `{{#item_source_label}}…{{/item_source_label}}` |
| `stat-row` | `{{item_icon}}` · `{{item_value}}` · `{{item_label}}` — deliberately identical shape to `Person.headline_stats[]` |

**Specificity validator (generator-side, from the informal-sections research):** reject generic informal items ("travel", "music", "coffee") unless `item_meta`/qualifier is present — specificity is the anti-cringe mechanism. Suppress humor-dependent copy and anything competing-career-shaped; warmth comes from specificity, not jokes.

## 5. Worked example — Interests as an app

**Graph data** (a CustomSection node, §6; seeded by promoting `Person.interests`, enriched with qualifiers in conversation):

```json
{
  "type": "CustomSection",
  "id": "csec:jane-doe-3a8f:interests",
  "app_id": "interests",
  "title": "Interests",
  "icon": "interests",
  "layout": "list",
  "app_class": "informal",
  "item_noun": "interests",
  "last_updated": "2026-06-10",
  "items": [
    {"icon": "print", "primary": "Letterpress printing", "meta": "Vandercook SP-15 · prints a small poetry series"},
    {"icon": "directions_run", "primary": "Trail running", "meta": "2025 CCC finisher"},
    {"icon": "auto_stories", "primary": "Sci-fi novels", "meta": "annual Le Guin re-read"}
  ],
  "confidence": 0.70,
  "source": "conversation",
  "created_at": "2026-06-10T09:00:00Z",
  "updated_at": "2026-06-10T09:00:00Z"
}
```

**Composed pane** (tile per R2 with icon `interests`, label "Interests", meta `3 interests`; pane per R3/R5):

```html
<div class="section-pane" data-pane="c-interests" id="pane-c-interests"
     data-capp-layout="list" data-capp-class="informal"
     data-capp-title="Interests">
  <!-- inner panel copied from the shipped Overview pane at activation -->
  <!-- HOPE:capp_items -->
  <div class="capp-row">
    <span class="material-symbols-rounded capp-row-icon">{{item_icon}}</span>
    <div class="capp-row-main">
      <span class="capp-row-primary">{{item_primary}}</span>
      <span class="capp-row-meta">{{item_meta}}</span>
    </div>
  </div>
  <!-- /HOPE:capp_items -->
</div>
```

**One-home rule:** when the Interests app is enabled, the generator suppresses the Overview pane's quiet interests row (never both in one artifact). `Person.interests` remains canonical and keeps feeding the Overview line whenever the app is absent — the shipped Overview contract is untouched.

**The question Hope asks** (rule #6; weighty → carries 💬; the recommendation flips for career-changers/juniors per the seniority gradient, and the skill must say why when it flips):

> Your interests could live two ways. Which feels right?
> 1. **A quiet line in the Overview** (recommended — your work carries the page; interests read best as texture)
> 2. **Their own Interests tab** — each with one line of context, like "Trail running — 2025 CCC finisher"
> 3. **Leave them off this portfolio**
> 4. 💬 **Chat about this first** — who's reading this, and what should they feel?
>
> Or tell me in your own words.

**Print:** rows print in portfolio modes (R14 places the tab last); all résumé modes hide it (R11). **Published:** nothing owner-only here except the stale badge, gated per R10.

## 6. Schema extension — a CustomSection node (not a Person field), justified

A new node type, because:

1. **Curation parity** — per-portfolio show/hide needs `INCLUDES_CUSTOM_SECTION` edges from CuratedPortfolio (the same person shows Talks for a DevRel application and hides it for a bank). Fields can't be edge targets; nodes fit the existing INCLUDES_* grammar.
2. **Provenance** — sections carry `source`/`confidence` per item-set (conversation 0.70, web_enrichment 0.90, document 0.85 — the base-confidence table in `references/career-graph-schema.md`), matching the schema's attribution convention. Person fields have no such surface.
3. **Deterministic merge** — `csec:` ids (R17) make enrichment re-runs idempotent.
4. **Person stays lean** — `headline_stats`/`interests` were tiny presentation fields; sections are unbounded item lists.

**Schema delta** (applied only at activation, with a version bump 1.0 → 1.1; purely additive, no data migration): node type 16 `CustomSection` (fields as in §5's example; `layout` enum = the six layouts of §3; `app_class` enum `informal|professional`); edges 30–31: `HAS_CUSTOM_SECTION` Person → CustomSection, `INCLUDES_CUSTOM_SECTION` CuratedPortfolio → CustomSection.

## 7. Print & published-mode posture — the consolidated view

Standing rule (it cost us once): **builder diagnostics and editing affordances gate on `html[data-hope-mode="published"]`, and print behavior is specified for every new visual element before it ships.** For custom apps that resolves entirely to registry entries — no new values here:

- **Owner-only affordances** (`.capp-stale` freshness badge, dosage hints, integrity meta) — hidden in published mode and all print modes, per **R10**.
- **Résumé print modes** — all custom tiles and panes hidden; nothing enters `#resume-view`, per **R11**.
- **Portfolio print modes** — per-layout behavior is the print column of §3's table; every layout names its degradation explicitly.
- **Print TOC** — one chip per app, CSS-counter numbered, per **R12**.
- **Local vs published copy** — unchanged from the shipped contract in `skills/portfolio/SKILL.md`: the local file is the owner's editable copy and never carries `data-hope-mode="published"`; the publish skill stamps the published copy.

## 8. Implementation files & verification

**Future implementers build from this spec** (file plan and rename mapping in [`ACTIVATION.md`](ACTIVATION.md) §0–§A): a `template-extension.md` prototype carrying the R4 slot markers, canonical tile/pane blocks per layout (R2/R3/§4), the six `capp-` CSS blocks (`var(--token)` only), per-layout print rules, R10 published gates, and the R9 init-JS note — **explicitly banner'd as NOT applied to the shipped template** until activation.

**Verification posture — produce-and-inspect where artifacts exist, scenario-walks where prose is the artifact:**

- **Now (roadmap time):** prototype blocks are validated by rendering a throwaway HTML copy locally (both themes, print preview) — produced and inspected, never merged into `assets/templates/`.
- **At activation:** the full produce-and-inspect suite in [`ACTIVATION.md`](ACTIVATION.md) step C — zero-token greps incl. R18, zero-custom-apps residue check, résumé-mode exclusion (R11), published-mode gate check (R10).
