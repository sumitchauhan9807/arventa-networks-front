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


export const countupData = [
  {
    value: '3',
    accent: 's',
    label: 'P95 delivery',
    description: 'Measured continuously',
  },
  {
    value: '99.5',
    accent: '%',
    label: 'Delivery success',
    description: 'With failover',
  },
  {
    value: '500',
    accent: 'ms',
    label: 'Failover time',
    description: 'Route-to-route',
  },
  {
    value: '200',
    accent: '+',
    label: 'Countries',
    description: 'Premium OTP routes',
  },
];

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

export const heroData = {
  hero: {
    eyebrow: 'Trust. Transparency. Accountability.',

    heading: {
      firstLine: 'Built on Trust.',
      secondLine: 'Driven by Compliance.',
    },
    description:
      'At Arventa Networks, compliance is at the core of everything we do. We uphold global regulatory standards, industry best practices and robust security frameworks to ensure responsible, transparent and reliable connectivity across our global operations.',
    primaryButton: 'Our Compliance Standards',
    secondaryButton: 'Contact Our Team',
  },
  stats: [
    {
      value: '180+',
      label: 'Countries Supported',
    },
    {
      value: 'Global',
      label: 'Regulatory Alignment',
    },
    {
      value: '24/7',
      label: 'Compliance Monitoring',
    },
  ],
  animation: 'compliance',
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

export const offeringGridData = {
  sectionId: 'contact-center',

  eyebrow: 'Contact Center & Software',

  heading: {
    first: 'Smarter Dialers.',
    highlight: 'Better Conversations.',
  },

  description: 'Boost your efficiency with our advanced dialer solutions, AI platform and fraud prevention tools. Empower your team with smarter technology designed to improve productivity and customer engagement.',

  cta: {
    label: 'Discover Contact Center Solutions',
    href: '#',
  },

  supportingNote: 'Intelligent solutions for modern business communication',

  product: {
    arrow: '→',
  },

  background: {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80',
  },
  items: [
    {
      icon: '✦',
      title: 'Tornado Dialer',
      description: 'High performance. Maximum reach.',
    },
    {
      icon: '◇',
      title: 'Call Con Dialer',
      description: 'Flexible. Reliable. Scalable.',
    },
    {
      icon: 'AI',
      title: 'AI Platform',
      description: 'Intelligent automation for better results.',
    },
    {
      icon: '◇',
      title: 'Fraud Prevention',
      description: 'Protect your business and customers.',
    },
    {
      icon: 'API',
      title: 'Software & APIs',
      description: 'Integrate. Automate. Grow.',
    },
  ],
};