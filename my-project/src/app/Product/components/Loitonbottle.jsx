export default function LotionBottlesPage() {
  const products = [
    {
      name: "Round Lotion Pump Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle1.png",
    },
    {
      name: "Square Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle2.png",
    },
    {
      name: "Tall Slim Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle3.png",
    },
    {
      name: "AVG Round Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle4.png",
    },
    {
      name: "Round Lotion Pump Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle1.png",
    },
    {
      name: "Square Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle2.png",
    },
    {
      name: "Tall Slim Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle3.png",
    },
    {
      name: "AVG Round Lotion Bottle",
      size: "Available in 100ml - 2L",
      img: "bottle4.png",
    },
  ];

  return (
    <div className="font-serif">
      {/* Title */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Lotion Bottles</h1>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700 leading-relaxed">
          <span className="font-semibold">Precision-molded plastic lotion bottles</span> ensure safe, hygienic, and leak-proof storage and dispensing
          for cosmetics, pharmaceutical, and personal care formulations. Constructed for <span className="font-semibold">strength and chemical resistance</span>,
          these bottles safeguard against product contamination and oxidation, preserving the <span className="font-semibold">integrity, freshness, and efficacy</span>
          of your lotions and creams.
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 pb-12">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative group h-96 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end items-center text-center p-4 text-white">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-sm mb-3">{product.size}</p>
              <button className="mb-2 border border-white text-white px-4 py-2  text-sm bg-transparent hover:bg-white hover:text-black transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
