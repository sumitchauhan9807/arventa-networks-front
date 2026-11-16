import { Globe2, Clock3, ArrowRight } from 'lucide-react';
import { OperationsAmbientBackground } from '@/components/common/AmbientBackgrounds';

function CoverageTimeline({ theme = 'dark', content, shifts }) {
  const dark = theme === 'dark';
  const muted = dark ? 'text-white/55' : 'text-slate-600';
  const section = dark ? 'bg-[#0D1010] text-white' : 'bg-white text-slate-950';
  const panel = dark ? 'border-white/10 bg-[#111414]' : 'border-slate-200 bg-[#FAFAF8]';

  const features = [
    {
      title: content.featureOneTitle,
      description: content.featureOneDescription,
      icon: Globe2,
    },
    {
      title: content.featureTwoTitle,
      description: content.featureTwoDescription,
      icon: Clock3,
    },
  ];

  return (
    <section className={`${section} relative overflow-hidden py-24 sm:py-32`}>
      <OperationsAmbientBackground isDark={dark} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E0B653]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88C30]">{content.eyebrow}</span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {content.titleLine1}
              <br />
              <span className="text-[#C69B3D]">{content.titleHighlight}</span>
            </h2>

            <p className={`mt-6 max-w-xl text-sm leading-7 ${muted}`}>{content.description}</p>

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="mt-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E0B653]/25 bg-[#E0B653]/10 text-[#C69B3D]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${muted}`}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`rounded-3xl border p-5 sm:p-8 ${panel}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className={`text-xs uppercase tracking-[0.18em] ${muted}`}>{content.panelEyebrow}</p>
                <h3 className="mt-2 text-xl font-semibold">{content.panelTitle}</h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0B653]/10 text-[#C69B3D]">
                <Globe2 size={23} />
              </div>
            </div>

            <div className="mt-8 flex h-3 overflow-hidden rounded-full bg-black/10">
              {shifts.map((shift, index) => (
                <div key={shift.label} style={{ width: shift.width }} className={index === 1 ? 'bg-[#E0B653]' : index === 0 ? 'bg-[#9A7020]' : 'bg-[#F3D58A]'} />
              ))}
            </div>

            <div className={`mt-3 flex justify-between text-xs ${muted}`}>
              {content.timelineLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {shifts.map((shift) => {
                const Icon = shift.icon;

                return (
                  <div key={shift.label} className={`rounded-2xl border p-4 transition-colors hover:border-[#E0B653]/40 sm:p-5 ${dark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E0B653]/10 text-[#C69B3D]">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-bold tracking-[0.14em] text-[#B88C30]">{shift.label}</span>
                          <span className={`text-xs ${muted}`}>{shift.time}</span>
                        </div>

                        <h4 className="mt-2 font-semibold">{shift.title}</h4>
                        <p className={`mt-2 text-sm leading-6 ${muted}`}>{shift.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#E0B653]/20 bg-[#E0B653]/[0.06] p-4">
              <ArrowRight size={18} className="shrink-0 text-[#C69B3D]" />
              <p className={`text-xs leading-6 ${muted}`}>{content.handoverText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoverageTimeline