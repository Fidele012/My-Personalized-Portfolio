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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/10 border-b border-white/5"
    >
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
            <Link key={link.name} href={link.href} className="relative group">
              <span className={`transition-all duration-300 ${
                isActive 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-pulse" 
                  : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-orange-400"
              }`}>
                {link.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              )}
              {!isActive && (
                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300" />
              )}
            </Link>
          );
        })}

        <a href="#contact" className="relative group text-white hover:text-cyan-300 transition-colors">
            Contact
        </a>
        
        {/* --- DESKTOP RAINBOW BUTTON --- */}
        <a 
          href={resumeLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-full font-bold text-white overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] opacity-70 group-hover:opacity-100" />
          <div className="absolute inset-[2px] bg-black rounded-full z-10" />
          <span className="relative z-20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all">
            Resume
          </span>
        </a>
      </div>

      {/* --- MOBILE HAMBURGER ICON --- */}
      <div className="md:hidden z-50 text-white cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden z-40"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-3xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <a 
                href="#contact" 
                onClick={toggleMenu}
                className="text-3xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors"
            >
                Contact
            </a>

            <a 
              href={resumeLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 mt-4 rounded-full font-bold text-white border border-purple-500 hover:bg-purple-500/20 transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}