import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import bannerImg from "../../assets/banner.png";

export default function CustomerDashboard() {
  return (
    <div>
      {/* ✅ Search & Banner Section */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-6">
          {/* Category Dropdown */}
          <select className="border px-3 py-2 rounded">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Groceries</option>
          </select>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Enter shop name or shop id"
            className="flex-1 border px-4 py-2 rounded"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>

        {/* Banner */}
        <div className="w-full mb-6">
          <img
            src={bannerImg}
            alt="Mega Sale"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Recent Search Section */}
      <div className="px-6 pb-10">
        <h2 className="text-lg font-semibold mb-4">Recent search</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* ✅ Each product navigates to its category */}
          <Link to="/customer/collection/Electronics">
            <ProductCard image="/Products/Electronics/washing1.png" title="Washing Machine" />
          </Link>

          <Link to="/customer/collection/Snacks">
            <ProductCard image="/Products/Snacks/snacks1.png" title="Snacks Pack" />
          </Link>

          <Link to="/customer/collection/Men">
            <ProductCard image="/Products/Men/men1.png" title="Men's Fashion" />
          </Link>

          <Link to="/customer/collection/Women">
            <ProductCard image="/Products/Women/women1.png" title="Women's Dress" />
          </Link>
        </div>
      </div>
    </div>
  );
}
