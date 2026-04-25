# 🛡️ Security Hardening Documentation

Security is integrated into every layer of the CloudOps platform.

## 🔍 Scanning Tools
1. **SonarQube (SAST)**: 
   - Scans code for bugs, vulnerabilities, and code smells.
   - Configured in `sonar-project.properties`.
2. **Aqua Trivy (SCA & Image Scan)**:
   - Scans filesystem for vulnerable dependencies.
   - Scans final Docker images for OS-level vulnerabilities.
   - Integrated into CI and local `docker-compose`.
3. **OWASP ZAP (DAST)**:
   - Performs dynamic testing on the running application (API & UI).
   - Profiles available in `docker-compose.yml`.

## ☸️ Kubernetes Security
- **RBAC**: Granular roles for Developers and Viewers.
- **Kyverno**: Admission controller enforcing security policies (e.g., No Root, Resource Limits).
- **NetworkPolicies**: Namespace-level isolation and pod-to-pod traffic control.
- **PodSecurityContext**: Enforces non-root execution and drops dangerous Linux capabilities.

## 🔑 Secrets Management
- **Local**: Encrypted via Docker Compose environment variables.
- **Production**: Recommended integration with **AWS Secrets Manager** via **External Secrets Operator**.
