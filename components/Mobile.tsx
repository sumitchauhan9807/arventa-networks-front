
const MobileSection = ({ mode }) => {
  const isDark = mode === "dark";

  const industries = [
    {
      title: "Telecom Operators",
      description: "Expand your network and reach.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Businesses",
      description: "Reliable communication and connectivity.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Contact Centers",
      description: "Higher efficiency. Better customer experiences.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "MVNOs",
      description: "Launch your own mobile brand.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "IoT / M2M",
      description: "Connect devices. Unlock potential.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const styles = {
    section: isDark
      ? "border-white/10 bg-[#070909] text-white"
      : "border-[#151716]/10 bg-[#F7F5F0] text-[#151716]",

    mainGlow: isDark
      ? "bg-[#D9A83E]/[0.055]"
      : "bg-[#D9A83E]/[0.10]",

    leftGlow: isDark
      ? "bg-[#D9A83E]/[0.025]"
      : "bg-[#D9A83E]/[0.045]",

    rightGlow: isDark
      ? "bg-[#D9A83E]/[0.02]"
      : "bg-[#D9A83E]/[0.035]",

    radialGlow: isDark
      ? "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]",

    dots: isDark
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]",

    goldDots:
      "bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]",

    bottomFade: isDark
      ? "from-[#070909]"
      : "from-[#F7F5F0]",

    card: isDark
      ? "border-white/10 bg-black/20"
      : "border-[#151716]/10 bg-white/65",

    overlay: isDark
      ? "bg-gradient-to-t from-black via-black/55 to-transparent"
      : "bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent",

    description: "text-white/90",

    cardShadow: isDark
      ? "hover:shadow-[0_20px_50px_rgba(217,168,62,0.12)]"
      : "hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]",
  };

  return (
    <section
      id="mobile"
      className={`relative isolate overflow-hidden border-y py-28 ${styles.section}`}
    >
      {/* Ambient background — matching Timeline */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main top gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] max-w-none -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`}
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

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* Section content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">
            Industries We Serve
          </div>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Flexible Solutions{" "}
            <span className="gold-text">
              for Your Industry
            </span>
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <a
              key={industry.title}
              href="#"
              className={`group relative h-80 overflow-hidden rounded-xl border ${styles.card} ${styles.cardShadow} transition-all duration-300 ease-out hover:-translate-y-2 hover:border-arventa-gold/50`}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url("${industry.image}")`,
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-90 ${styles.overlay}`}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3
                  className={`font-semibold transition-colors duration-300 group-hover:text-arventa-gold ${styles.description}`}
                >
                  {industry.title}
                </h3>

                <p
                  className={`mt-2 text-xs leading-5 ${styles.description}`}
                >
                  {industry.description}
                </p>

                <div className="mt-4 flex items-center text-arventa-gold">
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-arventa-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
