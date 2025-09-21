import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import bannerImg from "../../assets/banner.png";

// Sample products (unique IDs)
const recentProducts = [
  { id: 101, image: "/Products/Electronics/washing1.png", title: "Washing Machine", category: "electronics" },
  { id: 102, image: "/Products/Snacks/snacks1.png", title: "Snacks Pack", category: "snacks" },
  { id: 103, image: "/Products/Men/men1.png", title: "Men's Fashion", category: "men" },
  { id: 104, image: "/Products/Women/women1.png", title: "Women's Dress", category: "women" },
];

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

      {/* ✅ Recent Search / Collections Section */}
      <div className="px-6 pb-10">
        <h2 className="text-lg font-semibold mb-4">Recent search</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/customer/collection/${product.category}`}
            >
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                showActions={false} // ✅ Hide Cart, Wishlist, Buy Now
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
