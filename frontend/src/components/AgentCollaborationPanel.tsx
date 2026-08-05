import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { AgentBadge } from './AgentBadge';
import { 
  Bot, 
  ArrowRight, 
  Activity, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  Radio, 
  GitBranch 
} from 'lucide-react';

export interface InterAgentMessage {
  id: string;
  fromAgent: string;
  toAgent: string;
  message: string;
  timestamp: string;
  status: 'delivered' | 'negotiating' | 'executed';
}

export const AgentCollaborationPanel: React.FC = () => {
  const [messages, setMessages] = useState<InterAgentMessage[]>([
    {
      id: 'msg-1',
      fromAgent: 'Traffic Agent',
      toAgent: 'Emergency Agent',
      message: 'Heavy congestion detected at Sector 7 intersection (92% occupancy).',
      timestamp: '10s ago',
      status: 'executed'
    },
    {
      id: 'msg-2',
      fromAgent: 'Emergency Agent',
      toAgent: 'City Manager Orchestrator',
      message: 'Ambulance #4 rerouted via 5th Ave express lane.',
      timestamp: '6s ago',
      status: 'executed'
    },
    {
      id: 'msg-3',
      fromAgent: 'City Manager Orchestrator',
      toAgent: 'Traffic Agent',
      message: 'Synchronize traffic signals to force green wave along 5th Ave.',
      timestamp: '2s ago',
      status: 'negotiating'
    }
  ]);

  const [activeTab, setActiveTab] = useState<'live' | 'graph'>('live');

  // Simulate dynamic inter-agent communication messages
  useEffect(() => {
    const sampleInterchanges: Omit<InterAgentMessage, 'id' | 'timestamp'>[] = [
      { fromAgent: 'Weather Agent', toAgent: 'Flood Agent', message: 'Rainfall rate forecast increased to 14mm/hr over North River Basin.', status: 'delivered' },
      { fromAgent: 'Flood Agent', toAgent: 'City Manager Orchestrator', message: 'Sensor #2 water depth at 0.45m. Drainage pump station activated.', status: 'executed' },
      { fromAgent: 'Accident Agent', toAgent: 'Emergency Agent', message: 'Computer vision confidence 98% crash severity 8.5 on Highway 101.', status: 'executed' },
      { fromAgent: 'Parking Agent', toAgent: 'Traffic Agent', message: 'Metro Plaza Garage full (98%). Rerouting 18 vehicles to Harbor Deck.', status: 'delivered' },
      { fromAgent: 'Pollution Agent', toAgent: 'Traffic Agent', message: 'Industrial district PM2.5 elevated. Eco-zone truck limit recommended.', status: 'negotiating' }
    ];

    const interval = setInterval(() => {
      const nextMsg = sampleInterchanges[Math.floor(Math.random() * sampleInterchanges.length)];
      const newEntry: InterAgentMessage = {
        ...nextMsg,
        id: `msg-${Date.now()}`,
        timestamp: 'Just now'
      };
      setMessages((prev) => [newEntry, ...prev.slice(0, 7)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const agentsList = [
    { name: 'Traffic Agent', role: 'Congestion & Signals', status: 'active', latency: '12ms', conf: 96 },
    { name: 'Accident Agent', role: 'Vision AI Detection', status: 'analyzing', latency: '18ms', conf: 98 },
    { name: 'Emergency Agent', role: 'Dispatch & Routing', status: 'alert', latency: '8ms', conf: 99 },
    { name: 'Flood Agent', role: 'Hydro Telemetry', status: 'active', latency: '15ms', conf: 92 },
    { name: 'Pollution Agent', role: 'AQI & Eco Scrubbing', status: 'active', latency: '14ms', conf: 95 },
    { name: 'Parking Agent', role: 'Spot Guidance', status: 'active', latency: '10ms', conf: 90 },
    { name: 'Weather Agent', role: 'Rain & Storm Forecast', status: 'active', latency: '22ms', conf: 94 },
    { name: 'City Manager Agent', role: 'LangGraph Orchestrator', status: 'active', latency: '5ms', conf: 97 }
  ];

  return (
    <GlassCard className="p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
            AI MULTI-AGENT COLLABORATION & MESSAGE BUS <GitBranch className="w-5 h-5 text-cyan-400" />
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            8 Cooperating Autonomous AI Agents • Real-Time Inter-Agent Negotiation Protocol
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'live'
                ? 'bg-cyan-500 text-black font-bold shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            LIVE MESSAGES FEED
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'graph'
                ? 'bg-cyan-500 text-black font-bold shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            AGENT FLEET STATUS (8)
          </button>
        </div>
      </div>

      {activeTab === 'live' ? (
        /* Live Animated Inter-Agent Messages Feed */
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
            <span>INTER-AGENT COMMUNICATIONS PROTOCOL (WEBSOCKET BUS)</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE STREAMING
            </span>
          </div>

          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in shadow-sm"
              >
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                    {msg.fromAgent}
                  </span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
                  <span className="px-2.5 py-1 rounded-lg bg-purple-950 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold">
                    {msg.toAgent}
                  </span>
                </div>

                <div className="flex-1 sm:px-4">
                  <p className="text-xs text-slate-200 font-sans italic">
                    "{msg.message}"
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-[10px] font-mono">
                  <span className={`px-2 py-0.5 rounded ${
                    msg.status === 'executed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse'
                  }`}>
                    {msg.status.toUpperCase()}
                  </span>
                  <span className="text-slate-500">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Agent Fleet Matrix */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {agentsList.map((ag, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs font-heading">{ag.name}</span>
                <span className="text-[10px] font-mono text-cyan-400 font-semibold">{ag.conf}% Conf</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">{ag.role}</p>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
                <span>LATENCY: {ag.latency}</span>
                <span className="text-emerald-400 uppercase">● RUNNING</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </GlassCard>
  );
};
