export const countUpGridData = {
  id: 'who-we-are',

  badge: 'Who We Are',

  heading: {
    firstLine: 'Infrastructure with',
    highlight: 'purpose.',
  },

  description: 'Arventa Networks operates at the intersection of telecom, technology and connectivity. We create communication infrastructure designed for organizations that depend on reliable communication every day.',

  secondaryDescription: 'From carrier services and voice infrastructure to mobile, IoT and contact center technologies, our approach is built around connectivity, flexibility and long-term partnerships.',

  cta: {
    label: 'Discover Our Approach',
    href: '#solutions',
    icon: '→',
  },

  supportingNote: 'Reliable connectivity. Built for the long term.',

  statsPanel: {
    eyebrow: 'At a glance',
    heading: 'Network at scale',
    badge: 'Global reach',

    stats: [
      { value: '99.9%', label: 'Network Uptime' },
      { value: '200+', label: 'Carrier Partners' },
      { value: '180+', label: 'Countries' },
      { value: '24/7', label: 'Operations' },
    ],

    footer: {
      description: 'Connectivity you can count on',
      status: 'Always connected',
    },
  },
};

export const faqData = {
  sectionId: 'faq',

  heading: {
    eyebrow: 'Frequently Asked Questions',
    first: 'Answers to help you',
    highlight: 'move forward.',
    description: 'Everything you need to know about our messaging infrastructure, global reach, and getting started.',
  },

  faqs: [
    {
      question: 'What is Arventa Networks?',
      answer: 'Arventa Networks provides reliable messaging infrastructure designed to help businesses deliver OTPs, verification codes, and critical notifications across global markets.',
    },
    {
      question: 'How reliable is your message delivery?',
      answer: 'Our infrastructure is designed with intelligent routing, delivery monitoring, and failover capabilities to help maintain reliable message delivery, even when individual routes experience issues.',
    },
    {
      question: 'Which countries and regions do you support?',
      answer: 'We support messaging connectivity across 200+ countries and territories, helping businesses reach customers through a broad network of premium messaging routes.',
    },
    {
      question: 'How quickly can we integrate your platform?',
      answer: 'Integration timelines depend on your use case and technical requirements. Our team can help you connect through the appropriate API and guide you through setup, testing, and deployment.',
    },
    {
      question: 'Do you support high-volume messaging?',
      answer: 'Our messaging infrastructure is designed to support growing traffic demands, with routing capabilities intended to help businesses manage delivery at scale.',
    },
    {
      question: 'How can I get started with Arventa Networks?',
      answer: "Contact our team to discuss your messaging requirements, target markets, expected traffic, and integration needs. We'll help identify a suitable solution for your business.",
    },
  ],

  contact: {
    heading: 'Still have questions?',
    description: "Let's talk about your messaging requirements.",
    cta: 'Contact our team',
    href: '#contact',
  },
};

export const CTAData = {
  sectionId: 'contact',

  heading: {
    eyebrow: "Let's Connect",
    first: "Let's build what's",
    highlight: 'next.',
  },

  description: 'Whether you are looking for carrier connectivity, mobile infrastructure, IoT solutions or intelligent communications software, our team is ready to discuss your requirements.',

  cta: {
    primary: {
      label: 'Contact / Sales',
      href: 'mailto:sales@example.com',
      arrow: '→',
    },
    secondary: {
      label: 'Explore Our Solutions',
      darkHref: 'index.html',
      lightHref: '#solutions',
    },
  },
};

