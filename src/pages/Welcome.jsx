import React from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/welcome.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${welcomeImg})` }}
      ></div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center w-96">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2 text-purple-700">TRIMART</h1>
          <p className="text-gray-600 mb-6">
            Shop, Sell, Succeed — All in one place
          </p>

          {/* Welcome Heading */}
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Welcome</h2>

          {/* Buttons */}
          <div className="space-y-5">
            <button
              onClick={() => navigate("/producer-login")}
              className="w-full py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Producer
            </button>

            <button
              onClick={() => navigate("/customer-login")}
              className="w-full py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
