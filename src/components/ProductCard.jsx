import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  image,
  title,
  price,
  shopId,
  productId,
  size,
  showActions = true, // ✅ Default true
}) {
  const { wishlist, cart, addToWishlist, removeFromWishlist, addToCart, removeFromCart } = useStore();
  const navigate = useNavigate();

  // ✅ Check if this product is in wishlist
  const isWishlisted = wishlist.some((item) => item.id === id);

  // ✅ Check if this product is in cart
  const isInCart = cart.some((item) => item.id === id);

  // ✅ Toggle wishlist
  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, image, title, price, shopId, productId, size });
    }
  };

  // ✅ Toggle cart
  const handleCart = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart({ id, image, title, price, shopId, productId, size });
    }
  };

  // ✅ Direct buy → go to checkout page with product details
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { id, image, title, price, shopId, productId, size },
    });
  };

  return (
    <div className="border rounded-lg shadow-md p-4 relative">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {price && <p className="text-gray-600">₹{price}</p>}
      {size && <p className="text-sm text-gray-500">Size: {size}</p>}

      {/* ✅ Conditional Actions */}
      {showActions && (
        <>
          <div className="flex justify-between items-center mt-3">
            {/* ❤️ Wishlist */}
            <button onClick={handleWishlist}>
              <Heart
                size={22}
                className={`transition-colors ${
                  isWishlisted ? "fill-red-500 text-red-500" : "text-pink-500"
                }`}
              />
            </button>

            {/* 🛒 Cart */}
            <button onClick={handleCart}>
              <ShoppingCart
                size={22}
                className={`transition-colors ${
                  isInCart ? "fill-blue-500 text-blue-500" : "text-blue-500"
                }`}
              />
            </button>
          </div>

          {/* 🛍 Buy Now */}
          <button
            onClick={handleBuyNow}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}
