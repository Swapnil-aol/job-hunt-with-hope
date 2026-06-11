/* samples/creative-media/data.js — role-pack sample persona: Lena Castillo (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   Timeline is CURATED: individual clips live in the reel gallery-grid with
   per-clip contribution labels (composition.md), not as timeline entries.
   Rights gate applied at the data layer: one embargoed brand campaign is
   absent from this file entirely — embargoed work stays out, not hidden.

   Traveler: "bicycle" — Brooklyn shoots, gear on her back; indie register
   over spectacle, matching the pack's minimal-copy tone. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.lena = {
  roles: 3, skills: 34, projects: 2, certs: 1, edu: 1, career: 12,
  industries: ['media', 'brand', 'documentary'],
  industryLabels: { media: 'Digital media', brand: 'Brand / commercial', documentary: 'Documentary' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'tisch-bfa', type: 'education', date_start: '2010-09', date_end: '2014-05',
      label: 'BFA Film & TV @ NYU Tisch', org: 'NYU Tisch School of the Arts',
      domain: 'nyu.edu', metric: null,
      skills: ['editing', 'cinematography'],
      pane: 'education', anchor: 'tl-tisch-bfa' },
    { id: 'vice-ae', type: 'experience', date_start: '2014-08', date_end: '2017-01',
      label: 'Assistant Editor @ VICE', org: 'VICE Media',
      domain: 'vice.com', metric: '120+ published cuts',
      skills: ['editing', 'media management', 'deadline delivery'],
      pane: 'experience', anchor: 'tl-vice-ae' },
    { id: 'cert-avid', type: 'certification', date_start: '2016-03', date_end: '2016-03',
      label: 'Avid Media Composer Certified', org: 'Avid',
      domain: 'avid.com', metric: null,
      skills: ['avid media composer'],
      pane: 'certifications', anchor: 'tl-cert-avid' },
    { id: 'vox-editor', type: 'experience', date_start: '2017-02', date_end: '2020-09',
      label: 'Editor @ Vox', org: 'Vox Media',
      domain: 'vox.com', metric: '3 videos >5M views',
      skills: ['editing', 'motion graphics', 'narrative structure'],
      pane: 'experience', anchor: 'tl-vox-editor' },
    { id: 'studio-castillo', type: 'experience', date_start: '2020-10', date_end: null,
      label: 'Freelance @ Studio Castillo', org: 'Studio Castillo',
      domain: null, metric: '29 client deliveries · 9 repeat',
      skills: ['editing', 'motion design', 'client direction', 'color'],
      pane: 'experience', anchor: 'tl-studio-castillo' },
    { id: 'night-shift', type: 'project', date_start: '2022-03', date_end: '2023-06',
      label: 'Night Shift — short documentary', org: 'Independent · Editor',
      domain: null, metric: 'Tribeca shortlist (2023)',
      skills: ['editing', 'narrative structure', 'sound design'],
      pane: 'projects', anchor: 'tl-night-shift' },
    { id: 'reel-2026', type: 'project', date_start: '2026-01', date_end: '2026-01',
      label: 'Reel 2026 — 75 seconds', org: 'Studio Castillo · Editor & Motion',
      domain: 'vimeo.com', metric: '12 projects · contribution-labeled',
      skills: ['editing', 'motion design'],
      pane: 'projects', anchor: 'tl-reel-2026' }
  ],
  traveler: 'bicycle'
};
