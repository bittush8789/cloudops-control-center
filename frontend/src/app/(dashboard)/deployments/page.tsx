import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plus, 
  RotateCcw, 
  ArrowUpRight, 
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle,
  PlayCircle
} from "lucide-react";

const deployments = [
  { id: "D-9012", app: "auth-service", version: "v1.2.3", env: "Production", status: "Success", time: "2 hours ago", user: "Bittu Sharma" },
  { id: "D-9011", app: "payment-api", version: "v0.9.5", env: "Staging", status: "Failed", time: "4 hours ago", user: "Admin" },
  { id: "D-9010", app: "frontend-dashboard", version: "v2.1.0", env: "QA", status: "In Progress", time: "5 hours ago", user: "Dev-1" },
  { id: "D-9009", app: "inventory-svc", version: "v1.0.2", env: "Dev", status: "Success", time: "1 day ago", user: "Bittu Sharma" },
];

export default function DeploymentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Deployment Center</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-accent/80 transition-colors">
            <RotateCcw className="w-4 h-4 mr-2" /> Rollback
          </button>
          <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
            <Plus className="w-4 h-4 mr-2" /> Start Deployment
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            placeholder="Search deployments by ID, app, or version..." 
            className="w-full pl-10 pr-4 py-2 bg-card border rounded-md outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button className="flex items-center px-3 py-2 bg-card border rounded-md text-sm">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </button>
      </div>

      <Card className="border-none shadow-xl bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Recent Deployments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-medium text-muted-foreground border-b border-white/5">
                  <th className="pb-3 pl-2">DEPLOYMENT ID</th>
                  <th className="pb-3">APPLICATION</th>
                  <th className="pb-3">ENVIRONMENT</th>
                  <th className="pb-3">VERSION</th>
                  <th className="pb-3">STATUS</th>
                  <th className="pb-3">DEPLOYED BY</th>
                  <th className="pb-3">TIME</th>
                  <th className="pb-3 text-right pr-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {deployments.map((dep) => (
                  <tr key={dep.id} className="text-sm hover:bg-white/5 transition-colors">
                    <td className="py-4 pl-2 font-mono text-primary">{dep.id}</td>
                    <td className="py-4 font-medium">{dep.app}</td>
                    <td className="py-4">
                       <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                         dep.env === 'Production' ? 'bg-purple-500/10 text-purple-500' : 
                         dep.env === 'Staging' ? 'bg-blue-500/10 text-blue-500' : 'bg-accent text-muted-foreground'
                       }`}>
                         {dep.env}
                       </span>
                    </td>
                    <td className="py-4 text-muted-foreground">{dep.version}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        {dep.status === 'Success' && <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />}
                        {dep.status === 'Failed' && <XCircle className="w-4 h-4 text-red-500 mr-2" />}
                        {dep.status === 'In Progress' && <PlayCircle className="w-4 h-4 text-blue-500 animate-pulse mr-2" />}
                        <span className={
                          dep.status === 'Success' ? 'text-green-500' : 
                          dep.status === 'Failed' ? 'text-red-500' : 'text-blue-500'
                        }>{dep.status}</span>
                      </div>
                    </td>
                    <td className="py-4">{dep.user}</td>
                    <td className="py-4 text-muted-foreground">{dep.time}</td>
                    <td className="py-4 text-right pr-2">
                      <button className="p-1 hover:bg-accent rounded">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
