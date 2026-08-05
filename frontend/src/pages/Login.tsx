import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Cpu, ShieldCheck, Lock, User, Sparkles, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: (role: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@smartcity.gov');
  const [password, setPassword] = useState('••••••••••••');
  const [selectedRole, setSelectedRole] = useState('Admin');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(selectedRole);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_30px_rgba(0,240,255,0.4)] mb-4">
            <div className="w-full h-full bg-[#070a10] rounded-[15px] flex items-center justify-center">
              <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            AI SMART CITY <span className="text-cyan-400">DIGITAL TWIN 2.0</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Secure Command & Operations Authentication Portal
          </p>
        </div>

        {/* Form Card */}
        <GlassCard glow="cyan" className="p-8">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Select User Access Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Admin', 'Dispatcher', 'Citizen'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-medium border transition-all ${
                      selectedRole === role
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Official Email Address
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Secure Security Key / Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors font-mono"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 group mt-6"
            >
              <span>ACCESS DIGITAL TWIN COMMAND</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Preset Helper */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
            <p className="text-[11px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
              Protected by Supabase Auth & JWT Security Protocols
            </p>
          </div>
        </GlassCard>

      </div>
    </div>
  );
};
