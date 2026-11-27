
export const countUpGridData = {
  id: 'operations',

  badge: 'Our Operations',

  heading: {
    firstLine: 'Keeping every',
    highlight: 'conversation connected.',
  },

  description: 'Arventa Networks operates and monitors the voice infrastructure that keeps businesses connected. From SIP trunking and call routing to network performance and service availability, our operations are focused on dependable communication.',

  secondaryDescription: 'Through continuous monitoring, proactive maintenance, and coordinated technical support, we work to keep voice services stable, calls flowing, and business communications running smoothly.',

  cta: {
    label: 'Explore Our Operations',
    href: '#operations-process',
    icon: '→',
  },

  supportingNote: 'Every connection matters. Every call counts.',

  statsPanel: {
    eyebrow: 'Operations at a glance',
    heading: 'Always on. Always connected.',
    badge: '24/7 Monitoring',

    stats: [
      { value: '24/7', label: 'Network Monitoring' },
      { value: '99.99%', label: 'Target Service Availability' },
      { value: 'Real-time', label: 'Traffic Monitoring' },
      { value: 'Global', label: 'Voice Connectivity' },
    ],

    footer: {
      description: 'Our focus is uninterrupted communication',
      status: 'Operations Active',
    },
  },
};

export const faqData = {
  sectionId: 'faq',

  heading: {
    eyebrow: 'Operations FAQs',
    first: 'Everything about',
    highlight: 'our operations.',
    description: 'Learn how we monitor, maintain, and support the SIP and VoIP infrastructure behind your business communications.',
  },

  faqs: [
    {
      question: 'How does Arventa Networks monitor its VoIP infrastructure?',
      answer: 'Our operational approach focuses on continuous monitoring of network performance, SIP connectivity, call traffic, and service availability. This helps identify unusual activity and potential service disruptions so our technical teams can investigate and respond.',
    },
    {
      question: 'Do you provide 24/7 network monitoring?',
      answer: 'Our operations are designed around continuous network oversight, with monitoring of critical voice infrastructure and service indicators to help maintain connectivity and identify potential issues.',
    },
    {
      question: 'How do you handle call routing issues?',
      answer: 'We investigate routing-related issues by examining SIP signaling, call paths, network connectivity, and relevant traffic indicators. Our technical team works to identify the source of the issue and coordinate the appropriate resolution.',
    },
    {
      question: 'What happens when a service disruption occurs?',
      answer: 'Potential incidents are assessed according to their impact and urgency. Our operational process includes investigation, technical escalation, service restoration activities, and communication with affected customers where applicable.',
    },
    {
      question: 'How do you maintain voice service reliability?',
      answer: 'We focus on proactive monitoring, infrastructure maintenance, performance analysis, and operational reviews. These practices help identify risks, improve network resilience, and support consistent voice service quality.',
    },
    {
      question: 'Can you support high-volume SIP traffic?',
      answer: 'Our SIP and VoIP solutions are designed to accommodate business communication requirements across different traffic volumes. Capacity planning, traffic visibility, and appropriate infrastructure configuration help support changing demand.',
    },
    {
      question: 'How can customers contact technical support?',
      answer: 'Customers can contact our technical support team to report connectivity problems, call quality issues, SIP registration failures, and other service-related concerns. Our team will help investigate and coordinate the next steps.',
    },
  ],

  contact: {
    heading: 'Need operational support?',
    description: 'Our team is ready to help with your SIP connectivity and voice infrastructure requirements.',
    cta: 'Contact our team',
    href: '#contact',
  },
};

export const CTAData = {
  sectionId: 'contact',

  heading: {
    eyebrow: 'Connected by Design',
    first: 'Reliable operations.',
    highlight: 'Better communication.',
  },

  description: 'Whether you need SIP trunking, VoIP connectivity, call routing support, or dependable voice infrastructure, Arventa Networks is ready to help keep your business connected.',

  cta: {
    primary: {
      label: 'Talk to Our Team',
      href: 'mailto:sales@example.com',
      arrow: '→',
    },
    secondary: {
      label: 'Explore Voice Solutions',
      darkHref: 'index.html',
      lightHref: '#solutions',
    },
  },
};

