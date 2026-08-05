import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_EMERGENCY_ALERTS } from '../data/mockData';
import { Bell, AlertTriangle, CheckCircle, Info, ShieldAlert } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'critical' | 'traffic' | 'system'>('all');

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            ALERTS & SYSTEM NOTIFICATIONS <Bell className="w-5 h-5 text-cyan-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Real-Time Push Notifications • Critical Emergency Feeds • Automated Agent Logs
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2">
          {['all', 'critical', 'traffic', 'system'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono capitalize transition-all ${
                filter === f
                  ? 'bg-cyan-500 text-black font-bold shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <GlassCard className="p-5 space-y-3">
        {MOCK_EMERGENCY_ALERTS.map((alert) => (
          <div key={alert.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-rose-950 border border-rose-500/40 text-rose-400 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white font-heading">{alert.title}</h4>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {alert.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">{alert.description}</p>
                <span className="text-[10px] font-mono text-slate-500 block mt-1">{alert.location} • {alert.time}</span>
              </div>
            </div>

            <button className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono shrink-0">
              ACKNOWLEDGE
            </button>
          </div>
        ))}
      </GlassCard>

    </div>
  );
};
