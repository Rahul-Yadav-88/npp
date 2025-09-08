import { useState } from "react"

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const images = product?.images
  const main = images[active]

  return (
    <section className="flex flex-col gap-4">
  
      <div className="w-full flex justify-center items-center overflow-hidden rounded-md border bg-white h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {main && (
          <img
            src={main.src}
            alt={main.alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>

  
      <div className="flex gap-3 overflow-x-auto py-1 px-1 -mx-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 rounded-md border ${
              active === idx ? "ring-2 ring-[#2592AD]" : ""
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
    </section>
  )
}
