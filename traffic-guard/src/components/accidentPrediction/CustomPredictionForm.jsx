// components/accidentPrediction/CustomPredictionForm.jsx
import React, { useState } from 'react';
import PredictionModal from './PredictionModal';

const CustomPredictionForm = () => {
  const [form, setForm] = useState({
    location: '',
    roadCondition: '',
    weather: '',
    timeOfDay: '',
    trafficVolume: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Trigger backend prediction later; show modal for now
    setShowModal(true);
  };

  return (
    <div className="custom-predict-tab">
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <select name="location" onChange={handleChange} value={form.location} required>
            <option value="">Pick a Location</option>
            <option value="SKD Boulevard">SKD Boulevard</option>
          </select>

          <select name="weather" onChange={handleChange} value={form.weather} required>
            <option value="">Weather Condition</option>
            <option value="Rain">Rain</option>
            <option value="Sunny">Sunny</option>
          </select>

          <select name="roadCondition" onChange={handleChange} value={form.roadCondition} required>
            <option value="">Road Condition</option>
            <option value="Wet">Wet</option>
            <option value="Dry">Dry</option>
          </select>

          <select name="timeOfDay" onChange={handleChange} value={form.timeOfDay} required>
            <option value="">Time of Day</option>
            <option value="Evening Rush (4-7 PM)">Evening Rush (4-7 PM)</option>
            <option value="Morning (6-9 AM)">Morning (6-9 AM)</option>
          </select>

          <select name="trafficVolume" onChange={handleChange} value={form.trafficVolume} required>
            <option value="">Traffic Volume</option>
            <option value="Heavy">Heavy</option>
            <option value="Light">Light</option>
          </select>

          <button type="submit" className="generate-btn">Generate Prediction</button>
        </div>
      </form>

      {showModal && <PredictionModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CustomPredictionForm;
