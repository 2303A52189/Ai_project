
import React, { useState } from 'react';
import { SOIL_TYPES, PH_LEVELS, LOCATIONS } from '../constants';

interface OnboardingModalProps {
  onComplete: (profile: { soilType: string; phLevel: number; location: string }) => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  const [soilType, setSoilType] = useState(SOIL_TYPES[0]);
  const [phLevel, setPhLevel] = useState(PH_LEVELS[2]);
  const [location, setLocation] = useState(LOCATIONS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ soilType, phLevel, location });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Welcome! Let's personalize your experience.</h2>
        <p className="text-gray-600 mb-6">Tell us about your farm for better recommendations.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
            <select id="soilType" value={soilType} onChange={(e) => setSoilType(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              {SOIL_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="phLevel" className="block text-sm font-medium text-gray-700 mb-1">Soil pH Level</label>
            <select id="phLevel" value={phLevel} onChange={(e) => setPhLevel(Number(e.target.value))} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              {PH_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location (Climate)</label>
            <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingModal;
