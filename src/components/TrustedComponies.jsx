import React from "react";

import jiocinema from "../assets/jiocinema.png";
import satmola from "../assets/satmola.png";
import pw from "../assets/pw.png";
import genericAadhaar from "../assets/generic-aadhaar.png";
import ethicaInvest from "../assets/ethica-invest.png";

import maxLife from "../assets/max-life.png";
import sparx from "../assets/sparx.png";
import alcanes from "../assets/alcanes.png";
import novotel from "../assets/novotel.png";
import acko from "../assets/acko.png";

import tieDehradun from "../assets/tie-dehradun.png";
import curefit from "../assets/curefit.png";
import myntra from "../assets/myntra.png";
import vijayMechanic from "../assets/vijay-mechanic.png";

import gymcore from "../assets/gymcore.png";
import myfunded from "../assets/myfunded.png";
import grilledTown from "../assets/grilled-town.png";
import bigRock from "../assets/big-rock.png";
import nth from "../assets/nth.png";

import travyy from "../assets/travyy.png";
import ayurveda from "../assets/ayurveda.png";
import medix from "../assets/medix.png";
import bnbme from "../assets/bnbme.png";
import resagate from "../assets/resagate.png";

const companies = [
  jiocinema,
  satmola,
  pw,
  genericAadhaar,
  ethicaInvest,
  maxLife,
  sparx,
  alcanes,
  novotel,
  acko,
  tieDehradun,
  curefit,
  myntra,
  vijayMechanic,
  gymcore,
  myfunded,
  grilledTown,
  bigRock,
  nth,
  travyy,
  ayurveda,
  medix,
  bnbme,
  resagate,
];

const TrustedCompanies = () => {
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

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[150px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================== */}

        <div
          className="
            mb-16
            grid
            gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end
          "
        >

          {/* LEFT */}

          <div>

            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-white
                  shadow-[0_0_14px_rgba(255,255,255,0.5)]
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
                Trusted Partners
              </span>

            </div>

            <h2
              className="
                text-[12vw]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.07em]
                sm:text-[9vw]
                lg:text-[6.5vw]
              "
            >
              Trusted By

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
                Big Brands
              </span>

              <span className="text-gray-500">.</span>
            </h2>

          </div>

          {/* RIGHT */}

          <div className="max-w-[440px]">

            <p
              className="
                text-base
                leading-7
                text-gray-300
                md:text-lg
              "
            >
              From ambitious startups to established companies, we
              partner with brands to create meaningful digital
              experiences and measurable growth.
            </p>

            <div className="mt-7 flex items-center gap-4">

              <span className="h-px w-12 bg-white/20" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-400
                "
              >
                245+ Brands
              </span>

            </div>

          </div>

        </div>

        {/* =========================================
            COMPANY GRID
        ========================================== */}

        <div
          className="
            rounded-[30px]
            border
            border-white/[0.10]
            bg-white/[0.018]
            p-2
            shadow-2xl
            shadow-black/20
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >

            {companies.map((logo, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  flex
                  h-[145px]
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-6
                  py-8
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-white/[0.055]
                "
              >

                {/* =================================
                    HOVER GLOW
                ================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-32
                    w-40
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/[0.05]
                    opacity-0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:opacity-100
                  "
                />

                {/* =================================
                    TOP LINE
                ================================== */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-4
                    h-px
                    bg-white/[0.06]
                    transition-all
                    duration-500
                    group-hover:bg-white/10
                  "
                />

                {/* =================================
                    LOGO
                    ORIGINAL COLORS
                ================================== */}

                <img
                  src={logo}
                  alt={`Trusted company ${index + 1}`}
                  loading="lazy"
                  className="
                    relative
                    z-10
                    h-auto
                    max-h-[62px]
                    w-auto
                    max-w-[165px]
                    object-contain
                    opacity-100
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.25]
                  "
                />

                {/* =================================
                    NUMBER
                ================================== */}

                <span
                  className="
                    absolute
                    bottom-4
                    right-5
                    text-[9px]
                    tracking-[0.25em]
                    text-gray-600
                    transition-colors
                    duration-500
                    group-hover:text-gray-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* =========================================
            BOTTOM LINE
        ========================================== */}

        <div className="mt-10 flex items-center gap-5">

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-gray-400
            "
          >
            Collaboration
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
            Trust
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

        </div>

      </div>

    </section>
  );
};

export default TrustedCompanies;