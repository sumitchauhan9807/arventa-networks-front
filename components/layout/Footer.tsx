
import { useSelector } from 'react-redux';

const Footer = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDark = theme === 'dark';

  const offices = [
    {
      title: 'Head Office, Arventa Networks LLC',
      lines: [
        'dept. Tornadodialer',
        '8051 N. Tamiami Trail, STE E6',
        'Sarasota, Florida 34243',
      ],
      email: 'sales@arventa.us',
    },
    {
      title: 'Head Office, Arventa Networks',
      lines: ['Alte Steinhauserstrasse 10', '6330 Cham'],
      email: 'sales@arventa.ch',
    },
    {
      title: 'Head Office, Arventa EURL',
      lines: ['73-75, rue de la Plaine', '75020 Paris'],
      email: 'sales@arventa.net',
    },
    {
      title: 'Head Office, Arventa Networks B.V.',
      lines: [
        'Netherlands',
        'Weesperstraat 107–121',
        '1018VN Amsterdam',
      ],
      email: 'sales@arventa.net',
    },
    {
      title: 'Branch Office, Arventa Networks',
      lines: ['Erika-Mann-Straße 23', '80636 München'],
      email: 'sales@ar-venta.de',
    },
    {
      title: 'Branch Office, Arventa Networks',
      lines: ['Hammer Straße 19', '40219 Düsseldorf'],
      email: 'sales@ar-venta.de',
    },
    {
      title: 'Head Office, Arventa Networks LTD.',
      lines: [
        '71-75 Shelton Street',
        'Covent Garden',
        'London WC2H 9JQ',
        'United Kingdom',
        'Company Number 17322837',
      ],
      email: 'sales@arventa.net',
    },
    {
      title: 'Branch Office, Arventa Networks',
      lines: ['Stephansplatz 8/20', '1010 Wien'],
      email: 'sales@arventa.net',
    },
  ];

  const phoneNumbers = [
    {
      flag: '🇺🇸',
      number: '+1 929 201 7707',
      location: 'US Customer Service (24×7)',
      tel: '+19292017707',
    },
    {
      flag: '🇺🇸',
      number: '+1 786 400 2626',
      location: 'US Office (9:00 AM to 8:00 PM)',
      tel: '+17864002626',
    },
    {
      flag: '🇬🇧',
      number: '+44 20 451 46 680',
      location: 'United Kingdom',
      tel: '+442045146680',
    },
    {
      flag: '🇩🇪',
      number: '+49 211 88 2 33 7000',
      location: 'Düsseldorf, Germany',
      tel: '+49211882337000',
    },
    {
      flag: '🇩🇪',
      number: '+49 89 26 20 74 900',
      location: 'Munich, Germany',
      tel: '+4989262074900',
    },
    {
      flag: '🇦🇹',
      number: '+43 19 284 49 400',
      location: 'Austria, Wien',
      tel: '+431928449400',
    },
    {
      flag: '🇧🇪',
      number: '+32 33 88 2300',
      location: 'Belgium',
      tel: '+3233882300',
    },
    {
      flag: '🇫🇷',
      number: '+33 18 77 06 400',
      location: 'France, Paris',
      tel: '+33187706400',
    },
    {
      flag: '🇳🇱',
      number: '+31 205 326 153',
      location: 'Netherlands, Amsterdam',
      tel: '+31205326153',
    },
  ];

  const linkGroups = [
    {
      title: 'Services',
      links: [
        { label: 'Carrier & Network', href: '#network' },
        { label: 'Cloud & Communications', href: '#solutions' },
        { label: 'Software & AI', href: '#solutions' },
        { label: 'Contact Center & Dialer', href: '#solutions' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Tornadodialer', href: '#' },
        { label: 'Call Con Dialer', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Industries', href: '#industries' },
        { label: 'Careers', href: '#careers' },
      ],
    },
  ];

  const legalLinks = [
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ];

  const styles = {
    footer: isDark
      ? 'border-t border-white/10 bg-[#070909] text-white'
      : 'border-t border-[#151716]/10 bg-[#F7F5F0] text-[#151716]',

    mainGlow: isDark
      ? 'bg-[#D9A83E]/[0.055]'
      : 'bg-[#D9A83E]/[0.10]',

    leftGlow: isDark
      ? 'bg-[#D9A83E]/[0.025]'
      : 'bg-[#D9A83E]/[0.045]',

    rightGlow: isDark
      ? 'bg-[#D9A83E]/[0.02]'
      : 'bg-[#D9A83E]/[0.035]',

    radialGlow: isDark
      ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]'
      : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]',

    dots: isDark
      ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]',

    goldDots:
      'bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]',

    bottomFade: isDark
      ? 'from-[#070909]'
      : 'from-[#F7F5F0]',

    heading: isDark
      ? 'text-white'
      : 'text-[#151716]',

    body: isDark
      ? 'text-white/55'
      : 'text-[#151716]/65',

    muted: isDark
      ? 'text-white/35'
      : 'text-[#151716]/45',

    divider: isDark
      ? 'border-white/10'
      : 'border-[#151716]/10',

    link: isDark
      ? 'text-white/60 hover:text-[#D9A83E]'
      : 'text-[#151716]/65 hover:text-[#B88725]',
  };

  return (
    <footer
      className={`
        relative isolate overflow-hidden
        ${styles.footer}
      `}
    >
      {/* Shared ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Main top gold glow */}
        <div
          className={`
            absolute left-1/2 top-[-250px]
            h-[700px] w-[1100px] max-w-none
            -translate-x-1/2 rounded-full blur-[160px]
            ${styles.mainGlow}
          `}
        />

        {/* Left ambient glow */}
        <div
          className={`
            absolute -left-[300px] top-[35%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.leftGlow}
          `}
        />

        {/* Right ambient glow */}
        <div
          className={`
            absolute -right-[300px] bottom-[10%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.rightGlow}
          `}
        />

        {/* Radial gold highlight */}
        <div
          className={`absolute inset-0 ${styles.radialGlow}`}
        />

        {/* Fine background dots */}
        <div
          className={`
            absolute inset-0 ${styles.dots}
            bg-[size:24px_24px]
          `}
        />

        {/* Subtle gold dot pattern */}
        <div
          className={`
            absolute inset-0 ${styles.goldDots}
            bg-[size:48px_48px]
          `}
        />

        {/* Bottom fade */}
        <div
          className={`
            absolute inset-x-0 bottom-0 h-1/3
            bg-gradient-to-t to-transparent
            ${styles.bottomFade}
          `}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Brand and navigation */}
        <div
          className={`
            grid gap-12 border-b py-16
            md:grid-cols-2
            lg:grid-cols-[1.6fr_1fr_1fr_1fr]
            lg:gap-10
            ${styles.divider}
          `}
        >
          {/* Brand */}
          <div>
            <a
              href="#hero"
              aria-label="Arventa Networks home"
              className="inline-flex items-center"
            >
              <img
                src="https://strapi.arventa.net/uploads/Arventa_logo_8bdf493f5c.png"
                alt="Arventa Networks"
                className="h-24 w-auto max-w-[180px] object-contain object-left"
              />
            </a>

            <p
              className={`
                mt-5 max-w-sm text-sm leading-7
                ${styles.body}
              `}
            >
              Carrier and SIP trunk provider headquartered in Florida,
              USA, with network coverage across 180+ countries.
            </p>

            <a
              href="mailto:sales@arventa.net"
              className={`
                mt-5 inline-flex items-center gap-2
                text-sm font-medium
                transition-colors duration-300
                ${styles.link}
              `}
            >
              Talk to our team
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Navigation groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3
                className={`
                  mb-5 text-xs font-semibold uppercase
                  tracking-[.2em] ${styles.heading}
                `}
              >
                {group.title}
              </h3>

              <nav
                aria-label={group.title}
                className="flex flex-col items-start gap-3.5"
              >
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`
                      text-sm transition-colors duration-300
                      ${styles.link}
                    `}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Global offices and phone numbers */}
        <div
          className={`
            grid gap-12 border-b py-14
            xl:grid-cols-[1.6fr_1fr] xl:gap-16
            ${styles.divider}
          `}
        >
          {/* Global offices */}
          <section aria-labelledby="global-offices-heading">
            <div className="mb-7 flex items-center gap-4">
              <h3
                id="global-offices-heading"
                className={`
                  shrink-0 text-xs font-semibold uppercase
                  tracking-[.22em] ${styles.heading}
                `}
              >
                Global Offices
              </h3>

              <div
                className={`h-px flex-1 ${styles.divider.replace('border-', 'bg-')}`}
              />

              <span
                className={`
                  shrink-0 text-[10px] uppercase tracking-wider
                  ${styles.muted}
                `}
              >
                8 Locations
              </span>
            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {offices.map((office, index) => (
                <article
                  key={`${office.title}-${index}`}
                  className="group min-w-0 py-1"
                >
                  <h4
                    className={`
                      text-sm font-semibold leading-6
                      transition-colors duration-300
                      group-hover:text-[#D9A83E]
                      ${styles.heading}
                    `}
                  >
                    {office.title}
                  </h4>

                  <address
                    className={`
                      mt-2 not-italic text-xs leading-6
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#D9A83E]
                      motion-reduce:transform-none
                      ${styles.body}
                    `}
                  >
                    {office.lines.map((line, lineIndex) => (
                      <p key={`${line}-${lineIndex}`}>
                        {line}
                      </p>
                    ))}
                  </address>

                  <a
                    href={`mailto:${office.email}`}
                    className="
                      mt-3 inline-block break-all
                      text-xs text-[#B88725]
                      transition-all duration-300
                      hover:translate-x-1 hover:text-[#D9A83E]
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#D9A83E]
                      motion-reduce:transform-none
                    "
                  >
                    {office.email}
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Phone numbers */}
          <section aria-labelledby="call-us-heading">
            <div className="mb-7 flex items-center gap-4">
              <h3
                id="call-us-heading"
                className={`
                  shrink-0 text-xs font-semibold uppercase
                  tracking-[.22em] ${styles.heading}
                `}
              >
                Call Us
              </h3>

              <div
                className={`h-px flex-1 ${styles.divider.replace('border-', 'bg-')}`}
              />
            </div>

            <div className="flex flex-col">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className={`
                    group flex gap-3 border-b py-3.5
                    transition-colors duration-300
                    last:border-b-0 ${styles.divider}
                  `}
                >
                  <span
                    className="mt-0.5 text-lg"
                    aria-hidden="true"
                  >
                    {phone.flag}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`
                        block text-sm font-medium
                        transition-colors duration-300
                        group-hover:text-[#D9A83E]
                        ${styles.heading}
                      `}
                    >
                      {phone.number}
                    </span>

                    <span
                      className={`mt-1 block text-xs ${styles.body}`}
                    >
                      {phone.location}
                    </span>
                  </span>

                  <span
                    className={`
                      self-center text-sm
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#D9A83E]
                      ${styles.muted}
                    `}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Copyright and legal links */}
        <div
          className="
            flex flex-col items-center gap-5
            py-7 text-center
            sm:flex-row sm:justify-between sm:text-left
          "
        >
          <p className={`text-xs leading-6 ${styles.muted}`}>
            © {new Date().getFullYear()} Arventa Networks. All rights
            reserved.
          </p>

          <nav
            aria-label="Legal"
            className="
              flex flex-wrap justify-center
              gap-x-6 gap-y-3 sm:justify-end
            "
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  text-xs transition-colors duration-300
                  ${styles.link}
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
