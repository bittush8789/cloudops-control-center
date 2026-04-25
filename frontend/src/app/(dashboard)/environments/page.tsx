import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, 
  Activity, 
  Clock, 
  Settings, 
  Terminal,
  ShieldCheck,
  Layout
} from "lucide-react";

const environments = [
  { name: "Development", status: "Healthy", version: "v1.3.0", pods: 3, lastDeploy: "10 mins ago", color: "bg-blue-500" },
  { name: "QA", status: "Healthy", version: "v1.2.9", pods: 5, lastDeploy: "2 hours ago", color: "bg-teal-500" },
  { name: "Staging", status: "Degraded", version: "v1.2.8", pods: 8, lastDeploy: "1 day ago", color: "bg-orange-500" },
  { name: "Production", status: "Healthy", version: "v1.2.5", pods: 24, lastDeploy: "5 days ago", color: "bg-purple-500" },
];

export default function EnvironmentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Environment Management</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-bold shadow-lg shadow-primary/20">
          Provision Environment
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {environments.map((env) => (
          <Card key={env.name} className="overflow-hidden border-none shadow-xl bg-card/50 backdrop-blur-xl group hover:ring-2 hover:ring-primary/20 transition-all">
            <div className={`h-1.5 w-full ${env.color}`} />
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">{env.name}</CardTitle>
                <div className="flex items-center mt-1 space-x-2">
                  <span className={`w-2 h-2 rounded-full ${env.status === 'Healthy' ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
                  <span className="text-xs text-muted-foreground">{env.status}</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent">
                <Server size={20} className="text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Running Version</p>
                  <p className="text-sm font-mono font-bold">{env.version}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Pod Count</p>
                  <p className="text-sm font-bold">{env.pods} Instances</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Last Deployed</p>
                  <p className="text-sm">{env.lastDeploy}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Health Status</p>
                  <div className="flex space-x-1">
                     <div className="w-4 h-1 rounded-full bg-green-500" />
                     <div className="w-4 h-1 rounded-full bg-green-500" />
                     <div className={env.status === 'Healthy' ? "w-4 h-1 rounded-full bg-green-500" : "w-4 h-1 rounded-full bg-orange-500"} />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex space-x-2">
                  <button className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors" title="Settings">
                    <Settings size={14} />
                  </button>
                  <button className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors" title="Logs">
                    <Terminal size={14} />
                  </button>
                  <button className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors" title="Metrics">
                    <Activity size={14} />
                  </button>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
