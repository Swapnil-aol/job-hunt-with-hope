# Appendix A — 17-Family Role Research Synthesis (committed home)

> **ROADMAP — not loaded by the shipped plugin. Activation = [`ACTIVATION.md`](ACTIVATION.md).**
> This file is the **committed home** of Appendix A — the 17-family research synthesis from the 2026-06-10 design cycle, with its source list. It lives here, tracked in the repo, so a **fresh clone can run activation**: gitignored workspace notes are not a carriable source. ACTIVATION.md step A2 carries this file's content **verbatim** into the merged `references/role-packs.md`, where the realtime-adaptation protocol's offline-first step reads it at runtime; the file is then deleted (ACTIVATION.md step A3 — the shipped file becomes Appendix A's only home).

**What this file holds (indexed by [`SPEC-role-packs.md`](SPEC-role-packs.md) §5; consumed by [`SPEC-realtime-adaptation.md`](SPEC-realtime-adaptation.md) §1 step 1):** the role-taxonomy table covering the 17 researched families — per family, the closest standard pack by layout-bias similarity, the field's canonical proof artifact and canonical platform, and any hard gates — plus the synthesis's source list; and the **"Demand side" section** (complete, no placeholder) — the hiring-side evidence base behind the both-ends rule, the pipeline lens, and the per-pack demand-side table in `SPEC-role-packs.md`, with its own source list. The HIPAA (no patient-adjacent content, ever), legal (redaction-notice convention), and clearance (functional descriptions only, never program names) hard gates resolve **offline** from this table; their normative statements live in `SPEC-realtime-adaptation.md` §1–§2 and are not restated here.

---

## The synthesis (TO-FILL — content dependency)

<!-- TO-FILL: appendix-a-17-family-synthesis -->
**This placeholder is an activation gate (ACTIVATION.md §0).** The 17-family role-taxonomy table and its source list exist only in the 2026-06-10 design-cycle session notes, which are gitignored workspace material. Whoever holds those notes pastes the synthesis here **verbatim** — table plus source list — then deletes this marker block. The activation runbook must not run while this marker is present: without the synthesis, the realtime-adaptation protocol's offline-first step (and the offline resolution of the HIPAA / legal / clearance hard gates for healthcare, legal, real estate, trades, and architecture roles) has no data to resolve against.
<!-- /TO-FILL -->

---

## Demand side — how the hiring side screens (merged research, 2026-06-11)

The demand-side complement to the 17-family synthesis above: how sourcers, recruiters, and hiring managers actually read portfolios and work samples, per field and per context. **This section is the evidence base for the both-ends rule, the pipeline lens, and the per-pack demand-side table in [`SPEC-role-packs.md`](SPEC-role-packs.md)** — those stay tight and cite here for depth. This section travels with the rest of the file into `references/role-packs.md` at activation (ACTIVATION.md step A2). Unlike the synthesis above it carries no placeholder marker — it is complete as written.

### Demand constants (true for every role family)

1. **Triage is seconds, not minutes.** Resume/hero scan: 7.4s (Ladders eye-tracking, 30 recruiters) to ~11.2s (InterviewPal 2025, 312 recruiters); UX portfolio rejection possible at ~30s; GitHub gets ~90s max; demo reels decided in 10s often on mute; exec recruiters decide in <30s (Korn Ferry via Career Steering); academic files get ~1 min against 200–1000 applicants. The deep read (5–15 min) only happens if the artifact survives the first speed.
2. **Front-load Problem / My Role / Outcome.** Reviewers never scroll to the bottom in pass one. Outcome numbers belong in headlines, process belongs behind progressive disclosure.
3. **Curation is itself scored.** 3–5 case studies (design/PM/clips), 2–4 pinned repos, 8–12 creative projects, 60–90s reels. Volume reads as inability to self-edit; choice paralysis makes reviewers disengage.
4. **Universal bin triggers:** typos, broken/password-walled links, no stated problem or personal role, no metrics, archives instead of curation (bare Behance/Dribbble links often go unclicked), and any misrepresented work — bootcamp/capstone passed off as client work is an instant disqualifier (reviewers recognize the standard prompts).
5. **Tailoring-to-the-reviewer is the strongest single cross-field signal.** Generic heroes, generic cover letters, off-beat clips, and wrong-domain case studies are binned first. Reviewers screen for "what it's like to work with you," not raw talent.
6. **Correct withholding is a competence signal.** In NDA/regulated contexts, demand-side reviewers read disciplined anonymization (category + problem + quantified outcome, synthetic data, "here's the layer I can discuss") as professionalism — and over-sharing as disqualifying.

### The pipeline — four layers, what each needs from the same page

- **Layer 0 — ATS/algorithm (before any human):** filters on exact-match keywords, titles, gap length, knockout questions. HBS/Accenture "Hidden Workers": ~27M qualified US workers auto-excluded; ~49% of employers' systems auto-reject 6-month+ gaps. Implication: the resume/profile feeding the ATS must carry exact-match vocabulary and machine-visible gap explanations — the portfolio link only matters if the document survives this layer.
- **Layer 1 — Sourcer (outbound scout):** confirms baseline alignment + interest from public profiles in one screen. Needs **instant identity legibility**: who you are, what you do, at what level, for whom — readable from the headline/hero without a click. Role packs must make the hero answer all four.
- **Layer 2 — Recruiter (screen, often a non-specialist):** 7–11s F-pattern skim; ~80% of gaze lands on six elements (name, current title+company, previous title+company, dates, education); checklist-matches brand names, titles, skills against the intake spec; **cannot evaluate craft** and "spots generic phrasing instantly." Rejection drivers are layout-level: clutter, multi-column, no white space, missing section headers. Role packs must put the spec-matching keywords and level signals where the F-pattern lands.
- **Layer 3 — Hiring manager (the only judgment reader, still time-poor):** ~2–3 min headline scan, then a deep read only if earned (max ~15 min pre-interview; ~30:1 candidate-effort-to-review-time ratio). Reads for problem framing, your specific role, constraints, trade-offs ("what isn't in the design and why"), messy process, measured outcome. May themselves be a non-specialist (PM, founder) — wants problem-solving, not a lesson in the discipline.
- **Falls out of this:** one single-page portfolio must serve three read modes — a 7-second skim (identity + level + brands + keywords above the fold), a 2–3 minute scan (case-card headlines carrying outcomes), and a deep-read path (process, trade-offs, role specifics inside expandable sections). Context splits modulate WHICH evidence sits at each depth, never the three-layer structure.

### Per-field demand evidence — the merge table

One row per researched role family or industry variant. The "emphasis adjustments" column is the demand-side instruction for a single-page portfolio — what moves above the fold.

| Role family / industry variant | First-30-seconds scan | Shortlist signals | Bin signals / red flags | Demand-side emphasis adjustments — single-page portfolio | Seniority modulation notes | Sensitive-industry notes |
|---|---|---|---|---|---|---|
| **Design (UX/product) — baseline** | ~6–8s on hero (name, designer type, level); first case title + first visual judged in 0–3s for business impact; recruiter keyword-matches hero ("B2B SaaS", "design systems"); rejection possible at 30s; About read only after work impresses | 3–5 scannable case studies with messy process (problem, role, constraints, iterations, research→decision); ≥1 shipped project; impact metrics; explicit role/timeline/collaboration (NN/g 204-HM survey) | Final mockups with no "why" (the #1 red flag); bare Dribbble/Behance link (often unclicked); typos, pixelated images, password walls; generic "passionate about design" hero; portfolio whose own UX is bad; unsolicited redesigns; capstone passed as client work | Hero = identity + domain keywords matching target req; first case card opens expanded with Problem/Role/Outcome in the header; strongest metric as hero stat badge; the page's own usability is part of the evaluation | Junior: process over polish, 2–4 curated projects, concision scored, learning velocity. Senior: trade-offs, "what I left out and why", craft detail (typography/spacing/states), impact deltas mandatory | NDA work: category+problem anonymization with quantified outcome shortlists; bare "NDA, can't share" pages bin; sanitized-with-permission and password-protected case studies accepted |
| Design · **agency** | CD flips visuals fast; weakest piece sets the floor; idea + craft judged in seconds | Range + conceptual spark across brands/mediums; 8–12 stellar projects; awards, notable clients; spec/passion work welcome | 30 mediocre pieces; no self-editing; single-style monotony (reads "hard to direct") | Visual grid leads; breadth + polish over process essays; show only the stellar tier | Junior agency hires lean hardest on raw portfolio spark | — |
| Design · **in-house** | Hero scanned for domain keywords matching the company's space | Depth in one brand/domain over time; design-system + roadmap ownership; PM/eng collaboration | Disconnected one-off campaigns; no sustained-ownership evidence | Lead with the longest-held brand/system; frame tenure and ownership in card headlines | Senior in-house = system stewardship metrics, not campaign count | — |
| Design · **startup** | Looks for "shipped" + user impact in first case title/visual | Versatility, shipped MVPs, fast iteration, scrappy full-stack range (research→UI→some front-end) | Over-polished decks with no shipping evidence; rigid single-specialty framing | "Done not perfect" framing; ship-speed and outcome per project above the fold | Range is a feature at every level here | — |
| Design · **enterprise** | Recruiter keyword-matches "design systems", "B2B", enterprise domain terms in hero | Scale + constraint navigation: system adoption metrics, stakeholder management across orgs, accessibility/compliance rigor | Green-field-only work; no evidence of legacy/approval-layer navigation | Adoption metrics and org-scale numbers as hero stats; constraint narratives in depth sections | Seniority inferred from scope (org count, system reach), not years | Compliance fluency in copy is itself a signal |
| **Engineering — baseline** | ~90s max on GitHub, only if linked: profile README → pinned repos → one repo README → maybe commit log | 2–4 pinned repos telling a story; READMEs with problem/approach/results; tests + CI; commit history showing collaboration + sustained return-visits; OSS PRs to known projects (strongest GitHub signal); personal projects top-3 decision factor for 37% of HMs (HackerRank) | Green-square streaks as the pitch; walls of forks/tutorial clones unexplained; repo-count padding; half-finished tutorials | Profile README is the hero section; curate pins ruthlessly; link GitHub only if it actively helps; recency and return-rhythm > volume | Junior: documentation quality is the junior/senior separator; growth velocity. Senior: scope and system narratives over artifact count; accomplishments weighted over raw skill | See variant rows — sensitive industries replace the public-code expectation entirely |
| Engineering · **startup** | Quick GitHub glance: pinned repos, READMEs, recency; portfolio site walk-through helps non-traditional candidates | Live demos, shipped side projects, credible active GitHub | Tutorial clones; claims with no running artifacts | Embed live-demo links in card headers; artifacts substitute for pedigree | Strongest channel for juniors/career-changers | — |
| Engineering · **FAANG/big tech** | Recruiter skims resume keywords; GitHub glanced by 60–80% but rarely decisive (<5% of rejections for sparse GitHub) | Strong resume signal; OSS contributions to well-known projects as tie-breaker | Rarely binned on portfolio — failures happen at DS&A/system-design interviews | Portfolio is bonus-only; spend the page on resume-grade signals (titles, scale, brands); don't over-invest in artifact depth | Interview performance is the gate at all levels | — |
| Engineering · **gov/defense** | Scan for clearance level + required tech keywords verbatim; plain ATS-safe formatting | Clearance stated up front; keyword-dense skills summary before history; generalized scope/stack/team; OPSEC discipline in descriptions ("here's the layer I can discuss") | ANY classified detail (disqualifying, clearance-threatening); fancy formatting that breaks legacy ATS | Clearance line above the fold; abstracted-scope case cards; no public-code section needed | Seniority = program scope + clearance tier, not artifacts | Empty GitHub normal and unpenalized; correct withholding read as positive competence signal |
| Engineering · **healthcare** | Scan for compliance vocabulary + relevant systems (EHR, HL7/FHIR) | PHI-scrubbed synthetic-data case studies; fluency in HIPAA minimum-necessary, role-based access, audit logs | Any visible PHI (all 18 HIPAA identifiers); privacy naivete | Redaction quality IS the domain-competence demo — state "synthetic data" explicitly on every screenshot | — | The redaction itself demonstrates the job skill; over-sharing disqualifies |
| Engineering · **finance/banks** | Resume keyword match on stack + domain (payments, risk, trading) | Abstracted system narratives — scale, latency, regulatory constraints; OSS only where policy permitted | Client identities, MNPI-adjacent specifics; expecting code show-and-tell from bank veterans | Architecture/outcome narratives replace code samples; quantify scale and latency in headlines | Senior = system + regulatory scope | Institutional OSS reluctance is priced in (FINOS); no public-code expectation |
| **Product management** | Reviewer skims first case study's header block only; rarely reads >3–4 case studies, never to the bottom | 3–4 case studies front-loading Problem / My Role / Key Outcomes; embedded real artifacts (Figma, Miro, redacted PRDs, interview clips); named trade-offs and frameworks; specific metrics ("15% WAU", "$2M ARR") | "Improved engagement" vagueness; feature lists with no business outcome; process description without artifacts; >4 long case studies | Outcome numbers in card headlines and hero stats, never in conclusions; redact-and-show beats describe; cap at 3–4 cards | Junior: ambiguity navigation + frameworks on small scope. Senior: org-level metrics. Exec: leadership narrative — project artifacts dilute | Redacted/sanitized-with-permission artifacts are the accepted norm; label them as redacted |
| **Data science / analytics** | Recruiter checks project titles for real-world vs toy problems, then opens ONE README; no README = no further look | READMEs answering what problem / what data / why this approach / results + limitations; end-to-end incl. dirty data wrangling; varied techniques; "what didn't work" section; stakeholder-communication evidence; code behind every claim | Kaggle-only portfolio; Titanic/MNIST/iris; every project starts at modeling (no wrangling — the real 60–80%); one-hammer technique; case study without code; misrepresented work = instant DQ | Problem-finding in card titles; the unglamorous pipeline work is the credibility signal; link code from every claim; limitations section reads senior | "What didn't work" = senior honesty; junior = fundamentals end-to-end on one real problem | Employer data never shown — public/synthetic datasets only; in healthcare/finance, apply the respective redaction regimes |
| **Writing · newsroom** | Editor reads the pitch first, clips second; clicks 1–2 links max; judges fit-to-publication in the first paragraph; checks outlet credibility of top clips | 2–3 (max 5) bylined clips matched to the exact beat/genre; error-free prose with voice; pitch with an angle + why-readers-care; familiarity with the publication; clips linked directly in the pitch | Clip dumps; off-beat/irrelevant samples; "I like this thing" pitches with no argument; making the editor hunt; any errors | Relevance beats prestige — a niche clip in the target genre outranks a big-name clip in the wrong one; curation reads as editing judgment; the pitch IS the work sample | Senior = beat depth + sourcing track record | Doing journalism + content marketing accepted by nearly all editors (documented holdouts: some NYT/WSJ editors) |
| Writing · **content marketing** | Skim for brand names, formats, results numbers | Clips PLUS business outcomes (traffic, conversion, SEO); versatility across formats; hosted portfolios (Clippings.me etc.) accepted | Outcome-free samples; no audience/funnel awareness | Add commercial metrics on top of craft; numbers in card headlines | Senior = funnel/strategy ownership, not just production | — |
| Writing · **UX writing / content design** | Reviewer looks for before/after framing + problem statement in the first study | Mini case studies: problem, reasoning behind word choices, before/after screens, UX-principles fluency; "what I needed to learn" framing rewarded; prior-career samples welcomed | Bare copy samples with no rationale; no product context | Process narrative is mandatory — clips alone insufficient; before/after pairs as the card visual | Junior reframes from adjacent careers are explicitly accepted | — |
| **Academia** | ~1 min/file against 200–1000 apps: cover-letter tailoring check → CV (pubs, pipeline, teaching) → only requested materials; "grab them in the first minute or you're toast" (Kelsky) | Tailored letter naming the department's needs; active research pipeline ("forthcoming/in-progress" momentum); teaching evidence with evaluations; complete file, exactly what was requested | Generic cover letters (binned first); incomplete files/missing letters; unaddressed gaps; unrequested attachments (skipped entirely — one candidate's 13 files unread) | Two-way fit above the fold: research AND teaching alignment with THIS department; pipeline momentum beats static totals; send exactly what's requested via the page, nothing more | Early-career = pipeline trajectory; senior = established record + service/leadership | — |
| **Marketing** | Scans for numbers and brand names first; problem–solution–results structure decides whether anything else gets read | 3–6 case studies as problem → strategy → measured change ("organic traffic +60%"); channel range (SEO, paid, email, content); analytics screenshots; client/manager quotes as social proof | Deliverable galleries with zero numbers; mock work passed off as client work; ten weak samples instead of three strong | What changed > what was produced; analytics screenshots as card visuals; testimonial quotes carry outsized weight; label spec/mock work honestly | Junior = channel execution proof; senior = strategy + budget scale | Freelance cut: niche + NAMED testimonials + explicit services (see context modulators) |
| **Sales** | Pre-screen is resume only: titles, quota %, progression; the brag book is deployed LIVE in-interview at the moment performance is questioned | Brag book: 3 years of numbers, stack rankings, quota-attainment records, President's Club awards, performance reviews — tabbed, retrievable in seconds; W2-grade verifiable evidence (hiring = risk-reduction) | Unverifiable quota claims; resume superlatives with nothing behind them; disorganized evidence that can't be produced on demand | Quota %, rank, and award stats as hero badges; structure the page as a verification artifact for the interview moment ("may I show you my numbers?"), not an aesthetic showcase | Senior = multi-year attainment + team/territory scale | Comp/W2 evidence is personal — surface in-interview, not on a public link; anonymize client/account names in regulated verticals [inference from regulated-industry rule] |
| **Education (K-12)** | Principal flips to student-impact evidence + classroom artifacts; portfolio gets minutes — the demo lesson is the real screen | Student achievement/growth/engagement data; self-created materials; classroom photos/video showing student interaction; behavior-management plan; demo lesson with presence, before/during/after assessment, reflection, adaptability | Certificate-and-stock-template portfolios with no student outcomes; demo lessons without assessment; inability to say what you'd do differently | The portfolio earns the demo lesson; the demo lesson decides. Show students learning, not teacher credentials — impact data as hero stats, artifacts in depth cards | Junior = student-teaching evidence + reflection quality; veteran = longitudinal growth data | Student-identifying media needs consent/blur — apply the correct-withholding-as-competence rule [inference; not directly sourced] |
| **Consulting** | 7–11s resume pass (ex-McKinsey screeners): visual structure → school/company/title prestige → first bullet of most recent role — weak first bullet and the screener stops | Dense quantified bullets; credential markers; steady progression; if portfolio exists: 3–5 anonymized case studies with credible specificity ("F500 healthcare, −22% operational cost") + frameworks + role | Paragraph bullets; "responsible for…" unquantified language; cluttered layout; NDA-breaking material (trust-killer); bare "can't share, NDA" placeholder pages | No portfolio culture — the case interview is the work sample; spend the page on quantified-impact bullets and the credential line; anonymized outcome cards only as supplement | Senior = engagement scope + client-relationship ownership; exec = practice-building narrative | NDA handling is the core craft: category+problem anonymization, sanitized-with-permission, password-protected selective sharing; internal reputation channels run in parallel |
| **Media/creative (reels, books)** | Decision in the first 10 seconds of the reel, frequently watched on mute; CD disengages the moment a book feels uncurated | Best 10 seconds FIRST; 60–90s total; mute-proof; 8–12 stellar projects in a book; client-approved real work (proves revision-cycle survival); range across styles; contact info last | Long reels burying the best shot; 30-project choice-paralysis books; all-spec work; one-style lock (reads "hard to direct") | Sequencing is everything — the opening shot is the interview; one brilliant clip beats minutes of good; autoplay-muted-safe embed above the fold | Junior reels lean on craft moments; senior books lean on client work + range = directability | Client work shown per release/approval norms; spec work labeled as spec |

### Cross-cutting context modulators (apply to any role family row)

- **Seniority** (also per-row in the table): junior = process-over-polish, learning velocity, documentation, concision itself scored; mid/senior = judgment — trade-offs, named role, "what I left out and why", impact deltas mandatory; executive = leadership narrative with org-level outcomes (P&L, growth, M&A, team-at-scale) — project-level artifacts actively dilute; board variant reframes operator → governance/fiduciary.
- **Career-changer:** 2–3 real projects IN the target field beat certificates every time; explicit old-skill→new-requirement mapping de-risks the hire; target-field vocabulary must be front-loaded to survive Layer 0; work-sample channels are the structural opening (70%+ of employers rate skills-based methods above resumes — TestGorilla).
- **Return-to-work (6mo+ gap):** the gap WILL be seen (dates are a top-6 gaze element); unexplained gaps cut interviews ~45% (ResumeGo, 36,500 applications); explained gaps recover ~60%, education/training reason converts best; explanation must be machine-visible, and in-gap dated work counters the "less committed" prior.
- **Freelance/contract vs FTE — same person, two cuts:** freelance/contract pack = niche specialization, 5–6 same-type projects, challenge→strategy→results with metrics + NAMED testimonials, explicit services and engagement path, speed-to-productivity (social proof substitutes for the interview pipeline); FTE pack adds trajectory, collaboration, growth — dimensions contractors are never scored on.
- **Geography:** Germany — the legally enforceable Arbeitszeugnis layer carries the weight US portfolios carry; portfolio is a supplement inside the formal Bewerbung. Japan — dual-resume system; creativity in the rirekisho is actively NOT appreciated; accomplishments live in the shokumukeirekisho. US federal — USAJOBS accepts no PDF portfolio attachments; 2-page keyword-literal resume with the portfolio as a link only. US private sector remains the most portfolio-forward market.

### Evidence-strength caveats

Strongest quantitative evidence: Ladders eye-tracking (resumes), NN/g's 204-respondent UX hiring survey, ResumeGo's 36,500-application gap experiment, HBS Hidden Workers, LinkedIn's 23,000-worker break survey. PM, marketing, data, sales, creative, and consulting evidence is practitioner/hiring-manager testimony with stated review volume plus recruiter-agency guidance — directionally consistent, less rigorous. Treat all second-counts as order-of-magnitude. Two table cells are marked [inference] where the synthesis extends a documented principle (regulated-industry redaction discipline) to an adjacent context (K-12 student media, sales client names) without direct sourcing. The converging pattern — seconds-long triage → front-load problem/role/outcome → 3–5 curated samples → tailored to reviewer → correct withholding as competence — is robust across all sources and all three research sets.

### Sources (134, merged research run)

- <https://www.theladders.com/career-advice/you-only-get-6-seconds-of-fame-make-it-count>
- <https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/>
- <https://www.prnewswire.com/news-releases/ladders-updates-popular-recruiter-eye-tracking-study-with-new-key-insights-on-how-job-seekers-can-improve-their-resumes-300744217.html>
- <https://www.nngroup.com/videos/ux-portfolios-hiring/>
- <https://www.nngroup.com/articles/ux-design-portfolios/>
- <https://www.nngroup.com/articles/ux-researcher-portfolio/>
- <https://www.nngroup.com/articles/ux-hiring-insights/>
- <https://suelynyu.medium.com/how-to-pass-a-2-minute-ux-portfolio-screening-dd0e2c09f2ef>
- <https://medium.com/design-bootcamp/my-portfolio-evaluation-process-342005398262>
- <https://blog.opendoorscareers.com/p/how-recruiters-and-hiring-managers-actually-look-at-your-portfolio>
- <https://blog.uxfol.io/ux-case-studies/>
- <https://blog.uxfol.io/creative-portfolio/>
- <https://uxplanet.org/good-ux-portfolios-never-get-interviews-6ea28fb2f9b3>
- <https://uxdesign.cc/only-30-seconds-to-reject-your-portfolio-8cb14ac70674>
- <https://www.icreatives.com/iblog/the-7-step-portfolio-review-process-every-creative-hiring-manager-needs/>
- <https://medium.com/@kanhaaggarwal/as-a-hiring-manager-here-are-the-3-things-i-actually-look-for-on-your-github-eb73594d1558>
- <https://www.reczee.com/blog/what-do-hiring-managers-see-on-my-github-profile>
- <https://flatironschool.com/blog/github-profile-and-git-practices-for-job-seekers/>
- <https://www.hackerrank.com/research/developer-skills/2018>
- <https://www.hackerrank.com/blog/what-to-put-on-github/>
- <https://hub.packtpub.com/what-matters-on-an-engineering-resume-hacker-rank-report-says-skills-not-certifications/>
- <https://www.aakashg.com/product-manager-portfolio-examples/>
- <https://www.joinleland.com/library/a/product-manager-portfolio>
- <https://www.prodpad.com/blog/product-manager-portfolio/>
- <https://craftuplearn.com/blog/product-manager-portfolio-projects-get-hired>
- <https://www.learnist.org/kaggle-portfolio-project-red-flags-2026/>
- <https://www.learnist.org/ai-case-study-red-flags-portfolio-2026/>
- <https://coderpad.io/blog/data-science/8-red-flags-to-watch-out-for-when-hiring-data-scientists/>
- <https://towardsdatascience.com/the-portfolio-that-got-me-a-data-scientist-job-513cc821bfe4/>
- <https://outvoice.com/blog/what-these-5-editors-look-for-in-freelance-writers-and-pitches/>
- <https://www.refinery29.com/en-us/2021/03/10345964/freelance-pitch-writer-editor-tips>
- <https://www.mediabistro.com/go-freelance/journalism-advice/6-tips-for-submitting-freelance-writing-clips/>
- <https://www.journoresources.org.uk/pitch-freelance-editor-what-i-want/>
- <https://theprofessorisin.com/the-art-of-the-academic-cover-letter/>
- <https://theprofessorisin.com/2015/10/12/a-perspective-from-the-hiring-committee-part-one-a-guest-post/>
- <https://careerplan.commons.gc.cuny.edu/blog/faculty-search-committee>
- <https://jobprepped.com/marketing-portfolio-guide/>
- <https://blog.copyfol.io/marketing-portfolio-examples>
- <https://www.wix.com/blog/how-to-create-a-marketing-portfolio>
- <https://salestalentinc.com/blog/brag-book-sales-interview/>
- <https://salestalentinc.com/blog/portfolio-items/sales-brag-book/>
- <https://www.rainmakers.co/blog/ways-to-track-and-present-your-personal-sales-brag-book/>
- <https://www.weareteachers.com/teaching-portfolio-examples/>
- <https://newteachercoach.com/demo-lesson-tips/>
- <https://nycteachingfellows.zendesk.com/hc/en-us/articles/360021561172-How-should-I-prepare-if-asked-to-teach-a-demo-lesson>
- <https://www.hackingthecaseinterview.com/pages/mckinsey-resume>
- <https://consultedge.app/blog/mckinsey-resume-format-2026>
- <https://www.casebasix.com/pages/mckinsey-resume>
- <https://ianimate.net/more/articles/animation-demo-reel-tips-crafting-a-reel-that-gets-you-hired>
- <https://www.schoolofmotion.com/blog/demo-reel-tips-motion-design>
- <https://creative.artisantalent.com/ask-a-recruiter-making-a-motion-design-reel>
- <https://motionarray.com/blog/10-tips-to-make-a-great-video-editor-demo-reel>
- <https://invernessdesignstudio.com/the-portfolio-that-gets-you-hired-what-creative-directors-actually-look-for>
- <https://www.linkedin.com/pulse/reviewing-creative-portfolio-nauro-rezende-jr>
- <https://hover.blog/online-portfolio-site-importance/>
- <https://www.criteriacorp.com/blog/how-many-of-these-top-factors-are-you-using-in-the-hiring-process/>
- <https://indeed.design/article/ux-design-portfolio-advice-from-hiring-managers/>
- <https://welovesalt.com/insights/what-hiring-managers-really-look-for-in-a-good-portfolio>
- <https://medium.com/design-bootcamp/the-crucial-first-impression-what-hiring-managers-look-for-in-product-design-portfolios-553e6a865ee9>
- <https://www.cobloom.com/careers-blog/graphic-design-positions-agency-vs-freelance-vs-in-house>
- <https://skillcrush.com/blog/ux-design-portfolio-advice/>
- <https://www.brandrums.com/blog/hiring-a-design-team/>
- <https://www.superside.com/blog/in-house-vs-agency>
- <https://www.eleken.co/blog-posts/design-agency-for-startups>
- <https://danmall.com/posts/a-design-system-coachs-portfolio/>
- <https://frontendmasters.com/courses/design-systems-management/>
- <https://uxplaybook.org/articles/senior-ux-designer-portfolio-get-hired-2025>
- <https://uxplaybook.org/articles/11-common-ux-portfolio-mistakes-and-solutions>
- <https://medium.com/@farihanaz/only-30-seconds-to-reject-your-portfolio-5f3eb8f4248b>
- <https://www.book180.com/blogs/how-many-projects-in-my-creative-director-portfolio>
- <https://www.hirequotient.com/blog/creative-director-portfolio>
- <https://arc.dev/talent-blog/software-engineer-portfolio/>
- <https://proxify.io/knowledge-base/hiring-strategies/how-to-get-into-faang-as-a-software-engineer>
- <https://fonzi.ai/blog/do-recruiters-check-github>
- <https://news.clearancejobs.com/military-software-engineer-resume-sample/>
- <https://blogs.oracle.com/jobsatoracle/seven-resume-tips-for-defense-industry-candidates-in-tech>
- <https://www.linkedin.com/pulse/how-draft-effective-resume-positions-defense-contracting-jeff-paul>
- <https://www.finos.org/hubfs/LFResearch_FINOSSurvey_Report_20211005.pdf>
- <https://www.finos.org/blog/open-source-contribution-policies-that-dont-suck>
- <https://blog.scottlogic.com/2021/10/21/financial-services-open-source.html>
- <https://caseguard.com/articles/how-to-redact-pii-and-phi-for-legal-compliance/>
- <https://www.koruux.com/blog/ensuring-healthcare-compliances-with-ux/>
- <https://www.hristovdevelopment.com/post/beyond-aesthetics-designing-medtech-ui-ux-for-clinical-safety-and-hipaa-compliance>
- <https://nbcuacademy.com/journalism-portfolio-articles/>
- <https://www.jennifergregorywriter.com/2016/02/09/will-editors-still-hire-you-if-you-write-both-content-and-journalism/>
- <https://www.clippings.me/writing-portfolio-examples>
- <https://uxcontent.com/reviewing-my-ux-writing-portfolio-reviews-what-i-learned/>
- <https://www.uxdesigninstitute.com/blog/ux-writing-portfolio-examples/>
- <https://uxwritinghub.com/ux-writer/>
- <https://ixdf.org/literature/article/keep-it-confidential-how-to-showcase-your-nda-protected-design-work>
- <https://www.interaction-design.org/literature/article/how-to-handle-non-disclosure-agreements-ndas-when-you-write-your-ux-case-study>
- <https://meetharlow.com/blog/how-to-build-a-portfolio-when-your-best-wins-are-locked-by-ndas/>
- <https://www.wonderlist.design/insights/showcasing-work-under-nda>
- <https://wearedevonshire.com/blog/how-to-create-a-portfolio-when-your-work-is-restricted-by-ndas/>
- <https://fueler.io/blog/how-to-showcase-client-work-without-ndas>
- <https://fueler.io/blog/case-study-portfolios-that-got-hired-fast>
- <https://www.uxresearchblog.com/post/how-to-write-ux-research-case-studies-when-work-is-under-nda>
- <https://foliox.me/portfolio-for/consulting>
- <https://www.germanycareercoach.com/blog/german-work-certificates-and-references-in-job-applications-in-germany>
- <https://www.employmentlawworldview.com/the-german-arbeitszeugnis-reference-a-sometimes-dangerous-mystery-for-non-german-employers/>
- <https://www.welcome-center-germany.com/post/job-applications>
- <https://jobsinjapan.com/working-in-japan/understanding-japans-two-resume-system/>
- <https://medium.com/tokyo-graphic-designers/how-to-complete-a-rirekisho-the-japanese-resume-23f985e1b220>
- <https://tokyocheapo.com/editorial/finding-creative-jobs-japan/>
- <https://help.usajobs.gov/faq/application/documents/resume/what-to-include>
- <https://handbook.tts.gsa.gov/hiring-staying-or-changing-jobs/resume/>
- <https://resumegeni.com/blog/federal-government-resume-usajobs>
- <https://resumeheatmap.com/eye-tracking-study>
- <https://www.resumefast.io/blog/7-second-resume-scan-eye-tracking>
- <https://vanschneider.com/blog/portfolio-tips/senior-portfolios-vs-junior-portfolios/>
- <https://hakia.com/skills/building-portfolio/>
- <https://www.hackerearth.com/blog/hiring-process-for-developers>
- <https://careersteering.com/the-modern-executive-resume/>
- <https://chameleonresumes.com/executive-resume-samples>
- <https://www.distinctiveweb.com/resume-writing/board-resume-vs-executive-resume>
- <https://blog.theinterviewguys.com/career-change-resume-skills-transferability-matrix/>
- <https://resumeoptimizerpro.com/blog/career-change-resume>
- <https://www.resumeadapter.com/blog/transferable-skills-career-change>
- <https://www.shrm.org/topics-tools/news/talent-acquisition/how-to-evaluate-resume-employment-gaps>
- <https://www.linkedin.com/business/talent/blog/product-tips/linkedin-members-spotlight-career-breaks-on-profiles>
- <https://hbr.org/2024/07/research-resume-gaps-still-matter>
- <https://www.hbs.edu/managing-the-future-of-work/research/Pages/hidden-workers-untapped-talent.aspx>
- <https://workingnation.com/ai-powered-hiring-systems-screen-out-qualified-talent-creating-hidden-workers/>
- <https://mondo.com/insights/returnship-programs-reentering-the-workforce-after-an-employment-gap/>
- <https://www.recruiter.com/recruiting/returnships-how-organizations-are-helping-more-professionals-return-to-work-after-extended-absences/>
- <https://www.testgorilla.com/skills-based-hiring/state-of-skills-based-hiring-2025/>
- <https://www.upwork.com/resources/freelance-vs-contract>
- <https://solidgigs.com/blog/marketing-portfolio-examples-to-land-high-paying-clients/>
- <https://www.wethos.co/blog/elements-to-include-in-your-freelance-portfolio-to-attract-clients>
- <https://talentbridge.com/when-to-choose-contract-to-hire-over-full-time-hiring-a-smart-hiring-strategy-for-modern-businesses/>
- <https://www.airswift.com/blog/permanent-vs-contract>
- <https://distantjob.com/blog/technical-recruiter-technical-sourcer-differences/>
- <https://www.metaview.ai/resources/blog/sourcing-vs-recruiting>
- <https://www.aihr.com/blog/talent-sourcer/>
