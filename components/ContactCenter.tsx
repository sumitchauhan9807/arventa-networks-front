const ContactCenter = ({ mode }) => {
  const isDark = mode === 'dark';

  const products = [
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
  ];

  const styles = {
    section: isDark
      ? 'border-white/10 bg-[#070909]'
      : 'border-[#151716]/10 bg-[#F7F5F0]',

    mainGlow: isDark
      ? 'bg-[#D9A83E]/[0.055]'
      : 'bg-[#D9A83E]/[0.10]',

    sideGlow: isDark
      ? 'bg-[#D9A83E]/[0.025]'
      : 'bg-[#D9A83E]/[0.045]',

    radialGlow: isDark
      ? 'bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.08),transparent_42%)]'
      : 'bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.10),transparent_42%)]',

    dots: isDark
      ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(21,23,22,0.10)_1px,transparent_1px)]',

    bottomFade: isDark
      ? 'from-[#070909]'
      : 'from-[#F7F5F0]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    goldGradient: isDark
      ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]'
      : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    badge: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark
      ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]'
      : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',

    tab: isDark
      ? 'border-white/10 bg-white/[0.025] text-white/50 hover:border-[#D9A83E]/40 hover:text-white/80'
      : 'border-[#151716]/10 bg-white/50 text-[#151716]/55 hover:border-[#B88A28]/40 hover:text-[#151716]',

    activeTab: isDark
      ? 'border-[#D9A83E]/40 bg-[#D9A83E]/[0.10] text-[#F6D27A] shadow-[inset_0_0_20px_rgba(217,168,62,0.04)]'
      : 'border-[#B88A28]/40 bg-[#D9A83E]/[0.10] text-[#8E6718]',

    panel: isDark
      ? 'border-white/10 bg-white/[0.025] shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
      : 'border-[#151716]/10 bg-white/50 shadow-[0_20px_60px_rgba(21,23,22,0.04)]',

    countryCard: isDark
      ? 'border-white/[0.07] bg-white/[0.025] hover:border-[#D9A83E]/30 hover:bg-[#D9A83E]/[0.045]'
      : 'border-[#151716]/[0.07] bg-white/50 hover:border-[#B88A28]/30 hover:bg-white/90',

    countryText: isDark
      ? 'text-white/65 group-hover:text-[#F6D27A]'
      : 'text-[#151716]/70 group-hover:text-[#A87918]',

    muted: isDark ? 'text-white/30' : 'text-[#151716]/35',

    pagination: isDark
      ? 'border-white/10 bg-white/[0.04] text-white/60 hover:border-[#D9A83E]/40 hover:text-[#F6D27A]'
      : 'border-[#151716]/10 bg-white/60 text-[#151716]/60 hover:border-[#B88A28]/40 hover:text-[#8E6718]',
  };

  return (
    <section
      id="contact-center"
      className={`relative isolate overflow-hidden border-y ${styles.section}`}
    >
      {/* Background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Background image */}
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            isDark ? 'opacity-[0.12]' : 'opacity-[0.08]'
          }`}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80")',
          }}
        />

        {/* Theme overlay */}
        <div
          className={`absolute inset-0 ${
            isDark ? 'bg-[#070909]/90' : 'bg-[#F7F5F0]/90'
          }`}
        />

        {/* Main gold glow */}
        <div
          className={`absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full blur-[120px] ${styles.mainGlow}`}
        />

        {/* Side gold glow */}
        <div
          className={`absolute -right-40 top-1/4 h-[360px] w-[360px] rounded-full blur-[110px] ${styles.sideGlow}`}
        />

        {/* Radial highlight */}
        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        {/* Dotted background */}
        <div
          className={`absolute inset-0 ${styles.dots}`}
          style={{
            backgroundSize: '22px 22px',
            backgroundPosition: 'center center',
          }}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Intro */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${styles.badge}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
              />
              Contact Center &amp; Software
            </div>

            {/* Heading */}
            <h2
              className={`mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${styles.heading}`}
            >
              Smarter Dialers.
              <br />
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}
              >
                Better Conversations.
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mt-6 max-w-xl text-sm leading-7 transition-colors duration-300 sm:text-base sm:leading-8 ${styles.paragraph}`}
            >
              Boost your efficiency with our advanced dialer solutions, AI
              platform and fraud prevention tools. Empower your team with
              smarter technology designed to improve productivity and customer
              engagement.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="
                group mt-8 inline-flex items-center gap-5
                rounded-md border border-[#D9A83E]/30
                bg-[#D9A83E] px-6 py-4
                text-sm font-semibold text-[#070909]
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:bg-[#F6D27A]
                hover:shadow-[0_12px_35px_rgba(217,168,62,0.22)]
              "
            >
              Discover Contact Center Solutions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Supporting note */}
            <div className={`mt-5 flex items-center gap-2 text-xs ${styles.muted}`}>
              <span className={`h-1 w-1 rounded-full ${styles.badgeDot}`} />
              Intelligent solutions for modern business communication
            </div>
          </div>

          {/* Product cards */}
          <div className="relative">
            {/* Subtle glow behind cards */}
            <div
              aria-hidden="true"
              className={`absolute inset-8 rounded-full blur-[80px] ${styles.sideGlow}`}
            />

            <div className="relative space-y-3">
              {products.map((product, index) => (
                <a
                  key={product.title}
                  href="#"
                  className={`
                    group relative flex items-center gap-4 overflow-hidden
                    rounded-xl border p-4 backdrop-blur-md
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(217,168,62,0.08)]
                    sm:gap-5 sm:p-5
                    ${styles.panel}
                    ${styles.countryCard}
                  `}
                >
                  {/* Hover highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#D9A83E]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Product number */}
                  <div
                    className={`relative hidden w-5 shrink-0 text-[10px] font-medium tabular-nums sm:block ${styles.muted}`}
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`
                      relative flex h-12 w-12 shrink-0 items-center
                      justify-center rounded-lg border
                      border-[#D9A83E]/25 bg-[#D9A83E]/[0.06]
                      text-sm font-semibold text-[#D9A83E]
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:border-[#D9A83E]/50
                      group-hover:bg-[#D9A83E]/[0.10]
                      group-hover:shadow-[0_0_18px_rgba(217,168,62,0.12)]
                      sm:h-14 sm:w-14
                    `}
                  >
                    {product.icon}
                  </div>

                  {/* Product text */}
                  <div className="relative min-w-0 flex-1">
                    <h3
                      className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${styles.heading} group-hover:text-[#D9A83E]`}
                    >
                      {product.title}
                    </h3>

                    <p
                      className={`mt-1 text-xs leading-5 transition-colors duration-300 sm:text-[13px] ${styles.paragraph}`}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`
                      relative flex h-8 w-8 shrink-0 items-center
                      justify-center rounded-full border
                      border-transparent text-[#D9A83E]
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:border-[#D9A83E]/20
                      group-hover:bg-[#D9A83E]/[0.06]
                    `}
                  >
                    →
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom card caption */}
            <div className={`relative mt-5 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.16em] ${styles.muted}`}>
              <span>Integrated solutions</span>
              <span className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`} />
                Built for performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenter;