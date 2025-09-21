import React from "react";

export default function OrdersPage() {
  // Dummy order data
  const orders = [
    { id: 1, customer: "John Doe", product: "Tomatoes", qty: 5, status: "Pending" },
    { id: 2, customer: "Priya Sharma", product: "Potatoes", qty: 10, status: "Shipped" },
    { id: 3, customer: "Amit Kumar", product: "Onions", qty: 3, status: "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6">Orders Placed</h1>
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Product</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.product}</td>
              <td className="p-3">{order.qty}</td>
              <td className="p-3">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
