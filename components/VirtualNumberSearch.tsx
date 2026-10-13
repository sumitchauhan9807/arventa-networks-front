
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
    >
      {/* Ambient background — matches Timeline */}
      <div className="virtual-number-background" aria-hidden="true">
        <div className="virtual-number-glow virtual-number-glow-one" />
        <div className="virtual-number-glow virtual-number-glow-two" />
        <div className="virtual-number-glow virtual-number-glow-three" />

        <div className="virtual-number-radial-glow" />
        <div className="virtual-number-grid-pattern" />
        <div className="virtual-number-gold-dots" />
        <div className="virtual-number-bottom-fade" />
      </div>

      <div className="virtual-number-content">
        {/* Heading */}
        <div className="virtual-number-heading">
          <span className="virtual-number-eyebrow">
            <span className="virtual-number-eyebrow-dot" />
            GLOBAL BUSINESS COMMUNICATION
          </span>

          <h2 className="virtual-number-title">
            {title}
          </h2>

          <p className="virtual-number-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Search card */}
        <form
          className="virtual-number-card"
          onSubmit={handleSearch}
        >
          <div className="virtual-number-card-top">
            <div className="virtual-number-icon">
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

          <div className="virtual-number-fields">
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
                <span className="virtual-number-hint-dot" />
                Select a country using its flag or search by name.
              </p>
            </div>

            <button
              type="submit"
              className="virtual-number-submit"
              disabled={loading}
            >
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
            </button>
          </div>

          {error && (
            <div
              className="virtual-number-error"
              role="alert"
            >
              <span aria-hidden="true">!</span>
              {error}
            </div>
          )}

          {results !== null && (
            <div
              className="virtual-number-results"
              role="status"
              aria-live="polite"
            >
              {typeof results === 'string'
                ? results
                : 'Search completed successfully.'}
            </div>
          )}

          <div className="virtual-number-card-footer">
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
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure number search
            </span>

            <span className="virtual-number-footer-divider" />

            <span>
              <span className="virtual-number-status-dot" />
              Global coverage
            </span>
          </div>

          {/* Gold bottom accent */}
          <div className="virtual-number-card-accent" />
        </form>

        {/* Supporting details */}
        <div className="virtual-number-features">
          <div className="virtual-number-feature">
            <span className="virtual-number-feature-icon">01</span>

            <div>
              <h4>Choose your country</h4>
              <p>
                Explore available countries and calling codes.
              </p>
            </div>
          </div>

          <div className="virtual-number-feature">
            <span className="virtual-number-feature-icon">02</span>

            <div>
              <h4>Enter an area code</h4>
              <p>
                Refine your search using a number or area code.
              </p>
            </div>
          </div>

          <div className="virtual-number-feature">
            <span className="virtual-number-feature-icon">03</span>

            <div>
              <h4>Connect globally</h4>
              <p>
                Connect your search to your virtual number service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualNumberSearch;
