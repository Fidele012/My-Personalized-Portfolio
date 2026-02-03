"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. CHECK: Has the user visited recently?
    const hasVisited = typeof window !== "undefined" ? sessionStorage.getItem("portfolio-visited") : null;

    if (hasVisited) {
      // If yes, HIDE INSTANTLY. No waiting.
      setIsVisible(false);
      return;
    }

    // 2. If first time, RUN ANIMATION (Faster Speed)
    // 15ms * 100 = 1.5 seconds (Instead of 5 seconds)
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500); 
          
          // Mark as visited so it doesn't run again on this session
          sessionStorage.setItem("portfolio-visited", "true");
          
          return 100;
        }
        return prev + 1;
      });
    }, 15); // 👈 Set to 15ms for a snappy 1.5-second load time

    return () => clearInterval(timer);
  }, []);

  // Logic for the text phases and DIRECT COLORS
  const getPhase = (n: number) => {
    if (n < 35) return { text: "Ideate", color: "#22c55e" }; // Green
    if (n < 70) return { text: "Design", color: "#eab308" }; // Yellow/Gold
    return { text: "Implement", color: "#3b82f6" };         // Blue
  };

  const phase = getPhase(count);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f5f0] text-[#1a1a1a]"
        >
          {/* Sun Shape Container */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Rotating Rays */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-48 h-48 border-2 border-dashed border-orange-400 rounded-full opacity-40"
            />
            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute w-36 h-36 border-t-2 border-b-2 border-gray-400 rounded-full"
            />
            {/* The Counter */}
            <h1 className="text-7xl md:text-9xl font-black z-10 text-[#1a1a1a]">
              {count}%
            </h1>
          </div>

          {/* Changing Keywords with FORCED COLORS */}
          <motion.div
            key={phase.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase"
            style={{ color: phase.color }} // 👈 Forces the color change
          >
            {phase.text}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}