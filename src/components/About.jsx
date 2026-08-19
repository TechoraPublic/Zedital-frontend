import React from "react";

import aboutImage from "../assets/aboutImage.png";
import visionImage from "../assets/visionImage.png";
import missionImage from "../assets/missionImage.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0b0b0b] text-white px-6 lg:px-10 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* ==============================
            ABOUT HEADING
        =============================== */}
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          // About Us
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end">

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-[-0.05em]">
            We Create
            <br />

            <span className="text-gray-500">
              Digital
            </span>

            <br />

            Impact.
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
            We help ambitious brands grow through creativity, strategy and
            technology. From building your identity to reaching the right
            audience, we turn ideas into meaningful results.
          </p>

        </div>


        {/* ==============================
            BADGES
        =============================== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Media */}
          <div className="h-12 rounded-full border border-white/20 flex items-center justify-center gap-3 hover:border-white/50 transition duration-300">

            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-black text-xs font-bold">
              ✓
            </span>

            <span className="text-base md:text-lg font-medium">
              Media
            </span>

          </div>


          {/* Advertising */}
          <div className="h-12 rounded-full border border-white/20 flex items-center justify-center gap-3 hover:border-white/50 transition duration-300">

            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-black text-xs font-bold">
              ✓
            </span>

            <span className="text-base md:text-lg font-medium">
              Advertising
            </span>

          </div>


          {/* Marketing */}
          <div className="h-12 rounded-full border border-white/20 flex items-center justify-center gap-3 hover:border-white/50 transition duration-300">

            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-black text-xs font-bold">
              ✓
            </span>

            <span className="text-base md:text-lg font-medium">
              Marketing
            </span>

          </div>

        </div>


        {/* ==============================
            IMAGE + VISION / MISSION
        =============================== */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 mt-8">


          {/* ==============================
              LEFT LARGE IMAGE
          =============================== */}
          <div className="h-[500px] lg:h-[530px] rounded-[28px] overflow-hidden">

            <img
              src={aboutImage}
              alt="About us"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>


          {/* ==============================
              RIGHT SIDE
          =============================== */}
          <div className="flex flex-col gap-8">


            {/* ==============================
                OUR VISION
            =============================== */}
            <div className="relative min-h-[250px] rounded-[28px] border border-white/10 bg-[#111111] p-7 md:p-8 overflow-hidden">

              {/* Heading + Arrow */}
              <div className="flex items-center justify-between">

                <h3 className="text-2xl md:text-3xl font-medium">
                  OUR VISION
                </h3>

               <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#222222] text-gray-400 text-xl border border-white/10">
                →
                </span>

              </div>


              {/* Text */}
              <p className="mt-7 pr-[210px] text-gray-300 text-base md:text-lg leading-relaxed">
                Our vision is to transform businesses into unforgettable
                brands by blending creativity with performance-driven
                strategies.
              </p>


              {/* Small Image */}
              <div className="absolute right-7 bottom-7 w-[190px] h-[125px] rounded-[22px] overflow-hidden">

                <img
                  src={visionImage}
                  alt="Our vision"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>


            {/* ==============================
                OUR MISSION
            =============================== */}
            <div className="relative min-h-[250px] rounded-[28px] border border-white/10 bg-[#111111] p-7 md:p-8 overflow-hidden">

              {/* Heading + Arrow */}
              <div className="flex items-center justify-between">

                <h3 className="text-2xl md:text-3xl font-medium">
                  OUR MISSION
                </h3>

              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#222222] text-gray-400 text-xl border border-white/10">
                →
                </span>

              </div>


              {/* Text */}
              <p className="mt-7 pr-[210px] text-gray-300 text-base md:text-lg leading-relaxed">
                At Zedital Media, our mission is to bridge the gap between
                brands and people by crafting strategies that not only sell
                but also connect and inspire.
              </p>


              {/* Small Image */}
              <div className="absolute right-7 bottom-7 w-[190px] h-[125px] rounded-[22px] overflow-hidden">

                <img
                  src={missionImage}
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;