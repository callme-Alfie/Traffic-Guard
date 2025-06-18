import React from 'react';

const PredictionSummary = ({ result }) => {
  if (!result) return null;

  return (
    <div className="prediction-summary">
      <h3>📊 Prediction Summary</h3>
      <p><strong>Total Records:</strong> {result.total}</p>
      <p><strong>High Risk:</strong> {result.highRisk}</p>
      <p><strong>Medium Risk:</strong> {result.mediumRisk}</p>
      <p><strong>Low Risk:</strong> {result.lowRisk}</p>
      <p><strong>Prediction Accuracy:</strong> {result.accuracy}%</p>
      <p><strong>Most Recent Zone:</strong> {result.zone}</p>
    </div>
  );
};

export default PredictionSummary;
