import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Car, 
  Camera, 
  CloudRain, 
  Wind, 
  Square, 
  Ambulance, 
  Mic, 
  MessageSquare, 
  Plane, 
  Bot, 
  BarChart3, 
  Bell, 
  Settings, 
  LogIn,
  ChevronRight,
  ShieldAlert,
  GitBranch,
  Sparkles,
  Clock,
  Activity
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  category?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'simulator', label: 'AI Incident Simulator', icon: ShieldAlert, badge: 'High Priority' },
  { id: 'digital-twin', label: 'Digital Twin Map', icon: Map, badge: 'Live 3D' },
  { id: 'traffic', label: 'Traffic Monitoring', icon: Car },
  { id: 'accidents', label: 'Accident Detection', icon: Camera, badge: 'Vision AI' },
  { id: 'flood', label: 'Flood Risk Prediction', icon: CloudRain },
  { id: 'pollution', label: 'Pollution & AQI', icon: Wind },
  { id: 'parking', label: 'Parking Prediction', icon: Square },
  { id: 'emergency', label: 'Emergency Center', icon: Ambulance, badge: 'SOS' },
  { id: 'voice', label: 'Voice Assistant', icon: Mic },
  { id: 'chatbot', label: 'AI City Chatbot', icon: MessageSquare },
  { id: 'drone', label: 'Drone Surveillance', icon: Plane, badge: 'Aerial' },
  { id: 'city-manager', label: 'AI Multi-Agent Panel', icon: GitBranch, badge: '8 Agents' },
  { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
  { id: 'notifications', label: 'Alerts & Notifications', icon: Bell },
  { id: 'settings', label: 'System Settings', icon: Settings },
  { id: 'login', label: 'Account Login', icon: LogIn }
];

interface SidebarProps {
  currentPage: string;
  onSelectPage: (pageId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onSelectPage,
  isOpen,
  onToggle
}) => {
  return (
    <aside className={`fixed left-0 top-16 bottom-0 z-30 bg-[#070a10]/95 backdrop-blur-xl border-r border-white/10 transition-all duration-300 flex flex-col ${
      isOpen ? 'w-64' : 'w-20'
    }`}>
      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'
              }`} />
              
              {isOpen && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}

              {isOpen && item.badge && (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  item.badge === 'High Priority'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : isActive 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Tooltip when collapsed */}
              {!isOpen && (
                <div className="absolute left-full ml-2 px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Collapse / Expand Toggle Bar */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-mono"
        >
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          {isOpen && <span>COLLAPSE SIDEBAR</span>}
        </button>
      </div>
    </aside>
  );
};
