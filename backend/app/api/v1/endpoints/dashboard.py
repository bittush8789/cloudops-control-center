from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api import deps

router = APIRouter()

@router.get("/summary")
def get_dashboard_summary(
    db: Session = Depends(deps.get_db),
    current_user: Any = Depends(deps.get_current_user),
) -> Any:
    # In a real app, these would be aggregated from the database
    return {
        "total_deployments": 1250,
        "successful_releases": 1210,
        "failed_releases": 40,
        "active_environments": 4,
        "app_version": "v2.4.1",
        "cpu_usage": 45.2,
        "memory_usage": 62.8,
        "recent_activities": [
            {"id": 1, "action": "Deployment to Prod", "status": "success", "time": "2 hours ago"},
            {"id": 2, "action": "Config Change - QA", "status": "info", "time": "4 hours ago"},
            {"id": 3, "action": "Rollback - Staging", "status": "warning", "time": "5 hours ago"},
        ],
        "alerts": [
            {"id": 1, "severity": "critical", "message": "High latency in Production", "time": "10 mins ago"},
            {"id": 2, "severity": "warning", "message": "Disk space low in Staging", "time": "1 hour ago"},
        ]
    }
