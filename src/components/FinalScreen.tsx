"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

export default function FinalScreen() {
  const [wishMade, setWishMade] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const launchCelebration = () => {
    setCelebrating(true);
    const defaults = {
      colors: ["#f472b6", "#d4af37", "#fef08a", "#5a1630", "#ffffff"],
    };
    function fire(ratio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(150 * ratio) });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60, origin: { y: 0.7 } });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, origin: { y: 0.65 } });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45, origin: { x: 0.3, y: 0.6 } });
    fire(0.1, { spread: 120, startVelocity: 45, origin: { x: 0.7, y: 0.6 } });
  };

  return (
    <section
      id="final-screen"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#100914] via-[#210b17] to-[#080508]"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,114,182,0.25)_0%,rgba(90,22,48,0.4)_50%,transparent_75%)] pointer-events-none blur-3xl -z-10" />

      {/* "Make a Wish" Moment — shown first */}
      <AnimatePresence>
        {!wishMade && (
          <motion.div
            key="wish"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-xl mx-auto flex flex-col items-center text-center space-y-8 py-12 px-4"
          >
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-xl sm:text-2xl font-serif text-slate-300 italic"
              >
                Before you leave...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 1 }}
                className="text-lg sm:text-xl font-serif text-slate-400 italic"
              >
                Close your eyes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="text-2xl sm:text-3xl font-serif text-[#fef08a] glow-text-gold"
              >
                Make a wish. ✨
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(244,114,182,0.5)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setWishMade(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#210b17] via-[#3a1024] to-[#5a1630] border border-[#d4af37]/40 text-slate-100 font-serif text-base tracking-widest shadow-[0_0_20px_rgba(90,22,48,0.5)]"
            >
              <span>I made my wish ✨</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration Final Screen */}
      <AnimatePresence>
        {wishMade && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8"
          >
            {/* "Now make it happen" message */}
            {!celebrating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="space-y-3 mb-4"
              >
                <p className="text-lg sm:text-xl font-serif text-slate-300 italic">Okay...</p>
                <p className="text-2xl sm:text-3xl font-serif text-[#f472b6] glow-text-rose italic">
                  Now make it happen. ❤️
                </p>
              </motion.div>
            )}

            {/* Characters */}
            <div className="relative flex flex-row items-end justify-center gap-4 sm:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-36 h-48 sm:w-52 sm:h-72">
                  <Image
                    src="/ani.png"
                    alt="Ani"
                    fill
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                  />
                </div>
              </motion.div>

              {/* Cake + hearts between characters */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col items-center gap-2 pb-4"
              >
                <span className="text-4xl sm:text-5xl">🎂</span>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  <Heart className="w-5 h-5 text-[#f472b6] fill-[#f472b6]" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-36 h-48 sm:w-52 sm:h-72">
                  <Image
                    src="/pooh.png"
                    alt="Pooja"
                    fill
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(244,114,182,0.6)]"
                  />
                </div>
              </motion.div>
            </div>

            {/* Birthday Main Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full p-8 sm:p-12 rounded-3xl bg-[#100914]/90 backdrop-blur-xl border border-[#5a1630] shadow-[0_0_60px_rgba(90,22,48,0.7)] space-y-6"
            >
              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f472b6] to-[#d4af37] tracking-wide">
                HAPPY BIRTHDAY, POOJA ❤️
              </h1>

              <p className="text-base sm:text-lg font-serif text-slate-300 italic">
                Thank you for becoming such a beautiful part of my story.
              </p>

              <p className="text-base sm:text-lg font-serif text-[#f472b6] italic glow-text-rose leading-relaxed">
                Here&apos;s to all the laughs,<br />
                all the little moments,<br />
                and all the beautiful memories still waiting for us. ❤️
              </p>

              {/* Celebrate Button */}
              {!celebrating && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={launchCelebration}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#5a1630] to-[#3a1024] border-2 border-[#d4af37] text-white font-serif text-lg tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                >
                  <Sparkles className="w-5 h-5 text-[#fef08a]" />
                  <span>Celebrate! 🎂</span>
                </motion.button>
              )}

              {celebrating && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-xl sm:text-2xl font-serif text-[#fef08a] glow-text-gold">
                    🎉 Happy Birthday, Pooja! 🎉
                  </p>
                </motion.div>
              )}

              {/* Signature */}
              <div className="pt-4 space-y-1">
                <p className="text-base sm:text-lg font-handwriting text-slate-300">
                  With all my love,
                </p>
                <p className="text-xl sm:text-2xl font-serif text-[#d4af37] glow-text-gold">
                  Ani ❤️
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
