export const SITE = {
  name: 'Sansika Kodithuwakku',
  firstName: 'Sansika',
  lastName: 'Kodithuwakku',
  role: 'Software Engineer',
  focus: 'Full-Stack & AI',
  stackLine: 'Python, SQL, PHP, React, Flutter',
  tagline:
    'I ship production systems and I study Computer Science. The next desk can be software engineering or AI engineering - I adapt to the floor.',
  location: 'Finland',
  city: 'Helsinki',
  email: 'sansikakodithuwakku07@gmail.com',
  phone: '+358 41 329 8317',
  phoneHref: 'tel:+358413298317',
  url: 'https://sansika.online',
  cvHref: '/Sansika_Kodithuwakku_CV.pdf',
  vcardHref: '/Sansika_Kodithuwakku.vcf',
  github: 'https://github.com/SansikaDev',
  linkedin: 'https://www.linkedin.com/in/sansika-kodithuwakku/',
  availability: 'Available to work - Helsinki or remote',
  description:
    'I am a software engineer in Helsinki, pursuing an MSc in Computer Science, open to software engineering and AI engineering roles. I ship production systems and I publish in machine learning. Python, SQL, PHP, React and Flutter. Available to work, Helsinki or remote.',
  about: [
    'I am a software engineer in Helsinki, pursuing Computer Science, and I want the next role in software engineering or AI engineering. I sit with the people who run a place, learn the rules, and ship the path - secure APIs, desks, and models when the problem needs them. That already lives in finance, travel, trade and research: production systems, two live customer sites, and papers in mixture-of-experts fake-news detection and retail analytics.',
    'I am completing an MSc in Computer Science at the University of Eastern Finland. I want that CS path on the desk - shipping product, or building the AI that sits inside it.',
  ],
} as const;

export const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'papers', label: 'Papers' },
  { id: 'contact', label: 'Contact' },
] as const;

export const FIGURES = [
  { value: '9', prefix: '', suffix: '', label: 'Production systems at Abans Finance' },
  { value: '70', prefix: 'LKR ', suffix: 'M', label: 'FinAb sales since Feb 2026' },
  { value: '93', prefix: '', suffix: '%', label: 'Faster monthly reporting' },
  { value: '19', prefix: '', suffix: '', label: 'Client apps shipped at Cerfel' },
] as const;

