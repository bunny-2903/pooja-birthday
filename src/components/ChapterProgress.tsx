"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHAPTERS = [
  { id: "intro",         label: "Beginning",       roman: "00" },
  { id: "chapter-1",    label: "How We Started",   roman: "01" },
  { id: "chapter-2",    label: "24 April",         roman: "02" },
  { id: "chapter-3",    label: "22 May",           roman: "03" },
  { id: "chapter-4",    label: "10 June",          roman: "04" },
  { id: "chapter-5",    label: "11 July",          roman: "05" },
  { id: "fun-section",  label: "Little Things",    roman: "06" },
  { id: "timeline",     label: "Our Timeline",     roman: "07" },
  { id: "love-about",   label: "About You",        roman: "08" },
  { id: "quiz",         label: "Quiz",             roman: "09" },
  { id: "birthday-surprise", label: "Birthday",   roman: "10" },
  { id: "letter",       label: "Letter",           roman: "11" },
  { id: "final-screen", label: "Happy Birthday",   roman: "∞" },
];

export default function ChapterProgress() {
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(ch.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Chapter Progress"
      className="fixed right-3 md:right-7 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 pointer-events-auto"
    >
      {CHAPTERS.map((ch) => {
        const isActive = activeId === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            title={`${ch.roman}: ${ch.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-8 px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest text-slate-200 bg-[#1c0b17]/90 backdrop-blur-md border border-[#5a1630]/40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
              {ch.roman}. {ch.label}
            </span>

            <motion.div
              animate={{ scale: isActive ? 1.25 : 1, opacity: isActive ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-serif transition-colors duration-300 ${
                isActive
                  ? "bg-[#5a1630] text-[#fef08a] border border-[#d4af37]/60 shadow-[0_0_12px_rgba(244,114,182,0.6)]"
                  : "bg-[#100914]/80 text-slate-400 border border-slate-700/50 hover:border-slate-400"
              }`}
            >
              {ch.roman}
            </motion.div>
          </button>
        );
      })}
    </nav>
  );
}
