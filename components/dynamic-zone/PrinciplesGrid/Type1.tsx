
import { ShieldCheck,  ArrowUpRight } from 'lucide-react';
import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';

function PrinciplesGrid({ theme = 'dark', content , principles  }) {
  const dark = theme === 'dark';
  const section = dark ? 'bg-[#080A0A] text-white' : 'bg-[#F7F7F4] text-slate-950';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const card = dark ? 'border-white/10 bg-[#0E1110] hover:border-[#E0B653]/40' : 'border-slate-200 bg-white hover:border-[#C69B3D]/60';

  return (
    <section className={`${section} relative overflow-hidden py-24 sm:py-32`}>
      <OperationsAmbientBackground isDark={dark} />
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#E0B653]/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#E0B653]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{content.eyebrow}</span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {content.titleLine1}
            <br className="hidden sm:block" /> {content.titleLine2}
          </h2>

          <p className={`mt-6 max-w-2xl text-sm leading-7 ${muted}`}>{content.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.number} className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${card}`}>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E0B653]/[0.04] transition-colors group-hover:bg-[#E0B653]/[0.10]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E0B653]/25 bg-[#E0B653]/10 text-[#C69B3D] transition-all duration-300 group-hover:bg-[#E0B653] group-hover:text-black">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className={`font-mono text-xs ${muted}`}>{item.number} /</span>
                </div>

                <div className="relative mt-8">
                  <span className="inline-flex rounded-full border border-[#E0B653]/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B88C30]">{item.tag}</span>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>

                  <p className={`mt-3 max-w-lg text-sm leading-7 ${muted}`}>{item.description}</p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-current/10 pt-4">
                  <span className={`text-xs ${muted}`}>{content.cardFooter}</span>
                  <ArrowUpRight size={17} className="text-[#C69B3D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#E0B653]/25 bg-[#E0B653]/[0.07] p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-[#E0B653]/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B88C30]">{content.approachEyebrow}</p>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug sm:text-3xl">{content.approachTitle}</h3>

              <p className={`mt-3 max-w-2xl text-sm leading-7 ${muted}`}>{content.approachDescription}</p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E0B653]/30 bg-[#E0B653]/10 text-[#C69B3D]">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrinciplesGrid