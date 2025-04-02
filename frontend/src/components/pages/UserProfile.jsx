import React from "react";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg font-['Prompt']">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.name || "ชื่อผู้ใช้"}</h2>
            <p className="text-gray-500">{user?.username || "email@example.com"}</p>
          </div>
        </div>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          แก้ไข
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded bg-gray-50"
            value={user?.name || ""}
            readOnly
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded bg-gray-50"
            value={user?.username || ""}
            readOnly
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Role</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded bg-gray-50"
            value={user?.role || ""}
            readOnly
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded bg-gray-50"
            value="**********"
            readOnly
          />
        </div>
      </div>

      {/* Email Section */}
      <div className="mt-10">
        <h3 className="font-semibold text-gray-800 mb-3">My email Address</h3>
        <div className="flex items-center gap-4 p-4 border rounded bg-gray-50">
          <div className="bg-indigo-100 text-indigo-600 rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm6 4l6-4H6l6 4z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">{user?.username || "email@example.com"}</p>
            <p className="text-xs text-gray-500">ใช้งานอยู่</p>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 text-indigo-600 border border-indigo-300 rounded hover:bg-indigo-50">
          + เพิ่ม Email
        </button>
      </div>
    </div>
  );
};

export default UserProfile;