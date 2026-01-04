export default function TrackingTimeline({ steps }) {
  return (
    <div className="mt-6 border rounded p-4 bg-white">
      <h2 className="font-semibold mb-3">Delivery Status</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className="text-green-700 mb-2">
            ✓ {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
