/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#db4444",
        "color-text":"#000000",
        "color-sm-text":"#808080",
        "hover-btn":"#e07575",
      },
  
    },
  },
  plugins: [],
};
