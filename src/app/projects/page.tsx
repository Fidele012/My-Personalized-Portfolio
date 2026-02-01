"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Project from "@/components/ui/Project";
import Contact from "@/components/ui/Contact";
import SkyBackground from "@/components/ui/SkyBackground";

const projectsData = [
    {
      title: "Air Quality AI",
      category: "Time-Series Forecasting",
      src: "/images/Air quality.jpg", 
      description: "A precision-engineered forecasting system for Beijing's air quality. I architected and benchmarked 18 distinct LSTM configurations, optimizing for temporal dependencies. The final model achieved a Root Mean Squared Error (RMSE) below 3000, outperforming baseline statistical models by effectively capturing non-linear meteorological interactions.",
      tech: ["TensorFlow", "LSTM", "Python", "Keras"],
      link: "https://github.com/Fidele012/Time-Series-Forecasting-Model-Project.git"
    },
    {
      title: "Deepfake Detector",
      category: "Computer Vision & MLOps",
      src: "/images/flipping-the-deepfake-narrative.avif",
      description: "A production-grade computer vision system designed to safeguard digital identity. I built an end-to-end MLOps pipeline using Xception CNNs achieving high accuracy. The system features a self-healing retraining loop, Dockerized deployment for scalability, and was rigorously stress-tested with Locust to handle high-concurrency production loads.",
      tech: ["Xception CNN", "FastAPI", "Docker", "Streamlit"],
      link: "https://github.com/Fidele012/Summative-assignment---MLOP.git"
    },
    {
      title: "CleanFlow Platform",
      category: "Full Stack Web",
      src: "/images/clean water.jpg",
      description: "A digital lifeline for community water access. I led the full-stack development of a platform that bridges the gap between utilities and 200+ active users. The system digitizes issue reporting and payments, reducing service response times and ensuring transparent resource management through a real-time interactive dashboard.",
      tech: ["React", "Node.js", "Vercel", "Google Maps API"],
      link: "https://github.com/Fidele012/Holistic-CleanFlow-Platform.git",
      live: "https://holisticcleanflow-navy.vercel.app/"
    },
    {
      title: "Smart Fruit AI",
      category: "Agricultural AI",
      src: "/images/Fruits ripeness detection.webp",
      description: "An agricultural intelligence engine designed to reduce post-harvest waste. I engineered a comparative analysis system utilizing Transfer Learning (ResNet50) versus traditional ML (XGBoost). The solution accurately predicts shelf-life degradation, providing actionable insights for inventory optimization in supply chains.",
      tech: ["ResNet50", "Transfer Learning", "XGBoost", "Python"],
      link: "https://github.com/Fidele012/Intelligent-Fruit-Ripeness-Assessment-and-Shelf-Life-Prediction.git"
    },
    {
      title: "Water Potability",
      category: "Predictive Modeling",
      src: "/images/Holistic.jpg",
      description: "A cross-platform safety assessment tool protecting public health. I integrated a Random Forest predictive engine with a Flutter mobile app and FastAPI backend. The system analyzes chemical parameters in real-time to classify water safety, delivering instant, WHO-compliant potability reports to users.",
      tech: ["Random Forest", "Flutter", "FastAPI", "Scikit-Learn"],
      link: "https://github.com/Fidele012/Water_Potability_Prediction-Model-ML-Summative.git",
      live: "https://water-potability-api-7qnr.onrender.com/docs"
    },
    {
      title: "Firebase Notes",
      category: "Mobile Dev",
      src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
      description: "A highly reactive mobile architecture demonstrating state management mastery. I built a note-taking ecosystem featuring real-time Firestore synchronization and a strict Provider pattern. The app achieves 'zero-lag' UI updates and includes robust offline capabilities, ensuring data integrity across devices.",
      tech: ["Flutter", "Firebase Auth", "Firestore", "Provider"],
      link: "https://github.com/Fidele012/Flutter--firebase-database-Application-notes.git"
    },
    {
      title: "Task Master",
      category: "Productivity App",
      src: "/images/Task Management Mobile App Design With Dark Theme.jpeg",
      description: "A productivity accelerator focused on user experience. I designed a mobile solution that prioritizes speed and intuitive interaction. Features include local persistence for offline reliability and a custom-built UI engine that simplifies complex task hierarchies into manageable workflows.",
      tech: ["Flutter", "Dart", "Local Storage", "UX Design"],
      link: "https://github.com/Fidele012/time_tracker-Mobile-Application.git"
    }
];

export default function ProjectsPage() {
  return (
    <main className="w-full bg-[#f5f5f5] min-h-screen text-[#1a1a1a] selection:bg-purple-600 selection:text-white">
      <SkyBackground />
      <Navbar />

      <section className="pt-40 px-4 md:px-10 pb-20">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-24 px-4"
        >
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Selected Works</h3>
            <h1 className="text-6xl md:text-8xl font-black text-[#1a1a1a] leading-none">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Masterpieces.</span>
            </h1>
        </motion.div>

        <div className="flex flex-col items-center">
            {projectsData.map((project, index) => (
                <Project key={index} project={project} index={index} />
            ))}
        </div>
      </section>

      <Contact />
      
      <footer className="w-full py-10 bg-[#1a1a1a] text-white flex justify-between px-10 text-xs font-mono uppercase">
        <p>© 2026 Fidele Ndihokubwayo.</p>
      </footer>
    </main>
  );
}