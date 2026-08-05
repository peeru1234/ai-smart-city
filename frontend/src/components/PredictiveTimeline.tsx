import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Clock, TrendingUp, Car, CloudRain, Wind, Square, ShieldAlert, CloudSun } from 'lucide-react';

export type TimeOffset = 'Now' | '30m' | '1h' | '3h' | '6h' | '12h' | '24h';

interface ForecastPoint {
  time: TimeOffset;
  traffic: string;
  flood: string;
  pollution: string;
  parking: string;
  weather: string;
  emergencyDemand: string;
  summary: string;
}

export const PredictiveTimeline: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<TimeOffset>('Now');

  const forecasts: Record<TimeOffset, ForecastPoint> = {
    'Now': {
      time: 'Now',
      traffic: '68% Moderate',
      flood: '18% Low Risk',
      pollution: '42 AQI (Good)',
      parking: '1,420 spots free',
      weather: '22°C Clear',
      emergencyDemand: 'Low (3 Active)',
      summary: 'City operates normally. Sector 7 crash being handled by Ambulance #4.'
    },
    '30m': {
      time: '30m',
      traffic: '74% Increasing',
      flood: '22% Low Risk',
      pollution: '45 AQI (Good)',
      parking: '1,180 spots free',
      weather: '21°C Partially Cloudy',
      emergencyDemand: 'Low (2 Active)',
      summary: 'Peak evening traffic starting. Adaptive signals engaging.'
    },
    '1h': {
      time: '1h',
      traffic: '84% Heavy Rush',
      flood: '28% Low Risk',
      pollution: '52 AQI (Moderate)',
      parking: '820 spots free',
      weather: '20°C Light Rain',
      emergencyDemand: 'Moderate (4 Active)',
      summary: 'Peak hour congestion at Toll Plaza. Rerouting recommended.'
    },
    '3h': {
      time: '3h',
      traffic: '58% Easing',
      flood: '35% Moderate',
      pollution: '48 AQI (Good)',
      parking: '1,640 spots free',
      weather: '19°C Moderate Rain',
      emergencyDemand: 'Low (2 Active)',
      summary: 'Rush hour subsiding. River basin sensor watching rainfall.'
    },
    '6h': {
      time: '6h',
      traffic: '24% Low Flow',
      flood: '42% Moderate',
      pollution: '38 AQI (Optimal)',
      parking: '2,200 spots free',
      weather: '18°C Heavy Rain',
      emergencyDemand: 'Low (1 Active)',
      summary: 'Night time low traffic. Pump station #2 automated on standby.'
    },
    '12h': {
      time: '12h',
      traffic: '35% Morning Rise',
      flood: '20% Low Risk',
      pollution: '36 AQI (Optimal)',
      parking: '1,950 spots free',
      weather: '19°C Clear Dawn',
      emergencyDemand: 'Low (2 Active)',
      summary: 'Dawn traffic beginning. Water levels subsided.'
    },
    '24h': {
      time: '24h',
      traffic: '65% Normal',
      flood: '15% Low Risk',
      pollution: '40 AQI (Good)',
      parking: '1,500 spots free',
      weather: '23°C Sunny',
      emergencyDemand: 'Normal',
      summary: 'Full 24-hour cycle completed. All systems optimal.'
    }
  };

  const currentForecast = forecasts[selectedTime];
  const timeSteps: TimeOffset[] = ['Now', '30m', '1h', '3h', '6h', '12h', '24h'];

  return (
    <GlassCard className="p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
            PREDICTIVE FUTURE TIMELINE (CITY STATE FORECAST) <Clock className="w-5 h-5 text-cyan-400" />
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Multi-System Time Horizon Predictive Engine • Simulates City State from Now to +24 Hours
          </p>
        </div>
      </div>

      {/* Interactive Time Slider / Buttons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>SELECT TIME HORIZON FORECAST:</span>
          <span className="text-cyan-400 font-bold">TIMELINE STEP: +{selectedTime}</span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {timeSteps.map((step) => (
            <button
              key={step}
              onClick={() => setSelectedTime(step)}
              className={`py-2.5 px-2 rounded-xl text-xs font-mono font-bold transition-all text-center border ${
                selectedTime === step
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              +{step}
            </button>
          ))}
        </div>
      </div>

      {/* Multi-System Forecast Matrix Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Car className="w-3.5 h-3.5 text-amber-400" /> Traffic Flow
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.traffic}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <CloudRain className="w-3.5 h-3.5 text-blue-400" /> Flood Risk
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.flood}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Wind className="w-3.5 h-3.5 text-emerald-400" /> Pollution (AQI)
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.pollution}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Square className="w-3.5 h-3.5 text-cyan-400" /> Parking Spots
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.parking}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <CloudSun className="w-3.5 h-3.5 text-amber-300" /> Weather
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.weather}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> Emergency Load
          </div>
          <div className="text-sm font-bold text-white mt-1">{currentForecast.emergencyDemand}</div>
        </div>
      </div>

      {/* Forecast Executive Summary */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans flex items-center justify-between">
        <div>
          <span className="text-cyan-400 font-mono font-bold block mb-0.5">FORECAST SUMMARY FOR +{selectedTime}:</span>
          <p>{currentForecast.summary}</p>
        </div>
      </div>

    </GlassCard>
  );
};
