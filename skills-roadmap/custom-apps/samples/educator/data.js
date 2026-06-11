/* samples/educator/data.js — role-pack sample persona: Marisol Vega (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   FERPA gate applied at the data layer: all metrics are AGGREGATE growth /
   proficiency figures — no student names, no identifiable student work,
   ever. The gate blocks; it does not ask twice.

   Traveler: "footprints" — a teacher's arc is walked with students, cohort
   by cohort; the warm register fits the pack. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.marisol = {
  roles: 2, skills: 30, projects: 2, certs: 2, edu: 2, career: 13,
  industries: ['k12', 'stem-ed'],
  industryLabels: { k12: 'K-12 education', 'stem-ed': 'STEM education' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'asu-bs', type: 'education', date_start: '2009-09', date_end: '2013-05',
      label: 'BS Biology @ Arizona State', org: 'Arizona State University',
      domain: 'asu.edu', metric: null,
      skills: ['biology'],
      pane: 'education', anchor: 'tl-asu-bs' },
    { id: 'cert-az', type: 'certification', date_start: '2013-06', date_end: '2013-06',
      label: 'AZ Professional Teaching Cert', org: 'Arizona Department of Education',
      domain: 'azed.gov', metric: 'science, grades 6–12',
      skills: ['teaching'],
      pane: 'certifications', anchor: 'tl-cert-az' },
    { id: 'roosevelt', type: 'experience', date_start: '2013-08', date_end: '2018-05',
      label: 'Gr 7 Science @ Roosevelt SD', org: 'Roosevelt School District, Phoenix',
      domain: null, metric: '+22 pts avg state-science growth',
      skills: ['science instruction', 'classroom management', 'data-driven instruction'],
      pane: 'experience', anchor: 'tl-roosevelt' },
    { id: 'asu-med', type: 'education', date_start: '2014-08', date_end: '2016-05',
      label: 'MEd C&I @ Arizona State', org: 'Arizona State University',
      domain: 'asu.edu', metric: 'completed while teaching full-time',
      skills: ['curriculum design', 'assessment design'],
      pane: 'education', anchor: 'tl-asu-med' },
    { id: 'mesa', type: 'experience', date_start: '2018-07', date_end: null,
      label: 'Gr 8 Science Lead @ Mesa Schools', org: 'Mesa Public Schools',
      domain: 'mpsaz.org', metric: '84% proficiency vs 61% district',
      skills: ['science instruction', 'department leadership', 'teacher mentoring'],
      pane: 'experience', anchor: 'tl-mesa' },
    { id: 'desert-unit', type: 'project', date_start: '2019-09', date_end: null,
      label: 'Desert Ecology Field Unit', org: 'Self-created curriculum · Author',
      domain: null, metric: 'adopted by 6 schools',
      skills: ['curriculum design', 'field-based learning'],
      pane: 'projects', anchor: 'tl-desert-unit' },
    { id: 'science-nights', type: 'project', date_start: '2021-10', date_end: null,
      label: 'Family Science Nights', org: 'Mesa Public Schools · Founder',
      domain: null, metric: '300+ families · 12 events',
      skills: ['community engagement', 'event design'],
      pane: 'projects', anchor: 'tl-science-nights' },
    { id: 'cert-nbct', type: 'certification', date_start: '2022-11', date_end: '2022-11',
      label: 'National Board Certification', org: 'NBPTS',
      domain: 'nbpts.org', metric: 'early adolescence science',
      skills: ['teaching', 'reflective practice'],
      pane: 'certifications', anchor: 'tl-cert-nbct' }
  ],
  traveler: 'footprints'
};
