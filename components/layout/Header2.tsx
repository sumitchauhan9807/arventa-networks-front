'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Building2, Users, Handshake, ShieldCheck, Network, PhoneCall, Hash, Globe, Shield, Smartphone, Radio, Cpu, Headset, Phone, GitCompareArrows, Bot, ShieldAlert, Code2, ChevronDown, Menu, X, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/slices/themeSlice';

const GOLD = '#E0B653';
const GOLD_LIGHT = '#F3D58A';
const GOLD_DARK = '#9A7020';

const menuSections = [
  {
    title: 'Unternehmen',
    icon: Building2,
    items: [
      {
        title: 'Über Arventa',
        description: 'Discover our company and vision.',
        href: '/about',
        icon: Building2,
      },
      {
        title: 'Team & 24/7 Operations',
        description: 'Experts supporting your network around the clock.',
        href: '/team',
        icon: Users,
      },
      {
        title: 'Partner & Ecosystem',
        description: 'Our global connectivity partnerships.',
        href: '/partner',
        icon: Handshake,
      },
      {
        title: 'Compliance',
        description: 'Reliable and compliant communications.',
        href: '/compliance',
        icon: ShieldCheck,
      },
    ],
    featured: {
      eyebrow: 'ABOUT ARVENTA',
      title: 'Your Global Connectivity Partner',
      description: 'We bring networks, communication technology, and people together with dependable services built for global business.',
      points: ['Global connectivity expertise', 'Reliable 24/7 operations', 'A partner-first approach'],
      cta: 'Discover Arventa',
      href: '/about',
    },
  },
  {
    title: 'Carrier & Netzwerk',
    icon: Network,
    items: [
      {
        title: 'Carrier & Wholesale',
        description: 'Global carrier and wholesale services.',
        href: '/carrier-wholesale',
        icon: Network,
      },
      {
        title: 'Voice & SIP',
        description: 'Flexible voice and SIP connectivity.',
        href: '/voice-sip',
        icon: PhoneCall,
      },
      {
        title: 'Rufnummern & DIDs',
        description: 'Global numbering solutions.',
        href: '/rufnummern',
        icon: Hash,
      },
      {
        title: 'Internet & Connectivity',
        description: 'Reliable worldwide connectivity.',
        href: '/connectivity',
        icon: Globe,
      },
      {
        title: 'VPN & Network Security',
        description: 'Secure your network infrastructure.',
        href: '/network-security',
        icon: Shield,
      },
    ],
    featured: {
      eyebrow: 'CARRIER SERVICES',
      title: 'Built for Global Voice Connectivity',
      description: 'Connect your business with scalable voice, numbering, and network services designed for demanding communication environments.',
      points: ['International voice solutions', 'Flexible connectivity options', 'Security-focused infrastructure'],
      cta: 'Explore Network Services',
      href: '/carrier-wholesale',
    },
  },
  {
    title: 'Mobile & IoT',
    icon: Smartphone,
    items: [
      {
        title: 'Mobile & MVNO',
        description: 'Flexible mobile connectivity solutions.',
        href: '/mobile-mvno',
        icon: Smartphone,
      },
      {
        title: 'eSIM',
        description: 'Modern digital SIM connectivity.',
        href: '/esim',
        icon: Radio,
      },
      {
        title: 'IoT / M2M',
        description: 'Connect devices and machines globally.',
        href: '/iot-m2m',
        icon: Cpu,
      },
    ],
    featured: {
      eyebrow: 'CONNECTED EVERYWHERE',
      title: 'Connect Every Device',
      description: 'Enable mobile services and connected devices with flexible solutions for modern businesses and IoT applications.',
      points: ['Mobile and MVNO capabilities', 'Digital eSIM solutions', 'IoT and M2M connectivity'],
      cta: 'Explore Mobile & IoT',
      href: '/mobile-mvno',
    },
  },
  {
    title: 'Contact Center & Software',
    icon: Headset,
    items: [
      {
        title: 'Contact Center Lösungen',
        description: 'Modern customer communication platforms.',
        href: '/contact-center',
        icon: Headset,
      },
      {
        title: 'Tornado Dialer',
        description: 'Powerful outbound dialing technology.',
        href: '/tornado-dialer',
        icon: Phone,
      },
      {
        title: 'Call Con Dialer',
        description: 'Calling and campaign management.',
        href: '/call-con-dialer',
        icon: PhoneCall,
      },
      {
        title: 'Vergleichsseite',
        description: 'Compare available solutions.',
        href: '/vergleich',
        icon: GitCompareArrows,
      },
      {
        title: 'AI Platform',
        description: 'Intelligent AI-powered communication.',
        href: '/ai-platform',
        icon: Bot,
      },
      {
        title: 'Fraud Prevention',
        description: 'Detect and prevent communication fraud.',
        href: '/fraud-prevention',
        icon: ShieldAlert,
      },
      {
        title: 'Software & APIs',
        description: 'Integrate communications into your products.',
        href: '/software-apis',
        icon: Code2,
      },
    ],
    featured: {
      eyebrow: 'SMART COMMUNICATIONS',
      title: 'Smarter Conversations. Better Results.',
      description: 'Explore dialer technology, AI platforms, contact center solutions, and software integrations that help businesses work smarter.',
      points: ['Modern contact center tools', 'AI and automation capabilities', 'Software and API integrations'],
      cta: 'Explore Our Solutions',
      href: '/contact-center',
    },
  },
];

