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
      ? "border-white/10 bg-[#080a0a] text-white"
      : "border-slate-200 bg-white text-slate-900",

    card: isDark
      ? "border-white/10 bg-black/20"
      : "border-slate-200 bg-slate-100",

    overlay: isDark
      ? "bg-gradient-to-t from-black via-black/55 to-transparent"
      : "bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent",

    description: isDark ? "text-white/80" : "text-white/90",

    cardShadow: isDark
      ? "hover:shadow-[0_20px_50px_rgba(217,168,62,0.12)]"
      : "hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]",
  };

  return (
    <section
      id="mobile"
      className={`border-y py-28 ${styles.section}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">
            Industries We Serve
          </div>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Flexible Solutions{" "}
            <span className="gold-text">for Your Industry</span>
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
                <h3 className={`font-semibold transition-colors duration-300 group-hover:text-arventa-gold ${styles.description}`}>
                  {industry.title}
                </h3>

                <p
                  className={`mt-2 text-xs leading-5 transition-colors duration-300 ${styles.description}`}
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

export default MobileSection