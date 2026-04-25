# Secrets Management Best Practices

For the CloudOps platform, we follow a multi-layered approach to secret management.

## 1. External Secrets Operator (Recommended)
Instead of storing base64 encoded secrets in Git, use the **External Secrets Operator** to sync secrets from AWS Secrets Manager or HashiCorp Vault.

### Example SecretStore (AWS)
```yaml
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: aws-secretsmanager
spec:
  provider:
    aws:
      service: SecretsManager
      region: us-east-1
      auth:
        jwt:
          serviceAccountRef:
            name: cloudops-sa
```

## 2. Sealed Secrets (Alternative)
If you must store secrets in Git, use **Bitnami Sealed Secrets**.
1. Encrypt your secret locally: `kubeseal < secret.yaml > sealed-secret.yaml`
2. Only the controller in the cluster can decrypt it.

## 3. Best Practices Checklist
- [ ] **No Secrets in Git**: Never commit plain `Secret` manifests.
- [ ] **RBAC**: Limit who can `get` or `list` secrets.
- [ ] **Rotation**: Enable automatic rotation in AWS Secrets Manager.
- [ ] **Injection**: Use environment variables or sidecars (Vault Agent) to inject secrets into pods.
- [ ] **Encryption at Rest**: Ensure your EKS cluster has KMS encryption enabled for the internal `etcd` store.
