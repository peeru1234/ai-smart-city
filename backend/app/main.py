from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import time

app = FastAPI(
    title="AI Smart City Digital Twin 2.0 Backend",
    description="Multi-Agent Orchestration & Telemetry API",
    version="2.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "system": "AI Smart City Digital Twin 2.0",
        "timestamp": time.time(),
        "active_agents": 7
    }

# Mock Endpoints for Multi-Module API
@app.get("/api/traffic")
def get_traffic_status():
    return {
        "congestion_index": 0.68,
        "avg_commute_time_minutes": 18.4,
        "active_signals": 142,
        "recommendation": "Extend Sector 4 green light phase by +15 seconds"
    }

@app.get("/api/accidents")
def get_accidents():
    return {
        "active_incidents": [
            {
                "id": "alt-101",
                "location": "Sector 7 Main St Intersect",
                "severity": "CRITICAL",
                "units_dispatched": ["Ambulance #4", "Fire Engine #12"]
            }
        ]
    }

@app.get("/api/flood")
def get_flood_status():
    return {
        "overall_risk": "18% LOW",
        "river_water_level_m": 0.82,
        "pump_stations_active": 12
    }

@app.get("/api/pollution")
def get_pollution_status():
    return {
        "aqi": 42,
        "pm25": 18,
        "pm10": 34,
        "status": "GOOD"
    }

@app.get("/api/parking")
def get_parking_status():
    return {
        "available_spots": 1420,
        "occupancy_rate": 0.81,
        "nearest_garage": "Downtown Metro Plaza (142 open)"
    }

@app.get("/api/agents")
def get_agents_status():
    return {
        "agents": [
            {"name": "Traffic Agent", "status": "active", "confidence": 0.94},
            {"name": "Accident Agent", "status": "analyzing", "confidence": 0.98},
            {"name": "Flood Agent", "status": "active", "confidence": 0.91},
            {"name": "Pollution Agent", "status": "active", "confidence": 0.96},
            {"name": "Parking Agent", "status": "active", "confidence": 0.89},
            {"name": "Emergency Agent", "status": "alert", "confidence": 0.99},
            {"name": "City Manager Agent", "status": "active", "confidence": 0.97}
        ]
    }

class VisionRequest(BaseModel):
    image_url: Optional[str] = None

@app.post("/api/vision/analyze")
def analyze_vision(req: VisionRequest):
    return {
        "detected_objects": [
            {"label": "Damaged Vehicle Impact", "confidence": 0.96, "bbox": [20, 30, 45, 60]}
        ],
        "severity": "Critical",
        "explanation": "Front-end impact detected between 2 vehicles. Structural damage present. Automated emergency preemption triggered."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
