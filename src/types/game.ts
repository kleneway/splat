export interface GameStats {
  desire: number;
  fear: number;
  integrity: number;
  redLine: number;
}

export interface MemoryItem {
  id: string;
  name: string;
  description: string;
  acquired: boolean;
}

export interface Choice {
  id: string;
  text: string;
  description?: string;
  effects: {
    desire?: number;
    fear?: number;
    integrity?: number;
    redLine?: number;
  };
  memoryItem?: string;
  requirements?: {
    desire?: number;
    fear?: number;
    integrity?: number;
  };
  type: "safe" | "risky" | "dishonest";
}

export interface StoryLine {
  speaker: string;
  text: string;
}

export interface Vignette {
  id: string;
  title: string;
  age: number;
  setting: string;
  story: StoryLine[];
  choices: Choice[];
  backgroundImage?: string;
  backgroundAudio?: string;
}

export type GamePhase =
  | "title"
  | "intro"
  | "plane"
  | "falling"
  | "vignettes"
  | "terminal"
  | "ending";

export type EndingType =
  | "breathe"
  | "held"
  | "paper"
  | "redline"
  | "weightless"
  | "clockout";

export interface EndingCondition {
  id: string;
  name: string;
  description: string;
  condition: (stats: GameStats, redLine: number) => boolean;
  tone: string;
  finalImage: string;
}

export interface GameState {
  phase: GamePhase;
  currentVignetteIndex: number;
  currentFallingIndex: number;
  stats: GameStats;
  memoryItems: MemoryItem[];
  completedVignettes: string[];
  ending: EndingType | null;
  settings: {
    dyslexiaFont: boolean;
    colorBlindMode: boolean;
    soundEnabled: boolean;
  };
}