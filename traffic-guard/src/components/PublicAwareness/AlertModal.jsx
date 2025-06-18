// src/components/publicAwareness/AlertModal.jsx
import React, { useState, useEffect } from 'react';

import '../../styles/TabTable.css'

export default function AlertModal({ isOpen, onClose, onSave, existingAlert }) {
  const [form, setForm] = useState({
    title: '',
    location: '',
    level: 'Low',
    time: ''
  });

  useEffect(() => {
    if (existingAlert) {
      setForm(existingAlert);
    } else {
      setForm({
        title: '',
        location: '',
        level: 'Low',
        time: ''
      });
    }
  }, [existingAlert]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.title || !form.location || !form.time) return alert("All fields are required");
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="alert-modal-backdrop">
      <div className="alert-modal">
        <h2>{existingAlert ? 'Edit Alert' : 'Add New Alert'}</h2>
        <div className="modal-body">
          <label>
            Title
            <input name="title" value={form.title} onChange={handleChange} />
          </label>
          <label>
            Location
            <input name="location" value={form.location} onChange={handleChange} />
          </label>
          <label>
            Risk Level
            <select name="level" value={form.level} onChange={handleChange}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>
          <label>
            Date & Time
            <input name="time" value={form.time} onChange={handleChange} placeholder="e.g., June 16, 2025 - 8:00AM" />
          </label>
        </div>
        <div className="modal-footer">
          <button className="save-btn" onClick={handleSubmit}>Save</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
