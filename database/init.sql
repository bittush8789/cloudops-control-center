-- =============================================================================
-- CloudOps Control Center — Database Initialization Script
-- Executed automatically on first PostgreSQL container startup
-- =============================================================================

-- Create extension for UUID generation (optional, for future use)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── Users Table ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    full_name       VARCHAR(255),
    email           VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role            VARCHAR(20)  DEFAULT 'viewer'
                    CHECK (role IN ('admin', 'developer', 'viewer')),
    is_active       BOOLEAN      DEFAULT TRUE,
    is_superuser    BOOLEAN      DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_full_name ON users(full_name);

-- ── Environments Table ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS environments (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(50) UNIQUE NOT NULL,
    status          VARCHAR(20) DEFAULT 'healthy'
                    CHECK (status IN ('healthy', 'unhealthy', 'degraded', 'offline')),
    current_version VARCHAR(50),
    pod_count       INTEGER     DEFAULT 0,
    last_deployed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_environments_name ON environments(name);

-- ── Deployments Table ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS deployments (
    id              SERIAL PRIMARY KEY,
    app_name        VARCHAR(255),
    version         VARCHAR(50),
    environment_id  INTEGER REFERENCES environments(id) ON DELETE SET NULL,
    status          VARCHAR(20) DEFAULT 'pending'
                    CHECK (status IN ('pending', 'in_progress', 'success', 'failed', 'rolled_back')),
    deployed_by     INTEGER REFERENCES users(id) ON DELETE SET NULL,
    release_notes   TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_deployments_app ON deployments(app_name);
CREATE INDEX IF NOT EXISTS idx_deployments_status ON deployments(status);
CREATE INDEX IF NOT EXISTS idx_deployments_created ON deployments(created_at DESC);

-- ── Audit Logs Table ────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_logs (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER REFERENCES users(id) ON DELETE SET NULL,
    action          VARCHAR(255),
    details         JSONB,
    timestamp       TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_timestamp ON audit_logs(timestamp DESC);

-- ── Alerts Table ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS alerts (
    id              SERIAL PRIMARY KEY,
    severity        VARCHAR(20) NOT NULL
                    CHECK (severity IN ('critical', 'warning', 'info')),
    message         VARCHAR(500),
    environment     VARCHAR(50),
    is_resolved     VARCHAR(10) DEFAULT 'active'
                    CHECK (is_resolved IN ('resolved', 'active')),
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_alerts_severity ON alerts(severity);
CREATE INDEX IF NOT EXISTS idx_alerts_resolved ON alerts(is_resolved);

-- ── Metrics Table ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS metrics (
    id              SERIAL PRIMARY KEY,
    environment_id  INTEGER REFERENCES environments(id) ON DELETE CASCADE,
    cpu_usage       DOUBLE PRECISION,
    memory_usage    DOUBLE PRECISION,
    timestamp       TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_metrics_env ON metrics(environment_id);
CREATE INDEX IF NOT EXISTS idx_metrics_timestamp ON metrics(timestamp DESC);

-- ── Configs Table ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS configs (
    id              SERIAL PRIMARY KEY,
    environment     VARCHAR(50),
    key             VARCHAR(255),
    value           VARCHAR(1000),
    is_secret       VARCHAR(5)  DEFAULT 'false'
                    CHECK (is_secret IN ('true', 'false'))
);

CREATE INDEX IF NOT EXISTS idx_configs_env ON configs(environment);

-- =============================================================================
-- Seed Data — Default environments and admin user
-- =============================================================================

-- Seed environments
INSERT INTO environments (name, status, current_version, pod_count, last_deployed_at)
VALUES
    ('Development',  'healthy',  'v1.3.0', 3,  NOW() - INTERVAL '10 minutes'),
    ('QA',           'healthy',  'v1.2.9', 5,  NOW() - INTERVAL '2 hours'),
    ('Staging',      'degraded', 'v1.2.8', 8,  NOW() - INTERVAL '1 day'),
    ('Production',   'healthy',  'v1.2.5', 24, NOW() - INTERVAL '5 days')
ON CONFLICT (name) DO NOTHING;

-- Seed default admin user (password: admin123 — bcrypt hash)
INSERT INTO users (full_name, email, hashed_password, role, is_active, is_superuser)
VALUES (
    'Bittu Sharma',
    'admin@cloudops.dev',
    '$2b$12$LJ3m4ys3Lg5aYCGxRJbKseKFQo5bFE8ARz1GrVJMfKbPcOMSgG6mu',
    'admin',
    TRUE,
    TRUE
)
ON CONFLICT (email) DO NOTHING;

-- Seed sample configs
INSERT INTO configs (environment, key, value, is_secret) VALUES
    ('Production', 'DATABASE_URL',       'postgresql://user:***@prod-db:5432/cloudops', 'true'),
    ('Production', 'REDIS_HOST',         'cache-prod-01.internal',                      'false'),
    ('Production', 'STRIPE_API_KEY',     'sk_live_51Mxxxxxxxxxxxxxxxx',                 'true'),
    ('Staging',    'LOG_LEVEL',          'debug',                                       'false'),
    ('Staging',    'REPLICA_COUNT',      '5',                                           'false'),
    ('QA',         'ENABLE_FEATURE_X',   'true',                                        'false'),
    ('Development','DEBUG_MODE',         'true',                                        'false')
ON CONFLICT DO NOTHING;

-- Seed sample alerts
INSERT INTO alerts (severity, message, environment, is_resolved) VALUES
    ('critical', 'High latency detected in Production (US-East-1)', 'Production', 'active'),
    ('warning',  'Disk space at 85% capacity',                       'Staging',    'active'),
    ('info',     'Scheduled maintenance window approaching',         'Production', 'active')
ON CONFLICT DO NOTHING;

-- Log the initialization
INSERT INTO audit_logs (action, details) VALUES
    ('SYSTEM_INIT', '{"message": "Database initialized via Docker entrypoint", "version": "1.0.0"}');

-- =============================================================================
-- Done — Database ready for CloudOps Control Center
-- =============================================================================
