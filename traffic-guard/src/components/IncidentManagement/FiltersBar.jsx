import React from 'react';
import '../../styles/IncidentManagement.css'

export default function FiltersBar({
  filters,      // { search, status, severity, from, to }
  onChange,     // fn(field, value)
  onNewIncident // fn()
}) {
  return (
    <div className="fb-container">
      <input
        type="text"
        placeholder="Search incidents..."
        value={filters.search}
        onChange={e => onChange('search', e.target.value)}
      />
      <select
        value={filters.status}
        onChange={e => onChange('status', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="acknowledged">Acknowledged</option>
        <option value="resolved">Resolved</option>
      </select>
      <select
        value={filters.severity}
        onChange={e => onChange('severity', e.target.value)}
      >
        <option value="">All Severity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={filters.from}
        onChange={e => onChange('from', e.target.value)}
      />
      <input
        type="date"
        value={filters.to}
        onChange={e => onChange('to', e.target.value)}
      />
      <button className="fb-new" onClick={onNewIncident}>
        + New Incident
      </button>
    </div>
  );
}
