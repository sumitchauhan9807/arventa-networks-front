
'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const Partners = ({ data = [] }) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  return (
    <section
      className={`w-full border-b py-14 transition-colors duration-300 ${
        isDark
          ? 'border-white/10 bg-black text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div
        className={`mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] ${
          isDark ? 'text-white/60' : 'text-slate-500'
        }`}
      >
        Trusted by Industry Leaders
      </div>

      <div className="grid w-full grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map(({ name, image, url }) => {
          const LogoContent = (
            <>
              <div
                className={`flex h-24 w-full items-center justify-center overflow-hidden rounded-xl p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                  isDark ? 'bg-white/[0.06]' : 'bg-gray-50'
                }`}
              >
                <img
                  src={image}
                  alt={`${name} logo`}
                  loading="lazy"
                  draggable="false"
                  className="animate-partner-logo max-h-12 w-auto max-w-full cursor-pointer object-contain grayscale opacity-60 transition-all duration-700 ease-out group-hover:[transform:rotateY(360deg)] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

              <h3
                className={`mt-4 text-center text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-amber-500 sm:text-sm ${
                  isDark ? 'text-white/70' : 'text-gray-700'
                }`}
              >
                {name}
              </h3>
            </>
          );

          return (
            <div key={name}>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name}`}
                  className="group flex h-full flex-col items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {LogoContent}
                </a>
              ) : (
                <div
                  className="group flex h-full flex-col items-center rounded-xl"
                  title={name}
                >
                  {LogoContent}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes partnerLogoFloat {
          0%, 100% {
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

        .group:hover .animate-partner-logo {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-partner-logo {
            animation: none;
          }

          section * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
