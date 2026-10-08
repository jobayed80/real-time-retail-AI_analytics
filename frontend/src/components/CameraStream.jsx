import React from 'react';

const CameraStream = () => {
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <img
        src="http://localhost:8000/video_feed"
        alt="Live AI Feed"
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '12px',
          border: '2px solid #00ff88',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}
      />
    </div>
  );
};

export default CameraStream;