// src/constants/index.ts
import {
  mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Software Engineer", icon: web },
  { title: "ML Practitioner", icon: mobile },
  { title: "Founder @ CleanFlow", icon: backend },
  { title: "Data Scientist", icon: creator },
];

const technologies = [
  { name: "Python", icon: javascript }, // Placeholder
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Founder & Lead",
    company_name: "Holistic CleanFlow Initiative",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Founded a technology-driven initiative bridging communication gaps between water service providers and communities.",
      "Designed and deployed a USSD-based digital reporting system currently serving 200+ active users.",
      "Coordinated a multidisciplinary team impacting 100+ community members.",
    ],
  },
  {
    title: "Team Lead (Intern)",
    company_name: "NABU Organization",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Led and represented a team of 10 interns, coordinating tasks, timelines, and deliverables.",
      "Enhanced mobile and web applications using React, Angular, Node.js, and Three.js.",
      "Organized weekly planning sessions and performance tracking.",
    ],
  },
  {
    title: "Mentor & Technical Instructor",
    company_name: "The Gym Rwanda",
    icon: tesla,
    iconBg: "#383E56",
    date: "June 2025 - Dec 2025",
    points: [
      "Mentored 50 young students in software development and computational thinking.",
      "Designed and delivered structured training in JavaScript, React, Python, and ML fundamentals.",
    ],
  },
  {
    title: "Data & Business Ops Intern",
    company_name: "ZTE Corporation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "3 Months",
    points: [
      "Performed large-scale data entry, validation, and analysis using Python, Excel, and Power BI.",
      "Automated repetitive tasks, improving data processing accuracy and speed.",
    ],
  },
];

const projects = [
  {
    name: "AI Water Potability",
    description:
      "A machine learning system integrated with a Flutter mobile app and FastAPI backend for real-time water safety assessment.",
    tags: [
      { name: "machine-learning", color: "blue-text-gradient" },
      { name: "flutter", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Fidele012",
  },
  {
    name: "Deepfake Detection",
    description:
      "An Xception-based classifier for detecting deepfakes featuring incremental retraining, Streamlit UI, and Dockerization.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "mlops", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Fidele012",
  },
  {
    name: "Fruit Ripeness Prediction",
    description:
      "A computer vision pipeline using CNNs and transfer learning to classify fruit ripeness and predict shelf-life duration.",
    tags: [
      { name: "cv", color: "blue-text-gradient" },
      { name: "cnn", color: "green-text-gradient" },
      { name: "tensorflow", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Fidele012",
  },
];

export { services, technologies, experiences, projects };