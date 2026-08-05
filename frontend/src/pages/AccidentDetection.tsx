import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_VISION_SAMPLES, VisionSample } from '../data/mockData';
import { Camera, AlertTriangle, Upload, Eye, CheckCircle2, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export const AccidentDetection: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<VisionSample>(MOCK_VISION_SAMPLES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleSelectSample = (sample: VisionSample) => {
    setIsAnalyzing(true);
    setCustomImage(null);
    setTimeout(() => {
      setSelectedSample(sample);
      setIsAnalyzing(false);
    }, 600);
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
            COMPUTER VISION ACCIDENT DETECTION <Camera className="w-5 h-5 text-cyan-400" />
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            YOLOv11 Deep Neural Net • Frame Analysis • Crash Severity Scoring • Emergency Alert Generator
          </p>
        </div>
        <label className="cursor-pointer px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-2">
          <Upload className="w-4 h-4" /> UPLOAD IMAGE FOR VISION SCAN
          <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
        </label>
      </div>

      {/* Main Vision Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Image Viewer + Bounding Box Canvas Overlay */}
        <GlassCard className="lg:col-span-2 p-5 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              VISION ANALYSIS CANVAS <Eye className="w-4 h-4 text-cyan-400" />
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
              FRAME RESOLUTION: 1920x1080 (HD)
            </span>
          </div>

          {/* Image & Bounding Box Box */}
          <div className="relative w-full h-[380px] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center group">
            
            {/* Image */}
            <img
              src={customImage || selectedSample.imageUrl}
              alt="Vision scan frame"
              className={`w-full h-full object-cover transition-all duration-300 ${isAnalyzing ? 'blur-sm brightness-50' : ''}`}
            />

            {/* Scanning Line Animation */}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan"></div>
            )}

            {/* Bounding Box Visual Overlays */}
            {!isAnalyzing && !customImage && selectedSample.detections.map((det, idx) => (
              <div
                key={idx}
                style={{
                  top: `${det.bbox[0]}%`,
                  left: `${det.bbox[1]}%`,
                  width: `${det.bbox[2]}%`,
                  height: `${det.bbox[3]}%`
                }}
                className="absolute border-2 border-rose-500 bg-rose-500/10 rounded shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all"
              >
                <span className="absolute -top-6 left-0 px-2 py-0.5 bg-rose-600 text-white font-mono text-[10px] font-bold rounded shadow-md whitespace-nowrap">
                  {det.label} ({Math.round(det.confidence * 100)}%)
                </span>
              </div>
            ))}

            {/* Bottom Telemetry Overlay */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">STATUS: {isAnalyzing ? 'NEURAL SCAN IN PROGRESS...' : 'ANALYSIS COMPLETE'}</span>
              <span className="text-cyan-400">MODEL INFERENCE: 18ms</span>
            </div>

          </div>

          {/* Preset Image Selector Bar */}
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Select Sample City Surveillance Feeds:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MOCK_VISION_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`p-2 rounded-xl text-xs font-mono border text-left transition-all ${
                    selectedSample.id === sample.id && !customImage
                      ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-semibold block truncate">{sample.name}</span>
                  <span className="text-[10px] opacity-70 block">{sample.category}</span>
                </button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Right Col: AI Detection Results & Recommendations */}
        <div className="space-y-6">
          <GlassCard className="p-5 space-y-4">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              AI INSPECTION DIAGNOSTIC <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>

            {/* Severity Rating */}
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-rose-300 uppercase">IMPACT SEVERITY</span>
                <div className="text-xl font-bold text-rose-400 font-heading">
                  {selectedSample.severity.toUpperCase()} IMPACT
                </div>
              </div>
              <AlertTriangle className="w-8 h-8 text-rose-400 animate-pulse" />
            </div>

            {/* Detected Objects List */}
            <div>
              <span className="text-xs font-mono text-slate-300 uppercase block mb-2">Objects Detected in Frame</span>
              <div className="space-y-2">
                {selectedSample.detections.map((det, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">{det.label}</span>
                    <span className="text-cyan-400">{(det.confidence * 100).toFixed(1)}% Conf</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div>
              <span className="text-xs font-mono text-slate-300 uppercase block mb-1">AI Agent Summary</span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans p-3 rounded-xl bg-slate-950 border border-slate-800">
                {selectedSample.explanation}
              </p>
            </div>

            {/* Immediate Action Button */}
            <button className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono transition-colors shadow-lg flex items-center justify-center gap-2">
              <ShieldAlert className="w-4 h-4" /> DISPATCH EMERGENCY TEAM
            </button>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
