import React from 'react';
import CameraStream from '../components/CameraStream';

const Cameras = () => {
  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>Camera Monitoring</h2>
      <CameraStream />
    </div>
  );
};

export default Cameras;