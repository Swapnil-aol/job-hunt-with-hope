/* data/andrej.js — demo-persona registry entry: Andrej Karpathy (AI Engineer &amp; Educator · Anthropic).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.andrej = {
  roles: 5, skills: 25, projects: 4, certs: 3, edu: 2, career: 99,
  industries: ['ai-research', 'automotive', 'education'],
  industryLabels: { 'ai-research': 'AI research', automotive: 'Automotive AI', education: 'AI education' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/karpathy/status/1886192184808149383", caption: "Coining \"vibe coding\"" },
    { platform: "x", pinned: true, url: "https://x.com/karpathy/status/1613250487838707712", caption: "Announcing nanoGPT" },
    { platform: "x", url: "https://x.com/karpathy/status/1977755427569111362", caption: "Releasing nanochat repo" },
    { platform: "x", url: "https://x.com/karpathy/status/1937902205765607626", caption: "On context engineering" },
    { platform: "x", url: "https://x.com/karpathy/status/1899876370492383450", caption: "Writing content for LLMs" },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/andrej-karpathy-9a650716_tesla-tsla-autopilot-activity-6891853901331623936-rg9r", caption: "Hiring for Tesla AI team" },
    { platform: "gist", url: "https://github.com/karpathy/nanoGPT", caption: "nanoGPT: train GPTs simply" },
    { platform: "gist", url: "https://github.com/karpathy/nanochat", caption: "nanochat: ChatGPT for $100" },
    { platform: "youtube", url: "https://www.youtube.com/watch?v=LCEmiRjPEtQ", caption: "Software Is Changing (Again)" },
    { platform: "x", headline: true, url: "https://x.com/karpathy", caption: "Posts on X" },
    { platform: "gist", headline: true, url: "https://github.com/karpathy", caption: "Code on GitHub" },
    { platform: "linkedin", headline: true, url: "https://www.linkedin.com/in/andrej-karpathy-9a650716/", caption: "Profile on LinkedIn" },
    { platform: "link", headline: true, url: "https://karpathy.ai/", caption: "Website" }
  ]
};
