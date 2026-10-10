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
      <Header2 mode={theme} />
      {loading ? (
        <Loader isLight={theme == 'light'} message="Establishing secure connections" duration={1800} />
      ) : (
        <>
          <Hero mode={theme} />

          <Service mode={theme} />
          <Solutions mode={theme} />
          <Animations type={'home'} />
          <ContactCenter mode={theme} />

          <Company mode={theme} />

          <CarrierNetwork mode={theme} />

          <Mobile mode={theme} />

          <Partners mode={theme} />
          {/* <WorldCountries/> */}
          {/* <WorldNetworks/> */}
          {/* <WorldNetworksMap/> */}
          <Contact mode={theme} />
        </>
      )}
      <Footer mode={theme} />
    </main>
  );
}
