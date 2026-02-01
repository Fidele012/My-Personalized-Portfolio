"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/ui/Contact";
import SkyBackground from "@/components/ui/SkyBackground";
import { useRef } from "react";

// --- EXPERIENCE DATA (From your Resume) ---
const experience = [
  {
    role: "Founder & Lead Engineer",
    company: "Holistic CleanFlow",
    period: "May 2024 - Present",
    desc: "Founded a tech-driven initiative serving 200+ users. Designed and deployed a USSD-based digital reporting system bridging the gap between water providers and communities.",
  },
  {
    role: "Team Lead",
    company: "NABU Organization",
    period: "Jan 2025 - May 2025",
    desc: "Led a team of 10 interns, coordinating technical deliverables and optimizing digital literacy platforms. Improved team efficiency through agile performance tracking.",
  },
  {
    role: "Mentor & Technical Instructor",
    company: "The Gym Rwanda",
    period: "June 2025 - Dec 2025",
    desc: "Mentored 50+ students in Full-Stack Development (React, Python, Node.js). Designed curricula and evaluated complex technical projects.",
  },
  {
    role: "Software Engineering Intern",
    company: "NABU",
    period: "5 Months",
    desc: "Enhanced mobile/web apps using React, Angular, and Flutter. Improved UI responsiveness and component architecture.",
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // 3D Parallax Effects
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="relative w-full min-h-screen text-[#1a1a1a] selection:bg-cyan-200 selection:text-black">
      <SkyBackground />
      <Navbar />

      {/* --- 3D HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 perspective-1000">
        <motion.div 
           style={{ y: yHero, opacity: opacityHero }}
           className="text-center z-10"
        >
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] text-gray-500 mb-4"
            >
                Portfolio 2026
            </motion.h2>
            
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-[#1a1a1a] mix-blend-overlay">
                FIDÈLE
            </h1>
            
            {/* The 3D Floating Text Effect */}
            <motion.h1 
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 relative z-20"
            >
                ENGINEER
            </motion.h1>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-20 flex flex-col items-center gap-4"
        >
            <p className="text-gray-600 font-medium text-lg max-w-md text-center">
                I build intelligent systems where <span className="font-bold text-black">Machine Learning</span> meets human-centered design.
            </p>
            <div className="w-[1px] h-20 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- 3D EXPERIENCE TIMELINE --- */}
      <section className="py-32 px-6 md:px-20 relative z-10">
        <div className="mb-20 border-b border-gray-300 pb-10">
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">Experience.</h3>
            <p className="text-xl text-gray-500">My professional journey in tech.</p>
        </div>

        <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl hover:shadow-2xl hover:bg-white transition-all duration-500"
                >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.role}</h4>
                            <p className="text-lg font-medium text-gray-500">{job.company}</p>
                        </div>
                        <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">{job.period}</span>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{job.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- PROJECTS LINK --- */}
      <section className="py-20 flex justify-center">
         <Link href="/projects" className="relative group overflow-hidden bg-[#1a1a1a] text-white px-12 py-6 rounded-full font-bold text-xl uppercase tracking-wider">
            <span className="relative z-10 group-hover:text-cyan-300 transition-colors">Explore My Works</span>
            <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
         </Link>
      </section>

      <Contact />
      
      <footer className="w-full py-12 text-center text-xs font-mono uppercase text-gray-500">
        <p>© 2026 Fidele Ndihokubwayo. All Rights Reserved.</p>
      </footer>
    </main>
  );
}