
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

    description: isDark
      ? "text-white/65"
      : "text-[#151716]/65",

    card: isDark
      ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
      : "border-[#151716]/10 bg-white/60 hover:bg-[#D9A83E]/[0.045]",

    cardText: isDark
      ? "text-white/75"
      : "text-[#151716]/75",

    svgOpacity: isDark
      ? "opacity-30"
      : "opacity-25",
  };

  return (
    <section
      id="contact"
      className={`
        relative isolate overflow-hidden
        border-b py-24 sm:py-28
        ${styles.section}
      `}
    >
      {/* Shared ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Main top gold glow */}
        <div
          className={`
            absolute left-1/2 top-[-250px]
            h-[700px] w-[1100px] max-w-none
            -translate-x-1/2 rounded-full blur-[160px]
            ${styles.mainGlow}
          `}
        />

        {/* Left ambient glow */}
        <div
          className={`
            absolute -left-[300px] top-[35%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.leftGlow}
          `}
        />

        {/* Right ambient glow */}
        <div
          className={`
            absolute -right-[300px] bottom-[10%]
            h-[600px] w-[600px] rounded-full blur-[150px]
            ${styles.rightGlow}
          `}
        />

        {/* Radial gold highlight */}
        <div
          className={`absolute inset-0 ${styles.radialGlow}`}
        />

        {/* Fine background dots */}
        <div
          className={`
            absolute inset-0 ${styles.dots}
            bg-[size:24px_24px]
          `}
        />

        {/* Subtle gold dot pattern */}
        <div
          className={`
            absolute inset-0 ${styles.goldDots}
            bg-[size:48px_48px]
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

      {/* Decorative network lines */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute bottom-0
          left-0 right-0 h-40
          ${styles.svgOpacity}
        `}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 150 C250 20 350 230 600 100 S950 10 1200 130"
            stroke="#D9A83E"
            strokeWidth={2}
          />

          <path
            d="M0 180 C250 50 350 250 600 130 S950 40 1200 160"
            stroke="#D9A83E"
            strokeOpacity=".3"
            strokeWidth={1}
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">
              <span className="h-px w-7 bg-[#D9A83E]/70" />
              Let's Connect
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Your Next Step{" "}
              <span className="gold-text">Starts Here</span>
            </h2>

            <p
              className={`
                mt-6 max-w-lg text-sm leading-7 sm:text-base
                ${styles.description}
              `}
            >
              Get in touch with our team and find the right solution for
              your business.
            </p>

            <a
              href="mailto:sales@example.com"
              className="
                group mt-8 inline-flex items-center gap-5
                rounded-md bg-gradient-to-r
                from-[#E7BC58] to-[#D9A83E]
                px-7 py-4 text-sm font-semibold text-[#17130A]
                shadow-[0_10px_30px_rgba(217,168,62,0.15)]
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:from-[#F6D27A] hover:to-[#E7BC58]
                hover:shadow-[0_15px_40px_rgba(217,168,62,0.25)]
              "
            >
              Contact / Sales

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D9A83E]/60" />

              <span
                className={`
                  text-[10px] uppercase tracking-[.18em]
                  ${styles.description}
                `}
              >
                Let's build something connected
              </span>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href="mailto:sales@example.com"
                aria-label={`Contact us about ${option.title}`}
                className={`
                  group relative overflow-hidden rounded-xl
                  border p-5 text-center backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-[#D9A83E]/50
                  hover:shadow-[0_15px_35px_rgba(217,168,62,0.1)]
                  ${styles.card}
                `}
              >
                {/* Subtle gold hover glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-8 -top-8 h-20 w-20
                    rounded-full bg-[#D9A83E]/[0.07]
                    opacity-0 blur-2xl
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative text-xl text-[#D9A83E]
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:scale-110
                  "
                >
                  {option.icon}
                </div>

                <div
                  className={`
                    relative mt-3 text-xs leading-5
                    transition-colors duration-300
                    group-hover:text-[#D9A83E]
                    ${styles.cardText}
                  `}
                >
                  {option.title}
                </div>

                {/* Gold accent */}
                <div
                  className="
                    relative mx-auto mt-4 h-px w-0
                    bg-[#D9A83E]
                    transition-all duration-300
                    group-hover:w-8
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
