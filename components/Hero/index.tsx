
type HeroProps = {
  mode?: 'dark' | 'light';
};

const Hero = ({ mode = 'dark' }: HeroProps) => {
  const isLight = mode === 'light';

  const theme = {
    section: isLight ? 'bg-[#FAFAF8] text-[#151515]' : 'bg-[#050606] text-white',

    atmosphere: isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/10',

    eyebrow: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    eyebrowLine: 'bg-[#D9A83E]',

    heading: isLight ? 'text-[#171717]' : 'text-white',
    gradient: isLight ? 'from-[#A87920] via-[#D9A83E] to-[#8E681F]' : 'from-[#F6D27A] via-[#D9A83E] to-[#A87920]',

    body: isLight ? 'text-[#5E5E5E]' : 'text-white/93',

    primaryButton: isLight ? 'text-[#171717] shadow-[0_10px_30px_rgba(217,168,62,.18)] hover:bg-[#E7BD5B] hover:shadow-[0_12px_35px_rgba(217,168,62,.25)]' : 'text-black hover:bg-[#F5CC70]',

    secondaryButton: isLight ? 'border-[#D7D7D2] bg-white/70 text-[#303030] hover:border-[#D9A83E] hover:text-[#A87920]' : 'border-white/15 text-white/95 hover:border-[#D9A83E] hover:text-[#D9A83E]',

    statText: isLight ? 'text-[#171717]' : 'text-white',
    statMuted: isLight ? 'text-[#777]' : 'text-white/82',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',

    globeFill: isLight ? 'rgba(255,255,255,.72)' : 'rgba(7,9,9,.85)',
    globeStrokeOpacity: isLight ? '.28' : '.18',
    globeInnerStroke: isLight ? '#1A1A1A' : 'white',
    globeInnerOpacity: isLight ? '.07' : '.05',
    globeLineOpacity: isLight ? '.22' : '.12',
    globeLineOpacity2: isLight ? '.14' : '.08',
    globeLongitudeOpacity: isLight ? '.16' : '.09',
    globeLongitudeOpacity2: isLight ? '.11' : '.06',

    route: isLight ? '#B8892D' : '#D9A83E',
    routeStrongOpacity: isLight ? '.55' : '.35',
    routeOpacity: isLight ? '.4' : '.25',
    routeSoftOpacity: isLight ? '.25' : '.18',

    hubRing: isLight ? 'border-[#D9A83E]/25' : 'border-[#D9A83E]/20',
    hub: isLight ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur' : 'border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]',
    hubLetter: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    hubName: isLight ? 'text-[#222]' : 'text-white/97',
    hubSub: isLight ? 'text-[#777]' : 'text-white',

    node: isLight ? 'text-[#292929]' : 'text-white',
    nodeMuted: isLight ? 'text-[#888]' : 'text-white/97',

    panel: isLight ? 'border-[#E2E2DC] bg-white/85 shadow-[0_15px_50px_rgba(0,0,0,.08)]' : 'border-white/10 bg-[#080a0a]/80 shadow-2xl',
    panelLabel: isLight ? 'text-[#555]' : 'text-white/88',
    panelValue: isLight ? 'text-[#222]' : 'text-white',
    panelMuted: isLight ? 'text-[#888]' : 'text-white/95',
    panelDivider: isLight ? 'divide-[#E5E5E0]' : 'divide-white/10',
    trafficBg: isLight ? 'bg-[#ECECE7]' : 'bg-white/5',
    trafficText: isLight ? 'text-[#777]' : 'text-white/88',
    scrollText: isLight ? 'text-[#777]' : 'text-white/93',
  };

  return (
    <section className={`relative min-h-screen overflow-hidden pt-20 ${theme.section}`}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" />

        <div
          className={`absolute left-[55%] top-[35%] h-[600px] w-[600px]
            -translate-x-1/2 -translate-y-1/2 rounded-full
            ${theme.atmosphere} blur-[150px]`}
        />

        <div
          className={`absolute right-[-200px] top-[20%] h-[500px] w-[500px]
            rounded-full ${isLight ? 'bg-[#D9A83E]/8' : 'bg-[#D9A83E]/5'}
            blur-[130px]`}
        />

        {isLight && (
          <div
            className="absolute bottom-[-200px] left-[-200px] h-[450px] w-[450px]
              rounded-full bg-[#D9A83E]/5 blur-[120px]"
          />
        )}
      </div>

      {/* Hero content */}
      <div
        className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl
          items-center px-6 py-16 lg:px-8"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-2xl">
            <div
              className={`mb-6 flex items-center gap-3 text-xs font-semibold
                uppercase tracking-[.25em] ${theme.eyebrow}`}
            >
              <span className={`h-px w-10 ${theme.eyebrowLine}`} />
              Global Connectivity. Intelligent Solutions.
            </div>

            <h1
              className={`text-5xl font-semibold leading-[1.03] tracking-tight
                ${theme.heading} sm:text-6xl lg:text-7xl xl:text-[78px]`}
            >
              Connecting
              <span
                className={`block bg-gradient-to-r ${theme.gradient}
                  bg-clip-text text-transparent`}
              >
                the World.
              </span>
              <span className="block">Intelligently.</span>
            </h1>

            <p className={`mt-7 max-w-xl text-base leading-8 ${theme.body} sm:text-lg`}>Arventa Networks connects businesses, carriers and technologies across the globe through intelligent telecom, mobile, IoT and AI infrastructure.</p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className={`group inline-flex items-center gap-5 rounded-md
                  bg-[#D9A83E] px-6 py-4 text-sm font-semibold transition
                  ${theme.primaryButton}`}
              >
                Explore Our Network
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-3 rounded-md border px-6 py-4
                  text-sm font-medium backdrop-blur-sm transition ${theme.secondaryButton}`}
              >
                Talk to an Expert
              </a>
            </div>

            {/* Stats */}
            <div className={`mt-12 grid max-w-xl grid-cols-3 border-t pt-7 ${theme.statBorder}`}>
              <div>
                <div className={`text-2xl font-semibold ${theme.statText}`}>180+</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Countries</div>
              </div>

              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div className={`text-2xl font-semibold ${theme.statText}`}>99.9%</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Network Uptime</div>
              </div>

              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div className={`text-2xl font-semibold ${theme.statText}`}>24/7</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Operations</div>
              </div>
            </div>
          </div>

          {/* GLOBAL NETWORK VISUAL */}
          <div className="relative h-[560px] sm:h-[650px] lg:h-[700px]">
            {/* Ambient globe glow */}
            <div
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px]
                -translate-x-1/2 -translate-y-1/2 rounded-full
                bg-[#D9A83E]/10 blur-[90px]"
            />

            {/* GLOBAL ORBIT — animation class intentionally preserved */}
            <div
              className="absolute left-1/2 top-1/2 h-[470px] w-[470px]
                -translate-x-1/2 -translate-y-1/2 rounded-full
                border border-[#D9A83E]/10 sm:h-[560px] sm:w-[560px]"
            />

            <div
              className={`global-orbit absolute left-1/2 top-1/2 h-[500px] w-[250px]
                -translate-x-1/2 -translate-y-1/2 rounded-[50%]
                border border-[#D9A83E]/20`}
            />

            <div
              className="global-orbit-2 absolute left-1/2 top-1/2 h-[500px] w-[250px]
                -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-[50%]
                border border-[#D9A83E]/10"
            />

            {/* NETWORK SVG */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 700" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Globe */}
              <circle cx={400} cy={350} r={205} fill={theme.globeFill} stroke="#D9A83E" strokeOpacity={theme.globeStrokeOpacity} />

              <circle cx={400} cy={350} r={190} stroke={theme.globeInnerStroke} strokeOpacity={theme.globeInnerOpacity} />

              {/* Latitude */}
              <ellipse cx={400} cy={350} rx={190} ry={65} stroke="#D9A83E" strokeOpacity={theme.globeLineOpacity} />
              <ellipse cx={400} cy={350} rx={190} ry={125} stroke="#D9A83E" strokeOpacity={theme.globeLineOpacity2} />

              {/* Longitude */}
              <ellipse cx={400} cy={350} rx={100} ry={190} stroke="#D9A83E" strokeOpacity={theme.globeLongitudeOpacity} />
              <ellipse cx={400} cy={350} rx={145} ry={190} stroke="#D9A83E" strokeOpacity={theme.globeLongitudeOpacity2} />

              <path d="M400 160 C315 225 315 475 400 540" stroke="#D9A83E" strokeOpacity={theme.globeLongitudeOpacity2} />
              <path d="M400 160 C485 225 485 475 400 540" stroke="#D9A83E" strokeOpacity={theme.globeLongitudeOpacity2} />

              {/* CONNECTION PATHS */}
              <path id="route-frankfurt" d="M315 260 Q350 300 400 350" stroke={theme.route} strokeOpacity={theme.routeStrongOpacity} strokeWidth="1.5" />
              <path id="route-newyork" d="M240 330 Q320 320 400 350" stroke={theme.route} strokeOpacity={theme.routeOpacity} strokeWidth="1.5" />
              <path id="route-dubai" d="M510 350 Q460 350 400 350" stroke={theme.route} strokeOpacity={theme.routeStrongOpacity} strokeWidth="1.5" />
              <path id="route-singapore" d="M530 445 Q465 410 400 350" stroke={theme.route} strokeOpacity={theme.routeOpacity} strokeWidth="1.5" />
              <path d="M350 250 Q370 300 400 350" stroke={theme.route} strokeOpacity={theme.routeSoftOpacity} />
              <path d="M545 285 Q475 300 400 350" stroke={theme.route} strokeOpacity={theme.routeSoftOpacity} />

              {/* ANIMATED DATA PACKETS — preserved exactly */}
              <circle r={4} fill="#F5CC70">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M315 260 Q350 300 400 350" />
              </circle>

              <circle r={3} fill={isLight ? '#A87920' : '#D9A83E'}>
                <animateMotion dur="3.4s" begin=".8s" repeatCount="indefinite" path="M240 330 Q320 320 400 350" />
              </circle>

              <circle r={4} fill="#F5CC70">
                <animateMotion dur="3s" begin="1.4s" repeatCount="indefinite" path="M510 350 Q460 350 400 350" />
              </circle>

              <circle r={3} fill={isLight ? '#A87920' : '#D9A83E'}>
                <animateMotion dur="3.6s" begin=".3s" repeatCount="indefinite" path="M530 445 Q465 410 400 350" />
              </circle>

              {/* Reverse traffic */}
              <circle r="2.5" fill={isLight ? '#6A6A6A' : '#FFFFFF'} opacity={isLight ? '.8' : '.7'}>
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M400 350 Q460 410 530 445" />
              </circle>
            </svg>

            {/* CENTRAL ARVENTA HUB */}
            <div
              className="absolute left-1/2 top-1/2 flex h-40 w-40
                -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              {/* Pulse animation preserved */}
              <div
                className="absolute h-40 w-40 animate-ping rounded-full
                  border border-[#D9A83E]/20"
                style={{ animationDuration: '3s' }}
              />

              <div
                className={`absolute h-32 w-32 rounded-full border ${theme.hubRing}
                  bg-[#D9A83E]/5`}
              />

              {/* Hub */}
              <div
                className={`relative flex h-24 w-24 flex-col items-center
                  justify-center rounded-2xl border ${theme.hub}`}
              >
                <div className={`text-3xl font-bold ${theme.hubLetter}`}>A</div>
                <div className={`mt-0.5 text-[12px] font-semibold tracking-[.25em] ${theme.hubName}`}>ARVENTA</div>
                <div className={`text-[8px] tracking-[.3em] ${theme.hubSub}`}>NETWORKS</div>

                <span
                  className="absolute -right-1 -top-1 h-3 w-3 rounded-full
                    bg-[#D9A83E] shadow-[0_0_20px_#D9A83E]"
                />
              </div>
            </div>

            {/* REGIONAL NODES — animation CSS hooks preserved */}
            <div className="absolute left-[20%] top-[31%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className={`hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]`} />
                <div>
                  <div className={`text-[11px] font-semibold ${theme.node}`}>Frankfurt</div>
                  <div className={`mt-0.5 text-[10px] ${theme.nodeMuted}`}>Europe</div>
                </div>
              </div>
            </div>

            <div className="absolute left-[8%] top-[47%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className={`text-[11px] font-semibold ${theme.node}`}>New York</div>
                  <div className={`mt-0.5 text-[10px] ${theme.nodeMuted}`}>North America</div>
                </div>
              </div>
            </div>

            <div className="absolute right-[13%] top-[48%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className={`text-[11px] font-semibold ${theme.node}`}>Dubai</div>
                  <div className={`mt-0.5 text-[10px] ${theme.nodeMuted}`}>Middle East</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[25%] right-[16%] hidden sm:block">
              <div className="hero-network-node flex items-center gap-2">
                <span className="hero-node-dot h-2 w-2 rounded-full bg-[#D9A83E]" />
                <div>
                  <div className={`text-[11px] font-semibold ${theme.node}`}>Singapore</div>
                  <div className={`mt-0.5 text-[10px] ${theme.nodeMuted}`}>Asia Pacific</div>
                </div>
              </div>
            </div>

            {/* LIVE NETWORK PANEL */}
            <div
              className={`absolute bottom-3 left-1/2 w-[290px]
                -translate-x-1/2 rounded-xl border p-4 backdrop-blur-xl
                sm:bottom-6 sm:left-auto sm:right-0 sm:translate-x-0 ${theme.panel}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full bg-[#D9A83E] ${isLight ? 'shadow-[0_0_10px_rgba(217,168,62,.55)]' : 'shadow-[0_0_12px_#D9A83E]'}`} />
                  <span className={`text-[9px] font-semibold uppercase tracking-wider ${theme.panelLabel}`}>Global Network</span>
                </div>
                <span className="text-[8px] text-[#A87920]">LIVE</span>
              </div>

              <div className={`mt-4 grid grid-cols-3 divide-x ${theme.panelDivider}`}>
                <div className="px-2 first:pl-0">
                  <div className={`text-sm font-semibold ${theme.panelValue}`}>18.4K</div>
                  <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>CONNECTIONS</div>
                </div>

                <div className="px-3">
                  <div className={`text-sm font-semibold ${theme.panelValue}`}>18ms</div>
                  <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>LATENCY</div>
                </div>

                <div className="px-3">
                  <div className="text-sm font-semibold text-[#D9A83E]">99.9%</div>
                  <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>UPTIME</div>
                </div>
              </div>

              {/* Traffic bar — animation class preserved */}
              <div className="mt-4">
                <div className="mb-1 flex justify-between">
                  <span className={`text-[8px] ${theme.panelMuted}`}>LIVE TRAFFIC</span>
                  <span className={`text-[8px] ${theme.trafficText}`}>2.48 TB/s</span>
                </div>

                <div className={`h-1 overflow-hidden rounded-full ${theme.trafficBg}`}>
                  <div
                    className={`network-traffic-bar h-full rounded-full
                      bg-gradient-to-r from-[#A87920] via-[#D9A83E] to-[#F5CC70]`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — animation class preserved */}
      <div
        className={`absolute bottom-7 left-1/2 hidden -translate-x-1/2
          flex-col items-center gap-3 text-[8px] uppercase tracking-[.3em]
          sm:flex ${theme.scrollText}`}
      >
        <span>Explore Arventa</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
