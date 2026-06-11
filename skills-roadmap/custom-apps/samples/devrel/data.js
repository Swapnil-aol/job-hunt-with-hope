/* samples/devrel/data.js — role-pack sample persona: Kenji Sato (FICTIONAL).
   Contracts cited, not restated: persona-registry shape = the authoring comment
   in assets/fixtures/persona-jane-doe/sample-portfolio/data/jane.js; timeline +
   traveler shape = the authoring comment in assets/templates/portfolio/data.js.
   Classic script — no type=module, no fetch(), no import (file:// law).

   Single-persona sample, so this file owns window.HOPE_DATA directly.
   Timeline is CURATED: individual talks live in the "Talks & podcasts" list
   app (composition.md), not as timeline entries — the timeline carries
   roles, degrees, and the two public artifacts with standalone weight.
   Recency rule: ongoing public-output entries carry a dated metric so
   staleness is visible, never hidden.

   Traveler: "paper-plane" — the conference circuit is the job; 12 countries
   of it. Same glyph as Jane's sample, picked independently in chat. */
window.HOPE_PERSONAS = window.HOPE_PERSONAS || {};
window.HOPE_PERSONAS.kenji = {
  roles: 3, skills: 58, projects: 2, certs: 1, edu: 1, career: 11,
  industries: ['devtools', 'cloud', 'open-source'],
  industryLabels: { devtools: 'Dev tools', cloud: 'Cloud / infra', 'open-source': 'Open source' }
};

window.HOPE_DATA = {
  timeline: [
    { id: 'uw-bs', type: 'education', date_start: '2011-09', date_end: '2015-06',
      label: 'BS Computer Science @ UW', org: 'University of Washington',
      domain: 'washington.edu', metric: null,
      skills: ['distributed systems', 'databases'],
      pane: 'education', anchor: 'tl-uw-bs' },
    { id: 'twilio-eng', type: 'experience', date_start: '2015-07', date_end: '2019-02',
      label: 'Backend Engineer @ Twilio', org: 'Twilio',
      domain: 'twilio.com', metric: '3 public APIs shipped',
      skills: ['api design', 'python', 'postgres'],
      pane: 'experience', anchor: 'tl-twilio-eng' },
    { id: 'httpcheck', type: 'project', date_start: '2017-04', date_end: null,
      label: 'httpcheck — OSS CLI', org: 'Open Source · Creator & Maintainer',
      domain: 'github.com', metric: '2.1k GitHub stars',
      skills: ['go', 'open-source maintenance', 'cli design'],
      pane: 'projects', anchor: 'tl-httpcheck' },
    { id: 'twilio-da', type: 'experience', date_start: '2019-03', date_end: '2022-05',
      label: 'Developer Advocate @ Twilio', org: 'Twilio',
      domain: 'twilio.com', metric: '38 talks · 12 countries · 48 docs PRs',
      skills: ['public speaking', 'technical writing', 'community'],
      pane: 'experience', anchor: 'tl-twilio-da' },
    { id: 'blog', type: 'project', date_start: '2019-08', date_end: null,
      label: 'sato.dev — engineering blog', org: 'Self-published · Writer',
      domain: null, metric: '94 posts · last post 2026-05',
      skills: ['technical writing', 'postgres'],
      pane: 'projects', anchor: 'tl-blog' },
    { id: 'cert-gcp', type: 'certification', date_start: '2020-10', date_end: '2020-10',
      label: 'GCP Professional Developer', org: 'Google Cloud',
      domain: 'cloud.google.com', metric: null,
      skills: ['cloud architecture'],
      pane: 'certifications', anchor: 'tl-cert-gcp' },
    { id: 'supabase', type: 'experience', date_start: '2022-06', date_end: null,
      label: 'Senior DevRel @ Supabase', org: 'Supabase',
      domain: 'supabase.com', metric: '1.4M YouTube views/yr',
      skills: ['postgres', 'video production', 'developer education', 'community'],
      pane: 'experience', anchor: 'tl-supabase' }
  ],
  traveler: 'paper-plane'
};
