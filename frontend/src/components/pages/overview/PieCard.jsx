import React from "react";
import Chart from "react-apexcharts";

const PieCard = ({ title = "ไม่พบข้อมูล", total = 0 }) => {
  const chartData = {
    options: {
      labels: ["วงเงินรวม"],
      legend: { show: false },
      colors: ["#6366f1"],
    },
    series: [100],
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <Chart options={chartData.options} series={chartData.series} type="donut" height={200} />
      <div className="text-center mt-2 text-sm text-gray-500">ยอดรวม {total.toLocaleString()} บาท</div>
    </div>
  );
};

export default PieCard;
