import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Settings as SettingsIcon, Key, Database, RefreshCw, ShieldCheck, Check } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [dbMode, setDbMode] = useState('Local Mock + FastAPI Backend');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          SYSTEM SETTINGS & CONFIGURATION <SettingsIcon className="w-5 h-5 text-cyan-400" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Gemini API Configuration • Supabase / Database Store Options • Telemetry Sync Interval
        </p>
      </div>

      <GlassCard className="p-6 max-w-2xl space-y-6">
        <form onSubmit={handleSave} className="space-y-4">
          
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1 uppercase">
              Google Gemini API Key (Optional Live AI Reasoning)
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none font-mono"
              />
            </div>
            <span className="text-[10px] text-slate-500 font-mono mt-1 block">
              If left blank, built-in intelligent smart simulation responses will be used automatically.
            </span>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1 uppercase">
              Database / Telemetry Engine
            </label>
            <select
              value={dbMode}
              onChange={(e) => setDbMode(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none font-mono"
            >
              <option value="Local Mock + FastAPI Backend">Local Mock Engine + FastAPI Backend</option>
              <option value="Supabase Cloud Production">Supabase Cloud Database & Auth</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
          >
            {saved ? <Check className="w-4 h-4" /> : <SettingsIcon className="w-4 h-4" />}
            {saved ? 'SETTINGS SAVED & APPLIED!' : 'SAVE SYSTEM CONFIGURATION'}
          </button>
        </form>
      </GlassCard>

    </div>
  );
};
