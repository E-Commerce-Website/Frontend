import React from "react";
import { useStore } from "../context/StoreContext";

export default function Orders() {
  const { orders, cancelOrder } = useStore();

  return (
    <div className="px-6 py-6">
      <h2 className="text-xl font-semibold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 shadow-sm flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              {/* Order Details */}
              <div className="flex items-center gap-4">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{order.title}</h3>
                  <p className="text-gray-600">₹{order.price}</p>
                  <p className="text-sm text-gray-500">Size: {order.size}</p>
                  <p className="text-sm">Name: {order.name}</p>
                  <p className="text-sm">Address: {order.address}</p>
                  <p className="text-sm">Phone: {order.phone}</p>
                  <p className="text-sm">Payment: {order.payment}</p>
                  <p className="text-sm font-medium">Status: {order.status}</p>
                </div>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() => cancelOrder(order.id)}
                className="mt-4 md:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
