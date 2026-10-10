
import '@/app/styles/pbx-animation.css';
import { useSelector } from 'react-redux';

const PBXAnimation = () => {
  const mode = useSelector((state) => state.theme.theme);
  const isLight = mode === 'light';

  const theme = {
    text: isLight ? 'text-[#171717]' : 'text-white',
    muted: isLight ? 'text-[#777]' : 'text-white/55',

    core: isLight
      ? 'bg-white/90 border-[#D9A83E]/50 shadow-[0_15px_70px_rgba(0,0,0,.12)]'
      : 'bg-[#090b0b]/95 border-[#D9A83E]/50 shadow-[0_0_80px_rgba(217,168,62,.18)]',

    coreText: isLight ? 'text-[#A87920]' : 'text-[#F5CC70]',

    node: isLight
      ? 'bg-white/90 border-[#DDDCD5] shadow-[0_10px_30px_rgba(0,0,0,.08)]'
      : 'bg-[#0B0D0D]/90 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.25)]',
  };

  const extensions = [
    {
      id: '101',
      name: 'Reception',
      position: 'left-[3%] top-[28%]',
      delay: '0s',
    },
    {
      id: '102',
      name: 'Sales',
      position: 'left-[10%] bottom-[20%]',
      delay: '1.2s',
    },
    {
      id: '201',
      name: 'Support',
      position: 'right-[10%] top-[20%]',
      delay: '0.6s',
    },
    {
      id: '202',
      name: 'Management',
      position: 'right-[3%] bottom-[27%]',
      delay: '1.8s',
    },
  ];

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[1000px] overflow-hidden bg-transparent">

      {/* =====================================================
          SUBTLE DATA SCAN
      ===================================================== */}

      <div className="pbx-scan pointer-events-none absolute left-0 top-1/2 h-px w-full" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="absolute left-1/2 top-7 z-30 -translate-x-1/2 text-center">
        <div
          className={`mb-2 text-[9px] font-semibold uppercase tracking-[0.35em] ${theme.coreText}`}
        >
          Intelligent Communications
        </div>

        <div className={`text-xl font-semibold ${theme.text}`}>
          Enterprise PBX
        </div>
      </div>

      {/* =====================================================
          CONNECTION LINES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Reception → PBX */}
        <Connection
          className="left-[18%] top-[34%] w-[28%] rotate-[12deg]"
          delay="0s"
        />

        {/* Sales → PBX */}
        <Connection
          className="left-[25%] bottom-[31%] w-[23%] rotate-[-18deg]"
          delay="1.2s"
        />

        {/* PBX → Support */}
        <Connection
          className="right-[18%] top-[29%] w-[28%] rotate-[-12deg]"
          delay="0.6s"
          reverse
        />

        {/* PBX → Management */}
        <Connection
          className="right-[25%] bottom-[33%] w-[23%] rotate-[18deg]"
          delay="1.8s"
          reverse
        />

      </div>

      {/* =====================================================
          INCOMING CALL
      ===================================================== */}

      <div className="absolute left-[3%] top-[11%] z-10">
        <CallBadge
          label="INCOMING"
          number="+1 800 247 901"
          isLight={isLight}
        />
      </div>

      {/* =====================================================
          OUTGOING CALL
      ===================================================== */}

      <div className="absolute right-[3%] top-[11%] z-10">
        <CallBadge
          label="OUTGOING"
          number="+44 20 7946 221"
          isLight={isLight}
        />
      </div>

      {/* =====================================================
          EXTENSIONS
      ===================================================== */}

      {extensions.map((extension) => (
        <ExtensionNode
          key={extension.id}
          extension={extension}
          theme={theme}
          isLight={isLight}
        />
      ))}

      {/* =====================================================
          PBX CORE
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

        {/* Outer pulse */}

        <div className="pbx-core-pulse pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/20" />

        <div className="pbx-core-pulse-2 pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/15" />

        {/* PBX box */}

        <div
          className={`relative flex h-44 w-44 flex-col items-center justify-center rounded-[2rem] border backdrop-blur-xl ${theme.core}`}
        >

          {/* System status */}

          <div className="absolute left-5 right-5 top-4 flex items-center justify-between">

            <div className="flex items-center gap-1.5">
              <span className="pbx-status-dot h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />

              <span
                className={`text-[7px] font-semibold uppercase tracking-[0.2em] ${theme.muted}`}
              >
                System Online
              </span>
            </div>

            <span className={`text-[7px] ${theme.coreText}`}>
              LIVE
            </span>

          </div>

          {/* Phone / PBX icon */}

          <div className="relative mb-3 mt-3">

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D9A83E]/40 bg-[#D9A83E]/10 ${theme.coreText}`}
            >
              <PhoneIcon />
            </div>

            <div className="pbx-signal-ring pointer-events-none absolute inset-[-9px] rounded-2xl border border-[#D9A83E]/20" />

            <div className="pbx-signal-ring-2 pointer-events-none absolute inset-[-17px] rounded-2xl border border-[#D9A83E]/10" />

          </div>

          {/* PBX text */}

          <div
            className={`text-2xl font-bold tracking-[0.18em] ${theme.coreText}`}
          >
            PBX
          </div>

          <div
            className={`mt-1 text-[7px] uppercase tracking-[0.3em] ${theme.muted}`}
          >
            Call Control
          </div>

          {/* Ports */}

          <div className="absolute bottom-2 flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <span
                key={item}
                className={`h-1.5 w-1.5 rounded-full ${
                  item <= 5
                    ? 'bg-[#D9A83E] shadow-[0_0_8px_#D9A83E]'
                    : 'bg-white/15'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* =====================================================
          PROTOCOL LABEL
      ===================================================== */}

      <div
        className={`absolute left-1/2 top-[43%] z-10 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.35em] ${theme.muted}`}
      >
        SIP • VOIP • EXTENSIONS • ROUTING
      </div>

      {/* =====================================================
          LIVE CALL PANEL
      ===================================================== */}

      <div
        className={`absolute bottom-5 left-1/2 z-30 w-[290px] -translate-x-1/2 rounded-xl border p-3 backdrop-blur-xl ${
          isLight
            ? 'border-[#E2E2DC] bg-white/90'
            : 'border-white/10 bg-[#080a0a]/90'
        }`}
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="pbx-status-dot h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />

            <span
              className={`text-[8px] font-semibold uppercase tracking-[0.2em] ${theme.muted}`}
            >
              Active Call
            </span>
          </div>

          <span className={`text-[8px] ${theme.coreText}`}>
            00:42
          </span>

        </div>

        <div className="mt-3 flex items-center gap-3">

          {/* Caller icon */}

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9A83E]/10 text-[#D9A83E]">
            <PhoneIcon small />
          </div>

          {/* Call details */}

          <div>
            <div className={`text-[10px] font-semibold ${theme.text}`}>
              +1 800 247 901
            </div>

            <div className={`mt-0.5 text-[8px] ${theme.muted}`}>
              Routed → Extension 101
            </div>
          </div>

          {/* Voice waveform */}

          <div className="ml-auto flex h-6 items-center gap-[2px]">

            {[3, 8, 5, 11, 6, 9, 4, 12, 7, 5].map(
              (height, index) => (
                <span
                  key={index}
                  className="pbx-wave w-[2px] rounded-full bg-[#D9A83E]"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${index * 0.08}s`,
                  }}
                />
              ),
            )}

          </div>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   CONNECTION
