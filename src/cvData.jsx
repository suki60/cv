export const contact = [
  {
    label: 'fran.altes@gmail.com',
    icon: (
      <>
        <path d="M2 5.5C2 4.67 2.67 4 3.5 4h17c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5v-13z" />
        <path d="M3 5.5l9 7 9-7" fill="none" />
      </>
    ),
    filled: false,
  },
  {
    label: 'fran-altes.com',
    icon: (
      <>
        <circle cx="12" cy="12" r="9.2" />
        <path
          d="M2.8 12h18.4M12 2.8c2.4 2.6 3.8 6 3.8 9.2s-1.4 6.6-3.8 9.2c-2.4-2.6-3.8-6-3.8-9.2s1.4-6.6 3.8-9.2z"
          fill="none"
        />
      </>
    ),
    filled: false,
  },
  {
    label: 'francesc-altes',
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    ),
    filled: true,
  },
  {
    label: 'suki60',
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
    filled: true,
  },
  {
    label: 'barcelona',
    icon: (
      <>
        <path d="M12 21s-7-6.1-7-11.3A7 7 0 0 1 12 2a7 7 0 0 1 7 7.7C19 14.9 12 21 12 21z" />
        <circle cx="12" cy="9.7" r="2.4" />
      </>
    ),
    filled: false,
  },
  {
    label: '+34 658 574 658',
    icon: (
      <path
        d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4c0 1.1-.9 2-2 2C9.5 20 3 13.5 3 5c0-1.1.9-2 2-2z"
        fill="none"
      />
    ),
    filled: false,
  },
];

export const skills = [
  {
    cat: 'languages',
    items: ['js, ts', 'node', 'go', 'ruby', 'java'],
  },
  {
    cat: 'libraries & frameworks',
    items: ['react', 'next.js', 'router v7', 'tanstack', 'zod', 'zustand'],
  },
  {
    cat: 'testing & tooling',
    items: ['vite', 'vitest', 'testing library', 'playwright', 'webpack', 'turbopack'],
  },
  {
    cat: 'cloud & devops',
    items: ['aws', 'vercel', 'github actions', 'datadog', 'terraform', 'kubernetes'],
  },
  {
    cat: 'ai',
    items: ['claude code', 'openai agents sdk', 'mcp', 'tool calling', 'rag', 'evals'],
  },
  {
    cat: 'architecture',
    items: [
      'system design',
      'distributed systems',
      'microservices',
      'monorepo',
      'design patterns',
      'a11y',
    ],
  },
];

export const education = [
  {
    title: 'java web developer bootcamp',
    org: 'ubiqum',
    time: '2017',
    desc: 'learned the fundamentals of web dev (html, css, js) with java as backend',
  },
  {
    title: 'mechanical engineering degree',
    org: 'eseiaat',
    time: '2013 - 2016',
    desc: 'core engineering, mechanics and product design fundamentals',
  },
];

export const languages = [
  { name: 'catalan', level: 'native' },
  { name: 'spanish', level: 'native' },
  { name: 'english', level: 'fluent' },
  { name: 'japanese', level: 'basic' },
];

export const profile =
  "i have always been a builder at heart, which naturally drew me to study mechanical engineering. 8 years ago, i took my passion for building into the digital realm to become a software engineer. the vibrant tech community and the endless possibilities of software have kept me hooked ever since. today, i'm combining my engineering mindset with the superpowers of ai to push the boundaries of what i can build with code.";

export const experience = [
  {
    role: 'sabbatical year — study, build, ride',
    org: 'self-directed',
    loc: 'barcelona / japan',
    time: '2026',
    bullets: [
      '530+ hours across 14 master.dev learning paths, 12 at 100%: ai engineering, coding with ai, code architecture, cloud & devops, react & next.js, typescript, node.js',
      'built projects to put the studies into practice: an ai agent with tool calling, a rag-powered docs assistant and an agentic pr reviewer',
      'crossed all of japan by bicycle — long-route planning and self-reliance, far from help',
    ],
  },
  {
    role: 'senior software engineer',
    org: 'gartner',
    loc: 'barcelona',
    time: '2024 - 2025',
    bullets: [
      'owned vendor portal end-to-end (react router v7 / ts)',
      'built partner portal from scratch, cutting release cycle from weeks to days (vercel / github actions / cypress)',
      'led app router, server components and actions migrations, improving page load times (next.js)',
    ],
  },
  {
    role: 'software engineer',
    org: 'gartner',
    loc: 'barcelona',
    time: '2022 - 2024',
    bullets: [
      'maintained and scaled capterra.com (next.js / ts)',
      'migrated microfrontends into a unified monorepo, cutting build/deploy overhead (aws -> vercel)',
      'set up observability integrations, reducing incident detection time (datadog / newrelic)',
    ],
  },
  {
    role: 'associate software engineer',
    org: 'gartner',
    loc: 'barcelona',
    time: '2018 - 2022',
    bullets: [
      'maintained getapp.com (sintra / ruby)',
      'migrated getapp frontend from jquery to react, improving maintainability',
      'built and managed sem landing pages driving +10m eur/year revenue',
    ],
  },
  {
    role: 'junior software engineer',
    org: 'gartner',
    loc: 'barcelona',
    time: '2018',
    bullets: [
      'completed 6 months of intensive tech training at the company',
      'shipped apps to consolidate skills (ruby / mysql / jquery)',
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
];
