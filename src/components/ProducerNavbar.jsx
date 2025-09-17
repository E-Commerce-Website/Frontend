import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProducerNavbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-pink-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/producer-dashboard")}
        >
          TRIMART
        </h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <NavLink
            to="/producer-dashboard"
            className={({ isActive }) =>
              `hover:underline ${isActive ? "font-bold" : ""}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/logout"
            className="hover:underline"
          >
            LOGOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
