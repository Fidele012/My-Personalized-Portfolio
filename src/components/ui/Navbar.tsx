"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const resumeLink = "https://docs.google.com/document/d/1tn5G2-X4Oh8hm8LjqRnW77f3rXonNveuQd9zO64KoVo/edit?tab=t.0";

  const links = [
    { name: "Work", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/10 border-b border-white/5">
      {/* --- LOGO --- */}
      <Link href="/" className="flex items-baseline gap-2 group z-50">
        <span className="text-2xl font-black tracking-tighter text-white group-hover:text-cyan-300 transition-colors duration-300">
            Fidele
        </span>
        <span className="text-xl md:text-2xl font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 animate-pulse">
            Ndihokubwayo
        </span>
      </Link>
      
      {/* --- DESKTOP MENU --- */}
      <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-xs md:text-sm">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className="relative group text-white">
              <span className={isActive ? "text-cyan-400" : "text-white hover:text-cyan-300 transition-colors"}>
                {link.name}
              </span>
            </Link>
          );
        })}

        <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">
            Contact
        </a>
        
        {/* --- RESTORED RAINBOW BUTTON (DESKTOP ONLY) --- */}
        <a 
          href={resumeLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-full font-bold text-white overflow-hidden group"
        >
          {/* Rainbow Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] opacity-70 group-hover:opacity-100" />
          {/* Inner Black Bg */}
          <div className="absolute inset-[2px] bg-black rounded-full z-10" />
          {/* Text */}
          <span className="relative z-20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all">
            Resume
          </span>
        </a>
      </div>

      {/* --- MOBILE HAMBURGER ICON --- */}
      <div className="md:hidden z-50 text-black cursor-pointer bg-white/20 p-2 rounded-md backdrop-blur-md" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="black" />}
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-4xl font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <a 
                href="#contact" 
                onClick={toggleMenu}
                className="text-4xl font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
            >
                Contact
            </a>

            {/* Mobile Resume Button (Simple & Visible) */}
            <a 
              href={resumeLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 mt-8 rounded-full font-bold text-black bg-white text-xl"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}