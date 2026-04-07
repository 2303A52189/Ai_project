
import React from 'react';
import { GOVT_SCHEMES } from '../constants';
import { ExternalLink, CheckCircle2, Info } from 'lucide-react';

interface SchemesProps {
  onBack: () => void;
}

const Schemes: React.FC<SchemesProps> = ({ onBack }) => {
  return (
    <div className="p-4 md:p-6 bg-lime-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center group">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span> Back to Dashboard
        </button>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-green-600 p-3 rounded-xl shadow-lg">
              <Info className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-900">Government Schemes</h2>
              <p className="text-gray-600">Financial aid and technical support for your farm.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {GOVT_SCHEMES.map(scheme => (
              <div key={scheme.id} className="group border border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:bg-green-50/30 transition-all shadow-sm hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-green-800">{scheme.title}</h3>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Active</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{scheme.description}</p>
                    
                    <div className="flex items-center bg-white/50 p-3 rounded-lg border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-gray-800">Eligibility:</span> {scheme.eligibility}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <a 
                      href={scheme.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      Apply Now <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <p className="text-[10px] text-center text-gray-400 italic">Redirects to official portal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-green-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-1">Need help applying?</h4>
              <p className="text-green-100 text-sm opacity-80">Our community experts can guide you through the documentation process.</p>
            </div>
            <button className="bg-white text-green-900 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg whitespace-nowrap">
              Ask the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
