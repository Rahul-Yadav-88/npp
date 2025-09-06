import ProductDetails from "../../components/Product/ProductDetails"
import ProductGallery from "../../components/Product/ProductGallery"

const products = [
  {
    id: 1,
    name: "Lotion Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Easy-to-use bottles with pumps or flip tops for smooth application of lotions and moisturizers. Durable material ensures long-lasting freshness and brand appeal.",
        images : [
    { src: "/lotionbottle.png", alt: "Syrup bottle and box mockup" },
    { src: "/lotionbottle2.png", alt: "Brown glass bottle" },
    { src: "/lotionbottle3.png", alt: "White medicine bottle" },
    { src: "/lotionbottle4.png", alt: "Label close-up" },
    { src: "/lotionbottle5.png", alt: "Packaging box" },
  ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
   },

 
]

export default function LotionBottle() {
  return (
  <main className="mx-auto grid grid-cols-1 gap-8 p-10 md:grid-cols-[40%_1px_1fr]">
  {/* Left: Gallery */}
  <div>
    {products.map((product) => (
      <ProductGallery key={product.id} product={product} />
    ))}
  </div>

  {/* Divider */}
  <div className="bg-black" />

  {/* Right: Details */}
  <div>
    {products.map((product) => (
      <ProductDetails key={product.id} product={product} />
    ))}
  </div>
</main>
  )
}



