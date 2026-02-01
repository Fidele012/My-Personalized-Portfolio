"use client";
import { motion } from "framer-motion";

export default function SkyBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f0f8ff]">
      {/* Deep Sky Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-white to-white opacity-80" />
      
      {/* Moving 3D Orbs/Clouds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [-100, 100, -100],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 200, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-cyan-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
      />
    </div>
  );
}