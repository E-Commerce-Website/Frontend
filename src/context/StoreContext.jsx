import React, { createContext, useContext, useState } from "react";

// Create Context
const StoreContext = createContext();

// ✅ Provider Component
export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // ✅ All orders

  // Add to Wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, { ...product, quantity: 1 }];
      }
      return prev;
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Place Order
  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleString(),
      ...orderDetails,
    };
    setOrders((prev) => [...prev, newOrder]);
  };

  // ✅ Cancel Order
  const cancelOrder = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        orders,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        placeOrder,
        cancelOrder,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// ✅ Custom Hook for easy access
export const useStore = () => useContext(StoreContext);
