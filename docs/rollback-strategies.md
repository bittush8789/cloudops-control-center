# ⏪ CloudOps Rollback Strategies

The CloudOps platform supports three distinct levels of rollback to ensure maximum system availability.

---

## 1. Git Revert (Preferred GitOps Method)
This is the recommended strategy as it maintains an audit trail in Git and keeps the cluster state in sync with the repository.

**Process:**
- Revert the commit that caused the issue in the `CICD` branch.
- ArgoCD detects the change and automatically rolls back the cluster to match the previous commit.

**Command:**
```bash
./scripts/git-rollback.sh CICD
```

---

## 2. Helm Rollback (Fastest Manual Method)
Used when you need to immediately revert a deployment regardless of the Git state. Note that ArgoCD might try to overwrite this if auto-sync is enabled.

**Process:**
- Helm restores the previous release revision from its internal history.

**Command:**
```bash
./scripts/rollback.sh prod
```

---

## 3. ArgoCD Revision Sync (CLI/UI Method)
Useful for pointing an environment to a specific known-good historical commit without modifying the current branch immediately.

**Process:**
- Update the ArgoCD Application manifest to target a specific Git SHA.

**Command (CLI):**
```bash
argocd app set cloudops-prod --revision <KNOWN_GOOD_SHA>
argocd app sync cloudops-prod
```

**Process via UI:**
1. Open ArgoCD UI.
2. Select the Application.
3. Click **History and Rollback**.
4. Select the revision and click **Rollback**.
