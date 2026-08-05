# 🏙️ AI Smart City Digital Twin 2.0

> Production-quality, AI-powered web application that simulates and monitors an entire smart city using multi-agent AI framework, computer vision, voice AI, digital twin maps, predictive analytics, and emergency automation.

---

## 🚀 Key Features & Modules

1. **🔐 Account Login**: Role-based access (City Command Admin, Emergency Dispatcher, Citizen).
2. **📊 Master Dashboard**: Live KPIs, real-time incident alert marquee, active AI agents status feed, quick action suite.
3. **🗺️ Digital Twin Interactive Map**: Spatial 3D/2D layered GIS grid displaying Roads, Buildings, Emergency Vehicles, Hospitals, Police/Fire stations, Parking Lots, Flood Risk Heatmaps, and Drone Trajectories.
4. **🚗 Traffic Monitoring Agent**: Congestion detection, peak hour predictor, dynamic green light signal timing override simulator.
5. **📸 Accident Detection & Vision AI**: Frame analyzer for accident/traffic footage with bounding box detections, severity score, and emergency alert generation.
6. **🌊 Flood Risk Prediction Agent**: Hydro-telemetry sensors, river water depth monitoring, automated pump station controls, evacuation router.
7. **💨 Pollution & AQI Agent**: Environmental AQI, PM2.5, PM10, Ozone telemetry, eco-zone mitigation rules.
8. **🅿️ Parking Prediction Agent**: Smart garage occupancy, available spot counter, EV charging station status, reservation simulator.
9. **🚑 Emergency Response Center**: One-Touch SOS broadcast, nearest Trauma Center locator, signal wave preemption dispatch.
10. **🎙️ Voice Assistant**: Speech-to-text recognition, audio visualizer wave, voice emergency commands, text-to-speech audio synthesis.
11. **🤖 AI City Chatbot**: City-wide copilot answering queries on traffic, weather, flood risks, parking, and emergency protocols.
12. **🛸 Drone Surveillance**: Autonomous UAV flight feed simulator, road damage inspection, thermal crowd density scan.
13. **🧠 AI City Manager & Orchestrator**: Multi-agent consensus scoring, priority queue management, parallel task execution.
14. **📈 Analytics & Reports**: Historical trend charts for congestion, AQI, response times, system health.
15. **🔔 Alerts & Notifications**: Categorized emergency notifications feed with acknowledgement features.
16. **⚙️ System Settings**: API key management, database mode options, refresh interval configuration.

---

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Lucide Icons + Leaflet GIS + Canvas
- **Backend**: Python FastAPI + Pydantic + Uvicorn
- **AI Core**: Multi-Agent LangGraph Architecture, Computer Vision Frame Analyzer, Web Speech Audio AI

---

## 📦 Setup & Local Running Instructions

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
The frontend web application will start at `http://localhost:3000`.

### 2. Backend Setup

```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python app/main.py
```
The FastAPI backend service will start at `http://localhost:8000`.
