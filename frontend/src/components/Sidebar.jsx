import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", path: "/" },
    { icon: <FaVideo />, text: "Live View", path: "/cameras" },
    { icon: <FaChartBar />, text: "Analytics", path: "/analytics" },
    { icon: <FaCamera />, text: "Cameras", path: "/cameras" },
    { icon: <FaFileAlt />, text: "Reports", path: "/reports" },
    { icon: <FaBell />, text: "Alerts", path: "/alerts" },
    { icon: <FaCog />, text: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen hidden lg:flex flex-col justify-between bg-[#111827]/90 backdrop-blur-2xl border-r border-white/10 p-6 sticky top-0 shrink-0 overflow-y-auto">
      
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
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.text}
                to={item.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer Section */}
      <div className="pt-4 border-t border-white/10 mt-auto">
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