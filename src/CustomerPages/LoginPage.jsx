import { FaEnvelope, FaLock, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import loginImage from "../assets/loginpageimage.png";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Side Image */}
      <div className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white">
        <img
          src={loginImage}
          alt="Shopping Girl"
          className="w-[85%] h-auto object-contain"
        />
      </div>

      {/* Right Side Login Card */}
      <div className="w-full lg:w-1/2 h-full bg-gradient-to-b from-purple-600 to-pink-400 flex justify-center items-center">
        <div className="w-[90%] md:w-[85%] xl:w-[75%] h-[90%] bg-white/20 backdrop-blur-lg p-20 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-between">
        <br></br><br></br>

          {/* Title */}
          <h2 className="text-white text-center text-6xl md:text-9xl font-extrabold mb-16">
            LOGIN
          </h2>

          {/* Inputs Section */}
          <div className="flex flex-col gap-12">
            {/* Email Field */}
            <div className="flex items-center border-b-2 border-white py-4 px-4">
              <FaEnvelope className="text-white text-9xl mr-10" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full text-7xl placeholder-white text-white outline-none"
              />
            </div>
            <br></br><br></br><br></br><br></br>

            {/* Password Field */}
            <div className="flex items-center border-b-2 border-white py-4 px-4">
              <FaLock className="text-white text-9xl mr-10" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent w-full text-7xl placeholder-white text-white outline-none"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mt-12 mb-12 text-white text-5xl">
            <label className="flex items-center">
              <input type="checkbox" className="w-11 h-11 mr-3" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forget Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-purple-900 text-white py-11 text-6xl font-bold rounded-full hover:bg-purple-950 transition mb-10">
            LOGIN
          </button>

          {/* Sign Up Prompt */}
          <div className="text-center mb-10">
            <p className="text-white text-5xl">
              Don't have an Account?{" "}
               <Link to="/signup" className="underline hover:text-white/80">
                Sign up
              </Link>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-16">
            <FcGoogle className="text-9xl cursor-pointer" />
            <FaFacebookF className="text-blue-600 text-9xl cursor-pointer" />
            <FaTwitter className="text-sky-400 text-9xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;