import '@/app/styles/animations.css';

import { useSelector } from 'react-redux';

const Animations = ({ bright = false }) => {
  const mode = useSelector((state) => state.theme.theme);
  const isLight = mode === 'light';

  const theme = {
    section: isLight
      ? 'bg-[#FAFAF8] text-[#151515]'
      : 'bg-[#050606] text-white',

    atmosphere: 'bg-[#D9A83E]/10',

    eyebrow: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    eyebrowLine: 'bg-[#D9A83E]',

    heading: isLight ? 'text-[#171717]' : 'text-white',

    gradient: isLight
      ? 'from-[#A87920] via-[#D9A83E] to-[#8E681F]'
      : 'from-[#F6D27A] via-[#D9A83E] to-[#A87920]',

    body: isLight ? 'text-[#5E5E5E]' : 'text-white/93',

    primaryButton: isLight
      ? 'text-[#171717] shadow-[0_10px_30px_rgba(217,168,62,.18)] hover:bg-[#E7BD5B] hover:shadow-[0_12px_35px_rgba(217,168,62,.25)]'
      : 'text-black hover:bg-[#F5CC70]',

    secondaryButton: isLight
      ? 'border-[#D7D7D2] bg-white/70 text-[#303030] hover:border-[#D9A83E] hover:text-[#A87920]'
      : 'border-white/15 text-white/95 hover:border-[#D9A83E] hover:text-[#D9A83E]',

    statText: isLight ? 'text-[#171717]' : 'text-white',
    statMuted: isLight ? 'text-[#777]' : 'text-white/82',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',

    globeFill: isLight
      ? 'rgba(255,255,255,.72)'
      : 'rgba(7,9,9,.85)',

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

    hubRing: isLight
      ? 'border-[#D9A83E]/25'
      : 'border-[#D9A83E]/20',

    hub: isLight
      ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur'
      : 'border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]',

    hubLetter: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    hubName: isLight ? 'text-[#222]' : 'text-white/97',
    hubSub: isLight ? 'text-[#777]' : 'text-white',

    node: isLight ? 'text-[#292929]' : 'text-white',
    nodeMuted: isLight ? 'text-[#777]' : 'text-white/85',

    panel: isLight
      ? 'border-[#E2E2DC] bg-white/90 shadow-[0_15px_50px_rgba(0,0,0,.08)]'
      : 'border-white/10 bg-[#080a0a]/90 shadow-2xl',

    panelLabel: isLight ? 'text-[#555]' : 'text-white/85',
    panelValue: isLight ? 'text-[#222]' : 'text-white',
    panelMuted: isLight ? 'text-[#777]' : 'text-white/75',

    panelDivider: isLight ? 'divide-[#E5E5E0]' : 'divide-white/10',
    trafficBg: isLight ? 'bg-[#ECECE7]' : 'bg-white/5',
    trafficText: isLight ? 'text-[#777]' : 'text-white/85',
    scrollText: isLight ? 'text-[#777]' : 'text-white/90',
  };

  return (
    <div className="container relative mx-auto h-[560px] overflow-hidden sm:h-[650px] lg:h-[700px]">
      {/* AMBIENT GLOBE GLOW */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2
          h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#D9A83E]/10 blur-[75px]
          sm:h-[430px] sm:w-[430px] sm:blur-[90px]"
      />

      {/* GLOBAL ORBIT */}
      <div
        className="absolute left-1/2 top-1/2
          h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2
          rounded-full border border-[#D9A83E]/10
          sm:h-[470px] sm:w-[470px]
          lg:h-[560px] lg:w-[560px]"
      />

      <div
        className="global-orbit absolute left-1/2 top-1/2
          h-[350px] w-[175px] -translate-x-1/2 -translate-y-1/2
          rounded-[50%] border border-[#D9A83E]/20
          sm:h-[500px] sm:w-[250px]"
      />

      <div
        className="global-orbit-2 absolute left-1/2 top-1/2
          h-[350px] w-[175px] -translate-x-1/2 -translate-y-1/2
          rotate-90 rounded-[50%] border border-[#D9A83E]/10
          sm:h-[500px] sm:w-[250px]"
      />

      {/* FLOATING DATA AURORA */}
      {bright && <BrightAura isLight={isLight} />}

      {/* NETWORK SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 700"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Globe */}
        <circle
          cx="400"
          cy="350"
          r="205"
          fill={theme.globeFill}
          stroke="#D9A83E"
          strokeOpacity={theme.globeStrokeOpacity}
        />

        <circle
          cx="400"
          cy="350"
          r="190"
          stroke={theme.globeInnerStroke}
          strokeOpacity={theme.globeInnerOpacity}
        />

        {/* Latitude */}
        <ellipse
          cx="400"
          cy="350"
          rx="190"
          ry="65"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLineOpacity}
        />

        <ellipse
          cx="400"
          cy="350"
          rx="190"
          ry="125"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLineOpacity2}
        />

        {/* Longitude */}
        <ellipse
          cx="400"
          cy="350"
          rx="100"
          ry="190"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLongitudeOpacity}
        />

        <ellipse
          cx="400"
          cy="350"
          rx="145"
          ry="190"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        <path
          d="M400 160 C315 225 315 475 400 540"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        <path
          d="M400 160 C485 225 485 475 400 540"
          stroke="#D9A83E"
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        {/* CONNECTION PATHS */}
        <path
          id="route-frankfurt"
          d="M315 260 Q350 300 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeStrongOpacity}
          strokeWidth="1.5"
        />

        <path
          id="route-newyork"
          d="M240 330 Q320 320 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeOpacity}
          strokeWidth="1.5"
        />

        <path
          id="route-dubai"
          d="M510 350 Q460 350 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeStrongOpacity}
          strokeWidth="1.5"
        />

        <path
          id="route-singapore"
          d="M530 445 Q465 410 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeOpacity}
          strokeWidth="1.5"
        />

        <path
          d="M350 250 Q370 300 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeSoftOpacity}
        />

        <path
          d="M545 285 Q475 300 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeSoftOpacity}
        />

        {/* ANIMATED DATA PACKETS */}
        <circle r="4" fill="#F5CC70">
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            path="M315 260 Q350 300 400 350"
          />
        </circle>

        <circle r="3" fill={isLight ? '#A87920' : '#D9A83E'}>
          <animateMotion
            dur="3.4s"
            begin=".8s"
            repeatCount="indefinite"
            path="M240 330 Q320 320 400 350"
          />
        </circle>

        <circle r="4" fill="#F5CC70">
          <animateMotion
            dur="3s"
            begin="1.4s"
            repeatCount="indefinite"
            path="M510 350 Q460 350 400 350"
          />
        </circle>

        <circle r="3" fill={isLight ? '#A87920' : '#D9A83E'}>
          <animateMotion
            dur="3.6s"
            begin=".3s"
            repeatCount="indefinite"
            path="M530 445 Q465 410 400 350"
          />
        </circle>

        {/* REVERSE TRAFFIC */}
        <circle
          r="2.5"
          fill={isLight ? '#6A6A6A' : '#FFFFFF'}
          opacity={isLight ? '.8' : '.7'}
        >
          <animateMotion
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
            path="M400 350 Q460 410 530 445"
          />
        </circle>
      </svg>

      {/* CENTRAL ARVENTA HUB */}
      <div
        className="absolute left-1/2 top-1/2 z-[5]
          flex h-28 w-28 -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          sm:h-40 sm:w-40"
      >
        {/* Pulse */}
        <div
          className="absolute h-28 w-28 animate-ping
            rounded-full border border-[#D9A83E]/20
            sm:h-40 sm:w-40"
          style={{ animationDuration: '3s' }}
        />

        <div
          className={`absolute h-24 w-24 rounded-full border
            ${theme.hubRing} bg-[#D9A83E]/5
            sm:h-32 sm:w-32`}
        />

        {/* Hub */}
        <div
          className={`relative flex h-[76px] w-[76px]
            flex-col items-center justify-center rounded-2xl
            border ${theme.hub}
            sm:h-24 sm:w-24`}
        >
          <div className={`text-2xl font-bold sm:text-3xl ${theme.hubLetter}`}>
            A
          </div>

          <div
            className={`mt-0.5 text-[10px] font-semibold tracking-[.18em]
              sm:text-[12px] sm:tracking-[.25em] ${theme.hubName}`}
          >
            ARVENTA
          </div>

          <div
            className={`text-[7px] tracking-[.22em] sm:text-[8px]
              sm:tracking-[.3em] ${theme.hubSub}`}
          >
            NETWORKS
          </div>

          <span
            className="absolute -right-1 -top-1 h-3 w-3
              rounded-full bg-[#D9A83E]
              shadow-[0_0_20px_#D9A83E]"
          />
        </div>
      </div>

      {/* REGIONAL NODES — VISIBLE ON ALL SCREEN SIZES */}

      {/* Frankfurt */}
      <div
        className="absolute left-[4%] top-[23%] z-10
          sm:left-[20%] sm:top-[31%]"
      >
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span className="hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A83E] sm:h-2 sm:w-2" />

          <div>
            <div className={`text-[10px] font-semibold sm:text-[11px] ${theme.node}`}>
              Frankfurt
            </div>

            <div className={`mt-0.5 text-[8px] sm:text-[10px] ${theme.nodeMuted}`}>
              Europe
            </div>
          </div>
        </div>
      </div>

      {/* New York */}
      <div
        className="absolute left-[4%] top-[43%] z-10
          sm:left-[8%] sm:top-[47%]"
      >
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span className="hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A83E] sm:h-2 sm:w-2" />

          <div>
            <div className={`text-[10px] font-semibold sm:text-[11px] ${theme.node}`}>
              New York
            </div>

            <div className={`mt-0.5 text-[8px] sm:text-[10px] ${theme.nodeMuted}`}>
              North America
            </div>
          </div>
        </div>
      </div>

      {/* Dubai */}
      <div
        className="absolute right-[4%] top-[43%] z-10
          sm:right-[13%] sm:top-[48%]"
      >
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span className="hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A83E] sm:h-2 sm:w-2" />

          <div>
            <div className={`text-[10px] font-semibold sm:text-[11px] ${theme.node}`}>
              Dubai
            </div>

            <div className={`mt-0.5 text-[8px] sm:text-[10px] ${theme.nodeMuted}`}>
              Middle East
            </div>
          </div>
        </div>
      </div>

      {/* Singapore */}
      <div
        className="absolute right-[4%] top-[23%] z-10
          sm:bottom-[25%] sm:right-[16%] sm:top-auto"
      >
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span className="hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A83E] sm:h-2 sm:w-2" />

          <div>
            <div className={`text-[10px] font-semibold sm:text-[11px] ${theme.node}`}>
              Singapore
            </div>

            <div className={`mt-0.5 text-[8px] sm:text-[10px] ${theme.nodeMuted}`}>
              Asia Pacific
            </div>
          </div>
        </div>
      </div>

      {/* LIVE NETWORK PANEL — RESPONSIVE WIDTH */}
      <div
        className={`absolute bottom-3 left-1/2 z-20
          w-[calc(100%-24px)] max-w-[290px]
          -translate-x-1/2 rounded-xl border p-3
          backdrop-blur-xl
          sm:bottom-6 sm:left-auto sm:right-0
          sm:translate-x-0 sm:p-4
          ${theme.panel}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full bg-[#D9A83E]
                ${isLight
                  ? 'shadow-[0_0_10px_rgba(217,168,62,.55)]'
                  : 'shadow-[0_0_12px_#D9A83E]'}`}
            />

            <span
              className={`text-[9px] font-semibold uppercase tracking-wider
                ${theme.panelLabel}`}
            >
              Global Network
            </span>
          </div>

          <span className="text-[8px] text-[#A87920]">LIVE</span>
        </div>

        <div className={`mt-3 grid grid-cols-3 divide-x ${theme.panelDivider} sm:mt-4`}>
          <div className="min-w-0 px-2 first:pl-0">
            <div className={`text-sm font-semibold ${theme.panelValue}`}>
              18.4K
            </div>

            <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>
              CONNECTIONS
            </div>
          </div>

          <div className="min-w-0 px-2 sm:px-3">
            <div className={`text-sm font-semibold ${theme.panelValue}`}>
              18ms
            </div>

            <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>
              LATENCY
            </div>
          </div>

          <div className="min-w-0 px-2 sm:px-3">
            <div className="text-sm font-semibold text-[#D9A83E]">
              99.9%
            </div>

            <div className={`mt-1 text-[8px] ${theme.panelMuted}`}>
              UPTIME
            </div>
          </div>
        </div>

        {/* LIVE TRAFFIC BAR */}
        <div className="mt-3 sm:mt-4">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className={`text-[8px] ${theme.panelMuted}`}>
              LIVE TRAFFIC
            </span>

            <span className={`text-[8px] ${theme.trafficText}`}>
              2.48 TB/s
            </span>
          </div>

          <div className={`h-1 overflow-hidden rounded-full ${theme.trafficBg}`}>
            <div
              className="network-traffic-bar h-full rounded-full
                bg-gradient-to-r from-[#A87920] via-[#D9A83E] to-[#F5CC70]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animations;

/* ===============================================================
   BRIGHT AURA
================================================================ */

const BrightAura = ({ isLight }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Atmospheric glow */}
      <div
        className={`absolute left-1/2 top-[18%]
          h-[180px] w-[340px] -translate-x-1/2
          rounded-full blur-[80px]
          sm:h-[260px] sm:w-[600px] sm:blur-[100px]
          ${isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/15'}`}
      />

      {/* Main flowing ribbons */}
      <div
        className="absolute left-1/2 top-[25%]
          h-[200px] w-[360px] -translate-x-1/2
          sm:h-[260px] sm:w-[700px]"
      >
        <div
          className={`aurora-ribbon aurora-ribbon-1
            absolute left-[-10%] top-[45%]
            h-[70px] w-[120%] rounded-[50%] border-t
            sm:h-[90px]
            ${isLight ? 'border-[#B8892D]/30' : 'border-[#D9A83E]/30'}`}
        />

        <div
          className={`aurora-ribbon aurora-ribbon-2
            absolute left-[-15%] top-[55%]
            h-[90px] w-[130%] rounded-[50%] border-t
            sm:h-[120px]
            ${isLight ? 'border-[#D9A83E]/20' : 'border-[#F5CC70]/20'}`}
        />

        <div
          className={`aurora-ribbon aurora-ribbon-3
            absolute left-[-5%] top-[35%]
            h-[110px] w-[110%] rounded-[50%] border-t
            sm:h-[150px]
            ${isLight ? 'border-[#A87920]/15' : 'border-[#D9A83E]/15'}`}
        />
      </div>

      {/* Moving light particles */}
      <span
        className={`aurora-particle aurora-particle-1
          absolute left-[22%] top-[20%] h-1.5 w-1.5 rounded-full
          bg-[#D9A83E]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(168,121,32,.55)]'
            : 'shadow-[0_0_18px_#D9A83E]'}`}
      />

      <span
        className={`aurora-particle aurora-particle-2
          absolute left-[67%] top-[17%] h-1 w-1 rounded-full
          bg-[#F5CC70]
          ${isLight
            ? 'shadow-[0_0_10px_rgba(217,168,62,.5)]'
            : 'shadow-[0_0_16px_#F5CC70]'}`}
      />

      <span
        className={`aurora-particle aurora-particle-3
          absolute left-[76%] top-[42%] h-1 w-1 rounded-full
          bg-[#D9A83E]
          ${isLight
            ? 'shadow-[0_0_10px_rgba(168,121,32,.45)]'
            : 'shadow-[0_0_16px_#D9A83E]'}`}
      />

      <span
        className={`aurora-particle aurora-particle-4
          absolute left-[16%] top-[45%] h-1.5 w-1.5 rounded-full
          bg-[#F5CC70]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(217,168,62,.45)]'
            : 'shadow-[0_0_18px_#F5CC70]'}`}
      />

      {/* Vertical data streams */}
      <div
        className={`data-stream stream-1 absolute left-[25%] top-[15%]
          h-[150px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#D9A83E]/30 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#D9A83E]/25 to-transparent'}`}
      />

      <div
        className={`data-stream stream-2 absolute left-[38%] top-[10%]
          h-[190px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#A87920]/20 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#F5CC70]/20 to-transparent'}`}
      />

      <div
        className={`data-stream stream-3 absolute right-[35%] top-[18%]
          h-[140px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#D9A83E]/25 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#D9A83E]/20 to-transparent'}`}
      />

      <div
        className={`data-stream stream-4 absolute right-[22%] top-[8%]
          h-[170px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#A87920]/20 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#F5CC70]/15 to-transparent'}`}
      />

      {/* Floating micro nodes */}
      <span
        className="floating-node floating-node-1 absolute left-[30%] top-[22%]
          h-1.5 w-1.5 rounded-full bg-[#D9A83E]"
      />

      <span
        className="floating-node floating-node-2 absolute left-[62%] top-[18%]
          h-1 w-1 rounded-full bg-[#F5CC70]"
      />

      <span
        className="floating-node floating-node-3 absolute left-[72%] top-[30%]
          h-1.5 w-1.5 rounded-full bg-[#D9A83E]"
      />

      <span
        className="floating-node floating-node-4 absolute left-[18%] top-[32%]
          h-1 w-1 rounded-full bg-[#D9A83E]"
      />
    </div>
  );
};