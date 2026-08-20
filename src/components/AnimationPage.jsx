import React, { useEffect, useState } from "react";

const AnimationPage = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Faster intro
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1100);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 1700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[99999]
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#111315]

        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          exiting
            ? "pointer-events-none scale-[1.025] opacity-0 blur-[2px]"
            : "scale-100 opacity-100 blur-0"
        }
      `}
    >
      {/* =========================================
          LOADER
      ========================================== */}

      <div
        className="
          relative
          h-[180px]
          w-[180px]
          shrink-0
          overflow-hidden
          rounded-full

          bg-[radial-gradient(
            circle,
            rgba(255,255,255,0.05)_30%,
            transparent_70%
          )]
        "
      >
        {/* Outer Circle */}

        <div
          className="
            absolute
            inset-0
            rounded-full

            border-[4px]
            border-transparent
            border-t-white/[0.65]

            animate-loader-spin
          "
        />

        {/* Rotating Glow */}

        <div
          className="
            absolute
            inset-[10%]
            rounded-full

            bg-[conic-gradient(
              from_90deg,
              rgba(255,255,255,0.22),
              transparent
            )]

            blur-[2px]

            animate-loader-spin-reverse
          "
        />

        {/* Center */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[28px]
            w-[28px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-white

            shadow-[0_0_20px_rgba(255,255,255,0.7)]

            animate-loader-pulse
          "
        />

        {/* =====================================
            ORBIT
        ====================================== */}

        <div
          className="
            absolute
            inset-0

            animate-orbit-rotate
          "
        >
          {/* Dot 1 */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[7px]
              w-[7px]

              rounded-full
              bg-white

              shadow-[0_0_10px_rgba(255,255,255,0.6)]

              [transform:rotate(0deg)_translate(55px)]
            "
          />

          {/* Dot 2 */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[7px]
              w-[7px]

              rounded-full
              bg-white

              shadow-[0_0_10px_rgba(255,255,255,0.6)]

              [transform:rotate(90deg)_translate(55px)]
            "
          />

          {/* Dot 3 */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[7px]
              w-[7px]

              rounded-full
              bg-white

              shadow-[0_0_10px_rgba(255,255,255,0.6)]

              [transform:rotate(180deg)_translate(55px)]
            "
          />

          {/* Dot 4 */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[7px]
              w-[7px]

              rounded-full
              bg-white

              shadow-[0_0_10px_rgba(255,255,255,0.6)]

              [transform:rotate(270deg)_translate(55px)]
            "
          />
        </div>
      </div>

      {/* =========================================
          ZEDITAL MEDIA
      ========================================== */}

      <div
        className={`
          mt-8
          text-center

          transition-all
          duration-700
          ease-out

          ${
            exiting
              ? "translate-y-[-8px] opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <h1
          className="
            text-[clamp(32px,5vw,72px)]
            font-black
            uppercase
            leading-none
            tracking-[-0.07em]
          "
        >
          <span className="text-white">
            ZEDITAL
          </span>

          <span
            className="
              ml-2
              text-transparent
              [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]
            "
          >
            MEDIA
          </span>
        </h1>

        {/* Small line */}

        <div className="mx-auto mt-4 h-px w-16 bg-white/20" />
      </div>

      {/* =========================================
          ANIMATIONS
      ========================================== */}

      <style>{`

        @keyframes loader-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-spin-reverse {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes loader-pulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.18);
          }
        }

        @keyframes orbit-rotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-loader-spin {
          animation:
            loader-spin
            1.2s
            linear
            infinite;
        }

        .animate-loader-spin-reverse {
          animation:
            loader-spin-reverse
            0.9s
            linear
            infinite;
        }

        .animate-loader-pulse {
          animation:
            loader-pulse
            0.7s
            ease-in-out
            infinite;
        }

        .animate-orbit-rotate {
          animation:
            orbit-rotate
            1.7s
            linear
            infinite;
        }

      `}</style>
    </div>
  );
};

export default AnimationPage;