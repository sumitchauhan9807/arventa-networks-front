const ContactCenter = ({ mode }) => {
  const isDark = mode === 'dark';

  const products = [
    {
      icon: '✦',
      title: 'Tornado Dialer',
      description: 'High performance. Maximum reach.',
    },
    {
      icon: '◇',
      title: 'Call Con Dialer',
      description: 'Flexible. Reliable. Scalable.',
    },
    {
      icon: 'AI',
      title: 'AI Platform',
      description: 'Intelligent automation for better results.',
    },
    {
      icon: '◇',
      title: 'Fraud Prevention',
      description: 'Protect your business and customers.',
    },
    {
      icon: 'API',
      title: 'Software & APIs',
      description: 'Integrate. Automate. Grow.',
    },
  ];

  const styles = {
    section: isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900',

    imageOverlay: isDark ? 'bg-gradient-to-r from-black via-black/90 to-black/70' : 'bg-gradient-to-r from-white/95 via-white/85 to-white/65',

    imageOpacity: isDark ? 'opacity-35' : 'opacity-20',

    description: isDark ? 'text-white/70' : 'text-slate-600',

    card: isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white/80',

    cardDescription: isDark ? 'text-white/60' : 'text-slate-500',

    iconBackground: isDark ? 'border-arventa-gold/30 bg-black/20' : 'border-arventa-gold/30 bg-arventa-gold/[0.04]',
  };

  return (
    <section
      id="contact-center"
      className={`
        relative overflow-hidden
        border-y
        ${styles.section}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`
            absolute inset-0
            bg-cover bg-center
            ${styles.imageOpacity}
          `}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80")',
          }}
        />

        <div
          className={`
            absolute inset-0
            ${styles.imageOverlay}
          `}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Intro */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">Contact Center &amp; Software</div>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Smarter Dialers.
              <br />
              <span className="gold-text">Better Conversations.</span>
            </h2>

            <p
              className={`
                mt-6 max-w-xl leading-8
                transition-colors duration-300
                ${styles.description}
              `}
            >
              Boost your efficiency with our advanced dialer solutions, AI platform and fraud prevention tools.
            </p>

            <a
              href="#"
              className="
                group
                mt-8 inline-flex items-center gap-5
                rounded-md
                bg-arventa-gold
                px-6 py-4
                text-sm font-semibold text-black
                transition-all duration-300 ease-out
                hover:bg-arventa-goldLight
                hover:shadow-[0_12px_35px_rgba(217,168,62,0.22)]
              "
            >
              Discover Contact Center Solutions
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

          {/* Products */}
          <div className="space-y-3">
            {products.map((product) => (
              <a
                key={product.title}
                href="#"
                className={`
                  group
                  flex items-center gap-5
                  rounded-xl
                  border
                  p-5
                  backdrop-blur-md
                  ${styles.card}
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-arventa-gold/50
                  hover:bg-arventa-gold/[0.05]
                  hover:shadow-[0_10px_30px_rgba(217,168,62,0.10)]
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    border
                    text-sm font-semibold text-arventa-gold
                    ${styles.iconBackground}
                    transition-all duration-300 ease-out
                    group-hover:scale-105
                    group-hover:border-arventa-gold/60
                    group-hover:bg-arventa-gold/[0.08]
                    group-hover:shadow-[0_0_18px_rgba(217,168,62,0.15)]
                  `}
                >
                  {product.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className="
                      font-semibold
                      transition-colors duration-300
                      group-hover:text-arventa-gold
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className={`
                      mt-1 text-xs
                      transition-colors duration-300
                      ${styles.cardDescription}
                    `}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="
                    text-arventa-gold
                    transition-all duration-300 ease-out
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenter;
