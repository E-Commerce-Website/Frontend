// src/CustomerPages/LogoutPage.jsx
import React from "react";

export default function LogoutPage({ onLogout, onCancel }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-b from-purple-400 to-pink-300 
                      p-12 rounded-3xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-black mb-10">LOGOUT</h1>
        <p className="text-gray-800 mb-10 text-lg">
          Are you sure you want to logout?
        </p>

        <div className="flex flex-col space-y-6">
          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="bg-purple-700 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-purple-800 transition"
          >
            LOGOUT
          </button>

          {/* Cancel Button */}
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-400 transition"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

