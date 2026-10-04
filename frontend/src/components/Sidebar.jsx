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
    <div className="w-64 min-h-screen hidden lg:block bg-black/20 backdrop-blur-2xl border-r border-white/10">
      <h1 className="text-2xl font-bold text-blue-400 mb-2">
        SmartRetail AI
      </h1>

      <p className="text-gray-400 text-sm mb-10">
        People Counting & Analytics
      </p>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 cursor-pointer transition-all"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            A
          </div>

          <div>
            <h4>Admin</h4>
            <p className="text-xs text-gray-400">
              admin@store.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}