/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [require("daisyui")],
};
