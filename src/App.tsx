import React from 'react';
import { useGameStore } from './store/gameStore';
import { TitleScreen } from './components/TitleScreen';
import { IntroScene } from './components/IntroScene';
import { PlaneScene } from './components/PlaneScene';
import { VignetteScene } from './components/VignetteScene';
import { TerminalScene } from './components/TerminalScene';
import { EndingScene } from './components/EndingScene';
import { GameHUD } from './components/GameHUD';

function App() {
  const { phase, settings } = useGameStore();

  return (
    <div className={`
      min-h-screen font-mono
      ${settings.dyslexiaFont ? 'font-sans' : 'font-mono'}
      ${settings.colorBlindMode ? 'filter hue-rotate-15' : ''}
    `}>
      {phase !== 'title' && phase !== 'intro' && phase !== 'ending' && <GameHUD />}
      
      {phase === 'title' && <TitleScreen />}
      {phase === 'intro' && <IntroScene />}
      {phase === 'plane' && <PlaneScene />}
      {phase === 'vignettes' && <VignetteScene />}
      {phase === 'terminal' && <TerminalScene />}
      {phase === 'ending' && <EndingScene />}
    </div>
  );
}

export default App;