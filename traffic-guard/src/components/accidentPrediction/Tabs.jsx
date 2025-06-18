// components/accidentPrediction/Tabs.jsx
import React from 'react';
import '../../styles/accident.css';

const Tabs = ({ activeTab, onChange }) => {
  const tabs = ['Risk Prediction', 'Hotspot Analysis', 'Risk Factors', 'Custom Prediction'];

  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <button
          key={tab}
          className={activeTab === tab ? 'tab active' : 'tab'}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
