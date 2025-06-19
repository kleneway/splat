import React from 'react';
import { Choice } from '../types/game';

interface DialogueBoxProps {
  title: string;
  age: number;
  story: string;
  choices: Choice[];
  onChoiceSelect: (choice: Choice) => void;
  isVisible: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  title,
  age,
  story,
  choices,
  onChoiceSelect,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      {/* Main dialogue window */}
      <div className="bg-black border-t-4 border-l-4 border-r-4 border-gray-300 mx-4 mb-4 pixelated">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-2 border-b-2 border-gray-600">
          <h3 className="text-white font-bold text-lg">
            {title} <span className="text-blue-200">(Age {age})</span>
          </h3>
        </div>
        
        <div className="p-6 bg-gray-900 text-white leading-relaxed">
          <p className="mb-6 text-base">{story}</p>
          
          <div className="space-y-3">
            {choices.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => onChoiceSelect(choice)}
                className={`
                  w-full text-left p-4 border-2 transition-all duration-200 pixelated
                  ${getChoiceButtonStyle(choice.type)}
                  hover:scale-[1.02] hover:shadow-lg transform
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{getChoiceIcon(choice.type)}</span>
                  <div>
                    <div className="font-bold mb-1">{choice.text}</div>
                    <div className="text-sm opacity-80">{choice.description}</div>
                    {choice.requirements && (
                      <div className="text-xs mt-1 opacity-60">
                        Requires: {Object.entries(choice.requirements).map(([stat, value]) => 
                          `${stat} ≥ ${value}`
                        ).join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getChoiceButtonStyle = (type: Choice['type']): string => {
  switch (type) {
    case 'safe':
      return 'border-gray-500 bg-gray-800 hover:bg-gray-700 animate-pulse-slow';
    case 'risky':
      return 'border-amber-500 bg-amber-900/20 hover:bg-amber-800/30 animate-glow-amber';
    case 'dishonest':
      return 'border-red-500 bg-red-900/20 hover:bg-red-800/30 animate-glow-red';
    default:
      return 'border-gray-500 bg-gray-800';
  }
};

const getChoiceIcon = (type: Choice['type']): string => {
  switch (type) {
    case 'safe':
      return '🛡️';
    case 'risky':
      return '⚡';
    case 'dishonest':
      return '🎭';
    default:
      return '❓';
  }
};