'use client';

interface PageLoaderProps {
  isLight: boolean;
  message?: string;
  className?: string;
}

export default function PageLoader({ isLight, message = 'Preparing your experience', className = '' }: PageLoaderProps) {
  const theme = {
    section: isLight ? 'bg-[#FAFAF8] text-[#151515]' : 'bg-[#050606] text-white',

    atmosphere: 'bg-[#D9A83E]/10',

    eyebrow: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',

    gradient: isLight ? 'from-[#A87920] via-[#D9A83E] to-[#8E681F]' : 'from-[#F6D27A] via-[#D9A83E] to-[#A87920]',

    body: isLight ? 'text-[#5E5E5E]' : 'text-white/90',

    track: isLight ? 'bg-[#E5E5E0]' : 'bg-white/10',

    ring: isLight ? 'border-[#D9A83E]/25' : 'border-[#D9A83E]/20',

    logo: isLight ? 'border-[#D9A83E]/60 bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,.06)]' : 'border-[#D9A83E]/60 bg-[#080A0A]/95 shadow-[0_0_45px_rgba(217,168,62,.16)]',

    logoLetter: isLight ? 'text-[#A87920]' : 'text-[#D9A83E]',
  };

  return (
    <section role="status" aria-live="polite" aria-label="Loading page content" className={`relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-20 transition-colors duration-300 ${theme.section} ${className}`}>
      {/* Ambient gold glow */}
      <div aria-hidden="true" className={`pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${theme.atmosphere}`} />
      {/* Decorative orbital rings */}
      <div aria-hidden="true" className={`pointer-events-none absolute h-64 w-64 animate-[spin_18s_linear_infinite] rounded-full border ${theme.ring}`} />

      <div aria-hidden="true" className={`pointer-events-none absolute h-48 w-48 animate-[spin_14s_linear_infinite_reverse] rounded-full border ${theme.ring}`} />

      {/* Loader content */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-8">
        {/* Animated brand logo */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div aria-hidden="true" className="absolute inset-0 animate-spin rounded-[28px] border-2 border-[#D9A83E]/15 border-t-[#D9A83E]" style={{ animationDuration: '2.5s' }} />

          <div className={`flex h-[68px] w-[68px] items-center justify-center rounded-2xl border backdrop-blur-xl ${theme.logo}`}>
            <span className={`text-4xl font-bold tracking-tight ${theme.logoLetter}`}>A</span>
          </div>

          <span aria-hidden="true" className="absolute right-0 top-1 h-2.5 w-2.5 animate-pulse rounded-full bg-[#D9A83E] shadow-[0_0_12px_rgba(217,168,62,.7)]" />
        </div>

        {/* Brand identity */}
        <p className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] ${theme.eyebrow}`}>Connecting Tomorrow</p>

        <h2 className="text-center text-2xl font-bold tracking-[0.22em]">ARVENTA</h2>

        <p className={`mt-2 text-[11px] font-medium tracking-[0.48em] ${theme.eyebrow}`}>NETWORKS</p>

        {/* Loading message */}
        <p className={`mt-8 text-sm text-center ${theme.body}`}>
          {message}
          <span className="ml-1 inline-block animate-pulse">...</span>
        </p>

        {/* Animated progress bar */}
        <div className={`mt-7 h-[3px] w-48 overflow-hidden rounded-full ${theme.track}`}>
          <div
            aria-hidden="true"
            className={`h-full w-2/5 rounded-full bg-gradient-to-r ${theme.gradient} animate-[loader-slide_1.5s_ease-in-out_infinite]`}
            style={{
              boxShadow: '0 0 12px rgba(217,168,62,.3)',
            }}
          />
        </div>

        {/* Footer label */}
        <p className={`mt-4 text-[9px] font-medium uppercase tracking-[0.3em] ${theme.body}`}>Establishing Connection</p>
      </div>

      <style jsx>{`
        @keyframes loader-slide {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
