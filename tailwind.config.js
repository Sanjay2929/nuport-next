/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1720px",
      },
      backgroundImage: {
        "yellow-linear-gradient":
          "(270deg, rgba(255, 176, 0, 0.2) 0%, rgba(255, 176, 0, 0) 100%)",
        gradient: "url(/assets/images/homepage/brandserve/dark-gradient.png)",
        "steps-heading-gradients":
          "linear-gradient(180.16deg, rgba(24, 135, 159, 0.48) 0.14%, rgba(55, 153, 175, 0) 124.79%)",
      },
      colors: {
        moonstone: "#48A3B8",
        arsenicGray: "#3C4152",
        darkBlue: "#0B1120",
        offWhite: "#F7F8FA",
        tealBlue: "#288EA5",
        darkGray: "#282E42",
        orangeDark: "#FFB000",
        garyMedium: "#8892A8",
        lightWhite: "#F6F6F6",
        lightGray: "#B1B7C7",
        riverBed: "#464D61",
        shark: "#23262E",
        mischka: "#D5D8E0",
        gray: "#6A758F",
        extraLightGray: "#F3F5F7",
        lightTeal: "#141A29", 
      },
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
