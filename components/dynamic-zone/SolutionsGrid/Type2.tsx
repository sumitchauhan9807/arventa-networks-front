
const SolutionsGrid = ({ theme, data }) => {
  const isDark = theme === "dark";

  // Theme configuration
  const styles = {
    section: isDark
      ? "border-white/10 bg-[#070909] text-white"
      : "border-[#151716]/10 bg-[#F7F5F0] text-[#151716]",

    // Gold atmosphere
    mainGlow: isDark
      ? "bg-[#D9A83E]/[0.055]"
      : "bg-[#D9A83E]/[0.10]",

    leftGlow: isDark
      ? "bg-[#D9A83E]/[0.025]"
      : "bg-[#D9A83E]/[0.045]",

    rightGlow: isDark
      ? "bg-[#D9A83E]/[0.02]"
      : "bg-[#D9A83E]/[0.035]",

    // Green atmosphere
    greenGlow: isDark
      ? "bg-[#22C55E]/[0.045]"
      : "bg-[#22C55E]/[0.07]",

    // Red atmosphere
    redGlow: isDark
      ? "bg-[#EF4444]/[0.035]"
      : "bg-[#EF4444]/[0.06]",

    // Radial gold highlight
    radialGlow: isDark
      ? "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]",

    // Background patterns
    dots: isDark
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]",

    goldDots:
      "bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]",

    greenDots:
      "bg-[radial-gradient(circle,rgba(34,197,94,0.10)_1px,transparent_1px)]",

    redDots:
      "bg-[radial-gradient(circle,rgba(239,68,68,0.09)_1px,transparent_1px)]",

    bottomFade: isDark
      ? "from-[#070909]"
      : "from-[#F7F5F0]",

    // Card surfaces
    card: isDark
      ? "border-white/10 bg-black/20"
      : "border-[#151716]/10 bg-white/65",

    overlay: isDark
      ? "bg-gradient-to-t from-black via-black/55 to-transparent"
      : "bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent",

    description: "text-white/90",

    // Accent colors
    gold: isDark ? "#D9A83E" : "#B8892D",
    green: isDark ? "#22C55E" : "#16A34A",
    red: isDark ? "#EF4444" : "#DC2626",
  };

  // Industry card accent configuration
  const accents = [
    {
      color: styles.gold,
      border: "hover:border-[#D9A83E]/50",
      shadow: "hover:shadow-[0_20px_50px_rgba(217,168,62,0.12)]",
      title: "group-hover:text-[#D9A83E]",
      arrow: "text-[#D9A83E]",
      line: "from-[#8E6718] via-[#F6D27A] to-[#D9A83E]",
    },
    {
      color: styles.green,
      border: "hover:border-[#22C55E]/50",
      shadow: "hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)]",
      title: "group-hover:text-[#22C55E]",
      arrow: "text-[#22C55E]",
      line: "from-[#15803D] via-[#4ADE80] to-[#22C55E]",
    },
    {
      color: styles.red,
      border: "hover:border-[#EF4444]/50",
      shadow: "hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)]",
      title: "group-hover:text-[#EF4444]",
      arrow: "text-[#EF4444]",
      line: "from-[#B91C1C] via-[#F87171] to-[#EF4444]",
    },
  ];

  return (
    <section
      id={data.sectionId}
      className={`relative isolate overflow-hidden border-y py-28 ${styles.section}`}
    >
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Main top gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] max-w-none -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`}
        />

        {/* Left gold glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`}
        />

        {/* Right gold glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`}
        />

        {/* Green ambient glow */}
        <div
          className={`absolute left-[10%] top-[25%] h-[450px] w-[450px] rounded-full blur-[150px] ${styles.greenGlow}`}
        />

        {/* Red ambient glow */}
        <div
          className={`absolute right-[8%] bottom-[12%] h-[420px] w-[420px] rounded-full blur-[150px] ${styles.redGlow}`}
        />

        {/* Radial gold highlight */}
        <div
          className={`absolute inset-0 ${styles.radialGlow}`}
        />

        {/* Fine background dots */}
        <div
          className={`absolute inset-0 ${styles.dots} bg-[size:24px_24px]`}
        />

        {/* Subtle gold dot pattern */}
        <div
          className={`absolute inset-0 ${styles.goldDots} bg-[size:48px_48px]`}
        />

        {/* Subtle green dot pattern */}
        <div
          className={`absolute inset-0 ${styles.greenDots} bg-[size:72px_72px]`}
        />

        {/* Subtle red dot pattern */}
        <div
          className={`absolute inset-0 ${styles.redDots} bg-[size:96px_96px]`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* SECTION DATA */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-12">

          {/* Eyebrow */}
          <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">
            {data.eyebrow}
          </div>

          {/* Main heading */}
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            {data.heading.normal}{" "}

            <span className="gold-text">
              {data.heading.highlight}
            </span>
          </h2>
        </div>

        {/* INDUSTRY CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

          {data.items.map((industry, index) => {
            const accent = accents[index % accents.length];

            return (
              <a
                key={industry.title}
                href={industry.href || "#"}
                className={`
                  group relative h-80 overflow-hidden rounded-xl
                  border transition-all duration-300 ease-out
                  hover:-translate-y-2
                  ${styles.card}
                  ${accent.border}
                  ${accent.shadow}
                `}
              >
                {/* IMAGE */}
                <div
                  className="
                    absolute inset-0 bg-cover bg-center
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                  style={{
                    backgroundImage: `url("${industry.image}")`,
                  }}
                />

                {/* IMAGE OVERLAY */}
                <div
                  className={`
                    absolute inset-0 transition-opacity duration-300
                    group-hover:opacity-90
                    ${styles.overlay}
                  `}
                />

                {/* SUBTLE ACCENT IMAGE GLOW */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${accent.color}18, transparent 65%)`,
                  }}
                />

                {/* CARD CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6">

                  {/* Industry title */}
                  <h3
                    className={`
                      font-semibold transition-colors duration-300
                      ${styles.description}
                      ${accent.title}
                    `}
                  >
                    {industry.title}
                  </h3>

                  {/* Industry description */}
                  <p
                    className={`
                      mt-2 text-xs leading-5
                      ${styles.description}
                    `}
                  >
                    {industry.description}
                  </p>

                  {/* Card arrow */}
                  <div
                    className={`
                      mt-4 flex items-center
                      transition-colors duration-300
                      ${accent.arrow}
                    `}
                  >
                    <span
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-2
                      "
                    >
                      {data.card.arrow}
                    </span>
                  </div>
                </div>

                {/* ACCENT GRADIENT BOTTOM LINE */}
                <div
                  className={`
                    absolute bottom-0 left-0 h-[2px] w-0
                    bg-gradient-to-r ${accent.line}
                    transition-all duration-500 ease-out
                    group-hover:w-full
                  `}
                />
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
