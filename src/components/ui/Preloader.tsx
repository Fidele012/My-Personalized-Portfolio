"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // This timer counts down from 100 to 0
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800); // Wait a bit at 0 before vanishing
          return 0;
        }
        return prev - 1;
      });
    }, 20); // Adjust speed here (lower = faster)

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] text-white"
        >
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[15vw] font-black leading-none"
            >
              {count}%
            </motion.h1>
            <p className="text-xl font-mono mt-4 text-gray-400">LOADING EXPERIENCE...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}