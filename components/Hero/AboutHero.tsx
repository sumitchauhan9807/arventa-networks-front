
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

type ThemeStyles = {
  section: string;
  grid: string;
  heading: string;
  paragraph: string;
  eyebrow: string;
  primaryButton: string;
  secondaryButton: string;
  card: string;
  muted: string;
  gold: string;
  border: string;
};

type Stat = {
  value: string;
  label: string;
};

type CompanyValue = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const AboutHero: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDark = theme === "dark";

  // ----------------------------------------
  // THEME CONFIGURATION
  // ----------------------------------------

  const styles: ThemeStyles = {
    section: isDark
      ? "bg-[#070909] text-white"
      : "bg-[#F7F5F0] text-[#151716]",

    grid: isDark
      ? "bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      : "bg-[linear-gradient(rgba(21,23,22,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(21,23,22,0.045)_1px,transparent_1px)]",

    heading: isDark ? "text-white" : "text-[#151716]",

    paragraph: isDark ? "text-white/70" : "text-[#343631]/80",

    eyebrow: isDark
      ? "border-[#D9A83E]/30 bg-[#D9A83E]/[0.09] text-[#F0C867]"
      : "border-[#B88A28]/35 bg-[#D9A83E]/[0.12] text-[#805B10]",

    primaryButton: isDark
      ? "bg-[#D9A83E] text-[#11120F] hover:bg-[#F0C867]"
      : "bg-[#151716] text-white hover:bg-[#303330]",

    secondaryButton: isDark
      ? "border-white/15 bg-white/[0.06] text-white hover:border-[#D9A83E]/50 hover:bg-white/[0.10]"
      : "border-[#151716]/15 bg-white/80 text-[#151716] hover:border-[#B88A28]/50 hover:bg-white",

    card: isDark
      ? "border-white/[0.12] bg-[#0C0F0E]/90"
      : "border-[#151716]/[0.12] bg-white/85",

    muted: isDark ? "text-white/60" : "text-[#454741]/70",

    gold: isDark ? "text-[#F0C867]" : "text-[#8A6417]",

    border: isDark ? "border-white/[0.12]" : "border-[#151716]/[0.12]",
  };

  // ----------------------------------------
  // HERO CONTENT
  // Edit these objects to update the content.
  // ----------------------------------------

  const content = {
    eyebrow: "About Our Company",
    heading: {
      firstLine: "We connect people.",
      secondLine: "We move businesses.",
    },
    description:
      "We build the communication infrastructure behind modern businesses, bringing together intelligent technology, dependable networks, and human-first service to make every conversation count.",
    primaryCta: {
      label: "Discover Our Story",
      href: "#our-story",
    },
    secondaryCta: {
      label: "Meet Our Team",
      href: "#team",
    },
    mission: {
      eyebrow: "Our Mission",
      title: "Communication without unnecessary complexity.",
      description:
        "From the first connection to millions of conversations, we create powerful technology that works quietly behind the scenes and feels effortless to the people who depend on it.",
      footerLabel: "Built for",
      footerValue: "Ambitious teams",
    },
    valuesHeading: "What We Believe",
  };

  const stats: Stat[] = [
    { value: "10+", label: "Years of Experience" },
    { value: "42+", label: "Countries Connected" },
    { value: "99.99%", label: "Network Uptime" },
    { value: "24/7", label: "Global Support" },
  ];

  const values: CompanyValue[] = [
    {
      number: "01",
      title: "Human First",
      description:
        "Technology should make communication simpler, more natural, and more human.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 11h8M8 14h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Built to Scale",
      description:
        "Infrastructure that grows with ambitious businesses without adding unnecessary complexity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 19V12M10 19V7M16 19V10M22 19V4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="m3 8 6-4 6 3 6-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Always Reliable",
      description:
        "Every connection matters. Our technology and people are focused on dependable communication.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3 20 6v5.5c0 4.5-3.2 7.6-8 9.5-4.8-1.9-8-5-8-9.5V6l8-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m8.5 12 2.2 2.2 4.8-4.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // ----------------------------------------
  // REUSABLE COMPONENTS
  // ----------------------------------------

  const ArrowIcon = () => (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ----------------------------------------
  // RENDER
  // ----------------------------------------

  return (
    <section
      className={`relative isolate min-h-screen overflow-hidden pb-16 sm:pb-24 ${styles.section}`}
    >
      {/* Ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[420px] w-[min(90vw,1000px)] -translate-x-1/2 rounded-full bg-[#D9A83E]/[0.10] blur-[120px] sm:h-[560px]"
        aria-hidden="true"
      />

      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-[size:48px_48px] ${styles.grid}`}
        aria-hidden="true"
      />

      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_50%_25%,rgba(217,168,62,0.10),transparent_55%)]"
            : "bg-[radial-gradient(ellipse_at_50%_25%,rgba(217,168,62,0.12),transparent_55%)]"
        }`}
        aria-hidden="true"
      />

      {/* ----------------------------------------
          ANIMATED GLOBAL NETWORK
      ---------------------------------------- */}

      <div
        className="pointer-events-none absolute inset-x-0 top-12 -z-10 flex justify-center overflow-hidden opacity-90 motion-reduce:hidden"
        aria-hidden="true"
      >
        <div className="w-[1100px] max-w-none sm:w-[1450px]">
          <svg
            viewBox="0 0 1200 620"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="aboutHeroGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="aboutHeroBlur">
                <feGaussianBlur stdDeviation="20" />
              </filter>

              <linearGradient id="aboutHeroRoute" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D9A83E" stopOpacity="0" />
                <stop offset="48%" stopColor="#D9A83E" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FFF0B5" stopOpacity="0.1" />
              </linearGradient>

              <radialGradient id="aboutHeroCore">
                <stop offset="0%" stopColor="#FFF0B5" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#D9A83E" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#D9A83E" stopOpacity="0" />
              </radialGradient>

              <path
                id="aboutHeroPath1"
                d="M150 310 Q330 100 530 265"
              />
              <path
                id="aboutHeroPath2"
                d="M530 265 Q720 100 930 220"
              />
              <path
                id="aboutHeroPath3"
                d="M530 265 Q690 390 850 440"
              />
              <path
                id="aboutHeroPath4"
                d="M280 450 Q390 350 530 265"
              />
              <path
                id="aboutHeroPath5"
                d="M930 220 Q1000 275 1050 350"
              />
              <path
                id="aboutHeroPath6"
                d="M150 310 Q320 500 520 400"
              />
            </defs>

            {/* Large orbital rings */}
            <ellipse
              cx="600"
              cy="310"
              rx="490"
              ry="210"
              stroke={isDark ? "#D9A83E" : "#B88A28"}
              strokeOpacity={isDark ? "0.16" : "0.20"}
              strokeWidth="1"
              strokeDasharray="3 12"
            />

            <ellipse
              cx="600"
              cy="310"
              rx="355"
              ry="145"
              stroke={isDark ? "#D9A83E" : "#B88A28"}
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="2 14"
            />

            {/* Glowing network core */}
            <circle cx="600" cy="310" r="220" fill="url(#aboutHeroCore)" />

            {/* Abstract world map */}
            <g
              fill={isDark ? "#FFFFFF" : "#151716"}
              fillOpacity={isDark ? "0.075" : "0.065"}
              stroke={isDark ? "#FFFFFF" : "#151716"}
              strokeOpacity="0.08"
              strokeWidth="0.8"
            >
              <path d="M110 185 150 143 210 130 260 155 290 194 266 222 222 229 193 260 160 239 132 212 105 211Z" />
              <path d="M260 275 300 291 326 332 314 374 291 425 272 465 252 425 256 375 238 328Z" />
              <path d="M452 180 480 157 520 160 548 180 536 201 505 211 477 202 457 218 440 199Z" />
              <path d="M477 238 524 226 568 254 582 291 562 342 537 387 509 369 490 324 470 281Z" />
              <path d="M552 177 602 151 665 143 723 161 784 174 836 205 868 235 839 261 796 260 756 282 714 263 674 279 635 250 593 235 562 210Z" />
              <path d="M690 274 721 287 731 320 712 347 693 323 681 297Z" />
              <path d="M804 389 843 374 891 389 925 420 911 447 875 458 834 440 807 419Z" />
              <path d="M926 475 944 483 938 495 921 491Z" />
            </g>

            {/* Network routes */}
            {[
              { id: "aboutHeroPath1", d: "M150 310 Q330 100 530 265" },
              { id: "aboutHeroPath2", d: "M530 265 Q720 100 930 220" },
              { id: "aboutHeroPath3", d: "M530 265 Q690 390 850 440" },
              { id: "aboutHeroPath4", d: "M280 450 Q390 350 530 265" },
              { id: "aboutHeroPath5", d: "M930 220 Q1000 275 1050 350" },
              { id: "aboutHeroPath6", d: "M150 310 Q320 500 520 400" },
            ].map((route, index) => (
              <g key={route.id}>
                <path
                  d={route.d}
                  stroke="#D9A83E"
                  strokeOpacity="0.13"
                  strokeWidth="9"
                  filter="url(#aboutHeroBlur)"
                />
                <path
                  d={route.d}
                  stroke="url(#aboutHeroRoute)"
                  strokeWidth="1.5"
                  strokeDasharray="5 9"
                />
                <circle
                  r={index % 2 === 0 ? "4" : "3"}
                  fill={index % 2 === 0 ? "#FFF0B5" : "#D9A83E"}
                  filter="url(#aboutHeroGlow)"
                >
                  <animateMotion
                    dur={`${3.5 + index * 0.45}s`}
                    begin={`${index * 0.55}s`}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {/* Central communications hub */}
            <g>
              <circle
                cx="530"
                cy="265"
                r="58"
                fill="#D9A83E"
                fillOpacity="0.06"
                filter="url(#aboutHeroBlur)"
              />

              <circle
                cx="530"
                cy="265"
                r="40"
                stroke="#D9A83E"
                strokeOpacity="0.35"
                strokeWidth="1"
              >
                <animate
                  attributeName="r"
                  values="32;46;32"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.4;0.12;0.4"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="530"
                cy="265"
                r="19"
                fill="#D9A83E"
                fillOpacity="0.12"
              />
              <circle
                cx="530"
                cy="265"
                r="7"
                fill="#FFF0B5"
                filter="url(#aboutHeroGlow)"
              />
            </g>

            {/* Global connection nodes */}
            {[
              [150, 310],
              [930, 220],
              [850, 440],
              [280, 450],
              [1050, 350],
              [520, 400],
            ].map(([x, y], index) => (
              <g key={`${x}-${y}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="17"
                  fill="#D9A83E"
                  fillOpacity="0.12"
                >
                  <animate
                    attributeName="r"
                    values="12;23;12"
                    dur={`${2.8 + index * 0.25}s`}
                    begin={`${index * 0.3}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.12;0.025;0.12"
                    dur={`${2.8 + index * 0.25}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#D9A83E"
                  filter="url(#aboutHeroGlow)"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* ----------------------------------------
          MAIN CONTENT
      ---------------------------------------- */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 text-center sm:px-8 sm:pt-32 lg:pt-36">
        {/* Eyebrow */}
        <div
          className={`mx-auto inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-xl sm:text-[11px] ${styles.eyebrow}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9A83E]" />
          </span>
          {content.eyebrow}
        </div>

        {/* Heading */}
        <h1
          className={`mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[92px] ${styles.heading}`}
        >
          {content.heading.firstLine}
          <br />
          <span className="bg-gradient-to-r from-[#B88A28] via-[#E8BC51] to-[#FFF0B5] bg-clip-text text-transparent">
            {content.heading.secondLine}
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 sm:mt-8 sm:text-base sm:leading-8 ${styles.paragraph}`}
        >
          {content.description}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection(content.primaryCta.href)}
            className={`group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold shadow-[0_8px_30px_rgba(217,168,62,0.12)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${styles.primaryButton}`}
          >
            {content.primaryCta.label}
            <ArrowIcon />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection(content.secondaryCta.href)}
            className={`inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border px-7 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${styles.secondaryButton}`}
          >
            {content.secondaryCta.label}
            <svg
              className={`h-4 w-4 ${styles.gold}`}
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3V17M3 10H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ----------------------------------------
            COMPANY STATS
        ---------------------------------------- */}

        <div
          className={`mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border backdrop-blur-xl sm:mt-16 sm:grid-cols-4 sm:rounded-3xl ${styles.border} ${styles.card}`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex min-h-[112px] flex-col items-center justify-center px-3 py-6 transition-colors duration-300 hover:bg-[#D9A83E]/[0.07] sm:min-h-[132px] sm:px-5 ${
                index % 2 !== 0 ? `border-l ${styles.border}` : ""
              } ${
                index >= 2 ? `border-t ${styles.border} sm:border-t-0` : ""
              } ${
                index > 0 && index !== 2
                  ? `sm:border-l ${styles.border}`
                  : ""
              }`}
            >
              <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#D9A83E] to-[#FFF0B5] bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </span>
              <span
                className={`mt-2 text-center text-[9px] font-semibold uppercase leading-4 tracking-[0.13em] sm:text-[10px] sm:tracking-[0.16em] ${styles.muted}`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ----------------------------------------
    COMPANY VALUES
---------------------------------------- */}

<div
  className="mx-auto mt-5 max-w-5xl text-left"
  id="our-story"
>
  <article
    className={`rounded-3xl border p-6 backdrop-blur-xl sm:p-8 ${styles.card}`}
  >
    <div className="flex items-center justify-between gap-4">
      <div
        className={`text-[10px] font-bold uppercase tracking-[0.2em] ${styles.gold}`}
      >
        What We Believe
      </div>

      <div className={`text-[10px] font-medium ${styles.muted}`}>
        OUR PRINCIPLES
      </div>
    </div>

    <div className="mt-6 grid gap-7 sm:grid-cols-3 sm:gap-8">
      {values.map((value) => (
        <div
          key={value.number}
          className="group flex flex-col items-start"
        >
          <div className="flex w-full items-center justify-between">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9A83E]/25 bg-[#D9A83E]/[0.08] ${styles.gold} transition-all duration-300 group-hover:border-[#D9A83E]/50 group-hover:bg-[#D9A83E]/[0.15]`}
            >
              <div className="h-5 w-5">{value.icon}</div>
            </div>

            <span
              className={`text-xs font-semibold tracking-wider ${styles.gold}`}
            >
              {value.number}
            </span>
          </div>

          <h3
            className={`mt-4 text-base font-semibold ${styles.heading}`}
          >
            {value.title}
          </h3>

          <p
            className={`mt-2 text-xs leading-6 ${styles.paragraph}`}
          >
            {value.description}
          </p>

          <div className="mt-5 h-[2px] w-8 rounded-full bg-[#D9A83E]/60 transition-all duration-500 group-hover:w-14 group-hover:bg-[#D9A83E]" />
        </div>
      ))}
    </div>
  </article>
</div>

        {/* Bottom message — brighter and more visible */}
        <div
          className={`mx-auto mt-5 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#D9A83E]/25 bg-gradient-to-r from-[#D9A83E]/[0.10] via-[#D9A83E]/[0.055] to-transparent px-5 py-5 text-center sm:flex-row sm:px-7 sm:text-left ${isDark ? "shadow-[0_0_45px_rgba(217,168,62,0.05)]" : "shadow-sm"}`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9A83E]/35 bg-[#D9A83E]/[0.12] text-[#D9A83E]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12h4l2.5-7L14 19l2.5-7H20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className={`text-sm font-semibold ${styles.heading}`}>
                Better connections. Bigger possibilities.
              </p>
              <p className={`mt-1 text-xs leading-5 ${styles.paragraph}`}>
                Communication infrastructure designed around your business.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles.primaryButton}`}
          >
            Start a Conversation
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 ${
          isDark
            ? "bg-gradient-to-t from-[#070909] via-[#070909]/60 to-transparent"
            : "bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/60 to-transparent"
        }`}
        aria-hidden="true"
      />
    </section>
  );
};

export default AboutHero;
