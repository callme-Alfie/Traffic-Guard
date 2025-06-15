import React from 'react';
import '../../styles/IncidentManagement.css'
import { Trash2, Eye, AlertTriangle, MapPin } from 'lucide-react';

export default function IncidentsTable({ data, onAction }) {
  return (
    <table className="it-table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Type</th>
          <th>Location</th>
          <th>Severity</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.timestamp}</td>
            <td>
              <AlertTriangle size={16} className="icon-warning" />{' '}
              {item.type}
            </td>
            <td>{item.location}</td>
            <td>{item.severity}</td>
            <td>
              <span className={`badge badge-${item.status}`}>
                {item.status}
              </span>
            </td>
            <td className="it-actions">
              <button onClick={() => onAction(item, 'view')}>
                <Eye size={16} />
              </button>
              <button onClick={() => onAction(item, 'map')}>
                <MapPin size={16} />
              </button>
              <button onClick={() => onAction(item, 'delete')}>
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
