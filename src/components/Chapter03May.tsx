"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function Chapter03May() {
  return (
    <section
      id="chapter-3"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden bg-[#080508]"
    >
      {/* Starry Night Sky Atmosphere Behind Characters */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,9,20,0.9)_0%,rgba(8,5,8,1)_100%)] pointer-events-none -z-10" />

      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-10"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>Chapter III</span>
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-widest glow-text-rose">
          22 MAY
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Main Focus Content */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Words Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-3"
        >
          <p className="text-lg sm:text-xl font-serif text-slate-300 italic">
            Three little words.
          </p>
          <h3 className="text-5xl sm:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f472b6] to-[#d4af37] tracking-widest uppercase font-light drop-shadow-[0_0_25px_rgba(244,114,182,0.5)]">
            &ldquo;I LOVE YOU.&rdquo;
          </h3>
        </motion.div>

        {/* Characters (Positioned Closer Together) */}
        <div className="relative flex flex-row items-center justify-center gap-2 sm:gap-6 my-4">
          {/* Constellation Star Background Burst */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.15)_0%,transparent_70%)] pointer-events-none blur-2xl"
          />

          {/* Ani */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_25px_rgba(90,22,48,0.8)]"
              />
            </div>
          </motion.div>

          {/* Subtle Glowing Heart Between Them */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-20 mx-[-10px]"
          >
            <div className="p-3 rounded-full bg-[#100914]/90 border border-[#f472b6]/60 shadow-[0_0_25px_rgba(244,114,182,0.8)]">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#f472b6] fill-[#f472b6] animate-pulse" />
            </div>
          </motion.div>

          {/* Pooja */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/pooh.png"
                alt="Pooja"
                fill
                className="object-contain filter drop-shadow-[0_0_25px_rgba(244,114,182,0.8)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="max-w-md text-center space-y-3 mt-2"
        >
          <p className="text-slate-300 font-serif italic text-base sm:text-lg">
            &ldquo;And suddenly, those three words had a meaning...&rdquo;
          </p>
          <p className="text-[#f472b6] font-serif text-lg sm:text-xl font-normal glow-text-rose">
            &ldquo;...because they were ours.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
