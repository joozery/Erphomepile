import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Stock from "./components/pages/Stock";
import CostProfit from "./components/pages/CostProfit";
import Chart from "./components/pages/Chart";
import ProductionPlan from "./components/pages/ProductionPlan";
import SalesFinance from "./components/pages/SalesFinance";
import AddOrder from "./components/pages/sales/AddOrder";
import UpdateOrder from "./components/pages/sales/UpdateOrder";
import Overview from "./components/pages/Overview";
import ManageUser from "./components/pages/ManageUser";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute"; // ✅ import ตัวเช็ค login
import UserProfile from "./components/pages/UserProfile"; // ✅ import หน้าโปรไฟล์

function App() {
  return (
    <Routes>
      {/* ✅ เส้นทางเข้าสู่ระบบ */}
      <Route path="/login" element={<Login />} />

      {/* ✅ Dashboard เส้นทางหลัก ต้อง login ก่อน */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="overview" />} />
        <Route path="overview" element={<Overview />} />
        <Route path="stock" element={<Stock />} />
        <Route path="cost-profit" element={<CostProfit />} />
        <Route path="chart" element={<Chart />} />
        <Route path="production-plan" element={<ProductionPlan />} />
        <Route path="sales-finance" element={<SalesFinance />} />
        <Route path="sales/add" element={<AddOrder />} />
        <Route path="sales/update" element={<UpdateOrder />} />
        <Route path="manage-users" element={<ManageUser />} />
        <Route path="profile" element={<UserProfile />} /> {/* ✅ เปลี่ยนจาก "/dashboard/profile" เป็น "profile" */}
      </Route>

      {/* ✅ เส้นทางเริ่มต้นวิ่งเข้า login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* ✅ ถ้าไม่พบหน้า */}
      <Route
        path="*"
        element={
          <h1 className="text-center mt-10 text-2xl text-red-500">
            404 ไม่พบหน้าที่ต้องการ
          </h1>
        }
      />
    </Routes>
  );
}

export default App;