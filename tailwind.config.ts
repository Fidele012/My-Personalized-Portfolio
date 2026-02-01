// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Changing to the "DON AIME" style palette
        primary: "#ffffff", // White background
        secondary: "#1a1a1a", // Almost black text
        accent: "#d4d4d4", // Light gray for subtle details
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // We will set this up in layout
      },
      backgroundImage: {
        "hero-pattern": "none", // Removing the old dark pattern
      },
    },
  },
  plugins: [],
};
export default config;