import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

interface RootState {
  theme: {
    theme: 'dark' | 'light';
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Chief Technology Officer',
    company: 'Nexus Networks',
    quote: 'Their infrastructure has transformed how we manage connectivity across our operations. The reliability, attention to detail, and technical expertise have made a measurable difference to our business.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Director of Operations',
    company: 'Vertex Solutions',
    quote: 'What impressed us most was their ability to understand our requirements and build a solution that could grow with us. The entire experience felt thoughtful, professional, and dependable.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 3,
    name: 'Daniel Chen',
    role: 'Network Infrastructure Lead',
    company: 'CloudBridge Systems',
    quote: 'We needed a partner who could simplify a complex network environment without compromising performance. Their team delivered a scalable foundation and excellent ongoing support.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 4,
    name: 'Olivia Bennett',
    role: 'Managing Director',
    company: 'Elevate Technologies',
    quote: 'From the initial consultation to implementation, everything was handled with clarity and care. We now have greater confidence in our infrastructure and a partner we can trust.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Anderson',
    role: 'Head of IT Infrastructure',
    company: 'Apex Digital',
    quote: 'The team brought structure and clarity to our infrastructure challenges. Their scalable solutions and responsive support have helped us build a more resilient and future-ready network.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Technology Director',
    company: 'Brightwave Communications',
    quote: 'We needed a flexible solution that could keep pace with our growth. Their thoughtful approach, technical knowledge, and consistent communication made the entire process seamless.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 7,
    name: 'James Mitchell',
    role: 'Chief Operating Officer',
    company: 'Summit Connect',
    quote: 'From planning to deployment, the experience was smooth and professional. We appreciate the focus on reliability, long-term performance, and solutions tailored to our operational needs.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: 8,
    name: 'Ananya Kapoor',
    role: 'Network Operations Manager',
    company: 'Pinnacle Technologies',
    quote: 'Their forward-thinking approach has given our team greater confidence in managing network demands. The combination of flexibility, expertise, and dependable support stands out.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
  },
];

const Testimonials = () => {
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
            Client Experiences
          </div>

          <h2 className={`font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${styles.heading}`}>
            Trusted by those
            <br />
            who expect <span className="bg-gradient-to-r from-[#FFF0B5] via-[#D9A83E] to-[#A87918] bg-clip-text text-transparent">more.</span>
          </h2>

          <p className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${styles.paragraph}`}>The people behind the partnerships. Discover how our infrastructure solutions help businesses move forward with confidence.</p>
        </div>

        {/* Centered Swiper */}
        <div className="relative mx-auto mt-16 w-full min-w-0 sm:mt-20">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={false}
            centerInsufficientSlides
            spaceBetween={20}
            speed={650}
            loop
            grabCursor
            watchOverflow
            autoplay={{
              delay: 1500,
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
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="testimonials-swiper !mx-0 !w-full !overflow-hidden"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <article className={`group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 sm:p-8 ${styles.card}`}>
                  {/* Decorative quote mark */}
                  <div aria-hidden="true" className={`pointer-events-none absolute right-6 top-3 font-serif text-8xl leading-none opacity-10 ${styles.gold}`}>
                    “
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
              <button type="button" aria-label="Previous testimonials" className={`testimonial-prev flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${styles.button}`}>
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="M19 12H5m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button type="button" aria-label="Next testimonials" className={`testimonial-next flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${styles.button}`}>
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
