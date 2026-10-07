const Dark = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050606] pt-20">
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 opacity-30" />
        {/* Gold atmosphere */}
        <div className="absolute left-[55%] top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[150px]" />
        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#D9A83E]/5 blur-[130px]" />
      </div>
      {/* =======================================================
       HERO CONTENT
  ======================================================== */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* ===================================================
           LEFT CONTENT
      ==================================================== */}
          <div className="relative z-20 max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">
              <span className="h-px w-10 bg-[#D9A83E]" />
              Global Connectivity. Intelligent Solutions.
            </div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
              Connecting
              <span className="block bg-gradient-to-r from-[#F6D27A] via-[#D9A83E] to-[#A87920] bg-clip-text text-transparent">
                the World.
              </span>
              <span className="block"> Intelligently. </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/93 sm:text-lg">
              Arventa Networks connects businesses, carriers and technologies
              across the globe through intelligent telecom, mobile, IoT and AI
              infrastructure.
            </p>
            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]"
              >
                Explore Our Network
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-md border border-white/15 px-6 py-4 text-sm font-medium text-white/95 transition hover:border-[#D9A83E] hover:text-[#D9A83E]"
              >
                Talk to an Expert
              </a>
            </div>
            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-semibold text-white">180+</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/82">
                  Countries
                </div>
              </div>
              <div className="border-l border-white/10 pl-5">
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/82">
                  Network Uptime
                </div>
              </div>
              <div className="border-l border-white/10 pl-5">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/82">
                  Operations
                </div>
              </div>
            </div>
          </div>
          {/* ===================================================
           GLOBAL NETWORK VISUAL
      ==================================================== */}
          <div className="relative h-[560px] sm:h-[650px] lg:h-[700px]">
            {/* Ambient globe glow */}
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[90px]" />
            {/* =================================================
             GLOBAL ORBIT
        ================================================== */}
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/10 sm:h-[560px] sm:w-[560px]" />
            <div className="global-orbit absolute left-1/2 top-1/2 h-[500px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#D9A83E]/20" />
            <div className="global-orbit-2 absolute left-1/2 top-1/2 h-[500px] w-[250px] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-[50%] border border-[#D9A83E]/10" />
            {/* =================================================
             NETWORK SVG
        ================================================== */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 800 700"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Globe silhouette */}
              <circle
                cx={400}
                cy={350}
                r={205}
                fill="rgba(7,9,9,.85)"
                stroke="#D9A83E"
                strokeOpacity=".18"
              />
              <circle
                cx={400}
                cy={350}
                r={190}
                stroke="white"
                strokeOpacity=".05"
              />
              {/* Latitude */}
              <ellipse
                cx={400}
                cy={350}
                rx={190}
                ry={65}
                stroke="#D9A83E"
                strokeOpacity=".12"
              />
              <ellipse
                cx={400}
                cy={350}
                rx={190}
                ry={125}
                stroke="#D9A83E"
                strokeOpacity=".08"
              />
              <ellipse
                cx={400}
                cy={350}
                rx={100}
                ry={190}
                stroke="#D9A83E"
                strokeOpacity=".09"
              />
              <ellipse
                cx={400}
                cy={350}
                rx={145}
                ry={190}
                stroke="#D9A83E"
                strokeOpacity=".06"
              />
              {/* Longitude */}
              <path
                d="M400 160 C315 225 315 475 400 540"
                stroke="#D9A83E"
                strokeOpacity=".08"
              />
              <path
                d="M400 160 C485 225 485 475 400 540"
                stroke="#D9A83E"
                strokeOpacity=".08"
              />
              {/* ===============================================
               CONNECTION PATHS
          ================================================ */}
              {/* Frankfurt → Hub */}
              <path
                id="route-frankfurt"
                d="M315 260 Q350 300 400 350"
                stroke="#D9A83E"
                strokeOpacity=".35"
                strokeWidth="1.5"
              />
              {/* New York → Hub */}
              <path
                id="route-newyork"
                d="M240 330 Q320 320 400 350"
                stroke="#D9A83E"
                strokeOpacity=".25"
                strokeWidth="1.5"
              />
              {/* Dubai → Hub */}
              <path
                id="route-dubai"
                d="M510 350 Q460 350 400 350"
                stroke="#D9A83E"
                strokeOpacity=".35"
                strokeWidth="1.5"
              />
              {/* Singapore → Hub */}
              <path
                id="route-singapore"
                d="M530 445 Q465 410 400 350"
                stroke="#D9A83E"
                strokeOpacity=".25"
                strokeWidth="1.5"
              />
              {/* London → Hub */}
              <path
                d="M350 250 Q370 300 400 350"
                stroke="#D9A83E"
                strokeOpacity=".18"
              />
              {/* Tokyo → Hub */}
              <path
                d="M545 285 Q475 300 400 350"
                stroke="#D9A83E"
                strokeOpacity=".18"
              />
              {/* ===============================================
               ANIMATED DATA PACKETS
          ================================================ */}
              <circle r={4} fill="#F5CC70">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M315 260 Q350 300 400 350"
                />
              </circle>
              <circle r={3} fill="#D9A83E">
                <animateMotion
                  dur="3.4s"
                  begin=".8s"
                  repeatCount="indefinite"
                  path="M240 330 Q320 320 400 350"
                />
              </circle>
              <circle r={4} fill="#F5CC70">
                <animateMotion
                  dur="3s"
                  begin="1.4s"
                  repeatCount="indefinite"
                  path="M510 350 Q460 350 400 350"
                />
              </circle>
              <circle r={3} fill="#D9A83E">
                <animateMotion
                  dur="3.6s"
                  begin=".3s"
                  repeatCount="indefinite"
                  path="M530 445 Q465 410 400 350"
                />
              </circle>
              {/* Reverse traffic */}
              <circle r="2.5" fill="#FFFFFF" opacity=".7">
                <animateMotion
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M400 350 Q460 410 530 445"
                />
              </circle>
            </svg>
            {/* =================================================
             CENTRAL ARVENTA HUB
        ================================================== */}
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              {/* pulse */}
              <div
                className="absolute h-40 w-40 animate-ping rounded-full border border-[#D9A83E]/20"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute h-32 w-32 rounded-full border border-[#D9A83E]/20 bg-[#D9A83E]/5" />
              {/* logo hub */}
              <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]">
                <div className="text-3xl font-bold text-[#D9A83E]">A</div>
                <div className="mt-0.5 text-[12px] font-semibold tracking-[.25em] text-white/97">
                  ARVENTA
                </div>
                <div className="text-[8px] tracking-[.3em] text-white">
                  NETWORKS
                </div>
                {/* online indicator */}
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#D9A83E] shadow-[0_0_20px_#D9A83E]" />
              </div>
            </div>
            {/* =================================================
             REGIONAL NODES
        ================================================== */}
            {/* Frankfurt */}
            <div className="absolute left-[20%] top-[31%] hidden sm:block">
              <div className="hero-network-node">
                <span className="hero-node-dot" />
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Frankfurt
                  </div>
                  <div className="mt-0.5 text-[8px] text-white/97">Europe</div>
                </div>
              </div>
            </div>
            {/* New York */}
            <div className="absolute left-[8%] top-[47%] hidden sm:block">
              <div className="hero-network-node">
                <span className="hero-node-dot" />
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    New York
                  </div>
                  <div className="mt-0.5 text-[8px] text-white/97">
                    North America
                  </div>
                </div>
              </div>
            </div>
            {/* Dubai */}
            <div className="absolute right-[13%] top-[48%] hidden sm:block">
              <div className="hero-network-node">
                <span className="hero-node-dot" />
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Dubai
                  </div>
                  <div className="mt-0.5 text-[8px] text-white/97">
                    Middle East
                  </div>
                </div>
              </div>
            </div>
            {/* Singapore */}
            <div className="absolute right-[16%] bottom-[25%] hidden sm:block">
              <div className="hero-network-node">
                <span className="hero-node-dot" />
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Singapore
                  </div>
                  <div className="mt-0.5 text-[8px] text-white/97">
                    Asia Pacific
                  </div>
                </div>
              </div>
            </div>
            {/* =================================================
             LIVE NETWORK PANEL
        ================================================== */}
            <div className="absolute bottom-3 left-1/2 w-[290px] -translate-x-1/2 rounded-xl border border-white/10 bg-[#080a0a]/80 p-4 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-0 sm:translate-x-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D9A83E] shadow-[0_0_12px_#D9A83E]" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-white/88">
                    Global Network
                  </span>
                </div>
                <span className="text-[8px] text-[#D9A83E]"> LIVE </span>
              </div>
              <div className="mt-4 grid grid-cols-3 divide-x divide-white/10">
                <div className="px-2 first:pl-0">
                  <div className="text-sm font-semibold text-white">18.4K</div>
                  <div className="mt-1 text-[8px] text-white/95">
                    CONNECTIONS
                  </div>
                </div>
                <div className="px-3">
                  <div className="text-sm font-semibold text-white">18ms</div>
                  <div className="mt-1 text-[8px] text-white/95">LATENCY</div>
                </div>
                <div className="px-3">
                  <div className="text-sm font-semibold text-[#D9A83E]">
                    99.9%
                  </div>
                  <div className="mt-1 text-[8px] text-white/95">UPTIME</div>
                </div>
              </div>
              {/* Traffic bar */}
              <div className="mt-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-[8px] text-white/95">
                    {" "}
                    LIVE TRAFFIC{" "}
                  </span>
                  <span className="text-[8px] text-white/88"> 2.48 TB/s </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/5">
                  <div className="network-traffic-bar h-full rounded-full bg-gradient-to-r from-[#8E681F] via-[#D9A83E] to-[#F5CC70]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =======================================================
       BOTTOM SCROLL INDICATOR
  ======================================================== */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[8px] uppercase tracking-[.3em] text-white/93 sm:flex">
        <span>Explore Arventa</span>
        <span className="scroll-line" />
      </div>
      {/* =======================================================
       COMPONENT CSS
  ======================================================== */}
      <style dangerouslySetInnerHTML={{ __html: "" }} />
    </section>
  );
};
export default Dark