import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ Navbar ที่รวม Hero + TopMenu แล้ว
import Footer from "./Footer"; // ✅ Import Footer เพิ่มมา

const Dashboard = () => {
  console.log("✅ Dashboard Component Loaded");

  return (
    <div className="flex flex-col min-h-screen font-['Prompt']">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <div className="flex-1 p-6 overflow-auto bg-gray-50">
        <Outlet />
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
