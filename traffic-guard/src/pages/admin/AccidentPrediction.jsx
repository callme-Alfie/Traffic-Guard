import React, { useState } from 'react';
import Tabs from '../../components/accidentPrediction/Tabs';
import ControlsBar from '../../components/accidentPrediction/ControlsBar';
import UploadSection from '../../components/accidentPrediction/UploadSection';
import PredictionSummary from '../../components/accidentPrediction/PredictionSummary';
import PredictionAccuracy from '../../components/accidentPrediction/PredictionAccuracy';
import RecentDatasetsTable from '../../components/accidentPrediction/RecentDatasetsTable';
import DatasetStatusSummary from '../../components/accidentPrediction/DatasetStatusSummary';
import DataProcessingTips from '../../components/accidentPrediction/DataProcessingTips';
import HotspotTable from '../../components/accidentPrediction/HotspotTable';
import RiskFactorsPanel from '../../components/accidentPrediction/RiskFactorsPanel';
import CustomPredictionForm from '../../components/accidentPrediction/CustomPredictionForm';

const AccidentPrediction = () => {
  const [activeTab, setActiveTab] = useState('Risk Prediction');
  const [predictionResult, setPredictionResult] = useState(null);

  const hotspotData = [
    {
      date: '2025-01-07 10:30:30',
      location: 'SKD Boulevard',
      riskScore: 87,
      riskLevel: 'High Risk',
      factors: ['Heavy traffic', 'Poor visibility', 'Construction']
    },
    {
      date: '2025-01-07 10:30:30',
      location: 'SKD Boulevard',
      riskScore: 76,
      riskLevel: 'Medium Risk',
      factors: ['Speeding', 'Wet road conditions', 'Sharp Curve']
    },
    {
      date: '2025-01-07 10:30:30',
      location: 'SKD Boulevard',
      riskScore: 56,
      riskLevel: 'Low Risk',
      factors: ['Speeding', 'Sharp Curve']
    }
  ];

  return (
    <div className="accident-prediction-page">
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'Risk Prediction' && (
        <>
          <ControlsBar />
          <UploadSection onResult={setPredictionResult} />
<div className="summary-grid">
  <PredictionSummary result={predictionResult} />
  <PredictionAccuracy />
</div>
          <RecentDatasetsTable />
          <div className="bottom-row">
            <DatasetStatusSummary />
            <DataProcessingTips />
          </div>
        </>
      )}

      {activeTab === 'Hotspot Analysis' && (
        <>
          <HotspotTable data={hotspotData} />
          <div className="bottom-row" style={{ marginTop: '2rem' }}>
            <PredictionAccuracy />
          </div>
        </>
      )}

      {activeTab === 'Risk Factors' && (
  <>
    <RiskFactorsPanel />
    <div className="bottom-row" style={{ marginTop: '2rem' }}>
      <PredictionAccuracy />
    </div>
  </>
)}

{activeTab === 'Custom Prediction' && (
  <>
    <CustomPredictionForm />
    <div className="risk-about-box">
      <strong>ℹ️ About Custom Predictions</strong>
      <p>
        Custom predictions use the same AI models as our real-time system but allow you to test
        “what-if” scenarios. This helps in planning response and resource allocation.
      </p>
    </div>
    <div className="bottom-row" style={{ marginTop: '2rem' }}>
      <PredictionAccuracy />
    </div>
  </>
)}
    </div>
  );
};

export default AccidentPrediction;
