export const person = {
  name: 'francesc altes',
  title: 'senior software engineer',
  photo: '/fa-square.jpg',
  profile:
    "i have always been a builder at heart, which naturally drew me to study mechanical engineering. 8 years ago, i took my passion for building into the digital realm to become a software engineer. the vibrant tech community and the endless possibilities of software have kept me hooked ever since. today, i'm combining my engineering mindset with the superpowers of AI to push the boundaries of what i can build with code.",
  contact: [
    ['email', 'fran.altes@gmail.com'],
    ['site', 'fran-altes.com'],
    ['github', 'francesc-altes'],
    ['handle', 'suki60'],
  ],
  experience: [
    {
      role: 'senior software engineer',
      org: 'gartner',
      loc: 'barcelona',
      time: '2024 - 2025',
      bullets: [
        'supported vendor portal (react router v7 / ts)',
        'built partner portal from scratch (vercel / github actions / cypress)',
        'led app router, server components and actions migrations (next.js)',
      ],
    },
    {
      role: 'software engineer',
      org: 'gartner',
      loc: 'barcelona',
      time: '2022 - 2024',
      bullets: [
        'supported capterra.com (next.js / ts)',
        'migrated microfrontends into unified monorepo (aws -> vercel)',
        'managed observability integrations (datadog / newrelic)',
      ],
    },
    {
      role: 'associate software engineer',
      org: 'gartner',
      loc: 'barcelona',
      time: '2018 - 2022',
      bullets: [
        'supported getapp.com (sintra / ruby)',
        'migrated getapp frontend (jquery -> react)',
        'managed SEM landing pages (+10M €/year revenue)',
      ],
    },
    {
      role: 'junior software engineer',
      org: 'gartner',
      loc: 'barcelona',
      time: '2018',
      bullets: [
        'completed 6 months of intensive tech training at the company',
        'built apps to consolidate skills (ruby / mysql / jquery)',
        'offered permanent job as 1 of 3 successful candidates (out of 6)',
      ],
    },
    {
      role: 'mechanical engineer',
      org: 'demola project',
      loc: 'tampere',
      time: '2017',
      bullets: [
        'designed a specialized drone capable of taking soil samples',
        'modeled structure and internal mechanisms (solidworks)',
        'won 2nd place out of 30 projects at demola spring 2017',
      ],
    },
  ],
  skills: [
    { cat: 'languages', items: ['typescript', 'node', 'graphql', 'ruby'] },
    { cat: 'libraries', items: ['react', 'tailwind', 'zustand', 'testing library'] },
    { cat: 'frameworks', items: ['next.js', 'router v7', 'vitest', 'playwright'] },
    { cat: 'tools', items: ['git', 'vite', 'mysql', 'docker'] },
    { cat: 'cloud', items: ['aws', 'vercel', 'actions', 'datadog'] },
  ],
  education: [
    { title: 'java web developer bootcamp', org: 'ubiqum', loc: 'barcelona', time: '2017' },
    { title: 'mechanical engineering degree', org: 'eseiaat', loc: 'terrassa', time: '2013 - 2016' },
  ],
  languages: ['catalan', 'spanish', 'english', 'japanese'],
}
