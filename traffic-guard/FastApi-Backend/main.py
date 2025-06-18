# fastapi-backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import risk_prediction
from routes import prediction

app = FastAPI(title="TrafficGuard AI Service")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(risk_prediction.router, prefix="/api/predict")
app.include_router(prediction.router, prefix="/api")
