/* data/sam.js — demo-persona registry entry: Sam Altman (Co-founder &amp; CEO, OpenAI).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.sam = {
  roles: 4, skills: 18, projects: 2, certs: 2, edu: 1, career: 99,
  industries: ['ai-research', 'venture', 'startup'],
  industryLabels: { 'ai-research': 'AI', venture: 'Venture / YC', startup: 'Startups' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/sama/status/1598038815599661056", caption: "The day we launched ChatGPT" },
    { platform: "x", pinned: true, url: "https://x.com/sama/status/1599668808285028353", caption: "ChatGPT hit 1 million users" },
    { platform: "x", url: "https://x.com/sama/status/1906771292390666325", caption: "A million new users in an hour" },
    { platform: "x", url: "https://x.com/sama/status/1945900345378697650", caption: "Launching ChatGPT Agent" },
    { platform: "link", url: "https://blog.samaltman.com/reflections", caption: "Reflections on nine years of OpenAI" },
    { platform: "link", url: "https://blog.samaltman.com/how-to-be-successful", caption: "How to be successful" },
    { platform: "x", headline: true, url: "https://x.com/sama", caption: "Posts on X" },
    { platform: "link", headline: true, url: "https://blog.samaltman.com", caption: "Website" }
  ]
};
