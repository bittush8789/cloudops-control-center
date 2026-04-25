from fastapi import APIRouter

from app.api.v1.endpoints import (
    auth,
    dashboard,
    deployments,
    environments,
    metrics,
    logs,
    config,
    users,
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(deployments.router, prefix="/deployments", tags=["deployments"])
api_router.include_router(environments.router, prefix="/environments", tags=["environments"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
api_router.include_router(logs.router, prefix="/logs", tags=["logs"])
api_router.include_router(config.router, prefix="/config", tags=["config"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
