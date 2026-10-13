
import React from "react";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDark = theme === "dark";

  const styles = {
    section: isDark
      ? "bg-[#070909] text-white"
      : "bg-[#F7F5F0] text-[#151716]",

    mainGlow: isDark
      ? "bg-[#D9A83E]/[0.055]"
      : "bg-[#D9A83E]/[0.10]",

    leftGlow: isDark
      ? "bg-[#D9A83E]/[0.025]"
      : "bg-[#D9A83E]/[0.045]",

    rightGlow: isDark
      ? "bg-[#D9A83E]/[0.02]"
      : "bg-[#D9A83E]/[0.035]",

    radialGlow: isDark
      ? "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.08),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_50%_15%,rgba(217,168,62,0.10),transparent_40%)]",

    dots: isDark
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]"
      : "bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]",

    goldDots:
      "bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]",

    bottomFade: isDark
      ? "from-[#070909]"
      : "from-[#F7F5F0]",

    eyebrow: isDark ? "text-[#D9A83E]" : "text-[#B88725]",

    heading: isDark ? "text-white" : "text-[#151716]",

    description: isDark ? "text-white/70" : "text-[#151716]/70",

    secondaryDescription: isDark
      ? "text-white/50"
      : "text-[#151716]/55",

    founderBorder: isDark
      ? "border-white/15"
      : "border-[#151716]/15",

    founderName: isDark ? "text-white/90" : "text-[#151716]/90",

    founderDescription: isDark
      ? "text-white/50"
      : "text-[#151716]/55",

    imageCard: isDark
      ? "bg-[#D9A83E]/[0.06]"
      : "bg-[#D9A83E]/[0.10]",

    badge: isDark
      ? "bg-[#111111]/95 text-white"
      : "bg-[#F7F5F0]/95 text-[#151716]",
  };

  return (
    <section
      id="about"
      className={`relative isolate overflow-hidden py-20 transition-colors duration-300 sm:py-24 lg:py-28 ${styles.section}`}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main top gold glow */}
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] ${styles.mainGlow}`}
        />

        {/* Left ambient glow */}
        <div
          className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.leftGlow}`}
        />

        {/* Right ambient glow */}
        <div
          className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${styles.rightGlow}`}
        />

        {/* Radial gold lighting */}
        <div className={`absolute inset-0 ${styles.radialGlow}`} />

        {/* Fine dot texture */}
        <div
          className={`absolute inset-0 bg-[size:24px_24px] ${styles.dots}`}
        />

        {/* Secondary gold dot texture */}
        <div
          className={`absolute inset-0 bg-[size:48px_48px] ${styles.goldDots}`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${styles.bottomFade}`}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About content */}
          <div>
            <div
              className={`text-xs font-semibold uppercase tracking-[.25em] ${styles.eyebrow}`}
            >
              One Network. Three Ventures.
            </div>

            <h2
              className={`mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${styles.heading}`}
            >
              Who we are
              <span className="gold-text">.</span>
            </h2>

            <p
              className={`mt-6 max-w-xl text-base leading-8 ${styles.description}`}
            >
              ARVENTA Networks is a global telecommunications carrier, MVNO,
              and SIP trunk provider, delivering international DID numbers,
              mobile and fixed-line services, SIP trunks, and wholesale voice
              connectivity across 180+ countries.
            </p>

            <p
              className={`mt-4 max-w-xl text-sm leading-7 ${styles.secondaryDescription}`}
            >
              We combine our own telecom infrastructure with our own contact
              center technology, including the Tornadodialer and Call Con
              Dialer, providing businesses with both the network and software
              they need—all from one partner.
            </p>

            {/* Founder information */}
            <div
              className={`mt-8 border-l-2 pl-5 ${styles.founderBorder}`}
            >
              <p
                className={`text-sm font-semibold leading-7 ${styles.founderName}`}
              >
                Dipl-Ing. Idris Kawa
                <span className={`font-normal ${styles.founderDescription}`}>
                  {" "}
                  — CEO &amp; Founder, Arventa Networks
                </span>
              </p>

              <p
                className={`mt-2 text-sm leading-7 ${styles.secondaryDescription}`}
              >
                Headquartered in Florida, USA · Network operations across 180+
                countries
              </p>
            </div>

            {/* CTA */}
            <a
              href="#solutions"
              className={`group mt-8 inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium transition-all duration-300 hover:bg-[#D9A83E] hover:text-black ${
                isDark
                  ? "text-[#D9A83E] hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]"
                  : "text-[#B88725] hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              }`}
            >
              Discover Our Approach

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* About image */}
          <div className="group relative">
            {/* Gold image frame glow */}
            <div
              className={`absolute -inset-3 rounded-2xl transition-transform duration-500 group-hover:rotate-1 ${styles.imageCard}`}
            />

            <div className="relative overflow-hidden rounded-2xl border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <img
                src="https://strapi.arventa.net/uploads/Bildschirmfoto_2026_09_13_um_11_17_44_2fb3b4c6a1.png"
                alt="ARVENTA Networks telecommunications operations"
                loading="lazy"
                decoding="async"
                className="min-h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:min-h-[320px] lg:min-h-[360px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Network highlight */}
            <div
              className={`absolute bottom-5 left-5 rounded-xl px-5 py-4 shadow-lg backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1 sm:bottom-7 sm:left-7 ${styles.badge}`}
            >
              <p className="gold-text text-3xl font-semibold">180+</p>

              <p
                className={`mt-2 text-sm ${
                  isDark ? "text-white/60" : "text-[#151716]/65"
                }`}
              >
                Countries connected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;