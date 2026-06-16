/* data/reshma.js — demo-persona registry entry: Reshma Saujani (Founder &amp; CEO, Girls Who Code).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.reshma = {
  roles: 4, skills: 16, projects: 3, certs: 3, edu: 2, career: 99,
  industries: ['nonprofit', 'govt', 'law'],
  industryLabels: { nonprofit: 'Nonprofit', govt: 'Public service', law: 'Law' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "linkedin", pinned: true, url: "https://www.linkedin.com/posts/reshma-saujani_in-2012-i-handpicked-20-girls-and-taught-activity-6782359692594171904-eJnX", caption: "From 20 girls to 300,000 coders" },
    { platform: "x", pinned: true, url: "https://x.com/reshmasaujani/status/1573692989561446400", caption: "Our Girls Who Code books got banned" },
    { platform: "x", url: "https://x.com/reshmasaujani/status/1573693612914667520", caption: "You cannot be what you cannot see" },
    { platform: "instagram", url: "https://www.instagram.com/reshmasaujani/reel/C2LJRiKJP60/", caption: "America is exceptionally bad at care" },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/reshma-saujani_momsequalpayday-activity-7097251945509253120-z8Ye", caption: "Moms' Equal Pay Day: 227 days behind" },
    { platform: "youtube", url: "https://www.youtube.com/watch?v=fC9da6eqaqg", caption: "TED: teach girls bravery, not perfection" },
    { platform: "x", headline: true, url: "https://x.com/reshmasaujani", caption: "Posts on X" },
    { platform: "instagram", headline: true, url: "https://www.instagram.com/reshmasaujani/", caption: "Photos on Instagram" },
    { platform: "linkedin", headline: true, url: "https://www.linkedin.com/in/reshma-saujani", caption: "Profile on LinkedIn" },
    { platform: "link", headline: true, url: "https://www.reshmasaujani.com", caption: "Website" }
  ]
};
