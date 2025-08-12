import React from "react";
import { Link } from "react-router-dom";
import producerBg from "../assets/producer-bg.png";

export default function ProducerSignUp() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 bg-purple-100 justify-center items-center">
        <img
          src={producerBg}
          alt="Producer Sign Up"
          className="w-3/4 max-w-md"
        />
      </div>
      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-8 bg-gradient-to-b from-pink-200 to-purple-300 rounded-none md:rounded-l-3xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-purple-900 mb-6">
          Producer Sign Up
        </h1>
        <form className="w-full max-w-sm">
          {/* Name */}
          <input
            type="text"
            placeholder="Name of the Producer"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Create Password"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Shop Name & ID */}
          <input
            type="text"
            placeholder="Shop Name and Shop ID"
            className="w-full p-2.5 mb-3 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Shop Location */}
          <input
            type="text"
            placeholder="Shop Location"
            className="w-full p-2.5 mb-5 border-b-2 border-purple-500 focus:outline-none focus:border-purple-800 bg-transparent placeholder-gray-700"
          />
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-2.5 rounded-full font-semibold transition duration-300"
          >
            SIGN UP
          </button>
          {/* Already have account */}
          <p className="text-sm text-center mt-5 text-gray-700">
            Already have an account?{" "}
            <Link
              to="/producer-login"
              className="text-purple-900 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