export const EXPERIENCE = [
  {
    company: 'Abans Finance PLC',
    logo: '/brands/abans-finance.png',
    kicker: 'What I did here',
    headline: 'Nine systems. One finance house.',
    role: 'Senior Executive - Software Engineer',
    location: 'Sri Lanka',
    dates: 'Oct 2023 - Aug 2026',
    note: 'Promoted Junior Executive → Senior Executive',
    summary:
      'I owned the desks a licensed lender actually runs on: payments leaving the bank, loans originating on a phone, documents that no longer wait two days, and a monthly pack that used to take four hours.',
    projects: [
      {
        title: 'FinAb',
        status: 'Production · Feb 2026',
        stack: 'PHP · REST · SQL · WorkHub24',
        metric: '20 min',
        detail:
          'The sales floor used to spend ten hours capturing one loan. I owned the phone origination that replaced it - documents, CRIB, notifications, the ops desk - and hardened it for VAPT before it went live. About LKR 70 million in sales since February 2026.',
      },
      {
        title: 'Seylan CEFT / SWIFT',
        status: 'Production',
        stack: 'Secured REST · SQL · bank rails',
        metric: '4–5 min',
        detail:
          'Treasury used to wait a day or two for a payment to leave. I wired WorkHub24 approvals to Seylan’s rails: the money leaves the company account, the GL row is written, a second store keeps the trace, and a reference document exists if someone has to reconstruct the day.',
      },
      {
        title: 'Merchant gateway',
        status: 'Production',
        stack: 'Webhooks · tokenisation · REST',
        metric: '98%+',
        detail:
          'Instalments used to reconcile by hand. I shipped the hosted checkout - refunds, voids, idempotent retries, an audit trail. Payment success stayed above 98%, and the books catch up as the money lands.',
      },
      {
        title: 'Field app',
        status: 'User testing',
        stack: 'Android · Flutter · Python · C# · Maps',
        metric: '2× faster',
        detail:
          'Marketing and recovery used to claim visits nobody could prove. V1 was Java and PHP. I rebuilt V2 in Flutter with Python and C# services, JWT plus Microsoft Authenticator, and a geo-tag that says you were actually there.',
      },
      {
        title: 'Document desk',
        status: 'Internal',
        stack: 'FastAPI · React · S3 · Docker · 2FA',
        metric: '0-day wait',
        detail:
          'A loan used to sit two days for the original paper. I built the FastAPI and React desk that serves a verified digital copy instead - six roles, pyotp 2FA, watermarks, a live audit over WebSockets, hashed indexes for PDF and Word.',
      },
      {
        title: 'CRIB viewer',
        status: 'Production · led juniors',
        stack: 'PHP · Redis · 2FA · CRIB API',
        metric: '10k / day',
        detail:
          'A hundred people hitting the bureau. I led the juniors on the console: Redis, 2FA, a 30-day re-check as the cache rule. Ten thousand calls a day. Latency down 35%.',
      },
      {
        title: 'Monthly reporting',
        status: 'Production',
        stack: 'React · PHP · SQL · cache · 2FA',
        metric: '93% faster',
        detail:
          'A million-plus rows a month, and the pack took four hours. I built the desk that finishes in fifteen minutes without parking the rest of the house.',
      },
      {
        title: 'Purchase orders',
        status: 'Production',
        stack: 'Role workflows · PDF · notifications',
        metric: '40% less lag',
        detail:
          'I sat with Marketing until the tracking rules were honest. Approvals stopped disappearing into a mailbox. Lag fell about 40%.',
      },
      {
        title: 'IT task desk',
        status: 'Production',
        stack: 'REST · MySQL · Slack',
        metric: '15 sec',
        detail:
          'Excel off the table. Query time from two minutes to fifteen seconds. The team’s throughput went up about 30%.',
      },
    ],
  },
  {
    company: 'Cerfel (Pvt) Ltd.',
    logo: undefined,
    kicker: 'What I did here',
    headline: 'Nineteen products. One internship.',
    role: 'Software Engineer Intern',
    location: 'Sri Lanka',
    dates: '2023 · 6 months',
    note: 'Tourism products for paying clients',
    summary:
      'Six months inside a tourism shop. I shipped the admin desks - bookings, users, analytics - and left notes the next intern could actually use.',
    projects: [
      {
        title: 'Tourism product suite',
        status: 'Shipped',
        stack: 'React · TypeScript · Redux · Node · PHP · PostgreSQL',
        metric: '19 apps',
        detail:
          'Nineteen full-stack applications for paying clients. Custom admin panels, React Query, caching, and API notes that survived me leaving. About 40% faster apps. Onboarding time down 25%.',
      },
    ],
  },
  {
    company: 'Client products',
    logo: undefined,
    kicker: 'What I did here',
    headline: 'Two sites. Both live.',
    role: 'Full-stack engineer',
    location: 'Sri Lanka · remote',
    dates: 'Shipped · live',
    note: 'Public sites for paying customers',
    summary:
      'I designed and shipped two customer-facing sites from the first layout to production - a licensed travel house and a Japan–Sri Lanka trade company.',
    projects: [
      {
        title: 'Ayubowan Travels',
        status: 'Live',
        stack: 'Next.js · React · Vercel',
        metric: 'Live',
        detail:
          'A licensed inbound operator needed a public desk that did not look like a catalogue template. I shipped itineraries, destinations, guest stories and a planning enquiry. Live at ayubowan-travels.vercel.app.',
      },
      {
        title: 'Tashiro Corporation',
        status: 'Live',
        stack: 'React · Vite',
        metric: 'Live',
        detail:
          'A Japan–Sri Lanka house - Tashiro IT, Ceylon tea, import/export - needed one place for the story and a way to book a call. I shipped it. Live at tashirocorporation.com.',
      },
    ],
  },
] as const;

