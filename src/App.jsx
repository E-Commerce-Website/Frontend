import React from "react";
import { Routes, Route } from "react-router-dom";

// Main pages
import Welcome from "./pages/Welcome";

// Producer pages
import ProducerLogin from "./pages/ProducerLogin";
import ProducerSignUp from "./pages/ProducerSignUp";
import ProducerDashboard from "./pages/Dashboard/ProducerDashboard";

// Customer pages
import LoginPage from "./CustomerPages/LoginPage";
import SignupPage from "./CustomerPages/SignupPage";
import ForgotpasswordPage from "./CustomerPages/ForgotpasswordPage";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard";
import Wishlist from "./CustomerPages/Wishlist";
import Orders from "./CustomerPages/Orders";
import Cart from "./CustomerPages/Cart";
import Profile from "./CustomerPages/Profile";
import Logout from "./CustomerPages/Logout";

// Layout
import CustomerLayout from "./layouts/CustomerLayout";
import ProducerLayout from "./layouts/ProducerLayout";

export default function App() {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<Welcome />} />

      {/* Producer Routes */}
      <Route path="/producer-login" element={<ProducerLogin />} />
      <Route path="/producer-signup" element={<ProducerSignUp />} />
      <Route path="/producer-dashboard" element={<ProducerDashboard />} />

      {/* Customer Auth Routes */}
      <Route path="/customer-login" element={<LoginPage />} />
      <Route path="/customer-signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotpasswordPage />} />
      <Route element={<ProducerLayout />}>
  <Route path="/producer-dashboard" element={<ProducerDashboard />} />
  <Route path="/producer-products" element={<div>My Products Page</div>} />
  <Route path="/producer-add-product" element={<div>Add Product Page</div>} />
  <Route path="/producer-orders" element={<div>Orders Page</div>} />
  <Route path="/producer-logout" element={<div>Logout Page</div>} />
</Route>

      {/* ✅ Customer Layout with Navbar */}
      <Route
        path="/customer-dashboard"
        element={
          <CustomerLayout>
            <CustomerDashboard />
          </CustomerLayout>
        }
      />
      <Route
        path="/wishlist"
        element={
          <CustomerLayout>
            <Wishlist />
          </CustomerLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <CustomerLayout>
            <Orders />
          </CustomerLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <CustomerLayout>
            <Cart />
          </CustomerLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <CustomerLayout>
            <Profile />
          </CustomerLayout>
        }
      />
      <Route
        path="/logout"
        element={
          <CustomerLayout>
            <Logout />
          </CustomerLayout>
        }
      />
    </Routes>
  );
}
