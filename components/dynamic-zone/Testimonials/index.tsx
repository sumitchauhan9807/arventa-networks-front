import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RootState {
  theme: {
    theme: 'dark' | 'light';
  };
}



const swiper = {
  autoplayDelay: 1500,
  speed: 650,
  spaceBetween: 20,
  breakpoints: {
    tablet: 640,
    desktop: 768,
    largeDesktop: 1100,
  },
};

const Testimonials = ({ data }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDark = theme === 'dark';

  const styles = {
    section: isDark ? 'border-white/10 bg-[#070909]' : 'border-[#151716]/10 bg-[#F7F5F0]',

    glow: isDark ? 'bg-[#D9A83E]/[0.055]' : 'bg-[#D9A83E]/[0.09]',

    dots: isDark ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]' : 'bg-[radial-gradient(circle,rgba(21,23,22,0.10)_1px,transparent_1px)]',

    badge: isDark ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]' : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    card: isDark ? 'border-white/10 bg-white/[0.025] hover:border-[#D9A83E]/30 hover:bg-white/[0.045]' : 'border-[#151716]/10 bg-white/70 shadow-[0_12px_40px_rgba(21,23,22,0.04)] hover:border-[#B88A28]/30 hover:bg-white/90',

    muted: isDark ? 'text-white/45' : 'text-[#151716]/55',

    quote: isDark ? 'text-white/75' : 'text-[#151716]/75',

    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    button: isDark ? 'border-white/10 bg-white/[0.03] text-white hover:border-[#D9A83E]/50 hover:text-[#D9A83E]' : 'border-[#151716]/10 bg-white/70 text-[#151716] hover:border-[#B88A28]/40 hover:text-[#A87918]',
  };

  return (
    <section className={`relative overflow-hidden border-b py-24 sm:py-32 ${styles.section}`}>
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute left-1/2 top-[-200px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[160px] ${styles.glow}`} />

        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.06),transparent_45%)]' : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_45%)]'}`} />

        <div className={`absolute inset-0 ${styles.dots} bg-[size:24px_24px]`} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={`mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${styles.badge}`}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]" />
            {data.section.eyebrow}
          </div>

          <h2 className={`font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${styles.heading}`}>
            {data.section.heading.first}
            <br />
            {data.section.heading.second} <span className="bg-gradient-to-r from-[#FFF0B5] via-[#D9A83E] to-[#A87918] bg-clip-text text-transparent">{data.section.heading.highlight}</span>
          </h2>

          <p className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${styles.paragraph}`}>{data.section.description}</p>
        </div>

        {/* Centered Swiper */}
        <div className="relative mx-auto mt-16 w-full min-w-0 sm:mt-20">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={false}
            centerInsufficientSlides
            spaceBetween={swiper.spaceBetween}
            speed={swiper.speed}
            loop
            grabCursor
            watchOverflow
            autoplay={{
              delay: swiper.autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            breakpoints={{
              [swiper.breakpoints.tablet]: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              [swiper.breakpoints.desktop]: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              [swiper.breakpoints.largeDesktop]: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="testimonials-swiper !mx-0 !w-full !overflow-hidden"
          >
            {data.items.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <article className={`group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 sm:p-8 ${styles.card}`}>
                  {/* Decorative quote mark */}
                  <div aria-hidden="true" className={`pointer-events-none absolute right-6 top-3 font-serif text-8xl leading-none opacity-10 ${styles.gold}`}>
                    {data.decorative.quoteMark}
                  </div>

                  {/* Star rating */}
                  <div className="relative z-10 mb-7 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 ${styles.gold}`} aria-hidden="true">
                        <path d="M12 2.5l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L12 17.47l-5.86 3.08 1.12-6.53L2.5 9.39l6.57-.95L12 2.5z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className={`relative z-10 flex-1 text-sm leading-7 sm:text-[15px] ${styles.quote}`}>“{testimonial.quote}”</blockquote>

                  {/* Divider */}
                  <div className="my-7 h-px w-full bg-gradient-to-r from-[#D9A83E]/40 via-[#D9A83E]/10 to-transparent" />

                  {/* Customer profile */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#D9A83E]/40 p-0.5">
                      <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className={`truncate text-sm font-semibold transition-colors duration-300 group-hover:text-[#D9A83E] ${styles.heading}`}>{testimonial.name}</h3>

                      <p className={`mt-1 text-xs leading-5 ${styles.muted}`}>{testimonial.role}</p>

                      <p className={`mt-1 text-xs font-medium ${styles.gold}`}>{testimonial.company}</p>
                    </div>

                    <svg viewBox="0 0 24 24" fill="none" className={`h-6 w-6 shrink-0 ${styles.gold} opacity-60`} aria-hidden="true">
                      <path d="M7 12V7h5v5H7zm0 0c0 3-1 4-3 5m11-5V7h5v5h-5zm0 0c0 3-1 4-3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#D9A83E] to-transparent transition-all duration-700 group-hover:w-full" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation and pagination */}
          <div className="mt-10 flex w-full items-center justify-between gap-6">
            <div className="testimonial-pagination flex min-h-6 flex-1 items-center gap-2" />

            <div className="flex shrink-0 items-center gap-3">
              <button type="button" aria-label="" className={`testimonial-prev flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${styles.button}`}>
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="M19 12H5m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button type="button" aria-label="" className={`testimonial-next flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${styles.button}`}>
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination styling */}
      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          display: inline-block;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 9999px;
          background: ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(21,23,22,0.22)'};
          opacity: 1;
          transition: all 300ms ease;
          cursor: pointer;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #D9A83E;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }

        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
