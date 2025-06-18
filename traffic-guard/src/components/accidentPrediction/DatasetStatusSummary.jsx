// components/accidentPrediction/DatasetStatusSummary.jsx
import React from 'react';

const DatasetStatusSummary = () => {
  return (
    <div className="dataset-status-summary">
      <h4>Data Set Status</h4>
      <p>Total Dataset: 3</p>
      <p style={{ color: 'green' }}>1 Processed</p>
      <p style={{ color: 'orange' }}>1 Processing</p>
      <p style={{ color: 'red' }}>1 Failed</p>
    </div>
  );
};

export default DatasetStatusSummary;
