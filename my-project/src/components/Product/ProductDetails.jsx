// ProductDetails.jsx
import React, { useState } from "react";
import { Star } from 'lucide-react'

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-black">
      <button
        className="flex w-full items-center justify-between p-4 text-base font-medium cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        {title}
        <span
          className={`transition-transform duration-300 text-3xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Animated content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4 pb-4">{children}</div>
      </div>
    </div>
  );
};

const ProductDetails = ({ product, selectedSize, onSizeChange }) => {
  const [openIndex, setOpenIndex] = useState(); // Open sizes by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSizeSelect = (size) => {
    onSizeChange(size);
  };

  return (
    <section className="flex flex-col gap-6 h-full">
      <header className="space-y-2 lg:flex gap-3">
        <h1 className="text-pretty text-2xl font-semibold">
          {product.name}{" "}
          {selectedSize && (
            <span className="text-[#2592AD]">({selectedSize})</span>
          )}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className='flex items-center gap-1 my-1'>
            {[...Array(5)].map((_, index) => (
              <Star 
                key={index} 
                className={index < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                size={18}
              />
            ))}
          </div>
          <span className="text-foreground/80">
            ({product.reviews} reviews)
          </span>
        </div>
      </header>
      
      <p className="max-w-3xl leading-relaxed text-foreground">
        {product.description}
      </p>
      
      <div className="h-[2px] w-full bg-black"></div>

      <AccordionItem
        title="Product Specifications"
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        <div className="mt-3 text-sm leading-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {product.specs?.map((spec, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="font-medium">{spec.label}</span>
              <span className="text-muted-foreground">: {spec.value}</span>
            </div>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem
        title="Product Sizes"
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <div className="mt-3 text-sm leading-6">
          <p className="text-gray-600 mb-4">Select a size to view corresponding images:</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {product.sizes?.map((size, idx) => (
              <button
                key={idx}
                onClick={() => handleSizeSelect(size)}
                className={`px-3 py-2 border transition-all duration-200  text-xs sm:text-sm ${
                  selectedSize === size
                    ? "bg-[#2592AD] text-white border-[#2592AD] shadow-md"
                    : "hover:border-[#2592AD] text-gray-700 hover:bg-gray-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </AccordionItem>

      <div className="mt-auto pt-6">
        <button className="inline-flex items-center justify-center bg-[#2592AD] px-8 py-3 text-sm font-medium text-white hover:bg-[#1d7a95] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2592AD] focus-visible:ring-offset-2 transition-colors duration-200 w-full sm:w-auto ">
          SEND INQUIRY
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;