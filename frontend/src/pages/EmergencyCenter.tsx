import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ShieldAlert, Ambulance, Building2, Shield, Flame, Navigation, Zap, PhoneCall } from 'lucide-react';

export const EmergencyCenter: React.FC = () => {
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);

  const handleDispatch = (unit: string) => {
    setDispatchStatus(`Emergency ${unit} dispatched! Dynamic green traffic wave activated along Sector 7 route.`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            EMERGENCY RESPONSE & DISPATCH CENTER <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            One-Touch SOS Trigger • Multi-Agency Dispatch (Hospital, Police, Fire) • Signal Wave Preemption
          </p>
        </div>
        <button
          onClick={() => handleDispatch('Ambulance #4 & Heavy Fire Rescue')}
          className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(244,63,94,0.5)] flex items-center gap-2"
        >
          <PhoneCall className="w-4 h-4" /> BROADCAST ONE-TOUCH SOS DISPATCH
        </button>
      </div>

      {dispatchStatus && (
        <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs font-mono flex items-center gap-3 animate-fade-in shadow-xl">
          <Zap className="w-5 h-5 text-rose-400 animate-bounce" />
          <span>{dispatchStatus}</span>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Nearest Stations List */}
        <GlassCard className="lg:col-span-2 p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            ACTIVE EMERGENCY STATIONS & UNITS <Building2 className="w-4 h-4 text-rose-400" />
          </h3>

          <div className="space-y-3">
            {[
              { name: 'Central General Hospital (Trauma Center)', icon: Building2, status: '42 ICU Beds Free', dist: '1.2 km away', unit: 'Trauma Team Alpha' },
              { name: 'Metro Police Precinct 4', icon: Shield, status: '14 Patrol Units Active', dist: '0.8 km away', unit: 'Unit #412' },
              { name: 'Fire Station #12 (Heavy Rescue)', icon: Flame, status: '3 Engines Ready', dist: '2.1 km away', unit: 'Engine #12' }
            ].map((station, idx) => {
              const Icon = station.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-950 border border-rose-500/30 text-rose-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-heading">{station.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{station.dist} • {station.status}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDispatch(station.unit)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono font-semibold transition-colors shrink-0"
                  >
                    DISPATCH {station.unit} &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </GlassCard>

        {/* Dynamic Route Guidance */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            LIVE PREEMPTIVE ROUTE <Navigation className="w-4 h-4 text-emerald-400" />
          </h3>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
            <div className="text-emerald-400 font-bold">ACTIVE DISPATCH TRAJECTORY:</div>
            <div className="text-slate-300">Station #12 &rarr; 5th Ave &rarr; Main St &rarr; Sector 7 Impact Zone</div>
            <div className="text-[10px] text-cyan-400">NEXT SIGNAL FORCE GREEN: 12 seconds</div>
            <div className="text-[10px] text-slate-400">ESTIMATED ARRIVAL TIME (ETA): 3.2 minutes</div>
          </div>
        </GlassCard>

      </div>

    </div>
  );
};
