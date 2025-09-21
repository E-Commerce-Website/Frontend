import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProducerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Centered Cards */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* My Products */}
          <div
            onClick={() => navigate("/producer-products")}
            className="cursor-pointer bg-white p-10 w-64 h-64 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/711/711191.png"
              alt="Products"
              className="w-20 mb-6"
            />
            <h2 className="text-xl font-bold text-center">MY PRODUCTS</h2>
          </div>

          {/* Add Products */}
          <div
            onClick={() => navigate("/producer-add-product")}
            className="cursor-pointer bg-white p-10 w-64 h-64 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
              alt="Add"
              className="w-20 mb-6"
            />
            <h2 className="text-xl font-bold text-center">ADD PRODUCTS</h2>
          </div>

          {/* Orders Placed */}
          <div
            onClick={() => navigate("/producer-orders")}
            className="cursor-pointer bg-white p-10 w-64 h-64 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5951/5951752.png"
              alt="Orders"
              className="w-20 mb-6"
            />
            <h2 className="text-xl font-bold text-center">ORDERS PLACED</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
