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


import { faqData, CTAData, countUpGridData, featureGridSectionData3, heroData , processData , principlesData } from '@/app/data/operations';



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
          <Hero data={heroData} />
          <CountUpGrid data={countUpGridData} />
          <WorldNetworksMap />
          <FeatureGridSection layoutType="NUMBERED" data={featureGridSectionData3} />

          <ProcessSteps data={processData} type="TYPE1" />
          {/* <ProcessSteps data={processData} type="TYPE2" /> */}

          <PrinciplesGrid data={principlesData} type="TYPE1" />
          {/* <PrinciplesGrid data={principlesData} type="TYPE2" /> */}

          {/* <Team /> */}
          <FAQ data={faqData} />
          <CTA data={CTAData} />
        </>
      )}

      <Footer />
    </main>
  );
}
