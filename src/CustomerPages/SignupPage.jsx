import React from 'react';
import signupImage from '../assets/signupimage.png'; // Adjust path if needed
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8d2d2]">
      <div className="flex w-full max-w-full h-screen rounded-3xl overflow-hidden shadow-2xl bg-white">
        
        {/* Left Side Image */}
        <div className="w-1/2 h-full">
          <img
            src={signupImage}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Signup Form */}
        <div className="w-1/2 bg-gradient-to-b from-purple-600 to-pink-400 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl px-10 py-10 w-[70%] h-[85%] overflow-auto">
            
            <h2 className="text-5xl font-extrabold text-center text-[#800080] mb-10">
              Sign Up
            </h2>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name of the customer"
                  className="w-full border-b-2 border-gray-400 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-400 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full border-b-2 border-gray-400 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border-b-2 border-gray-400 px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#800080] hover:bg-[#660066] text-white py-3 rounded-full font-bold transition-all"
              >
                Sign Up
              </button>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-black">
                  Already have an account?{' '}
                  <Link to="/customer-login" className="underline hover:text-[#800080]">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
