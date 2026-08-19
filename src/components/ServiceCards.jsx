import React from "react";

import {
  Palette,
  TrendingUp,
  Users,
  Search,
  Video,
  Megaphone,
} from "lucide-react";

const serviceCards = [
  {
    title: "BRANDING & STRATEGY",
    description:
      "Create a magnetic identity that your audience can’t ignore.",
    icon: Palette,
  },
  {
    title: "PERFORMANCE MARKETING",
    description:
      "From Meta to Google, every ad is built to convert.",
    icon: TrendingUp,
  },
  {
    title: "INFLUENCER MARKETING",
    description:
      "Partner with creators who actually influence.",
    icon: Users,
  },
  {
    title: "SEO & ORM",
    description:
      "Be discovered. Stay trusted. Grow organically.",
    icon: Search,
  },
  {
    title: "CONTENT CREATION & UGC",
    description:
      "From viral reels to high-converting UGC campaigns.",
    icon: Video,
  },
  {
    title: "PR & MEDIA OUTREACH",
    description:
      "Get featured in top publications & channels that matter.",
    icon: Megaphone,
  },
];

const ServiceCards = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      {serviceCards.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="
              group relative min-h-[220px] overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-[#111111]
              p-7
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:border-white/30
              hover:bg-[#151515]
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)]
            "
          >

            {/* Subtle hover glow */}
            <div
              className="
                pointer-events-none
                absolute -right-20 -top-20
                h-40 w-40
                rounded-full
                bg-white/5
                blur-3xl
                opacity-0
                transition-opacity duration-700
                group-hover:opacity-100
              "
            />

            {/* Content */}
            <div className="relative z-10">

              <div className="flex items-start gap-5">

                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-[#222222]
                    text-gray-300
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:border-white/30
                    group-hover:bg-white
                    group-hover:text-black
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}
                <div>

                  <h3
                    className="
                      text-lg font-medium tracking-wide
                      transition-transform duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3 max-w-sm
                      text-sm leading-relaxed
                      text-gray-400
                      transition-colors duration-500
                      group-hover:text-gray-300
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </div>

            </div>

            {/* Learn More */}
            <button
              className="
                absolute bottom-7 left-7 right-7
                flex items-center justify-center gap-4
                rounded-full
                border border-white/10
                bg-white/10
                py-3
                text-sm
                text-gray-300
                transition-all duration-500
                group-hover:border-white
                group-hover:bg-white
                group-hover:text-black
              "
            >
              Learn More

              <span
                className="
                  transition-transform duration-500
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default ServiceCards;