import React from "react";

const headers = [
  "รายการ", "ชื่อสินค้า", "29", "30", "31", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "รวม/เดือนนี้"
];

const data = [
  ["I18-ยาว (RB5)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0"],
  ["I18-ยาว (RB9)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0"],
  ["I18-แบน (RB9)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "880"],
  ["SQ15-ยาว (RB5)", "", "200", "200", "200", "200", "200", "200", "80", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "880"],
  ["Spun20 (RB5)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0"],
  ["Spun25 (RB5)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "960"],
  ["รวม", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2370"]
];

const ProductionPlan = () => {
  return (
    <div className="overflow-auto p-4 font-['Prompt'] bg-white rounded-xl border border-gray-300">
      <h2 className="text-xl font-bold text-gray-700 mb-4">แผนการผลิต - สำเร็จรายวัน</h2>
      <table className="min-w-[1000px] text-xs border border-collapse">
        <thead className="bg-yellow-100 text-gray-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-2 py-1 text-center whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${row[0] === "รวม" ? "bg-red-100 font-semibold" : "hover:bg-gray-50"}`}
            >
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="border px-2 py-1 text-center whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionPlan;
