
import { useSelector } from 'react-redux';

const Index = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDark = theme === 'dark';

  const stats = [
    { value: '99.9%', label: 'Network Uptime' },
    { value: '200+', label: 'Carrier Partners' },
    { value: '180+', label: 'Countries' },
    { value: '24/7', label: 'Operations' },
  ];

  const styles = {
    section: isDark
      ? 'bg-[#070909] text-white'
      : 'bg-[#F7F5F0] text-[#151716]',

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

    eyebrow: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    description: isDark ? 'text-white/65' : 'text-[#151716]/65',

    secondaryDescription: isDark
      ? 'text-white/40'
      : 'text-[#151716]/50',

    goldGradient: isDark
      ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]'
      : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    button: isDark
      ? 'border-[#D9A83E]/50 text-[#F6D27A] hover:text-[#070909]'
      : 'border-[#B88A28]/50 text-[#8E6718] hover:text-[#070909]',

    card: isDark
      ? 'border-white/10 bg-[#070909]/70 shadow-[0_18px_50px_rgba(0,0,0,0.25)]'
      : 'border-[#151716]/10 bg-white/50 shadow-[0_18px_50px_rgba(21,23,22,0.04)]',

    statDivider: isDark
      ? 'border-white/10'
      : 'border-[#151716]/10',

    statLabel: isDark
      ? 'text-white/50'
      : 'text-[#151716]/55',

    statHover: isDark
      ? 'hover:bg-[#D9A83E]/[0.05]'
      : 'hover:bg-[#D9A83E]/[0.06]',

    muted: isDark
      ? 'text-white/30'
      : 'text-[#151716]/35',

    badge: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark
      ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]'
      : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',
  };

  return (
    <section
      id="who-we-are"
      className={`relative isolate overflow-hidden py-20 transition-colors duration-300 sm:py-24 lg:py-28 ${styles.section}`}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main top gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`}
        />

        {/* Radial gold lighting */}
        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        {/* Fine dot texture */}
        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${styles.dots}`}
        />

        {/* Secondary gold dot texture */}
        <div
          className={`absolute inset-0 bg-[size:48px_48px] ${styles.goldDots}`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${styles.badge}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
              />
              Who We Are
            </div>

            {/* Heading */}
            <h2
              className={`mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${styles.heading}`}
            >
              Infrastructure with
              <br />
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}
              >
                purpose.
              </span>
            </h2>

            {/* Primary description */}
            <p
              className={`mt-6 max-w-xl text-sm leading-7 transition-colors duration-300 sm:text-base sm:leading-8 ${styles.description}`}
            >
              Arventa Networks operates at the intersection of telecom,
              technology and connectivity. We create communication
              infrastructure designed for organizations that depend on
              reliable communication every day.
            </p>

            {/* Secondary description */}
            <p
              className={`mt-4 max-w-xl text-sm leading-7 transition-colors duration-300 ${styles.secondaryDescription}`}
            >
              From carrier services and voice infrastructure to mobile, IoT
              and contact center technologies, our approach is built around
              connectivity, flexibility and long-term partnerships.
            </p>

            {/* CTA */}
            <a
              href="#solutions"
              className={`
                group mt-8 inline-flex items-center gap-5
                rounded-md border bg-[#D9A83E]/[0.04]
                px-6 py-4 text-sm font-semibold
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:bg-[#D9A83E]
                hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]
                ${styles.button}
              `}
            >
              Discover Our Approach

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
              Reliable connectivity. Built for the long term.
            </div>
          </div>

          {/* Stats panel */}
          <div className="relative">
            {/* Ambient glow behind stats */}
            <div
              aria-hidden="true"
              className={`absolute inset-8 rounded-full blur-[80px] ${styles.rightGlow}`}
            />

            <div
              className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${styles.card}`}
            >
              {/* Panel header */}
              <div
                className={`flex items-center justify-between border-b px-6 py-5 sm:px-8 ${styles.statDivider}`}
              >
                <div>
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}
                  >
                    At a glance
                  </div>

                  <h3
                    className={`mt-2 text-base font-semibold tracking-tight ${styles.heading}`}
                  >
                    Network at scale
                  </h3>
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium ${styles.badge}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
                  />
                  Global reach
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`
                      group relative p-6 transition-colors duration-300
                      sm:p-8
                      ${styles.statHover}
                      ${styles.statDivider}
                      ${index < 2 ? 'border-b' : ''}
                      ${index % 2 === 0 ? 'border-r' : ''}
                    `}
                  >
                    {/* Stat value */}
                    <div
                      className={`bg-gradient-to-r bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-4xl ${styles.goldGradient}`}
                    >
                      {stat.value}
                    </div>

                    {/* Stat label */}
                    <div
                      className={`mt-3 text-xs leading-5 transition-colors duration-300 sm:text-sm ${styles.statLabel}`}
                    >
                      {stat.label}
                    </div>

                    {/* Hover accent */}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8E6718] via-[#F6D27A] to-[#D9A83E] transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* Panel footer */}
              <div
                className={`flex items-center justify-between border-t px-6 py-4 sm:px-8 ${styles.statDivider}`}
              >
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] ${styles.muted}`}
                >
                  Connectivity you can count on
                </span>

                <span className="flex items-center gap-2 text-[10px] font-medium text-[#D9A83E]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
                  />
                  Always connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;