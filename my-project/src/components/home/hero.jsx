import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Floor Cleaners",
    description:
      "Specially formulated floor cleaners ensure powerful cleaning, hygiene, and long-lasting freshness across residential, commercial, and industrial spaces. Designed to effectively remove dirt, stains, and germs, they help maintain a safe and spotless environment. With reliable performance and compliance with safety standards, these cleaners support your commitment to quality, care, and everyday cleanliness.",
    image: "/Home/h1.png",
    background: "/Home/bg1.png",
  },
  {
    id: 2,
    title: "Cream Jars Set",
    description:
      "Elegantly designed cream jar sets provide safe, hygienic, and convenient storage for skincare, cosmetic, and personal care formulations. Built with durable materials to preserve product integrity, these jars ensure freshness while enhancing the user experience with easy accessibility and premium aesthetics. Their reliable design supports industry standards of safety and quality, reflecting your brand’s commitment to excellence and customer care.",
    image: "/Home/h2.png",
    background: "/Home/bg2.png",
  },
  {
    id: 3,
    title: "Lotion Bottles",
    description:
      "Durable lotion bottles ensure safe, hygienic, and easy dispensing for skincare and personal care products. Designed to preserve freshness and quality, they support your brand’s commitment to reliability and customer care.",
    image: "/Home/h4.png",
    background: "/Home/bg3.png",
  },
  {
    id: 4,
    title: "Eye Dropper Set",
    description:
      "Precision-designed plastic eye droppers ensure safe, hygienic, and accurate liquid dispensing across pharmaceutical, laboratory, and personal care applications. Lightweight yet durable, these droppers help maintain product integrity and freshness, supporting your commitment to quality and patient care while complying with industry standards for safety and reliability.",
    image: "/Home/h3.png",
    background: "/Home/bg5.png",
  },
]

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');  // Navigates to contact page
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
      ></div>

      {/* Main Slider Content */}
      <div className="relative w-full h-full flex z-10">
        {/* Left Content Section */}
        <div className="w-1/2 flex flex-col justify-center px-12 lg:px-16">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <div className="text-teal-600 font-bold text-lg tracking-wider">NEELAM</div>
                <div className="text-xs text-gray-600 tracking-widest">PRINT PACK</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 tracking-wide">BEST IN WHATEVER WE DO</div>
          </div>

          {/* Product Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-balance">
            {slides[currentSlide].title}
          </h1>

          {/* Product Description */}
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8 text-pretty">
            {slides[currentSlide].description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-none font-medium"
              onClick={handleClick}
            >
              Send Inquiry
            </button>
            <button
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-none font-medium bg-transparent"
              onClick={() => console.log("View Product clicked")}
            >
              View Product
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 relative overflow-hidden bottom-8">
          {/* Product Image */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="">

              {/* Product Image */}
              <div className="">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  className="w-60 h-58 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? "bg-gray-800" : "bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* WhatsApp button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          onClick={() => console.log("WhatsApp clicked")}
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Auto-advance slider (optional) */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
