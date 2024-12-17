const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gibson: ["Gibson", "sans-serif"], // Add your custom font
      },
      animation: {
        swirl: "swirls 2s linear infinite",
      },
      keyframes: {
        swirls: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "300" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
