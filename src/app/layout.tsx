import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ani × Pooja | A Cinematic Romantic Story",
  description: "A cinematic animated love story of Ani & Pooja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${dancing.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#080508] text-slate-100 font-sans selection:bg-[#5a1630] selection:text-white">
        {children}
      </body>
    </html>
  );
}
