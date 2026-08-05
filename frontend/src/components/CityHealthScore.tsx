import React from 'react';
import { GlassCard } from './GlassCard';
import { Activity, TrendingUp, TrendingDown, ShieldCheck, AlertTriangle, Cpu } from 'lucide-react';

interface SubSystemMetric {
  name: string;
  score: number;
  weight: string;
  status: 'optimal' | 'warning' | 'critical';
}

interface CityHealthScoreProps {
  score?: number;
  trend?: 'improving' | 'declining' | 'stable';
}

export const CityHealthScore: React.FC<CityHealthScoreProps> = ({
  score = 86,
  trend = 'improving'
}) => {
  const subMetrics: SubSystemMetric[] = [
    { name: 'Traffic Flow Index', score: 72, weight: '15%', status: 'warning' },
    { name: 'Air Quality (AQI)', score: 94, weight: '15%', status: 'optimal' },
    { name: 'Flood Risk Defense', score: 90, weight: '15%', status: 'optimal' },
    { name: 'Emergency Readiness', score: 96, weight: '20%', status: 'optimal' },
    { name: 'Parking Efficiency', score: 82, weight: '10%', status: 'optimal' },
    { name: 'Public Safety Rating', score: 88, weight: '15%', status: 'optimal' },
    { name: 'Grid Infrastructure', score: 91, weight: '10%', status: 'optimal' },
    { name: 'AI Agent Fleet Health', score: 98, weight: '5%', status: 'optimal' }
  ];

  // SVG Gauge Calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (val: number) => {
    if (val >= 85) return 'stroke-emerald-400 text-emerald-400';
    if (val >= 70) return 'stroke-cyan-400 text-cyan-400';
    if (val >= 50) return 'stroke-amber-400 text-amber-400';
    return 'stroke-rose-400 text-rose-400';
  };

  return (
    <GlassCard glow="cyan" className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Circular Gauge Visualizer */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              {/* Background Track Circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-slate-800"
                strokeWidth="12"
                fill="transparent"
              />
              {/* Animated Progress Circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className={`transition-all duration-1000 stroke-cap-round ${getScoreColor(score)}`}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                fill="transparent"
              />
            </svg>

            {/* Score Text Overlay */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-white font-heading tracking-tight">{score}</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">OUT OF 100</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-2 text-xs font-mono">
            {trend === 'improving' ? (
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                <TrendingUp className="w-4 h-4" /> CITY HEALTH IMPROVING (+2.4%)
              </span>
            ) : (
              <span className="text-amber-400 flex items-center gap-1 font-bold">
                <TrendingDown className="w-4 h-4" /> SYSTEM UNDER MODERATE LOAD
              </span>
            )}
          </div>
        </div>

        {/* Right: Sub-System Metrics Grid */}
        <div className="flex-1 space-y-3 w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              COMPOSITE SYSTEM READINESS SCORES <Activity className="w-4 h-4 text-cyan-400" />
            </h3>
            <span className="text-[10px] font-mono text-slate-400">8 SYSTEM SUBSYSTEMS SYNCED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {subMetrics.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 font-mono text-xs">
                <div className="text-[10px] text-slate-400 truncate">{item.name}</div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{item.score}%</span>
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* AI Recommendation Summary */}
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 font-sans flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-cyan-300">AI City Manager Recommendation:</strong> Traffic flow is at 72% efficiency due to Sector 7 incident. Extend adaptive green signal wave by +20s to raise overall health to 91%.
            </span>
          </div>
        </div>

      </div>
    </GlassCard>
  );
};
