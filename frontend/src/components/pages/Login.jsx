import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://serverhome-api-652e8f25df0c.herokuapp.com/api/users/login", {
        username,
        password,
      });

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard/overview");
      }
    } catch (err) {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white font-['Prompt']">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 transition-all duration-300"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">
          👋 ยินดีต้อนรับ
        </h2>
        <p className="text-center text-sm text-gray-500">กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <div className="relative">
          <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
        >
          เข้าสู่ระบบ
        </button>

        <div className="text-center text-sm text-gray-400">
          &copy; 2025 ServerHome ระบบบริหารจัดการ
        </div>
      </form>
    </div>
  );
};

export default Login;