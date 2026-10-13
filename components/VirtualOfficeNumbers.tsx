
'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

const regions = [
  { id: 'popular', label: 'Popular Countries' },
  { id: 'africa', label: 'Africa' },
  { id: 'asia', label: 'Asia' },
  { id: 'europe', label: 'Europe' },
  { id: 'north-america', label: 'North America' },
  { id: 'south-america', label: 'South America' },
];

const country = (name, code, slug) => ({
  name,
  code,
  href: `/${slug}/`,
});

const countries = {
  popular: [
    country('USA', 'us', 'usa'),
    country('United Kingdom', 'gb', 'united-kingdom'),
    country('Australia', 'au', 'australia'),
    country('Canada', 'ca', 'canada'),
    country('Germany', 'de', 'germany'),
    country('France', 'fr', 'france'),
    country('Philippines', 'ph', 'philippines'),
    country('South Africa', 'za', 'south-africa'),
    country('Singapore', 'sg', 'singapore'),
    country('Brazil', 'br', 'brazil-number'),
    country('Netherlands', 'nl', 'netherlands'),
  ],

  africa: [
    country('Algeria', 'dz', 'algeria'),
    country('Benin', 'bj', 'benin'),
    country('Kenya', 'ke', 'kenya'),
    country('Mali', 'ml', 'mali'),
    country('Mauritius', 'mu', 'mauritius'),
    country('Namibia', 'na', 'namibia'),
    country('South Africa', 'za', 'south-africa'),
    country('Tunisia', 'tn', 'tunisia'),
    country('Uganda', 'ug', 'uganda'),
  ],

  asia: [
    country('Australia', 'au', 'australia'),
    country('Hong Kong', 'hk', 'hong-kong'),
    country('Indonesia', 'id', 'indonesia'),
    country('Israel', 'il', 'israel'),
    country('Thailand', 'th', 'thailand'),
    country('Macao', 'mo', 'macau'),
    country('Malaysia', 'my', 'malaysia'),
    country('New Zealand', 'nz', 'new-zealand-number'),
    country('Philippines', 'ph', 'philippines'),
    country('Singapore', 'sg', 'singapore'),
  ],

  europe: [
    country('Austria', 'at', 'austria'),
    country('Belgium', 'be', 'belgium'),
    country('Bosnia and Herzegovina', 'ba', 'bosnia-and-herzegovina'),
    country('Bulgaria', 'bg', 'bulgaria'),
    country('Croatia', 'hr', 'croatia'),
    country('Czech Republic', 'cz', 'czech-republic'),
    country('Denmark', 'dk', 'denmark'),
    country('Estonia', 'ee', 'estonia'),
    country('Finland', 'fi', 'finland'),
    country('France', 'fr', 'france'),
    country('Germany', 'de', 'germany'),
    country('Hungary', 'hu', 'hungary'),
    country('Iceland', 'is', 'iceland-number'),
    country('Ireland', 'ie', 'ireland'),
    country('Lithuania', 'lt', 'lithuania'),
    country('Netherlands', 'nl', 'netherlands'),
    country('Poland', 'pl', 'poland'),
    country('Portugal', 'pt', 'portugal'),
    country('Romania', 'ro', 'romania'),
    country('Slovakia', 'sk', 'slovakia'),
    country('Slovenia', 'si', 'slovenia'),
    country('Sweden', 'se', 'sweden'),
    country('Switzerland', 'ch', 'switzerland'),
    country('United Kingdom', 'gb', 'united-kingdom'),
  ],

  'north-america': [
    country('Barbados', 'bb', 'barbados'),
    country('Canada', 'ca', 'canada'),
    country('Cayman Islands', 'ky', 'cayman-islands'),
    country('El Salvador', 'sv', 'el-salvador'),
    country('Grenada', 'gd', 'grenada'),
    country('Jamaica', 'jm', 'jamaica'),
    country('Mexico', 'mx', 'mexico'),
    country('Panama', 'pa', 'panama'),
    country('Puerto Rico', 'pr', 'puerto-rico'),
    country('USA', 'us', 'usa'),
  ],

  'south-america': [
    country('Argentina', 'ar', 'argentina'),
    country('Brazil', 'br', 'brazil-number'),
    country('Chile', 'cl', 'chile'),
    country('Colombia', 'co', 'colombia'),
    country('Ecuador', 'ec', 'ecuador'),
    country('Peru', 'pe', 'peru'),
    country('Trinidad and Tobago', 'tt', 'trinidad-and-tobago'),
  ],
};

