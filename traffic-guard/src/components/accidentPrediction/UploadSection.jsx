import React, { useState, useRef } from 'react';
import { uploadRiskDataset } from '../../services/riskPredictionService';

const UploadSection = ({ onResult }) => {
  const [autoProcess, setAutoProcess] = useState(true);
  const [validate, setValidate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef();

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setError('');

    if (autoProcess) handleUpload(file);
  };

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    setSelectedFile(file);
    setError('');

    if (autoProcess) handleUpload(file);
  };

  const handleUpload = async file => {
    setLoading(true);
    setError('');
    try {
      const result = await uploadRiskDataset(file, validate);
      onResult(result);
    } catch (err) {
      setError('Upload failed. Please check your dataset.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="upload-section">
      <div
        className="drop-zone"
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <p>Drag and drop files here</p><br />
        <button type="button">Browse Files</button><br /><br />
        <p>Support for CSV, Excel, JSON up to 2GB</p>
        <input
          type="file"
          accept=".csv,.json,.xlsx"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <div className="upload-settings">
        <select><option>All Status</option></select>
        <select><option>RSAI Archive</option></select>
        <label>
          <input
            type="checkbox"
            checked={autoProcess}
            onChange={e => setAutoProcess(e.target.checked)}
          />
          Auto-process after upload
        </label>
        <label>
          <input
            type="checkbox"
            checked={validate}
            onChange={e => setValidate(e.target.checked)}
          />
          Validate Dataset
        </label>
      </div>

      {!autoProcess && selectedFile && (
        <button onClick={() => handleUpload(selectedFile)} disabled={loading}>
          {loading ? 'Processing...' : 'Process Dataset'}
        </button>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UploadSection;