export const FEATURED = [
  {
    title: 'FinAb',
    kicker: 'Lending · live',
    metric: 'LKR 70M sales',
    description: 'Mobile origination on WorkHub24. Ten hours of desk work now takes twenty minutes.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    tags: ['PHP', 'REST', 'SQL', 'VAPT'],
  },
  {
    title: 'Seylan payments',
    kicker: 'Treasury · live',
    metric: '4–5 min',
    description: 'CEFT/SWIFT from an approved ticket. Paper trail gone. GL written as the money moves.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    tags: ['Bank APIs', 'SQL', 'WorkHub24'],
  },
  {
    title: 'Merchant gateway',
    kicker: 'Customer pay · live',
    metric: '98%+ success',
    description: 'Instalments online. Webhooks, refunds, voids, tokenised checkout, real-time reconcile.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80',
    tags: ['Webhooks', 'REST', 'Frontend'],
  },
  {
    title: 'Document desk',
    kicker: 'Compliance',
    metric: '0-day originals',
    description: 'FastAPI + React + S3. Six roles, 2FA, watermarks, live audit over WebSockets.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    tags: ['Python', 'FastAPI', 'React', 'S3'],
  },
  {
    title: 'CRIB viewer',
    kicker: 'Credit · lead',
    metric: '10k calls / day',
    description: 'Bureau console for 100+ staff. Redis, 2FA, 30-day re-check. 35% less wait.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    tags: ['PHP', 'Redis', '2FA'],
  },
] as const;

export const CLIENT_PRODUCTS = [
  {
    title: 'Ayubowan Travels',
    kicker: 'Tourism · live',
    year: 'Customer product',
    description:
      'A licensed inbound operator’s public desk. Private Sri Lanka journeys - itineraries, destinations, experiences and a planning enquiry - shipped for the customer, not a catalogue template.',
    image: '/projects/ayubowan.jpg',
    technologies: ['Next.js', 'React', 'Vercel'],
    href: 'https://ayubowan-travels.vercel.app/',
    hrefLabel: 'Visit site',
  },
  {
    title: 'Tashiro Corporation',
    kicker: 'IT & trade · live',
    year: 'Customer product',
    description:
      'Japan–Sri Lanka company site: Tashiro IT, Ceylon tea and import/export. One place for the story, the offerings and a way to book a call.',
    image: '/projects/tashiro.jpg',
    technologies: ['React', 'Vite'],
    href: 'https://tashirocorporation.com/',
    hrefLabel: 'Visit site',
  },
] as const;

export const VIEWER_PROJECTS = [
  {
    title: 'Ayubowan',
    category: 'Tourism / Next.js',
    href: 'https://ayubowan-travels.vercel.app/',
    image: '/projects/ayubowan.jpg',
  },
  {
    title: 'Tashiro',
    category: 'IT / Trade',
    href: 'https://tashirocorporation.com/',
    image: '/projects/tashiro.jpg',
  },
  {
    title: 'FinAb',
    category: 'Lending / PHP',
    href: '#experience',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Seylan rails',
    category: 'Payments / Bank APIs',
    href: '#experience',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Merchant pay',
    category: 'Checkout / Webhooks',
    href: '#experience',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Document desk',
    category: 'Compliance / FastAPI',
    href: '#experience',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'CRIB viewer',
    category: 'Credit / Redis',
    href: '#experience',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Fake News',
    category: 'Research / IEEE',
    href: 'https://doi.org/10.1109/ICAC64487.2024.10851056',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Collaboard',
    category: 'Realtime / React',
    href: 'https://github.com/SansikaDev',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'e-Sarasaviya',
    category: 'LMS / Team of 3',
    href: 'https://github.com/SansikaDev',
    image: '/projects/e-sarasaviya.jpg',
  },
] as const;

