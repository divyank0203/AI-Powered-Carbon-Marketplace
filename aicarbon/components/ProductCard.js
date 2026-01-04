import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-sm">Location: {product.location}</p>

      <Link
        href={`/product/${product.id}`}
        className="text-green-600 font-medium mt-3 inline-block"
      >
        View Details →
      </Link>
    </div>
  );
}
