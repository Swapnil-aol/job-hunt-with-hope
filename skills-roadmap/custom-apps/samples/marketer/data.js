/* samples/marketer/data.js — role-pack sample persona: Tomás Rivera (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   Timeline is CURATED: individual campaigns live in the Experience campaign
   cards (composition.md), not as timeline entries. Metrics are RELATIVE
   deltas throughout — the pack's client-data gate; absolutes are
   confidential and never baked in.

   Traveler: "rocket" — growth is the persona's whole register; the pick is
   on-the-nose by design and was confirmed in chat at generation time. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.tomas = {
  roles: 4, skills: 52, projects: 2, certs: 2, edu: 1, career: 12,
  industries: ['agency', 'consumer-apps', 'dtc'],
  industryLabels: { agency: 'Agency', 'consumer-apps': 'Consumer apps', dtc: 'DTC / e-commerce' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'ut-bba', type: 'education', date_start: '2010-09', date_end: '2014-05',
      label: 'BBA Marketing @ UT Austin', org: 'University of Texas at Austin',
      domain: 'utexas.edu', metric: null,
      skills: ['marketing fundamentals'],
      pane: 'education', anchor: 'tl-ut-bba' },
    { id: 'gsdm', type: 'experience', date_start: '2014-07', date_end: '2016-12',
      label: 'Marketing Coordinator @ GSD&M', org: 'GSD&M',
      domain: 'gsdm.com', metric: '11 client campaigns shipped',
      skills: ['campaign management', 'copywriting', 'client services'],
      pane: 'experience', anchor: 'tl-gsdm' },
    { id: 'duolingo', type: 'experience', date_start: '2017-01', date_end: '2020-06',
      label: 'Growth Marketing Mgr @ Duolingo', org: 'Duolingo',
      domain: 'duolingo.com', metric: '+41% trial-to-paid (2019)',
      skills: ['lifecycle marketing', 'a/b testing', 'email/push'],
      pane: 'experience', anchor: 'tl-duolingo' },
    { id: 'cert-ga', type: 'certification', date_start: '2018-03', date_end: '2018-03',
      label: 'Google Analytics IQ', org: 'Google',
      domain: 'google.com', metric: null,
      skills: ['analytics'],
      pane: 'certifications', anchor: 'tl-cert-ga' },
    { id: 'glossier', type: 'experience', date_start: '2020-07', date_end: '2023-02',
      label: 'Growth Lead @ Glossier', org: 'Glossier',
      domain: 'glossier.com', metric: 'CAC −28% across paid social',
      skills: ['paid social', 'attribution', 'budget ownership'],
      pane: 'experience', anchor: 'tl-glossier' },
    { id: 'lifecycle-notes', type: 'project', date_start: '2021-06', date_end: null,
      label: 'Lifecycle Notes — newsletter', org: 'Self-published · Writer',
      domain: null, metric: '8,200 subscribers',
      skills: ['lifecycle marketing', 'writing'],
      pane: 'projects', anchor: 'tl-lifecycle-notes' },
    { id: 'cert-meta', type: 'certification', date_start: '2021-09', date_end: '2021-09',
      label: 'Meta Blueprint Media Buying', org: 'Meta',
      domain: 'meta.com', metric: null,
      skills: ['paid social'],
      pane: 'certifications', anchor: 'tl-cert-meta' },
    { id: 'linktree', type: 'experience', date_start: '2023-03', date_end: null,
      label: 'Head of Growth @ Linktree', org: 'Linktree',
      domain: 'linktr.ee', metric: '+19% activation · 6 experiments/mo',
      skills: ['growth strategy', 'experimentation', 'team leadership'],
      pane: 'experience', anchor: 'tl-linktree' },
    { id: 'sxsw-panel', type: 'project', date_start: '2025-03', date_end: '2025-03',
      label: 'SXSW panel — post-ATT growth', org: 'SXSW · Panelist',
      domain: 'sxsw.com', metric: 'room of ~400',
      skills: ['public speaking', 'attribution'],
      pane: 'projects', anchor: 'tl-sxsw-panel' }
  ],
  traveler: 'rocket'
};
