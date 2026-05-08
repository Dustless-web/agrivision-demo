import React, { useState, useEffect } from 'react';

// Mock Data
const farmData = {
  alpha: {
    id: 1, name: 'Plot Alpha', crop: 'Wheat', status: 'Healthy', swi: 0.6,
    ndviTrend: [60, 65, 70, 72], color: 'text-green-400', glow: 'shadow-green-500/20',
    polygon: '20,80 40,20 80,40 60,90', // SVG polygon coordinates
    aiDiagnosis: { active: false, message: 'Crop health optimal. No action required.' }
  },
  beta: {
    id: 2, name: 'Plot Beta', crop: 'Maize', status: 'Drought Stress', swi: 0.15,
    ndviTrend: [80, 75, 60, 45], color: 'text-yellow-400', glow: 'shadow-yellow-500/20',
    polygon: '10,50 50,10 90,50 50,90',
    aiDiagnosis: {
      active: true, disease: 'Fall Armyworm', confidence: '88%', severity: 'Moderate',
      remedies: ['Apply Neem oil spray at dusk', 'Handpick egg masses from lower leaves', 'Intercrop with Desmodium']
    }
  },
  gamma: {
    id: 3, name: 'Plot Gamma', crop: 'Tomato', status: 'Disease Alert', swi: 0.75,
    ndviTrend: [70, 68, 50, 40], color: 'text-red-500', glow: 'shadow-red-500/20',
    polygon: '30,30 80,20 70,80 20,70',
    aiDiagnosis: {
      active: true, disease: 'Early Blight', confidence: '92%', severity: 'Severe',
      remedies: ['Apply organic copper-based fungicide', 'Prune infected lower leaves', 'Improve air circulation']
    }
  }
};

export default function AgriVisionDashboard() {
  const [activePlot, setActivePlot] = useState('alpha');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const data = farmData[activePlot];

  // Simulate AI inference time when switching plots
  useEffect(() => {
    setIsAnalyzing(true);
    const timer = setTimeout(() => setIsAnalyzing(false), 1200);
    return () => clearTimeout(timer);
  }, [activePlot]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8 font-sans selection:bg-green-500/30">
      
      {/* Header section */}
      <header className="mb-8 flex justify-between items-end border-b border-gray-800/60 pb-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="flex items-center space-x-2 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-wider text-green-400 font-semibold">Live Feed</span>
            </div>
            <span className="text-xs text-gray-500 tracking-widest uppercase">Sentinel-2 Sync Active</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white">AgriVision<span className="text-green-500">.</span></h1>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-[#111] p-1 rounded-lg border border-gray-800">
          {Object.keys(farmData).map((key) => (
            <button
              key={key}
              onClick={() => setActivePlot(key)}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                activePlot === key ? 'bg-gray-800 text-white shadow-md' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {farmData[key].name}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left Column: Farm Metrics & Spatial Map */}
        <div className="xl:col-span-1 space-y-6">
          
          {/* Spatial Visualizer */}
          <div className={`bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-2xl transition-all duration-700 ${data.glow}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xs uppercase tracking-widest text-gray-500">Spatial Geofence</h2>
              <span className="text-xs text-gray-600 font-mono">SRID:4326</span>
            </div>
            
            <div className="relative w-full h-48 bg-gray-950 rounded-xl border border-gray-800/50 overflow-hidden flex items-center justify-center">
              {/* Radar Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              {/* Glowing SVG Polygon */}
              <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <polygon 
                  points={data.polygon} 
                  className={`fill-current opacity-20 stroke-[1.5] transition-all duration-1000 ${data.color}`} 
                  stroke="currentColor" 
                />
              </svg>
              
              {/* Scanning Laser Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500/50 shadow-[0_0_10px_#22c55e] animate-[scan_3s_ease-in-out_infinite]"></div>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Telemetry Data</h2>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Crop Assignment</span>
                <span className="font-semibold text-gray-200">{data.crop}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Current Status</span>
                <span className={`font-bold ${data.color}`}>{data.status}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Soil Water Index (SWI)</span>
                <span className={`font-mono text-lg ${data.swi < 0.2 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {data.swi.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI & Trends */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* NDVI Trend Visualizer */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xs uppercase tracking-widest text-gray-500">5-Day Spectral Trend (NDVI)</h2>
              <span className="text-xs text-gray-600">Powered by Sentinel-2</span>
            </div>
            
            <div className="flex items-end h-40 space-x-3">
              {data.ndviTrend.map((value, idx) => {
                const barBg = data.swi < 0.2 ? 'bg-yellow-400' : data.status === 'Disease Alert' ? 'bg-red-500' : 'bg-green-500';
                return (
                  <div key={idx} className="flex-1 flex flex-col justify-end h-full group">
                    <div className="text-center mb-2 text-xs text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      {(value / 100).toFixed(2)}
                    </div>
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-700 ease-out ${idx === 3 ? barBg : 'bg-gray-800 group-hover:bg-gray-700'}`}
                      style={{ height: `${value}%` }}
                    ></div>
                    <div className="text-center mt-3 text-[10px] uppercase tracking-wider text-gray-600">Day {idx * 5}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Diagnosis Card */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 min-h-[250px]">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6 flex items-center">
              Gemini Vision Diagnostics
              {isAnalyzing && <span className="ml-3 text-[10px] text-blue-400 animate-pulse">Processing Image...</span>}
            </h2>
            
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center h-40 space-y-4">
                <div className="w-8 h-8 border-2 border-gray-800 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-sm text-gray-500 font-mono">Running inference model...</p>
              </div>
            ) : !data.aiDiagnosis.active ? (
              <div className="flex items-center space-x-4 text-green-400 p-5 bg-green-500/5 rounded-xl border border-green-500/10">
                <div className="p-2 bg-green-500/10 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="font-semibold text-green-300">Clear</p>
                  <p className="text-sm text-green-500/70">{data.aiDiagnosis.message}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Detected Target</p>
                    <p className="text-lg font-bold text-gray-100">{data.aiDiagnosis.disease}</p>
                  </div>
                  <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Confidence</p>
                    <p className="text-lg font-bold text-blue-400 font-mono">{data.aiDiagnosis.confidence}</p>
                  </div>
                  <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Severity</p>
                    <p className={`text-lg font-bold ${data.color}`}>{data.aiDiagnosis.severity}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    Actionable Remediation
                  </h3>
                  <div className="space-y-3">
                    {data.aiDiagnosis.remedies.map((remedy, idx) => (
                      <div key={idx} className="flex items-start bg-gray-900/30 p-3 rounded-lg border border-gray-800/30">
                        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-gray-800 text-gray-400 flex items-center justify-center text-xs font-mono mr-3">{idx + 1}</span>
                        <span className="text-sm text-gray-300 pt-0.5">{remedy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}