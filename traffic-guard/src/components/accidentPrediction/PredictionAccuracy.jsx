// components/accidentPrediction/PredictionAccuracy.jsx
import React from 'react';

const PredictionAccuracy = ({ overall = 92, breakdown }) => {
  return (
    <div className="prediction-accuracy">
      <h3>Prediction Accuracy</h3>
      <p style={{ fontSize: '2rem', color: 'green' }}>{overall}%</p>
      <ul>
        <li>Location: {breakdown?.location || 0}%</li>
        <li>Time: {breakdown?.time || 0}%</li>
        <li>Severity: {breakdown?.severity || 0}%</li>
      </ul>
    </div>
  );
};

export default PredictionAccuracy;
