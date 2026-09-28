"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles, ChevronDown } from "lucide-react";

export default function IntroScreen({ onEnter }: { onEnter?: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step timeline:
    // 0: Dark screen
    // 1: Heart appears
    // 2: "WAIT... 👀"
    // 3: "TODAY IS A VERY SPECIAL DAY."
    // 4: "IT'S POOJA'S DAY ❤️"
    // 5: Birthday reveal + characters + button
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3800),
      setTimeout(() => setStep(4), 5800),
      setTimeout(() => setStep(5), 7800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStart = () => {
    if (onEnter) onEnter();
    else {
      document.getElementById("chapter-1")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden z-10 select-none bg-[#080508]"
    >
      {/* Radial glow */}
      <div className="absolute w-96 h-96 bg-[radial-gradient(circle,rgba(90,22,48,0.35)_0%,transparent_70%)] pointer-events-none blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8 min-h-[450px] justify-center">
        {/* Step 1 — Heart */}
        {step >= 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Heart className="w-8 h-8 text-[#f472b6] fill-[#5a1630] filter drop-shadow-[0_0_15px_rgba(244,114,182,0.8)] animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 w-8 h-8 bg-[#f472b6] rounded-full blur-md -z-10"
            />
          </motion.div>
        )}

        {/* Text Sequence */}
        <div className="space-y-5 font-serif min-h-[140px] flex flex-col items-center justify-center">
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-3xl text-slate-300 font-light tracking-wide"
            >
              WAIT... 👀
            </motion.p>
          )}
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg sm:text-xl font-serif text-slate-400 italic"
            >
              Today is a very special day.
            </motion.p>
          )}
          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
              className="text-2xl sm:text-3xl font-serif text-[#f472b6] font-normal glow-text-rose"
            >
              It&apos;s Pooja&apos;s Day ❤️
            </motion.p>
          )}
        </div>

        {/* Step 5 — Full reveal */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 pt-4 w-full"
          >
            {/* Characters */}
            <div className="relative flex flex-row items-end justify-center gap-4 sm:gap-8">
              {/* Ani with cake hint glow */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-28 h-36 sm:w-36 sm:h-48">
                  <Image
                    src="/ani.png"
                    alt="Ani"
                    fill
                    className="object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    priority
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Ani</span>
              </motion.div>

              {/* Birthday cake icon between them */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col items-center gap-1 pb-2"
              >
                <span className="text-4xl sm:text-5xl filter drop-shadow-[0_0_15px_rgba(244,114,182,0.7)]">🎂</span>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="text-xs text-[#fef08a] font-serif tracking-widest"
                >
                  ✦ ✦ ✦
                </motion.div>
              </motion.div>

              {/* Pooja */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-28 h-36 sm:w-36 sm:h-48">
                  <Image
                    src="/pooh.png"
                    alt="Pooja"
                    fill
                    className="object-contain filter drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]"
                    priority
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Pooja</span>
              </motion.div>
            </div>

            {/* Big Birthday Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f472b6] to-[#d4af37] drop-shadow-[0_0_25px_rgba(244,114,182,0.4)]">
                🎂 Happy Birthday, Pooja ❤️
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-slate-400 font-sans flex items-center justify-center gap-2">
                A little world made by Ani, just for you
              </p>
            </div>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(244,114,182,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStart}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#210b17] via-[#3a1024] to-[#5a1630] border border-[#d4af37]/40 text-slate-100 font-serif text-lg tracking-widest shadow-[0_0_20px_rgba(90,22,48,0.5)] transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Enter Our Story</span>
              <ChevronDown className="w-5 h-5 text-[#f472b6] group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {step < 5 && (
        <button
          onClick={() => setStep(5)}
          className="absolute bottom-8 text-xs tracking-widest text-slate-500 hover:text-slate-300 transition-colors uppercase"
        >
          Skip Intro →
        </button>
      )}
    </section>
  );
}
