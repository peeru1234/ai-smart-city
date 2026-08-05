import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Plane, Eye, Flame, Users, AlertTriangle, ShieldCheck } from 'lucide-react';

export const DroneAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            DRONE SURVEILLANCE & AERIAL ANALYSIS <Plane className="w-5 h-5 text-purple-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Autonomous UAV Flight Trajectory • Road Damage Assessment • Crowd Thermal Density Scan
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span> 4 UAV DRONES IN FLIGHT
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Drone Feed Box */}
        <GlassCard className="lg:col-span-2 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white font-heading">DRONE AI-ALPHA THERMAL FEED</h3>
            <span className="text-[10px] font-mono text-cyan-400">ALTITUDE: 120m • SPEED: 38 km/h</span>
          </div>

          <div className="relative w-full h-[360px] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
              alt="Drone aerial feed"
              className="w-full h-full object-cover"
            />
            {/* Crosshair Overlay */}
            <div className="absolute inset-0 border border-cyan-500/30 pointer-events-none flex items-center justify-center">
              <div className="w-16 h-16 border border-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
              </div>
            </div>

            <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-emerald-400">
              HD THERMAL OVERLAY • PATROL SECTOR 4
            </div>
          </div>
        </GlassCard>

        {/* Drone Telemetry */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">AERIAL INSPECTION SCORES</h3>
          
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">ROAD SURFACE INTEGRITY</span>
              <span className="text-emerald-400 font-bold text-sm">92% Optimal</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Minor crack detected at Highway 101 KM 44</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">CROWD THERMAL DENSITY</span>
              <span className="text-cyan-400 font-bold text-sm">Moderate (1,240 people)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Gathering outside Stadium Gate B</p>
            </div>
          </div>
        </GlassCard>

      </div>

    </div>
  );
};