export const PROJECT_SWATCHES = [
  {
    title: 'Ayubowan',
    description:
      'Shipped for a licensed Sri Lankan travel house. Private journeys, destinations and a planning enquiry - live for their customers.',
    tags: 'Next.js, React, Vercel, Tourism',
    color: '#C4A35A',
    focus: 52,
    button: 'Visit the site',
    link: 'https://ayubowan-travels.vercel.app/',
    image: {
      src: '/projects/ayubowan.jpg',
    },
  },
  {
    title: 'Tashiro',
    description:
      'Shipped for Tashiro Corporation. IT services, Ceylon tea and import/export - a Japan–Sri Lanka company on one public desk.',
    tags: 'React, Vite, IT, Trade',
    color: '#7CDB6A',
    focus: 40,
    button: 'Visit the site',
    link: 'https://tashirocorporation.com/',
    image: {
      src: '/projects/tashiro.jpg',
    },
  },
  {
    title: 'FinAb',
    description:
      'Mobile loan origination on WorkHub24. A 10-hour sales capture now takes about 20 minutes. Live since Feb 2026 - about LKR 70 million in sales.',
    tags: 'PHP, REST, SQL, VAPT, WorkHub24',
    color: '#A9C670',
    focus: 46,
    button: 'See the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Seylan rails',
    description:
      'CEFT/SWIFT from an approved WorkHub24 ticket. The payment leaves, the GL is written, a second store keeps the trace. 1–2 days became 4–5 minutes.',
    tags: 'Bank APIs, SQL, WorkHub24, CEFT',
    color: '#5ACAB9',
    focus: 58,
    button: 'See the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Merchant pay',
    description:
      'Seylan hosted checkout, refunds, voids, webhooks and real-time reconcile. Payment success above 98%.',
    tags: 'Webhooks, REST, Tokenisation',
    color: '#EDB47B',
    focus: 62,
    button: 'See the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Document desk',
    description:
      'FastAPI, React and S3. Six roles, 2FA, watermarks, live audit. Loans no longer wait two days for originals.',
    tags: 'Python, FastAPI, React, S3, 2FA',
    color: '#F7A6AD',
    focus: 48,
    button: 'See the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'CRIB viewer',
    description:
      'Credit-bureau console for 100+ staff. 10,000+ daily calls, Redis, 2FA, a 30-day re-check. Latency down 35%. I led the juniors.',
    tags: 'PHP, Redis, 2FA, CRIB',
    color: '#B8B8FE',
    focus: 70,
    button: 'See the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    },
  },
] as const;

export const PROJECTS = [
  {
    title: 'GL Reconcile',
    year: 'Live',
    description:
      'I built an Angular settlement desk: the day’s payment mix, the full payment book, and a reconcile screen that matches an uploaded processor CSV against what is already in the app. Vitest with a Jest-compatible API, JUnit and coverage on every push, then a production build to Vercel.',
    technologies: ['Angular', 'Vitest', 'GitHub Actions', 'Vercel'],
    href: 'https://gl-viewer-eight.vercel.app/login',
    hrefLabel: 'Open the desk',
  },
  {
    title: 'Fake News — Mixture of Experts',
    year: 'IEEE 2024',
    description:
      'I built the thesis and the platform. Sentiment and sarcasm as core experts in a mixture-of-experts design. Paper at IEEE ICAC 2024 — web, extension, mobile, Docker, Jenkins.',
    technologies: ['Python', 'NestJS', 'React', 'Docker', 'Jenkins'],
    href: 'https://doi.org/10.1109/ICAC64487.2024.10851056',
    hrefLabel: 'Read the DOI',
  },
  {
    title: 'Collaboard',
    year: '2024',
    description:
      'Shared drawing rooms. Socket.IO under 100ms. Boards that survive a refresh in MongoDB.',
    technologies: ['React', 'Socket.IO', 'MongoDB'],
    href: 'https://github.com/SansikaDev',
    hrefLabel: 'Open GitHub',
  },
  {
    title: 'e-Sarasaviya',
    year: 'LMS',
    description:
      'A learning management system I built with two colleagues — courses, a class scheduler, rooms, slots, and the people who have to meet.',
    technologies: ['LMS', 'Scheduler', 'Web'],
    href: 'https://github.com/SansikaDev',
    hrefLabel: 'Open GitHub',
  },
  {
    title: 'University shop',
    year: 'Coursework',
    description: 'A shop for the course: C# on the backend, TypeScript on the storefront.',
    technologies: ['C#', 'TypeScript'],
    href: 'https://github.com/SansikaDev',
    hrefLabel: 'Open GitHub',
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'PHP', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'C#', 'C++', 'Angular'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js', 'NestJS', 'REST', 'JWT', 'RBAC', '2FA', 'WebSockets'],
  },
  {
    title: 'Data & cloud',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Huawei Cloud', 'AWS S3', 'Docker', 'GitHub Actions', 'Vitest'],
  },
  {
    title: 'Interfaces',
    items: ['React', 'Redux', 'Angular', 'Flutter', 'Android', 'React Native', 'Tailwind CSS'],
  },
] as const;

