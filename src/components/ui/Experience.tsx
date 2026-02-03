"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";

// Generic Icon Component
const DefaultIcon = () => (
  <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded-full">
    <span className="text-black font-bold text-xs">WORK</span>
  </div>
);

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      visible={true} // Forces visibility
      contentStyle={{ background: "#ffffff", color: "#000", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
      contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "#000" }}
      icon={
        experience.icon ? (
          <div className='flex justify-center items-center w-full h-full'>
            <img 
              src={experience.icon} 
              alt={experience.company_name} 
              className='w-[60%] h-[60%] object-contain'
              loading="lazy"   // 👈 Optimization: Loads image only when needed
              decoding="async" // 👈 Optimization: Decodes image in background
            />
          </div>
        ) : <DefaultIcon />
      }
    >
      <div>
        <h3 className='text-black text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-gray-600 text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point: string, index: number) => (
          <li key={`experience-point-${index}`} className='text-gray-700 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="py-10">
      <div className="mb-10 text-center">
        <p className="text-gray-500 font-medium lg:text-[21px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </div>

      <div className='mt-10 flex flex-col'>
        {/* animate={false} is critical for removing sluggishness on phones */}
        <VerticalTimeline lineColor="#e5e7eb" animate={false}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");