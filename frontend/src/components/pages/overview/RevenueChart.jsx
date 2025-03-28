// RevenueChart.jsx
import React from "react";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const options = {
    chart: {
      id: "revenue-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Prompt, sans-serif",
    },
    xaxis: {
      categories: [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
      ],
    },
    colors: ["#008FFB", "#FF4560", "#00E396"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    legend: {
      position: "top",
      fontSize: "14px",
      fontFamily: "Prompt, sans-serif",
    },
    tooltip: {
      y: {
        formatter: (val) => `${val.toLocaleString()} บาท`,
      },
    },
  };

  const series = [
    {
      name: "รายได้",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "ค่าใช้จ่าย",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "กำไร/ขาดทุน",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-semibold text-gray-700">2025</div>
        <button className="text-sm bg-white border px-3 py-1 rounded shadow-sm hover:bg-gray-100">
          + สร้างเอกสาร
        </button>
      </div>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default RevenueChart;