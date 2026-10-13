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
import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';

import NetworkSection from '@/components/About/NetworkSection';
import AboutSection from '@/components/About/About';

// import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection'

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
      <Header2 />
      {loading ? (
        <Loader isLight={theme == 'light'} message="Loading About Arventa" duration={1800} />
      ) : (
        <>
          {/* <VoipHero2 />
          <VoipHero /> */}
          <AboutHero />
          <CountUp />
          <AboutSection/>
          {/* <FeatureGridSection layoutType={'BOXES'} /> */}
          <FeatureGridSection layoutType={'TIMELINE'} />
          {/* <FeatureGridSection layoutType={'NUMBERED'} /> */}

          <NetworkSection />
          {/* <WorldVoipMap /> */}
          <Team />
          <CTA />
        </>
      )}

      <Footer />
    </main>
  );
}
