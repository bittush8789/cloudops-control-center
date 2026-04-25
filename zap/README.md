# OWASP ZAP Scanning Guide for CloudOps Control Center

This project supports automated Dynamic Application Security Testing (DAST) using OWASP ZAP.

## Pre-requisites
1. The application must be running (`docker compose up -d`).
2. The ZAP container must be active (`docker compose --profile security up -d zap`).

## Run a Quick Baseline Scan

### 1. Scan the Backend API
This scan checks for common vulnerabilities like SQL injection, XSS, and insecure headers in the API.
```bash
docker exec -t cloudops-zap zap-baseline.py \
  -t http://cloudops-backend:8000/api/v1/ \
  -r backend-baseline-report.html
```

### 2. Scan the Frontend UI
This scan checks the dashboard and login pages for frontend-specific security issues.
```bash
docker exec -t cloudops-zap zap-baseline.py \
  -t http://cloudops-frontend:3000/ \
  -r frontend-baseline-report.html
```

## Run a Full Scan (More Intensive)
For a deeper analysis (crawling and active attacking), use `zap-full-scan.py`:
```bash
docker exec -t cloudops-zap zap-full-scan.py \
  -t http://cloudops-backend:8000/api/v1/ \
  -r backend-full-report.html
```

## View Reports
The reports are generated in the `./zap` directory in your project root. Open the HTML files in any browser to see the results.
