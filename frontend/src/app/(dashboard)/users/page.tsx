import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Shield, 
  MoreVertical, 
  Search,
  Mail,
  User as UserIcon,
  ShieldAlert
} from "lucide-react";

const users = [
  { id: 1, name: "Bittu Sharma", email: "bittu@example.com", role: "Admin", status: "Active", avatar: "BS" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Developer", status: "Active", avatar: "JS" },
  { id: 3, name: "Robert Fox", email: "robert@example.com", role: "Viewer", status: "Inactive", avatar: "RF" },
  { id: 4, name: "Admin User", email: "admin@company.com", role: "Admin", status: "Active", avatar: "AU" },
];

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-bold shadow-lg shadow-primary/20">
          <UserPlus className="w-4 h-4 mr-2 inline" /> Add User
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur-xl border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase">Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase">Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">12</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase">Pending Invites</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">5</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-xl bg-card/50 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Team Members</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
            <input 
              placeholder="Search users..." 
              className="w-full pl-9 pr-3 py-1.5 bg-accent/50 border rounded-md text-sm outline-none"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{user.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Mail size={12} className="mr-1" /> {user.email}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-8">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Role</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      user.role === 'Admin' ? 'bg-red-500/10 text-red-500' : 
                      user.role === 'Developer' ? 'bg-blue-500/10 text-blue-500' : 'bg-accent text-muted-foreground'
                    }`}>
                      {user.role}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Status</span>
                    <span className={`flex items-center text-[10px] font-bold ${user.status === 'Active' ? 'text-green-500' : 'text-muted-foreground'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Active' ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                      {user.status}
                    </span>
                  </div>

                  <button className="p-2 hover:bg-accent rounded-md transition-colors">
                    <MoreVertical size={18} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
