/* samples/academic/data.js — role-pack sample persona: Meera Raghavan (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so unlike the multi-persona Jane sample this file
   owns window.HOPE_DATA directly. Timeline is CURATED, not exhaustive:
   individual publications stay in the "Selected publications" list app
   (composition.md), NOT on the timeline — the timeline carries degrees,
   roles, and the few projects with standalone weight.

   Traveler: "dot" — the calm default, kept deliberately. The academic pack's
   register is conservative; a novelty glyph would cost more than it adds. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.meera = {
  roles: 3, skills: 48, projects: 3, certs: 1, edu: 2, career: 11,
  industries: ['academic', 'nlp', 'open-source'],
  industryLabels: { academic: 'Academic', nlp: 'NLP / AI', 'open-source': 'Open source' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'umass-ba', type: 'education', date_start: '2011-09', date_end: '2015-05',
      label: 'BA Linguistics & CS @ UMass Amherst', org: 'University of Massachusetts Amherst',
      domain: 'umass.edu', metric: 'summa cum laude',
      skills: ['linguistics', 'python'],
      pane: 'education', anchor: 'tl-umass-ba' },
    { id: 'umass-ra', type: 'experience', date_start: '2014-01', date_end: '2015-05',
      label: 'Research Asst @ UMass NLP Lab', org: 'UMass NLP Lab',
      domain: 'umass.edu', metric: '2 co-authored papers',
      skills: ['corpus annotation', 'python'],
      pane: 'experience', anchor: 'tl-umass-ra' },
    { id: 'ucsd-phd', type: 'education', date_start: '2015-09', date_end: '2021-06',
      label: 'PhD Computational Linguistics @ UCSD', org: 'UC San Diego',
      domain: 'ucsd.edu', metric: 'dissertation award shortlist',
      skills: ['machine translation', 'morphology', 'statistical methods'],
      pane: 'education', anchor: 'tl-ucsd-phd' },
    { id: 'sabda', type: 'project', date_start: '2018-03', date_end: null,
      label: 'Sabda — low-resource MT toolkit', org: 'Open Source · Creator & Maintainer',
      domain: 'github.com', metric: '412 GitHub stars · 23 citing papers',
      skills: ['machine translation', 'python', 'open-source maintenance'],
      pane: 'projects', anchor: 'tl-sabda' },
    { id: 'edinburgh-postdoc', type: 'experience', date_start: '2021-08', date_end: '2024-07',
      label: 'Postdoctoral Fellow @ Edinburgh', org: 'University of Edinburgh',
      domain: 'ed.ac.uk', metric: '9 papers · 2 ACL orals',
      skills: ['machine translation', 'grant writing', 'PhD co-supervision'],
      pane: 'experience', anchor: 'tl-edinburgh-postdoc' },
    { id: 'morphbank', type: 'project', date_start: '2022-05', date_end: null,
      label: 'MorphBank — morphology dataset', org: 'University of Edinburgh',
      domain: 'ed.ac.uk', metric: 'used by 40+ research groups',
      skills: ['morphology', 'dataset design', 'corpus annotation'],
      pane: 'projects', anchor: 'tl-morphbank' },
    { id: 'pgcert', type: 'certification', date_start: '2023-06', date_end: '2023-06',
      label: 'PGCert Academic Practice', org: 'University of Edinburgh',
      domain: 'ed.ac.uk', metric: 'teaching qualification',
      skills: ['teaching', 'curriculum design'],
      pane: 'certifications', anchor: 'tl-pgcert' },
    { id: 'ubc-lecturer', type: 'experience', date_start: '2024-08', date_end: null,
      label: 'Lecturer @ UBC', org: 'University of British Columbia',
      domain: 'ubc.ca', metric: 'teaching eval 4.7/5 (n=212)',
      skills: ['teaching', 'machine translation', 'curriculum design'],
      pane: 'experience', anchor: 'tl-ubc-lecturer' },
    { id: 'sshrc-grant', type: 'project', date_start: '2025-04', date_end: null,
      label: 'SSHRC Insight Dev Grant — co-PI', org: 'SSHRC · co-Principal Investigator',
      domain: null, metric: 'CAD $74k · 2 RAs funded',
      skills: ['grant writing', 'machine translation'],
      pane: 'projects', anchor: 'tl-sshrc-grant' }
  ],
  traveler: 'dot'
};
