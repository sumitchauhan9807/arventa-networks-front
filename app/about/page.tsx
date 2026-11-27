'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';
import Header from '@/components/layout/Header';
import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import WorldVoipMap from '@/components/dynamic-zone/WorldMaps/WorldMap';
import VoipHero from '@/components/Hero/VoipHero';
import VoipHero2 from '@/components/Hero/VoipHero2';
import VoipHero3 from '@/components/Hero/VoipHero3';

import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';

import TeamSection from '@/components/dynamic-zone/Team';
import AboutSection from '@/components/dynamic-zone/About';
import ContactForm from '@/components/dynamic-zone/ContactForm'

// import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection'

import Loader from '@/components/layout/Loader';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CTAData, countupData, teamData, aboutContent, featureGridSectionData1, featureGridSectionData2, featureGridSectionData3 ,heroData } from '@/app/data/about';



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
          <VoipHero3 data={heroData} />
          <CountUp data={countupData} />
          <AboutSection data={aboutContent} />
          <FeatureGridSection layoutType={'BOXES'} data={featureGridSectionData1} />
          <FeatureGridSection layoutType={'TIMELINE'} data={featureGridSectionData3} />
          <FeatureGridSection layoutType={'NUMBERED'} data={featureGridSectionData2} />

          {/* <WorldVoipMap /> */}
          <TeamSection data={teamData} />
          <CTA data={CTAData} />
          <ContactForm/>
        </>
      )}

      <Footer />
    </main>
  );
}
