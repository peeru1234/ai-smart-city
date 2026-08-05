import React from 'react';
import { AgentStatus } from '../data/mockData';
import { Cpu, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AgentBadgeProps {
  agent: AgentStatus;
  showDetails?: boolean;
}

export const AgentBadge: React.FC<AgentBadgeProps> = ({ agent, showDetails = false }) => {
  const statusColors = {
    active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    analyzing: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30 animate-pulse',
    idle: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    alert: 'bg-rose-500/20 text-rose-400 border-rose-500/30 animate-pulse'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${statusColors[agent.status]}`}>
      <span className="relative flex h-2 w-2">
        {agent.status === 'active' || agent.status === 'analyzing' || agent.status === 'alert' ? (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            agent.status === 'alert' ? 'bg-rose-400' : 'bg-cyan-400'
          }`} />
        ) : null}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${
          agent.status === 'alert' ? 'bg-rose-500' : agent.status === 'active' ? 'bg-emerald-500' : 'bg-cyan-400'
        }`} />
      </span>
      <span className="font-semibold">{agent.name}</span>
      {showDetails && (
        <span className="opacity-70 text-[10px] uppercase font-mono tracking-wider ml-1">
          ({agent.status})
        </span>
      )}
    </div>
  );
};
