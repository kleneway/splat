import React, { useState, useEffect, useRef, useMemo } from "react";
import { useGameStore } from "../store/gameStore";

interface DialogueLine {
  speaker: string;
  text: string;
  duration: number; // in seconds
}

export const PlaneScene: React.FC = () => {
  const { setPhase, settings } = useGameStore((state) => ({
    setPhase: state.setPhase,
    settings: state.settings,
  }));
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [showJumpButton, setShowJumpButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioError, setAudioError] = useState<string | null>(null);

  const dialogues: DialogueLine[] = useMemo(
    () => [
      {
        speaker: "Instructor Jake",
        text: "First time jumping, Roy? You picked a beautiful day for it.",
        duration: 3,
      },
      {
        speaker: "Instructor Jake",
        text: "How are you feeling up here? Most folks get a little nervous their first time.",
        duration: 3.5,
      },
      {
        speaker: "Roy",
        text: "Honestly? Terrified. But that's the point, right?",
        duration: 3.5,
      },
      {
        speaker: "Roy",
        text: "I'm 55 years old and I've never done anything truly dangerous in my life.",
        duration: 5.0,
      },
      {
        speaker: "Instructor Jake",
        text: "Dangerous? This is one of the safest sports in the world when done right.",
        duration: 4,
      },
      {
        speaker: "Instructor Jake",
        text: "What made you decide to try it? Birthday? Divorce? Midlife crisis?",
        duration: 3.5,
      },
      {
        speaker: "Roy",
        text: "My wife... ex-wife... she always said I was too afraid to really live.",
        duration: 5,
      },
      {
        speaker: "Roy",
        text: "Maybe she was right. Maybe it's time to prove her wrong.",
        duration: 5,
      },
      {
        speaker: "Roy",
        text: "Or prove her right. I'm not sure which scares me more.",
        duration: 4.5,
      },
      {
        speaker: "Instructor Jake",
        text: "Well, you're about to find out. We're at altitude now.",
        duration: 3.5,
      },
      {
        speaker: "Instructor Jake",
        text: "You ready to take that leap, Roy?",
        duration: 2,
      },
    ],
    [],
  );

  // Auto-advance dialogue using individual durations
  useEffect(() => {
    if (currentDialogue < dialogues.length - 1 && !showJumpButton) {
      const currentDuration = dialogues[currentDialogue]?.duration || 3;
      const timer = setTimeout(() => {
        setCurrentDialogue((prev) => prev + 1);
      }, currentDuration * 1000);
      return () => clearTimeout(timer);
    } else if (currentDialogue >= dialogues.length - 1 && !showJumpButton) {
      // Show jump button after last dialogue
      const finalDuration = dialogues[currentDialogue]?.duration || 3;
      const timer = setTimeout(() => {
        setShowJumpButton(true);
      }, finalDuration * 1000);
      return () => clearTimeout(timer);
    }
  }, [currentDialogue, showJumpButton, dialogues]);

  // Audio and video management
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
        console.log("Attempting to play plane audio...");
        audio
          .play()
          .then(() => {
            console.log("Plane audio playing successfully");
            setAudioError(null);
          })
          .catch((error) => {
            console.error("Failed to play plane audio:", error);
            setAudioError("Failed to play audio: " + error.message);
          });
      }
    };

    // Add error handler to audio element
    audio.addEventListener("error", handleAudioError);
    video.addEventListener("play", handleVideoStart);

    // Log audio element state
    console.log("Plane audio element src:", audio.src);
    console.log("Plane audio ready state:", audio.readyState);

    return () => {
      audio.removeEventListener("error", handleAudioError);
      video.removeEventListener("play", handleVideoStart);
    };
  }, [settings.soundEnabled]);

  const handleJump = () => {
    // Stop both video and audio before transitioning
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPhase("vignettes");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Video Player */}
      <video
        ref={videoRef}
        className="max-w-full max-h-full brightness-75"
        autoPlay
        muted
        playsInline
        style={{
          aspectRatio: "4/3",
          objectFit: "contain",
        }}
      >
        <source src="/video/airplane.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <audio ref={audioRef} src="/video/plane-audio.mp3" preload="auto" />

      {/* Audio error message */}
      {audioError && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-900/80 text-white px-6 py-3 border-2 border-red-600 pixelated text-sm">
          ⚠️ {audioError}
        </div>
      )}

      {/* Dialogue box */}
      <div className="absolute bottom-8 left-8 right-8 bg-black/95 border-4 border-gray-300 pixelated z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-3 border-b-2 border-gray-600">
          <div className="text-yellow-400 font-bold text-lg pixelated">
            {!showJumpButton ? dialogues[currentDialogue]?.speaker : "Narrator"}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showJumpButton ? (
            <div className="text-white text-lg leading-relaxed">
              {dialogues[currentDialogue]?.text}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-white text-xl mb-6 pixelated">
                The door opens. Wind rushes in. This is it.
              </div>
              <button
                onClick={handleJump}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-2xl font-bold border-4 border-red-800 transition-all duration-200 animate-pulse pixelated"
              >
                JUMP!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
