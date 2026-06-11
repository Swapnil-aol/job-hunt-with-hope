# Composition — devrel pack · Kenji Sato

Pack row: [`../../SPEC-role-packs.md`](../../SPEC-role-packs.md) §3 **devrel**. Pack proposes, Kenji disposes — everything below passed the offer MCQ (spec §2).

## Apps enabled

| App | Layout · class | Content for Kenji |
|---|---|---|
| Talks & podcasts | `list` · professional — **lead, default-open (R9)** | Signature item pinned first ("Postgres for app devs" — 3 bookings, 18 months), then by date; each entry title + event + year + worded video link; videos are baked thumbnails linking out, never downloaded |
| Recent posts | `timeline` · professional | Blog feed, date-stamped; last post 2026-05 — fresh enough to ship |
| /uses | `list` · informal | Tooling page with `last_updated` mandatory (R15) — stale and it's omitted with a refresh offer, not shipped |

Sources: YouTube oEmbed + channel RSS, GitHub, blog RSS (pack row). GitHub renders prominently in the contact line — the field's canonical platform (spec §4).

## Above-the-fold order (per the demand-side scan)

No dedicated devrel study — inherits the engineer scan (GitHub, ~90s, only if linked) and the writer recency norms. So:

1. **Hero**: name · "DevRel — Postgres for app developers" · GitHub + YouTube links worded, not iconified
2. **Talks & podcasts** (default-open): signature items first — public footprint over résumé
3. **Projects** (httpcheck, blog — both dated) → **Experience** → **Recent posts** → **/uses**

## Demand-side fidelity

- **Shortlist signals honored**: public footprint with dated, recent output (blog metric carries `last post 2026-05`); canonical-platform link present and prominent; one named specialization, not a topic buffet.
- **Bin signals avoided**: no stale "Recent posts" (R15 gate enforced — omit + offer refresh over shipping stale); no breadth-without-specialization (Postgres-for-app-devs is the whole hero claim).

## Extrapolation notes — what Hope generalizes vs what is Kenji's

1. **Generalizes**: talks-list-first emphasis with 1–3 signature items pinned; baked-thumbnail-link video treatment (self-contained rule, iframe only as progressive enhancement); the recency date-stamp on every public-output surface.
2. **Generalizes**: the R15 staleness gate on /uses and Recent posts — applies to every devrel persona, hardest of any pack.
3. **Kenji-specific**: the engineer-credibility spine (4 years shipping APIs, OSS stars). A devrel who came from community management leans on event + content metrics instead — Hope reweights, not refuses.
4. **Kenji-specific**: "docs PRs merged" as a counterweight metric — generalizes only where the contribution history actually exists on the linked GitHub.
5. **Kenji-specific**: one signature talk with repeat bookings. With no clear signature item, the list is purely date-sorted — Hope must not anoint a "signature" the user didn't claim.
