import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, X, Sparkles, Radio, CheckCircle2 } from 'lucide-react';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCommandExecute?: (command: string) => void;
}

export const VoiceModal: React.FC<VoiceModalProps> = ({
  isOpen,
  onClose,
  onCommandExecute
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTranscript('');
      setAiResponse('Voice AI Online. Speak a command such as "Show accident severity" or "Dispatch ambulance to Sector 7".');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sampleCommands = [
    "Dispatch ambulance to Sector 7 crash site",
    "Show traffic congestion predictions for Highway 101",
    "What is the current Air Quality Index?",
    "Find available parking near Downtown Metro Plaza"
  ];

  const handleStartListening = () => {
    setIsListening(true);
    setTranscript('Listening to your voice input...');
    
    // Simulate speech-to-text response
    setTimeout(() => {
      const randomCmd = sampleCommands[Math.floor(Math.random() * sampleCommands.length)];
      setTranscript(randomCmd);
      setIsListening(false);
      processCommand(randomCmd);
    }, 2500);
  };

  const processCommand = (cmd: string) => {
    setAiResponse(`Executing voice command: "${cmd}". Dispatching command parameters to AI City Manager & Emergency Agent.`);
    speakResponse(`Executing voice command: ${cmd}`);
    if (onCommandExecute) onCommandExecute(cmd);
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Mic className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              VOICE AI ASSISTANT <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>
            <p className="text-xs text-slate-400 font-mono">Speech-to-Text & Text-to-Speech Control Center</p>
          </div>
        </div>

        {/* Audio Visualizer Orb */}
        <div className="flex flex-col items-center justify-center py-8">
          <div 
            onClick={handleStartListening}
            className={`relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
              isListening
                ? 'bg-gradient-to-tr from-cyan-500 to-emerald-400 shadow-[0_0_50px_rgba(0,240,255,0.8)] scale-110'
                : isSpeaking
                ? 'bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-[0_0_40px_rgba(124,58,237,0.6)] scale-105'
                : 'bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
            }`}
          >
            {isListening ? (
              <Radio className="w-12 h-12 text-black animate-spin" />
            ) : isSpeaking ? (
              <Volume2 className="w-12 h-12 text-white animate-bounce" />
            ) : (
              <Mic className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform" />
            )}
          </div>
          <p className="mt-4 text-xs font-mono text-cyan-400 tracking-wider">
            {isListening ? 'LISTENING TO SPEECH INPUT...' : isSpeaking ? 'VOICE SYNTHESIS ACTIVE' : 'TAP OR SPEAK A COMMAND'}
          </p>
        </div>

        {/* Transcript Box */}
        {transcript && (
          <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-slate-500">YOU SAID: </span>
            <span className="text-cyan-300 font-semibold">"{transcript}"</span>
          </div>
        )}

        {/* AI Response Output */}
        <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-200 leading-relaxed font-sans">
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" /> AI SYSTEM RESPONSE:
          </div>
          {aiResponse}
        </div>

        {/* Quick Command Suggestions */}
        <div className="mt-5">
          <p className="text-[11px] font-mono text-slate-400 mb-2 uppercase">Quick Voice Prompts:</p>
          <div className="space-y-1.5">
            {sampleCommands.slice(0, 3).map((cmd, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTranscript(cmd);
                  processCommand(cmd);
                }}
                className="w-full text-left p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/30 text-xs text-slate-300 transition-colors flex items-center justify-between group"
              >
                <span>"{cmd}"</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
