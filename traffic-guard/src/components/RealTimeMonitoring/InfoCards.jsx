import React from 'react';
import { TrafficCone, CloudSun, AlertTriangle } from 'lucide-react';
import '../../styles/RealTimeMonitoring.css'

export default function InfoCards() {
  const cards = [
    { id: 1, title: 'Traffic Status',    value: 'Moderate', icon: <TrafficCone size={24}/> },
    { id: 2, title: 'Weather',           value: 'Sunny, 25°C', icon: <CloudSun size={24}/> },
    { id: 3, title: 'Risk Assessment',   value: 'High',     icon: <AlertTriangle size={24}/> }
  ];

  return (
    <div className="ic-container">
      {cards.map(c => (
        <div key={c.id} className="ic-card">
          {c.icon}
          <div>
            <h3>{c.title}</h3>
            <p>{c.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
