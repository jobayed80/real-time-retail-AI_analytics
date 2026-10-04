import React from 'react';
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { 
  FaUsers, FaSignInAlt, FaSignOutAlt, FaClock, 
  FaExclamationTriangle, FaShieldAlt 
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#071421] to-slate-950 text-white">

      {/* Mobile Navbar */}
      <div className="lg:hidden p-4 border-b border-white/10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">SmartRetail AI</h1>
        <span className="text-emerald-400 text-xs px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/20">● System Running</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">

          {/* Top Header Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Welcome Back, Admin!</h1>
              <p className="text-gray-400 mt-1 text-sm">Real time people counting, analytics and insights for your store.</p>
            </div>
            <div className="hidden xl:flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-400 font-medium">System Running (Uptime: 02:16:22)</span>
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard
              icon={<FaUsers size={18} />}
              title="Current Inside"
              value="12"
              subtitle="People in store[cite: 9]"
              trend="↑ 6%"
              trendColor="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
              iconBgColor="bg-blue-600"
            />
            <StatCard
              icon={<FaSignInAlt size={18} />}
              title="Total Entered"
              value="152"
              subtitle="Today's entries[cite: 9]"
              trend="↑ 18%"
              trendColor="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
              iconBgColor="bg-emerald-600"
            />
            <StatCard
              icon={<FaSignOutAlt size={18} />}
              title="Total Exited"
              value="140"
              subtitle="Today's exits[cite: 9]"
              trend="↓ 5%"
              trendColor="text-rose-400 bg-rose-500/10 border border-rose-500/20"
              iconBgColor="bg-rose-600"
            />
            <StatCard
              icon={<FaClock size={18} />}
              title="Average Dwell Time"
              value="4.8 min"
              subtitle="Per customer[cite: 9]"
              trend="↑ 16%"
              trendColor="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
              iconBgColor="bg-purple-600"
            />
          </div>

          {/* Main Dashboard Workspace Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            {/* Left Column (Camera Feed & Safety Logs) */}
            <div className="xl:col-span-2 space-y-6">
              
              {/* Live Camera Feed */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-base flex items-center space-x-2">
                    <span>Live Camera Feed - Store Entrance (Camera 1)[cite: 9]</span>
                  </h2>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs px-2.5 py-1 rounded font-bold animate-pulse">
                      ⚠️ FIRE HAZARD DETECTED!
                    </span>
                    <span className="text-green-400 text-sm font-bold">● LIVE</span>
                  </div>
                </div>

                <div className="h-[320px] md:h-[380px] bg-black/40 rounded-xl relative overflow-hidden border border-white/10 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs font-mono space-y-0.5">
                    <p className="text-green-400">ENTRY : 152</p>
                    <p className="text-red-400">EXIT : 140</p>
                    <p className="text-cyan-400 font-bold">INSIDE : 12</p>
                  </div>
                  <p className="text-gray-500 text-sm">YOLOv8 Detection Stream Active</p>
                </div>
              </div>

              {/* Safety & Risk Alert Log */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-base flex items-center space-x-2">
                    <FaShieldAlt className="text-red-400" />
                    <span>Safety & Risk Alert Log</span>
                  </h2>
                  <span className="text-xs text-gray-400 cursor-pointer hover:text-white">View All</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400 text-xs">
                        <th className="py-2.5 px-3 font-medium">Timestamp</th>
                        <th className="py-2.5 px-3 font-medium">Event Type</th>
                        <th className="py-2.5 px-3 font-medium">Location</th>
                        <th className="py-2.5 px-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300 text-xs">
                      <tr>
                        <td className="py-2.5 px-3 font-mono">10:22:45</td>
                        <td className="py-2.5 px-3 text-red-400 font-semibold">Fire Hazard[cite: 9]</td>
                        <td className="py-2.5 px-3">Store Entrance[cite: 9]</td>
                        <td className="py-2.5 px-3"><span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">ALARM[cite: 9]</span></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono">10:19:45</td>
                        <td className="py-2.5 px-3 text-red-400 font-semibold">Fire Hazard[cite: 9]</td>
                        <td className="py-2.5 px-3">Store Entrance[cite: 9]</td>
                        <td className="py-2.5 px-3"><span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">ALARM[cite: 9]</span></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono">10:10:12</td>
                        <td className="py-2.5 px-3 text-amber-400">Occupancy Limit[cite: 9]</td>
                        <td className="py-2.5 px-3">Aisle 4[cite: 9]</td>
                        <td className="py-2.5 px-3"><span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">Monitored[cite: 9]</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Column (All Missing Graphs & Panels from Image) */}
            <div className="space-y-6 flex flex-col">
              
              {/* 1. People Count Trend (Today) */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-sm">People Count Trend (Today)[cite: 9]</h3>
                  <div className="flex items-center gap-3 text-[10px] text-gray-400">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Entries[cite: 9]</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Exits[cite: 9]</span>
                  </div>
                </div>
                <div className="h-28 bg-black/20 rounded-lg flex items-center justify-center border border-white/5">
                  <p className="text-gray-500 text-xs">[Line Chart Mockup]</p>
                </div>
              </div>

              {/* 2. Gender Distribution */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3">Gender Distribution[cite: 9]</h3>
                <div className="flex items-center justify-around py-1">
                  <div className="w-20 h-20 rounded-full border-4 border-blue-500 border-t-pink-500 flex items-center justify-center text-xs font-bold">
                    152[cite: 9]
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="text-blue-400 font-medium">● Male: 58%[cite: 9]</p>
                    <p className="text-pink-400 font-medium">● Female: 42%[cite: 9]</p>
                  </div>
                </div>
              </div>

              {/* 3. Age Group Distribution */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3">Age Group Distribution[cite: 9]</h3>
                <div className="h-24 bg-black/20 rounded-lg flex items-center justify-center border border-white/5">
                  <p className="text-gray-500 text-xs">[Bar Chart: 0-18, 18-30, 30-50, 50+][cite: 9]</p>
                </div>
              </div>

              {/* 4. Store Occupancy */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-2">Store Occupancy[cite: 9]</h3>
                <div className="flex justify-between items-center my-2">
                  <div>
                    <h4 className="text-2xl font-extrabold text-cyan-400">12[cite: 9]</h4>
                    <p className="text-[11px] text-gray-400">People Inside[cite: 9]</p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="text-gray-400">Store Capacity: <span className="text-white font-bold">50</span>[cite: 9]</p>
                    <p className="text-cyan-300 font-bold mt-0.5">Occupancy Rate: 24%[cite: 9]</p>
                  </div>
                </div>
              </div>

              {/* 5. Recent Activity */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3">Recent Activity[cite: 9]</h3>
                <div className="h-24 bg-black/20 rounded-lg flex items-center justify-center border border-white/5">
                  <p className="text-gray-500 text-xs">[Activity Histogram]</p>
                </div>
              </div>

              {/* 6. Peak Hours (Today) */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-sm">Peak Hours (Today)[cite: 9]</h3>
                  <span className="text-xs text-cyan-400 cursor-pointer">ViewAll[cite: 9]</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-red-400">● Store over capacity warning[cite: 9]</span>
                    <span className="text-gray-400 font-mono">10:20 AM[cite: 9]</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-amber-400">● High dwell time detected[cite: 9]</span>
                    <span className="text-gray-400 font-mono">09:45 AM[cite: 9]</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">● Camera 2 offline[cite: 9]</span>
                    <span className="text-gray-400 font-mono">09:10 AM[cite: 9]</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}