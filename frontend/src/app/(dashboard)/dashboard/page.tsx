import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  CheckCircle2, 
  XCircle, 
  Globe, 
  Cpu, 
  Database, 
  Zap 
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { name: "Total Deployments", value: "1,250", icon: Zap, color: "text-blue-500" },
    { name: "Successful Releases", value: "1,210", icon: CheckCircle2, color: "text-green-500" },
    { name: "Failed Releases", value: "40", icon: XCircle, color: "text-red-500" },
    { name: "Active Environments", value: "4", icon: Globe, color: "text-purple-500" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">v2.4.1 Stable</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-primary/20">
                        <Activity className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Deployment to Production</p>
                        <p className="text-xs text-muted-foreground">Successfully deployed version v2.4.1</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">2 hours ago</p>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-green-500/20 text-green-500">Success</span>
                    </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 border-none shadow-lg bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-blue-500" />
                  <span>CPU Usage</span>
                </div>
                <span className="font-bold text-blue-500">45.2%</span>
              </div>
              <div className="h-2 rounded-full bg-accent">
                <div className="h-2 rounded-full bg-blue-500 w-[45.2%]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Database className="w-4 h-4 mr-2 text-green-500" />
                  <span>Memory Usage</span>
                </div>
                <span className="font-bold text-green-500">62.8%</span>
              </div>
              <div className="h-2 rounded-full bg-accent">
                <div className="h-2 rounded-full bg-green-500 w-[62.8%]" />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
               <div className="flex items-center space-x-2 text-red-500 mb-1">
                 <XCircle className="w-4 h-4" />
                 <span className="text-sm font-bold">Active Alert</span>
               </div>
               <p className="text-xs text-red-400">High latency detected in Production (US-East-1)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
