"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Chapter01Beginning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Characters move towards each other as user scrolls
  const aniX = useTransform(scrollYProgress, [0.1, 0.6], ["-35%", "0%"]);
  const poohX = useTransform(scrollYProgress, [0.1, 0.6], ["35%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      id="chapter-1"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden"
    >
      {/* Chapter Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="text-center space-y-3 mb-12 z-20"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">
          Chapter I
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide glow-text-rose">
          The Beginning
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Characters Stage */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-8 z-20">
        {/* Ani Character */}
        <motion.div
          style={{ x: aniX, opacity }}
          className="relative flex flex-col items-center group"
        >
          <div className="relative w-48 h-64 sm:w-60 sm:h-80 drop-shadow-[0_10px_25px_rgba(16,9,20,0.8)] transition-transform duration-500 hover:scale-105">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#3a1024]/60 to-transparent blur-xl -z-10 group-hover:from-[#5a1630]/80 transition-all duration-500" />
            <Image
              src="/ani.png"
              alt="Ani"
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(90,22,48,0.5)]"
              priority
            />
          </div>
          <span className="mt-4 font-serif text-sm tracking-widest text-slate-400 group-hover:text-[#f472b6] transition-colors">
            Ani
          </span>
        </motion.div>

        {/* Center Connecting Aura / Heart Icon */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center justify-center my-4 md:my-0"
        >
          <div className="w-12 h-12 rounded-full bg-[#100914]/80 border border-[#5a1630] flex items-center justify-center shadow-[0_0_20px_rgba(244,114,182,0.3)]">
            <span className="text-xl text-[#f472b6] font-serif italic">∞</span>
          </div>
        </motion.div>

        {/* Pooja Character */}
        <motion.div
          style={{ x: poohX, opacity }}
          className="relative flex flex-col items-center group"
        >
          <div className="relative w-48 h-64 sm:w-60 sm:h-80 drop-shadow-[0_10px_25px_rgba(16,9,20,0.8)] transition-transform duration-500 hover:scale-105">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#3a1024]/60 to-transparent blur-xl -z-10 group-hover:from-[#5a1630]/80 transition-all duration-500" />
            <Image
              src="/pooh.png"
              alt="Pooja"
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(244,114,182,0.4)]"
              priority
            />
          </div>
          <span className="mt-4 font-serif text-sm tracking-widest text-slate-400 group-hover:text-[#f472b6] transition-colors">
            Pooja
          </span>
        </motion.div>
      </div>

      {/* Narrative Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="max-w-xl text-center space-y-4 mt-8 z-20"
      >
        <p className="text-lg sm:text-xl font-serif text-slate-300 font-light italic leading-relaxed">
          &ldquo;I didn&apos;t know it then...&rdquo;
        </p>
        <p className="text-xl sm:text-2xl font-serif text-[#f472b6] font-normal glow-text-rose leading-relaxed">
          &ldquo;...but meeting you was going to change my story.&rdquo;
        </p>
        <div className="pt-4">
          <span className="px-5 py-2 rounded-full bg-[#100914]/90 border border-[#5a1630]/60 text-xs tracking-[0.25em] uppercase text-[#d4af37] font-serif shadow-lg">
            Ani met Pooja
          </span>
        </div>
      </motion.div>
    </section>
  );
}
