"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const LOVE_CARDS = [
  { emoji: "😊", text: "Your smile" },
  { emoji: "🥹", text: "Your cute reactions" },
  { emoji: "❤️", text: "The way you talk" },
  { emoji: "😂", text: "Your little mood swings" },
  { emoji: "✨", text: "The way you make ordinary days special" },
  { emoji: "🌙", text: "The happiness you bring into my life" },
];

function LoveCard({ emoji, text, index }: { emoji: string; text: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative h-36 cursor-pointer perspective-1000"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ y: -6 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-[#100914]/90 border border-[#5a1630]/60 hover:border-[#d4af37]/60 shadow-[0_0_20px_rgba(16,9,20,0.9)] hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] flex flex-col items-center justify-center gap-2 transition-all duration-300 backface-hidden overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Floating hearts on hover */}
          <AnimatePresence>
            {flipped && (
              <motion.div
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Heart className="w-3 h-3 text-[#f472b6] fill-[#f472b6] absolute top-2 right-2 animate-pulse" />
                <Heart className="w-2 h-2 text-[#fef08a] fill-[#fef08a] absolute bottom-3 left-3 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="text-3xl">{emoji}</span>
          <p className="text-sm sm:text-base font-serif text-slate-200 text-center px-4 leading-snug">
            {text}
          </p>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">tap to flip</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3a1024] to-[#100914] border border-[#d4af37]/60 shadow-[0_0_25px_rgba(244,114,182,0.5)] flex flex-col items-center justify-center gap-2"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Heart className="w-7 h-7 text-[#f472b6] fill-[#f472b6] animate-pulse" />
          <p className="text-sm font-serif italic text-[#fef08a] text-center px-4">
            This one&apos;s about you ❤️
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LoveAboutSection() {
  return (
    <section
      id="love-about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#080508] via-[#100914] to-[#080508]"
    >
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(90,22,48,0.3)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-12 z-20"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">For Pooja</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide glow-text-rose">
          Things I Love About You ❤️
        </h2>
        <p className="text-sm text-slate-400 italic font-sans">Tap each card to flip it</p>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto" />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 max-w-2xl w-full z-20">
        {LOVE_CARDS.map((card, i) => (
          <LoveCard key={card.text} emoji={card.emoji} text={card.text} index={i} />
        ))}
      </div>

      {/* Final Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-12 text-center space-y-4 z-20 max-w-md"
      >
        <p className="text-lg sm:text-xl font-serif text-slate-300 italic">
          And honestly...
        </p>
        <h3 className="text-5xl sm:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f472b6] to-[#d4af37] glow-text-rose drop-shadow-[0_0_30px_rgba(244,114,182,0.5)]">
          YOU. ❤️
        </h3>
      </motion.div>
    </section>
  );
}
