/* samples/data/data.js — role-pack sample persona: Diego Fuentes (FICTIONAL).
   Authoring contract: assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js
   (cited, not restated) — classic script, no modules, one HOPE_PERSONAS entry.
   Standalone single-persona starting point, so it ships its own window.HOPE_DATA
   per the Throughline contract (assets/templates/portfolio/data.js). The PyData
   talk is NOT a timeline entry — it lives in the pack's optional "Talks &
   notebooks" list app (one-home rule); see composition.md. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.diego = {
  roles: 3, skills: 36, projects: 3, certs: 1, edu: 1, career: 9,
  industries: ['retail', 'logistics', 'healthcare', 'civic-data'],
  industryLabels: { retail: 'Retail', logistics: 'Logistics & delivery', healthcare: 'Health insurance', 'civic-data': 'Civic data' }
};

/* Traveler: "footprints" — a deliberate pick for Diego: following the trail
   through the data, one verified step at a time — his analytical register.
   Chosen in chat at generation time, persisted as
   CuratedPortfolio.timeline_traveler; the artifact renders it. */
window.HOPE_DATA = {
  timeline: [
    { id: 'utaustin-bs', type: 'education', date_start: '2013-09', date_end: '2017-05',
      label: 'BS Statistics @ UT Austin', org: 'University of Texas at Austin',
      domain: 'utexas.edu', metric: null,
      skills: ['statistics', 'R', 'experimental design'],
      pane: 'education', anchor: 'tl-utaustin-bs' },
    { id: 'heb', type: 'experience', date_start: '2017-08', date_end: '2019-12',
      label: 'Data Analyst @ H-E-B', org: 'H-E-B',
      domain: 'heb.com', metric: '-14% inventory shrink',
      skills: ['SQL', 'data cleaning', 'stakeholder communication'],
      pane: 'experience', anchor: 'tl-heb' },
    { id: 'instacart', type: 'experience', date_start: '2020-01', date_end: '2022-09',
      label: 'Data Scientist @ Instacart', org: 'Instacart',
      domain: 'instacart.com', metric: '-23% demand-forecast WAPE',
      skills: ['Python', 'forecasting', 'feature pipelines'],
      pane: 'experience', anchor: 'tl-instacart' },
    { id: 'nyc-311', type: 'project', date_start: '2021-02', date_end: '2021-06',
      label: 'NYC 311 response-time analysis', org: 'Independent · NYC Open Data',
      domain: null, metric: '4.1-day borough response gap found',
      skills: ['data cleaning', 'Python', 'geospatial analysis'],
      pane: 'projects', anchor: 'tl-nyc-311' },
    { id: 'cert-aws-ml', type: 'certification', date_start: '2021-05', date_end: '2021-05',
      label: 'AWS ML Specialty', org: 'Amazon Web Services',
      domain: 'aws.amazon.com', metric: null,
      skills: ['ML deployment'],
      pane: 'certifications', anchor: 'tl-cert-aws-ml' },
    { id: 'oscar', type: 'experience', date_start: '2022-10', date_end: null,
      label: 'Senior Data Scientist @ Oscar Health', org: 'Oscar Health',
      domain: 'hioscar.com', metric: 'readmission AUC 0.81 → 0.86',
      skills: ['Python', 'ML on PHI', 'forecasting', 'stakeholder communication'],
      pane: 'experience', anchor: 'tl-oscar' },
    { id: 'ercot-forecast', type: 'project', date_start: '2023-03', date_end: '2023-08',
      label: 'ERCOT grid-demand forecasting', org: 'Independent · public grid data',
      domain: 'ercot.com', metric: 'MAPE 4.2% vs 6.8% baseline',
      skills: ['forecasting', 'Python', 'feature pipelines'],
      pane: 'projects', anchor: 'tl-ercot-forecast' },
    { id: 'cms-claims', type: 'project', date_start: '2024-01', date_end: '2024-07',
      label: 'Claims forecasting · CMS public data', org: 'Independent · public-data rebuild',
      domain: 'cms.gov', metric: '-18% WAPE vs seasonal naive',
      skills: ['forecasting', 'data cleaning', 'Python'],
      pane: 'projects', anchor: 'tl-cms-claims' }
  ],
  traveler: 'footprints'
};
