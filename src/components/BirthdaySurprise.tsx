"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function BirthdaySurprise() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // We trigger the sequence when scrolled into view — handled by whileInView;
    // but for text, we use stepped local timers when component mounts in view.
    // We'll let scroll-trigger start it via a custom mechanism.
  }, []);

  const startSequence = () => {
    if (step > 0) return;
    setStep(1);
    setTimeout(() => setStep(2), 1600);
    setTimeout(() => setStep(3), 3200);
    setTimeout(() => setStep(4), 5000);
    setTimeout(() => setStep(5), 6800);
    setTimeout(() => setStep(6), 8400);
    setTimeout(() => setStep(7), 10200);
    setTimeout(() => setStep(8), 12000);
  };

  return (
    <section
      id="birthday-surprise"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-[#040204]"
    >
      {/* Watch for section entering viewport to auto-start */}
      <motion.div
        onViewportEnter={startSequence}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 min-h-[500px] justify-center">
        {/* Step 1 */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.p
              key="s1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-3xl font-serif text-slate-300 italic"
            >
              Okay Pooja...
            </motion.p>
          )}
        </AnimatePresence>

        {step >= 2 && (
          <motion.p
            key="s2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl sm:text-2xl font-serif text-slate-400 italic"
          >
            I think that&apos;s everything. ❤️
          </motion.p>
        )}

        {step >= 3 && (
          <motion.p
            key="s3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl sm:text-2xl font-serif text-[#f472b6] glow-text-rose"
          >
            Wait...
          </motion.p>
        )}

        {step >= 4 && (
          <motion.p
            key="s4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl font-serif text-slate-400 italic"
          >
            I forgot something. 👀
          </motion.p>
        )}

        {step >= 5 && (
          <motion.div
            key="s5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl"
          >
            ❤️
          </motion.div>
        )}

        {step >= 6 && (
          <motion.div
            key="s6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-2"
          >
            <p className="text-lg sm:text-xl font-serif text-slate-300 italic">
              You&apos;re getting older...
            </p>
            <p className="text-lg sm:text-xl font-serif text-slate-400 italic">
              But unfortunately...
            </p>
          </motion.div>
        )}

        {step >= 7 && (
          <motion.div
            key="s7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-52 sm:w-52 sm:h-72">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl font-serif text-[#fef08a] glow-text-gold mt-3"
            >
              ...you&apos;re still stuck with me. 😂❤️
            </motion.p>
          </motion.div>
        )}

        {step >= 8 && (
          <motion.div
            key="s8"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pt-4 space-y-2"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f472b6] to-[#d4af37] glow-text-rose tracking-wide">
              HAPPY BIRTHDAY, POOJA! 🎂❤️
            </h2>
            <Sparkles className="w-6 h-6 text-[#d4af37] mx-auto animate-spin" style={{ animationDuration: "3s" }} />
          </motion.div>
        )}

        {/* Trigger button if not auto-started (fallback) */}
        {step === 0 && (
          <button
            onClick={startSequence}
            className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-300 border border-slate-700/50 rounded-full px-4 py-2 transition-colors"
          >
            Start Surprise →
          </button>
        )}
      </div>
    </section>
  );
}
