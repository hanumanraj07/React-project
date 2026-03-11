import React from "react";
import { assets } from "../assets/assets.js";

export default function Hero() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Trusted badge */}
        <div className="flex items-center justify-center gap-4 w-fit mx-auto mb-10 bg-amber-100 px-5 py-2 rounded-full shadow-sm">
          
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={assets.profile1Img} alt="" />
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={assets.profile2Img} alt="" />
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={assets.profile3Img} alt="" />
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={assets.profile4Img} alt="" />
          </div>

          <span className="text-sm font-semibold text-gray-700">
            Trusted by 10k+ clients
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center font-bold text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
          We Grow Brands With
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Performance Strategy
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-lg mb-10">
          We take pride in delivering products that combine creativity,
          strategy, and technology to grow your business faster.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6 mb-16">

          <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition duration-200">
            Contact Us
          </button>

          <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-black hover:scale-105 transition duration-200">
            Feedback
          </button>

        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="w-full object-cover"
            src={assets.heroImg}
            alt="hero"
          />
        </div>

      </div>
    </section>
  );
}