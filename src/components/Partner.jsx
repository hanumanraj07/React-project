import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaGoogle,
  FaTwitter,
  FaAmazon,
  FaApple,
  FaMicrosoft,
} from "react-icons/fa6";

export default function Partner() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Trusted by our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Partners
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We collaborate with leading global companies to deliver
            innovative and reliable digital solutions.
          </p>
        </div>

        {/* Partners Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8">

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaMicrosoft size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-green-500 cursor-pointer">
            <FaWhatsapp size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaFacebook size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-sky-500 cursor-pointer">
            <FaTwitter size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-black cursor-pointer">
            <FaApple size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-orange-500 cursor-pointer">
            <FaAmazon size={24} />
          </div>

          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-gray-700 hover:text-red-500 cursor-pointer">
            <FaGoogle size={24} />
          </div>

        </div>

      </div>
    </section>
  );
}