import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Checkout() {
  const { state } = useLocation(); // product details
  const product = state || {};
  const { addOrder } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "",
  });

  // handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // place order
  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      ...product,
      ...formData,
      id: Date.now(), // unique order id
      status: "Pending",
    };

    addOrder(newOrder);

    // ✅ redirect to Orders page
    navigate("/orders");
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <select
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
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
    </div>
  );
}
