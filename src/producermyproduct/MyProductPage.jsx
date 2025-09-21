import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MyProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const products = [
    { id: 1, name: "Men Dress", category: "Electronics", img: "/Products/Men/men1.png" },
    { id: 2, name: "Snacks", category: "Grocery", img: "/Products/Snacks/snacks2.png" },
    { id: 3, name: "Snacks", category: "Grocery", img: "/Products/Snacks/snacks3.png" },
    { id: 4, name: "Refrigerator", category: "Electronics", img: "/Products/Electronics/washing1.png" },
    { id: 5, name: "Purple Dress", category: "Clothing", img: "/Products/Women/women1.png" },
    { id: 6, name: "Women Dress", category: "Clothing", img: "/Products/Women/women2.png"},
    { id: 7, name: "Mens Dress", category: "Grocery", img: "/Products/Men/men3.png" },
    { id: 8, name: "Women Dress", category: "Clothing", img: "/Products/Women/women3.png" },
  ];

  const filteredProducts = products.filter((p) => {
    return (
      (category ? p.category === category : true) &&
      (search ? p.id.toString().includes(search) : true)
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6">
        <select
          className="border rounded px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select product category</option>
          <option value="Electronics">Electronics</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Enter Product ID"
          className="border rounded px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
          Search
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group border rounded-lg p-3 flex flex-col items-center shadow hover:shadow-lg bg-white"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="h-40 object-contain mb-3"
              />
              <h3 className="text-center text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-gray-500">ID: {product.id}</p>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to={`/EditproductPage/${product.id}`}>
                  <button className="bg-green-400 text-black px-4 py-2 rounded shadow">
                    Edit
                  </button>
                </Link>
                <Link to={`/Deleteproductpage/${product.id}`}>
                  <button className="bg-red-400 text-black px-4 py-2 rounded shadow">
                    Delete
                  </button>
                </Link>
                <Link to={`/Updateproductpage/${product.id}`}>
                  <button className="bg-purple-400 text-black px-4 py-2 rounded shadow">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
}
