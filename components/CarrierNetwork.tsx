const CarrierNetwork = ({ mode }) => {
  const isDark = mode === "dark";

  const services = [
    {
      icon: "◈",
      title: "SIP Trunking",
      description: "Enterprise-grade voice connectivity.",
    },
    {
      icon: "⌁",
      title: "Global Routing",
      description: "Intelligent routing across carriers.",
    },
    {
      icon: "◎",
      title: "DIDs & Numbers",
      description: "Local presence across global markets.",
    },
    {
      icon: "◇",
      title: "24/7 Monitoring",
      description: "Continuous network visibility.",
    },
  ];

  const nodes = [
    {
      city: "Frankfurt",
      region: "EU • 4.2K routes",
      position: "left-[9%] top-[22%]",
    },
    {
      city: "New York",
      region: "US • 3.8K routes",
      position: "right-[9%] top-[22%]",
    },
    {
      city: "Singapore",
      region: "APAC • 2.9K routes",
      position: "left-[9%] bottom-[22%]",
    },
    {
      city: "Dubai",
      region: "ME • 1.9K routes",
      position: "right-[9%] bottom-[22%]",
    },
  ];

  const styles = {
    section: isDark
      ? "border-white/10 bg-[#050606] text-white"
      : "border-slate-200 bg-slate-50 text-slate-900",

    mainPanel: isDark
      ? "border-white/10 bg-[#080a0a]/80"
      : "border-slate-200 bg-white/85",

    divider: isDark
      ? "border-white/10"
      : "border-slate-200",

    primaryText: isDark
      ? "text-white"
      : "text-slate-900",

    mutedText: isDark
      ? "text-white/60"
      : "text-slate-500",

    secondaryText: isDark
      ? "text-white/70"
      : "text-slate-600",

    metricText: isDark
      ? "text-white/70"
      : "text-slate-500",

    metricValue: isDark
      ? "text-white"
      : "text-slate-800",

    metricBackground: isDark
      ? "border-white/10 bg-black/50"
      : "border-slate-200 bg-white/80",

    nodeBackground: isDark
      ? "border-white/10 bg-black/50"
      : "border-slate-200 bg-white/85",

    hubBackground: isDark
      ? "border-[#D9A83E]/60 bg-[#0c0e0e]"
      : "border-[#D9A83E]/60 bg-white",

    serviceBackground: isDark
      ? "hover:bg-white/[0.02]"
      : "hover:bg-arventa-gold/[0.04]",

    ctaBackground: isDark
      ? "bg-[#D9A83E]/[0.03]"
      : "bg-arventa-gold/[0.05]",
  };

  return (
    <section
      id="carrier-network"
      className={`
        relative overflow-hidden
        border-y
        py-28
        ${styles.section}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" />

        <div
          className="
            absolute left-1/2 top-1/2
            h-[500px] w-[500px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#D9A83E]/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#D9A83E]">
            <span className="h-px w-8 bg-[#D9A83E]" />
            Carrier Network
            <span className="h-px w-8 bg-[#D9A83E]" />
          </div>

          <h2
            className={`
              text-4xl font-semibold tracking-tight
              sm:text-5xl lg:text-6xl
              ${styles.primaryText}
            `}
          >
            One Network.{" "}
            <span className="bg-gradient-to-r from-[#F6D27A] to-[#D9A83E] bg-clip-text text-transparent">
              Global Reach.
            </span>
          </h2>

          <p
            className={`
              mx-auto mt-6 max-w-2xl
              text-sm leading-7
              sm:text-base
              ${styles.secondaryText}
            `}
          >
            Connect your business to a global carrier ecosystem with
            intelligent routing, reliable voice infrastructure and scalable
            connectivity.
          </p>
        </div>

        {/* Main Network */}
        <div
          className={`
            relative mt-16
            overflow-hidden rounded-3xl
            border
            shadow-[0_0_80px_rgba(217,168,62,.06)]
            backdrop-blur-xl
            ${styles.mainPanel}
            transition-all duration-300
            hover:border-[#D9A83E]/20
          `}
        >
          {/* Top Status Bar */}
          <div
            className={`
              flex flex-col justify-between gap-4
              border-b
              px-6 py-4
              sm:flex-row sm:items-center
              ${styles.divider}
            `}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
              </span>

              <span
                className={`
                  text-xs font-medium
                  ${styles.primaryText}
                `}
              >
                GLOBAL NETWORK
              </span>

              <span className="rounded-full border border-[#D9A83E]/20 bg-[#D9A83E]/5 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#D9A83E]">
                Operational
              </span>
            </div>

            <div className={`flex gap-6 text-[10px] ${styles.metricText}`}>
              <span>
                LATENCY{" "}
                <b className={`ml-1 ${styles.metricValue}`}>
                  18ms
                </b>
              </span>

              <span>
                UPTIME{" "}
                <b className="ml-1 text-[#D9A83E]">
                  99.99%
                </b>
              </span>

              <span>
                ROUTES{" "}
                <b className={`ml-1 ${styles.metricValue}`}>
                  12.8K
                </b>
              </span>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative min-h-[520px] overflow-hidden">

            {/* Ambient Rings */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/10" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/5" />

            <div
              className={`
                absolute left-1/2 top-1/2
                h-[500px] w-[500px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                ${isDark ? "border-white/5" : "border-slate-300/50"}
                border
              `}
            />

            {/* SVG Network */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 520"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Gold connection paths */}
              <path
                d="M170 150 C350 110 390 250 600 260"
                stroke="#D9A83E"
                strokeOpacity=".18"
                strokeWidth="1.5"
              />

              <path
                d="M170 370 C350 400 410 280 600 260"
                stroke="#D9A83E"
                strokeOpacity=".18"
                strokeWidth="1.5"
              />

              <path
                d="M1030 150 C850 110 810 230 600 260"
                stroke="#D9A83E"
                strokeOpacity=".18"
                strokeWidth="1.5"
              />

              <path
                d="M1030 370 C850 410 790 290 600 260"
                stroke="#D9A83E"
                strokeOpacity=".18"
                strokeWidth="1.5"
              />

              {/* Secondary paths */}
              <path
                d="M170 150 C420 180 770 190 1030 150"
                stroke={isDark ? "white" : "#64748b"}
                strokeOpacity={isDark ? ".04" : ".12"}
              />

              <path
                d="M170 370 C420 330 780 330 1030 370"
                stroke={isDark ? "white" : "#64748b"}
                strokeOpacity={isDark ? ".04" : ".12"}
              />

              {/* Animated Data Packets */}
              <circle r={4} fill="#F5CC70">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M170 150 C350 110 390 250 600 260"
                />
              </circle>

              <circle r={3} fill="#D9A83E">
                <animateMotion
                  dur="4s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M1030 150 C850 110 810 230 600 260"
                />
              </circle>

              <circle r={3} fill="#F5CC70">
                <animateMotion
                  dur="4.5s"
                  begin=".5s"
                  repeatCount="indefinite"
                  path="M170 370 C350 400 410 280 600 260"
                />
              </circle>

              <circle r={4} fill="#D9A83E">
                <animateMotion
                  dur="3.8s"
                  begin="1.5s"
                  repeatCount="indefinite"
                  path="M1030 370 C850 410 790 290 600 260"
                />
              </circle>
            </svg>

            {/* Central Arventa Hub */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center">

              <div
                className="
                  absolute h-32 w-32
                  animate-ping rounded-full
                  border border-[#D9A83E]/20
                "
                style={{ animationDuration: "3s" }}
              />

              <div className="absolute h-24 w-24 rounded-full border border-[#D9A83E]/30 bg-[#D9A83E]/5" />

              <div
                className={`
                  relative flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  border
                  shadow-[0_0_50px_rgba(217,168,62,.22)]
                  ${styles.hubBackground}
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_65px_rgba(217,168,62,.35)]
                `}
              >
                <span className="text-2xl font-bold text-[#D9A83E]">
                  A
                </span>

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#D9A83E] shadow-[0_0_15px_#D9A83E]" />
              </div>
            </div>

            {/* Network Nodes */}
            {nodes.map((node) => (
              <div
                key={node.city}
                className={`
                  absolute
                  hidden
                  sm:block
                  ${node.position}
                `}
              >
                <div
                  className={`
                    group/node
                    flex items-center gap-3
                    rounded-xl
                    border
                    px-4 py-3
                    backdrop-blur-md
                    ${styles.nodeBackground}
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#D9A83E]/40
                    hover:bg-[#D9A83E]/[0.05]
                  `}
                >
                  <span
                    className="
                      h-2.5 w-2.5 shrink-0
                      rounded-full
                      bg-[#D9A83E]
                      shadow-[0_0_12px_#D9A83E]
                      transition-transform duration-300
                      group-hover/node:scale-125
                    "
                  />

                  <div>
                    <div
                      className={`
                        text-xs font-semibold
                        ${styles.primaryText}
                        transition-colors duration-300
                        group-hover/node:text-[#D9A83E]
                      `}
                    >
                      {node.city}
                    </div>

                    <div
                      className={`
                        text-[9px]
                        ${styles.mutedText}
                      `}
                    >
                      {node.region}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Nodes */}
            <div className="absolute inset-x-6 bottom-8 grid grid-cols-2 gap-3 sm:hidden">
              {nodes.map((node) => (
                <div
                  key={node.city}
                  className={`
                    flex items-center gap-2
                    rounded-lg
                    border
                    px-3 py-2
                    text-xs
                    backdrop-blur-md
                    ${styles.nodeBackground}
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]" />

                  <span className={styles.primaryText}>
                    {node.city}
                  </span>
                </div>
              ))}
            </div>

            {/* Active Connections */}
            <div
              className={`
                absolute left-1/2 top-8
                hidden -translate-x-1/2
                rounded-full
                border
                px-4 py-2
                backdrop-blur-md
                sm:block
                ${styles.metricBackground}
              `}
            >
              <div className="flex items-center gap-3 text-[9px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />

                <span className={styles.mutedText}>
                  ACTIVE CONNECTIONS
                </span>

                <span className={`font-semibold ${styles.primaryText}`}>
                  18,492
                </span>
              </div>
            </div>

            {/* Live Traffic */}
            <div
              className={`
                absolute bottom-8 left-1/2
                hidden -translate-x-1/2
                rounded-full
                border
                px-4 py-2
                backdrop-blur-md
                sm:block
                ${styles.metricBackground}
              `}
            >
              <div className="flex items-center gap-3 text-[9px]">
                <span className={styles.mutedText}>
                  LIVE TRAFFIC
                </span>

                <span className="font-semibold text-[#D9A83E]">
                  2.48 TB/s
                </span>

                <span className="text-green-500">
                  ● +12.4%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Services */}
          <div
            className={`
              grid
              border-t
              sm:grid-cols-4
              ${styles.divider}
            `}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`
                  group/service
                  p-6
                  ${styles.divider}
                  ${styles.serviceBackground}
                  transition-all duration-300
                  ${
                    index < 3
                      ? "border-b sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    mb-3
                    text-[#D9A83E]
                    transition-all duration-300
                    group-hover/service:-translate-y-1
                    group-hover/service:scale-110
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className={`
                    text-sm font-semibold
                    transition-colors duration-300
                    ${styles.primaryText}
                    group-hover/service:text-[#D9A83E]
                  `}
                >
                  {service.title}
                </h3>

                <p
                  className={`
                    mt-2 text-xs leading-5
                    ${styles.mutedText}
                  `}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`
            mt-10
            flex flex-col items-start
            justify-between gap-5
            rounded-2xl
            border border-[#D9A83E]/15
            p-6
            sm:flex-row sm:items-center
            ${styles.ctaBackground}
            transition-all duration-300
            hover:border-[#D9A83E]/30
            hover:bg-[#D9A83E]/[0.07]
            hover:shadow-[0_15px_40px_rgba(217,168,62,0.08)]
          `}
        >
          <div>
            <div
              className={`
                text-sm font-semibold
                ${styles.primaryText}
              `}
            >
              Need global carrier connectivity?
            </div>

            <div
              className={`
                mt-1 text-xs
                ${styles.mutedText}
              `}
            >
              Let's build the right routing and connectivity architecture
              for you.
            </div>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex items-center gap-4
              rounded-md
              bg-[#D9A83E]
              px-5 py-3
              text-xs font-semibold text-black
              transition-all duration-300 ease-out
              hover:bg-[#F5CC70]
              hover:shadow-[0_8px_25px_rgba(217,168,62,0.22)]
            "
          >
            Talk to a Network Expert

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
      </div>
    </section>
  );
};

export default CarrierNetwork