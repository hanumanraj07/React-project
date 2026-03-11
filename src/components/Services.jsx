import React from "react";
import { services } from "../assets/assets";

export default function Services() {

  const Icon1 = services[0].icon;
  const Icon2 = services[1].icon;
  const Icon3 = services[2].icon;
  const Icon4 = services[3].icon;

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-500 mt-3">
            We provide high quality digital solutions for your business
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
 
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Icon1 size={24} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {services[0].title}
            </h3>

            <p className="text-gray-500 text-sm">
              {services[0].description}
            </p>
          </div>
 
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Icon2 size={24} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {services[1].title}
            </h3>

            <p className="text-gray-500 text-sm">
              {services[1].description}
            </p>
          </div>
 
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Icon3 size={24} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {services[2].title}
            </h3>

            <p className="text-gray-500 text-sm">
              {services[2].description}
            </p>
          </div>
 
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Icon4 size={24} />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {services[3].title}
            </h3>

            <p className="text-gray-500 text-sm">
              {services[3].description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}