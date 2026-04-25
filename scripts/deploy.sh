#!/bin/bash
set -e

ENV=${1:-dev}
TAG=${2:-latest}

echo "🚢 Deploying CloudOps Control Center to [$ENV] with tag [$TAG]..."

# 1. Build & Push (Simulation or Local)
# docker build -t bittush8789/cloudops-backend:$TAG ./backend
# docker push bittush8789/cloudops-backend:$TAG

# 2. Deploy via Helm
echo "☸️ Applying Helm Chart..."
helm upgrade --install cloudops ./gitops-repo/helm \
  --namespace cloudops-$ENV \
  -f ./gitops-repo/helm/values-$ENV.yaml \
  --set backend.image.tag=$TAG \
  --set frontend.image.tag=$TAG

echo "✅ Deployment Successful to $ENV!"