========================================================= */

const Connection = ({
  className,
  delay,
  reverse = false,
}) => {
  return (
    <div
      className={`absolute h-px bg-[#D9A83E]/20 ${className}`}
    >

      {/* Base line */}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9A83E]/40 to-transparent" />

      {/* Moving packet */}

      <div
        className={`pbx-packet absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D9A83E] shadow-[0_0_14px_#D9A83E] ${
          reverse ? 'pbx-packet-reverse' : ''
        }`}
        style={{
          animationDelay: delay,
        }}
      />

      {/* Moving light */}

      <div
        className="pbx-line-glow absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-[#F5CC70] to-transparent"
        style={{
          animationDelay: delay,
        }}
      />

    </div>
  );
};


/* =========================================================
   EXTENSION NODE
========================================================= */

const ExtensionNode = ({
  extension,
  theme,
  isLight,
}) => {
  return (
    <div
      className={`absolute z-10 ${extension.position}`}
      style={{
        animationDelay: extension.delay,
      }}
    >

      <div
        className={`pbx-extension flex items-center gap-2 rounded-xl border px-3 py-2 backdrop-blur-md ${theme.node}`}
      >

        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D9A83E]/10 text-[#D9A83E]">
          <PhoneIcon small />
        </div>

        <div>

          <div className={`text-[9px] font-semibold ${theme.text}`}>
            EXT {extension.id}
          </div>

          <div className={`mt-0.5 text-[7px] ${theme.muted}`}>
            {extension.name}
          </div>

        </div>

        <span
          className={`ml-2 h-1.5 w-1.5 rounded-full bg-[#D9A83E] ${
            isLight
              ? 'shadow-[0_0_7px_rgba(217,168,62,.5)]'
              : 'shadow-[0_0_10px_#D9A83E]'
          }`}
        />

      </div>
    </div>
  );
};


/* =========================================================
   CALL BADGE
========================================================= */

const CallBadge = ({
  label,
  number,
  isLight,
}) => {
  return (
    <div
      className={`pbx-call-badge rounded-lg border px-3 py-2 backdrop-blur-md ${
        isLight
          ? 'border-[#E2E2DC] bg-white/80'
          : 'border-white/10 bg-white/[0.03]'
      }`}
    >

      <div className="flex items-center gap-1.5">

        <span className="pbx-status-dot h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />

        <span className="text-[7px] font-semibold tracking-[0.2em] text-[#D9A83E]">
          {label}
        </span>

      </div>

      <div
        className={`mt-1 text-[8px] ${
          isLight ? 'text-[#555]' : 'text-white/60'
        }`}
      >
        {number}
      </div>

    </div>
  );
};


/* =========================================================
   PHONE ICON
========================================================= */

const PhoneIcon = ({ small = false }) => {
  const size = small ? 14 : 25;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

export default PBXAnimation;

