/* data/audrey.js — demo-persona registry entry: Audrey Tang (Civic Technologist · ex-Digital Minister, Taiwan).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.audrey = {
  roles: 5, skills: 20, projects: 3, certs: 3, edu: 1, career: 99,
  industries: ['govtech', 'tech'],
  industryLabels: { govtech: 'Digital government', tech: 'Tech / open source' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/audreyt/status/1460951399240732672", caption: "Digital democracy, meet bubble tea" },
    { platform: "gist", pinned: true, url: "https://github.com/audreyt/plurality", caption: "Plurality: open-source democracy book" },
    { platform: "x", url: "https://x.com/audreyt/status/1893671891547607206", caption: "Taiwan model shapes Engaged California" },
    { platform: "x", url: "https://x.com/audreyt/status/1962816679299162227", caption: "AI governance needs a 6-pack of care" },
    { platform: "x", url: "https://x.com/audreyt/status/1966436911330869272", caption: "Open-source defence, end-to-end encryption" },
    { platform: "x", url: "https://x.com/audreyt/status/731895317377867776", caption: "Interpreting at a vTaiwan unconference" },
    { platform: "gist", url: "https://github.com/audreyt/civic.ai", caption: "Civic AI care-ethics framework" },
    { platform: "x", headline: true, url: "https://x.com/audreyt", caption: "Posts on X" },
    { platform: "gist", headline: true, url: "https://github.com/audreyt", caption: "Code on GitHub" },
    { platform: "link", headline: true, url: "https://audreyt.org", caption: "Website" }
  ]
};
