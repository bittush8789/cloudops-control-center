#!/bin/bash
set -e

echo "🚀 Bootstrapping CloudOps Control Center Platform..."

# 1. Initialize Terraform
echo "📦 Initializing Infrastructure..."
cd terraform
terraform init
cd ..

# 2. Add Helm Repositories
echo "⚓ Adding Helm Repositories..."
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo add argo https://argoproj.github.io/argo-helm
helm repo add argo-rollouts https://argoproj.github.io/argo-helm
helm repo update

# 3. Create Namespaces
echo "📁 Creating Kubernetes Namespaces..."
kubectl create namespace argocd || true
kubectl create namespace argo-rollouts || true
kubectl create namespace cloudops-dev || true
kubectl create namespace cloudops-prod || true

# 4. Install ArgoCD & Rollouts
echo "🐙 Installing ArgoCD..."
helm upgrade --install argocd argo/argo-cd --namespace argocd

echo "🌀 Installing Argo Rollouts..."
helm upgrade --install argo-rollouts argo-rollouts/argo-rollouts --namespace argo-rollouts

echo "✅ Bootstrap Complete!"
