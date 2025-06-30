import React, { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

interface FallingSceneProps {
  sceneIndex: number;
}

export const FallingScene: React.FC<FallingSceneProps> = ({ sceneIndex }) => {
  const { setPhase, stats, nextVignette } = useGameStore();
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const fallingScenes = [
    {
      // Scene 0 - Initial exhilaration (before first vignette)
      title: "The Leap",
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
      // Scene 1 - First attempt at ripcord (after father's guitar)
      title: "The Pull",
      altitude: "13,000 feet",
      thoughts: [
        "Time to pull the ripcord. Just like Jake showed me.",
        "I reach for the handle... where is it? WHERE IS IT?",
        "My heart stops. The handle is there, but it's not... it's not working.",
        "Stay calm, Roy. You have a backup chute. Everything will be fine."
      ],
      backgroundClass: "bg-gradient-to-b from-blue-500 to-blue-700",
      windIntensity: "intense"
    },
    {
      // Scene 2 - Denial phase (after class presentation)
      title: "This Can't Be Real",
      altitude: "12,000 feet",
      thoughts: [
        "This isn't happening. This can't be happening to me.",
        "I've spent my whole life being careful, being safe.",
        "People like me don't die in skydiving accidents. We die quietly in hospital beds.",
        "Any second now, the chute will open. Any second now."
      ],
      backgroundClass: "bg-gradient-to-b from-blue-600 to-blue-800",
      windIntensity: "intense"
    },
    {
      // Scene 3 - Growing panic (after graffiti)
      title: "The Realization",
      altitude: "11,000 feet",
      thoughts: [
        "The ground is getting bigger. Much bigger.",
        "I can see individual trees now. Individual cars on the highway.",
        "My hands are shaking so hard I can barely grab the backup handle.",
        "This is really happening. This is really, actually happening."
      ],
      backgroundClass: "bg-gradient-to-b from-blue-700 to-green-400",
      windIntensity: "intense"
    },
    {
      // Scene 4 - Memories begin (after hidden poems)
      title: "The Flood",
      altitude: "10,000 feet",
      thoughts: [
        "They say your life flashes before your eyes when you're dying.",
        "I always thought that was just a saying.",
        "But here they come—all the moments, all the choices, all the roads not taken.",
        "Maybe this is my chance to understand who I really am."
      ],
      backgroundClass: "bg-gradient-to-b from-green-400 to-yellow-400",
      windIntensity: "extreme"
    },
    {
      // Scene 5 - Childhood memories surface (after the protest)
      title: "Echoes of Youth",
      altitude: "9,000 feet",
      thoughts: [
        "I can hear Dad's guitar again, that sad melody drifting through the house.",
        "All those nights I wanted to ask him to teach me, but never found the courage.",
        "Even as a kid, I was already learning to play it safe.",
        "When did I stop believing in magic? When did I stop believing in myself?"
      ],
      backgroundClass: "bg-gradient-to-b from-yellow-400 to-orange-400",
      windIntensity: "extreme"
    },
    {
      // Scene 6 - Regret about Julia (after job interview)
      title: "The Love I Lost",
      altitude: "8,000 feet",
      thoughts: [
        "Julia. God, Julia. I can see her face so clearly now.",
        "All those times she wanted to travel, to take risks, to really live.",
        "And I held her back with my fear, my need for safety.",
        "She deserved someone who would follow her into the unknown."
      ],
      backgroundClass: "bg-gradient-to-b from-orange-400 to-orange-600",
      windIntensity: "extreme"
    },
    {
      // Scene 7 - Anger phase begins (after Julia's ultimatum)
      title: "The Rage",
      altitude: "7,000 feet",
      thoughts: [
        "Fifty-five years of playing it safe, and this is how it ends?",
        "All those dreams I buried, all those chances I didn't take.",
        "I'm angry. I'm so damn angry at myself.",
        "Why did it take falling to my death to finally feel something real?"
      ],
      backgroundClass: "bg-gradient-to-b from-orange-600 to-red-400",
      windIntensity: "extreme"
    },
    {
      // Scene 8 - Thoughts of Ethan (after son's dreams)
      title: "My Boy",
      altitude: "6,000 feet",
      thoughts: [
        "Ethan. My beautiful, dreaming boy.",
        "I see his face when he talked about being an astronaut.",
        "Did I crush his dreams the way mine were crushed?",
        "Please, let him be braver than his father. Let him reach for the stars."
      ],
      backgroundClass: "bg-gradient-to-b from-red-400 to-red-500",
      windIntensity: "extreme"
    },
    {
      // Scene 9 - Career regrets (after promotion declined)
      title: "The Safe Path",
      altitude: "5,000 feet",
      thoughts: [
        "Forty years in the same office, the same desk, the same routine.",
        "How many opportunities did I let slip by?",
        "Kansas City. That promotion. Another door I was too afraid to walk through.",
        "I built a prison out of safety and called it a life."
      ],
      backgroundClass: "bg-gradient-to-b from-red-500 to-red-600",
      windIntensity: "critical"
    },
    {
      // Scene 10 - Broken relationships (after broken vase)
      title: "Shattered Things",
      altitude: "4,000 feet",
      thoughts: [
        "The sound of that vase breaking. The look in Julia's eyes.",
        "How many things did I break with my fear, my silence, my absence?",
        "I was there but not there. Present but not present.",
        "A ghost haunting my own life."
      ],
      backgroundClass: "bg-gradient-to-b from-red-600 to-red-700",
      windIntensity: "critical"
    },
    {
      // Scene 11 - Midnight loneliness (after midnight conversation)
      title: "The Space Between",
      altitude: "3,500 feet",
      thoughts: [
        "All those sleepless nights, sitting in the dark.",
        "Julia and I, two strangers sharing the same house.",
        "When did we stop talking? When did we stop dreaming together?",
        "The silence between us grew until it swallowed everything."
      ],
      backgroundClass: "bg-gradient-to-b from-red-700 to-red-800",
      windIntensity: "critical"
    },
    {
      // Scene 12 - Mortality awareness (after friend's funeral)
      title: "The Final Lesson",
      altitude: "3,000 feet",
      thoughts: [
        "Mike's funeral. All those adventures he had while I filed paperwork.",
        "He lived more in fifty years than I did in fifty-five.",
        "That plane ticket stub in my wallet. His last adventure.",
        "Maybe this is mine."
      ],
      backgroundClass: "bg-gradient-to-b from-red-800 to-black",
      windIntensity: "critical"
    },
    {
      // Scene 13 - Professional guilt (after insurance claim)
      title: "The Weight of Choices",
      altitude: "2,500 feet",
      thoughts: [
        "Maria Hendricks. Her burned house. Her children sleeping on floors.",
        "How many people did I fail with my adherence to policy?",
        "I chose rules over humanity, safety over compassion.",
        "Even my job became another way to avoid really living."
      ],
      backgroundClass: "bg-gradient-to-b from-black to-gray-900",
      windIntensity: "critical"
    },
    {
      // Scene 14 - Final acceptance and last attempt (after Julia's letter and jump decision)
      title: "The Last Chance",
      altitude: "2,000 feet",
      thoughts: [
        "Julia's letter. Her final words about learning to fly.",
        "Maybe this is what she meant. Maybe this is my moment.",
        "One last chance. One final pull of the cord.",
        "Please. Please let this work. Let me finally choose to live."
      ],
      backgroundClass: "bg-gradient-to-b from-gray-900 to-red-900",
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
      // Use the centralized nextVignette function to properly manage state progression
      nextVignette();
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

      {/* Roy falling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="animate-gentle-float"
          style={{
            backgroundImage: `url('/image/roy-falling.png')`,
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
      {sceneIndex >= 8 && (
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-800/60 to-transparent animate-zoom-in"
          style={{ height: `${Math.min((sceneIndex - 7) * 8, 40)}vh` }}
        />
      )}
    </div>
  );
};