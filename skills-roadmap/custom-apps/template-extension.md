# Template Extension — Custom-App Prototype Markup + CSS

> **ROADMAP — not loaded by the shipped plugin. Activation = `skills-roadmap/custom-apps/ACTIVATION.md`.**
>
> **This file is NOT applied to the shipped template.** `assets/templates/portfolio.html` (v0.4 markup, shipped in plugin v0.6.2) is frozen. Every block below is a **copy-source** for ACTIVATION.md step B1; once applied, this file is **deleted** (ACTIVATION.md step A3 — no doc may outlive the artifact it mandates). Until activation, nothing here changes runtime behavior.

**Canon this file defers to (never restates):**

- `references/design-tokens.md` — every color, font, radius, shadow, texture. All CSS below uses `var(--token)` only. If a value here and that file disagree, that file wins.
- `skills-roadmap/custom-apps/SPEC-custom-apps.md` §2 — **the Contract Registry (R1–R18)**. Every id, token name, attribute, cap and gate is defined ONCE there; this file references entries by number and never redefines them. On drift, the registry wins — fix this file.
- `skills/portfolio/SKILL.md` — the shipped substitution contract: conditional grammar (`{{#x}}…{{/x}}`), paired-comment loops, the zero-residue strip, the zero-token verification grep.
- The live template `assets/templates/portfolio.html` — the shipped tile/pane/card/panel anatomy that R2/R3 say is **copied at activation time, not restated here**. Where a block below reuses a shipped class (`.section-btn`, `.summary-band`, `.item-card`, `.project-link`, `.skill-chip`, `.org-fallback`, `.backtotop`), the live template is the canonical definition.

Line numbers cited in the diff map are from the shipped template at plugin **v0.6.2** (1,850 lines). They orient; the **anchor text** binds — match on the quoted context lines, not the numbers.

---

## 0. Registry surfaces this prototype surfaced — now folded into the §2 registry

Building the implementable blocks surfaced **four contract gaps**; all four are **defined in the §2 registry of `SPEC-custom-apps.md`** (folded in 2026-06-11), not here: the pane's `data-capp-title` print-label attribute (**R3**), the third slot pair `HOPE:custom_toc_slot` and its verification grep (**R4** / **R18**), the `{{app_last_updated}}` token plus the `{{#capp_stale}}` conditional (**R6**), and the closed `capp-` class inventory (**R8**). Per the written-once rule this file cites those entries by number like every other contract value and introduces no cross-file contract surface of its own.

---

## 1. Token & loop grammar (one page, referencing — not redefining — the shipped contract)

The generator composes custom-app HTML from the blocks in §3–§5 using exactly the shipped template's three substitution mechanisms plus the slot mechanism:

1. **Single tokens** — `{{app_title}}`, `{{item_primary}}`, … (R6/R7). Replaced with escaped text. Layout-specific item tokens are the SPEC-custom-apps.md §4 table — never invent one outside it.
2. **Conditionals** — `{{#x}} … {{/x}}` kept-or-stripped whole, markers included, zero residue. Same grammar as the shipped `{{#show_summary}}` / `{{#target_company}}` / `{{#item_dates}}`-style optionals.
3. **Item loops** — the **paired-comment form** `<!-- HOPE:capp_items --> … <!-- /HOPE:capp_items -->` (R5; matches `summary_stats_loop`, not the older `_start`/`_end` form). The block between the markers is ONE canonical item; the generator replaces the whole block (markers included) with N rendered items. The nested skill-chip loop inside `cards` reuses the shipped `<!-- HOPE:project_skills_loop -->` marker verbatim — SPEC §4 names it the pattern to follow, and reusing the marker adds no new contract surface.
4. **Slots** — the three paired markers (R4) ship **empty** in the future template. Every generation either replaces a slot's interior with composed blocks or strips the pair entirely. Apps are **compose-or-omit** (R5): an absent app is simply never emitted, so zero residue holds by construction.

### The conditional wrapper convention

These four rules are how the shipped template avoids half-stripped markup; every block in this file obeys them:

- **Wrap whole elements only.** `{{#item_href}}<a …>{{item_link_label}}</a>{{/item_href}}` — never split an opening tag and its closing tag across two conditional pairs (no `{{#x}}<a>{{/x}} … {{#x}}</a>{{/x}}`). Stripping must never be able to produce unbalanced HTML.
- **Omit the whole span when the value is absent** — same rule as the projects loop's `{{#item_dates}}…{{/item_dates}}`: no empty `<span>` skeletons.
- **No eyebrow over nothing** (shipped Overview rule): a container row whose source list is empty is dropped by the generator at compose time, conditional or not. For `gallery-grid` this means: drop the `<figcaption>` entirely when an item has neither caption nor href.
- **App-level presence is compose-or-omit, never a conditional** — there is no `{{#has_app_x}}` wrapper. The R4 slots are the only template surface; apps exist only as composed output.

### sed safety (R13)

Any scripted edit against these attributes ends its capture at the **closing quote**, never at `">`:

```bash
# CORRECT — closes on the quote; safe for both <div …> and self-closing tags
sed -i '' 's/data-pane="c-old-id"/data-pane="c-new-id"/g' portfolio.html
# WRONG — never write a pattern that captures "> as the terminator
```

---

## 2. The three slot blocks (R4) — what the future template ships

These are the ONLY custom-app bytes the template pre-ships. Each pair is consumed (replaced or stripped, markers included) on every generation.

**Block T0-a — tiles slot** (interior empty by design):

```html
    <!-- HOPE:custom_tiles_slot -->
    <!-- /HOPE:custom_tiles_slot -->
```

**Block T0-b — panes slot:**

```html
  <!-- HOPE:custom_panes_slot -->
  <!-- /HOPE:custom_panes_slot -->
```

**Block T0-c — print-TOC slot (R4):**

```html
      <!-- HOPE:custom_toc_slot -->
      <!-- /HOPE:custom_toc_slot -->
```

Placement for all three: §7 diff map, seams S1–S3.

