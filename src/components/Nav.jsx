import React, { useState } from "react";
import { FaArrowRightLong, FaBars, FaXmark } from "react-icons/fa6";

export default function Nav() {
  const [menuBar, setMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-2xl font-bold text-gray-900">Gen-Z</p>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8 font-semibold text-gray-700">
          <a className="hover:text-amber-500 transition" href="#home">
            Home
          </a>
          <a className="hover:text-amber-500 transition" href="#about">
            About
          </a>
          <a className="hover:text-amber-500 transition" href="#career">
            Career
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <button className="flex items-center gap-2 px-6 py-2 bg-amber-400 text-black font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition duration-200">
            Contact Us
            <FaArrowRightLong />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden text-2xl cursor-pointer">
          {menuBar ? (
            <FaXmark onClick={() => setMenu(false)} />
          ) : (
            <FaBars onClick={() => setMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuBar && (
        <div className="sm:hidden fixed top-0 right-0 w-64 h-screen bg-white shadow-2xl flex flex-col items-center justify-center gap-8 text-xl font-semibold">

          <a onClick={() => setMenu(false)} href="#home">
            Home
          </a>

          <a onClick={() => setMenu(false)} href="#about">
            About
          </a>

          <a onClick={() => setMenu(false)} href="#career">
            Career
          </a>

          <button
            onClick={() => setMenu(false)}
            className="flex items-center gap-2 px-6 py-3 bg-amber-400 rounded-full shadow-md hover:bg-amber-500 transition"
          >
            Contact Us
            <FaArrowRightLong />
          </button>
        </div>
      )}
    </nav>
  );
}