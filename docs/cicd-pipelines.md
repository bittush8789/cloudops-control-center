# 🔄 CI/CD Pipelines Documentation (GitHub Actions)

We use **GitHub Actions** to automate the build, test, and delivery lifecycle.

## 🚀 Workflows

### 1. CI Pipeline (`ci.yml`)
Triggered on every push to `main` and `CICD` branches.
- **Linting**: Ensures code quality via `flake8` (Python) and `eslint` (JS).
- **Security Scans**:
  - **SonarQube**: Static Application Security Testing (SAST).
  - **Trivy**: Software Composition Analysis (SCA) and Image Scanning.
- **Build**: Creates production Docker images.
- **Registry**: Pushes images to AWS ECR.

### 2. CD Pipeline (`cd.yml`)
The bridge to GitOps.
- **Automation**: Bumps the image tag in the Helm `values.yaml` file.
- **Handshake**: Commits the change back to the `CICD` branch to trigger ArgoCD sync.

### 3. Promotion Pipeline (`promote.yml`)
Manual trigger to move builds across environments.
- **Flow**: `dev` → `qa` → `staging` → `prod`.

### 4. Rollback Pipeline (`rollback.yml`)
Manual trigger to revert a specific environment to a previous known-good image tag.

## 🛡️ Secrets Required
- `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`
- `SONAR_TOKEN`
- `GITOPS_REPO_TOKEN` (for cross-repo or branch commits)
