import React from "react";
import Navbar from "../../components/Navbar";

export default function CustomerProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-4">Customer Profile</h1>
        <p className="text-gray-600">This is the profile page. You can show customer details here.</p>
      </div>
    </div>
  );
}
