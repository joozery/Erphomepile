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
  FaAngleLeft,
  FaAngleRight,
  FaChevronDown,
  FaChevronUp,
  FaPlusCircle,
  FaSyncAlt,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/logo2.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuGroups = [
    {
      title: "ภาพรวม",
      items: [
        { label: "ภาพรวมทั้งหมด", icon: <FaChartPie className="text-green-500" />, path: "/dashboard/overview" },
      ],
    },
    {
      title: "MAIN MENU",
      items: [
        { label: "สต๊อก", icon: <FaWarehouse className="text-blue-500" />, path: "/dashboard/stock" },
        { label: "ต้นทุน กำไร", icon: <FaMoneyBillWave className="text-yellow-500" />, path: "/dashboard/cost-profit" },
        { label: "กราฟ", icon: <FaChartLine className="text-purple-500" />, path: "/dashboard/chart" },
        { label: "แผนผลิต", icon: <FaProjectDiagram className="text-indigo-500" />, path: "/dashboard/production-plan" },
      ],
    },
    {
      title: "จัดการระบบ",
      items: [
        { label: "จัดการผู้ใช้งาน", icon: <FaUsersCog className="text-pink-500" />, path: "/dashboard/manage-users" },
        {
          label: "ฝ่ายขายและบัญชี",
          icon: <FaFileInvoiceDollar className="text-red-500" />,
          subItems: [
            { label: "เพิ่มรายการคำสั่งซื้อ", icon: <FaPlusCircle className="text-green-500" />, path: "/dashboard/sales/add" },
            { label: "อัพเดทยอดคำสั่งซื้อ", icon: <FaSyncAlt  className="text-orange-400"/>, path: "/dashboard/sales/update" },
          ],
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { label: "โปรไฟล์", icon: <FaUserCircle className="text-gray-600" />, path: "/dashboard/profile" },
      ],
    },
  ];

  const renderSidebarContent = () => (
    <div
      className={`h-full transition-all duration-300 font-['Prompt'] flex flex-col
        ${collapsed ? "w-20" : "w-64"} 
        bg-gradient-to-b from-white to-gray-50 border-r`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between px-4 py-5 border-b shadow-sm bg-white/70 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          {!collapsed && (
            <span className="text-sm font-bold text-gray-900 leading-tight tracking-tight">
              บริษัท<br />เอ็นจิเนียริ่ง จำกัด
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-gray-500 hover:text-gray-800 transition hidden md:block"
        >
          {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
        {/* ปุ่มปิดในมือถือ */}
        <button
          onClick={() => setMobileOpen(false)}
          className="ml-auto text-gray-500 hover:text-gray-800 md:hidden"
        >
          <FaAngleLeft />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {menuGroups.map((group, gIndex) => (
          <div key={gIndex} className="px-3 mt-4">
            {!collapsed && (
              <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wide">
                {group.title}
              </p>
            )}
            <ul className="space-y-1">
              {group.items.map((item, iIndex) => {
                const isActive = location.pathname === item.path;

                if (item.subItems) {
                  return (
                    <li key={iIndex}>
                      <button
                        onClick={() => setSalesOpen(!salesOpen)}
                        className={`flex w-full items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                          ${salesOpen ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100 text-gray-700"}`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {!collapsed && <span className="text-sm flex-1 text-left">{item.label}</span>}
                        {!collapsed && (salesOpen ? <FaChevronUp /> : <FaChevronDown />)}
                      </button>
                      {salesOpen && !collapsed && (
                        <ul className="pl-8 mt-1 space-y-1">
                          {item.subItems.map((subItem, sIndex) => (
                            <li key={sIndex}>
                              <Link
                                to={subItem.path}
                                className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm
                                  ${location.pathname === subItem.path
                                    ? "text-blue-600 font-semibold bg-blue-50"
                                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"}`}
                              >
                                <span>{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={iIndex}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-all duration-200 ${
                        isActive
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                        {item.icon}
                      </span>
                      {!collapsed && <span className="text-sm">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="border-t px-4 py-4 flex items-center gap-3 bg-gray-50 shadow-inner">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-medium text-gray-800">ชมพู่</p>
            <p className="text-xs text-gray-500">CEO</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md md:hidden"
      >
        <FaBars />
      </button>

      {/* Sidebar Container */}
      <div className="hidden md:block">{renderSidebarContent()}</div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64">{renderSidebarContent()}</div>
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;