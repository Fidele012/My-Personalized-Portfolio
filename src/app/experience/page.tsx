"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/ui/Contact";
import SkyBackground from "@/components/ui/SkyBackground";

// Data extracted strictly from your resumes
const experiences = [
  {
    company: "The Gym Rwanda",
    role: "Mentor & Technical Instructor",
    period: "June 2025 - Dec 2025",
    description: "Mentored 50 young students in software development and computational thinking. Designed and delivered structured training in JavaScript, React, Python, Django, Node.js, and Databases. Prepared curricula, guided projects, and evaluated technical deliverables.",
    skills: ["Mentorship", "Curriculum Design", "Python", "React", "Django"],
    type: "Leadership"
  },
  {
    company: "NABU Organization",
    role: "Team Lead & Software Intern",
    period: "Jan 2025 - May 2025",
    description: "Led a team of 10 interns, coordinating tasks and timelines. Organized agile planning sessions to improve team efficiency. On the technical side, enhanced mobile and web applications using React, Angular, Node.js, and Flutter, significantly improving UI responsiveness and component structure.",
    skills: ["Team Leadership", "Agile", "Flutter", "Angular", "Node.js"],
    type: "Engineering & Leadership"
  },
  {
    company: "Holistic CleanFlow",
    role: "Founder & Lead Engineer",
    period: "May 2024 - Present",
    description: "Founded a technology-driven initiative bridging communication gaps in water service. Designed and deployed a USSD-based digital reporting system currently serving 200+ active users. Coordinated a multidisciplinary team impacting 100+ community members.",
    skills: ["System Architecture", "USSD", "Product Management", "Leadership"],
    type: "Entrepreneurship"
  },
  {
    company: "TheGym Rwanda",
    role: "Front-End Developer Intern",
    period: "8 Months",
    description: "Built and optimized front-end components using React, JavaScript, and HTML/CSS. Improved UI/UX consistency, responsiveness, and site performance while participating in agile workflows, debugging, and code reviews.",
    skills: ["React.js", "Front-End", "UI/UX", "JavaScript"],
    type: "Engineering"
  },
  {
    company: "ZTE",
    role: "Data & Business Operations Intern",
    period: "3 Months",
    description: "Performed large-scale data entry, validation, and analysis using Python, Excel, Tableau, and Power BI. Automated repetitive tasks to improve data processing speed and developed dashboards for executive presentations.",
    skills: ["Data Analysis", "Python", "Tableau", "Power BI", "Automation"],
    type: "Data Science"
  }
];

export default function ExperiencePage() {
  return (
    <main className="w-full min-h-screen text-[#1a1a1a] selection:bg-cyan-200">
      <SkyBackground />
      <Navbar />

      <section className="pt-40 px-6 md:px-12 pb-40 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-32 text-center"
        >
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase text-[#1a1a1a] drop-shadow-2xl">
                Professional <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-pulse">Odyssey.</span>
            </h1>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-24">
            {/* The Central Line */}
            <div className="absolute left-0 md:left-1/2 w-2 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-transparent transform -translate-x-1/2 hidden md:block rounded-full blur-[1px]" />

            {experiences.map((exp, index) => (
                <TimelineItem key={index} data={exp} index={index} />
            ))}
        </div>
      </section>
      
      <Contact />
    </main>
  );
}

// 3D Card Component
function TimelineItem({ data, index }: { data: any, index: number }) {
    const isEven = index % 2 === 0;
    
    return (
        <motion.div 
            // FIXED: Start visible, only animate entry once so they don't disappear
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center w-full perspective-1000 ${isEven ? "md:flex-row-reverse" : ""}`}
        >
            {/* Empty Space */}
            <div className="flex-1 w-full" />

            {/* The Dot */}
            <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10 hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.6)] relative group-hover:scale-125 transition-transform" />

            {/* The Interactive Card */}
            <div className="flex-1 w-full px-0 md:px-12 py-4">
                <motion.div 
                    // HOVER EFFECT: Scales up significantly (1.05) and lifts up (-10px)
                    whileHover={{ scale: 1.05, y: -10, rotateX: 2, rotateY: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-white/70 backdrop-blur-2xl border-2 border-white/50 p-10 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer transform-style-3d"
                >
                    
                    {/* Rainbow Glow on Hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="flex flex-col gap-2 mb-6">
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">{data.company}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                                <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{data.role}</p>
                                <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">
                                    {data.period}
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                            {data.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill: string) => (
                                <span key={skill} className="relative px-4 py-2 bg-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider border border-gray-200 shadow-sm group-hover:border-blue-200 transition-colors">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                                        {skill}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}