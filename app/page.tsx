'use client'
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Solutions from "@/components/Solutions";
import ContactCenter from "@/components/ContactCenter";
import Company from "@/components/Company";
import CarrierNetwork from "@/components/CarrierNetwork";
import Mobile from "@/components/Mobile";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";


export default function Home() {
    const [theme, setTheme] = useState('dark');
  
  // const mode = "dark";

  return (
    <main className={theme == 'light' ? 'light' : 'dark'}>
      {/* =========================================================
     HEADER
========================================================= */}

      <Header mode={theme} setTheme={setTheme} />
      <Hero mode={theme} />
      {/* =========================================================
     SERVICE BAR
========================================================= */}
      <Service mode={theme}/>
      <Solutions mode={theme}/>
      {/* =========================================================
     SOLUTIONS
========================================================= */}
      
      {/* =========================================================
     CONTACT CENTER
========================================================= */}
      <ContactCenter mode={theme}/>
      {/* =========================================================
     GLOBAL INFRASTRUCTURE
========================================================= */}
      <Company mode={theme}/>
      {/* =========================================================
     ARVENTA — CARRIER NETWORK ANIMATION
========================================================= */}
     <CarrierNetwork mode={theme}/>
      {/* =========================================================
     INDUSTRIES
========================================================= */}
      <Mobile mode={theme}/>
      {/* =========================================================
     PARTNERS
========================================================= */}
     <Partners mode={theme}/>
      {/* =========================================================
     CTA
========================================================= */}
      <Contact mode={theme}/>
      {/* =========================================================
         FOOTER
    ========================================================== */}
      <Footer mode={theme}/>
    </main>
  );
}
