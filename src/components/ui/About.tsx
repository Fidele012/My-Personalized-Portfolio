"use client";
import React from "react";
// @ts-ignore
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";

// 1. Adjusted ServiceCard to be smaller/compact for floating layout
const ServiceCard = ({ index, title, icon, skills }: any) => (
  <Tilt className='w-full'> 
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card'>
      <div
        // @ts-ignore
        options={{ max: 45, scale: 1, speed: 450 }} 
        // Reduced padding (px-4 py-3) and removed min-h-[280px] so they fit on the image
        className='bg-[#1d1836]/90 backdrop-blur-sm rounded-[15px] py-3 px-4 flex flex-col items-center justify-center'
      >
        <div className="flex items-center gap-3">
            <img src={icon} alt={title} className='w-8 h-8 object-contain' />
            <h3 className='text-white text-[14px] font-bold text-center'>{title}</h3>
        </div>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {skills && skills.map((skill: string) => (
             <span key={skill} className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded text-gray-200">
               {skill}
             </span>
          ))}
        </div>

      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#dfd9ff] font-medium lg:text-[21px] sm:text-[18px] xs:text-[16px] text-[14px]">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>
      
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a skilled <b>Software Engineer</b> and <b>Machine Learning Practitioner</b>. As the Founder of <b>Holistic CleanFlow</b>, I combine technical innovation with social entrepreneurship.
      </motion.p>

      {/* --- PROFILE SECTION --- */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        // Added min-h to ensure image container is tall enough for the floating content
        className="mt-12 relative w-full h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-card border border-white/10"
      >
        {/* Profile Image */}
        <img 
            src="/src/assets/your_image.png" 
            alt="Fidele Profile"
            className="w-full h-full object-cover object-center absolute inset-0"
        />
        
        {/* Overlay: Technical Philosophy (Top Right) */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-lg z-10">
             <p className="text-white text-[10px] font-mono text-right leading-tight">
                <span className="text-gray-400 uppercase text-[8px] tracking-widest block mb-0.5">Philosophy</span>
                Innovate. Optimize.
             </p>
        </div>

        {/* --- FLOATING SKILLS SECTION (Moved Inside & Positioned) --- */}
        {/* top-20 puts it right below the philosophy box. right-4 aligns it to the right side. */}
        <div className='absolute top-20 right-4 flex flex-col gap-3 w-[180px] xs:w-[220px] z-20'>
            {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>

        {/* Overlay: Name & Title (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10">
            <h3 className="text-white text-2xl font-bold">Fidèle Ndihokubwayo</h3>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mt-1">
                Software Engineer & Data Scientist
            </p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");