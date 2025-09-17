import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import producerBg from "../assets/producer-bg.png"; // adjust path as needed

export default function ProducerLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Later you can add validation/API here
    navigate("/producer-dashboard"); // ✅ Redirect to Producer Dashboard
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 bg-purple-100 justify-center items-center">
        <img
          src={producerBg}
          alt="Shopping Cart"
          className="w-3/4 max-w-md"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-10 bg-gradient-to-b from-pink-200 to-purple-300 rounded-none md:rounded-l-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-8">
          Producer Login
        </h1>

        <form onSubmit={handleLogin} className="w-full max-w-md">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />

          {/* Producer ID */}
          <input
            type="text"
            placeholder="Producer ID"
            className="w-full p-3 mb-4 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 accent-purple-700" />
              Remember me
            </label>
            <a href="#" className="text-sm text-purple-800 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-full font-semibold transition duration-300"
          >
            LOGIN
          </button>

          {/* SignUp */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/producer-signup"
              className="text-purple-900 font-bold hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