const VirtualOfficeNumbers = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const [activeRegion, setActiveRegion] = useState('popular');
  const [europePage, setEuropePage] = useState(0);

  const styles = {
    section: isDark
      ? 'border-white/10 bg-[#070909]'
      : 'border-[#151716]/10 bg-[#F7F5F0]',

    mainGlow: isDark
      ? 'bg-[#D9A83E]/[0.055]'
      : 'bg-[#D9A83E]/[0.10]',

    sideGlow: isDark
      ? 'bg-[#D9A83E]/[0.025]'
      : 'bg-[#D9A83E]/[0.045]',

    radialGlow: isDark
      ? 'bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.08),transparent_42%)]'
      : 'bg-[radial-gradient(circle_at_50%_12%,rgba(217,168,62,0.10),transparent_42%)]',

    dots: isDark
      ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1px)]'
      : 'bg-[radial-gradient(circle,rgba(21,23,22,0.10)_1px,transparent_1px)]',

    bottomFade: isDark
      ? 'from-[#070909]'
      : 'from-[#F7F5F0]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    goldGradient: isDark
      ? 'from-[#FFF0B5] via-[#F6D27A] to-[#D9A83E]'
      : 'from-[#8E6718] via-[#B88A28] to-[#D9A83E]',

    badge: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.06] text-[#E6B84F]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.08] text-[#A87918]',

    badgeDot: isDark
      ? 'bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]'
      : 'bg-[#C9972E] shadow-[0_0_10px_rgba(201,151,46,0.55)]',

    tab: isDark
      ? 'border-white/10 bg-white/[0.025] text-white/50 hover:border-[#D9A83E]/40 hover:text-white/80'
      : 'border-[#151716]/10 bg-white/50 text-[#151716]/55 hover:border-[#B88A28]/40 hover:text-[#151716]',

    activeTab: isDark
      ? 'border-[#D9A83E]/40 bg-[#D9A83E]/[0.10] text-[#F6D27A] shadow-[inset_0_0_20px_rgba(217,168,62,0.04)]'
      : 'border-[#B88A28]/40 bg-[#D9A83E]/[0.10] text-[#8E6718]',

    panel: isDark
      ? 'border-white/10 bg-white/[0.025] shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
      : 'border-[#151716]/10 bg-white/50 shadow-[0_20px_60px_rgba(21,23,22,0.04)]',

    countryCard: isDark
      ? 'border-white/[0.07] bg-white/[0.025] hover:border-[#D9A83E]/30 hover:bg-[#D9A83E]/[0.045]'
      : 'border-[#151716]/[0.07] bg-white/50 hover:border-[#B88A28]/30 hover:bg-white/90',

    countryText: isDark
      ? 'text-white/65 group-hover:text-[#F6D27A]'
      : 'text-[#151716]/70 group-hover:text-[#A87918]',

    muted: isDark ? 'text-white/30' : 'text-[#151716]/35',

    pagination: isDark
      ? 'border-white/10 bg-white/[0.04] text-white/60 hover:border-[#D9A83E]/40 hover:text-[#F6D27A]'
      : 'border-[#151716]/10 bg-white/60 text-[#151716]/60 hover:border-[#B88A28]/40 hover:text-[#8E6718]',
  };

  const selectedCountries = countries[activeRegion] || [];

  const visibleCountries =
    activeRegion === 'europe'
      ? selectedCountries.slice(europePage * 12, europePage * 12 + 12)
      : selectedCountries;

  const totalPages = Math.ceil(selectedCountries.length / 12);

  const handleRegionChange = (region) => {
    setActiveRegion(region);
    setEuropePage(0);
  };

  return (
    <section
      className={`relative isolate overflow-hidden border-b py-24 sm:py-28 lg:py-32 ${styles.section}`}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-1/2 top-[-250px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full blur-[150px] ${styles.mainGlow}`}
        />

        <div
          className={`absolute -left-[300px] top-[35%] h-[550px] w-[550px] rounded-full blur-[150px] ${styles.sideGlow}`}
        />

        <div
          className={`absolute -right-[300px] bottom-[5%] h-[550px] w-[550px] rounded-full blur-[150px] ${styles.sideGlow}`}
        />

        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${styles.dots}`}
        />

        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${styles.badge}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
            />
            Global Connectivity
          </div>

          <h2
            className={`font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-6xl ${styles.heading}`}
          >
            Expand Your Office
            <br className="hidden sm:block" /> Worldwide with{' '}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${styles.goldGradient}`}
            >
              Virtual Phone Numbers.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base ${styles.paragraph}`}
          >
            Connect with customers around the world using local phone numbers.
            Build trust, strengthen your global presence, and support customers
            in the countries they know.
          </p>
        </div>

        {/* Region tabs */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div
            className="flex gap-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
            role="tablist"
            aria-label="Filter countries by region"
          >
            {regions.map((region, index) => {
              const isActive = activeRegion === region.id;

              return (
                <button
                  key={region.id}
                  id={`region-tab-${region.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`region-panel-${region.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleRegionChange(region.id)}
                  onKeyDown={(event) => {
                    if (
                      !['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(
                        event.key
                      )
                    ) {
                      return;
                    }

                    event.preventDefault();

                    let nextIndex = index;

                    if (event.key === 'ArrowRight') {
                      nextIndex = (index + 1) % regions.length;
                    } else if (event.key === 'ArrowLeft') {
                      nextIndex = (index - 1 + regions.length) % regions.length;
                    } else if (event.key === 'Home') {
                      nextIndex = 0;
                    } else if (event.key === 'End') {
                      nextIndex = regions.length - 1;
                    }

                    const nextRegion = regions[nextIndex];

                    handleRegionChange(nextRegion.id);

                    document
                      .getElementById(`region-tab-${nextRegion.id}`)
                      ?.focus();
                  }}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                    isActive ? styles.activeTab : styles.tab
                  }`}
                >
                  {region.label}
                </button>
              );
            })}
          </div>

          {/* Country panel */}
          <div
            id={`region-panel-${activeRegion}`}
            role="tabpanel"
            aria-labelledby={`region-tab-${activeRegion}`}
            tabIndex={0}
            className={`mt-5 rounded-2xl border p-4 outline-none transition-colors duration-300 sm:mt-8 sm:rounded-3xl sm:p-7 lg:p-10 ${styles.panel}`}
          >
            {/* Panel heading */}
            <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
              <div>
                <h3
                  className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${styles.heading}`}
                >
                  {regions.find((region) => region.id === activeRegion)?.label}
                </h3>

                <p className={`mt-1 text-xs sm:text-sm ${styles.paragraph}`}>
                  Explore available destinations
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider sm:text-xs ${
                  styles.badge
                }`}
              >
                {String(selectedCountries.length).padStart(2, '0')} COUNTRIES
              </span>
            </div>

            {/* Countries grid */}
            <div
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6"
              key={activeRegion}
            >
              {visibleCountries.map((item, index) => (
                <a
                  key={`${item.code}-${item.name}`}
                  href={item.href}
                  className={`group relative flex min-h-[115px] flex-col items-center justify-center overflow-hidden rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-1 sm:min-h-[135px] sm:rounded-2xl sm:p-5 ${
                    styles.countryCard
                  }`}
                  style={{
                    animationDelay: `${index * 35}ms`,
                  }}
                >
                  {/* Subtle hover glow */}
                  <span
                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#D9A83E]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Country flag */}
                  <span className="relative mb-3 flex h-8 w-12 items-center justify-center overflow-hidden rounded-md border border-black/10 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-14">
                    <img
                      src={`https://flagcdn.com/w80/${item.code}.png`}
                      alt={`${item.name} flag`}
                      loading="lazy"
                      width="80"
                      height="60"
                      className="h-full w-full object-cover"
                    />
                  </span>

                  {/* Country name */}
                  <span
                    className={`relative text-xs font-medium leading-5 transition-colors duration-300 sm:text-sm ${styles.countryText}`}
                  >
                    {item.name}
                  </span>

                  {/* Hover underline */}
                  <span
                    className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-[#D9A83E] to-transparent transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            {/* Europe pagination */}
            {activeRegion === 'europe' && totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setEuropePage((page) => Math.max(0, page - 1))
                  }
                  disabled={europePage === 0}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${styles.pagination}`}
                  aria-label="Previous European countries"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setEuropePage(index)}
                    aria-label={`Show European countries page ${index + 1}`}
                    aria-current={europePage === index ? 'page' : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      europePage === index
                        ? 'w-7 bg-[#D9A83E]'
                        : `w-2 ${
                            isDark ? 'bg-white/20' : 'bg-[#151716]/20'
                          }`
                    }`}
                  />
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setEuropePage((page) =>
                      Math.min(totalPages - 1, page + 1)
                    )
                  }
                  disabled={europePage === totalPages - 1}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${styles.pagination}`}
                  aria-label="Next European countries"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Bottom note */}
            <div
              className={`mt-7 flex items-center justify-center gap-2 border-t pt-5 text-center text-xs leading-6 sm:mt-8 ${styles.muted} ${
                isDark ? 'border-white/[0.07]' : 'border-[#151716]/[0.08]'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-[#D9A83E]"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M3 12H21M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21C9.5 18.5 8.5 15.5 8.5 12C8.5 8.5 9.5 5.5 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>

              Local numbers. Global reach. One connected business.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualOfficeNumbers;