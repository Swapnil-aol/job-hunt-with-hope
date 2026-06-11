/* samples/sales/data.js — role-pack sample persona: Dana Whitfield (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   Pack gate applied at the data layer: metrics are quota %, stack rank, Club
   years, logo counts — NEVER customer names, deal sizes, or earnings
   (earnings evidence is in-room material, not published).

   Traveler: "car" — territory miles; the road-warrior years are literal. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.dana = {
  roles: 4, skills: 36, projects: 1, certs: 2, edu: 1, career: 13,
  industries: ['hr-tech', 'saas', 'data-infra'],
  industryLabels: { 'hr-tech': 'HR tech', saas: 'SaaS', 'data-infra': 'Data infrastructure' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'osu-bs', type: 'education', date_start: '2009-09', date_end: '2013-05',
      label: 'BS Communication @ Ohio State', org: 'The Ohio State University',
      domain: 'osu.edu', metric: null,
      skills: ['communication'],
      pane: 'education', anchor: 'tl-osu-bs' },
    { id: 'adp-sdr', type: 'experience', date_start: '2013-08', date_end: '2015-03',
      label: 'SDR @ ADP', org: 'ADP',
      domain: 'adp.com', metric: '127% of meeting quota (6-qtr avg)',
      skills: ['outbound prospecting', 'discovery calls'],
      pane: 'experience', anchor: 'tl-adp-sdr' },
    { id: 'zendesk-ae', type: 'experience', date_start: '2015-04', date_end: '2018-10',
      label: 'AE, Mid-Market @ Zendesk', org: 'Zendesk',
      domain: 'zendesk.com', metric: '104–138% quota across 14 qtrs',
      skills: ['full-cycle sales', 'pipeline management', 'forecasting'],
      pane: 'experience', anchor: 'tl-zendesk-ae' },
    { id: 'datadog-ae', type: 'experience', date_start: '2018-11', date_end: '2022-12',
      label: 'Enterprise AE @ Datadog', org: 'Datadog',
      domain: 'datadoghq.com', metric: "President's Club ×3 · #2/41 (2021)",
      skills: ['enterprise sales', 'technical selling', 'competitive displacement'],
      pane: 'experience', anchor: 'tl-datadog-ae' },
    { id: 'cert-meddicc', type: 'certification', date_start: '2019-05', date_end: '2019-05',
      label: 'MEDDICC Masterclass', org: 'MEDDICC',
      domain: null, metric: null,
      skills: ['qualification', 'deal strategy'],
      pane: 'certifications', anchor: 'tl-cert-meddicc' },
    { id: 'brag-book', type: 'project', date_start: '2020-01', date_end: null,
      label: 'Win-story library (brag book)', org: 'Personal · documented evidence',
      domain: null, metric: '31 documented wins, tabbed',
      skills: ['deal strategy', 'storytelling'],
      pane: 'projects', anchor: 'tl-brag-book' },
    { id: 'cert-challenger', type: 'certification', date_start: '2021-02', date_end: '2021-02',
      label: 'Challenger Selling', org: 'Challenger Inc.',
      domain: null, metric: null,
      skills: ['insight selling'],
      pane: 'certifications', anchor: 'tl-cert-challenger' },
    { id: 'snowflake-ae', type: 'experience', date_start: '2023-01', date_end: null,
      label: 'Strategic AE @ Snowflake', org: 'Snowflake',
      domain: 'snowflake.com', metric: '118% FY25 quota · 9 new logos',
      skills: ['strategic accounts', 'consumption selling', 'exec relationships'],
      pane: 'experience', anchor: 'tl-snowflake-ae' }
  ],
  traveler: 'car'
};
