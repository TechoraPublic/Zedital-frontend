import React from "react";
import ServiceCards from "./ServiceCards";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Build a powerful brand identity and strategy that connects with your audience and creates a lasting impression.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Grow your business with data-driven campaigns designed to increase visibility, engagement and conversions.",
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Create engaging social media content that makes your brand stand out and keeps your audience connected.",
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Creative videos, graphics and campaigns designed to communicate your story and make your brand memorable.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-transparent
        px-6
        py-28
        text-white
        lg:px-10
        lg:py-36
      "
    >
      {/* =========================
          SUBTLE SECTION GLOW
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.018]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-20">

          <div className="mb-8 flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-white
                shadow-[0_0_14px_rgba(255,255,255,0.7)]
              "
            />

            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-zinc-400
              "
            >
              What We Do
            </p>

          </div>

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
            "
          >

            {/* Heading */}

            <h2
              className="
                text-[12vw]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.075em]
                sm:text-[9vw]
                lg:text-[6.5vw]
              "
            >
              We Build

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-zinc-300
                  to-zinc-500
                  bg-clip-text
                  text-transparent
                "
              >
                Brands
              </span>

              <br />

              That Matter
              <span className="text-zinc-700">.</span>
            </h2>

            {/* Description */}

            <div className="max-w-[440px]">

              <p
                className="
                  text-sm
                  leading-7
                  text-zinc-300
                  md:text-base
                "
              >
                From strategy to execution, we bring creativity,
                technology and marketing together to help ambitious
                brands grow.
              </p>

              <div className="mt-7 flex items-center gap-4">

                <span className="h-px w-12 bg-white/25" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                  "
                >
                  Strategy × Creativity × Growth
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            TOP INFO
        ========================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            justify-between
            gap-5
            border-y
            border-white/10
            py-5
            sm:flex-row
            sm:items-center
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-zinc-400
            "
          >
            Our Expertise
          </span>

          <span className="text-xs text-zinc-400">
            04 Services / 01 Vision
          </span>

        </div>

        {/* =========================
            SERVICE CARDS
        ========================== */}

        <div className="relative">

          <ServiceCards services={services} />

        </div>

        {/* =========================
            BOTTOM
        ========================== */}

        <div className="mt-16">

          <div className="flex items-center gap-5">

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-400
              "
            >
              Plan
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-400
              "
            >
              Create
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-400
              "
            >
              Grow
            </span>

          </div>

          <p
            className="
              mt-8
              max-w-4xl
              text-2xl
              font-medium
              leading-tight
              tracking-[-0.04em]
              text-zinc-200
              md:text-4xl
            "
          >
            One partner.

            <span className="text-zinc-500">
              {" "}Everything your brand needs to grow.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default Services;