'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';

import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import WorldVoipMap from '@/components/WorldMaps/WorldMap';
import VoipHero from '@/components/Hero/VoipHero';

import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';
import FAQ from '@/components/dynamic-zone/FAQ';

import VirtualOfficeNumbers from '@/components/VirtualOfficeNumbers';
import VirtualNumberSearch from '@/components/VirtualNumberSearch';

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
          <VoipHero />
          <CountUp />
          <VirtualNumberSearch onSearch={() => {}} />
          <VirtualOfficeNumbers />
          <WorldVoipMap />
          <FeatureGridSection layoutType={'NUMBERED'} />
          <FAQ />
          <CTA />
        </>
      )}

      <Footer />
    </main>
  );
}
