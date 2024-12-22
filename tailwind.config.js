import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#007BFF",
        light: "#339CFF",
        dark: "#0056B3",
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
