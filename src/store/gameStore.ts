import { create } from "zustand";
import { GameState, GameStats, Choice, EndingType } from "../types/game";
import { vignettes } from "../data/vignettes";
import { memoryItems } from "../data/memoryItems";

interface GameStore extends GameState {
  makeChoice: (choice: Choice) => void;
  nextVignette: () => void;
  resetGame: () => void;
  toggleSetting: (setting: keyof GameState["settings"]) => void;
  calculateEnding: () => EndingType;
  setPhase: (phase: GameState["phase"]) => void;
  jumpToScene: (
    scene: string,
    options?: {
      vignetteIndex?: number;
      endingType?: EndingType;
      stats?: Partial<GameStats>;
    },
  ) => void;
}

const initialState: GameState = {
  phase: "title",
  currentVignetteIndex: 0,
  currentFallingIndex: 0,
  stats: {
    desire: 0,
    fear: 0,
    integrity: 0,
    redLine: 0,
  },
  memoryItems: memoryItems.map((item) => ({ ...item, acquired: false })),
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
    if (choice.effects.integrity)
      newStats.integrity += choice.effects.integrity;
    if (choice.effects.redLine) newStats.redLine += choice.effects.redLine;

    // Acquire memory item if applicable
    const newMemoryItems = [...state.memoryItems];
    if (choice.memoryItem) {
      const itemIndex = newMemoryItems.findIndex(
        (item) => item.id === choice.memoryItem,
      );
      if (itemIndex !== -1) {
        newMemoryItems[itemIndex].acquired = true;
      }
    }

    // Mark current vignette as completed
    const currentVignette = vignettes[state.currentVignetteIndex];
    const newCompletedVignettes = [
      ...state.completedVignettes,
      currentVignette.id,
    ];

    set({
      stats: newStats,
      memoryItems: newMemoryItems,
      completedVignettes: newCompletedVignettes,
    });

    // Check if we should trigger Red Line ending early
    if (newStats.redLine >= 3 && state.currentVignetteIndex >= 5) {
      set({ ending: "redline", phase: "ending" });
      return;
    }

    // Auto-advance to next falling scene after a brief delay
    setTimeout(() => {
      get().nextVignette();
    }, 1500);
  },

  nextVignette: () => {
    const state = get();

    // Alternate between falling scenes and vignettes
    if (state.phase === 'vignettes') {
      // After a vignette, go to falling scene (unless we've completed all)
      if (state.currentFallingIndex < 5) { // 6 falling scenes total (0-5)
        set({ 
          phase: 'falling',
          currentFallingIndex: state.currentFallingIndex + 1
        });
      } else {
        // All falling scenes done, go to terminal
        set({ phase: 'terminal' });
      }
    } else if (state.phase === 'falling') {
      // After a falling scene, go to next vignette (unless we've completed all)
      if (state.currentVignetteIndex < vignettes.length - 1) {
        set({ 
          phase: 'vignettes',
          currentVignetteIndex: state.currentVignetteIndex + 1
        });
      } else {
        // All vignettes done, continue with remaining falling scenes
        if (state.currentFallingIndex < 5) {
          set({ 
            phase: 'falling',
            currentFallingIndex: state.currentFallingIndex + 1
          });
        } else {
          set({ phase: 'terminal' });
        }
      }
    }
  },

  calculateEnding: (): EndingType => {
    const { stats, memoryItems } = get();
    const hasPlaneTicket = memoryItems.find(
      (item) => item.id === "plane-ticket",
    )?.acquired;

    // Red Line ending (corruption)
    if (stats.redLine >= 3) return "redline";

    // Secret endings
    if (stats.integrity >= 8 && hasPlaneTicket) return "paper";
    if (stats.desire >= 4) return "weightless";

    // Standard endings
    if (stats.desire > stats.fear && stats.redLine <= 2) return "breathe";
    if (stats.fear >= stats.desire) return "held";

    // Default "sleepwalked through life" ending
    if (stats.desire <= 4 && stats.fear <= 4 && stats.integrity <= 4)
      return "clockout";

    return "breathe"; // fallback
  },

  setPhase: (phase: GameState["phase"]) => {
    set({ phase });
  },

  resetGame: () => {
    set({ ...initialState, phase: "title" });
  },

  toggleSetting: (setting: keyof GameState["settings"]) => {
    set((state) => ({
      settings: {
        ...state.settings,
        [setting]: !state.settings[setting],
      },
    }));
  },

  jumpToScene: (
    scene: string,
    options?: {
      vignetteIndex?: number;
      endingType?: EndingType;
      stats?: Partial<GameStats>;
    },
  ) => {
    const state = get();
    const newState: Partial<GameState> = {};

    // Apply custom stats if provided
    if (options?.stats) {
      newState.stats = { ...state.stats, ...options.stats };
    }

    switch (scene.toLowerCase()) {
      case "title":
        newState.phase = "title";
        break;
      case "intro":
        newState.phase = "intro";
        break;
      case "plane":
        newState.phase = "plane";
        break;
      case "falling":
        newState.phase = "falling";
        break;
      case "vignette":
      case "vignettes":
        newState.phase = "vignettes";
        if (options?.vignetteIndex !== undefined) {
          newState.currentVignetteIndex = Math.max(
            0,
            Math.min(options.vignetteIndex, vignettes.length - 1),
          );
        }
        break;
      case "terminal":
        newState.phase = "terminal";
        break;
      case "ending":
        newState.phase = "ending";
        if (options?.endingType) {
          newState.ending = options.endingType;
        } else {
          newState.ending = get().calculateEnding();
        }
        break;
      default:
        console.warn(`Unknown scene: ${scene}`);
        return;
    }

    set(newState);
  },
}));