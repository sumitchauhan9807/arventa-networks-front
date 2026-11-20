import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/app/styles/VirtualNumberSearch.css';

const VirtualNumberSearch = ({
  onSearch,
  title = 'Find Your Perfect Virtual Number',
  subtitle = 'Connect with customers worldwide using a local business number.',
  buttonText = 'Find Numbers',
}) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    countryCode: 'us',
    dialCode: '1',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const accents = [
    {
      name: 'gold',
      color: '#B8892D',
      light: '#D9A83E',
      bright: '#F5CC70',
      rgb: '184, 137, 45',
    },
    {
      name: 'green',
      color: '#16A34A',
      light: '#22C55E',
      bright: '#4ADE80',
      rgb: '34, 197, 94',
    },
    {
      name: 'red',
      color: '#DC2626',
      light: '#EF4444',
      bright: '#F87171',
      rgb: '239, 68, 68',
    },
  ];

  const handlePhoneChange = (value, countryData) => {
    setPhoneNumber(value);

    if (countryData) {
      setSelectedCountry(countryData);
    }

    setError('');
    setResults(null);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setError('');
    setResults(null);

    if (!phoneNumber || phoneNumber === selectedCountry.dialCode) {
      setError('Please enter a phone number or area code.');
      return;
    }

    if (typeof onSearch !== 'function') {
      setError(
        'Search is not connected yet. Please provide an onSearch callback.'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await onSearch({
        country: selectedCountry,
        phoneNumber,
        fullQuery: `+${phoneNumber}`,
      });

      setResults(response ?? null);
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`virtual-number-section ${
        isDark ? 'virtual-number-dark' : 'virtual-number-light'
      }`}
      style={{
        '--vn-gold': '#B8892D',
        '--vn-gold-light': '#D9A83E',
        '--vn-gold-bright': '#F5CC70',
        '--vn-green': '#16A34A',
        '--vn-green-light': '#22C55E',
        '--vn-red': '#DC2626',
        '--vn-red-light': '#EF4444',
      }}
    >
      {/* Ambient background */}
      <div className="virtual-number-background" aria-hidden="true">
        <div className="virtual-number-glow virtual-number-glow-one" />
        <div className="virtual-number-glow virtual-number-glow-two" />
        <div className="virtual-number-glow virtual-number-glow-three" />

        {/* Gold remains the primary ambient color */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '480px',
            height: '480px',
            top: '-180px',
            left: '-150px',
            background:
              'radial-gradient(circle, rgba(184,137,45,0.13), transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Green secondary ambient glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '380px',
            height: '380px',
            top: '15%',
            right: '-160px',
            background:
              'radial-gradient(circle, rgba(34,197,94,0.09), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Red contrast ambient glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '340px',
            height: '340px',
            bottom: '-130px',
            left: '35%',
            background:
              'radial-gradient(circle, rgba(239,68,68,0.075), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="virtual-number-radial-glow" />
        <div className="virtual-number-grid-pattern" />

        {/* Gold dot texture */}
        <div className="virtual-number-gold-dots" />

        {/* Subtle green and red dot details */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isDark ? 0.2 : 0.12,
            backgroundImage:
              'radial-gradient(circle, rgba(34,197,94,0.45) 1px, transparent 1px)',
            backgroundSize: '47px 47px',
            maskImage:
              'radial-gradient(ellipse at 90% 35%, black, transparent 55%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 90% 35%, black, transparent 55%)',
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isDark ? 0.16 : 0.09,
            backgroundImage:
              'radial-gradient(circle, rgba(239,68,68,0.45) 1px, transparent 1px)',
            backgroundSize: '53px 53px',
            maskImage:
              'radial-gradient(ellipse at 10% 80%, black, transparent 55%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 10% 80%, black, transparent 55%)',
          }}
        />

        <div className="virtual-number-bottom-fade" />
      </div>

      <div className="virtual-number-content relative z-10">
        {/* Heading */}
        <div className="virtual-number-heading">
          <span className="virtual-number-eyebrow">
            <span
              className="virtual-number-eyebrow-dot"
              style={{
                background: '#D9A83E',
                boxShadow: '0 0 12px rgba(217,168,62,0.55)',
              }}
            />
            GLOBAL BUSINESS COMMUNICATION
          </span>

          <h2 className="virtual-number-title">
            {title}
          </h2>

          <p className="virtual-number-subtitle">
            {subtitle}
          </p>

          {/* Three-color decorative indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {accents.map((accent) => (
              <span
                key={accent.name}
                className="h-1 rounded-full"
                style={{
                  width: accent.name === 'gold' ? '34px' : '15px',
                  background: `linear-gradient(90deg, ${accent.color}, ${accent.bright})`,
                  boxShadow: `0 0 10px rgba(${accent.rgb},0.25)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Search card */}
        <form
          className="virtual-number-card group relative overflow-hidden"
          onSubmit={handleSearch}
        >
          {/* Top ambient card lighting */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '260px',
              height: '180px',
              top: '-110px',
              left: '50%',
              transform: 'translateX(-50%)',
              background:
                'radial-gradient(circle, rgba(217,168,62,0.13), transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          <div className="virtual-number-card-top relative z-10">
            <div
              className="virtual-number-icon"
              style={{
                borderColor: 'rgba(217,168,62,0.3)',
                background: isDark
                  ? 'linear-gradient(145deg, rgba(184,137,45,0.2), rgba(184,137,45,0.06))'
                  : 'linear-gradient(145deg, rgba(184,137,45,0.14), rgba(184,137,45,0.04))',
                color: '#D9A83E',
                boxShadow: '0 0 25px rgba(184,137,45,0.1)',
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z" />
              </svg>
            </div>

            <div>
              <h3 className="virtual-number-card-title">
                Search virtual numbers
              </h3>

              <p className="virtual-number-card-description">
                Choose a country and enter a number or area code.
              </p>
            </div>
          </div>

          <div className="virtual-number-fields relative z-10">
            <div className="virtual-number-field-group">
              <label
                htmlFor="virtual-number-query"
                className="virtual-number-label"
              >
                Country and phone number
              </label>

              <div
                className={`virtual-phone-input ${
                  isDark
                    ? 'virtual-phone-dark'
                    : 'virtual-phone-light'
                }`}
                style={{
                  borderColor: isDark
                    ? 'rgba(217,168,62,0.2)'
                    : 'rgba(184,137,45,0.24)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <PhoneInput
                  country="us"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  enableSearch
                  searchPlaceholder="Search all countries..."
                  enableAreaCodes={false}
                  countryCodeEditable={false}
                  autoFormat
                  preferredCountries={['us', 'gb', 'in', 'ca', 'au']}
                  inputProps={{
                    id: 'virtual-number-query',
                    name: 'phoneNumber',
                    required: true,
                    autoComplete: 'tel',
                    'aria-label': 'Country code and phone number',
                  }}
                  containerClass="virtual-phone-container"
                  inputClass="virtual-phone-field"
                  buttonClass="virtual-phone-flag-button"
                  dropdownClass="virtual-phone-dropdown"
                  searchClass="virtual-phone-search"
                  placeholder="Enter phone number or area code"
                />
              </div>

              <p className="virtual-number-hint">
                <span
                  className="virtual-number-hint-dot"
                  style={{
                    background: '#22C55E',
                    boxShadow: '0 0 9px rgba(34,197,94,0.45)',
                  }}
                />
                Select a country using its flag or search by name.
              </p>
            </div>

            <button
              type="submit"
              className="virtual-number-submit group/submit relative overflow-hidden"
              disabled={loading}
              style={{
                background:
                  'linear-gradient(110deg, #A97924 0%, #B8892D 40%, #D9A83E 100%)',
                boxShadow: '0 8px 25px rgba(184,137,45,0.2)',
                transition:
                  'transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease',
              }}
            >
              {/* Subtle button shine */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.16) 50%, transparent 75%)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease',
                }}
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="virtual-number-spinner" />
                    Searching...
                  </>
                ) : (
                  <>
                    {buttonText}

                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Error feedback */}
          {error && (
            <div
              className="virtual-number-error"
              role="alert"
              style={{
                borderColor: 'rgba(239,68,68,0.28)',
                background: isDark
                  ? 'rgba(220,38,38,0.09)'
                  : 'rgba(220,38,38,0.055)',
              }}
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '19px',
                  height: '19px',
                  flexShrink: 0,
                  background: 'rgba(239,68,68,0.13)',
                  color: '#EF4444',
                }}
              >
                !
              </span>
              {error}
            </div>
          )}

          {/* Search results */}
          {results !== null && (
            <div
              className="virtual-number-results"
              role="status"
              aria-live="polite"
              style={{
                borderColor: 'rgba(34,197,94,0.28)',
                background: isDark
                  ? 'rgba(22,163,74,0.09)'
                  : 'rgba(22,163,74,0.055)',
              }}
            >
              {typeof results === 'string'
                ? results
                : 'Search completed successfully.'}
            </div>
          )}

          {/* Card footer */}
          <div className="virtual-number-card-footer relative z-10">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ color: '#D9A83E' }}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure number search
            </span>

            <span className="virtual-number-footer-divider" />

            <span>
              <span
                className="virtual-number-status-dot"
                style={{
                  background: '#22C55E',
                  boxShadow: '0 0 9px rgba(34,197,94,0.5)',
                }}
              />
              Global coverage
            </span>
          </div>

          {/* Three-color bottom accent */}
          <div
            className="absolute bottom-0 left-0 right-0 flex h-[3px] overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="flex-1"
              style={{
                background: 'linear-gradient(90deg, #B8892D, #D9A83E)',
              }}
            />
            <span
              className="flex-1"
              style={{
                background: 'linear-gradient(90deg, #16A34A, #4ADE80)',
              }}
            />
            <span
              className="flex-1"
              style={{
                background: 'linear-gradient(90deg, #DC2626, #F87171)',
              }}
            />
          </div>
        </form>

        {/* Supporting details */}
        <div className="virtual-number-features">
          {[
            {
              number: '01',
              title: 'Choose your country',
              description: 'Explore available countries and calling codes.',
              accent: accents[0],
            },
            {
              number: '02',
              title: 'Enter an area code',
              description: 'Refine your search using a number or area code.',
              accent: accents[1],
            },
            {
              number: '03',
              title: 'Connect globally',
              description:
                'Connect your search to your virtual number service.',
              accent: accents[2],
            },
          ].map((feature) => (
            <div
              key={feature.number}
              className="virtual-number-feature group relative"
            >
              <span
                className="virtual-number-feature-icon relative flex items-center justify-center"
                style={{
                  color: feature.accent.light,
                  borderColor: `rgba(${feature.accent.rgb},0.3)`,
                  background: `rgba(${feature.accent.rgb},0.08)`,
                  boxShadow: `0 0 18px rgba(${feature.accent.rgb},0.06)`,
                  transition: 'all 0.3s ease',
                }}
              >
                {feature.number}
              </span>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>

              {/* Individual feature accent */}
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, ${feature.accent.color}, ${feature.accent.bright})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualNumberSearch;