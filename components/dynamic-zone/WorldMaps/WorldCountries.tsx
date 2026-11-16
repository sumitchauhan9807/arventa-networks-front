import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const WORLD_MAP = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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
   COUNTRY STATS
========================================================= */

const countryStats = {
  'United States of America': {
    region: 'North America',
    carriers: 42,
    routes: 128,
    traffic: '2.84 TB',
    latency: '38 ms',
    uptime: '99.99%',
  },

  Canada: {
    region: 'North America',
    carriers: 26,
    routes: 74,
    traffic: '1.24 TB',
    latency: '42 ms',
    uptime: '99.98%',
  },

  Brazil: {
    region: 'South America',
    carriers: 31,
    routes: 83,
    traffic: '1.48 TB',
    latency: '61 ms',
    uptime: '99.97%',
  },

  'United Kingdom': {
    region: 'Europe',
    carriers: 48,
    routes: 146,
    traffic: '3.12 TB',
    latency: '29 ms',
    uptime: '99.99%',
  },

  Germany: {
    region: 'Europe',
    carriers: 51,
    routes: 162,
    traffic: '3.46 TB',
    latency: '27 ms',
    uptime: '99.99%',
  },

  France: {
    region: 'Europe',
    carriers: 38,
    routes: 111,
    traffic: '2.01 TB',
    latency: '31 ms',
    uptime: '99.98%',
  },

  India: {
    region: 'South Asia',
    carriers: 45,
    routes: 137,
    traffic: '2.76 TB',
    latency: '46 ms',
    uptime: '99.98%',
  },

  'United Arab Emirates': {
    region: 'Middle East',
    carriers: 29,
    routes: 91,
    traffic: '1.87 TB',
    latency: '35 ms',
    uptime: '99.99%',
  },

  Singapore: {
    region: 'Southeast Asia',
    carriers: 44,
    routes: 152,
    traffic: '3.28 TB',
    latency: '24 ms',
    uptime: '99.99%',
  },

  Japan: {
    region: 'East Asia',
    carriers: 47,
    routes: 139,
    traffic: '2.94 TB',
    latency: '32 ms',
    uptime: '99.99%',
  },

  Australia: {
    region: 'Oceania',
    carriers: 32,
    routes: 86,
    traffic: '1.72 TB',
    latency: '54 ms',
    uptime: '99.97%',
  },
};

/* =========================================================
   DEFAULT STATS
========================================================= */

const createDefaultStats = (countryName) => {
  let hash = 0;

  for (let i = 0; i < countryName.length; i += 1) {
    hash = (hash * 31 + countryName.charCodeAt(i)) >>> 0;
  }

  return {
    region: 'Global Network',
    carriers: 18 + ((hash + 7) % 35),
    routes: 40 + ((hash + 19) % 90),
    traffic: `${(0.8 + ((hash + 23) % 200) / 100).toFixed(2)} TB`,
    latency: `${25 + ((hash + 31) % 45)} ms`,
    uptime: '99.97%',
    name: countryName,
  };
};

/* =========================================================
   COMPONENT
========================================================= */

