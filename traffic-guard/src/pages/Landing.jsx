import React from 'react'
import '../styles/landing.css'

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Traffic Guard</h1>
        <p>Your AI-driven road safety companion</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Real-Time Monitoring</h2>
          <p>Track traffic incidents live and stay safe.</p>
        </div>
        <div className="feature">
          <h2>Accident Prediction</h2>
          <p>AI-powered predictions to prevent accidents.</p>
        </div>
        <div className="feature">
          <h2>Policy Recommendations</h2>
          <p>Data-driven insights for better traffic policies.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing
