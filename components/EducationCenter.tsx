
import React from 'react';
import { ArrowLeft, BookOpen, Droplets, Bug, Sprout } from 'lucide-react';

const EducationCenter = ({ onBack }) => {
  const modules = [
    {
      title: "Soil Health Management",
      description: "Explain soil fertility, nutrient cycles, and sustainable farming practices.",
      link: "https://www.youtube.com/watch?v=W6HyGx-pqkI",
      icon: <Sprout className="w-6 h-6 text-green-600" />
    },
    {
      title: "Water Conservation & Drip Irrigation",
      description: "Explain efficient water usage and the benefits of drip irrigation systems.",
      link: "https://www.youtube.com/watch?v=melP6QGp3lk",
      icon: <Droplets className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Organic Pest Control Techniques",
      description: "Describe eco-friendly pest control methods using natural pesticides and biological control.",
      link: "https://www.youtube.com/watch?v=yHQWs6uqnNE",
      icon: <Bug className="w-6 h-6 text-orange-600" />
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-stone-50 min-h-screen">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-green-700 hover:text-green-900 font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Dashboard
      </button>

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-green-700" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2 italic">
            Agriculture Learning Module
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore essential farming techniques through simple explanations and expert video guides.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              
              {/* Card Header */}
              <div className="p-6 bg-stone-50 border-b border-stone-100 flex items-center">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4 border border-stone-100">
                  {module.icon}
                </div>
                <h2 className="text-xl font-bold text-stone-800">
                  {module.title}
                </h2>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                  {module.description}
                </p>
                
                {/* ✅ Direct Open Button */}
                <button
                  onClick={() => window.open(module.link, "_blank", "noopener,noreferrer")}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-bold text-center hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center group"
                >
                  ▶ Watch Video
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 py-10 border-t border-stone-200 text-center">
          <p className="text-stone-400 text-sm italic">
            "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings."
          </p>
          <p className="text-stone-500 text-xs mt-2">
            — Masanobu Fukuoka
          </p>
        </footer>

      </div>
    </div>
  );
};

export default EducationCenter;