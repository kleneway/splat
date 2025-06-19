import React from 'react';
import { useGameStore } from '../store/gameStore';

export const MemoryItems: React.FC = () => {
  const memoryItems = useGameStore(state => state.memoryItems);
  const acquiredItems = memoryItems.filter(item => item.acquired);

  if (acquiredItems.length === 0) return null;

  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      {acquiredItems.map((item, index) => (
        <div 
          key={item.id}
          className="group relative"
        >
          <div 
            className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center pixelated hover-twitch cursor-help"
            title={item.description}
          >
            {getItemIcon(item.id)}
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-10 top-0 bg-black border border-gray-600 p-2 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pixelated">
            <div className="font-bold">{item.name}</div>
            <div className="text-gray-400">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getItemIcon = (itemId: string): string => {
  switch (itemId) {
    case 'guitar-pick':
      return '🎸';
    case 'inhaler':
      return '💨';
    case 'plane-ticket':
      return '✈️';
    case 'poem-fragment':
      return '📜';
    default:
      return '?';
  }
};