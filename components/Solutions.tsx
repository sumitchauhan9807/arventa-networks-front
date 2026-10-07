const Solutions = ({ mode }) => {
  const isDark = mode === 'dark';

  const solutions = [
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
      icon: '◈',
      title: 'Carrier & Network',
      description: 'SIP Trunking, Voice, DIDs, Connectivity & Security.',
    },
    {
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
      icon: '▣',
      title: 'Mobile & IoT',
      description: 'MVNO, eSIM, IoT / M2M connectivity.',
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
      icon: '◉',
      title: 'Contact Center',
      description: 'Dialers, AI, Fraud Prevention & APIs.',
    },
  ];

  const styles = {
    section: isDark ? 'text-white' : 'text-slate-900',

    description: isDark ? 'text-white/60' : 'text-slate-500',

    card: isDark ? 'border-white/10 bg-arventa-card' : 'border-slate-200 bg-white',

    cardDescription: isDark ? 'text-white/60' : 'text-slate-500',
  };

  return (
    <section id="solutions" className={`relative overflow-hidden py-28 ${styles.section}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Intro */}
          <div>
            <div className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">What We Do</div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Our <span className="gold-text">Solutions</span>
            </h2>

            <p
              className={`
                mt-6 max-w-md leading-8
                transition-colors duration-300
                ${styles.description}
              `}
            >
              From carrier services to AI-powered contact center solutions, we provide the infrastructure and software you need to grow, connect and succeed.
            </p>

            <a
              href="#"
              className="
                mt-8 inline-flex items-center gap-5
                rounded-md
                border border-arventa-gold/50
                px-6 py-4
                text-sm font-medium text-arventa-gold
                transition-all duration-300 ease-out
                hover:bg-arventa-gold
                hover:text-black
                hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]
              "
            >
              Explore All Solutions
              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
            {solutions.map((solution) => (
              <a
                key={solution.title}
                href="#"
                className={`
                  group relative overflow-hidden rounded-xl
                  border
                  ${styles.card}
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:border-arventa-gold/40
                  hover:shadow-[0_18px_45px_rgba(217,168,62,0.12)]
                `}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <div
                    className="
                      absolute inset-0
                      bg-cover bg-center
                      transition-transform duration-700 ease-out
                      group-hover:scale-105
                    "
                    style={{
                      backgroundImage: `url("${solution.image}")`,
                    }}
                  />

                  {/* Image overlay */}
                  <div
                    className={`
                      absolute inset-0
                      transition-opacity duration-500
                      ${isDark ? 'bg-black/20 group-hover:bg-black/10' : 'bg-white/10 group-hover:bg-arventa-gold/[0.04]'}
                    `}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      text-arventa-gold
                      transition-all duration-300 ease-out
                      group-hover:-translate-y-1
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_10px_rgba(217,168,62,0.35)]
                    "
                  >
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      font-semibold
                      transition-colors duration-300
                      group-hover:text-arventa-gold
                    "
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      mt-3 text-xs leading-6
                      transition-colors duration-300
                      ${styles.cardDescription}
                    `}
                  >
                    {solution.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="
                      mt-6
                      text-arventa-gold
                      transition-all duration-300 ease-out
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </div>

                  {/* Bottom gold line */}
                  <span
                    className="
                      absolute bottom-0 left-0
                      h-px w-0
                      bg-arventa-gold
                      transition-all duration-500 ease-out
                      group-hover:w-full
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
