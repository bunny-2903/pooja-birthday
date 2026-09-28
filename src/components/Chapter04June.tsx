"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Chapter04June() {
  return (
    <section
      id="chapter-4"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#080508] via-[#3a1024]/40 to-[#080508]"
    >
      {/* Soft Warm Lighting Radial Effect */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(90,22,48,0.4)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-10"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">
          Chapter IV
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-[#fef08a] tracking-widest glow-text-gold">
          10 JUNE
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Hug Illusion Stage */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-8 py-4">
        {/* Title Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide glow-text-rose font-normal">
            Our First Hug 🤗
          </h3>
        </motion.div>

        {/* Hug Animation Stage */}
        <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden my-4">
          {/* Glowing Aura Burst when they meet */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: [0.5, 1.2, 1], opacity: [0, 0.8, 0.5] }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.8 }}
            className="absolute w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.4)_0%,transparent_70%)] blur-xl pointer-events-none"
          />

          {/* Floating Hearts Particles around the Hug */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{ y: [-10, -40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.2 }}
              className="absolute"
            >
              <Heart className="w-5 h-5 text-[#f472b6] fill-[#f472b6]" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, -35], x: [10, 25], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.7 }}
              className="absolute"
            >
              <Heart className="w-4 h-4 text-[#fef08a] fill-[#fef08a]" />
            </motion.div>
            <motion.div
              animate={{ y: [-15, -45], x: [-15, -30], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 1.2 }}
              className="absolute"
            >
              <Heart className="w-4 h-4 text-[#5a1630] fill-[#f472b6]" />
            </motion.div>
          </motion.div>

          {/* Ani moving from Left to Overlap Center */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "15%", opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute z-10"
          >
            <div className="relative w-44 h-60 sm:w-56 sm:h-76">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(90,22,48,0.7)]"
              />
            </div>
          </motion.div>

          {/* Pooja moving from Right to Overlap Center */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "-15%", opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute z-20"
          >
            <div className="relative w-44 h-60 sm:w-56 sm:h-76">
              <Image
                src="/pooh.png"
                alt="Pooja"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(244,114,182,0.7)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="max-w-md text-center space-y-3"
        >
          <p className="text-slate-300 font-serif italic text-base sm:text-lg">
            &ldquo;Some moments don&apos;t need words.&rdquo;
          </p>
          <p className="text-[#f472b6] font-serif text-lg sm:text-xl font-normal">
            &ldquo;Some moments just need a hug.&rdquo;
          </p>
          <p className="text-[#fef08a] font-serif text-lg sm:text-xl italic glow-text-gold pt-1">
            &ldquo;And I still remember this one.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
