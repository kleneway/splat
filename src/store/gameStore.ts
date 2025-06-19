import { create } from 'zustand';
import { GameState, GameStats, Choice, EndingType } from '../types/game';
import { vignettes } from '../data/vignettes';
import { memoryItems } from '../data/memoryItems';

interface GameStore extends GameState {
  makeChoice: (choice: Choice) => void;
  nextVignette: () => void;
  resetGame: () => void;
  toggleSetting: (setting: keyof GameState['settings']) => void;
  calculateEnding: () => EndingType;
  setPhase: (phase: GameState['phase']) => void;
}

const initialState: GameState = {
  phase: 'title',
  currentVignetteIndex: 0,
  stats: {
    desire: 0,
    fear: 0,
    integrity: 0,
    redLine: 0,
  },
  memoryItems: memoryItems.map(item => ({ ...item, acquired: false })),
  completedVignettes: [],
  ending: null,
  settings: {
    dyslexiaFont: false,
    colorBlindMode: false,
    soundEnabled: true,
  },
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  makeChoice: (choice: Choice) => {
    const state = get();
    const newStats = { ...state.stats };
    
    // Apply stat changes
    if (choice.effects.desire) newStats.desire += choice.effects.desire;
    if (choice.effects.fear) newStats.fear += choice.effects.fear;
    if (choice.effects.integrity) newStats.integrity += choice.effects.integrity;
    if (choice.effects.redLine) newStats.redLine += choice.effects.redLine;

    // Acquire memory item if applicable
    const newMemoryItems = [...state.memoryItems];
    if (choice.memoryItem) {
      const itemIndex = newMemoryItems.findIndex(item => item.id === choice.memoryItem);
      if (itemIndex !== -1) {
        newMemoryItems[itemIndex].acquired = true;
      }
    }

    // Mark current vignette as completed
    const currentVignette = vignettes[state.currentVignetteIndex];
    const newCompletedVignettes = [...state.completedVignettes, currentVignette.id];

    set({
      stats: newStats,
      memoryItems: newMemoryItems,
      completedVignettes: newCompletedVignettes,
    });

    // Check if we should trigger Red Line ending early
    if (newStats.redLine >= 3 && state.currentVignetteIndex >= 9) {
      set({ ending: 'redline', phase: 'ending' });
      return;
    }

    // Auto-advance to next vignette after a brief delay
    setTimeout(() => {
      get().nextVignette();
    }, 1500);
  },

  nextVignette: () => {
    const state = get();
    
    if (state.currentVignetteIndex < vignettes.length - 1) {
      set({ currentVignetteIndex: state.currentVignetteIndex + 1 });
    } else {
      // All vignettes completed, move to terminal phase
      set({ phase: 'terminal' });
    }
  },

  calculateEnding: (): EndingType => {
    const { stats, memoryItems } = get();
    const hasPlaneTicket = memoryItems.find(item => item.id === 'plane-ticket')?.acquired;

    // Red Line ending (corruption)
    if (stats.redLine >= 3) return 'redline';

    // Secret endings
    if (stats.integrity >= 8 && hasPlaneTicket) return 'paper';
    if (stats.desire >= 4) return 'weightless';

    // Standard endings
    if (stats.desire > stats.fear && stats.redLine <= 2) return 'breathe';
    if (stats.fear >= stats.desire) return 'held';
    
    // Default "sleepwalked through life" ending
    if (stats.desire <= 4 && stats.fear <= 4 && stats.integrity <= 4) return 'clockout';

    return 'breathe'; // fallback
  },

  setPhase: (phase: GameState['phase']) => {
    set({ phase });
  },

  resetGame: () => {
    set({ ...initialState, phase: 'title' });
  },

  toggleSetting: (setting: keyof GameState['settings']) => {
    set((state) => ({
      settings: {
        ...state.settings,
        [setting]: !state.settings[setting],
      },
    }));
  },
}));