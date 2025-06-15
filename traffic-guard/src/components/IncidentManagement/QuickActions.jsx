import React from 'react';
import '../../styles/IncidentManagement.css'
import { Plus, Bell, Truck } from 'lucide-react';

export default function QuickActions({ onAction }) {
  return (
    <div className="qa2-container">
      <button onClick={() => onAction('report')}>
        <Plus size={16} /> Report Incident
      </button>
      <button onClick={() => onAction('alert')}>
        <Bell size={16} /> Alert Public
      </button>
      <button onClick={() => onAction('assign')}>
        <Truck size={16} /> Send to Authority
      </button>
    </div>
  );
}
