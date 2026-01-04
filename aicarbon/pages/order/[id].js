import { useRouter } from "next/router";
import { orders } from "../../data/orders";
import TrackingTimeline from "../../components/TrackingTimeline";

export default function OrderTracking() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const order = orders.find((o) => o.id === id);
  if (!order) return null;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Order Tracking</h1>
      <TrackingTimeline steps={order.statusTimeline} />
    </div>
  );
}
