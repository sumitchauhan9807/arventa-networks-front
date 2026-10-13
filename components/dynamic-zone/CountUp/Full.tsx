
import { useSelector } from 'react-redux';

const Full = () => {
  const reduxTheme = useSelector((state) => state.theme.theme);
  const isLight = reduxTheme === 'light';

  const theme = {
    section: isLight
      ? 'bg-[#F7F5F0] text-[#151716]'
      : 'bg-[#070909] text-white',

    statText: isLight ? 'text-[#171717]' : 'text-white',
    statMuted: isLight ? 'text-[#777]' : 'text-white/80',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',
    accent: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    card: isLight ? 'bg-[#F7F5F0]/90' : 'bg-[#070909]/90',

    dots: isLight
      ? 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]',

    goldDots:
      'bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]',

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

    bottomFade: isLight
      ? 'from-[#F7F5F0]'
      : 'from-[#070909]',
  };

  const stats = [
    {
      value: '3',
      accent: 's',
      label: 'P95 delivery',
      description: 'Measured continuously',
    },
    {
      value: '99.5',
      accent: '%',
      label: 'Delivery success',
      description: 'With failover',
    },
    {
      value: '500',
      accent: 'ms',
      label: 'Failover time',
      description: 'Route-to-route',
    },
    {
      value: '200',
      accent: '+',
      label: 'Countries',
      description: 'Premium OTP routes',
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
        {/* Main top glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${theme.mainGlow}`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.leftGlow}`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${theme.rightGlow}`}
        />

        {/* Radial gold lighting */}
        <div className={`absolute inset-0 ${theme.radialGlow}`} />

        {/* Fine dot texture */}
        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${theme.dots}`}
        />

        {/* Secondary gold dot texture */}
        <div
          className={`absolute inset-0 bg-[size:48px_48px] ${theme.goldDots}`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${theme.bottomFade}`}
        />
      </div>

      {/* Statistics grid */}
      <div
        className={`relative mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4 ${
          theme.statBorder
        } ${isLight ? 'bg-[#DCDCD6]' : 'bg-white/10'}`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-7 transition-colors duration-300 ${theme.card}`}
          >
            <div
              className={`font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] ${theme.statText}`}
            >
              <span className="tabular-nums">
                {stat.value}
                <span className={theme.accent}>{stat.accent}</span>
              </span>
            </div>

            <div className={`mt-2 text-sm font-medium ${theme.statText}`}>
              {stat.label}
            </div>

            <div className={`mt-0.5 text-[12.5px] ${theme.statMuted}`}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Full;
