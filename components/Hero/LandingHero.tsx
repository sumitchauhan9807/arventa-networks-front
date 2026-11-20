import Animations from '@/components/Animations/index';
import { useSelector } from 'react-redux';

type HeroProps = {
  animation?: 'home' | 'about' | 'operations' | 'pbx' | 'partners' | 'compliance';
};

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

    // Ambient background
    atmosphere: isLight ? 'bg-[#D9A83E]/10' : 'bg-[#D9A83E]/10',
    greenAtmosphere: isLight ? 'bg-[#22C55E]/[0.08]' : 'bg-[#22C55E]/[0.055]',
    redAtmosphere: isLight ? 'bg-[#EF4444]/[0.07]' : 'bg-[#EF4444]/[0.045]',

    // Color palette
    gold: isLight ? '#A87920' : '#F5CC70',
    green: isLight ? '#15803D' : '#4ADE80',
    red: isLight ? '#DC2626' : '#F87171',

    // Eyebrow
    eyebrow: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',

    // Heading
    heading: isLight ? 'text-[#171717]' : 'text-white',

    goldGradient: isLight ? 'from-[#A87920] via-[#D9A83E] to-[#8E681F]' : 'from-[#F6D27A] via-[#D9A83E] to-[#A87920]',

    greenGradient: isLight ? 'from-[#15803D] via-[#22C55E] to-[#166534]' : 'from-[#86EFAC] via-[#22C55E] to-[#15803D]',

    redGradient: isLight ? 'from-[#B91C1C] via-[#EF4444] to-[#991B1B]' : 'from-[#FCA5A5] via-[#EF4444] to-[#B91C1C]',

    multiGradient: isLight ? 'from-[#A87920] via-[#16A34A] to-[#DC2626]' : 'from-[#F5CC70] via-[#4ADE80] to-[#F87171]',

    body: isLight ? 'text-[#5E5E5E]' : 'text-white/80',

    // Primary button
    primaryButton: isLight ? 'text-[#171717] shadow-[0_10px_30px_rgba(217,168,62,.20)] hover:bg-[#E7BD5B] hover:shadow-[0_12px_35px_rgba(217,168,62,.30)]' : 'text-black hover:bg-[#F5CC70]',

    // Secondary button
    secondaryButton: isLight ? 'border-[#D7D7D2] bg-white/70 text-[#303030] hover:border-[#22C55E] hover:text-[#15803D]' : 'border-white/15 bg-white/[0.02] text-white/95 hover:border-[#22C55E]/60 hover:text-[#4ADE80]',

    // Statistics
    statMuted: isLight ? 'text-[#777]' : 'text-white/65',
    statBorder: isLight ? 'border-[#DCDCD6]' : 'border-white/10',

    // Scroll
    scrollText: isLight ? 'text-[#777]' : 'text-white/60',
  };

  return (
    <section
      className={`
        relative min-h-screen overflow-hidden
        ${theme.section}
      `}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Gold atmosphere */}
        <div
          className={`
            absolute left-[55%] top-[35%]
            h-[600px] w-[600px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-[150px]
            ${theme.atmosphere}
          `}
        />

        {/* Green atmosphere */}
        <div
          className={`
            absolute -left-[180px] top-[15%]
            h-[500px] w-[500px]
            rounded-full blur-[150px]
            ${theme.greenAtmosphere}
          `}
        />

        {/* Red atmosphere */}
        <div
          className={`
            absolute -right-[200px] top-[45%]
            h-[500px] w-[500px]
            rounded-full blur-[150px]
            ${theme.redAtmosphere}
          `}
        />

        {/* Secondary gold atmosphere */}
        <div
          className={`
            absolute right-[-200px] top-[20%]
            h-[500px] w-[500px]
            rounded-full blur-[130px]
            ${isLight ? 'bg-[#D9A83E]/[0.08]' : 'bg-[#D9A83E]/[0.05]'}
          `}
        />

        {/* Green bottom atmosphere */}
        <div
          className={`
            absolute bottom-[-200px] left-[25%]
            h-[450px] w-[450px]
            rounded-full blur-[130px]
            ${isLight ? 'bg-[#22C55E]/[0.045]' : 'bg-[#22C55E]/[0.025]'}
          `}
        />

        {/* Fine background dots */}
        <div
          className={`
            absolute inset-0
            ${isLight ? 'bg-[radial-gradient(circle,rgba(21,23,22,0.10)_1px,transparent_1px)]' : 'bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]'}
            bg-[size:28px_28px]
          `}
        />

        {/* Gold dot pattern */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(217,168,62,0.12)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* Green dot pattern */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(34,197,94,0.09)_1px,transparent_1px)]
            bg-[size:96px_96px]
          "
        />

        {/* Red dot pattern */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(239,68,68,0.08)_1px,transparent_1px)]
            bg-[size:120px_120px]
          "
        />

        {/* Top radial highlight */}
        <div
          className={`
            absolute inset-0
            ${isLight ? 'bg-[radial-gradient(ellipse_at_50%_20%,rgba(217,168,62,0.07),transparent_55%)]' : 'bg-[radial-gradient(ellipse_at_50%_20%,rgba(217,168,62,0.055),transparent_55%)]'}
          `}
        />

        {/* Green radial highlight */}
        <div
          className={`
            absolute inset-0
            ${isLight ? 'bg-[radial-gradient(ellipse_at_10%_45%,rgba(34,197,94,0.045),transparent_40%)]' : 'bg-[radial-gradient(ellipse_at_10%_45%,rgba(34,197,94,0.035),transparent_40%)]'}
          `}
        />

        {/* Red radial highlight */}
        <div
          className={`
            absolute inset-0
            ${isLight ? 'bg-[radial-gradient(ellipse_at_90%_60%,rgba(239,68,68,0.04),transparent_40%)]' : 'bg-[radial-gradient(ellipse_at_90%_60%,rgba(239,68,68,0.03),transparent_40%)]'}
          `}
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative mx-auto flex min-h-[calc(100vh-80px)]
          max-w-7xl items-center px-6 py-16 lg:px-8
        "
      >
        <div
          className="
            grid w-full items-center gap-10
            lg:grid-cols-[.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <div
              className={`
                mb-6 flex items-center gap-3
                text-xs font-semibold uppercase
                tracking-[.25em]
                ${theme.eyebrow}
              `}
            >
              <span className="h-px w-10 bg-gradient-to-r from-[#D9A83E] to-[#22C55E]" />
              Global Connectivity. Intelligent Solutions.
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shadow-[0_0_12px_#22C55E]" />
            </div>

            {/* Main heading */}
            <h1
              className={`
                text-5xl font-semibold leading-[1.03]
                tracking-tight
                ${theme.heading}
                sm:text-6xl lg:text-7xl xl:text-[78px]
              `}
            >
              Connecting
              {/* Gold heading */}
              <span
                className={`
                  block bg-gradient-to-r
                  ${theme.goldGradient}
                  bg-clip-text text-transparent
                `}
              >
                the World.
              </span>
              {/* Green heading */}
              <span
                className={`
                  block bg-gradient-to-r
                  ${theme.greenGradient}
                  bg-clip-text text-transparent
                `}
              >
                Intelligently.
              </span>
            </h1>


            {/* Description */}
            <p
              className={`
                mt-7 max-w-xl text-base leading-8
                ${theme.body}
                sm:text-lg
              `}
            >
              Arventa Networks connects businesses, carriers and technologies across the globe through intelligent telecom mobile and IoT infrastructure, powered by next-generation AI solutions .
            </p>

            {/* Feature highlights */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]" />
                <span className={`text-xs font-medium ${theme.body}`}>Global Reach</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
                <span className={`text-xs font-medium ${theme.body}`}>Intelligent Connectivity</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444] shadow-[0_0_10px_#EF4444]" />
                <span className={`text-xs font-medium ${theme.body}`}>Future Ready</span>
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <a
                href="#solutions"
                className={`
                  group inline-flex items-center gap-5
                  rounded-md bg-[#D9A83E]
                  px-6 py-4 text-sm font-semibold
                  transition-all duration-300
                  hover:-translate-y-1
                  ${theme.primaryButton}
                `}
              >
                Explore Our Network
                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className={`
                  group inline-flex items-center gap-3
                  rounded-md border px-6 py-4
                  text-sm font-medium backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  ${theme.secondaryButton}
                `}
              >
                Talk to an Expert
                <span
                  className="
                    text-[#22C55E]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>

            {/* =================================================
                STATISTICS
            ================================================== */}

            <div
              className={`
                mt-12 grid max-w-xl
                grid-cols-3 border-t pt-7
                ${theme.statBorder}
              `}
            >
              {/* Gold statistic */}
              <div>
                <div
                  className={`
                    text-2xl font-semibold
                    bg-gradient-to-r ${theme.goldGradient}
                    bg-clip-text text-transparent
                  `}
                >
                  180+
                </div>

                <div
                  className={`
                    mt-1 text-[10px] uppercase
                    tracking-wider ${theme.statMuted}
                  `}
                >
                  Countries
                </div>
              </div>

              {/* Green statistic */}
              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div
                  className={`
                    text-2xl font-semibold
                    bg-gradient-to-r ${theme.greenGradient}
                    bg-clip-text text-transparent
                  `}
                >
                  99.9%
                </div>

                <div
                  className={`
                    mt-1 text-[10px] uppercase
                    tracking-wider ${theme.statMuted}
                  `}
                >
                  Network Uptime
                </div>
              </div>

              {/* Red statistic */}
              <div className={`border-l pl-5 ${theme.statBorder}`}>
                <div
                  className={`
                    text-2xl font-semibold
                    bg-gradient-to-r ${theme.redGradient}
                    bg-clip-text text-transparent
                  `}
                >
                  24/7
                </div>

                <div
                  className={`
                    mt-1 text-[10px] uppercase
                    tracking-wider ${theme.statMuted}
                  `}
                >
                  Operations
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT ANIMATION
          ================================================== */}

          <div
            className="
              relative h-[560px]
              sm:h-[650px] lg:h-[700px]
            "
          >
            {/* Gold ambient glow */}
            <div
              className={`
                pointer-events-none absolute
                left-1/2 top-1/2
                h-[350px] w-[350px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full blur-[120px]
                ${theme.atmosphere}
              `}
            />

            {/* Green ambient glow */}
            <div
              className={`
                pointer-events-none absolute
                left-[15%] top-[20%]
                h-[200px] w-[200px]
                rounded-full blur-[100px]
                ${theme.greenAtmosphere}
              `}
            />

            {/* Red ambient glow */}
            <div
              className={`
                pointer-events-none absolute
                bottom-[10%] right-[5%]
                h-[200px] w-[200px]
                rounded-full blur-[100px]
                ${theme.redAtmosphere}
              `}
            />

            {/* Animation */}
            <div className="relative z-10 h-full w-full">
              <Animations type={animation} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className={`
          absolute bottom-7 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-3
          text-[8px] uppercase tracking-[.3em]
          sm:flex ${theme.scrollText}
        `}
      >
        <span>Explore Arventa</span>

        <span
          className="
            scroll-line
            relative h-10 w-px
            bg-gradient-to-b
            from-[#D9A83E]
            via-[#22C55E]
            to-[#EF4444]
          "
        />
      </div>
    </section>
  );
};

export default Hero;
