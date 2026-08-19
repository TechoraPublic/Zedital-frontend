import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        <a
          href="#"
          className="text-2xl font-black tracking-tighter"
        >
          ZEDITAL<span className="text-gray-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition hover:text-gray-400"
          >
            About
          </a>

          <a
            href="#services"
            className="transition hover:text-gray-400"
          >
            Services
          </a>

          <a
            href="#process"
            className="transition hover:text-gray-400"
          >
            Process
          </a>

          <a
            href="#work"
            className="transition hover:text-gray-400"
          >
            Work
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white px-5 py-3 text-sm transition hover:bg-white hover:text-black"
        >
          Contact Us ↗
        </a>

      </div>
    </nav>
  );
};

export default Navbar;