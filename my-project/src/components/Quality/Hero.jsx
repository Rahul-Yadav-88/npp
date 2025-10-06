import React from 'react'

function Hero() {
  return (
    <div className='h-[55vh] w-full border-2 bg-[url(public/herobackground.png)] bg-cover bg-center relative'>
      {/* Grey overlay */}
      <div className='absolute inset-0 bg-gray-600 opacity-50'></div>
      
      {/* Content */}
      <div className='relative min-h-[fit-content] w-[80%] m-auto my-[7%]'>
        <h1 className='text-2xl text-center text-white font-sans font-bold md:text-4xl text-opacity-100'>
          Quality is Our Promise
        </h1>
        <h4 className='text-1xl text-center text-white font-sans font-bold tracking-wide md:text-2xl text-opacity-100 mt-7'>
          At Neelam print O pack, Quality is bridging our hard work and customer's trust
        </h4>
      </div>
    </div>
  )
}

export default Hero