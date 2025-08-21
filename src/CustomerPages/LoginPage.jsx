import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/loginpageimage.png";
import { FaEnvelope, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 bg-purple-100 justify-center items-center">
        <img
          src={loginImage}
          alt="Shopping Girl"
          className="w-3/4 max-w-md"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-10 bg-gradient-to-b from-pink-200 to-purple-300 rounded-none md:rounded-l-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-8">
          Customer Login
        </h1>

        <form className="w-full max-w-md">
          {/* Email */}
          <div className="flex items-center border-b-2 border-purple-500 mb-6">
            <FaEnvelope className="text-purple-800 mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-transparent placeholder-gray-700 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b-2 border-purple-500 mb-6">
            <FaLock className="text-purple-800 mr-3" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-transparent placeholder-gray-700 focus:outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 accent-purple-700" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm text-purple-800 hover:underline">
             Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-full font-semibold transition duration-300"
          >
            LOGIN
          </button>

          {/* Sign Up */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/customer-signup"
              className="text-purple-900 font-bold hover:underline"
            >
              Sign up now
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <FcGoogle className="text-3xl cursor-pointer" />
            <FaFacebookF className="text-blue-600 text-3xl cursor-pointer" />
            <FaTwitter className="text-sky-400 text-3xl cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}
