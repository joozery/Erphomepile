import React from "react";
import { FaUserTie, FaFileInvoiceDollar, FaDollarSign, FaChartPie } from "react-icons/fa";

const salesData = [
  {
    title: "ยอดขายวันนี้",
    value: 125000,
    icon: <FaDollarSign />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "ยอดขายเดือนนี้",
    value: 1850000,
    icon: <FaChartPie />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "ยอดค้างชำระ",
    value: 320000,
    icon: <FaFileInvoiceDollar />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "ลูกค้าทั้งหมด",
    value: 48,
    icon: <FaUserTie />,
    color: "bg-purple-100 text-purple-700",
  },
];

const SalesFinance = () => {
  return (
    <div className="p-6 font-['Prompt'] min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📋 ฝ่ายขายและบัญชี</h1>
        <p className="text-sm text-gray-500">ติดตามยอดขาย รายการบัญชี และสถานะลูกค้าได้ที่นี่</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {salesData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-sm p-4 flex items-center gap-4 ${item.color} transition hover:scale-[1.02]`}
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xl font-bold">
                {typeof item.value === "number"
                  ? `฿ ${item.value.toLocaleString()}`
                  : item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Table: Recent Invoices */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">📑 รายการใบแจ้งหนี้ล่าสุด</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="text-xs text-gray-600 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3">เลขที่ใบแจ้งหนี้</th>
                <th className="px-4 py-3">ชื่อลูกค้า</th>
                <th className="px-4 py-3">ยอดรวม</th>
                <th className="px-4 py-3">สถานะ</th>
                <th className="px-4 py-3">วันที่ออก</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">INV-0001</td>
                <td className="px-4 py-3">บริษัท สมาร์ทเทค จำกัด</td>
                <td className="px-4 py-3">฿ 150,000</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-md">ชำระแล้ว</span>
                </td>
                <td className="px-4 py-3">25 มี.ค. 2025</td>
              </tr>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">INV-0002</td>
                <td className="px-4 py-3">บจก. พรีเมียมบิวด์</td>
                <td className="px-4 py-3">฿ 78,000</td>
                <td className="px-4 py-3">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-md">รอชำระ</span>
                </td>
                <td className="px-4 py-3">26 มี.ค. 2025</td>
              </tr>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">INV-0003</td>
                <td className="px-4 py-3">บจก. ดีไซน์โฮม</td>
                <td className="px-4 py-3">฿ 42,500</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-700 px-2 py-1 text-xs rounded-md">เกินกำหนด</span>
                </td>
                <td className="px-4 py-3">20 มี.ค. 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesFinance;