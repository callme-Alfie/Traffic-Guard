// src/pages/admin/PublicAwarenessManagement.jsx
import React, { useState } from 'react';
import AlertsTab from '../../components/publicAwareness/AlertsTab';
import TipsTab from '../../components/publicAwareness/TipsTab';
import ResourcesTab from '../../components/publicAwareness/ResourcesTab';
import RiskZonesTab from '../../components/publicAwareness/RiskZonesTab';
import '../../styles/PublicAwarenessManagement.css'

const TABS = ['Alerts', 'Tips', 'Resources', 'Risk Zones'];

export default function PublicAwarenessManagement() {
  const [activeTab, setActiveTab] = useState('Alerts');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Alerts': return <AlertsTab />;
      case 'Tips': return <TipsTab />;
      case 'Resources': return <ResourcesTab />;
      case 'Risk Zones': return <RiskZonesTab />;
      default: return null;
    }
  };

  return (
    <div className="public-awareness-page">
      <div className="header">
        <h1>Public Awareness Management</h1>
        <p>Manage all information displayed to the public dashboard.</p>
      </div>

      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderActiveTab()}
      </div>
    </div>
  );
}
