export interface CityMetric {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
  status: 'optimal' | 'warning' | 'critical';
}

export interface AgentStatus {
  id: string;
  name: string;
  type: 'traffic' | 'accident' | 'flood' | 'pollution' | 'parking' | 'emergency' | 'manager';
  status: 'active' | 'analyzing' | 'idle' | 'alert';
  lastAction: string;
  timestamp: string;
  confidence: number;
}

export interface EmergencyAlert {
  id: string;
  title: string;
  location: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  time: string;
  agent: string;
  description: string;
  status: 'active' | 'dispatching' | 'resolved';
}

export interface MapMarkerData {
  id: string;
  type: 'hospital' | 'police' | 'fire' | 'accident' | 'traffic_jam' | 'flood_zone' | 'parking' | 'drone' | 'emergency_vehicle';
  title: string;
  lat: number;
  lng: number;
  status: string;
  details: string;
}

export interface VisionSample {
  id: string;
  name: string;
  category: 'Accident' | 'Traffic' | 'Drone' | 'Flood' | 'Damage';
  imageUrl: string;
  detections: { label: string; confidence: number; bbox: [number, number, number, number] }[];
  severity: 'Low' | 'Medium' | 'Critical';
  explanation: string;
}

export const MOCK_CITY_METRICS: CityMetric[] = [
  { title: "Avg Traffic Index", value: "68%", change: "+4% peak", trend: "up", icon: "Car", status: "warning" },
  { title: "City Air Quality (AQI)", value: "42 AQI", change: "Good", trend: "down", icon: "Wind", status: "optimal" },
  { title: "Flood Risk Index", value: "18%", change: "Low Risk", trend: "neutral", icon: "CloudRain", status: "optimal" },
  { title: "Parking Occupancy", value: "81%", change: "1,420 spots left", trend: "up", icon: "SquareP", status: "warning" },
  { title: "Active AI Agents", value: "7 / 7", change: "100% Operational", trend: "neutral", icon: "Cpu", status: "optimal" },
  { title: "Active Emergencies", value: "3", change: "2 Dispatched", trend: "up", icon: "AlertTriangle", status: "critical" },
];

export const MOCK_AGENTS: AgentStatus[] = [
  { id: "ag-1", name: "Traffic Agent", type: "traffic", status: "active", lastAction: "Adjusted Sector 4 green light duration by +15s", timestamp: "1 min ago", confidence: 0.94 },
  { id: "ag-2", name: "Accident Agent", type: "accident", status: "analyzing", lastAction: "Detected minor collision on Highway 101, frame #482", timestamp: "30s ago", confidence: 0.98 },
  { id: "ag-3", name: "Flood Risk Agent", type: "flood", status: "active", lastAction: "River Basin sensor telemetry normal (0.8m level)", timestamp: "4 mins ago", confidence: 0.91 },
  { id: "ag-4", name: "Pollution Agent", type: "pollution", status: "active", lastAction: "Industrial zone PM2.5 within safe limit (28 µg/m³)", timestamp: "2 mins ago", confidence: 0.96 },
  { id: "ag-5", name: "Parking Agent", type: "parking", status: "active", lastAction: "Rerouted 12 vehicles to Metro Plaza Garage", timestamp: "15s ago", confidence: 0.89 },
  { id: "ag-6", name: "Emergency Dispatch Agent", type: "emergency", status: "alert", lastAction: "Assigned Ambulance #4 to Sector 7 crash site", timestamp: "45s ago", confidence: 0.99 },
  { id: "ag-7", name: "City Manager Orchestrator", type: "manager", status: "active", lastAction: "Synthesized multi-agent consensus priority score: 8.7", timestamp: "Just now", confidence: 0.97 },
];

export const MOCK_EMERGENCY_ALERTS: EmergencyAlert[] = [
  {
    id: "alt-101",
    title: "Vehicle Crash - Sector 7 Intersect",
    location: "Main St & 5th Ave (Lat 37.7749, Lng -122.4194)",
    severity: "critical",
    time: "2 mins ago",
    agent: "Accident Agent + Emergency Agent",
    description: "2-vehicle impact detected via camera feed #14. Ambulance #4 dispatched with traffic light green wave.",
    status: "dispatching"
  },
  {
    id: "alt-102",
    title: "High Traffic Congestion Bottleneck",
    location: "Bay Bridge Toll Plaza Eastbound",
    severity: "medium",
    time: "8 mins ago",
    agent: "Traffic Agent",
    description: "Vehicle density reached 92%. Dynamic signal re-timing engaged.",
    status: "active"
  },
  {
    id: "alt-103",
    title: "Localized Urban Water Logging Alert",
    location: "Underpass Sector 2",
    severity: "low",
    time: "15 mins ago",
    agent: "Flood Agent",
    description: "Water sensor level at 0.45m. Drainage pumps automated.",
    status: "active"
  }
];

