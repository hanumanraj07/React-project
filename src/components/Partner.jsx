import React from 'react'
import { FaFacebook, FaWhatsapp, FaGoogle, FaTwitter, FaAmazon, FaApple, FaMicrosoft } from 'react-icons/fa6'

export default function Partner() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Trusted by our <span className="text-blue-600">Partners</span>
      </h1>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-6">

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaMicrosoft size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-green-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaWhatsapp size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaFacebook size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaTwitter size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-black hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaApple size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-orange-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaAmazon size={20}/>
        </div>

        <div className="w-14 h-14 flex items-center justify-center border rounded-full shadow-md hover:bg-red-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
          <FaGoogle size={20}/>
        </div>

      </div>

    </div>
  )
}