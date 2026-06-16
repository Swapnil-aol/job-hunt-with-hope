# JobHunt with Hope

> Tell your favorite AI agent about your work. Get a designed portfolio website, a recruiter-ready résumé, and **one link you own** — free.

Free · open-source (MIT) · works with any AI agent · your data never leaves your machine

<!-- IMAGE: any-agent — agent-agnostic hero (user-provided) -->
<p align="center"><img src="assets/readme/any-agent.png" alt="Tell your favorite AI agent — Claude, ChatGPT, Gemini, Cursor, VS Code, GitHub Copilot, Windsurf, or Perplexity — &quot;build my portfolio with Job Hunt with Hope.&quot;" width="720"></p>

I built Hope while job-hunting. It's gotten me interviews at <img src="https://www.google.com/s2/favicons?domain=ey.com&sz=64" height="14" alt=""> <ins>EY</ins>, <img src="https://www.google.com/s2/favicons?domain=amazon.com&sz=64" height="14" alt=""> <ins>Amazon</ins>, <img src="https://www.google.com/s2/favicons?domain=bakermckenzie.com&sz=64" height="14" alt=""> <ins>Baker McKenzie</ins>, and more — and it's done the same for others, at <img src="https://www.google.com/s2/favicons?domain=fedex.com&sz=64" height="14" alt=""> <ins>FedEx</ins>, <img src="https://www.google.com/s2/favicons?domain=cerebras.ai&sz=64" height="14" alt=""> <ins>Cerebras</ins>, <img src="https://www.google.com/s2/favicons?domain=apple.com&sz=64" height="14" alt=""> <ins>Apple</ins>. 85.5% of its earlier users landed multiple interviews and secured full-time roles.

Hope has been evolving since 2023 — born inside my startup **CareerX, Inc.** on early ChatGPT and rebuilt across many models and stacks since. CareerX has grown into **Agent Hope — an agentic career manager for humans** — and this skill — runnable by whatever AI agent you already use — is its best form yet. Tools that do good should meet people wherever they are.

<!-- IMAGE: portfolio-hero — see tasks/readme-image-prompts/ for the generation prompt -->
<p align="center"><img src="assets/readme/portfolio-hero.png" alt="A finished Hope portfolio website, shown in its light theme and its dark theme side by side" width="720"></p>

## What is this?

Hope is a free, open skill that any capable AI agent can run. You talk to it; it builds your job-hunt presence:

- **A portfolio website that looks designed, not like a form** — with a living timeline of your career that visitors can play, hover, and click. Busy years rise like mountain peaks. A little character of your choice travels it.
- **A résumé PDF recruiters respect** — pick a style and font; key phrases bolded for the 7-second skim; your links clickable; the text never too small to read. Application systems read it perfectly.
- **One link you own** — published free to a page in *your* name. Paste it on LinkedIn and it unfurls with your own preview card. Visitors see a finished site; only you can change it.

Your facts live in one file on your computer: `career.json`. Hope also keeps a small notebook, `user-story.md` — how you like to work. Both are yours: open them, edit them, delete them. **No tracking. No accounts. Nothing leaves your machine** except the page you choose to publish.

<!-- IMAGE: data-stays-home — see tasks/readme-image-prompts/ for the generation prompt -->
<p align="center"><img src="assets/readme/data-stays-home.png" alt="One laptop with a file labeled career.json inside it, and a clear cue that nothing leaves the machine — no cloud, no arrows out" width="420"></p>

## How to use it

Hope ships as a one-command plugin for **[Claude Code](https://claude.com/claude-code)** — but it's just Markdown skills + scripts, so **any capable AI agent can run it.**

- **Claude Code / Claude desktop** — install in one command:
  ```
  /plugin marketplace add oneconsciousness/job-hunt-with-hope
  /plugin install hope@hope
  ```
- **Any other agent** (Cursor, GitHub Copilot, ChatGPT / Codex, Gemini, Windsurf, Perplexity…) — point it at this repo and say **"build my portfolio with Job Hunt with Hope."** It reads the skills and follows them.

Then, in a fresh chat in an empty folder:

1. Say **start my job hunt with Hope.**
2. Hand it what you have — a resume file, your LinkedIn, your GitHub, a folder of old career files, or just a conversation. Hope does the work and walks you to your live link.

> **What you need:** any capable AI coding agent (most need a paid plan or API billing). Hope itself is free.

<!-- IMAGE: how-hope-works — see tasks/readme-image-prompts/ for the generation prompt -->
<p align="center"><img src="assets/readme/how-hope-works.png" alt="Four steps left to right: what you have, Hope reads it, your portfolio, your link" width="680"></p>

## How to update

- **Your portfolio:** say **update my portfolio** — Hope asks what changed (your story, the look, what's featured) and offers to pick up the newest Hope features. Then say **publish the changes** — same page, same link.
- **Hope itself:** rerun the install. In Claude Code:
  ```
  /plugin uninstall hope@hope && /plugin install hope@hope
  ```
  (with another agent, re-pull this repo.) Then start a fresh chat so the newest Hope loads. Nothing is lost — everything lives in your folder, and Hope hands you a short summary to carry into the new chat.

## Roadmap

This release does **presentation** — portfolio, résumé, publish — and does it well. Designed and waiting for later releases: weighing roles, tailored cover letters, applying with care, interview prep, negotiation support, deciding, and a dashboard across all of it.

<!-- IMAGE: roadmap — see tasks/readme-image-prompts/roadmap.md for the generation prompt -->
<p align="center"><img src="assets/readme/roadmap.png" alt="A road with two zones — NOW: portfolio, resume, your link, filled in; NEXT: weighing roles, cover letters, applying, interview prep, negotiation, deciding, outlined — with a dashboard band spanning both" width="720"></p>

## How to contribute

Found something broken, or want to build on Hope? **Reach out on LinkedIn: [in/arunganpa24](https://www.linkedin.com/in/arunganpa24).**

If you work with a coding agent, [`CONTRIBUTING.md`](CONTRIBUTING.md) is written for it — and the design and voice that make Hope feel like Hope are documented in [`references/`](references/).

## Like it?

**Leave a ⭐ on this repo and share the link** — every share puts a free portfolio within reach of someone who needs work.

## License

MIT. See [`LICENSE`](LICENSE). Free to use, change, and share. Hope stands on the work of others — see [`CREDITS.md`](CREDITS.md).

---

If you need work, install it and start.
