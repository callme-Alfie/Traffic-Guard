// src/services/riskPredictionService.js
import axios from 'axios';

const API_BASE = 'http://localhost:8000/api/predict';

export async function uploadRiskDataset(file, validate = false) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('validate', validate); // Pass this to FastAPI

  const response = await axios.post('http://localhost:8000/api/predict/risk', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  return response.data;
}
