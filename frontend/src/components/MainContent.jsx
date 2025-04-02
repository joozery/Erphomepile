import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Stock from "./pages/Stock";
import CostProfit from "./pages/CostProfit";
import Chart from "./pages/Chart";
import ProductionPlan from "./pages/ProductionPlan";
import Overview from "./pages/Overview";
import UserManagement from "./pages/UserManagement";
import SalesFinance from "./pages/Sales";
import AddOrder from "./pages/sales/AddOrder";
import UpdateOrder from "./pages/sales/UpdateOrder";
import UserProfile from "./pages/UserProfile"; // ✅ import profile page

const MainContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // ✅ ตรวจสอบว่า login หรือยัง ถ้ายัง -> redirect ไป /login
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const renderPage = () => {
    switch (currentPath) {
      case "/dashboard/overview":
        return <Overview />;
      case "/dashboard/stock":
        return <Stock />;
      case "/dashboard/cost-profit":
        return <CostProfit />;
      case "/dashboard/chart":
        return <Chart />;
      case "/dashboard/production-plan":
        return <ProductionPlan />;
      case "/dashboard/users":
        return <UserManagement />;
      case "/dashboard/sales-finance":
        return <SalesFinance />;
      case "/dashboard/sales/add":
        return <AddOrder />;
      case "/dashboard/sales/update":
        return <UpdateOrder />;
      case "/dashboard/profile":
        return <UserProfile />; // ✅ หน้าโปรไฟล์
      default:
        return (
          <h1 className="text-2xl font-bold text-red-500">
            ไม่พบหน้านี้ (Page Not Found)
          </h1>
        );
    }
  };

  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6 overflow-auto font-['Prompt']">
        {renderPage()}
      </div>
    </div>
  );
};

export default MainContent;