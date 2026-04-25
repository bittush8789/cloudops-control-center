# 📊 Observability Documentation (PLG Stack)

The platform uses the **Prometheus, Loki, and Grafana (PLG)** stack for comprehensive monitoring.

## 📈 Metrics (Prometheus)
- **Scraping**: Automatically discovers targets via Kubernetes service monitors.
- **Alerting**: 
  - High CPU/Memory.
  - High 5xx Error Rates.
  - p95 Latency Thresholds (>2s).
- **Storage**: Persistent storage configured via Helm values.

## 📜 Logging (Loki & Promtail)
- **Collection**: Promtail runs as a DaemonSet to collect logs from every node.
- **Filtering**: Automatically labels logs by namespace, pod, and container.
- **Aggregation**: Loki stores and indexes logs for fast querying in Grafana.

## 🖥️ Dashboards (Grafana)
- **Main Dashboard**: `cloudops-main`.
- **Panels**: 
  - Real-time Traffic (RPS).
  - Error rates.
  - API Latency Heatmaps.
  - System Resource Utilization.
