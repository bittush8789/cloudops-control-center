# Trivy Vulnerability Scanning Guide for CloudOps Control Center

This project supports comprehensive vulnerability scanning using **Trivy** by Aqua Security.

## Scan Types

### 1. FileSystem Scan (Dependencies)
Scan the backend and frontend dependencies (`requirements.txt`, `package.json`) for known vulnerabilities.
```bash
docker run --rm -v .:/src aquasec/trivy fs /src
```

### 2. Image Scan (Containers)
Scan the built container images for OS-level vulnerabilities and library issues.
```bash
# Scan Backend Image
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image cloudops-backend

# Scan Frontend Image
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image cloudops-frontend
```

### 3. Config Scan (IaC)
Scan `Dockerfile` and `docker-compose.yml` for security misconfigurations.
```bash
docker run --rm -v .:/src aquasec/trivy config /src
```

## Running via Docker Compose
If you have the `security` profile active, you can use the internal service:
```bash
# Scan the project directory from within the container
docker exec -it cloudops-trivy trivy fs /src
```

## Filtering by Severity
To focus only on critical issues:
```bash
docker run --rm -v .:/src aquasec/trivy fs --severity CRITICAL /src
```
