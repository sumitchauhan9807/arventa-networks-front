const ContactSection = ({ mode }) => {
  const isDark = mode === "dark";

  const contactOptions = [
    {
      icon: "◈",
      title: "Carrier Partnerships",
    },
    {
      icon: "▣",
      title: "Business",
    },
    {
      icon: "◉",
      title: "Contact Center",
    },
    {
      icon: "▯",
      title: "MVNO",
    },
    {
      icon: "△",
      title: "IoT",
    },
    {
      icon: "✦",
      title: "Technology Partnerships",
    },
  ];

  const styles = {
    section: isDark
      ? "border-white/10 text-white"
      : "border-slate-200 text-slate-900",

    background: isDark
      ? "bg-gradient-to-r from-[#100d06] via-[#171006] to-black"
      : "bg-gradient-to-r from-[#fffaf0] via-white to-slate-50",

    description: isDark ? "text-white/75" : "text-slate-600",

    card: isDark
      ? "border-white/10 bg-black/30 hover:bg-white/[0.04]"
      : "border-slate-200 bg-white/80 hover:bg-arventa-gold/[0.04]",

    cardText: isDark ? "text-white/85" : "text-slate-700",

    svgOpacity: isDark ? "opacity-30" : "opacity-20",
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden border-b py-24 ${styles.section}`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${styles.background}`} />

      {/* Decorative network lines */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-40 ${styles.svgOpacity}`}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 C250 20 350 230 600 100 S950 10 1200 130"
            fill="none"
            stroke="#d9a83e"
            strokeWidth={2}
          />
          <path
            d="M0 180 C250 50 350 250 600 130 S950 40 1200 160"
            fill="none"
            stroke="#d9a83e"
            strokeOpacity=".3"
            strokeWidth={1}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">
              Let's Connect
            </div>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Your Next Step{" "}
              <span className="gold-text">Starts Here</span>
            </h2>

            <p className={`mt-5 max-w-lg ${styles.description}`}>
              Get in touch with our team and find the right solution for your
              business.
            </p>

            <a
              href="mailto:sales@example.com"
              className="group mt-8 inline-flex items-center gap-5 rounded-md bg-arventa-gold px-7 py-4 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(217,168,62,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-arventa-goldLight hover:shadow-[0_15px_40px_rgba(217,168,62,0.25)]"
            >
              Contact / Sales
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href="#"
                className={`group rounded-xl border p-5 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-arventa-gold/50 hover:shadow-[0_15px_35px_rgba(217,168,62,0.1)] ${styles.card}`}
              >
                <div className="text-xl text-arventa-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  {option.icon}
                </div>

                <div
                  className={`mt-3 text-xs transition-colors duration-300 group-hover:text-arventa-gold ${styles.cardText}`}
                >
                  {option.title}
                </div>

                {/* Gold accent */}
                <div className="mx-auto mt-4 h-px w-0 bg-arventa-gold transition-all duration-300 group-hover:w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection