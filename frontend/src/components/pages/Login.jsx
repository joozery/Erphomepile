import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im"; // ✅ เพิ่มไอคอนหมุน
import CoverImage from "../../assets/cover.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ เพิ่มตัวแปร loading
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // เริ่มโหลด
    setError(null);

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
    } finally {
      setLoading(false); // หยุดโหลด ไม่ว่าผลจะ success หรือ error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white font-['Prompt'] animate-fade-in">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-700 hover:scale-[1.01] min-h-[650px]">
        
        {/* Left side */}
        <div className="hidden md:flex relative w-1/2">
          <img
            src={CoverImage}
            alt="Login Cover"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 rounded-l-2xl"></div>

          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10 text-center">
            <h2 className="text-3xl font-bold drop-shadow-md">ระบบโรงงานโฮมไพล์ เอ็นจิเนียริ่ง</h2>
            <p className="mt-3 text-sm text-gray-200">
              จัดการธุรกิจของคุณง่าย ๆ ในที่เดียว
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col justify-center p-10 w-full md:w-1/2 space-y-6 animate-slide-up">
          <div>
            <h2 className="text-3xl font-bold text-center text-indigo-700">เข้าสู่ระบบ</h2>
            <p className="text-center text-gray-500 text-sm mt-2">
              กรุณากรอกข้อมูลเพื่อเข้าใช้งานระบบ
            </p>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ชื่อผู้ใช้"
                className="w-full py-4 pl-10 pr-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="รหัสผ่าน"
                className="w-full py-4 pl-10 pr-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 flex justify-center items-center bg-indigo-600 text-white font-semibold rounded-xl transition-all hover:bg-indigo-700 hover:scale-[1.02] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <ImSpinner2 className="animate-spin h-5 w-5 mr-2" />
              ) : null}
              {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-4">
            &copy; 2025 ServerHome ระบบบริหารจัดการ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