export const featureGridSectionData3 = {
  eyebrow: 'Operational Excellence',

  heading: {
    firstLine: 'What keeps our',
    highlight: 'network running.',
  },

  description: 'The operational foundations behind reliable SIP connectivity and business-critical voice communication.',

  items: [
    {
      number: '01',
      title: 'Continuous Monitoring',
      description: 'Ongoing visibility into network health, SIP connectivity, and service performance.',
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
      title: 'Proactive Maintenance',
      description: 'Identifying potential infrastructure issues and addressing risks before they escalate.',
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
      title: 'Incident Management',
      description: 'Structured investigation, escalation, and response to service interruptions and network issues.',
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
      title: 'Performance Optimization',
      description: 'Analyzing voice traffic, call performance, and network indicators to continually improve service quality.',
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
    eyebrow: '24/7 VoIP Operations & Network Monitoring',

    heading: {
      firstLine: 'Always Connected.',
      secondLine: 'Always Operational.',
    },

    description: 'Behind every successful call is dependable infrastructure. Our operations focus on monitoring SIP connectivity, managing voice traffic, and maintaining the systems that keep business communications moving.',

    primaryButton: 'Explore Our Operations',
    secondaryButton: 'Talk to Our Team',
  },

  stats: [
    {
      value: '24/7',
      label: 'Network Monitoring',
    },
    {
      value: '99.99%',
      label: 'Target Availability',
    },
    {
      value: 'Real-time',
      label: 'Network Visibility',
    },
  ],

  animation: "operations"
};

export const hero1Data = {
  hero: {
    title: 'The People Behind',
    highlightedTitle: 'Every Connection.',
    description: 'Our operations bring together technical expertise, network oversight, and coordinated support to keep SIP and VoIP services performing reliably. From infrastructure monitoring to incident response, every detail matters.',
    primaryButton: 'Our Operational Approach',
    secondaryButton: 'Contact Our Team',
  },

  services: {
    items: [
      {
        number: '01',
        title: 'Network Monitoring',
        description: 'Continuous visibility into voice infrastructure, connectivity, and service health.',
        footer: 'Always-on oversight',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        number: '02',
        title: 'Technical Support',
        description: 'Structured investigation and assistance for SIP connectivity and VoIP service issues.',
        footer: 'Expert assistance',
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
        title: 'Traffic Management',
        description: 'Visibility and operational oversight across call traffic, routing, and network capacity.',
        footer: 'Built for performance',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19V5m0 14h16M7 15l4-5 3 2 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
};

export const hero2Data = {
  hero: {
    eyebrow: '24/7 Network Operations',
    title: 'Every connection.',
    highlightedTitle: 'Under control.',
    description: 'Our operational approach combines continuous monitoring, network visibility, and structured incident management to help keep your SIP and VoIP services running smoothly.',
    primaryButton: 'Explore Our Process',
    secondaryButton: 'Contact Operations',
  },

  stats: {
    items: [
      {
        value: '24 / 7',
        label: 'Network Monitoring',
        icon: '◉',
      },
      {
        value: 'Real-time',
        label: 'Service Visibility',
        icon: '◌',
      },
      {
        value: 'SIP',
        label: 'Voice Infrastructure',
        icon: '◎',
      },
      {
        value: 'Proactive',
        label: 'Issue Detection',
        icon: '↯',
      },
    ],
  },

  team: {
    title: 'Your communications matter. So does every detail.',
    status: 'Operations Active',
    availability: 'Continuous network oversight',
    members: [
      {
        initials: 'NO',
        name: 'Network Operations',
        role: 'Infrastructure Monitoring',
        status: 'Monitoring',
      },
      {
        initials: 'VS',
        name: 'Voice Support',
        role: 'SIP & VoIP Services',
        status: 'Available',
      },
      {
        initials: 'IR',
        name: 'Incident Response',
        role: 'Technical Investigation',
        status: 'On Standby',
      },
    ],
  },

  activity: {
    title: 'Network operations overview',
    status: 'Monitoring',
  },
};

export const hero3Data = {
  hero: {
    eyebrow: 'Our Operational Approach',

    heading: {
      firstLine: 'Behind every call.',
      secondLine: 'A reliable network.',
    },

    description: 'Reliable voice communication takes more than technology. It requires the right people, structured processes, and continuous attention to the infrastructure connecting businesses around the world.',

    primaryCta: {
      label: 'Explore Our Process',
      href: '#operations-process',
    },

    secondaryCta: {
      label: 'Contact Our Team',
      href: '#contact',
    },
  },

  stats: {
    items: [
      {
        value: '24/7',
        label: 'Operational Oversight',
      },
      {
        value: 'SIP',
        label: 'Voice Connectivity',
      },
      {
        value: 'Real-time',
        label: 'Performance Visibility',
      },
      {
        value: 'Always',
        label: 'Customer Focus',
      },
    ],
  },

  values: {
    eyebrow: 'Operational Values',
    heading: 'How We Work',
    label: 'OUR COMMITMENT',

    items: [
      {
        number: '01',
        title: 'Responsibility',
        description: 'We believe every service deserves clear ownership, disciplined management, and a commitment to dependable delivery.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },

      {
        number: '02',
        title: 'Operational Resilience',
        description: 'We focus on maintaining robust infrastructure and preparing for changing network demands and service challenges.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19V12M10 19V7M16 19V10M22 19V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="m3 8 6-4 6 3 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },

      {
        number: '03',
        title: 'Service Reliability',
        description: 'Every call matters. We prioritize monitoring, service quality, and consistent voice connectivity.',
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
    eyebrow: 'Our Operations',
    titleLine1: 'From first alert',
    titleHighlight: 'to resolution.',
    description: 'Keeping voice services reliable requires a structured operational approach. We combine continuous monitoring, intelligent investigation, coordinated response, and ongoing improvement to support dependable SIP and VoIP connectivity.',

    statusText: 'A continuous approach to network reliability',
    flowText: 'Monitor · Detect · Investigate · Resolve',
    footerTitle: 'Reliability through continuous improvement',
    footerDescription: 'Every operational insight helps us strengthen the network.',
    phaseLabel: 'Operational stage',
  },

  steps: [
    {
      number: '01',
      title: 'Monitor',
      subtitle: 'Continuous network visibility',
      description: 'Monitor SIP infrastructure, network connectivity, voice traffic, and service performance to maintain visibility into the health of critical communication systems.',
    },
    {
      number: '02',
      title: 'Detect',
      subtitle: 'Identify potential issues',
      description: 'Analyze service indicators, network alerts, and traffic patterns to identify anomalies, potential disruptions, and performance concerns.',
    },
    {
      number: '03',
      title: 'Investigate & Respond',
      subtitle: 'Take coordinated action',
      description: 'Investigate connectivity problems, SIP signaling issues, routing concerns, and service incidents while coordinating the appropriate technical response.',
    },
    {
      number: '04',
      title: 'Resolve & Improve',
      subtitle: 'Strengthen service reliability',
      description: 'Work toward service restoration, review incident findings, document corrective actions, and identify opportunities to improve infrastructure and operational processes.',
    },
  ],
};

export const principlesData = {
  content: {
    eyebrow: 'What Guides Our Operations',
    titleLine1: 'Reliable voice starts',
    titleLine2: 'with reliable operations.',
    description: 'Behind every dependable communication service is a commitment to accountability, technical discipline, and continuous improvement. These principles guide how we manage our infrastructure and support our customers.',

    cardFooter: 'The principles behind our operations',
    approachEyebrow: 'The Arventa Approach',
    approachTitle: 'People, processes, and technology working together.',
    approachDescription: 'Because dependable SIP and VoIP services require more than infrastructure alone.',

    approachHighlight: ' Built around reliability.',

    approachLabel: 'Operational commitment',
    approachSubLabel: 'Focused on dependable communication',
    principlePrefix: 'PRINCIPLE',
    philosophyFooter: 'Our operational philosophy',
  },

  items: [
    {
      number: '01',
      title: 'Accountability',
      description: 'Clear ownership, defined responsibilities, and documented operational procedures help ensure every issue receives the appropriate attention.',
      icon: "",
      tag: 'Ownership',
    },
    {
      number: '02',
      title: 'Transparency',
      description: 'Clear communication, structured updates, and coordinated escalation help customers understand service issues and operational progress.',
      icon: "",
      tag: 'Communication',
    },
    {
      number: '03',
      title: 'Proactive Monitoring',
      description: 'Continuous visibility into network health, SIP connectivity, and voice performance helps identify potential risks before they become larger problems.',
      icon: "",
      tag: 'Prevention',
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      description: 'Operational reviews, incident analysis, and performance insights help strengthen infrastructure, refine processes, and improve service reliability.',
      icon: "",
      tag: 'Progress',
    },
  ],
};
