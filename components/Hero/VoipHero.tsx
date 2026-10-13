import React from 'react';
import { useSelector } from 'react-redux';

type RootState = {
  theme: {
    theme: 'light' | 'dark';
  };
};

type Route = {
  id: string;
  d: string;
  duration: string;
  delay: string;
};

const routes: Route[] = [
  {
    id: 'route-america-europe',
    d: 'M180 230 Q360 40 540 175',
    duration: '3.8s',
    delay: '0s',
  },
  {
    id: 'route-america-asia',
    d: 'M180 230 Q570 30 820 190',
    duration: '5s',
    delay: '0.8s',
  },
  {
    id: 'route-america-africa',
    d: 'M180 230 Q440 280 550 330',
    duration: '4s',
    delay: '1.4s',
  },
  {
    id: 'route-europe-asia',
    d: 'M540 175 Q690 90 820 190',
    duration: '3s',
    delay: '0.4s',
  },
  {
    id: 'route-europe-india',
    d: 'M540 175 Q660 240 690 310',
    duration: '3.6s',
    delay: '1.8s',
  },
  {
    id: 'route-india-asia',
    d: 'M690 310 Q770 260 820 190',
    duration: '3.2s',
    delay: '0.6s',
  },
  {
    id: 'route-asia-australia',
    d: 'M820 190 Q950 300 970 420',
    duration: '4.2s',
    delay: '1.1s',
  },
  {
    id: 'route-africa-asia',
    d: 'M550 330 Q720 360 820 190',
    duration: '4.5s',
    delay: '2s',
  },
  {
    id: 'route-south-america',
    d: 'M245 345 Q300 430 285 480',
    duration: '3.4s',
    delay: '1.5s',
  },
];

const nodes = [
  { x: 180, y: 230, label: 'North America' },
  { x: 285, y: 480, label: 'South America' },
  { x: 540, y: 175, label: 'Europe' },
  { x: 550, y: 330, label: 'Africa' },
  { x: 690, y: 310, label: 'India' },
  { x: 820, y: 190, label: 'Asia' },
  { x: 970, y: 420, label: 'Australia' },
];

