"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function FinalChapter() {
  return (
    <section
      id="final-chapter"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden bg-[#040204]"
    >
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-10 z-20">
        {/* Characters together */}
        <div className="relative flex flex-row items-center justify-center gap-2 sm:gap-6 my-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/ani.png"
                alt="Ani"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(90,22,48,0.9)]"
              />
            </div>
          </motion.div>

          {/* Glowing heart between */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="relative z-20 mx-[-10px]"
          >
            <div className="p-3 rounded-full bg-[#100914] border border-[#f472b6]/70 shadow-[0_0_30px_rgba(244,114,182,0.9)] animate-pulse">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#f472b6] fill-[#f472b6]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-36 h-48 sm:w-52 sm:h-72">
              <Image
                src="/pooh.png"
                alt="Pooja"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(244,114,182,0.9)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Slow text sequence */}
        <div className="space-y-4 text-center font-serif max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            Every story has a beginning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="text-slate-300 font-light text-base sm:text-lg"
          >
            Some stories have beautiful chapters.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="text-[#f472b6] italic text-lg sm:text-xl"
          >
            But the best stories...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 2.6 }}
            className="text-slate-100 font-normal text-xl sm:text-2xl italic glow-text-rose"
          >
            ...don&apos;t have an ending.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 3.4 }}
            className="text-[#fef08a] font-medium text-xl sm:text-2xl pt-2 glow-text-gold"
          >
            And I&apos;m so happy this one has you in it. ❤️
          </motion.p>
        </div>
      </div>
    </section>
  );
}
