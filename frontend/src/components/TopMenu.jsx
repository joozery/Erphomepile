import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaWarehouse,
  FaMoneyBillWave,
  FaChartLine,
  FaProjectDiagram,
  FaUserCircle,
  FaChartPie,
  FaUsersCog,
  FaFileInvoiceDollar,
  FaPlusCircle,
  FaSyncAlt,
} from "react-icons/fa";

const TopHorizontalMenu = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  const menuItems = [
    { label: "หน้าหลัก", icon: <FaChartPie />, path: "/dashboard/overview" },
    { label: "รายรับ", icon: <FaWarehouse />, path: "/dashboard/stock" },
    { label: "รายจ่าย", icon: <FaMoneyBillWave />, path: "/dashboard/cost-profit" },
    { label: "ผู้ติดต่อ", icon: <FaChartLine />, path: "/dashboard/chart" },
    { label: "สินค้า", icon: <FaProjectDiagram />, path: "/dashboard/production-plan" },
    { label: "การเงิน", icon: <FaFileInvoiceDollar />, path: "/dashboard/manage-users" },
    {
      label: "บัญชี",
      icon: <FaFileInvoiceDollar />,
      subItems: [
        { label: "เพิ่มคำสั่งซื้อ", path: "/dashboard/sales/add", icon: <FaPlusCircle /> },
        { label: "อัพเดทยอดขาย", path: "/dashboard/sales/update", icon: <FaSyncAlt /> },
      ],
    },
    { label: "คลังเอกสาร", icon: <FaUsersCog />, path: "/dashboard/documents" },
    { label: "ตั้งค่า", icon: <FaUserCircle />, path: "/dashboard/profile" },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="bg-white rounded-xl shadow-md px-2 py-2 flex justify-center items-center gap-1 mx-52 -mt-8 font-['Prompt']">
      {menuItems.map((item, idx) => (
        <div key={idx} className="relative">
          {item.subItems ? (
            <>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className={`flex flex-col items-center justify-center px-6 py-2 rounded-xl transition-all ${
                  openDropdown
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-500"
                }`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-xs mt-1">{item.label}</span>
              </button>

              {/* Dropdown */}
              {openDropdown && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-lg w-48 z-50">
                  {item.subItems.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.path}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      {subItem.icon}
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className={`flex flex-col items-center justify-center px-6 py-2 rounded-xl transition-all ${
                isActive(item.path)
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-indigo-500"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopHorizontalMenu;
