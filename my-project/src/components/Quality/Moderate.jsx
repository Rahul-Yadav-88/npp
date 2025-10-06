import React, { useState, useEffect } from 'react';

function Moderate() {
  const imageList = [
    '/handanimation.png',
    '/machineanimation.png',
    '/toolanimation.png',
    '/mathematicsanimation.png',
    '/exportinganimation.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate only for lg (1024px) and up
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = imageList[currentIndex];

  return (
    <div className='min-h-screen w-full'>
      {/* Header */}
      <div className='h-auto lg:h-[32vh] w-[90%] md:w-[85%] lg:w-[70%] m-auto mt-7 px-4 md:px-0'>
        <h1 className='text-center font-sans font-bold text-2xl md:text-3xl lg:text-4xl'>
          <span className='text-[#2592AD]'>NEELAM</span> Print'<span className='text-red-500'>o</span>' Pack
        </h1>
        <h4 className='text-center font-sans mt-6 text-sm md:text-base leading-relaxed'>
          We are committed to manufacturing and supplying premium products in strict adherence to industry standards. Our quality assurance process ensures reliability, precision, and customer satisfaction.
        </h4>
      </div>

      <div className='w-[90%] md:w-[85%] lg:w-[70%] m-auto mt-12 md:mt-16 lg:mt-0 px-4 md:px-0'>
        <h2 className='text-center font-sans font-bold text-xl sm:text-2xl lg:text-3xl mb-8 lg:mb-0'>
          Multi-Stage Assurance
        </h2>

        {/* ✅ Circle animation for lg (1024px) and up only */}
        <div 
          id='animation-box' 
          className='hidden lg:block w-full h-[77vh] border-black border-2 rounded-t-full mt-12 relative border-b-0'
        >
          {/* Circle Buttons */}
          <button
            onClick={() => setCurrentIndex(0)}
            className={`h-[50px] w-[50px] absolute top-[95%] left-[-3%] border-2 rounded-full text-base font-semibold
              transition transform duration-300
              ${currentIndex === 0 ? 'bg-[#2592AD] text-white border-[#2592AD] scale-110' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110'}`}
          >1</button>

          <button
            onClick={() => setCurrentIndex(1)}
            className={`h-[50px] w-[50px] absolute top-[30%] left-[5%] xl:left-[8%] 2xl:left-[8%] border-2 rounded-full text-base font-semibold
              transition transform duration-300
              ${currentIndex === 1 ? 'bg-[#2592AD] text-white border-[#2592AD] scale-110' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110'}`}
          >2</button>

          <button
            onClick={() => setCurrentIndex(2)}
            className={`h-[50px] w-[50px] absolute top-[-7%] xl:top-[-4%] left-[47.5%] border-2 rounded-full text-base font-semibold
              transition transform duration-300
              ${currentIndex === 2 ? 'bg-[#2592AD] text-white border-[#2592AD] scale-110' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110'}`}
          >3</button>

          <button
            onClick={() => setCurrentIndex(3)}
            className={`h-[50px] w-[50px] absolute top-[30%] right-[5%] xl:right-[8%] 2xl:right-[8%] border-2 rounded-full text-base font-semibold
              transition transform duration-300
              ${currentIndex === 3 ? 'bg-[#2592AD] text-white border-[#2592AD] scale-110' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110'}`}
          >4</button>

          <button
            onClick={() => setCurrentIndex(4)}
            className={`h-[50px] w-[50px] absolute top-[95%] right-[-3%] border-2 rounded-full text-base font-semibold
              transition transform duration-300
              ${currentIndex === 4 ? 'bg-[#2592AD] text-white border-[#2592AD] scale-110' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110'}`}
          >5</button>

          {/* Rotating Image */}
          <div
            className='h-[50vh] w-[50%] absolute top-[30%] left-[25%] bg-contain bg-center bg-no-repeat transform transition duration-300 hover:scale-110'
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>

        {/* ✅ Grid view for screens below 1024px (lg) */}
        <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          {imageList.map((img, index) => (
            <div
              key={index}
              className='w-full h-[180px] sm:h-[200px] bg-contain bg-center bg-no-repeat border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* Final Quote */}
        <h1 className='text-center font-sans font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl mt-8 lg:mt-10 px-2 leading-relaxed'>
          "Quality is bridging our hardwork and
          <br className='hidden sm:block' />
          <span className='sm:hidden'> </span>
          customer's Trust"
        </h1>
      </div>
    </div>
  );
}

export default Moderate;