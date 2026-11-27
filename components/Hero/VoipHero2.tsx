import React from 'react';
import { useSelector } from 'react-redux';

// ============================================
// TYPES
// ============================================

type RootState = {
  theme: {
    theme: 'light' | 'dark';
  };
};

type Route = {
  id: string;
  d: string;
  duration: string;
  delay: string;
};

type TeamMember = {
  initials: string;
  name: string;
  role: string;
  status: string;
};

type NetworkNode = {
  x: number;
  y: number;
  label: string;
};

// ============================================
// STATIC CONTENT
// ============================================

const network = {
  routes: [
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
  ] as Route[],

  nodes: [
    { x: 180, y: 340, label: 'US' },
    { x: 500, y: 275, label: 'EU' },
    { x: 850, y: 250, label: 'AS' },
    { x: 820, y: 430, label: 'AU' },
    { x: 300, y: 440, label: 'LATAM' },
    { x: 1020, y: 360, label: 'IN' },
  ] as NetworkNode[],

  map: {
    viewBox: '0 0 1200 600',
    width: '1500px',
  },
};

const activity = {
  bars: [35, 55, 42, 75, 48, 88, 60, 70, 45, 82, 58, 92, 68, 80, 50, 72, 95, 63, 78, 55, 86, 68, 90, 74],
  animation: {
    name: 'opsBar',
    duration: '2s',
    timing: 'ease-in-out',
    direction: 'alternate',
  },
};

 

// ============================================
// COMPONENT
// ============================================

