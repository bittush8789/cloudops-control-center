from typing import Any
from fastapi import APIRouter, Depends
from app.api import deps

router = APIRouter()

@router.get("/")
def get_logs(current_user: Any = Depends(deps.get_current_user)) -> Any:
    return [
        {"timestamp": "2024-04-25 13:00:01", "level": "INFO", "message": "Successfully connected to DB"},
        {"timestamp": "2024-04-25 13:05:22", "level": "ERROR", "message": "Failed to pull image: auth-service:latest"},
        {"timestamp": "2024-04-25 13:10:45", "level": "INFO", "message": "Scaling up deployment: payment-api"},
    ]
