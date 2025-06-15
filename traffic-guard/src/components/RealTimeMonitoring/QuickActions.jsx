import React from 'react';
import { Activity, ArrowUpCircle, Bell } from 'lucide-react';
import '../../styles/RealTimeMonitoring.css'

export default function QuickActions() {
  const actions = [
    { id: 1, label: 'Dispatch Patrol',   icon: <Activity size={16}/> },
    { id: 2, label: 'Clear Roadblock',   icon: <ArrowUpCircle size={16}/> },
    { id: 3, label: 'Send Alert',        icon: <Bell size={16}/> }
  ];

  return (
    <div className="qa-container">
      <h2>Quick Actions</h2>
      <div className="qa-buttons">
        {actions.map(a => (
          <button key={a.id} className="qa-btn">
            {a.icon}
            <span>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
