import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Stock from "./pages/Stock";
import CostProfit from "./pages/CostProfit";
import Chart from "./pages/Chart";
import ProductionPlan from "./pages/ProductionPlan";
import Overview from "./pages/Overview";
import UserManagement from "./pages/UserManagement";
import SalesFinance from "./pages/Sales"; // ✅ เพิ่ม import ให้ถูกชื่อ
import AddOrder from "./pages/sales/AddOrder"; // ✅ เพิ่ม
import UpdateOrder from "./pages/sales/UpdateOrder"; // ✅ เพิ่ม
import Overview from "./pages/Overview";

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6 overflow-auto font-['Prompt']">
        {/* ✅ Render หน้าแต่ละหน้า */}
        {currentPath === "/dashboard/overview" && <Overview />}
        {currentPath === "/dashboard/stock" && <Stock />}
        {currentPath === "/dashboard/cost-profit" && <CostProfit />}
        {currentPath === "/dashboard/chart" && <Chart />}
        {currentPath === "/dashboard/production-plan" && <ProductionPlan />}
        {currentPath === "/dashboard/users" && <UserManagement />}
        {currentPath === "/dashboard/sales-finance" && <SalesFinance />} {/* ✅ ใช้ path ที่ถูกต้อง */}
        {currentPath === "/dashboard/sales/add" && <AddOrder />}
        {currentPath === "/dashboard/sales/update" && <UpdateOrder />}
        {currentPath === "/dashboard/overview" && <Overview />}

        {/* ✅ Default: ถ้าไม่ตรง path ไหนเลย */}
        {![
          "/dashboard/overview",
          "/dashboard/stock",
          "/dashboard/cost-profit",
          "/dashboard/chart",
          "/dashboard/production-plan",
          "/dashboard/users",
          "/dashboard/sales-finance", // ✅ แก้ชื่อให้ตรง
        ].includes(currentPath) && (
          <h1 className="text-2xl font-bold text-red-500">Page Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default MainContent;