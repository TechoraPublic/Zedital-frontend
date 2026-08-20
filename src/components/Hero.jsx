import React, { useEffect, useState } from "react";

const stars = [
  { x: "5%", y: "15%", s: 2 },
  { x: "12%", y: "72%", s: 1 },
  { x: "20%", y: "32%", s: 2 },
  { x: "28%", y: "82%", s: 1 },
  { x: "37%", y: "18%", s: 2 },
  { x: "45%", y: "65%", s: 1 },
  { x: "54%", y: "28%", s: 2 },
  { x: "64%", y: "78%", s: 1 },
  { x: "74%", y: "12%", s: 2 },
  { x: "83%", y: "48%", s: 1 },
  { x: "92%", y: "25%", s: 2 },
  { x: "8%", y: "48%", s: 1 },
  { x: "32%", y: "52%", s: 1 },
  { x: "58%", y: "50%", s: 1 },
  { x: "88%", y: "68%", s: 1 },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111315] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Glow */}
        <div
          className="
            absolute left-[55%] top-[42%]
            h-[650px] w-[650px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[130px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute bottom-[-250px] left-[-180px]
            h-[550px] w-[550px]
            rounded-full
            bg-white/[0.018]
            blur-[120px]
          "
        />

        {/* =================================================
            STARS
        ================================================== */}

        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute animate-pulse rounded-full bg-white"
            style={{
              left: star.x,
              top: star.y,
              width: `${star.s}px`,
              height: `${star.s}px`,
              animationDelay: `${index * 0.25}s`,
              animationDuration: `${2 + (index % 3)}s`,
              boxShadow: "0 0 12px rgba(255,255,255,0.6)",
            }}
          />
        ))}

        {/* =================================================
            SHOOTING STARS
        ================================================== */}

        <div
          className="
            absolute left-[-150px] top-[25%]
            h-px w-32
            rotate-[-25deg]
            bg-gradient-to-r
            from-transparent via-white/70 to-transparent
            animate-shooting
          "
        />

        <div
          className="
            absolute left-[-150px] top-[68%]
            h-px w-24
            rotate-[-25deg]
            bg-gradient-to-r
            from-transparent via-white/50 to-transparent
            animate-shooting-slow
          "
        />

        {/* =================================================
            3D STYLE PLANET
        ================================================== */}

        <div
          className="
            absolute right-[-130px] top-1/2
            hidden h-[520px] w-[520px]
            -translate-y-1/2
            lg:block
          "
        >
          {/* Outer Orbit */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[190px] w-[470px]
              -translate-x-1/2 -translate-y-1/2
              rotate-[-20deg]
              rounded-[50%]
              border border-white/[0.08]
              animate-orbit
            "
          />

          {/* Second Orbit */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[240px] w-[500px]
              -translate-x-1/2 -translate-y-1/2
              rotate-[55deg]
              rounded-[50%]
              border border-white/[0.045]
              animate-orbit-reverse
            "
          />

          {/* Planet Glow */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[330px] w-[330px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-white/[0.035]
              blur-[45px]
            "
          />

          {/* Planet */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[270px] w-[270px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle_at_30%_25%,#f5f5f5_0%,#c4c4c4_25%,#777_50%,#3b3b3b_72%,#171717_100%)]
              shadow-[inset_-45px_-30px_60px_rgba(0,0,0,0.65),0_0_80px_rgba(255,255,255,0.08)]
              animate-planet
            "
          >
            {/* Surface */}
            <div
              className="
                absolute inset-0
                rounded-full
                bg-[radial-gradient(circle_at_25%_35%,rgba(0,0,0,.4)_0_18px,transparent_22px),radial-gradient(circle_at_65%_25%,rgba(0,0,0,.3)_0_14px,transparent_20px),radial-gradient(circle_at_55%_70%,rgba(0,0,0,.35)_0_25px,transparent_35px)]
                opacity-30
                animate-surface
              "
            />

            {/* Atmosphere */}
            <div
              className="
                absolute -inset-2
                rounded-full
                border border-white/10
                shadow-[0_0_35px_rgba(255,255,255,0.08)]
              "
            />
          </div>

          {/* Moon */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[370px] w-[370px]
              -translate-x-1/2 -translate-y-1/2
              animate-moon
            "
          >
            <span
              className="
                absolute left-1/2 top-0
                h-3 w-3
                -translate-x-1/2
                rounded-full
                bg-zinc-300
                shadow-[0_0_18px_rgba(255,255,255,0.8)]
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          flex min-h-screen
          w-[calc(100%-40px)]
          max-w-[1400px]
          flex-col
          py-8
          sm:w-[calc(100%-60px)]
          lg:py-10
        "
      >
        {/* =================================================
            TOP LINE
        ================================================== */}

        <div
          className={`
            flex items-center justify-between
            border-b border-white/10
            pb-5
            transition-all duration-1000
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-white
                shadow-[0_0_12px_rgba(255,255,255,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-zinc-400
                sm:text-xs
              "
            >
              360° Media & Marketing
            </span>
          </div>

          <span className="text-[10px] tracking-[0.2em] text-zinc-600">
            EST. 2020
          </span>
        </div>

        {/* =================================================
            MAIN HERO
        ================================================== */}

        <div className="relative flex flex-1 items-center py-20">
          <div className="relative z-20 w-full">
            {/* Small Text */}
            <p
              className={`
                mb-6
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-zinc-500
                transition-all duration-1000 delay-200
                ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              // We build what matters
            </p>

            {/* Main Heading */}
            <h1
              className={`
                max-w-[1050px]
                text-[15vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                transition-all
                duration-[1200ms]
                ease-out
                sm:text-[12vw]
                md:text-[10vw]
                lg:text-[8vw]
                ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
              `}
            >
              <span className="block">We Build</span>

              <span className="block text-zinc-300">
                Brands That
              </span>

              <span
                className="
                  block
                  text-transparent
                  [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]
                "
              >
                Matter.
              </span>
            </h1>

            {/* =================================================
                BOTTOM CONTENT
            ================================================== */}

            <div
              className={`
                mt-12
                flex max-w-[950px]
                flex-col gap-8
                transition-all duration-1000 delay-500
                md:flex-row
                md:items-end
                md:justify-between
                ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >
              <p
                className="
                  max-w-[420px]
                  text-sm
                  leading-7
                  text-zinc-300
                  sm:text-base
                "
              >
                We combine creativity, strategy and technology to
                build brands that connect with people and create
                lasting impact.
              </p>

              <a
                href="#contact"
                className="
                  group
                  flex w-fit
                  items-center gap-6
                  rounded-full
                  border border-white/20
                  px-5 py-3
                  text-sm text-white
                  transition-all duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                <span>Start a Project</span>

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-white/10
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:bg-black/10
                  "
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM LABELS
        ================================================== */}

        <div
          className={`
            flex items-center gap-3
            text-[9px]
            tracking-[0.25em]
            text-zinc-500
            transition-all duration-1000 delay-700
            sm:text-[10px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span>CREATIVITY</span>

          <span className="h-px w-7 bg-white/10" />

          <span>STRATEGY</span>

          <span className="h-px w-7 bg-white/10" />

          <span>IMPACT</span>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(0) rotate(-25deg);
            opacity: 0;
          }

          5% {
            opacity: 0.7;
          }

          15% {
            opacity: 0;
          }

          100% {
            transform: translateX(125vw) rotate(-25deg);
            opacity: 0;
          }
        }

        @keyframes shootingSlow {
          0% {
            transform: translateX(0) rotate(-25deg);
            opacity: 0;
          }

          5% {
            opacity: 0.5;
          }

          15% {
            opacity: 0;
          }

          100% {
            transform: translateX(125vw) rotate(-25deg);
            opacity: 0;
          }
        }

        @keyframes planet {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-14px);
          }
        }

        @keyframes surface {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(-20deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(340deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(55deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(-305deg);
          }
        }

        @keyframes moon {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-shooting {
          animation: shooting 9s linear infinite;
        }

        .animate-shooting-slow {
          animation: shootingSlow 14s linear infinite 4s;
        }

        .animate-planet {
          animation: planet 7s ease-in-out infinite;
        }

        .animate-surface {
          animation: surface 25s linear infinite;
        }

        .animate-orbit {
          animation: orbit 18s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbitReverse 22s linear infinite;
        }

        .animate-moon {
          animation: moon 14s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;