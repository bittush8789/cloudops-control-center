from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, ForeignKey, Enum
from sqlalchemy.sql import func
from app.models.user import Base
import enum

class EnvStatus(str, enum.Enum):
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    DEGRADED = "degraded"
    OFFLINE = "offline"

class Environment(Base):
    __tablename__ = "environments"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True) # dev, qa, staging, prod
    status = Column(Enum(EnvStatus), default=EnvStatus.HEALTHY)
    current_version = Column(String)
    pod_count = Column(Integer, default=0)
    last_deployed_at = Column(DateTime(timezone=True))

class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    action = Column(String)
    details = Column(JSON)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

class Alert(Base):
    __tablename__ = "alerts"
    id = Column(Integer, primary_key=True, index=True)
    severity = Column(String) # critical, warning, info
    message = Column(String)
    environment = Column(String)
    is_resolved = Column(Enum("resolved", "active", name="alert_status"), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Metric(Base):
    __tablename__ = "metrics"
    id = Column(Integer, primary_key=True, index=True)
    environment_id = Column(Integer, ForeignKey("environments.id"))
    cpu_usage = Column(Float)
    memory_usage = Column(Float)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

class Config(Base):
    __tablename__ = "configs"
    id = Column(Integer, primary_key=True, index=True)
    environment = Column(String)
    key = Column(String)
    value = Column(String)
    is_secret = Column(Enum("true", "false", name="is_secret_bool"), default="false")
