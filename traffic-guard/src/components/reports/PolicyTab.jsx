// src/components/reports/PolicyRecommendationsTab.jsx
import React from 'react';
// import './PolicyRecommendationsTab.css';
import '../../styles/PolicyTab.css'

const PolicyTab = () => {
  return (
    <div className="policy-rec-tab">
      <h2>Policy Recommendations</h2>
      <p className="intro">
        These suggestions are generated based on recent incident trends, hotzones, and traffic patterns. Please review and forward to the appropriate authorities for action.
      </p>

      <div className="recommendation-card">
        <h4>🛑 Install Speed Bumps in High-Risk Areas</h4>
        <p>Data shows a high frequency of collisions at uncontrolled intersections. Installing speed bumps at <strong>Oak Street & Park Road</strong> and <strong>Downtown Intersection</strong> could significantly reduce speeding-related accidents.</p>
      </div>

      <div className="recommendation-card">
        <h4>🚦 Increase Traffic Light Timing</h4>
        <p>Heavy congestion and incident buildup reported at <strong>Highway 101 Merge</strong>. Increasing green-light duration during rush hour can reduce vehicle pile-ups and lane-change accidents.</p>
      </div>

      <div className="recommendation-card">
        <h4>📣 Community Awareness Campaigns</h4>
        <p>Many accidents are linked to careless pedestrian crossings and distracted driving. Partner with local media to run targeted road safety campaigns across vulnerable zones.</p>
      </div>

      <div className="recommendation-card">
        <h4>🧯 Emergency Response Optimization</h4>
        <p>Incident logs show delays in medical assistance. Deploy satellite response units closer to key hotzones and optimize ambulance routing algorithms.</p>
      </div>

      <div className="recommendation-footer">
        <button className="action-btn">Download All Recommendations</button>
        <button className="action-btn outline">Send to Stakeholders</button>
      </div>
    </div>
  );
};

export default PolicyTab;
