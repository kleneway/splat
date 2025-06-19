import React from 'react';
import { useGameStore } from '../store/gameStore';

export const TitleScreen: React.FC = () => {
  const setPhase = useGameStore(state => state.setPhase);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/ChatGPT Image Jun 17, 2025, 11_38_28 AM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Main content */}
      <div className="text-center text-white z-10 max-w-4xl px-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold pixelated drop-shadow-2xl mb-4 text-yellow-400">
            SPLAT
          </h1>
          <p className="text-2xl pixelated text-white/90 mb-2">
            An Interactive Life Story
          </p>
          <p className="text-lg pixelated text-white/80">
            8-bit Choose Your Own Adventure
          </p>
        </div>
        
        {/* Game description */}
        <div className="bg-black/70 border-2 border-white/50 p-6 mb-8 pixelated max-w-2xl mx-auto">
          <p className="text-base leading-relaxed mb-4">
            You are Roy Thompson, a 55-year-old insurance salesman from Kansas who has spent his entire life making safe choices.
          </p>
          <p className="text-base leading-relaxed mb-4">
            On your birthday, you decide to go skydiving - the first truly risky thing you've ever done. When your parachute fails, your life flashes before your eyes.
          </p>
          <p className="text-base leading-relaxed text-yellow-300">
            Relive the pivotal moments that shaped who you became. Every choice matters. Every decision echoes through time.
          </p>
        </div>
        
        {/* Start button */}
        <button
          onClick={() => setPhase('intro')}
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-2xl font-bold border-4 border-red-800 pixelated transition-all duration-200 hover:scale-105 animate-pulse"
        >
          BEGIN STORY
        </button>
        
        {/* Credits */}
        <div className="mt-8 text-sm pixelated text-white/60">
          <p>A story about choices, regrets, and second chances</p>
        </div>
      </div>
    </div>
  );
};