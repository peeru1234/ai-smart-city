import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Mic, Volume2, Radio, Sparkles, Command, CheckCircle2 } from 'lucide-react';

export const VoiceAssistantPage: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('Show me the latest traffic report for Sector 4.');
  const [response, setResponse] = useState('Sector 4 traffic congestion is currently 68%. AI Traffic Agent has extended green signals by +15s.');

  const handleMicClick = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setSpokenText("Dispatch ambulance to Sector 7 crash site.");
      setResponse("Ambulance #4 dispatched! Traffic preemption green wave active along 5th Ave.");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          AI VOICE ASSISTANT CONSOLE <Mic className="w-5 h-5 text-cyan-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Speech Recognition Engine • Text-to-Speech Audio Wave • Voice Emergency Commands
        </p>
      </div>

      {/* Main Mic Workspace */}
      <GlassCard className="p-8 text-center space-y-6 max-w-2xl mx-auto">
        <div 
          onClick={handleMicClick}
          className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
            isListening
              ? 'bg-gradient-to-tr from-cyan-500 to-emerald-400 shadow-[0_0_60px_rgba(0,240,255,0.8)] scale-110'
              : 'bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.3)]'
          }`}
        >
          {isListening ? (
            <Radio className="w-16 h-16 text-black animate-spin" />
          ) : (
            <Mic className="w-16 h-16 text-cyan-400 hover:scale-110 transition-transform" />
          )}
        </div>

        <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          {isListening ? 'LISTENING TO SPEECH INPUT...' : 'CLICK MICROPHONE OR SPEAK A COMMAND'}
        </p>

        {/* Output Boxes */}
        <div className="space-y-3 text-left">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
            <span className="text-slate-500 block mb-1">USER VOICE INPUT:</span>
            <span className="text-cyan-300 font-semibold">"{spokenText}"</span>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs text-slate-200 leading-relaxed font-sans">
            <span className="text-cyan-400 font-mono font-bold block mb-1">AI VOICE SYNTHESIS:</span>
            {response}
          </div>
        </div>
      </GlassCard>

    </div>
  );
};
