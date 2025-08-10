import signupImage from '../assets/signupimage.png'; // Update if your image path is different
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8d2d2]">
      <div className="flex w-full max-w-full h-[100vh] rounded-3xl overflow-hidden shadow-2xl bg-white">
        
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
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            
            <h2 className="text-9xl font-extrabold text-center text-[#800080] mb-14">Sign Up</h2>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            

            <form className="space-y-8 text-8xl">
              <div>
                <input
                  type="text"
                  placeholder="Name of the customer"
                  className="w-full border-b-2 border-gray-400 px-4 py-4 outline-none text-7xl"
                />
              </div>
              <br></br>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-400 px-4 py-4 outline-none text-7xl"
                />
              </div>
              <br></br>
              

              <div>
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full border-b-2 border-gray-400 px-4 py-4 outline-none text-7xl"
                />
              </div>
              <br></br>
              

              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border-b-2 border-gray-400 px-4 py-4 outline-none text-7xl"
                />
              </div>
              <br></br>
              

              <div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-[#800080] hover:bg-[#660066] text-white py-2 rounded-full font-bold text-1xl transition-all"
                >
                  Sign Up
                </button>
              </div>
              <br></br><br></br>
              

              {/* 👇 Added Login Link Here */}
              <div className="text-center mt-12">
                <p className="text-black text-7xl">
                  Already have an account?{' '}
                  <Link to="/" className="underline hover:text-[#800080]">
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