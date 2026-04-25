#!/bin/bash
set -e

ENV=${1:-dev}

echo "⏪ Rolling back CloudOps deployment in [$ENV]..."

# Rollback using Helm
helm rollback cloudops --namespace cloudops-$ENV

echo "✅ Rollback complete for $ENV!"
