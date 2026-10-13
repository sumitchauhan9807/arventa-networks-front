
import { useSelector } from 'react-redux';

const Boxes = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const solutions = [
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

    eyebrow: isDark ? 'text-[#D9A83E]' : 'text-[#B88725]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    description: isDark ? 'text-white/65' : 'text-[#151716]/65',

    card: isDark
      ? 'border-white/10 bg-[#070909]/70'
      : 'border-[#151716]/10 bg-white/50',

    cardTitle: isDark
      ? 'text-white group-hover:text-[#D9A83E]'
      : 'text-[#151716] group-hover:text-[#B88725]',

    cardDescription: isDark
      ? 'text-white/50'
      : 'text-[#151716]/55',

    cardHover: isDark
      ? 'hover:bg-[#D9A83E]/[0.05] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]'
      : 'hover:bg-[#D9A83E]/[0.04] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]',

    cta: isDark
      ? 'text-[#D9A83E] hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]'
      : 'text-[#B88725] hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]',
  };

  return (
    <section
      id="solutions"
      className={`relative isolate overflow-hidden py-28 transition-colors duration-300 ${styles.section}`}
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
        {/* Section header */}
        <div className="max-w-3xl">
          <div
            className={`text-xs font-semibold uppercase tracking-[.25em] ${styles.eyebrow}`}
          >
            What We Do
          </div>

          <h2
            className={`mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${styles.heading}`}
          >
            Communication
            <span className="gold-text"> engineered.</span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 ${styles.description}`}
          >
            From carrier services to communication infrastructure, we provide
            the technology and connectivity businesses need to grow, connect
            and operate.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <a
              key={solution.title}
              href="#"
              className={`group relative overflow-hidden rounded-xl border p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 ${styles.card} ${styles.cardHover}`}
            >
              {/* Icon */}
              <div className="mb-5 text-2xl text-[#D9A83E]">
                {solution.icon}
              </div>

              {/* Title */}
              <h3
                className={`font-display text-lg font-semibold transition-colors duration-300 ${styles.cardTitle}`}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 text-sm leading-6 ${styles.cardDescription}`}
              >
                {solution.description}
              </p>

              {/* Arrow */}
              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">
                →
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium transition-all duration-300 hover:bg-[#D9A83E] hover:text-black ${styles.cta}`}
          >
            Explore Solutions

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Boxes;