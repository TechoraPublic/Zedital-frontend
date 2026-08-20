import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#"
          className="flex h-full items-center"
        >
          <img
            src={logo}
            alt="Zedital Media"
            className="
              block
              h-auto
              w-auto
              max-h-[42px]
              max-w-[180px]
              object-contain
            "
          />
        </a>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition duration-300 hover:text-gray-400"
          >
            About
          </a>

          <a
            href="#services"
            className="transition duration-300 hover:text-gray-400"
          >
            Services
          </a>

          <a
            href="#process"
            className="transition duration-300 hover:text-gray-400"
          >
            Process
          </a>

          <a
            href="#work"
            className="transition duration-300 hover:text-gray-400"
          >
            Work
          </a>
        </div>

        {/* CONTACT */}
        <a
          href="#contact"
          className="
            rounded-full
            border
            border-white
            px-5
            py-3
            text-sm
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Contact Us →
        </a>

      </div>
    </nav>
  );
};

export default Navbar;