export const featureGridSectionData3 = {
  eyebrow: 'Our Principles',

  heading: {
    firstLine: 'The way we',
    highlight: ' build.',
  },

  description: 'The principles behind every system, connection, and decision we make.',

  items: [
    {
      number: '01',
      title: 'Reliability',
      description: 'Infrastructure built to perform when communication matters most.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="60" cy="60" r="43" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <path d="M60 28V92M28 60H92" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M46 61L55 70L75 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Flexibility',
      description: 'Solutions that adapt as your business and network evolve.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          <path d="M42 50C47 40 59 36 69 40C77 43 82 49 84 57" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M76 49L84 57L74 59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M78 70C73 80 61 84 51 80C43 77 38 71 36 63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M44 71L36 63L46 61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="60" r="7" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Intelligence',
      description: 'Better visibility and smarter infrastructure decisions.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="60" cy="60" r="43" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path d="M39 71L50 60L58 65L71 48L81 55" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="39" cy="71" r="3" fill="currentColor" />
          <circle cx="50" cy="60" r="3" fill="currentColor" />
          <circle cx="58" cy="65" r="3" fill="currentColor" />
          <circle cx="71" cy="48" r="3" fill="currentColor" />
          <circle cx="81" cy="55" r="3" fill="currentColor" />
          <path d="M60 30V90M30 60H90" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Scale',
      description: 'A foundation designed to grow alongside your requirements.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M30 82L47 67L59 75L91 43" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76 43H91V58" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 92H92" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M30 82V92M47 67V92M59 75V92M91 43V92" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <circle cx="30" cy="82" r="3" fill="currentColor" />
          <circle cx="47" cy="67" r="3" fill="currentColor" />
          <circle cx="59" cy="75" r="3" fill="currentColor" />
          <circle cx="91" cy="43" r="3" fill="currentColor" />
        </svg>
      ),
    },
  ],
};

