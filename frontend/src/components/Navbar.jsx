import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaQuestionCircle,
  FaTh,
  FaCaretDown,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import Logo from "../assets/logo2.png";
import TopMenu from "./TopMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "Guest",
    role: "Guest",
    profilePic: "/default-profile.png",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        username: storedUser.username || "User",
        role: storedUser.role || "Member",
        profilePic: storedUser.profilePic || "/default-profile.png",
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="relative w-full bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 font-['Prompt'] shadow-md z-50 pb-12">
      {/* ✅ Top Navbar */}
      <div className="flex items-center justify-between px-60 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <p className="text-white font-semibold text-sm truncate max-w-[250px]">
            บจ. โฮมไพล์ เอ็นจิเนียริ่ง (สำนักงานใหญ่)
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-white">
          <FaBell className="w-5 h-5 cursor-pointer hover:text-gray-100" />
          <FaQuestionCircle className="w-5 h-5 cursor-pointer hover:text-gray-100" />
          <FaTh className="w-5 h-5 cursor-pointer hover:text-gray-100" />

          <div className="w-px h-6 bg-white/50 mx-2" />

          <span className="text-sm cursor-pointer hover:underline">EN</span>

          <div className="relative">
            <button
              className="flex items-center gap-2 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-sm font-medium hidden sm:block">{user.username}</span>
              <FaUserCircle className="w-7 h-7" />
              <FaCaretDown className="text-white" />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border z-50">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded-md text-sm flex items-center gap-2"
                >
                  <FaSignOutAlt className="text-base" />
                  ออกจากระบบ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ TopMenu ลอยซ้อนกลางสวยๆ */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-[95%]">
        <TopMenu />
      </div>
    </header>
  );
};

export default Navbar;
