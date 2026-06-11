/* samples/engineer/data.js — role-pack sample persona: Marcus Webb (FICTIONAL).
   Authoring contract: assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js
   (cited, not restated) — classic script, no modules, one HOPE_PERSONAS entry.
   Unlike the multi-persona Jane demo (Throughline ships for the default persona
   only), this is a STANDALONE single-persona starting point, so it ships its own
   window.HOPE_DATA per the Throughline contract (assets/templates/portfolio/data.js).
   Timeline is CURATED, not exhaustive — dateless side quests live in the pack's
   "Side quests" cards app, not here (one-home rule, SPEC-custom-apps.md registry). */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.marcus = {
  roles: 4, skills: 60, projects: 4, certs: 1, edu: 1, career: 8,
  industries: ['fintech', 'observability', 'paas', 'oss'],
  industryLabels: { fintech: 'Fintech', observability: 'Observability', paas: 'Platform / PaaS', oss: 'Open source' }
};

/* Traveler: "train" — a deliberate pick for Marcus: rail = throughput, schedules,
   reliability — the platform-engineering register. Chosen in chat at generation
   time, persisted as CuratedPortfolio.timeline_traveler; the artifact renders it. */
window.HOPE_DATA = {
  timeline: [
    { id: 'gatech-bs', type: 'education', date_start: '2014-09', date_end: '2018-05',
      label: 'BS Computer Science @ Georgia Tech', org: 'Georgia Institute of Technology',
      domain: 'gatech.edu', metric: null,
      skills: ['distributed systems', 'Go', 'algorithms'],
      pane: 'education', anchor: 'tl-gatech-bs' },
    { id: 'twilio-intern', type: 'experience', date_start: '2017-05', date_end: '2017-08',
      label: 'SWE Intern @ Twilio', org: 'Twilio',
      domain: 'twilio.com', metric: null,
      skills: ['Python', 'API design'],
      pane: 'experience', anchor: 'tl-twilio-intern' },
    { id: 'plaid', type: 'experience', date_start: '2018-07', date_end: '2021-03',
      label: 'Backend Engineer @ Plaid', org: 'Plaid',
      domain: 'plaid.com', metric: '-68% p99 latency on auth flows',
      skills: ['Go', 'PostgreSQL', 'API design', 'observability'],
      pane: 'experience', anchor: 'tl-plaid' },
    { id: 'pgqueue', type: 'project', date_start: '2021-01', date_end: null,
      label: 'pgqueue · Postgres job queue', org: 'Open Source · Author & Maintainer',
      domain: 'github.com', metric: '2.1k GitHub stars',
      skills: ['Go', 'PostgreSQL', 'distributed systems'],
      pane: 'projects', anchor: 'tl-pgqueue' },
    { id: 'datadog', type: 'experience', date_start: '2021-04', date_end: '2024-01',
      label: 'Senior Backend Engineer @ Datadog', org: 'Datadog',
      domain: 'datadoghq.com', metric: '-31% metrics-ingest cost',
      skills: ['Go', 'Kafka', 'observability', 'capacity planning'],
      pane: 'experience', anchor: 'tl-datadog' },
    { id: 'prometheus-oss', type: 'project', date_start: '2022-03', date_end: null,
      label: 'Prometheus contributions', org: 'Prometheus · Contributor',
      domain: 'prometheus.io', metric: '11 PRs merged',
      skills: ['Go', 'observability'],
      pane: 'projects', anchor: 'tl-prometheus-oss' },
    { id: 'cert-cka', type: 'certification', date_start: '2022-06', date_end: '2022-06',
      label: 'Certified Kubernetes Administrator', org: 'CNCF',
      domain: 'cncf.io', metric: null,
      skills: ['Kubernetes'],
      pane: 'certifications', anchor: 'tl-cert-cka' },
    { id: 'loadcheck', type: 'project', date_start: '2023-05', date_end: null,
      label: 'loadcheck · load-testing CLI', org: 'Open Source · Author',
      domain: 'github.com', metric: '800+ GitHub stars',
      skills: ['Go', 'performance testing'],
      pane: 'projects', anchor: 'tl-loadcheck' },
    { id: 'flyio', type: 'experience', date_start: '2024-02', date_end: null,
      label: 'Staff Platform Engineer @ Fly.io', org: 'Fly.io',
      domain: 'fly.io', metric: 'deploys 37min → 6min',
      skills: ['Kubernetes', 'Rust', 'CI/CD', 'capacity planning'],
      pane: 'experience', anchor: 'tl-flyio' }
  ],
  traveler: 'train'
};
