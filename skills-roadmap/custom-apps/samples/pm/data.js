/* samples/pm/data.js — role-pack sample persona: Priya Nair (FICTIONAL).
   Authoring contract: assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js
   (cited, not restated) — classic script, no modules, one HOPE_PERSONAS entry.
   Standalone single-persona starting point, so it ships its own window.HOPE_DATA
   per the Throughline contract (assets/templates/portfolio/data.js). Metrics are
   relative deltas by pack rule (confidential absolutes never published). */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.priya = {
  roles: 4, skills: 40, projects: 2, certs: 1, edu: 1, career: 11,
  industries: ['support-ops', 'commerce', 'saas', 'collaboration'],
  industryLabels: { 'support-ops': 'Support ops', commerce: 'Commerce', saas: 'SaaS', collaboration: 'Collaboration tools' }
};

/* Traveler: "sailboat" — a deliberate pick for Priya: tacking = course-correcting
   against the wind, the trade-off register her case studies are written in.
   Chosen in chat at generation time, persisted as
   CuratedPortfolio.timeline_traveler; the artifact renders it. */
window.HOPE_DATA = {
  timeline: [
    { id: 'umich-bs', type: 'education', date_start: '2011-09', date_end: '2015-05',
      label: 'BS Industrial Engineering @ Michigan', org: 'University of Michigan',
      domain: 'umich.edu', metric: null,
      skills: ['systems analysis', 'statistics'],
      pane: 'education', anchor: 'tl-umich-bs' },
    { id: 'zendesk', type: 'experience', date_start: '2015-07', date_end: '2017-08',
      label: 'Support Ops Analyst @ Zendesk', org: 'Zendesk',
      domain: 'zendesk.com', metric: '-31% ticket backlog',
      skills: ['ops analytics', 'SQL', 'process design'],
      pane: 'experience', anchor: 'tl-zendesk' },
    { id: 'shopify', type: 'experience', date_start: '2017-09', date_end: '2020-06',
      label: 'Product Manager @ Shopify', org: 'Shopify',
      domain: 'shopify.com', metric: '+12% checkout completion',
      skills: ['experimentation', 'payments UX', 'roadmapping'],
      pane: 'experience', anchor: 'tl-shopify' },
    { id: 'cert-reforge', type: 'certification', date_start: '2020-03', date_end: '2020-03',
      label: 'Growth Series @ Reforge', org: 'Reforge',
      domain: 'reforge.com', metric: null,
      skills: ['growth modeling'],
      pane: 'certifications', anchor: 'tl-cert-reforge' },
    { id: 'intercom', type: 'experience', date_start: '2020-07', date_end: '2023-10',
      label: 'Senior PM @ Intercom', org: 'Intercom',
      domain: 'intercom.com', metric: '+34% new-user activation',
      skills: ['onboarding design', 'experimentation', 'stakeholder management'],
      pane: 'experience', anchor: 'tl-intercom' },
    { id: 'shipping-notes', type: 'project', date_start: '2021-06', date_end: null,
      label: 'Shipping Notes · decision memos', org: 'Substack · Author',
      domain: 'substack.com', metric: '3,800 subscribers',
      skills: ['decision writing', 'product strategy'],
      pane: 'projects', anchor: 'tl-shipping-notes' },
    { id: 'prd-teardowns', type: 'project', date_start: '2022-09', date_end: null,
      label: 'Redacted PRD teardowns', org: 'Personal site · Author',
      domain: null, metric: '9 PRDs · permissioned redactions',
      skills: ['product specs', 'decision writing'],
      pane: 'projects', anchor: 'tl-prd-teardowns' },
    { id: 'miro', type: 'experience', date_start: '2023-11', date_end: null,
      label: 'Group PM, Enterprise @ Miro', org: 'Miro',
      domain: 'miro.com', metric: '+19% enterprise seat expansion',
      skills: ['enterprise strategy', 'roadmapping', 'stakeholder management', 'mentorship'],
      pane: 'experience', anchor: 'tl-miro' }
  ],
  traveler: 'sailboat'
};
