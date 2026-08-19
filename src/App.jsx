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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
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
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;