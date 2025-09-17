import React from "react";
import { NavLink } from "react-router-dom";
import userImg from "../assets/user.png";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
      : "hover:underline";

  return (
    <header className="bg-pink-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">TRIMART</h1>

        {/* Links */}
        <nav className="space-x-6 hidden md:flex">
          <NavLink to="/home" className={linkClasses}>HOME</NavLink>
          <NavLink to="/wishlist" className={linkClasses}>WISHLIST</NavLink>
          <NavLink to="/orders" className={linkClasses}>ORDERS</NavLink>
          <NavLink to="/cart" className={linkClasses}>CART</NavLink>
          <NavLink to="/logout" className={linkClasses}>LOGOUT</NavLink>
        </nav>

        {/* Profile + Avatar */}
        <div className="flex items-center space-x-3">
          <NavLink to="/profile" className={linkClasses}>PROFILE</NavLink>
          <img
            src={userImg}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </header>
  );
}
