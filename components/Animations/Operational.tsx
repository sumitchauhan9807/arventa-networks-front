import React from 'react';
import { useSelector } from 'react-redux';
import '@/app/styles/operations.css';

const modules = [
  {
    label: 'MONITOR',
    description: '24/7 Visibility',
    className: 'ops-monitor',
    icon: '◎',
  },
  {
    label: 'RESPOND',
    description: 'Instant Action',
    className: 'ops-respond',
    icon: '↯',
  },
  {
    label: 'RESOLVE',
    description: 'Continuous Support',
    className: 'ops-resolve',
    icon: '✓',
  },
];

export default function AlwaysOnOperations() {
  const theme = useSelector((state) => state.theme?.theme);

  const isLight = theme === 'light' || theme === 'LIGHT' || theme === 'Light';

  return (
    <div className={`always-on ${isLight ? 'always-on-light' : 'always-on-dark'}`}>
      <div className="always-on-stage">
        {/* Ambient lighting */}
        <div className="ambient-glow ambient-glow-main" />
        <div className="ambient-glow ambient-glow-left" />
        <div className="ambient-glow ambient-glow-right" />

        {/* Fine technical grid */}
        <div className="technical-grid" />

       

        {/* Orbital rings */}
        <div className="orbit orbit-large" />
        <div className="orbit orbit-medium" />
        <div className="orbit orbit-small" />

        {/* Orbit highlights */}
        <span className="orbit-light orbit-light-1" />
        <span className="orbit-light orbit-light-2" />
        <span className="orbit-light orbit-light-3" />

        {/* Connection lines */}
        <div className="connection connection-monitor" />
        <div className="connection connection-respond" />
        <div className="connection connection-resolve" />

        {/* Animated data particles */}
        <span className="data-particle particle-monitor" />
        <span className="data-particle particle-respond" />
        <span className="data-particle particle-resolve" />

        {/* Operational modules */}
        {modules.map((module) => (
          <div key={module.label} className={`operation-module ${module.className}`}>
            <div className="module-icon">{module.icon}</div>

            <div className="module-content">
              <span className="module-label">{module.label}</span>

              <span className="module-description">{module.description}</span>
            </div>

            <div className="module-live">
              <span />
              LIVE
            </div>
          </div>
        ))}

        {/* Main 24/7 Core */}
        <div className="command-core">
          <div className="core-energy" />

          <div className="core-ring core-ring-1" />
          <div className="core-ring core-ring-2" />
          <div className="core-ring core-ring-3" />

          <div className="core-container">
            <div className="core-status">
              <span />
              SYSTEM OPERATIONAL
            </div>

            <div className="core-number">
              24<span>/</span>7
            </div>

            <div className="core-heading">
              ALWAYS
              <br />
              ON
            </div>

            <div className="core-divider" />

            <div className="core-bottom">
              <span>UPTIME</span>
              <strong>99.99%</strong>
            </div>
          </div>
        </div>

        {/* Side metrics */}
        <div className="metric-card metric-left">
          <span className="metric-label">ACTIVE SYSTEMS</span>

          <strong>128</strong>

          <span className="metric-status">
            <i />
            ALL OPERATIONAL
          </span>
        </div>

        <div className="metric-card metric-right">
          <span className="metric-label">RESPONSE TIME</span>

          <strong>
            &lt; 1<span>MIN</span>
          </strong>

          <span className="metric-status">
            <i />
            OPTIMIZED
          </span>
        </div>

        {/* Activity monitor */}
        <div className="activity-monitor">
          <div className="activity-header">
            <div>
              <span className="activity-dot" />
              LIVE OPERATIONS
            </div>

            <span>REAL-TIME</span>
          </div>

          <div className="activity-graph">
            {Array.from({ length: 32 }).map((_, index) => (
              <i
                key={index}
                style={{
                  animationDelay: `${index * -0.07}s`,
                }}
              />
            ))}
          </div>

          <div className="activity-footer">
            <span>MONITORING</span>
            <span>RESPONSE</span>
            <span>RESOLUTION</span>
            <span>24/7 ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