export const SKILL_SWATCHES = [
  {
    title: 'Languages',
    description:
      'The languages I write production systems in - APIs, desks, mobile and the fronts people open on Monday, whatever the domain.',
    tags: 'Python, SQL, PHP, TypeScript, JavaScript, Java, Kotlin, C#',
    color: '#A9C670',
    focus: 42,
    button: 'See the stack',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Backend',
    description:
      'Secure REST, JWT, RBAC and 2FA. FastAPI, PHP and Node services that sit behind an approval - a bank, a booking, or the next floor I sit with.',
    tags: 'FastAPI, Flask, Node.js, NestJS, REST, JWT, RBAC, 2FA',
    color: '#5ACAB9',
    focus: 58,
    button: 'Open a system',
    link: '#work',
    image: {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Data & cloud',
    description:
      'Caches, ledgers and pipelines. Redis for 10k CRIB calls a day, S3 for the document desk, Docker and GitHub Actions to ship.',
    tags: 'PostgreSQL, MySQL, MongoDB, Redis, Huawei Cloud, AWS S3, Docker',
    color: '#EDB47B',
    focus: 64,
    button: 'Read the path',
    link: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Interfaces',
    description:
      'Desks people open every morning: React consoles, Flutter field apps, Android Java, and the Tailwind floors around them.',
    tags: 'React, Redux, Flutter, Android, React Native, Tailwind CSS',
    color: '#F7A6AD',
    focus: 48,
    button: 'See the work',
    link: '#work',
    image: {
      src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
    },
  },
  {
    title: 'Practice',
    description:
      'Unit through UAT, Agile rooms, and AI-assisted delivery - Cursor on the desk, then a human on the merge.',
    tags: 'UAT, System design, Agile, GitHub Actions, Cursor',
    color: '#B8B8FE',
    focus: 70,
    button: 'Get in touch',
    link: '#contact',
    image: {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
    },
  },
] as const;

export const MARQUEE = [
  'Python',
  'FastAPI',
  'PHP',
  'SQL',
  'React',
  'Flutter',
  'Redis',
  'JWT',
  '2FA',
  'WorkHub24',
  'Seylan',
  'Huawei Cloud',
  'Docker',
] as const;

export const EDUCATION = [
  {
    title: 'MSc in Computer Science',
    detail: 'International Master’s in Information Technology',
    place: 'University of Eastern Finland, Joensuu',
    dates: 'In progress',
    note: 'Finland',
  },
  {
    title: 'BSc (Hons) in IT - Software Engineering',
    detail: 'Second Class Upper Division',
    place: 'SLIIT, Malabe',
    dates: '2021 - 2025',
    note: 'Dean’s List, Year 4 Semester 2 · 2024',
  },
] as const;

export const PUBLICATIONS = [
  {
    title:
      'Improving Fake News Detection with a Mixture of Experts: Leveraging Sentiment Analysis and Sarcasm Detection as Core Expert Models',
    venue: 'IEEE ICAC 2024',
    href: 'https://doi.org/10.1109/ICAC64487.2024.10851056',
  },
  {
    title: 'User Based Sale Optimization for Fashion Retail',
    venue: 'Propulsion Technology Journal, Vol. 44, No. 5 (2023)',
    href: undefined,
  },
] as const;

export const CERTIFICATIONS = [
  { title: 'Secure AI solutions in the cloud', issuer: 'Microsoft Applied Skills', year: '' },
  { title: 'Cloud security and monitoring tasks', issuer: 'Microsoft Applied Skills', year: '' },
] as const;

export const LEADERSHIP = [
  {
    title: 'International Services Director',
    place: 'Rotaract Club of SLIIT',
    dates: '2023 - 2024',
  },
  {
    title: 'Board Member of the Month',
    place: 'Twice',
    dates: 'Rotaract',
  },
] as const;

export const LANGUAGES = [
  { name: 'English', level: 'C1 · IELTS 7.0' },
  { name: 'Finnish', level: 'Basic' },
] as const;
