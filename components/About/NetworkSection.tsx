import { useSelector } from 'react-redux';

const NetworkSection = () => {
  const theme = useSelector((state) => state.theme?.theme);

  const isDark = theme === 'dark';

  const styles = {
    section: isDark ? 'border-y border-white/10 bg-[#050606]' : 'border-y border-slate-200 bg-slate-50',

    eyebrow: isDark ? 'text-[#D9A83E]' : 'text-[#B88725]',

    heading: isDark ? 'text-white' : 'text-slate-900',

    headingAccent: isDark ? 'bg-gradient-to-r from-[#F6D27A] to-[#D9A83E] bg-clip-text text-transparent' : 'gold-text',

    description: isDark ? 'text-sm leading-7 text-white/70 sm:text-base' : 'text-base leading-8 text-slate-600',

    dashboard: isDark ? 'border-white/10 bg-[#080a0a]/80 shadow-[0_0_80px_rgba(217,168,62,.06)] backdrop-blur-xl' : 'border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]',

    divider: isDark ? 'border-white/10' : 'border-slate-200',

    label: isDark ? 'text-white/40' : 'text-slate-400',

    value: isDark ? 'text-white' : 'text-slate-900',

    status: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/5 text-[#D9A83E]' : 'border-[#D9A83E]/30 bg-[#D9A83E]/[0.06] text-[#B88725]',

    topLabel: isDark ? 'text-white' : 'text-slate-900',

    topMeta: isDark ? 'text-white/50' : 'text-slate-400',

    gridLine: isDark ? 'border-white/5' : 'border-slate-100',

    chartLabels: isDark ? 'text-white/25' : 'text-slate-300',
  };

  return (
    <section id="network" className={`relative overflow-hidden py-28 ${styles.section}`}>
      {/* Background */}
      {isDark ? (
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-background opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[140px]" />
        </div>
      ) : (
        <div className="light-grid absolute inset-0 opacity-50" />
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className={`text-xs font-semibold uppercase tracking-[.25em] ${styles.eyebrow}`}>Network Infrastructure</div>

          <h2 className={`mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${styles.heading}`}>
            Built around <span className={styles.headingAccent}>reliability.</span>
          </h2>

          <p className={`mt-5 max-w-2xl ${styles.description}`}>Communication infrastructure should work quietly in the background — consistently, predictably and intelligently.</p>
        </div>

        {/* Network Dashboard */}
        <div className={`relative overflow-hidden rounded-2xl border sm:rounded-3xl ${styles.dashboard} ${isDark ? 'mt-16' : ''}`}>
          {isDark && <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A83E]/50 to-transparent" />}

          {/* Top Bar */}
          <div className={`flex flex-col justify-between gap-4 border-b px-6 py-4 sm:flex-row sm:items-center ${styles.divider}`}>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] ${isDark ? 'opacity-60' : 'opacity-50'}`} />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
              </span>

              <span className={`text-xs font-medium ${styles.topLabel}`}>ARVENTA NETWORK</span>

              <span className={`rounded-full border px-2.5 py-1 text-[9px] uppercase tracking-wider ${styles.status}`}>Operational</span>
            </div>

            <div className={`flex gap-6 text-[10px] ${styles.topMeta}`}>
              <span>
                VOICE
                <b className={`ml-1 ${styles.topLabel}`}>ACTIVE</b>
              </span>

              <span>
                SIP
                <b className={`ml-1 ${styles.eyebrow}`}>READY</b>
              </span>

              <span>
                OPS
                <b className={`ml-1 ${styles.topLabel}`}>24/7</b>
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="grid lg:grid-cols-[.7fr_1.3fr]">
            {/* Metrics */}
            <div className={`grid grid-cols-2 border-b lg:border-b-0 lg:border-r ${styles.divider}`}>
              <div className={`border-b border-r p-8 ${styles.divider}`}>
                <div className={`text-xs uppercase tracking-wider ${styles.label}`}>Voice</div>
                <div className={`mt-3 text-2xl font-semibold ${styles.value}`}>Active</div>
              </div>

              <div className={`border-b p-8 ${styles.divider}`}>
                <div className={`text-xs uppercase tracking-wider ${styles.label}`}>SIP</div>
                <div className={`mt-3 text-2xl font-semibold ${styles.eyebrow}`}>Ready</div>
              </div>

              <div className={`border-r p-8 ${styles.divider}`}>
                <div className={`text-xs uppercase tracking-wider ${styles.label}`}>Routing</div>
                <div className={`mt-3 text-2xl font-semibold ${styles.value}`}>Online</div>
              </div>

              <div className="p-8">
                <div className={`text-xs uppercase tracking-wider ${styles.label}`}>Operations</div>
                <div className={`mt-3 text-2xl font-semibold ${styles.value}`}>24/7</div>
              </div>
            </div>

            {/* Network Chart */}
            <div className="relative min-h-[300px] overflow-hidden p-6">
              <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={`border-t ${styles.gridLine}`} />
                ))}
              </div>

              {isDark && <div className="scan-line absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A83E]/60 to-transparent" />}

              <svg className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)]" viewBox="0 0 800 250" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`networkArea-${theme}`} x1={0} x2={0} y1={0} y2={1}>
                    <stop offset="0%" stopColor="#D9A83E" stopOpacity=".18" />
                    <stop offset="100%" stopColor="#D9A83E" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <path
                  d="M0 210
                    C80 180 90 195 150 145
                    S220 170 275 125
                    S350 95 400 130
                    S465 150 515 85
                    S575 115 620 65
                    S690 90 740 40
                    S770 55 800 25
                    L800 250
                    L0 250 Z"
                  fill={`url(#networkArea-${theme})`}
                />

                <path
                  d="M0 210
                    C80 180 90 195 150 145
                    S220 170 275 125
                    S350 95 400 130
                    S465 150 515 85
                    S575 115 620 65
                    S690 90 740 40
                    S770 55 800 25"
                  fill="none"
                  stroke="#D9A83E"
                  strokeWidth="1.5"
                />
              </svg>

              <div className={`absolute bottom-5 left-6 right-6 flex justify-between text-[9px] uppercase tracking-wider ${styles.chartLabels}`}>
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
