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
    <section className="relative overflow-hidden bg-[#0b0b0b] px-4 py-20 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
            bg-orange-400/[0.035]
            blur-[150px]
          "
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-12 max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
          Trusted Partners
        </p>

        <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Trusted By{" "}
          <span className="font-serif italic text-[#ff9b83]">
            245+ Big Companies
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
          We have helped ambitious brands build better digital experiences
          and grow their businesses.
        </p>

      </div>

      {/* Logo Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1350px]
          overflow-hidden
          rounded-[24px]
          border
          border-white/[0.08]
          bg-white/[0.025]
          shadow-2xl
          shadow-black/20
        "
      >

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {companies.map((logo, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                h-[135px]
                items-center
                justify-center
                overflow-hidden
                border-b
                border-r
                border-white/[0.07]
                px-6
                py-8
                transition-all
                duration-500
                hover:bg-white/[0.045]
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-24
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/[0.04]
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Logo */}
              <img
                src={logo}
                alt={`Trusted company ${index + 1}`}
                loading="lazy"
                className="
                  relative
                  z-10
                  max-h-[58px]
                  max-w-[155px]
                  w-auto
                  object-contain
                  grayscale
                  opacity-50
                  transition-all
                  duration-500
                  ease-out
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default TrustedCompanies;