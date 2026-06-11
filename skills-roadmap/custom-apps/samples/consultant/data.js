/* samples/consultant/data.js — role-pack sample persona: Yusuf Adeyemi (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   Highest-NDA-density pack, applied at the data layer: engagement metrics
   are relative deltas with industry descriptors only — client names never
   appear, here or in the markup ("client names withheld" note renders on
   the Experience pane).

   Traveler: "train" — sixteen years of Monday-morning client-site travel;
   steady over flashy, which matches the pack's prose-led register. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.yusuf = {
  roles: 3, skills: 44, projects: 1, certs: 1, edu: 2, career: 16,
  industries: ['consulting', 'healthcare', 'manufacturing'],
  industryLabels: { consulting: 'Consulting', healthcare: 'Healthcare', manufacturing: 'Manufacturing' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'gt-bsc', type: 'education', date_start: '2006-08', date_end: '2010-05',
      label: 'BSc Industrial Eng @ Georgia Tech', org: 'Georgia Institute of Technology',
      domain: 'gatech.edu', metric: null,
      skills: ['process engineering', 'operations research'],
      pane: 'education', anchor: 'tl-gt-bsc' },
    { id: 'deloitte', type: 'experience', date_start: '2010-09', date_end: '2014-06',
      label: 'Consultant @ Deloitte', org: 'Deloitte',
      domain: 'deloitte.com', metric: '9 engagements · 4 industries',
      skills: ['process mapping', 'cost analysis', 'client delivery'],
      pane: 'experience', anchor: 'tl-deloitte' },
    { id: 'ross-mba', type: 'education', date_start: '2014-08', date_end: '2016-05',
      label: 'MBA @ Michigan Ross', org: 'University of Michigan, Ross School',
      domain: 'umich.edu', metric: null,
      skills: ['strategy', 'corporate finance'],
      pane: 'education', anchor: 'tl-ross-mba' },
    { id: 'ey-parthenon', type: 'experience', date_start: '2016-07', date_end: '2021-03',
      label: 'Manager @ EY-Parthenon', org: 'EY-Parthenon',
      domain: 'ey.com', metric: '11 engagements led · avg −18% opex',
      skills: ['operations strategy', 'engagement leadership', 'stakeholder management'],
      pane: 'experience', anchor: 'tl-ey-parthenon' },
    { id: 'cert-lss', type: 'certification', date_start: '2018-04', date_end: '2018-04',
      label: 'Lean Six Sigma Black Belt', org: 'ASQ',
      domain: 'asq.org', metric: null,
      skills: ['lean six sigma'],
      pane: 'certifications', anchor: 'tl-cert-lss' },
    { id: 'advisory', type: 'experience', date_start: '2021-04', date_end: null,
      label: 'Independent @ Adeyemi Advisory', org: 'Adeyemi Advisory',
      domain: null, metric: '14 engagements · 86% repeat/referral',
      skills: ['operations strategy', 'supply chain', 'business development'],
      pane: 'experience', anchor: 'tl-advisory' },
    { id: 'ops-diagnostic', type: 'project', date_start: '2022-09', date_end: null,
      label: 'Ops Diagnostic — public framework', org: 'Adeyemi Advisory · Author',
      domain: null, metric: '4-week diagnostic · 31 KPIs',
      skills: ['operations strategy', 'kpi design', 'writing'],
      pane: 'projects', anchor: 'tl-ops-diagnostic' }
  ],
  traveler: 'train'
};
