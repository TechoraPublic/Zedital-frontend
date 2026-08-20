import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services.jsx";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TrustedCompanies from "./components/TrustedComponies.jsx";
import AboutFounder from "./components/AboutFounder.jsx";
import AnimationPage from "./components/AnimationPage.jsx";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#111315] text-white">

      {/* Background */}

      <div className="fixed inset-0 z-0 pointer-events-none bg-[#111315]" />

      {/* ===============================
          WEBSITE
      =============================== */}

      <div
        className={`
          relative z-10
          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            introFinished
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[15px]"
          }
        `}
      >
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

        <Testimonial />

        <CTA />

        <Footer />
      </div>

      {/* ===============================
          INTRO
      =============================== */}

      {!introFinished && (
        <AnimationPage
          onComplete={() => setIntroFinished(true)}
        />
      )}

    </div>
  );
}

export default App;