import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";

const API_BASE = "https://serverhome-api-652e8f25df0c.herokuapp.com/api/orders";

const UpdateOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(API_BASE);
      const transformed = res.data.map((order) => {
        const qty = parseFloat(order.quantity) || 0;
        const price = parseFloat(order.pricePerUnit) || 0;
        const transport = parseFloat(order.transportCost) || 0;
        const pileTotal = qty * price;
        const beforeVat = pileTotal + transport;
        const vat = order.taxType === "แยก VAT" ? beforeVat * 0.07 : 0;
        const grandTotal = beforeVat + vat;
        return {
          ...order,
          unitPrice: price,
          pileTotal,
          transport,
          total: grandTotal,
          beforeVat,
          vat,
          grandTotal,
          deposit: 0,
          paid: 0,
          bank: "",
          paymentDate: "",
          followUpDate: "",
          debt: grandTotal,
        };
      });
      setOrders(transformed);
    } catch (err) {
      console.error("Error loading orders", err);
    }
  };

  const handleChange = (index, field, value) => {
    const newOrders = [...orders];
    newOrders[index][field] = value;

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
      debt,
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
                  <td className="border p-1">{new Date(order.date).toLocaleDateString("th-TH")}</td>
                  <td className="border p-1">{order.subOrder}</td>
                  <td className="border p-1">{order.customer}</td>
                  <td className="border p-1">{order.company}</td>
                  <td className="border p-1">{order.documentNo}</td>
                  <td className="border p-1">{order.pileType}</td>
                  <td className="border p-1 text-right">{order.pricePerUnit}</td>
                  <td className="border p-1 text-right">{order.quantity}</td>
                  <td className="border p-1 text-right">{order.pileTotal.toLocaleString()}</td>
                  <td className="border p-1 text-right">{order.transport}</td>
                  <td className="border p-1 text-right">{order.total.toLocaleString()}</td>
                  <td className="border p-1">{order.taxType}</td>
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