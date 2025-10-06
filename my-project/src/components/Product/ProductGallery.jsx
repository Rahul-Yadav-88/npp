import { useState, useEffect } from "react"

export default function ProductGallery({ product, selectedSize }) {
  const [active, setActive] = useState(0);
  
  // Get images based on selected size
  const getSizeImages = () => {
    if (selectedSize && product.sizeImages && product.sizeImages[selectedSize]) {
      return product.sizeImages[selectedSize];
    }
    // Fallback to default images if no size-specific images exist
    return product.images || [];
  };

  const images = getSizeImages();
  const main = images[active];

  // Reset active image when size changes
  useEffect(() => {
    setActive(0);
  }, [selectedSize]);

  return (
    <section className="flex flex-col gap-4">
      {/* Size indicator */}
      <div className="text-sm text-gray-600">
        Currently viewing: <span className="font-semibold text-[#2592AD]">{selectedSize}</span>
      </div>

      {/* Main image */}
      <div className="w-full flex justify-center items-center overflow-hidden rounded-md border bg-white h-64 sm:h-80 md:h-96 lg:h-[320px]">
        {main ? (
          <img
            src={main.src}
            alt={main.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">No image available</div>
        )}
      </div>

      {/* Thumbnail images */}
      <div className="flex gap-3 overflow-x-auto py-1 px-1 -mx-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 rounded-md border transition-all ${
              active === idx 
                ? "ring-2 ring-[#2592AD] border-[#2592AD]" 
                : "border-gray-300 hover:border-[#2592AD]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-16 w-20 sm:h-20 sm:w-24 object-cover rounded-md"
            />
          </button>
        ))}
      </div>

      {/* Image counter */}
      <div className="text-xs text-gray-500 text-center">
        Image {active + 1} of {images.length}
      </div>
    </section>
  );
}