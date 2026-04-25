"use client";

import { Bell, Search, User, LogOut, Settings } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-16 border-b bg-card px-8 flex items-center justify-between">
      <div className="flex items-center w-96 px-3 py-1.5 bg-accent/50 rounded-md border">
        <Search className="w-4 h-4 text-muted-foreground mr-2" />
        <input 
          type="text" 
          placeholder="Search environments, deployments..." 
          className="bg-transparent border-none outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-accent">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-card"></span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-3 p-1 rounded-full hover:bg-accent"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
              BS
            </div>
            <span className="text-sm font-medium mr-2">Bittu Sharma</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-card border rounded-md shadow-lg py-1 z-50">
              <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent">
                <User size={16} className="mr-2" /> Profile
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent">
                <Settings size={16} className="mr-2" /> Settings
              </button>
              <hr className="my-1" />
              <button className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-accent">
                <LogOut size={16} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
