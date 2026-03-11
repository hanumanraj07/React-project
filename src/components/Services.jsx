import React from "react";
import { services } from "../assets/assets";

export default function Services() {

  const Icon1 = services[0].icon;
  const Icon2 = services[1].icon;
  const Icon3 = services[2].icon;
  const Icon4 = services[3].icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Services
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We provide high quality digital solutions that help businesses
            grow faster and perform better online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Service 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group">

            <div className="w-14 h-14 flex items-center justify-center bg-amber-100 text-amber-500 rounded-xl mb-6 group-hover:bg-amber-400 group-hover:text-white transition">
              <Icon1 size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {services[0].title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {services[0].description}
            </p>

          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group">

            <div className="w-14 h-14 flex items-center justify-center bg-amber-100 text-amber-500 rounded-xl mb-6 group-hover:bg-amber-400 group-hover:text-white transition">
              <Icon2 size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {services[1].title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {services[1].description}
            </p>

          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group">

            <div className="w-14 h-14 flex items-center justify-center bg-amber-100 text-amber-500 rounded-xl mb-6 group-hover:bg-amber-400 group-hover:text-white transition">
              <Icon3 size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {services[2].title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {services[2].description}
            </p>

          </div>

          {/* Service 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group">

            <div className="w-14 h-14 flex items-center justify-center bg-amber-100 text-amber-500 rounded-xl mb-6 group-hover:bg-amber-400 group-hover:text-white transition">
              <Icon4 size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {services[3].title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {services[3].description}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}