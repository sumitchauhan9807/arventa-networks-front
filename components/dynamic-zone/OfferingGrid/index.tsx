const OfferingGrid = ({ theme, data }) => {
  const isDark = theme === "dark";

  const styles = {
    section: isDark
      ? "border-white/10 bg-[#070909]"
      : "border-[#151716]/10 bg-[#F7F5F0]",

    mainGlow: isDark
      ? "bg-[#D9A83E]/[0.055]"
      : "bg-[#D9A83E]/[0.10]",

    sideGlow: isDark
      ? "bg-[#D9A83E]/[0.025]"
      : "bg-[#D9A83E]/[0.045]",

    greenGlow: isDark
      ? "bg-[#22C55E]/[0.035]"
      : "bg-[#16A34A]/[0.055]",

    redGlow: isDark
      ? "bg-[#EF4444]/[0.03]"
      : "bg-[#DC2626]/[0.045]",

    radialGlow: isDark
      ? "bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.08),transparent_42%)]"
      : "bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.10),transparent_42%)]",

    dots: isDark
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(21,23,22,0.10)_1px,transparent_1px)]",

    goldDots: isDark
      ? "bg-[radial-gradient(circle,rgba(217,168,62,0.24)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(184,138,40,0.18)_1px,transparent_1px)]",

    greenDots: isDark
      ? "bg-[radial-gradient(circle,rgba(34,197,94,0.20)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(22,163,74,0.15)_1px,transparent_1px)]",

    redDots: isDark
      ? "bg-[radial-gradient(circle,rgba(239,68,68,0.18)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(220,38,38,0.14)_1px,transparent_1px)]",

    bottomFade: isDark
      ? "from-[#070909]"
      : "from-[#F7F5F0]",

    heading: isDark
      ? "text-white"
      : "text-[#151716]",

    paragraph: isDark
      ? "text-white/45"
      : "text-[#151716]/55",

    goldGradient: isDark
      ? "from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]"
      : "from-[#8E6718] via-[#B88A28] to-[#D9A83E]",

    badge: isDark
      ? "border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]"
      : "border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]",

    badgeDot: isDark
      ? "bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]"
      : "bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]",

    muted: isDark
      ? "text-white/30"
      : "text-[#151716]/35",

    panel: isDark
      ? "border-white/10 bg-white/[0.025] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      : "border-[#151716]/10 bg-white/50 shadow-[0_20px_60px_rgba(21,23,22,0.04)]",
  };

  // Three-color accent system
  const accents = [
    {
      name: "gold",
      border: "hover:border-[#D9A83E]/35",
      shadow: "hover:shadow-[0_10px_30px_rgba(217,168,62,0.10)]",
      title: "group-hover:text-[#D9A83E]",
      iconText: "text-[#D9A83E]",
      iconBorder: "border-[#D9A83E]/25",
      iconBg: "bg-[#D9A83E]/[0.06]",
      iconHoverBorder: "group-hover:border-[#D9A83E]/50",
      iconHoverBg: "group-hover:bg-[#D9A83E]/[0.10]",
      iconHoverShadow: "group-hover:shadow-[0_0_18px_rgba(217,168,62,0.14)]",
      arrowText: "text-[#D9A83E]",
      arrowBorder: "group-hover:border-[#D9A83E]/25",
      arrowBg: "group-hover:bg-[#D9A83E]/[0.07]",
      highlight: "from-[#D9A83E]/[0.08]",
      glow: "#D9A83E",
      bottomLine: "from-[#D9A83E] via-[#F6D27A] to-transparent",
    },
    {
      name: "green",
      border: "hover:border-[#22C55E]/35",
      shadow: "hover:shadow-[0_10px_30px_rgba(34,197,94,0.10)]",
      title: isDark
        ? "group-hover:text-[#4ADE80]"
        : "group-hover:text-[#15803D]",
      iconText: isDark ? "text-[#4ADE80]" : "text-[#15803D]",
      iconBorder: "border-[#22C55E]/25",
      iconBg: "bg-[#22C55E]/[0.06]",
      iconHoverBorder: "group-hover:border-[#22C55E]/50",
      iconHoverBg: "group-hover:bg-[#22C55E]/[0.10]",
      iconHoverShadow: "group-hover:shadow-[0_0_18px_rgba(34,197,94,0.14)]",
      arrowText: isDark ? "text-[#4ADE80]" : "text-[#15803D]",
      arrowBorder: "group-hover:border-[#22C55E]/25",
      arrowBg: "group-hover:bg-[#22C55E]/[0.07]",
      highlight: "from-[#22C55E]/[0.08]",
      glow: "#22C55E",
      bottomLine: "from-[#16A34A] via-[#4ADE80] to-transparent",
    },
    {
      name: "red",
      border: "hover:border-[#EF4444]/35",
      shadow: "hover:shadow-[0_10px_30px_rgba(239,68,68,0.10)]",
      title: isDark
        ? "group-hover:text-[#F87171]"
        : "group-hover:text-[#B91C1C]",
      iconText: isDark ? "text-[#F87171]" : "text-[#B91C1C]",
      iconBorder: "border-[#EF4444]/25",
      iconBg: "bg-[#EF4444]/[0.06]",
      iconHoverBorder: "group-hover:border-[#EF4444]/50",
      iconHoverBg: "group-hover:bg-[#EF4444]/[0.10]",
      iconHoverShadow: "group-hover:shadow-[0_0_18px_rgba(239,68,68,0.14)]",
      arrowText: isDark ? "text-[#F87171]" : "text-[#B91C1C]",
      arrowBorder: "group-hover:border-[#EF4444]/25",
      arrowBg: "group-hover:bg-[#EF4444]/[0.07]",
      highlight: "from-[#EF4444]/[0.08]",
      glow: "#EF4444",
      bottomLine: "from-[#DC2626] via-[#F87171] to-transparent",
    },
  ];

  return (
    <section
      id={data.sectionId}
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
            isDark ? "opacity-[0.12]" : "opacity-[0.08]"
          }`}
          style={{
            backgroundImage: `url("${data.background.image}")`,
          }}
        />

        {/* Theme overlay */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[#070909]/90"
              : "bg-[#F7F5F0]/90"
          }`}
        />

        {/* Gold ambient glow */}
        <div
          className={`absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full blur-[120px] ${styles.mainGlow}`}
        />

        <div
          className={`absolute -right-40 top-1/4 h-[360px] w-[360px] rounded-full blur-[110px] ${styles.sideGlow}`}
        />

        {/* Green ambient glow */}
        <div
          className={`absolute -bottom-32 left-[30%] h-[360px] w-[360px] rounded-full blur-[120px] ${styles.greenGlow}`}
        />

        {/* Red ambient glow */}
        <div
          className={`absolute right-[12%] top-[8%] h-[280px] w-[280px] rounded-full blur-[110px] ${styles.redGlow}`}
        />

        {/* Radial highlight */}
        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        {/* Base dotted background */}
        <div
          className={`absolute inset-0 ${styles.dots}`}
          style={{
            backgroundSize: "22px 22px",
            backgroundPosition: "center center",
          }}
        />

        {/* Gold dot pattern */}
        <div
          className={`absolute inset-0 ${styles.goldDots}`}
          style={{
            backgroundSize: "38px 38px",
            backgroundPosition: "10px 14px",
            maskImage:
              "radial-gradient(ellipse at 15% 25%, black, transparent 48%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 15% 25%, black, transparent 48%)",
          }}
        />

        {/* Green dot pattern */}
        <div
          className={`absolute inset-0 ${styles.greenDots}`}
          style={{
            backgroundSize: "44px 44px",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(ellipse at 75% 80%, black, transparent 45%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 75% 80%, black, transparent 45%)",
          }}
        />

        {/* Red dot pattern */}
        <div
          className={`absolute inset-0 ${styles.redDots}`}
          style={{
            backgroundSize: "52px 52px",
            backgroundPosition: "right top",
            maskImage:
              "radial-gradient(ellipse at 90% 20%, black, transparent 40%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 90% 20%, black, transparent 40%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* Main data */}
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

              {data.eyebrow}
            </div>

            {/* Heading */}
            <h2
              className={`mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${styles.heading}`}
            >
              {data.heading.first}

              <br />

              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}
              >
                {data.heading.highlight}
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mt-6 max-w-xl text-sm leading-7 transition-colors duration-300 sm:text-base sm:leading-8 ${styles.paragraph}`}
            >
              {data.description}
            </p>

            {/* CTA */}
            <a
              href={data.cta.href}
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
              {data.cta.label}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Supporting note */}
            <div
              className={`mt-5 flex items-center gap-2 text-xs ${styles.muted}`}
            >
              <span
                className={`h-1 w-1 rounded-full ${styles.badgeDot}`}
              />

              {data.supportingNote}
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
              {data.items.map((product, index) => {
                const accent = accents[index % accents.length];

                return (
                  <a
                    key={product.title}
                    href={product.href || "#"}
                    className={`
                      group relative flex items-center gap-4 overflow-hidden
                      rounded-xl border p-4 backdrop-blur-md
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      sm:gap-5 sm:p-5
                      ${styles.panel}
                      ${accent.border}
                      ${accent.shadow}
                    `}
                  >
                    {/* Accent hover highlight */}
                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none absolute inset-0
                        bg-gradient-to-r ${accent.highlight}
                        via-transparent to-transparent
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100
                      `}
                    />

                    {/* Accent radial glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: accent.glow,
                      }}
                    />

                    {/* Product number */}
                    <div
                      className={`relative hidden w-5 shrink-0 text-[10px] font-medium tabular-nums sm:block ${styles.muted}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        relative flex h-12 w-12 shrink-0 items-center
                        justify-center rounded-lg border
                        text-sm font-semibold
                        transition-all duration-300
                        group-hover:scale-105
                        sm:h-14 sm:w-14
                        ${accent.iconBorder}
                        ${accent.iconBg}
                        ${accent.iconText}
                        ${accent.iconHoverBorder}
                        ${accent.iconHoverBg}
                        ${accent.iconHoverShadow}
                      `}
                    >
                      {product.icon}
                    </div>

                    {/* Product text */}
                    <div className="relative min-w-0 flex-1">
                      <h3
                        className={`
                          text-sm font-semibold
                          transition-colors duration-300 sm:text-base
                          ${styles.heading}
                          ${accent.title}
                        `}
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
                        transition-all duration-300
                        group-hover:translate-x-1
                        ${accent.arrowText}
                        border-transparent
                        ${accent.arrowBorder}
                        ${accent.arrowBg}
                      `}
                    >
                      {data.product.arrow}
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className={`
                        pointer-events-none absolute inset-x-0 bottom-0
                        h-px origin-left scale-x-0
                        bg-gradient-to-r ${accent.bottomLine}
                        transition-transform duration-500
                        group-hover:scale-x-100
                      `}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingGrid;