import { formatPrice } from "../utils/formatPrice";

export default function SellerCompare({ sellers }) {
  return (
    <div className="mt-8 border rounded p-4 bg-white">
      <h2 className="font-semibold text-lg mb-4">Compare Sellers</h2>

      {sellers.map((seller) => (
        <div key={seller.sellerId} className="border p-3 rounded mb-3">
          <p className="font-medium">{seller.name}</p>
          <p>Price / Credit: {formatPrice(seller.pricePerCredit)}</p>
          <p>Rating: ⭐ {seller.rating}</p>

          <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
            Buy Credits
          </button>
        </div>
      ))}
    </div>
  );
}
