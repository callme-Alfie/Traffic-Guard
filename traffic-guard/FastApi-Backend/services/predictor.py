# fastapi-backend/services/predictor.py
import pandas as pd
from io import BytesIO

def predict_from_file(file_bytes):
    df = pd.read_csv(BytesIO(file_bytes))
    # dummy logic: count zones by frequency
    high_risk_areas = df['location'].value_counts().head(3).to_dict()

    return {
        "summary": {
            "highRisk": len(high_risk_areas),
            "mediumRisk": 2,
            "overallRiskLevel": "Medium-High"
        },
        "accuracy": {
            "overall": 92,
            "location": 94,
            "time": 89,
            "severity": 87
        },
        "zones": high_risk_areas
    }

def predict_custom(location, weather, road, time_of_day, traffic):
    # dummy logic
    return {
        "riskScore": "83%",
        "riskLevel": "High Risk",
        "explanation": "Evening rush hour + rain + construction zone",
        "primaryFactors": [
            {"factor": "Rain", "impact": "+35%"},
            {"factor": "Evening Rush Hour", "impact": "+28%"},
            {"factor": "Construction Zone", "impact": "+25%"}
        ]
    }
