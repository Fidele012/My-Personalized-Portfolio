"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({ project, index }: any) {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false); // Controls Read More

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-32 flex flex-col items-center justify-center w-full relative"
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl px-6 mb-4 flex flex-col md:flex-row md:justify-between md:items-end">
        <h2 className="text-[5vw] font-black uppercase text-[#1a1a1a] m-0 leading-[0.9] group-hover:text-purple-600 transition-colors duration-500">
          {project.title}
        </h2>
        <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
            <p className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-widest">{project.category}</p>
            
            {/* Animated Links */}
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.link && (
                    <motion.a 
                        whileHover={{ scale: 1.1, color: "#9333ea" }} // Purple on hover
                        whileTap={{ scale: 0.95 }}
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase border-b-2 border-black pb-1"
                    >
                        View Code ↗
                    </motion.a>
                )}
                {project.live && (
                    <motion.a 
                        whileHover={{ scale: 1.1, color: "#ec4899" }} // Pink on hover
                        whileTap={{ scale: 0.95 }}
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase border-b-2 border-black pb-1"
                    >
                        Live Demo ↗
                    </motion.a>
                )}
            </div>
        </div>
      </div>

      {/* Image Container */}
      <a href={project.live || project.link} target="_blank" rel="noopener noreferrer" className="block w-full max-w-6xl">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-xl">
            {/* Hover Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs uppercase tracking-widest shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    View
                </div>
            </div>
            
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />

            <img
                src={project.src}
                alt={project.title}
                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
            />
        </div>
      </a>
      
      {/* Description & Tech Stack */}
      <div className="w-full max-w-6xl px-2 mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
         <div className="max-w-2xl">
             {/* Read More Logic */}
             <motion.div layout>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    {isExpanded ? project.description : `${project.description.substring(0, 120)}...`}
                </p>
             </motion.div>
             
             <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm font-bold text-purple-600 uppercase tracking-wider hover:underline"
             >
                {isExpanded ? "Read Less" : "Read More"}
             </button>
         </div>

         {/* Tech Stack Tags */}
         <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {project.tech.map((t: string) => (
                <span key={t} className="border border-gray-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 hover:bg-black hover:text-white transition-colors cursor-default">
                    {t}
                </span>
            ))}
         </div>
      </div>
    </motion.div>
  );
}