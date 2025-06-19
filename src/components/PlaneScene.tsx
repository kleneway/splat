import React, { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

interface DialogueLine {
  speaker: string;
  text: string;
}

export const PlaneScene: React.FC = () => {
  const setPhase = useGameStore(state => state.setPhase);
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [showJumpButton, setShowJumpButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const dialogues: DialogueLine[] = [
    {
      speaker: "Instructor Jake",
      text: "First time jumping, Roy? You picked a beautiful day for it.",
    },
    {
      speaker: "Instructor Jake",
      text: "How are you feeling up here? Most folks get a little nervous their first time.",
    },
    {
      speaker: "Roy",
      text: "Honestly? Terrified. But that's the point, right?",
    },
    {
      speaker: "Roy", 
      text: "I'm 55 years old and I've never done anything truly dangerous in my life.",
    },
    {
      speaker: "Instructor Jake",
      text: "Dangerous? This is one of the safest sports in the world when done right.",
    },
    {
      speaker: "Instructor Jake",
      text: "What made you decide to try it? Birthday? Divorce? Midlife crisis?",
    },
    {
      speaker: "Roy",
      text: "My wife... ex-wife... she always said I was too afraid to really live.",
    },
    {
      speaker: "Roy",
      text: "Maybe she was right. Maybe it's time to prove her wrong.",
    },
    {
      speaker: "Roy",
      text: "Or prove her right. I'm not sure which scares me more.",
    },
    {
      speaker: "Instructor Jake",
      text: "Well, you're about to find out. We're at altitude now.",
    },
    {
      speaker: "Instructor Jake",
      text: "You ready to take that leap, Roy?",
    },
  ];

  const handleAdvanceDialogue = () => {
    if (currentDialogue < dialogues.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentDialogue(prev => prev + 1);
        setIsTyping(false);
      }, 300);
    } else {
      // We've reached the end of dialogue, show the jump sequence
      setShowJumpButton(true);
    }
  };

  const handleJump = () => {
    setPhase('vignettes');
  };

  // Check if we're at the last dialogue
  const isLastDialogue = currentDialogue >= dialogues.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center relative">
      {/* Airplane interior background */}
      <div className="absolute inset-0">
        {/* Plane interior with pixel art style */}
        <div className="w-full h-full relative" style={{
          background: 'linear-gradient(90deg, #4a5568 0%, #718096 50%, #4a5568 100%)'
        }}>
          {/* Plane windows */}
          <div className="absolute right-16 top-1/4 space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-24 h-16 border-4 border-gray-800 bg-gradient-to-b from-sky-300 to-green-400 rounded-lg relative">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-600 to-green-400" />
                {/* Clouds visible through windows */}
                <div className="absolute top-2 left-2 w-4 h-2 bg-white/80 rounded pixelated" />
                <div className="absolute top-4 right-3 w-3 h-2 bg-white/60 rounded pixelated" />
              </div>
            ))}
          </div>
          
          {/* Characters - pixel art style */}
          <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 flex items-center gap-12">
            {/* Instructor */}
            <div className="text-center">
              <div className="w-16 h-20 bg-blue-600 border-2 border-black pixelated relative mx-auto mb-2">
                {/* Head */}
                <div className="w-8 h-8 bg-orange-300 border border-black absolute -top-8 left-1/2 transform -translate-x-1/2" />
                {/* Goggles */}
                <div className="w-6 h-2 bg-gray-800 absolute -top-6 left-1/2 transform -translate-x-1/2" />
                {/* Body details */}
                <div className="w-2 h-4 bg-yellow-400 absolute top-2 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="text-xs pixelated text-white">Jake</div>
            </div>
            
            {/* Roy */}
            <div className="text-center">
              <div className="w-16 h-20 bg-gray-700 border-2 border-black pixelated relative mx-auto mb-2">
                {/* Head */}
                <div className="w-8 h-8 bg-orange-200 border border-black absolute -top-8 left-1/2 transform -translate-x-1/2" />
                {/* Glasses */}
                <div className="w-4 h-1 bg-gray-600 absolute -top-6 left-1/2 transform -translate-x-1/2" />
                {/* Body details */}
                <div className="w-2 h-4 bg-red-500 absolute top-2 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="text-xs pixelated text-white">Roy</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dialogue box */}
      <div className="absolute bottom-8 left-8 right-8 bg-black/95 border-4 border-gray-300 pixelated z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-3 border-b-2 border-gray-600">
          <div className="text-yellow-400 font-bold text-lg pixelated">
            {!showJumpButton ? dialogues[currentDialogue]?.speaker : "Narrator"}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {!showJumpButton ? (
            <>
              <div className={`text-white text-lg leading-relaxed mb-4 ${isTyping ? 'opacity-50' : ''}`}>
                {dialogues[currentDialogue]?.text}
              </div>
              <button
                onClick={handleAdvanceDialogue}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 pixelated border-2 border-blue-800 transition-colors"
                disabled={isTyping}
              >
                {isLastDialogue ? "..." : "Continue"}
              </button>
            </>
          ) : (
            <div className="text-center">
              <div className="text-white text-xl mb-6 pixelated">
                The door opens. Wind rushes in. This is it.
              </div>
              <button
                onClick={handleJump}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-2xl font-bold border-4 border-red-800 transition-all duration-200 animate-pulse pixelated"
              >
                JUMP!
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Wind effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-8 bg-white/20 animate-wind"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};