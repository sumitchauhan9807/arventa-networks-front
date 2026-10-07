const CompanySection = ({ mode}) => {
  const isDark = mode === "dark";

  const stats = [
    {
      value: "99.9%",
      label: "Network Uptime",
    },
    {
      value: "200+",
      label: "Carrier Partners",
    },
    {
      value: "180+",
      label: "Countries",
    },
    {
      value: "24/7",
      label: "Operations",
    },
  ];

  const styles = {
    section: isDark
      ? "text-white"
      : "text-slate-900",

    imageOpacity: isDark
      ? "opacity-20"
      : "opacity-[0.08]",

    overlay: isDark
      ? "bg-gradient-to-b from-black via-black/70 to-black"
      : "bg-gradient-to-b from-white via-white/85 to-white",

    description: isDark
      ? "text-white/70"
      : "text-slate-600",

    statsPanel: isDark
      ? "border-white/10 bg-black/50"
      : "border-slate-200 bg-white/75",

    statBorder: isDark
      ? "border-white/10"
      : "border-slate-200",

    statLabel: isDark
      ? "text-white/60"
      : "text-slate-500",
  };

  return (
    <section
      id="company"
      className={`
        relative overflow-hidden
        py-28
        ${styles.section}
      `}
    >
      {/* Background Image */}
      <div
        className={`
          absolute inset-0
          bg-cover bg-center
          ${styles.imageOpacity}
        `}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80")',
        }}
      />

      {/* Theme Overlay */}
      <div
        className={`
          absolute inset-0
          ${styles.overlay}
        `}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Intro */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">
              Global Infrastructure
            </div>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Built for a{" "}
              <span className="gold-text">
                Connected World
              </span>
            </h2>

            <p
              className={`
                mt-6 max-w-xl leading-8
                transition-colors duration-300
                ${styles.description}
              `}
            >
              Our global network and carrier partnerships ensure maximum
              reach, security and performance — for your voice, data and
              mobile services.
            </p>

            <a
              href="#"
              className="
                group
                mt-8 inline-flex items-center gap-5
                rounded-md
                border border-arventa-gold
                px-6 py-4
                text-sm font-medium
                text-arventa-gold
                transition-all duration-300 ease-out
                hover:bg-arventa-gold
                hover:text-black
                hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]
              "
            >
              Learn More

              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`
              group overflow-hidden rounded-2xl
              border
              backdrop-blur-xl
              ${styles.statsPanel}
              transition-all duration-300 ease-out
              hover:border-arventa-gold/30
              hover:shadow-[0_18px_50px_rgba(217,168,62,0.10)]
            `}
          >
            <div className="grid grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    group/stat relative p-8
                    ${styles.statBorder}
                    transition-colors duration-300
                    hover:bg-arventa-gold/[0.04]
                    ${
                      index === 0
                        ? "border-b border-r"
                        : index === 1
                        ? "border-b"
                        : index === 2
                        ? "border-r"
                        : ""
                    }
                  `}
                >
                  {/* Gold accent line */}
                  <span
                    className="
                      absolute left-0 top-0
                      h-px w-0
                      bg-arventa-gold
                      transition-all duration-500 ease-out
                      group-hover/stat:w-12
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      text-4xl font-semibold
                      gold-text
                      transition-transform duration-300 ease-out
                      group-hover/stat:-translate-y-1
                    "
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className={`
                      mt-2 text-sm
                      transition-colors duration-300
                      ${styles.statLabel}
                      group-hover/stat:text-arventa-gold
                    `}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanySection;