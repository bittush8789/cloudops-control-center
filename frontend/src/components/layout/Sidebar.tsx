"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  Send, 
  Activity, 
  Settings2, 
  Users, 
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Environments", href: "/environments", icon: Layers },
  { name: "Deployments", href: "/deployments", icon: Send },
  { name: "Monitoring", href: "/monitoring", icon: Activity },
  { name: "Configuration", href: "/config", icon: Settings2 },
  { name: "User Management", href: "/users", icon: Users },
  { name: "Security", href: "/settings", icon: ShieldCheck },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cn(
      "flex flex-col h-screen border-r bg-card transition-all duration-300",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {isOpen && <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">CloudOps</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-accent">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
                !isOpen && "justify-center"
              )}
            >
              <item.icon className={cn("w-5 h-5", isOpen && "mr-3")} />
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
