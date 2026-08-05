import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Sparkles, HelpCircle, CheckCircle2, AlertTriangle, ShieldCheck, PieChart, ChevronRight } from 'lucide-react';

export interface XAIPrediction {
  id: string;
  title: string;
  predictionValue: string;
  confidence: number;
  factors: { name: string; weight: number; impact: 'high' | 'medium' | 'low' }[];
  recommendations: string[];
}

export const ExplainableAIPanel: React.FC = () => {
  const predictions: XAIPrediction[] = [
    {
      id: 'xai-1',
      title: 'Sector 2 Hydro Flood Risk Prediction',
      predictionValue: '82% High Risk',
      confidence: 96,
      factors: [
        { name: 'Rainfall intensity increased by +45% in 2h', weight: 45, impact: 'high' },
        { name: 'River basin depth reached 0.82m threshold', weight: 30, impact: 'high' },
        { name: 'Soil water saturation rating at 88%', weight: 15, impact: 'medium' },
        { name: 'Historical flood pattern match (2024 storm)', weight: 10, impact: 'low' }
      ],
      recommendations: [
        'Automate Underpass Barrier Closure at Sector 2',
        'Deploy Pump Station #4 at max capacity (1,200 L/min)',
        'Issue Push Notification to Sector 2 Residents'
      ]
    },
    {
      id: 'xai-2',
      title: 'Highway 101 Traffic Congestion Forecast',
      predictionValue: '92% Peak Congestion',
      confidence: 94,
      factors: [
        { name: 'Evening rush hour volume surge (+68% cars)', weight: 50, impact: 'high' },
        { name: 'Obstruction from Sector 7 minor crash', weight: 30, impact: 'high' },
        { name: 'Toll plaza lane closure #3', weight: 20, impact: 'medium' }
      ],
      recommendations: [
        'Extend green light signal duration by +22 seconds',
        'Reroute traffic onto 5th Ave express overpass',
        'Broadcast live navigation update via radio/app'
      ]
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = predictions[selectedIdx];

  return (
    <GlassCard className="p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
            EXPLAINABLE AI (XAI) DIAGNOSTIC PANEL <Sparkles className="w-5 h-5 text-cyan-400" />
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Transparent AI Model Interpretability • Contributing Factor Attribution • Confidence Scoring
          </p>
        </div>

        {/* Prediction Selector */}
        <div className="flex items-center gap-2">
          {predictions.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedIdx === idx
                  ? 'bg-cyan-500 text-black font-bold shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              PREDICTION #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Explanation Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Prediction Outcome Card */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">TARGET MODEL PREDICTION</span>
            <h4 className="text-sm font-bold text-white font-heading mt-1">{current.title}</h4>
            
            <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">OUTCOME MODEL FORECAST:</span>
              <div className="text-2xl font-extrabold text-cyan-300 font-heading mt-1">{current.predictionValue}</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center justify-between">
            <span>MODEL CONFIDENCE:</span>
            <span className="font-extrabold text-sm">{current.confidence}%</span>
          </div>
        </div>

        {/* Center: Contributing Factors Breakdown (Weights & Percentages) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
            <PieChart className="w-4 h-4 text-cyan-400" /> CONTRIBUTING FACTORS ATTRIBUTION (SHAP / LIME MODEL)
          </h4>

          <div className="space-y-3">
            {current.factors.map((factor, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-200 font-semibold">{factor.name}</span>
                  <span className="text-cyan-400 font-bold">{factor.weight}% IMPACT</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    style={{ width: `${factor.weight}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      factor.impact === 'high' ? 'bg-gradient-to-r from-cyan-500 to-emerald-400' : 'bg-cyan-500/60'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Recommendations Checklist */}
          <div className="pt-2">
            <span className="text-xs font-mono text-slate-300 uppercase block mb-2">RECOMMENDED MITIGATION STEPS</span>
            <div className="space-y-1.5">
              {current.recommendations.map((rec, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-sans text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </GlassCard>
  );
};
