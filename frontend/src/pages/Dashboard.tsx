import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { AgentBadge } from '../components/AgentBadge';
import { CityHealthScore } from '../components/CityHealthScore';
import { AgentCollaborationPanel } from '../components/AgentCollaborationPanel';
import { PredictiveTimeline } from '../components/PredictiveTimeline';
import { ExplainableAIPanel } from '../components/ExplainableAIPanel';
import { 
  MOCK_CITY_METRICS, 
  MOCK_AGENTS, 
  MOCK_EMERGENCY_ALERTS 
} from '../data/mockData';
import { 
  Activity, 
  Car, 
  Wind, 
  CloudRain, 
  Square, 
  Cpu, 
  AlertTriangle, 
  TrendingUp, 
  ArrowUpRight, 
  Map, 
  ShieldAlert, 
  Mic, 
  Camera, 
  Bot,
  Zap,
  Sparkles,
  GitBranch
} from 'lucide-react';

interface DashboardProps {
  onNavigatePage: (pageId: string) => void;
  onOpenVoice: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigatePage, onOpenVoice }) => {
  return (
    <div className="space-y-6">
      
      {/* Top Banner Alert Bar */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-cyan-950/80 border border-rose-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              ACTIVE INCIDENT DISPATCH <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/30 text-rose-300">CRITICAL</span>
            </h3>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              Sector 7 Traffic Crash detected. Ambulance #4 dispatched with automated green wave signal clearance.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigatePage('simulator')}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold font-mono transition-colors shadow-md shrink-0 flex items-center gap-1.5"
          >
            <ShieldAlert className="w-4 h-4" /> INCIDENT SIMULATOR
          </button>
          <button
            onClick={() => onNavigatePage('emergency')}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono font-semibold transition-colors shrink-0"
          >
            DISPATCH CENTER
          </button>
        </div>
      </div>

      {/* 1. NEW: Overall City Health Score Circular Gauge */}
      <CityHealthScore score={86} trend="improving" />

      {/* KPI Stat Cards (Grid of 6) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {MOCK_CITY_METRICS.map((metric, idx) => {
          return (
            <GlassCard key={idx} hoverEffect className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider truncate">
                  {metric.title}
                </span>
                <span className={`p-1.5 rounded-lg text-xs ${
                  metric.status === 'critical' ? 'bg-rose-500/20 text-rose-400' :
                  metric.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-cyan-500/20 text-cyan-400'
                }`}>
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-heading tracking-tight">
                  {metric.value}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[11px] font-mono text-slate-400">
                  <TrendingUp className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-300">{metric.change}</span>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* 2. NEW: Live Multi-Agent Collaboration Panel */}
      <AgentCollaborationPanel />

      {/* Main Grid: Map & Action Suite */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Live Digital Twin Interactive Preview */}
        <GlassCard className="lg:col-span-2 p-5 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                LIVE DIGITAL TWIN MAP OVERVIEW <Map className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">Real-time Telemetry, Emergency Routing & Incident Layer</p>
            </div>
            <button
              onClick={() => onNavigatePage('digital-twin')}
              className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              FULL MAP MODE <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Map Visual Mock Box */}
          <div 
            onClick={() => onNavigatePage('digital-twin')}
            className="flex-1 w-full rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden group cursor-pointer flex flex-col justify-between p-4 min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> 9 Infrastructure Layers Active
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                GPS Precision: 0.2m
              </span>
            </div>

            <div className="relative z-10 text-center my-auto py-8">
              <div className="inline-flex p-4 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.3)] mb-3 group-hover:scale-110 transition-transform">
                <Map className="w-10 h-10 text-cyan-400 animate-pulse" />
              </div>
              <h4 className="text-lg font-bold text-white font-heading">CLICK TO OPEN INTERACTIVE 3D/2D MAP</h4>
              <p className="text-xs text-slate-400 font-mono mt-1">Includes Roads, Hospitals, Police, Flood Heatmaps & Drone Feeds</p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
              <span>LAT: 37.7749 N, LNG: -122.4194 W</span>
              <span className="text-emerald-400">TELEMETRY STREAM: 60 FPS</span>
            </div>
          </div>
        </GlassCard>

        {/* Right Col: Active AI Agents Feed & Quick Suite */}
        <div className="space-y-6">
          <GlassCard className="p-5">
            <h3 className="text-sm font-bold text-white font-heading mb-3">QUICK AI ACTION SUITE</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onNavigatePage('simulator')}
                className="p-3 rounded-xl bg-gradient-to-tr from-rose-950 to-slate-900 border border-rose-500/40 text-left transition-colors group"
              >
                <ShieldAlert className="w-4 h-4 text-rose-400 mb-1 group-hover:scale-110 transition-transform animate-pulse" />
                <div className="text-xs font-semibold text-white">AI Simulator</div>
                <div className="text-[10px] text-slate-400">Run Crisis Workflow</div>
              </button>

              <button
                onClick={() => onNavigatePage('accidents')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
              >
                <Camera className="w-4 h-4 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold text-white">Vision AI Scan</div>
                <div className="text-[10px] text-slate-400">Frame Analysis</div>
              </button>

              <button
                onClick={onOpenVoice}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
              >
                <Mic className="w-4 h-4 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold text-white">Voice Command</div>
                <div className="text-[10px] text-slate-400">Speak Instructions</div>
              </button>

              <button
                onClick={() => onNavigatePage('traffic')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
              >
                <Car className="w-4 h-4 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold text-white">Signal Override</div>
                <div className="text-[10px] text-slate-400">Light Preemption</div>
              </button>
            </div>
          </GlassCard>

          {/* Active AI Agents Feed Summary */}
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                ACTIVE AGENTS <Cpu className="w-4 h-4 text-cyan-400" />
              </h3>
              <button
                onClick={() => onNavigatePage('city-manager')}
                className="text-[11px] font-mono text-cyan-400 hover:underline"
              >
                ORCHESTRATOR &rarr;
              </button>
            </div>

            <div className="space-y-2.5">
              {MOCK_AGENTS.slice(0, 4).map((agent) => (
                <div key={agent.id} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <AgentBadge agent={agent} />
                    <span className="text-[10px] font-mono text-slate-500">{agent.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-tight">
                    {agent.lastAction}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>

      {/* 3. NEW: Predictive Timeline Engine (+24h City State Forecast) */}
      <PredictiveTimeline />

      {/* 4. NEW: Explainable AI (XAI) Panel */}
      <ExplainableAIPanel />

    </div>
  );
};
