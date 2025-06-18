// components/accidentPrediction/PredictionModal.jsx
import React from 'react';

const PredictionModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h3>Prediction Results</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">
          <h2 style={{ color: 'red' }}>High Risk (83%)</h2>
          <p>
            The combination of evening rush hour, rain, and construction creates a high-risk scenario
            at this location.
          </p>

          <div className="risk-factor-list">
            <h4>Primary Risk Factors</h4>
            <ul>
              <li>Rain <strong>+35%</strong></li>
              <li>Evening Rush Hour <strong>+28%</strong></li>
              <li>Construction Zone <strong>+25%</strong></li>
            </ul>
          </div>

          <div className="modal-actions">
            <button className="add-btn">Add to Hotzones</button>
            <button className="share-btn">🔗 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;
