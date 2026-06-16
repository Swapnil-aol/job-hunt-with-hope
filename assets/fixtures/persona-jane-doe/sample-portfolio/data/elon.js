/* data/elon.js — demo-persona registry entry: the DEFAULT / hero persona.
   In this sample the hero slot is Elon Musk (real public figure · public career
   data · illustrative sample — not affiliated or endorsed; contact + photo are
   placeholders). Each persona's slot id matches the person — this hero slot
   is "elon"; all data-persona wiring uses these ids.

   Sample-only: the production template folder (assets/templates/portfolio/)
   carries data.js / window.HOPE_DATA instead; this sample's data/ folder is
   the persona-switching counterpart for the demo-controls panel.

   AUTHORING CONTRACT (stated once here; data/<other>.js cite this file):

   Each data/<persona>.js is a CLASSIC script — no type=module, no fetch(),
   no import (file:// law, references/design-tokens.md § "Modular structure").
   It registers exactly one entry, order-independently:

     window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
     window.HOPE_PERSONAS['<id>'] = { … };

   where <id> matches the data-persona attribute on the persona's markup in
   index.html AND the persona-btn that selects it. Fields (all required):
     roles      max Experience cards the persona ships   (slider ceiling)
     skills     max skill cells                          (slider ceiling)
     projects   max project cards                        (segmented ceiling)
     certs      max certification cards                  (segmented ceiling)
     edu        max education cards                      (segmented ceiling)
     career     career length in years                   (career segmented; 99 = "All")
     industries      ordered slugs matching the persona's
                     data-industry attributes in index.html
     industryLabels  slug → human label for the rebuilt industry tag group

   Switching personas resets the demo-controls filters to these defaults so
   no slider dangles past the persona's data. Persona CONTENT (cards, skills,
   stats) is NOT here — it lives in index.html markup tagged data-persona;
   portfolio.js toggles data-persona-hidden from these ids. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.elon = {
  roles: 5, skills: 26, projects: 5, certs: 3, edu: 2, career: 99,
  industries: ['aerospace', 'automotive', 'ai', 'fintech', 'internet'],
  industryLabels: { aerospace: 'Aerospace', automotive: 'Automotive', ai: 'AI', fintech: 'Fintech', internet: 'Internet' },
  // SOCIAL FEED (sample) — per-persona social[]; full contract in the header
  // note above. Embeddable posts render live in the Social app; the 2 pinned
  // embeds fill the overview "Latest from"; profile URLs become contact-row pills.
  social: [
    { platform: "x", pinned: true, url: "https://x.com/elonmusk/status/1585841080431321088", caption: "the bird is freed" },
    { platform: "x", pinned: true, url: "https://x.com/elonmusk/status/2000795931160240227", caption: "Occupy Mars" },
    { platform: "x", url: "https://x.com/elonmusk/status/2030202126282973682", caption: "Starship V3 first flight soon" },
    { platform: "x", url: "https://x.com/elonmusk/status/1946763642231500856", caption: "Making Baby Grok for kids" },
    { platform: "x", url: "https://x.com/elonmusk/status/1586104694421659648", caption: "Comedy is now legal" },
    { platform: "x", url: "https://x.com/elonmusk/status/1649050306943266819", caption: "Starship test launch congrats" },
    { platform: "x", headline: true, url: "https://x.com/elonmusk", caption: "Posts on X" }
  ]
};

/* THE THROUGHLINE (sample side) — window.HOPE_DATA, stated once HERE.
   In the template folder this global lives in data.js, filled through the
   {{timeline_data_json}} slot; the entry-field + traveler contract is the
   authoring comment there (assets/templates/portfolio/data.js) — cited, not
   restated. In this multi-persona sample the Throughline ships for the HERO
   persona ONLY: it is the default persona, its identity card carries the
   #throughline strip, and the strip hides with the card on persona switch —
   the other data/<persona>.js files document the omission by citing this
   block. Each entry's `anchor` resolves to a stable id="tl-<id>" on the
   matching card in index.html.
   The list is CURATED, not exhaustive: the throughline traces the ventures,
   not every project/cert. Traveler: "rocket" — a deliberate thematic pick. */
window.HOPE_DATA = {
  timeline: [
    { id: 'upenn', type: 'education', date_start: '1992-09', date_end: '1997-05',
      label: 'BS Physics & Economics @ Penn', org: 'University of Pennsylvania',
      domain: 'upenn.edu', metric: 'dual degree',
      skills: ['physics', 'economics'],
      pane: 'education', anchor: 'tl-upenn' },
    { id: 'zip2', type: 'experience', date_start: '1995-01', date_end: '1999-02',
      label: 'Founder @ Zip2', org: 'Zip2',
      domain: null, metric: '$307M to Compaq',
      skills: ['software', 'web'],
      pane: 'experience', anchor: 'tl-zip2' },
    { id: 'paypal', type: 'experience', date_start: '1999-03', date_end: '2002-10',
      label: 'Co-founder @ X.com / PayPal', org: 'PayPal',
      domain: 'paypal.com', metric: '$1.5B to eBay',
      skills: ['payments', 'software'],
      pane: 'experience', anchor: 'tl-paypal' },
    { id: 'spacex', featured: true, type: 'experience', date_start: '2002-05', date_end: null,
      label: 'CEO & Chief Engineer @ SpaceX', org: 'SpaceX',
      domain: 'spacex.com', metric: 'first private crew to orbit',
      skills: ['aerospace', 'rocket propulsion', 'manufacturing'],
      pane: 'experience', anchor: 'tl-spacex' },
    { id: 'tesla', featured: true, type: 'experience', date_start: '2004-02', date_end: null,
      label: 'CEO & Product Architect @ Tesla', org: 'Tesla',
      domain: 'tesla.com', metric: "world's most valuable automaker",
      skills: ['electric vehicles', 'manufacturing'],
      pane: 'experience', anchor: 'tl-tesla' },
    { id: 'openai', type: 'project', date_start: '2015-12', date_end: '2018-02',
      label: 'Co-founder @ OpenAI', org: 'OpenAI',
      domain: 'openai.com', metric: null,
      skills: ['artificial intelligence'],
      pane: 'projects', anchor: 'tl-openai' },
    { id: 'neuralink', type: 'project', date_start: '2016-07', date_end: null,
      label: 'Founder @ Neuralink', org: 'Neuralink',
      domain: null, metric: 'brain-computer interfaces',
      skills: ['robotics', 'neurotech'],
      pane: 'projects', anchor: 'tl-neuralink' },
    { id: 'boring', type: 'project', date_start: '2016-12', date_end: null,
      label: 'Founder @ The Boring Company', org: 'The Boring Company',
      domain: null, metric: null,
      skills: ['tunneling'],
      pane: 'projects', anchor: 'tl-boring' },
    { id: 'xai', featured: true, type: 'experience', date_start: '2023-03', date_end: null,
      label: 'Founder @ xAI', org: 'xAI',
      domain: null, metric: 'Grok',
      skills: ['artificial intelligence', 'LLMs'],
      pane: 'experience', anchor: 'tl-xai' }
  ],
  traveler: 'rocket'
};
