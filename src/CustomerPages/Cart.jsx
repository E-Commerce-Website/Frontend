import React from "react";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const { cart, removeFromCart } = useStore();

  return (
    <div className="px-6 py-6">
      <h2 className="text-xl font-semibold mb-6">My Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="relative">
              <ProductCard {...item} />
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
