import React, { useState } from "react";
import workPic from "../assets/work-pic.png";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We start by understanding your brand, audience, and goals—identifying what truly makes you stand out.",
    tag: "STRATEGY",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description:
      "Our team designs a tailored 360° marketing plan, blending creativity with data-driven insights for maximum impact.",
    tag: "PLANNING",
  },
  {
    number: "03",
    title: "EXECUTE",
    description:
      "From campaigns to content, we bring the strategy to life—delivering measurable growth and lasting results.",
    tag: "GROWTH",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b0b] px-6 py-24 text-white lg:px-10 lg:py-32">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[25%] h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.01] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">

          <div>

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-xs uppercase tracking-[0.4em] text-gray-500">
                How It Works
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-[13vw] font-black uppercase leading-[0.78] tracking-[-0.07em] md:text-[10vw] lg:text-[7vw]">
              Our
              <br />

              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Process
              </span>

              <span className="text-gray-700">.</span>
            </h2>

          </div>

          {/* Description */}
          <p className="max-w-[330px] text-sm leading-6 text-gray-500 lg:mb-2">
            From strategy to execution, we turn ambitious ideas into
            meaningful digital experiences that drive growth.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* ================= LEFT ================= */}

          <div className="lg:sticky lg:top-24 lg:h-fit">

            {/* IMAGE */}

            <div className="group relative overflow-hidden rounded-[22px] border border-white/10">

              <img
                src={workPic}
                alt="Marketing strategy"
                className="
                  h-[320px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-105
                  sm:h-[400px]
                  lg:h-[450px]
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              {/* Image Labels */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Your Brand
                </span>

                <span className="text-2xl font-light text-white/80">
                  ×
                </span>

                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Our Strategy
                </span>

              </div>

            </div>

            {/* LEFT CONTENT */}

            <div className="mt-10">

              <h3 className="text-4xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Your Success
                <br />

                Is Our{" "}

                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text font-serif font-normal italic text-transparent">
                  Strategy
                </span>
              </h3>

              <p className="mt-6 max-w-[500px] text-sm leading-6 text-gray-500">
                Struggling to cut through the digital noise? We transform
                ambitious brands into memorable digital experiences built
                for growth.
              </p>

              {/* Progress */}

              <div className="mt-10 flex items-center gap-5">

                <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-gray-600">
                  03 Steps
                </span>

                <div className="h-[1px] flex-1 bg-white/10">

                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{
                      width: `${((active + 1) / steps.length) * 100}%`,
                    }}
                  />

                </div>

                <span className="text-[10px] text-white/50">
                  0{active + 1}
                </span>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div>

            {/* Process Header */}

            <div className="flex items-center justify-between border-b border-white/10 pb-5">

              <span className="text-xs uppercase tracking-[0.4em] text-gray-500">
                Our Process
              </span>

              <span className="text-xs tracking-[0.2em] text-gray-700">
                01 — 03
              </span>

            </div>

            {/* STEPS */}

            {steps.map((step, index) => {

              const isActive = active === index;

              return (
                <article
                  key={step.number}
                  onClick={() => setActive(index)}
                  className="group cursor-pointer border-b border-white/10"
                >

                  {/* TOP ROW */}

                  <div className="flex items-center justify-between py-8">

                    {/* Number */}

                    <span
                      className={`text-xs tracking-[0.25em] transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Right Side */}

                    <div className="flex items-center gap-5">

                      <span
                        className={`hidden text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 sm:block ${
                          isActive
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        {step.tag}
                      </span>

                      {/* Button */}

                      <button
                        type="button"
                        aria-label={`Open ${step.title}`}
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-white bg-white text-black"
                              : "border-white/20 text-gray-500 group-hover:border-white/60 group-hover:text-white"
                          }
                        `}
                      >
                        <span className="text-xl font-light leading-none">
                          {isActive ? "−" : "+"}
                        </span>
                      </button>

                    </div>

                  </div>

                  {/* STEP BODY */}

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] pb-8"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      {/* Title */}

                      <h3
                        className={`
                          text-5xl
                          font-black
                          uppercase
                          leading-[0.8]
                          tracking-[-0.06em]
                          transition-all
                          duration-300
                          sm:text-6xl
                          lg:text-[70px]
                          ${
                            isActive
                              ? "text-white"
                              : "text-gray-800"
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}

                      <p className="mt-6 max-w-[500px] text-sm leading-6 text-gray-500">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* ACTIVE LINE */}

                  <div className="relative h-[1px] bg-white/[0.03]">

                    <div
                      className={`absolute left-0 top-0 h-full bg-white transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />

                  </div>

                </article>
              );
            })}

            {/* FOOTER */}

            <div className="mt-8 flex items-center justify-between">

              <span className="text-[10px] uppercase tracking-[0.35em] text-gray-600">
                Building Brands
              </span>

              <span className="text-lg font-light text-white/60">
                ↓
              </span>

              <span className="text-[10px] uppercase tracking-[0.35em] text-gray-600">
                That Matter
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}