import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // ✅ new state

  // Wishlist functions
  const addToWishlist = (item) => setWishlist([...wishlist, item]);
  const removeFromWishlist = (id) => setWishlist(wishlist.filter((item) => item.id !== id));

  // Cart functions
  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  // ✅ Orders functions
  const addOrder = (order) => setOrders([...orders, order]);

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        orders, // ✅ expose orders
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        addOrder, // ✅ expose addOrder
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