// Unique content for every individual navigation link.
const menuItemContent = {
  '/about': {
    eyebrow: 'ABOUT ARVENTA',
    title: 'Meet Arventa Networks',
    description: 'Discover our mission, expertise, and approach to global business communications.',
    points: ['Our company and vision', 'Global connectivity expertise', 'Business-focused solutions'],
    cta: 'About Arventa',
  },
  '/team': {
    eyebrow: 'OUR PEOPLE',
    title: 'Experts Around the Clock',
    description: 'Meet the specialists who help keep business communications reliable around the clock.',
    points: ['24/7 operational support', 'Technical expertise', 'Customer-focused service'],
    cta: 'Meet Our Team',
  },
  '/partner': {
    eyebrow: 'GLOBAL ECOSYSTEM',
    title: 'Stronger Together',
    description: 'Explore the partnerships that help extend connectivity and communication capabilities worldwide.',
    points: ['Global partner ecosystem', 'Carrier relationships', 'Collaborative solutions'],
    cta: 'Explore Partnerships',
  },
  '/compliance': {
    eyebrow: 'TRUST & SECURITY',
    title: 'Compliance by Design',
    description: 'Learn about our approach to responsible, secure, and compliant communications.',
    points: ['Compliance-focused processes', 'Operational reliability', 'Responsible communications'],
    cta: 'Explore Compliance',
  },

  '/carrier-wholesale': {
    eyebrow: 'CARRIER SERVICES',
    title: 'Global Carrier Solutions',
    description: 'Scalable wholesale communication services designed for carriers, operators, and enterprises.',
    points: ['International carrier services', 'Wholesale voice connectivity', 'Flexible commercial models'],
    cta: 'Explore Carrier Services',
  },
  '/voice-sip': {
    eyebrow: 'VOICE CONNECTIVITY',
    title: 'Voice Without Boundaries',
    description: 'Build flexible voice infrastructure with SIP connectivity and business-ready communication services.',
    points: ['SIP trunking solutions', 'Voice infrastructure integration', 'Scalable call capacity'],
    cta: 'Explore Voice & SIP',
  },
  '/rufnummern': {
    eyebrow: 'GLOBAL NUMBERING',
    title: 'Reach Customers Worldwide',
    description: 'Explore international numbering and DID solutions for business communication.',
    points: ['International number availability', 'DID connectivity', 'Multi-market communication'],
    cta: 'Explore Numbering',
  },
  '/connectivity': {
    eyebrow: 'GLOBAL CONNECTIVITY',
    title: 'Connect Your Business',
    description: 'Discover connectivity options designed to support distributed teams, applications, and infrastructure.',
    points: ['Business internet connectivity', 'Global network access', 'Flexible connectivity options'],
    cta: 'Explore Connectivity',
  },
  '/network-security': {
    eyebrow: 'NETWORK PROTECTION',
    title: 'Security Across Your Network',
    description: 'Support secure business communications with network protection and connectivity solutions.',
    points: ['VPN connectivity', 'Network security solutions', 'Infrastructure protection'],
    cta: 'Explore Network Security',
  },

  '/mobile-mvno': {
    eyebrow: 'MOBILE CONNECTIVITY',
    title: 'Build Your Mobile Offering',
    description: 'Explore flexible mobile connectivity and MVNO capabilities for modern businesses.',
    points: ['Mobile connectivity services', 'MVNO enablement', 'Flexible service models'],
    cta: 'Explore Mobile',
  },
  '/esim': {
    eyebrow: 'DIGITAL SIM',
    title: 'Connectivity Without Physical SIMs',
    description: 'Discover eSIM capabilities for flexible digital connectivity and device activation.',
    points: ['Digital SIM provisioning', 'Flexible device connectivity', 'Simplified deployment'],
    cta: 'Explore eSIM',
  },
  '/iot-m2m': {
    eyebrow: 'CONNECTED DEVICES',
    title: 'Connect Devices at Scale',
    description: 'Explore IoT and M2M connectivity options for connected products, equipment, and applications.',
    points: ['Device-to-device connectivity', 'IoT deployment support', 'Scalable device management'],
    cta: 'Explore IoT & M2M',
  },

  '/contact-center': {
    eyebrow: 'CUSTOMER EXPERIENCE',
    title: 'Create Better Conversations',
    description: 'Discover contact center solutions designed to help teams manage customer interactions.',
    points: ['Customer communication workflows', 'Agent productivity', 'Flexible contact center solutions'],
    cta: 'Explore Contact Centers',
  },
  '/tornado-dialer': {
    eyebrow: 'OUTBOUND TECHNOLOGY',
    title: 'Power Your Outbound Campaigns',
    description: 'Explore Tornado Dialer for structured outbound calling and campaign operations.',
    points: ['Outbound calling workflows', 'Campaign management', 'Operational visibility'],
    cta: 'Explore Tornado Dialer',
  },
  '/call-con-dialer': {
    eyebrow: 'CALLING & CAMPAIGNS',
    title: 'Make Every Campaign Count',
    description: 'Discover calling technology designed to organize campaigns and support calling operations.',
    points: ['Calling campaign workflows', 'Campaign organization', 'Communication operations'],
    cta: 'Explore Call Con Dialer',
  },
  '/vergleich': {
    eyebrow: 'COMPARE SOLUTIONS',
    title: 'Find the Right Fit',
    description: 'Compare available communication solutions to identify the best match for your requirements.',
    points: ['Review available solutions', 'Compare key capabilities', 'Choose the right approach'],
    cta: 'Compare Solutions',
  },
  '/ai-platform': {
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    title: 'Smarter AI-Powered Communication',
    description: 'Explore AI-driven communication capabilities designed to support modern business workflows.',
    points: ['AI-enabled workflows', 'Communication automation', 'Intelligent customer interactions'],
    cta: 'Explore AI Platform',
  },
  '/fraud-prevention': {
    eyebrow: 'COMMUNICATION SECURITY',
    title: 'Stay Ahead of Communication Fraud',
    description: 'Explore tools and approaches for identifying suspicious activity and protecting communication services.',
    points: ['Fraud risk monitoring', 'Suspicious activity detection', 'Communication risk management'],
    cta: 'Explore Fraud Prevention',
  },
  '/software-apis': {
    eyebrow: 'DEVELOPER SOLUTIONS',
    title: 'Build With Communication APIs',
    description: 'Discover software and API capabilities for integrating communications into your applications and workflows.',
    points: ['API-driven integrations', 'Application connectivity', 'Flexible software workflows'],
    cta: 'Explore Software & APIs',
  },
};

