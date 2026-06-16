/* data/dominique.js — demo-persona registry entry: Dominique Crenn (Chef &amp; Owner · Atelier Crenn).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.dominique = {
  roles: 5, skills: 17, projects: 3, certs: 3, edu: 1, career: 99,
  industries: ['fine-dining', 'hospitality'],
  industryLabels: { 'fine-dining': 'Fine dining', hospitality: 'Hospitality' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "instagram", pinned: true, url: "https://www.instagram.com/dominiquecrenn/reel/DFOw7vQvZGT/", caption: "Atelier Crenn 2025: new team, menu" },
    { platform: "x", pinned: true, url: "https://x.com/dominiquecrenn/status/296354415013683203", caption: "Atelier Crenn is looking for a cook" },
    { platform: "instagram", url: "https://www.instagram.com/dominiquecrenn/reel/DEh0UlGu0Xl/", caption: "My love letter to San Francisco" },
    { platform: "instagram", url: "https://www.instagram.com/dominiquecrenn/reel/C3ZSN8COZLr/", caption: "USA Today named us best restaurant" },
    { platform: "x", url: "https://x.com/dominiquecrenn/status/1790461510273098067", caption: "Love wins, always be kind" },
    { platform: "link", url: "https://www.ateliercrenn.com/", caption: "Atelier Crenn, three Michelin stars" },
    { platform: "instagram", headline: true, url: "https://www.instagram.com/dominiquecrenn/", caption: "Photos on Instagram" },
    { platform: "x", headline: true, url: "https://x.com/dominiquecrenn", caption: "Posts on X" },
    { platform: "link", headline: true, url: "https://www.ateliercrenn.com/", caption: "Website" }
  ]
};
