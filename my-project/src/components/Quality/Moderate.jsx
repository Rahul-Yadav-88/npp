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

  // Auto-rotate only for md and up
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = imageList[currentIndex];

  return (
    <div className='min-h-screen w-full '>
      {/* Header */}
      <div className='h-[40vh] w-[70%] m-auto mt-7'>
        <h1 className='text-center font-sans font-bold text-2xl md:text-4xl'>
          <span className='text-[#2592AD]'>NEELAM</span> Print'<span className='text-red-500'>o</span>' Pack
        </h1>
        <h4 className='text-center font-sans mt-6'>
          We are committed to manufacturing and supplying premium products in strict adherence to industry standards. Our quality assurance process ensures reliability, precision, and customer satisfaction.
        </h4>
      </div>

      <div className='w-[70%] m-auto  mt-[20%] md:mt-0 '>
      <h2 className='text-center font-sans font-bold text-2xl md:text-3xl'>Multi-Stage Assurance</h2>
        {/* ✅ Circle animation for md and lg only */}
        <div id='animation-box' className='hidden md:block w-full h-[77vh] border-black border-2 rounded-t-full mt-12 relative border-b-0 '>
          {/* Circle Buttons */}
          <button
            onClick={() => setCurrentIndex(0)}
            className={`h-[50px] w-[50px] absolute top-[90%] left-[-3%] border-2 rounded-full leading-[2.1rem]
              px-4 py-2 transition transform duration-300
              ${currentIndex === 0 ? 'bg-[#2592AD] text-white border-[#2592AD]' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-0 hover:scale-110'}`}
          >1</button>

          <button
            onClick={() => setCurrentIndex(1)}
            className={`h-[50px] w-[50px] absolute top-[27%] lg:left-[10%] md:left-[6%] border-2 rounded-full leading-[2.1rem]
              px-4 py-2 transition transform duration-300
              ${currentIndex === 1 ? 'bg-[#2592AD] text-white border-[#2592AD]' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-0 hover:scale-110'}`}
          >2</button>

          <button
            onClick={() => setCurrentIndex(2)}
            className={`h-[50px] w-[50px] absolute top-[-7%] left-[47.5%] border-2 rounded-full leading-[2.1rem]
              px-4 py-2 transition transform duration-300
              ${currentIndex === 2 ? 'bg-[#2592AD] text-white border-[#2592AD]' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-0 hover:scale-110'}`}
          >3</button>

          <button
            onClick={() => setCurrentIndex(3)}
            className={`h-[50px] w-[50px] absolute top-[27%] lg:right-[10%] md:right-[5%] border-2 rounded-full leading-[2.1rem]
              px-4 py-2 transition transform duration-300
              ${currentIndex === 3 ? 'bg-[#2592AD] text-white border-[#2592AD]' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-0 hover:scale-110'}`}
          >4</button>

          <button
            onClick={() => setCurrentIndex(4)}
            className={`h-[50px] w-[50px] absolute top-[90%] right-[-3%] border-2 rounded-full leading-[2.1rem]
              px-4 py-2 transition transform duration-300
              ${currentIndex === 4 ? 'bg-[#2592AD] text-white border-[#2592AD]' : 'bg-white text-black border-black hover:bg-blue-500 hover:text-white hover:border-0 hover:scale-110'}`}
          >5</button>

          {/* Rotating Image */}
          <div
            className='h-[50vh] w-[50%] absolute top-[30%] left-[25%] bg-contain bg-center bg-no-repeat transform transition duration-300 hover:scale-110'
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>

        {/* ✅ Grid view for small screens only — without image titles */}
        <div className='md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10'>
          {imageList.map((img, index) => (
            <div
              key={index}
              className='w-full h-[200px] bg-contain bg-center bg-no-repeat border rounded-md shadow-md'
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
        <h1 className='text-center font-sans font-semibold  text-2xl md:text-4xl mt-10'>“Quality is bridging our hardwork and<br/> customer’s Trust”</h1>
      </div>
    </div>
  );
}

export default Moderate;

