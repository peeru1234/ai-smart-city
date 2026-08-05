import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Square, Zap, Clock, MapPin, CheckCircle2, Car } from 'lucide-react';

export const ParkingPrediction: React.FC = () => {
  const [reserved, setReserved] = useState(false);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            SMART PARKING PREDICTION AGENT <Square className="w-5 h-5 text-cyan-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Occupancy Telemetry • Arrival Wait Estimator • Automated Spot Reservation & EV Charging
          </p>
        </div>
        <button
          onClick={() => setReserved(!reserved)}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
            reserved
              ? 'bg-emerald-500 text-black shadow-lg'
              : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40'
          }`}
        >
          {reserved ? 'RESERVATION CONFIRMED (SPOT #A-42)' : 'SIMULATE INSTANT PARKING RESERVATION'}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Available Parking Spots</span>
          <div className="text-2xl font-bold text-cyan-400 font-heading mt-1">1,420 Spots</div>
          <span className="text-[10px] text-slate-400 font-mono">81% Occupancy Rate</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Avg Parking Wait Time</span>
          <div className="text-2xl font-bold text-emerald-400 font-heading mt-1">2.4 mins</div>
          <span className="text-[10px] text-emerald-300 font-mono">-4.5 mins vs non-AI cities</span>
        </GlassCard>

        <GlassCard className="p-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase">EV Charging Stations</span>
          <div className="text-2xl font-bold text-amber-400 font-heading mt-1">84 Active</div>
          <span className="text-[10px] text-slate-400 font-mono">Fast DC Chargers (150kW)</span>
        </GlassCard>
      </div>

      {/* Garages List */}
      <GlassCard className="p-5 space-y-4">
        <h3 className="text-sm font-bold text-white font-heading">CITY-WIDE SMART GARAGES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Downtown Metro Plaza', open: '142 spots open', rate: '$4.50 / hr', status: 'Optimal' },
            { name: 'Financial Harbor Deck', open: '48 spots open', rate: '$6.00 / hr', status: 'High Demand' },
            { name: 'North Park Mall Garage', open: '380 spots open', rate: '$3.00 / hr', status: 'High Availability' }
          ].map((garage, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-white font-bold">
                <span>{garage.name}</span>
                <span className="text-cyan-400">{garage.rate}</span>
              </div>
              <p className="text-emerald-400 text-[11px]">{garage.open}</p>
              <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {garage.status}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
};
