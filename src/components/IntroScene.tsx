import React, { useEffect, useState } from 'react';
import { useGameStore } from '../store/gameStore';

export const IntroScene: React.FC = () => {
  const setPhase = useGameStore(state => state.setPhase);
  const [showFigure, setShowFigure] = useState(false);
  const [showSplat, setShowSplat] = useState(false);
  const [showReverse, setShowReverse] = useState(false);

  useEffect(() => {
    const sequence = [
      () => setShowFigure(true),
      () => setShowSplat(true),
      () => setShowReverse(true),
      () => setPhase('plane'),
    ];

    const timers = [
      setTimeout(sequence[0], 1000),   // Show falling figure after 1s
      setTimeout(sequence[1], 4000),  // Show SPLAT after 4s (3s fall time)
      setTimeout(sequence[2], 6000),  // Start reverse after 6s
      setTimeout(sequence[3], 8000),  // Move to plane after 8s
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [setPhase]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/ChatGPT Image Jun 17, 2025, 11_38_28 AM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Falling figure */}
      {showFigure && (
        <div className={`absolute transition-all duration-3000 ${
          showReverse 
            ? 'animate-reverse-fall' 
            : 'top-0 left-1/2 transform -translate-x-1/2 animate-fall-slow'
        }`}>
          <div className="text-6xl pixelated">🤸‍♂️</div>
        </div>
      )}
      
      {/* SPLAT text */}
      {showSplat && !showReverse && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-9xl font-bold text-red-600 pixelated animate-impact drop-shadow-2xl">
            SPLAT!
          </div>
        </div>
      )}
      
      {/* Skip button */}
      <button
        onClick={() => setPhase('plane')}
        className="absolute bottom-8 right-8 bg-black/60 text-white px-6 py-3 border-2 border-gray-400 pixelated hover:bg-black/80 transition-colors text-sm"
      >
        Skip Intro
      </button>
    </div>
  );
};