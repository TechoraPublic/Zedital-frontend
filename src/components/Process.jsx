import React from "react";

const process = [
  ["01", "DISCOVER", "We understand your business, audience and goals."],
  ["02", "STRATEGIZE", "We create a customized strategy for your brand."],
  ["03", "CREATE", "Our creative team turns ideas into powerful content."],
  ["04", "GROW", "We measure results and continuously improve."],
];

const Process = () => {
  return (
    <section id="process" className="px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          // How We Work
        </p>

        <h2 className="mb-20 text-5xl font-black md:text-8xl">
          Our
          <br />
          Process<span className="text-gray-600">.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {process.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/15 p-8 transition duration-500 hover:bg-white hover:text-black md:p-12"
            >

              <div className="mb-16 flex justify-between">
                <span>{number}</span>
                <span>↗</span>
              </div>

              <h3 className="mb-5 text-3xl font-bold">
                {title}
              </h3>

              <p className="text-gray-500">
                {description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;