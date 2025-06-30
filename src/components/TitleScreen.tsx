import React, { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

export const TitleScreen: React.FC = () => {
  const { setPhase, settings, toggleSetting } = useGameStore((state) => ({
    setPhase: state.setPhase,
    settings: state.settings,
    toggleSetting: state.toggleSetting,
  }));

  const [audioBlocked, setAudioBlocked] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    // Check if audio context is available and try to unlock it
    const checkAudioCapabilities = async () => {
      try {
        // Modern approach: Check if we can create an AudioContext
        const audioContext = new AudioContext();

        if (audioContext.state === "suspended") {
          console.log("Audio context is suspended, will need user interaction");
          setAudioBlocked(true);
        } else {
          console.log("Audio context is ready");
          setAudioUnlocked(true);
        }

        // Clean up the test context
        audioContext.close();
      } catch (error) {
        console.log(
          "Audio might be blocked, will need user interaction:",
          error instanceof Error ? error.message : String(error),
        );
        setAudioBlocked(true);
      }
    };

    checkAudioCapabilities();
  }, []);

  const handleAudioUnlock = async () => {
    try {
      // Modern approach: Create and resume an AudioContext
      const audioContext = new AudioContext();

      if (audioContext.state === "suspended") {
        await audioContext.resume();
        console.log("Audio context resumed successfully");
      }

      // Create a brief, nearly silent tone to test audio
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.001, audioContext.currentTime); // Very quiet

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.01); // 10ms duration

      setAudioBlocked(false);
      setAudioUnlocked(true);

      // Clean up
      setTimeout(() => audioContext.close(), 100);
    } catch (error) {
      console.error("Failed to unlock audio:", error);
      setAudioBlocked(true);
    }
  };

  const handleStartGame = () => {
    // Try to unlock audio when starting the game if it hasn't been unlocked
    if (!audioUnlocked && settings.soundEnabled) {
      handleAudioUnlock();
    }
    setPhase("intro");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/ChatGPT Image Jun 17, 2025, 11_38_28 AM.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Audio controls */}
      <div className="absolute top-8 right-8 z-20 flex flex-col gap-2">
        <button
          onClick={() => toggleSetting("soundEnabled")}
          className="bg-black/70 hover:bg-black/90 text-white p-3 border-2 border-white/50 pixelated transition-all duration-200 flex items-center gap-2"
          title={settings.soundEnabled ? "Mute Audio" : "Unmute Audio"}
        >
          <span className="text-lg">{settings.soundEnabled ? "🔊" : "🔇"}</span>
          <span className="text-sm">
            {settings.soundEnabled ? "MUTE" : "UNMUTE"}
          </span>
        </button>

        {audioBlocked && settings.soundEnabled && (
          <button
            onClick={handleAudioUnlock}
            className="bg-yellow-600/80 hover:bg-yellow-600 text-white px-3 py-2 border-2 border-yellow-400 pixelated text-xs transition-all duration-200"
            title="Click to enable audio in your browser"
          >
            🔓 ENABLE AUDIO
          </button>
        )}
      </div>

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
          
        </div>

        {/* Game description */}
        <div className="bg-black/70 border-2 border-white/50 p-6 mb-8 pixelated max-w-2xl mx-auto">
          <p className="text-base leading-relaxed mb-4">
            You are Roy Thompson, an insurance salesman from Kansas
            who has spent his entire life making safe choices.
          </p>
          <p className="text-base leading-relaxed">
            On your 55th birthday, you decide to go skydiving - the first truly risky
            thing you've ever done.
          </p>
          <p className="text-base leading-relaxed text-yellow-300">
            That...may have been a mistake.
          </p>
        </div>

        {/* Audio warning if blocked */}
        {audioBlocked && settings.soundEnabled && (
          <div className="bg-yellow-900/70 border-2 border-yellow-500/50 p-4 mb-6 pixelated max-w-md mx-auto">
            <p className="text-yellow-300 text-sm">
              🔊 Audio may be blocked by your browser. Click "ENABLE AUDIO"
              above or the start button to unlock sound.
            </p>
          </div>
        )}

        {/* Start button */}
        <button
          onClick={handleStartGame}
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
