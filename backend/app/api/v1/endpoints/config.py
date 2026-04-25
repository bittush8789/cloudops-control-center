from typing import Any
from fastapi import APIRouter, Depends
from app.api import deps

router = APIRouter()

@router.get("/")
def get_configs(current_user: Any = Depends(deps.get_current_user)) -> Any:
    return [
        {"id": 1, "key": "DATABASE_URL", "value": "postgresql://user:***@localhost/db", "is_secret": True},
        {"id": 2, "key": "ENABLE_FEATURE_X", "value": "true", "is_secret": False},
        {"id": 3, "key": "REPLICA_COUNT", "value": "3", "is_secret": False},
    ]
