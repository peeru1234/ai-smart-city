import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { CloudRain, Waves, ShieldAlert, ArrowDown, CheckCircle } from 'lucide-react';

export const FloodPrediction: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          FLOOD RISK PREDICTION AGENT <CloudRain className="w-5 h-5 text-blue-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Hydro-Telemetry Telemetry • Drainage Pump Automation • Evacuation Route Guidance
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Overall City Flood Risk</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">18% Low Risk</div>
          <span className="text-[10px] text-slate-400 font-mono">Rainfall Forecast: 4.2mm</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">River Water Sensor Level</span>
          <div className="text-2xl font-bold text-cyan-400 font-heading mt-1">0.82 meters</div>
          <span className="text-[10px] text-emerald-400 font-mono">Safe threshold (&lt; 2.5m)</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Automated Drainage Pumps</span>
          <div className="text-2xl font-bold text-white font-heading mt-1">12 / 12 Ready</div>
          <span className="text-[10px] text-emerald-400 font-mono">Pump Station Sector 2 Active</span>
        </GlassCard>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* River Water Sensors Table */}
        <GlassCard className="lg:col-span-2 p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            RIVER BASIN SENSOR TELEMETRY <Waves className="w-4 h-4 text-blue-400" />
          </h3>

          <div className="space-y-3">
            {[
              { sensor: 'Sensor #1 - Upper Dam Basin', level: '1.2m', status: 'Normal', risk: 'Low' },
              { sensor: 'Sensor #2 - Sector 2 Underpass', level: '0.45m', status: 'Pumping', risk: 'Medium' },
              { sensor: 'Sensor #3 - Harbor Canal Outlet', level: '0.78m', status: 'Normal', risk: 'Low' }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-semibold text-white block">{item.sensor}</span>
                  <span className="text-[10px] text-slate-400">Water Depth: {item.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] ${
                    item.risk === 'Medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {item.risk} Risk ({item.status})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Evacuation Route Box */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">EVACUATION ROUTE PREDICTION</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            In the event of water levels exceeding 2.5m, Sector 2 traffic will be rerouted automatically through North Ridge Expressway.
          </p>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-1">
            <div className="text-cyan-400 font-bold">PRIMARY EVAC ROUTE:</div>
            <div className="text-slate-300">Highway 101 North &rarr; Highland Overpass</div>
          </div>
        </GlassCard>

      </div>

    </div>
  );
};
