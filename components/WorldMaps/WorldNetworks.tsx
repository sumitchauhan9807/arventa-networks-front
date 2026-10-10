import React from 'react';
import { useSelector } from 'react-redux';
import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps';

import '@/app/styles/animations.css';

const WORLD_MAP = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* =========================================================
   GLOBAL ROUTES
========================================================= */

const routes = [
  {
    from: [-74.006, 40.7128],
    to: [-0.1276, 51.5072],
  },
  {
    from: [-0.1276, 51.5072],
    to: [8.6821, 50.1109],
  },
  {
    from: [8.6821, 50.1109],
    to: [55.2708, 25.2048],
  },
  {
    from: [55.2708, 25.2048],
    to: [103.8198, 1.3521],
  },
  {
    from: [103.8198, 1.3521],
    to: [139.6917, 35.6895],
  },
  {
    from: [103.8198, 1.3521],
    to: [151.2093, -33.8688],
  },
  {
    from: [-74.006, 40.7128],
    to: [-46.6333, -23.5505],
  },
  {
    from: [-0.1276, 51.5072],
    to: [72.8777, 19.076],
  },
  {
    from: [72.8777, 19.076],
    to: [103.8198, 1.3521],
  },
  {
    from: [8.6821, 50.1109],
    to: [-74.006, 40.7128],
  },
  {
    from: [-74.006, 40.7128],
    to: [139.6917, 35.6895],
  },
  {
    from: [-46.6333, -23.5505],
    to: [151.2093, -33.8688],
  },
];

/* =========================================================
   NETWORK LOCATIONS
========================================================= */

