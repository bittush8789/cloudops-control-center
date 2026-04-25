import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Save, 
  Plus, 
  Search,
  Globe,
  Settings2,
  Trash2
} from "lucide-react";

const configs = [
  { id: 1, key: "DATABASE_URL", value: "postgresql://user:admin-pass-123@prod-db:5432/cloudops", isSecret: true, env: "Production" },
  { id: 2, key: "REDIS_HOST", value: "cache-prod-01.internal", isSecret: false, env: "Production" },
  { id: 3, key: "STRIPE_API_KEY", value: "sk_live_51Mxxxxxxxxxxxxxxxx", isSecret: true, env: "Production" },
  { id: 4, key: "LOG_LEVEL", value: "debug", isSecret: false, env: "Staging" },
  { id: 5, key: "REPLICA_COUNT", value: "5", isSecret: false, env: "Staging" },
];

export default function ConfigPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Configuration Center</h1>
        <div className="flex space-x-3">
           <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-bold shadow-lg shadow-primary/20">
             <Plus className="w-4 h-4 mr-2 inline" /> Add Variable
           </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            placeholder="Search variables..." 
            className="w-full pl-10 pr-4 py-2 bg-card border rounded-md outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <select className="bg-card border rounded-md px-3 py-2 text-sm outline-none">
          <option>All Environments</option>
          <option>Production</option>
          <option>Staging</option>
          <option>QA</option>
          <option>Dev</option>
        </select>
      </div>

      <div className="space-y-4">
        {configs.map((config) => (
          <Card key={config.id} className="border-none shadow-md bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-md ${config.isSecret ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                  {config.isSecret ? <Lock size={18} /> : <Settings2 size={18} />}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono font-bold">{config.key}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent text-muted-foreground uppercase font-bold">
                      {config.env}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-muted-foreground font-mono">
                      {config.isSecret ? "••••••••••••••••••••••" : config.value}
                    </span>
                    {config.isSecret && (
                      <button className="ml-2 p-1 text-primary hover:bg-primary/10 rounded">
                        <Eye size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  <Save size={16} />
                </button>
                <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-md transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
