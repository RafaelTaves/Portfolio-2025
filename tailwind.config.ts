import type { Config } from "tailwindcss";
import { Poppins, Inter } from "next/font/google";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-blue": "#070f17",
        "dark-grey": "#2C2C2C",
        "light-blue": "#3B82F6",
        "emerald-green": "#34D399",
        "mid-green": "#059669"
      },
    },
  },
  plugins: [],
} satisfies Config;
