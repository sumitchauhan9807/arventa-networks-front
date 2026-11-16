import { Globe2 } from 'lucide-react';
import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';

function CoverageTimeline({ theme = 'dark', content , shifts  }) {
  const dark = theme === 'dark';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const panel = dark ? 'border-white/10 bg-[#111313]' : 'border-slate-200 bg-white';

  return (
    <section className={`relative overflow-hidden py-24 sm:py-32 ${dark ? 'bg-[#0A0C0C] text-white' : 'bg-[#F7F7F4] text-slate-950'}`}>
      <OperationsAmbientBackground isDark={dark} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C69B3D]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{content.eyebrow}</span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              {content.titleLine1}
              <br />
              <span className="text-[#C69B3D]">{content.titleHighlight}</span>
            </h2>

            <p className={`mt-6 max-w-xl text-sm leading-7 ${muted}`}>{content.description}</p>
          </div>

          <div className={`rounded-2xl border p-6 sm:p-8 ${panel}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs uppercase tracking-[0.18em] ${muted}`}>{content.statusLabel}</span>
              <span className="flex items-center gap-2 text-xs font-medium text-[#C69B3D]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C69B3D] opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-[#C69B3D]" />
                </span>
                {content.statusText}
              </span>
            </div>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-6xl font-semibold tracking-tighter sm:text-7xl">{content.metricValue}</span>
              <span className={`mb-2 max-w-24 text-xs leading-5 ${muted}`}>{content.metricDescription}</span>
            </div>

            <div className="mt-7 flex h-2 overflow-hidden rounded-full bg-black/10">
              {shifts.map((shift, index) => (
                <div key={shift.label} style={{ width: shift.width }} className={index === 0 ? 'bg-[#9A7020]' : index === 1 ? 'bg-[#C69B3D]' : 'bg-[#F3D58A]'} />
              ))}
            </div>

            <div className={`mt-3 flex justify-between text-[10px] ${muted}`}>
              {content.timelineLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#C69B3D]/50 to-transparent md:block" />

          {shifts.map((shift, index) => {
            const Icon = shift.icon;

            return (
              <article key={shift.label} className="relative">
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C69B3D]/30 bg-[#C69B3D]/10 text-[#C69B3D]">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>

                  <span className={`font-mono text-xs ${muted}`}>
                    {content.phasePrefix} / {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C69B3D]/40 sm:p-7 ${panel}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[0.18em] text-[#B88C30]">{shift.label}</span>
                    <span className={`text-xs ${muted}`}>{shift.time}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{shift.title}</h3>

                  <p className={`mt-3 text-sm leading-7 ${muted}`}>{shift.description}</p>

                  <div className="mt-7 border-t border-current/10 pt-4">
                    <span className={`text-xs ${muted}`}>{shift.phaseFooter}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#C69B3D]/20 bg-[#C69B3D]/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-3">
            <Globe2 className="shrink-0 text-[#C69B3D]" size={20} />
            <p className="text-sm font-medium">{content.footerText}</p>
          </div>
          <p className={`text-xs leading-6 ${muted}`}>{content.footerMeta}</p>
        </div>
      </div>
    </section>
  );
}

export default CoverageTimeline