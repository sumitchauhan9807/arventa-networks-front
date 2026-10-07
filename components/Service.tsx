const Service = ({ mode }) => {
  const isDark = mode === 'dark';

  const items = [
    {
      icon: '◈',
      title: 'Carrier & Wholesale',
      description: 'SIP Trunking, Origination/Termination, LCR',
    },
    {
      icon: '▣',
      title: 'Mobile & MVNO',
      description: 'Flexible mobile solutions for your business',
    },
    {
      icon: '△',
      title: 'IoT / M2M',
      description: 'Connected devices. Unlimited possibilities.',
    },
    {
      icon: '◉',
      title: 'Contact Center Software',
      description: 'Powerful dialers, AI and fraud prevention.',
    },
    {
      icon: '◎',
      title: 'Global Network',
      description: 'Secure. Scalable. Reliable.',
    },
  ];

  const styles = {
    section: isDark ? 'border-white/10 bg-[#080a0a] text-white' : 'border-slate-200 bg-white text-slate-900',

    itemBorder: isDark ? 'border-white/10' : 'border-slate-200',

    itemHover: isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-arventa-gold/[0.04]',

    heading: isDark ? 'text-white' : 'text-slate-900',

    description: isDark ? 'text-white/60' : 'text-slate-500',
  };

  return (
    <section className={`border-y ${styles.section}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <a
            key={item.title}
            href="#"
            className={`
              group relative p-8 text-center
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
              ${styles.itemBorder}
              ${styles.itemHover}
              ${index < 4 ? 'border-b lg:border-b-0 lg:border-r' : ''}
            `}
          >
            {/* Icon */}
            <div
              className="
                mx-auto mb-4
                text-2xl text-arventa-gold
                transition-all duration-300 ease-out
                group-hover:-translate-y-1
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_10px_rgba(217,168,62,0.35)]
              "
            >
              {item.icon}
            </div>

            {/* Heading */}
            <h3
              className={`
                text-sm font-semibold
                transition-colors duration-300
                ${styles.heading}
                group-hover:text-arventa-gold
              `}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`
                mt-2 text-xs leading-5
                transition-colors duration-300
                ${styles.description}
                group-hover:text-slate-500
                ${isDark ? 'group-hover:text-white/75' : ''}
              `}
            >
              {item.description}
            </p>

            {/* Gold underline */}
            <span
              className="
                absolute bottom-0 left-1/2
                h-px w-0
                -translate-x-1/2
                bg-arventa-gold
                transition-all duration-300 ease-out
                group-hover:w-16
              "
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Service;
