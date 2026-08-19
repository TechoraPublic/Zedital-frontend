import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

        <div className="text-2xl font-black">
          ZEDITAL.
        </div>

        <div className="text-sm text-gray-500">
          © 2026 Zedital. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm">

          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>

          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>

          <a href="#" className="hover:text-gray-400">
            Behance
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;