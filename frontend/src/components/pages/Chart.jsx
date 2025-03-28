import React, { useState } from "react";
import {
  FaChartBar,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData6Months = [
  { name: "ม.ค.", profit: 12000 },
  { name: "ก.พ.", profit: 15000 },
  { name: "มี.ค.", profit: 17000 },
  { name: "เม.ย.", profit: 14000 },
  { name: "พ.ค.", profit: 19000 },
  { name: "มิ.ย.", profit: 21000 },
];

const chartData12Months = [
  { name: "ม.ค.", profit: 10000 },
  { name: "ก.พ.", profit: 12000 },
  { name: "มี.ค.", profit: 14000 },
  { name: "เม.ย.", profit: 11000 },
  { name: "พ.ค.", profit: 16000 },
  { name: "มิ.ย.", profit: 18000 },
  { name: "ก.ค.", profit: 13000 },
  { name: "ส.ค.", profit: 19000 },
  { name: "ก.ย.", profit: 17000 },
  { name: "ต.ค.", profit: 21000 },
  { name: "พ.ย.", profit: 22000 },
  { name: "ธ.ค.", profit: 25000 },
];

const Chart = () => {
  const [range, setRange] = useState("6 เดือนล่าสุด");
  const [chartData, setChartData] = useState(chartData6Months);

  // ฟังก์ชันจัดการการเลือกช่วงเวลา
  const handleRangeChange = (selectedRange) => {
    setRange(selectedRange);
    if (selectedRange === "6 เดือนล่าสุด") {
      setChartData(chartData6Months);
    } else if (selectedRange === "12 เดือนล่าสุด") {
      setChartData(chartData12Months);
    }
  };

  return (
    <div className="p-6 font-['Prompt'] min-h-screen ">
      <div className="bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaChartBar className="text-indigo-600" /> กราฟแสดงผล
          </h1>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => handleRangeChange("6 เดือนล่าสุด")}
            >
              <FaCalendarAlt /> 6 เดือนล่าสุด
            </button>
            <button
              className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => handleRangeChange("12 เดือนล่าสุด")}
            >
              <FaCalendarAlt /> 12 เดือนล่าสุด
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `฿ ${value.toLocaleString()}`} />
              <Line type="monotone" dataKey="profit" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Below Chart */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">กำไรเฉลี่ย</p>
            <p className="text-xl font-bold text-green-600">฿ 16,500</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">เดือนที่มีกำไรมากที่สุด</p>
            <p className="text-xl font-bold text-yellow-600">มิ.ย. - ฿ 21,000</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">เดือนที่ต่ำสุด</p>
            <p className="text-xl font-bold text-red-600">ม.ค. - ฿ 12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;