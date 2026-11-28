'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import Hero from '@/components/Hero/LandingHero';




import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';


import Loader from '@/components/layout/Loader';
import CTA from '@/components/dynamic-zone/CTA';
import CountUpGrid from '@/components/dynamic-zone/CountUp/Grid';
import CountUp from '@/components/dynamic-zone/CountUp';
import FAQ from '@/components/dynamic-zone/FAQ';
import ServicesGrid from '@/components/dynamic-zone/ServicesGrid';
import SolutionsGrid from '@/components/dynamic-zone/SolutionsGrid';
import OfferingGrid from '@/components/dynamic-zone/OfferingGrid';
import Partners from '@/components/dynamic-zone/Partners';
import Testimonials from '@/components/dynamic-zone/Testimonials';
import VirtualNumberComponents from '@/components/dynamic-zone/VirtualNumberComponents';
import WorldMaps from '@/components/dynamic-zone/WorldMaps';
import FancyComponents from '@/components/dynamic-zone/FancyComponents'
import ContactForm from '@/components/dynamic-zone/ContactForm'



import { serviceGridData, solutionGridData, testimonialsData, offeringGridData, partnerData, faqData, CTAData ,countupData ,countUpGridData ,heroData } from '@/app/data/home';



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

  // const mode = "dark";

  return (
    <main className={theme == 'light' ? 'light' : 'dark'}>
      <Header2 />
      {loading ? (
        <Loader isLight={theme == 'light'} message="Establishing secure connections" duration={1800} />
      ) : (
        <>
          <Hero data={heroData} />
          <ServicesGrid  data={serviceGridData} />
          <SolutionsGrid  data={solutionGridData} type="TYPE1" />

          <OfferingGrid  data={offeringGridData} />
          <FancyComponents/>
          <CountUp data={countupData} />

         
          <VirtualNumberComponents type="VIRTUAL_OFFICE_NUMBERS"/>
          <VirtualNumberComponents type="VI/RTUAL_NUMBER_SEARCH"/>

          <WorldMaps type="WORLD_COUNTRIES_COLORED"/>
          {/* <WorldMaps type="WORLD_MAP"/>
          <WorldMaps type="WORLD_NETWORKS"/>
          <WorldMaps type="WORLD_NETWORKS_MAP"/> */}


        
          
          <CountUpGrid data={countUpGridData}/>

          <SolutionsGrid theme={theme} data={solutionGridData} type="TYPE2" />

          <Partners data={partnerData} type="TYPE1" />

          <Testimonials data={testimonialsData} />
          <FAQ data={faqData} />
          <CTA data={CTAData} />
          <ContactForm/>
        </>
      )}
      <Footer />
    </main>
  );
}
