import React from 'react'
import {assets} from "../assets/assets.js"

export default function Hero() {
  return (

    //parent div for new section to consume all the contents...
    <div className='w-full py-40 border-0'>
        <div className="container mx-auto px-6 ">

        <div className='flex items-center justify-center gap-6 w-auto mx-auto bg-amber-400 py-2 pl-2 rounded-full md:w-[25%]'>

        <div className='flex items-center -space-x-3 '>
            <img className='w-10 h-10 rounded-full object-cover object-center' src={assets.profile1Img} alt="" /> 
            <img className='w-10 h-10 rounded-full object-cover object-center' src={assets.profile2Img} alt="" /> 
            <img className='w-10 h-10 rounded-full object-cover object-center' src={assets.profile3Img} alt="" /> 
            <img className='w-10 h-10 rounded-full object-cover object-center' src={assets.profile4Img} alt="" /> 
        </div>
        <span>Trusted by 10k+ clients</span>
</div>

{/* Paragraph */}
<h1 className='text-center text-black/50 text-4xl mb-8 sm:text-5xl md:text-6xl lg:text-7xl'>
  We Grow brands with
  <br />
  <span className='text-amber-300'>performance</span> strategy
</h1>

{/* paragraph */}
<p className='text-center max-w-xl mx-auto font-semibold mb-8'>
  we take pride that deliver the products which contains Creativity, Strategy, and technology.
</p>

{/* Buttons -> 2 */}
<div className='flex items-center justify-center gap-8'>
  <button className='p-3 bg-amber-300 rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer'>
    Contact us
  </button>

  <button className='p-3 bg-cyan-950 text-white rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer'>
    Feedback
  </button>
</div>

        <div className='mt-15 mx-w-5xl mx-auto shadow-overflow-hidden rounded-2xl'>
            <img className='w-full h-full object-center' src={assets.heroImg} alt="" />
        </div>

        </div>

      
    </div>
  )
}
