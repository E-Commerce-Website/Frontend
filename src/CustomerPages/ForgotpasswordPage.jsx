import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect this with your backend API
    if (email) {
      setMessage("Password reset link has been sent to your email!");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-pink-400">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
        <h2 className="text-center text-white text-5xl font-extrabold mb-8">
          Forgot Password
        </h2>
        <p className="text-center text-white/80 text-xl mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center border-b-2 border-white py-4 px-4">
            <FaEnvelope className="text-white text-3xl mr-4" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full text-2xl placeholder-white text-white outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-4 text-2xl font-bold rounded-full hover:bg-purple-950 transition"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="text-center text-white mt-6 text-xl">{message}</p>
        )}

        <div className="text-center mt-6">
          <Link to="/customer-login" className="text-white underline hover:text-white/80 text-xl">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
