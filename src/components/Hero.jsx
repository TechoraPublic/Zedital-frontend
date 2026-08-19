import React from "react";

const stars = [
  { x: "5%", y: "15%", s: 2, d: "0s" },
  { x: "11%", y: "72%", s: 1, d: "1s" },
  { x: "18%", y: "35%", s: 2, d: "2s" },
  { x: "26%", y: "82%", s: 1, d: "0.5s" },
  { x: "35%", y: "18%", s: 2, d: "1.5s" },
  { x: "44%", y: "65%", s: 1, d: "2s" },
  { x: "53%", y: "28%", s: 2, d: "0.5s" },
  { x: "63%", y: "78%", s: 1, d: "1.8s" },
  { x: "73%", y: "12%", s: 2, d: "2.5s" },
  { x: "82%", y: "48%", s: 1, d: "1s" },
  { x: "92%", y: "25%", s: 2, d: "2s" },
  { x: "8%", y: "48%", s: 1, d: "3s" },
  { x: "31%", y: "52%", s: 1, d: "1.2s" },
  { x: "58%", y: "50%", s: 1, d: "2.5s" },
  { x: "88%", y: "68%", s: 1, d: "0.8s" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111315] text-white">

      {/* =====================================================
          FIXED UNIVERSE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#111315]">

        {/* Main glow */}
        <div
          className="
            absolute
            left-[55%]
            top-[40%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.02]
            blur-[120px]
          "
        />

        {/* Stars */}
        {stars.map((star, index) => (
          <span
            key={index}
            className="
              absolute
              rounded-full
              bg-white
              animate-pulse
              shadow-[0_0_10px_rgba(255,255,255,0.6)]
            "
            style={{
              left: star.x,
              top: star.y,
              width: `${star.s}px`,
              height: `${star.s}px`,
              animationDelay: star.d,
            }}
          />
        ))}

        {/* Extra tiny stars */}
        <div className="absolute inset-0 opacity-30">
          <span className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[48%] top-[12%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[70%] top-[62%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[30%] top-[70%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[95%] top-[80%] h-1 w-1 rounded-full bg-white" />
        </div>

        {/* Shooting star */}
        <span
          className="
            absolute
            left-[-120px]
            top-[25%]
            h-px
            w-28
            rotate-[-25deg]
            bg-gradient-to-r
            from-transparent
            via-white/60
            to-transparent
            animate-[shooting_9s_linear_infinite]
          "
        />

        <span
          className="
            absolute
            left-[-120px]
            top-[70%]
            h-px
            w-20
            rotate-[-25deg]
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            animate-[shooting_14s_linear_infinite_4s]
          "
        />

        {/* =================================================
            PLANET
        ================================================== */}

        <div
          className="
            absolute
            right-[-100px]
            top-1/2
            hidden
            h-[500px]
            w-[500px]
            -translate-y-1/2
            lg:block
          "
        >

          {/* Orbit 1 */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[150px]
              w-[440px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[-22deg]
              rounded-[50%]
              border
              border-white/[0.10]
              animate-[orbit_18s_linear_infinite]
            "
          />

          {/* Orbit 2 */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[200px]
              w-[470px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[55deg]
              rounded-[50%]
              border
              border-white/[0.06]
              animate-[orbitReverse_22s_linear_infinite]
            "
          />

          {/* Planet glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.035]
              blur-[35px]
            "
          />

          {/* Planet */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle_at_30%_25%,#f1f1f1_0%,#b7b7b7_25%,#747474_52%,#3b3b3b_75%,#191919_100%)]
              shadow-[inset_-40px_-25px_55px_rgba(0,0,0,0.55),0_0_70px_rgba(255,255,255,0.07)]
              animate-[planetFloat_7s_ease-in-out_infinite]
            "
          >

            {/* Planet surface */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                opacity-30
                bg-[radial-gradient(ellipse_at_25%_35%,transparent_0_18px,rgba(20,20,20,.35)_20px,transparent_25px),radial-gradient(ellipse_at_65%_25%,transparent_0_14px,rgba(20,20,20,.3)_17px,transparent_22px),radial-gradient(ellipse_at_55%_70%,transparent_0_25px,rgba(20,20,20,.3)_28px,transparent_35px)]
                animate-[surfaceRotate_25s_linear_infinite]
              "
            />

            {/* Atmosphere */}
            <div
              className="
                absolute
                -inset-2
                rounded-full
                border
                border-white/10
                shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            />

          </div>

          {/* Moon */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              animate-[moonOrbit_14s_linear_infinite]
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-0
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-zinc-300
                shadow-[0_0_15px_rgba(255,255,255,0.7)]
              "
            />
          </div>

        </div>

      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-[calc(100%-40px)] max-w-[1400px] flex-col py-8 sm:w-[calc(100%-60px)] lg:py-10">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">

          <div className="flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-white
                shadow-[0_0_10px_rgba(255,255,255,0.8)]
              "
            />

            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 sm:text-xs">
              360° Media & Marketing
            </span>

          </div>

          <span className="text-[10px] tracking-[0.2em] text-zinc-600">
            EST. 2020
          </span>

        </div>

        {/* Main */}
        <div className="relative flex flex-1 items-center py-20">

          <div className="relative z-20 w-full">

            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              // We build what matters
            </p>

            <h1
              className="
                max-w-[1050px]
                text-[15vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                sm:text-[12vw]
                md:text-[10vw]
                lg:text-[8vw]
              "
            >
              We Build
              <br />

              <span className="text-zinc-300">
                Brands That
              </span>

              <br />

              <span
                className="
                  text-transparent
                  [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]
                "
              >
                Matter.
              </span>
            </h1>

            {/* Bottom */}
            <div
              className="
                mt-12
                flex
                max-w-[950px]
                flex-col
                gap-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <p className="max-w-[420px] text-sm leading-7 text-zinc-300 sm:text-base">
                We combine creativity, strategy and technology to build
                brands that connect with people and create lasting impact.
              </p>

              <a
                href="#contact"
                className="
                  group
                  flex
                  w-fit
                  cursor-pointer
                  items-center
                  gap-6
                  rounded-full
                  border
                  border-white/20
                  px-5
                  py-3
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                <span>Start a Project</span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
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

        {/* Bottom labels */}
        <div className="flex items-center gap-3 text-[9px] tracking-[0.25em] text-zinc-500 sm:text-[10px]">

          <span>CREATIVITY</span>

          <span className="h-px w-7 bg-white/10" />

          <span>STRATEGY</span>

          <span className="h-px w-7 bg-white/10" />

          <span>IMPACT</span>

        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes shooting {
            0% {
              transform: translateX(0) rotate(-25deg);
              opacity: 0;
            }

            5% {
              opacity: 0.6;
            }

            15% {
              opacity: 0;
            }

            100% {
              transform: translateX(125vw) rotate(-25deg);
              opacity: 0;
            }
          }

          @keyframes planetFloat {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0);
            }

            50% {
              transform: translate(-50%, -50%) translateY(-12px);
            }
          }

          @keyframes surfaceRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes orbit {
            from {
              transform: translate(-50%, -50%) rotate(-22deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(338deg);
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

          @keyframes moonOrbit {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}
      </style>

    </section>
  );
};

export default Hero;