const Solutions = ({ mode }) => {
  const isDark = mode === 'dark';

  const solutions = [
    {
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
      icon: '◈',
      title: 'Carrier & Network',
      description: 'SIP Trunking, Voice, DIDs, Connectivity & Security.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
      icon: '▣',
      title: 'Mobile & IoT',
      description: 'MVNO, eSIM, IoT / M2M connectivity.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
      icon: '◉',
      title: 'Contact Center',
      description: 'Dialers, AI, Fraud Prevention & APIs.',
    },
  ];

  const styles = {
    section: isDark
      ? 'border-white/10 bg-[#070909] text-white'
      : 'border-[#151716]/10 bg-[#F7F5F0] text-[#151716]',

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

    description: isDark ? 'text-white/45' : 'text-[#151716]/55',

    goldGradient: isDark
      ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]'
      : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    badge: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark
      ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]'
      : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',

    card: isDark
      ? 'border-white/10 bg-white/[0.025] shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
      : 'border-[#151716]/10 bg-white/50 shadow-[0_20px_60px_rgba(21,23,22,0.04)]',

    cardDescription: isDark
      ? 'text-white/45'
      : 'text-[#151716]/55',

    muted: isDark ? 'text-white/30' : 'text-[#151716]/35',
  };

  return (
    <section
      id="solutions"
      className={`relative isolate overflow-hidden border-y py-20 sm:py-24 lg:py-28 ${styles.section}`}
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {/* Intro */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${styles.badge}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
              />
              What We Do
            </div>

            {/* Heading */}
            <h2
              className={`mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl ${styles.heading}`}
            >
              Our{' '}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}
              >
                Solutions
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mt-6 max-w-md text-sm leading-7 transition-colors duration-300 sm:text-base sm:leading-8 ${styles.description}`}
            >
              From carrier services to AI-powered contact center solutions, we
              provide the infrastructure and software you need to grow,
              connect and succeed.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="
                group mt-8 inline-flex items-center gap-5
                rounded-md border border-[#D9A83E]/40
                bg-[#D9A83E]/[0.04] px-6 py-4
                text-sm font-semibold text-[#D9A83E]
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:bg-[#D9A83E]
                hover:text-[#070909]
                hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]
              "
            >
              Explore All Solutions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Supporting note */}
            <div
              className={`mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] ${styles.muted}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
              />
              Technology built for growth
            </div>
          </div>

          {/* Solution cards */}
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
            {solutions.map((solution, index) => (
              <a
                key={solution.title}
                href="#"
                className={`
                  group relative flex flex-col overflow-hidden rounded-xl
                  border backdrop-blur-md
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:border-[#D9A83E]/40
                  hover:shadow-[0_18px_45px_rgba(217,168,62,0.12)]
                  ${styles.card}
                `}
              >
                {/* Image */}
                <div className="relative h-48 shrink-0 overflow-hidden sm:h-40 lg:h-48">
                  {/* Image layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${solution.image}")`,
                    }}
                  />

                  {/* Image contrast overlay */}
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isDark
                        ? 'bg-[#070909]/35 group-hover:bg-[#070909]/20'
                        : 'bg-[#F7F5F0]/20 group-hover:bg-[#D9A83E]/[0.06]'
                    }`}
                  />

                  {/* Gold image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070909]/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Top category number */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[10px] font-medium backdrop-blur-md ${
                        isDark
                          ? 'border-white/15 bg-black/30 text-white/70'
                          : 'border-white/50 bg-white/60 text-[#151716]/70'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Image icon */}
                  <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#D9A83E]/40 bg-[#070909]/55 text-lg text-[#F6D27A] backdrop-blur-md transition-all duration-300 group-hover:border-[#D9A83E]/70 group-hover:bg-[#D9A83E]/15 group-hover:shadow-[0_0_20px_rgba(217,168,62,0.15)]">
                    {solution.icon}
                  </div>
                </div>

                {/* Card content */}
                <div className="relative flex flex-1 flex-col p-5 sm:p-5 lg:p-6">
                  {/* Title */}
                  <h3
                    className={`text-base font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#D9A83E] ${styles.heading}`}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 flex-1 text-xs leading-6 transition-colors duration-300 ${styles.cardDescription}`}
                  >
                    {solution.description}
                  </p>

                  {/* Card link */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D9A83E]/80 transition-colors duration-300 group-hover:text-[#D9A83E]">
                      Explore solution
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9A83E]/15 text-[#D9A83E] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#D9A83E]/40 group-hover:bg-[#D9A83E]/[0.08]">
                      →
                    </span>
                  </div>

                  {/* Bottom gold line */}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8E6718] via-[#F6D27A] to-[#D9A83E] transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;