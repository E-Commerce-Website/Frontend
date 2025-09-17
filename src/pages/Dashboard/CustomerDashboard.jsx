import React from "react";
import ProductCard from "../../components/ProductCard"; // ✅ Product Card component
import bannerImg from "../../assets/banner.png"; 
import washingMachine from "../../assets/washing-machine.png"; 
import snacks from "../../assets/snacks.png"; 
import fashion1 from "../../assets/fashion1.png"; 
import fashion2 from "../../assets/fashion2.png"; 

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
          <ProductCard image={washingMachine} title="Washing Machine" />
          <ProductCard image={snacks} title="Snacks Pack" />
          <ProductCard image={fashion1} title="Men's Fashion" />
          <ProductCard image={fashion2} title="Women's Dress" />
        </div>
      </div>
    </div>
  );
}
