import React from "react";

const Marquee = () => {
  const items = [
    "BOOST ONLINE PRESENCE",
    "CLICK INTO CUSTOMERS",
    "BUILD BRANDS THAT MATTER",
    "CREATE DIGITAL IMPACT",
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-transparent py-5">

      {/* Subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-20
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-3xl
        "
      />

      {/* Moving Track */}
      <div className="marquee-track relative flex w-max items-center">

        {/* First set */}
        <div className="flex items-center whitespace-nowrap">

          {items.map((item, index) => (
            <React.Fragment key={`first-${index}`}>

              <span
                className="
                  px-7
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-white
                  sm:text-sm
                "
              >
                {item}
              </span>

              <span
                className="
                  text-[11px]
                  text-zinc-500
                  transition-colors
                  duration-300
                  sm:text-xs
                "
              >
                ✦
              </span>

            </React.Fragment>
          ))}

        </div>

        {/* Second set */}
        <div className="flex items-center whitespace-nowrap">

          {items.map((item, index) => (
            <React.Fragment key={`second-${index}`}>

              <span
                className="
                  px-7
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-white
                  sm:text-sm
                "
              >
                {item}
              </span>

              <span
                className="
                  text-[11px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                ✦
              </span>

            </React.Fragment>
          ))}

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          .marquee-track {
            animation: marquee 28s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </section>
  );
};

export default Marquee;