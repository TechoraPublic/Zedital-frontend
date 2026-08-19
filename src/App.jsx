import React from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services.jsx";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TrustedCompanies from "./components/TrustedComponies.jsx";
import AboutFounder from "./components/AboutFounder.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#111315] text-white">

      {/* =========================================
          FIXED BACKGROUND
          Hero ke peeche rahega
      ========================================== */}

      <div className="fixed inset-0 z-0 pointer-events-none bg-[#111315]" />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Marquee />

        <About />

        <Marquee />

        <Services />

        <Stats />

        <TrustedCompanies />

        <Work />

        <AboutFounder />

        {/* <Process /> */}

        <Testimonial />

        <CTA />

        <Footer />

      </div>

    </div>
  );
}

export default App;