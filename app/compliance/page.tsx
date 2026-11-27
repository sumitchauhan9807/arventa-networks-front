'use client';
import '@/app/styles/about/dark.css';
import '@/app/styles/about/light.css';
import Header2 from '@/components/layout/Header2';
import Hero from '@/components/Hero/LandingHero';
import Footer from '@/components/layout/Footer';
import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection';
import CountUp from '@/components/dynamic-zone/CountUp';
import CTA from '@/components/dynamic-zone/CTA';
import WorldNetworksMap from '@/components/dynamic-zone/WorldMaps/WorldNetworksMap';
import FAQ from '@/components/dynamic-zone/FAQ';

// import FeatureGridSection from '@/components/dynamic-zone/FeatureGridSection'

import Loader from '@/components/layout/Loader';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CTAData, featureGridSectionData3, countupData, heroData, offeringGridData, featureGridSectionData2, faqData, processData, principlesData } from '@/app/data/compliance';
import OfferingGrid from '@/components/dynamic-zone/OfferingGrid';
import ProcessSteps from '@/components/dynamic-zone/ProcessSteps';
import PrinciplesGrid from '@/components/dynamic-zone/PrinciplesGrid';
import ContactForm from '@/components/dynamic-zone/ContactForm'
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
          <Hero data={heroData} />
          <CountUp data={countupData} />

          <OfferingGrid data={offeringGridData} />
          <FeatureGridSection layoutType={'TIMELINE'} data={featureGridSectionData3} />
          <ProcessSteps data={processData} type="TYPE2" />
          <PrinciplesGrid data={principlesData} type="TYPE2" />

          <FAQ data={faqData} />
          <CTA data={CTAData} />
          <ContactForm/>
        </>
      )}

      <Footer />
    </main>
  );
}
