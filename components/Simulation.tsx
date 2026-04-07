
import React, { useState } from 'react';
import { SOIL_TYPES, LOCATIONS } from '../constants';

interface SimulationProps {
  onBack: () => void;
}

const Simulation: React.FC<SimulationProps> = ({ onBack }) => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setTimeout(() => {
        const yieldPrediction = (Math.random() * 20 + 80).toFixed(1);
        const sustainabilityImpact = (Math.random() * 15 + 75).toFixed(1);
        setResult(`Predicted Yield: ${yieldPrediction}% of optimal. Sustainability Impact: ${sustainabilityImpact}%. Suggested action: Use organic compost.`);
        setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4 md:p-6 bg-lime-50 min-h-screen">
      <button onClick={onBack} className="mb-4 text-green-700 hover:text-green-900 font-semibold">&larr; Back to Dashboard</button>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Farm Simulation</h2>
        <p className="text-gray-600 mb-6">Predict yield and sustainability impact based on your choices.</p>
        
        <form onSubmit={handleSimulate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
              <select id="soilType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                {SOIL_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
             <div>
              <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">Crop</label>
              <select id="crop" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>Wheat</option>
                <option>Rice</option>
                <option>Cotton</option>
              </select>
            </div>
             <div>
              <label htmlFor="irrigation" className="block text-sm font-medium text-gray-700 mb-1">Irrigation</label>
              <select id="irrigation" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>Drip</option>
                <option>Sprinkler</option>
                <option>Flood</option>
              </select>
            </div>
             <div>
              <label htmlFor="fertilizer" className="block text-sm font-medium text-gray-700 mb-1">Fertilizer</label>
              <select id="fertilizer" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>Organic Compost</option>
                <option>Chemical NPK</option>
              </select>
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400">
            {isLoading ? 'Simulating...' : 'Run Simulation'}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Simulation Result:</h3>
            <p className="text-green-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation;
