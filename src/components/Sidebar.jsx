import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaShoppingCart, FaBox, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar({ role }) {
  return (
    <div className="w-64 bg-purple-800 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">TRIMART</h1>

      <ul className="space-y-6">
        <li>
          <Link to={`/${role}/dashboard`} className="flex items-center gap-3 hover:text-purple-300">
            <FaHome /> <span>Dashboard</span>
          </Link>
        </li>

        {role === "customer" && (
          <>
            <li>
              <Link to="/customer/profile" className="flex items-center gap-3 hover:text-purple-300">
                <FaUser /> <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/customer/wishlist" className="flex items-center gap-3 hover:text-purple-300">
                <FaHeart /> <span>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="/customer/cart" className="flex items-center gap-3 hover:text-purple-300">
                <FaShoppingCart /> <span>Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/customer/orders" className="flex items-center gap-3 hover:text-purple-300">
                <FaBox /> <span>My Orders</span>
              </Link>
            </li>
          </>
        )}

        {role === "producer" && (
          <>
            <li>
              <Link to="/producer/products" className="flex items-center gap-3 hover:text-purple-300">
                <FaBox /> <span>My Products</span>
              </Link>
            </li>
            <li>
              <Link to="/producer/orders" className="flex items-center gap-3 hover:text-purple-300">
                <FaShoppingCart /> <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/producer/analytics" className="flex items-center gap-3 hover:text-purple-300">
                <FaChartLine /> <span>Analytics</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to={`/${role}/settings`} className="flex items-center gap-3 hover:text-purple-300">
            <FaCog /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
