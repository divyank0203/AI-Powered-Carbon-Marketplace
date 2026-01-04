import { StarIcon } from "@heroicons/react/24/outline";

export default function ReviewSection() {
  return (
    <div className="mt-8 border rounded p-4 bg-white">
      <h2 className="font-semibold text-lg mb-2">Customer Reviews</h2>
      <p className="flex items-center gap-1 text-sm text-gray-800 font-semibold text-lg">
        <StarIcon className="w-4 h-4 text-yellow-500" /> 9/10 – Transparent project with verified impact.</p>
      <p className="text-sm text-gray-600 mt-1">
        Verified Buyer
      </p>
    </div>
  );
}
