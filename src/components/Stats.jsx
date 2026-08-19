import React from "react";

const stats = [
  ["200+", "BRAND", 90],
  ["4+", "AWARDS WON", 91],
  ["250+", "AVG. GROWTH DELIVERED", 80],
  ["7Y+", "EXPERIENCE IN THE DIGITAL ECOSYTEM", 95],
];

const Stats = () => {
  return (
    <section className="bg-[#0b0b0b] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

        {stats.map(([number, label, percentage]) => (
          <div
            key={label}
            className="group border-t border-white/20 pt-6"
          >

            {/* Number */}
            <div className="text-5xl font-black md:text-7xl">
              {number}
            </div>

            {/* Label */}
            <div className="mt-3 min-h-[40px] text-sm uppercase tracking-widest text-gray-500">
              {label}
            </div>

            {/* Percentage */}
            <div className="mt-8">

              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-600">
                  Performance
                </span>

                <span className="text-sm text-gray-400">
                  {percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-[4px] w-full overflow-hidden rounded-full bg-gray-800">

                <div
                  className="h-full rounded-full bg-gray-400 transition-all duration-1000 ease-out group-hover:bg-white"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;