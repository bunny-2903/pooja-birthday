"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function UniverseSection() {
  return (
    <section
      id="universe"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-[#080508]"
    >
      {/* Deep Space Background with Constellations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,11,23,0.8)_0%,rgba(8,5,8,1)_90%)] pointer-events-none -z-10" />

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
          <span>Our Constellation</span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-widest glow-text-gold">
          Our Little Universe
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Universe Sky Container */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Sky Constellation Map */}
        <div className="relative w-full h-[280px] sm:h-[340px] max-w-xl mx-auto flex items-center justify-center">
          {/* SVG Constellation Lines connecting 4 stars into Heart Shape */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
            {/* Pulsing Constellation Heart Path */}
            <motion.path
              d="M 150 180 C 150 100, 80 80, 80 140 C 80 200, 250 280, 250 280 C 250 280, 420 200, 420 140 C 420 80, 350 100, 350 180 Z"
              fill="none"
              stroke="rgba(244, 114, 182, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* 4 Date Stars */}
          {/* Star 1: 24 April */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-[25%] left-[15%] sm:left-[20%] flex flex-col items-center z-20"
          >
            <div className="w-4 h-4 rounded-full bg-[#fef08a] shadow-[0_0_15px_#fef08a] animate-pulse" />
            <span className="mt-2 text-[11px] font-serif tracking-widest text-[#fef08a] whitespace-nowrap glow-text-gold">
              24 APRIL
            </span>
          </motion.div>

          {/* Star 2: 22 May */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[15%] right-[15%] sm:right-[20%] flex flex-col items-center z-20"
          >
            <div className="w-4 h-4 rounded-full bg-[#f472b6] shadow-[0_0_15px_#f472b6] animate-pulse" />
            <span className="mt-2 text-[11px] font-serif tracking-widest text-[#f472b6] whitespace-nowrap glow-text-rose">
              22 MAY
            </span>
          </motion.div>

          {/* Star 3: 10 June */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-[25%] left-[25%] sm:left-[28%] flex flex-col items-center z-20"
          >
            <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_15px_#d4af37] animate-pulse" />
            <span className="mt-2 text-[11px] font-serif tracking-widest text-[#d4af37] whitespace-nowrap glow-text-gold">
              10 JUNE
            </span>
          </motion.div>

          {/* Star 4: 11 July */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-[25%] right-[25%] sm:right-[28%] flex flex-col items-center z-20"
          >
            <div className="w-4 h-4 rounded-full bg-[#f472b6] shadow-[0_0_15px_#f472b6] animate-pulse" />
            <span className="mt-2 text-[11px] font-serif tracking-widest text-[#f472b6] whitespace-nowrap glow-text-rose">
              11 JULY
            </span>
          </motion.div>
        </div>

        {/* Ani & Pooja Beneath Starry Sky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative flex flex-row items-center justify-center gap-6 mt-2 z-20"
        >
          <div className="relative w-32 h-44 sm:w-44 sm:h-60">
            <Image
              src="/ani.png"
              alt="Ani"
              fill
              className="object-contain filter drop-shadow-[0_0_20px_rgba(90,22,48,0.8)]"
            />
          </div>
          <div className="relative w-32 h-44 sm:w-44 sm:h-60">
            <Image
              src="/pooh.png"
              alt="Pooja"
              fill
              className="object-contain filter drop-shadow-[0_0_20px_rgba(244,114,182,0.8)]"
            />
          </div>
        </motion.div>

        {/* Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="max-w-md text-center space-y-3 mt-8 z-20"
        >
          <div className="flex items-center justify-center gap-4 text-xs font-serif tracking-[0.3em] uppercase text-[#d4af37]">
            <span>Four dates</span>
            <span>•</span>
            <span>Four memories</span>
            <span>•</span>
            <span>One story</span>
          </div>

          <p className="text-slate-300 font-serif italic text-base sm:text-lg pt-2">
            &ldquo;And somehow...&rdquo;
          </p>
          <p className="text-xl sm:text-2xl font-serif text-[#f472b6] font-normal glow-text-rose">
            &ldquo;...I still want a million more chapters.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
