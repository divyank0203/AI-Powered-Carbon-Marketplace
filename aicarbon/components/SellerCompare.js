import { formatPrice } from "../utils/formatPrice";
import { StarIcon } from "@heroicons/react/24/outline";


export default function SellerCompare({ sellers }) {
  return (
    <div className="mt-8 border rounded p-4 bg-white">
      <h2 className="font-semibold text-lg mb-4">Compare Sellers</h2>

      {sellers.map((seller) => (
        <div key={seller.sellerId} className="border p-3 rounded mb-3">
          <p className="font-medium">{seller.name}</p>
          <p>Price / Credit: {formatPrice(seller.pricePerCredit)}</p>
          <p><div className="flex items-center gap-1 text-sm text-gray-700">
  <StarIcon className="w-4 h-4 text-yellow-500" />
  <span className="font-medium">{seller.rating}</span>
  <span className="text-gray-500">/ 5</span>
</div>
</p>

          <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
            Buy Credits
          </button>
        </div>
      ))}
    </div>
  );
}
