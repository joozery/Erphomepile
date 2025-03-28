import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {
  console.log("✅ Dashboard Component Loaded");

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-150 via-white to-gray-100">
      {/* ✅ Sidebar ที่ยืดหยุ่น (จัดการความกว้างภายในตัวเอง) */}
      <Sidebar />

      {/* ✅ Main Content ยืดเต็มที่ */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 overflow-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;