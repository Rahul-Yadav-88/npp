import { useParams } from "react-router-dom";
import products from "./products";
import ProductGallery from "../../components/Product/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";


export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  return (
    <main className="mx-auto grid grid-cols-1 gap-8 p-10 md:grid-cols-[40%_1px_1fr]">
      {/* Left: Gallery */}
      <div>
        <ProductGallery product={product} />
      </div>

      {/* Divider */}
      <div className="bg-black" />

      {/* Right: Details */}
      <div>
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
