// components/accidentPrediction/ControlsBar.jsx
import React from 'react';

const ControlsBar = ({ onExport }) => {
  return (
    <div className="controls-bar">
      <select>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>All Time</option>
      </select>
      <button onClick={onExport}>Export Data</button>
    </div>
  );
};

export default ControlsBar;
