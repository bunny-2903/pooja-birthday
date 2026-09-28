"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isSetupRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRomanticSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Ethereal ambient chord frequencies (C major 7th / F maj9 romantic ambient pad)
      const chords = [
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [220.0, 261.63, 329.63, 392.0],  // Am7
        [174.61, 220.0, 261.63, 349.23], // Fmaj7
        [196.0, 246.94, 293.66, 392.0],  // G
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (!ctx || ctx.state !== "running") return;

        const currentNotes = chords[chordIdx];
        chordIdx = (chordIdx + 1) % chords.length;

        currentNotes.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Soft attack and decay
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2.5);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 6.5);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 7.0);
        });
      };

      playChord();
      timerRef.current = setInterval(playChord, 6000);
      isSetupRef.current = true;
    } catch (e) {
      console.warn("Audio synthesis unavailable:", e);
    }
  };

  const stopMusic = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startRomanticSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-[#100914]/80 backdrop-blur-md border border-[#5a1630]/50 text-xs font-serif text-slate-200 hover:text-white hover:border-[#d4af37]/60 shadow-[0_0_15px_rgba(90,22,48,0.4)] transition-all duration-300 group"
      title={isPlaying ? "Mute Ambient Soundtrack" : "Play Romantic Soundtrack"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#f472b6] animate-pulse" />
          <span className="hidden sm:inline text-[#fef08a] glow-text-gold">Atmosphere On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-[#f472b6]" />
          <span className="hidden sm:inline text-slate-300">Romantic Sound</span>
        </>
      )}
      <Sparkles className="w-3 h-3 text-[#d4af37] opacity-60" />
    </button>
  );
}
