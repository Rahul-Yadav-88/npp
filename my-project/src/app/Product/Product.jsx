import ProductDetails from "../../components/Product/ProductDetails" 
import ProductGallery from "../../components/Product/ProductGallery"

export default function Page() {
  const images = [
    { src: "/product1.png", alt: "Syrup bottle and box mockup" },
    { src: "/product3.png", alt: "Brown glass bottle" },
    { src: "/product6.png", alt: "White medicine bottle" },
    { src: "/product4.png", alt: "Label close-up" },
    { src: "/product5.png", alt: "Packaging box" },
  ]

  return (
    <main className="mx-auto grid grid-cols-1 gap-8 p-10 md:grid-cols-[40%_60%]">
      {/* Left: Gallery */}
      <div>
        <ProductGallery images={images} />
      </div>

      {/* Right: Details */}
      <div>
        <ProductDetails />
      </div>
    </main>
  )
}


const productData =[
  {
    title:""
  }
]