export const MOCK_MAP_MARKERS: MapMarkerData[] = [
  { id: "m-1", type: "hospital", title: "Central General Hospital", lat: 37.7749, lng: -122.4194, status: "Operational (42 ICU beds open)", details: "Primary Trauma Center - Emergency clearance route active." },
  { id: "m-2", type: "police", title: "Metro Police Precinct 4", lat: 37.7833, lng: -122.4167, status: "Active (14 Patrol Units)", details: "Rapid dispatch center for Sector 4 & 5." },
  { id: "m-3", type: "fire", title: "Fire Station #12", lat: 37.7650, lng: -122.4220, status: "Standby (3 Engines Ready)", details: "Heavy rescue crew available." },
  { id: "m-4", type: "accident", title: "Collision Zone (Sector 7)", lat: 37.7710, lng: -122.4100, status: "CRITICAL", details: "Computer vision severity 8.5/10. Dispatching emergency unit." },
  { id: "m-5", type: "traffic_jam", title: "Highway 101 Congestion", lat: 37.7580, lng: -122.4050, status: "Slow Traffic (18 km/h)", details: "Signal override initiated by Traffic Agent." },
  { id: "m-6", type: "parking", title: "Downtown Metro Garage", lat: 37.7800, lng: -122.4080, status: "142 Spots Available", details: "Rate: $4.50/hr. Smart EV charging stations online." },
  { id: "m-7", type: "flood_zone", title: "Lower Basin Drainage Zone", lat: 37.7500, lng: -122.4300, status: "Low Flood Risk", details: "Water telemetry sensor #9: 0.32m" },
  { id: "m-8", type: "drone", title: "Surveillance Drone AI-Alpha", lat: 37.7680, lng: -122.4150, status: "Patrolling Altitude 120m", details: "Thermal vision & crowd density scanner active." },
  { id: "m-9", type: "emergency_vehicle", title: "Ambulance #4 (En Route)", lat: 37.7730, lng: -122.4150, status: "Priority 1 Siren Active", details: "Heading to Sector 7. Next light force green in 12s." }
];

export const MOCK_VISION_SAMPLES: VisionSample[] = [
  {
    id: "vs-1",
    name: "Highway Crash Detection",
    category: "Accident",
    imageUrl: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&w=800&q=80",
    detections: [
      { label: "Damaged Sedan", confidence: 0.96, bbox: [20, 30, 45, 60] },
      { label: "SUV Impact", confidence: 0.92, bbox: [50, 35, 75, 65] }
    ],
    severity: "Critical",
    explanation: "AI Vision model detected severe front-end impact between 2 vehicles. Structural vehicle collapse confidence 94%. Immediate EMS deployment recommended."
  },
  {
    id: "vs-2",
    name: "Intersection Congestion Gridlock",
    category: "Traffic",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    detections: [
      { label: "Vehicles Queue (38 Cars)", confidence: 0.98, bbox: [10, 20, 90, 80] },
      { label: "Blocked Crosswalk", confidence: 0.89, bbox: [40, 60, 80, 90] }
    ],
    severity: "Medium",
    explanation: "Gridlock formed due to mis-timed north-bound light. Recommended extending green signal phase by 22 seconds."
  },
  {
    id: "vs-3",
    name: "Urban Underpass Water Accumulation",
    category: "Flood",
    imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80",
    detections: [
      { label: "Standing Water Depth 0.4m", confidence: 0.91, bbox: [15, 50, 85, 95] }
    ],
    severity: "Medium",
    explanation: "Underpass road submerged. Water level exceeds light vehicle clearance. Automated barrier activation triggered."
  },
  {
    id: "vs-4",
    name: "Drone Thermal Surveillance Feed",
    category: "Drone",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    detections: [
      { label: "Thermal Hotspot", confidence: 0.93, bbox: [30, 20, 60, 50] },
      { label: "Crowd Gathering", confidence: 0.88, bbox: [65, 40, 85, 70] }
    ],
    severity: "Low",
    explanation: "Aerial thermal drone scan normal. High pedestrian density outside stadium. Transit frequency increased."
  }
];
