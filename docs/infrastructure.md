# 🏗️ Infrastructure Documentation (Terraform)

This project uses **Terraform** to manage the lifecycle of AWS infrastructure in a declarative manner.

## 🛠️ Tools & Providers
- **Provider**: `hashicorp/aws` (~> 5.0)
- **State Management**: Local (configured for S3 migration in `main.tf`)
- **Modules**: Official `terraform-aws-modules` for VPC and EKS.

## 📦 Resources Provisioned
### 1. Network (VPC)
- **VPC CIDR**: `10.0.0.0/16`
- **Subnets**: 
  - 3 Public Subnets (External Load Balancers)
  - 3 Private Subnets (EKS Nodes, DB)
- **NAT Gateway**: Single gateway for cost-effective outbound internet access from private nodes.

### 2. Compute (EKS)
- **Version**: Kubernetes 1.28
- **Node Groups**: Managed node group with `t3.medium` instances.
- **Scaling**: 2-5 nodes based on load.

### 3. Registry (ECR)
- **Repositories**: `cloudops-backend`, `cloudops-frontend`.
- **Features**: Scan-on-push, Lifecycle policy (keeps last 30 tags).

## 🚀 Deployment
```bash
cd terraform
terraform init
terraform plan
terraform apply
```
