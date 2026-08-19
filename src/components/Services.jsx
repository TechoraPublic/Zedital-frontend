import React from "react";
import ServiceCards from "./ServiceCards";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Build a powerful brand identity and strategy that connects with your audience.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Grow your business with data-driven digital marketing campaigns.",
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Create engaging social media content that makes your brand stand out.",
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Creative videos, graphics and campaigns designed to tell your story.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#111111] px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

      <div className="mb-16 text-center">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          // What We Do
        </p>

        <h2 className="text-5xl font-black leading-[0.9] tracking-tight md:text-5xl lg:text-7xl">
          Best Features, Best With Relations
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores, hic voluptatibus! Facilis ad eum sed nobis inventore
          culpa rem deleniti!
        </p>
        <ServiceCards />
          
      </div>   
      </div>
    </section>
  );
};

export default Services;