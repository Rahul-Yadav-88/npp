import { useNavigate } from 'react-router-dom';

export default function HomePage() {
   const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');  // Navigates to contact page
  };
  return (
    <div className=" bg-white relative">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center  px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About Company</h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Neelam Print'o'Pack, established in 2011 in Baddi, manufactures quality plastic packaging with precision and
            timely service. We serve pharmaceuticals, FMCG, cosmetics, food, and home care industries.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {/* Year Established */}
            <div className="bg-[#2592ad] text-white p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2011</div>
              <div className="text-lg">Year Established</div>
            </div>

            {/* Production Facility */}
            <div className="bg-[#2592ad] text-white p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15,000+ ft²</div>
              <div className="text-lg">Production Facility</div>
            </div>

            {/* Product Categories */}
            <div className="bg-[#2592ad] text-white p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Product Categories</div>
            </div>

            {/* Quality Commitment */}
            <div className="bg-[#2592ad] text-white p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Quality Commitment</div>
            </div>
          </div>

          {/* Call to Action button */}
          <button
            variant="outline"
            size="lg"
            className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg bg-transparent"
                          onClick={handleClick}

          >
            Know about us
          </button>
        </div>
      </div>

      {/* <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-contain"
        style={{
          backgroundImage: "url('/Home/bbg.png')",
          backgroundSize: "",
        }}
      /> */}




      <div>
        <img src="/Home/bbg.png" alt="Background" className="w-full h-auto object-cover" />
      </div>





    </div>
  )
}
