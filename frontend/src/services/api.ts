const API_BASE_URL = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:8000';

export async function fetchSystemStatus() {
  try {
    const res = await fetch(`${API_BASE_URL}/`);
    if (!res.ok) throw new Error('API request failed');
    return await res.json();
  } catch (err) {
    return { status: 'online (simulated)', system: 'AI Smart City Digital Twin 2.0' };
  }
}

export async function fetchTrafficData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/traffic`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { congestion_index: 0.68, avg_commute_time_minutes: 18.4, active_signals: 142 };
  }
}

export async function fetchAccidentsData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/accidents`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { active_incidents: [] };
  }
}

export async function fetchFloodData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/flood`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { overall_risk: '18% LOW', river_water_level_m: 0.82 };
  }
}

export async function fetchPollutionData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/pollution`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { aqi: 42, pm25: 18, pm10: 34 };
  }
}

export async function fetchParkingData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/parking`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { available_spots: 1420, occupancy_rate: 0.81 };
  }
}

export async function fetchAgentsData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/agents`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return { agents: [] };
  }
}

export async function analyzeVisionFrame(imageUrl?: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/vision/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image_url: imageUrl })
    });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    return {
      detected_objects: [{ label: 'Damaged Vehicle Impact', confidence: 0.96, bbox: [20, 30, 45, 60] }],
      severity: 'Critical',
      explanation: 'Front-end impact detected. Emergency response initiated.'
    };
  }
}
