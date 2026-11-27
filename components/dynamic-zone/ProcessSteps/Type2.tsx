import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';
import { Activity, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useSelector } from "react-redux";

function ProcessSteps({ data}) {
  const reduxTheme = useSelector((state) => state.theme?.theme);

  const dark = reduxTheme === 'dark';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const card = dark ? 'border-white/10 bg-[#111313] hover:border-[#C69B3D]/50' : 'border-slate-200 bg-white hover:border-[#C69B3D]/60';

  return (
    <section className={`relative overflow-hidden py-24 sm:py-32 ${dark ? 'bg-[#0D1010] text-white' : 'bg-white text-slate-950'}`}>
      <OperationsAmbientBackground isDark={dark} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C69B3D]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{data.content.eyebrow}</span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {data.content.titleLine1}
              <br />
              <span className="text-[#C69B3D]">{data.content.titleHighlight}</span>
            </h2>
          </div>

          <p className={`max-w-md text-sm leading-7 ${muted}`}>{data.content.description}</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-[#C69B3D]/10 via-[#C69B3D]/60 to-[#C69B3D]/10 lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, index) => {
             const Icon = ArrowUpRight

              return (
                <article key={step.number} className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${card}`}>
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#C69B3D]/[0.04] blur-2xl transition-colors group-hover:bg-[#C69B3D]/[0.12]" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-5xl font-semibold tracking-tighter text-[#C69B3D]/25 transition-colors group-hover:text-[#C69B3D]/60">{step.number}</span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C69B3D]/25 bg-[#C69B3D]/10 text-[#C69B3D] transition-all duration-300 group-hover:bg-[#C69B3D] group-hover:text-black">
                       <Icon size={21} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="relative mt-9">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B88C30]">{step.subtitle}</span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h3>

                    <p className={`mt-4 text-sm leading-7 ${muted}`}>{step.description}</p>
                  </div>

                  <div className="relative mt-8 flex items-center justify-between border-t border-current/10 pt-5">
                    <span className={`text-xs ${muted}`}>{data.content.phaseLabel}</span>
                    <ArrowUpRight size={18} className="text-[#C69B3D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {index < data.steps.length - 1 && <span className="absolute right-0 top-10 hidden h-px w-5 translate-x-full bg-[#C69B3D]/50 lg:block" />}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
