# Backend/routes/prediction.py
from fastapi import APIRouter, UploadFile, File, Form
import pandas as pd
from utils.cleaning import clean_dataset
from utils.model import run_model

router = APIRouter()

@router.post("/predict/risk")
async def predict_risk(file: UploadFile = File(...), validate: bool = Form(False)):
    df = pd.read_csv(file.file)

    if validate:
        df = clean_dataset(df)  # implement this in utils.cleaning

    result = run_model(df)  # implement this in utils.model
    return result
