import React, { useState } from "react";
import { FaChartPie, FaMoneyBillWave, FaArrowUp, FaArrowDown } from "react-icons/fa";

const mockData = {
  revenue: 150000,
  cost: 90000,
  profit: 60000,
  profitRate: 40,
  trend: "up",
  breakdown: [
    { label: "ค่าวัตถุดิบ", amount: 50000 },
    { label: "ค่าแรง", amount: 30000 },
    { label: "ค่าใช้จ่ายอื่น ๆ", amount: 10000 },
  ],
};

const CostProfit = () => {
  const { revenue, cost, profit, profitRate, trend, breakdown } = mockData;
  const trendIcon = trend === "up" ? <FaArrowUp className="text-green-600" /> : <FaArrowDown className="text-red-600" />;

  return (
    <div className="p-6 font-['Prompt'] min-h-screen ">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaMoneyBillWave className="text-yellow-600" /> ต้นทุน และกำไร
          </h1>
        </div>

        {/* สรุปภาพรวม */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">รายได้รวม</p>
            <p className="text-2xl font-bold text-blue-700">฿ {revenue.toLocaleString()}</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">ต้นทุน</p>
            <p className="text-2xl font-bold text-red-600">฿ {cost.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">กำไรสุทธิ</p>
            <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
              ฿ {profit.toLocaleString()} {trendIcon}
            </p>
            <p className="text-sm text-gray-400">{profitRate}% ของรายได้</p>
          </div>
        </div>

        {/* รายละเอียดต้นทุน */}
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaChartPie className="text-purple-500" /> รายละเอียดต้นทุน
          </h2>
          <ul className="divide-y divide-gray-200">
            {breakdown.map((item, idx) => (
              <li key={idx} className="flex justify-between py-2 text-gray-700">
                <span>{item.label}</span>
                <span className="font-medium">฿ {item.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostProfit;
