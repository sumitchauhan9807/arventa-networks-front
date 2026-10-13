'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import 'swiper/css';

const Partners = () => {
  const theme = useSelector((state) => state.theme.theme);

  const isDark = theme === 'dark';

  const brands = [
    {
      name: 'Salt Business',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_14_um_17_01_11_e747f175e8.png',
      url: 'https://www.salt.ch/de/business',
    },
    {
      name: 'Apple',
      image: 'https://strapi.arventa.net/uploads/images_1_d04734391d.jpeg',
      url: 'https://www.apple.com/chde/',
    },
    {
      name: 'Starbucks',
      image: 'https://strapi.arventa.net/uploads/images_d47c9a93a2.jpeg',
      url: 'https://www.starbucks.ch/de',
    },
    {
      name: 'outbox AG',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_14_um_16_48_47_removebg_preview_00d970b0c5.png',
      url: 'https://www.outbox.de/',
    },
    {
      name: 'A1 Austria Business',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_11_53_44_fae035cad7.png',
      url: 'https://www.a1.net/business',
    },
    {
      name: '3U Telekom',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_06_09_um_14_39_59_6eea280e85.png',
      url: 'https://3utelecom.de/',
    },
    {
      name: 'Phonestar',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_06_09_um_15_10_18_73a938ea3e.png',
      url: 'https://www.phonestar.ch/',
    },
    {
      name: 'Wildix Collaboration',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_06_09_um_14_45_10_168c8beb13.png',
      url: 'https://www.wildix.com/de/product/wizyconf-web-conference-professionale/',
    },
    {
      name: 'Collaboration 7',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_06_52_48_4b634ba18f.png',
      url: 'https://app.wildix.com/',
    },
    {
      name: 'Webex',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_06_54_48_371a85c6ef.png',
      url: 'https://www.webex.com/',
    },
    {
      name: 'Gamma Business',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_06_59_16_b371773815.png',
      url: 'https://www.gammacommunications.de/',
    },
    {
      name: 'Amazon Business',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_07_01_35_317b969b71.png',
      url: 'https://www.amazon.de/',
    },
    {
      name: 'Amazon',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_15_um_07_02_20_8411e59e8f.png',
      url: 'https://www.amazon.de/',
    },
    {
      name: 'Mazu Tech Software',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2025_02_13_um_06_20_37_545951b4e6.png',
    },
    {
      name: 'Flirttool Prime Chat',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2025_02_28_um_13_22_51_f4b3fad1df.png',
    },
    {
      name: 'Bellver Visa Card',
      image: 'https://strapi.arventa.net/uploads/Bildschirmfoto_2026_10_09_um_19_38_35_928292bab1.png',
      url: 'https://app.bellvercards.com?ref=idriskawa',
    },
  ];

  return (
    <section className={`overflow-hidden border-b py-14 transition-colors duration-300 ${isDark ? 'border-white/10 bg-black text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-white/60' : 'text-slate-500'}`}>Trusted by Industry Leaders</div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={900}
          slidesPerView={6}
          spaceBetween={16}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 24 },
            768: { slidesPerView: 4, spaceBetween: 28 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1280: { slidesPerView: 6, spaceBetween: 32 },
          }}
          className="trusted-brands-swiper"
        >
          {brands.map(({ name, image, url }) => {
            const LogoContent = (
              <>
                <div className={`flex h-24 w-full items-center justify-center overflow-hidden rounded-xl p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${isDark ? 'bg-white/[0.06]' : 'bg-gray-50'}`}>
                  <img src={image} alt={`${name} logo`} loading="lazy" draggable="false" className="animate-partner-logo max-h-12 w-auto max-w-full cursor-pointer object-contain grayscale opacity-60 transition-all duration-700 ease-out group-hover:[transform:rotateY(360deg)] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" />
                </div>

                <h3 className={`mt-4 text-center text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-amber-500 sm:text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{name}</h3>
              </>
            );

            return (
              <SwiperSlide key={name}>
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}`} className="group flex h-full flex-col items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                    {LogoContent}
                  </a>
                ) : (
                  <div className="group flex h-full flex-col items-center rounded-xl" title={name}>
                    {LogoContent}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .trusted-brands-swiper {
          padding: 8px 2px 16px;
        }

        .trusted-brands-swiper .swiper-slide {
          height: auto;
        }

        @keyframes partnerLogoFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-partner-logo {
          animation: partnerLogoFloat 3s ease-in-out infinite;
          backface-visibility: hidden;
        }

        .trusted-brands-swiper .group:hover .animate-partner-logo {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-partner-logo {
            animation: none;
          }

          .trusted-brands-swiper * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
