"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Flame, Star } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    date: "24 APRIL",
    title: "I Like You ❤️",
    desc: "The beginning of our spark",
    icon: Heart,
    color: "text-[#f472b6]",
    glow: "glow-text-rose",
  },
  {
    date: "22 MAY",
    title: "I Love You ❤️",
    desc: "Three words that changed everything",
    icon: Sparkles,
    color: "text-[#fef08a]",
    glow: "glow-text-gold",
  },
  {
    date: "10 JUNE",
    title: "First Hug 🤗",
    desc: "When warmth became real",
    icon: Flame,
    color: "text-[#f472b6]",
    glow: "glow-text-rose",
  },
  {
    date: "11 JULY",
    title: "Offline I Love You ❤️",
    desc: "Hearing your voice in person",
    icon: Star,
    color: "text-[#d4af37]",
    glow: "glow-text-gold",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-[#080508]"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(33,11,23,0.6)_0%,transparent_75%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">
          The Journey
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-widest glow-text-rose">
          Our Timeline
        </h2>
        <p className="text-sm sm:text-base font-serif text-slate-400 italic">
          Four sacred moments carved into eternity
        </p>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Cinematic Timeline Track */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Thin Glowing Line Connector (Vertical on mobile, horizontal on desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f472b6]/60 to-transparent -translate-y-1/2 shadow-[0_0_15px_rgba(244,114,182,0.6)]" />
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#f472b6]/60 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(244,114,182,0.6)]" />

        {/* Timeline Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
          {TIMELINE_EVENTS.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#100914]/90 backdrop-blur-md border border-[#5a1630]/40 hover:border-[#d4af37]/60 shadow-[0_0_25px_rgba(16,9,20,0.9)] hover:shadow-[0_0_35px_rgba(90,22,48,0.6)] transition-all duration-500"
              >
                {/* Illuminating Node */}
                <div className="w-12 h-12 rounded-full bg-[#210b17] border border-[#d4af37]/60 flex items-center justify-center mb-4 group-hover:scale-110 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-transform duration-300">
                  <Icon className={`w-5 h-5 ${event.color}`} />
                </div>

                {/* Date */}
                <span className={`font-serif text-sm tracking-[0.25em] text-[#d4af37] font-semibold uppercase mb-1`}>
                  {event.date}
                </span>

                {/* Title */}
                <h3 className={`font-serif text-lg sm:text-xl font-normal text-slate-100 ${event.glow} mb-2`}>
                  {event.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-slate-400 font-light leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