---

## 3. Canonical per-app blocks the generator composes into the slots

### Block T1 — tile (R2; one per app, into the tiles slot)

Anatomy is the shipped **Overview tile** (the live template is canon) with icon, label and meta-count swapped. Like the Overview tile — and unlike the five built-in tiles — it carries **no integrity bar**: curated custom sections have no confidence score to diagnose, so there is nothing for the R10 published gate to hide on the tile.

```html
<button class="section-btn" data-section="c-{{app_id}}" type="button">
  <span class="icon"><span class="material-symbols-rounded">{{app_icon}}</span></span>
  <span class="body">
    <span class="label">{{app_title}}</span>
    <span class="meta">
      <span class="count">{{app_count}} {{app_noun}}</span>
    </span>
  </span>
</button>
```

Compose notes: `app_id` per R1 grammar; tile order per R14. No `active` class ever — default-open is the init JS's job (R9, Block J1).

### Block T2 — pane shell (R3; one per app, into the panes slot)

```html
<div class="section-pane" data-pane="c-{{app_id}}" id="pane-c-{{app_id}}"
     data-capp-layout="{{layout}}" data-capp-class="{{app_class}}"
     data-capp-title="{{app_title}}">
  {{#capp_stale}}
  <div class="capp-stale"><span class="material-symbols-rounded">history</span>Updated {{app_last_updated}} &mdash; refresh soon</div>
  {{/capp_stale}}
  <section class="summary-band capp">
    <!-- layout container + canonical item: exactly ONE of L1–L6 goes here -->
  </section>
  <a class="backtotop" href="#top" aria-hidden="true">↑ Contents</a>
</div>
```

Compose notes:

