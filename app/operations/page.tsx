'use client';

import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';

import Header2 from '@/components/layout/Header2';
import Hero from '@/components/Hero/LandingHero';
import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import CountUpGrid from '@/components/dynamic-zone/CountUp/Grid';
import CTA from '@/components/dynamic-zone/CTA';
import WorldNetworksMap from '@/components/dynamic-zone/WorldMaps/WorldNetworksMap';
import FAQ from '@/components/dynamic-zone/FAQ';
import Loader from '@/components/layout/Loader';
import CoverageTimeline from '@/components/dynamic-zone/CoverageTimeline';
import ProcessSteps from '@/components/dynamic-zone/ProcessSteps';
import PrinciplesGrid from '@/components/dynamic-zone/PrinciplesGrid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Activity, Search, ShieldCheck, RefreshCw, MessagesSquare, Target, TrendingUp, Sun, Sunset, Moon, Globe2, Clock3, ArrowRight, ArrowUpRight } from 'lucide-react';
import { faqData, CTAData ,countUpGridData , featureGridSectionData3 } from '@/app/data/operations';
/* =========================================================
   CONFIGURATION
   Keep all editable content and repeated data here.
========================================================= */

const coverageContent = {
  eyebrow: '24/7 operations',
  titleLine1: 'Always connected.',
  titleHighlight: 'Never out of sight.',
  description: 'Communication infrastructure does not stop at the end of the business day. Structured coverage, clear responsibilities, and consistent handovers help maintain operational continuity around the clock.',
  featureOneTitle: 'One operational picture',
  featureOneDescription: 'Shared context and documented handovers help teams stay aligned across shifts, services, and regions.',
  featureTwoTitle: 'Clear escalation paths',
  featureTwoDescription: 'Defined ownership and escalation procedures help ensure important issues reach the appropriate team.',
  panelEyebrow: 'Operational coverage',
  panelTitle: 'A continuous cycle',
  timelineLabels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
  handoverText: 'Structured handovers connect each phase, preserving context and continuity for the next operational team.',
  redesignedTitleLine1: 'Coverage that never',
  redesignedTitleHighlight: 'loses continuity.',
  redesignedDescription: 'Three coordinated shifts. One connected operational picture. Structured handovers keep teams informed and services under consistent oversight throughout the day and night.',
  statusLabel: 'Coverage status',
  statusText: 'Continuous',
  metricValue: '24/7',
  metricDescription: 'Operational visibility around the clock',
  phasePrefix: 'PHASE',
  footerText: 'One operational picture across every shift.',
  footerMeta: 'Clear ownership · Documented handovers · Defined escalation',
};

const coverageShifts = [
  {
    label: 'DAY',
    time: '06:00 – 14:00',
    title: 'Monitor & coordinate',
    description: 'Review service health, coordinate ongoing activities, and manage operational priorities.',
    icon: Sun,
    width: '33.333%',
    phaseFooter: 'Start of operational cycle',
  },
  {
    label: 'EVENING',
    time: '14:00 – 22:00',
    title: 'Maintain continuity',
    description: 'Continue monitoring, coordinate escalations, and maintain visibility across active issues.',
    icon: Sunset,
    width: '33.333%',
    phaseFooter: 'Continuity through transition',
  },
  {
    label: 'NIGHT',
    time: '22:00 – 06:00',
    title: 'Sustain oversight',
    description: 'Maintain operational oversight, track outstanding incidents, and prepare structured handovers.',
    icon: Moon,
    width: '33.334%',
    phaseFooter: 'Preparation for handover',
  },
];

const processContent = {
  eyebrow: 'Our operations',
  titleLine1: 'From first signal',
  titleHighlight: 'to resolution.',
  description: 'Reliable operations require more than monitoring. Our approach brings visibility, structured response, and continuous improvement together in one operational lifecycle.',
  redesignedTitleLine1: 'A clear path from',
  redesignedTitleHighlight: 'signal to solution.',
  redesignedDescription: 'A structured operational lifecycle that transforms early signals into informed action and lasting improvements.',
  statusText: 'Designed for continuous operational oversight',
  flowText: 'Monitor · Detect · Respond · Improve',
  footerTitle: 'Built around continuous improvement',
  footerDescription: 'Every incident creates an opportunity to learn.',
  phaseLabel: 'Operational phase',
};

