import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import aboutImage from "../assets/aboutImage.png";
import visionImage from "../assets/visionImage.png";
import missionImage from "../assets/missionImage.png";

/* =========================================================
   3D PARTICLES
========================================================= */

const ParticleField = ({ count = 30 }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.04;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.035;
  });

  const particles = Array.from({ length: count });

  return (
    <group ref={groupRef}>
      {particles.map((_, index) => {
        const angle = (index / count) * Math.PI * 2;
        const radius = 1.4 + (index % 6) * 0.35;

        return (
          <Float
            key={index}
            speed={0.5 + (index % 3) * 0.15}
            floatIntensity={0.25}
            rotationIntensity={0.15}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(index * 1.8) * 0.55,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry
                args={[0.018 + (index % 3) * 0.008, 8, 8]}
              />

              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.3 + (index % 3) * 0.08}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

/* =========================================================
   MINI UNIVERSE
========================================================= */

const MiniUniverse = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.3]}
    >
      <ParticleField />
    </Canvas>
  );
};

/* =========================================================
   INFO CARD
========================================================= */

const InfoCard = ({
  title,
  description,
  image,
  number,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <article
      onClick={() => setOpen((prev) => !prev)}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.09]
        bg-white/[0.035]
        backdrop-blur-[2px]
        transition-all
        duration-700
        ease-out
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.055]
        ${open ? "min-h-[350px]" : "min-h-[275px]"}
      `}
    >

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-white/[0.025]
          blur-[80px]
          transition-all
          duration-700
          group-hover:bg-white/[0.06]
        "
      />

      {/* 3D Particles */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-25
          transition-opacity
          duration-700
          group-hover:opacity-60
        "
      >
        <MiniUniverse />
      </div>

      {/* Card Gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.02]
          via-transparent
          to-black/[0.25]
        "
      />

      {/* Content */}

      <div className="relative z-10 p-7 md:p-8">

        <div className="flex items-start justify-between gap-6">

          <div>

            <span
              className="
                mb-3
                block
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              {number}
            </span>

            <h3
              className="
                text-2xl
                font-medium
                tracking-[-0.04em]
                text-white
                md:text-3xl
              "
            >
              {title}
            </h3>

          </div>

          {/* Arrow */}

          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-lg
              text-zinc-400
              transition-all
              duration-500
              group-hover:border-white/30
              group-hover:text-white
              ${
                open
                  ? "rotate-90 border-white bg-white text-black"
                  : ""
              }
            `}
          >
            →
          </div>

        </div>

        {/* Description */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-700
            ease-in-out
            ${
              open
                ? "mt-8 max-h-[180px] opacity-100"
                : "mt-5 max-h-[55px] opacity-70"
            }
          `}
        >
          <p
            className="
              max-w-[470px]
              text-sm
              leading-6
              text-zinc-300
              md:text-base
            "
          >
            {description}
          </p>
        </div>

      </div>

      {/* Image */}

      <div
        className={`
          absolute
          bottom-6
          right-6
          overflow-hidden
          rounded-[18px]
          border
          border-white/10
          transition-all
          duration-700
          ${
            open
              ? "h-[125px] w-[185px]"
              : "h-[100px] w-[150px]"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Bottom Indicator */}

      <div className="absolute bottom-7 left-7">

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-zinc-500
            transition-colors
            duration-300
            group-hover:text-zinc-300
          "
        >
          {open ? "Click to close" : "Click to explore"}
        </span>

      </div>

    </article>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  return (
    <section
      id="about"
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

      {/* =========================================
          NO SOLID BACKGROUND HERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.018]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-16">

          <div className="mb-8 flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-white
                shadow-[0_0_12px_rgba(255,255,255,0.5)]
              "
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-zinc-400
              "
            >
              About Us
            </span>

          </div>

          <div
            className="
              grid
              items-end
              gap-10
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >

            <h2
              className="
                text-[13vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                sm:text-[10vw]
                lg:text-[7vw]
              "
            >
              We Create

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-zinc-300
                  to-zinc-600
                  bg-clip-text
                  text-transparent
                "
              >
                Digital
              </span>

              <br />

              Impact
              <span className="text-zinc-600">.</span>
            </h2>

            <div className="max-w-[450px]">

              <p
                className="
                  text-sm
                  leading-7
                  text-zinc-300
                  md:text-base
                "
              >
                We help ambitious brands grow through creativity,
                strategy, technology, and meaningful storytelling.
                We turn ideas into digital experiences that people
                remember.
              </p>

              <div className="mt-6 flex items-center gap-4">

                <span className="h-px w-12 bg-white/25" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                  "
                >
                  Strategy × Creativity
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            SERVICE PILLS
        ========================================== */}

        <div className="mb-8 grid gap-3 sm:grid-cols-3">

          {[
            "Media",
            "Advertising",
            "Marketing",
          ].map((item) => (

            <div
              key={item}
              className="
                group
                flex
                h-14
                cursor-default
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.025]
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-white/[0.06]
              "
            >

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-[10px]
                  text-zinc-400
                  transition-all
                  duration-500
                  group-hover:border-white
                  group-hover:bg-white
                  group-hover:text-black
                "
              >
                ✓
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-zinc-300
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* =========================================
            IMAGE + CARDS
        ========================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >

          {/* Main Image */}

          <div
            className="
              group
              relative
              h-[420px]
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.09]
              bg-white/[0.02]
              sm:h-[500px]
              lg:h-[570px]
            "
          >

            <img
              src={aboutImage}
              alt="About Zedital Media"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/10
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                flex
                items-end
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/60
                  "
                >
                  ZEDITAL MEDIA
                </p>

                <p className="mt-2 text-sm text-white/90">
                  Building brands with purpose.
                </p>

              </div>

              <span className="text-xs text-white/40">
                01 / 03
              </span>

            </div>

          </div>

          {/* Cards */}

          <div className="flex flex-col gap-8">

            <InfoCard
              title="OUR VISION"
              number="01"
              image={visionImage}
              description="Our vision is to transform businesses into unforgettable brands by blending creativity with performance-driven strategies. We believe great brands should not simply be seen — they should be remembered."
            />

            <InfoCard
              title="OUR MISSION"
              number="02"
              image={missionImage}
              description="At Zedital Media, our mission is to bridge the gap between brands and people through strategies that not only sell, but connect, inspire and create meaningful experiences."
            />

          </div>

        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <div className="mt-14">

          <div className="flex items-center gap-5">

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Creativity
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Strategy
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Impact
            </span>

          </div>

          <p
            className="
              mt-8
              max-w-3xl
              text-2xl
              font-medium
              leading-tight
              tracking-[-0.04em]
              text-zinc-200
              md:text-4xl
            "
          >
            We don't just create campaigns.

            <span className="text-zinc-500">
              {" "}We create brands people remember.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;