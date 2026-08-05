import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_MAP_MARKERS, MapMarkerData } from '../data/mockData';
import { 
  Map as MapIcon, 
  Layers, 
  Building2, 
  Shield, 
  Flame, 
  AlertTriangle, 
  Car, 
  Square, 
  CloudRain, 
  Plane, 
  Ambulance, 
  Check,
  Eye,
  Zap,
  Navigation
} from 'lucide-react';

export const DigitalTwinMap: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState<{ [key: string]: boolean }>({
    hospitals: true,
    emergency_units: true,
    accidents: true,
    traffic: true,
    parking: true,
    flood: true,
    drones: true
  });

  const [selectedMarker, setSelectedMarker] = useState<MapMarkerData | null>(MOCK_MAP_MARKERS[3]);
  const [mapZoom, setMapZoom] = useState(14);

  const toggleLayer = (layerKey: string) => {
    setActiveLayers((prev) => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  const getMarkerIcon = (type: MapMarkerData['type']) => {
    switch (type) {
      case 'hospital': return { icon: Building2, color: 'text-rose-400', bg: 'bg-rose-950/80 border-rose-500/40' };
      case 'police': return { icon: Shield, color: 'text-blue-400', bg: 'bg-blue-950/80 border-blue-500/40' };
      case 'fire': return { icon: Flame, color: 'text-amber-400', bg: 'bg-amber-950/80 border-amber-500/40' };
      case 'accident': return { icon: AlertTriangle, color: 'text-rose-400 animate-pulse', bg: 'bg-rose-600/40 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)]' };
      case 'traffic_jam': return { icon: Car, color: 'text-amber-400', bg: 'bg-amber-950/80 border-amber-500/40' };
      case 'parking': return { icon: Square, color: 'text-cyan-400', bg: 'bg-cyan-950/80 border-cyan-500/40' };
      case 'flood_zone': return { icon: CloudRain, color: 'text-blue-400', bg: 'bg-blue-950/80 border-blue-500/40' };
      case 'drone': return { icon: Plane, color: 'text-purple-400 animate-pulse', bg: 'bg-purple-950/80 border-purple-500/40' };
      case 'emergency_vehicle': return { icon: Ambulance, color: 'text-emerald-400 animate-bounce', bg: 'bg-emerald-950/80 border-emerald-500/40' };
      default: return { icon: MapIcon, color: 'text-slate-400', bg: 'bg-slate-900 border-slate-800' };
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            DIGITAL TWIN 3D/2D INTERACTIVE MAP <MapIcon className="w-5 h-5 text-cyan-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Spatial City Telemetry • Multi-Layer GIS Grid • Autonomous Vehicle Navigation Track
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> GIS SYNC: ACTIVE (60Hz)
          </span>
        </div>
      </div>

      {/* Map Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left: Layer Controller Bar */}
        <GlassCard className="p-4 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" /> GIS LAYER FILTERS
          </h3>

          <div className="space-y-2">
            {[
              { id: 'hospitals', label: 'Hospitals & Trauma Centers', icon: Building2, color: 'text-rose-400' },
              { id: 'emergency_units', label: 'Ambulance & Fire Vehicles', icon: Ambulance, color: 'text-emerald-400' },
              { id: 'accidents', label: 'Vision AI Accident Alerts', icon: AlertTriangle, color: 'text-rose-400' },
              { id: 'traffic', label: 'Traffic Signal & Jams', icon: Car, color: 'text-amber-400' },
              { id: 'parking', label: 'Smart Parking Garages', icon: Square, color: 'text-cyan-400' },
              { id: 'flood', label: 'Flood Risk Telemetry', icon: CloudRain, color: 'text-blue-400' },
              { id: 'drones', label: 'Surveillance Drones', icon: Plane, color: 'text-purple-400' },
            ].map((layer) => {
              const Icon = layer.icon;
              const isChecked = activeLayers[layer.id];
              return (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium border transition-all ${
                    isChecked
                      ? 'bg-slate-900 border-cyan-500/40 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${layer.color}`} />
                    <span>{layer.label}</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                    isChecked ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800'
                  }`}>
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Controls */}
          <div className="pt-4 border-t border-slate-800 space-y-2 text-xs font-mono">
            <div className="text-slate-400">CAMERA ALTITUDE: 850m</div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Zoom Level: {mapZoom}x</span>
              <div className="flex gap-1">
                <button onClick={() => setMapZoom((z) => Math.min(z + 1, 18))} className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700">+</button>
                <button onClick={() => setMapZoom((z) => Math.max(z - 1, 10))} className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700">-</button>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Center: Interactive Map Container */}
        <div className="lg:col-span-3 space-y-4">
          <GlassCard className="p-2 min-h-[540px] relative flex flex-col justify-between overflow-hidden">
            
            {/* Interactive Simulated Map Surface */}
            <div className="w-full h-full min-h-[500px] rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden flex items-center justify-center">
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
              
              {/* Simulated Map Road Networks */}
              <svg className="absolute inset-0 w-full h-full opacity-40 stroke-cyan-500/30 fill-none stroke-[2]" viewBox="0 0 1000 600">
                <path d="M 100 100 Q 300 200 500 100 T 900 300" strokeWidth="4" className="stroke-amber-500/50" />
                <path d="M 200 500 L 200 100 L 800 100 L 800 500 Z" strokeWidth="2" />
                <path d="M 500 50 L 500 550" strokeWidth="6" className="stroke-cyan-400/40" />
                <circle cx="500" cy="300" r="80" strokeWidth="2" className="stroke-rose-500/40" />
              </svg>

              {/* Render Map Markers */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full max-w-4xl max-h-[460px]">
                  {MOCK_MAP_MARKERS.map((marker, idx) => {
                    const iconInfo = getMarkerIcon(marker.type);
                    const IconComp = iconInfo.icon;

                    // Compute mock spatial positions
                    const positions = [
                      { top: '30%', left: '45%' }, // Hospital
                      { top: '20%', left: '70%' }, // Police
                      { top: '65%', left: '25%' }, // Fire
                      { top: '48%', left: '48%' }, // Accident
                      { top: '40%', left: '80%' }, // Traffic
                      { top: '25%', left: '35%' }, // Parking
                      { top: '75%', left: '60%' }, // Flood
                      { top: '35%', left: '60%' }, // Drone
                      { top: '52%', left: '40%' }, // Ambulance
                    ];

                    const pos = positions[idx % positions.length];

                    return (
                      <div
                        key={marker.id}
                        onClick={() => setSelectedMarker(marker)}
                        style={{ top: pos.top, left: pos.left }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                      >
                        <div className={`p-2.5 rounded-2xl border transition-all duration-300 group-hover:scale-125 ${iconInfo.bg}`}>
                          <IconComp className={`w-5 h-5 ${iconInfo.color}`} />
                        </div>
                        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-slate-800 text-white text-[10px] font-mono px-2 py-1 rounded shadow-xl whitespace-nowrap z-30">
                          {marker.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Spatial Info Overlay Box */}
              {selectedMarker && (
                <div className="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-2xl glass-panel border border-cyan-500/40 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                      <Navigation className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        SELECTED OBJECT: {selectedMarker.type.toUpperCase()}
                      </span>
                      <h4 className="text-sm font-bold text-white font-heading mt-1">{selectedMarker.title}</h4>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">{selectedMarker.details}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
                      {selectedMarker.status}
                    </span>
                  </div>
                </div>
              )}

            </div>

          </GlassCard>
        </div>

      </div>

    </div>
  );
};
