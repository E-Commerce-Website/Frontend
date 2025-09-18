import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ image, title, price, shopId, productId, size, product }) {
  const { addToWishlist, addToCart } = useStore();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition relative">
      {/* Product Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover mb-3 rounded" />

      {/* Product Info */}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">₹{price}</p>
      <p className="text-sm text-gray-500">Shop: {shopId}</p>
      <p className="text-sm text-gray-500">ID: {productId}</p>
      <p className="text-sm text-gray-500">Size: {size}</p>

      {/* Actions */}
      <div className="flex justify-between mt-3">
        <button
          onClick={() => addToWishlist(product)}
          className="p-2 bg-gray-100 rounded-full hover:bg-pink-200"
        >
          <Heart className="w-5 h-5 text-pink-500" />
        </button>
        <button
          onClick={() => addToCart(product)}
          className="p-2 bg-gray-100 rounded-full hover:bg-green-200"
        >
          <ShoppingCart className="w-5 h-5 text-green-600" />
        </button>
      </div>
    </div>
  );
}
