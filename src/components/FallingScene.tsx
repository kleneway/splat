import React, { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

interface FallingSceneProps {
  sceneIndex: number;
}

export const FallingScene: React.FC<FallingSceneProps> = ({ sceneIndex }) => {
  const { setPhase, stats } = useGameStore();
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const fallingScenes = [
    {
      // First fall - exhilaration
      title: "The Jump",
      altitude: "14,000 feet",
      thoughts: [
        "The door opens and suddenly I'm falling through nothing but air and sky.",
        "This is it. This is what it feels like to be truly alive.",
        "The wind is so loud I can't hear my own thoughts—maybe that's a blessing.",
        "For the first time in decades, I'm not thinking about insurance claims or mortgage payments."
      ],
      backgroundClass: "bg-gradient-to-b from-blue-400 to-blue-600",
      windIntensity: "moderate"
    },
    {
      // Second fall - first attempt at ripcord
      title: "The Pull",
      altitude: "8,000 feet",
      thoughts: [
        "Time to pull the ripcord. Just like Jake showed me.",
        "I reach for the handle... where is it? WHERE IS IT?",
        "My heart stops. The handle is there, but it's not... it's not working.",
        "Stay calm, Roy. You have a backup chute. Everything will be fine."
      ],
      backgroundClass: "bg-gradient-to-b from-blue-500 to-green-400",
      windIntensity: "intense"
    },
    {
      // Third fall - panic setting in
      title: "The Realization",
      altitude: "5,000 feet",
      thoughts: [
        "The ground is getting bigger. Much bigger.",
        "I can see individual trees now. Individual cars on the highway.",
        "This isn't happening. This can't be happening to me.",
        "I've spent my whole life being careful, being safe. This isn't how it ends."
      ],
      backgroundClass: "bg-gradient-to-b from-green-400 to-yellow-400",
      windIntensity: "extreme"
    },
    {
      // Fourth fall - memories flooding back
      title: "The Flood",
      altitude: "3,000 feet",
      thoughts: [
        "They say your life flashes before your eyes when you're dying.",
        "I always thought that was just a saying.",
        "But here they come—all the moments, all the choices, all the roads not taken.",
        "Maybe this is my chance to understand who I really am."
      ],
      backgroundClass: "bg-gradient-to-b from-yellow-400 to-orange-400",
      windIntensity: "extreme"
    },
    {
      // Fifth fall - anger and regret
      title: "The Rage",
      altitude: "2,000 feet",
      thoughts: [
        "Fifty-five years of playing it safe, and this is how it ends?",
        "All those dreams I buried, all those chances I didn't take.",
        "Julia was right. I was afraid to really live.",
        "And now I'm going to die without ever finding out who I could have been."
      ],
      backgroundClass: "bg-gradient-to-b from-orange-400 to-red-400",
      windIntensity: "extreme"
    },
    {
      // Sixth fall - acceptance and final attempt
      title: "The Last Chance",
      altitude: "1,000 feet",
      thoughts: [
        "Wait. The backup chute. I still have the backup chute.",
        "One last chance. One final pull of the cord.",
        "Everything I've learned, everything I've been, comes down to this moment.",
        "Please. Please let this work."
      ],
      backgroundClass: "bg-gradient-to-b from-red-400 to-red-600",
      windIntensity: "critical"
    }
  ];

  const currentScene = fallingScenes[sceneIndex] || fallingScenes[0];

  useEffect(() => {
    if (currentThoughtIndex < currentScene.thoughts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentThoughtIndex(prev => prev + 1);
      }, 3000); // 3 seconds per thought
      return () => clearTimeout(timer);
    } else {
      // Show continue button after last thought
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentThoughtIndex, currentScene.thoughts.length]);

  const handleContinue = () => {
    if (sceneIndex >= fallingScenes.length - 1) {
      // Last falling scene, go to terminal
      setPhase('terminal');
    } else {
      // Go to next vignette
      setPhase('vignettes');
    }
  };

  const getWindParticleCount = (intensity: string) => {
    switch (intensity) {
      case 'moderate': return 20;
      case 'intense': return 35;
      case 'extreme': return 50;
      case 'critical': return 70;
      default: return 15;
    }
  };

  const getWindSpeed = (intensity: string) => {
    switch (intensity) {
      case 'moderate': return '3s';
      case 'intense': return '2s';
      case 'extreme': return '1.5s';
      case 'critical': return '1s';
      default: return '4s';
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${currentScene.backgroundClass}`}>
      {/* Wind particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(getWindParticleCount(currentScene.windIntensity))].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-8 bg-white/40 animate-fall-fast"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: getWindSpeed(currentScene.windIntensity),
            }}
          />
        ))}
      </div>

      {/* Roy falling - using the same image from intro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="animate-gentle-float"
          style={{
            backgroundImage: `url('/ChatGPT Image Jun 17, 2025, 11_38_28 AM.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '300px',
            height: '400px',
            filter: 'brightness(0.8)',
          }}
        />
      </div>

      {/* Altitude indicator */}
      <div className="absolute top-8 right-8 bg-black/80 border-2 border-white/50 p-4 pixelated text-white">
        <div className="text-red-400 text-sm mb-1">ALTITUDE</div>
        <div className="text-2xl font-bold">{currentScene.altitude}</div>
      </div>

      {/* Scene title */}
      <div className="absolute top-8 left-8 bg-black/80 border-2 border-white/50 p-4 pixelated text-white">
        <div className="text-yellow-400 text-lg font-bold">{currentScene.title}</div>
      </div>

      {/* Thought dialogue box */}
      <div className="absolute bottom-8 left-8 right-8 bg-black/95 border-4 border-gray-300 pixelated z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-3 border-b-2 border-gray-600">
          <div className="text-white font-bold text-lg pixelated">
            Roy's Thoughts
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-white text-lg leading-relaxed mb-4 min-h-[4rem]">
            {currentScene.thoughts[currentThoughtIndex]}
          </div>
          
          {showContinue && (
            <button
              onClick={handleContinue}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 pixelated border-2 border-red-800 transition-colors animate-pulse"
            >
              {sceneIndex >= fallingScenes.length - 1 ? "Final Attempt..." : "Continue Falling"}
            </button>
          )}
        </div>
      </div>

      {/* Ground approaching effect for later scenes */}
      {sceneIndex >= 3 && (
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-800/60 to-transparent animate-zoom-in"
          style={{ height: `${Math.min((sceneIndex - 2) * 20, 60)}vh` }}
        />
      )}
    </div>
  );
};