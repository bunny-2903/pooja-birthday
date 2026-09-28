"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const FUN_CARDS = [
  {
    id: "card-1",
    lines: [
      { text: "Me:", style: "text-[#d4af37] font-serif text-lg sm:text-xl" },
      { text: '"I\'ll sleep early today."', style: "text-slate-200 font-handwriting text-xl sm:text-2xl italic" },
    ],
    revealLines: [
      { text: "Also me at 2 AM:", style: "text-[#f472b6] font-serif text-base sm:text-lg" },
      { text: "Still talking to Pooja. 🌙😂", style: "text-slate-100 font-handwriting text-lg sm:text-xl italic" },
    ],
    character: "ani",
  },
  {
    id: "card-2",
    lines: [
      { text: "Pooja:", style: "text-[#f472b6] font-serif text-lg sm:text-xl" },
      { text: '"I\'m not angry."', style: "text-slate-200 font-handwriting text-xl sm:text-2xl italic" },
    ],
    revealLines: [
      { text: "Ani:", style: "text-[#d4af37] font-serif text-base" },
      { text: "😰", style: "text-3xl" },
      { text: "⚠️ DANGER DETECTED", style: "text-red-400 font-sans text-xs uppercase tracking-widest font-bold" },
    ],
    character: "pooja",
  },
  {
    id: "card-3",
    lines: [
      { text: "Me:", style: "text-[#d4af37] font-serif text-lg sm:text-xl" },
      { text: '"I have nothing to say."', style: "text-slate-200 font-handwriting text-xl sm:text-2xl italic" },
    ],
    revealLines: [
      { text: "Pooja starts talking...", style: "text-[#f472b6] font-serif text-base italic" },
      { text: "Me: I could listen to this forever. ❤️", style: "text-[#fef08a] font-handwriting text-lg sm:text-xl italic" },
    ],
    character: "ani",
  },
  {
    id: "card-4",
    lines: [
      { text: "Relationship status:", style: "text-[#d4af37] font-serif text-sm uppercase tracking-widest" },
      { text: "Still annoying each other... 😂", style: "text-slate-300 font-serif text-base sm:text-lg" },
    ],
    revealLines: [
      { text: "Still choosing each other...", style: "text-[#f472b6] font-serif text-base sm:text-lg italic" },
      { text: "Still making each other smile. ❤️", style: "text-[#fef08a] font-handwriting text-xl sm:text-2xl" },
    ],
    character: "both",
  },
];

function FunCard({ card, index }: { card: typeof FUN_CARDS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative p-6 sm:p-8 rounded-2xl bg-[#100914]/90 backdrop-blur-md border border-[#5a1630]/50 hover:border-[#d4af37]/50 shadow-[0_0_25px_rgba(16,9,20,0.8)] hover:shadow-[0_0_35px_rgba(90,22,48,0.5)] transition-all duration-500 flex flex-col gap-4 overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-3 right-3 text-[#d4af37]/30 text-xs">✦</div>

      {/* Character mini icon */}
      <div className="flex items-center gap-2 mb-1">
        {card.character === "both" ? (
          <div className="flex items-center gap-1">
            <div className="relative w-8 h-8">
              <Image src="/ani.png" alt="Ani" fill className="object-contain" />
            </div>
            <Heart className="w-3 h-3 text-[#f472b6] fill-[#f472b6]" />
            <div className="relative w-8 h-8">
              <Image src="/pooh.png" alt="Pooja" fill className="object-contain" />
            </div>
          </div>
        ) : (
          <div className="relative w-8 h-8">
            <Image
              src={card.character === "ani" ? "/ani.png" : "/pooh.png"}
              alt={card.character === "ani" ? "Ani" : "Pooja"}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Initial lines */}
      <div className="space-y-1">
        {card.lines.map((line, i) => (
          <p key={i} className={line.style}>
            {line.text}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent my-1" />

      {/* Reveal lines (always visible, but highlighted) */}
      <div className="space-y-1.5">
        {card.revealLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 + i * 0.15 }}
            className={line.style}
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default function FunSection() {
  return (
    <section
      id="fun-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-[#080508]"
    >
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(33,11,23,0.5)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-4 mb-14 z-20"
      >
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide">
          Okay... Enough Romance
        </h2>
        <p className="text-xl sm:text-2xl text-[#f472b6] font-serif italic glow-text-rose">
          for a second 😂
        </p>
        <p className="text-sm sm:text-base text-slate-400 font-sans italic mt-3 max-w-md mx-auto">
          Let&apos;s talk about the little things that make us... <span className="text-[#d4af37]">us.</span>
        </p>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto" />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl w-full z-20">
        {FUN_CARDS.map((card, i) => (
          <FunCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
