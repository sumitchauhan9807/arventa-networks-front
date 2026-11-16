import { useSelector } from 'react-redux';

const Timeline = (props) => {
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

    badge: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]' : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]' : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    goldText: isDark ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]' : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    line: isDark ? 'via-[#D9A83E]/30' : 'via-[#B88A28]/35',

    node: isDark ? 'border-[#D9A83E]/40 bg-[#070909]' : 'border-[#B88A28]/35 bg-[#F7F5F0]',

    nodeDot: isDark ? 'bg-[#D9A83E] shadow-[0_0_12px_rgba(217,168,62,0.8)]' : 'bg-[#C9972E] shadow-[0_0_12px_rgba(201,151,46,0.45)]',

    card: isDark ? 'border-white/10 bg-white/[0.025] hover:border-[#D9A83E]/25 hover:bg-white/[0.045]' : 'border-[#151716]/10 bg-white/65 shadow-[0_12px_40px_rgba(21,23,22,0.04)] backdrop-blur-xl hover:-translate-y-1 hover:border-[#B88A28]/30 hover:bg-white/85 hover:shadow-[0_20px_60px_rgba(21,23,22,0.08)]',

    number: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    cardTitle: isDark ? 'text-white group-hover:text-[#F6D27A]' : 'text-[#151716] group-hover:text-[#A87918]',

    cardDescription: isDark ? 'text-white/45 group-hover:text-white/60' : 'text-[#151716]/55 group-hover:text-[#151716]/70',

    accent: isDark ? 'from-[#D9A83E]' : 'from-[#B88A28]',

    icon: isDark ? 'text-[#D9A83E]/30 group-hover:text-[#D9A83E]/75' : 'text-[#A87918]/25 group-hover:text-[#B88A28]/65',

    iconGlow: isDark ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/10',
  };

  return (
    <section className={`relative overflow-hidden border-b py-28 sm:py-32 ${styles.section}`}>
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`} />

        <div className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`} />

        <div className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`} />

        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        <div className={`absolute inset-0 ${styles.dots} bg-[size:24px_24px]`} />

        <div className={`absolute inset-0 ${styles.goldDots} bg-[size:48px_48px]`} />

        <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`} />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={`mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${styles.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`} />
            {data.eyebrow}
          </div>

          <h2 className={`font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${styles.heading}`}>
            {data.heading.firstLine} <span className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldText}`}>{data.heading.highlight}</span>
          </h2>

          <p className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${styles.paragraph}`}>{data.description}</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Center line */}
          <div className={`absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent to-transparent md:left-1/2 md:-translate-x-1/2 ${styles.line}`} />

          <div className="space-y-14 md:space-y-20">
            {data.items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={item.number} className="relative grid grid-cols-[40px_1fr] md:grid-cols-2 md:gap-20">
                  {/* Timeline node */}
                  <div className={`absolute left-[1px] top-8 z-20 flex h-8 w-8 items-center justify-center rounded-full border md:left-1/2 md:-translate-x-1/2 ${styles.node}`}>
                    <div className={`h-2 w-2 rounded-full transition-transform duration-500 ${styles.nodeDot}`} />
                  </div>

                  {/* Left / Right layout */}
                  {isLeft && <div className="hidden md:block" />}

                  <div className={`col-start-2 ${isLeft ? 'md:col-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                    <div className={`group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 sm:p-9 ${styles.card}`}>
                      {/* SVG glow */}
                      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.iconGlow}`} />

                      {/* SVG */}
                      <div className={`pointer-events-none absolute right-6 top-7 h-28 w-28 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 ${styles.icon}`}>{item.icon}</div>

                      {/* Header */}
                      <div className="relative z-10 mb-5 flex items-center gap-3">
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${styles.number}`}>/ {item.number}</span>

                        <span className={`h-px w-10 bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-16 ${styles.accent}`} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 max-w-[75%] pt-12 sm:pt-16">
                        <h3 className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl ${styles.cardTitle}`}>{item.title}</h3>

                        <p className={`mt-4 max-w-md text-sm leading-7 transition-colors duration-300 ${styles.cardDescription}`}>{item.description}</p>
                      </div>

                      {/* Bottom accent */}
                      <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} h-px w-0 bg-gradient-to-${isLeft ? 'r' : 'l'} to-transparent transition-all duration-700 group-hover:w-full ${styles.accent}`} />
                    </div>
                  </div>

                  {!isLeft && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
