import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Clear session or token if needed
    localStorage.clear();
    // Redirect to login page
    navigate("/customer-login");
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Logging out...</h1>
    </div>
  );
}
