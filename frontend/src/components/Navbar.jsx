import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaSearch, FaUserCircle, FaBars, FaTimes, FaSun, FaMoon, FaHome, FaVideo, FaChartBar, FaCamera, FaFileAlt, FaCog } from 'react-icons/fa';

export default function Navbar({ toggleTheme, isDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", path: "/" },
    { icon: <FaVideo />, text: "Live View", path: "/cameras" },
    { icon: <FaChartBar />, text: "Analytics", path: "/analytics" },
    { icon: <FaCamera />, text: "Cameras", path: "/cameras" },
    { icon: <FaFileAlt />, text: "Reports", path: "/reports" },
    { icon: <FaCog />, text: "Settings", path: "/settings" },
  ];

  return (
    <>
      <header className="h-16 bg-white/70 dark:bg-white/5 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 px-4 md:px-6 flex items-center justify-between shrink-0 sticky top-0 z-50 transition-colors">
        
        {/* Left side */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white bg-gray-200 dark:bg-white/5 rounded-xl border border-gray-300 dark:border-white/10"
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>

          <h1 className="font-extrabold text-sm md:text-base tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Shop People AI
          </h1>
          <span className="hidden sm:inline-block bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold">
            Online
          </span>
        </div>

        {/* Middle: Search */}
        <div className="hidden md:flex items-center bg-gray-200/70 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-xl px-3 py-1.5 w-60 lg:w-72 text-xs">
          <FaSearch className="text-gray-500 dark:text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search cameras, logs..." 
            className="bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 w-full"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl transition-colors text-amber-500 dark:text-yellow-400"
            title="Toggle Theme"
          >
            {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} className="text-slate-700" />}
          </button>

          <button className="relative p-2 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl transition-colors">
            <FaBell className="text-gray-700 dark:text-gray-300 text-xs md:text-sm" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-2 pl-2 border-l border-gray-300 dark:border-white/10">
            <FaUserCircle className="text-xl md:text-2xl text-gray-700 dark:text-gray-300" />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold leading-tight">Admin</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">Manager</p>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-64 h-full bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-white/10 p-6 flex flex-col justify-between z-50 shadow-2xl">
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-lg font-bold text-cyan-600 dark:text-cyan-400">SmartRetail AI</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  <FaTimes size={18} />
                </button>
              </div>

              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.text}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}