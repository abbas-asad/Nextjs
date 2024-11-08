import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': { 'max': '400px' },  // Extra small devices (max width 639px)
      'sm': { 'max': '639px' },   // Small devices (max width 639px)
      'md': { 'max': '767px' },   // Medium devices (max width 767px)
      'cs': { 'max': '920px' },   // Custom sizing (max width 920px)
      'lg': { 'max': '1050px' },  // Large devices (max width 1023px)
      'xl': { 'max': '1279px' },  // Extra large devices (max width 1279px)
      '2xl': { 'max': '1535px' }, // 2X large devices (max width 1535px)
    },
  },
  plugins: [],
};
export default config;
