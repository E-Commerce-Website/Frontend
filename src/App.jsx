import React from "react";
import { Routes, Route } from "react-router-dom";

// Main pages
import Welcome from "./pages/Welcome";

// Producer pages
import ProducerLogin from "./pages/ProducerLogin";
import ProducerSignUp from "./pages/ProducerSignUp";

// Customer pages
import LoginPage from "./CustomerPages/LoginPage";
import SignupPage from "./CustomerPages/SignupPage";
import ForgotpasswordPage from "./CustomerPages/ForgotpasswordPage";

export default function App() {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<Welcome />} />

      {/* Producer Routes */}
      <Route path="/producer-login" element={<ProducerLogin />} />
      <Route path="/producer-signup" element={<ProducerSignUp />} />

      {/* Customer Routes */}
      <Route path="/customer-login" element={<LoginPage />} />
      <Route path="/customer-signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotpasswordPage />} />
    </Routes>
  );
}
