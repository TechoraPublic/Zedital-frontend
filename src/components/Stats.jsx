import React, { useEffect, useState } from "react";

const stats = [
  {
    number: "200+",
    label: "Brands",
    percentage: 90,
    description: "Brands transformed",
  },
  {
    number: "4+",
    label: "Awards Won",
    percentage: 91,
    description: "Industry recognition",
  },
  {
    number: "250+",
    label: "Avg. Growth Delivered",
    percentage: 80,
    description: "Average growth",
  },
  {
    number: "7Y+",
    label: "Digital Ecosystem",
    percentage: 95,
    description: "Years of experience",
  },
];

const Stats = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-28
        text-white
        lg:px-10
        lg:py-36
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>

            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-white
                  shadow-[0_0_12px_rgba(255,255,255,0.6)]
                "
              />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-gray-300
                "
              >
                By The Numbers
              </span>

            </div>

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
              Results
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-gray-300
                  to-gray-500
                  bg-clip-text
                  text-transparent
                "
              >
                That Speak
              </span>

              <br />

              For Us
              <span className="text-gray-500">.</span>
            </h2>

          </div>

          <p
            className="
              max-w-[440px]
              text-base
              leading-7
              text-gray-300
              md:text-lg
            "
          >
            We measure success by the impact we create. Every number
            represents a brand, a challenge, and a result we are proud of.
          </p>

        </div>

        {/* =========================================
            STATS CARDS
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {stats.map((stat, index) => (

            <div
              key={stat.label}
              className="
                group
                relative
                min-h-[340px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.12]
                bg-white/[0.035]
                p-7
                backdrop-blur-[2px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-white/30
                hover:bg-white/[0.06]
                md:p-8
              "
            >

              {/* =================================
                  HOVER GLOW
              ================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-white/[0.06]
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:opacity-100
                  group-hover:scale-125
                "
              />

              {/* =================================
                  TOP ROW
              ================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-gray-400
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    text-right
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                  "
                >
                  {stat.description}
                </span>

              </div>

              {/* =================================
                  NUMBER
              ================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-20
                  text-6xl
                  font-black
                  tracking-[-0.07em]
                  text-white
                  transition-transform
                  duration-500
                  group-hover:-translate-y-1
                  md:text-7xl
                "
              >
                {stat.number}
              </div>

              {/* =================================
                  LABEL
              ================================== */}

              <p
                className="
                  relative
                  z-10
                  mt-4
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-gray-200
                "
              >
                {stat.label}
              </p>

              {/* =================================
                  PROGRESS
              ================================== */}

              <div
                className="
                  absolute
                  bottom-8
                  left-7
                  right-7
                  md:left-8
                  md:right-8
                "
              >

                <div className="mb-3 flex items-center justify-between">

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-400
                    "
                  >
                    Performance
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-gray-200
                    "
                  >
                    {stat.percentage}%
                  </span>

                </div>

                <div
                  className="
                    h-[3px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-white/[0.12]
                  "
                >

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gray-300
                      transition-all
                      duration-[1500ms]
                      ease-out
                      group-hover:bg-white
                    "
                    style={{
                      width: animate
                        ? `${stat.percentage}%`
                        : "0%",
                    }}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* =========================================
            BOTTOM LINE
        ========================================== */}

        <div className="mt-12 flex items-center gap-5">

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-gray-400
            "
          >
            Data
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-gray-400
            "
          >
            Growth
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-gray-400
            "
          >
            Impact
          </span>

        </div>

      </div>
    </section>
  );
};

export default Stats;