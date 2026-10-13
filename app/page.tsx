'use client';
import Hero from '@/components/Hero/LandingHero';
import Service from '@/components/Service';
import Solutions from '@/components/Solutions';
import ContactCenter from '@/components/ContactCenter';
import Company from '@/components/Company';
import CarrierNetwork from '@/components/CarrierNetwork';
import Mobile from '@/components/Mobile';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Header from '@/components/layout/Header';
import Header2 from '@/components/layout/Header2';

import Footer from '@/components/layout/Footer';

import WorldNetworks from '@/components/WorldMaps/WorldNetworks';
import WorldNetworksMap from '@/components/WorldMaps/WorldNetworksMap';
import WorldCountries from '@/components/WorldMaps/WorldCountries';
import Loader from '@/components/layout/Loader';
import CTA from '@/components/dynamic-zone/CTA';
import CountUp from '@/components/dynamic-zone/CountUp/Full';
import CountUpBoxes from '@/components/dynamic-zone/CountUp';

import FAQ from '@/components/dynamic-zone/FAQ';
import VirtualOfficeNumbers from '@/components/VirtualOfficeNumbers';
import VirtualNumberSearch from '@/components/VirtualNumberSearch';

import Testimonials from '@/components/Testimonials';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Animations from '@/components/Animations';

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
          <Hero animation={'home'} />
          <Service mode={theme} />

          <CarrierNetwork mode={theme} />

          <Solutions mode={theme} />
          <CountUp />

          <ContactCenter mode={theme} />

          <VirtualOfficeNumbers />
          {/* <VirtualNumberSearch onSearch={()=>{}}/> */}
          <WorldCountries />
          {/* <WorldNetworks/> */}
          {/* <WorldNetworksMap/> */}
          <CountUpBoxes />

          <Mobile mode={theme} />

          <Partners />

          <Contact mode={theme} />
          <Testimonials />
          <FAQ />
          <CTA />
        </>
      )}
      <Footer />
    </main>
  );
}
