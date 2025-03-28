import React, { useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaBoxOpen,
} from "react-icons/fa";

const dummyData = [
  {
    id: 1,
    name: "เหล็กเส้น SR24",
    code: "ST-001",
    qty: 120,
    unit: "เส้น",
    location: "โกดัง A",
  },
  {
    id: 2,
    name: "ปูนซีเมนต์ TPI",
    code: "ST-002",
    qty: 45,
    unit: "ถุง",
    location: "โกดัง B",
  },
];

const Stock = () => {
  const [search, setSearch] = useState("");

  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 font-['Prompt'] text-gray-800 min-h-screen ">
      <div className="bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaBoxOpen className="text-green-700" /> หน้าสต๊อก
          </h1>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
            <FaPlus />
            เพิ่มสินค้า
          </button>
        </div>

        {/* Search */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[800px] text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">รหัสสินค้า</th>
                <th className="px-4 py-3">ชื่อสินค้า</th>
                <th className="px-4 py-3">คงเหลือ</th>
                <th className="px-4 py-3">หน่วย</th>
                <th className="px-4 py-3">ที่เก็บ</th>
                <th className="px-4 py-3">สถานะ</th> {/* ✅ เพิ่มหัวข้อสถานะ */}
                <th className="px-4 py-3 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-400">
                    ไม่พบข้อมูลสินค้า
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => {
                  const isLowStock = item.qty < 50;
                  return (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">
                        {item.code}
                      </td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.qty}</td>
                      <td className="px-4 py-3">{item.unit}</td>
                      <td className="px-4 py-3">{item.location}</td>
                      <td className="px-4 py-3">
                        {isLowStock ? (
                          <span className="text-red-600 font-semibold">
                         เหลือน้อย
                          </span>
                        ) : (
                          <span className="text-green-600 font-medium">
                            ปกติ
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-3">
                          <button className="text-blue-500 hover:text-blue-700">
                            <FaEdit />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stock;