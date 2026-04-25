import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  User, 
  Bell, 
  Shield, 
  Key, 
  Globe, 
  Palette,
  Cloud,
  ChevronRight
} from "lucide-react";

export default function SettingsPage() {
  const sections = [
    { title: "Profile", description: "Manage your account details and preferences", icon: User },
    { title: "Notifications", description: "Configure how you receive alerts and updates", icon: Bell },
    { title: "Security", description: "Manage your password and authentication methods", icon: Shield },
    { title: "API Keys", description: "Generate and manage keys for CI/CD integrations", icon: Key },
    { title: "Appearance", description: "Customize the look and feel of your dashboard", icon: Palette },
    { title: "Integrations", description: "Connect with GitHub, GitLab, AWS, etc.", icon: Cloud },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and platform configurations.</p>
      </div>

      <div className="grid gap-4 max-w-4xl">
        {sections.map((section) => (
          <Card key={section.title} className="border-none shadow-md bg-card/50 backdrop-blur-xl cursor-pointer hover:bg-card/80 transition-all group">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 rounded-lg bg-accent group-hover:bg-primary/20 transition-colors">
                  <section.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-xs text-muted-foreground">{section.description}</p>
                </div>
              </div>
              <ChevronRight className="text-muted-foreground" size={20} />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end max-w-4xl pt-4">
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-bold shadow-lg shadow-primary/20">
          Save Changes
        </button>
      </div>
    </div>
  );
}
