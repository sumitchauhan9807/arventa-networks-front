import React from 'react';
import { useSelector } from 'react-redux';

const VoipOperationsHero = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const styles = {
    section: isDark
      ? 'bg-[#070909] text-white'
      : 'bg-[#F7F5F0] text-[#151716]',

    grid: isDark
      ? 'bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]'
      : 'bg-[linear-gradient(rgba(21,23,22,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(21,23,22,0.035)_1px,transparent_1px)]',

    heading: isDark ? 'text-white' : 'text-[#151716]',
    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    eyebrow: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.07] text-[#A87918]',

    primaryButton: isDark
      ? 'bg-[#D9A83E] text-[#11120F] hover:bg-[#F0C867]'
      : 'bg-[#151716] text-white hover:bg-[#2A2C2A]',

    secondaryButton: isDark
      ? 'border-white/10 bg-white/[0.035] text-white hover:border-[#D9A83E]/30 hover:bg-white/[0.06]'
      : 'border-[#151716]/10 bg-white/60 text-[#151716] hover:border-[#B88A28]/30 hover:bg-white/90',

    card: isDark
      ? 'border-white/10 bg-[#0c0f0e]/80'
      : 'border-[#151716]/10 bg-white/70',

    muted: isDark ? 'text-white/35' : 'text-[#151716]/40',
    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',
    green: isDark ? 'text-emerald-400' : 'text-emerald-600',
    border: isDark ? 'border-white/10' : 'border-[#151716]/10',
  };

  const team = [
    {
      initials: 'AM',
      name: 'Alex Morgan',
      role: 'Network Engineer',
      status: 'Online',
    },
    {
      initials: 'SK',
      name: 'Sarah Kim',
      role: 'Voice Specialist',
      status: 'Online',
    },
    {
      initials: 'DR',
      name: 'Daniel Reed',
      role: 'Infrastructure',
      status: 'Monitoring',
    },
  ];

  const routes = [
    {
      id: 'ops-route-1',
      d: 'M180 340 Q350 150 500 275',
      duration: '3s',
      delay: '0s',
    },
    {
      id: 'ops-route-2',
      d: 'M500 275 Q680 110 850 250',
      duration: '4s',
      delay: '0.8s',
    },
    {
      id: 'ops-route-3',
      d: 'M500 275 Q650 340 820 430',
      duration: '3.5s',
      delay: '1.4s',
    },
    {
      id: 'ops-route-4',
      d: 'M850 250 Q920 320 1020 360',
      duration: '2.8s',
      delay: '1.8s',
    },
    {
      id: 'ops-route-5',
      d: 'M300 440 Q400 330 500 275',
      duration: '3.2s',
      delay: '2.2s',
    },
  ];

  const nodes = [
    { x: 180, y: 340, label: 'US' },
    { x: 500, y: 275, label: 'EU' },
    { x: 850, y: 250, label: 'AS' },
    { x: 820, y: 430, label: 'AU' },
    { x: 300, y: 440, label: 'LATAM' },
    { x: 1020, y: 360, label: 'IN' },
  ];

  return (
    <section
      className={`relative min-h-[900px] overflow-hidden ${styles.section}`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D9A83E]/[0.055] blur-[140px]" />

      <div
        className={`pointer-events-none absolute inset-0 bg-[size:55px_55px] opacity-60 ${styles.grid}`}
      />

      {/* Radial glow */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_35%,rgba(217,168,62,0.08),transparent_38%)]'
            : 'bg-[radial-gradient(circle_at_50%_35%,rgba(217,168,62,0.10),transparent_38%)]'
        }`}
      />

      {/* World network */}
      <div className="pointer-events-none absolute inset-x-0 top-[120px] flex justify-center">
        <div className="w-[1500px] max-w-none">
          <svg
            viewBox="0 0 1200 600"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="opsGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="opsSoftGlow">
                <feGaussianBlur stdDeviation="18" />
              </filter>

              {routes.map((route) => (
                <path
                  key={route.id}
                  id={route.id}
                  d={route.d}
                />
              ))}
            </defs>

            {/* Large network halo */}
            <ellipse
              cx="600"
              cy="310"
              rx="480"
              ry="210"
              stroke={isDark ? 'rgba(217,168,62,0.08)' : 'rgba(184,138,40,0.10)'}
              strokeWidth="1"
              strokeDasharray="3 12"
            />

            <ellipse
              cx="600"
              cy="310"
              rx="350"
              ry="145"
              stroke={isDark ? 'rgba(217,168,62,0.06)' : 'rgba(184,138,40,0.08)'}
              strokeWidth="1"
              strokeDasharray="2 14"
            />

            {/* Abstract continents */}
            <g
              className={isDark ? 'text-white/[0.055]' : 'text-[#151716]/[0.06]'}
              fill="currentColor"
            >
              {/* North America */}
              <path d="M130 180L170 145L235 150L270 185L250 225L205 240L175 215L135 225L105 205Z" />

              {/* South America */}
              <path d="M275 280L315 305L325 355L305 410L280 450L255 420L265 370L245 330Z" />

              {/* Europe */}
              <path d="M470 180L515 155L560 165L585 195L555 220L505 215L475 230L450 205Z" />

              {/* Africa */}
              <path d="M485 255L540 245L585 275L570 335L535 395L500 380L480 325Z" />

              {/* Asia */}
              <path d="M585 175L655 145L735 160L810 190L850 235L815 270L750 255L710 285L650 255L600 235Z" />

              {/* India */}
              <path d="M700 275L730 295L710 340L680 315Z" />

              {/* Australia */}
              <path d="M805 390L860 370L920 395L935 430L900 460L845 450L810 425Z" />
            </g>

            {/* Connection routes */}
            {routes.map((route) => (
              <g key={route.id}>
                <path
                  d={route.d}
                  stroke={isDark ? 'rgba(217,168,62,0.13)' : 'rgba(184,138,40,0.15)'}
                  strokeWidth="5"
                  filter="url(#opsSoftGlow)"
                />

                <path
                  d={route.d}
                  stroke={isDark ? 'rgba(217,168,62,0.32)' : 'rgba(184,138,40,0.28)'}
                  strokeWidth="1"
                  strokeDasharray="4 9"
                />

                <circle r="4" fill="#D9A83E" filter="url(#opsGlow)">
                  <animateMotion
                    dur={route.duration}
                    begin={route.delay}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>

                <circle r="1.5" fill="#FFF0B5">
                  <animateMotion
                    dur={route.duration}
                    begin={route.delay}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {/* Network nodes */}
            {nodes.map((node) => (
              <g key={node.label}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="#D9A83E"
                  opacity="0.06"
                >
                  <animate
                    attributeName="r"
                    values="12;25;12"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.10;0;0.10"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#D9A83E"
                  filter="url(#opsGlow)"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="9"
                  stroke="#D9A83E"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[210px] text-center sm:pt-[245px]">
        {/* Eyebrow */}
        <div
          className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-xl ${styles.eyebrow}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          24/7 Network Operations
        </div>

        {/* Heading */}
        <h1
          className={`mx-auto mt-7 max-w-5xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[92px] ${styles.heading}`}
        >
          Always connected.
          <br />

          <span className="bg-gradient-to-r from-[#8E6718] via-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">
            Always operational.
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-base ${styles.paragraph}`}
        >
          Behind every call is a global team monitoring infrastructure,
          protecting connectivity, and keeping your communication running
          around the clock.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles.primaryButton}`}
          >
            Meet the Team
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`inline-flex h-12 items-center justify-center gap-3 rounded-full border px-7 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${styles.secondaryButton}`}
          >
            View Network Status
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          </button>
        </div>

        {/* Operational stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border backdrop-blur-xl sm:grid-cols-4">
          {[
            {
              value: '99.99%',
              label: 'Network Uptime',
              icon: '◉',
            },
            {
              value: '24 / 7',
              label: 'Active Monitoring',
              icon: '◌',
            },
            {
              value: '42+',
              label: 'Countries Covered',
              icon: '◎',
            },
            {
              value: '18ms',
              label: 'Avg. Latency',
              icon: '↯',
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative px-5 py-6 transition-all duration-300 hover:bg-[#D9A83E]/[0.04] ${
                index !== 0 ? `border-l ${styles.border}` : ''
              }`}
            >
              <div className={`text-xs ${styles.gold}`}>{stat.icon}</div>

              <div className={`mt-2 text-xl font-semibold ${styles.heading}`}>
                {stat.value}
              </div>

              <div className={`mt-1 text-[10px] uppercase tracking-[0.15em] ${styles.muted}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team panel */}
        <div className="mx-auto mt-6 max-w-4xl">
          <div
            className={`rounded-3xl border p-5 text-left shadow-2xl backdrop-blur-2xl ${styles.card}`}
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${styles.green}`}>
                    Operations Online
                  </span>
                </div>

                <h3 className={`mt-2 text-lg font-medium ${styles.heading}`}>
                  Your network is being watched.
                </h3>
              </div>

              {/* Team avatars */}
              <div className="flex items-center">
                {team.map((member, index) => (
                  <div
                    key={member.initials}
                    className={`relative ${index !== 0 ? '-ml-3' : ''}`}
                    title={`${member.name} — ${member.role}`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-[10px] font-bold ${styles.border} ${
                        isDark
                          ? 'bg-[#161916] text-[#D9A83E]'
                          : 'bg-[#F7F5F0] text-[#A87918]'
                      }`}
                    >
                      {member.initials}
                    </div>

                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0c0f0e] bg-emerald-400" />
                  </div>
                ))}

                <div
                  className={`ml-4 hidden text-[10px] uppercase tracking-[0.14em] sm:block ${styles.muted}`}
                >
                  Global team online
                </div>
              </div>
            </div>

            {/* Live activity */}
            <div className={`mt-5 border-t pt-4 ${styles.border}`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] uppercase tracking-[0.16em] ${styles.muted}`}>
                  Live infrastructure activity
                </span>

                <span className={`text-[10px] ${styles.green}`}>
                  Normal
                </span>
              </div>

              <div className="mt-3 flex h-10 items-end gap-1 overflow-hidden">
                {[35, 55, 42, 75, 48, 88, 60, 70, 45, 82, 58, 92, 68, 80, 50, 72, 95, 63, 78, 55, 86, 68, 90, 74].map(
                  (height, index) => (
                    <span
                      key={index}
                      className="w-full rounded-full bg-[#D9A83E]/30 transition-all duration-500 hover:bg-[#D9A83E]"
                      style={{
                        height: `${height}%`,
                        animation: `opsBar 2s ease-in-out ${index * 0.08}s infinite alternate`,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust line */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.18em] ${styles.muted}`}>
          <span>Global Support Team</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />
          <span>Real-time Monitoring</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />
          <span>Rapid Response</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />
          <span>Zero-Downtime Mindset</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 ${
          isDark
            ? 'bg-gradient-to-t from-[#070909] to-transparent'
            : 'bg-gradient-to-t from-[#F7F5F0] to-transparent'
        }`}
      />

      <style jsx>{`
        @keyframes opsBar {
          0% {
            transform: scaleY(0.55);
            opacity: 0.35;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default VoipOperationsHero;