export default function Header({ mode }) {
  const dispatch = useDispatch();
  const reduxTheme = useSelector((state) => state.theme?.mode);

  const isDark = (mode ?? reduxTheme) === 'dark';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const [activeDesktopSection, setActiveDesktopSection] = useState(null);
  const [activeDesktopItem, setActiveDesktopItem] = useState(null);

  const closeMenus = () => {
    setActiveDesktopSection(null);
    setActiveDesktopItem(null);
    setMobileOpen(false);
    setActiveMobileSection(null);
  };

  const styles = {
    header: isDark ? 'border-white/10 bg-[#070808]/95 text-white shadow-[0_8px_35px_rgba(0,0,0,0.25)]' : 'border-slate-200 bg-white/95 text-slate-900 shadow-sm',

    logoText: isDark ? 'text-white' : 'text-slate-950',
    logoSubtext: isDark ? 'text-white/55' : 'text-slate-500',

    dropdown: isDark ? 'border-white/10 bg-[#0B0D0D] shadow-[0_25px_80px_rgba(0,0,0,0.65)]' : 'border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.15)]',

    dropdownText: isDark ? 'text-white' : 'text-slate-900',
    muted: isDark ? 'text-white/55' : 'text-slate-500',

    mobileMenu: isDark ? 'border-white/10 bg-[#080909]' : 'border-slate-200 bg-white',

    iconButton: isDark ? 'border-white/15 text-white/80 hover:border-[#E0B653] hover:bg-[#E0B653] hover:text-black' : 'border-slate-200 text-slate-700 hover:border-[#E0B653] hover:bg-[#E0B653] hover:text-black',

    activeNav: isDark ? 'bg-[#E0B653] text-black shadow-[0_0_22px_rgba(224,182,83,0.22)]' : 'bg-[#E0B653]/20 text-[#805B12]',

    featured: isDark ? 'border-white/10 bg-gradient-to-br from-[#151716] via-[#0D0F0E] to-[#090A0A]' : 'border-slate-200 bg-gradient-to-br from-[#FFFAF0] via-white to-slate-50',

    salesButton: isDark ? 'border-[#E0B653] bg-[#E0B653]/5 text-[#F3D58A] hover:bg-[#E0B653] hover:text-black hover:shadow-[0_0_25px_rgba(224,182,83,0.25)]' : 'border-[#E0B653] bg-[#E0B653] text-black hover:bg-[#D1A342] hover:shadow-[0_0_25px_rgba(224,182,83,0.25)]',
  };

  // Right-side content panel.
  // Shows unique content for the hovered link, or the section default.
  function FeaturedPanel({ section, item = null }) {
    const content = (item && menuItemContent[item.href]) || section.featured;

    const PanelIcon = item?.icon || section.icon;
    const targetHref = item?.href || section.featured.href;

    return (
      <div className={`group/featured relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl border p-5 transition-colors duration-300 sm:p-6 ${styles.featured}`}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E0B653]/10 blur-3xl transition-all duration-500 group-hover/featured:bg-[#E0B653]/20" />

        <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#E0B653]/5 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#E0B653] via-[#F3D58A] to-transparent opacity-80 transition-all duration-500 group-hover/featured:opacity-100" />

        <div key={item?.href || section.title} className="relative z-10 flex h-full flex-1 flex-col">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E0B653]/40 bg-[#E0B653]/10 text-[#E0B653] transition-all duration-300 group-hover/featured:border-[#E0B653] group-hover/featured:bg-[#E0B653] group-hover/featured:text-black">
              <PanelIcon size={19} strokeWidth={1.8} className="transition-transform duration-300 group-hover/featured:scale-110" />
            </span>

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#E0B653]">{content.eyebrow}</span>
          </div>

          <h3 className={`mt-5 max-w-sm text-xl font-semibold leading-tight tracking-tight sm:text-2xl ${styles.dropdownText}`}>{content.title}</h3>

          <p className={`mt-3 max-w-md text-[13px] leading-6 ${styles.muted}`}>{content.description}</p>

          <div className="mt-5 space-y-3">
            {content.points.map((point) => (
              <div key={point} className="group/point flex items-center gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 text-[#E0B653] transition-transform duration-200 group-hover/point:scale-110" />
                <span className={`text-xs ${styles.muted}`}>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link href={targetHref} onClick={closeMenus} className={`group/cta inline-flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${styles.salesButton}`}>
              {content.cta}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Reusable link for desktop and mobile navigation.
  function MenuItem({ item, onHover }) {
    const Icon = item.icon;

    return (
      <Link
        href={item.href}
        onClick={closeMenus}
        onMouseEnter={onHover}
        onFocus={onHover}
        className={`
          group/item relative isolate flex items-start gap-3 overflow-hidden
          rounded-xl border px-3 py-2.5
          transition-all duration-200 ease-out
          hover:translate-x-0.5
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[#E0B653]
          ${
            isDark
              ? `
                border-transparent
                text-white
                hover:!border-[#F3D58A]
                hover:!bg-[#E0B653]
                hover:!text-black
                hover:!shadow-[0_4px_24px_rgba(224,182,83,0.28)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0B0D0D]
              `
              : `
                border-transparent
                text-slate-900
                hover:!border-[#D1A342]
                hover:!bg-[#E0B653]/20
                hover:!text-[#805B12]
              `
          }
        `}
      >
        <span className={`pointer-events-none absolute inset-0 -z-10 -translate-x-full transition-transform duration-700 group-hover/item:translate-x-full ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#E0B653]/10 to-transparent'}`} />

        <span
          className={`
            relative z-10 mt-0.5 flex h-9 w-9 shrink-0
            items-center justify-center rounded-lg border
            transition-all duration-200 group-hover/item:scale-105
            ${
              isDark
                ? `
                  border-white/10 bg-white/5 text-white/75
                  group-hover/item:!border-black/10
                  group-hover/item:!bg-black/10
                  group-hover/item:!text-black
                `
                : `
                  border-slate-200/70 bg-slate-100 text-slate-600
                  group-hover/item:!border-[#805B12]/20
                  group-hover/item:!bg-[#E0B653]/25
                  group-hover/item:!text-[#805B12]
                `
            }
          `}
        >
          <Icon size={18} strokeWidth={1.8} className="transition-transform duration-200 group-hover/item:scale-110" />
        </span>

        <span className="relative z-10 min-w-0 flex-1 pt-0.5">
          <span
            className={`
              block text-[13px] font-semibold leading-5
              transition-colors duration-200
              ${isDark ? 'text-white group-hover/item:!text-black' : 'text-slate-900 group-hover/item:!text-[#805B12]'}
            `}
          >
            {item.title}
          </span>

          <span
            className={`
              mt-0.5 block text-[11px] leading-[1.5]
              transition-colors duration-200
              ${isDark ? 'text-white/55 group-hover/item:!text-black/75' : 'text-slate-500 group-hover/item:!text-slate-700'}
            `}
          >
            {item.description}
          </span>
        </span>

        <ArrowUpRight
          size={15}
          className={`
            relative z-10 mt-1 shrink-0
            translate-x-[-4px] opacity-0
            transition-all duration-200
            group-hover/item:translate-x-0
            group-hover/item:opacity-100
            ${isDark ? 'text-black' : 'text-[#805B12]'}
          `}
        />
      </Link>
    );
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-2xl transition-colors duration-300 ${styles.header}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        {/* <Link href="/" onClick={closeMenus} aria-label="Arventa Networks home" className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653]">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E0B653]/50 bg-[#E0B653]/10 text-[#E0B653] transition-all duration-300 group-hover:border-[#E0B653] group-hover:bg-[#E0B653] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(224,182,83,0.28)]">
            <Network size={22} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" />
          </span>

          <span className="flex flex-col">
            <span className={`text-[18px] font-bold leading-tight tracking-tight ${styles.logoText}`}>arventa</span>
            <span className={`text-[9px] font-medium uppercase tracking-[0.24em] transition-colors group-hover:text-[#E0B653] ${styles.logoSubtext}`}>Networks</span>
          </span>
        </Link> */}
        <Link href="/">
          <img style={{ height: '102px' }} src="https://strapi.arventa.net/uploads/Arventa_logo_1_fc232ec846.png" />
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden h-full items-center gap-1 lg:flex">
          {menuSections.map((section) => {
            const isOpen = activeDesktopSection === section.title;

            const selectedItem = section.items.find((item) => item.href === activeDesktopItem) || null;

            return (
              <div
                key={section.title}
                className="relative flex h-full items-center"
                onMouseEnter={() => {
                  setActiveDesktopSection(section.title);
                  setActiveDesktopItem(null);
                }}
                onMouseLeave={() => {
                  setActiveDesktopSection(null);
                  setActiveDesktopItem(null);
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => {
                    setActiveDesktopSection(isOpen ? null : section.title);
                    setActiveDesktopItem(null);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setActiveDesktopSection(null);
                      setActiveDesktopItem(null);
                    }
                  }}
                  className={`
                    group/nav relative flex items-center gap-1.5
                    rounded-lg px-3 py-2 text-[12px] font-semibold
                    transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#E0B653]
                    ${isOpen ? styles.activeNav : isDark ? 'text-white/75 hover:!bg-[#E0B653] hover:!text-black' : 'text-slate-700 hover:!bg-[#E0B653]/20 hover:!text-[#805B12]'}
                  `}
                >
                  {section.title}

                  <ChevronDown size={13} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />

                  <span className={`absolute inset-x-3 bottom-0 h-[2px] origin-center rounded-full bg-[#E0B653] transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>

                {/* Dynamic mega menu */}
                <div
                  className={`
                    absolute left-1/2 top-full z-50
                    w-[min(820px,calc(100vw-2rem))]
                    -translate-x-1/2 origin-top
                    rounded-2xl border p-2
                    transition-[opacity,transform,visibility]
                    duration-200 ease-out
                    ${isOpen ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible pointer-events-none translate-y-2 scale-[0.98] opacity-0'}
                    ${styles.dropdown}
                  `}
                >
                  {/* Keeps the pointer connected to the menu */}
                  <div className="absolute -top-3 left-0 right-0 h-3" />

                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E0B653]/80 to-transparent" />

                  <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-2">
                    {/* Left column */}
                    <div className="min-w-0 py-1">
                      <div className={`px-3 pb-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] ${styles.muted}`}>Explore {section.title}</div>

                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <MenuItem key={item.href} item={item} onHover={() => setActiveDesktopItem(item.href)} />
                        ))}
                      </div>
                    </div>

                    {/* Right column: changes with each hovered link */}
                    <div className="min-w-0">
                      <FeaturedPanel key={activeDesktopItem || section.title} section={section} item={selectedItem} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button type="button" onClick={() => dispatch(toggleTheme())} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653] ${styles.iconButton}`}>
            {isDark ? <Sun size={16} className="transition-transform duration-300 hover:rotate-45" /> : <Moon size={16} />}
          </button>

          <button type="button" aria-label="Language selector" className={`rounded-lg px-3 py-2 text-[11px] font-semibold transition-colors hover:text-[#E0B653] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653] ${isDark ? 'text-white/75' : 'text-slate-700'}`}>
            EN <span className="ml-1 opacity-50">⌄</span>
          </button>

          <Link href="/contact" onClick={closeMenus} className={`group/contact ml-1 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653] ${styles.salesButton}`}>
            Contact Us
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/contact:translate-x-1" />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" onClick={() => dispatch(toggleTheme())} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653] ${styles.iconButton}`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B653] ${styles.iconButton}`}>
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${mobileOpen ? 'max-h-[85vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`border-t px-4 pb-5 pt-3 sm:px-6 ${styles.mobileMenu}`}>
          <nav className="space-y-1">
            {menuSections.map((section) => {
              const SectionIcon = section.icon;
              const isOpen = activeMobileSection === section.title;

              return (
                <div key={section.title} className={`overflow-hidden rounded-xl border transition-all duration-200 ${isOpen ? 'border-[#E0B653]/40 bg-[#E0B653]/5' : 'border-transparent'}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveMobileSection(isOpen ? null : section.title)}
                    className={`
                      group/mobile flex w-full items-center justify-between
                      gap-3 px-3 py-3.5 text-left transition-colors duration-200
                      ${isOpen ? 'bg-[#E0B653] text-black' : isDark ? 'text-white/90 hover:bg-[#E0B653] hover:text-black' : 'text-slate-800 hover:bg-[#E0B653]/20 hover:text-[#805B12]'}
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 ${isOpen ? 'border-black/10 bg-black/10 text-black' : isDark ? 'border-white/10 bg-white/5 text-white/70 group-hover/mobile:border-black/10 group-hover/mobile:bg-black/10 group-hover/mobile:text-black' : 'border-slate-200 bg-slate-100 text-slate-600 group-hover/mobile:border-[#805B12]/20 group-hover/mobile:bg-[#E0B653]/20 group-hover/mobile:text-[#805B12]'}`}>
                        <SectionIcon size={18} className="transition-transform duration-200 group-hover/mobile:scale-110" />
                      </span>

                      <span className="text-sm font-semibold">{section.title}</span>
                    </span>

                    <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-2 pb-3 pt-2">
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <MenuItem key={item.href} item={item} />
                        ))}
                      </div>

                      <div className="mt-3">
                        <FeaturedPanel section={section} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link href="/contact" onClick={closeMenus} className="group/mobilecta mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E0B653] px-4 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F0C96D] hover:shadow-[0_0_25px_rgba(224,182,83,0.28)] active:scale-[0.98]">
            <Sparkles size={16} className="transition-transform duration-300 group-hover/mobilecta:rotate-12 group-hover/mobilecta:scale-110" />
            Contact Us
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/mobilecta:translate-x-1" />
          </Link>

          <p className={`mt-4 text-center text-[11px] ${styles.logoSubtext}`}>Global connectivity. Smarter communication.</p>
        </div>
      </div>
    </header>
  );
}