const WorldCountries = () => {
  const mode = useSelector((state) => state.theme.theme);

  const isLight = mode === 'light';

  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Zoom controls only
  const [zoom, setZoom] = useState(145);

  const colors = useMemo(
    () => ({
      background: isLight ? '#FFFFFF' : '#030505',

      map: isLight ? '#F6F6F1' : '#111716',

      mapStroke: isLight ? '#C9C9C0' : '#3E4642',

      mapHover: isLight ? '#EDE8D9' : '#202823',

      grid: isLight ? '#DADAD2' : '#222A27',

      gold: '#D39A24',

      goldLight: '#E9B949',

      goldBright: '#FFD978',

      goldDark: '#9B6D14',

      text: isLight ? '#1F211D' : '#F8F6EF',

      muted: isLight ? '#66685F' : '#969E99',

      panel: isLight ? 'rgba(255,255,255,0.94)' : 'rgba(10,14,13,0.94)',

      panelBorder: isLight ? 'rgba(30,32,27,0.12)' : 'rgba(255,255,255,0.12)',
    }),
    [isLight]
  );

  const activeStats = hoveredCountry ? countryStats[hoveredCountry] || createDefaultStats(hoveredCountry) : null;

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: colors.background,
        color: colors.text,
      }}
    >
      {/* GLOBAL AMBIENT GLOW */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: isLight
            ? `
              radial-gradient(
                ellipse,
                rgba(211,154,36,0.13) 0%,
                rgba(233,185,73,0.08) 28%,
                rgba(255,217,120,0.04) 48%,
                transparent 72%
              )
            `
            : `
              radial-gradient(
                ellipse,
                rgba(211,154,36,0.16) 0%,
                rgba(211,154,36,0.07) 32%,
                rgba(255,217,120,0.025) 50%,
                transparent 72%
              )
            `,
        }}
      />

      {/* BACKGROUND GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: isLight ? 0.4 : 0.25,
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
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
        {/* HEADER */}

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div
            className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]"
            style={{
              color: colors.goldLight,
            }}
          >
            <span
              className="h-px w-8"
              style={{
                background: colors.gold,
              }}
            />
            Carrier Network
            <span
              className="h-px w-8"
              style={{
                background: colors.gold,
              }}
            />
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{
              color: colors.text,
            }}
          >
            One Network.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg,#F6D27A,#D9A83E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Global Reach.
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base"
            style={{
              color: colors.muted,
            }}
          >
            Connect your business to a global carrier ecosystem with intelligent routing, reliable voice infrastructure and scalable connectivity.
          </p>
        </div>

        {/* MAP AREA */}

        <div className="relative h-[500px] sm:h-[600px] lg:h-[680px]">
          {/* ORBIT 1 */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border sm:h-[430px] sm:w-[900px] lg:h-[500px] lg:w-[1120px]"
            style={{
              borderColor: isLight ? 'rgba(211,154,36,0.15)' : 'rgba(217,168,62,0.12)',

              transform: 'translate(-50%, -50%) rotate(-8deg)',
            }}
          />

          {/* ORBIT 2 */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border sm:h-[330px] sm:w-[760px]"
            style={{
              borderColor: isLight ? 'rgba(211,154,36,0.09)' : 'rgba(217,168,62,0.08)',

              transform: 'translate(-50%, -50%) rotate(9deg)',
            }}
          />

          {/* WORLD MAP */}

          <div className="absolute inset-0 flex items-center justify-center">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: zoom,
                center: [19.3, 42.7],
              }}
              width={900}
              height={500}
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              {/* COUNTRIES */}

              <Geographies geography={WORLD_MAP}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.name;

                    const isHovered = hoveredCountry === countryName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHovered ? colors.mapHover : colors.map}
                        stroke={isHovered ? colors.gold : colors.mapStroke}
                        strokeWidth={isHovered ? 1.2 : 0.7}
                        onMouseEnter={() => {
                          setHoveredCountry(countryName);
                        }}
                        onMouseLeave={() => {
                          setHoveredCountry(null);
                        }}
                        style={{
                          default: {
                            outline: 'none',
                            cursor: 'crosshair',
                            transition: 'fill 200ms ease, stroke 200ms ease',
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
                    );
                  })
                }
              </Geographies>

              {/* CITY NODES */}

              {locations.map((location, index) => (
                <Marker key={location.name} coordinates={location.coordinates}>
                  {/* Expanding ring */}

                  <circle
                    r="8"
                    fill="none"
                    stroke={colors.gold}
                    strokeWidth="0.8"
                    style={{
                      animation: 'nodePulse 2.5s ease-out infinite',
                      animationDelay: `${index * 0.18}s`,
                    }}
                  />

                  {/* Glow */}

                  <circle
                    r="5"
                    fill={colors.gold}
                    opacity="0.22"
                    style={{
                      animation: 'nodeGlow 2.2s ease-in-out infinite',
                      animationDelay: `${index * 0.18}s`,
                    }}
                  />

                  {/* Core */}

                  <circle
                    r="2.8"
                    fill={colors.goldBright}
                    stroke={colors.gold}
                    strokeWidth="0.8"
                    style={{
                      filter: `
                        drop-shadow(
                          0 0 4px rgba(255,217,120,0.9)
                        )
                      `,
                    }}
                  />

                  {/* Label */}

                  <g className="hidden sm:block">
                    <text
                      x={location.side === 'left' ? -10 : 10}
                      y="3"
                      textAnchor={location.side === 'left' ? 'end' : 'start'}
                      style={{
                        fill: colors.muted,
                        fontSize: '7px',
                        fontWeight: 700,
                        letterSpacing: '0.13em',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                    >
                      {location.name}
                    </text>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* CENTER HUB */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: isLight ? 'rgba(211,154,36,0.4)' : 'rgba(217,168,62,0.45)',

                  boxShadow: `
                    0 0 30px rgba(211,154,36,0.12)
                  `,
                  animation: 'hubPulse 3s ease-in-out infinite',
                }}
              />

              <div
                className="absolute inset-[8px] rounded-full border"
                style={{
                  borderColor: isLight ? 'rgba(211,154,36,0.22)' : 'rgba(217,168,62,0.22)',
                }}
              />

              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background: colors.goldBright,

                  boxShadow: `
                    0 0 8px ${colors.gold},
                    0 0 20px ${colors.gold},
                    0 0 40px rgba(211,154,36,0.45)
                  `,
                  animation: 'hubCore 2s ease-in-out infinite',
                }}
              />

              <span
                className="absolute top-[82px] whitespace-nowrap text-[8px] font-bold tracking-[0.3em]"
                style={{
                  color: colors.goldBright,
                }}
              >
                ARVENTA NETWORK
              </span>
            </div>
          </div>

          {/* TOP LEFT INFO */}

          <div className="absolute left-2 top-2 sm:left-5 sm:top-5">
            <div
              className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em]"
              style={{
                color: colors.goldBright,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: colors.goldBright,
                  boxShadow: `0 0 10px ${colors.gold}`,
                }}
              />
              Global Network
            </div>

            <div
              className="mt-2 text-[9px] tracking-[0.18em]"
              style={{
                color: colors.muted,
              }}
            >
              CONNECTING THE WORLD
            </div>
          </div>

          {/* STATUS CARD */}

          <div
            className="absolute right-2 top-2 rounded-xl border px-3 py-2.5 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-3"
            style={{
              background: colors.panel,
              borderColor: colors.panelBorder,
              boxShadow: '0 15px 50px rgba(0,0,0,0.18)',
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: '#8FBE67',
                  boxShadow: '0 0 8px rgba(143,190,103,0.9)',
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
              className="mt-1 text-[8px] tracking-wider"
              style={{
                color: colors.muted,
              }}
            >
              99.99% UPTIME
            </div>
          </div>

          {/* ZOOM CONTROLS — ONLY ADDITION */}

          <div
            className="absolute bottom-20 right-2 z-40 flex flex-col overflow-hidden rounded-lg border sm:right-5"
            style={{
              background: colors.panel,
              borderColor: colors.panelBorder,
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <button
              type="button"
              aria-label="Zoom in"
              title="Zoom in"
              disabled={zoom >= 300}
              onClick={() => setZoom((current) => Math.min(current + 20, 300))}
              className="flex h-9 w-9 items-center justify-center text-xl hover:bg-amber-500/10 disabled:opacity-40"
              style={{
                color: colors.goldBright,
              }}
            >
              +
            </button>

            <div
              className="mx-2 border-t"
              style={{
                borderColor: colors.panelBorder,
              }}
            />

            <button
              type="button"
              aria-label="Zoom out"
              title="Zoom out"
              disabled={zoom <= 80}
              onClick={() => setZoom((current) => Math.max(current - 20, 80))}
              className="flex h-9 w-9 items-center justify-center text-xl hover:bg-amber-500/10 disabled:opacity-40"
              style={{
                color: colors.goldBright,
              }}
            >
              −
            </button>
          </div>

          {/* HOVER STATS CARD */}

          {activeStats && (
            <div
              className="absolute left-1/2 top-4 z-30 w-[290px] -translate-x-1/2 sm:left-auto sm:right-5 sm:top-24 sm:translate-x-0"
              style={{
                animation: 'statsEnter 180ms ease-out',
              }}
            >
              <div
                className="overflow-hidden rounded-2xl border backdrop-blur-2xl"
                style={{
                  background: isLight ? 'rgba(255,255,255,0.96)' : 'rgba(7,10,9,0.96)',

                  borderColor: isLight ? 'rgba(211,154,36,0.25)' : 'rgba(217,168,62,0.22)',

                  boxShadow: `
                    0 20px 60px rgba(0,0,0,0.25),
                    0 0 35px rgba(211,154,36,0.08)
                  `,
                }}
              >
                {/* Card header */}

                <div
                  className="border-b px-4 py-3"
                  style={{
                    borderColor: colors.panelBorder,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{
                          color: colors.muted,
                        }}
                      >
                        Network Region
                      </div>

                      <div
                        className="mt-1 text-base font-semibold"
                        style={{
                          color: colors.text,
                        }}
                      >
                        {activeStats.name || hoveredCountry}
                      </div>
                    </div>

                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                      style={{
                        borderColor: 'rgba(211,154,36,0.25)',
                        color: colors.goldBright,
                      }}
                    >
                      <span className="text-xs">◎</span>
                    </div>
                  </div>

                  <div
                    className="mt-1 text-[9px] uppercase tracking-[0.14em]"
                    style={{
                      color: colors.gold,
                    }}
                  >
                    {activeStats.region}
                  </div>
                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-px">
                  <Stat label="Carriers" value={activeStats.carriers} colors={colors} />

                  <Stat label="Routes" value={activeStats.routes} colors={colors} />

                  <Stat label="Traffic" value={activeStats.traffic} colors={colors} />

                  <Stat label="Latency" value={activeStats.latency} colors={colors} />
                </div>

                {/* Footer */}

                <div
                  className="flex items-center justify-between border-t px-4 py-2.5"
                  style={{
                    borderColor: colors.panelBorder,
                  }}
                >
                  <span
                    className="text-[8px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: colors.muted,
                    }}
                  >
                    Network health
                  </span>

                  <span
                    className="flex items-center gap-1.5 text-[9px] font-bold"
                    style={{
                      color: '#8FBE67',
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: '#8FBE67',
                        boxShadow: '0 0 7px #8FBE67',
                      }}
                    />

                    {activeStats.uptime}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* BOTTOM LEFT */}

          <div className="absolute bottom-3 left-2 sm:bottom-6 sm:left-5">
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
                  color: colors.goldBright,
                }}
              >
                Global Links
              </span>
            </div>
          </div>

          {/* BOTTOM RIGHT */}

          <div className="absolute bottom-3 right-2 text-right sm:bottom-6 sm:right-5">
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

      {/* BOTTOM FADE */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(
            to top,
            ${colors.background},
            transparent
          )`,
        }}
      />

      {/* ANIMATIONS */}

      <style>{`
        @keyframes networkFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes nodePulse {
          0% {
            transform: scale(0.7);
            opacity: 0.65;
          }

          70% {
            transform: scale(2);
            opacity: 0;
          }

          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes nodeGlow {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.15;
          }

          50% {
            transform: scale(1.5);
            opacity: 0.35;
          }
        }

        @keyframes hubPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes hubCore {
          0%,
          100% {
            transform: scale(0.8);
          }

          50% {
            transform: scale(1.35);
          }
        }

        @keyframes statsEnter {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .network-route,
          .node-ring,
          .node-glow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   STAT ITEM
========================================================= */

const Stat = ({ label, value, colors }) => {
  return (
    <div
      className="px-4 py-3"
      style={{
        background: 'rgba(128,128,128,0.025)',
      }}
    >
      <div
        className="text-[8px] font-semibold uppercase tracking-[0.16em]"
        style={{
          color: colors.muted,
        }}
      >
        {label}
      </div>

      <div
        className="mt-1 text-sm font-semibold"
        style={{
          color: colors.text,
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default WorldCountries;
