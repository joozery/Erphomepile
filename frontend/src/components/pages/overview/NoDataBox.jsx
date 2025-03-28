import React from "react";
import { FaChartBar } from "react-icons/fa";

const NoDataBox = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-full text-center flex flex-col items-center justify-center">
      <h2 className="text-sm font-semibold text-gray-600 mb-3">
        รอรับชำระ/รอชำระ
      </h2>

      {/* ไอคอนกราฟ */}
      <div className="text-blue-500 bg-blue-100 rounded-xl p-6 mb-3">
        <FaChartBar className="text-4xl" />
      </div>

      <p className="text-gray-600 font-medium mb-4">ไม่มีข้อมูลรายงานสำหรับ</p>

      {/* Dropdown */}
      <select
        className="border border-gray-300 rounded-md px-3 py-1 text-sm text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="ลูกหนี้">ลูกหนี้</option>
        <option value="เจ้าหนี้">เจ้าหนี้</option>
      </select>
    </div>
  );
};

export default NoDataBox;