<p align="center">
  <img src="https://img.shields.io/badge/Platform-CloudOps-0052CC?style=for-the-badge&logo=icloud&logoColor=white" alt="Platform" />
  <img src="https://img.shields.io/badge/Version-1.0.0-00C853?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge" alt="Status" />
</p>

<h1 align="center">☁️ CloudOps Control Center</h1>

<p align="center">
  <strong>A modern, enterprise-grade DevOps GitOps CI/CD Platform Dashboard</strong><br/>
  Monitor deployments · Track application health · Manage environments · Configure pipelines
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Database Schema](#-database-schema)
- [Frontend Pages](#-frontend-pages)
- [Docker Compose](#-docker-compose)
- [Security](#-security)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌐 Overview

**CloudOps Control Center** is a production-ready, full-stack SaaS dashboard purpose-built for DevOps teams. It provides a centralized command interface for monitoring deployments, tracking application health across multiple environments, managing CI/CD pipelines, viewing real-time metrics, and configuring platform-wide settings—all through a premium dark-themed UI.

The platform follows a decoupled microservice-friendly architecture with a **Next.js (TypeScript)** frontend consuming a **FastAPI (Python)** REST backend, backed by **PostgreSQL** for persistence and **Redis** for caching and session management.

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- JWT-based secure authentication (login/register)
- Role-Based Access Control (RBAC): **Admin**, **Developer**, **Viewer**
- Password hashing with Bcrypt
- Protected API routes and frontend guards

### 📊 Dashboard & Analytics
- Real-time deployment statistics and trend indicators
- CPU / Memory usage progress bars
- Recent activity feed with status indicators
- Active alerts panel with severity classification

### 🌍 Environment Management
- Multi-environment overview: **Development**, **QA**, **Staging**, **Production**
- Per-environment health status, pod count, running version
- Last deployment timestamps and status indicators
- Quick-access action buttons (Settings, Logs, Metrics)

### 🚀 Deployment Center
- Initiate new deployments with one click
- Rollback to previous stable versions
- Promote builds across environments (Dev → QA → Staging → Prod)
- Full deployment history table with search and filters
- Release notes tracking

### 📈 Monitoring & Observability
- System uptime, latency, and error rate cards
- Real-time log viewer with color-coded severity levels
- Active alerts with critical/warning classifications
- Metric chart placeholders for Prometheus/Grafana integration

### ⚙️ Configuration Center
- Environment variable management across all environments
- Masked secrets display with reveal toggle
- Feature flag management
- Search and filter by environment

### 👥 User Management (Admin Panel)
- Add, remove, and manage team members
- Role assignment and modification
- User activity tracking
- Active session and pending invite counters

### 🎨 UI/UX Excellence
- Premium SaaS dark-mode design with glassmorphism
- Responsive layout (Desktop, Tablet, Mobile)
- Collapsible sidebar navigation
- Global search bar
- Loading states and smooth transitions
- Toast notification system ready

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Client Browser                      │
│              (Next.js App – Port 3000)                  │
└──────────────────────┬──────────────────────────────────┘
                       │  HTTPS / REST
                       ▼
┌─────────────────────────────────────────────────────────┐
│                   API Gateway Layer                      │
│              FastAPI Backend – Port 8000                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐  │
│  │   Auth   │ │ Deploy   │ │  Enviro  │ │  Metrics  │  │
│  │  Router  │ │  Router  │ │  Router  │ │  Router   │  │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬──────┘  │
│       │             │            │             │         │
│  ┌────▼─────────────▼────────────▼─────────────▼─────┐  │
│  │            Core Services Layer                     │  │
│  │   Security │ Config │ Dependencies │ Schemas       │  │
│  └────────────────────┬──────────────────────────────┘  │
└───────────────────────┼─────────────────────────────────┘
                        │
          ┌─────────────┼─────────────┐
          ▼                           ▼
┌──────────────────┐       ┌──────────────────┐
│   PostgreSQL     │       │      Redis       │
│   (Primary DB)   │       │   (Cache/Queue)  │
│   Port: 5432     │       │   Port: 6379     │
└──────────────────┘       └──────────────────┘
```

---

## 🛠 Tech Stack

### Frontend

| Technology       | Version  | Purpose                          |
|------------------|----------|----------------------------------|
| Next.js          | 15+      | React framework (App Router)     |
| TypeScript       | 5.x      | Type-safe JavaScript             |
| Tailwind CSS     | 4.x      | Utility-first CSS framework      |
| Lucide React     | Latest   | Modern icon library              |
| Framer Motion    | Latest   | Animation library                |
| Axios            | Latest   | HTTP client for API calls        |
| Recharts         | Latest   | Charting library                 |
| clsx + twMerge   | Latest   | Conditional class utilities      |

### Backend

| Technology       | Version  | Purpose                          |
|------------------|----------|----------------------------------|
| FastAPI          | 0.110.0  | Async Python web framework       |
| Python           | 3.12     | Runtime                          |
| SQLAlchemy       | 2.0.27   | ORM & database toolkit           |
| Pydantic         | 2.6.1    | Data validation & serialization  |
| PostgreSQL       | 15+      | Relational database              |
| Redis            | 7+       | In-memory cache & message broker |
| Alembic          | 1.13.1   | Database migration tool          |
| python-jose      | 3.3.0    | JWT token encoding/decoding      |
| passlib[bcrypt]  | 1.7.4    | Password hashing                 |
| Uvicorn          | 0.27.1   | ASGI server                      |

---

## 📁 Project Structure

```
cloudops-control-center/
│
├── backend/                          # ── FastAPI Backend Application ──
│   ├── app/
│   │   ├── api/
│   │   │   ├── deps.py               # Dependency injection (DB, Auth)
│   │   │   └── v1/
│   │   │       ├── api.py            # Central API router aggregator
│   │   │       └── endpoints/
│   │   │           ├── auth.py        # POST /register, /login, GET /me
│   │   │           ├── dashboard.py   # GET /summary
│   │   │           ├── deployments.py # GET /, POST /start, /rollback, /promote
│   │   │           ├── environments.py# GET /
│   │   │           ├── metrics.py     # GET /
│   │   │           ├── logs.py        # GET /
│   │   │           ├── config.py      # GET /
│   │   │           └── users.py       # GET /, DELETE /{id}
│   │   ├── core/
│   │   │   ├── config.py             # Pydantic Settings (env-based config)
│   │   │   └── security.py           # JWT creation, password hashing
│   │   ├── db/
│   │   │   └── session.py            # SQLAlchemy engine & session factory
│   │   ├── models/
│   │   │   ├── user.py               # User model + UserRole enum
│   │   │   ├── deployment.py         # Deployment model + status enum
│   │   │   └── infra_models.py       # Environment, AuditLog, Alert, Metric, Config
│   │   ├── schemas/
│   │   │   ├── __init__.py           # Schema exports
│   │   │   └── user.py               # UserCreate, UserUpdate, Token, TokenPayload
│   │   └── main.py                   # FastAPI app entrypoint + middleware
│   ├── .env                          # Environment variables (gitignored)
│   └── requirements.txt              # Python dependencies
│
├── frontend/                         # ── Next.js Frontend Application ──
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/               # Auth route group
│   │   │   │   ├── login/page.tsx     # /login – Sign in page
│   │   │   │   └── register/page.tsx  # /register – Sign up page
│   │   │   ├── (dashboard)/           # Dashboard route group (with Sidebar)
│   │   │   │   ├── layout.tsx         # Shared dashboard layout
│   │   │   │   ├── dashboard/page.tsx # /dashboard – Main overview
│   │   │   │   ├── deployments/page.tsx # /deployments – Release center
│   │   │   │   ├── environments/page.tsx# /environments – Env management
│   │   │   │   ├── monitoring/page.tsx  # /monitoring – Metrics & logs
│   │   │   │   ├── config/page.tsx      # /config – Configuration center
│   │   │   │   ├── users/page.tsx       # /users – User management
│   │   │   │   └── settings/page.tsx    # /settings – Platform settings
│   │   │   ├── globals.css            # Global styles + CSS variables
│   │   │   ├── layout.tsx             # Root layout (Inter font, dark mode)
│   │   │   └── page.tsx               # Root redirect → /login
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.tsx        # Collapsible navigation sidebar
│   │   │   │   └── Header.tsx         # Top bar (search, notifications, profile)
│   │   │   └── ui/
│   │   │       └── card.tsx           # Card component (ShadCN-style)
│   │   ├── lib/
│   │   │   └── utils.ts              # cn() – Tailwind class merge utility
│   │   └── services/
│   │       └── api.ts                # Axios instance + API service functions
│   ├── public/                        # Static assets
│   ├── package.json                   # Node.js dependencies
│   ├── tsconfig.json                  # TypeScript configuration
│   └── postcss.config.mjs             # PostCSS + Tailwind pipeline
│
└── README.md                         # This file
```

---

## 📦 Prerequisites

Ensure the following tools are installed on your system before proceeding:

| Tool        | Minimum Version | Installation                                    |
|-------------|-----------------|--------------------------------------------------|
| **Node.js** | 18.17+          | [nodejs.org](https://nodejs.org/)                |
| **npm**     | 9+              | Bundled with Node.js                             |
| **Python**  | 3.12+           | [python.org](https://www.python.org/)            |
| **PostgreSQL** | 15+          | [postgresql.org](https://www.postgresql.org/)    |
| **Redis**   | 7+              | [redis.io](https://redis.io/)                    |
| **Git**     | 2.40+           | [git-scm.com](https://git-scm.com/)             |

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cloudops-control-center.git
cd cloudops-control-center
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Database Setup

```bash
# Start PostgreSQL (if not running)
# Create the database
psql -U postgres -c "CREATE DATABASE cloudops;"

# Start Redis (if not running)
redis-server
```

### 4. Run Backend Server

```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- **Application**: `http://localhost:8000`
- **Swagger UI (OpenAPI)**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

### 5. Frontend Setup

```bash
# Navigate to frontend (from project root)
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The frontend will be available at: `http://localhost:3000`

### 6. Production Build (Optional)

```bash
cd frontend
npm run build
npm start
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable                      | Description                      | Default                     |
|-------------------------------|----------------------------------|-----------------------------|
| `PROJECT_NAME`                | Application display name         | `CloudOps Control Center`   |
| `API_V1_STR`                  | API version prefix               | `/api/v1`                   |
| `SECRET_KEY`                  | JWT signing secret               | *(required – change in prod)* |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Token expiration in minutes      | `11520` (8 days)            |
| `POSTGRES_SERVER`             | PostgreSQL host                  | `localhost`                 |
| `POSTGRES_USER`               | PostgreSQL username              | `postgres`                  |
| `POSTGRES_PASSWORD`           | PostgreSQL password              | `postgres`                  |
| `POSTGRES_DB`                 | PostgreSQL database name         | `cloudops`                  |
| `REDIS_HOST`                  | Redis server host                | `localhost`                 |
| `REDIS_PORT`                  | Redis server port                | `6379`                      |

### Frontend (`frontend/.env.local`)

| Variable                  | Description           | Default                      |
|---------------------------|-----------------------|------------------------------|
| `NEXT_PUBLIC_API_URL`     | Backend API base URL  | `http://localhost:8000/api/v1` |

---

## 📡 API Reference

All API routes are versioned under `/api/v1`. Authentication is enforced via `Bearer` JWT tokens.

### Authentication

| Method | Endpoint                | Description            | Auth Required |
|--------|-------------------------|------------------------|:-------------:|
| `POST` | `/api/v1/auth/register` | Register a new user    | ❌            |
| `POST` | `/api/v1/auth/login`    | Login & get JWT token  | ❌            |
| `GET`  | `/api/v1/auth/me`       | Get current user info  | ✅            |

### Dashboard

| Method | Endpoint                   | Description              | Auth Required |
|--------|----------------------------|--------------------------|:-------------:|
| `GET`  | `/api/v1/dashboard/summary`| Platform overview stats  | ✅            |

### Deployments

| Method | Endpoint                       | Description              | Auth Required |
|--------|--------------------------------|--------------------------|:-------------:|
| `GET`  | `/api/v1/deployments`          | List all deployments     | ✅            |
| `POST` | `/api/v1/deployments/start`    | Trigger new deployment   | ✅            |
| `POST` | `/api/v1/deployments/rollback` | Rollback deployment      | ✅            |
| `POST` | `/api/v1/deployments/promote`  | Promote to next env      | ✅            |

### Environments

| Method | Endpoint                | Description              | Auth Required |
|--------|-------------------------|--------------------------|:-------------:|
| `GET`  | `/api/v1/environments`  | List all environments    | ✅            |

### Monitoring

| Method | Endpoint              | Description              | Auth Required |
|--------|-----------------------|--------------------------|:-------------:|
| `GET`  | `/api/v1/metrics`     | System performance data  | ✅            |
| `GET`  | `/api/v1/logs`        | Application log entries  | ✅            |

### Configuration

| Method | Endpoint              | Description              | Auth Required |
|--------|-----------------------|--------------------------|:-------------:|
| `GET`  | `/api/v1/config`      | List config variables    | ✅            |

### User Management

| Method   | Endpoint               | Description           | Auth Required | Role     |
|----------|------------------------|-----------------------|:-------------:|----------|
| `GET`    | `/api/v1/users`        | List all users        | ✅            | Admin    |
| `DELETE` | `/api/v1/users/{id}`   | Delete a user         | ✅            | Admin    |

### System Health

| Method | Endpoint    | Description              | Auth Required |
|--------|-------------|--------------------------|:-------------:|
| `GET`  | `/health`   | Application health check | ❌            |
| `GET`  | `/ready`    | Readiness probe          | ❌            |
| `GET`  | `/live`     | Liveness probe           | ❌            |
| `GET`  | `/version`  | Application version      | ❌            |

---

## 🗃 Database Schema

### Entity Relationship Diagram

```
┌─────────────┐       ┌──────────────────┐       ┌──────────────┐
│    users     │       │   deployments    │       │ environments │
├─────────────┤       ├──────────────────┤       ├──────────────┤
│ id (PK)     │◄──┐   │ id (PK)          │   ┌──►│ id (PK)      │
│ full_name   │   │   │ app_name         │   │   │ name         │
│ email (UQ)  │   │   │ version          │   │   │ status       │
│ hashed_pwd  │   ├───│ deployed_by (FK) │   │   │ current_ver  │
│ role        │   │   │ environment_id(FK)├───┘   │ pod_count    │
│ is_active   │   │   │ status           │       │ last_deploy  │
│ is_superuser│   │   │ release_notes    │       └──────────────┘
└─────────────┘   │   │ created_at       │
                  │   │ updated_at       │       ┌──────────────┐
                  │   └──────────────────┘       │   configs    │
                  │                              ├──────────────┤
                  │   ┌──────────────────┐       │ id (PK)      │
                  │   │   audit_logs     │       │ environment  │
                  │   ├──────────────────┤       │ key          │
                  ├───│ user_id (FK)     │       │ value        │
                  │   │ action           │       │ is_secret    │
                  │   │ details (JSON)   │       └──────────────┘
                  │   │ timestamp        │
                  │   └──────────────────┘       ┌──────────────┐
                  │                              │   metrics    │
                  │   ┌──────────────────┐       ├──────────────┤
                  │   │    alerts        │       │ id (PK)      │
                  │   ├──────────────────┤       │ env_id (FK)  │
                  │   │ id (PK)          │       │ cpu_usage    │
                  │   │ severity         │       │ memory_usage │
                  │   │ message          │       │ timestamp    │
                  │   │ environment      │       └──────────────┘
                  │   │ is_resolved      │
                  │   │ created_at       │
                  │   └──────────────────┘
```

### Models Summary

| Model          | Table          | Key Fields                                           |
|----------------|----------------|------------------------------------------------------|
| `User`         | `users`        | id, full_name, email, hashed_password, role           |
| `Deployment`   | `deployments`  | id, app_name, version, environment_id, status         |
| `Environment`  | `environments` | id, name, status, current_version, pod_count          |
| `AuditLog`     | `audit_logs`   | id, user_id, action, details, timestamp               |
| `Alert`        | `alerts`       | id, severity, message, environment, is_resolved       |
| `Metric`       | `metrics`      | id, environment_id, cpu_usage, memory_usage           |
| `Config`       | `configs`      | id, environment, key, value, is_secret                |

---

## 🖥 Frontend Pages

| Route             | Page                  | Description                                      |
|-------------------|-----------------------|--------------------------------------------------|
| `/`               | Root Redirect         | Redirects to `/login`                            |
| `/login`          | Login                 | JWT authentication with email/password           |
| `/register`       | Register              | New user signup form                             |
| `/dashboard`      | Dashboard Overview    | KPI cards, activities, system health             |
| `/deployments`    | Deployment Center     | Release table, start/rollback/promote actions    |
| `/environments`   | Environment Manager   | Dev/QA/Staging/Prod status cards                 |
| `/monitoring`     | System Monitoring     | Metrics, live logs, active alerts                |
| `/config`         | Configuration Center  | Environment variables and secrets management     |
| `/users`          | User Management       | Admin panel for team and roles                   |
| `/settings`       | Platform Settings     | Profile, notifications, API keys, integrations   |

---

## 🔒 Security

| Feature                    | Implementation                                       |
|----------------------------|------------------------------------------------------|
| **Authentication**         | JWT Bearer tokens via `python-jose`                  |
| **Password Storage**       | Bcrypt hashing via `passlib`                         |
| **Protected Routes**       | OAuth2 dependency injection on all secured endpoints |
| **RBAC**                   | Role enum (`admin`, `developer`, `viewer`) on User   |
| **Admin Guards**           | `get_current_active_superuser` dependency            |
| **CORS**                   | Configurable allowed origins middleware              |
| **Input Validation**       | Pydantic v2 strict schema validation                 |
| **Secrets Management**     | Masked display in UI, reveal-on-click                |
| **Health Probes**          | `/health`, `/ready`, `/live` – unauthenticated       |

> ⚠️ **Production Checklist**: Before deploying to production, ensure you:
> - Replace `SECRET_KEY` with a cryptographically random string
> - Restrict `CORS allow_origins` to specific domains
> - Enable HTTPS/TLS termination
> - Set `is_superuser` for initial admin via database migration
> - Configure rate limiting (e.g., via Redis or API gateway)

---

## 📸 Screenshots

> Screenshots will be added after first deployment. The application features:
> - Premium dark-themed login page with glassmorphism
> - Dashboard with real-time KPI cards and activity feed
> - Environment cards with health indicators
> - Deployment table with inline status badges
> - Terminal-style live log viewer
> - Masked secrets configuration panel

---

## 🐳 Docker Compose

The project ships with a production-ready `docker-compose.yml` that orchestrates all services.

### Services

| Service      | Image              | Port  | Description                        |
|--------------|--------------------|----- -|------------------------------------|
| `frontend`   | Custom (Next.js)   | 3000  | Dashboard UI                       |
| `backend`    | Custom (FastAPI)   | 8000  | REST API server                    |
| `postgres`   | postgres:16-alpine | 5432  | Primary database                   |
| `redis`      | redis:7-alpine     | 6379  | Cache & session store              |
| `pgadmin`    | dpage/pgadmin4     | 5050  | DB admin UI *(dev profile only)*   |

### Quick Start

```bash
# 1. Clone & navigate
git clone https://github.com/your-username/cloudops-control-center.git
cd cloudops-control-center

# 2. Copy environment template
cp .env.example .env

# 3. Start all core services (frontend + backend + postgres + redis)
docker compose up -d

# 4. Start with pgAdmin for database inspection (development)
docker compose --profile dev up -d
```

### Useful Commands

```bash
# View running containers
docker compose ps

# Tail logs for a specific service
docker compose logs -f backend

# Rebuild images after code changes
docker compose up -d --build

# Stop all services
docker compose down

# Stop and remove volumes (full reset)
docker compose down -v

# Restart a single service
docker compose restart backend
```

### Access Points

| Service          | URL                              |
|------------------|----------------------------------|
| Frontend         | http://localhost:3000             |
| Backend API      | http://localhost:8000             |
| Swagger Docs     | http://localhost:8000/docs        |
| ReDoc            | http://localhost:8000/redoc       |
| Health Check     | http://localhost:8000/health      |
| pgAdmin          | http://localhost:5050 *(dev)*     |

### Default Credentials

| Service  | Username / Email      | Password   |
|----------|-----------------------|------------|
| App      | admin@cloudops.dev    | admin123   |
| pgAdmin  | admin@cloudops.dev    | admin      |
| Postgres | postgres              | postgres   |

### Architecture

```
                        ┌──────────────┐
                        │   Browser    │
                        └──────┬───────┘
                               │ :3000
                        ┌──────▼───────┐
                        │   Frontend   │
                        │  (Next.js)   │
                        └──────┬───────┘
                               │ :8000
                        ┌──────▼───────┐
                ┌───────│   Backend    │───────┐
                │       │  (FastAPI)   │       │
                │       └──────────────┘       │
                │ :5432                  :6379 │
         ┌──────▼───────┐          ┌───────▼──────┐
         │  PostgreSQL  │          │    Redis     │
         │   (Data)     │          │   (Cache)    │
         └──────────────┘          └──────────────┘
```

---

## 🗺 Roadmap

- [x] JWT Authentication (Login / Register)
- [x] Role-Based Access Control (RBAC)
- [x] Dashboard with KPI cards and activity feed
- [x] Multi-environment management (Dev/QA/Staging/Prod)
- [x] Deployment center with rollback and promote
- [x] System monitoring with live log viewer
- [x] Configuration and secrets management
- [x] User management admin panel
- [x] REST API with OpenAPI documentation
- [ ] WebSocket real-time log streaming
- [ ] Prometheus + Grafana metric integration
- [ ] Database migrations with Alembic
- [ ] GitHub/GitLab webhook integration
- [ ] Slack/Teams notification channels
- [ ] Audit log export (CSV/JSON)
- [ ] Multi-tenant organization support
- [x] Docker Compose development environment
- [ ] Kubernetes Helm chart for deployment
- [ ] E2E test suite (Playwright)
- [ ] CI/CD pipeline (GitHub Actions)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes with conventional commits
   ```bash
   git commit -m "feat: add webhook integration for GitHub"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request against `main`

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix     | Description                          |
|------------|--------------------------------------|
| `feat:`    | New feature                          |
| `fix:`     | Bug fix                              |
| `docs:`    | Documentation changes                |
| `style:`   | Code formatting (no logic changes)   |
| `refactor:`| Code restructuring                   |
| `test:`    | Adding or updating tests             |
| `chore:`   | Maintenance tasks                    |

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Bittu Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <strong>Bittu Sharma</strong><br/>
      Full Stack Developer & DevOps Engineer<br/><br/>
      <a href="https://github.com/your-username">
        <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" />
      </a>
      <a href="https://linkedin.com/in/your-profile">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

---

<p align="center">
  <strong>⭐ If you found this project useful, please consider giving it a star!</strong>
</p>

<p align="center">
  Made with ❤️ by Bittu Sharma
</p>
