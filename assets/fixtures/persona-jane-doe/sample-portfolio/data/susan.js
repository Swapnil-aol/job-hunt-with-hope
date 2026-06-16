/* data/susan.js — demo-persona registry entry: Susan Kare (Designer · Iconography &amp; UI).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.susan = {
  roles: 5, skills: 19, projects: 3, certs: 2, edu: 2, career: 99,
  industries: ['design', 'tech'],
  industryLabels: { design: 'Design', tech: 'Tech' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/susankare/status/1929030806502076443", caption: "A chat about design with Soleio" },
    { platform: "linkedin", pinned: true, url: "https://www.linkedin.com/posts/susan-kare-92058951_i-just-fell-in-love-with-susan-kares-new-activity-7299859658117115904-v7nz", caption: "My new icons with Asprey Studio" },
    { platform: "x", url: "https://x.com/susankare/status/1072634292625379328", caption: "Signed Kare Prints Apple icon" },
    { platform: "x", url: "https://x.com/susankare/status/426765369655558144", caption: "Happy 30th birthday, Macintosh" },
    { platform: "x", url: "https://x.com/susankare/status/1251571813315821570", caption: "Limited-edition Mac icon prints" },
    { platform: "youtube", url: "https://www.youtube.com/watch?v=4lx9Wtd2P48", caption: "Notes on Icons and Design" },
    { platform: "x", headline: true, url: "https://x.com/susankare", caption: "Posts on X" },
    { platform: "linkedin", headline: true, url: "https://www.linkedin.com/in/susan-kare-92058951", caption: "Profile on LinkedIn" },
    { platform: "link", headline: true, url: "https://kareprints.com", caption: "Website" }
  ]
};
