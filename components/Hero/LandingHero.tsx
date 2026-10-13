import Animations from '@/components/Animations/index';
type HeroProps = {
  animation?: 'home' | 'about' | 'operations' | 'pbx' | 'partners' | 'compliance';
};
import { useSelector } from 'react-redux';

type RootState = {
  theme: {
    theme: 'light' | 'dark';
  };
};

const Hero = ({ animation = 'home' }: HeroProps) => {
  const reduxTheme = useSelector((state: RootState) => state.theme.theme);

  const isLight = reduxTheme === 'light';

  const theme = {
    section: isLight ? 'bg-[#FAFAF8] text-[#151515]' : 'bg-[#050606] text-white',

    atmosphere: isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/10',

    eyebrow: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    eyebrowLine: 'bg-[#D9A83E]',

    heading: isLight ? 'text-[#171717]' : 'text-white',
    gradient: isLight ? 'from-[#A87920] via-[#D9A83E] to-[#8E681F]' : 'from-[#F6D27A] via-[#D9A83E] to-[#A87920]',

    body: isLight ? 'text-[#5E5E5E]' : 'text-white/93',

    primaryButton: isLight ? 'text-[#171717] shadow-[0_10px_30px_rgba(217,168,62,.18)] hover:bg-[#E7BD5B] hover:shadow-[0_12px_35px_rgba(217,168,62,.25)]' : 'text-black hover:bg-[#F5CC70]',

    secondaryButton: isLight ? 'border-[#D7D7D2] bg-white/70 text-[#303030] hover:border-[#D9A83E] hover:text-[#A87920]' : 'border-white/15 text-white/95 hover:border-[#D9A83E] hover:text-[#D9A83E]',

    statText: isLight ? 'text-[#171717]' : 'text-white',
    statMuted: isLight ? 'text-[#777]' : 'text-white/82',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',

    globeFill: isLight ? 'rgba(255,255,255,.72)' : 'rgba(7,9,9,.85)',
    globeStrokeOpacity: isLight ? '.28' : '.18',
    globeInnerStroke: isLight ? '#1A1A1A' : 'white',
    globeInnerOpacity: isLight ? '.07' : '.05',
    globeLineOpacity: isLight ? '.22' : '.12',
    globeLineOpacity2: isLight ? '.14' : '.08',
    globeLongitudeOpacity: isLight ? '.16' : '.09',
    globeLongitudeOpacity2: isLight ? '.11' : '.06',

    route: isLight ? '#B8892D' : '#D9A83E',
    routeStrongOpacity: isLight ? '.55' : '.35',
    routeOpacity: isLight ? '.4' : '.25',
    routeSoftOpacity: isLight ? '.25' : '.18',

    hubRing: isLight ? 'border-[#D9A83E]/25' : 'border-[#D9A83E]/20',
    hub: isLight ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,.08)] backdrop-blur' : 'border-[#D9A83E]/60 bg-[#080a0a]/95 shadow-[0_0_70px_rgba(217,168,62,.28)]',
    hubLetter: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
    hubName: isLight ? 'text-[#222]' : 'text-white/97',
    hubSub: isLight ? 'text-[#777]' : 'text-white',

    node: isLight ? 'text-[#292929]' : 'text-white',
    nodeMuted: isLight ? 'text-[#888]' : 'text-white/97',

    panel: isLight ? 'border-[#E2E2DC] bg-white/85 shadow-[0_15px_50px_rgba(0,0,0,.08)]' : 'border-white/10 bg-[#080a0a]/80 shadow-2xl',
    panelLabel: isLight ? 'text-[#555]' : 'text-white/88',
    panelValue: isLight ? 'text-[#222]' : 'text-white',
    panelMuted: isLight ? 'text-[#888]' : 'text-white/95',
    panelDivider: isLight ? 'divide-[#E5E5E0]' : 'divide-white/10',
    trafficBg: isLight ? 'bg-[#ECECE7]' : 'bg-white/5',
    trafficText: isLight ? 'text-[#777]' : 'text-white/88',
    scrollText: isLight ? 'text-[#777]' : 'text-white/93',
  };

  return (
    <section className={`relative min-h-screen overflow-hidden  ${theme.section}`}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" />

        <div
          className={`absolute left-[55%] top-[35%] h-[600px] w-[600px]
            -translate-x-1/2 -translate-y-1/2 rounded-full
            ${theme.atmosphere} blur-[150px]`}
        />

        <div
          className={`absolute right-[-200px] top-[20%] h-[500px] w-[500px]
            rounded-full ${isLight ? 'bg-[#D9A83E]/8' : 'bg-[#D9A83E]/5'}
            blur-[130px]`}
        />

        {isLight && (
          <div
            className="absolute bottom-[-200px] left-[-200px] h-[450px] w-[450px]
              rounded-full bg-[#D9A83E]/5 blur-[120px]"
          />
        )}
      </div>

      {/* Hero content */}
      <div
        className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl
          items-center px-6 py-16 lg:px-8"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-2xl">
            <div
              className={`mb-6 flex items-center gap-3 text-xs font-semibold
                uppercase tracking-[.25em] ${theme.eyebrow}`}
            >
              <span className={`h-px w-10 ${theme.eyebrowLine}`} />
              Global Connectivity. Intelligent Solutions.
            </div>

            <h1
              className={`text-5xl font-semibold leading-[1.03] tracking-tight
                ${theme.heading} sm:text-6xl lg:text-7xl xl:text-[78px]`}
            >
              Connecting
              <span
                className={`block bg-gradient-to-r ${theme.gradient}
                  bg-clip-text text-transparent`}
              >
                the World.
              </span>
              <span className="block">Intelligently.</span>
            </h1>

            <p className={`mt-7 max-w-xl text-base leading-8 ${theme.body} sm:text-lg`}>Arventa Networks connects businesses, carriers and technologies across the globe through intelligent telecom, mobile, IoT and AI infrastructure.</p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className={`group inline-flex items-center gap-5 rounded-md
                  bg-[#D9A83E] px-6 py-4 text-sm font-semibold transition
                  ${theme.primaryButton}`}
              >
                Explore Our Network
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-3 rounded-md border px-6 py-4
                  text-sm font-medium backdrop-blur-sm transition ${theme.secondaryButton}`}
              >
                Talk to an Expert
              </a>
            </div>

            {/* Stats */}
            <div className={`mt-12 grid max-w-xl grid-cols-3 border-t pt-7 ${theme.statBorder}`}>
              <div>
                <div className={`text-2xl font-semibold ${theme.statText}`}>180+</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Countries</div>
              </div>

              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div className={`text-2xl font-semibold ${theme.statText}`}>99.9%</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Network Uptime</div>
              </div>

              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div className={`text-2xl font-semibold ${theme.statText}`}>24/7</div>
                <div className={`mt-1 text-[10px] uppercase tracking-wider ${theme.statMuted}`}>Operations</div>
              </div>
            </div>
          </div>

          <div className="relative h-[560px] sm:h-[650px] lg:h-[700px]">
            <Animations type={animation} />
          </div>
        </div>
      </div>

      {/* Scroll indicator — animation class preserved */}
      <div
        className={`absolute bottom-7 left-1/2 hidden -translate-x-1/2
          flex-col items-center gap-3 text-[8px] uppercase tracking-[.3em]
          sm:flex ${theme.scrollText}`}
      >
        <span>Explore Arventa</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
