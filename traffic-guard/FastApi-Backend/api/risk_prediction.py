# fastapi-backend/api/risk_prediction.py
from fastapi import APIRouter, File, UploadFile, Form
from services.predictor import predict_from_file, predict_custom
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/risk")
async def predict_risk(file: UploadFile = File(...)):
    content = await file.read()
    result = predict_from_file(content)
    return JSONResponse(content=result)

@router.post("/custom")
async def predict_custom_risk(
    location: str = Form(...),
    weather: str = Form(...),
    road: str = Form(...),
    time_of_day: str = Form(...),
    traffic: str = Form(...)
):
    result = predict_custom(location, weather, road, time_of_day, traffic)
    return JSONResponse(content=result)
