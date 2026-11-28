'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input';

import countryLabels from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';

// Country Flag Helper
const getCountryFlag = (countryCode) => {
  if (!countryCode) return '';

  return countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
};

const data = {
  eyebrow: 'GET IN TOUCH',

  heading: {
    firstLine: "Let's Create ",
    highlight: 'Something Exceptional.',
  },

  description: "Have a vision in mind? Let's discuss how we can bring your ideas to life with thoughtful strategy and exceptional execution.",

  infoEyebrow: "LET'S CONNECT",
  infoHeading: 'Start a Conversation.',

  infoDescription: "Whether you have a project in mind or simply want to explore possibilities, we'd love to hear from you.",

  contactDetails: [
    {
      icon: '✉',
      label: 'EMAIL US',
      value: 'hello@example.com',
    },
    {
      icon: '⌖',
      label: 'VISIT US',
      value: 'Your office address',
    },
    {
      icon: '☎',
      label: 'CALL US',
      value: '+1 000 000 0000',
    },
  ],

  bottomNote: 'Great things begin with a conversation.',

  formHeading: 'Tell Us About Your Project',

  formDescription: 'Fill in the details below and our team will get back to you.',

  subjects: ['Carrier & Network', 'Cloud & Communications', 'Software & AI', 'Tornadodialer', 'Call Con Dialer', 'Whoslaes', 'Partnership', 'MVNO', "DID's Mobile", "DID's International", 'IoT', 'Internet', 'eSIM', 'IP to IP'],

  buttonText: 'Send Message',

  formFooter: 'Your information is safe and will never be shared.',
};

// ============================================
// CUSTOM COUNTRY DROPDOWN
// ============================================

