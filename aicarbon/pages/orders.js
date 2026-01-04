import Link from "next/link";
import { orders } from "../data/orders";

export default function Orders() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">My Orders</h1>
      <p className="text-gray-500 mb-4">
        Track your carbon credit purchases.
      </p>

      {orders.map((order) => (
        <Link key={order.id} href={`/order/${order.id}`}>
          <div className="border p-3 rounded mb-3 cursor-pointer">
            {order.productName}
          </div>
        </Link>
      ))}
    </div>
  );
}
