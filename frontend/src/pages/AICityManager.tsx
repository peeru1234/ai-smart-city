import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { AgentBadge } from '../components/AgentBadge';
import { AgentCollaborationPanel } from '../components/AgentCollaborationPanel';
import { MOCK_AGENTS } from '../data/mockData';
import { Bot, Cpu, GitBranch, Layers, Activity, CheckCircle2, Sparkles, Zap } from 'lucide-react';

export const AICityManager: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            AI CITY MANAGER & MULTI-AGENT ORCHESTRATOR <Bot className="w-5 h-5 text-cyan-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            LangGraph Multi-Agent Pipeline • Real-Time Inter-Agent Negotiation • High-Priority Crisis Management
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          AGENT CONSENSUS SCORE: 9.8 / 10
        </div>
      </div>

      {/* Live Animated Collaboration Panel */}
      <AgentCollaborationPanel />

      {/* Agents Matrix Grid */}
      <GlassCard className="p-6 space-y-6">
        <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
          LANGGRAPH MULTI-AGENT PIPELINE EXECUTION <GitBranch className="w-4 h-4 text-cyan-400" />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_AGENTS.map((agent) => (
            <div key={agent.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <AgentBadge agent={agent} showDetails />
                <span className="text-[10px] font-mono text-cyan-400 font-bold">{(agent.confidence * 100).toFixed(0)}% Conf</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-snug">
                {agent.lastAction}
              </p>
              <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-400">
                <span>ID: {agent.id}</span>
                <span className="text-emerald-400">● EXECUTION OPTIMAL</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
};
