import React from 'react';
import { useGameStore } from '../store/gameStore';
import { StatBar } from './StatBar';
import { MemoryItems } from './MemoryItems';

export const GameHUD: React.FC = () => {
  const { stats } = useGameStore();

  return (
    <>
      {/* Stats Panel - Simplified */}
      <div className="fixed top-4 left-4 bg-black/80 border border-gray-600 p-3 space-y-2 z-40 pixelated">
        <StatBar 
          label="DESIRE" 
          value={stats.desire} 
          maxValue={8} 
          color="desire"
        />
        <StatBar 
          label="FEAR" 
          value={stats.fear} 
          maxValue={8} 
          color="fear"
        />
        <StatBar 
          label="TRUTH" 
          value={stats.integrity} 
          maxValue={8} 
          color="integrity"
        />
        <StatBar 
          label="LIES" 
          value={stats.redLine} 
          maxValue={5} 
          color="redline"
        />
      </div>

      {/* Memory Items */}
      <MemoryItems />
    </>
  );
};