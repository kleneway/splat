import React from 'react';
import { useGameStore } from '../store/gameStore';
import { EndingType } from '../types/game';

export const EndingScene: React.FC = () => {
  const { ending, resetGame, stats } = useGameStore();

  if (!ending) return null;

  const endingData = getEndingData(ending);

  return (
    <div className={`min-h-screen flex items-center justify-center relative ${endingData.background}`}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {endingData.particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute ${particle.class}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center text-white z-10 max-w-2xl px-8">
        <div className="text-8xl pixelated mb-8 animate-gentle-float">
          {endingData.emoji}
        </div>
        
        <h2 className="text-4xl pixelated font-bold mb-6 text-yellow-400">
          {endingData.title}
        </h2>
        
        <p className="text-lg leading-relaxed mb-8 pixelated">
          {endingData.description}
        </p>
        
        <div className="bg-black/60 border border-gray-600 p-4 mb-8 pixelated text-sm">
          <div className="mb-2 text-gray-400">Roy's Final Statistics:</div>
          <div className="grid grid-cols-2 gap-2">
            <div>Desire: {stats.desire}</div>
            <div>Fear: {stats.fear}</div>
            <div>Integrity: {stats.integrity}</div>
            <div>Lies Told: {stats.redLine}</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={resetGame}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg pixelated border-2 border-blue-800 transition-colors"
          >
            Try Again
          </button>
          
          <div className="text-sm pixelated text-gray-400">
            Discover all {getEndingCount()} possible endings
          </div>
        </div>
      </div>
      
      {/* Special effects for certain endings */}
      {ending === 'weightless' && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      
      {ending === 'redline' && (
        <div className="absolute inset-0 animate-glitch bg-red-900/50" />
      )}
    </div>
  );
};

const getEndingData = (ending: EndingType) => {
  const endings = {
    breathe: {
      title: 'Let It Breathe',
      emoji: '🪂',
      background: 'bg-gradient-to-b from-blue-500 to-green-500',
      description: 'Roy pulls the cutaway handle. The reserve chute blooms above him like a second chance. As he drifts toward the Kansas earth, he pulls out his phone and dials Julia. For the first time in years, his laugh is genuine.',
      particles: [
        { class: 'w-2 h-2 bg-white/50 animate-float' },
        { class: 'w-1 h-1 bg-blue-400/70 animate-drift' },
      ],
    },
    held: {
      title: 'Held Breath',
      emoji: '🌫️',
      background: 'bg-gradient-to-b from-gray-600 to-black',
      description: 'Fear paralyzes Roy at the crucial moment. The ground rushes up to meet him. In his final seconds, he thinks of all the chances he never took, all the words he never said. The silence that follows is profound.',
      particles: [
        { class: 'w-1 h-8 bg-gray-400/50 animate-fall' },
        { class: 'w-px h-4 bg-white/30 animate-fade' },
      ],
    },
    paper: {
      title: 'Paper Sky',
      emoji: '✈️',
      background: 'bg-gradient-to-b from-orange-400 to-pink-500',
      description: 'Roy survives the landing, battered but alive. He mails Julia the plane ticket stub with a fragment of his old poetry. Above Kansas, contrails streak the sky like unfinished sentences finally finding their endings.',
      particles: [
        { class: 'w-3 h-px bg-white/60 animate-streak' },
        { class: 'w-1 h-1 bg-orange-400/80 animate-twinkle' },
      ],
    },
    redline: {
      title: 'Red Line',
      emoji: '💥',
      background: 'bg-gradient-to-b from-red-800 to-black',
      description: 'Too many lies corrupt Roy\'s final memories. Reality glitches. The narrative breaks down. Roy falls through static, never reaching the ground—trapped forever in the space between truth and fiction.',
      particles: [
        { class: 'w-4 h-1 bg-red-500/80 animate-glitch' },
        { class: 'w-1 h-4 bg-red-400/60 animate-error' },
      ],
    },
    weightless: {
      title: 'Weightless Promise',
      emoji: '🎸',
      background: 'bg-gradient-to-b from-purple-600 to-blue-800',
      description: 'Time stops. Roy floats suspended between earth and sky, finally understanding what it means to be truly free. A ghostly guitar chord echoes across the plains. Some endings are beginnings.',
      particles: [
        { class: 'w-2 h-2 bg-purple-400/70 animate-orbit' },
        { class: 'w-1 h-1 bg-gold/80 animate-shimmer' },
      ],
    },
    clockout: {
      title: 'Clock Out',
      emoji: '⏰',
      background: 'bg-gradient-to-b from-gray-800 to-gray-900',
      description: 'Roy hits the ground with all the impact of a rubber stamp. "PAID IN FULL" pixelates across the field. Even in death, he\'s filed properly, processed efficiently, forgotten quietly.',
      particles: [
        { class: 'w-1 h-1 bg-gray-500/50 animate-tick' },
        { class: 'w-px h-px bg-white/20 animate-fade-slow' },
      ],
    },
  };

  return endings[ending];
};

const getEndingCount = (): number => {
  return 6; // Total number of possible endings
};