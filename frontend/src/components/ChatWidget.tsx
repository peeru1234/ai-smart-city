import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Hello! I am your AI Smart City Digital Twin Assistant. Ask me anything about traffic status, flood risks, parking, AQI levels, emergency response, or weather updates.',
      timestamp: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = input;
    setInput('');
    setIsTyping(true);

    // Simulate smart AI response based on keywords
    setTimeout(() => {
      let replyText = "I have analyzed your query across all city digital twin telemetry modules. ";
      const q = query.toLowerCase();

      if (q.includes('traffic') || q.includes('jam') || q.includes('road')) {
        replyText += "Traffic index is currently at 68% (Moderate). Bottlenecks detected at Bay Bridge Toll Plaza (92% occupancy). Traffic Agent has extended green signals by +15s.";
      } else if (q.includes('flood') || q.includes('water') || q.includes('rain')) {
        replyText += "Flood risk is LOW (18%). River basin telemetry indicates 0.8m water level. Automated pumps are ready in Sector 2 underpass.";
      } else if (q.includes('parking') || q.includes('spot') || q.includes('car')) {
        replyText += "1,420 smart parking spots are available city-wide. Nearest available garage: Downtown Metro Plaza (142 open spots, $4.50/hr).";
      } else if (q.includes('pollution') || q.includes('aqi') || q.includes('air')) {
        replyText += "Air Quality Index (AQI) is GOOD at 42. PM2.5 level is 18 µg/m³. All industrial filtration protocols are normal.";
      } else if (q.includes('emergency') || q.includes('accident') || q.includes('hospital')) {
        replyText += "3 active emergency incidents being managed. Crash at Sector 7 has Ambulance #4 en route with automated traffic wave priority.";
      } else {
        replyText += `All 7 AI Agents (Traffic, Accident, Flood, Pollution, Parking, Emergency, City Manager) are 100% operational with average confidence score of 95.2%.`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform"
      >
        <MessageSquare className="w-4 h-4 text-black" />
        <span className="font-heading">AI CITY CHATBOT</span>
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] glass-panel rounded-3xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col h-[520px] overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="p-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">AI CITY COPILOT</h4>
                <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online • Gemini Model Engine
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[9px] opacity-60 text-right mt-1 font-mono">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-cyan-400 text-xs font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>AI is analyzing city telemetry...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-950/90 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about traffic, AQI, parking, flood risk..."
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
