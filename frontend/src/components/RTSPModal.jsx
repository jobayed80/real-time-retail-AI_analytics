import React, { useState } from 'react';
import { FaVideo, FaKey, FaServer } from 'react-icons/fa';

const RTSPModal = ({ isOpen, onClose, onConnect }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    ip: '',
    port: '554',
    path: '/h264Preview_01_main'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/set_rtsp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Connection failed');

      onConnect();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <FaVideo /> Connect Custom Camera (RTSP)
        </h3>

        {error && <p className="bg-red-500/20 text-red-400 text-xs p-2.5 rounded mb-4 border border-red-500/30">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="text-xs text-gray-400">Username</label>
            <input
              type="text"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white mt-1"
              placeholder="admin"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white mt-1"
              placeholder="••••••••"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="text-xs text-gray-400">Camera IP Address</label>
              <input
                type="text"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white mt-1"
                placeholder="192.168.1.100"
                onChange={(e) => setFormData({ ...formData, ip: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Port</label>
              <input
                type="text"
                defaultValue="554"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white mt-1"
                onChange={(e) => setFormData({ ...formData, port: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400">RTSP Stream Path (Brand Specific)</label>
            <input
              type="text"
              defaultValue="/h264Preview_01_main"
              className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white mt-1 font-mono text-xs"
              placeholder="/stream1 (Tapo) or /h264Preview_01_main"
              onChange={(e) => setFormData({ ...formData, path: e.target.value })}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-bold transition-all"
            >
              {loading ? 'Connecting...' : 'Start Stream'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RTSPModal;