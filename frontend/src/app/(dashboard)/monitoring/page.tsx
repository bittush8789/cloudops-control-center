import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  BarChart3, 
  LineChart, 
  Search,
  RefreshCcw,
  Download,
  AlertTriangle,
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function MonitoringPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">System Monitoring</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-accent rounded-md text-sm">
            <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
          </button>
          <button className="flex items-center px-4 py-2 bg-accent rounded-md text-sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.98%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Latency</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124ms</div>
            <p className="text-xs text-muted-foreground">-5ms from yesterday</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
            <Activity className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.02%</div>
            <p className="text-xs text-muted-foreground">+0.01% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-xl bg-card/50 backdrop-blur-xl min-h-[400px] flex flex-col items-center justify-center text-muted-foreground">
        <LineChart size={48} className="mb-4 opacity-20" />
        <p className="text-lg font-medium">Metric Charts Rendering...</p>
        <p className="text-sm">Real-time data stream active</p>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Terminal className="w-5 h-5 mr-2" /> Live Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-2 h-[300px] overflow-y-auto">
              <p className="text-green-500">[13:00:01] INFO: Successfully connected to database-prod-01</p>
              <p className="text-blue-400">[13:00:05] DEBUG: Cache hit for user_id: 40291</p>
              <p className="text-yellow-500">[13:00:12] WARN: High memory usage in pod auth-api-9f82</p>
              <p className="text-red-500">[13:00:22] ERROR: Connection timeout to external-payment-gateway</p>
              <p className="text-green-500">[13:00:31] INFO: Worker thread 4 started successfully</p>
              <p className="text-white opacity-50">[13:00:45] system: Heartbeat pulse received</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" /> Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 border border-red-500/20 bg-red-500/5 rounded-lg flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-500">Critical: API Latency Spike</p>
                <p className="text-xs text-muted-foreground">Production API response time > 1.5s in US-East-1</p>
                <p className="text-[10px] text-muted-foreground mt-1">Detected 5 mins ago</p>
              </div>
            </div>
            <div className="p-3 border border-yellow-500/20 bg-yellow-500/5 rounded-lg flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-yellow-500">Warning: Disk Space Low</p>
                <p className="text-xs text-muted-foreground">DB backup volume at 85% capacity in Staging</p>
                <p className="text-[10px] text-muted-foreground mt-1">Detected 45 mins ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
