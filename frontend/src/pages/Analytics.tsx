import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { BarChart3, TrendingUp, Activity, PieChart, ShieldCheck } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          CITY ANALYTICS & SYSTEM PERFORMANCE <BarChart3 className="w-5 h-5 text-cyan-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Historical Trends • Predictive Telemetry Performance • AI Agent Latency & Health
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Avg Emergency Response</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">3.2 mins</div>
          <span className="text-[10px] text-emerald-300 font-mono">-42% vs non-digital twin</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Traffic Delay Reduction</span>
          <div className="text-2xl font-bold text-cyan-400 font-heading mt-1">28.4%</div>
          <span className="text-[10px] text-slate-400 font-mono">Adaptive signal impact</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Daily Vision AI Scans</span>
          <div className="text-2xl font-bold text-white font-heading mt-1">14,820</div>
          <span className="text-[10px] text-emerald-400 font-mono">99.2% Accuracy</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">System Uptime</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">99.99%</div>
          <span className="text-[10px] text-slate-400 font-mono">Zero failure rate</span>
        </GlassCard>
      </div>

      {/* Chart Visual Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">24-HOUR TRAFFIC CONGESTION TREND</h3>
          <div className="h-48 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-mono text-slate-500">
            [ Interactive Chart: Peak Congestion 18:00 (68%) ]
          </div>
        </GlassCard>

        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading">AIR QUALITY INDEX (AQI) HISTORICAL TREND</h3>
          <div className="h-48 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-mono text-slate-500">
            [ Interactive Chart: AQI Average 42 (Good) ]
          </div>
        </GlassCard>
      </div>

    </div>
  );
};
