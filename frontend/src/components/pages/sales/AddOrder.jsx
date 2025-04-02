import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPlus,
  FaTrash,
  FaSave,
  FaTimes,
  FaBoxOpen,
  FaRegEdit,
} from "react-icons/fa";

const initialRow = {
  date: "",
  subOrder: "",
  customer: "",
  company: "",
  documentNo: "",
  pileType: "",
  pricePerUnit: "",
  quantity: "",
  transportCost: "",
  amount: "",
  taxType: "NO VAT",
  vat: "",
  total: "",
};

const API_BASE = "https://serverhome-api-652e8f25df0c.herokuapp.com/api/orders";

const AddOrder = () => {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ ...initialRow });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(API_BASE);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const calculateFields = (data) => {
    const qty = parseFloat(data.quantity) || 0;
    const price = parseFloat(data.pricePerUnit) || 0;
    const transport = parseFloat(data.transportCost) || 0;
    const amount = qty * price;
    let vat = 0;
    let total = amount + transport;

    if (data.taxType === "แยก VAT") {
      vat = total * 0.07;
      total += vat;
    }

    return {
      ...data,
      amount: amount.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const handleChange = (field, value) => {
    const updatedForm = { ...form, [field]: value };
    setForm(calculateFields(updatedForm));
  };

  const handleAddOrder = async () => {
    try {
      const sanitizedForm = {
        ...form,
        transportCost: form.transportCost || 0,
        pricePerUnit: form.pricePerUnit || 0,
        quantity: form.quantity || 0,
      };
      const res = await axios.post(API_BASE, sanitizedForm);
      setOrders([sanitizedForm, ...orders]);
      setShowModal(false);
      setForm({ ...initialRow });
    } catch (err) {
      console.error("Error adding order:", err);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  const formatThaiDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("th-TH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const removeOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 font-['Prompt'] min-h-screen bg-gray-0">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaBoxOpen className="text-blue-600" /> รายการคำสั่งซื้อ
          </h2>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <FaPlus /> เพิ่มคำสั่งซื้อ
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-[1200px] w-full border text-sm">
            <thead className="bg-gray-100 text-gray-600">
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
                <th className="p-2 border">ประเภทภาษี</th>
                <th className="p-2 border">รวมก่อน VAT</th>
                <th className="p-2 border">VAT</th>
                <th className="p-2 border">รวม VAT</th>
                <th className="p-2 border">ลบ</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="15" className="text-center py-4 text-gray-400">
                    ยังไม่มีรายการคำสั่งซื้อ
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-1 text-center">{index + 1}</td>
                    <td className="border p-1">{formatThaiDate(order.date)}</td>
                    <td className="border p-1">{order.subOrder}</td>
                    <td className="border p-1">{order.customer}</td>
                    <td className="border p-1">{order.company}</td>
                    <td className="border p-1">{order.documentNo}</td>
                    <td className="border p-1">{order.pileType}</td>
                    <td className="border p-1 text-right">{order.pricePerUnit}</td>
                    <td className="border p-1 text-right">{order.quantity}</td>
                    <td className="border p-1 text-right">{order.amount}</td>
                    <td className="border p-1 text-right">{order.transportCost}</td>
                    <td className="border p-1">{order.taxType}</td>
                    <td className="border p-1 text-right">
                      {(
                        parseFloat(order.amount || 0) +
                        parseFloat(order.transportCost || 0)
                      ).toFixed(2)}
                    </td>
                    <td className="border p-1 text-right">{order.vat}</td>
                    <td className="border p-1 text-right">{order.total}</td>
                    <td className="border p-1 text-center">
                      <button
                        onClick={() => removeOrder(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-5xl p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaRegEdit className="text-green-600" /> เพิ่มคำสั่งซื้อใหม่
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} className="border p-2 rounded w-full" />
              <input type="text" value={form.subOrder} onChange={(e) => handleChange("subOrder", e.target.value)} placeholder="ลำดับย่อย" className="border p-2 rounded w-full" />
              <input type="text" value={form.customer} onChange={(e) => handleChange("customer", e.target.value)} placeholder="ชื่อลูกค้า" className="border p-2 rounded w-full" />
              <input type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="บริษัท" className="border p-2 rounded w-full" />
              <input type="text" value={form.documentNo} onChange={(e) => handleChange("documentNo", e.target.value)} placeholder="เลขที่เอกสาร" className="border p-2 rounded w-full" />
              <input type="text" value={form.pileType} onChange={(e) => handleChange("pileType", e.target.value)} placeholder="ประเภทเสาเข็ม" className="border p-2 rounded w-full" />
              <input type="number" value={form.pricePerUnit} onChange={(e) => handleChange("pricePerUnit", e.target.value)} placeholder="ราคาต่อท่อน" className="border p-2 rounded w-full" />
              <input type="number" value={form.quantity} onChange={(e) => handleChange("quantity", e.target.value)} placeholder="จำนวนเสาเข็ม" className="border p-2 rounded w-full" />
              <input type="number" value={form.transportCost} onChange={(e) => handleChange("transportCost", e.target.value)} placeholder="ค่าขนส่ง" className="border p-2 rounded w-full" />
              <select value={form.taxType} onChange={(e) => handleChange("taxType", e.target.value)} className="border p-2 rounded w-full">
                <option value="NO VAT">NO VAT</option>
                <option value="แยก VAT">แยก VAT</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleAddOrder}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
              >
                <FaSave /> บันทึกคำสั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrder;