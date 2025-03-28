import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Stock from "./components/pages/Stock";
import CostProfit from "./components/pages/CostProfit";
import Chart from "./components/pages/Chart";
import ProductionPlan from "./components/pages/ProductionPlan";
import SalesFinance from "./components/pages/SalesFinance"; // ✅ เพิ่ม import
import AddOrder from "./components/pages/sales/AddOrder"; // ✅ เพิ่มเข้ามาใหม่
import UpdateOrder from "./components/pages/sales/UpdateOrder"; // ✅ ใหม่
import Overview from "./components/pages/Overview";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="stock" />} />
        <Route path="stock" element={<Stock />} />
        <Route path="cost-profit" element={<CostProfit />} />
        <Route path="chart" element={<Chart />} />
        <Route path="production-plan" element={<ProductionPlan />} />
        <Route path="sales-finance" element={<SalesFinance />} /> {/* ✅ เพิ่ม route */}
        <Route path="sales/add" element={<AddOrder />} /> {/* ✅ เพิ่มเส้นทางนี้ */}
        <Route path="sales/update" element={<UpdateOrder />} /> {/* ✅ เพิ่ม path */}
        <Route path="overview" element={<Overview />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;