- The inner panel **reuses the shipped `.summary-band` class** (R3's "mirrors the shipped Overview pane"). That single decision buys, with zero new CSS: the 32×32 grid texture, the print-time PNG texture swap (template line ~193), the ink-mode texture kill (line ~246), and the panel tokens. `.capp` is a marker class — its only own rule is the print fragmentation override in Block C1 §f.
- **`cards` is the one layout with no panel**: its items are bare `.item-card` siblings directly inside the pane, mirroring the shipped Experience/Projects panes (cards are themselves panels — a panel-in-panel would double the chrome). The `{{#capp_stale}}` badge and `.backtotop` stay.
- `{{#capp_stale}}` renders only inside R15's staleness warning window; past that window the whole app is omitted, also per R15 (generator-side gates — the day values live only in the registry, never here). Badge copy is owner-facing and plain-language — no internal terminology.
- Pane order in the slot per R14, including its informal-app placement and default-open rules (generator-enforced).
- The pane is filtered by the shipped section-grid JS with **zero JS changes**: the click handler is already attribute-generic over `data-section`/`data-pane` equality (verified against v0.6.2 lines 1787–1793 — it compares attribute values, hard-coding nothing).

---

## 4. The six layout blocks (L1–L6) — container + canonical item

Each block below replaces the placeholder comment inside Block T2's `.summary-band.capp` (except L2 `cards`, which replaces the whole `<section>` per the note above). Item tokens are the SPEC-custom-apps.md §4 table (R7) — nothing here adds a token.

### L1 — `list` (annotated rows)

```html
    <div class="capp-list">
      <!-- HOPE:capp_items -->
      <div class="capp-row">
        {{#item_icon}}<span class="material-symbols-rounded capp-row-icon">{{item_icon}}</span>{{/item_icon}}
        <div class="capp-row-main">
          <span class="capp-row-primary">{{item_primary}}</span>
          <span class="capp-row-meta">{{item_meta}}</span>
          {{#item_note}}<span class="capp-row-note">{{item_note}}</span>{{/item_note}}
          {{#item_href}}
          <a class="project-link" href="{{item_href}}" target="_blank" rel="noopener">
            <span class="material-symbols-rounded">link</span>{{item_link_label}}
            <span class="material-symbols-rounded ext">open_in_new</span>
          </a>
          {{/item_href}}
        </div>
      </div>
      <!-- /HOPE:capp_items -->
    </div>
```

The worded link reuses the shipped `.project-link` (cyan, mono, external-arrow) — ink mode already covers it. Generator-side specificity validator applies (SPEC §4): no `item_primary` without a qualifying `item_meta` on informal apps.

### L2 — `cards` (expandable evidence; reuses the shipped `.item-card[data-expand]` grammar verbatim, R5)

No `.summary-band` wrapper. The card-expand JS and all `.item-card` print rules (expand-on-print, `box-decoration-break: clone`, scanline PNG swap) apply unchanged because the classes are identical. Head anatomy per SPEC §3: title / tagline / optional dates + chevron — no org-logo (custom-app cards carry no organization).

```html
    <!-- HOPE:capp_items -->
    <div class="item-card" data-expand>
      <span class="accent-bar"></span>
      <div class="item-head">
        <div class="item-info">
          <div class="title-row">
            <span class="role-title">{{item_name}}</span>
            {{#item_status}}<span class="capp-status" data-status="{{item_status}}">{{item_status}}</span>{{/item_status}}
          </div>
          <span class="role-company">{{item_tagline}}</span>
          {{#item_dates}}<span class="role-dates">{{item_dates}}</span>{{/item_dates}}
        </div>
        <div class="item-meta">
          <span class="chevron"><span class="material-symbols-rounded">expand_more</span></span>
        </div>
      </div>
      <div class="item-body">
        <div class="item-body-inner">
          <div class="item-divider"></div>
          <article class="contrib ic" style="background: transparent; border: 0; border-left: 0; padding: 0;">
            <p class="contrib-action">{{item_description}}</p>
            {{#item_impact}}
            <div class="contrib-impact">
              <span class="material-symbols-rounded">arrow_forward</span>
              <p>{{item_impact}}</p>
            </div>
            {{/item_impact}}
            {{#item_has_skills}}
            <div class="contrib-skills">
              <!-- HOPE:project_skills_loop -->
              <span class="skill-chip" data-cat="{{skill_category}}">{{skill_name}}</span>
              <!-- /HOPE:project_skills_loop -->
            </div>
            {{/item_has_skills}}
            {{#item_href}}
            <div class="project-link-row">
              <a class="project-link" href="{{item_href}}" target="_blank" rel="noopener">
                <span class="material-symbols-rounded">link</span>{{item_link_label}}
                <span class="material-symbols-rounded ext">open_in_new</span>
              </a>
            </div>
            {{/item_href}}
          </article>
        </div>
      </div>
    </div>
    <!-- /HOPE:capp_items -->
```

Compose notes: add `expanded` to the **first** card only (same rule as the shipped projects loop). `item_status` enum is `shipped | tinkering | retired` rendered lowercase as both attribute and visible text; `item_ref` (a graph node id) is data-side only — **never emitted into markup** (internal id, Protocol: no internal terminology user-facing). The inline style neutralizing `.contrib`'s box is copied from the shipped projects card — it is the one sanctioned inline style in this grammar.

### L3 — `gallery-grid` (image-led proof)

```html
    <div class="capp-gallery">
      <!-- HOPE:capp_items -->
      <figure class="capp-cell">
        <img class="capp-img" src="{{item_src}}" alt="{{item_alt}}" loading="lazy" />
        <figcaption class="capp-cap">
          {{#item_caption}}<span>{{item_caption}}</span>{{/item_caption}}
          {{#item_href}}<a class="capp-cap-link" href="{{item_href}}" target="_blank" rel="noopener">{{item_link_label}}</a>{{/item_href}}
        </figcaption>
      </figure>
      <!-- /HOPE:capp_items -->
    </div>
```

Compose notes: `item_src` is a baked `data:` URL at generation (R16 — same mechanism as the shipped headshot bake; asset path lives in the graph, never in the HTML). `item_alt` is **mandatory** — composing an item without it is a generation error, not a fallback. No hover-only metadata, no lightbox (self-contained rule): the caption is always visible below the cell, and the optional link is a worded anchor inside the caption — never an image-wrapping anchor (keeps the conditional wrapper convention intact and the tap target honest). Drop the whole `<figcaption>` when both caption and href are absent (no-empty-eyebrow rule). Fixed 4:3 cells with `object-fit: cover`: images keep their native ratio (cropped, never distorted), cells stay uniform.

### L4 — `timeline` (dated entries; freshness contract)

```html
    <div class="capp-tl-updated"><span class="material-symbols-rounded">update</span>Updated {{app_last_updated}}</div>
    <div class="capp-tl">
      <!-- HOPE:capp_items -->
      <div class="capp-tl-entry">
        <span class="capp-tl-date">{{item_date}}</span>
        <div class="capp-tl-main">
          <span class="capp-tl-title">{{item_title}}</span>
          {{#item_body}}<p class="capp-tl-body">{{item_body}}</p>{{/item_body}}
          {{#item_href}}
          <a class="project-link" href="{{item_href}}" target="_blank" rel="noopener">
            <span class="material-symbols-rounded">link</span>{{item_link_label}}
            <span class="material-symbols-rounded ext">open_in_new</span>
          </a>
          {{/item_href}}
        </div>
      </div>
      <!-- /HOPE:capp_items -->
    </div>
```

Compose notes: `.capp-tl-updated` is **visitor-facing content** (the SPEC §3 freshness contract — "last_updated rendered prominently at top"); it prints and publishes. It is distinct from the owner-only `.capp-stale` badge in Block T2, which is gated (R10). `item_date` is `YYYY-MM` rendered as the generator's human form (e.g. `2026-05`); entries sort newest-first.

### L5 — `quote-wall` (testimonials, max 4 — SPEC §3 cap, generator-enforced)

```html
    <div class="capp-quote-wall">
      <!-- HOPE:capp_items -->
      <figure class="capp-quote">
        <blockquote class="capp-quote-text">{{item_quote}}</blockquote>
        <figcaption class="capp-quote-attr">
          <span class="capp-quote-name">{{item_attribution}}</span>
          {{#item_context}}<span class="capp-quote-context">{{item_context}}</span>{{/item_context}}
          {{#item_source_label}}<span class="capp-quote-source">{{item_source_label}}</span>{{/item_source_label}}
        </figcaption>
      </figure>
      <!-- /HOPE:capp_items -->
    </div>
```

### L6 — `stat-row` (numeric banner; reuses the shipped Overview stats grammar verbatim, SPEC §3)

```html
    <div class="summary-stats">
      <!-- HOPE:capp_items -->
      <div class="summary-stat hex-kpi">
        <span class="hex"><span class="material-symbols-rounded">{{item_icon}}</span></span>
        <span class="stat-text">
          <span class="stat-value">{{item_value}}</span>
          <span class="stat-label">{{item_label}}</span>
        </span>
      </div>
      <!-- /HOPE:capp_items -->
    </div>
```

Zero new CSS: the scaled-hex rules are keyed on `.summary-band .hex-kpi` and the pane shell already wraps this in `.summary-band.capp`. Max 4 stats, human-curated, never auto-summed — identical posture to `Person.headline_stats`.

### Block T3 — TOC anchor (R12; one per app, into the TOC slot)

```html
      <a href="#pane-c-{{app_id}}"><span class="toc-chip"></span>{{app_title}}</a>
```

The chip number is the shipped CSS counter (`decimal-leading-zero`) — it self-adjusts; never write a static number. Anchor order matches tile order (R14).

---

## 5. Block C1 — the `capp-` CSS bundle (append ONCE, seam S4)

One contiguous block, internally sectioned **(a)–(h)**, appended immediately before `</style>`. Appending last is load-bearing twice: the print-label overrides in (f)/(g) tie the base rules on specificity and must win on **source order**. Every color/radius/shadow/font is a `var(--token)` from `references/design-tokens.md` — there is not one raw color literal in this bundle.

```css
/* ═══ CUSTOM APPS (capp-) ════════════════════════════════════════════════
   Contract: references/custom-apps.md §2 (registry R1–R18) — ids, tokens,
   caps and gates live THERE; this block is presentation only.
   Tokens only (references/design-tokens.md); no raw hex, no new colors.
   Reused shipped classes (.summary-band, .item-card, .project-link,
   .skill-chip, .hex-kpi, .backtotop) keep their shipped rules — the blocks
   below add only what custom layouts need on top. */

/* ── (a) list ── */
.capp-list { display: flex; flex-direction: column; gap: 2px; }
.capp-row { display: flex; align-items: flex-start; gap: 12px; padding: 8px 10px; border-radius: var(--radius-button); transition: background 0.15s; }
.capp-row:hover { background: var(--card-bg-hover); }
.capp-row-icon { width: 30px; height: 30px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-button); background: var(--accent-orange-bg); color: var(--accent-orange); font-size: 17px; }
.capp-row-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.capp-row-primary { font-size: 13.5px; font-weight: 600; color: var(--text-primary); letter-spacing: -0.005em; }
.capp-row-meta { font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); letter-spacing: 0.02em; }
.capp-row-note { font-size: 12.5px; line-height: 1.5; color: var(--text-secondary); }
.capp-row .project-link { margin-top: 2px; }

/* ── (b) gallery-grid ── */
.capp-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.capp-cell { margin: 0; min-width: 0; }
.capp-img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius-button); border: 1px solid var(--border-default); background: var(--surface-2); }
.capp-cap { margin-top: 5px; font-family: var(--font-mono); font-size: 10px; line-height: 1.5; letter-spacing: 0.04em; color: var(--text-muted); display: flex; flex-direction: column; gap: 1px; }
.capp-cap-link { color: var(--accent-cyan); text-decoration: none; transition: opacity 0.2s; }
.capp-cap-link:hover { opacity: 0.8; }

/* ── (c) timeline ── */
.capp-tl-updated { display: inline-flex; align-items: center; gap: 5px; margin-bottom: 12px; font-family: var(--font-mono); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-emerald); }
.capp-tl-updated .material-symbols-rounded { font-size: 13px; }
.capp-tl { display: flex; flex-direction: column; }
.capp-tl-entry { display: flex; }
.capp-tl-date { width: 64px; flex-shrink: 0; padding-top: 2px; font-family: var(--font-mono); font-size: 10.5px; color: var(--text-muted); letter-spacing: 0.04em; }
.capp-tl-main { flex: 1; min-width: 0; position: relative; border-left: 2px solid var(--border-default); padding: 0 0 16px 14px; }
.capp-tl-entry:last-child .capp-tl-main { padding-bottom: 2px; }
.capp-tl-main::before { content: ""; position: absolute; left: -5px; top: 4px; width: 8px; height: 8px; border-radius: var(--radius-pill); background: var(--accent-orange); border: 2px solid var(--card-bg); }
.capp-tl-title { font-size: 13.5px; font-weight: 600; color: var(--text-primary); letter-spacing: -0.005em; }
.capp-tl-body { margin: 3px 0 0; font-size: 12.5px; line-height: 1.55; color: var(--text-secondary); }
.capp-tl-main .project-link { margin-top: 4px; }

/* ── (d) quote-wall ── */
.capp-quote-wall { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.capp-quote { margin: 0; background: var(--surface-2); border: 1px solid var(--border-default); border-left: 3px solid var(--accent-orange); border-radius: var(--radius-tight); padding: 14px 16px; }
.capp-quote-text { margin: 0; font-size: 13.5px; font-weight: 500; line-height: 1.6; color: var(--text-primary); }
.capp-quote-attr { margin-top: 10px; display: flex; flex-direction: column; gap: 1px; }
.capp-quote-name { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.02em; color: var(--text-secondary); }
.capp-quote-context { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.04em; color: var(--text-muted); }
.capp-quote-source { margin-top: 3px; font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.10em; color: var(--text-dim); }

/* ── (e) shared chrome: card status pill + owner-only stale badge ──
   cards and stat-row need no layout CSS of their own — they reuse the
   shipped .item-card and .summary-stats grammars verbatim (R5 / SPEC §3). */
.capp-status { display: inline-flex; align-items: center; padding: 1px 7px; border-radius: var(--radius-pill); font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; background: var(--surface-2); border: 1px solid var(--border-default); color: var(--text-muted); }
.capp-status[data-status="shipped"] { background: var(--accent-emerald-bg); border-color: var(--accent-emerald-edge); color: var(--accent-emerald); }
.capp-status[data-status="tinkering"] { background: var(--accent-amber-bg); border-color: var(--accent-amber-edge); color: var(--accent-amber); }
/* retired keeps the muted default — an honest, quiet state */
.capp-stale { display: inline-flex; align-items: center; gap: 5px; margin: 0 0 10px; padding: 3px 9px; background: var(--accent-amber-bg); border: 1px solid var(--accent-amber-edge); border-radius: var(--radius-pill); color: var(--accent-amber); font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; }
.capp-stale .material-symbols-rounded { font-size: 13px; }

/* ── (f) print (paginated portfolio modes) ──
   Custom panes inherit the shipped machinery for free: display:block via
   .section-pane, expand-all via .item-card rules, texture PNG swaps via
   .summary-band::before / .item-card::before. Rules below add ONLY the
   capp-specific deltas. Résumé modes need NOTHING here: body.print-doc-resume
   already hides .section-grid and every .section-pane — R11 holds by
   construction (verify at activation, §8). */
@media print {
  /* Print section label: human title, never the internal c-{app_id}.
     Equal specificity with the base attr(data-pane) rule — source order
     (this block is appended LAST) makes this one win. */
  .section-pane[data-pane^="c-"]::before { content: attr(data-capp-title); }
  /* R10: owner-only diagnostics never print, in any mode. */
  .capp-stale { display: none !important; }
  /* The shipped break-avoid list pins ALL .summary-band panels together —
     correct for the small Overview band, but a custom panel (8-row list, a
     6-cell gallery) can exceed one page, and an unbreakable over-page box is
     exactly the page-sized-blank-gap bug the shipped comments document.
     Let custom panels fragment; clone gives each fragment its border + bg. */
  .summary-band.capp { break-inside: auto; page-break-inside: auto; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
  /* Keep SMALL units intact (same philosophy as the shipped list). */
  .capp-row, .capp-cell, .capp-quote, .capp-tl-entry { break-inside: avoid; page-break-inside: avoid; }
  /* Belt-and-braces: break-inside:avoid is a request — an over-page timeline
     entry still fragments, and clone keeps its rail on every fragment. */
  .capp-tl-main { box-decoration-break: clone; -webkit-box-decoration-break: clone; }
  .capp-tl-updated { break-after: avoid; page-break-after: avoid; }
}
/* OPTIONAL DEGRADE (ship commented-out; flip only if activation print QA
   shows the timeline rail breaking pagination — SPEC §3's documented fail-soft
   "degrade to plain dated list"):
@media print {
  .capp-tl-main { border-left: 0; padding-left: 0; }
  .capp-tl-main::before { display: none; }
}
*/

/* ── (g) continuous single-page export (engine gated this release, kept
   conformant) — body classes, not @media print, same reasoning as shipped. ── */
body.print-continuous .section-pane[data-pane^="c-"]::before { content: attr(data-capp-title); }
body.print-continuous .capp-stale { display: none !important; }

/* ── (h) ink / showcase / published ──
   INK: because every capp rule above is token-driven, ink's token swap
   covers rails, dots, pills, chips and links with ZERO extra rules. The one
   exception is the same one the shipped template carves out: filter:grayscale
   is allowed ONLY on true raster images. */
body.print-doc-portfolio.print-style-ink .capp-img { filter: grayscale(1); }
/* SHOWCASE: generic coverage is already correct — the big section openers
   restyle the same ::before, and the flex-order elevation leaves custom panes
   in DOM order after the elevated Projects pane (exactly R14's reading
   order). Image-led work gets a touch more air. */
body.print-doc-portfolio.print-style-showcase .capp-gallery { gap: 10px; }
/* PUBLISHED (R10): owner-only diagnostics off on the live site. Custom tiles
   carry no integrity bar (Block T1), so the shipped .section-btn .integrity
   gate has nothing new to cover — the stale badge is the only capp diagnostic.
   ANY future capp diagnostic must ride this same flag (see the PUBLISHED-MODE
   CONTRACT comment in the shipped template). */
html[data-hope-mode="published"] .capp-stale { display: none; }

/* ── responsive (mirrors the shipped 640px breakpoint) ── */
@media (max-width: 640px) {
  .capp-gallery { grid-template-columns: repeat(2, 1fr); }
  .capp-quote-wall { grid-template-columns: 1fr; }
  .capp-tl-date { width: 52px; }
}
/* ═══ end CUSTOM APPS ═══ */
```

---

## 6. Block J1 — init-JS extension (R9 default-open)

Replaces the shipped default-open block (the `var overviewPane = …` paragraph). The priority chain is exactly R9's. `data-hope-default` values pass R1's grammar at compose time, so the attribute is selector-safe by contract.

```js
  // Default-open app (R9): Overview when its pane shipped (show_summary kept)
  // → else the pane named by data-hope-default="c-{app_id}" on the section
  // grid (stamped by the generator per the pack's emphasis order; never an
  // informal app — generator-enforced, R14) → else the markup's static
  // Experience fallback stands. Runs synchronously before first paint, so
  // there's no active-tab flash.
  var overviewPane = document.getElementById('pane-overview');
  var sectionGrid = document.querySelector('.section-grid');
  var defaultName = sectionGrid ? sectionGrid.getAttribute('data-hope-default') : null;
  var defaultPane = (!overviewPane && defaultName)
    ? document.querySelector('.section-pane[data-pane="' + defaultName + '"]')
    : null;
  var promotePane = overviewPane || defaultPane;
  if (promotePane) {
    var promoteName = promotePane.getAttribute('data-pane');
    document.querySelectorAll('.section-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-section') === promoteName);
    });
    document.querySelectorAll('.section-pane').forEach(function (p) {
      p.classList.toggle('active', p === promotePane);
    });
  }
```

No other JS changes. Verified against v0.6.2, not assumed: the section filter (lines 1787–1793) is attribute-generic; the card-expand handler (lines 1794–1799) binds on `.item-card[data-expand] .item-head` and covers L2 cards unchanged; the published-mode JS gate touches only photo affordances and needs nothing for custom apps.

---

## 7. DIFF-STYLE MAP — where every block goes in `assets/templates/portfolio.html`

Five seams + one replacement. Context lines (` ` prefix) are **verbatim** from the shipped v0.6.2 template — anchor on them, not on line numbers. `+` lines are the insertions (slot pairs shown; the per-app blocks of §3–§4 are composed into the slots at generation time, never shipped).

| Seam | Block(s) | Anchor (v0.6.2 line ≈) |
|---|---|---|
| **S1** | T0-a tiles slot | inside `.section-grid`, after the Projects tile (≈ line 978) |
| **S2** | T0-b panes slot | after the Projects pane, before the `RESUME VIEW` comment (≈ line 1275) |
| **S3** | T0-c TOC slot | inside `.print-toc-links`, after the Projects anchor (≈ line 891) |
| **S4** | C1 CSS bundle | end of the `<style>` element, after the last `body.print-continuous` rule (≈ line 800) |
| **S5** | J1 init-JS | replaces the default-open block (≈ lines 1775–1786) |

**S1 — tiles slot** (the closing tag of the Projects `<button>` and the grid's closing `</div>` are the anchors):

```diff
           <span class="integrity">
             <span class="bar-track"><span class="bar-fill" style="width: {{projects_pct}}%"></span></span>
             <span class="pct">{{projects_pct}}%</span>
           </span>
         </span>
       </span>
     </button>
+    <!-- HOPE:custom_tiles_slot -->
+    <!-- /HOPE:custom_tiles_slot -->
   </div>
 
   <!-- OVERVIEW PANE (opt-in, default-open) ========================= -->
```

**S2 — panes slot** (between the Projects pane's close and the resume view; custom panes land after every built-in pane → they print last among panes in DOM-order modes, satisfying R14's reading order):

```diff
     <!-- HOPE:projects_loop_end -->
     <a class="backtotop" href="#top" aria-hidden="true">↑ Contents</a>
   </div>
 
+  <!-- HOPE:custom_panes_slot -->
+  <!-- /HOPE:custom_panes_slot -->
+
   <!-- RESUME VIEW (print-only) ===================================== -->
```

**S3 — TOC slot** (R4; the Projects anchor and the `</div>` closing `.print-toc-links` are the anchors):

```diff
       <a href="#pane-certifications"><span class="toc-chip"></span>Certifications</a>
       <a href="#pane-projects"><span class="toc-chip"></span>Projects</a>
+      <!-- HOPE:custom_toc_slot -->
+      <!-- /HOPE:custom_toc_slot -->
     </div>
   </nav>
```

**S4 — CSS bundle** (append the whole of Block C1 directly before `</style>`; being last in source order is what makes the two `attr(data-capp-title)` overrides win their specificity ties — do not move this bundle earlier):

```diff
 body.print-continuous .summary-stats { gap: 14px 28px; }
 body.print-continuous .item-meta { flex-wrap: nowrap; gap: 10px; }
+
+/* ═══ CUSTOM APPS (capp-) ════════════════════════════════════════════════
+   …Block C1, §5 of this file, verbatim…
+/* ═══ end CUSTOM APPS ═══ */
 </style>
```

**S5 — init JS** (replace the shipped default-open block with Block J1; the surrounding handlers stay byte-identical):

```diff
   // Default-open app: Overview when its pane shipped (show_summary kept),
   // else the markup's static Experience fallback stands. This script runs
   // synchronously before first paint, so there's no active-tab flash.
-  var overviewPane = document.getElementById('pane-overview');
-  if (overviewPane) {
-    document.querySelectorAll('.section-btn').forEach(function (b) {
-      b.classList.toggle('active', b.getAttribute('data-section') === 'overview');
-    });
-    document.querySelectorAll('.section-pane').forEach(function (p) {
-      p.classList.toggle('active', p === overviewPane);
-    });
-  }
+  …Block J1, §6 of this file, verbatim (including its replacement comment)…
   document.querySelectorAll('.section-btn').forEach(btn => {
     btn.addEventListener('click', () => {
       const target = btn.getAttribute('data-section');
```

(Note for the S5 applier: J1's comment supersedes the three shipped comment lines shown above as context — replace from the `// Default-open app:` comment through the closing `}` of the `if (overviewPane)` block.)

**Deliberately NOT touched at activation** (verified against v0.6.2 — the shipped machinery already generalizes):

- Section filter + card-expand JS — attribute-generic, covers `c-*` sections and L2 cards unchanged.
- `body.print-doc-resume` rules — already hide `.section-grid` and all `.section-pane`s; R11 holds by construction.
- Showcase flex-order rules — custom panes ride the default `order: 2` in DOM order; nothing to add.
- Print TOC counters — CSS counters self-number new anchors; R12 needs no CSS change.
- The PUBLISHED-MODE CONTRACT block — Block C1 (h) extends it; the shipped gates are untouched.

---

## 8. Print & published behavior matrix (every new visual element, every mode — mistake-#4 gate)

| Element | Screen | Paginated portfolio print (classic) | Continuous | Ink | Showcase | Résumé modes | Published |
|---|---|---|---|---|---|---|---|
| Custom tile (`T1`) | in grid, orange active state | hidden (grid hidden) | hidden | hidden | hidden | hidden | shown; no integrity bar exists to gate |
| Custom pane shell (`T2`) | filtered by tabs | prints, labeled `attr(data-capp-title)` | prints on the tall page, same label | token-swapped monochrome | big section opener via generic ::before; DOM-late order | hidden (R11, by construction) | shown |
| `.summary-band.capp` panel | grid texture | texture = shipped PNG swap; **may fragment** (clone borders) | no fragmentation | texture killed by shipped ink rule | inherits | hidden | shown |
| `list` rows | hover tint | row-level `break-inside: avoid` | prints | tokens go monochrome | inherits | hidden | shown |
| `cards` (L2) | expand/collapse | expands via shipped `.item-card` rules; scanline PNG swap; clone | prints expanded | shipped ink card rules | shipped showcase card spacing | hidden | shown |
| `gallery-grid` cells | 3-col (2-col mobile) | 3-col static, captions visible, cell `break-inside: avoid` | prints | `grayscale(1)` on `.capp-img` only (raster-only rule) | wider gutters | hidden | shown |
| `timeline` rail + dot | rail + orange dot | entry `break-inside: avoid`; rail border solid (zero print shading); clone on fragments; commented degrade-to-list ready | prints | rail/dot go monochrome via tokens | inherits | hidden | shown |
| `.capp-tl-updated` (visitor-facing freshness) | shown | **prints** (`break-after: avoid` with its list) | prints | monochrome | inherits | hidden | **shown** (content, not diagnostic) |
| `quote-wall` | 2-col (1-col mobile) | quote `break-inside: avoid` | prints | accent rule goes monochrome | inherits | hidden | shown |
| `stat-row` | shipped Overview rendering | identical to Overview stats | identical | shipped ink hex rules | inherits | hidden | shown |
| `.capp-status` pill | colored by status | prints (token colors; glow-free) | prints | monochrome via tokens | inherits | hidden | shown |
| `.capp-stale` (owner diagnostic) | shown to owner | **hidden** (`@media print`) | **hidden** (body-class rule) | hidden (print) | hidden (print) | hidden | **hidden** (R10 gate) |

Zero-shading print budget check: Block C1 introduces **no gradients, no glows, no new shadows** — rails and dots are solid token fills; the only filter is the raster-bounded grayscale ink already sanctions.

---

## 9. Worked example 1 — the Interests app (list · informal)

Graph node: SPEC-custom-apps.md §5 (`csec:jane-doe-3a8f:interests`, layout `list`, `app_class: "informal"`, 3 items, `last_updated: 2026-06-10` — fresh, so no `capp_stale` badge; the conditional strips). One-home rule applies: with this app enabled the generator suppresses the Overview pane's quiet interests row. The user-facing MCQ that decides between the two homes lives in SPEC §5 — not here; this file owns markup only.

**Composed tile** (into the tiles slot, after any professional customs — informal renders last, R14):

```html
<button class="section-btn" data-section="c-interests" type="button">
  <span class="icon"><span class="material-symbols-rounded">interests</span></span>
  <span class="body">
    <span class="label">Interests</span>
    <span class="meta">
      <span class="count">3 interests</span>
    </span>
  </span>
</button>
```

**Composed pane** (into the panes slot; note: zero `{{` tokens, zero `<!-- HOPE:` markers survive — this is what the R18 grep enforces):

```html
<div class="section-pane" data-pane="c-interests" id="pane-c-interests"
     data-capp-layout="list" data-capp-class="informal"
     data-capp-title="Interests">
  <section class="summary-band capp">
    <div class="capp-list">
      <div class="capp-row">
        <span class="material-symbols-rounded capp-row-icon">print</span>
        <div class="capp-row-main">
          <span class="capp-row-primary">Letterpress printing</span>
          <span class="capp-row-meta">Vandercook SP-15 · prints a small poetry series</span>
        </div>
      </div>
      <div class="capp-row">
        <span class="material-symbols-rounded capp-row-icon">directions_run</span>
        <div class="capp-row-main">
          <span class="capp-row-primary">Trail running</span>
          <span class="capp-row-meta">2025 CCC finisher</span>
        </div>
      </div>
      <div class="capp-row">
        <span class="material-symbols-rounded capp-row-icon">auto_stories</span>
        <div class="capp-row-main">
          <span class="capp-row-primary">Sci-fi novels</span>
          <span class="capp-row-meta">annual Le Guin re-read</span>
        </div>
      </div>
    </div>
  </section>
  <a class="backtotop" href="#top" aria-hidden="true">↑ Contents</a>
</div>
```

**Composed TOC anchor:** `<a href="#pane-c-interests"><span class="toc-chip"></span>Interests</a>` — the counter renumbers itself.

Behavior walk: prints last among panes under the label "Interests" (not "c-interests"); absent from every résumé PDF (R11 by construction); never default-open (informal, R14); nothing owner-only to gate — fresh node, no stale badge. Specificity validator: every row carries a qualifying `item_meta` — "Trail running" alone would have been rejected at compose time.

---

## 10. Worked example 2 — designer Gallery app, "Selected visuals" (gallery-grid · professional)

Jane Doe (the fixture persona — *Senior Product Designer · Type & Systems*) after a Behance enrichment run (SPEC-enrichment.md §7). The CustomSection was proposed by the enrich skill and accepted:

```json
{
  "type": "CustomSection",
  "id": "csec:jane-doe-3a8f:visual-work",
  "app_id": "visual-work",
  "title": "Selected visuals",
  "icon": "photo_library",
  "layout": "gallery-grid",
  "app_class": "professional",
  "item_noun": "pieces",
  "last_updated": "2026-06-10",
  "items": [
    {"src": "career-graph/assets/enrichment/behance/198347163-meridian-design-system.jpg", "alt": "Cover of the Meridian design-system rebrand: modular type specimens on a cream grid", "caption": "Meridian design system · My role: lead designer", "href": "https://www.behance.net/gallery/198347163/meridian", "link_label": "On Behance"},
    {"src": "career-graph/assets/enrichment/behance/201559814-ledger-sans.jpg", "alt": "Ledger Sans type specimen poster, four weights stacked", "caption": "Ledger Sans · custom typeface, 4 weights"},
    {"src": "career-graph/assets/enrichment/behance/199284601-atlas-onboarding.jpg", "alt": "Atlas onboarding flow screens in sequence", "caption": "Atlas onboarding · My role: UX + visual design"},
    {"src": "career-graph/assets/enrichment/behance/202117458-broadside-series.jpg", "alt": "Letterpress poetry broadside in two inks", "caption": "Poetry broadsides · letterpress, Vandercook SP-15"},
    {"src": "career-graph/assets/enrichment/behance/200873342-forma-annual-report.jpg", "alt": "Forma 2025 annual report spread, charts in duotone", "caption": "Forma 2025 annual report · editorial design"},
    {"src": "career-graph/assets/enrichment/behance/203448921-sfmoma-wayfinding.jpg", "alt": "Wayfinding signage prototype mounted in a gallery corridor", "caption": "SFMOMA wayfinding pilot · My role: signage type"}
  ],
  "confidence": 0.90,
  "source": "web_enrichment",
  "created_at": "2026-06-10T10:00:00Z",
  "updated_at": "2026-06-10T10:00:00Z"
}
```

Designer-pack rule visible in the data: every collaborative piece carries a "My role:" clause in its caption. Items reference Project nodes via `item_ref` graph-side (e.g. `proj:jane-doe-3a8f:behance:198347163`) — note the ids never appear in the HTML below. Asset paths live in the graph; the HTML gets baked `data:` URLs (R16 — six covers at the registry's resize/quality settings land well inside its budget).

**Composed tile** (professional → renders before any informal tile):

```html
<button class="section-btn" data-section="c-visual-work" type="button">
  <span class="icon"><span class="material-symbols-rounded">photo_library</span></span>
  <span class="body">
    <span class="label">Selected visuals</span>
    <span class="meta">
      <span class="count">6 pieces</span>
    </span>
  </span>
</button>
```

**Composed pane** (data URLs elided with `…` for readability — the real artifact carries them in full; this app is also the designer pack's natural `data-hope-default="c-visual-work"` candidate, which the generator stamps on the `.section-grid` container, making Block J1 open it first when no Overview ships):

```html
<div class="section-pane" data-pane="c-visual-work" id="pane-c-visual-work"
     data-capp-layout="gallery-grid" data-capp-class="professional"
     data-capp-title="Selected visuals">
  <section class="summary-band capp">
    <div class="capp-gallery">
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4AAQSk…" alt="Cover of the Meridian design-system rebrand: modular type specimens on a cream grid" loading="lazy" />
        <figcaption class="capp-cap">
          <span>Meridian design system · My role: lead designer</span>
          <a class="capp-cap-link" href="https://www.behance.net/gallery/198347163/meridian" target="_blank" rel="noopener">On Behance</a>
        </figcaption>
      </figure>
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4BBRTl…" alt="Ledger Sans type specimen poster, four weights stacked" loading="lazy" />
        <figcaption class="capp-cap">
          <span>Ledger Sans · custom typeface, 4 weights</span>
        </figcaption>
      </figure>
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4CCSUm…" alt="Atlas onboarding flow screens in sequence" loading="lazy" />
        <figcaption class="capp-cap">
          <span>Atlas onboarding · My role: UX + visual design</span>
        </figcaption>
      </figure>
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4DDTVn…" alt="Letterpress poetry broadside in two inks" loading="lazy" />
        <figcaption class="capp-cap">
          <span>Poetry broadsides · letterpress, Vandercook SP-15</span>
        </figcaption>
      </figure>
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4EEUWo…" alt="Forma 2025 annual report spread, charts in duotone" loading="lazy" />
        <figcaption class="capp-cap">
          <span>Forma 2025 annual report · editorial design</span>
        </figcaption>
      </figure>
      <figure class="capp-cell">
        <img class="capp-img" src="data:image/jpeg;base64,/9j/4FFVXp…" alt="Wayfinding signage prototype mounted in a gallery corridor" loading="lazy" />
        <figcaption class="capp-cap">
          <span>SFMOMA wayfinding pilot · My role: signage type</span>
        </figcaption>
      </figure>
    </div>
  </section>
  <a class="backtotop" href="#top" aria-hidden="true">↑ Contents</a>
</div>
```

**Composed TOC anchor:** `<a href="#pane-c-visual-work"><span class="toc-chip"></span>Selected visuals</a>`.

Behavior walk: screen — 3-col grid on the textured panel, captions always visible, the one external piece links via a worded anchor in its caption. Paginated print — static 3-col grid under the label "Selected visuals", each cell unbreakable, panel free to fragment between rows with cloned borders. Ink — covers go grayscale (the only capp ink rule), captions/borders monochrome via tokens. Showcase — same grid with wider gutters, full color, after the elevated Projects pane. Résumé PDFs — absent entirely. Published — identical to local view (nothing owner-only in this app; the node is fresh, so no stale badge existed to gate). Gallery-grid is not time-bound under R15, so it never triggers the 180-day omission.

---

## 11. Verification — mental validation done now; produce-and-inspect at the gate

**Validated mentally against the live template's disciplines while authoring (this cycle):**

1. **Token-only:** Block C1 contains zero raw color literals — grep it for `#` outside comments and for `rgba(`: both come back empty. Every visual value is `var(--token)` or a structural px/weight.
2. **Specificity ties resolved by design:** both `attr(data-capp-title)` overrides tie their base rules (0,2,1 and 0,3,1 respectively) and win on source order — which is why §7 pins the bundle to the END of `<style>` and the matrix calls it load-bearing.
3. **Fragmentation:** the shipped `.summary-band` break-avoid would reintroduce the documented page-gap bug on over-page custom panels; C1 (f) overrides it for `.capp` panels with `break-inside: auto` + `box-decoration-break: clone`, while small units keep `break-inside: avoid` — the same big-containers-break / small-units-hold philosophy as the shipped block.
4. **Zero new print shading:** no gradients, glows or shadows added; rails/dots are solid fills; grayscale is raster-bounded per the shipped ink rule.
5. **By-construction gates re-checked in source:** résumé modes hide `.section-grid` + all `.section-pane`s (R11); section-filter and card-expand JS are attribute-generic; CSS TOC counters self-number (R12).
6. **Selector collision check:** `[data-pane^="c-"]` matches no built-in pane (`certifications` starts `ce`); R1 reserves built-in ids so this stays true.

**Produce-and-inspect at roadmap-PR time (ACTIVATION.md "Pre-activation verification" — prose alone doesn't count for markup):** render a **throwaway** HTML copy — shipped template + S1–S5 applied by hand + the two §9/§10 composed examples — open it locally, check both themes, toggle persistence, tab filtering into both custom panes, print preview (paginated: labels read "Interests"/"Selected visuals", cells/rows hold together), and a `data-hope-mode="published"` copy with a forced `capp_stale` badge to confirm the gate. Delete the throwaway; it must never enter `assets/templates/`.

**At activation (ACTIVATION.md step C, the binding gate):**

1. Generate Jane Doe with the Interests app on → grep zero `{{` and zero `<!-- HOPE:` (the base grep alone catches every marker including `project_skills_loop` reuse; R18's named list — incl. `HOPE:custom_toc_slot` — makes the failure modes explicit).
2. Generate with zero custom apps → all **three** slot pairs stripped, byte-identical grid to pre-activation.
3. Every composed custom pane carries a non-empty `data-capp-title` and every `.capp-img` a non-empty `alt` (both `attr()`-dependent or contract-mandatory — empty means an invisible print label or a broken accessibility contract).
4. `verify_portfolio_pdf.py --modes resume-classic` → PASS, and confirm no custom-app content in the résumé output (R11).
5. Eyeball portfolio print in both themes; if timeline rails fragment badly, flip the commented degrade block in C1 (f) — that's its documented purpose.
6. Published copy: stale badge and any future capp diagnostics gone (R10).
