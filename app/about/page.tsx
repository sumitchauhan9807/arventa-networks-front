'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';
import Header from '@/components/layout/Header';
import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import WorldVoipMap from '@/components/WorldMaps/WorldMap';
import VoipHero from '@/components/Hero/VoipHero';
import VoipHero2 from '@/components/Hero/VoipHero2';
import AboutHero from '@/components/Hero/AboutHero';
import Team from '@/components/Team';

import Loader from '@/components/layout/Loader';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimic API response after 2 seconds
    const timer = setTimeout(() => {
      setData({
        id: 1,
        name: 'John Doe',
        message: 'Data fetched successfully!',
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${theme == 'light' ? 'light' : 'dark'} about`}>
      <Header2 mode={theme} />
      {loading ? (
        <Loader isLight={theme == 'light'} message="Loading About Arventa" duration={1800} />
      ) : (
        <>
          <VoipHero2 />
          <VoipHero />
          <AboutHero />

          {theme == 'light' ? <Light /> : <Dark />}
          <WorldVoipMap />
          <Team />
        </>
      )}

      <Footer mode={theme} />
    </main>
  );
}

const Dark = () => {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-[#050606] pt-20">
        {/* background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-background opacity-70" />
          <div className="absolute left-[55%] top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[150px]" />
          <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#D9A83E]/5 blur-[130px]" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            {/* LEFT */}
            <div className="relative z-20 max-w-2xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">
                <span className="h-px w-10 bg-[#D9A83E]" />
                About Arventa Networks
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                Built for
                <span className="block bg-gradient-to-r from-[#F6D27A] via-[#D9A83E] to-[#A87920] bg-clip-text text-transparent">better</span>
                <span className="block">communication.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">Arventa Networks builds intelligent communication infrastructure for businesses, carriers and technologies that need reliable connectivity and scalable voice solutions.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#solutions" className="group inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]">
                  Explore Our Solutions
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href="#contact" className="inline-flex items-center gap-3 rounded-md border border-white/15 px-6 py-4 text-sm font-medium text-white transition hover:border-[#D9A83E] hover:text-[#D9A83E]">
                  Talk to an Expert
                </a>
              </div>
              {/* stats */}
              <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Operations</div>
                </div>
                <div className="border-l border-white/10 pl-5">
                  <div className="text-2xl font-semibold text-white">Voice</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Infrastructure</div>
                </div>
                <div className="border-l border-white/10 pl-5">
                  <div className="text-2xl font-semibold text-white">Global</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Connectivity</div>
                </div>
              </div>
            </div>
            {/* RIGHT NETWORK VISUAL */}
            <div className="relative h-[500px] sm:h-[600px] lg:h-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/10 sm:h-[520px] sm:w-[520px]" />
              {/* orbit */}
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[50%] border border-[#D9A83E]/20" />
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[210px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[50%] border border-[#D9A83E]/10" />
              {/* SVG network */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 650" preserveAspectRatio="xMidYMid meet">
                <path d="M60 390 C150 330 120 180 250 180 S370 350 470 290 S530 170 610 130" fill="none" stroke="#D9A83E" strokeOpacity=".35" strokeWidth={1} className="network-line" />
                <path d="M70 180 C170 210 180 430 300 420 S420 220 500 250 S570 420 620 430" fill="none" stroke="#FFFFFF" strokeOpacity=".13" strokeWidth={1} className="network-line-reverse" />
                <path d="M80 520 C180 470 210 260 330 280 S420 470 530 410 S560 280 620 250" fill="none" stroke="#D9A83E" strokeOpacity=".18" strokeWidth={1} />
                {/* nodes */}
                <g fill="#D9A83E">
                  <circle cx={60} cy={390} r={3} />
                  <circle cx={250} cy={180} r={3} />
                  <circle cx={470} cy={290} r={3} />
                  <circle cx={610} cy={130} r={3} />
                  <circle cx={70} cy={180} r={2} />
                  <circle cx={300} cy={420} r={3} />
                  <circle cx={500} cy={250} r={2} />
                  <circle cx={620} cy={430} r={3} />
                </g>
              </svg>
              {/* central hub */}
              <div className="orb absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9A83E]/50 bg-[#080a0a]">
                <div className="absolute h-24 w-24 rounded-full border border-[#D9A83E]/15" />
                <div className="text-center">
                  <div className="font-display text-lg font-semibold tracking-[.14em] text-white">ARVENTA</div>
                  <div className="mt-1 text-[8px] uppercase tracking-[.32em] text-[#D9A83E]">NETWORKS</div>
                </div>
              </div>
              {/* status card */}
              <div className="absolute right-0 top-16 hidden w-48 rounded-xl border border-white/10 bg-[#080a0a]/80 p-5 backdrop-blur-xl sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[.18em] text-white/50">Network</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
                  </span>
                </div>
                <div className="mt-3 text-sm font-medium text-white">Operational</div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-3 flex justify-between text-[9px] uppercase tracking-wider text-white/40">
                  <span>Voice</span>
                  <span className="text-[#D9A83E]">Active</span>
                </div>
                <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-white/40">
                  <span>SIP</span>
                  <span className="text-[#D9A83E]">Active</span>
                </div>
              </div>
              {/* bottom label */}
              <div className="absolute bottom-16 left-0 hidden rounded-lg border border-white/10 bg-[#080a0a]/80 px-5 py-4 backdrop-blur-xl sm:block">
                <div className="text-[9px] uppercase tracking-[.2em] text-white/40">Communication Infrastructure</div>
                <div className="mt-1 text-sm text-white">Built to connect.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
     WHO WE ARE
========================================================= */}
      <section className="relative overflow-hidden bg-[#080808] py-28">
        {/* Dark grid */}
        <div className="absolute inset-0 grid-background opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">Who We Are</div>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Infrastructure with
                <span className="gold-text"> purpose.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">Arventa Networks operates at the intersection of telecom, technology and connectivity. We create communication infrastructure designed for organizations that depend on reliable communication every day.</p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">From carrier services and voice infrastructure to mobile, IoT and contact center technologies, our approach is built around connectivity, flexibility and long-term partnerships.</p>

              <a href="#solutions" className="group mt-8 inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium text-[#D9A83E] transition-all duration-300 hover:bg-[#D9A83E] hover:text-black hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]">
                Discover Our Approach
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Stats */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="grid grid-cols-2">
                {/* 99.9% */}
                <div className="group border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.05]">
                  <div className="text-4xl font-semibold gold-text">99.9%</div>

                  <div className="mt-2 text-sm text-white/55">Network Uptime</div>
                </div>

                {/* 200+ */}
                <div className="group border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.05]">
                  <div className="text-4xl font-semibold gold-text">200+</div>

                  <div className="mt-2 text-sm text-white/55">Carrier Partners</div>
                </div>

                {/* 180+ */}
                <div className="group border-r border-white/10 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.05]">
                  <div className="text-4xl font-semibold gold-text">180+</div>

                  <div className="mt-2 text-sm text-white/55">Countries</div>
                </div>

                {/* 24/7 */}
                <div className="group p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.05]">
                  <div className="text-4xl font-semibold gold-text">24/7</div>

                  <div className="mt-2 text-sm text-white/55">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
     SOLUTIONS
========================================================= */}
      <section id="solutions" className="bg-[#080808] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">What We Do</div>

            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Communication
              <span className="gold-text"> engineered.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">From carrier services to communication infrastructure, we provide the technology and connectivity businesses need to grow, connect and operate.</p>
          </div>

          {/* Solution Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Carrier & Network */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.05] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">◈</div>

              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-[#D9A83E]">Carrier &amp; Network</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">SIP Trunking, Voice, DIDs, Connectivity and Security.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Mobile & IoT */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.05] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">▣</div>

              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-[#D9A83E]">Mobile &amp; IoT</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">MVNO, eSIM and IoT / M2M connectivity solutions.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Contact Center */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.05] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">◉</div>

              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-[#D9A83E]">Contact Center</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">Dialers, AI, fraud prevention and communication APIs.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Technology Partnerships */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.05] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">✦</div>

              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-[#D9A83E]">Technology Partnerships</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">Integrate. Automate. Grow with the right ecosystem.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a href="#contact" className="group inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium text-[#D9A83E] transition-all duration-300 hover:bg-[#D9A83E] hover:text-black hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]">
              Explore Solutions
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* =========================================================
     NETWORK
========================================================= */}
      <section id="network" className="relative overflow-hidden border-y border-white/10 bg-[#050606] py-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-background opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#D9A83E]">
              <span className="h-px w-8 bg-[#D9A83E]" />
              Network Infrastructure
              <span className="h-px w-8 bg-[#D9A83E]" />
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built around
              <span className="bg-gradient-to-r from-[#F6D27A] to-[#D9A83E] bg-clip-text text-transparent">reliability.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">Communication infrastructure should work quietly in the background — consistently, predictably and intelligently.</p>
          </div>
          {/* dashboard */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#080a0a]/80 shadow-[0_0_80px_rgba(217,168,62,.06)] backdrop-blur-xl">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A83E]/50 to-transparent" />
            {/* top */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-6 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
                </span>
                <span className="text-xs font-medium text-white">ARVENTA NETWORK</span>
                <span className="rounded-full border border-[#D9A83E]/20 bg-[#D9A83E]/5 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#D9A83E]">Operational</span>
              </div>
              <div className="flex gap-6 text-[10px] text-white/50">
                <span>
                  VOICE
                  <b className="ml-1 text-white">ACTIVE</b>
                </span>
                <span>
                  SIP
                  <b className="ml-1 text-[#D9A83E]">READY</b>
                </span>
                <span>
                  OPS
                  <b className="ml-1 text-white">24/7</b>
                </span>
              </div>
            </div>
            {/* dashboard body */}
            <div className="grid lg:grid-cols-[.7fr_1.3fr]">
              {/* metrics */}
              <div className="grid grid-cols-2 border-b border-white/10 lg:border-b-0 lg:border-r">
                <div className="border-b border-r border-white/10 p-8">
                  <div className="text-xs uppercase tracking-wider text-white/40">Voice</div>
                  <div className="mt-3 text-2xl font-semibold text-white">Active</div>
                </div>
                <div className="border-b border-white/10 p-8">
                  <div className="text-xs uppercase tracking-wider text-white/40">SIP</div>
                  <div className="mt-3 text-2xl font-semibold text-[#D9A83E]">Ready</div>
                </div>
                <div className="border-r border-white/10 p-8">
                  <div className="text-xs uppercase tracking-wider text-white/40">Routing</div>
                  <div className="mt-3 text-2xl font-semibold text-white">Online</div>
                </div>
                <div className="p-8">
                  <div className="text-xs uppercase tracking-wider text-white/40">Operations</div>
                  <div className="mt-3 text-2xl font-semibold text-white">24/7</div>
                </div>
              </div>
              {/* chart */}
              <div className="relative min-h-[300px] overflow-hidden p-6">
                <div className="absolute inset-x-6 top-6 bottom-6 flex flex-col justify-between">
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                </div>
                <div className="scan-line absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A83E]/60 to-transparent" />
                <svg className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)]" viewBox="0 0 800 250" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area" x1={0} x2={0} y1={0} y2={1}>
                      <stop offset="0%" stopColor="#D9A83E" stopOpacity=".18" />
                      <stop offset="100%" stopColor="#D9A83E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 210
                 C80 180 90 195 150 145
                 S220 170 275 125
                 S350 95 400 130
                 S465 150 515 85
                 S575 115 620 65
                 S690 90 740 40
                 S770 55 800 25
                 L800 250
                 L0 250 Z"
                    fill="url(#area)"
                  />
                  <path
                    d="M0 210
                 C80 180 90 195 150 145
                 S220 170 275 125
                 S350 95 400 130
                 S465 150 515 85
                 S575 115 620 65
                 S690 90 740 40
                 S770 55 800 25"
                    fill="none"
                    stroke="#D9A83E"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between text-[9px] uppercase tracking-wider text-white/25">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
     PRINCIPLES
========================================================= */}
      <FeatureGridSection layoutType="TIMELINE" />
      <FeatureGridSection layoutType="NUMBERED" />

      {/* =========================================================
     CTA
========================================================= */}
      <section id="contact" className="relative overflow-hidden border-b border-white/10 bg-[#090b0b] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#100d06] via-[#171006] to-black" />
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
            <svg className="h-full w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path d="M0 150 C250 20 350 230 600 100 S950 10 1200 130" fill="none" stroke="#D9A83E" strokeWidth={2} />
              <path d="M0 180 C250 50 350 250 600 130 S950 40 1200 160" fill="none" stroke="#D9A83E" strokeOpacity=".3" strokeWidth={1} />
            </svg>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#D9A83E]">Let's Connect</div>
              <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let's build better
                <span className="bg-gradient-to-r from-[#F6D27A] to-[#D9A83E] bg-clip-text text-transparent">communication.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">Get in touch with our team and find the right communication infrastructure for your business.</p>
              <a href="mailto:hello@arventa.networks" className="group mt-8 inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]">
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <div className="grid grid-cols-2">
                <div className="border-b border-r border-white/10 p-8">
                  <div className="text-4xl font-semibold text-[#D9A83E]">24/7</div>
                  <div className="mt-2 text-sm text-white/60">Operations</div>
                </div>
                <div className="border-b border-white/10 p-8">
                  <div className="text-4xl font-semibold text-[#D9A83E]">Voice</div>
                  <div className="mt-2 text-sm text-white/60">Infrastructure</div>
                </div>
                <div className="border-r border-white/10 p-8">
                  <div className="text-4xl font-semibold text-[#D9A83E]">SIP</div>
                  <div className="mt-2 text-sm text-white/60">Connectivity</div>
                </div>
                <div className="p-8">
                  <div className="text-4xl font-semibold text-[#D9A83E]">Global</div>
                  <div className="mt-2 text-sm text-white/60">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="relative overflow-hidden border-y border-white/10 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#100d06] via-[#171006] to-black" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arventa-gold/10 blur-[130px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[.25em] text-arventa-gold">Let's Connect</div>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Let's build what's
            <span className="gold-text"> next. </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8">Whether you are looking for carrier connectivity, mobile infrastructure, IoT solutions or intelligent communications software, our team is ready to discuss your requirements.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {/* <a href="mailto:hello@arventa.networks" className="group mt-8 inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]">
                Contact / Sales
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a> */}
            <a href="mailto:sales@example.com" className="inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-7 py-4 text-sm font-semibold text-black transition hover:bg-arventa-goldLight hover:bg-[#F5CC70]">
              Contact / Sales
              <span>→</span>
            </a>
            <a href="index.html" className="inline-flex items-center gap-3 rounded-md border border-white/15 px-7 py-4 text-sm font-medium text-white/90 transition hover:border-arventa-gold hover:text-arventa-gold">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Light = () => {
  return (
    <div>
      <section id="about" className="relative min-h-screen overflow-hidden bg-white pt-20">
        {/* subtle background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 light-grid opacity-80" />
          <div className="absolute left-[65%] top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/[0.07] blur-[140px]" />
          <div className="absolute right-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-slate-100 blur-[100px]" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
            {/* HERO COPY */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">
                <span className="h-px w-10 bg-[#D9A83E]" />
                About Arventa Networks
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[78px]">
                Built for
                <span className="block gold-text">better</span>
                <span className="block">communication.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Arventa Networks builds intelligent communication infrastructure for businesses, carriers and technology partners that need reliable connectivity, scalable voice and better control.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#solutions" className="group inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F5CC70] hover:shadow-[0_12px_35px_rgba(217,168,62,0.18)]">
                  Explore Our Solutions
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href="#network" className="inline-flex items-center gap-3 rounded-md border border-slate-300 px-6 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#D9A83E] hover:text-[#B88725]">
                  Our Network
                </a>
              </div>
              {/* Small stats */}
              <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-7">
                <div>
                  <div className="text-2xl font-semibold text-slate-900">24/7</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">Operations</div>
                </div>
                <div className="border-l border-slate-200 pl-5">
                  <div className="text-2xl font-semibold text-slate-900">Voice</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">Infrastructure</div>
                </div>
                <div className="border-l border-slate-200 pl-5">
                  <div className="text-2xl font-semibold text-slate-900">Global</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">Connectivity</div>
                </div>
              </div>
            </div>
            {/* NETWORK VISUAL */}
            <div className="relative h-[500px] sm:h-[600px] lg:h-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9A83E]/20 sm:h-[520px] sm:w-[520px]" />
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[50%] border border-[#D9A83E]/20" />
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[210px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[50%] border border-slate-200" />
              {/* SVG */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 650" preserveAspectRatio="xMidYMid meet">
                <path d="M60 390 C150 330 120 180 250 180 S370 350 470 290 S530 170 610 130" fill="none" stroke="#D9A83E" strokeOpacity=".45" strokeWidth="1.2" className="network-line" />
                <path d="M70 180 C170 210 180 430 300 420 S420 220 500 250 S570 420 620 430" fill="none" stroke="#94a3b8" strokeOpacity=".5" strokeWidth={1} className="network-line-reverse" />
                <path d="M80 520 C180 470 210 260 330 280 S420 470 530 410 S560 280 620 250" fill="none" stroke="#D9A83E" strokeOpacity=".25" strokeWidth={1} />
                {/* nodes */}
                <g fill="#D9A83E">
                  <circle cx={60} cy={390} r="3.5" />
                  <circle cx={250} cy={180} r={3} />
                  <circle cx={470} cy={290} r={3} />
                  <circle cx={610} cy={130} r="3.5" />
                  <circle cx={70} cy={180} r="2.5" />
                  <circle cx={300} cy={420} r={3} />
                  <circle cx={500} cy={250} r="2.5" />
                  <circle cx={620} cy={430} r={3} />
                </g>
              </svg>
              {/* central hub */}
              <div className="network-pulse absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9A83E]/60 bg-white shadow-[0_20px_70px_rgba(217,168,62,0.15)]">
                <div className="absolute h-24 w-24 rounded-full border border-[#D9A83E]/20" />
                <div className="text-center">
                  <div className="font-display text-lg font-semibold tracking-[.14em] text-slate-900">ARVENTA</div>
                  <div className="mt-1 text-[8px] uppercase tracking-[.32em] text-[#B88725]">NETWORKS</div>
                </div>
              </div>
              {/* Network card */}
              <div className="absolute right-0 top-14 hidden w-48 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[.18em] text-slate-400">Network</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
                  </span>
                </div>
                <div className="mt-3 text-sm font-medium text-slate-900">Operational</div>
                <div className="mt-4 h-px bg-slate-200" />
                <div className="mt-3 flex justify-between text-[9px] uppercase tracking-wider text-slate-400">
                  <span>Voice</span>
                  <span className="text-[#B88725]">Active</span>
                </div>
                <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-slate-400">
                  <span>SIP</span>
                  <span className="text-[#B88725]">Active</span>
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-12 left-0 hidden rounded-lg border border-slate-200 bg-white/90 px-5 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:block">
                <div className="text-[9px] uppercase tracking-[.2em] text-slate-400">Communication Infrastructure</div>
                <div className="mt-1 text-sm text-slate-800">Built to connect.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
       WHO WE ARE
  ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-28">
        <div className="absolute inset-0 light-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">Who We Are</div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Infrastructure with
                <span className="gold-text"> purpose.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">Arventa Networks operates at the intersection of telecom, technology and connectivity. We create communication infrastructure designed for organizations that depend on reliable communication every day.</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">From carrier services and voice infrastructure to mobile, IoT and contact center technologies, our approach is built around connectivity, flexibility and long-term partnerships.</p>
              <a href="#solutions" className="group mt-8 inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium text-[#B88725] transition-all duration-300 hover:bg-[#D9A83E] hover:text-black hover:shadow-[0_10px_30px_rgba(217,168,62,0.18)]">
                Discover Our Approach
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
            {/* Stats */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <div className="grid grid-cols-2">
                <div className="group border-b border-r border-slate-200 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.04]">
                  <div className="text-4xl font-semibold gold-text">99.9%</div>
                  <div className="mt-2 text-sm text-slate-600">Network Uptime</div>
                </div>
                <div className="group border-b border-slate-200 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.04]">
                  <div className="text-4xl font-semibold gold-text">200+</div>
                  <div className="mt-2 text-sm text-slate-600">Carrier Partners</div>
                </div>
                <div className="group border-r border-slate-200 p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.04]">
                  <div className="text-4xl font-semibold gold-text">180+</div>
                  <div className="mt-2 text-sm text-slate-600">Countries</div>
                </div>
                <div className="group p-8 transition-colors duration-300 hover:bg-[#D9A83E]/[0.04]">
                  <div className="text-4xl font-semibold gold-text">24/7</div>
                  <div className="mt-2 text-sm text-slate-600">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
       SOLUTIONS
  ========================================================== */}
      <section id="solutions" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">What We Do</div>

            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Communication
              <span className="gold-text"> engineered.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">From carrier services to communication infrastructure, we provide the technology and connectivity businesses need to grow, connect and operate.</p>
          </div>

          {/* 4 Box Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Carrier & Network */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.025] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">◈</div>

              <h3 className="font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#B88725]">Carrier &amp; Network</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">SIP Trunking, Voice, DIDs, Connectivity and Security.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Mobile & IoT */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.025] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">▣</div>

              <h3 className="font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#B88725]">Mobile &amp; IoT</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">MVNO, eSIM and IoT / M2M connectivity solutions.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Contact Center */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.025] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">◉</div>

              <h3 className="font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#B88725]">Contact Center</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">Dialers, AI, fraud prevention and communication APIs.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Technology Partnerships */}
            <a href="#" className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A83E]/50 hover:bg-[#D9A83E]/[0.025] hover:shadow-[0_18px_45px_rgba(217,168,62,0.10)]">
              <div className="mb-5 text-2xl text-[#D9A83E]">✦</div>

              <h3 className="font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#B88725]">Technology Partnerships</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">Integrate. Automate. Grow with the right ecosystem.</p>

              <div className="mt-7 text-[#D9A83E] transition-transform duration-300 group-hover:translate-x-2">→</div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A83E] transition-all duration-500 group-hover:w-full" />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a href="#contact" className="group inline-flex items-center gap-5 rounded-md border border-[#D9A83E] px-6 py-4 text-sm font-medium text-[#B88725] transition-all duration-300 hover:bg-[#D9A83E] hover:text-black">
              Explore Solutions
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* =========================================================
       NETWORK
  ========================================================== */}
      <section id="network" className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-28">
        <div className="absolute inset-0 light-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">Global Infrastructure</div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Built for a<span className="gold-text"> Connected World</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Our network and carrier partnerships are designed to deliver reach, security and performance across voice, data and mobile services.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            {/* top bar */}
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-6 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A83E] opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9A83E]" />
                </span>
                <span className="text-xs font-medium text-slate-900">ARVENTA NETWORK</span>
                <span className="rounded-full border border-[#D9A83E]/30 bg-[#D9A83E]/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#B88725]">Operational</span>
              </div>
              <div className="flex gap-6 text-[10px] text-slate-400">
                <span>
                  VOICE
                  <b className="ml-1 text-slate-700">ACTIVE</b>
                </span>
                <span>
                  SIP
                  <b className="ml-1 text-[#B88725]">READY</b>
                </span>
                <span>
                  OPS
                  <b className="ml-1 text-slate-700">24/7</b>
                </span>
              </div>
            </div>
            <div className="grid lg:grid-cols-[.7fr_1.3fr]">
              {/* metrics */}
              <div className="grid grid-cols-2 border-b border-slate-200 lg:border-b-0 lg:border-r">
                <div className="border-b border-r border-slate-200 p-8">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Voice</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">Active</div>
                </div>
                <div className="border-b border-slate-200 p-8">
                  <div className="text-xs uppercase tracking-wider text-slate-400">SIP</div>
                  <div className="mt-3 text-2xl font-semibold text-[#B88725]">Ready</div>
                </div>
                <div className="border-r border-slate-200 p-8">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Routing</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">Online</div>
                </div>
                <div className="p-8">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Operations</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">24/7</div>
                </div>
              </div>
              {/* chart */}
              <div className="relative min-h-[300px] overflow-hidden p-6">
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-between">
                  <span className="border-t border-slate-100" />
                  <span className="border-t border-slate-100" />
                  <span className="border-t border-slate-100" />
                  <span className="border-t border-slate-100" />
                  <span className="border-t border-slate-100" />
                </div>
                <svg className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)]" viewBox="0 0 800 250" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lightArea" x1={0} x2={0} y1={0} y2={1}>
                      <stop offset="0%" stopColor="#D9A83E" stopOpacity=".18" />
                      <stop offset="100%" stopColor="#D9A83E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 210
                   C80 180 90 195 150 145
                   S220 170 275 125
                   S350 95 400 130
                   S465 150 515 85
                   S575 115 620 65
                   S690 90 740 40
                   S770 55 800 25
                   L800 250
                   L0 250 Z"
                    fill="url(#lightArea)"
                  />
                  <path
                    d="M0 210
                   C80 180 90 195 150 145
                   S220 170 275 125
                   S350 95 400 130
                   S465 150 515 85
                   S575 115 620 65
                   S690 90 740 40
                   S770 55 800 25"
                    fill="none"
                    stroke="#D9A83E"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between text-[9px] uppercase tracking-wider text-slate-300">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
       PRINCIPLES
  ========================================================== */}
      <FeatureGridSection layoutType="TIMELINE" />
      <FeatureGridSection layoutType="NUMBERED" />

      {/* =========================================================
       CTA
  ========================================================== */}
      <section id="contact" className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-24">
        <div className="absolute inset-0 light-grid opacity-50" />
        <div className="absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D9A83E]/[0.07] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">Let's Connect</div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Let's build better
                <span className="gold-text">communication.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">Connect with the Arventa Networks team and discover the right infrastructure for your business.</p>
              <a href="mailto:hello@arventa.networks" className="group mt-8 inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F5CC70] hover:shadow-[0_12px_35px_rgba(217,168,62,0.18)]">
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="grid grid-cols-2">
                <div className="border-b border-r border-slate-200 p-8">
                  <div className="text-4xl font-semibold gold-text">24/7</div>
                  <div className="mt-2 text-sm text-slate-600">Operations</div>
                </div>
                <div className="border-b border-slate-200 p-8">
                  <div className="text-4xl font-semibold gold-text">Voice</div>
                  <div className="mt-2 text-sm text-slate-600">Infrastructure</div>
                </div>
                <div className="border-r border-slate-200 p-8">
                  <div className="text-4xl font-semibold gold-text">SIP</div>
                  <div className="mt-2 text-sm text-slate-600">Connectivity</div>
                </div>
                <div className="p-8">
                  <div className="text-4xl font-semibold gold-text">Global</div>
                  <div className="mt-2 text-sm text-slate-600">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="relative overflow-hidden border-y border-slate-200 bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffdf8] to-white" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A83E]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[.25em] text-[#B88725]">Let's Connect</div>

          <h2 className="mt-5 text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            Let's build what's
            <span className="gold-text"> next. </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">Whether you are looking for carrier connectivity, mobile infrastructure, IoT solutions or intelligent communications software, our team is ready to discuss your requirements.</p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="mailto:sales@example.com" className="inline-flex items-center gap-5 rounded-md bg-[#D9A83E] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#F5CC70]">
              Contact / Sales
              <span>→</span>
            </a>

            <a href="#solutions" className="inline-flex items-center gap-3 rounded-md border border-slate-300 px-7 py-4 text-sm font-medium text-slate-700 transition hover:border-[#D9A83E] hover:text-[#B88725]">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
