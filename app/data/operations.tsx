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
