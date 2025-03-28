import React, { useState } from "react";
import { FaPlus, FaRegPlayCircle, FaPauseCircle, FaCheckCircle } from "react-icons/fa";

const productionData = [
  {
    id: 1,
    title: "CNC plasma cutting machine",
    status: "in-progress",
    progress: 7,
    total: 5000,
  },
  {
    id: 2,
    title: "CNC Mitsubishi - 2 central axis",
    status: "on-hold",
    progress: 45,
    total: 1000,
  },
  {
    id: 3,
    title: "Piston 120/90x2030",
    status: "ready",
    progress: 0,
    total: 100,
  },
];

const ProductionPlan = () => {
  const [items, setItems] = useState(productionData);

  const updateStatus = (id, newStatus) => {
    setItems(items.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <div className="p-6 font-['Prompt'] min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaPlus className="text-indigo-600" /> แผนการผลิต
          </h1>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
            <FaPlus />
            เพิ่มแผนการผลิต
          </button>
        </div>

        {/* Production Status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-48">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <div className="my-2">
                <progress className="w-full" value={item.progress} max={item.total}></progress>
                <p className="text-center text-sm">{`${item.progress} of ${item.total} pcs`}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div
                  className={`status-badge text-sm py-1 px-3 rounded-full ${
                    item.status === "ready" ? "bg-green-200 text-green-600" :
                    item.status === "on-hold" ? "bg-yellow-200 text-yellow-600" :
                    "bg-blue-200 text-blue-600"
                  }`}
                >
                  {item.status === "ready" ? <FaCheckCircle /> : item.status === "on-hold" ? <FaPauseCircle /> : <FaRegPlayCircle />}
                  {item.status === "ready" ? "พร้อม" : item.status === "on-hold" ? "รอ" : "กำลังดำเนินการ"}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateStatus(item.id, item.status === "in-progress" ? "completed" : "in-progress")}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {item.status === "in-progress" ? <FaCheckCircle /> : <FaRegPlayCircle />}
                  </button>
                  <button
                    onClick={() => updateStatus(item.id, item.status === "on-hold" ? "ready" : "on-hold")}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    {item.status === "on-hold" ? <FaCheckCircle /> : <FaPauseCircle />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionPlan;