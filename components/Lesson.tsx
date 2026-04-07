
import React, { useState, useRef, useEffect } from 'react';
import { LessonContent, Language } from '../types';
import { LANGUAGES, LESSONS } from '../constants';
import { PlayIcon, PauseIcon, ExternalLinkIcon } from './IconComponents';

interface LessonProps {
  lessonId: string;
  onComplete: (lessonId: string) => void;
  onBack: () => void;
}

const Lesson: React.FC<LessonProps> = ({ lessonId, onComplete, onBack }) => {
  const lessonData = LESSONS.find(l => l.id === lessonId) || LESSONS[0];
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.EN);
  const [isAudioMode, setIsAudioMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(-1);

  const audioRef = useRef<HTMLAudioElement>(null);

  const currentNarration = lessonData.narration[selectedLanguage];

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const currentTime = audioElement.currentTime;
      const activeIndex = currentNarration.transcript.findIndex((sentence, index, arr) => {
        const nextSentence = arr[index + 1];
        if (nextSentence) {
          return currentTime >= sentence.time && currentTime < nextSentence.time;
        }
        return currentTime >= sentence.time;
      });
      setCurrentSentenceIndex(activeIndex);
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentSentenceIndex(-1);
    }

    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('ended', handleEnded);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, [selectedLanguage, currentNarration.transcript]);

  const togglePlayPause = () => {
    if (isAudioMode && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsPlaying(false);
    if(audioRef.current) {
        audioRef.current.src = lessonData.narration[lang].audioUrl;
        audioRef.current.load();
    }
  };

  return (
    <div className="p-4 bg-lime-50 min-h-screen">
      <button onClick={onBack} className="mb-4 text-green-700 hover:text-green-900 font-semibold flex items-center">
        <span className="mr-2">&larr;</span> Back to Dashboard
      </button>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2">{lessonData.title}</h2>
          <p className="text-gray-600 mb-6">{lessonData.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Mode:</span>
                <label htmlFor="modeToggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" id="modeToggle" className="sr-only" checked={isAudioMode} onChange={() => setIsAudioMode(!isAudioMode)} />
                        <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isAudioMode ? 'translate-x-6' : ''}`}></div>
                    </div>
                </label>
                <span className="text-xs text-gray-500">{isAudioMode ? 'Audio + Transcript' : 'Video'}</span>
            </div>
             <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Language:</span>
                 <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value as Language)} className="rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 text-sm">
                    {LANGUAGES.map(lang => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
             </div>
          </div>
        </div>

        {!isAudioMode ? (
          <div className="p-8 bg-stone-50 border-t border-b flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 shadow-inner">
              <PlayIcon className="w-10 h-10 ml-1" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-stone-800 mb-2">Video Lesson Ready</h3>
              <p className="text-stone-500 text-sm max-w-xs mx-auto">
                Click the button below to watch the educational video directly on YouTube in a new tab.
              </p>
            </div>
            <button 
              onClick={() => window.open(lessonData.videoUrl, "_blank", "noopener,noreferrer")}
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition-all transform hover:scale-105 flex items-center group"
            >
              ▶ Watch Video on YouTube
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ) : (
          <div className="p-6 border-t">
            <h3 className="font-semibold text-lg mb-4 text-green-700">Audio Narration & Transcript</h3>
            <div className="flex justify-center mb-6">
              <audio ref={audioRef} src={currentNarration.audioUrl} className="hidden" onPlay={()=>setIsPlaying(true)} onPause={()=>setIsPlaying(false)} />
              <button onClick={togglePlayPause} className="bg-green-600 text-white p-5 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105">
                {isPlaying ? <PauseIcon className="w-8 h-8"/> : <PlayIcon className="w-8 h-8"/>}
              </button>
            </div>
            <div className="space-y-3 text-lg text-gray-800 max-h-64 overflow-y-auto p-2">
              {currentNarration.transcript.map((sentence, index) => (
                <p key={index} className={`p-3 rounded-lg transition-all duration-300 ${currentSentenceIndex === index ? 'bg-green-100 text-green-900 font-semibold border-l-4 border-green-600' : 'opacity-60'}`}>
                  {sentence.text}
                </p>
              ))}
            </div>
          </div>
        )}


        <div className="p-6 bg-gray-50 border-t">
            <button onClick={() => onComplete(lessonData.id)} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-md hover:bg-green-700 transition-all transform active:scale-95">
                Mark as Complete & Earn 50 Coins
            </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
