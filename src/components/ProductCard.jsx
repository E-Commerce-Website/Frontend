import React from "react";

export default function ProductCard({ image, title }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col items-center">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Product Title */}
      <p className="text-sm font-medium text-gray-700 text-center">{title}</p>
    </div>
  );
}
