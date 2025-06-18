// src/pages/PublicDashboard.jsx
import React from 'react';
// import '../../styles/publicDashboard.css';
import '../styles/publicDashboard.css'
import {
  AlertTriangle, ArrowRight, CloudRain, MapPin, ThumbsUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicDashboard() {
  return (
    <div className="public-container">
      <div className="welcome">
        <h1>Welcome to Traffic Guard</h1>
        <p className="sub">Stay informed about road safety in your area.</p>
      </div>

      <div className="card alert-card">
        <div className="icon-box"><AlertTriangle /></div>
        <div>
          <h3>Safety Alert</h3>
          <p>Heavy rain expected tonight. Drive with caution and reduce speed.</p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>High Risk Zones Today</h3>
          <div className="zone-list">
            <div className="zone-item">
              <MapPin className="icon danger" />
              <span>Downtown Intersection</span>
              <span className="badge danger">High Risk</span>
            </div>
            <div className="zone-item">
              <MapPin className="icon warning" />
              <span>Highway 101 Merge</span>
              <span className="badge warning">Medium Risk</span>
            </div>
            <div className="zone-item">
              <MapPin className="icon warning" />
              <span>Oak Street & Park Road</span>
              <span className="badge warning">Medium Risk</span>
            </div>
          </div>
          <Link to="/public/map" className="link-btn">View Full Map <ArrowRight size={14} /></Link>
        </div>

        <div className="card">
          <h3>Weather Impact</h3>
          <div className="weather-box">
            <div className="icon-circle"><CloudRain /></div>
            <div>
              <div className="weather-status">Rainy</div>
              <p className="muted">Current conditions</p>
            </div>
          </div>
          <p><strong>Safety Tip:</strong> Increase following distance and reduce speed.</p>
          <p><strong>Risk Level:</strong> Moderate - 30% higher accident risk.</p>
        </div>
      </div>

      <div className="card">
        <h3>Safety Tip of the Day</h3>
        <div className="tip-box">
          <div className="icon-box"><ThumbsUp /></div>
          <div>
            <h4>Maintain Safe Following Distance</h4>
            <p>Keep at least 3 seconds of distance between you and the vehicle ahead. In adverse weather conditions,
              increase this to 5–6 seconds.
            </p>
            <Link to="/public/education" className="link-btn">More Safety Tips <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Recent Alerts</h3>
        <div className="alert-list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="alert-item">
              <div className={`icon-box small ${i === 1 ? 'danger' : 'warning'}`}>
                <AlertTriangle />
              </div>
              <div>
                <p className="alert-title">
                  {i === 1 ? "Major Accident on Highway 101"
                    : i === 2 ? "Road Closure on Main Street"
                    : "Construction Delay on River Bridge"}
                </p>
                <div className="alert-meta">
                  <span>
                    {i === 1 ? "Highway 101, Mile 24"
                      : i === 2 ? "Main St between 3rd and 5th Ave"
                      : "River Bridge, Northbound"}
                  </span>
                  <span className="dot">•</span>
                  <span>
                    {i === 1 ? "15 min ago"
                      : i === 2 ? "1 hour ago"
                      : "3 hours ago"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/public/alerts" className="link-btn">View All Alerts <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
