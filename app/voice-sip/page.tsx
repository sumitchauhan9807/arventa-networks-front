'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';

import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import WorldVoipMap from '@/components/dynamic-zone/WorldMaps/WorldMap';
import VoipHero from '@/components/Hero/VoipHero';
import VoipHero2 from '@/components/Hero/VoipHero2';
import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';
import FAQ from '@/components/dynamic-zone/FAQ';

import VirtualOfficeNumbers from '@/components/dynamic-zone/VirtualNumberComponents/VirtualOfficeNumbers';
import VirtualNumberSearch from '@/components/dynamic-zone/VirtualNumberComponents/VirtualNumberSearch';
import { faqData, CTAData, countupData, featureGridSectionData1 ,heroData ,principlesData , processData } from '@/app/data/voiceSip';
import ContactForm from '@/components/dynamic-zone/ContactForm'
import Loader from '@/components/layout/Loader';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProcessSteps from '@/components/dynamic-zone/ProcessSteps';
import PrinciplesGrid from '@/components/dynamic-zone/PrinciplesGrid';



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
          <VoipHero2 data={heroData} />
          <CountUp data={countupData} />
         
          <FeatureGridSection layoutType={'NUMBERED'} data={featureGridSectionData1} />
          <ProcessSteps data={processData} type="TYPE2" />
          <PrinciplesGrid data={principlesData} type="TYPE2" />

          <FeatureGridSection layoutType={'NUMBERED'} data={featureGridSectionData1} />
          <FAQ data={faqData} />
          <CTA data={CTAData} />
          <ContactForm/>
        </>
      )}

      <Footer />
    </main>
  );
}
