import React from 'react';

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
  trend,
  trendColor,
  iconBgColor
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-lg">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${iconBgColor} text-white shadow-md`}>
            {icon}
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium">{title}</p>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-0.5">{value}</h3>
          </div>
        </div>
        {trend && (
          <span className={`text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1 ${trendColor}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-3 pt-2 border-t border-white/5">
        {subtitle}
      </p>
    </div>
  );
}