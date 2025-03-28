import React from "react";
import { FaFileInvoice, FaClock } from "react-icons/fa";

const SummaryBox = ({ title = "รอรับชำระ", value = 0, icon = <FaFileInvoice /> }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4 w-full">
      <div className="text-blue-600 text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value.toLocaleString()} บาท</p>
      </div>
    </div>
  );
};

export default SummaryBox;