const services = [
  {
    number: '01',
    title: 'SIP Trunking',
    description: 'Flexible, reliable SIP connectivity for your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Voice Integration',
    description: 'Connect voice services with your existing systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6.5h3a4 4 0 0 1 4 4V14M14 17.5h-3a4 4 0 0 1-4-4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Scalable Capacity',
    description: 'Adapt call capacity to changing business demand.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19V5m0 14h16M7 15l4-5 3 2 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const VoipHero: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const isDark = theme === 'dark';

  const styles = {
    section: isDark ? 'bg-[#070909] text-white' : 'bg-[#F7F5F0] text-[#151716]',

    heading: isDark ? 'text-white' : 'text-[#151716]',

    paragraph: isDark ? 'text-white/75' : 'text-[#151716]/75',

    eyebrow: isDark ? 'border-[#D9A83E]/30 bg-[#D9A83E]/[0.08] text-[#F0C867]' : 'border-[#B88A28]/30 bg-[#D9A83E]/[0.10] text-[#8B6517]',

    primaryButton: isDark ? 'bg-[#D9A83E] text-[#11120F] hover:bg-[#F0C867]' : 'bg-[#151716] text-white hover:bg-[#303330]',

    secondaryButton: isDark ? 'border-white/20 bg-white/[0.07] text-white hover:border-[#D9A83E]/60 hover:bg-white/[0.11]' : 'border-[#151716]/20 bg-white/80 text-[#151716] hover:border-[#B88A28]/60 hover:bg-white',

    card: isDark ? 'border-white/[0.13] bg-[#0D100F]/95' : 'border-[#151716]/15 bg-white/95',

    cardTitle: isDark ? 'text-white' : 'text-[#151716]',

    cardMuted: isDark ? 'text-white/70' : 'text-[#151716]/70',

    gold: isDark ? 'text-[#F0C867]' : 'text-[#916710]',

    divider: isDark ? 'border-white/[0.13]' : 'border-[#151716]/[0.13]',
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={`relative isolate min-h-[900px] overflow-hidden transition-colors duration-500 ${styles.section}`}>
      {/* Background ambience */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[32%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D9A83E]/[0.10] blur-[150px]" />

        <div className="absolute left-[-15%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#D9A83E]/[0.055] blur-[130px]" />

        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#D9A83E]/[0.06] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217,168,62,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,168,62,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        <div className={`absolute inset-x-0 top-0 h-[600px] ${isDark ? 'bg-gradient-to-b from-[#070909]/20 via-transparent to-[#070909]' : 'bg-gradient-to-b from-[#F7F5F0]/10 via-transparent to-[#F7F5F0]'}`} />
      </div>

      {/* Global network animation */}

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="w-[1300px] max-w-none">
          <svg viewBox="0 0 1200 600" className="h-auto w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="voipRouteGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A87918" stopOpacity="0.05" />
                <stop offset="45%" stopColor="#D9A83E" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FFF0B5" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D9A83E" stopOpacity="0.05" />
              </linearGradient>

              <radialGradient id="voipNodeGradient">
                <stop offset="0%" stopColor="#FFF0B5" />
                <stop offset="40%" stopColor="#D9A83E" />
                <stop offset="100%" stopColor="#D9A83E" stopOpacity="0" />
              </radialGradient>

              <filter id="voipGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="voipSoftGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="14" />
              </filter>

              <radialGradient id="voipMapFade">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="65%" stopColor="white" stopOpacity="0.8" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              <mask id="voipMapMask">
                <rect width="1200" height="600" fill="url(#voipMapFade)" />
              </mask>
            </defs>

            <g mask="url(#voipMapMask)">
              {/* Decorative globe */}

              <g stroke="#D9A83E" strokeWidth="0.8" strokeOpacity={isDark ? '0.16' : '0.19'}>
                <ellipse cx="600" cy="290" rx="510" ry="225" strokeDasharray="3 10" />

                <ellipse cx="600" cy="290" rx="390" ry="170" strokeDasharray="3 12" />

                <ellipse cx="600" cy="290" rx="260" ry="115" strokeDasharray="3 14" />

                <ellipse cx="600" cy="290" rx="160" ry="225" />

                <ellipse cx="600" cy="290" rx="320" ry="225" />
              </g>

              {/* Continent silhouettes */}

              <g fill={isDark ? '#D9A83E' : '#9A772B'} fillOpacity={isDark ? '0.10' : '0.09'} stroke="#D9A83E" strokeOpacity="0.22" strokeWidth="0.8">
                <path d="M100 175 L140 125 L195 105 L250 120 L290 145 L320 180 L295 210 L255 215 L230 255 L195 275 L170 250 L155 220 L120 215 Z" />

                <path d="M245 300 L285 285 L325 310 L345 350 L330 395 L310 445 L285 495 L270 465 L275 415 L250 380 L240 340 Z" />

                <path d="M490 155 L520 125 L565 120 L600 140 L630 130 L665 155 L650 180 L615 190 L580 180 L550 200 L510 185 Z" />

                <path d="M520 210 L560 195 L600 210 L630 245 L645 290 L625 345 L600 390 L570 430 L545 405 L530 365 L510 325 L500 275 L485 245 Z" />

                <path d="M650 165 L700 140 L765 145 L820 165 L880 185 L930 220 L970 245 L950 275 L910 285 L870 270 L835 290 L790 270 L755 285 L710 255 L670 225 L635 200 Z" />

                <path d="M700 270 L740 280 L770 315 L750 350 L725 325 L695 295 Z" />

                <path d="M875 390 L920 375 L960 390 L995 425 L985 455 L950 475 L910 465 L880 440 L860 415 Z" />
              </g>

              {/* Glowing route lines */}

              {routes.map((route) => (
                <g key={route.id}>
                  <path d={route.d} stroke="#D9A83E" strokeWidth="10" opacity="0.10" filter="url(#voipSoftGlow)" />

                  <path id={route.id} d={route.d} stroke="url(#voipRouteGradient)" strokeWidth="1.5" strokeLinecap="round" />

                  <path d={route.d} stroke="#D9A83E" strokeWidth="0.6" strokeDasharray="3 13" strokeOpacity="0.6" />

                  <circle r="4" fill="#FFF0B5" filter="url(#voipGlow)">
                    <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite">
                      <mpath href={`#${route.id}`} />
                    </animateMotion>
                  </circle>

                  <circle r="8" fill="#D9A83E" opacity="0.45" filter="url(#voipGlow)">
                    <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite">
                      <mpath href={`#${route.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}

              {/* Pulsating connection nodes */}

              {nodes.map((node, index) => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r="16" fill="url(#voipNodeGradient)" opacity="0.35" filter="url(#voipGlow)" />

                  <circle cx={node.x} cy={node.y} r="6" fill="none" stroke="#D9A83E" strokeWidth="1">
                    <animate attributeName="r" values="6;19;6" dur="3.5s" begin={`${index * 0.4}s`} repeatCount="indefinite" />

                    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="3.5s" begin={`${index * 0.4}s`} repeatCount="indefinite" />
                  </circle>

                  <circle cx={node.x} cy={node.y} r="3.5" fill="#FFF0B5" filter="url(#voipGlow)" />

                  <circle cx={node.x} cy={node.y} r="1.5" fill="#FFFFFF" />
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Hero content */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-[180px] text-center sm:px-6 sm:pt-[220px] lg:pt-[245px]">
        {/* Eyebrow */}

        <div className={`mx-auto mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-xl ${styles.eyebrow}`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#D9A83E] opacity-70" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#F0C867]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">Global Voice Infrastructure</span>
        </div>

        {/* Heading */}

        <h1 className={`font-display text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[94px] ${styles.heading}`}>
          Voice Without
          <br />
          <span className="bg-gradient-to-r from-[#A87918] via-[#E4B94F] to-[#FFF0B5] bg-clip-text text-transparent">Boundaries.</span>
        </h1>

        {/* Description */}

        <p className={`mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-lg sm:leading-8 ${styles.paragraph}`}>Build flexible voice infrastructure with seamless SIP connectivity and business-ready communication services designed to connect teams, scale conversations, and power your business worldwide.</p>

        {/* CTAs */}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => scrollTo('contact')} className={`group inline-flex h-[54px] min-w-[175px] items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(217,168,62,0.25)] ${styles.primaryButton}`}>
            Get Started
            <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
              <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button type="button" onClick={() => scrollTo('voice-solutions')} className={`inline-flex h-[54px] min-w-[175px] items-center justify-center gap-3 rounded-full border px-7 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${styles.secondaryButton}`}>
            Explore Solutions
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M10 3V17M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Service cards */}

        <div id="voice-solutions" className="mx-auto mt-16 max-w-5xl scroll-mt-24 sm:mt-20">
          <div className={`overflow-hidden rounded-3xl border text-left shadow-2xl shadow-black/[0.08] backdrop-blur-2xl ${styles.card}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.number} className={`group relative p-6 transition-colors duration-300 hover:bg-[#D9A83E]/[0.06] sm:p-7 ${index !== 2 ? `border-b sm:border-b-0 sm:border-r ${styles.divider}` : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-sm font-semibold ${styles.gold}`}>{service.number}</span>

                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9A83E]/35 bg-[#D9A83E]/[0.10] transition-all duration-300 group-hover:border-[#D9A83E]/60 group-hover:bg-[#D9A83E]/[0.18] group-hover:shadow-[0_0_25px_rgba(217,168,62,0.12)] ${styles.gold}`}>
                      <div className="h-5 w-5">{service.icon}</div>
                    </div>
                  </div>

                  <h2 className={`mt-6 font-display text-xl font-semibold tracking-tight sm:text-2xl ${styles.cardTitle}`}>{service.title}</h2>

                  <p className={`mt-3 text-sm leading-6 ${styles.cardMuted}`}>{service.description}</p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#D9A83E]/45 via-[#D9A83E]/15 to-transparent" />

                  <div className={`mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${styles.gold}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9A83E]" />
                    Built for your business
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* High-contrast feature highlights */}

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#D9A83E]/20 bg-[#D9A83E]/[0.055] px-5 py-5 shadow-lg backdrop-blur-xl sm:px-7">
          <p className={`mb-4 text-[10px] font-bold uppercase tracking-[0.2em] ${styles.gold}`}>Communication, built around you</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
            {['Flexible SIP Connectivity', 'Seamless Voice Integration', 'Scalable Call Capacity'].map((feature) => (
              <div key={feature} className={`flex items-center justify-center gap-2 text-xs font-semibold sm:text-sm ${styles.cardTitle}`}>
                <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 ${styles.gold}`} fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
                  <path d="m6.5 10 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom trust strip with stronger contrast */}

      <div className={`relative z-20 border-t backdrop-blur-2xl ${isDark ? 'border-white/15 bg-[#090C0B]' : 'border-[#151716]/15 bg-[#FFFFFF]'}`}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            ['SIP', 'Trunking Solutions'],
            ['API', 'Voice Integration'],
            ['Scale', 'Flexible Capacity'],
            ['24 / 7', 'Voice Support'],
          ].map(([value, label], index) => (
            <div key={label} className={`flex min-h-[76px] items-center justify-center gap-3 px-2 py-4 sm:min-h-[88px] sm:px-4 ${index % 2 === 1 ? 'border-l' : ''} ${index >= 2 ? 'border-t sm:border-t-0' : ''} sm:border-l ${index === 0 ? 'sm:border-l-0' : ''} ${styles.divider}`}>
              <span className={`font-display text-base font-bold tracking-tight sm:text-xl ${styles.gold}`}>{value}</span>

              <span className={`max-w-[110px] text-[10px] font-semibold leading-4 sm:text-xs ${styles.cardMuted}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoipHero;
