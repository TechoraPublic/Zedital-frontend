import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import founder from "../assets/founder.png";

const achievements = [
  {
    title: "YOUNGEST ENTREPRENEUR OF UTTARAKHAND",
    description: 'Conferred at the “Swarnim Awards”',
  },
  {
    title: "INNOVATIVE ENTREPRENEUR 2024",
    description: 'Conferred at the “Bharat Vibhushan Puraskar”',
  },
  {
    title: "TRAILBLAZER IN DIGITAL MARKETING SOLUTION",
    description:
      "Conferred at the Devbhoomi Rastriya Ratan Puraskar.",
  },
];

export default function FounderSection() {
  return (
    <section
      className="
        relative
        z-0
        overflow-hidden
        bg-transparent
        px-5
        py-12
        text-white
        sm:px-8
        lg:px-10
        lg:py-16
      "
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="border-b border-white/20 pb-8 lg:pb-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <h2 className="text-[42px] font-light leading-none tracking-[-2px] sm:text-5xl lg:text-[50px]">
              Meet Our{" "}
              <span className="font-medium text-white">
                Founder
              </span>
            </h2>

            <div className="flex items-center gap-8 lg:gap-16">

              {/* Decorative Arrow */}

              <div className="hidden w-[170px] lg:block">

                <svg
                  viewBox="0 0 180 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >

                  <path
                    d="M5 8C37 10 65 20 67 39C69 58 46 65 37 49C28 33 45 11 76 10C110 9 137 22 169 37"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M158 28L169 37L168 24"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>

              </div>

              {/* More About Us */}

              <a
                href="#about"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  border-b
                  border-white/60
                  pb-0.5
                  text-sm
                  text-white
                  transition-colors
                  duration-300
                  hover:text-gray-400
                "
              >
                More About Us

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            gap-12
            pt-16
            lg:grid-cols-[minmax(360px,0.9fr)_minmax(500px,1.2fr)]
            lg:gap-20
            lg:pt-20
          "
        >

          {/* ================= LEFT COLUMN ================= */}

          <div className="lg:sticky lg:top-10 lg:self-start">

            {/* Founder Details */}

            <div className="mb-6">

              <h3 className="text-[15px] font-semibold text-white">
                Mohammad Zaid Khan
              </h3>

              <p className="mt-1 max-w-[360px] text-[15px] leading-6 text-white/60">
                Founder and CEO of Zedital Media Pvt. Ltd. &{" "}
                <br className="hidden sm:block" />
                BillionEdge Technologies Pvt Ltd
              </p>

            </div>

            {/* Social Buttons */}

            <div className="mb-5 flex gap-2">

              {/* Instagram */}

              <a
                href="#instagram"
                aria-label="Instagram"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-transparent
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                <FaInstagram size={20} />
              </a>

              {/* LinkedIn */}

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-transparent
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                <FaLinkedinIn size={19} />
              </a>

            </div>

            {/* Founder Image */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[15px]
                border
                border-white/10
              "
            >

              <img
                src={founder}
                alt="Mohammad Zaid Khan"
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* Subtle Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                "
              />

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}

          <div id="about">

            {/* Bio */}

            <div
              className="
                max-w-[760px]
                text-[15px]
                leading-[1.65]
                text-white/70
              "
            >

              <p>
                <span className="text-white">
                  Mohammad Zaid Khan
                </span>{" "}
                – Serial Entrepreneur, Speaker, Marketing Evangelist and the
                driving force behind Zedital Media Pvt. Ltd.
              </p>

              <p className="mt-4">
                At just 21, Zaid has built more than a company—he’s built a
                vision. With a background in journalism, marketing, sales, and
                media production, he brings together creativity, strategy, and
                execution to help brands scale.
              </p>

              <p className="mt-4">
                His journey spans entrepreneurship, public speaking,
                consulting, and brand building—working with clients across
                India and abroad. Known as “The Wolf of Indian Street,” he
                believes in creating not just marketing campaigns, but
                movements that inspire growth, trust, and impact.
              </p>

              <p className="mt-5 text-white">
                <span className="italic">
                  “Marketing isn’t about selling—it’s about storytelling,
                  connection, and building legacies.”
                </span>{" "}
                – Md. Zaid Khan
              </p>

            </div>

            {/* ================= ACHIEVEMENTS ================= */}

            <div className="mt-12 space-y-7">

              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  {...achievement}
                  index={index}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ============================================
   ACHIEVEMENT CARD
============================================ */

function AchievementCard({
  title,
  description,
  index,
}) {
  return (
    <div
      className="
        group
        relative
        min-h-[170px]
        overflow-hidden
        border
        border-white/10
        bg-transparent
        px-8
        py-10
        transition-all
        duration-500
        hover:border-white/30
        hover:bg-white/[0.02]
        sm:px-14
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >

      {/* Number */}

      <span
        className="
          absolute
          right-5
          top-4
          text-xs
          text-white/20
          transition-colors
          duration-300
          group-hover:text-white/50
        "
      >
        0{index + 1}
      </span>

      <div className="flex h-full flex-col justify-center">

        {/* Achievement Title */}

        <div className="flex items-start gap-3">

          <FaTrophy
            size={17}
            className="mt-0.5 shrink-0 text-white/70"
          />

          <h4
            className="
              max-w-[550px]
              text-[15px]
              font-medium
              leading-5
              text-white
              sm:text-[16px]
            "
          >
            {title}
          </h4>

        </div>

        {/* Description */}

        <p className="mt-5 text-sm leading-5 text-white/50">
          {description}
        </p>

      </div>

      {/* Hover Line */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-white
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </div>
  );
}