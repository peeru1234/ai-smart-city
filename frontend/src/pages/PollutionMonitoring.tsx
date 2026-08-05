import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Wind, Activity, AlertCircle, ShieldCheck, Leaf } from 'lucide-react';

export const PollutionMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          POLLUTION & AIR QUALITY AGENT <Wind className="w-5 h-5 text-cyan-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Environmental AQI Sensors • PM2.5 / PM10 Telemetry • Industrial Source Mitigation
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Current Air Quality Index</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">42 AQI</div>
          <span className="text-[10px] text-emerald-300 font-mono">Good Quality Rating</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">PM 2.5 Fine Particulate</span>
          <div className="text-2xl font-bold text-cyan-400 font-heading mt-1">18 µg/m³</div>
          <span className="text-[10px] text-slate-400 font-mono">WHO Standard: &lt; 25</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">PM 10 Coarse Particulate</span>
          <div className="text-2xl font-bold text-white font-heading mt-1">34 µg/m³</div>
          <span className="text-[10px] text-slate-400 font-mono">WHO Standard: &lt; 50</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Ozone (O3) Level</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">0.03 ppm</div>
          <span className="text-[10px] text-emerald-300 font-mono">Optimal Range</span>
        </GlassCard>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* District AQI Breakdown */}
        <GlassCard className="lg:col-span-2 p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            DISTRICT AIR QUALITY SENSORS <Leaf className="w-4 h-4 text-emerald-400" />
          </h3>

          <div className="space-y-3">
            {[
              { district: 'Downtown Financial Center', aqi: '48 AQI', pm25: '21 µg/m³', status: 'Good' },
              { district: 'Industrial Port District', aqi: '65 AQI', pm25: '32 µg/m³', status: 'Moderate' },
              { district: 'Residential North Park', aqi: '28 AQI', pm25: '12 µg/m³', status: 'Optimal' }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-semibold text-white block">{item.district}</span>
                  <span className="text-[10px] text-slate-400">PM2.5: {item.pm25}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-cyan-400 block">{item.aqi}</span>
                  <span className="text-[10px] text-emerald-400">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* AI Mitigation Recommendation */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">AI MITIGATION RECOMMENDATION</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Pollution Agent recommends maintaining eco-routing for heavy diesel trucks away from Downtown Financial Center between 08:00 and 11:00 AM.
          </p>
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
            ECO-ZONE FILTER ACTIVE
          </div>
        </GlassCard>

      </div>

    </div>
  );
};
