import React from 'react';
import { useSelector } from 'react-redux';

const AboutHero = () => {
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
      ? 'border-white/10 bg-[#0c0f0e]/75'
      : 'border-[#151716]/10 bg-white/70',

    muted: isDark ? 'text-white/30' : 'text-[#151716]/40',

    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    border: isDark
      ? 'border-white/10'
      : 'border-[#151716]/10',
  };

  const stats = [
    {
      value: '10+',
      label: 'Years of Experience',
    },
    {
      value: '42+',
      label: 'Countries Connected',
    },
    {
      value: '99.99%',
      label: 'Network Uptime',
    },
    {
      value: '24/7',
      label: 'Global Support',
    },
  ];

  const values = [
    {
      number: '01',
      title: 'Human First',
      description:
        'Technology should make communication feel simpler, more natural, and more human.',
    },
    {
      number: '02',
      title: 'Built to Scale',
      description:
        'We design infrastructure that grows with ambitious businesses without adding complexity.',
    },
    {
      number: '03',
      title: 'Always Reliable',
      description:
        'Every connection matters. Our systems and people are built around dependable communication.',
    },
  ];

  return (
    <section
      className={`relative min-h-[920px] overflow-hidden ${styles.section}`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-[#D9A83E]/[0.055] blur-[150px]" />

      {/* Grid */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[size:55px_55px] ${styles.grid}`}
      />

      {/* Radial center */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_30%,rgba(217,168,62,0.08),transparent_42%)]'
            : 'bg-[radial-gradient(circle_at_50%_30%,rgba(217,168,62,0.10),transparent_42%)]'
        }`}
      />

      {/* =========================
          ANIMATED BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-x-0 top-[80px] flex justify-center">
        <div className="w-[1450px] max-w-none">
          <svg
            viewBox="0 0 1200 600"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="aboutGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="aboutSoftGlow">
                <feGaussianBlur stdDeviation="22" />
              </filter>

              <linearGradient
                id="goldRoute"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#D9A83E" stopOpacity="0" />
                <stop offset="45%" stopColor="#D9A83E" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFF0B5" stopOpacity="0" />
              </linearGradient>

              <path
                id="aboutRoute1"
                d="M170 320 Q360 110 545 265"
              />

              <path
                id="aboutRoute2"
                d="M545 265 Q700 100 900 230"
              />

              <path
                id="aboutRoute3"
                d="M545 265 Q690 350 850 430"
              />

              <path
                id="aboutRoute4"
                d="M280 445 Q390 350 545 265"
              />

              <path
                id="aboutRoute5"
                d="M900 230 Q970 290 1030 350"
              />
            </defs>

            {/* Orbital rings */}
            <ellipse
              cx="600"
              cy="300"
              rx="490"
              ry="210"
              stroke={
                isDark
                  ? 'rgba(217,168,62,0.08)'
                  : 'rgba(184,138,40,0.10)'
              }
              strokeWidth="1"
              strokeDasharray="3 13"
            />

            <ellipse
              cx="600"
              cy="300"
              rx="350"
              ry="145"
              stroke={
                isDark
                  ? 'rgba(217,168,62,0.055)'
                  : 'rgba(184,138,40,0.07)'
              }
              strokeWidth="1"
              strokeDasharray="2 15"
            />

            {/* Abstract world */}
            <g
              fill={
                isDark
                  ? 'rgba(255,255,255,0.045)'
                  : 'rgba(21,23,22,0.055)'
              }
            >
              {/* North America */}
              <path d="M115 185L165 140L230 150L275 190L250 235L205 245L175 220L130 230L100 205Z" />

              {/* South America */}
              <path d="M270 280L315 305L325 355L305 415L280 455L255 420L265 370L245 330Z" />

              {/* Europe */}
              <path d="M470 180L515 155L560 165L585 195L555 220L505 215L475 230L450 205Z" />

              {/* Africa */}
              <path d="M490 255L545 245L585 275L570 335L535 395L500 380L480 325Z" />

              {/* Asia */}
              <path d="M580 175L655 145L735 160L815 190L855 235L815 270L750 255L710 285L650 255L600 235Z" />

              {/* India */}
              <path d="M700 275L730 295L710 340L680 315Z" />

              {/* Australia */}
              <path d="M810 390L865 370L920 395L935 430L900 460L845 450L810 425Z" />
            </g>

            {/* Route 1 */}
            <path
              d="M170 320 Q360 110 545 265"
              stroke="url(#goldRoute)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />

            <path
              d="M170 320 Q360 110 545 265"
              stroke="#D9A83E"
              strokeOpacity="0.10"
              strokeWidth="7"
              filter="url(#aboutSoftGlow)"
            />

            <circle r="4" fill="#D9A83E" filter="url(#aboutGlow)">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
              >
                <mpath href="#aboutRoute1" />
              </animateMotion>
            </circle>

            {/* Route 2 */}
            <path
              d="M545 265 Q700 100 900 230"
              stroke="url(#goldRoute)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />

            <circle
              r="4"
              fill="#D9A83E"
              filter="url(#aboutGlow)"
            >
              <animateMotion
                dur="4s"
                begin="0.8s"
                repeatCount="indefinite"
              >
                <mpath href="#aboutRoute2" />
              </animateMotion>
            </circle>

            {/* Route 3 */}
            <path
              d="M545 265 Q690 350 850 430"
              stroke="url(#goldRoute)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />

            <circle
              r="3.5"
              fill="#FFF0B5"
              filter="url(#aboutGlow)"
            >
              <animateMotion
                dur="3.7s"
                begin="1.3s"
                repeatCount="indefinite"
              >
                <mpath href="#aboutRoute3" />
              </animateMotion>
            </circle>

            {/* Route 4 */}
            <path
              d="M280 445 Q390 350 545 265"
              stroke="url(#goldRoute)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />

            <circle
              r="3.5"
              fill="#D9A83E"
              filter="url(#aboutGlow)"
            >
              <animateMotion
                dur="3.2s"
                begin="2s"
                repeatCount="indefinite"
              >
                <mpath href="#aboutRoute4" />
              </animateMotion>
            </circle>

            {/* Route 5 */}
            <path
              d="M900 230 Q970 290 1030 350"
              stroke="url(#goldRoute)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />

            <circle
              r="3"
              fill="#FFF0B5"
              filter="url(#aboutGlow)"
            >
              <animateMotion
                dur="2.6s"
                begin="1.5s"
                repeatCount="indefinite"
              >
                <mpath href="#aboutRoute5" />
              </animateMotion>
            </circle>

            {/* Central node */}
            <g>
              <circle
                cx="545"
                cy="265"
                r="42"
                fill="#D9A83E"
                opacity="0.035"
              >
                <animate
                  attributeName="r"
                  values="30;52;30"
                  dur="3s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values="0.07;0;0.07"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="545"
                cy="265"
                r="12"
                stroke="#D9A83E"
                strokeOpacity="0.25"
              />

              <circle
                cx="545"
                cy="265"
                r="5"
                fill="#D9A83E"
                filter="url(#aboutGlow)"
              />
            </g>

            {/* Satellite nodes */}
            {[
              [170, 320],
              [900, 230],
              [850, 430],
              [280, 445],
              [1030, 350],
            ].map(([x, y], index) => (
              <g key={`${x}-${y}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="#D9A83E"
                  opacity="0.04"
                >
                  <animate
                    attributeName="r"
                    values="10;22;10"
                    dur={`${2.5 + index * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#D9A83E"
                  filter="url(#aboutGlow)"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[210px] text-center sm:pt-[245px]">
        {/* Eyebrow */}
        <div
          className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-xl ${styles.eyebrow}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]" />
          About Our Company
        </div>

        {/* Heading */}
        <h1
          className={`mx-auto mt-7 max-w-5xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[92px] ${styles.heading}`}
        >
          We connect people.
          <br />

          <span className="bg-gradient-to-r from-[#8E6718] via-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">
            We move businesses.
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-base ${styles.paragraph}`}
        >
          We are building the communication infrastructure behind modern
          businesses — combining intelligent technology, reliable networks,
          and a team that believes great communication should simply work.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles.primaryButton}`}
          >
            Discover Our Story

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
            Meet Our Team

            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 3V17M3 10H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* =========================
            STATS
        ========================== */}
        <div
          className={`mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border backdrop-blur-xl sm:grid-cols-4 ${styles.border}`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group px-5 py-7 transition-all duration-300 hover:bg-[#D9A83E]/[0.04] ${
                index !== 0 ? `border-l ${styles.border}` : ''
              }`}
            >
              <div
                className={`text-2xl font-semibold tracking-tight ${styles.heading}`}
              >
                {stat.value}
              </div>

              <div
                className={`mt-2 text-[9px] uppercase tracking-[0.16em] ${styles.muted}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            STORY + VALUES
        ========================== */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 lg:grid-cols-[1.1fr_1.9fr]">
          {/* Story card */}
          <div
            className={`rounded-3xl border p-6 text-left backdrop-blur-xl ${styles.card}`}
          >
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.gold}`}
            >
              Our Mission
            </div>

            <h3
              className={`mt-4 text-2xl font-medium tracking-tight ${styles.heading}`}
            >
              Communication without unnecessary complexity.
            </h3>

            <p
              className={`mt-4 text-sm leading-6 ${styles.paragraph}`}
            >
              From the first connection to millions of conversations, we
              create technology that stays powerful behind the scenes while
              remaining beautifully simple for the people using it.
            </p>

            <div className={`mt-6 border-t pt-5 ${styles.border}`}>
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] ${styles.muted}`}
                >
                  Built for
                </span>

                <span
                  className={`text-xs font-medium ${styles.gold}`}
                >
                  Ambitious teams
                </span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            className={`rounded-3xl border p-6 text-left backdrop-blur-xl ${styles.card}`}
          >
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.gold}`}
            >
              What We Believe
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.number} className="group">
                  <div
                    className={`text-xs font-medium ${styles.gold}`}
                  >
                    {value.number}
                  </div>

                  <h4
                    className={`mt-3 text-base font-medium ${styles.heading}`}
                  >
                    {value.title}
                  </h4>

                  <p
                    className={`mt-2 text-xs leading-5 ${styles.paragraph}`}
                  >
                    {value.description}
                  </p>

                  <div
                    className={`mt-5 h-px w-8 bg-[#D9A83E]/50 transition-all duration-500 group-hover:w-16`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust line */}
        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.18em] ${styles.muted}`}
        >
          <span>People First</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />

          <span>Global Infrastructure</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />

          <span>Built for Scale</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D9A83E]/50 sm:block" />

          <span>Always Connected</span>
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
    </section>
  );
};

export default AboutHero;