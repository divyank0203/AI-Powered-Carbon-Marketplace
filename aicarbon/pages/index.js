// Marketplace Home Page
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    
    <div className="p-8">
      <a
  href="/orders"
  className="inline-block mb-6 text-green-700 font-medium underline"
>
  View My Orders →
</a>

      <h1 className="text-3xl font-bold text-green-600 mb-4">
        AI-Powered Carbon Credits Marketplace
      </h1>

      <p className="text-gray-600 mb-6">
        Browse verified carbon credit projects across multiple categories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
