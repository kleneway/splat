import React, { useState, useEffect, useRef } from "react";
import { useGameStore } from "../store/gameStore";
import { vignettes } from "../data/vignettes";
import { Choice } from "../types/game";

export const VignetteScene: React.FC = () => {
  const { currentVignetteIndex, makeChoice, stats, setPhase, settings } =
    useGameStore();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const currentVignette = vignettes[currentVignetteIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check if we've completed all vignettes
    if (currentVignetteIndex >= vignettes.length) {
      // Continue with falling scenes or go to terminal
      setPhase("falling");
      return;
    }

    // Reset story state when vignette changes
    setCurrentStoryIndex(0);
    setShowChoices(false);
    setIsTransitioning(true);
    setShowDialogue(false);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setShowDialogue(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentVignetteIndex, setPhase]);

  // Handle background audio setup
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleAudioError = (e: Event) => {
      console.error("Audio error:", e);
      const error = audio.error;
      if (error) {
        switch (error.code) {
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            setAudioError("Audio file not found or format not supported");
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            setAudioError("Network error loading audio");
            break;
          default:
            setAudioError("Error loading audio file");
        }
      }
    };

    if (currentVignette.backgroundAudio) {
      audio.src = currentVignette.backgroundAudio;
      audio.loop = true;
      audio.volume = 0.3; // Quiet background music
      audio.addEventListener("error", handleAudioError);

      console.log("Vignette audio element src:", audio.src);
      console.log("Vignette audio ready state:", audio.readyState);
    } else {
      audio.src = "";
      setAudioPlaying(false);
    }

    return () => {
      audio.removeEventListener("error", handleAudioError);
      audio.pause();
      audio.src = "";
      setAudioPlaying(false);
    };
  }, [currentVignette.backgroundAudio]);

  // Function to start audio on user interaction
  const handleStartAudio = async () => {
    const audio = audioRef.current;
    if (!audio || !currentVignette.backgroundAudio || !settings.soundEnabled)
      return;

    try {
      await audio.play();
      setAudioPlaying(true);
      setAudioError(null);
      console.log("Vignette audio playing successfully");
    } catch (error) {
      console.error("Failed to play vignette audio:", error);
      setAudioError("Failed to play audio: " + (error as Error).message);
    }
  };

  const handleAdvanceStory = () => {
    // Try to start audio on first user interaction
    if (
      !audioPlaying &&
      currentVignette.backgroundAudio &&
      settings.soundEnabled
    ) {
      handleStartAudio();
    }

    if (Array.isArray(currentVignette.story)) {
      if (currentStoryIndex < currentVignette.story.length - 1) {
        setCurrentStoryIndex((prev) => prev + 1);
      } else {
        // Story is complete, show choices
        setShowChoices(true);
      }
    } else {
      // Single story string, show choices immediately
      setShowChoices(true);
    }
  };

  const handleChoiceSelect = (choice: Choice) => {
    // Check requirements
    if (choice.requirements) {
      const meetsRequirements = Object.entries(choice.requirements).every(
        ([stat, required]) => stats[stat as keyof typeof stats] >= required,
      );

      if (!meetsRequirements) {
        // Show feedback that requirements aren't met
        return;
      }
    }

    setShowDialogue(false);
    setShowChoices(false);
    makeChoice(choice);
  };

  if (!currentVignette) {
    return null;
  }

  // Get current story text and speaker
  const getCurrentStoryData = () => {
    if (Array.isArray(currentVignette.story)) {
      return currentVignette.story[currentStoryIndex];
    }
    return { speaker: "Roy", text: currentVignette.story };
  };

  const isLastStoryLine = () => {
    if (Array.isArray(currentVignette.story)) {
      return currentStoryIndex >= currentVignette.story.length - 1;
    }
    return true;
  };

  const currentStoryData = getCurrentStoryData();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - changes based on vignette age/theme */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${getVignetteBackground(
          currentVignette.age,
        )}`}
      />

      {/* Background Image */}
      {currentVignette.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${currentVignette.backgroundImage})` }}
        />
      )}

      {/* Audio element for background music */}
      <audio ref={audioRef} preload="auto" />

      {/* Audio error message */}
      {audioError && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-900/80 text-white px-6 py-3 border-2 border-red-600 pixelated text-sm">
          ⚠️ {audioError}
        </div>
      )}

      {/* Falling effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wind particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-12 bg-white/30 animate-fall-slow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Polaroid frame effect */}
      <div
        className={`absolute inset-8 border-8 bg-white/5 transition-all duration-1000 ${
          stats.fear > stats.desire ? "border-gray-500/50" : "border-white/80"
        }`}
      >
        <div className="absolute -top-6 left-4 bg-white/90 px-2 py-1 text-black text-sm font-mono">
          Age {currentVignette.age} - {currentVignette.title}
        </div>
      </div>

      {/* Vignette content area */}
      <div className="absolute inset-16 flex items-center justify-center">
        {isTransitioning ? (
          <div className="text-center">
            <div className="text-6xl pixelated animate-spin">🌀</div>
            <div className="text-white text-xl pixelated mt-4 animate-pulse">
              Memory surfacing...
            </div>
          </div>
        ) : (
          <div className="text-center text-white max-w-2xl">
            <div className="text-lg pixelated mb-4 opacity-80">
              {currentVignette.backgroundImage ? "" : currentVignette.setting}
            </div>
            <div className="text-8xl mb-8 animate-gentle-float">
              {currentVignette.backgroundImage
                ? ""
                : getVignetteEmoji(currentVignette.id)}
            </div>
          </div>
        )}
      </div>

      {/* Dialogue Box - RPG Style */}
      {showDialogue && (
        <div className="absolute bottom-8 left-8 right-8 bg-black/95 border-4 border-gray-300 pixelated z-10">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-3 border-b-2 border-gray-600">
            <div className="text-yellow-400 font-bold text-lg pixelated">
              {showChoices ? "Choose your path..." : currentStoryData.speaker}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showChoices ? (
              <>
                <div className="text-white text-lg leading-relaxed mb-4 min-h-[4rem]">
                  {currentStoryData.text}
                </div>
                <button
                  onClick={handleAdvanceStory}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 pixelated border-2 border-blue-800 transition-colors"
                >
                  {isLastStoryLine() ? "..." : "Continue"}
                </button>
              </>
            ) : (
              <div className="space-y-3">
                {currentVignette.choices.map((choice, index) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoiceSelect(choice)}
                    className={`
                      w-full text-left p-4 border-2 transition-all duration-200 pixelated
                      ${getChoiceButtonStyle(choice.type)}
                      hover:scale-[1.02] hover:shadow-lg transform
                    `}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">
                        {getChoiceIcon(choice.type)}
                      </span>
                      <div>
                        <div className="font-bold mb-1">{choice.text}</div>
                        {choice.description && (
                          <div className="text-sm opacity-80">
                            {choice.description}
                          </div>
                        )}
                        {choice.requirements && (
                          <div className="text-xs mt-1 opacity-60">
                            Requires:{" "}
                            {Object.entries(choice.requirements)
                              .map(([stat, value]) => `${stat} ≥ ${value}`)
                              .join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 pixelated text-white">
        Memory {currentVignetteIndex + 1} of {vignettes.length}
      </div>
    </div>
  );
};

const getVignetteBackground = (age: number): string => {
  if (age <= 12) return "bg-gradient-to-b from-yellow-300 to-orange-400"; // Childhood warmth
  if (age <= 20) return "bg-gradient-to-b from-purple-500 to-blue-600"; // Teenage turbulence
  if (age <= 35) return "bg-gradient-to-b from-green-500 to-blue-500"; // Young adult hope
  if (age <= 50) return "bg-gradient-to-b from-gray-600 to-gray-800"; // Middle age routine
  return "bg-gradient-to-b from-red-800 to-black"; // Later life intensity
};

const getVignetteEmoji = (vignetteId: string): string => {
  const emojiMap: Record<string, string> = {
    "fathers-guitar": "🎸",
    "class-presentation": "🎤",
    graffiti: "🎨",
    "hidden-poems": "📝",
    "the-protest": "✊",
    "job-interview": "💼",
    "julias-ultimatum": "💔",
    "sons-dreams": "🚀",
    "promotion-declined": "🏢",
    "broken-vase": "💥",
    "midnight-conversation": "🌙",
    "friends-funeral": "⚰️",
    "insurance-claim": "📋",
    "julias-letter": "💌",
    "the-jump": "🪂",
  };

  return emojiMap[vignetteId] || "❓";
};

const getChoiceButtonStyle = (type: Choice["type"]): string => {
  switch (type) {
    case "safe":
      return "border-gray-500 bg-gray-800 hover:bg-gray-700 animate-pulse-slow";
    case "risky":
      return "border-amber-500 bg-amber-900/20 hover:bg-amber-800/30 animate-glow-amber";
    case "dishonest":
      return "border-red-500 bg-red-900/20 hover:bg-red-800/30 animate-glow-red";
    default:
      return "border-gray-500 bg-gray-800";
  }
};

const getChoiceIcon = (type: Choice["type"]): string => {
  switch (type) {
    case "safe":
      return "🛡️";
    case "risky":
      return "⚡";
    case "dishonest":
      return "🎭";
    default:
      return "❓";
  }
};