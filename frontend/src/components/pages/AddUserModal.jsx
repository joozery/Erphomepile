import React, { useState } from "react";
import axios from "axios";

const AddUserModal = ({ isOpen, onClose, onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    role: "member",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post("https://serverhome-api-652e8f25df0c.herokuapp.com/api/users/register", formData);
      onUserAdded();
      onClose();
    } catch (err) {
      setError("ไม่สามารถเพิ่มผู้ใช้ได้");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">เพิ่มผู้ใช้ใหม่</h2>
        {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="ชื่อจริง"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="ชื่อผู้ใช้"
            className="w-full p-2 border rounded"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="w-full p-2 border rounded"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="member">member</option>
            <option value="ceo">ceo</option>
            <option value="บัญชี">บัญชี</option>
            <option value="เซลล์">เซลล์</option>
            <option value="ฝ่ายผลิต">ฝ่ายผลิต</option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
              onClick={onClose}
              disabled={loading}
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? "กำลังเพิ่ม..." : "เพิ่มผู้ใช้"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;