const CustomCountrySelect = ({ value, onChange, options, disabled, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const filteredCountries = useMemo(() => {
    return options.filter((option) => {
      if (!option.value) return false;

      const countryName = countryLabels[option.value] || '';

      const dialCode = getCountryCallingCode(option.value);

      const searchValue = search.toLowerCase().trim();

      return countryName.toLowerCase().includes(searchValue) || option.value.toLowerCase().includes(searchValue) || dialCode.includes(searchValue.replace('+', ''));
    });
  }, [options, search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.focus();
    }
  }, [isOpen]);

  const handleSelect = (country) => {
    onChange(country);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div ref={dropdownRef} className="custom-country-select">
      {/* Selected Country */}
      <button type="button" disabled={disabled} onClick={() => setIsOpen((prev) => !prev)} className="custom-country-trigger" aria-label="Select country" aria-expanded={isOpen}>
        <span className="custom-country-flag">{getCountryFlag(value)}</span>

        <span className="custom-country-code">{value ? `+${getCountryCallingCode(value)}` : 'Select'}</span>

        <svg className={`country-chevron ${isOpen ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className={`country-dropdown ${isDark ? 'country-dropdown-dark' : 'country-dropdown-light'}`}>
          {/* Search */}
          <div className="country-search-wrapper">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="country-search-icon">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input ref={searchRef} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search country or code..." className="country-search-input" />
          </div>

          {/* Country List */}
          <div className="country-options-list">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((option) => {
                const country = option.value;

                return (
                  <button key={country} type="button" onClick={() => handleSelect(country)} className={`country-option ${value === country ? 'country-option-active' : ''}`}>
                    {/* Flag */}
                    <span className="country-option-flag">{getCountryFlag(country)}</span>

                    {/* Country Name */}
                    <span className="country-option-name">{countryLabels[country] || option.label}</span>

                    {/* Dial Code */}
                    <span className="country-option-code">+{getCountryCallingCode(country)}</span>

                    {/* Selected Check */}
                    {value === country && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9A83E" strokeWidth="2.5">
                        <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="country-no-results">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================
// CONTACT COMPONENT
// ============================================

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);

  const isDark = theme === 'dark';

  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('IN');

  // ============================================
  // THEME STYLES
  // ============================================

  const styles = {
    section: isDark ? 'bg-[#070909] text-white' : 'bg-[#F7F5F0] text-[#151716]',

    mainGlow: isDark ? 'bg-[#D9A83E]/[0.055]' : 'bg-[#D9A83E]/[0.10]',

    leftGlow: isDark ? 'bg-[#D9A83E]/[0.025]' : 'bg-[#D9A83E]/[0.045]',

    radialGlow: isDark ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]' : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]',

    dots: isDark ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]' : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]',

    bottomFade: isDark ? 'from-[#070909]' : 'from-[#F7F5F0]',

    eyebrow: isDark ? 'text-[#D9A83E]' : 'text-[#B88725]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    description: isDark ? 'text-white/55' : 'text-[#151716]/60',

    card: isDark ? 'border-white/10 bg-[#0A0D0D]/75' : 'border-[#151716]/10 bg-white/55',

    label: isDark ? 'text-white/70' : 'text-[#151716]/75',

    input: isDark ? 'border-white/10 bg-white/[0.025] text-white placeholder:text-white/25 focus:border-[#D9A83E]/60' : 'border-[#151716]/10 bg-white/60 text-[#151716] placeholder:text-[#151716]/30 focus:border-[#B88725]/60',

    inputHover: isDark ? 'hover:border-white/20' : 'hover:border-[#151716]/20',

    contactInfo: isDark ? 'text-white/55' : 'text-[#151716]/60',

    button: isDark ? 'border-[#D9A83E] text-[#D9A83E] hover:bg-[#D9A83E] hover:text-black' : 'border-[#B88725] text-[#B88725] hover:bg-[#B88725] hover:text-white',
  };

  // ============================================
  // FORM SUBMISSION
  // ============================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const values = Object.fromEntries(formData.entries());

    values.phone = phone || '';
    values.countryCode = selectedCountry;
    values.countryName = countryLabels[selectedCountry];
    values.dialCode = `+${getCountryCallingCode(selectedCountry)}`;

    console.log('Contact Form Data:', values);

    // Connect your API here.
    //
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // });
  };

  // ============================================
  // JSX
  // ============================================

  return (
    <section id="contact" className={`relative isolate overflow-hidden py-28 transition-colors duration-300 ${styles.section}`}>
      {/* Ambient Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`} />

        <div className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`} />

        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        <div className={`absolute inset-0 bg-[size:24px_24px] ${styles.dots}`} />

        <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`} />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className={`text-xs font-semibold uppercase tracking-[.25em] ${styles.eyebrow}`}>{data.eyebrow}</div>

          <h2 className={`mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${styles.heading}`}>
            {data.heading.firstLine}

            <span className="gold-text">{data.heading.highlight}</span>
          </h2>

          {/* <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 ${styles.description}`}>{data.description}</p> */}
        </div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================= */}

          <div className="flex flex-col justify-between gap-12">
            <div>
              <div className={`text-xs font-semibold uppercase tracking-[.2em] ${styles.eyebrow}`}>{data.infoEyebrow}</div>

              <h3 className={`mt-5 font-display text-2xl font-semibold sm:text-3xl ${styles.heading}`}>{data.infoHeading}</h3>

              <p className={`mt-5 max-w-md text-sm leading-7 ${styles.description}`}>{data.infoDescription}</p>
            </div>

            {/* Contact Details */}
            {/* <div className="space-y-8">
              {data.contactDetails.map((item) => (
                <div key={item.label} className="group flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D9A83E]/25 bg-[#D9A83E]/[0.05] text-lg text-[#D9A83E] transition-all duration-300 group-hover:bg-[#D9A83E]/10">{item.icon}</div>

                  <div>
                    <div className={`text-xs uppercase tracking-[.15em] ${styles.eyebrow}`}>{item.label}</div>

                    <div className={`mt-2 text-sm ${styles.contactInfo}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Decorative Note */}
            {/* <div className={`border-l-2 border-[#D9A83E]/50 pl-5 text-sm italic leading-7 ${styles.description}`}>{data.bottomNote}</div> */}
          </div>

          {/* ================================= */}
          {/* CONTACT FORM */}
          {/* ================================= */}

          <div className={`rounded-2xl border p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-colors duration-300 sm:p-10 ${styles.card}`}>
            <div className="mb-9">
              <h3 className={`font-display text-2xl font-semibold ${styles.heading}`}>{data.formHeading}</h3>

              <p className={`mt-3 text-sm leading-6 ${styles.description}`}>{data.formDescription}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block text-xs font-medium ${styles.label}`}>Full Name *</label>

                  <input type="text" name="name" required placeholder="John Doe" className={`w-full rounded-lg border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${styles.input} ${styles.inputHover}`} />
                </div>

                <div>
                  <label className={`mb-2 block text-xs font-medium ${styles.label}`}>Email Address *</label>

                  <input type="email" name="email" required placeholder="john@example.com" className={`w-full rounded-lg border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${styles.input} ${styles.inputHover}`} />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className={`mb-2 block text-xs font-medium ${styles.label}`}>Phone Number</label>

                <div className={`contact-phone-wrapper rounded-lg border px-4 py-3.5 transition-all duration-300 ${styles.input} ${styles.inputHover}`}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    country={selectedCountry}
                    value={phone}
                    onChange={setPhone}
                    onCountryChange={(country) => {
                      if (country) {
                        setSelectedCountry(country);
                      }
                    }}
                    countries={getCountries()}
                    labels={countryLabels}
                    countryCallingCodeEditable={false}
                    countrySelectComponent={(props) => <CustomCountrySelect {...props} isDark={isDark} />}
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Hidden Country Information */}
                <input type="hidden" name="countryCode" value={selectedCountry} />

                <input type="hidden" name="countryName" value={countryLabels[selectedCountry] || ''} />

                <input type="hidden" name="dialCode" value={`+${getCountryCallingCode(selectedCountry)}`} />

                <input type="hidden" name="phone" value={phone || ''} />
              </div>

              {/* Subject */}
              <div>
                <label className={`mb-2 block text-xs font-medium ${styles.label}`}>Subject *</label>

                <select name="subject" required defaultValue="" className={`w-full rounded-lg border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${styles.input} ${styles.inputHover}`}>
                  <option style={{ color: 'black' }} value="" disabled>
                    Select a service
                  </option>

                  {data.subjects.map((subject) => (
                    <option key={subject} value={subject} style={{ color: 'black' }}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={`mb-2 block text-xs font-medium ${styles.label}`}>Your Message *</label>

                <textarea name="message" required rows={5} placeholder="Tell us about your project..." className={`w-full resize-none rounded-lg border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${styles.input} ${styles.inputHover}`} />
              </div>

              {/* Submit Button */}
              <button type="submit" className={`group inline-flex w-full items-center justify-center gap-4 rounded-lg border px-6 py-4 text-sm font-semibold transition-all duration-300 ${styles.button}`}>
                {data.buttonText}

                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </button>

              {/* Footer */}
              <p className={`text-center text-xs ${styles.description}`}>{data.formFooter}</p>
            </form>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* PHONE INPUT CUSTOM CSS */}
      {/* ================================= */}

      <style jsx global>{`
        .contact-phone-wrapper {
          position: relative;
          z-index: 20;
        }

        .contact-phone-wrapper .PhoneInput {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
        }

        .contact-phone-wrapper .PhoneInputCountry {
          display: flex;
          align-items: center;
          margin: 0;
        }

        /* Custom Country Selector */

        .custom-country-select {
          position: relative;
          flex-shrink: 0;
        }

        .custom-country-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          outline: none;
          font-size: 14px;
        }

        .custom-country-trigger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .custom-country-flag,
        .country-option-flag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 19px;
          flex-shrink: 0;
          font-size: 20px;
          line-height: 1;
        }

        .custom-country-flag {
          font-size: 21px;
        }

        .custom-country-code {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        .country-chevron {
          opacity: 0.55;
          transition: transform 0.2s ease;
        }

        .country-chevron.rotate-180 {
          transform: rotate(180deg);
        }

        /* Dropdown Container */

        .country-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
          width: 290px;
          max-width: min(290px, calc(100vw - 48px));
          border-radius: 12px;
          overflow: hidden;
          z-index: 100;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.22);
          border: 1px solid;
          animation: countryDropdownIn 0.18s ease-out;
        }

        @keyframes countryDropdownIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .country-dropdown-dark {
          background: #0d1111;
          border-color: rgba(255, 255, 255, 0.12);
          color: white;
        }

        .country-dropdown-light {
          background: #ffffff;
          border-color: rgba(21, 23, 22, 0.12);
          color: #151716;
        }

        /* Search Input */

        .country-search-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 14px;
          border-bottom: 1px solid rgba(128, 128, 128, 0.18);
        }

        .country-search-icon {
          flex-shrink: 0;
          opacity: 0.5;
        }

        .country-search-input {
          width: 100%;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: 13px;
        }

        .country-search-input::placeholder {
          opacity: 0.4;
          color: inherit;
        }

        /* Country Options */

        .country-options-list {
          max-height: 260px;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 5px;
        }

        .country-options-list::-webkit-scrollbar {
          width: 5px;
        }

        .country-options-list::-webkit-scrollbar-thumb {
          background: rgba(217, 168, 62, 0.4);
          border-radius: 10px;
        }

        .country-option {
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 7px;
          background: transparent;
          color: inherit;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }

        .country-option:hover {
          background: rgba(217, 168, 62, 0.09);
        }

        .country-option-active {
          background: rgba(217, 168, 62, 0.12);
        }

        .country-option-name {
          flex: 1;
          min-width: 0;
          font-size: 13px;
          font-weight: 500;
        }

        .country-option-code {
          font-size: 12px;
          opacity: 0.55;
          white-space: nowrap;
        }

        .country-no-results {
          padding: 25px 12px;
          text-align: center;
          font-size: 13px;
          opacity: 0.5;
        }

        /* Phone Number Input */

        .contact-phone-wrapper .PhoneInputInput {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: 14px;
        }

        .contact-phone-wrapper .PhoneInputInput::placeholder {
          color: inherit;
          opacity: 0.35;
        }

        .contact-phone-wrapper .PhoneInputInput:focus {
          outline: none;
        }

        /* Responsive */

        @media (max-width: 480px) {
          .country-dropdown {
            width: 270px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
