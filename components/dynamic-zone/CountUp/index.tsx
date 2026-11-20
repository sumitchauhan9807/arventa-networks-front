import { useSelector } from 'react-redux';

const CountUp = ({ data }) => {
  const reduxTheme = useSelector((state) => state.theme.theme);
  const isLight = reduxTheme === 'light';

  const theme = {
    section: isLight
      ? 'bg-[#F7F5F0] text-[#151716]'
      : 'bg-[#070909] text-white',

    statText: isLight ? 'text-[#171717]' : 'text-white',
    statMuted: isLight ? 'text-[#777]' : 'text-white/65',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',

    card: isLight
      ? 'bg-[#F7F5F0]/90'
      : 'bg-[#070909]/90',

    dots: isLight
      ? 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]',

    goldDots:
      'bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]',

    greenDots:
      'bg-[radial-gradient(circle,rgba(22,163,74,0.15)_1px,transparent_1px)]',

    redDots:
      'bg-[radial-gradient(circle,rgba(220,38,38,0.14)_1px,transparent_1px)]',

    radialGlow: isLight
      ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]'
      : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]',

    mainGlow: isLight
      ? 'bg-[#D9A83E]/[0.10]'
      : 'bg-[#D9A83E]/[0.055]',

    leftGlow: isLight
      ? 'bg-[#D9A83E]/[0.045]'
      : 'bg-[#D9A83E]/[0.025]',

    rightGlow: isLight
      ? 'bg-[#D9A83E]/[0.035]'
      : 'bg-[#D9A83E]/[0.02]',

    greenGlow: isLight
      ? 'bg-[#16A34A]/[0.055]'
      : 'bg-[#22C55E]/[0.035]',

    redGlow: isLight
      ? 'bg-[#DC2626]/[0.045]'
      : 'bg-[#EF4444]/[0.03]',

    bottomFade: isLight
      ? 'from-[#F7F5F0]'
      : 'from-[#070909]',
  };

  // Three-color accent system
  const accents = [
    {
      name: 'gold',
      text: 'text-[#D9A83E]',
      border: 'group-hover:border-[#D9A83E]/35',
      glow: 'group-hover:bg-[#D9A83E]/[0.045]',
      line: 'from-[#D9A83E] via-[#F6D27A] to-transparent',
      dot: 'bg-[#D9A83E]',
      shadow: 'group-hover:shadow-[0_12px_35px_rgba(217,168,62,0.08)]',
    },
    {
      name: 'green',
      text: isLight ? 'text-[#15803D]' : 'text-[#4ADE80]',
      border: 'group-hover:border-[#22C55E]/35',
      glow: 'group-hover:bg-[#22C55E]/[0.045]',
      line: 'from-[#16A34A] via-[#4ADE80] to-transparent',
      dot: 'bg-[#22C55E]',
      shadow: 'group-hover:shadow-[0_12px_35px_rgba(34,197,94,0.08)]',
    },
    {
      name: 'red',
      text: isLight ? 'text-[#B91C1C]' : 'text-[#F87171]',
      border: 'group-hover:border-[#EF4444]/35',
      glow: 'group-hover:bg-[#EF4444]/[0.045]',
      line: 'from-[#DC2626] via-[#F87171] to-transparent',
      dot: 'bg-[#EF4444]',
      shadow: 'group-hover:shadow-[0_12px_35px_rgba(239,68,68,0.08)]',
    },
  ];

  return (
    <section
      className={`relative isolate overflow-hidden py-12 md:py-16 ${theme.section}`}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${theme.mainGlow}`}
        />

        {/* Left gold ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.leftGlow}`}
        />

        {/* Right gold ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.rightGlow}`}
        />

        {/* Green ambient glow */}
        <div
          className={`absolute -left-[180px] bottom-[-180px] h-[450px] w-[450px] rounded-full blur-[150px] ${theme.greenGlow}`}
        />

        {/* Red ambient glow */}
        <div
          className={`absolute -right-[180px] top-[5%] h-[420px] w-[420px] rounded-full blur-[150px] ${theme.redGlow}`}
        />

        {/* Radial gold lighting */}
        <div className={`absolute inset-0 ${theme.radialGlow}`} />

        {/* Fine dot texture */}
        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${theme.dots}`}
        />

        {/* Gold dot texture */}
        <div
          className={`absolute inset-0 bg-[size:48px_48px] ${theme.goldDots}`}
          style={{
            maskImage:
              'radial-gradient(ellipse at 20% 20%, black, transparent 50%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 20% 20%, black, transparent 50%)',
          }}
        />

        {/* Green dot texture */}
        <div
          className={`absolute inset-0 bg-[size:54px_54px] ${theme.greenDots}`}
          style={{
            maskImage:
              'radial-gradient(ellipse at 15% 85%, black, transparent 45%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 15% 85%, black, transparent 45%)',
          }}
        />

        {/* Red dot texture */}
        <div
          className={`absolute inset-0 bg-[size:58px_58px] ${theme.redDots}`}
          style={{
            maskImage:
              'radial-gradient(ellipse at 85% 15%, black, transparent 45%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 85% 15%, black, transparent 45%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${theme.bottomFade}`}
        />
      </div>

      {/* Statistics grid */}
      <div
        className={`
          relative mx-auto grid max-w-7xl grid-cols-1
          gap-px overflow-hidden rounded-2xl border
          ${theme.statBorder}
          ${isLight ? 'bg-[#DCDCD6]' : 'bg-white/10'}
          sm:grid-cols-2 lg:grid-cols-4
        `}
      >
        {data.map((stat, index) => {
          const accent = accents[index % accents.length];

          return (
            <div
              key={stat.label}
              className={`
                group relative isolate overflow-hidden p-7
                transition-all duration-500
                ${theme.card}
                ${accent.border}
                ${accent.shadow}
              `}
            >
              {/* Hover ambient glow */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none absolute -right-12 -top-12
                  h-36 w-36 rounded-full blur-[65px]
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                  ${accent.glow}
                `}
              />

              {/* Top accent line */}
              <div
                className={`
                  absolute inset-x-0 top-0 h-[2px]
                  origin-left scale-x-0
                  bg-gradient-to-r ${accent.line}
                  transition-transform duration-500
                  group-hover:scale-x-100
                `}
              />

              {/* Statistic number */}
              <div
                className={`
                  relative font-display
                  text-[clamp(1.9rem,3.2vw,2.9rem)]
                  font-semibold tracking-[-0.02em]
                  ${theme.statText}
                `}
              >
                <span className="tabular-nums">
                  {stat.value}

                  <span
                    className={`
                      transition-colors duration-300
                      ${accent.text}
                    `}
                  >
                    {stat.accent}
                  </span>
                </span>
              </div>

              {/* Label */}
              <div
                className={`
                  relative mt-2 text-sm font-medium
                  transition-colors duration-300
                  ${theme.statText}
                `}
              >
                {stat.label}
              </div>

              {/* Description */}
              <div
                className={`
                  relative mt-0.5 text-[12.5px]
                  ${theme.statMuted}
                `}
              >
                {stat.description}
              </div>

              {/* Bottom accent indicator */}
              <div className="relative mt-5 flex items-center gap-2">
                <span
                  className={`
                    h-1 w-6 rounded-full
                    transition-all duration-500
                    group-hover:w-10
                    ${accent.dot}
                  `}
                />

                <span
                  className={`
                    h-px w-8 opacity-30
                    transition-all duration-500
                    group-hover:w-14
                    ${isLight ? 'bg-[#151716]' : 'bg-white'}
                  `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountUp;