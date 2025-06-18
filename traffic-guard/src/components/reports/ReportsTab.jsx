// src/components/reports/ReportsTab.jsx
import React from 'react';
import { Calendar, Download, Printer } from 'lucide-react';
import ReportPreview from './ReportPreview'; // Placeholder preview component
// import './ReportsTab.css';
import '../../styles/ReportsTab.css'

const ReportsTab = () => {
  return (
    <div className="reports-grid">
      {/* LEFT: Report Form */}
      <div className="report-settings-card">
        <div className="card-header">
          <h3>Report Settings</h3>
          <p>Configure the parameters for your report.</p>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="report-title">Report Title</label>
            <input id="report-title" type="text" placeholder="e.g., Monthly Incident Report" />
          </div>

          <div className="form-group">
            <label htmlFor="report-type">Report Type</label>
            <select id="report-type">
              <option value="summary">Summary Report</option>
              <option value="detailed">Detailed Report</option>
              <option value="trend">Trend Analysis</option>
              <option value="comparison">Comparison Report</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date Range</label>
            <div className="date-range">
              <button><Calendar size={16} /> Start Date</button>
              <button><Calendar size={16} /> End Date</button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select id="location">
              <option value="all">All Locations</option>
              <option value="downtown">Downtown</option>
              <option value="north">North District</option>
              <option value="south">South District</option>
            </select>
          </div>

          <div className="form-group">
            <label>Include Sections</label>
            <div className="checkbox-group">
              <label><input type="checkbox" defaultChecked /> Executive Summary</label>
              <label><input type="checkbox" defaultChecked /> Charts & Visualizations</label>
              <label><input type="checkbox" defaultChecked /> Data Tables</label>
              <label><input type="checkbox" defaultChecked /> Recommendations</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="file-format">Export Format</label>
            <select id="file-format">
              <option value="pdf">PDF Document</option>
              <option value="excel">Excel Spreadsheet</option>
              <option value="csv">CSV File</option>
            </select>
          </div>

          <button className="generate-btn">Generate Report</button>
        </div>
      </div>

      {/* RIGHT: Report Preview */}
      <div className="report-preview-card">
        <div className="card-header">
          <h3>Report Preview</h3>
          <p>Preview of the generated report based on your settings.</p>
          <div className="actions">
            <button><Printer size={16} /> Print</button>
            <button className="export"><Download size={16} /> Export</button>
          </div>
        </div>
        <div className="preview-body">
          <ReportPreview />
        </div>
      </div>
    </div>
  );
};

export default ReportsTab;
