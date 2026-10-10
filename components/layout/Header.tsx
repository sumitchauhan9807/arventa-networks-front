'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme ,setTheme } from '@/redux/slices/themeSlice';

const Header = ({ mode }) => {
  const isDark = mode === 'dark';
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch()

  const setMyTheme = () => {
    console.log(theme)
    dispatch(toggleTheme())
  };

  const styles = {
    header: isDark ? 'border-white/10 bg-[#050606]/90 text-white' : 'border-slate-200 bg-white/95 text-slate-900 shadow-sm',

    logoText: isDark ? 'text-white' : 'text-slate-900',
    logoSubtext: isDark ? 'text-white/60' : 'text-slate-500',

    navButton: isDark ? 'text-white/92 hover:text-white' : 'text-slate-700 hover:text-slate-950',

    dropdown: isDark ? 'border-white/10 bg-[#090b0b] shadow-2xl' : 'border-slate-200 bg-white shadow-xl',

    dropdownText: isDark ? 'text-white' : 'text-slate-900',

    mobileMenu: isDark ? 'border-white/10 bg-[#050606]' : 'border-slate-200 bg-white',

    mobileBorder: isDark ? 'border-white/10' : 'border-slate-200',

    mobileText: isDark ? 'text-white/95' : 'text-slate-800',

    iconButton: isDark ? 'border-white/10 text-white/92 hover:border-arventa-gold hover:text-arventa-gold' : 'border-slate-200 text-slate-700 hover:border-arventa-gold hover:text-arventa-gold',

    secondaryText: isDark ? 'text-white/92' : 'text-slate-700',

    searchText: isDark ? 'text-white/97 hover:text-white' : 'text-slate-600 hover:text-slate-950',

    languageText: isDark ? 'text-white/92' : 'text-slate-700 hover:text-slate-950',

    salesButton: isDark ? 'border-arventa-gold text-arventa-gold hover:bg-arventa-gold hover:text-black' : 'border-arventa-gold text-arventa-gold hover:bg-arventa-gold hover:text-white',

    mobileSalesButton: isDark ? 'bg-arventa-gold text-black hover:bg-[#efc466]' : 'bg-arventa-gold text-white hover:bg-[#d9a93f]',
  };

  const menuSections = [
    {
      title: 'Unternehmen',
      width: 'w-72',
      items: [
        {
          href: '#company',
          label: 'Über Arventa',
          description: 'USA LLC & Deutschland-Niederlassung',
        },
        {
          href: '#team',
          label: 'Team & 24/7 Operations',
        },
        {
          href: '#partners',
          label: 'Partner & Ecosystem',
        },
        {
          href: '#compliance',
          label: 'Compliance',
          description: 'KYC / KYB & regulatorische Positionierung',
        },
      ],
    },
    {
      title: 'Carrier & Netzwerk',
      width: 'w-80',
      items: [
        {
          href: '#carrier',
          label: 'Carrier & Wholesale',
          description: 'SIP Trunking, Origination / Termination, LCR',
        },
        {
          href: '#voice-sip',
          label: 'Voice & SIP',
        },
        {
          href: '#dids',
          label: 'Rufnummern & DIDs',
        },
        {
          href: '#connectivity',
          label: 'Internet & Connectivity',
        },
        {
          href: '#security',
          label: 'VPN & Network Security',
        },
      ],
    },
    {
      title: 'Mobile & IoT',
      width: 'w-64',
      items: [
        {
          href: '#mobile-mvno',
          label: 'Mobile & MVNO',
        },
        {
          href: '#esim',
          label: 'eSIM',
        },
        {
          href: '#iot',
          label: 'IoT / M2M',
        },
      ],
    },
    {
      title: 'Contact Center & Software',
      width: 'w-80',
      items: [
        {
          href: '#contact-center',
          label: 'Contact Center Lösungen',
          description: 'Übersicht',
        },
        {
          href: '#tornado-dialer',
          label: 'Tornado Dialer',
        },
        {
          href: '#call-con-dialer',
          label: 'Call Con Dialer',
        },
        {
          href: '#dialer-comparison',
          label: 'Vergleichsseite',
          description: 'Tornado vs. klassische Dialer-Plattformen',
        },
        {
          href: '#ai-platform',
          label: 'AI Platform',
        },
        {
          href: '#fraud-prevention',
          label: 'Fraud Prevention',
        },
        {
          href: '#software-apis',
          label: 'Software & APIs',
        },
      ],
    },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${styles.header}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-1 rotate-45 border-2 border-arventa-gold" />

            <span className="relative text-xl font-bold text-arventa-gold">A</span>
          </div>

          <div>
            <div className={`text-lg font-bold tracking-[.22em] ${styles.logoText}`}>ARVENTA</div>

            <div className={`-mt-1 text-[8px] tracking-[.42em] ${styles.logoSubtext}`}>NETWORKS</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {menuSections.map((section) => (
            <div className="group relative" key={section.title}>
              <button style={{ fontFamily: 'Space Grotesk' }} type="button" className={`flex items-center gap-2 py-7 text-sm transition cursor-pointer ${styles.navButton}`}>
                {section.title}

                <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">⌄</span>
              </button>

              <div
                className={`
                  invisible absolute left-1/2 top-full ${section.width}
                  -translate-x-1/2 translate-y-2 rounded-xl border
                  p-2 opacity-0 transition-all duration-200
                  group-hover:visible group-hover:translate-y-0
                  group-hover:opacity-100 ${styles.dropdown}
                `}
              >
                {section.items.map((item) => (
                  <a key={item.href} href={item.href} className="dropdown-link">
                    <span className={styles.dropdownText}>{item.label}</span>

                    {item.description && <small>{item.description}</small>}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setMyTheme()} className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-lg transition-all duration-300 ${mode === 'dark' ? 'border-arventa-gold/30 bg-black/80 text-arventa-gold hover:border-arventa-gold hover:bg-arventa-gold/10 hover:shadow-[0_0_20px_rgba(217,168,62,0.2)]' : 'border-slate-200 bg-white text-arventa-gold shadow-sm hover:border-arventa-gold hover:bg-arventa-gold/[0.06] hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)]'}`} aria-label="Toggle theme">
              {mode === 'dark' ? '☀' : '☾'}
            </button>

            {/* Language */}
            <button type="button" className={`hidden text-xs transition sm:block ${styles.languageText}`}>
              EN
              <span className="ml-1">⌄</span>
            </button>

            {/* Sales */}
            <a
              href="#contact"
              className={`
                hidden rounded-md border px-4 py-2 text-xs
                font-semibold transition sm:block
                ${styles.salesButton}
              `}
            >
              Kontakt / Sales
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="header-menu-button"
          type="button"
          className={`
            flex h-10 w-10 items-center justify-center rounded-lg
            border transition lg:hidden ${styles.iconButton}
          `}
          aria-label="Open navigation"
          aria-expanded="false"
          aria-controls="header-mobile-menu"
        >
          <svg id="header-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div id="header-mobile-menu" className={`hidden border-t ${styles.mobileBorder} ${styles.mobileMenu}`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {menuSections.map((section) => (
            <div className={`mobile-dropdown border-b ${styles.mobileBorder}`} key={section.title}>
              <button
                type="button"
                className={`
                  mobile-dropdown-button flex w-full items-center
                  justify-between py-4 text-left ${styles.mobileText}
                `}
                aria-expanded="false"
              >
                <span>{section.title}</span>

                <span className="mobile-chevron text-xs transition-transform duration-200">⌄</span>
              </button>

              <div className="mobile-dropdown-content hidden pb-3">
                {section.items.map((item) => (
                  <a key={item.href} href={item.href} className="mobile-dropdown-link">
                    {item.label}

                    {item.description && <span>{item.description}</span>}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile Contact */}
          <a
            href="#contact"
            className={`
              mt-5 flex items-center justify-center rounded-md
              px-5 py-4 text-sm font-semibold transition
              ${styles.mobileSalesButton}
            `}
          >
            Kontakt / Sales
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
