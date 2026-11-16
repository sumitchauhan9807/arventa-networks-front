import { useSelector } from 'react-redux';

const Numbered = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';
  const data = props?.data?.data;

  const styles = {
    section: isDark ? 'border-white/10 bg-[#070909]' : 'border-[#151716]/10 bg-[#F7F5F0]',

    mainGlow: isDark ? 'bg-[#D9A83E]/[0.055]' : 'bg-[#D9A83E]/[0.10]',

    leftGlow: isDark ? 'bg-[#D9A83E]/[0.025]' : 'bg-[#D9A83E]/[0.045]',

    rightGlow: isDark ? 'bg-[#D9A83E]/[0.02]' : 'bg-[#D9A83E]/[0.035]',

    radialGlow: isDark ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]' : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]',

    dots: isDark ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]' : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]',

    goldDots: 'bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]',

    bottomFade: isDark ? 'from-[#070909]' : 'from-[#F7F5F0]',

    badge: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]' : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]' : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    goldGradient: isDark ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]' : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    wrapper: isDark ? 'border-white/10 bg-white/10 shadow-2xl shadow-black/40' : 'border-[#151716]/10 bg-[#151716]/10 shadow-[0_20px_60px_rgba(21,23,22,0.06)]',

    card: isDark ? 'bg-[#090b0b] hover:bg-[#0d1010]' : 'bg-white/65 backdrop-blur-xl hover:bg-white/90',

    hoverGlow: isDark ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/15',

    decorativeNumber: isDark ? 'text-white/[0.025] group-hover:text-[#D9A83E]/[0.06]' : 'text-[#151716]/[0.035] group-hover:text-[#B88A28]/[0.10]',

    number: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    divider: isDark ? 'from-[#D9A83E]' : 'from-[#B88A28]',

    title: isDark ? 'text-white group-hover:text-[#F6D27A]' : 'text-[#151716] group-hover:text-[#A87918]',

    description: isDark ? 'text-white/45 group-hover:text-white/60' : 'text-[#151716]/55 group-hover:text-[#151716]/70',

    icon: isDark ? 'text-[#D9A83E]/35 group-hover:text-[#D9A83E]/75' : 'text-[#A87918]/30 group-hover:text-[#B88A28]/65',

    corner: isDark ? 'border-[#D9A83E]/30 group-hover:border-[#D9A83E]' : 'border-[#B88A28]/30 group-hover:border-[#B88A28]',
  };

  return (
    <section className={`relative overflow-hidden border-b py-28 sm:py-32 ${styles.section}`}>
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`} />

        <div className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`} />

        <div className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`} />

        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        <div className={`absolute inset-0 bg-[size:24px_24px] ${styles.dots}`} />

        <div className={`absolute inset-0 bg-[size:48px_48px] ${styles.goldDots}`} />

        <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`} />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={`mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${styles.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`} />
            {data.eyebrow}
          </div>

          <h2 className={`font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${styles.heading}`}>
            {data.heading.firstLine}
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}>{data.heading.highlight}</span>
          </h2>

          <p className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${styles.paragraph}`}>{data.description}</p>
        </div>

        {/* Grid */}
        <div className={`group/cards mt-20 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2 lg:grid-cols-4 ${styles.wrapper}`}>
          {data.items.map((item) => (
            <div key={item.number} className={`group relative min-h-[390px] overflow-hidden p-8 transition-all duration-500 sm:p-10 ${styles.card}`}>
              {/* Hover glow */}
              <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.hoverGlow}`} />

              {/* Decorative number */}
              <div className={`pointer-events-none absolute -right-4 -top-8 font-display text-[150px] font-semibold leading-none transition-all duration-500 ${styles.decorativeNumber}`}>{item.number}</div>

              {/* Number */}
              <div className="relative z-10 flex items-center gap-3">
                <span className={`text-[11px] font-semibold tracking-[0.2em] ${styles.number}`}>/ {item.number}</span>

                <span className={`h-px w-8 bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-14 ${styles.divider}`} />
              </div>

              {/* SVG */}
              <div className={`absolute right-7 top-20 h-28 w-28 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 ${styles.icon}`}>{item.icon}</div>

              {/* Content */}
              <div className="relative z-10 mt-32">
                <h3 className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${styles.title}`}>{item.title}</h3>

                <p className={`mt-4 max-w-xs text-sm leading-7 transition-colors duration-300 ${styles.description}`}>{item.description}</p>
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-full ${styles.divider}`} />

              {/* Corner detail */}
              <div className={`absolute bottom-8 right-8 h-2 w-2 border-b border-r transition-all duration-500 group-hover:h-4 group-hover:w-4 ${styles.corner}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbered;
