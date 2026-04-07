
import React, { useState } from 'react';
import { User, Scheme } from '../types';
import { LeafIcon, CoinIcon, ChartIcon, UploadIcon, FlaskIcon, ChatIcon, CommunityIcon } from './IconComponents';
import { GOVT_SCHEMES, LESSONS } from '../constants';
import { CheckCircle, Info, ArrowRight, BookOpen } from 'lucide-react';

interface DashboardProps {
  user: User;
  navigateTo: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, navigateTo }) => {
  const [showSchemePopup, setShowSchemePopup] = useState(true);
  const randomScheme = GOVT_SCHEMES[Math.floor(Math.random() * GOVT_SCHEMES.length)];

  const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 border border-green-50">
      <div className="bg-green-100 p-3 rounded-full">{icon}</div>
      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );

  const ActionButton: React.FC<{ title: string; icon: React.ReactNode; onClick: () => void; }> = ({ title, icon, onClick }) => (
    <button onClick={onClick} className="flex flex-col items-center justify-center space-y-2 bg-white p-4 rounded-xl shadow-md hover:bg-green-50 transition-all transform hover:scale-105 border border-green-50 group">
      <div className="bg-green-600 text-white p-4 rounded-full group-hover:bg-green-700 transition-colors shadow-sm">{icon}</div>
      <p className="text-sm font-semibold text-gray-700">{title}</p>
    </button>
  );

  return (
    <div className="p-4 md:p-6 bg-lime-50 min-h-screen">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-green-900">Welcome, {user.name}!</h2>
          <p className="text-gray-600">Your sustainable farming journey continues.</p>
        </div>
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
           <span className="text-sm font-medium text-green-800">Live Expert Support Available</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard title="Sustainability Score" value={user.sustainabilityScore} icon={<ChartIcon className="w-6 h-6 text-green-700" />} />
        <StatCard title="AgroCoins" value={user.agroCoins} icon={<CoinIcon className="w-6 h-6 text-yellow-600" />} />
        <StatCard title="Daily Streak" value={`${user.streak} Days`} icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 2.045a.75.75 0 0 1 .71 0l7.5 4.125a.75.75 0 0 1 0 1.31l-3.375 1.855v5.82a.75.75 0 0 1-.375.65l-7.5 4.125a.75.75 0 0 1-.75 0l-7.5-4.125a.75.75 0 0 1-.375-.65v-5.82L2.645 7.48a.75.75 0 0 1 0-1.31l7.5-4.125a.75.75 0 0 1 .5 0Z" /></svg>} />
      </div>

      {showSchemePopup && (
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-5 mb-8 rounded-r-xl shadow-sm relative flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Info className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-1">New Scheme Alert: {randomScheme.title}</h4>
            <p className="text-sm mb-3 text-blue-700">{randomScheme.description}</p>
            <button onClick={() => navigateTo('schemes')} className="text-sm font-bold text-blue-600 hover:underline flex items-center">
              View All Schemes <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <button onClick={() => setShowSchemePopup(false)} className="text-blue-400 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
          <LeafIcon className="w-6 h-6 mr-2" /> Learning Modules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LESSONS.map(lesson => {
            const isCompleted = user.completedLessons.includes(lesson.id);
            return (
              <div key={lesson.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-green-50 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-green-100 relative">
                   <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <LeafIcon className="w-16 h-16 text-green-800" />
                   </div>
                   {isCompleted && (
                     <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-sm">
                        <CheckCircle className="w-3 h-3 mr-1" /> Completed
                     </div>
                   )}
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-1">{lesson.title}</h4>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{lesson.description}</p>
                  <button 
                    onClick={() => navigateTo(`lesson:${lesson.id}`)}
                    className={`w-full py-2 rounded-lg font-semibold transition-colors ${isCompleted ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-green-600 text-white hover:bg-green-700'}`}
                  >
                    {isCompleted ? 'Review Lesson' : 'Start Learning'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="text-xl font-bold text-green-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <ActionButton title="Education" icon={<BookOpen className="w-7 h-7" />} onClick={() => navigateTo('education')} />
        <ActionButton title="Upload Proof" icon={<UploadIcon className="w-7 h-7" />} onClick={() => navigateTo('upload')} />
        <ActionButton title="Simulation" icon={<FlaskIcon className="w-7 h-7" />} onClick={() => navigateTo('simulation')} />
        <ActionButton title="Ask Expert" icon={<ChatIcon className="w-7 h-7" />} onClick={() => navigateTo('community')} />
        <ActionButton title="Schemes" icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" /><path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" /></svg>} onClick={() => navigateTo('schemes')} />
      </div>
    </div>
  );
};

export default Dashboard;
