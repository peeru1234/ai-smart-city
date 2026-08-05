import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ChatWidget } from '../components/ChatWidget';
import { MessageSquare, Bot, Sparkles, Database } from 'lucide-react';

export const AIChatbotPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          AI CITY COPILOT CHATBOT <MessageSquare className="w-5 h-5 text-cyan-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Gemini LLM Integration • Interactive City Querying • Autonomous Diagnostics Engine
        </p>
      </div>

      <GlassCard className="p-8 text-center space-y-4 max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto">
          <Bot className="w-8 h-8 animate-pulse" />
        </div>
        <h3 className="text-lg font-bold text-white font-heading">AI City Assistant is Active</h3>
        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          Use the floating chatbot widget at the bottom right corner of your screen to interact with the city AI engine, query live telemetry, or trigger emergency protocols.
        </p>
      </GlassCard>
    </div>
  );
};
