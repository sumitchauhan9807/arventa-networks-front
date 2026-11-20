
import '@/app/styles/animations.css';
import { useSelector } from 'react-redux';

const Animations = ({ bright = false }) => {
  const mode = useSelector((state) => state.theme.theme);
  const isLight = mode === 'light';

  // Theme configuration
  const theme = {
    // Background
    section: isLight
      ? 'bg-[#FAFAF8] text-[#151515]'
      : 'bg-[#050606] text-white',

    atmosphere: isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/10',
    greenAtmosphere: isLight ? 'bg-[#22C55E]/[0.07]' : 'bg-[#22C55E]/[0.045]',
    redAtmosphere: isLight ? 'bg-[#EF4444]/[0.06]' : 'bg-[#EF4444]/[0.035]',

    // Gold
    gold: isLight ? '#B8892D' : '#D9A83E',
    goldBright: '#F5CC70',

    // Green
    green: isLight ? '#16A34A' : '#22C55E',
    greenBright: isLight ? '#15803D' : '#4ADE80',

    // Red
    red: isLight ? '#DC2626' : '#EF4444',
    redBright: isLight ? '#B91C1C' : '#F87171',

    // Globe
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

    // Network routes
    route: isLight ? '#B8892D' : '#D9A83E',
    routeGreen: isLight ? '#16A34A' : '#22C55E',
    routeRed: isLight ? '#DC2626' : '#EF4444',

    routeStrongOpacity: isLight ? '.55' : '.35',
    routeOpacity: isLight ? '.4' : '.25',
    routeSoftOpacity: isLight ? '.25' : '.18',

    // Hub
    hubRing: isLight
      ? 'border-[#D9A83E]/25'
      : 'border-[#D9A83E]/20',

    hub: isLight
      ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur'
      : 'border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]',

    hubLetter: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    hubName: isLight ? 'text-[#222]' : 'text-white/97',
    hubSub: isLight ? 'text-[#777]' : 'text-white',

    // Network nodes
    node: isLight ? 'text-[#292929]' : 'text-white',
    nodeMuted: isLight ? 'text-[#777]' : 'text-white/85',

    // Panel
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
        className={`
          pointer-events-none absolute left-1/2 top-1/2
          h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2
          rounded-full ${theme.atmosphere} blur-[75px]
          sm:h-[430px] sm:w-[430px] sm:blur-[90px]
        `}
      />

      {/* GREEN AMBIENT GLOW */}
      <div
        className={`
          pointer-events-none absolute left-[8%] top-[20%]
          h-[240px] w-[240px] rounded-full
          ${theme.greenAtmosphere} blur-[100px]
          sm:h-[320px] sm:w-[320px]
        `}
      />

      {/* RED AMBIENT GLOW */}
      <div
        className={`
          pointer-events-none absolute right-[5%] bottom-[15%]
          h-[240px] w-[240px] rounded-full
          ${theme.redAtmosphere} blur-[100px]
          sm:h-[320px] sm:w-[320px]
        `}
      />

      {/* GLOBAL ORBIT */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2
          rounded-full border border-[#D9A83E]/10
          sm:h-[470px] sm:w-[470px]
          lg:h-[560px] lg:w-[560px]
        "
      />

      <div
        className="
          global-orbit absolute left-1/2 top-1/2
          h-[350px] w-[175px] -translate-x-1/2 -translate-y-1/2
          rounded-[50%] border border-[#22C55E]/20
          sm:h-[500px] sm:w-[250px]
        "
      />

      <div
        className="
          global-orbit-2 absolute left-1/2 top-1/2
          h-[350px] w-[175px] -translate-x-1/2 -translate-y-1/2
          rotate-90 rounded-[50%] border border-[#EF4444]/15
          sm:h-[500px] sm:w-[250px]
        "
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
          stroke={theme.route}
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
          stroke={theme.route}
          strokeOpacity={theme.globeLineOpacity}
        />

        <ellipse
          cx="400"
          cy="350"
          rx="190"
          ry="125"
          stroke={theme.routeGreen}
          strokeOpacity={theme.globeLineOpacity2}
        />

        {/* Longitude */}
        <ellipse
          cx="400"
          cy="350"
          rx="100"
          ry="190"
          stroke={theme.route}
          strokeOpacity={theme.globeLongitudeOpacity}
        />

        <ellipse
          cx="400"
          cy="350"
          rx="145"
          ry="190"
          stroke={theme.routeRed}
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        <path
          d="M400 160 C315 225 315 475 400 540"
          stroke={theme.routeGreen}
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        <path
          d="M400 160 C485 225 485 475 400 540"
          stroke={theme.route}
          strokeOpacity={theme.globeLongitudeOpacity2}
        />

        {/* CONNECTION PATHS */}

        {/* Frankfurt - Gold */}
        <path
          id="route-frankfurt"
          d="M315 260 Q350 300 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeStrongOpacity}
          strokeWidth="1.5"
        />

        {/* New York - Green */}
        <path
          id="route-newyork"
          d="M240 330 Q320 320 400 350"
          stroke={theme.routeGreen}
          strokeOpacity={theme.routeOpacity}
          strokeWidth="1.5"
        />

        {/* Dubai - Red */}
        <path
          id="route-dubai"
          d="M510 350 Q460 350 400 350"
          stroke={theme.routeRed}
          strokeOpacity={theme.routeStrongOpacity}
          strokeWidth="1.5"
        />

        {/* Singapore - Gold */}
        <path
          id="route-singapore"
          d="M530 445 Q465 410 400 350"
          stroke={theme.route}
          strokeOpacity={theme.routeOpacity}
          strokeWidth="1.5"
        />

        {/* Additional network connections */}
        <path
          d="M350 250 Q370 300 400 350"
          stroke={theme.routeGreen}
          strokeOpacity={theme.routeSoftOpacity}
        />

        <path
          d="M545 285 Q475 300 400 350"
          stroke={theme.routeRed}
          strokeOpacity={theme.routeSoftOpacity}
        />

        {/* ANIMATED DATA PACKETS */}

        {/* Gold packet */}
        <circle r="4" fill={theme.goldBright}>
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            path="M315 260 Q350 300 400 350"
          />
        </circle>

        {/* Green packet */}
        <circle r="3" fill={theme.greenBright}>
          <animateMotion
            dur="3.4s"
            begin=".8s"
            repeatCount="indefinite"
            path="M240 330 Q320 320 400 350"
          />
        </circle>

        {/* Red packet */}
        <circle r="4" fill={theme.redBright}>
          <animateMotion
            dur="3s"
            begin="1.4s"
            repeatCount="indefinite"
            path="M510 350 Q460 350 400 350"
          />
        </circle>

        {/* Gold packet */}
        <circle r="3" fill={theme.goldBright}>
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
          fill={theme.green}
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
        className="
          absolute left-1/2 top-1/2 z-[5]
          flex h-28 w-28 -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          sm:h-40 sm:w-40
        "
      >
        {/* Gold Pulse */}
        <div
          className="
            absolute h-28 w-28 animate-ping
            rounded-full border border-[#D9A83E]/20
            sm:h-40 sm:w-40
          "
          style={{ animationDuration: '3s' }}
        />

        {/* Green outer ring */}
        <div
          className="
            absolute h-[110px] w-[110px]
            rounded-full border border-[#22C55E]/20
            sm:h-[150px] sm:w-[150px]
          "
        />

        {/* Red inner ring */}
        <div
          className="
            absolute h-24 w-24 rounded-full
            border border-[#EF4444]/15
            sm:h-32 sm:w-32
          "
        />

        {/* Gold hub ring */}
        <div
          className={`
            absolute h-24 w-24 rounded-full border
            ${theme.hubRing} bg-[#D9A83E]/5
            sm:h-32 sm:w-32
          `}
        />

        {/* Hub */}
        <div
          className={`
            relative flex h-[76px] w-[76px]
            flex-col items-center justify-center rounded-2xl
            border ${theme.hub}
            sm:h-24 sm:w-24
          `}
        >
          <div className={`text-2xl font-bold sm:text-3xl ${theme.hubLetter}`}>
            A
          </div>

          <div
            className={`
              mt-0.5 text-[10px] font-semibold tracking-[.18em]
              sm:text-[12px] sm:tracking-[.25em]
              ${theme.hubName}
            `}
          >
            ARVENTA
          </div>

          <div
            className={`
              text-[7px] tracking-[.22em] sm:text-[8px]
              sm:tracking-[.3em] ${theme.hubSub}
            `}
          >
            NETWORKS
          </div>

          {/* Gold status */}
          <span
            className="
              absolute -right-1 -top-1 h-3 w-3
              rounded-full bg-[#D9A83E]
              shadow-[0_0_20px_#D9A83E]
            "
          />
        </div>
      </div>

      {/* REGIONAL NODES */}

      {/* Frankfurt - Gold */}
      <div className="absolute left-[4%] top-[23%] z-10 sm:left-[20%] sm:top-[31%]">
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span
            className="
              hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full
              bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]
              sm:h-2 sm:w-2
            "
          />

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

      {/* New York - Green */}
      <div className="absolute left-[4%] top-[43%] z-10 sm:left-[8%] sm:top-[47%]">
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span
            className="
              hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full
              bg-[#22C55E] shadow-[0_0_10px_#22C55E]
              sm:h-2 sm:w-2
            "
          />

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

      {/* Dubai - Red */}
      <div className="absolute right-[4%] top-[43%] z-10 sm:right-[13%] sm:top-[48%]">
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span
            className="
              hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full
              bg-[#EF4444] shadow-[0_0_10px_#EF4444]
              sm:h-2 sm:w-2
            "
          />

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

      {/* Singapore - Gold */}
      <div className="absolute right-[4%] top-[23%] z-10 sm:bottom-[25%] sm:right-[16%] sm:top-auto">
        <div className="hero-network-node flex items-center gap-1.5 sm:gap-2">
          <span
            className="
              hero-node-dot h-1.5 w-1.5 shrink-0 rounded-full
              bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]
              sm:h-2 sm:w-2
            "
          />

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

      {/* LIVE NETWORK PANEL */}
      <div
        className={`
          absolute bottom-3 left-1/2 z-20
          w-[calc(100%-24px)] max-w-[290px]
          -translate-x-1/2 rounded-xl border p-3
          backdrop-blur-xl
          sm:bottom-6 sm:left-auto sm:right-0
          sm:translate-x-0 sm:p-4
          ${theme.panel}
        `}
      >
        {/* Panel heading */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="
                h-2 w-2 shrink-0 rounded-full
                bg-[#22C55E]
                shadow-[0_0_12px_#22C55E]
              "
            />

            <span className={`text-[9px] font-semibold uppercase tracking-wider ${theme.panelLabel}`}>
              Global Network
            </span>
          </div>

          <span className="text-[8px] font-semibold text-[#22C55E]">
            LIVE
          </span>
        </div>

        {/* Network statistics */}
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
            <div className="text-sm font-semibold text-[#22C55E]">
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
              className="
                network-traffic-bar h-full rounded-full
                bg-gradient-to-r
                from-[#D9A83E] via-[#22C55E] to-[#EF4444]
              "
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
=============================================================== */

const BrightAura = ({ isLight }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Atmospheric glow */}
      <div
        className={`
          absolute left-1/2 top-[18%]
          h-[180px] w-[340px] -translate-x-1/2
          rounded-full blur-[80px]
          sm:h-[260px] sm:w-[600px] sm:blur-[100px]
          ${isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/15'}
        `}
      />

      {/* Green atmosphere */}
      <div
        className={`
          absolute left-[12%] top-[30%]
          h-[150px] w-[250px] rounded-full blur-[80px]
          ${isLight ? 'bg-[#22C55E]/[0.08]' : 'bg-[#22C55E]/[0.10]'}
        `}
      />

      {/* Red atmosphere */}
      <div
        className={`
          absolute right-[12%] top-[25%]
          h-[150px] w-[250px] rounded-full blur-[80px]
          ${isLight ? 'bg-[#EF4444]/[0.07]' : 'bg-[#EF4444]/[0.08]'}
        `}
      />

      {/* Main flowing ribbons */}
      <div
        className="
          absolute left-1/2 top-[25%]
          h-[200px] w-[360px] -translate-x-1/2
          sm:h-[260px] sm:w-[700px]
        "
      >
        {/* Gold ribbon */}
        <div
          className={`
            aurora-ribbon aurora-ribbon-1
            absolute left-[-10%] top-[45%]
            h-[70px] w-[120%] rounded-[50%] border-t
            sm:h-[90px]
            ${isLight ? 'border-[#B8892D]/30' : 'border-[#D9A83E]/30'}
          `}
        />

        {/* Green ribbon */}
        <div
          className={`
            aurora-ribbon aurora-ribbon-2
            absolute left-[-15%] top-[55%]
            h-[90px] w-[130%] rounded-[50%] border-t
            sm:h-[120px]
            ${isLight ? 'border-[#16A34A]/25' : 'border-[#22C55E]/25'}
          `}
        />

        {/* Red ribbon */}
        <div
          className={`
            aurora-ribbon aurora-ribbon-3
            absolute left-[-5%] top-[35%]
            h-[110px] w-[110%] rounded-[50%] border-t
            sm:h-[150px]
            ${isLight ? 'border-[#DC2626]/20' : 'border-[#EF4444]/20'}
          `}
        />
      </div>

      {/* Moving light particles */}

      {/* Gold particle */}
      <span
        className={`
          aurora-particle aurora-particle-1
          absolute left-[22%] top-[20%]
          h-1.5 w-1.5 rounded-full bg-[#D9A83E]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(168,121,32,.55)]'
            : 'shadow-[0_0_18px_#D9A83E]'}
        `}
      />

      {/* Green particle */}
      <span
        className={`
          aurora-particle aurora-particle-2
          absolute left-[67%] top-[17%]
          h-1.5 w-1.5 rounded-full bg-[#22C55E]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(34,197,94,.55)]'
            : 'shadow-[0_0_18px_#22C55E]'}
        `}
      />

      {/* Red particle */}
      <span
        className={`
          aurora-particle aurora-particle-3
          absolute left-[76%] top-[42%]
          h-1.5 w-1.5 rounded-full bg-[#EF4444]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(239,68,68,.45)]'
            : 'shadow-[0_0_18px_#EF4444]'}
        `}
      />

      {/* Gold particle */}
      <span
        className={`
          aurora-particle aurora-particle-4
          absolute left-[16%] top-[45%]
          h-1.5 w-1.5 rounded-full bg-[#F5CC70]
          ${isLight
            ? 'shadow-[0_0_12px_rgba(217,168,62,.45)]'
            : 'shadow-[0_0_18px_#F5CC70]'}
        `}
      />

      {/* Vertical data streams */}

      {/* Gold stream */}
      <div
        className={`
          data-stream stream-1
          absolute left-[25%] top-[15%]
          h-[150px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#D9A83E]/30 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#D9A83E]/25 to-transparent'}
        `}
      />

      {/* Green stream */}
      <div
        className={`
          data-stream stream-2
          absolute left-[38%] top-[10%]
          h-[190px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#16A34A]/25 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#22C55E]/25 to-transparent'}
        `}
      />

      {/* Red stream */}
      <div
        className={`
          data-stream stream-3
          absolute right-[35%] top-[18%]
          h-[140px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#DC2626]/25 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#EF4444]/25 to-transparent'}
        `}
      />

      {/* Gold stream */}
      <div
        className={`
          data-stream stream-4
          absolute right-[22%] top-[8%]
          h-[170px] w-px
          ${isLight
            ? 'bg-gradient-to-b from-transparent via-[#A87920]/20 to-transparent'
            : 'bg-gradient-to-b from-transparent via-[#F5CC70]/20 to-transparent'}
        `}
      />

      {/* Floating micro nodes */}

      <span
        className="
          floating-node floating-node-1
          absolute left-[30%] top-[22%]
          h-1.5 w-1.5 rounded-full bg-[#D9A83E]
        "
      />

      <span
        className="
          floating-node floating-node-2
          absolute left-[62%] top-[18%]
          h-1.5 w-1.5 rounded-full bg-[#22C55E]
        "
      />

      <span
        className="
          floating-node floating-node-3
          absolute left-[72%] top-[30%]
          h-1.5 w-1.5 rounded-full bg-[#EF4444]
        "
      />

      <span
        className="
          floating-node floating-node-4
          absolute left-[18%] top-[32%]
          h-1.5 w-1.5 rounded-full bg-[#22C55E]
        "
      />
    </div>
  );
};
