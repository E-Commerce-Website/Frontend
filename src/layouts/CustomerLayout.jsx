import React from "react";
import Navbar from "../components/Navbar";

export default function CustomerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navbar at the top */}
      <Navbar />
      
      {/* ✅ Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
