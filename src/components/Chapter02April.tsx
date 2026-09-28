"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Chapter02April() {
  return (
    <section
      id="chapter-2"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#080508] via-[#210b17] to-[#080508]"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(58,16,36,0.5)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Chapter Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-10"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">
          Chapter II
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-[#fef08a] tracking-widest glow-text-gold">
          24 APRIL
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Central Visual Focus */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 py-6">
        {/* Main "I LIKE YOU" Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <p className="text-lg sm:text-xl font-serif text-slate-300 tracking-wide">
            The day I first said...
          </p>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f472b6] tracking-wider glow-text-rose font-normal uppercase py-2">
            &ldquo;I LIKE YOU.&rdquo;
          </h3>
        </motion.div>

        {/* Characters with Animated Movement & Center Glowing Heart */}
        <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20 my-6">
          {/* Ani moves slightly toward Pooja */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(90,22,48,0.7)]"
              />
            </div>
            <span className="mt-2 text-xs font-serif tracking-widest text-slate-400">
              Ani
            </span>
          </motion.div>

          {/* Central Pulsing Glowing Heart */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0.8, 1.2, 1], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center z-20"
          >
            <div className="p-4 rounded-full bg-[#3a1024]/80 border border-[#f472b6]/50 shadow-[0_0_30px_rgba(244,114,182,0.8)]">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-[#f472b6] fill-[#f472b6] animate-pulse" />
            </div>

            {/* Orbiting Tiny Hearts */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full pointer-events-none"
            >
              <Heart className="w-3 h-3 text-[#fef08a] fill-[#fef08a] absolute top-0 left-1/2 -translate-x-1/2 opacity-80" />
              <Heart className="w-3 h-3 text-[#f472b6] fill-[#f472b6] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-80" />
            </motion.div>
          </motion.div>

          {/* Pooja */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
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
            <span className="mt-2 text-xs font-serif tracking-widest text-slate-400">
              Pooja
            </span>
          </motion.div>
        </div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="max-w-md text-center space-y-3 mt-4"
        >
          <p className="text-slate-300 font-serif italic text-base sm:text-lg">
            &ldquo;Maybe it was only a few words...&rdquo;
          </p>
          <p className="text-[#fef08a] font-serif text-lg sm:text-xl font-light">
            &ldquo;...but it became the beginning of everything.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
