#!/bin/bash
set -e

BRANCH=${1:-CICD}

echo "⏪ Performing Git Revert on branch [$BRANCH]..."

# Revert the most recent commit
git revert HEAD --no-edit

# Push the revert to the remote
git push origin $BRANCH

echo "✅ Git Revert successful. ArgoCD will now sync to the previous stable configuration."
