import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";

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
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between font-['Prompt']">
      {/* ✅ Left: Welcome */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          สวัสดี {user.username} 👋
        </h1>
        <p className="text-sm text-gray-500">
          วันนี้{" "}
          {new Date().toLocaleDateString("th-TH", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      {/* ✅ Right: Profile */}
      <div className="relative">
        <button
          className="flex items-center gap-3 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={user.profilePic}
            alt="User"
            className="w-10 h-10 rounded-full shadow-sm border"
          />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-gray-800">{user.username}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
          <FaCaretDown className="text-gray-500" />
        </button>

        {/* ✅ Dropdown */}
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
    </header>
  );
};

export default Navbar;