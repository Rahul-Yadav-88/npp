import { useState } from "react"

export default function ProductGallery({ images = [] }) {
  const [active, setActive] = useState(0)
  const main = images[active]

  return (
    <section className="flex flex-col gap-4">
      {/* Main image */}
      <div className="w-full flex justify-center items-center overflow-hidden rounded-md border bg-white h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {main && (
          <img
            src={main.src || "/placeholder.svg"}
            alt={main.alt || "Product image"}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto py-1 px-1 -mx-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 rounded-md border ${
              active === idx ? "ring-2 ring-blue-600" : ""
            }`}
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt || `Thumbnail ${idx + 1}`}
              className="h-16 w-20 sm:h-20 sm:w-24 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
