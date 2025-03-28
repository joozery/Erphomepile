import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

const initialData = [
  {
    id: 1,
    date: "2025-05-01",
    subOrder: 1,
    customer: "คุณสมบูรณ์ พหลวงาม",
    company: "NOVAT",
    docNo: "DNT6801004",
    pileType: "I22-RB5",
    unitPrice: 380,
    quantity: 55,
    pileTotal: 20900,
    transport: 2000,
    total: 22900,
    taxType: "NO VAT",
    beforeVat: 22900,
    vat: 0,
    grandTotal: 22900,
    paymentDate: "2025-05-10",
    deposit: 10000,
    paid: 12900,
    bank: "KBank",
    debt: 0,
    followUpDate: "2025-05-15"
  }
];

const UpdateOrder = () => {
  const [orders, setOrders] = useState(initialData);

  const handleChange = (index, field, value) => {
    const newOrders = [...orders];
    newOrders[index][field] = value;

    // คำนวณใหม่
    const qty = parseFloat(newOrders[index].quantity) || 0;
    const price = parseFloat(newOrders[index].unitPrice) || 0;
    const transport = parseFloat(newOrders[index].transport) || 0;
    const pileTotal = qty * price;
    const beforeVat = pileTotal + transport;
    const vat = newOrders[index].taxType === "แยก VAT" ? beforeVat * 0.07 : 0;
    const grandTotal = beforeVat + vat;
    const deposit = parseFloat(newOrders[index].deposit) || 0;
    const paid = parseFloat(newOrders[index].paid) || 0;
    const debt = grandTotal - deposit - paid;

    newOrders[index] = {
      ...newOrders[index],
      pileTotal,
      beforeVat,
      vat,
      grandTotal,
      debt
    };

    setOrders(newOrders);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-['Prompt']">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
            <FaEdit className="text-blue-500" /> อัพเดทยอดคำสั่งซื้อ
          </h2>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[1200px] text-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 text-xs">
              <tr>
                <th className="p-2 border">ลำดับ</th>
                <th className="p-2 border">วันที่</th>
                <th className="p-2 border">ลำดับย่อย</th>
                <th className="p-2 border">ชื่อลูกค้า</th>
                <th className="p-2 border">บริษัท</th>
                <th className="p-2 border">เลขที่เอกสาร</th>
                <th className="p-2 border">ประเภทเสาเข็ม</th>
                <th className="p-2 border">ราคาต่อท่อน</th>
                <th className="p-2 border">จำนวนเสาเข็ม</th>
                <th className="p-2 border">ค่าเสาเข็ม</th>
                <th className="p-2 border">ค่าขนส่ง</th>
                <th className="p-2 border">รวม</th>
                <th className="p-2 border">ประเภทภาษี</th>
                <th className="p-2 border">รวมก่อน VAT</th>
                <th className="p-2 border">VAT</th>
                <th className="p-2 border">รวม VAT</th>
                <th className="p-2 border">วันที่ชำระ</th>
                <th className="p-2 border">มัดจำ</th>
                <th className="p-2 border">ยอดชำระ</th>
                <th className="p-2 border">ธนาคาร</th>
                <th className="p-2 border">ลูกหนี้คงค้า</th>
                <th className="p-2 border">ติดตามวันที่</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="border p-2 text-center">{idx + 1}</td>
                  <td className="border p-1">
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      value={order.date}
                      onChange={(e) => handleChange(idx, "date", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.subOrder}
                      onChange={(e) => handleChange(idx, "subOrder", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={order.customer}
                      onChange={(e) => handleChange(idx, "customer", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={order.company}
                      onChange={(e) => handleChange(idx, "company", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">{order.docNo}</td>
                  <td className="border p-1">{order.pileType}</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.unitPrice}
                      onChange={(e) => handleChange(idx, "unitPrice", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.quantity}
                      onChange={(e) => handleChange(idx, "quantity", e.target.value)}
                    />
                  </td>
                  <td className="border p-1 text-right">{order.pileTotal.toLocaleString()}</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.transport}
                      onChange={(e) => handleChange(idx, "transport", e.target.value)}
                    />
                  </td>
                  <td className="border p-1 text-right">{order.total.toLocaleString()}</td>
                  <td className="border p-1">
                    <select
                      value={order.taxType}
                      className="w-full border rounded px-2 py-1"
                      onChange={(e) => handleChange(idx, "taxType", e.target.value)}
                    >
                      <option value="NO VAT">NO VAT</option>
                      <option value="แยก VAT">แยก VAT</option>
                    </select>
                  </td>
                  <td className="border p-1 text-right">{order.beforeVat.toLocaleString()}</td>
                  <td className="border p-1 text-right">{order.vat.toLocaleString()}</td>
                  <td className="border p-1 text-right">{order.grandTotal.toLocaleString()}</td>
                  <td className="border p-1">
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      value={order.paymentDate}
                      onChange={(e) => handleChange(idx, "paymentDate", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.deposit}
                      onChange={(e) => handleChange(idx, "deposit", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={order.paid}
                      onChange={(e) => handleChange(idx, "paid", e.target.value)}
                    />
                  </td>
                  <td className="border p-1">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={order.bank}
                      onChange={(e) => handleChange(idx, "bank", e.target.value)}
                    />
                  </td>
                  <td className="border p-1 text-right text-red-600 font-semibold">
                    {order.debt.toLocaleString()}
                  </td>
                  <td className="border p-1">
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      value={order.followUpDate}
                      onChange={(e) => handleChange(idx, "followUpDate", e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;