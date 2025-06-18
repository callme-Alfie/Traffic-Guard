import React, { useState } from 'react';
import AlertModal from './AlertModal';
import '../../styles/TabTable.css'

export default function AlertsTab() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: 'Heavy Rain Warning',
      location: 'SKD Blvd',
      level: 'High',
      time: 'June 15, 2025 - 10:30AM',
    },
    {
      id: 2,
      title: 'Traffic Congestion',
      location: 'Sinkor 20th Street',
      level: 'Medium',
      time: 'June 15, 2025 - 8:00AM',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAdd = () => {
    setSelectedAlert(null);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (selectedAlert) {
      // Edit
      setAlerts((prev) =>
        prev.map((a) => (a.id === selectedAlert.id ? { ...data, id: selectedAlert.id } : a))
      );
    } else {
      // Add new
      const newAlert = { ...data, id: Date.now() };
      setAlerts((prev) => [newAlert, ...prev]);
    }
  };

  const handleEdit = (alert) => {
    setSelectedAlert(alert);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this alert?')) {
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="alerts-tab">
      <div className="alerts-header">
        <h2>Alerts</h2>
        <button className="add-btn" onClick={handleAdd}>
          + Add New
        </button>
      </div>

      <table className="alerts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Risk Level</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.title}</td>
              <td>{alert.location}</td>
              <td>
                <span className={`risk-badge ${alert.level.toLowerCase()}`}>{alert.level}</span>
              </td>
              <td>{alert.time}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(alert)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(alert.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AlertModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        existingAlert={selectedAlert}
      />
    </div>
  );
}
