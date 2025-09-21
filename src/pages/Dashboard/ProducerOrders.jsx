import React from "react";
import { useStore } from "../../context/StoreContext";

export default function ProducerOrders() {
  const { orders } = useStore();

  // ✅ Get current producer's shopId
  const shopId = localStorage.getItem("producerShopId");

  // ✅ Filter orders to include only items from this producer
  const filteredOrders = orders
    .map((order) => {
      const itemsForThisProducer = order.items.filter(
        (item) => item.shopId === shopId
      );
      if (itemsForThisProducer.length > 0) {
        return { ...order, items: itemsForThisProducer, total: itemsForThisProducer.reduce((sum, i) => sum + i.price * i.quantity, 0) };
      }
      return null;
    })
    .filter(Boolean); // Remove null orders

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Orders Placed</h2>
      {filteredOrders.length === 0 ? (
        <p>No orders for your products yet.</p>
      ) : (
        filteredOrders.map((order) => (
          <div
            key={order.id}
            className="border p-4 mb-4 rounded shadow-sm bg-white"
          >
            {/* Order Header */}
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Order #{order.id}</h3>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>

            {/* Order Items */}
            <ul>
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between py-1 border-b"
                >
                  <span>{item.title} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="flex justify-between mt-2 font-semibold">
              <span>Total: ₹{order.total}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
