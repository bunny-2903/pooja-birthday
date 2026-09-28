"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Chapter05July() {
  return (
    <section
      id="chapter-5"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden bg-gradient-to-b from-[#080508] via-[#210b17] to-[#100914]"
    >
      {/* Dark Sunset Romantic Ambient Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(90,22,48,0.6)_0%,transparent_70%)] pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-10"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Chapter V</span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-widest glow-text-rose">
          11 JULY
        </h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Main Content */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Intro Text Sequence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-3"
        >
          <p className="text-lg sm:text-xl font-serif text-slate-300 italic">
            This time...
          </p>
          <p className="text-xl sm:text-2xl font-serif text-[#f472b6] italic">
            ...it wasn&apos;t just a screen.
          </p>
          <h3 className="text-3xl sm:text-5xl font-serif text-[#fef08a] tracking-wider glow-text-gold pt-2 uppercase">
            Our Offline &ldquo;I Love You.&rdquo;
          </h3>
        </motion.div>

        {/* Real-world Evening Silhouette Atmosphere with Ani & Pooja */}
        <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-10 my-6 py-4 px-8 rounded-3xl bg-[#100914]/60 backdrop-blur-md border border-[#5a1630]/40 shadow-[0_0_40px_rgba(33,11,23,0.8)]">
          {/* Sunset Silhouette Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#5a1630]/30 via-transparent to-transparent pointer-events-none" />

          {/* Ani */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              />
            </div>
            <span className="mt-2 text-xs font-serif tracking-widest text-slate-400">
              Ani
            </span>
          </motion.div>

          {/* Connecting Sunset Glowing Symbol */}
          <div className="flex flex-col items-center justify-center text-center z-10 px-2">
            <span className="text-2xl sm:text-3xl text-[#d4af37] font-serif">❤️</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans mt-1">In Person</span>
          </div>

          {/* Pooja */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/pooh.png"
                alt="Pooja"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(244,114,182,0.5)]"
              />
            </div>
            <span className="mt-2 text-xs font-serif tracking-widest text-slate-400">
              Pooja
            </span>
          </motion.div>
        </div>

        {/* Emotional Ending Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="max-w-md text-center space-y-3"
        >
          <p className="text-slate-300 font-serif italic text-base sm:text-lg">
            &ldquo;The words were the same...&rdquo;
          </p>
          <p className="text-slate-300 font-serif italic text-base sm:text-lg">
            &ldquo;But hearing them in person...&rdquo;
          </p>
          <p className="text-[#f472b6] font-serif text-xl sm:text-2xl font-normal glow-text-rose pt-1">
            &ldquo;...made everything feel different.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
