import '@/app/styles/Light/Home-hero.css'

const Light = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAFAF8] pt-20 text-[#151515]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-60" />
        {/* Soft gold atmosphere */}
        <div
          className="absolute left-[55%] top-[35%] h-[600px] w-[600px]
             -translate-x-1/2 -translate-y-1/2 rounded-full
             bg-[#D9A83E]/10 blur-[150px]"
        />
        <div
          className="absolute right-[-200px] top-[20%] h-[500px] w-[500px]
             rounded-full bg-[#D9A83E]/8 blur-[130px]"
        />
        <div
          className="absolute left-[-200px] bottom-[-200px] h-[450px] w-[450px]
             rounded-full bg-[#D9A83E]/5 blur-[120px]"
        />
      </div>
      {/* Hero */}
      <div
        className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl
           items-center px-6 py-16 lg:px-8"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <div
              className="mb-6 flex items-center gap-3 text-xs font-semibold
                 uppercase tracking-[.25em] text-[#A87920]"
            >
              <span className="h-px w-10 bg-[#D9A83E]" />
              Global Connectivity. Intelligent Solutions.
            </div>
            {/* Heading */}
            <h1
              className="text-5xl font-semibold leading-[1.03] tracking-tight
                 text-[#171717] sm:text-6xl lg:text-7xl xl:text-[78px]"
            >
              Connecting
              <span
                className="block bg-gradient-to-r from-[#A87920] via-[#D9A83E] to-[#8E681F]
                   bg-clip-text text-transparent"
              >
                the World.
              </span>
              <span className="block text-[#171717]">Intelligently.</span>
            </h1>
            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5E5E5E] sm:text-lg">
              Arventa Networks connects businesses, carriers and technologies
              across the globe through intelligent telecom, mobile, IoT and AI
              infrastructure.
            </p>
            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-5 rounded-md
                   bg-[#D9A83E] px-6 py-4 text-sm font-semibold
                   text-[#171717] shadow-[0_10px_30px_rgba(217,168,62,.18)]
                   transition hover:bg-[#E7BD5B] hover:shadow-[0_12px_35px_rgba(217,168,62,.25)]"
              >
                Explore Our Network
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-md
                   border border-[#D7D7D2] bg-white/70 px-6 py-4
                   text-sm font-medium text-[#303030] backdrop-blur-sm
                   transition hover:border-[#D9A83E] hover:text-[#A87920]"
              >
                Talk to an Expert
              </a>
            </div>
            {/* Stats */}
            <div
              className="mt-12 grid max-w-xl grid-cols-3
                 border-t border-[#DCDCD6] pt-7"
            >
              <div>
                <div className="text-2xl font-semibold text-[#171717]">
                  180+
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-[#777]">
                  Countries
                </div>
              </div>
              <div className="border-l border-[#DCDCD6] pl-5">
                <div className="text-2xl font-semibold text-[#171717]">
                  99.9%
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-[#777]">
                  Network Uptime
                </div>
              </div>
              <div className="border-l border-[#DCDCD6] pl-5">
                <div className="text-2xl font-semibold text-[#171717]">
                  24/7
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-[#777]">
                  Operations
                </div>
              </div>
            </div>
          </div>
          {/* GLOBAL NETWORK VISUAL */}
          <div className="relative h-[560px] sm:h-[650px] lg:h-[700px]">
            {/* Ambient glow */}
            <div
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px]
                 -translate-x-1/2 -translate-y-1/2 rounded-full
                 bg-[#D9A83E]/10 blur-[90px]"
            />
            {/* Orbit */}
            <div
              className="absolute left-1/2 top-1/2 h-[470px] w-[470px]
                 -translate-x-1/2 -translate-y-1/2 rounded-full
                 border border-[#D9A83E]/20 sm:h-[560px] sm:w-[560px]"
            />
            <div
              className="global-orbit absolute left-1/2 top-1/2 h-[500px] w-[250px]
                 -translate-x-1/2 -translate-y-1/2 rounded-[50%]
                 border border-[#D9A83E]/20"
            />
            <div
              className="global-orbit-2 absolute left-1/2 top-1/2 h-[500px] w-[250px]
                 -translate-x-1/2 -translate-y-1/2 rotate-90
                 rounded-[50%] border border-[#D9A83E]/15"
            />
            {/* NETWORK SVG */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 800 700"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Globe */}
              <circle
                cx={400}
                cy={350}
                r={205}
                fill="rgba(255,255,255,.72)"
                stroke="#D9A83E"
                strokeOpacity=".28"
              />
              <circle
                cx={400}
                cy={350}
                r={190}
                stroke="#1A1A1A"
                strokeOpacity=".07"
              />
              {/* Latitude */}
              <ellipse
                cx={400}
                cy={350}
                rx={190}
                ry={65}
                stroke="#D9A83E"
                strokeOpacity=".22"
              />
              <ellipse
                cx={400}
                cy={350}
                rx={190}
                ry={125}
                stroke="#D9A83E"
                strokeOpacity=".14"
              />
              {/* Longitude */}
              <ellipse
                cx={400}
                cy={350}
                rx={100}
                ry={190}
                stroke="#D9A83E"
                strokeOpacity=".16"
              />
              <ellipse
                cx={400}
                cy={350}
                rx={145}
                ry={190}
                stroke="#D9A83E"
                strokeOpacity=".11"
              />
              <path
                d="M400 160 C315 225 315 475 400 540"
                stroke="#D9A83E"
                strokeOpacity=".12"
              />
              <path
                d="M400 160 C485 225 485 475 400 540"
                stroke="#D9A83E"
                strokeOpacity=".12"
              />
              {/* Connection paths */}
              <path
                d="M315 260 Q350 300 400 350"
                stroke="#B8892D"
                strokeOpacity=".55"
                strokeWidth="1.5"
              />
              <path
                d="M240 330 Q320 320 400 350"
                stroke="#B8892D"
                strokeOpacity=".4"
                strokeWidth="1.5"
              />
              <path
                d="M510 350 Q460 350 400 350"
                stroke="#B8892D"
                strokeOpacity=".55"
                strokeWidth="1.5"
              />
              <path
                d="M530 445 Q465 410 400 350"
                stroke="#B8892D"
                strokeOpacity=".4"
                strokeWidth="1.5"
              />
              <path
                d="M350 250 Q370 300 400 350"
                stroke="#B8892D"
                strokeOpacity=".25"
              />
              <path
                d="M545 285 Q475 300 400 350"
                stroke="#B8892D"
                strokeOpacity=".25"
              />
              {/* Animated data */}
              <circle r={4} fill="#D9A83E">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M315 260 Q350 300 400 350"
                />
              </circle>
              <circle r={3} fill="#A87920">
                <animateMotion
                  dur="3.4s"
                  begin=".8s"
                  repeatCount="indefinite"
                  path="M240 330 Q320 320 400 350"
                />
              </circle>
              <circle r={4} fill="#D9A83E">
                <animateMotion
                  dur="3s"
                  begin="1.4s"
                  repeatCount="indefinite"
                  path="M510 350 Q460 350 400 350"
                />
              </circle>
              <circle r={3} fill="#A87920">
                <animateMotion
                  dur="3.6s"
                  begin=".3s"
                  repeatCount="indefinite"
                  path="M530 445 Q465 410 400 350"
                />
              </circle>
              <circle r="2.5" fill="#6A6A6A" opacity=".8">
                <animateMotion
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M400 350 Q460 410 530 445"
                />
              </circle>
            </svg>
            {/* CENTRAL HUB */}
            <div
              className="absolute left-1/2 top-1/2 flex h-40 w-40
                 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              {/* Pulse */}
              <div
                className="absolute h-40 w-40 animate-ping rounded-full
                   border border-[#D9A83E]/20"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute h-32 w-32 rounded-full
                   border border-[#D9A83E]/25 bg-[#D9A83E]/5"
              />
              {/* Hub */}
              <div
                className="relative flex h-24 w-24 flex-col items-center
                   justify-center rounded-2xl border border-[#D9A83E]/60
                   bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur"
              >
                <div className="text-3xl font-bold text-[#A87920]">A</div>
                <div
                  className="mt-0.5 text-[12px] font-semibold
                     tracking-[.25em] text-[#222]"
                >
                  ARVENTA
                </div>
                <div className="text-[8px] tracking-[.3em] text-[#777]">
                  NETWORKS
                </div>
                <span
                  className="absolute -right-1 -top-1 h-3 w-3 rounded-full
                     bg-[#D9A83E] shadow-[0_0_15px_rgba(217,168,62,.6)]"
                />
              </div>
            </div>
            {/* REGIONAL NODES */}
            <div className="absolute left-[20%] top-[31%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className="text-[11px] font-semibold text-[#292929]">
                    Frankfurt
                  </div>
                  <div className="mt-0.5 text-[8px] text-[#888]">Europe</div>
                </div>
              </div>
            </div>
            <div className="absolute left-[8%] top-[47%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className="text-[11px] font-semibold text-[#292929]">
                    New York
                  </div>
                  <div className="mt-0.5 text-[8px] text-[#888]">
                    North America
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[13%] top-[48%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className="text-[11px] font-semibold text-[#292929]">
                    Dubai
                  </div>
                  <div className="mt-0.5 text-[8px] text-[#888]">
                    Middle East
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[16%] bottom-[25%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className="text-[11px] font-semibold text-[#292929]">
                    Singapore
                  </div>
                  <div className="mt-0.5 text-[8px] text-[#888]">
                    Asia Pacific
                  </div>
                </div>
              </div>
            </div>
            {/* LIVE NETWORK PANEL */}
            <div
              className="absolute bottom-3 left-1/2 w-[290px]
                 -translate-x-1/2 rounded-xl border border-[#E2E2DC]
                 bg-white/85 p-4 shadow-[0_15px_50px_rgba(0,0,0,.08)]
                 backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-0
                 sm:translate-x-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-[#D9A83E]
                       shadow-[0_0_10px_rgba(217,168,62,.55)]"
                  />
                  <span
                    className="text-[9px] font-semibold uppercase
                       tracking-wider text-[#555]"
                  >
                    Global Network
                  </span>
                </div>
                <span className="text-[8px] text-[#A87920]">LIVE</span>
              </div>
              <div
                className="mt-4 grid grid-cols-3
                   divide-x divide-[#E5E5E0]"
              >
                <div className="px-2 first:pl-0">
                  <div className="text-sm font-semibold text-[#222]">18.4K</div>
                  <div className="mt-1 text-[8px] text-[#888]">CONNECTIONS</div>
                </div>
                <div className="px-3">
                  <div className="text-sm font-semibold text-[#222]">18ms</div>
                  <div className="mt-1 text-[8px] text-[#888]">LATENCY</div>
                </div>
                <div className="px-3">
                  <div className="text-sm font-semibold text-[#A87920]">
                    99.9%
                  </div>
                  <div className="mt-1 text-[8px] text-[#888]">UPTIME</div>
                </div>
              </div>
              {/* Traffic */}
              <div className="mt-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-[8px] text-[#888]">LIVE TRAFFIC</span>
                  <span className="text-[8px] text-[#777]">2.48 TB/s</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-[#ECECE7]">
                  <div
                    className="network-traffic-bar h-full rounded-full
                       bg-gradient-to-r from-[#A87920] via-[#D9A83E] to-[#F5CC70]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2
           flex-col items-center gap-3 text-[8px] uppercase
           tracking-[.3em] text-[#777] sm:flex"
      >
        <span>Explore Arventa</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Light;
