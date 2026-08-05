import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Mic, 
  Bell, 
  Cpu, 
  Search, 
  Activity, 
  Sparkles,
  UserCheck,
  Radio
} from 'lucide-react';
import { MOCK_AGENTS, MOCK_EMERGENCY_ALERTS } from '../data/mockData';

interface HeaderProps {
  onOpenVoice: () => void;
  onNavigatePage: (pageId: string) => void;
  activeRole: string;
  setActiveRole: (role: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenVoice,
  onNavigatePage,
  activeRole,
  setActiveRole
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [sosActive, setSosActive] = useState(false);
  const activeAlertsCount = MOCK_EMERGENCY_ALERTS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % MOCK_AGENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSosClick = () => {
    setSosActive(true);
    onNavigatePage('emergency');
    setTimeout(() => setSosActive(false), 5000);
  };

  const currentAgent = MOCK_AGENTS[tickerIndex];

  return (
    <header className="sticky top-0 z-40 bg-[#070a10]/80 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-4">
          <div 
            onClick={() => onNavigatePage('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070a10] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent tracking-tight leading-none font-heading">
                AI SMART CITY <span className="text-cyan-400 text-xs font-mono px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 ml-1">v2.0</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>DIGITAL TWIN OPERATIONAL ENGINE</span>
              </p>
            </div>
          </div>

          {/* Live Agent Marquee Feed (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs max-w-md">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
            <span className="text-cyan-400 font-semibold shrink-0">{currentAgent.name}:</span>
            <span className="text-slate-300 truncate">{currentAgent.lastAction}</span>
          </div>
        </div>

        {/* Right Controls & Quick Actions */}
        <div className="flex items-center gap-3">

          {/* Voice Assistant Trigger */}
          <button
            onClick={onOpenVoice}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:scale-105"
            title="Launch Voice Assistant"
          >
            <Mic className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="hidden sm:inline font-mono">VOICE AI</span>
          </button>

          {/* One-Touch Emergency SOS */}
          <button
            onClick={handleSosClick}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
              sosActive 
                ? 'bg-rose-600 text-white animate-bounce shadow-rose-500/50' 
                : 'bg-rose-950/80 hover:bg-rose-900 border border-rose-500/60 text-rose-300 hover:text-white shadow-rose-950/40'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-spin" />
            <span className="tracking-wider font-mono">SOS DISPATCH</span>
          </button>

          {/* Notifications Trigger */}
          <button
            onClick={() => onNavigatePage('notifications')}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
            title="View Notifications"
          >
            <Bell className="w-4 h-4" />
            {activeAlertsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {activeAlertsCount}
              </span>
            )}
          </button>

          {/* User / Role Selector */}
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-800">
            <select
              value={activeRole}
              onChange={(e) => setActiveRole(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50 font-mono"
            >
              <option value="Admin">Admin (City Command)</option>
              <option value="Dispatcher">Emergency Dispatcher</option>
              <option value="Citizen">Citizen User</option>
            </select>
          </div>

        </div>

      </div>
    </header>
  );
};
