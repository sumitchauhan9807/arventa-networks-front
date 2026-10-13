
import React from "react";

type CarrierNetworkProps = {
  mode?: "dark" | "light";
};

const CarrierNetwork = ({ mode = "dark" }: CarrierNetworkProps) => {
  const isDark = mode === "dark";
  const gold = "#D9A83E";

  const services = [
    {
      icon: "◈",
      title: "SIP Trunking",
      description:
        "Enterprise-grade voice connectivity with scalable SIP infrastructure.",
    },
    {
      icon: "⌁",
      title: "Global Routing",
      description:
        "Intelligent routing across international carrier networks.",
    },
    {
      icon: "◎",
      title: "DIDs & Numbers",
      description:
        "Local presence and numbering resources across global markets.",
    },
    {
      icon: "◇",
      title: "24/7 Monitoring",
      description:
        "Continuous network visibility and proactive service monitoring.",
    },
  ];

  const nodes = [
    { city: "United States", region: "N. America", x: 85, y: 105 },
    { city: "Canada", region: "N. America", x: 245, y: 55 },
    { city: "Mexico", region: "N. America", x: 85, y: 225 },
    { city: "Brazil", region: "S. America", x: 245, y: 445 },
    { city: "United Kingdom", region: "Europe", x: 400, y: 55 },
    { city: "Germany", region: "Europe", x: 510, y: 110 },
    { city: "France", region: "Europe", x: 390, y: 170 },
    { city: "Netherlands", region: "Europe", x: 520, y: 205 },
    { city: "Switzerland", region: "Europe", x: 390, y: 285 },
    { city: "Spain", region: "Europe", x: 275, y: 355 },
    { city: "UAE", region: "Middle East", x: 800, y: 355 },
    { city: "Saudi Arabia", region: "Middle East", x: 920, y: 285 },
    { city: "Turkey", region: "Middle East", x: 800, y: 205 },
    { city: "India", region: "South Asia", x: 930, y: 110 },
    { city: "Singapore", region: "APAC", x: 1080, y: 225 },
    { city: "Japan", region: "APAC", x: 1110, y: 105 },
    { city: "South Korea", region: "APAC", x: 1010, y: 55 },
    { city: "Australia", region: "APAC", x: 1010, y: 445 },
    { city: "Hong Kong", region: "APAC", x: 925, y: 390 },
    { city: "Thailand", region: "APAC", x: 755, y: 445 },
  ];

  const theme = {
    section: isDark
      ? "border-white/10 bg-[#070909] text-white"
      : "border-[#151716]/10 bg-[#F7F5F0] text-[#151716]",

    primary: isDark ? "text-white" : "text-[#151716]",
    secondary: isDark ? "text-white/65" : "text-[#151716]/70",
    muted: isDark ? "text-white/45" : "text-[#151716]/55",

    panel: isDark
      ? "border-white/[0.12] bg-[#0A0C0C]/90"
      : "border-[#151716]/15 bg-white/80",

    divider: isDark
      ? "border-white/[0.12]"
      : "border-[#151716]/15",

    node: isDark
      ? "border-white/[0.16] bg-[#090C0C]/95"
      : "border-[#151716]/15 bg-white/95",

    hub: isDark
      ? "border-[#D9A83E]/60 bg-[#0C0E0E]"
      : "border-[#D9A83E]/70 bg-white",
  };

  const connectionPath = (
    node: (typeof nodes)[number],
    index: number
  ) => {
    const midX = (node.x + 600) / 2;
    const midY = (node.y + 260) / 2;
    const bend = index % 2 === 0 ? -35 : 35;

    return `M ${node.x} ${node.y} Q ${
      midX + bend
    } ${midY - bend} 600 260`;
  };

  return (
    <section
      id="carrier-network"
      className={`relative isolate overflow-hidden border-y py-20 sm:py-28 ${theme.section}`}
    >
      <style>{`
        @keyframes carrierFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
        }

        @keyframes carrierPulse {
          0%, 100% {
            opacity: .3;
            transform: scale(.92);
          }
          50% {
            opacity: .8;
            transform: scale(1.06);
          }
        }

        @keyframes carrierEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes carrierDottedFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -110;
          }
        }

        @keyframes carrierSignal {
          0%, 100% {
            opacity: .35;
          }
          50% {
            opacity: .95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carrier-animated,
          .carrier-animated *,
          .carrier-service {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className={`absolute left-1/2 top-[-250px] h-[650px] w-[1000px] max-w-none -translate-x-1/2 rounded-full blur-[160px] ${
            isDark
              ? "bg-[#D9A83E]/[0.07]"
              : "bg-[#D9A83E]/[0.11]"
          }`}
        />

        <div
          className={`absolute -left-64 top-[35%] h-[500px] w-[500px] rounded-full blur-[150px] ${
            isDark
              ? "bg-[#D9A83E]/[0.025]"
              : "bg-[#D9A83E]/[0.045]"
          }`}
        />

        <div
          className={`absolute -right-64 bottom-[5%] h-[500px] w-[500px] rounded-full blur-[150px] ${
            isDark
              ? "bg-[#D9A83E]/[0.025]"
              : "bg-[#D9A83E]/[0.045]"
          }`}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${
              isDark
                ? "rgba(255,255,255,.12)"
                : "rgba(21,23,22,.10)"
            } 1px, transparent 1px)`,
            backgroundSize: "25px 25px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(217,168,62,.14) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${
            isDark ? "from-[#070909]" : "from-[#F7F5F0]"
          } to-transparent`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#D9A83E]">
            <span className="h-px w-8 bg-[#D9A83E]/70" />
            Carrier Network
            <span className="h-px w-8 bg-[#D9A83E]/70" />
          </div>

          <h2
            className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${theme.primary}`}
          >
            One Network.{" "}
            <span className="bg-gradient-to-r from-[#F6D27A] via-[#E7BC58] to-[#D9A83E] bg-clip-text text-transparent">
              Global Reach.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base ${theme.secondary}`}
          >
            Connect your business to a global carrier ecosystem with
            intelligent routing, reliable voice infrastructure and scalable
            connectivity.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#D9A83E]" />
            <span
              className={`h-1 w-2 rounded-full ${
                isDark ? "bg-white/20" : "bg-black/20"
              }`}
            />
            <span
              className={`h-1 w-2 rounded-full ${
                isDark ? "bg-white/20" : "bg-black/20"
              }`}
            />
          </div>
        </header>

        {/* Main network panel */}
        <div
          className={`relative mt-14 overflow-hidden rounded-3xl border shadow-[0_0_80px_rgba(217,168,62,0.07)] backdrop-blur-xl transition-colors duration-500 hover:border-[#D9A83E]/35 ${theme.panel}`}
        >
          {/* Panel texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${
                isDark
                  ? "rgba(255,255,255,.055)"
                  : "rgba(21,23,22,.075)"
              } 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
            }}
          />

          {/* Status bar */}
          <div
            className={`relative flex flex-col justify-between gap-4 border-b px-5 py-5 sm:flex-row sm:items-center sm:px-7 ${theme.divider}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
              </span>

              <span
                className={`text-xs font-semibold tracking-[.16em] ${theme.primary}`}
              >
                GLOBAL NETWORK
              </span>

              <span className="rounded-full border border-[#D9A83E]/30 bg-[#D9A83E]/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[#D9A83E]">
                Operational
              </span>
            </div>

            <div
              className={`flex flex-wrap gap-x-5 gap-y-2 text-[10px] tracking-wide ${theme.muted}`}
            >
              <span>
                LATENCY{" "}
                <b className={`ml-1.5 ${theme.primary}`}>18ms</b>
              </span>
              <span>
                UPTIME{" "}
                <b className="ml-1.5 text-[#D9A83E]">99.99%</b>
              </span>
              <span>
                ROUTES{" "}
                <b className={`ml-1.5 ${theme.primary}`}>12.8K</b>
              </span>
            </div>
          </div>

          {/* Network visualization */}
          <div className="carrier-animated relative min-h-[790px] overflow-hidden sm:min-h-[680px] lg:min-h-[610px]">
            {/* Center glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[30%] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/[0.09] blur-[90px] sm:top-1/2"
            />

            {/* Orbit rings */}
            <div className="absolute left-1/2 top-[30%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/20 sm:top-1/2 sm:h-[250px] sm:w-[250px]" />

            <div className="absolute left-1/2 top-[30%] h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/10 sm:top-1/2 sm:h-[360px] sm:w-[360px]" />

            <div
              className={`absolute left-1/2 top-[30%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:top-1/2 sm:h-[480px] sm:w-[480px] ${
                isDark
                  ? "border-white/[0.06]"
                  : "border-black/[0.08]"
              }`}
            />

            {/* Animated dotted connections */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 1200 520"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="carrierGoldFlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#D9A83E"
                    stopOpacity="0.15"
                  />
                  <stop
                    offset="50%"
                    stopColor="#F6D27A"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="#D9A83E"
                    stopOpacity="0.15"
                  />
                </linearGradient>
              </defs>

              {nodes.map((node, i) => {
                const path = connectionPath(node, i);
                const duration = `${3 + (i % 5) * 0.55}s`;

                return (
                  <g key={node.city}>
                    {/* Base dotted line */}
                    <path
                      d={path}
                      stroke="#D9A83E"
                      strokeOpacity={isDark ? 0.35 : 0.45}
                      strokeWidth="1.5"
                      strokeDasharray="1 8"
                      strokeLinecap="round"
                    />

                    {/* Animated dotted flow */}
                    <path
                      d={path}
                      stroke="url(#carrierGoldFlow)"
                      strokeWidth="2"
                      strokeDasharray="1 10"
                      strokeLinecap="round"
                      style={{
                        animation: `carrierDottedFlow ${duration} linear infinite`,
                      }}
                    />

                    {/* Traveling signal particle */}
                    <circle
                      r={i % 3 === 0 ? 3 : 2}
                      fill="#F6D27A"
                    >
                      <animateMotion
                        dur={duration}
                        begin={`${(i % 7) * 0.3}s`}
                        repeatCount="indefinite"
                        path={path}
                      />

                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.15;0.8;1"
                        dur={duration}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Cross-network dotted links */}
              <path
                d="M85 105 Q600 10 1110 105"
                stroke={isDark ? "#FFFFFF" : "#151716"}
                strokeOpacity="0.15"
                strokeWidth="1.2"
                strokeDasharray="1 9"
                strokeLinecap="round"
              />

              <path
                d="M85 225 Q600 510 1010 445"
                stroke="#D9A83E"
                strokeOpacity="0.25"
                strokeWidth="1.2"
                strokeDasharray="1 9"
                strokeLinecap="round"
              />
            </svg>

            {/* Central Arventa hub */}
            <div className="absolute left-1/2 top-[30%] z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:top-1/2">
              <div
                className="absolute h-32 w-32 rounded-full border border-[#D9A83E]/20"
                style={{
                  animation:
                    "carrierPulse 3s ease-in-out infinite",
                }}
              />

              <div className="absolute h-24 w-24 rounded-full border border-[#D9A83E]/35 bg-[#D9A83E]/[0.06]" />

              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border shadow-[0_0_45px_rgba(217,168,62,0.25)] transition-transform duration-500 hover:scale-110 ${theme.hub}`}
              >
                <span className="text-xs font-bold text-[#D9A83E]">
                  Arventa
                </span>
              </div>
            </div>

            {/* Desktop country nodes */}
            <div className="absolute inset-0 hidden sm:block">
              {nodes.map((node, i) => (
                <div
                  key={node.city}
                  className="group/node absolute z-10"
                  style={{
                    left: `${(node.x / 1200) * 100}%`,
                    top: `${(node.y / 520) * 100}%`,
                    animation: `carrierFloat ${
                      3 + (i % 4) * 0.45
                    }s ease-in-out ${i * 0.08}s infinite`,
                  }}
                >
                  <div
                    className={`cursor-pointer flex items-center gap-2 rounded-lg border px-2.5 py-2 backdrop-blur-xl transition-all duration-300 hover:z-30 hover:-translate-y-1 hover:scale-105 hover:border-[#D9A83E]/70 hover:bg-[#D9A83E]/10 hover:shadow-[0_0_24px_rgba(217,168,62,0.20)] ${theme.node}`}
                  >
                    <span className="relative h-2 w-2 shrink-0 rounded-full bg-[#D9A83E] shadow-[0_0_10px_rgba(217,168,62,.65)]">
                      <span className="absolute inset-0 rounded-full bg-[#D9A83E]/60 group-hover/node:animate-ping" />
                    </span>

                    <div className="whitespace-nowrap">
                      <div
                        className={`text-[10px] font-semibold ${theme.primary}`}
                      >
                        {node.city}
                      </div>
                      <div className={`mt-0.5 text-[10px] ${theme.muted}`}>
                        {node.region}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile network summary */}
            <div
              className={`absolute left-1/2 top-[42%] z-10 -translate-x-1/2 rounded-full border px-3 py-2 text-center text-[9px] sm:hidden ${theme.node}`}
            >
              <span className="text-[#D9A83E]">
                20 GLOBAL LOCATIONS
              </span>
            </div>

            {/* Mobile country directory */}
            <div className="absolute inset-x-3 bottom-4 z-10 sm:hidden">
              <div
                className={`mb-3 flex items-center justify-between rounded-xl border px-3 py-3 ${theme.node}`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-wider ${theme.primary}`}
                >
                  GLOBAL NETWORK NODES
                </span>
                <span className="text-xs font-semibold text-[#D9A83E]">
                  20 Locations
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {nodes.map((node) => (
                  <div
                    key={node.city}
                    className={`flex min-w-0 items-center gap-2 rounded-lg border px-2.5 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-[#D9A83E]/60 hover:bg-[#D9A83E]/10 ${theme.node}`}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A83E]" />

                    <div className="min-w-0">
                      <div
                        className={`truncate text-[10px] font-medium ${theme.primary}`}
                      >
                        {node.city}
                      </div>
                      <div className={`mt-0.5 truncate text-[8px] ${theme.muted}`}>
                        {node.region}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active connections */}
            <div
              className={`absolute left-1/2 top-5 z-10 hidden -translate-x-1/2 rounded-full border px-4 py-2 backdrop-blur-md sm:block ${theme.node}`}
            >
              <div className="flex items-center gap-3 text-[9px]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#D9A83E]"
                  style={{
                    animation: "carrierSignal 2s ease-in-out infinite",
                  }}
                />
                <span className={theme.muted}>
                  ACTIVE CONNECTIONS
                </span>
                <span className={`font-semibold ${theme.primary}`}>
                  18,492
                </span>
              </div>
            </div>

            {/* Live traffic */}
            <div
              className={`absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border px-4 py-2 backdrop-blur-md sm:block ${theme.node}`}
            >
              <div className="flex items-center gap-3 text-[9px]">
                <span className={theme.muted}>LIVE TRAFFIC</span>
                <span className="font-semibold text-[#D9A83E]">
                  2.48 TB/s
                </span>
                <span className="text-green-500">● +12.4%</span>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div
            className={`relative grid grid-cols-1 gap-3 border-t p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4 ${theme.divider}`}
          >
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`carrier-service group/service relative isolate overflow-hidden rounded-2xl border p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D9A83E]/70 hover:shadow-[0_16px_42px_rgba(217,168,62,0.16)] sm:p-7 ${
                  isDark
                    ? "border-white/15 bg-[#111414]/95 hover:bg-[#171711]"
                    : "border-[#151716]/15 bg-white/95 hover:bg-[#FFFCF4]"
                }`}
                style={{
                  animation: `carrierEnter 650ms cubic-bezier(.2,.8,.2,1) ${
                    index * 100
                  }ms both`,
                }}
              >
                {/* Animated card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 scale-75 rounded-full bg-[#D9A83E]/0 blur-3xl transition-all duration-500 group-hover/service:scale-150 group-hover/service:bg-[#D9A83E]/25"
                />

                {/* Gold top accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#D9A83E] to-[#F6D27A] transition-transform duration-500 group-hover/service:scale-x-100" />

                {/* Icon */}
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9A83E]/40 bg-[#D9A83E]/10 text-2xl text-[#D9A83E] transition-all duration-500 ease-out group-hover/service:-translate-y-1 group-hover/service:rotate-[-6deg] group-hover/service:scale-110 group-hover/service:border-[#D9A83E]/80 group-hover/service:bg-[#D9A83E]/20 group-hover/service:shadow-[0_0_28px_rgba(217,168,62,0.22)]">
                  {service.icon}
                </div>

                <h3
                  className={`relative text-sm font-semibold transition-colors duration-300 group-hover/service:text-[#D9A83E] ${theme.primary}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`relative mt-2 min-h-[48px] text-xs leading-6 ${theme.secondary}`}
                >
                  {service.description}
                </p>

                <div className="relative mt-5 flex items-center justify-between border-t border-[#D9A83E]/20 pt-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#D9A83E]/90">
                    Network service
                  </span>

                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D9A83E]/20 text-sm text-[#D9A83E] transition-all duration-300 group-hover/service:translate-x-1 group-hover/service:border-[#D9A83E]/60 group-hover/service:bg-[#D9A83E]/10">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`group/cta relative mt-10 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-[#D9A83E]/30 p-6 transition-all duration-500 hover:border-[#D9A83E]/60 hover:shadow-[0_15px_40px_rgba(217,168,62,0.10)] sm:flex-row sm:items-center sm:p-8 ${
            isDark
              ? "bg-[#D9A83E]/[0.055]"
              : "bg-[#D9A83E]/[0.075]"
          }`}
        >
          <div className="pointer-events-none absolute -right-10 -top-24 h-48 w-48 rounded-full bg-[#D9A83E]/10 blur-[70px] transition-all duration-500 group-hover/cta:bg-[#D9A83E]/20" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#D9A83E]">
                Let&apos;s Connect
              </span>
            </div>

            <h3
              className={`mt-3 text-base font-semibold sm:text-lg ${theme.primary}`}
            >
              Need global carrier connectivity?
            </h3>

            <p
              className={`mt-2 max-w-xl text-xs leading-6 sm:text-sm ${theme.secondary}`}
            >
              Let&apos;s build the right routing and connectivity architecture
              for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="group/button relative inline-flex shrink-0 items-center gap-4 rounded-lg bg-gradient-to-r from-[#E7BC58] to-[#D9A83E] px-5 py-3.5 text-xs font-semibold text-[#17130A] shadow-[0_5px_20px_rgba(217,168,62,0.15)] transition-all duration-300 hover:-translate-y-1 hover:from-[#F6D27A] hover:to-[#E7BC58] hover:shadow-[0_8px_28px_rgba(217,168,62,0.25)]"
          >
            Talk to a Network Expert
            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarrierNetwork;
