/* data/dario.js — demo-persona registry entry: Dario Amodei (Co-founder &amp; CEO, Anthropic).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.dario = {
  roles: 4, skills: 27, projects: 3, certs: 3, edu: 2, career: 99,
  industries: ['ai-research', 'bigtech'],
  industryLabels: { 'ai-research': 'AI research', bigtech: 'Big tech' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/DarioAmodei/status/1844830404064288934", caption: "My essay: Machines of Loving Grace" },
    { platform: "x", pinned: true, url: "https://x.com/DarioAmodei/status/1915515160607023391", caption: "Why we must understand AI" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/2064781775247950326", caption: "New essay on AI policy" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/1977010693460443151", caption: "Met PM Modi on AI in India" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/2015833046327402527", caption: "The Adolescence of Technology" },
    { platform: "link", url: "https://www.darioamodei.com/essay/machines-of-loving-grace", caption: "Essay: how AI could help us" },
    { platform: "x", headline: true, url: "https://x.com/DarioAmodei", caption: "Posts on X" },
    { platform: "link", headline: true, url: "https://www.darioamodei.com", caption: "Website" }
  ]
};
