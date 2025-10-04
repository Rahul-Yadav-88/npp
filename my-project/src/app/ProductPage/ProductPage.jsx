// ProductPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "./products";
import ProductGallery from "../../components/Product/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "5 ml");

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <main className="mx-auto grid grid-cols-1 gap-8 p-10 md:grid-cols-[40%_1px_1fr]">
      {/* Left: Gallery */}
      <div>
        <ProductGallery 
          product={product} 
          selectedSize={selectedSize}
        />
      </div>

      {/* Divider */}
      <div className="bg-black" />

      {/* Right: Details */}
      <div>
        <ProductDetails 
          product={product} 
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />
      </div>
    </main>
  );
}