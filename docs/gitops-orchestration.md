# ⚓ GitOps & Orchestration (Helm & ArgoCD)

This platform uses a declarative "Source of Truth" model for all Kubernetes resources.

## 🛠️ Helm Chart (`gitops-repo/helm`)
A unified chart managing both frontend and backend services.
- **Templates**: Deployment, Service, Ingress, HPA, ConfigMap, Secret, NetworkPolicy, RBAC.
- **Values**: Environment-specific overrides (`values-dev.yaml`, `values-prod.yaml`).

## 🐙 ArgoCD (`gitops-repo/argocd`)
We follow the **App-of-Apps** pattern for cluster bootstrapping.

### App-of-Apps Structure
1. **Root App** (`app-of-apps.yaml`): Points to the `argocd/` folder.
2. **Environment Apps**: Individual applications for `dev`, `qa`, and `prod` pointing to the Helm chart with different value files.

### Sync Policies
- **Automated Sync**: Enabled to ensure zero drift.
- **Self-Heal**: Automatically reverts manual `kubectl` changes.
- **Prune**: Removes resources no longer defined in Git.

## 🌀 Argo Rollouts
Advanced deployment strategies for the backend:
- **Canary**: 20% traffic weight, automated pauses.
- **Blue/Green**: Instant traffic switching between active and preview services.
