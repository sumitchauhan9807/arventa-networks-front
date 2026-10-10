import '@/app/styles/animations.css';

import { useSelector } from 'react-redux';

const ComplianceAnimation = ({ bright = false }) => {
  const mode = useSelector((state) => state.theme.theme);

  const isLight = mode === 'light';

  const theme = {
    gold: isLight ? '#A87920' : '#D9A83E',
    goldBright: '#F5CC70',

    coreFill: isLight ? 'rgba(255,255,255,.94)' : 'rgba(8,10,10,.96)',

    coreBorder: isLight ? 'rgba(168,121,32,.55)' : 'rgba(217,168,62,.55)',

    line: isLight ? 'rgba(168,121,32,.26)' : 'rgba(217,168,62,.18)',

    lineSoft: isLight ? 'rgba(168,121,32,.12)' : 'rgba(217,168,62,.08)',

    node: isLight ? 'text-[#292929]' : 'text-white',
    nodeMuted: isLight ? 'text-[#777]' : 'text-white/70',

    nodeBg: isLight ? 'bg-white/90' : 'bg-[#080a0a]/90',

    nodeBorder: isLight ? 'border-[#D9D9D2]' : 'border-white/10',

    panel: isLight ? 'border-[#E2E2DC] bg-white/90 shadow-[0_15px_50px_rgba(0,0,0,.08)]' : 'border-white/10 bg-[#080a0a]/90 shadow-2xl',

    panelLabel: isLight ? 'text-[#555]' : 'text-white/75',
    panelValue: isLight ? 'text-[#222]' : 'text-white',
    panelMuted: isLight ? 'text-[#888]' : 'text-white/65',

    divider: isLight ? 'divide-[#E5E5E0]' : 'divide-white/10',

    progressBg: isLight ? 'bg-[#ECECE7]' : 'bg-white/5',
  };

  return (
    <div className="container mx-auto relative h-[560px] overflow-hidden sm:h-[650px] lg:h-[700px]">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="absolute left-1/2 top-1/2
        h-[380px] w-[380px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-[#D9A83E]/10
        blur-[90px]
        sm:h-[450px] sm:w-[450px]"
      />

      {/* Subtle grid */}

      <div className="compliance-grid pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0
          bg-[linear-gradient(rgba(217,168,62,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(217,168,62,.055)_1px,transparent_1px)]
          bg-[size:38px_38px]
          sm:bg-[size:45px_45px]"
        />
      </div>

      {/* Optional bright atmosphere */}

      {bright && <ComplianceAura isLight={isLight} />}

      {/* =========================================================
          ORBIT RINGS
      ========================================================= */}

      <div
        className="absolute left-1/2 top-1/2
        h-[360px] w-[360px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        border border-[#D9A83E]/10
        sm:h-[470px] sm:w-[470px]"
      />

      <div
        className="compliance-orbit absolute left-1/2 top-1/2
        h-[400px] w-[190px]
        -translate-x-1/2 -translate-y-1/2
        rounded-[50%]
        border border-[#D9A83E]/20
        sm:h-[500px] sm:w-[250px]"
      />

      <div
        className="compliance-orbit-2 absolute left-1/2 top-1/2
        h-[400px] w-[190px]
        -translate-x-1/2 -translate-y-1/2
        rotate-90 rounded-[50%]
        border border-[#D9A83E]/10
        sm:h-[500px] sm:w-[250px]"
      />

      {/* =========================================================
          NETWORK / COMPLIANCE SVG
      ========================================================= */}

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 700" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Main compliance field */}

        <circle cx="400" cy="350" r="205" fill={theme.coreFill} stroke={theme.gold} strokeOpacity=".22" />

        <circle cx="400" cy="350" r="178" stroke={theme.gold} strokeOpacity=".10" />

        <circle cx="400" cy="350" r="145" stroke={theme.gold} strokeOpacity=".07" strokeDasharray="3 8" />

        {/* Crosshair */}

        <path d="M400 145V555" stroke={theme.gold} strokeOpacity=".045" />

        <path d="M195 350H605" stroke={theme.gold} strokeOpacity=".045" />

        {/* =====================================================
            KYC CONNECTION
        ===================================================== */}

        <path id="compliance-kyc" d="M235 245 Q315 275 400 350" stroke={theme.gold} strokeOpacity=".34" strokeWidth="1.5" />

        {/* =====================================================
            KYB CONNECTION
        ===================================================== */}

        <path id="compliance-kyb" d="M565 245 Q485 275 400 350" stroke={theme.gold} strokeOpacity=".30" strokeWidth="1.5" />

        {/* =====================================================
            AML CONNECTION
        ===================================================== */}

        <path id="compliance-aml" d="M225 465 Q315 420 400 350" stroke={theme.gold} strokeOpacity=".25" strokeWidth="1.5" />

        {/* =====================================================
            REGULATORY CONNECTION
        ===================================================== */}

        <path id="compliance-regulatory" d="M575 465 Q485 420 400 350" stroke={theme.gold} strokeOpacity=".34" strokeWidth="1.5" />

        {/* Secondary lines */}

        <path d="M275 190 Q345 250 400 350" stroke={theme.gold} strokeOpacity=".08" />

        <path d="M525 190 Q455 250 400 350" stroke={theme.gold} strokeOpacity=".08" />

        <path d="M280 520 Q350 430 400 350" stroke={theme.gold} strokeOpacity=".07" />

        <path d="M520 520 Q450 430 400 350" stroke={theme.gold} strokeOpacity=".07" />

        {/* =====================================================
            ANIMATED VERIFICATION DATA
        ===================================================== */}

        {/* KYC */}

        <circle r="4" fill={theme.goldBright}>
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M235 245 Q315 275 400 350" />
        </circle>

        {/* KYB */}

        <circle r="3" fill={theme.gold}>
          <animateMotion dur="3.2s" begin=".7s" repeatCount="indefinite" path="M565 245 Q485 275 400 350" />
        </circle>

        {/* AML */}

        <circle r="3.5" fill={theme.goldBright}>
          <animateMotion dur="3.5s" begin="1.2s" repeatCount="indefinite" path="M225 465 Q315 420 400 350" />
        </circle>

        {/* Regulatory */}

        <circle r="4" fill={theme.gold}>
          <animateMotion dur="3s" begin=".4s" repeatCount="indefinite" path="M575 465 Q485 420 400 350" />
        </circle>

        {/* Reverse verification */}

        <circle r="2.5" fill={isLight ? '#666666' : '#FFFFFF'} opacity=".65">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M400 350 Q485 420 575 465" />
        </circle>
      </svg>

      {/* =========================================================
          CENTRAL COMPLIANCE CORE
      ========================================================= */}

      <div
        className="absolute left-1/2 top-1/2
        flex h-32 w-32
        -translate-x-1/2 -translate-y-1/2
        items-center justify-center
        sm:h-40 sm:w-40"
      >
        {/* Pulse */}

        <div
          className="absolute h-32 w-32
          animate-ping rounded-full
          border border-[#D9A83E]/20
          sm:h-40 sm:w-40"
          style={{ animationDuration: '3.5s' }}
        />

        {/* Outer ring */}

        <div
          className="absolute h-28 w-28
          rounded-full
          border border-[#D9A83E]/25
          bg-[#D9A83E]/5
          sm:h-32 sm:w-32"
        />

        {/* Shield Core */}

        <div
          className={`relative flex h-[88px] w-[88px]
          flex-col items-center justify-center
          rounded-2xl border
          ${theme.nodeBorder}
          ${theme.nodeBg}
          shadow-[0_0_50px_rgba(217,168,62,.12)]
          transition-all duration-300 ease-out
          hover:scale-105 hover:border-[#D9A83E]/60
          hover:shadow-[0_0_32px_rgba(217,168,62,.28)]
          sm:h-24 sm:w-24`}
        >
          {/* Shield */}

          <svg viewBox="0 0 32 36" className="h-7 w-7 sm:h-8 sm:w-8" fill="none">
            <path d="M16 2L28 7V16C28 24 23 30 16 34C9 30 4 24 4 16V7L16 2Z" stroke={theme.gold} strokeWidth="1.7" />

            <path d="M10 18L14 22L22 13" stroke={theme.goldBright} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div
            className={`mt-1 text-[10px]
            font-bold tracking-[.20em]
            sm:text-[11px]
            ${isLight ? 'text-[#A87920]' : 'text-[#D9A83E]'}`}
          >
            VERIFIED
          </div>

          <div
            className={`text-[8px]
            tracking-[.22em]
            sm:text-[9px]
            ${isLight ? 'text-[#777]' : 'text-white/65'}`}
          >
            COMPLIANCE
          </div>

          {/* Status light */}

          <span
            className="absolute -right-1 -top-1
            h-3 w-3 rounded-full
            bg-[#D9A83E]
            shadow-[0_0_20px_#D9A83E]"
          />
        </div>
      </div>

      {/* =========================================================
          MOBILE + DESKTOP COMPLIANCE NODES
      ========================================================= */}

      {/* KYC */}

      <ComplianceNode
        className="
          absolute
          left-[2%] top-[22%]
          sm:left-[17%] sm:top-[29%]
        "
        title="KYC"
        subtitle="Identity Verification"
        status="VERIFIED"
        theme={theme}
        isLight={isLight}
        type="person"
      />

      {/* KYB */}

      <ComplianceNode
        className="
          absolute
          right-[2%] top-[22%]
          sm:right-[14%] sm:top-[29%]
        "
        title="KYB"
        subtitle="Business Verification"
        status="VERIFIED"
        theme={theme}
        isLight={isLight}
        type="company"
      />

      {/* AML */}

      <ComplianceNode
        className="
          absolute
          left-[2%] bottom-[27%]
          sm:left-[16%] sm:bottom-[22%]
        "
        title="AML"
        subtitle="Risk Screening"
        status="CLEAR"
        theme={theme}
        isLight={isLight}
        type="shield"
      />

      {/* REGULATORY */}

      <ComplianceNode
        className="
          absolute
          right-[2%] bottom-[27%]
          sm:right-[12%] sm:bottom-[22%]
        "
        title="REGULATORY"
        subtitle="Positioning"
        status="ALIGNED"
        theme={theme}
        isLight={isLight}
        type="regulator"
      />

      {/* =========================================================
          LIVE COMPLIANCE PANEL
      ========================================================= */}

      <div
      style={{top:"80%"}}
        className={`absolute bottom-3 left-1/2
        w-[calc(100%-24px)] max-w-[290px]
        -translate-x-1/2
        rounded-xl border p-3.5
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[#D9A83E]/50
        hover:shadow-[0_0_28px_rgba(217,168,62,.16)]
        sm:bottom-6 sm:left-auto
        sm:right-0 sm:translate-x-0
        sm:p-4
        ${theme.panel}`}
      >
        {/* Header */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full
              bg-[#D9A83E]
              ${isLight ? 'shadow-[0_0_10px_rgba(217,168,62,.55)]' : 'shadow-[0_0_12px_#D9A83E]'}`}
            />

            <span
              className={`text-[10px]
              font-semibold uppercase
              tracking-wider
              sm:text-[11px]
              ${theme.panelLabel}`}
            >
              Compliance Monitor
            </span>
          </div>

          <span className="text-[9px] font-semibold text-[#A87920] sm:text-[10px]">LIVE</span>
        </div>

        {/* Metrics */}

        <div
          className={`mt-3 grid grid-cols-3
          divide-x ${theme.divider}
          sm:mt-4`}
        >
          <div className="px-2 first:pl-0">
            <div
              className={`text-sm font-semibold sm:text-base
              ${theme.panelValue}`}
            >
              99.8%
            </div>

            <div
              className={`mt-1 text-[9px] sm:text-[10px]
              ${theme.panelMuted}`}
            >
              VERIFIED
            </div>
          </div>

          <div className="px-3">
            <div
              className={`text-sm font-semibold sm:text-base
              ${theme.panelValue}`}
            >
              42
            </div>

            <div
              className={`mt-1 text-[9px] sm:text-[10px]
              ${theme.panelMuted}`}
            >
              JURISDICTIONS
            </div>
          </div>

          <div className="px-3">
            <div
              className="text-xs font-semibold
              text-[#D9A83E] sm:text-sm"
            >
              CLEAR
            </div>

            <div
              className={`mt-1 text-[9px] sm:text-[10px]
              ${theme.panelMuted}`}
            >
              RISK STATUS
            </div>
          </div>
        </div>

        {/* Alignment */}

        <div className="mt-3 sm:mt-4">
          <div className="mb-1 flex justify-between">
            <span
              className={`text-[9px] sm:text-[10px]
              ${theme.panelMuted}`}
            >
              REGULATORY ALIGNMENT
            </span>

            <span
              className={`text-[9px] sm:text-[10px]
              ${theme.panelLabel}`}
            >
              96.4%
            </span>
          </div>

          <div
            className={`h-1 overflow-hidden
            rounded-full
            ${theme.progressBg}`}
          >
            <div
              className="compliance-progress-bar
              h-full rounded-full
              bg-gradient-to-r
              from-[#A87920]
              via-[#D9A83E]
              to-[#F5CC70]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===============================================================
   COMPLIANCE NODE
================================================================ */

const ComplianceNode = ({ className, title, subtitle, status, theme, isLight, type }) => {
  const icons = {
    person: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none">
        <circle cx="12" cy="8" r="3" stroke="#D9A83E" />

        <path d="M5 21C5.8 16.8 8.1 14.5 12 14.5S18.2 16.8 19 21" stroke="#D9A83E" />
      </svg>
    ),

    company: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none">
        <path d="M5 21V5L13 3V21M13 9H19V21" stroke="#D9A83E" />

        <path d="M8 8H10M8 12H10M8 16H10M16 12H17M16 16H17" stroke="#D9A83E" />
      </svg>
    ),

    shield: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none">
        <path d="M12 3L19 6V11C19 16 16.5 19.5 12 21C7.5 19.5 5 16 5 11V6L12 3Z" stroke="#D9A83E" />

        <path d="M8.5 12L11 14.5L15.5 9.5" stroke="#F5CC70" strokeLinecap="round" />
      </svg>
    ),

    regulator: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none">
        <path d="M4 20H20M6 17V9M10 17V9M14 17V9M18 17V9" stroke="#D9A83E" />

        <path d="M3 9L12 4L21 9H3Z" stroke="#D9A83E" />
      </svg>
    ),
  };

  return (
    <div className={className}>
      <div
        className="compliance-node group
        flex items-center gap-2 rounded-xl p-2
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-105
        hover:bg-[#D9A83E]/[0.07]
        hover:shadow-[0_0_24px_rgba(217,168,62,.20)]
        sm:gap-3"
      >
        {/* Icon */}

        <div
          className={`flex
          h-7 w-7 items-center justify-center
          rounded-lg border
          ${theme.nodeBorder}
          ${theme.nodeBg}
          transition-all duration-300
          group-hover:border-[#D9A83E]/60
          group-hover:shadow-[0_0_16px_rgba(217,168,62,.18)]
          sm:h-8 sm:w-8`}
        >
          {icons[type]}
        </div>

        {/* Content */}

        <div>
          <div
            className={`flex items-center gap-1
            text-[11px] font-semibold
            transition-colors duration-300 group-hover:text-[#D9A83E]
            sm:text-sm
            ${theme.node}`}
          >
            {title}

            <span
              className="h-1.5 w-1.5
              rounded-full
              bg-[#D9A83E]
              shadow-[0_0_8px_#D9A83E]"
            />
          </div>

          <div
            className={`mt-0.5
            whitespace-nowrap
            text-[9px]
            transition-colors duration-300 group-hover:text-current
            sm:text-[11px]
            ${theme.nodeMuted}`}
          >
            {subtitle}
          </div>

          <div
            className={`mt-1
            text-[8px] font-semibold
            tracking-[.15em]
            sm:text-[9px]
            ${isLight ? 'text-[#A87920]' : 'text-[#D9A83E]'}`}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===============================================================
   BRIGHT COMPLIANCE AURA
================================================================ */

const ComplianceAura = ({ isLight }) => {
  return (
    <div
      className="pointer-events-none
      absolute inset-0 overflow-hidden"
    >
      {/* Main glow */}

      <div
        className={`absolute left-1/2 top-[12%]
        h-[220px] w-[500px]
        -translate-x-1/2
        rounded-full
        blur-[100px]
        sm:h-[260px] sm:w-[620px]
        ${isLight ? 'bg-[#D9A83E]/8' : 'bg-[#D9A83E]/13'}`}
      />

      {/* Regulatory scan */}

      <div
        className="compliance-scan absolute
        left-1/2 top-[10%]
        h-px w-[380px]
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-[#F5CC70]/50
        to-transparent
        sm:w-[520px]"
      />

      {/* Particles */}

      <span
        className="compliance-particle
        compliance-particle-1
        absolute left-[20%] top-[18%]
        h-1.5 w-1.5 rounded-full
        bg-[#D9A83E]"
      />

      <span
        className="compliance-particle
        compliance-particle-2
        absolute left-[67%] top-[16%]
        h-1 w-1 rounded-full
        bg-[#F5CC70]"
      />

      <span
        className="compliance-particle
        compliance-particle-3
        absolute left-[76%] top-[42%]
        h-1.5 w-1.5 rounded-full
        bg-[#D9A83E]"
      />

      <span
        className="compliance-particle
        compliance-particle-4
        absolute left-[16%] top-[45%]
        h-1 w-1 rounded-full
        bg-[#F5CC70]"
      />

      {/* Data streams */}

      <div
        className={`compliance-stream
        stream-1 absolute left-[20%] top-[10%]
        h-[140px] w-px
        ${isLight ? 'bg-gradient-to-b from-transparent via-[#D9A83E]/25 to-transparent' : 'bg-gradient-to-b from-transparent via-[#D9A83E]/20 to-transparent'}`}
      />

      <div
        className={`compliance-stream
        stream-2 absolute left-[38%] top-[7%]
        h-[180px] w-px
        ${isLight ? 'bg-gradient-to-b from-transparent via-[#A87920]/18 to-transparent' : 'bg-gradient-to-b from-transparent via-[#F5CC70]/15 to-transparent'}`}
      />

      <div
        className={`compliance-stream
        stream-3 absolute right-[34%] top-[11%]
        h-[150px] w-px
        ${isLight ? 'bg-gradient-to-b from-transparent via-[#D9A83E]/22 to-transparent' : 'bg-gradient-to-b from-transparent via-[#D9A83E]/18 to-transparent'}`}
      />

      <div
        className={`compliance-stream
        stream-4 absolute right-[20%] top-[6%]
        h-[170px] w-px
        ${isLight ? 'bg-gradient-to-b from-transparent via-[#A87920]/18 to-transparent' : 'bg-gradient-to-b from-transparent via-[#F5CC70]/14 to-transparent'}`}
      />
    </div>
  );
};

export default ComplianceAnimation;
