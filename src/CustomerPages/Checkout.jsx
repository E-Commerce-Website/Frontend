import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation(); // product details from navigate
  const product = state || {};

  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ Track order status

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // ✅ Here you can also call API to save order
    // For now, just show success message
    setOrderPlaced(true);

    // Optional: clear form or cart
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Product summary */}
      <div className="flex gap-4 mb-4">
        <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-gray-600">₹{product.price}</p>
          <p className="text-sm text-gray-500">Size: {product.size}</p>
        </div>
      </div>

      {/* User details form */}
      <form className="space-y-4" onSubmit={handlePlaceOrder}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <select className="w-full border px-3 py-2 rounded" required>
          <option value="">Select Payment Method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Place Order
        </button>
      </form>

      {/* ✅ Success popup */}
      {orderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Order Placed Successfully!</h3>
            <p className="mb-4">Thank you for your purchase.</p>
            <button
              onClick={() => setOrderPlaced(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
