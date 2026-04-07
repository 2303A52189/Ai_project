
import React, { useState, useEffect } from 'react';
import { User } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OnboardingModal from './components/OnboardingModal';
import Header from './components/Header';
import Lesson from './components/Lesson';
import UploadProof from './components/UploadProof';
import Simulation from './components/Simulation';
import Community from './components/Community';
import Schemes from './components/Schemes';
import EducationCenter from './components/EducationCenter';
import { Toaster, toast } from 'sonner';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (username: string) => {
    const mockUser: User = {
      id: '1',
      name: username,
      sustainabilityScore: 78,
      agroCoins: 1250,
      streak: 5,
      profile: null,
      completedLessons: [],
    };
    setUser(mockUser);
    setShowOnboarding(true);
    toast.success(`Welcome back, ${username}!`);
  };
  
  const handleLogout = () => {
    setUser(null);
    setCurrentPage('dashboard');
    toast.info('Logged out successfully');
  };
  
  const handleProfileUpdate = (profile: { soilType: string; phLevel: number; location: string }) => {
    if (user) {
      setUser({ ...user, profile });
      setShowOnboarding(false);
      toast.success('Profile updated! You are ready to start.');
    }
  };

  const handleLessonComplete = (lessonId: string) => {
    if(user && !user.completedLessons.includes(lessonId)){
       setUser({
        ...user,
        agroCoins: user.agroCoins + 50,
        sustainabilityScore: user.sustainabilityScore + 5,
        completedLessons: [...user.completedLessons, lessonId],
      });
       toast.success('Congratulations!', {
           description: 'You earned 50 AgroCoins and +5 Sustainability Score!',
       });
    } else {
        toast.info('Lesson already completed!');
    }
    setCurrentPage('dashboard');
  }

  const handleProofUpload = () => {
      if(user) {
          setUser({
              ...user,
              agroCoins: user.agroCoins + 100,
              streak: user.streak + 1,
          });
          toast.success('Proof uploaded!', {
              description: 'You earned 100 AgroCoins and your streak increased!',
          });
      }
      setCurrentPage('dashboard');
  }
  
  const renderPage = () => {
    if (currentPage.startsWith('lesson:')) {
      const lessonId = currentPage.split(':')[1];
      return <Lesson lessonId={lessonId} onComplete={handleLessonComplete} onBack={() => setCurrentPage('dashboard')} />;
    }

    switch (currentPage) {
      case 'upload':
        return <UploadProof onUpload={handleProofUpload} onBack={() => setCurrentPage('dashboard')} />;
      case 'simulation':
        return <Simulation onBack={() => setCurrentPage('dashboard')} />;
      case 'community':
        return <Community onBack={() => setCurrentPage('dashboard')} />;
      case 'schemes':
        return <Schemes onBack={() => setCurrentPage('dashboard')} />;
      case 'education':
        return <EducationCenter onBack={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
      default:
        return user ? <Dashboard user={user} navigateTo={setCurrentPage} /> : null;
    }
  }

  if (!user) {
    return (
      <>
        <Toaster position="top-center" richColors />
        <Login onLogin={handleLogin} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-center" richColors />
      <Header user={user} onLogout={handleLogout} />
      <main>
        {showOnboarding && <OnboardingModal onComplete={handleProfileUpdate} />}
        {!showOnboarding && renderPage()}
      </main>
    </div>
  );
};

export default App;
