import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: 'desire' | 'fear' | 'integrity' | 'redline';
  isBlinking?: boolean;
}

export const StatBar: React.FC<StatBarProps> = ({ 
  label, 
  value, 
  maxValue, 
  color, 
  isBlinking = false 
}) => {
  const percentage = Math.min((value / maxValue) * 100, 100);
  
  const colorClasses = {
    desire: 'bg-amber-400',
    fear: 'bg-red-400',
    integrity: 'bg-blue-400',
    redline: 'bg-purple-500',
  };

  const glowClasses = {
    desire: 'shadow-amber-400/50',
    fear: 'shadow-red-400/50',
    integrity: 'shadow-blue-400/50',
    redline: 'shadow-purple-500/50',
  };

  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <span className="text-white w-12 text-right pixelated uppercase tracking-wider">
        {label}
      </span>
      <div className="w-16 h-2 bg-gray-800 border border-gray-600 relative overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${colorClasses[color]} ${
            isBlinking ? `animate-pulse shadow-lg ${glowClasses[color]}` : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
        {/* Pixel-style notches */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 w-px h-full bg-gray-700"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>
      <span className="text-white w-4 text-left pixelated">
        {value}
      </span>
    </div>
  );
};