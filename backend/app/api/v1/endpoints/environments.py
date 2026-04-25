from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api import deps

router = APIRouter()

@router.get("/")
def read_environments(
    db: Session = Depends(deps.get_db),
    current_user: Any = Depends(deps.get_current_user),
) -> Any:
    return [
        {"id": 1, "name": "Development", "status": "healthy", "version": "v1.3.0", "pods": 3, "last_deploy": "10 mins ago"},
        {"id": 2, "name": "QA", "status": "healthy", "version": "v1.2.9", "pods": 5, "last_deploy": "2 hours ago"},
        {"id": 3, "name": "Staging", "status": "degraded", "version": "v1.2.8", "pods": 8, "last_deploy": "1 day ago"},
        {"id": 4, "name": "Production", "status": "healthy", "version": "v1.2.5", "pods": 24, "last_deploy": "5 days ago"},
    ]
