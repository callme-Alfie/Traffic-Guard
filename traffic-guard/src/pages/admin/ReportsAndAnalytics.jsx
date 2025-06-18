// src/pages/admin/ReportsAndAnalytics.jsx
import React, { useState } from 'react';
import AnalyticsTab from '../../components/reports/AnalyticsTab';
import ReportsTab from '../../components/reports/ReportsTab';
import PolicyTab from '../../components/reports/PolicyTab';
import '../../styles/ReportsAndAnalytics.css';

const ReportsAndAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Analytics');

  const renderTab = () => {
    switch (activeTab) {
      case 'Analytics':
        return <AnalyticsTab />;
      case 'Reports':
        return <ReportsTab />;
      case 'Policy':
        return <PolicyTab />;
      default:
        return <AnalyticsTab />;
    }
  };

  return (
    <div className="reports-container">
      <div className="reports-tabs">
        {['Analytics', 'Reports', 'Policy'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="reports-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
