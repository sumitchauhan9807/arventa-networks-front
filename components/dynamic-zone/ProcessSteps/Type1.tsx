import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';
import { ArrowUpRight } from 'lucide-react';
function ProcessSteps({ theme = 'dark', content, steps }) {
  const dark = theme === 'dark';
  const section = dark ? 'bg-[#080A0A] text-white' : 'bg-[#FAFAF8] text-slate-950';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const card = dark ? 'border-white/10 bg-white/[0.025] hover:bg-white/[0.05]' : 'border-slate-200 bg-white hover:bg-amber-50/60';

  return (
    <section className={`${section} relative overflow-hidden py-24 sm:py-32`}>
      <OperationsAmbientBackground isDark={dark} />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E0B653]/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E0B653]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{content.eyebrow}</span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {content.titleLine1}
              <br />
              <span className="text-[#C69B3D]">{content.titleHighlight}</span>
            </h2>
          </div>

          <p className={`max-w-lg text-sm leading-7 md:justify-self-end ${muted}`}>{content.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${card}`}>
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-sm text-[#C69B3D]">/ {step.number}</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0B653]/25 bg-[#E0B653]/10 text-[#C69B3D] transition-colors group-hover:bg-[#E0B653] group-hover:text-black">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                </div>

                <p className={`mb-2 text-xs font-medium ${muted}`}>{step.subtitle}</p>

                <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>

                <p className={`text-sm leading-7 ${muted}`}>{step.description}</p>

                <div className="mt-7 flex items-center justify-between">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#E0B653]/60 to-transparent" />
                  <ArrowUpRight size={17} className="ml-3 text-[#C69B3D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {index < steps.length - 1 && <span className="absolute -right-2 top-1/2 z-10 hidden h-3 w-3 rounded-full border border-[#E0B653]/60 bg-[#E0B653]/20 lg:block" />}
              </article>
            );
          })}
        </div>

        <div className={`mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border px-5 py-4 ${dark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C69B3D] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C69B3D]" />
            </span>
            <p className="text-sm font-medium">{content.statusText}</p>
          </div>

          <p className={`text-xs ${muted}`}>{content.flowText}</p>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
