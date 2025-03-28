import React from "react";
import RevenueChart from "./overview/RevenueChart";
import SummaryBox from "./overview/SummaryBox";
import PieCard from "./overview/PieCard";
import NoDataBox from "./overview/NoDataBox";

const Overview = () => {
  return (
    <div className="p-6 bg-gray-00 min-h-screen font-['Prompt']">
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        ภาพรวมรายรับและรายจ่าย
      </h1>

      {/* กราฟ + รอชำระ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4">
          <RevenueChart />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <NoDataBox title="ไม่มีข้อมูลรายงานสำหรับ" options={["ลูกหนี้"]} />
        </div>
      </div>

      {/* Pie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <PieCard title="รายได้" />
        <PieCard title="ค่าใช้จ่าย" />
        <PieCard title="เงินคุณอยู่ไหน" amount={5335} />
      </div>

     {/* ✅ เงินสด/ธนาคารที่ติดตาม */}
     <div className="mt-10">
        <h2 className="text-md font-bold text-gray-800 mb-2">
          เงินสด/เงินฝากธนาคารที่ติดตาม <span className="ml-2 text-sm font-normal text-gray-400">เลือกบัญชี</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">เงินสด</p>
            <p className="font-bold text-gray-700">เงินสด</p>
            <p className="text-xs text-gray-400">CSH001</p>
            <p className="text-green-600 font-bold text-lg mt-1">5,335.00 บาท</p>
          </div>
        </div>
      </div>

      {/* ✅ บัญชีที่ติดตาม */}
      <div className="mt-8">
        <h2 className="text-md font-bold text-gray-800 mb-2">
          บัญชีที่ติดตาม <span className="ml-2 text-sm font-normal text-gray-400">เลือกบัญชี</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "ภาษีขาย ภ.พ.30", code: "215101" },
            { title: "ก.ย.ด. 1 ค้างจ่าย", code: "215201" },
            { title: "ก.ย.ด. 3 ค้างจ่าย", code: "215203" },
            { title: "ก.ย.ด. 53 ค้างจ่าย", code: "215204" },
          ].map((acc, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-700">{acc.title}</p>
              <p className="text-xs text-gray-400 mb-1">หนี้สินจากภาษีและประกันสังคม</p>
              <p className="text-xs text-gray-400">{acc.code}</p>
              <p className="mt-2 text-gray-700 font-bold text-lg">0.00 บาท</p>
              <p className="text-xs text-gray-400">N/A MoM</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
