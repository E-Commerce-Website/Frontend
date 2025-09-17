import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function ProducerLayout() {
  return (
    <div>
      {/* Header/Navbar */}
      <header className="bg-pink-500 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">TRIMART</h1>
        <nav className="flex gap-6">
          <NavLink
            to="/producer-dashboard"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/producer-logout"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            LOGOUT
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
