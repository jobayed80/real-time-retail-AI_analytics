import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Cameras from './pages/Cameras';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`flex h-screen overflow-hidden transition-colors duration-200 ${isDarkMode ? 'dark bg-slate-950 text-white' : 'bg-gray-100 text-gray-900'}`}>
        

        {/* Right Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Navbar */}
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

          {/* Page Content Container */}
          <main className="flex-1 overflow-y-auto p-4 transition-colors duration-200">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cameras" element={<Cameras />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>

      </div>
    </Router>
  );
}

export default App;