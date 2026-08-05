import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Car, Clock, TrendingUp, AlertTriangle, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export const TrafficMonitoring: React.FC = () => {
  const [signalOverride, setSignalOverride] = useState(false);
  const [greenPhase, setGreenPhase] = useState(45);

  const handleToggleOverride = () => {
    setSignalOverride(!signalOverride);
    if (!signalOverride) {
      setGreenPhase(65);
    } else {
      setGreenPhase(45);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            TRAFFIC MONITORING & PREDICTION AGENT <Car className="w-5 h-5 text-amber-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            AI Signal Optimization • Congestion Bottleneck Predictor • Dynamic Rerouting Engine
          </p>
        </div>
        <button
          onClick={handleToggleOverride}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
            signalOverride
              ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
          }`}
        >
          <Zap className="w-4 h-4" />
          {signalOverride ? 'AI SIGNAL OVERRIDE ACTIVE (+20s GREEN)' : 'TRIGGER AI SIGNAL OVERRIDE'}
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Current Congestion Index</span>
          <div className="text-2xl font-bold text-amber-400 font-heading mt-1">68% Moderate</div>
          <span className="text-[10px] text-slate-400 font-mono">Peak hour expected at 18:00</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Avg Commute Travel Time</span>
          <div className="text-2xl font-bold text-cyan-400 font-heading mt-1">18.4 mins</div>
          <span className="text-[10px] text-emerald-400 font-mono">-2.1 mins via AI rerouting</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Active Traffic Signals</span>
          <div className="text-2xl font-bold text-white font-heading mt-1">142 / 142</div>
          <span className="text-[10px] text-emerald-400 font-mono">100% Adaptive Sync</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Traffic Agent Confidence</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">94.8%</div>
          <span className="text-[10px] text-slate-400 font-mono">Model: LangGraph Traffic Net</span>
        </GlassCard>
      </div>

      {/* Traffic Control & Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Signal Timing Controller Box */}
        <GlassCard className="p-5 lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            SECTOR 4 SIGNAL TIMING SIMULATOR <Clock className="w-4 h-4 text-cyan-400" />
          </h3>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">North-South Green Signal Duration:</span>
              <span className="text-sm font-mono font-bold text-cyan-400">{greenPhase} seconds</span>
            </div>
            
            <input
              type="range"
              min="20"
              max="90"
              value={greenPhase}
              onChange={(e) => setGreenPhase(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Min Phase: 20s</span>
              <span>AI Recommended: 65s</span>
              <span>Max Phase: 90s</span>
            </div>
          </div>

          {/* Alternate Route Recommendations */}
          <div>
            <h4 className="text-xs font-mono text-slate-300 uppercase mb-2">AI Recommended Alternate Routes</h4>
            <div className="space-y-2">
              {[
                { name: 'Bay Bridge Bypass via 5th Ave', saved: '12 mins saved', congestion: '24% Low' },
                { name: 'Sector 2 Ring Road Underpass', saved: '8 mins saved', congestion: '31% Low' }
              ].map((route, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">{route.name}</span>
                    <span className="block text-[10px] text-emerald-400 font-mono">{route.saved}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                    {route.congestion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Live Traffic Feed */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">LIVE BOTTLENECK FEEDS</h3>
          <div className="space-y-3">
            {[
              { location: 'Highway 101 KM 42', speed: '18 km/h', status: 'Heavy Congestion' },
              { location: 'Downtown Toll Plaza', speed: '34 km/h', status: 'Moderate Flow' },
              { location: 'Sector 7 Intersection', speed: '5 km/h', status: 'Crash Obstruction' }
            ].map((feed, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white">
                  <span>{feed.location}</span>
                  <span className="text-amber-400 font-mono">{feed.speed}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{feed.status}</span>
              </div>
            ))}
          </div>
        </GlassCard>

      </div>

    </div>
  );
};
