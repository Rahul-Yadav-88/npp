"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

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
      "Elegantly designed cream jar sets provide safe, hygienic, and convenient storage for skincare, cosmetic, and personal care formulations. Built with durable materials to preserve product integrity, these jars ensure freshness while enhancing the user experience with easy accessibility and premium aesthetics. Their reliable design supports industry standards of safety and quality, reflecting your brand's commitment to excellence and customer care.",
    image: "/Home/h2.png",
    background: "/Home/bg2.png",
  },
  {
    id: 3,
    title: "Lotion Bottles",
    description:
      "Durable lotion bottles ensure safe, hygienic, and easy dispensing for skincare and personal care products. Designed to preserve freshness and quality, they support your brand's commitment to reliability and customer care.",
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
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/contact") // Navigates to contact page
  }
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
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
      ></div>

      {/* Main Slider Content */}
      <div className="relative w-full h-full flex flex-col lg:flex-row z-10">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-48 h-10 sm:w-56 sm:h-12 md:w-64 md:h-14 lg:w-72 lg:h-16"
            />
          </div>

          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-balance">
            {slides[currentSlide].title}
          </h1>

          {/* Product Description */}
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-pretty">
            {slides[currentSlide].description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-none font-medium text-sm sm:text-base"
              onClick={handleClick}
            >
              Send Inquiry
            </button>
            <button
              className="border border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-2.5 sm:px-8 sm:py-3 rounded-none font-medium bg-transparent text-sm sm:text-base"
              onClick={() => console.log("View Product clicked")}
            >
              View Product
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden flex-1 lg:bottom-8">
          {/* Product Image */}
          <div className="absolute inset-0 flex items-center lg:items-end justify-center">
            <div className="">
              {/* Product Image */}
              <div className="">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-58 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* WhatsApp button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20">
        <button
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          onClick={() => console.log("WhatsApp clicked")}
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      </div>

      {/* Previous button */}
      <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Next button */}
      <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
