"use client";
import React from "react";
// @ts-ignore
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        // @ts-ignore
        options={{ max: 45, scale: 1, speed: 450 }} className='bg-[#1d1836] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
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
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
