const Footer = ({ mode }) => {
  const isDark = mode === 'dark';

  const offices = [
    {
      region: 'Headquarters',
      city: 'New York',
      address: (
        <>
          123 Example Avenue
          <br />
          New York, NY 10001
          <br />
          United States
        </>
      ),
    },
    {
      region: 'Europe',
      city: 'London',
      address: (
        <>
          45 Example Street
          <br />
          London EC1A 1AA
          <br />
          United Kingdom
        </>
      ),
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: (
        <>
          80 Example Road
          <br />
          Singapore 048624
          <br />
          Singapore
        </>
      ),
    },
    {
      region: 'Middle East',
      city: 'Dubai',
      address: (
        <>
          100 Example Boulevard
          <br />
          Dubai
          <br />
          United Arab Emirates
        </>
      ),
    },
    {
      region: 'South Asia',
      city: 'Mumbai',
      address: (
        <>
          200 Example Tower
          <br />
          Mumbai, Maharashtra 400001
          <br />
          India
        </>
      ),
    },
    {
      region: 'Operations',
      city: 'Frankfurt',
      address: (
        <>
          30 Example Platz
          <br />
          60311 Frankfurt
          <br />
          Germany
        </>
      ),
    },
  ];

  const navigation = [
    {
      title: 'Company',
      links: [
        ['About Arventa', 'about.html'],
        ['Team & 24/7 Operations', '#team'],
        ['Partners & Ecosystem', '#partners'],
        ['Compliance', '#compliance'],
      ],
    },
    {
      title: 'Carrier & Network',
      links: [
        ['Carrier & Wholesale', '#'],
        ['Voice & SIP', '#'],
        ['Phone Numbers & DIDs', '#'],
        ['Internet & Connectivity', '#'],
        ['VPN & Security', '#'],
      ],
    },
    {
      title: 'Mobile & IoT',
      links: [
        ['Mobile & MVNO', '#'],
        ['eSIM', '#'],
        ['IoT / M2M', '#'],
      ],
    },
    {
      title: 'Contact Center',
      links: [
        ['Solutions', '#'],
        ['Tornado Dialer', '#'],
        ['Call Con Dialer', '#'],
        ['AI Platform', '#'],
        ['Fraud Prevention', '#'],
        ['Software & APIs', '#'],
      ],
    },
  ];

  const styles = {
    footer: isDark ? 'bg-[#030404] text-white' : 'bg-white text-slate-900',

    divider: isDark ? 'border-white/10' : 'border-slate-200',

    heading: isDark ? 'text-white' : 'text-slate-900',

    muted: isDark ? 'text-white/40' : 'text-slate-500',

    officeBorder: isDark ? 'border-white/10' : 'border-slate-200',

    officeBackground: isDark ? 'bg-white/[0.02]' : 'bg-slate-50',

    officeCity: isDark ? 'text-white' : 'text-slate-900',

    officeAddress: isDark ? 'text-white/45' : 'text-slate-500',

    brandSubtext: isDark ? 'text-white/70' : 'text-slate-500',

    brandDescription: isDark ? 'text-white/50' : 'text-slate-500',

    navHeading: isDark ? 'text-white/80' : 'text-slate-800',

    navLink: isDark ? 'text-white/55 hover:text-arventa-gold' : 'text-slate-500 hover:text-arventa-gold',

    bottomText: isDark ? 'text-white/45' : 'text-slate-500',
  };

  return (
    <footer
      className={`
        footer
        ${isDark ? 'dark' : 'light'}
        ${styles.footer}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* =====================================================
            OUR OFFICES
        ====================================================== */}
        <section>
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[.3em] text-arventa-gold">Global Presence</div>

              <h3
                className={`
                  mt-2 text-xl font-semibold
                  ${styles.heading}
                `}
              >
                Our Offices
              </h3>
            </div>

            <p
              className={`
                max-w-md text-xs leading-6
                ${styles.muted}
              `}
            >
              Strategically positioned teams supporting our global network, customers and partners around the clock.
            </p>
          </div>

          {/* Office Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`
                  office-card group relative rounded-xl border p-5

                  transition-all duration-300 ease-out

                  ${styles.officeBorder}
                  ${styles.officeBackground}

                  hover:-translate-y-1
                  hover:border-arventa-gold/40
                  hover:bg-arventa-gold/[0.04]
                  hover:shadow-[0_12px_35px_rgba(217,168,62,0.12)]
                `}
              >
                {/* Office Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[.25em]
                        text-arventa-gold
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      {office.region}
                    </div>

                    <h4
                      className={`
                        mt-2 text-sm font-semibold
                        transition-colors duration-300
                        ${styles.officeCity}
                        group-hover:text-arventa-gold
                      `}
                    >
                      {office.city}
                    </h4>
                  </div>

                  {/* Status Indicator */}
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-arventa-gold
                      shadow-[0_0_12px_#D9A83E]
                      transition-all duration-300
                      group-hover:scale-125
                      group-hover:shadow-[0_0_18px_#D9A83E]
                    "
                  />
                </div>

                {/* Address */}
                <p
                  className={`
                    mt-4 text-xs leading-6
                    ${styles.officeAddress}
                    transition-colors duration-300
                    group-hover:text-slate-500
                  `}
                >
                  {office.address}
                </p>

                {/* Map Link */}
                <a
                  href="#"
                  className={`
                    mt-4 inline-flex items-center
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider

                    transition-all duration-300

                    ${isDark ? 'text-white/40' : 'text-slate-500'}

                    group-hover:translate-x-1
                    group-hover:text-arventa-gold
                  `}
                >
                  View on map
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            BRAND + NAVIGATION
        ====================================================== */}
        <section
          className={`
            mt-16
            border-t
            pt-14
            ${styles.divider}
          `}
        >
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="index.html" className="group flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                  "
                >
                  <span
                    className="
                      text-3xl
                      font-bold
                      text-arventa-gold
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    A
                  </span>
                </div>

                <div>
                  <div
                    className={`
                      text-lg
                      font-bold
                      tracking-[.22em]
                      ${styles.heading}
                    `}
                  >
                    ARVENTA
                  </div>

                  <div
                    className={`
                      -mt-1
                      text-[8px]
                      tracking-[.42em]
                      ${styles.brandSubtext}
                    `}
                  >
                    NETWORKS
                  </div>
                </div>
              </a>

              <p
                className={`
                  mt-6
                  max-w-xs
                  text-sm
                  leading-7
                  ${styles.brandDescription}
                `}
              >
                Global telecom solutions for a connected future.
              </p>
            </div>

            {/* Navigation */}
            {navigation.map((section) => (
              <div key={section.title}>
                <h3
                  className={`
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    ${styles.navHeading}
                  `}
                >
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3 text-sm">
                  {section.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className={`
                          footer-nav-link
                          group/link
                          relative
                          inline-block

                          transition-all
                          duration-300

                          ${styles.navLink}

                          hover:translate-x-1

                          after:absolute
                          after:-bottom-1
                          after:left-0
                          after:h-px
                          after:w-0
                          after:bg-arventa-gold

                          after:transition-all
                          after:duration-300

                          hover:after:w-full
                        `}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div
          className={`
            mt-14
            flex flex-col
            justify-between
            gap-5

            border-t
            pt-8

            text-xs
            sm:flex-row

            ${styles.divider}
            ${styles.bottomText}
          `}
        >
          {/* Copyright */}
          <div>© 2026 Arventa Networks. All rights reserved.</div>

          {/* Legal */}
          <div className="flex gap-6">
            <a
              href="#"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-arventa-gold
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-arventa-gold
              "
            >
              Terms &amp; Conditions
            </a>

            <a
              href="#"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-arventa-gold
              "
            >
              Imprint
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className={`
                inline-flex h-8 w-8
                items-center justify-center
                rounded-md

                transition-all
                duration-300
                ease-out

                ${isDark ? 'text-white/45' : 'text-slate-500'}

                hover:-translate-y-1
                hover:bg-arventa-gold/[0.08]
                hover:text-arventa-gold
                hover:shadow-[0_5px_20px_rgba(217,168,62,0.12)]
              `}
            >
              in
            </a>

            <a
              href="#"
              aria-label="X"
              className={`
                inline-flex h-8 w-8
                items-center justify-center
                rounded-md

                transition-all
                duration-300
                ease-out

                ${isDark ? 'text-white/45' : 'text-slate-500'}

                hover:-translate-y-1
                hover:bg-arventa-gold/[0.08]
                hover:text-arventa-gold
                hover:shadow-[0_5px_20px_rgba(217,168,62,0.12)]
              `}
            >
              𝕏
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className={`
                inline-flex h-8 w-8
                items-center justify-center
                rounded-md

                transition-all
                duration-300
                ease-out

                ${isDark ? 'text-white/45' : 'text-slate-500'}

                hover:-translate-y-1
                hover:bg-arventa-gold/[0.08]
                hover:text-arventa-gold
                hover:shadow-[0_5px_20px_rgba(217,168,62,0.12)]
              `}
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
