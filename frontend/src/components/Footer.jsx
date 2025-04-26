import React from "react";
import { FaComments } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F2F55] text-white text-sm font-['Prompt'] px-6 py-3 flex justify-between items-center mt-auto shadow-inner">
      {/* Left */}
      <div>
        <p>ServerHome Version 1.0.0</p>
        <p className="text-xs text-gray-300">© 2025 ServerHome. All rights reserved.</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <a href="#" className="hover:underline text-sm text-gray-200">
          ประกาศเกี่ยวกับความเป็นส่วนตัว
        </a>
        <a href="#" className="hover:underline text-sm text-gray-200">
          ข้อตกลงการใช้งาน
        </a>

        {/* Chat/Support Icon */}
        <div className="relative cursor-pointer">
          <FaComments className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
