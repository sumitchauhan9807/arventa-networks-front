
import '@/app/styles/animations.css';

import { useSelector } from 'react-redux';

const Animations = () => {
  const mode = useSelector((state) => state.theme.theme);

  const isLight = mode === 'light';

  const theme = {
    /* =========================================================
       GENERAL
       ========================================================= */

    section: isLight
      ? 'bg-[#FAFBF8] text-[#151817]'
      : 'bg-[#050807] text-white',

    atmosphere: isLight
      ? 'bg-[#C6A15B]/10'
      : 'bg-[#C6A15B]/14',

    /* =========================================================
       ECOSYSTEM FIELD
       ========================================================= */

    orbitPrimary: isLight
      ? 'border-[#C6A15B]/35'
      : 'border-[#C6A15B]/25',

    orbitSecondary: isLight
      ? 'border-[#6B8F71]/30'
      : 'border-[#6B8F71]/22',

    orbitTertiary: isLight
      ? 'border-slate-300/80'
      : 'border-white/10',

    /* =========================================================
       CENTRAL HUB
       ========================================================= */

    hubRing: isLight
      ? 'border-[#C6A15B]/40'
      : 'border-[#C6A15B]/30',

    hub: isLight
      ? `
        border-[#C6A15B]/65
        bg-white/90
        shadow-[0_20px_80px_rgba(198,161,91,.20)]
      `
      : `
        border-[#C6A15B]/60
        bg-[#080B09]/95
        shadow-[0_0_90px_rgba(198,161,91,.30)]
      `,

    hubName: isLight
      ? 'text-[#1C211E]'
      : 'text-white',

    hubLetter: isLight
      ? 'text-[#9B793B]'
      : 'text-[#C6A15B]',

    hubSub: isLight
      ? 'text-[#718078]'
      : 'text-white/65',

    /* =========================================================
       PARTNER NODES
       ========================================================= */

    nodeDot: isLight
      ? 'bg-[#6B8F71]'
      : 'bg-[#86A98C]',

    /* =========================================================
       CONNECTIONS
       ========================================================= */

    connectionPrimary: '#C6A15B',

    connectionSecondary: isLight
      ? '#6B8F71'
      : '#86A98C',

    connectionOpacity: isLight
      ? '.48'
      : '.34',

    connectionSoftOpacity: isLight
      ? '.22'
      : '.15',

    /* =========================================================
       PANELS
       ========================================================= */

    panel: isLight
      ? `
        border-[#E1E6E1]
        bg-white/88
        shadow-[0_18px_55px_rgba(15,30,20,.09)]
      `
      : `
        border-white/10
        bg-[#090D0A]/82
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      `,

    panelLabel: isLight
      ? 'text-[#68736C]'
      : 'text-white/60',

    panelValue: isLight
      ? 'text-[#202720]'
      : 'text-white',

    panelMuted: isLight
      ? 'text-[#7A8580]'
      : 'text-white/65',

    panelDivider: isLight
      ? 'bg-[#E7EBE7]'
      : 'bg-white/10',

    active: isLight
      ? 'text-[#55765C]'
      : 'text-[#86A98C]',

    technologyText: isLight
      ? 'text-[#99783D]'
      : 'text-[#C6A15B]',
  };

  return (
    <div className={`container relative mx-auto`}>
      <div className="relative h-[560px] sm:h-[600px] lg:h-[650px]">

        {/* =====================================================
            AMBIENT ECOSYSTEM GLOW
        ===================================================== */}

        <div
          className={`ecosystem-atmosphere absolute left-1/2 top-1/2
            h-[300px] w-[300px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            blur-[80px]
            sm:h-[420px] sm:w-[420px]
            sm:blur-[110px]
            ${theme.atmosphere}`}
        />

        {/* Secondary ambient glow */}

        <div
          className={`ecosystem-atmosphere-delay absolute left-1/2 top-1/2
            h-[180px] w-[180px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#6B8F71]/10
            blur-[70px]
            sm:h-[260px] sm:w-[260px]`}
        />

        {/* =====================================================
            PRIMARY ORBIT
        ===================================================== */}

        <div
          className={`ecosystem-orbit-primary absolute left-1/2 top-1/2
            h-[330px] w-[330px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border
            ${theme.orbitPrimary}
            sm:h-[520px] sm:w-[520px]`}
        />

        {/* =====================================================
            SECONDARY ORBIT
        ===================================================== */}

        <div
          className={`ecosystem-orbit-secondary absolute left-1/2 top-1/2
            h-[270px] w-[380px]
            -translate-x-1/2 -translate-y-1/2
            rotate-[18deg]
            rounded-[50%]
            border
            ${theme.orbitSecondary}
            sm:h-[350px] sm:w-[500px]`}
        />

        {/* =====================================================
            THIRD ORBIT
        ===================================================== */}

        <div
          className={`ecosystem-orbit-tertiary absolute left-1/2 top-1/2
            h-[270px] w-[380px]
            -translate-x-1/2 -translate-y-1/2
            -rotate-[18deg]
            rounded-[50%]
            border
            ${theme.orbitTertiary}
            sm:h-[350px] sm:w-[500px]`}
        />

        {/* =====================================================
            SVG CONNECTION NETWORK
        ===================================================== */}

        <svg
          className="pointer-events-none absolute inset-0
            z-[1] h-full w-full"
          viewBox="0 0 650 650"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ===================================================
              PRIMARY CONNECTIONS
          =================================================== */}

          <path
            d="M325 325 C250 250 170 180 90 145"
            fill="none"
            stroke={theme.connectionPrimary}
            strokeOpacity={theme.connectionOpacity}
            strokeWidth="1.4"
            className="ecosystem-line ecosystem-line-1"
          />

          <path
            d="M325 325 C390 245 470 185 565 155"
            fill="none"
            stroke={theme.connectionSecondary}
            strokeOpacity={theme.connectionOpacity}
            strokeWidth="1.4"
            className="ecosystem-line ecosystem-line-2"
          />

          <path
            d="M325 325 C235 340 155 385 85 430"
            fill="none"
            stroke={theme.connectionSecondary}
            strokeOpacity={theme.connectionOpacity}
            strokeWidth="1.4"
            className="ecosystem-line ecosystem-line-3"
          />

          <path
            d="M325 325 C400 350 485 400 570 450"
            fill="none"
            stroke={theme.connectionPrimary}
            strokeOpacity={theme.connectionOpacity}
            strokeWidth="1.4"
            className="ecosystem-line ecosystem-line-4"
          />

          {/* ===================================================
              SECONDARY CONNECTIONS
          =================================================== */}

          <path
            d="M90 145 C190 125 250 170 325 325"
            fill="none"
            stroke={theme.connectionPrimary}
            strokeOpacity={theme.connectionSoftOpacity}
            strokeWidth="1"
            className="ecosystem-secondary-line"
          />

          <path
            d="M565 155 C470 135 400 190 325 325"
            fill="none"
            stroke={theme.connectionSecondary}
            strokeOpacity={theme.connectionSoftOpacity}
            strokeWidth="1"
            className="ecosystem-secondary-line"
          />

          <path
            d="M85 430 C180 460 250 420 325 325"
            fill="none"
            stroke={theme.connectionSecondary}
            strokeOpacity={theme.connectionSoftOpacity}
            strokeWidth="1"
            className="ecosystem-secondary-line"
          />

          <path
            d="M570 450 C480 475 400 420 325 325"
            fill="none"
            stroke={theme.connectionPrimary}
            strokeOpacity={theme.connectionSoftOpacity}
            strokeWidth="1"
            className="ecosystem-secondary-line"
          />

          {/* ===================================================
              ANIMATED ENERGY PARTICLES
          =================================================== */}

          <circle
            r="3"
            fill={theme.connectionPrimary}
            className="ecosystem-particle particle-1"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M325 325 C250 250 170 180 90 145"
            />
          </circle>

          <circle
            r="3"
            fill={theme.connectionSecondary}
            className="ecosystem-particle particle-2"
          >
            <animateMotion
              dur="4.8s"
              repeatCount="indefinite"
              path="M325 325 C390 245 470 185 565 155"
            />
          </circle>

          <circle
            r="3"
            fill={theme.connectionSecondary}
            className="ecosystem-particle particle-3"
          >
            <animateMotion
              dur="5.2s"
              repeatCount="indefinite"
              path="M325 325 C235 340 155 385 85 430"
            />
          </circle>

          <circle
            r="3"
            fill={theme.connectionPrimary}
            className="ecosystem-particle particle-4"
          >
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M325 325 C400 350 485 400 570 450"
            />
          </circle>

          {/* ===================================================
              PARTNER NODES
          =================================================== */}

          <g>
            {/* Top left */}

            <circle
              cx="90"
              cy="145"
              r="5"
              fill={theme.connectionPrimary}
              className="ecosystem-node"
            />

            <circle
              cx="90"
              cy="145"
              r="11"
              fill="none"
              stroke={theme.connectionPrimary}
              strokeOpacity=".30"
              className="ecosystem-node-ring"
            />

            {/* Top right */}

            <circle
              cx="565"
              cy="155"
              r="5"
              fill={theme.connectionSecondary}
              className="ecosystem-node"
            />

            <circle
              cx="565"
              cy="155"
              r="11"
              fill="none"
              stroke={theme.connectionSecondary}
              strokeOpacity=".30"
              className="ecosystem-node-ring"
            />

            {/* Bottom left */}

            <circle
              cx="85"
              cy="430"
              r="5"
              fill={theme.connectionSecondary}
              className="ecosystem-node"
            />

            <circle
              cx="85"
              cy="430"
              r="11"
              fill="none"
              stroke={theme.connectionSecondary}
              strokeOpacity=".30"
              className="ecosystem-node-ring"
            />

            {/* Bottom right */}

            <circle
              cx="570"
              cy="450"
              r="5"
              fill={theme.connectionPrimary}
              className="ecosystem-node"
            />

            <circle
              cx="570"
              cy="450"
              r="11"
              fill="none"
              stroke={theme.connectionPrimary}
              strokeOpacity=".30"
              className="ecosystem-node-ring"
            />
          </g>

          {/* ===================================================
              INNER RING
          =================================================== */}

          <circle
            cx="325"
            cy="325"
            r="105"
            fill="none"
            stroke={theme.connectionPrimary}
            strokeOpacity=".16"
            strokeWidth="1"
            strokeDasharray="3 8"
            className="ecosystem-inner-ring"
          />

          <circle
            cx="325"
            cy="325"
            r="125"
            fill="none"
            stroke={theme.connectionSecondary}
            strokeOpacity=".08"
            strokeWidth="1"
            strokeDasharray="2 14"
            className="ecosystem-inner-ring-reverse"
          />
        </svg>

        {/* =====================================================
            CENTRAL ECOSYSTEM HUB
        ===================================================== */}

        <div
          className={`network-pulse absolute left-1/2 top-1/2
            z-10 flex h-28 w-32
            -translate-x-1/2 -translate-y-1/2
            items-center justify-center
            rounded-full border
            backdrop-blur-xl
            ${theme.hub}
            sm:h-32 sm:w-36`}
        >
          {/* Outer glow */}

          <div className="hub-glow absolute inset-[-18px] rounded-full" />

          {/* Inner ring */}

          <div
            className={`absolute h-20 w-20 rounded-full border
              ${theme.hubRing}
              sm:h-24 sm:w-24`}
          />

          {/* Inner rotating ring */}

          <div
            className="hub-inner-ring absolute h-[88px] w-[88px]
              rounded-full border border-dashed
              border-[#C6A15B]/20
              sm:h-[105px] sm:w-[105px]"
          />

          <div className="relative z-10 text-center">
            <div
              className={`font-display text-[13px] font-semibold
                tracking-[.14em]
                sm:text-[15px] sm:tracking-[.16em]
                ${theme.hubName}`}
            >
              ARVENTA
            </div>

            <div
              className={`mt-1 text-[8px] uppercase
                tracking-[.22em]
                sm:text-[9px] sm:tracking-[.28em]
                ${theme.hubLetter}`}
            >
              ECOSYSTEM
            </div>

            <div
              className={`mt-2 text-[8px] uppercase
                tracking-[.12em]
                sm:text-[9px] sm:tracking-[.16em]
                ${theme.hubSub}`}
            >
              Partner Network
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGY PARTNER CARD
            TOP LEFT
        ===================================================== */}

        <div
          className={`ecosystem-card ecosystem-float-1
            absolute left-2 top-3
            z-20 w-[145px]
            overflow-hidden rounded-xl border
            p-3 backdrop-blur-xl
            sm:left-0 sm:top-14 sm:w-48 sm:p-5
            ${theme.panel}`}
        >
          {/* Card glow */}

          <div className="card-glow absolute -right-8 -top-8 h-20 w-20
            rounded-full bg-[#C6A15B]/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span
                className={`node-live h-2 w-2 rounded-full
                  sm:h-2.5 sm:w-2.5
                  ${theme.nodeDot}`}
              />

              <span
                className={`text-[8px] uppercase
                  tracking-[.12em]
                  sm:text-[10px] sm:tracking-[.16em]
                  ${theme.panelLabel}`}
              >
                Partner
              </span>
            </div>

            <div
              className={`mt-2 text-sm font-medium
                sm:mt-3 sm:text-base
                ${theme.panelValue}`}
            >
              Technology
            </div>

            <div
              className={`mt-1 text-[10px] leading-relaxed
                sm:text-xs
                ${theme.panelMuted}`}
            >
              Platform &amp; integration
            </div>

            <div
              className={`mt-3 h-px sm:mt-4
                ${theme.panelDivider}`}
            />

            <div
              className="mt-2 flex flex-col gap-1
                sm:mt-3 sm:flex-row sm:justify-between"
            >
              <span
                className={`text-[8px] uppercase
                  tracking-wider sm:text-[10px]
                  ${theme.panelMuted}`}
              >
                Status
              </span>

              <span
                className={`text-[8px] uppercase
                  tracking-wider sm:text-[10px]
                  ${theme.technologyText}`}
              >
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            STRATEGIC PARTNER CARD
            TOP RIGHT
        ===================================================== */}

        <div
          className={`ecosystem-card ecosystem-float-2
            absolute right-2 top-3
            z-20 w-[150px]
            overflow-hidden rounded-xl border
            p-3 backdrop-blur-xl
            sm:right-0 sm:top-20 sm:w-52 sm:p-5
            ${theme.panel}`}
        >
          <div className="card-glow absolute -left-10 -top-10
            h-24 w-24 rounded-full
            bg-[#6B8F71]/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[8px] uppercase
                  tracking-[.13em]
                  sm:text-[10px] sm:tracking-[.18em]
                  ${theme.panelLabel}`}
              >
                Strategic
              </span>

              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span
                  className="absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-[#6B8F71] opacity-40"
                />

                <span
                  className={`relative inline-flex
                    h-2.5 w-2.5 rounded-full
                    sm:h-3 sm:w-3
                    ${theme.nodeDot}`}
                />
              </span>
            </div>

            <div
              className={`mt-2 text-sm font-medium
                sm:mt-3 sm:text-base
                ${theme.panelValue}`}
            >
              Strategic Partners
            </div>

            <div
              className={`mt-1 text-[10px] leading-relaxed
                sm:text-xs
                ${theme.panelMuted}`}
            >
              Shared capabilities &amp; opportunities
            </div>

            <div
              className={`mt-3 h-px sm:mt-4
                ${theme.panelDivider}`}
            />

            <div className="mt-2 flex justify-between sm:mt-3">
              <span
                className={`text-[8px] uppercase
                  tracking-wider sm:text-[10px]
                  ${theme.panelMuted}`}
              >
                Active
              </span>

              <span
                className={`text-[10px] font-medium
                  sm:text-xs
                  ${theme.active}`}
              >
                24
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            PARTNER ECOSYSTEM CARD
            BOTTOM LEFT
        ===================================================== */}

        <div
          className={`ecosystem-card ecosystem-float-3
            absolute bottom-4 left-2
            z-20 overflow-hidden
            rounded-lg border
            px-3 py-2.5 backdrop-blur-xl
            sm:bottom-12 sm:left-0
            sm:px-5 sm:py-4
            ${theme.panel}`}
        >
          <div className="card-glow absolute -right-8 -bottom-8
            h-20 w-20 rounded-full
            bg-[#6B8F71]/10 blur-2xl" />

          <div className="relative">
            <div
              className={`text-[8px] uppercase
                tracking-[.16em]
                sm:text-[10px] sm:tracking-[.2em]
                ${theme.panelMuted}`}
            >
              Partner Ecosystem
            </div>

            <div
              className={`mt-1 text-xs
                sm:text-base
                ${theme.panelValue}`}
            >
              Built to grow together.
            </div>
          </div>
        </div>

        {/* =====================================================
            ECOSYSTEM STRENGTH CARD
            BOTTOM RIGHT
        ===================================================== */}

        <div
          className={`ecosystem-card ecosystem-float-4
            absolute bottom-3 right-2
            z-20 w-[150px]
            overflow-hidden rounded-xl border
            p-3 backdrop-blur-xl
            sm:bottom-10 sm:right-0 sm:w-48 sm:p-5
            ${theme.panel}`}
        >
          <div
            className="card-glow absolute -right-10 -bottom-10
              h-24 w-24 rounded-full
              bg-[#C6A15B]/10 blur-2xl"
          />

          <div className="relative">
            <div
              className={`text-[8px] uppercase
                tracking-[.14em]
                sm:text-[10px] sm:tracking-[.18em]
                ${theme.panelLabel}`}
            >
              Ecosystem
            </div>

            <div
              className={`mt-1 text-sm font-medium
                sm:mt-2 sm:text-base
                ${theme.panelValue}`}
            >
              Growing
            </div>

            {/* Progress */}

            <div
              className={`mt-3 h-1.5 overflow-hidden rounded-full
                sm:mt-4
                ${isLight ? 'bg-slate-100' : 'bg-white/10'}`}
            >
              <div className="ecosystem-progress h-full w-[78%]
                rounded-full bg-[#C6A15B]" />
            </div>

            <div className="mt-2 flex justify-between gap-2">
              <span
                className={`text-[8px] leading-relaxed
                  sm:text-[9px]
                  ${theme.panelMuted}`}
              >
                Ecosystem strength
              </span>

              <span
                className={`text-[9px] font-medium
                  sm:text-[10px]
                  ${theme.active}`}
              >
                78%
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Animations;

