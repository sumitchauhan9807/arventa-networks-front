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

export const teamData = [
  {
    name: 'Alex Morgan',
    designation: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    bio: 'Building the vision, culture, and long-term direction behind the company.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sarah Kim',
    designation: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
    bio: 'Turning complex infrastructure into simple, reliable communication.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Daniel Reed',
    designation: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85',
    bio: 'Keeping our global network resilient, responsive, and always online.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Maya Patel',
    designation: 'Product Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
    bio: 'Designing products that make powerful communication feel effortless.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

export const aboutContent = {
  eyebrow: 'One Network. Three Ventures.',

  heading: 'Who we are',

  description: 'ARVENTA Networks is a global telecommunications carrier, MVNO, and SIP trunk provider, delivering international DID numbers, mobile and fixed-line services, SIP trunks, and wholesale voice connectivity across 180+ countries.',

  secondaryDescription: 'We combine our own telecom infrastructure with our own contact center technology, including the Tornadodialer and Call Con Dialer, providing businesses with both the network and software they need—all from one partner.',

  founder: {
    name: 'Dipl-Ing. Idris Kawa',
    role: 'CEO & Founder, Arventa Networks',
    description: 'Headquartered in Florida, USA · Network operations across 180+ countries',
  },

  cta: {
    label: 'Discover Our Approach',
    href: '#solutions',
  },

  image: {
    src: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_13_um_11_17_44_2fb3b4c6a1.png',
    alt: 'ARVENTA Networks telecommunications operations',
  },

  network: {
    value: '180+',
    label: 'Countries connected',
  },
};

export const featureGridSectionData1 = {
  buttonText: 'Explore Solutions',
  eyebrow: 'What we do',
  heading: {
    firstLine: 'Communication',
    highlight: 'engineered.',
  },
  description: 'From carrier services to communication infrastructure, we provide the technology and connectivity businesses need to grow, connect and operate.',
  items: [
    {
      icon: '◈',
      title: 'Carrier & Network',
      description: 'SIP Trunking, Voice, DIDs, Connectivity and Security.',
    },
    {
      icon: '▣',
      title: 'Mobile & IoT',
      description: 'MVNO, eSIM and IoT / M2M connectivity solutions.',
    },
    {
      icon: '◉',
      title: 'Contact Center',
      description: 'Dialers, AI, fraud prevention and communication APIs.',
    },
    {
      icon: '✦',
      title: 'Technology Partnerships',
      description: 'Integrate. Automate. Grow with the right ecosystem.',
    },
  ],
};

export const featureGridSectionData2 = {
  eyebrow: 'Our Principles',

  heading: {
    firstLine: 'The way we',
    highlight: ' build.',
  },

  description: 'Principles that guide every system, connection, and decision we make.',

  items: [
    {
      number: '01',
      title: 'Reliability',
      description: 'Infrastructure built to perform when communication matters most.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M60 32V88M32 60H88" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path d="M48 61L56 69L73 51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          <path d="M24 60C24 40.118 40.118 24 60 24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M60 24C79.882 24 96 40.118 96 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M96 60C96 79.882 79.882 96 60 96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M60 96C40.118 96 24 79.882 24 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M42 51C47 41 58 37 68 40C76 42 82 48 84 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M78 48L84 56L74 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M78 69C73 79 62 83 52 80C44 78 38 72 36 64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M42 72L36 64L46 62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Intelligence',
      description: 'Better visibility and smarter infrastructure decisions.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M60 38V82M38 60H82" stroke="currentColor" strokeWidth="1" opacity="0.25" />
          <path d="M45 67L52 60L58 64L69 50L76 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="45" cy="67" r="2.5" fill="currentColor" />
          <circle cx="52" cy="60" r="2.5" fill="currentColor" />
          <circle cx="58" cy="64" r="2.5" fill="currentColor" />
          <circle cx="69" cy="50" r="2.5" fill="currentColor" />
          <circle cx="76" cy="56" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Scale',
      description: 'A foundation designed to grow alongside your requirements.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M30 82L48 64L60 76L91 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76 45H91V60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 92H92" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path d="M30 82V92M48 64V92M60 76V92M91 45V92" stroke="currentColor" strokeWidth="1" opacity="0.25" />
          <circle cx="30" cy="82" r="3" fill="currentColor" />
          <circle cx="48" cy="64" r="3" fill="currentColor" />
          <circle cx="60" cy="76" r="3" fill="currentColor" />
          <circle cx="91" cy="45" r="3" fill="currentColor" />
        </svg>
      ),
    },
  ],
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
