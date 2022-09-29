/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Slab", "serif"],
        secondary: ["Montserrat", "sans-serif"],
        main: ["Arimo", "sans-serif"],
      },
      colors: {
        primary: "#FFE14B",
        secondary: "#0DB033",
        back: "#E5E5E5",
      },
      backgroundImage: {
        header: "url('./assets/bg.png')",
        video: "url('./assets/video.jpg')",
      },
      aspectRatio: {
        "4/3": "4/3",
        "5/2": "5/2",
      },
    },
  },
  plugins: [],
};
