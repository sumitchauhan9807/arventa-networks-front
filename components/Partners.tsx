const TrustedBySection = ({ mode }) => {
  const isDark = mode === "dark";

  const brands = [
    { name: "vodafone" },
    { name: "T·Mobile" },
    { name: "orange" },
    { name: "Telefónica", className: "font-serif italic" },
    { name: "AT&T" },
    { name: "CISCO", className: "tracking-widest" },
    { name: "Microsoft" },
  ];

  const styles = {
    section: isDark
      ? "border-white/10 bg-black text-white"
      : "border-slate-200 bg-white text-slate-900",

    label: isDark ? "text-white/70" : "text-slate-500",

    brand: isDark
      ? "text-white/55 hover:text-white"
      : "text-slate-400 hover:text-slate-900",
  };

  return (
    <section className={`border-b py-14 ${styles.section}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-8 text-center text-xs uppercase tracking-[.3em] ${styles.label}`}
        >
          Trusted by Industry Leaders
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 text-xl font-semibold">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className={`cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:text-arventa-gold ${styles.brand} ${
                brand.className || ""
              }`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection