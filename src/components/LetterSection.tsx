"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Heart } from "lucide-react";

const LETTER_LINES = [
  { text: "Dear Pooja ❤️,", style: "serif-header" },
  { text: "", style: "gap" },
  { text: "Happy Birthday to the most special person in my life. 🎂❤️", style: "highlight" },
  { text: "", style: "gap" },
  { text: "Sometimes I think about how a few simple moments can turn into memories that stay with you forever.", style: "normal" },
  { text: "When I look back at everything we've shared, I realize how special our little story has become to me.", style: "normal" },
  { text: "", style: "gap" },
  { text: "From the moment you came into my life, you slowly became someone I genuinely care about.", style: "normal" },
  { text: "The laughs, the conversations, the silly moments, the little things,", style: "normal" },
  { text: "and even the moments when we annoy each other —", style: "normal" },
  { text: "somehow, all of them have become memories that I wouldn't want to replace.", style: "normal" },
  { text: "", style: "gap" },
  { text: "You have brought a kind of happiness into my life that is difficult to put into words.", style: "normal" },
  { text: "And on your birthday, I just want you to know how grateful I am", style: "normal" },
  { text: "that I got to meet you and become a part of your life.", style: "normal" },
  { text: "", style: "gap" },
  { text: "I hope this birthday brings you a lot of happiness, beautiful moments,", style: "normal" },
  { text: "and everything your heart wishes for.", style: "normal" },
  { text: "", style: "gap" },
  { text: "And I hope we get to make many more memories together —", style: "normal" },
  { text: "more laughs, more late-night conversations, more hugs, more crazy moments,", style: "normal" },
  { text: "and many more birthdays to celebrate. ❤️", style: "normal" },
  { text: "", style: "gap" },
  { text: "You are genuinely very special to me, Pooja.", style: "highlight" },
  { text: "", style: "gap" },
  { text: "So today, forget everything else for a moment and just smile.", style: "normal" },
  { text: "", style: "gap" },
  { text: "Because today is your day. 🎂❤️", style: "highlight" },
  { text: "", style: "gap" },
  { text: "Happy Birthday, Pooja.", style: "normal" },
  { text: "", style: "gap" },
  { text: "I love you. ❤️", style: "highlight" },
  { text: "", style: "gap" },
  { text: "With all my love,", style: "normal" },
  { text: "Ani ❤️", style: "signature" },
];

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="letter"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#080508] via-[#100914] to-[#080508]"
    >
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(58,16,36,0.4)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-10 z-20"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>From My Heart</span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide glow-text-rose max-w-xl mx-auto leading-tight">
          A Birthday Letter
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto mt-2" />
      </motion.div>

      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center z-20">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative w-full max-w-md p-8 rounded-3xl bg-[#1c0b17] border border-[#5a1630]/80 shadow-[0_0_40px_rgba(90,22,48,0.5)] flex flex-col items-center text-center gap-6 cursor-pointer hover:border-[#d4af37]/60 transition-all duration-500"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5a1630] to-[#210b17] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-[#f472b6] fill-[#f472b6]" />
            </div>
            <div className="space-y-1">
              <p className="font-serif text-lg text-slate-200">For Pooja</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Written by Ani</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3a1024] to-[#5a1630] border border-[#d4af37]/40 text-slate-100 font-serif text-sm tracking-widest shadow-lg"
            >
              <Mail className="w-4 h-4 text-[#fef08a]" />
              <span>Open Letter</span>
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full p-8 sm:p-12 rounded-3xl bg-[#100914]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_0_50px_rgba(90,22,48,0.7)] text-slate-200 leading-relaxed max-h-[80vh] overflow-y-auto"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-4 left-4 text-[#d4af37]/40 font-serif text-xs">✦</div>
              <div className="absolute top-4 right-4 text-[#d4af37]/40 font-serif text-xs">✦</div>

              <div className="space-y-1.5">
                {LETTER_LINES.map((line, i) => {
                  if (line.style === "gap") return <div key={i} className="h-3" />;
                  return (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className={
                        line.style === "serif-header"
                          ? "font-serif text-2xl sm:text-3xl text-[#fef08a] glow-text-gold font-normal"
                          : line.style === "signature"
                          ? "font-serif text-right text-2xl sm:text-3xl text-[#f472b6] glow-text-rose pt-4"
                          : line.style === "date"
                          ? "font-serif text-[#d4af37] tracking-wider text-base sm:text-lg font-semibold pl-4"
                          : line.style === "highlight"
                          ? "font-serif text-lg sm:text-xl text-[#f472b6] italic glow-text-rose"
                          : "font-handwriting text-lg sm:text-xl text-slate-200"
                      }
                    >
                      {line.text}
                    </motion.p>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-widest text-slate-400 hover:text-[#f472b6] transition-colors"
                >
                  Close Letter ✕
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
