/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        124: "32rem",
        144: "36rem",
        164: "41rem",
      },
      width: {
        124: "32rem",
        144: "36rem",
        164: "41rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    theme: ["light", "dark"],
    base: false,
  },
};
