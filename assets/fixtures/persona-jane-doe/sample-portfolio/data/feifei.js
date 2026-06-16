/* data/feifei.js — demo-persona registry entry: Fei-Fei Li (AI Scientist · ImageNet · Stanford HAI).
   REAL public figure · public career data · illustrative sample (not affiliated/endorsed;
   contact + photo are placeholders). Contract: the authoring comment in data/elon.js. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.feifei = {
  roles: 5, skills: 20, projects: 3, certs: 3, edu: 2, career: 99,
  industries: ['ai', 'academic', 'bigtech'],
  industryLabels: { ai: 'AI', academic: 'Academia', bigtech: 'Big tech' },
  // Social feed (sample) — see data/elon.js for the social[] contract.
  // Embeddable posts render live; the 2 pinned fill the overview "Latest from".
  social: [
    { platform: "x", pinned: true, url: "https://x.com/drfeifei/status/1834584286932181300", caption: "Why I started World Labs" },
    { platform: "linkedin", pinned: true, url: "https://www.linkedin.com/posts/fei-fei-li-4541247_creativity-is-intelligence-having-fun-activity-7394423779482898432-9_H5", caption: "Marble, now for everyone" },
    { platform: "x", url: "https://x.com/drfeifei/status/1988653475526590786", caption: "Creativity is intelligence having fun" },
    { platform: "x", url: "https://x.com/drfeifei/status/1987891813387292725", caption: "My essay on spatial world models" },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/fei-fei-li-4541247_making-improvements-one-step-at-a-time-for-activity-7447340471347216384-ZbYp", caption: "Improving Marble, step by step" },
    { platform: "link", url: "https://www.worldlabs.ai/about", caption: "World Labs — spatial intelligence" },
    { platform: "youtube", url: "https://www.youtube.com/watch?v=40riCqvRoMs", caption: "TED: teaching computers to see" },
    { platform: "x", headline: true, url: "https://x.com/drfeifei", caption: "Posts on X" },
    { platform: "linkedin", headline: true, url: "https://www.linkedin.com/in/fei-fei-li-4541247/", caption: "Profile on LinkedIn" },
    { platform: "link", headline: true, url: "https://www.worldlabs.ai/", caption: "Website" }
  ]
};
