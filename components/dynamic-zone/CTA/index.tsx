import { useSelector } from 'react-redux';

const Index = () => {
  const theme = useSelector((state) => state.theme?.theme);

  const isDark = theme === 'dark';

  const styles = {
    section: isDark ? 'border-y border-white/10' : 'border-y border-slate-200 bg-white',

    background: isDark ? 'bg-gradient-to-r from-[#100d06] via-[#171006] to-black' : 'bg-gradient-to-r from-[#fffaf0] via-[#fffdf8] to-white',

    eyebrow: isDark ? 'text-arventa-gold' : 'text-[#B88725]',

    heading: isDark ? 'text-white' : 'text-slate-900',

    description: isDark ? 'text-white/70' : 'text-slate-600',

    secondaryButton: isDark ? 'border-white/15 text-white/90 hover:border-arventa-gold hover:text-arventa-gold' : 'border-slate-300 text-slate-700 hover:border-[#D9A83E] hover:text-[#B88725]',
  };

  return (
    <section id="contact" className={`relative overflow-hidden py-24 ${styles.section}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 ${styles.background}`} />

      {/* Gold glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className={`text-xs font-semibold uppercase tracking-[.25em] ${styles.eyebrow}`}>Let's Connect</div>

        <h2 className={`mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl ${styles.heading}`}>
          Let's build what's
          <span className="gold-text"> next. </span>
        </h2>

        <p className={`mx-auto mt-6 max-w-2xl leading-8 ${styles.description}`}>Whether you are looking for carrier connectivity, mobile infrastructure, IoT solutions or intelligent communications software, our team is ready to discuss your requirements.</p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {/* Primary CTA */}
          <a href="mailto:sales@example.com" className="inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]">
            Contact / Sales
            <span>→</span>
          </a>

          {/* Secondary CTA */}
          <a href={isDark ? 'index.html' : '#solutions'} className={`inline-flex items-center gap-3 rounded-md border px-7 py-4 text-sm font-medium transition ${styles.secondaryButton}`}>
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
