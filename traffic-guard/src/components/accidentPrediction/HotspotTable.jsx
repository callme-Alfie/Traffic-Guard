// components/accidentPrediction/HotspotTable.jsx
import React from 'react';

const HotspotTable = ({ data }) => {
  return (
    <div className="hotspot-table">
      <h3>Hotspot Analysis</h3>
      <table>
        <thead>
          <tr>
            <th>Last Incident</th>
            <th>Location</th>
            <th>Risk Score</th>
            <th>Probability</th>
            <th>Contributing Factors</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.date}</td>
              <td>{row.location}</td>
              <td>{row.riskScore}%</td>
              <td>
                <span className={`risk-badge ${row.riskLevel.toLowerCase().replace(' ', '-')}`}>
                  {row.riskLevel}
                </span>
              </td>
              <td>{row.factors.join(', ')}</td>
              <td>
                <button>📊</button>
                <button>📍</button>
                <button>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotspotTable;
