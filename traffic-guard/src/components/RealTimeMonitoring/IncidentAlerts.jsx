import React from 'react';
import { AlertCircle } from 'lucide-react';
import '../../styles/RealTimeMonitoring.css'

export default function IncidentAlerts() {
  const alerts = [
    { id: 1, text: 'Accident on Hwy 5', time: '2 min ago' },
    { id: 2, text: 'Roadblock at 3rd Ave', time: '5 min ago' },
    { id: 3, text: 'Heavy traffic on Elm St', time: '10 min ago' }
  ];
  return (
    <div className="ia-container">
      <h2>Live Incident Alerts</h2>
      <ul>
        {alerts.map(a => (
          <li key={a.id}>
            <AlertCircle size={16} className="ia-icon" />
            <div>
              <p>{a.text}</p>
              <span>{a.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
