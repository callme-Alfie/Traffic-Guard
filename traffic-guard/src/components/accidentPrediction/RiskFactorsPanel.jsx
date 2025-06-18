// components/accidentPrediction/RiskFactorsPanel.jsx
import React from 'react';
import '../../styles/accident.css';

const factors = [
  {
    title: 'Weather Conditions',
    icon: '🌧️',
    impact: 'High Impact',
    color: 'red',
    description: 'Increases accident risk by 35%'
  },
  {
    title: 'Traffic Volume',
    icon: '🚗',
    impact: 'High Impact',
    color: 'red',
    description: 'Volume above 25% increases accident risk by 42%'
  },
  {
    title: 'Temperature',
    icon: '🌡️',
    impact: 'Medium Impact',
    color: 'orange',
    description: '2 degrees Celsius or more increases accident risk by 12%'
  },
  {
    title: 'Wind Speed',
    icon: '🌬️',
    impact: 'Medium Impact',
    color: 'orange',
    description: 'Greater than 15 mph increases accident risk by 8%'
  },
  {
    title: 'Time of Day',
    icon: '🕒',
    impact: 'Medium Impact',
    color: 'orange',
    description: 'Rush hour (5-7 PM) increases accident risk by 32%'
  }
];

const RiskFactorsPanel = () => {
  return (
    <div className="risk-factors-tab">
      <div className="risk-grid">
        {factors.map((factor, i) => (
          <div className="factor-card" key={i}>
            <div className="icon">{factor.icon}</div>
            <h4>{factor.title}</h4>
            <span className={`impact-label ${factor.color}`}>{factor.impact}</span>
            <p>{factor.description}</p>
          </div>
        ))}
      </div>

      <div className="risk-about-box">
        <strong>🔎 About Risk Factor</strong>
        <p>
          Risk factors are calculated using machine learning algorithms that analyze historical
          accident data, current conditions, and predictive models. The AI continuously learns
          from new data to improve prediction accuracy.
        </p>
      </div>
    </div>
  );
};

export default RiskFactorsPanel;
