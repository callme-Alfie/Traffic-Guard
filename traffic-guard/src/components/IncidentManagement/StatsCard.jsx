import React from 'react';
import '../../styles/IncidentManagement.css'

export default function StatsCard({ stats }) {
  return (
    <div className="sc-container">
      <h3>Incident Statistics</h3>
      <p className="sc-total">{stats.total}</p>
      <div className="sc-breakdown">
        <span className="sc-active">{stats.active} Active</span>
        <span className="sc-ack"> {stats.acknowledged} Ack.</span>
        <span className="sc-resolved"> {stats.resolved} Resolved</span>
      </div>
    </div>
  );
}
