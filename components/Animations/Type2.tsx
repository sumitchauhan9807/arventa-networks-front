import '@/app/styles/animations.css';

import { useSelector } from 'react-redux';

const Animations = () => {
  const mode = useSelector((state) => state.theme.theme);

  const isLight = mode === 'light';

  const theme = {
    /* =========================
       GENERAL
    ========================= */

    section: isLight
      ? 'bg-[#FAFAF8] text-[#151515]'
      : 'bg-[#050606] text-white',

    atmosphere: 'bg-[#D9A83E]/10',

    /* =========================
       SIGNAL FIELD
    ========================= */

    signalGlow: isLight
      ? 'bg-[#D9A83E]/10'
      : 'bg-[#D9A83E]/15',

    signalWave1: isLight
      ? 'border-[#D9A83E]/30'
      : 'border-[#D9A83E]/30',

    signalWave2: isLight
      ? 'border-[#B88725]/20'
      : 'border-[#F5CC70]/20',

    signalWave3: isLight
      ? 'border-slate-300'
      : 'border-white/10',

    signalCore: isLight
      ? 'border-[#D9A83E]/30 bg-white/80 shadow-[0_8px_35px_rgba(217,168,62,.12)]'
      : 'border-[#D9A83E]/30 bg-[#080a0a]/90 shadow-[0_0_40px_rgba(217,168,62,.15)]',

    /* =========================
       NETWORK
    ========================= */

    globeFill: isLight
      ? 'rgba(255,255,255,.72)'
      : 'rgba(7,9,9,.85)',

    globeStrokeOpacity: isLight ? '.28' : '.18',

    globeInnerStroke: isLight
      ? '#1A1A1A'
      : 'white',

    globeInnerOpacity: isLight ? '.07' : '.05',

    globeLineOpacity: isLight ? '.22' : '.12',

    globeLineOpacity2: isLight ? '.14' : '.08',

    globeLongitudeOpacity: isLight ? '.16' : '.09',

    globeLongitudeOpacity2: isLight ? '.11' : '.06',

    route: isLight
      ? '#B8892D'
      : '#D9A83E',

    routeStrongOpacity: isLight ? '.55' : '.35',

    routeOpacity: isLight ? '.4' : '.25',

    routeSoftOpacity: isLight ? '.25' : '.18',

    /* =========================
       HUB
    ========================= */

    hubRing: isLight
      ? 'border-[#D9A83E]/25'
      : 'border-[#D9A83E]/20',

    hub: isLight
      ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur'
      : 'border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]',

    hubLetter: isLight
      ? 'text-[#A87920]'
      : 'text-[#D9A83E]',

    hubName: isLight
      ? 'text-[#222]'
      : 'text-white/97',

    hubSub: isLight
      ? 'text-[#777]'
      : 'text-white',

    /* =========================
       NODES
    ========================= */

    node: isLight
      ? 'text-[#292929]'
      : 'text-white',

    nodeMuted: isLight
      ? 'text-[#888]'
      : 'text-white/97',

    /* =========================
       PANEL
    ========================= */

    panel: isLight
      ? 'border-[#E2E2DC] bg-white/85 shadow-[0_15px_50px_rgba(0,0,0,.08)]'
      : 'border-white/10 bg-[#080a0a]/80 shadow-2xl',

    panelLabel: isLight
      ? 'text-[#555]'
      : 'text-white/88',

    panelValue: isLight
      ? 'text-[#222]'
      : 'text-white',

    panelMuted: isLight
      ? 'text-[#888]'
      : 'text-white/95',

    panelDivider: isLight
      ? 'divide-[#E5E5E0]'
      : 'divide-white/10',

    trafficBg: isLight
      ? 'bg-[#ECECE7]'
      : 'bg-white/5',

    trafficText: isLight
      ? 'text-[#777]'
      : 'text-white/88',
  };

  return (
    <div className="container relative mx-auto">


      <div className="relative h-[500px] sm:h-[600px] lg:h-[650px]">

        {/* Ambient glow */}
        <div
          className={`absolute left-1/2 top-1/2
            h-[400px] w-[400px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-[90px]
            ${theme.atmosphere}`}
        />

        {/* Main outer ring */}
        <div
          className="absolute left-1/2 top-1/2
            h-[430px] w-[430px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-[#D9A83E]/10
            sm:h-[520px] sm:w-[520px]"
        />

        {/* Orbit 1 */}
        <div
          className="absolute left-1/2 top-1/2
            h-[430px] w-[210px]
            -translate-x-1/2 -translate-y-1/2
            rotate-45 rounded-[50%]
            border border-[#D9A83E]/20"
        />

        {/* Orbit 2 */}
        <div
          className={`absolute left-1/2 top-1/2
            h-[430px] w-[210px]
            -translate-x-1/2 -translate-y-1/2
            -rotate-45 rounded-[50%]
            ${
              isLight
                ? 'border border-slate-200'
                : 'border border-[#D9A83E]/10'
            }`}
        />

        {/* =================================================
            SVG NETWORK
        ================================================= */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 650 650"
          preserveAspectRatio="xMidYMid meet"
        >

          {/* Main network path */}
          <path
            d="M60 390 C150 330 120 180 250 180 S370 350 470 290 S530 170 610 130"
            fill="none"
            stroke="#D9A83E"
            strokeOpacity={isLight ? '.45' : '.35'}
            strokeWidth={isLight ? '1.2' : '1'}
            className="network-line"
          />

          {/* Reverse network path */}
          <path
            d="M70 180 C170 210 180 430 300 420 S420 220 500 250 S570 420 620 430"
            fill="none"
            stroke={isLight ? '#94a3b8' : '#FFFFFF'}
            strokeOpacity={isLight ? '.5' : '.13'}
            strokeWidth="1"
            className="network-line-reverse"
          />

          {/* Secondary path */}
          <path
            d="M80 520 C180 470 210 260 330 280 S420 470 530 410 S560 280 620 250"
            fill="none"
            stroke="#D9A83E"
            strokeOpacity={isLight ? '.25' : '.18'}
            strokeWidth="1"
          />

          {/* Network nodes */}
          <g fill="#D9A83E">

            <circle
              cx={60}
              cy={390}
              r={isLight ? '3.5' : '3'}
            />

            <circle
              cx={250}
              cy={180}
              r="3"
            />

            <circle
              cx={470}
              cy={290}
              r="3"
            />

            <circle
              cx={610}
              cy={130}
              r={isLight ? '3.5' : '3'}
            />

            <circle
              cx={70}
              cy={180}
              r={isLight ? '2.5' : '2'}
            />

            <circle
              cx={300}
              cy={420}
              r="3"
            />

            <circle
              cx={500}
              cy={250}
              r={isLight ? '2.5' : '2'}
            />

            <circle
              cx={620}
              cy={430}
              r="3"
            />

          </g>

        </svg>


        {/* =================================================
            CENTRAL HUB
        ================================================= */}

        <div
          className={`network-pulse absolute left-1/2 top-1/2
            flex h-32 w-32
            -translate-x-1/2 -translate-y-1/2
            items-center justify-center
            rounded-full border
            ${
              isLight
                ? 'border-[#D9A83E]/60 bg-white shadow-[0_20px_70px_rgba(217,168,62,.15)]'
                : 'border-[#D9A83E]/50 bg-[#080a0a]'
            }`}
        >

          {/* Inner ring */}
          <div
            className={`absolute h-24 w-24 rounded-full border ${
              isLight
                ? 'border-[#D9A83E]/20'
                : 'border-[#D9A83E]/15'
            }`}
          />

          {/* Logo */}
          <div className="text-center">

            <div
              className={`font-display text-lg font-semibold tracking-[.14em] ${
                isLight
                  ? 'text-slate-900'
                  : 'text-white'
              }`}
            >
              ARVENTA
            </div>

            <div
              className={`mt-1 text-[8px] uppercase tracking-[.32em] ${
                isLight
                  ? 'text-[#B88725]'
                  : 'text-[#D9A83E]'
              }`}
            >
              NETWORKS
            </div>

          </div>

        </div>


        {/* =================================================
            NETWORK STATUS CARD
        ================================================= */}

        <div
          className={`absolute right-0 top-14
            hidden w-48 rounded-xl border
            p-5 backdrop-blur-xl
            sm:block
            ${
              isLight
                ? 'border-slate-200 bg-white/90 shadow-[0_15px_40px_rgba(15,23,42,.08)]'
                : 'border-white/10 bg-[#080a0a]/80'
            }`}
        >

          <div className="flex items-center justify-between">

            <span
              className={`text-[10px] uppercase tracking-[.18em] ${
                isLight
                  ? 'text-slate-400'
                  : 'text-white/50'
              }`}
            >
              Network
            </span>

            <span className="relative flex h-2.5 w-2.5">

              <span
                className="absolute inline-flex h-full w-full
                  animate-ping rounded-full
                  bg-[#D9A83E] opacity-50"
              />

              <span
                className="relative inline-flex
                  h-2.5 w-2.5 rounded-full
                  bg-[#D9A83E]"
              />

            </span>

          </div>

          <div
            className={`mt-3 text-sm font-medium ${
              isLight
                ? 'text-slate-900'
                : 'text-white'
            }`}
          >
            Operational
          </div>

          <div
            className={`mt-4 h-px ${
              isLight
                ? 'bg-slate-200'
                : 'bg-white/10'
            }`}
          />

          <div
            className={`mt-3 flex justify-between
              text-[9px] uppercase tracking-wider ${
                isLight
                  ? 'text-slate-400'
                  : 'text-white/40'
              }`}
          >
            <span>Voice</span>

            <span
              className={
                isLight
                  ? 'text-[#B88725]'
                  : 'text-[#D9A83E]'
              }
            >
              Active
            </span>
          </div>

          <div
            className={`mt-2 flex justify-between
              text-[9px] uppercase tracking-wider ${
                isLight
                  ? 'text-slate-400'
                  : 'text-white/40'
              }`}
          >
            <span>SIP</span>

            <span
              className={
                isLight
                  ? 'text-[#B88725]'
                  : 'text-[#D9A83E]'
              }
            >
              Active
            </span>
          </div>

        </div>


        {/* =================================================
            BOTTOM INFORMATION LABEL
        ================================================= */}

        <div
          className={`absolute bottom-12 left-0
            hidden rounded-lg border
            px-5 py-4 backdrop-blur-xl
            sm:block
            ${
              isLight
                ? 'border-slate-200 bg-white/90 shadow-[0_12px_35px_rgba(15,23,42,.06)]'
                : 'border-white/10 bg-[#080a0a]/80'
            }`}
        >

          <div
            className={`text-[9px] uppercase tracking-[.2em] ${
              isLight
                ? 'text-slate-400'
                : 'text-white/40'
            }`}
          >
            Communication Infrastructure
          </div>

          <div
            className={`mt-1 text-sm ${
              isLight
                ? 'text-slate-800'
                : 'text-white'
            }`}
          >
            Built to connect.
          </div>

        </div>

      </div>

    </div>
  );
};

export default Animations;



