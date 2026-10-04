import React from 'react';
import {
  FaHome,
  FaVideo,
  FaChartBar,
  FaCamera,
  FaFileAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { icon: <FaHome />, text: "Dashboard" },
    { icon: <FaVideo />, text: "Live View" },
    { icon: <FaChartBar />, text: "Analytics" },
    { icon: <FaCamera />, text: "Cameras" },
    { icon: <FaFileAlt />, text: "Reports" },
    { icon: <FaBell />, text: "Alerts" },
    { icon: <FaCog />, text: "Settings" },
  ];

  return (
    <aside className="w-64 min-h-screen hidden lg:flex flex-col justify-between bg-[#111827]/80 backdrop-blur-2xl border-r border-white/10 p-6 sticky top-0">
      
      {/* Top Brand / Title Section */}
      <div>
        <div className="mb-8">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wide flex items-center gap-2">
            <span className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">AI</span>
            SmartRetail AI
          </h1>
          <p className="text-gray-400 text-xs mt-1">
            People Counting & Analytics
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {menuItems.map((item, index) => (
            <a
              key={item.text}
              href="#"
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                index === 0
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* User Profile Footer Section */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white shadow-md shadow-emerald-500/20">
            A
          </div>
          <div className="overflow-hidden">
            <h4 className="text-sm font-semibold text-gray-200">Admin</h4>
            <p className="text-xs text-gray-400 truncate">
              admin@store.com
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}