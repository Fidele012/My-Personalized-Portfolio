"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/ui/Contact";
import SkyBackground from "@/components/ui/SkyBackground";

export default function AboutPage() {
  const skills = {
    ml: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    web: ["Next.js", "React", "Node.js", "Django", "FastAPI"],
    mobile: ["Flutter", "Dart", "React Native", "Android", "iOS"], // Added Mobile
    tools: ["Docker", "AWS", "Git", "SQL", "Tableau"]
  };

  // Helper component for beautiful, interactive gradient text
  const Highlight = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
    <span className={`font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${colorClass} hover:scale-105 inline-block transition-transform duration-300 cursor-default select-none`}>
      {children}
    </span>
  );

  return (
    <main className="w-full min-h-screen text-[#1a1a1a] selection:bg-cyan-200">
      <SkyBackground />
      <Navbar />

      <section className="pt-40 px-6 md:px-12 pb-20 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="mb-20 text-center md:text-left"
        >
            <h1 className="text-[10vw] md:text-[7vw] leading-[0.9] font-black tracking-tighter uppercase text-[#1a1a1a]">
                The Architect of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Intelligent Systems.</span>
            </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* --- LEFT: PHOTO CARD --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="lg:w-[40%] w-full sticky top-32"
            >
                {/* 3D Card Effect */}
                <div className="relative group w-full h-[60vh] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    {/* Image Area */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center">
                         {/* Fixed Path: Changed backslashes to forward slashes */}
                         <img 
                            src="/images/Portfolio.jpeg" 
                            alt="Fidèle Ndihokubwayo"
                            className="w-full h-full object-cover" 
                         /> 
                    </div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold">Fidèle Ndihokubwayo</h3>
                        <p className="text-cyan-300 font-mono text-sm">Software Engineer & Data Scientist</p>
                    </div>
                </div>
            </motion.div>

            {/* --- RIGHT: NARRATIVE & SKILLS --- */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="lg:w-[60%] flex flex-col gap-12"
            >
                {/* Bio - Updated with Technical Philosophy & Highlighting */}
                <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-lg">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-300 pb-4">Technical Philosophy</h3>
                    
                    <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                        <p>
                            I engineer systems that think, scale, and solve real-world problems. My work operates at the intersection of <Highlight colorClass="from-blue-600 to-indigo-600">Software Engineering</Highlight> and <Highlight colorClass="from-purple-600 to-pink-600">Machine Learning</Highlight>, where I treat complexity not as a hurdle, but as a design requirement.
                        </p>

                        <p>
                            My technical toolkit is vast and vertically integrated. I possess strong proficiency in <Highlight colorClass="from-green-600 to-emerald-500">Languages</Highlight> including Python, JavaScript, TypeScript, Dart, C++, and Java. I leverage powerful <Highlight colorClass="from-cyan-500 to-blue-500">Frameworks</Highlight> such as React, Angular, Node.js, Django, and Flutter to build high-performance web and mobile applications.
                        </p>

                        <p>
                            My expertise is deeply rooted in <Highlight colorClass="from-purple-600 to-violet-600">Advanced Machine Learning</Highlight>. I design and fine-tune complex architectures, ranging from <Highlight colorClass="from-pink-500 to-rose-500">Convolutional Neural Networks (CNNs)</Highlight> and <Highlight colorClass="from-pink-500 to-rose-500">Transformers</Highlight> for computer vision and NLP, to robust ensemble methods like <Highlight colorClass="from-rose-500 to-orange-500">Random Forest</Highlight> and <Highlight colorClass="from-rose-500 to-orange-500">XGBoost</Highlight>. I have practical experience implementing <Highlight colorClass="from-fuchsia-600 to-purple-600">Transfer Learning</Highlight> with state-of-the-art backbones like <Highlight colorClass="from-indigo-500 to-blue-500">ResNet50</Highlight> and <Highlight colorClass="from-indigo-500 to-blue-500">Xception</Highlight>.
                        </p>

                        <p>
                            I move seamlessly from training these Deep Learning models to deploying scalable APIs with <Highlight colorClass="from-amber-500 to-orange-500">FastAPI</Highlight> and <Highlight colorClass="from-amber-500 to-orange-500">Docker</Highlight>. I bring clarity to complexity through clean architecture and relentless execution. Whether optimizing workflows through automation, building predictive engines, or designing responsive mobile interfaces, I focus on solutions that are technically sound, maintainable, and purpose-driven.
                        </p>
                    </div>
                </div>

                {/* Skills Grid - Updated Colors & Layout */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 ml-2">Core Competencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: "Mobile Development", tags: skills.mobile, color: "bg-emerald-50 border-emerald-100" },
                            { title: "AI & Machine Learning", tags: skills.ml, color: "bg-indigo-50 border-indigo-100" },
                            { title: "Web Engineering", tags: skills.web, color: "bg-cyan-50 border-cyan-100" },
                            { title: "DevOps & Tools", tags: skills.tools, color: "bg-amber-50 border-amber-100" },
                        ].map((cat, i) => (
                            <div key={i} className={`${cat.color} p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                <h4 className="font-bold text-lg mb-4 text-gray-800">{cat.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tags.map(tag => (
                                        <span key={tag} className="bg-white px-3 py-1 rounded-md text-xs font-bold text-gray-600 shadow-sm uppercase tracking-wide border border-gray-100">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
      </section>
      
      <Contact />
    </main>
  );
}