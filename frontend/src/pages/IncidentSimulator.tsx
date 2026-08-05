import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { 
  ShieldAlert, 
  Flame, 
  CloudRain, 
  Zap, 
  Radio, 
  Upload, 
  Mic, 
  Plane, 
  Building2, 
  Shield, 
  Navigation, 
  CheckCircle2, 
  RefreshCw, 
  Sparkles,
  Users,
  Clock,
  Activity,
  AlertTriangle,
  Car
} from 'lucide-react';

export type IncidentType = 
  | 'Road Accident'
  | 'Building Fire'
  | 'Flood'
  | 'Chemical Leak'
  | 'Earthquake'
  | 'Power Failure'
  | 'Gas Leakage'
  | 'Terror Threat'
  | 'Heavy Rain'
  | 'Landslide';

interface SimulationResult {
  incidentType: IncidentType;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  location: string;
  affectedPopulation: number;
  predictedSpreadRadiusKm: number;
  trafficImpactIncrease: string;
  responseTimeMinutes: number;
  confidenceScore: number;
  estimatedRecoveryHours: number;
  allocatedResources: { name: string; count: number }[];
  nearestHospitals: string[];
  nearestPoliceStations: string[];
  suggestedActions: string[];
  evacuationRoutes: string[];
}

export const IncidentSimulator: React.FC = () => {
  const [selectedIncident, setSelectedIncident] = useState<IncidentType>('Building Fire');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High' | 'Critical'>('Critical');
  const [location, setLocation] = useState('Sector 4 Commercial Plaza (Lat 37.778, Lng -122.415)');
  const [affectedPeople, setAffectedPeople] = useState(850);
  const [time, setTime] = useState('18:45 PM');
  const [weather, setWeather] = useState('Dry Wind (14 km/h)');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationOutput, setSimulationOutput] = useState<SimulationResult | null>(null);

  const incidentTypesList: { type: IncidentType; icon: React.ElementType; color: string }[] = [
    { type: 'Road Accident', icon: Car, color: 'text-amber-400' },
    { type: 'Building Fire', icon: Flame, color: 'text-rose-400' },
    { type: 'Flood', icon: CloudRain, color: 'text-blue-400' },
    { type: 'Chemical Leak', icon: ShieldAlert, color: 'text-purple-400' },
    { type: 'Earthquake', icon: Activity, color: 'text-amber-500' },
    { type: 'Power Failure', icon: Zap, color: 'text-yellow-400' },
    { type: 'Gas Leakage', icon: AlertTriangle, color: 'text-rose-300' },
    { type: 'Terror Threat', icon: Shield, color: 'text-rose-500' },
    { type: 'Heavy Rain', icon: CloudRain, color: 'text-cyan-400' },
    { type: 'Landslide', icon: Building2, color: 'text-amber-600' },
  ];

  const handleRunSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulationOutput({
        incidentType: selectedIncident,
        severity: severity,
        location: location,
        affectedPopulation: affectedPeople,
        predictedSpreadRadiusKm: severity === 'Critical' ? 1.8 : severity === 'High' ? 1.2 : 0.5,
        trafficImpactIncrease: severity === 'Critical' ? '+48% Congestion' : '+22% Congestion',
        responseTimeMinutes: 2.8,
        confidenceScore: 98.4,
        estimatedRecoveryHours: severity === 'Critical' ? 6 : 2,
        allocatedResources: [
          { name: 'Ambulance Units', count: 4 },
          { name: 'Fire Engine Trucks', count: 3 },
          { name: 'Police Patrol Cars', count: 6 },
          { name: 'Hazmat Response Van', count: 1 }
        ],
        nearestHospitals: ['Central General Hospital (1.2 km)', 'Trauma Medical Center #2 (2.4 km)'],
        nearestPoliceStations: ['Metro Police Precinct 4 (0.8 km)'],
        suggestedActions: [
          'Trigger Emergency Alert System to Sector 4 residents',
          'Deploy Green Traffic Light preemption corridor along 5th Ave',
          'Automate Hazmat/Fire barrier perimeter within 500m radius',
          'Reroute civilian traffic onto North Ridge Expressway'
        ],
        evacuationRoutes: [
          'Primary: Sector 4 Plaza -> 5th Ave -> Highland Overpass',
          'Secondary: Commercial Alley -> Bay Bridge Eastbound'
        ]
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
          AI INCIDENT SIMULATOR & EMERGENCY WORKFLOW ENGINE <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Interactive Crisis Simulation • Predictive Spread Model • Automated Resource Allocation & Map Updates
        </p>
      </div>

      {/* Main Grid: Form Inputs + Live Output */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Input Controller */}
        <GlassCard glow="cyan" className="p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            SIMULATION INPUT PARAMETERS <Sparkles className="w-4 h-4 text-cyan-400" />
          </h3>

          <form onSubmit={handleRunSimulation} className="space-y-4 text-xs font-mono">
            
            {/* 10 Incident Types Selector Grid */}
            <div>
              <label className="block text-slate-300 uppercase mb-1.5">Select Incident Category (10 Types)</label>
              <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {incidentTypesList.map((inc) => {
                  const IconComp = inc.icon;
                  const isSelected = selectedIncident === inc.type;
                  return (
                    <button
                      key={inc.type}
                      type="button"
                      onClick={() => setSelectedIncident(inc.type)}
                      className={`p-2 rounded-xl text-left border flex items-center gap-2 transition-all ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-500 text-white font-bold shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${inc.color}`} />
                      <span className="truncate">{inc.type}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Severity Toggle */}
            <div>
              <label className="block text-slate-300 uppercase mb-1.5">Severity Rating</label>
              <div className="grid grid-cols-4 gap-1">
                {(['Low', 'Medium', 'High', 'Critical'] as const).map((sev) => (
                  <button
                    key={sev}
                    type="button"
                    onClick={() => setSeverity(sev)}
                    className={`py-1.5 rounded-lg text-[10px] font-bold uppercase border transition-all ${
                      severity === sev
                        ? sev === 'Critical' ? 'bg-rose-600 text-white border-rose-500' : 'bg-cyan-500 text-black border-cyan-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {/* Affected Population */}
            <div>
              <label className="block text-slate-300 uppercase mb-1">Estimated Affected People: {affectedPeople}</label>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={affectedPeople}
                onChange={(e) => setAffectedPeople(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-slate-300 uppercase mb-1">Incident GIS Coordinates / Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2 text-white"
              />
            </div>

            {/* Optional Media Attachments */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <span className="text-[10px] text-slate-400 uppercase block">Optional Media Input:</span>
              <div className="grid grid-cols-3 gap-1 text-[10px]">
                <button type="button" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 flex items-center justify-center gap-1">
                  <Upload className="w-3 h-3" /> Image
                </button>
                <button type="button" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 flex items-center justify-center gap-1">
                  <Plane className="w-3 h-3 text-purple-400" /> Drone
                </button>
                <button type="button" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 flex items-center justify-center gap-1">
                  <Mic className="w-3 h-3 text-cyan-400" /> Voice
                </button>
              </div>
            </div>

            {/* Run Button */}
            <button
              type="submit"
              disabled={isSimulating}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider font-mono shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4"
            >
              {isSimulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
              {isSimulating ? 'EXECUTING AI SIMULATION...' : 'EXECUTE AI INCIDENT SIMULATION'}
            </button>

          </form>
        </GlassCard>

        {/* Right 2 Cols: Simulation Results & Actions Output */}
        <div className="lg:col-span-2 space-y-4">
          {simulationOutput ? (
            <GlassCard className="p-6 space-y-6 animate-fade-in border-rose-500/40">
              
              {/* Output Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    SIMULATION OUTCOME: {simulationOutput.severity.toUpperCase()} {simulationOutput.incidentType.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-1">{simulationOutput.location}</h3>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-slate-400 text-[10px] block">EST. RESPONSE ETA</span>
                    <span className="text-emerald-400 font-bold text-sm">{simulationOutput.responseTimeMinutes} mins</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-slate-400 text-[10px] block">AI CONFIDENCE</span>
                    <span className="text-cyan-400 font-bold text-sm">{simulationOutput.confidenceScore}%</span>
                  </div>
                </div>
              </div>

              {/* Stat Indicators Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">AFFECTED POPULATION</span>
                  <div className="text-base font-bold text-amber-400 mt-0.5">{simulationOutput.affectedPopulation} People</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">PREDICTED SPREAD</span>
                  <div className="text-base font-bold text-rose-400 mt-0.5">{simulationOutput.predictedSpreadRadiusKm} km Radius</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">TRAFFIC IMPACT</span>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">{simulationOutput.trafficImpactIncrease}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">RECOVERY TIME</span>
                  <div className="text-base font-bold text-white mt-0.5">{simulationOutput.estimatedRecoveryHours} Hours</div>
                </div>
              </div>

              {/* Resource Allocation & Stations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase">Allocated Emergency Fleet:</h4>
                  <div className="space-y-1 text-xs font-mono text-slate-300">
                    {simulationOutput.allocatedResources.map((res, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{res.name}</span>
                        <span className="text-cyan-300 font-bold">x{res.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-emerald-400 font-bold uppercase">Nearest Medical & Police:</h4>
                  <div className="space-y-1 text-xs font-mono text-slate-300">
                    {simulationOutput.nearestHospitals.map((hosp, idx) => (
                      <div key={idx} className="text-emerald-300">● {hosp}</div>
                    ))}
                    {simulationOutput.nearestPoliceStations.map((pol, idx) => (
                      <div key={idx} className="text-cyan-300">● {pol}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Automated Actions & Evacuation */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-slate-300 uppercase">AI Suggested Automated Actions & Evacuation</h4>
                <div className="space-y-1.5">
                  {simulationOutput.suggestedActions.map((act, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-sans text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

            </GlassCard>
          ) : (
            <GlassCard className="p-12 text-center flex flex-col items-center justify-center space-y-3 min-h-[450px]">
              <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <ShieldAlert className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">AI INCIDENT ENGINE READY</h3>
              <p className="text-xs text-slate-400 font-mono max-w-md">
                Select an incident category (Building Fire, Chemical Leak, Flood, Earthquake, etc.) and click "EXECUTE AI INCIDENT SIMULATION" to run real-time crisis workflow analysis.
              </p>
            </GlassCard>
          )}
        </div>

      </div>

    </div>
  );
};
