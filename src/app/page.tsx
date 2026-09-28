"use client";

import AtmosphericBackground from "@/components/AtmosphericBackground";
import ChapterProgress from "@/components/ChapterProgress";
import MusicToggle from "@/components/MusicToggle";
import IntroScreen from "@/components/IntroScreen";
import Chapter01Beginning from "@/components/Chapter01Beginning";
import Chapter02April from "@/components/Chapter02April";
import Chapter03May from "@/components/Chapter03May";
import Chapter04June from "@/components/Chapter04June";
import Chapter05July from "@/components/Chapter05July";
import FunSection from "@/components/FunSection";
import TimelineSection from "@/components/TimelineSection";
import LoveAboutSection from "@/components/LoveAboutSection";
import QuizSection from "@/components/QuizSection";
import BirthdaySurprise from "@/components/BirthdaySurprise";
import LetterSection from "@/components/LetterSection";
import FinalChapter from "@/components/FinalChapter";
import FinalScreen from "@/components/FinalScreen";

export default function Home() {
  const handleIntroComplete = () => {
    document.getElementById("chapter-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#080508] text-slate-100 selection:bg-[#5a1630] selection:text-white">
      {/* Permanent Cinematic Atmospheric Background */}
      <AtmosphericBackground />

      {/* Floating Audio Soundtrack Toggle */}
      <MusicToggle />

      {/* Chapter Navigation Indicator */}
      <ChapterProgress />

      {/* Continuous Birthday Story */}
      <div className="relative z-10">
        <IntroScreen onEnter={handleIntroComplete} />
        <Chapter01Beginning />
        <Chapter02April />
        <Chapter03May />
        <Chapter04June />
        <Chapter05July />
        <FunSection />
        <TimelineSection />
        <LoveAboutSection />
        <QuizSection />
        <BirthdaySurprise />
        <LetterSection />
        <FinalChapter />
        <FinalScreen />
      </div>
    </main>
  );
}
