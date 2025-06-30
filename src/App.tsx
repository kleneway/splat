import React, { useEffect } from "react";
import { useGameStore } from "./store/gameStore";
import { TitleScreen } from "./components/TitleScreen";
import { IntroScene } from "./components/IntroScene";
import { PlaneScene } from "./components/PlaneScene";
import { FallingScene } from "./components/FallingScene";
import { VignetteScene } from "./components/VignetteScene";
import { TerminalScene } from "./components/TerminalScene";
import { EndingScene } from "./components/EndingScene";
import { GameHUD } from "./components/GameHUD";
import { EndingType } from "./types/game";

function App() {
  const { phase, settings, jumpToScene, currentFallingIndex } = useGameStore();

  // Secret debug URL parameters - remove before launch
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const debugScene = urlParams.get("scene");

    if (debugScene) {
      const vignetteIndex = urlParams.get("index")
        ? parseInt(urlParams.get("index")!, 10)
        : undefined;
      const endingType = urlParams.get("ending") as EndingType;
      const desire = urlParams.get("desire")
        ? parseInt(urlParams.get("desire")!, 10)
        : undefined;
      const fear = urlParams.get("fear")
        ? parseInt(urlParams.get("fear")!, 10)
        : undefined;
      const integrity = urlParams.get("integrity")
        ? parseInt(urlParams.get("integrity")!, 10)
        : undefined;
      const redLine = urlParams.get("redline")
        ? parseInt(urlParams.get("redline")!, 10)
        : undefined;

      const stats = {};
      if (desire !== undefined) stats.desire = desire;
      if (fear !== undefined) stats.fear = fear;
      if (integrity !== undefined) stats.integrity = integrity;
      if (redLine !== undefined) stats.redLine = redLine;

      jumpToScene(debugScene, {
        vignetteIndex,
        endingType,
        stats: Object.keys(stats).length > 0 ? stats : undefined,
      });

      // Clean up URL to hide the debug parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [jumpToScene]);

  return (
    <div
      className={`
      min-h-screen font-mono
      ${settings.dyslexiaFont ? "font-sans" : "font-mono"}
      ${settings.colorBlindMode ? "filter hue-rotate-15" : ""}
    `}
    >
      {/* {phase !== "title" && phase !== "intro" && phase !== "ending" && (
        <GameHUD />
      )} */}

      {phase === "title" && <TitleScreen />}
      {phase === "intro" && <IntroScene />}
      {phase === "plane" && <PlaneScene />}
      {phase === "falling" && <FallingScene sceneIndex={currentFallingIndex} />}
      {phase === "vignettes" && <VignetteScene />}
      {phase === "terminal" && <TerminalScene />}
      {phase === "ending" && <EndingScene />}
    </div>
  );
}

export default App;