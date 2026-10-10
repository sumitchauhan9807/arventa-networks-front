import React from 'react';
import { useSelector } from 'react-redux';

const VoipHero = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const styles = {
    section: isDark ? 'bg-[#070909] text-white' : 'bg-[#F7F5F0] text-[#151716]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    eyebrow: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]' : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.07] text-[#A87918]',

    primaryButton: isDark ? 'bg-[#D9A83E] text-[#11120F] hover:bg-[#F0C867]' : 'bg-[#151716] text-white hover:bg-[#2A2C2A]',

    secondaryButton: isDark ? 'border-white/10 bg-white/[0.035] text-white hover:border-[#D9A83E]/30 hover:bg-white/[0.06]' : 'border-[#151716]/10 bg-white/60 text-[#151716] hover:border-[#B88A28]/30 hover:bg-white/90',

    map: isDark ? 'text-white/[0.07]' : 'text-[#151716]/[0.075]',

    mapLines: isDark ? 'stroke-white/[0.07]' : 'stroke-[#151716]/[0.065]',

    card: isDark ? 'border-white/10 bg-[#0c0f0e]/75' : 'border-[#151716]/10 bg-white/65',

    cardTitle: isDark ? 'text-white' : 'text-[#151716]',

    cardMuted: isDark ? 'text-white/30' : 'text-[#151716]/40',

    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    green: isDark ? 'text-emerald-400' : 'text-emerald-600',

    divider: isDark ? 'border-white/10' : 'border-[#151716]/10',
  };

  const routes = [
    {
      id: 'hero-route-1',
      d: 'M235 205 Q400 80 555 160',
      duration: '3.2s',
      delay: '0s',
    },
    {
      id: 'hero-route-2',
      d: 'M235 205 Q500 40 760 215',
      duration: '4.2s',
      delay: '0.8s',
    },
    {
      id: 'hero-route-3',
      d: 'M235 205 Q510 160 745 290',
      duration: '3.8s',
      delay: '1.5s',
    },
    {
      id: 'hero-route-4',
      d: 'M555 160 Q690 110 820 210',
      duration: '2.8s',
      delay: '0.5s',
    },
    {
      id: 'hero-route-5',
      d: 'M555 160 Q570 210 570 280',
      duration: '2.4s',
      delay: '1.8s',
    },
    {
      id: 'hero-route-6',
      d: 'M745 305 Q850 320 930 425',
      duration: '3.6s',
      delay: '2s',
    },
    {
      id: 'hero-route-7',
      d: 'M820 210 Q900 290 930 425',
      duration: '3.1s',
      delay: '1.1s',
    },
    {
      id: 'hero-route-8',
      d: 'M300 330 Q400 190 555 160',
      duration: '3.4s',
      delay: '2.3s',
    },
  ];

  return (
    <section className={`relative min-h-[900px] overflow-hidden ${styles.section}`}>
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main atmospheric glow */}

        <div className="absolute left-1/2 top-[48%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/[0.055] blur-[150px]" />

        {/* Left glow */}

        <div className="absolute left-[-10%] top-[35%] h-[400px] w-[400px] rounded-full bg-[#D9A83E]/[0.025] blur-[130px]" />

        {/* Right glow */}

        <div className="absolute right-[-10%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#D9A83E]/[0.025] blur-[130px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217,168,62,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,168,62,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* =====================================================
          WORLD MAP
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0  flex justify-center">
        <div className="w-[1550px] max-w-none">
          <svg viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
            <defs>
              <filter id="heroMapGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="4" result="blur" />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="heroPulseGlow" x="-300%" y="-300%" width="600%" height="600%">
                <feGaussianBlur stdDeviation="3" result="blur" />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="heroSoftGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="9" />
              </filter>

              <linearGradient id="heroRouteGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A87918" stopOpacity="0" />

                <stop offset="40%" stopColor="#D9A83E" stopOpacity="0.65" />

                <stop offset="65%" stopColor="#FFF0B5" stopOpacity="0.45" />

                <stop offset="100%" stopColor="#D9A83E" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="heroFade">
                <stop offset="0%" stopColor="white" stopOpacity="1" />

                <stop offset="60%" stopColor="white" stopOpacity="0.8" />

                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              <mask id="heroMask">
                <rect width="1200" height="600" fill="url(#heroFade)" />
              </mask>
            </defs>

            <g mask="url(#heroMask)">
              {/* ==============================
                  CONTINENTS
              =============================== */}

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
                    L130 210
                    Z
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
                    L250 330
                    Z
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
                    L525 180
                    Z
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
                    L495 250
                    Z
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
                    L625 205
                    Z
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
                    L720 290
                    Z
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
                    L870 425
                    Z
                  "
                />
              </g>

              {/* ==============================
                  ORBITAL LINES
              =============================== */}

              <g className={styles.mapLines}>
                <ellipse cx="600" cy="285" rx="500" ry="235" strokeDasharray="2 12" />

                <ellipse cx="600" cy="285" rx="400" ry="175" strokeDasharray="2 14" />

                <ellipse cx="600" cy="285" rx="285" ry="115" strokeDasharray="2 16" />
              </g>

              {/* ==============================
                  CONNECTION ROUTES
              =============================== */}

              {routes.map((route) => (
                <g key={route.id}>
                  {/* Soft glow */}

                  <path d={route.d} stroke="#D9A83E" strokeWidth="7" opacity="0.035" filter="url(#heroSoftGlow)" />

                  {/* Route */}

                  <path id={route.id} d={route.d} stroke="url(#heroRouteGradient)" strokeWidth="1.4" />

                  {/* Moving signal */}

                  <circle r="3" fill="#FFF0B5" filter="url(#heroPulseGlow)">
                    <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite">
                      <mpath href={`#${route.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}

              {/* ==============================
                  NETWORK NODES
              =============================== */}

              {[
                [235, 205],
                [300, 330],
                [555, 160],
                [570, 280],
                [745, 305],
                [820, 210],
                [930, 425],
              ].map(([cx, cy], index) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="8" fill="none" stroke="#D9A83E" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="7;20;7" dur="3s" begin={`${index * 0.3}s`} repeatCount="indefinite" />

                    <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" begin={`${index * 0.3}s`} repeatCount="indefinite" />
                  </circle>

                  <circle cx={cx} cy={cy} r="3" fill="#D9A83E" filter="url(#heroMapGlow)" />

                  <circle cx={cx} cy={cy} r="1" fill="#FFF0B5" />
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[235px] text-center sm:pt-[275px]">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}

          <div className={`mx-auto mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl ${styles.eyebrow}`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-50" />

              <span className="relative h-2 w-2 rounded-full bg-[#D9A83E]" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Global VoIP Infrastructure</span>
          </div>

          {/* Heading */}

          <h1 className={`font-display text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[92px] ${styles.heading}`}>
            Communication
            <br />
            <span className="bg-gradient-to-r from-[#8E6718] via-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">without borders.</span>
          </h1>

          {/* Description */}

          <p className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-lg sm:leading-8 ${styles.paragraph}`}>Connect your business to the world with intelligent VoIP infrastructure built for crystal-clear voice, reliable connectivity, and effortless global scale.</p>

          {/* Buttons */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className={`group inline-flex h-13 min-w-[155px] items-center justify-center gap-3 rounded-full px-7 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(217,168,62,0.18)] ${styles.primaryButton}`}>
              Get Started
              <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none">
                <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className={`inline-flex h-13 min-w-[155px] items-center justify-center gap-3 rounded-full border px-7 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${styles.secondaryButton}`}>
              Explore Network
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path d="M10 3V17M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            FLOATING LIVE STATS
        ====================================================== */}

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Main stats container */}

          <div className={`overflow-hidden rounded-3xl border backdrop-blur-2xl ${styles.card}`}>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {/* Active Calls */}

              <div className={`relative p-5 sm:p-6 ${styles.divider} border-b sm:border-b-0 sm:border-r`}>
                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className={`text-[9px] uppercase tracking-[0.18em] ${styles.cardMuted}`}>Live Calls</span>
                </div>

                <div className={`mt-2 font-display text-2xl sm:text-3xl ${styles.cardTitle}`}>12,842</div>

                <div className={`mt-1 text-[9px] ${styles.green}`}>+12.4% today</div>
              </div>

              {/* Countries */}

              <div className={`relative p-5 sm:p-6 ${styles.divider} border-b sm:border-b-0 sm:border-r`}>
                <div className={`text-[9px] uppercase tracking-[0.18em] ${styles.cardMuted}`}>Connected</div>

                <div className={`mt-2 font-display text-2xl sm:text-3xl ${styles.cardTitle}`}>42+</div>

                <div className={`mt-1 text-[9px] ${styles.gold}`}>Countries</div>
              </div>

              {/* Latency */}

              <div className={`relative p-5 sm:p-6 ${styles.divider} border-r`}>
                <div className={`text-[9px] uppercase tracking-[0.18em] ${styles.cardMuted}`}>Avg. Latency</div>

                <div className={`mt-2 font-display text-2xl sm:text-3xl ${styles.cardTitle}`}>
                  18<span className="ml-1 text-sm">ms</span>
                </div>

                <div className={`mt-1 text-[9px] ${styles.green}`}>Excellent</div>
              </div>

              {/* Uptime */}

              <div className="relative p-5 sm:p-6">
                <div className={`text-[9px] uppercase tracking-[0.18em] ${styles.cardMuted}`}>Network Uptime</div>

                <div className={`mt-2 font-display text-2xl sm:text-3xl ${styles.cardTitle}`}>99.99%</div>

                <div className={`mt-1 text-[9px] ${styles.green}`}>Operational</div>
              </div>
            </div>
          </div>

          {/* Decorative line */}

          <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-[#D9A83E]/40 to-transparent" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRUST STRIP
      ====================================================== */}

      <div className={`absolute bottom-0 left-0 right-0 z-20 border-t backdrop-blur-xl ${isDark ? 'border-white/[0.07] bg-[#070909]/55' : 'border-[#151716]/[0.07] bg-[#F7F5F0]/60'}`}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            ['99.99%', 'Uptime'],
            ['42+', 'Countries'],
            ['18 ms', 'Latency'],
            ['24 / 7', 'Monitoring'],
          ].map(([value, label], index) => (
            <div key={label} className={`relative flex items-center justify-center gap-3 py-4 ${index !== 0 ? 'border-l' : ''} ${styles.divider}`}>
              <span className={`font-display text-sm sm:text-base ${styles.cardTitle}`}>{value}</span>

              <span className={`text-[8px] uppercase tracking-[0.18em] ${styles.cardMuted}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}

      <div className={`pointer-events-none absolute bottom-[55px] left-0 right-0 h-48 bg-gradient-to-t ${isDark ? 'from-[#070909]' : 'from-[#F7F5F0]'} to-transparent`} />
    </section>
  );
};

export default VoipHero;
