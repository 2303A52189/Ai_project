
export interface User {
  id: string;
  name: string;
  sustainabilityScore: number;
  agroCoins: number;
  streak: number;
  profile: {
    soilType: string;
    phLevel: number;
    location: string;
  } | null;
  completedLessons: string[];
}

export enum Language {
  EN = 'en',
  HI = 'hi',
  TE = 'te',
  ML = 'ml',
}

export interface Sentence {
  text: string;
  time: number;
}

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  relatedLinks?: string[];
  narration: {
    [key in Language]: {
      audioUrl: string;
      transcript: Sentence[];
    };
  };
}

export interface Scheme {
    id: string;
    title: string;
    description: string;
    eligibility: string;
    link: string;
}
