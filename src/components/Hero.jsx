import React from "react";
import heroVid from "../assets/hero-vid.png";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.4em] text-gray-400 md:text-sm">
                A 360° Media & Marketing Powerhouse
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-[11vw] lg:text-[9vw]">
              From
              <br />

              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Ideas
              </span>

              <br />

              To Impact
              <span className="text-gray-600">.</span>
            </h1>

            {/* Bottom Content */}
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              {/* Sub Heading */}
              <h2 className="max-w-[700px] text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] text-white md:text-7xl lg:text-[65px]">
                From clicks to Customers.
              </h2>

              {/* CTA Button */}
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  h-[56px]
                  shrink-0
                  items-center
                  justify-center
                  gap-4
                  self-start
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white
                  px-7
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  md:self-auto
                "
              >
                <span>Let's Get Started</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-end pb-2 lg:pb-8">

            {/* LOGO */}
            <div className="mb-6">
              <div className="flex h-12 w-12 items-center justify-center text-5xl text-orange-500">
                ✱
              </div>
            </div>

            {/* TEXT */}
            <div className="mb-7">
              <p className="text-sm leading-5 text-gray-300">
                We’re not just another agency. Zedital Media is where
                creativity meets strategy, data meets storytelling, and
                brands meet exponential growth.
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src={heroVid}
                alt="Zedital Media"
                className="aspect-[1.45/1] w-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;