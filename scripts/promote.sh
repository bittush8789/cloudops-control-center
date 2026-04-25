#!/bin/bash
set -e

FROM_ENV=$1
TO_ENV=$2

if [ -z "$FROM_ENV" ] || [ -z "$TO_ENV" ]; then
    echo "Usage: ./promote.sh <from_env> <to_env>"
    exit 1
fi

echo "🔄 Promoting CloudOps from [$FROM_ENV] to [$TO_ENV]..."

# Copy values from source environment to target environment
cp ./gitops-repo/helm/values-$FROM_ENV.yaml ./gitops-repo/helm/values-$TO_ENV.yaml

# Commit to GitOps (Simulation)
echo "📝 Committing changes to GitOps branch..."
# git add .
# git commit -m "chore: promote build from $FROM_ENV to $TO_ENV"
# git push origin CICD

echo "✅ Promotion synced. ArgoCD will handle the cluster update."
