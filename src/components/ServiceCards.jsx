import React, { useState } from "react";

const ServiceCards = ({ services }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="grid gap-5 md:grid-cols-2">

      {services.map((service, index) => {

        const isActive = active === index;

        return (
          <article
            key={service.number}
            className={`
              group
              relative
              min-h-[360px]
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.02]
              p-7
              transition-all
              duration-700
              md:p-9

              hover:-translate-y-1
              hover:border-white/25

              ${
                isActive
                  ? "border-white/25"
                  : ""
              }
            `}
          >

            {/* =========================
                GLOW
            ========================== */}

            <div
              className={`
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-white/[0.035]
                blur-3xl
                transition-all
                duration-700

                ${
                  isActive
                    ? "scale-125 bg-white/[0.07]"
                    : "group-hover:scale-110"
                }
              `}
            />

            {/* =========================
                NUMBER + ICON
            ========================== */}

            <div className="relative z-10 flex items-start justify-between">

              <span className="text-xs tracking-[0.3em] text-gray-600">
                {service.number}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActive(isActive ? null : index)
                }
                aria-label={`Open ${service.title}`}
                className={`
                  flex
                  h-12
                  w-12
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-xl
                  text-gray-500
                  transition-all
                  duration-500

                  hover:border-white/40
                  hover:bg-white
                  hover:text-black

                  ${
                    isActive
                      ? "rotate-45 bg-white text-black"
                      : ""
                  }
                `}
              >
                +
              </button>

            </div>

            {/* =========================
                TITLE
            ========================== */}

            <div className="relative z-10 mt-24">

              <h3
                className="
                  text-3xl
                  font-medium
                  tracking-[-0.045em]
                  text-white
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  md:text-4xl
                "
              >
                {service.title}
              </h3>

            </div>

            {/* =========================
                DESCRIPTION
            ========================== */}

            <div
              className={`
                relative
                z-10
                overflow-hidden
                transition-all
                duration-700

                ${
                  isActive
                    ? "mt-6 max-h-32 opacity-100"
                    : "mt-0 max-h-0 opacity-0"
                }
              `}
            >

              <p className="max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                {service.description}
              </p>

            </div>

            {/* =========================
                LEARN MORE
            ========================== */}

            <button
              type="button"
              onClick={() =>
                setActive(isActive ? null : index)
              }
              className="
                group/learn
                absolute
                bottom-8
                left-7
                flex
                cursor-pointer
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.25em]
                text-gray-500
                transition-colors
                duration-300

                hover:text-white

                md:left-9
              "
            >

              <span>
                {isActive ? "Close" : "Learn More"}
              </span>

              <span
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover/learn:translate-x-1
                "
              >
                →
              </span>

            </button>

            {/* =========================
                CARD INDEX
            ========================== */}

            <span
              className="
                absolute
                bottom-8
                right-7
                text-[10px]
                tracking-[0.3em]
                text-gray-700
                md:right-9
              "
            >
              0{index + 1}
            </span>

          </article>
        );
      })}

    </div>
  );
};

export default ServiceCards;