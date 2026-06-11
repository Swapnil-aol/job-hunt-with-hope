/* samples/writer/data.js — role-pack sample persona: Nadia Okafor (FICTIONAL).
   Authoring contract: assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js
   (cited, not restated) — classic script, no modules, one HOPE_PERSONAS entry.
   Standalone single-persona starting point, so it ships its own window.HOPE_DATA
   per the Throughline contract (assets/templates/portfolio/data.js). Individual
   clips are NOT timeline entries — they live in the pack's lead "Selected clips"
   list app (one-home rule); the timeline carries roles, education, and the
   newsletter. See composition.md. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.nadia = {
  roles: 3, skills: 24, projects: 1, certs: 1, edu: 2, career: 10,
  industries: ['local-news', 'energy-trade', 'climate', 'newsletter'],
  industryLabels: { 'local-news': 'Local news', 'energy-trade': 'Energy trade press', climate: 'Climate (national)', newsletter: 'Independent newsletter' }
};

/* Traveler: "bicycle" — a deliberate pick for Nadia: the beat reporter's pace,
   ground-level and self-propelled. Chosen in chat at generation time, persisted
   as CuratedPortfolio.timeline_traveler; the artifact renders it. */
window.HOPE_DATA = {
  timeline: [
    { id: 'medill-bsj', type: 'education', date_start: '2012-09', date_end: '2016-06',
      label: 'BSJ @ Northwestern Medill', org: 'Northwestern University',
      domain: 'northwestern.edu', metric: null,
      skills: ['reporting', 'editing'],
      pane: 'education', anchor: 'tl-medill-bsj' },
    { id: 'virginian-pilot', type: 'experience', date_start: '2016-07', date_end: '2019-03',
      label: 'Staff Reporter @ The Virginian-Pilot', org: 'The Virginian-Pilot',
      domain: 'pilotonline.com', metric: '240+ bylines',
      skills: ['beat reporting', 'public records', 'deadline writing'],
      pane: 'experience', anchor: 'tl-virginian-pilot' },
    { id: 'eenews', type: 'experience', date_start: '2019-04', date_end: '2021-08',
      label: 'Energy Reporter @ E&E News', org: 'E&E News · POLITICO',
      domain: 'eenews.net', metric: '3 award-shortlisted features',
      skills: ['energy policy', 'FERC reporting', 'source development'],
      pane: 'experience', anchor: 'tl-eenews' },
    { id: 'cert-knight-data', type: 'certification', date_start: '2020-04', date_end: '2020-04',
      label: 'Data Journalism Cert · Knight Center', org: 'Knight Center, UT Austin',
      domain: 'knightcenter.utexas.edu', metric: null,
      skills: ['data journalism'],
      pane: 'certifications', anchor: 'tl-cert-knight-data' },
    { id: 'ksj-mit', type: 'education', date_start: '2021-09', date_end: '2022-05',
      label: 'Knight Science Journalism @ MIT', org: 'MIT · KSJ Fellowship',
      domain: 'mit.edu', metric: '1 of 10 fellows selected',
      skills: ['science writing', 'energy systems'],
      pane: 'education', anchor: 'tl-ksj-mit' },
    { id: 'freelance', type: 'experience', date_start: '2022-06', date_end: null,
      label: 'Freelance Climate Journalist', org: 'The Atlantic · Grist · MIT Tech Review',
      domain: null, metric: '41 features since 2022',
      skills: ['climate reporting', 'feature writing', 'pitching'],
      pane: 'experience', anchor: 'tl-freelance' },
    { id: 'transmission', type: 'project', date_start: '2023-02', date_end: null,
      label: 'Transmission · grid newsletter', org: 'Substack · Author',
      domain: 'substack.com', metric: '5,200 subscribers · weekly',
      skills: ['newsletter writing', 'energy policy'],
      pane: 'projects', anchor: 'tl-transmission' }
  ],
  traveler: 'bicycle'
};
