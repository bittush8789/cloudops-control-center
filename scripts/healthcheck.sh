#!/bin/bash

ENV=${1:-prod}
NAMESPACE="cloudops-$ENV"

echo "🔍 Running Health Checks for [$ENV] environment..."

# 1. Check Pod Status
echo "--- Pods ---"
kubectl get pods -n $NAMESPACE

# 2. Check Service Endpoints
echo "--- Services ---"
kubectl get svc -n $NAMESPACE

# 3. Check Rollout Status
echo "--- Rollout Status ---"
kubectl rollout status deployment/cloudops-backend -n $NAMESPACE
kubectl rollout status deployment/cloudops-frontend -n $NAMESPACE

# 4. Check Ingress
echo "--- Ingress ---"
kubectl get ingress -n $NAMESPACE

echo "✅ Health Check Finished!"
