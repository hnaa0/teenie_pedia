/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        124: "32rem",
        144: "36rem",
      },
      width: {
        124: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
