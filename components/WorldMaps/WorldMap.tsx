import React from 'react';
import { useSelector } from 'react-redux';

const WorldVoipMap = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const styles = {
    section: isDark
      ? 'border-white/10 bg-[#070909]'
      : 'border-[#151716]/10 bg-[#F7F5F0]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark
      ? 'text-white/40'
      : 'text-[#151716]/50',

    map: isDark
      ? 'text-white/[0.085]'
      : 'text-[#151716]/[0.10]',

    mapLine: isDark
      ? 'stroke-white/[0.08]'
      : 'stroke-[#151716]/[0.09]',

    route: isDark
      ? 'stroke-[#D9A83E]/40'
      : 'stroke-[#A87918]/35',

    node: isDark
      ? 'fill-[#D9A83E]'
      : 'fill-[#B88A28]',

    card: isDark
      ? 'border-white/10 bg-white/[0.035]'
      : 'border-[#151716]/10 bg-white/65',

    cardText: isDark
      ? 'text-white'
      : 'text-[#151716]',

    muted: isDark
      ? 'text-white/35'
      : 'text-[#151716]/40',

    gold: isDark
      ? 'text-[#D9A83E]'
      : 'text-[#A87918]',

    green: isDark
      ? 'text-emerald-400'
      : 'text-emerald-600',

    glow: isDark
      ? 'bg-[#D9A83E]/10'
      : 'bg-[#D9A83E]/10',
  };

  const routes = [
    {
      id: 'route-1',
      d: 'M235 205 Q400 80 555 160',
      duration: '3.2s',
      delay: '0s',
    },
    {
      id: 'route-2',
      d: 'M235 205 Q500 40 760 215',
      duration: '4.2s',
      delay: '0.8s',
    },
    {
      id: 'route-3',
      d: 'M235 205 Q510 160 745 290',
      duration: '3.8s',
      delay: '1.4s',
    },
    {
      id: 'route-4',
      d: 'M555 160 Q690 110 820 210',
      duration: '3s',
      delay: '0.4s',
    },
    {
      id: 'route-5',
      d: 'M555 160 Q570 210 570 280',
      duration: '2.5s',
      delay: '1.8s',
    },
    {
      id: 'route-6',
      d: 'M570 280 Q665 280 745 305',
      duration: '2.8s',
      delay: '0.9s',
    },
    {
      id: 'route-7',
      d: 'M745 305 Q850 320 930 425',
      duration: '3.8s',
      delay: '2.2s',
    },
    {
      id: 'route-8',
      d: 'M820 210 Q900 290 930 425',
      duration: '3.5s',
      delay: '1.1s',
    },
    {
      id: 'route-9',
      d: 'M300 330 Q400 190 555 160',
      duration: '3.4s',
      delay: '1.7s',
    },
  ];

  const nodes = [
    {
      name: 'New York',
      country: 'United States',
      x: 235,
      y: 205,
      calls: '3,482',
    },
    {
      name: 'São Paulo',
      country: 'Brazil',
      x: 300,
      y: 330,
      calls: '1,294',
    },
    {
      name: 'London',
      country: 'United Kingdom',
      x: 555,
      y: 160,
      calls: '2,814',
    },
    {
      name: 'Johannesburg',
      country: 'South Africa',
      x: 570,
      y: 280,
      calls: '846',
    },
    {
      name: 'Mumbai',
      country: 'India',
      x: 745,
      y: 305,
      calls: '2,145',
    },
    {
      name: 'Singapore',
      country: 'Singapore',
      x: 820,
      y: 210,
      calls: '1,086',
    },
    {
      name: 'Sydney',
      country: 'Australia',
      x: 930,
      y: 425,
      calls: '1,175',
    },
  ];

  return (
    <section
      className={`relative overflow-hidden border-y py-24 sm:py-32 ${styles.section}`}
    >
      {/* ==============================
          BACKGROUND
      ============================== */}

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] ${styles.glow}`}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217,168,62,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,168,62,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ==============================
            HEADER
        ============================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] px-4 py-2">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9A83E]" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A83E]">
              Global Voice Network
            </span>

          </div>

          <h2
            className={`font-display text-4xl font-medium tracking-tight sm:text-6xl ${styles.heading}`}
          >
            Voice without
            <span className="block bg-gradient-to-r from-[#FFF0B5] via-[#D9A83E] to-[#A87918] bg-clip-text text-transparent">
              borders.
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base ${styles.paragraph}`}
          >
            Intelligent VoIP infrastructure connecting businesses,
            teams, and customers across the world in real time.
          </p>

        </div>

        {/* ==============================
            LIVE NETWORK
        ============================== */}

        <div className="relative mx-auto mt-16 max-w-6xl">

          {/* TOP STATUS BAR */}

          <div
            className={`absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-xl sm:flex ${styles.card}`}
          >

            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className={`text-[10px] uppercase tracking-[0.2em] ${styles.green}`}>
              Network Operational
            </span>

            <span className={`h-3 w-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

            <span className={`text-[10px] ${styles.muted}`}>
              99.99% uptime
            </span>

          </div>

          {/* MAP */}

          <div className="relative aspect-[2/1] w-full">

            <svg
              viewBox="0 0 1200 600"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <defs>

                <filter
                  id="goldGlow"
                  x="-200%"
                  y="-200%"
                  width="400%"
                  height="400%"
                >
                  <feGaussianBlur
                    stdDeviation="4"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter
                  id="softGlow"
                  x="-200%"
                  y="-200%"
                  width="400%"
                  height="400%"
                >
                  <feGaussianBlur stdDeviation="8" />
                </filter>

                <linearGradient
                  id="routeGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#A87918"
                    stopOpacity="0.05"
                  />

                  <stop
                    offset="45%"
                    stopColor="#D9A83E"
                    stopOpacity="0.75"
                  />

                  <stop
                    offset="100%"
                    stopColor="#FFF0B5"
                    stopOpacity="0.15"
                  />
                </linearGradient>

              </defs>

              {/* ==========================
                  WORLD MAP
              =========================== */}

              <g className={styles.map}>

                {/* North America */}
                <path
                  fill="currentColor"
                  d="
                    M145 185
                    C125 155 145 125 180 115
                    C210 105 245 112 270 130
                    L310 155
                    L295 180
                    L270 195
                    L250 225
                    L215 235
                    L195 270
                    L165 250
                    L155 220
                    L130 210 Z
                  "
                />

                {/* South America */}
                <path
                  fill="currentColor"
                  d="
                    M290 295
                    C315 285 340 300 350 330
                    C360 365 350 400 335 430
                    L315 475
                    L290 510
                    L270 485
                    L275 440
                    L255 405
                    L265 365
                    L250 330 Z
                  "
                />

                {/* Europe */}
                <path
                  fill="currentColor"
                  d="
                    M510 160
                    L540 135
                    L575 130
                    L600 145
                    L625 135
                    L650 155
                    L635 180
                    L605 185
                    L580 175
                    L550 190
                    L525 180 Z
                  "
                />

                {/* Africa */}
                <path
                  fill="currentColor"
                  d="
                    M535 215
                    C565 195 610 205 630 235
                    C650 270 645 320 625 360
                    L600 415
                    L565 450
                    L535 420
                    L525 375
                    L505 335
                    L510 290
                    L495 250 Z
                  "
                />

                {/* Asia */}
                <path
                  fill="currentColor"
                  d="
                    M640 175
                    C685 145 745 140 800 155
                    L865 175
                    L930 205
                    L975 235
                    L955 270
                    L910 280
                    L875 265
                    L830 280
                    L790 260
                    L745 275
                    L700 255
                    L660 230
                    L625 205 Z
                  "
                />

                {/* India */}
                <path
                  fill="currentColor"
                  d="
                    M735 270
                    L770 280
                    L790 315
                    L770 345
                    L745 325
                    L720 290 Z
                  "
                />

                {/* Australia */}
                <path
                  fill="currentColor"
                  d="
                    M880 395
                    C910 375 955 380 985 405
                    L1000 440
                    L975 470
                    L930 475
                    L895 455
                    L870 425 Z
                  "
                />

              </g>

              {/* ==========================
                  MAP GRID
              =========================== */}

              <g className={styles.mapLine}>

                <ellipse
                  cx="600"
                  cy="290"
                  rx="490"
                  ry="230"
                  strokeDasharray="2 10"
                />

                <ellipse
                  cx="600"
                  cy="290"
                  rx="390"
                  ry="175"
                  strokeDasharray="2 12"
                />

                <ellipse
                  cx="600"
                  cy="290"
                  rx="280"
                  ry="120"
                  strokeDasharray="2 14"
                />

              </g>

              {/* ==========================
                  ROUTES
              =========================== */}

              {routes.map((route) => (
                <g key={route.id}>

                  {/* Glow */}

                  <path
                    d={route.d}
                    stroke="#D9A83E"
                    strokeWidth="5"
                    opacity="0.06"
                    filter="url(#softGlow)"
                    fill="none"
                  />

                  {/* Main route */}

                  <path
                    id={route.id}
                    d={route.d}
                    stroke="url(#routeGradient)"
                    strokeWidth="1.4"
                    fill="none"
                  />

                  {/* Moving pulse */}

                  <circle
                    r="3"
                    fill="#FFF0B5"
                    filter="url(#goldGlow)"
                  >

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

              {/* ==========================
                  NETWORK NODES
              =========================== */}

              {nodes.map((node) => (
                <g key={node.name}>

                  {/* Outer radar */}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="9"
                    fill="none"
                    stroke="#D9A83E"
                    strokeWidth="1"
                    opacity="0.25"
                  >
                    <animate
                      attributeName="r"
                      values="7;18;7"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />

                    <animate
                      attributeName="opacity"
                      values="0.35;0;0.35"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Glow */}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="8"
                    fill="#D9A83E"
                    opacity="0.08"
                    filter="url(#softGlow)"
                  />

                  {/* Node */}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="3.5"
                    className={styles.node}
                    filter="url(#goldGlow)"
                  />

                  {/* Inner */}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="1"
                    fill="#FFF0B5"
                  />

                </g>
              ))}

            </svg>

            {/* ==========================
                FLOATING STATS
            =========================== */}

            {/* LEFT CARD */}

            <div
              className={`absolute left-0 top-[24%] hidden w-48 rounded-2xl border p-4 backdrop-blur-xl lg:block ${styles.card}`}
            >

              <div className="flex items-center justify-between">

                <span className={`text-[9px] uppercase tracking-[0.18em] ${styles.muted}`}>
                  Active Calls
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              </div>

              <div className={`mt-3 font-display text-3xl ${styles.cardText}`}>
                12,842
              </div>

              <div className="mt-2 flex items-center gap-2">

                <span className={`text-[10px] ${styles.green}`}>
                  +12.4%
                </span>

                <span className={`text-[9px] ${styles.muted}`}>
                  vs last hour
                </span>

              </div>

              {/* Mini activity bars */}

              <div className="mt-4 flex h-8 items-end gap-1">

                {[30, 45, 35, 60, 50, 75, 55, 85, 65, 92, 72, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-full bg-[#D9A83E]/40"
                      style={{
                        height: `${height}%`,
                        animation: `voipBar 1.8s ease-in-out ${
                          index * 0.08
                        }s infinite alternate`,
                      }}
                    />
                  )
                )}

              </div>

            </div>

            {/* RIGHT CARD */}

            <div
              className={`absolute right-0 top-[31%] hidden w-48 rounded-2xl border p-4 backdrop-blur-xl lg:block ${styles.card}`}
            >

              <span className={`text-[9px] uppercase tracking-[0.18em] ${styles.muted}`}>
                Global Latency
              </span>

              <div className="mt-3 flex items-end gap-2">

                <span className={`font-display text-3xl ${styles.cardText}`}>
                  18
                </span>

                <span className={`mb-1 text-xs ${styles.muted}`}>
                  ms
                </span>

              </div>

              <div className="mt-2 flex items-center gap-2">

                <span className={`text-[10px] ${styles.green}`}>
                  Excellent
                </span>

                <span className="h-1 w-1 rounded-full bg-emerald-400" />

              </div>

              <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#D9A83E]/10">

                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#A87918] to-[#D9A83E]" />

              </div>

            </div>

            {/* BOTTOM LEFT */}

            <div
              className={`absolute bottom-[5%] left-[10%] hidden rounded-xl border px-4 py-3 backdrop-blur-xl md:block ${styles.card}`}
            >

              <div className={`text-lg font-medium ${styles.cardText}`}>
                42
              </div>

              <div className={`text-[8px] uppercase tracking-[0.18em] ${styles.muted}`}>
                Countries
              </div>

            </div>

            {/* BOTTOM RIGHT */}

            <div
              className={`absolute bottom-[5%] right-[10%] hidden rounded-xl border px-4 py-3 backdrop-blur-xl md:block ${styles.card}`}
            >

              <div className={`text-lg font-medium ${styles.cardText}`}>
                98.99%
              </div>

              <div className={`text-[8px] uppercase tracking-[0.18em] ${styles.muted}`}>
                Call Success
              </div>

            </div>

          </div>

          {/* ==========================
              MOBILE STATS
          =========================== */}

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">

            {[
              ['12,842', 'Active Calls'],
              ['18 ms', 'Latency'],
              ['42', 'Countries'],
              ['98.99%', 'Success'],
            ].map(([value, label]) => (
              <div
                key={label}
                className={`rounded-2xl border p-4 text-center backdrop-blur-xl ${styles.card}`}
              >
                <div className={`font-display text-xl ${styles.cardText}`}>
                  {value}
                </div>

                <div className={`mt-1 text-[8px] uppercase tracking-[0.16em] ${styles.muted}`}>
                  {label}
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* ==============================
            BOTTOM METRICS
        ============================== */}

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-8 sm:grid-cols-4">

          {[
            ['99.99%', 'Network Uptime'],
            ['42+', 'Countries'],
            ['18 ms', 'Avg. Latency'],
            ['24/7', 'Monitoring'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="relative text-center"
            >

              <div className={`font-display text-2xl sm:text-3xl ${styles.cardText}`}>
                {value}
              </div>

              <div className={`mt-2 text-[9px] uppercase tracking-[0.2em] ${styles.muted}`}>
                {label}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Animation */}

      <style jsx>{`
        @keyframes voipBar {
          from {
            transform: scaleY(0.45);
            opacity: 0.35;
          }

          to {
            transform: scaleY(1);
            opacity: 0.9;
          }
        }
      `}</style>

    </section>
  );
};

export default WorldVoipMap;