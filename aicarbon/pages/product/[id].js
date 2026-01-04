import { useRouter } from "next/router";
import { products } from "../../data/products";
import SellerCompare from "../../components/SellerCompare";
import ReviewSection from "../../components/ReviewSection";
import AIDecisionAssistant from "../../components/AIDecisionAssistant";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const product = products.find((p) => p.id === id);
  if (!product) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>

      <div className="mt-4 text-sm">
        <p>Category: {product.category}</p>
        <p>VERRA Certified: {product.verraCertified ? "Yes" : "No"}</p>
        <p>SDGs: {product.sdgs.join(", ")}</p>
      </div>

      <AIDecisionAssistant product={product} />
      <SellerCompare sellers={product.sellers} />
      <ReviewSection />
    </div>
  );
}
