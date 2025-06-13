/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(200px) scale(0.48)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
