'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';
import Header2 from '@/components/layout/Header2';
import Hero from '@/components/Hero/LandingHero';
import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import Team from '@/components/Team';
import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';
import WorldNetworksMap from '@/components/dynamic-zone/WorldMaps/WorldNetworksMap';
import FAQ from '@/components/dynamic-zone/FAQ';

import {  CTAData  , featureGridSectionData3 ,countupData} from '@/app/data/partners';

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
          <Hero animation="partners" />
          <CountUp data={countupData} />
          {/* <WorldNetworksMap /> */}
          <FeatureGridSection layoutType={'NUMBERED'} data={featureGridSectionData3} />
          {/* <Team />
          <FAQ /> */}
          <CTA data={CTAData} />
        </>
      )}

      <Footer />
    </main>
  );
}
