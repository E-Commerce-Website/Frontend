import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

// 🔹 Full product list (12 items: 3 per category)
const products = [
  // Electronics
  { id: 1, name: "LG Washing Machine", price: 15000, category: "Electronics", image: "/Products/Electronics/washing1.png", shopId: "S001", productId: "E001", size: "Large" },
  { id: 2, name: "Samsung Washing Machine", price: 18000, category: "Electronics", image: "/Products/Electronics/washing2.png", shopId: "S001", productId: "E002", size: "Large" },
  { id: 3, name: "Whirlpool Washing Machine", price: 20000, category: "Electronics", image: "/Products/Electronics/washing3.png", shopId: "S002", productId: "E003", size: "Large" },

  // Snacks
  { id: 4, name: "Potato Chips", price: 50, category: "Snacks", image: "/Products/Snacks/snacks1.png", shopId: "S003", productId: "S001", size: "100g" },
  { id: 5, name: "Cookies Pack", price: 120, category: "Snacks", image: "/Products/Snacks/snacks2.png", shopId: "S003", productId: "S002", size: "200g" },
  { id: 6, name: "Snack Combo", price: 250, category: "Snacks", image: "/Products/Snacks/snacks3.png", shopId: "S004", productId: "S003", size: "500g" },

  // Men
  { id: 7, name: "Men's Shirt", price: 800, category: "Men", image: "/Products/Men/men1.png", shopId: "S005", productId: "M001", size: "M" },
  { id: 8, name: "Men's T-Shirt", price: 600, category: "Men", image: "/Products/Men/men2.png", shopId: "S005", productId: "M002", size: "L" },
  { id: 9, name: "Men's Jacket", price: 1500, category: "Men", image: "/Products/Men/men3.png", shopId: "S006", productId: "M003", size: "XL" },

  // Women
  { id: 10, name: "Women's Dress", price: 1200, category: "Women", image: "/Products/Women/women1.png", shopId: "S007", productId: "W001", size: "M" },
  { id: 11, name: "Women's Top", price: 700, category: "Women", image: "/Products/Women/women2.png", shopId: "S007", productId: "W002", size: "S" },
  { id: 12, name: "Women's Saree", price: 2500, category: "Women", image: "/Products/Women/women3.png", shopId: "S008", productId: "W003", size: "Free" },
];

export default function CustomerCollection() {
  const { category } = useParams();
  const location = useLocation();

  // ✅ Get search param
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // ✅ Filter products
  let filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

  // ✅ Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div className="px-6 py-6">
      <h2 className="text-xl font-semibold mb-6">
        {category} Collection {searchQuery && `(Search: ${searchQuery})`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              title={p.name}
              price={p.price}
              shopId={p.shopId}
              productId={p.productId}
              size={p.size}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
