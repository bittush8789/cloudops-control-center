from typing import Any
from fastapi import APIRouter, Depends
from app.api import deps

router = APIRouter()

@router.get("/")
def get_metrics(current_user: Any = Depends(deps.get_current_user)) -> Any:
    return {
        "cpu": [40, 42, 45, 43, 48, 45, 44],
        "memory": [60, 61, 62, 60, 63, 62, 61],
        "latency": [120, 115, 130, 125, 140, 135, 128],
        "requests": [1000, 1100, 1050, 1200, 1150, 1300, 1250]
    }
