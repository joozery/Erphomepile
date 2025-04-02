import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import AddUserModal from "./AddUserModal"; // ✅ อย่าลืมสร้างไฟล์นี้

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://serverhome-api-652e8f25df0c.herokuapp.com/api/users");
      if (Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        setError("ข้อมูลผู้ใช้ไม่ถูกต้อง");
      }
    } catch (err) {
      setError("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-blue-600 animate-pulse">กำลังโหลดข้อมูล...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Prompt']">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800"> จัดการผู้ใช้งาน</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 shadow-md transition-all"
        >
          <FaUserPlus /> เพิ่มผู้ใช้
        </button>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-indigo-600 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">ชื่อผู้ใช้</th>
              <th className="px-4 py-3 text-left">ชื่อจริง</th>
              <th className="px-4 py-3 text-left">สิทธิ์</th>
              <th className="px-4 py-3 text-left">การจัดการ</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50 transition-all">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3 font-medium">{user.username}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm
                      ${
                        user.role === "ceo"
                          ? "bg-yellow-100 text-yellow-700"
                          : user.role === "บัญชี"
                          ? "bg-pink-100 text-pink-600"
                          : user.role === "เซลล์"
                          ? "bg-blue-100 text-blue-600"
                          : user.role === "ฝ่ายผลิต"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <button className="text-indigo-500 hover:text-indigo-700 transition">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal component */}
      <AddUserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onUserAdded={fetchUsers}
      />
    </div>
  );
};

export default ManageUser;