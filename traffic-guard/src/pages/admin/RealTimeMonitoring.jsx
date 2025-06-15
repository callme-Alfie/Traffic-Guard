import React from 'react';
import TrafficVisualization from '../../components/RealTimeMonitoring/TrafficVisualization.jsx';
import IncidentAlerts       from '../../components/RealTimeMonitoring/IncidentAlerts.jsx';
import QuickActions         from '../../components/RealTimeMonitoring/QuickActions.jsx';
import InfoCards            from '../../components/RealTimeMonitoring/InfoCards.jsx';
import '../../styles/RealTimeMonitoring.css'

export default function RealTimeMonitoring() {
  return (
    <div className="rtm-container">
     {/* <h1>Live Traffic Visualization</h1> */}
     


      <TrafficVisualization />
      <IncidentAlerts />
      <QuickActions />
      <InfoCards />
    </div>
  );
}
