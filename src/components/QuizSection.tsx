"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle, XCircle } from "lucide-react";

const QUESTIONS = [
  {
    id: "q1",
    question: "When did Ani first say \"I like you\"?",
    options: ["15 March", "24 April", "1 May", "10 June"],
    correct: 1,
    correctLabel: "24 April ❤️",
    funMessage: "Correct! You actually remember our story. 🥹❤️",
    wrongMessage: "Hmm... It was 24 April. That's when it all began! 😅",
  },
  {
    id: "q2",
    question: "When did Ani first say \"I love you\"?",
    options: ["24 April", "30 April", "22 May", "10 June"],
    correct: 2,
    correctLabel: "22 May ❤️",
    funMessage: "Yes! 22 May forever. 🥹 You remember!",
    wrongMessage: "22 May! That was quite the moment 😊❤️",
  },
  {
    id: "q3",
    question: "When was our first hug?",
    options: ["22 May", "5 June", "10 June", "11 July"],
    correct: 2,
    correctLabel: "10 June 🤗",
    funMessage: "10 June! One of the best moments ever 🤗❤️",
    wrongMessage: "10 June! Still remember that one like it was yesterday 🤗",
  },
  {
    id: "q4",
    question: "When did Ani say 'I love you' to Pooja in person?",
    options: ["10 June", "11 July", "22 July", "1 August"],
    correct: 1,
    correctLabel: "11 July ❤️",
    funMessage: "11 July! Saying it in person felt completely different. 🥹❤️",
    wrongMessage: "11 July — when those three words felt even more real ❤️",
  },
];

type AnswerState = "correct" | "wrong" | null;

export default function QuizSection() {
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleAnswer = (qId: string, optIndex: number, correctIndex: number) => {
    if (answers[qId]) return; // Already answered
    setSelected((prev) => ({ ...prev, [qId]: optIndex }));
    setAnswers((prev) => ({
      ...prev,
      [qId]: optIndex === correctIndex ? "correct" : "wrong",
    }));
  };

  const score = Object.values(answers).filter((a) => a === "correct").length;
  const allAnswered = Object.keys(answers).length === QUESTIONS.length;

  return (
    <section
      id="quiz"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 z-10 overflow-hidden bg-[#080508]"
    >
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(33,11,23,0.5)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center space-y-3 mb-12 z-20"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif">Just for fun</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-wide glow-text-rose">
          How Well Do You Know Us? 👀
        </h2>
        <p className="text-sm text-slate-400 italic font-sans">A little quiz about our story</p>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#5a1630] to-transparent mx-auto" />
      </motion.div>

      {/* Questions */}
      <div className="w-full max-w-xl space-y-8 z-20">
        {QUESTIONS.map((q, qIdx) => {
          const ans = answers[q.id];
          const sel = selected[q.id];
          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: qIdx * 0.1 }}
              className="rounded-2xl bg-[#100914]/90 backdrop-blur-md border border-[#5a1630]/50 p-5 sm:p-6 space-y-4 shadow-[0_0_25px_rgba(16,9,20,0.8)]"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#d4af37] font-serif text-sm shrink-0 mt-1">{qIdx + 1}.</span>
                <p className="font-serif text-slate-200 text-base sm:text-lg leading-snug">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = sel === optIdx;
                  const isCorrectOption = optIdx === q.correct;
                  let btnClass =
                    "rounded-xl px-3 py-2.5 text-sm font-sans text-left border transition-all duration-300 cursor-pointer ";

                  if (!ans) {
                    btnClass += "bg-[#1c0b17]/80 border-[#5a1630]/50 text-slate-300 hover:border-[#d4af37]/50 hover:text-white";
                  } else if (isCorrectOption) {
                    btnClass += "bg-[#3a1024] border-green-500/70 text-green-300";
                  } else if (isSelected && !isCorrectOption) {
                    btnClass += "bg-[#3a1024] border-red-500/70 text-red-300";
                  } else {
                    btnClass += "bg-[#100914]/50 border-[#5a1630]/30 text-slate-500";
                  }

                  return (
                    <button
                      key={opt}
                      className={btnClass}
                      onClick={() => handleAnswer(q.id, optIdx, q.correct)}
                      disabled={!!ans}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {ans && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-serif ${
                      ans === "correct"
                        ? "bg-green-900/30 border border-green-500/40 text-green-300"
                        : "bg-red-900/20 border border-red-500/30 text-red-300"
                    }`}
                  >
                    {ans === "correct" ? (
                      <CheckCircle className="w-4 h-4 shrink-0 text-green-400" />
                    ) : (
                      <XCircle className="w-4 h-4 shrink-0 text-red-400" />
                    )}
                    <span>{ans === "correct" ? q.funMessage : q.wrongMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Final Score */}
      <AnimatePresence>
        {allAnswered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 text-center p-6 rounded-2xl bg-[#1c0b17]/90 border border-[#d4af37]/50 shadow-[0_0_35px_rgba(212,175,55,0.4)] max-w-sm w-full z-20 space-y-2"
          >
            <Heart className="w-8 h-8 text-[#f472b6] fill-[#f472b6] mx-auto animate-pulse" />
            <p className="font-serif text-[#fef08a] text-xl">
              {score}/{QUESTIONS.length} correct!
            </p>
            <p className="text-slate-300 font-serif italic text-sm">
              {score === QUESTIONS.length
                ? "You know our story perfectly. 🥹❤️"
                : score >= 2
                ? "Not bad — you remember us! ❤️"
                : "Still figuring us out? 😂❤️"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
