import React, { useRef, useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

export const IntroScene: React.FC = () => {
  const { setPhase, settings } = useGameStore((state) => ({
    setPhase: state.setPhase,
    settings: state.settings,
  }));
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioError, setAudioError] = useState<string | null>(null);

  const handleTransition = () => {
    // Stop both video and audio before transitioning
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPhase("plane");
  };

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const handleAudioError = (e: Event) => {
      console.error("Audio error:", e);
      const error = audio.error;
      if (error) {
        switch (error.code) {
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            setAudioError("Audio file not found or format not supported");
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            setAudioError("Network error loading audio");
            break;
          default:
            setAudioError("Error loading audio file");
        }
      }
    };

    const handleVideoStart = () => {
      // Start audio when video starts playing, but only if sound is enabled
      if (settings.soundEnabled && audio) {
        console.log("Attempting to play audio...");
        audio
          .play()
          .then(() => {
            console.log("Audio playing successfully");
            setAudioError(null);
          })
          .catch((error) => {
            console.error("Failed to play audio:", error);
            setAudioError("Failed to play audio: " + error.message);
          });
      }
    };

    const handleVideoEnd = () => {
      handleTransition();
    };

    // Add error handler to audio element
    audio.addEventListener("error", handleAudioError);
    video.addEventListener("play", handleVideoStart);
    video.addEventListener("ended", handleVideoEnd);

    // Log audio element state
    console.log("Audio element src:", audio.src);
    console.log("Audio ready state:", audio.readyState);

    return () => {
      audio.removeEventListener("error", handleAudioError);
      video.removeEventListener("play", handleVideoStart);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [setPhase, settings.soundEnabled]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/video/opening.mp4"
        autoPlay
        muted
        playsInline
        className="max-w-full max-h-full"
        style={{
          aspectRatio: "4/3",
          objectFit: "contain",
        }}
      />

      <audio
        ref={audioRef}
        src="/video/opening-soundtrack.WAV"
        preload="auto"
      />

      {/* Audio error message */}
      {audioError && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-900/80 text-white px-6 py-3 border-2 border-red-600 pixelated text-sm">
          ⚠️ {audioError}
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={handleTransition}
        className="absolute bottom-8 right-8 bg-black/60 text-white px-6 py-3 border-2 border-gray-400 pixelated hover:bg-black/80 transition-colors text-sm"
      >
        Skip Intro
      </button>
    </div>
  );
};