const processSteps = [
  {
    number: '01',
    title: 'Monitor',
    subtitle: 'Always-on visibility',
    description: 'Monitor network performance, service availability, and operational signals to identify potential issues early.',
    icon: Activity,
  },
  {
    number: '02',
    title: 'Detect',
    subtitle: 'Identify what matters',
    description: 'Analyze alerts and service indicators to identify anomalies and prioritize incidents based on their impact.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Respond',
    subtitle: 'Coordinate the right action',
    description: 'Coordinate technical teams, investigate incidents, and work toward restoring normal service as quickly as possible.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Improve',
    subtitle: 'Learn and strengthen',
    description: 'Review incidents, document findings, and use operational insights to improve processes and resilience.',
    icon: RefreshCw,
  },
];

const principlesContent = {
  eyebrow: 'What guides us',
  titleLine1: 'Reliability is built',
  titleLine2: 'into every decision.',
  description: 'Technology matters. So do the people, processes, and principles behind it. Our operational philosophy is built around disciplined execution, transparent communication, and a commitment to learning.',

  cardFooter: 'Our operational principles',
  approachEyebrow: 'The Arventa approach',
  approachTitle: 'People, processes, and technology working together.',
  approachDescription: 'Because dependable business communication begins with dependable operations.',

  approachHighlight: ' Working as one.',

  approachLabel: 'Built on trust',
  approachSubLabel: 'Guided by our principles',
  principlePrefix: 'PRINCIPLE',
  philosophyFooter: 'Our operational philosophy',
};

const operationalPrinciples = [
  {
    number: '01',
    title: 'Accountability',
    description: 'Clear ownership, defined responsibilities, and documented processes help keep operational work organized and traceable.',
    icon: MessagesSquare,
    tag: 'Ownership',
  },
  {
    number: '02',
    title: 'Communication',
    description: 'Structured updates and coordinated escalation help stakeholders understand what is happening and what comes next.',
    icon: MessagesSquare,
    tag: 'Transparency',
  },
  {
    number: '03',
    title: 'Proactive thinking',
    description: 'Monitoring service indicators and reviewing emerging patterns helps teams identify risks before they become larger problems.',
    icon: Target,
    tag: 'Prevention',
  },
  {
    number: '04',
    title: 'Continuous improvement',
    description: 'Operational reviews and documented lessons help strengthen processes, refine workflows, and support future reliability.',
    icon: TrendingUp,
    tag: 'Progress',
  },
];




export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${theme === 'light' ? 'light' : 'dark'} about`}>
      <Header2 />

      {loading ? (
        <Loader isLight={theme === 'light'} message="Loading About Arventa" duration={1800} />
      ) : (
        <>
          <Hero animation="operations" />
          <CountUpGrid data={countUpGridData} />
          <WorldNetworksMap />
          <FeatureGridSection layoutType="NUMBERED" data={featureGridSectionData3} />

          <CoverageTimeline theme={theme} content={coverageContent} shifts={coverageShifts} type="TYPE1" />
          {/* <CoverageTimeline theme={theme} content={coverageContent} shifts={coverageShifts} type="TYPE2" /> */}

          <ProcessSteps theme={theme} content={processContent} steps={processSteps} type="TYPE1" />
          {/* <ProcessSteps theme={theme} content={processContent} steps={processSteps} type="TYPE2" /> */}

          {/* <PrinciplesGrid theme={theme} content={principlesContent} principles={operationalPrinciples} type="TYPE1" /> */}
          <PrinciplesGrid theme={theme} content={principlesContent} principles={operationalPrinciples} type="TYPE2" />

          {/* <Team /> */}
          <FAQ data={faqData} />
          <CTA data={CTAData} />
        </>
      )}

      <Footer />
    </main>
  );
}
