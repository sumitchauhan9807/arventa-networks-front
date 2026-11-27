import { ShieldCheck, ArrowUpRight } from 'lucide-react';

import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';
import { useSelector } from "react-redux";

function PrinciplesGrid({ data  }) {
  const reduxTheme = useSelector((state) => state.theme?.theme);

  const dark = reduxTheme === 'dark';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const card = dark ? 'border-white/10 bg-[#111313] hover:border-[#C69B3D]/45' : 'border-slate-200 bg-white hover:border-[#C69B3D]/60';

  return (
    <section className={`relative overflow-hidden py-24 sm:py-32 ${dark ? 'bg-[#080A0A] text-white' : 'bg-[#F7F7F4] text-slate-950'}`}>
      <OperationsAmbientBackground isDark={dark} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C69B3D]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{data.content.eyebrow}</span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              {data.content.titleLine1}
              <br />
              <span className="text-[#C69B3D]">{data.content.titleLine2}</span>
            </h2>
          </div>

          <p className={`max-w-xl text-sm leading-7 lg:justify-self-end ${muted}`}>{data.content.description}</p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {data.items.map((item) => {
            const Icon = ShieldCheck

            return (
              <article key={item.number} className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${card}`}>
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C69B3D]/[0.04] blur-3xl transition-all group-hover:bg-[#C69B3D]/[0.12]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C69B3D]/25 bg-[#C69B3D]/10 text-[#C69B3D] transition-all duration-300 group-hover:bg-[#C69B3D] group-hover:text-black">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <span className="font-mono text-xs text-[#C69B3D]">
                    {data.content.principlePrefix} / {item.number}
                  </span>
                </div>

                <div className="relative mt-9">
                  <span className="inline-flex rounded-full border border-[#C69B3D]/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B88C30]">{item.tag}</span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{item.title}</h3>

                  <p className={`mt-4 max-w-lg text-sm leading-7 ${muted}`}>{item.description}</p>
                </div>

                <div className="relative mt-8 flex items-center justify-between border-t border-current/10 pt-5">
                  <span className={`text-xs ${muted}`}>{data.content.philosophyFooter}</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C69B3D]/25 text-[#C69B3D] transition-all group-hover:border-[#C69B3D] group-hover:bg-[#C69B3D] group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#C69B3D]/25 bg-[#C69B3D]/[0.07] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#C69B3D]/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B88C30]">{data.content.approachEyebrow}</span>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {data.content.approachTitle}
                <span className="text-[#C69B3D]">{data.content.approachHighlight}</span>
              </h3>

              <p className={`mt-4 max-w-2xl text-sm leading-7 ${muted}`}>{data.content.approachDescription}</p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C69B3D]/30 bg-[#C69B3D]/10 text-[#C69B3D]">
                <ShieldCheck size={30} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold">{data.content.approachLabel}</p>
                <p className={`mt-1 text-xs ${muted}`}>{data.content.approachSubLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrinciplesGrid;