const VoipOperationsHero = ({data}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const isDark = theme === 'dark';

  // ============================================
  // THEME STYLES
  // ============================================

  const styles = {
    section: isDark ? 'bg-[#070909] text-white' : 'bg-[#F7F5F0] text-[#151716]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    eyebrow: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]' : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.07] text-[#A87918]',

    primaryButton: isDark ? 'bg-[#D9A83E] text-[#11120F] hover:bg-[#F0C867]' : 'bg-[#151716] text-white hover:bg-[#2A2C2A]',

    secondaryButton: isDark ? 'border-white/10 bg-white/[0.035] text-white hover:border-[#D9A83E]/30 hover:bg-white/[0.06]' : 'border-[#151716]/10 bg-white/60 text-[#151716] hover:border-[#B88A28]/30 hover:bg-white/90',

    card: isDark ? 'border-white/10 bg-[#0c0f0e]/80' : 'border-[#151716]/10 bg-white/70',

    muted: isDark ? 'text-white/35' : 'text-[#151716]/40',

    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    green: isDark ? 'text-emerald-400' : 'text-emerald-600',

    border: isDark ? 'border-white/10' : 'border-[#151716]/10',

    mapStroke: isDark ? 'rgba(217,168,62,0.08)' : 'rgba(184,138,40,0.10)',

    mapSecondaryStroke: isDark ? 'rgba(217,168,62,0.06)' : 'rgba(184,138,40,0.08)',

    continent: isDark ? 'text-white/[0.055]' : 'text-[#151716]/[0.06]',

    routeGlow: isDark ? 'rgba(217,168,62,0.13)' : 'rgba(184,138,40,0.15)',

    routeStroke: isDark ? 'rgba(217,168,62,0.32)' : 'rgba(184,138,40,0.28)',

    avatar: isDark ? 'bg-[#161916] text-[#D9A83E]' : 'bg-[#F7F5F0] text-[#A87918]',

    bottomFade: isDark ? 'bg-gradient-to-t from-[#070909] via-[#070909]/60 to-transparent' : 'bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/60 to-transparent',
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <section className={`relative isolate min-h-[900px] overflow-hidden transition-colors duration-500 ${styles.section}`}>
      {/* BACKGROUND AMBIENCE */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-[420px] w-[min(90vw,1000px)] -translate-x-1/2 rounded-full bg-[#D9A83E]/[0.10] blur-[120px] sm:h-[560px]" />

        <div className="absolute left-[-15%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#D9A83E]/[0.055] blur-[130px]" />

        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#D9A83E]/[0.06] blur-[140px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 bg-[size:48px_48px]"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`
              : `linear-gradient(rgba(21,23,22,0.045) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(21,23,22,0.045) 1px, transparent 1px)`,
          }}
        />

        {/* RADIAL ILLUMINATION */}

        <div
          className="absolute inset-0"
          style={{
            background: isDark ? 'radial-gradient(ellipse at 50% 25%, rgba(217,168,62,0.10), transparent 55%)' : 'radial-gradient(ellipse at 50% 25%, rgba(217,168,62,0.12), transparent 55%)',
          }}
        />
      </div>

      {/* GLOBAL NETWORK ANIMATION */}

      <div className="pointer-events-none absolute inset-x-0 -z-10 flex justify-center">
        <div className={`w-[${network.map.width}] max-w-none`}>
          <svg viewBox={network.map.viewBox} className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

              {network.routes.map((route) => (
                <path key={route.id} id={route.id} d={route.d} />
              ))}
            </defs>

            {/* NETWORK HALOS */}

            <ellipse cx="600" cy="310" rx="480" ry="210" stroke={styles.mapStroke} strokeWidth="1" strokeDasharray="3 12" />

            <ellipse cx="600" cy="310" rx="350" ry="145" stroke={styles.mapSecondaryStroke} strokeWidth="1" strokeDasharray="2 14" />

            {/* CONTINENTS */}

            <g className={styles.continent} fill="currentColor">
              <path d="M130 180L170 145L235 150L270 185L250 225L205 240L175 215L135 225L105 205Z" />

              <path d="M275 280L315 305L325 355L305 410L280 450L255 420L265 370L245 330Z" />

              <path d="M470 180L515 155L560 165L585 195L555 220L505 215L475 230L450 205Z" />

              <path d="M485 255L540 245L585 275L570 335L535 395L500 380L480 325Z" />

              <path d="M585 175L655 145L735 160L810 190L850 235L815 270L750 255L710 285L650 255L600 235Z" />

              <path d="M700 275L730 295L710 340L680 315Z" />

              <path d="M805 390L860 370L920 395L935 430L900 460L845 450L810 425Z" />
            </g>

            {/* CONNECTION ROUTES */}

            {network.routes.map((route) => (
              <g key={route.id}>
                <path d={route.d} stroke={styles.routeGlow} strokeWidth="5" filter="url(#opsSoftGlow)" />

                <path d={route.d} stroke={styles.routeStroke} strokeWidth="1" strokeDasharray="4 9" />

                <circle r="4" fill="#D9A83E" filter="url(#opsGlow)">
                  <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite">
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>

                <circle r="1.5" fill="#FFF0B5">
                  <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite">
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {/* NETWORK NODES */}

            {network.nodes.map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r="18" fill="#D9A83E" opacity="0.06">
                  <animate attributeName="r" values="12;25;12" dur="2.8s" repeatCount="indefinite" />

                  <animate attributeName="opacity" values="0.10;0;0.10" dur="2.8s" repeatCount="indefinite" />
                </circle>

                <circle cx={node.x} cy={node.y} r="5" fill="#D9A83E" filter="url(#opsGlow)" />

                <circle cx={node.x} cy={node.y} r="9" stroke="#D9A83E" strokeOpacity="0.25" strokeWidth="1" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* HERO data */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-[145px] text-center">
        {/* EYEBROW */}

        <div className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-xl ${styles.eyebrow}`}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          {data.hero.eyebrow}
        </div>

        {/* HEADING */}

        <h1 className={`mx-auto mt-7 max-w-5xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[92px] ${styles.heading}`}>
          {data.hero.title}
          <br />

          <span className="bg-gradient-to-r from-[#8E6718] via-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">{data.hero.highlightedTitle}</span>
        </h1>

        {/* DESCRIPTION */}

        <p className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-base ${styles.paragraph}`}>{data.hero.description}</p>

        {/* CTA BUTTONS */}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles.primaryButton}`}>
            {data.hero.primaryButton}

            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button type="button" className={`inline-flex h-12 items-center justify-center gap-3 rounded-full border px-7 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${styles.secondaryButton}`}>
            {data.hero.secondaryButton}

            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          </button>
        </div>

        {/* OPERATIONAL STATS */}

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border backdrop-blur-xl sm:grid-cols-4">
          {data.stats.items.map((stat, index) => (
            <div key={stat.label} className={`group relative px-5 py-6 transition-all duration-300 hover:bg-[#D9A83E]/[0.04] ${index !== 0 ? `border-l ${styles.border}` : ''}`}>
              <div className={`text-xs ${styles.gold}`}>{stat.icon}</div>

              <div className={`mt-2 text-xl font-semibold ${styles.heading}`}>{stat.value}</div>

              <div className={`mt-1 text-[10px] uppercase tracking-[0.15em] ${styles.muted}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* TEAM PANEL */}

        <div className="mx-auto mt-6 max-w-4xl">
          <div className={`rounded-3xl border p-5 text-left shadow-2xl backdrop-blur-2xl ${styles.card}`}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${styles.green}`}>{data.team.status}</span>
                </div>

                <h3 className={`mt-2 text-lg font-medium ${styles.heading}`}>{data.team.title}</h3>
              </div>

              {/* TEAM AVATARS */}

              <div className="flex items-center">
                {data.team.members.map((member, index) => (
                  <div key={member.initials} className={`relative ${index !== 0 ? '-ml-3' : ''}`} title={`${member.name} — ${member.role}`}>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-[10px] font-bold ${styles.border} ${styles.avatar}`}>{member.initials}</div>

                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0c0f0e] bg-emerald-400" />
                  </div>
                ))}

                <div className={`ml-4 hidden text-[10px] uppercase tracking-[0.14em] sm:block ${styles.muted}`}>{data.team.availability}</div>
              </div>
            </div>

            {/* LIVE ACTIVITY */}

            <div className={`mt-5 border-t pt-4 ${styles.border}`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] uppercase tracking-[0.16em] ${styles.muted}`}>{data.activity.title}</span>

                <span className={`text-[10px] ${styles.green}`}>{data.activity.status}</span>
              </div>

              <div className="mt-3 flex h-10 items-end gap-1 overflow-hidden">
                {activity.bars.map((height, index) => (
                  <span
                    key={index}
                    className="w-full rounded-full bg-[#D9A83E]/30 transition-all duration-500 hover:bg-[#D9A83E]"
                    style={{
                      height: `${height}%`,
                      animation: `${activity.animation.name} ${activity.animation.duration} ${activity.animation.timing} ${index * 0.08}s infinite ${activity.animation.direction}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 ${styles.bottomFade}`} aria-hidden="true" />

      {/* ACTIVITY ANIMATION */}

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
