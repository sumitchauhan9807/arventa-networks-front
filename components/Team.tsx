
import React from 'react';
import { useSelector } from 'react-redux';

const teamMembers = [
  {
    name: 'Alex Morgan',
    designation: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    bio: 'Building the vision, culture, and long-term direction behind the company.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sarah Kim',
    designation: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
    bio: 'Turning complex infrastructure into simple, reliable communication.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Daniel Reed',
    designation: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85',
    bio: 'Keeping our global network resilient, responsive, and always online.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Maya Patel',
    designation: 'Product Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
    bio: 'Designing products that make powerful communication feel effortless.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const TeamSection = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const styles = {
    section: isDark
      ? 'bg-[#070909] text-white'
      : 'bg-[#F7F5F0] text-[#151716]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/45' : 'text-[#151716]/55',

    eyebrow: isDark
      ? 'border-[#D9A83E]/20 bg-[#D9A83E]/[0.05] text-[#D9A83E]'
      : 'border-[#B88A28]/25 bg-[#D9A83E]/[0.07] text-[#A87918]',

    card: isDark
      ? 'border-white/10 bg-white/[0.025] hover:border-[#D9A83E]/30 hover:bg-white/[0.045]'
      : 'border-[#151716]/10 bg-white/70 hover:border-[#B88A28]/30 hover:bg-white',

    social: isDark
      ? 'border-white/10 bg-white/[0.04] text-white/45 hover:border-[#D9A83E]/40 hover:bg-[#D9A83E]/10 hover:text-[#D9A83E]'
      : 'border-[#151716]/10 bg-white/70 text-[#151716]/45 hover:border-[#B88A28]/40 hover:bg-[#D9A83E]/10 hover:text-[#A87918]',

    muted: isDark ? 'text-white/30' : 'text-[#151716]/40',

    gold: isDark ? 'text-[#D9A83E]' : 'text-[#A87918]',

    primaryButton: isDark
      ? 'bg-[#D9A83E] text-[#070909] hover:bg-[#E8BC57]'
      : 'bg-[#151716] text-white hover:bg-[#303330]',
  };

  return (
    <section
      className={`relative isolate overflow-hidden py-28 sm:py-36 ${styles.section}`}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${
            isDark
              ? 'bg-[#D9A83E]/[0.055]'
              : 'bg-[#D9A83E]/[0.10]'
          }`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${
            isDark
              ? 'bg-[#D9A83E]/[0.025]'
              : 'bg-[#D9A83E]/[0.045]'
          }`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${
            isDark
              ? 'bg-[#D9A83E]/[0.02]'
              : 'bg-[#D9A83E]/[0.035]'
          }`}
        />

        {/* Radial atmosphere */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]'
              : 'bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]'
          }`}
        />

        {/* Fine dot texture */}
        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${
            isDark
              ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]'
              : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]'
          }`}
        />

        {/* Subtle gold dot texture */}
        <div className="absolute inset-0 bg-[size:48px_48px] bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]" />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${
            isDark ? 'from-[#070909]' : 'from-[#F7F5F0]'
          }`}
        />
      </div>

      {/* Decorative network lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] opacity-30"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle
          cx="250"
          cy="250"
          r="180"
          stroke="#D9A83E"
          strokeOpacity="0.12"
          strokeDasharray="3 12"
        />

        <circle
          cx="250"
          cy="250"
          r="110"
          stroke="#D9A83E"
          strokeOpacity="0.10"
          strokeDasharray="2 10"
        />

        <circle cx="250" cy="250" r="5" fill="#D9A83E" />

        <path
          d="M250 250L80 110M250 250L420 90M250 250L430 380M250 250L90 400"
          stroke="#D9A83E"
          strokeOpacity="0.12"
        />
      </svg>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${styles.eyebrow}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E] shadow-[0_0_10px_#D9A83E]" />
            The People Behind It
          </div>

          <h2
            className={`mt-7 font-display text-4xl font-medium tracking-[-0.045em] sm:text-6xl ${styles.heading}`}
          >
            Meet the people
            <br />
            <span className="bg-gradient-to-r from-[#8E6718] via-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">
              moving us forward.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base ${styles.paragraph}`}
          >
            A global team of engineers, operators, designers, and problem-solvers
            building the future of connected communication.
          </p>
        </div>

        {/* Team grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-2 ${styles.card}`}
            >
              {/* Image */}
              <div className="relative aspect-[0.86] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Image gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? 'from-[#070909] via-[#070909]/20 to-transparent'
                      : 'from-[#151716]/35 via-transparent to-transparent'
                  }`}
                />

                {/* Gold hover glow */}
                <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#D9A83E]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div
                  className={`absolute left-5 top-5 text-[10px] font-medium tracking-[0.2em] ${styles.gold}`}
                >
                  0{index + 1}
                </div>

                {/* Online indicator */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-white/70">
                    Online
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className={`text-lg font-medium tracking-tight ${styles.heading}`}
                >
                  {member.name}
                </h3>

                <div
                  className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${styles.gold}`}
                >
                  {member.designation}
                </div>

                <p
                  className={`mt-4 text-xs leading-5 ${styles.paragraph}`}
                >
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="mt-5 flex items-center gap-2">
                  {/* LinkedIn */}
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${styles.social}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                    >
                      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 2.75 3.9 2.75 5s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM21 13.85c0-3.76-2-5.85-4.9-5.85-2.32 0-3.36 1.28-3.94 2.18V8.5H8.66V21h3.5v-6.19c0-1.63.3-3.2 2.32-3.2 1.99 0 2.02 1.86 2.02 3.3V21H20v-7.15h1Z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${styles.social}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                    >
                      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.88-6.4L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.41 5.83L18.9 2Zm-1.1 17.75h1.73L8.3 4.13H6.44L17.8 19.75Z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${styles.social}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                      />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </a>

                  {/* View profile */}
                  <button
                    type="button"
                    className={`ml-auto flex h-9 items-center gap-2 rounded-full border px-3 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${styles.social}`}
                  >
                    Profile
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3 w-3"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5M7 5H15V13"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-[#D9A83E] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className={`mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-3xl border p-6 text-center backdrop-blur-xl sm:flex-row sm:text-left ${styles.card}`}
        >
          <div>
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.gold}`}
            >
              One Team · One Network
            </div>

            <h3
              className={`mt-2 text-xl font-medium ${styles.heading}`}
            >
              Great infrastructure starts with great people.
            </h3>
          </div>

          <button
            type="button"
            className={`group inline-flex h-11 items-center gap-3 rounded-full px-6 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles.primaryButton}`}
          >
            Join Our Team
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Footer label */}
        <div
          className={`mt-8 text-center text-[9px] uppercase tracking-[0.2em] ${styles.muted}`}
        >
          Engineering · Operations · Product · Design
        </div>
      </div>
    </section>
  );
};

export default TeamSection;