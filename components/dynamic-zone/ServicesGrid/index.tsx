
const ServiceGrid = ({ theme = 'dark', data  }) => {
  const isDark = theme === 'dark';

  const styles = {
    section: isDark
      ? 'border-white/10 bg-[#070909] text-white'
      : 'border-[#151716]/10 bg-[#F7F5F0] text-[#151716]',

    mainGlow: isDark ? 'bg-[#D9A83E]/[0.055]' : 'bg-[#D9A83E]/[0.10]',
    leftGlow: isDark ? 'bg-[#D9A83E]/[0.025]' : 'bg-[#D9A83E]/[0.045]',
    rightGlow: isDark ? 'bg-[#D9A83E]/[0.02]' : 'bg-[#D9A83E]/[0.035]',

    greenGlow: isDark ? 'bg-[#22C55E]/[0.045]' : 'bg-[#22C55E]/[0.07]',
    redGlow: isDark ? 'bg-[#EF4444]/[0.035]' : 'bg-[#EF4444]/[0.055]',

    radialGlow: isDark
      ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]'
      : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]',

    dots: isDark
      ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]',

    goldDots: 'bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]',
    greenDots: 'bg-[radial-gradient(circle,rgba(34,197,94,0.13)_1px,transparent_1px)]',
    redDots: 'bg-[radial-gradient(circle,rgba(239,68,68,0.12)_1px,transparent_1px)]',

    bottomFade: isDark ? 'from-[#070909]' : 'from-[#F7F5F0]',

    itemBorder: isDark ? 'border-white/10' : 'border-[#151716]/10',
    itemHover: isDark
      ? 'hover:bg-white/[0.025]'
      : 'hover:bg-[#D9A83E]/[0.045]',

    heading: isDark ? 'text-white' : 'text-[#151716]',
  };

  // Built-in automatic color rotation
  const accentStyles = [
    {
      icon: 'text-[#D9A83E] group-hover:drop-shadow-[0_0_10px_rgba(217,168,62,0.45)]',
      heading: 'group-hover:text-[#D9A83E]',
      glow: 'bg-[#D9A83E]/[0.09]',
      underline: 'bg-[#D9A83E]',
    },
    {
      icon: 'text-[#22C55E] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.45)]',
      heading: 'group-hover:text-[#22C55E]',
      glow: 'bg-[#22C55E]/[0.09]',
      underline: 'bg-[#22C55E]',
    },
    {
      icon: 'text-[#EF4444] group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.45)]',
      heading: 'group-hover:text-[#EF4444]',
      glow: 'bg-[#EF4444]/[0.09]',
      underline: 'bg-[#EF4444]',
    },
  ];

  return (
    <section
      className={`
        relative isolate overflow-hidden
        border-y ${styles.section}
      `}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Gold glow */}
        <div
          className={`
            absolute left-1/2 top-[-250px]
            h-[700px] w-[1100px] max-w-none
            -translate-x-1/2 rounded-full blur-[160px]
            ${styles.mainGlow}
          `}
        />

        <div
          className={`
            absolute -left-[300px] top-[35%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.leftGlow}
          `}
        />

        <div
          className={`
            absolute -right-[300px] bottom-[10%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.rightGlow}
          `}
        />

        {/* Green glow */}
        <div
          className={`
            absolute -left-[150px] top-[15%]
            h-[450px] w-[450px] rounded-full blur-[160px]
            ${styles.greenGlow}
          `}
        />

        {/* Red glow */}
        <div
          className={`
            absolute -right-[150px] top-[45%]
            h-[450px] w-[450px] rounded-full blur-[160px]
            ${styles.redGlow}
          `}
        />

        {/* Radial highlight */}
        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        {/* Dot patterns */}
        <div
          className={`
            absolute inset-0 ${styles.dots}
            bg-[size:24px_24px]
          `}
        />

        <div
          className={`
            absolute inset-0 ${styles.goldDots}
            bg-[size:48px_48px]
          `}
        />

        <div
          className={`
            absolute inset-0 ${styles.greenDots}
            bg-[size:72px_72px]
          `}
        />

        <div
          className={`
            absolute inset-0 ${styles.redDots}
            bg-[size:96px_96px]
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

      {/* Services grid */}
      <div
        className="
          relative mx-auto grid max-w-7xl
          grid-cols-2 lg:grid-cols-5
        "
      >
        {data.map((item, index) => {
          // Automatically rotate gold, green and red
          const accent = accentStyles[index % accentStyles.length];

          return (
            <a
              key={item.title}
              href={item.href || '#'}
              className={`
                group relative p-6 text-center
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                sm:p-8
                ${styles.itemBorder}
                ${styles.itemHover}
                ${index < 4 ? 'border-b lg:border-b-0 lg:border-r' : ''}
                ${index % 2 === 0 ? 'border-r lg:border-r' : ''}
              `}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none absolute
                  left-1/2 top-1/2
                  h-24 w-24 -translate-x-1/2
                  -translate-y-1/2 rounded-full
                  blur-3xl opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                  ${accent.glow}
                `}
              />

              {/* Icon */}
              <div
                className={`
                  relative mx-auto mb-4
                  text-2xl
                  transition-all duration-300 ease-out
                  group-hover:-translate-y-1
                  group-hover:scale-110
                  ${accent.icon}
                `}
              >
                {item.icon}
              </div>

              {/* Heading */}
              <h3
                className={`
                  relative text-sm font-semibold
                  transition-colors duration-300
                  ${styles.heading}
                  ${accent.heading}
                `}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  relative mt-2 text-xs leading-5
                  transition-colors duration-300
                  ${
                    isDark
                      ? 'text-white/60 group-hover:text-white/75'
                      : 'text-[#151716]/60 group-hover:text-[#151716]/80'
                  }
                `}
              >
                {item.description}
              </p>

              {/* Colored underline */}
              <span
                className={`
                  absolute bottom-0 left-1/2
                  h-px w-0 -translate-x-1/2
                  transition-all duration-300 ease-out
                  group-hover:w-16
                  ${accent.underline}
                `}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceGrid;