const locations = [
  {
    name: 'NEW YORK',
    coordinates: [-74.006, 40.7128],
    side: 'right',
  },
  {
    name: 'LONDON',
    coordinates: [-0.1276, 51.5072],
    side: 'left',
  },
  {
    name: 'FRANKFURT',
    coordinates: [8.6821, 50.1109],
    side: 'right',
  },
  {
    name: 'DUBAI',
    coordinates: [55.2708, 25.2048],
    side: 'right',
  },
  {
    name: 'MUMBAI',
    coordinates: [72.8777, 19.076],
    side: 'right',
  },
  {
    name: 'SINGAPORE',
    coordinates: [103.8198, 1.3521],
    side: 'right',
  },
  {
    name: 'TOKYO',
    coordinates: [139.6917, 35.6895],
    side: 'left',
  },
  {
    name: 'SYDNEY',
    coordinates: [151.2093, -33.8688],
    side: 'left',
  },
  {
    name: 'SÃO PAULO',
    coordinates: [-46.6333, -23.5505],
    side: 'left',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const WorldNetworkAnimation = () => {
  const mode = useSelector((state) => state.theme.theme);
  const isLight = mode === 'light';

  /* =======================================================
     THEME
  ======================================================= */

  const colors = {
    /* ---------------------------------------------
       BACKGROUND
    --------------------------------------------- */

    background: isLight ? '#FFFFFF' : '#030505',

    /* ---------------------------------------------
       WORLD MAP
    --------------------------------------------- */

    map: isLight ? '#F7F7F3' : '#111716',

    mapStroke: isLight ? '#C9C9C1' : '#4A514C',

    mapHover: isLight ? '#EEEBDD' : '#1C2421',

    /* ---------------------------------------------
       GRID
    --------------------------------------------- */

    grid: isLight ? '#D8D8D0' : '#252C29',

    /* ---------------------------------------------
       GOLD
    --------------------------------------------- */

    gold: '#D39A24',

    goldLight: '#E9B949',

    goldBright: '#FFD978',

    goldDark: '#9B6D14',

    /* ---------------------------------------------
       TEXT
    --------------------------------------------- */

    text: isLight ? '#1F211D' : '#F8F6EF',

    muted: isLight ? '#64665E' : '#A4AAA5',

    /* ---------------------------------------------
       PANELS
    --------------------------------------------- */

    panel: isLight ? 'rgba(255,255,255,0.94)' : 'rgba(13,17,16,0.92)',

    panelBorder: isLight ? 'rgba(30,32,27,0.12)' : 'rgba(255,255,255,0.14)',
  };
  const styles = {
    primaryText: !isLight ? 'text-white' : 'text-slate-900',

    secondaryText: !isLight ? 'text-white/70' : 'text-slate-600',
  };

  return (
    <>
      <div className="mx-auto max-w-3xl text-center mt-12 mb-12 pt-12 pb-12">
        <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#D9A83E]">
          <span className="h-px w-8 bg-[#D9A83E]" />
          Carrier Network
          <span className="h-px w-8 bg-[#D9A83E]" />
        </div>

        <h2
          className={`
              text-4xl font-semibold tracking-tight
              sm:text-5xl lg:text-6xl
              ${styles.primaryText}
            `}
        >
          One Network. <span className="bg-gradient-to-r from-[#F6D27A] to-[#D9A83E] bg-clip-text text-transparent">Global Reach.</span>
        </h2>

        <p
          className={`
              mx-auto mt-6 max-w-2xl
              text-sm leading-7
              sm:text-base
              ${styles.secondaryText}
            `}
        >
          Connect your business to a global carrier ecosystem with intelligent routing, reliable voice infrastructure and scalable connectivity.
        </p>
      </div>
      <section
        className="relative w-full overflow-hidden mt-12 mb-12 pb-12"
        style={{
          background: colors.background,
          color: colors.text,
        }}
      >
        {/* ===================================================
          AMBIENT GLOW
      =================================================== */}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
          style={{
            background: isLight
              ? `
              radial-gradient(
                ellipse,
                rgba(211,154,36,0.15) 0%,
                rgba(233,185,73,0.10) 25%,
                rgba(255,217,120,0.06) 45%,
                transparent 72%
              )
            `
              : `
              radial-gradient(
                ellipse,
                rgba(217,168,62,0.16) 0%,
                rgba(217,168,62,0.07) 30%,
                rgba(255,224,154,0.035) 50%,
                transparent 72%
              )
            `,
          }}
        />

        {/* ===================================================
          BACKGROUND GRID
      =================================================== */}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: isLight ? 0.38 : 0.28,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(${colors.grid} 1px, transparent 1px),
              linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
            `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
            }}
          />
        </div>

        {/* ===================================================
          MAIN
      =================================================== */}

        <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <div className="relative h-[430px] sm:h-[520px] lg:h-[610px]">
            {/* =================================================
              OUTER ORBITS
          ================================================= */}

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border sm:h-[410px] sm:w-[850px] lg:h-[480px] lg:w-[1050px]"
              style={{
                borderColor: isLight ? 'rgba(211,154,36,0.16)' : 'rgba(217,168,62,0.14)',

                transform: 'translate(-50%, -50%) rotate(-8deg)',

                boxShadow: isLight ? '0 0 50px rgba(211,154,36,0.04)' : 'none',
              }}
            />

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border sm:h-[320px] sm:w-[760px]"
              style={{
                borderColor: isLight ? 'rgba(211,154,36,0.10)' : 'rgba(217,168,62,0.08)',

                transform: 'translate(-50%, -50%) rotate(8deg)',
              }}
            />

            {/* =================================================
              WORLD MAP
          ================================================= */}

            <div className="absolute inset-0 flex items-center justify-center">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 135,
                  center: [0, 8],
                }}
                width={900}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* =============================================
                  COUNTRIES
              ============================================= */}

                <Geographies geography={WORLD_MAP}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={colors.map}
                        stroke={colors.mapStroke}
                        strokeWidth={isLight ? 0.85 : 0.8}
                        style={{
                          default: {
                            outline: 'none',
                            transition: 'all 300ms ease',
                          },

                          hover: {
                            fill: colors.mapHover,
                            stroke: colors.gold,
                            strokeWidth: 1.2,
                            outline: 'none',
                          },

                          pressed: {
                            outline: 'none',
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* =============================================
                  NETWORK ROUTES
              ============================================= */}

                {routes.map((route, index) => (
                  <React.Fragment key={index}>
                    {/* Main route */}
                    <Line
                      from={route.from}
                      to={route.to}
                      stroke={colors.gold}
                      strokeWidth={isLight ? 1.35 : 1.4}
                      strokeLinecap="round"
                      className={`world-route world-route-${index}`}
                      style={{
                        opacity: isLight ? 0.9 : 0.95,

                        filter: isLight
                          ? `
                          drop-shadow(
                            0 0 2px rgba(211,154,36,0.45)
                          )
                        `
                          : `
                          drop-shadow(
                            0 0 3px rgba(217,168,62,0.55)
                          )
                        `,
                      }}
                    />

                    {/* Animated pulse */}
                    <Line
                      from={route.from}
                      to={route.to}
                      stroke={colors.goldBright}
                      strokeWidth={isLight ? 2.3 : 2.4}
                      strokeLinecap="round"
                      strokeDasharray="2 18"
                      className={`world-route-pulse world-route-pulse-${index}`}
                      style={{
                        opacity: 1,

                        filter: isLight
                          ? `
                          drop-shadow(
                            0 0 4px rgba(211,154,36,0.8)
                          )
                          drop-shadow(
                            0 0 9px rgba(233,185,73,0.35)
                          )
                        `
                          : `
                          drop-shadow(
                            0 0 5px rgba(255,224,154,0.85)
                          )
                          drop-shadow(
                            0 0 10px rgba(217,168,62,0.35)
                          )
                        `,
                      }}
                    />
                  </React.Fragment>
                ))}

                {/* =============================================
                  CITY NODES
              ============================================= */}

                {locations.map((location, index) => (
                  <Marker key={location.name} coordinates={location.coordinates}>
                    {/* Expanding ring */}
                    <circle r="8" fill="none" stroke={colors.gold} strokeWidth="0.9" opacity="0.55" className={`map-node-ring map-node-ring-${index}`} />

                    {/* Glow */}
                    <circle r="6" fill={colors.gold} opacity="0.2" className={`map-node-glow map-node-glow-${index}`} />

                    {/* Core */}
                    <circle
                      r="3"
                      fill={colors.goldBright}
                      stroke={colors.gold}
                      strokeWidth="1"
                      className={`map-node map-node-${index}`}
                      style={{
                        filter: `
                        drop-shadow(
                          0 0 4px rgba(211,154,36,0.8)
                        )
                        drop-shadow(
                          0 0 9px rgba(233,185,73,0.35)
                        )
                      `,
                      }}
                    />

                    {/* City label */}
                    <g className="hidden sm:block">
                      <text
                        x={location.side === 'left' ? -10 : 10}
                        y="3"
                        textAnchor={location.side === 'left' ? 'end' : 'start'}
                        style={{
                          fill: colors.muted,
                          fontSize: '7px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {location.name}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            {/* =================================================
              CENTER ARVENTA HUB
          ================================================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: isLight ? 'rgba(211,154,36,0.4)' : 'rgba(217,168,62,0.45)',

                    boxShadow: isLight
                      ? `
                      0 0 20px rgba(211,154,36,0.08)
                    `
                      : `
                      0 0 25px rgba(217,168,62,0.12)
                    `,
                  }}
                />

                {/* Inner ring */}
                <div
                  className="absolute inset-[7px] rounded-full border"
                  style={{
                    borderColor: isLight ? 'rgba(211,154,36,0.25)' : 'rgba(217,168,62,0.25)',
                  }}
                />

                {/* Core */}
                <div
                  className="absolute h-2.5 w-2.5 rounded-full"
                  style={{
                    background: colors.goldBright,

                    boxShadow: `
                    0 0 8px ${colors.gold},
                    0 0 20px ${colors.gold}90,
                    0 0 40px ${colors.gold}45
                  `,
                  }}
                />

                <span
                  className="absolute mt-24 whitespace-nowrap text-[8px] font-bold tracking-[0.3em]"
                  style={{
                    color: isLight ? colors.goldDark : colors.goldBright,

                    textShadow: isLight ? 'none' : `0 0 10px ${colors.gold}60`,
                  }}
                >
                  ARVENTA NETWORK
                </span>
              </div>
            </div>

            {/* =================================================
              TOP LEFT
          ================================================= */}

            <div className="absolute left-2 top-5 sm:left-5 sm:top-8">
              <div
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em]"
                style={{
                  color: isLight ? colors.goldDark : colors.goldBright,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: colors.goldBright,

                    boxShadow: `
                    0 0 7px ${colors.gold},
                    0 0 14px ${colors.gold}60
                  `,
                  }}
                />
                Global Network
              </div>

              <div
                className="mt-2 text-[10px] font-medium tracking-[0.16em]"
                style={{
                  color: colors.muted,
                }}
              >
                CONNECTING THE WORLD
              </div>
            </div>

            {/* =================================================
              TOP RIGHT STATUS
          ================================================= */}

            <div
              className="absolute right-2 top-5 rounded-xl border px-3 py-2 backdrop-blur-md sm:right-5 sm:top-8 sm:px-4 sm:py-3"
              style={{
                background: colors.panel,
                borderColor: colors.panelBorder,

                boxShadow: isLight
                  ? `
                  0 10px 30px rgba(30,32,27,0.06),
                  0 0 25px rgba(211,154,36,0.04)
                `
                  : `
                  0 10px 40px rgba(0,0,0,0.25)
                `,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: '#8FBE67',
                    boxShadow: '0 0 8px #8FBE67',
                  }}
                />

                <span
                  className="text-[8px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: colors.text,
                  }}
                >
                  Network Operational
                </span>
              </div>

              <div
                className="mt-1 text-[8px] font-medium tracking-wider"
                style={{
                  color: colors.muted,
                }}
              >
                99.99% UPTIME
              </div>
            </div>

            {/* =================================================
              BOTTOM LEFT
          ================================================= */}

            <div className="absolute bottom-5 left-2 sm:bottom-8 sm:left-5">
              <div
                className="text-[8px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  color: colors.muted,
                }}
              >
                Active Routes
              </div>

              <div className="mt-1 flex items-baseline gap-2">
                <span
                  className="text-2xl font-light tracking-tight sm:text-3xl"
                  style={{
                    color: colors.text,
                  }}
                >
                  24
                </span>

                <span
                  className="text-[8px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    color: isLight ? colors.goldDark : colors.goldBright,
                  }}
                >
                  Global Links
                </span>
              </div>
            </div>

            {/* =================================================
              BOTTOM RIGHT
          ================================================= */}

            <div className="absolute bottom-5 right-2 text-right sm:bottom-8 sm:right-5">
              <div
                className="text-[8px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  color: colors.muted,
                }}
              >
                Infrastructure
              </div>

              <div
                className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: colors.text,
                }}
              >
                Built to connect.
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
          BOTTOM FADE
      =================================================== */}

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: `
            linear-gradient(
              to top,
              ${colors.background},
              transparent
            )
          `,
          }}
        />
      </section>
    </>
  );
};

export default WorldNetworkAnimation;
