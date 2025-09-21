import React, { useState } from "react";
import profilePic from "../assets/user.png"; // Replace with your image path

export default function Profile() {
  const [user, setUser] = useState({
    name: "Abc",
    email: "abc@gmail.com",
    phone: "12345678910",
    password: "*******",
  });

  const [isEditing, setIsEditing] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border shadow-lg rounded-lg p-12 h-full w-full max-w-5xl flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="flex-1">
          <button
            onClick={toggleEdit}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg mb-6 hover:bg-purple-700 transition"
          >
            {isEditing ? "SAVE" : "EDIT"}
          </button>

          {/* NAME */}
          <div className="flex items-center mb-4">
            <label className="w-32 text-gray-700 font-medium">NAME :</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="flex-1 border-b border-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* EMAIL */}
          <div className="flex items-center mb-4">
            <label className="w-32 text-gray-700 font-medium">EMAIL :</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="flex-1 border-b border-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* PHONE */}
          <div className="flex items-center mb-4">
            <label className="w-30 text-gray-700 font-medium">
              PHONE NUMBER :
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="flex-1 border-b border-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center mb-4">
            <label className="w-32 text-gray-700 font-medium">PASSWORD :</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              disabled={!isEditing}
              className="flex-1 border-b border-gray-400 focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="flex items-center justify-center mt-6 md:mt-0 md:ml-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}


