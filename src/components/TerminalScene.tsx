import React, { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

export const TerminalScene: React.FC = () => {
  const { stats, calculateEnding, setPhase } = useGameStore();
  const [showWarning, setShowWarning] = useState(false);
  const [showCutaway, setShowCutaway] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const sequence = [
      () => setShowWarning(true),
      () => setShowCutaway(true),
    ];

    const timer1 = setTimeout(sequence[0], 1000);
    const timer2 = setTimeout(sequence[1], 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (showCutaway && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      handleCutawayAttempt();
    }
  }, [showCutaway, countdown]);

  const handleCutawayAttempt = () => {
    const ending = calculateEnding();
    useGameStore.setState({ ending });
    setPhase('ending');
  };

  const canCutaway = stats.desire > stats.fear && stats.redLine < 3;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black flex items-center justify-center relative">
      {/* Intense falling effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-16 bg-white animate-fall-fast opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${0.3 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Ground approaching */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800 to-transparent animate-zoom-in" />

      {/* Main content */}
      <div className="text-center text-white z-10">
        {showWarning && (
          <div className="mb-8 animate-bounce">
            <div className="text-6xl pixelated mb-4 text-red-400">⚠️</div>
            <div className="text-2xl pixelated font-bold animate-pulse">
              ALTITUDE WARNING
            </div>
            <div className="text-lg pixelated mt-2">
              Main chute malfunction detected
            </div>
          </div>
        )}

        {showCutaway && (
          <div className="animate-fade-in">
            <div className="text-xl pixelated mb-6">
              Cut away main chute and deploy reserve?
            </div>
            
            <div className="text-8xl pixelated mb-6 animate-spin-slow">
              {canCutaway ? '🪂' : '💀'}
            </div>
            
            <div className="text-4xl pixelated font-bold mb-4">
              {countdown > 0 ? countdown : 'NOW!'}
            </div>
            
            {countdown === 0 && (
              <div className="text-lg pixelated animate-pulse">
                {canCutaway 
                  ? "Roy reaches for the cutaway handle..." 
                  : "Roy hesitates, paralyzed by a lifetime of fear..."
                }
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats summary in corner */}
      <div className="absolute top-4 right-4 bg-black/80 border border-red-500 p-4 pixelated text-white">
        <div className="text-sm mb-2 text-red-400">FINAL ASSESSMENT</div>
        <div>Desire: {stats.desire}</div>
        <div>Fear: {stats.fear}</div>
        <div>Integrity: {stats.integrity}</div>
        <div>Lies: {stats.redLine}</div>
        <div className="mt-2 text-xs text-gray-400">
          {canCutaway ? "CONDITIONS: FAVORABLE" : "CONDITIONS: CRITICAL"}
        </div>
      </div>
    </div>
  );
};