export const heroData = {
  hero: {
    eyebrow: 'Global Connectivity. Intelligent Solutions.',

    heading: {
      firstLine: 'Connecting the World.',
      secondLine: 'Intelligently.',
    },
    description: 'Arventa Networks connects businesses, carriers and technologies across the globe through intelligent telecom, mobile, IoT and AI infrastructure.',
    primaryButton: 'Explore Our Network',
    secondaryButton: 'Talk to an Expert',
  },
  stats: [
    {
      value: '180+',
      label: 'Countries',
    },
    {
      value: '99.99%',
      label: 'Network Uptime',
    },
    {
      value: '24/7',
      label: 'Operations',
    },
  ],
  animation:"operations"
};
export const hero1Data = {
  hero: {
    title: 'Voice Without',
    highlightedTitle: 'Boundaries.',
    description: 'Build flexible voice infrastructure with seamless SIP connectivity and business-ready communication services designed to connect teams, scale conversations, and power your business worldwide.',
    primaryButton: 'Get Started',
    secondaryButton: 'Explore Solutions',
  },

  services: {
    items: [
      {
        number: '01',
        title: 'SIP Trunking',
        description: 'Flexible, reliable SIP connectivity for your business.',
        footer: 'Built for your business',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        number: '02',
        title: 'Voice Integration',
        description: 'Connect voice services with your existing systems.',
        footer: 'Built for your business',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 6.5h3a4 4 0 0 1 4 4V14M14 17.5h-3a4 4 0 0 1-4-4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        number: '03',
        title: 'Scalable Capacity',
        description: 'Adapt call capacity to changing business demand.',
        footer: 'Built for your business',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19V5m0 14h16M7 15l4-5 3 2 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
}

export const hero2Data = {
  hero: {
    eyebrow: '24/7 Network Operations',
    title: 'Always connected.',
    highlightedTitle: 'Always operational.',
    description: 'Behind every call is a global team monitoring infrastructure, protecting connectivity, and keeping your communication running around the clock.',
    primaryButton: 'Meet the Team',
    secondaryButton: 'View Network Status',
  },

  stats: {
    items: [
      {
        value: '99.99%',
        label: 'Network Uptime',
        icon: '◉',
      },
      {
        value: '24 / 7',
        label: 'Active Monitoring',
        icon: '◌',
      },
      {
        value: '42+',
        label: 'Countries Covered',
        icon: '◎',
      },
      {
        value: '18ms',
        label: 'Avg. Latency',
        icon: '↯',
      },
    ],
  },

  team: {
    title: 'Your network is being watched.',
    status: 'Operations Online',
    availability: 'Global team online',
    members: [
      {
        initials: 'AM',
        name: 'Alex Morgan',
        role: 'Network Engineer',
        status: 'Online',
      },
      {
        initials: 'SK',
        name: 'Sarah Kim',
        role: 'Voice Specialist',
        status: 'Online',
      },
      {
        initials: 'DR',
        name: 'Daniel Reed',
        role: 'Infrastructure',
        status: 'Monitoring',
      },
    ] 
  },

  activity: {
    title: 'Live infrastructure activity',
    status: 'Normal',
  },
}

export const hero3Data = {
  hero: {
    eyebrow: 'About Our Company',

    heading: {
      firstLine: 'We connect people.',
      secondLine: 'We move businesses.',
    },

    description: 'We build the communication infrastructure behind modern businesses, bringing together intelligent technology, dependable networks, and human-first service to make every conversation count.',

    primaryCta: {
      label: 'Discover Our Story',
      href: '#our-story',
    },

    secondaryCta: {
      label: 'Meet Our Team',
      href: '#team',
    },
  },

  stats: {
    items: [
      {
        value: '10+',
        label: 'Years of Experience',
      },
      {
        value: '42+',
        label: 'Countries Connected',
      },
      {
        value: '99.99%',
        label: 'Network Uptime',
      },
      {
        value: '24/7',
        label: 'Global Support',
      },
    ],
  },

  values: {
    eyebrow: 'What We Believe',
    heading: 'What We Believe',
    label: 'OUR PRINCIPLES',

    items: [
      {
        number: '01',
        title: 'Human First',
        description: 'Technology should make communication simpler, more natural, and more human.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },

      {
        number: '02',
        title: 'Built to Scale',
        description: 'Infrastructure that grows with ambitious businesses without adding unnecessary complexity.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19V12M10 19V7M16 19V10M22 19V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="m3 8 6-4 6 3 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },

      {
        number: '03',
        title: 'Always Reliable',
        description: 'Every connection matters. Our technology and people are focused on dependable communication.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3 20 6v5.5c0 4.5-3.2 7.6-8 9.5-4.8-1.9-8-5-8-9.5V6l8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m8.5 12 2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
};

export const processData = {
  content: {
    eyebrow: 'Our operations',
    titleLine1: 'From first signal',
    titleHighlight: 'to resolution.',
    description: 'Reliable operations require more than monitoring. Our approach brings visibility, structured response, and continuous improvement together in one operational lifecycle.',

    statusText: 'Designed for continuous operational oversight',
    flowText: 'Monitor · Detect · Respond · Improve',
    footerTitle: 'Built around continuous improvement',
    footerDescription: 'Every incident creates an opportunity to learn.',
    phaseLabel: 'Operational phase',
  },
  steps: [
    {
      number: '01',
      title: 'Monitor',
      subtitle: 'Always-on visibility',
      description: 'Monitor network performance, service availability, and operational signals to identify potential issues early.',
    },
    {
      number: '02',
      title: 'Detect',
      subtitle: 'Identify what matters',
      description: 'Analyze alerts and service indicators to identify anomalies and prioritize incidents based on their impact.',
    },
    {
      number: '03',
      title: 'Respond',
      subtitle: 'Coordinate the right action',
      description: 'Coordinate technical teams, investigate incidents, and work toward restoring normal service as quickly as possible.',
    },
    {
      number: '04',
      title: 'Improve',
      subtitle: 'Learn and strengthen',
      description: 'Review incidents, document findings, and use operational insights to improve processes and resilience.',
    },
  ],
};

export const principlesData = {
  content: {
    eyebrow: 'What guides us',
    titleLine1: 'Reliability is built',
    titleLine2: 'into every decision.',
    description: 'Technology matters. So do the people, processes, and principles behind it. Our operational philosophy is built around disciplined execution, transparent communication, and a commitment to learning.',

    cardFooter: 'Our operational principles',
    approachEyebrow: 'The Arventa approach',
    approachTitle: 'People, processes, and technology working together.',
    approachDescription: 'Because dependable business communication begins with dependable operations.',

    approachHighlight: ' Working as one.',

    approachLabel: 'Built on trust',
    approachSubLabel: 'Guided by our principles',
    principlePrefix: 'PRINCIPLE',
    philosophyFooter: 'Our operational philosophy',
  },

  items: [
    {
      number: '01',
      title: 'Accountability',
      description: 'Clear ownership, defined responsibilities, and documented processes help keep operational work organized and traceable.',
      icon: "",
      tag: 'Ownership',
    },
    {
      number: '02',
      title: 'Communication',
      description: 'Structured updates and coordinated escalation help stakeholders understand what is happening and what comes next.',
      icon: "",
      tag: 'Transparency',
    },
    {
      number: '03',
      title: 'Proactive thinking',
      description: 'Monitoring service indicators and reviewing emerging patterns helps teams identify risks before they become larger problems.',
      icon: "",
      tag: 'Prevention',
    },
    {
      number: '04',
      title: 'Continuous improvement',
      description: 'Operational reviews and documented lessons help strengthen processes, refine workflows, and support future reliability.',
      icon: "",
      tag: 'Progress',
    },
  ],
};