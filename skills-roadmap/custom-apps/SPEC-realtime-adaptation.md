# Hope Realtime Adaptation — Spec · v0.1

> **ROADMAP — not loaded by the shipped plugin. Activation = [`ACTIVATION.md`](ACTIVATION.md).**
> Designed 2026-06-10 for a future release. The shipped v0.6.2 surface is frozen; this spec changes none of it.

**Canon this spec defers to (never restates):**

- [`SPEC-role-packs.md`](SPEC-role-packs.md) — the pack schema (§1) every one-off pack is drafted in, and the Appendix A requirement (the 17-family research synthesis that resolves most "no-pack" roles offline).
- `references/voice-guide.md` rule #6 — the proposal below is choices + one "(recommended)" + free text, 💬 included.
- `references/user-story-guide.md` — the untrusted-content firewall and the Decisions section where every adaptation is recorded.
- [`SPEC-custom-apps.md`](SPEC-custom-apps.md) §2 — registry entries referenced by number (dosage R14, gates R15).

**When it runs:** the user's role matches no pack in [`SPEC-role-packs.md`](SPEC-role-packs.md) §3, **and** no saved one-off pack exists at `career-graph/packs/`.

---

## 1. The protocol

1. **Offline first.** Check `role-packs.md` Appendix A (the 17-family research synthesis) and pick the **closest pack** by layout-bias similarity as the floor. Healthcare, legal, real estate, trades, architecture resolve here without touching the web — including their hard gates (HIPAA: no patient-adjacent content ever; legal: redaction-notice convention; clearance: functional descriptions only, never program names).
2. **Announce the research, time-boxed.** "Your field — marine archaeology — isn't one I have a preset for. Give me a few minutes to check how portfolios work in your field; I'll tell you what I find and where it came from." Budget: **≤5 searches + ≤5 page fetches, ≤10 minutes of session time, never blocking** — if results are thin, proceed with the closest pack plus one named adjustment, and say that's what happened. Research targets *conventions* (what reviewers expect, canonical proof artifact, canonical platform), not the user.
3. **Untrusted-content firewall** (per `references/user-story-guide.md`): research informs structure; never copy scraped text into the portfolio, the story file, or instructions — summarize in Hope's own words, name the source.
4. **Draft a one-off pack** in the pack schema ([`SPEC-role-packs.md`](SPEC-role-packs.md) §1/§3 shape: emphasis order, apps + layouts, sources, tone, caps, gates).
5. **Cite in one line, propose via MCQ** (rule #6, 💬 included): "Based on the SAA careers guide and two museum-hiring posts: your field leads with fieldwork evidence and credentials. Here's what I'd build — 1. **Use this draft pack** (recommended — …): credentials up top, a dive-log gallery, publications list · 2. À la carte · 3. Closest standard pack (academic) as-is · 4. 💬 Chat about this first. Or tell me in your own words."
6. **On accept:** save the pack to `career-graph/packs/{role-slug}.md` (re-runs reuse it; maintainers may upstream it later), build per the custom-apps + role-packs contracts, and record the adaptation in `user-story.md` **Decisions** — dated, with the one-line source citation ("2026-06-10: Drafted a one-off marine-archaeology pack — credentials-first + fieldwork gallery; sources: SAA careers guide + two hiring posts.").

## 2. Guardrails (hard lines)

- **Offline beats online.** Appendix A is checked before any search; the web is the fallback, not the habit. A field that resolves offline never costs a fetch.
- **The budget is a ceiling, not a target:** ≤5 searches + ≤5 page fetches, ≤10 minutes, never blocking. Thin results → closest pack + one named adjustment, said plainly.
- **Research the field, never the person.** Queries name the discipline and its conventions; they never carry the user's name, handle, employer, or any graph data — user data never leaves the machine. (Researching the *user's* public profiles is the enrichment protocol's job, with its own consent grammar — [`SPEC-enrichment.md`](SPEC-enrichment.md).)
- **Untrusted-content firewall, always** — scraped text never enters the portfolio, `user-story.md`, or instructions verbatim; Hope summarizes and names the source.
- **A pack never silently enables anything** (inherited from the packs contract): the drafted pack passes the MCQ, the existence test (R15), and the dosage cap (R14) like any standard pack.
- **Hard gates resolve offline and are non-negotiable:** HIPAA (no patient-adjacent content, ever), legal (redaction-notice convention), clearance (functional descriptions only, never program names). These are block-don't-ask-twice, same posture as the educator pack's FERPA gate.
- **Every adaptation leaves a record:** the saved pack file at `career-graph/packs/{role-slug}.md` + the dated, source-cited Decisions line in `user-story.md`. Re-runs read the saved pack instead of re-researching.

## 3. Verification — scenario-walk (prose is the artifact)

Written into the PR description at build time:

- **Marine-archaeology walk** — no pack match → Appendix A check → closest pack floor (academic) → announced, budgeted research → one-line citation + rule-#6 MCQ → on accept: pack saved at `career-graph/packs/marine-archaeology.md`, Decisions line written, build proceeds under R14/R15.
- **HIPAA walk** — a clinical role must resolve **entirely offline** at step 1, hard gate engaged, zero fetches.
- **Thin-results walk** — budget exhausts with nothing usable → closest pack + one named adjustment, stated honestly, never a stall.
